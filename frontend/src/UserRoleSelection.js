import React, { useState } from 'react';
import './UserRoleSelection.css';

const UserRoleSelection = ({ onComplete, onBack, currentPage, setCurrentPage }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  
  const roles = [
    { id: 'aspiring-entrepreneur', label: 'Aspiring Entrepreneur', icon: '👤' },
    { id: 'startup-founder', label: 'Startup Founder', icon: '🚀' },
    { id: 'angel-investor', label: 'Angel Investor', icon: '💰' },
    { id: 'venture-capitalist', label: 'Venture Capitalist', icon: '💼' },
    { id: 'business-coach', label: 'Business Coach', icon: '🧠' },
    { id: 'marketing-professional', label: 'Marketing Professional', icon: '📊' },
    { id: 'product-manager', label: 'Product Manager', icon: '📱' },
    { id: 'tech-mentor', label: 'Tech Mentor', icon: '👨‍💻' },
    { id: 'software-developer', label: 'Software Developer', icon: '💻' },
    { id: 'researcher', label: 'Researcher', icon: '🔍' },
    { id: 'freelancer', label: 'Freelancer', icon: '✏️' },
    { id: 'student', label: 'Student', icon: '🎓' }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const handleNext = () => {
    if (selectedRole) {
      onComplete(selectedRole);
    }
  };

  return (
    <div className="role-selection-container">
      <div className="header-container-auth-role">
        <div className="logo">YAIIA</div>
        <div className="auth-buttons">
          <button
            className={currentPage === 'login' ? "login-btn active" : "login-btn"}
            onClick={() => setCurrentPage('login')}
          >
            Login
          </button>
          <button
            className={currentPage === 'signup' ? "signup-btn active" : "signup-btn"}
            onClick={() => setCurrentPage('role-selection')}
          >
            Signup
          </button>
        </div>
      </div>

      <div className="role-selection-content">
        <h2 className="role-selection-title">Which describes you the best?</h2>
        
        <div className="roles-grid">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`role-button ${selectedRole === role.id ? 'selected' : ''}`}
              onClick={() => handleRoleSelect(role.id)}
            >
              <span className="role-icon">{role.icon}</span>
              <span className="role-label">{role.label}</span>
            </button>
          ))}
        </div>
        
        <div className="role-selection-actions">
        <button className="back-button" onClick={onBack}>
            Back
          </button>
          
          <button 
            className="next-button" 
            onClick={handleNext}
            disabled={!selectedRole}
          >
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default UserRoleSelection;