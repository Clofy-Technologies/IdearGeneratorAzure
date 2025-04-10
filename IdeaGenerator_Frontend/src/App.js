import React, { useState } from 'react';
import './App.css';
import HeroSection from './HeroSection';
import ExploreTemplates from './ExploreTemplates';
import HowItWorks from './HowItWorks';
import SubscriptionPlans from './SubscriptionPlans';
import AuthPages from './AuthPages';

function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authPage, setAuthPage] = useState('signup'); // 'signup' or 'login'

  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const handleAuthAction = (action) => {
    setAuthPage(action);
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };

  const faqs = [
    {
      question: "How does this AI get better ideas?",
      answer: "Our AI uses advanced machine learning algorithms to analyze trends and generate unique solutions tailored to your specific needs."
    },
    {
      question: "What is AGI?",
      answer: "AGI (Artificial General Intelligence) refers to AI systems that possess human-like cognitive abilities across multiple domains."
    },
    {
      question: "Do AI systems get better ideas?",
      answer: "AI systems excel at generating numerous ideas by connecting diverse data points and patterns that humans might overlook."
    },
    {
      question: "Is GPT-4 eligible for prompting?",
      answer: "Yes, our platform is compatible with GPT-4 for advanced prompting and idea generation capabilities."
    }
  ];

  return (
    <div className="app">
      {showAuth ? (
        <AuthPages initialPage={authPage} onClose={closeAuth} />
      ) : (
        <>
          <HeroSection 
            onLoginClick={() => handleAuthAction('login')} 
            onSignupClick={() => handleAuthAction('signup')}
            onGetStartedClick={() => handleAuthAction('signup')}
          />
          
          <ExploreTemplates />

          <HowItWorks />
          <hr className="section-divider" />

          <SubscriptionPlans onSubscribeClick={() => handleAuthAction('signup')} />
          <hr className="section-divider" />

          <section className="faq-section">
            <button className="faq-btn">FAQ's</button>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.question}
                    <span className="faq-arrow">{expandedFaq === index ? '▲' : '▼'}</span>
                  </div>
                  {expandedFaq === index && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
       

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-column">
                <h4>Site</h4>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li>Features</li>
                  <li>Use Cases</li>
                  <li>Templates</li>
                  <li>API</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Stay Connected</h4>
                <div className="social-icons">
                  <span className="social-icon">📱</span>
                  <span className="social-icon">📞</span>
                  <span className="social-icon">✉️</span>
                </div>
              </div>
            </div>
            <div className="copyright">© 2025 Clofy Technologies. All rights reserved.</div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;