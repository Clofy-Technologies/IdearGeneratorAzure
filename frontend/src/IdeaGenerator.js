// Combined IdeaGenerator.js
import React, { useState, useEffect } from 'react';
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
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState([]);

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

  useEffect(() => {
    fetch('http://localhost:8000/api/industries/')
      .then(res => res.json())
      .then(data => setIndustries(data.industries));

    fetch('http://localhost:8000/api/focus-options/')
      .then(res => res.json())
      .then(data => setFocusOptions(data.focus_options));
  }, []);

  useEffect(() => {
    if (!formData.main_industry) return;

    const fetchCategories = async () => {
      const updatedOptions = {};
      for (const category of steps) {
        try {
          const res = await fetch(`http://localhost:8000/api/industry/${formData.main_industry}/${category}/`);
          const data = await res.json();
          updatedOptions[category] = data[category] || [];
        } catch (err) {
          console.error(`Error fetching ${category}:`, err);
          updatedOptions[category] = [];
        }
      }
      setOptions(updatedOptions);
    };

    fetchCategories();
  }, [formData.main_industry]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'main_industry' ? {
        subdomain: '',
        technologies: '',
        business_model: '',
        target_audience: '',
        market_segment: ''
      } : {})
    }));
  };

  const isFormValid = () => formData.focus && formData.main_industry && formData.technologies;

  const handleGenerateIdeas = (count) => {
    if (!isFormValid()) return;

    setIsGeneratingIdeas(true);

    fetch('http://localhost:8000/api/save_selection/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setGeneratedIdeas(data.ideas || []);
        setCurrentView('results');
        setIsGeneratingIdeas(false);
      });
  };

  const renderFormInputs = () => (
    <div className="form-center-panel">
      <h3>What is your primary focus of your idea?</h3>
      <div className="select-container">
        <select value={formData.focus} onChange={e => handleInputChange('focus', e.target.value)}>
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
            <select value={formData.main_industry} onChange={e => handleInputChange('main_industry', e.target.value)}>
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
            <select value={formData.subdomain} onChange={e => handleInputChange('subdomain', e.target.value)}>
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
            <select value={formData.technologies} onChange={e => handleInputChange('technologies', e.target.value)}>
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
            <select value={formData.business_model} onChange={e => handleInputChange('business_model', e.target.value)}>
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
            <select value={formData.target_audience} onChange={e => handleInputChange('target_audience', e.target.value)}>
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
            <select value={formData.market_segment} onChange={e => handleInputChange('market_segment', e.target.value)}>
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
        <button className={`generate-btn ${!isFormValid() ? 'disabled' : ''}`} onClick={() => handleGenerateIdeas(5)} disabled={!isFormValid() || isGeneratingIdeas}>
          {isGeneratingIdeas ? 'Generating...' : 'Generate 5 Ideas'}
        </button>
        <button className={`generate-btn ${!isFormValid() ? 'disabled' : ''}`} onClick={() => handleGenerateIdeas(10)} disabled={!isFormValid() || isGeneratingIdeas}>
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
      {generatedIdeas.length > 0 ? (
        <div className="idea-details">
          {generatedIdeas.map((idea, index) => (
            <div key={index} className="idea-detail-card">
              <h3>{index + 1}. {idea.title}</h3>
              <p>{idea.description}</p>
              <ul>{idea.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">💡</div>
          <h3>Ready to Generate Ideas</h3>
          <p>Fill out the form and click "Generate Ideas" to get started.</p>
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
