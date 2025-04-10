import React from 'react';
import './SubscriptionPlans.css';

function SubscriptionPlans({ onSubscribeClick }) {
  return (
    <section className="subscription-plans">
      <div className="section-title-container">
        <h2 className="section-title">Subscription Plans</h2>
      </div>
      
      <div className="plans-container">
        <div className="plan-card">
          <div className="plan-label">STUDENT PLAN</div>
          <h3 className="plan-name">Kickstart Your Project Creativity</h3>
          <div className="plan-price">$5</div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <p>AI Project Generator<br />(100 Credits)</p>
          </div>
          
          <button className="subscribe-btn" onClick={onSubscribeClick}>
            Subscribe
          </button>
        </div>
        
        <div className="plan-card popular">
          <div className="plan-label">POPULAR</div>
          <h3 className="plan-name">Your Start up Idea Generator</h3>
          <div className="plan-price">$10</div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <p>300 credits AI Advanced<br />Ideation</p>
          </div>
          
          <button className="subscribe-btn" onClick={onSubscribeClick}>
            Subscribe
          </button>
        </div>
        
        <div className="plan-card">
          <div className="plan-label">PRO</div>
          <h3 className="plan-name">Unlimited Ultimate Creativity</h3>
          <div className="plan-price">$25</div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <p>Unlimited AI Idea Generation<br />for Ultimate Creativity</p>
          </div>
          
          <button className="subscribe-btn" onClick={onSubscribeClick}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionPlans;