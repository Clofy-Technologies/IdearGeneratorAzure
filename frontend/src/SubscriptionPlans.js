import React from 'react';
import { motion } from 'framer-motion';
import './SubscriptionPlans.css';

function SubscriptionPlans({ onSubscribeClick }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      backgroundColor: "#FFE100",
      boxShadow: "0 5px 15px rgba(255, 0, 144, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      backgroundColor: "#FEF600" 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        delay: 0.1
      }
    }
  };

  return (
    <section className="subscription-plans">
      <div 
        className="section-title-container"
      >
        <h2 
          className="section-title"
        >
          Subscription Plans
        </h2>
      </div>
      
      <motion.div 
        className="plans-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="plan-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="plan-label">STUDENT PLAN</div>
          <motion.h3 
            className="plan-name"
            whileHover={{ scale: 1.03 }}
          >
            Kickstart Your Project Creativity
          </motion.h3>
          <motion.div 
            className="plan-price"
            whileHover={{ scale: 1.1, color: "#FF0090", transition: { duration: 0.2 } }}
          >
            $5
          </motion.div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AI Project Generator<br />(100 Credits)
            </motion.p>
          </div>
          
          <motion.button 
            className="subscribe-btn-sub" 
            onClick={onSubscribeClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Subscribe
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="plan-card popular"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="plan-label">POPULAR</div>
          <motion.h3 
            className="plan-name"
            whileHover={{ scale: 1.03 }}
          >
            Your Start up Idea Generator
          </motion.h3>
          <motion.div 
            className="plan-price"
            whileHover={{ scale: 1.1, color: "#FF0090", transition: { duration: 0.2 } }}
          >
            $10
          </motion.div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              300 credits AI Advanced<br />Ideation
            </motion.p>
          </div>
          
          <motion.button 
            className="subscribe-btn-sub" 
            onClick={onSubscribeClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Subscribe
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="plan-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="plan-label">PRO</div>
          <motion.h3 
            className="plan-name"
            whileHover={{ scale: 1.03 }}
          >
            Unlimited Ultimate Creativity
          </motion.h3>
          <motion.div 
            className="plan-price"
            whileHover={{ scale: 1.1, color: "#FF0090", transition: { duration: 0.2 } }}
          >
            $25
          </motion.div>
          <div className="plan-duration">For 1 Month</div>
          
          <div className="plan-features">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Unlimited AI Idea Generation<br />for Ultimate Creativity
            </motion.p>
          </div>
          
          <motion.button 
            className="subscribe-btn-sub" 
            onClick={onSubscribeClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SubscriptionPlans;