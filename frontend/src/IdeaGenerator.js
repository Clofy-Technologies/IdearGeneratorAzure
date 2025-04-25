import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './IdeaGenerator.css';

const steps = [
  'subdomain',
  'technologies',
  'business_model',
  'target_audience',
  'market_segment'
];

const IdeaGenerator = () => {
  const [currentView, setCurrentView] = useState('form');
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [isGeneratingSolution, setIsGeneratingSolution] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    focus: '',
    main_industry: '',
    subdomain: '',
    technologies: '',
    business_model: '',
    target_audience: '',
    market_segment: ''
  });

  const [focusOptions, setFocusOptions] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [options, setOptions] = useState({
    subdomain: [],
    technologies: [],
    business_model: [],
    target_audience: [],
    market_segment: []
  });

  // Fetch initial form options from Django backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [industriesRes, focusRes] = await Promise.all([
          fetch('http://localhost:8000/api/industries/'),
          fetch('http://localhost:8000/api/focus-options/'),
        ]);
        if (!industriesRes.ok || !focusRes.ok) throw new Error('Failed to fetch options');
        
        const industriesData = await industriesRes.json();
        const focusData = await focusRes.json();
        
        setIndustries(industriesData.industries || []);
        setFocusOptions(focusData.focus_options || []);
      } catch (err) {
        console.error('Error fetching initial data:', err);
        alert('Failed to load form options. Please refresh.');
      }
    };
    fetchData();
  }, []);

  // Fetch category options based on main_industry
  useEffect(() => {
    if (!formData.main_industry) return;

    let isCancelled = false;
    const fetchCategories = async () => {
      const updatedOptions = {...options};
      
      for (const category of steps) {
        try {
          const res = await fetch(
            `http://localhost:8000/api/industry/${formData.main_industry}/${category}/`
          );
          if (!res.ok) throw new Error(`Failed to fetch ${category}`);
          const data = await res.json();
          if (isCancelled) return;
          updatedOptions[category] = data[category] || [];
        } catch (err) {
          console.error(`Error fetching ${category}:`, err);
          updatedOptions[category] = [];
        }
      }
      if (!isCancelled) setOptions(updatedOptions);
    };

    fetchCategories();
    return () => {
      isCancelled = true;
    };
  }, [formData.main_industry]);

  // Handle form input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'main_industry'
        ? {
            subdomain: '',
            technologies: '',
            business_model: '',
            target_audience: '',
            market_segment: '',
          }
        : {}),
    }));
  }, []);

  // Validate form
  const isFormValid = useCallback(
    () => formData.focus && formData.main_industry && formData.technologies,
    [formData]
  );

  // Retry logic for API calls
  const retry = async (fn, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (err) {
        if (i === retries - 1) throw err;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  // Generate ideas via Django backend
  const handleGenerateIdeas = async (count) => {
    // Validate form data before proceeding
    if (!formData.focus || !formData.main_industry || !formData.technologies) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsGeneratingIdeas(true);
    setSelectedIdea(null);

    const prompt = `Generate exactly ${count} related problems based on the following inputs. Return only a numbered list (e.g., 1. Problem text) with no explanations or additional text:\n
    - Focus: ${formData.focus}\n
    - Main Industry: ${formData.main_industry}\n
    - Subdomain: ${formData.subdomain || 'N/A'}\n
    - Technologies: ${formData.technologies}\n
    - Business Model: ${formData.business_model || 'N/A'}\n
    - Target Audience: ${formData.target_audience || 'N/A'}\n
    - Market Segment: ${formData.market_segment || 'N/A'}`;
     
    console.log("Payload being sent to API:", {
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates startup problems based on user input.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    try {
      const response = await retry(() =>
        axios.post(
          'http://localhost:8000/api/generate-ideas/',
          {
            messages: [
              {
                role: 'system',
                content: 'You are a helpful assistant that generates startup problems based on user input.',
              },
              { role: 'user', content: prompt },
            ],
            max_tokens: 500,
            temperature: 0.7,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
      );

      const rawText = response.data.choices[0].message.content.trim();
      let ideas = rawText.split(/\n(?=\d+\.\s)/);
      if (ideas.length <= 1) {
        ideas = rawText.split('\n').filter((line) => line.trim());
      }
      ideas = ideas.map((ideaText, index) => ({
        title: `Idea ${index + 1}`,
        description: ideaText.replace(/^\d+\.\s*|-/, '').trim(),
        details: [],
      }));

      if (ideas.length !== count) {
        console.warn(`Expected ${count} ideas, got ${ideas.length}`);
      }

      setGeneratedIdeas(ideas);
      setCurrentView('results');

      await fetch('http://localhost:8000/api/save_selection/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          generated_ideas: ideas.map((i) => i.description).join('\n\n'),
        }),
      });
    } catch (error) {
      console.error('Error generating ideas:', error);
      const message =
        error.response?.status === 429
          ? 'Rate limit exceeded. Please try again later.'
          : error.response?.status === 400
          ? 'Invalid input. Please check your selections.'
          : 'Failed to generate ideas. Please try again.';
      alert(message);
    } finally {
      setIsGeneratingIdeas(false);
    }
  };

  // Generate solution for a selected problem
  const handleGenerateSolution = async (problemText) => {
    setIsGeneratingSolution(true);
    try {
      const prompt = `Provide a detailed startup solution to solve the following problem:\n\n"${problemText}"\n\n
      Solutions Plan Structure:

        1. Solutions Overview
        Provide a concise summary of the solutions, including their alignment with the start-up's mission, target market, and value proposition.
        Highlight how the solutions collectively address the problems and enhance market competitiveness. Limit to a 20-line paragraph.\n

        2. Problem-Solution Mapping
        List each problem and provide a targeted solution, explaining how it resolves the issue effectively and leverages the start-up's strengths.
        Ensure solutions are innovative and practical. Limit to a 20-line paragraph.\n

        3. Market Alignment
        Analyze how the solutions fit within the market size, trends, and target audience needs.
        Discuss how they differentiate the start-up from competitors. Limit to a 20-line paragraph.\n

        4. Implementation Strategy
        Outline the steps to implement the solutions, including timelines, resources, and prioritization.
        Discuss scalability and integration with existing operations. Limit to a 20-line paragraph.\n

        5. Technology Integration
        Specify how the start-up's technologies (frontend, backend, database) will be used to support the solutions.
        Explain how these choices enhance efficiency and competitive advantage. Limit to a 20-line paragraph.\n

        6. Operational Impact
        Detail how the solutions will affect day-to-day operations, including workflows, team responsibilities, and processes.
        Highlight improvements in efficiency or customer experience. Limit to a 20-line paragraph.\n

        7. Marketing and Outreach
        Define how the solutions will be communicated to the target audience, including marketing campaigns and customer engagement tactics.
        Highlight partnerships or channels to amplify reach. Limit to a 20-line paragraph.\n

        8. Team Enablement
        Describe the team roles and expertise needed to execute the solutions.
        Explain how the current team's background supports implementation or if new hires are required. Limit to a 20-line paragraph.\n

        9. Resource Requirements
        Provide a breakdown of resources (e.g., budget, tools, personnel) needed to implement the solutions.
        Include allocation across functions like development, marketing, and operations. Limit to a 20-line paragraph.\n

        10. Financial Implications
        Present the financial impact of the solutions, including costs, potential savings, and return on investment (ROI) over 3-5 years.
        Consider risks and market scenarios. Limit to a 20-line paragraph.\n

        11. Success Metrics
        Define key performance indicators (KPIs) to measure the effectiveness of the solutions.
        Include short-term and long-term objectives. Limit to a 15-line paragraph.\n

        12. Risk Mitigation
        Identify potential challenges in implementing the solutions (e.g., technical issues, market resistance) and propose mitigation strategies.
        Ensure alignment with the start-up's goals. Limit to a 15-line paragraph.\n

        13. Long-Term Vision
        Outline how the solutions contribute to the start-up's long-term growth and sustainability.
        Discuss potential for future innovation or market expansion. Limit to a 10-line paragraph.`;

      const response = await retry(() =>
        axios.post(
          'http://localhost:8000/api/generate-solution/',
          {
            messages: [
              { role: 'system', content: 'You are an AI startup mentor giving detailed startup solutions.' },
              { role: 'user', content: prompt },
            ],
            max_tokens: 3000,
            temperature: 0.7,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
      );

      const solution = response.data.choices[0].message.content.trim();
      setSelectedIdea({ problem: problemText, solution });

      await fetch('http://localhost:8000/api/save_full_idea/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          generated_ideas: generatedIdeas.map((i) => i.description).join('\n\n'),
          selected_problem: problemText,
          solution,
        }),
      });
    } catch (error) {
      console.error('Error generating solution:', error);
      const message =
        error.response?.status === 429
          ? 'Rate limit exceeded. Please try again later.'
          : error.response?.status === 400
          ? 'Invalid input. Please check your selections.'
          : 'Failed to generate a solution. Please try again.';
      alert(message);
    } finally {
      setIsGeneratingSolution(false);
    }
  };

  const renderFormInputs = () => (
    <div className="form-center-panel">
      <h3>What is your primary focus of your idea?</h3>
      <div className="select-container">
        <select 
          value={formData.focus} 
          onChange={e => handleInputChange('focus', e.target.value)}
        >
          <option value="" disabled>Select focus</option>
          {focusOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <h3>Select the Primary Industry</h3>
          <div className="select-container">
            <select 
              value={formData.main_industry} 
              onChange={e => handleInputChange('main_industry', e.target.value)}
            >
              <option value="" disabled>Select industry</option>
              {industries.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>

        <div className="form-group">
          <h3>Select the Sub-Industry</h3>
          <div className="select-container">
            <select 
              value={formData.subdomain} 
              onChange={e => handleInputChange('subdomain', e.target.value)}
            >
              <option value="" disabled>Select sub-industry</option>
              {options.subdomain.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <h3>Select the Technology</h3>
          <div className="select-container">
            <select 
              value={formData.technologies} 
              onChange={e => handleInputChange('technologies', e.target.value)}
            >
              <option value="" disabled>Select technology</option>
              {options.technologies.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>

        <div className="form-group">
          <h3>Select the Business Model</h3>
          <div className="select-container">
            <select 
              value={formData.business_model} 
              onChange={e => handleInputChange('business_model', e.target.value)}
            >
              <option value="" disabled>Select business model</option>
              {options.business_model.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <h3>Select the Target Audience</h3>
          <div className="select-container">
            <select 
              value={formData.target_audience} 
              onChange={e => handleInputChange('target_audience', e.target.value)}
            >
              <option value="" disabled>Select target audience</option>
              {options.target_audience.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>

        <div className="form-group">
          <h3>Select the Market Segment</h3>
          <div className="select-container">
            <select 
              value={formData.market_segment} 
              onChange={e => handleInputChange('market_segment', e.target.value)}
            >
              <option value="" disabled>Select market segment</option>
              {options.market_segment.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>
      </div>

      <div className="generate-buttons">
        <button 
          className={`generate-btn ${!isFormValid() ? 'disabled' : ''}`} 
          onClick={() => handleGenerateIdeas(5)} 
          disabled={!isFormValid() || isGeneratingIdeas}
        >
          {isGeneratingIdeas ? 'Generating...' : 'Generate 5 Ideas'}
        </button>
        <button 
          className={`generate-btn ${!isFormValid() ? 'disabled' : ''}`} 
          onClick={() => handleGenerateIdeas(10)} 
          disabled={!isFormValid() || isGeneratingIdeas}
        >
          {isGeneratingIdeas ? 'Generating...' : 'Generate 10 Ideas'}
        </button>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className="sidebar-panel">
      <div className="sidebar-logo">YAIIA <span className="logo-dot">•</span></div>
      
      <nav className="sidebar-nav">
        <ul className="nav-links-IG">
          <li className="nav-item active">
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">💡</span>
            <span className="nav-text">Generate Ideas</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">⭐</span>
            <span className="nav-text">Saved Ideas</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Account Settings</span>
          </li>
        </ul>
      </nav>
      
      <div className="user-info">
        <div className="user-avatar">👤</div>
        <div className="user-details">
          <div className="user-name">Guest User</div>
          <div className="user-plan">Free Plan</div>
        </div>
      </div>
      
      <div className="pro-upgrade">
        <button className="upgrade-button">
          <span className="upgrade-icon">⚡</span>
          <span>Upgrade to Pro</span>
        </button>
      </div>
    </div>
  );

  const renderIdeasPanel = () => (
    <div className="ideas-panel">
      {generatedIdeas.length > 0 && !selectedIdea ? (
        <div className="idea-details">
          {generatedIdeas.map((idea, index) => (
            <div 
              key={index} 
              className="idea-detail-card clickable" 
              onClick={() => handleGenerateSolution(idea.description)}
            >
              <h3>{index + 1}. {idea.title}</h3>
              <p>{idea.description}</p>
            </div>
          ))}
        </div>
      ) : generatedIdeas.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">💡</div>
          <h3>Ready to Generate Ideas</h3>
          <p>Fill out the form and click "Generate Ideas" to get started.</p>
        </div>
      ) : null}

      {selectedIdea && (
        <div className="solution-container">
          <div className="solution-header">
            <h3>Solution for:</h3>
            <p><strong>{selectedIdea.problem}</strong></p>
            <button 
              className="back-button" 
              onClick={() => setSelectedIdea(null)}
            >
              ← Back to Ideas
            </button>
          </div>
          <div className="solution-card">
            <h4>Suggested Solution:</h4>
            <p>{selectedIdea.solution}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="idea-generator-container">
      <div className="three-panel-layout">
        {renderSidebar()}
        <div className="main-content">
          <div className="content-panels">
            <div className="center-panel">{renderFormInputs()}</div>
            <div className="right-panel">{renderIdeasPanel()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaGenerator;