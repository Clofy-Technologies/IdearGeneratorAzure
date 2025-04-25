import React, { useState } from 'react';
import './UserInputForm.css';

const UserInputForm = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    baseIndustry: null,
    subIndustry: null,
    primaryTechDomains: [],
    businessModel: null,
    targetAudience: null,
    market: null,
    specificProblems: [],
    solutions: [],
    healthcarePlatforms: [],
    mlFrameworks: [],
    nlpTools: [],
    platformType: null,
    webFrontendTech: [],
    webBackendTech: [],
    mobileFrontendTech: [],
    mobileBackendTech: [],
    databases: [],
    hostingPlatforms: [],
    versionControl: null,
    uiuxDesign: null,
    noCodePlatforms: [],
    lowCodePlatforms: [],
    authSecurity: [],
    testingTypes: [],
    pricingModel: null,
    paymentGateways: [],
    apis: [],
    dataCollection: [],
    dataProcessing: [],
    legalCompliance: []
  });
  
  // Step 1: Base Industry options
  const baseIndustries = [
    { id: 'advertising', label: 'Advertising', icon: '📢' },
    { id: 'agriculture', label: 'Agriculture', icon: '🌾' },
    { id: 'aerospace', label: 'Aerospace', icon: '🚀' },
    { id: 'architecture', label: 'Architecture', icon: '🏛️' },
    { id: 'automotive', label: 'Automotive', icon: '🚗' },
    { id: 'banking', label: 'Banking', icon: '🏦' },
    { id: 'biotechnology', label: 'Biotechnology', icon: '🧬' },
    { id: 'construction', label: 'Construction', icon: '🏗️' },
    { id: 'consulting', label: 'Consulting', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'energy', label: 'Energy', icon: '⚡' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
    { id: 'environmental-services', label: 'Environmental Services', icon: '🌍' },
    { id: 'event-management', label: 'Event Management', icon: '🎉' },
    { id: 'fashion', label: 'Fashion', icon: '👗' },
    { id: 'finance', label: 'Finance', icon: '💰' },
    { id: 'fitness', label: 'Fitness', icon: '🏋️' },
    { id: 'food-and-beverage', label: 'Food and Beverage', icon: '🍔' },
    { id: 'forestry', label: 'Forestry', icon: '🌲' },
    { id: 'government', label: 'Government', icon: '🏛️' },
    { id: 'healthcare', label: 'Healthcare', icon: '⚕️' },
    { id: 'human-resources', label: 'Human Resources', icon: '👥' },
    { id: 'insurance', label: 'Insurance', icon: '🛡️' },
    { id: 'legal-services', label: 'Legal Services', icon: '⚖️' },
    { id: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { id: 'media', label: 'Media', icon: '📺' },
    { id: 'mining', label: 'Mining', icon: '⛏️' },
    { id: 'nonprofit', label: 'Nonprofit', icon: '🤝' },
    { id: 'personal-care', label: 'Personal Care', icon: '💅' },
    { id: 'pet-care', label: 'Pet Care', icon: '🐾' },
    { id: 'pharmaceuticals', label: 'Pharmaceuticals', icon: '💊' },
    { id: 'real-estate', label: 'Real Estate', icon: '🏠' },
    { id: 'retail', label: 'Retail', icon: '🛍️' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'space-exploration', label: 'Space Exploration', icon: '🛸' },
    { id: 'sports', label: 'Sports', icon: '🏀' },
    { id: 'technology', label: 'Technology', icon: '💻' },
    { id: 'textile', label: 'Textile', icon: '🧵' },
    { id: 'transportation', label: 'Transportation', icon: '🚚' },
    { id: 'waste-management', label: 'Waste Management', icon: '🗑️' }
  ];
  
  // Step 2: Sub-Industries (dependent on Base Industry)
  const getSubIndustries = () => {
    switch(formData.baseIndustry) {
      case 'agriculture':
        return [
          { id: 'agri-business-services', label: 'Agri-Business Services', icon: '🌾' },
  { id: 'agrochemicals', label: 'Agrochemicals', icon: '🧪' },
  { id: 'agricultural-equipment', label: 'Agricultural Equipment', icon: '🚜' },
  { id: 'agricultural-technology', label: 'Agricultural Technology (AgTech)', icon: '📡' },
  { id: 'animal-husbandry', label: 'Animal Husbandry', icon: '🐄' },
  { id: 'aquaculture', label: 'Aquaculture', icon: '🐟' },
  { id: 'biogas-production', label: 'Biogas Production', icon: '🔥' },
  { id: 'cattle-ranching', label: 'Cattle Ranching', icon: '🐂' },
  { id: 'cereal-grain-farming', label: 'Cereal and Grain Farming', icon: '🌾' },
  { id: 'crop-protection', label: 'Crop Protection', icon: '🛡️' },
  { id: 'crop-production', label: 'Crop Production', icon: '🌱' },
  { id: 'dairy-farming', label: 'Dairy Farming', icon: '🥛' },
  { id: 'farm-management', label: 'Farm Management', icon: '📊' },
  { id: 'farm-to-table', label: 'Farm-to-Table', icon: '🍽️' },
  { id: 'fisheries', label: 'Fisheries', icon: '🎣' },
  { id: 'floriculture', label: 'Floriculture', icon: '🌸' },
  { id: 'food-processing', label: 'Food Processing', icon: '🍲' },
  { id: 'forest-products', label: 'Forest Products', icon: '🌲' },
  { id: 'fruit-farming', label: 'Fruit Farming', icon: '🍎' },
  { id: 'greenhouse-nursery', label: 'Greenhouse and Nursery', icon: '🏡' },
  { id: 'herb-farming', label: 'Herb Farming', icon: '🌿' },
          { id: 'hydroponics', label: 'Hydroponics', icon: '💧' },
  { id: 'indoor-farming', label: 'Indoor Farming', icon: '🏠' },
  { id: 'irrigation-systems', label: 'Irrigation Systems', icon: '🚿' },
  { id: 'livestock-farming', label: 'Livestock Farming', icon: '🐖' },
  { id: 'livestock-feed-production', label: 'Livestock Feed Production', icon: '🌾' },
  { id: 'meat-processing', label: 'Meat Processing', icon: '🍖' },
  { id: 'mushroom-farming', label: 'Mushroom Farming', icon: '🍄' },
  { id: 'nutraceuticals', label: 'Nutraceuticals', icon: '💊' },
  { id: 'organic-farming', label: 'Organic Farming', icon: '🌿' },
  { id: 'poultry-farming', label: 'Poultry Farming', icon: '🐓' },
  { id: 'precision-agriculture', label: 'Precision Agriculture', icon: '🎯' },
  { id: 'seed-production', label: 'Seed Production', icon: '🌱' },
  { id: 'sustainable-agriculture', label: 'Sustainable Agriculture', icon: '🌍' },
  { id: 'soil-fertility-management', label: 'Soil Fertility and Management', icon: '🌱' },
  { id: 'tea-coffee-production', label: 'Tea and Coffee Production', icon: '☕' },
  { id: 'tree-crops-agroforestry', label: 'Tree Crops and Agroforestry', icon: '🌳' },
  { id: 'turf-sod-farming', label: 'Turf and Sod Farming', icon: '🌱' },
  { id: 'vegetable-farming', label: 'Vegetable Farming', icon: '🥕' },
  { id: 'wine-production', label: 'Wine Production', icon: '🍷' }
        ];
      case 'biotechnology':
        return [
          { id: 'lab-workflow', label: 'Lab Workflow', icon: '🧪' },
          { id: 'gene-sequencing', label: 'Gene Sequencing', icon: '🧬' },
          { id: 'drug-discovery', label: 'Drug Discovery', icon: '💊' },
          { id: 'genetic-testing', label: 'Genetic Testing', icon: '🔬' },
          { id: 'bioprocessing', label: 'Bioprocessing', icon: '⚗️' },
          { id: 'cell-culture', label: 'Cell Culture', icon: '🦠' },
          { id: 'regulatory-compliance', label: 'Regulatory Compliance', icon: '📋' },
          { id: 'clinical-trials', label: 'Clinical Trials', icon: '📈' },
          { id: 'sample-handling', label: 'Sample Handling and Storage', icon: '🧫' },
          { id: 'biopharmaceutical', label: 'Biopharmaceutical', icon: '💉' }
        ];
      case 'technology':
        return [
          { id: 'software-development', label: 'Software Development', icon: '💻' },
          { id: 'hardware', label: 'Hardware', icon: '🖥️' },
          { id: 'cloud-computing', label: 'Cloud Computing', icon: '☁️' },
          { id: 'cybersecurity', label: 'Cybersecurity', icon: '🔒' },
          { id: 'artificial-intelligence', label: 'Artificial Intelligence', icon: '🤖' },
          { id: 'data-analytics', label: 'Data Analytics', icon: '📊' },
          { id: 'blockchain', label: 'Blockchain', icon: '🔗' },
          { id: 'iot', label: 'Internet of Things', icon: '📱' }
        ];
      case 'healthcare':
        return [
          { id: 'addiction-treatment-services', label: 'Addiction Treatment Services', icon: '🚑' },
          { id: 'ambulatory-services', label: 'Ambulatory Services', icon: '🏥' },
          { id: 'biomedical-engineering', label: 'Biomedical Engineering', icon: '⚙️' },
          { id: 'biotechnology', label: 'Biotechnology', icon: '🧬' },
          { id: 'clinical-research', label: 'Clinical Research', icon: '🔬' },
          { id: 'dental-care', label: 'Dental Care', icon: '🦷' },
          { id: 'diagnostics-and-laboratory-services', label: 'Diagnostics and Laboratory Services', icon: '🧪' },
          { id: 'emergency-medical-services', label: 'Emergency Medical Services', icon: '🚨' },
          { id: 'healthcare-consulting', label: 'Healthcare Consulting', icon: '💼' },
          { id: 'healthcare-education', label: 'Healthcare Education', icon: '🎓' },
          { id: 'healthcare-facilities-management', label: 'Healthcare Facilities Management', icon: '🏢' },
          { id: 'healthcare-finance', label: 'Healthcare Finance', icon: '💰' },
          { id: 'healthcare-marketing-and-communications', label: 'Healthcare Marketing and Communications', icon: '📢' },
          { id: 'healthcare-staffing-and-recruitment', label: 'Healthcare Staffing and Recruitment', icon: '👥' },
          { id: 'home-healthcare', label: 'Home Healthcare', icon: '🏠' },
          { id: 'hospitals-and-medical-centers', label: 'Hospitals and Medical Centers', icon: '🏥' },
          { id: 'integrative-and-complementary-medicine', label: 'Integrative and Complementary Medicine', icon: '🌿' },
          { id: 'long-term-care-insurance', label: 'Long-Term Care Insurance', icon: '🛡️' },
          { id: 'managed-care-organizations', label: 'Managed Care Organizations', icon: '📋' },
          { id: 'medical-devices', label: 'Medical Devices', icon: '⚕️' },
          { id: 'medical-education-technology', label: 'Medical Education Technology', icon: '📚' },
          { id: 'medical-tourism', label: 'Medical Tourism', icon: '✈️' },
          { id: 'mental-health', label: 'Mental Health', icon: '🧠' },
          { id: 'nursing-and-residential-care', label: 'Nursing and Residential Care', icon: '👵' },
          { id: 'occupational-health', label: 'Occupational Health', icon: '👷' },
          { id: 'oncology-services', label: 'Oncology Services', icon: '🩺' },
          { id: 'pharmaceutical-benefits-management', label: 'Pharmaceutical Benefits Management', icon: '💊' },
          { id: 'pharmaceuticals', label: 'Pharmaceuticals', icon: '💊' },
          { id: 'pharmacy-services', label: 'Pharmacy Services', icon: '💊' },
          { id: 'public-health', label: 'Public Health', icon: '🌍' },
          { id: 'rehabilitation-services', label: 'Rehabilitation Services', icon: '🩹' },
          { id: 'telemedicine-and-telehealth', label: 'Telemedicine and Telehealth', icon: '📱' },
          { id: 'womens-health', label: "Women's Health", icon: '👩' },
          { id: 'alternative-and-complementary-medicine', label: 'Alternative and Complementary Medicine', icon: '🌿' },
          { id: 'health-insurance', label: 'Health Insurance', icon: '🛡️' },
          { id: 'preventive-and-wellness-services', label: 'Preventive and Wellness Services', icon: '💪' },
          { id: 'health-consulting', label: 'Health Consulting', icon: '💼' },
          { id: 'health-finance', label: 'Health Finance', icon: '💰' },
          { id: 'health-care-innovation-entrepreneurship', label: 'Health Care Innovation & Entrepreneurship', icon: '🚀' },
          { id: 'veterinary-healthcare', label: 'Veterinary Healthcare', icon: '🐾' }
        ];
      case 'finance':
        return [
          { id: 'banking', label: 'Banking', icon: '🏦' },
          { id: 'investment', label: 'Investment', icon: '📈' },
          { id: 'insurance', label: 'Insurance', icon: '🛡️' },
          { id: 'cryptocurrency', label: 'Cryptocurrency', icon: '₿' },
          { id: 'payments', label: 'Payments', icon: '💳' },
          { id: 'wealth-management', label: 'Wealth Management', icon: '💰' },
          { id: 'lending', label: 'Lending', icon: '💵' },
          { id: 'personal-finance', label: 'Personal Finance', icon: '💹' }
        ];
      case 'retail':
        return [
          { id: 'e-commerce', label: 'E-commerce', icon: '🛒' },
          { id: 'brick-and-mortar', label: 'Brick and Mortar', icon: '🏪' },
          { id: 'supply-chain', label: 'Supply Chain', icon: '📦' },
          { id: 'inventory-management', label: 'Inventory Management', icon: '📋' },
          { id: 'omnichannel', label: 'Omnichannel', icon: '🔄' },
          { id: 'luxury-retail', label: 'Luxury Retail', icon: '💎' },
          { id: 'fast-fashion', label: 'Fast Fashion', icon: '👕' },
          { id: 'consumer-electronics', label: 'Consumer Electronics', icon: '📱' }
        ];
        case 'banking':
          return [
            { id: 'agricultural-banking', label: 'Agricultural Banking', icon: '🌾' },
            { id: 'alternative-investments', label: 'Alternative Investments', icon: '💼' },
            { id: 'asset-management', label: 'Asset Management', icon: '📈' },
            { id: 'automated-investment-services', label: 'Automated Investment Services (Robo-advisory)', icon: '🤖' },
            { id: 'bancassurance', label: 'Bancassurance', icon: '🏦' },
            { id: 'brokerage-services', label: 'Brokerage Services', icon: '📊' },
            { id: 'capital-markets', label: 'Capital Markets', icon: '📈' },
            { id: 'cash-management-services', label: 'Cash Management Services', icon: '💵' },
            { id: 'central-banking', label: 'Central Banking', icon: '🏦' },
            { id: 'compliance-and-regulatory-affairs', label: 'Compliance and Regulatory Affairs', icon: '📜' },
            { id: 'consumer-banking', label: 'Consumer Banking', icon: '👥' },
            { id: 'correspondent-banking', label: 'Correspondent Banking', icon: '🌍' },
            { id: 'credit-card-services', label: 'Credit Card Services', icon: '💳' },
            { id: 'credit-unions', label: 'Credit Unions', icon: '🏦' },
            { id: 'custodial-services', label: 'Custodial Services', icon: '📦' },
            { id: 'cybersecurity-services', label: 'Cybersecurity Services', icon: '🔒' },
            { id: 'derivatives-trading', label: 'Derivatives Trading', icon: '📈' },
            { id: 'development-banking', label: 'Development Banking', icon: '🌍' },
            { id: 'digital-banking', label: 'Digital Banking', icon: '💻' },
            { id: 'financial-advisory-services', label: 'Financial Advisory Services', icon: '💼' },
            { id: 'fintech-partnerships', label: 'Financial Technology (Fintech) Partnerships', icon: '🤝' },
            { id: 'foreign-exchange-services', label: 'Foreign Exchange (Forex) Services', icon: '💱' },
            { id: 'insurance-banking-related', label: 'Insurance (Banking-Related)', icon: '🛡️' },
            { id: 'investment-banking', label: 'Investment Banking', icon: '📈' },
            { id: 'islamic-banking', label: 'Islamic Banking', icon: '🕌' },
            { id: 'leasing-services', label: 'Leasing Services', icon: '🏢' },
            { id: 'mergers-and-acquisitions-advisory', label: 'Mergers and Acquisitions (M&A) Advisory', icon: '🤝' },
            { id: 'merchant-banking', label: 'Merchant Banking', icon: '🏦' },
            { id: 'microfinance', label: 'Microfinance', icon: '💵' },
            { id: 'mortgage-banking', label: 'Mortgage Banking', icon: '🏠' },
            { id: 'payment-processing', label: 'Payment Processing', icon: '💳' },
            { id: 'private-banking', label: 'Private Banking', icon: '👤' },
            { id: 'retail-banking', label: 'Retail Banking', icon: '🏦' },
            { id: 'risk-management', label: 'Risk Management', icon: '⚖️' },
            { id: 'securities-and-trading', label: 'Securities and Trading', icon: '📈' },
            { id: 'sme-banking', label: 'SME Banking', icon: '🏢' },
            { id: 'syndicated-lending', label: 'Syndicated Lending', icon: '🤝' },
            { id: 'treasury-services', label: 'Treasury Services', icon: '💰' },
            { id: 'trust-services', label: 'Trust Services', icon: '🔒' },
            { id: 'wealth-management', label: 'Wealth Management', icon: '💰' }
        ];
      default:
        return [
          { id: 'general', label: 'General', icon: '🔍' },
          { id: 'specialized', label: 'Specialized', icon: '🎯' },
          { id: 'consumer', label: 'Consumer Facing', icon: '👥' },
          { id: 'business', label: 'Business Facing', icon: '🏢' }
        ];
    }
  };
  
  // Step 3: Niches (dependent on Sub-Industry)
  const getNiches = () => {
    switch(formData.subIndustry) {
      case 'addiction-treatment-services':
        return [
          { id: 'aftercare-planning', label: 'Aftercare Planning', icon: '🗂️' },
          { id: 'behavioral-health-screening', label: 'Behavioral Health Screening and Assessment', icon: '🧠' },
          { id: 'biometric-monitoring', label: 'Biometric Monitoring', icon: '📊' },
          { id: 'case-management', label: 'Case Management', icon: '👥' },
          { id: 'client-communication', label: 'Client Communication', icon: '💬' },
          { id: 'clinical-decision-support', label: 'Clinical Decision Support', icon: '🩺' },
          { id: 'cbt-automation', label: 'Cognitive Behavioral Therapy (CBT) Automation', icon: '🤖' },
          { id: 'community-resource-matching', label: 'Community Resource Matching', icon: '🌍' },
          { id: 'compliance-monitoring', label: 'Compliance Monitoring', icon: '✅' },
          { id: 'contingency-management', label: 'Contingency Management', icon: '🔄' },
          { id: 'crisis-intervention', label: 'Crisis Intervention', icon: '🚨' },
          { id: 'data-analytics-reporting', label: 'Data Analytics and Reporting', icon: '📈' },
          { id: 'detoxification-monitoring', label: 'Detoxification Monitoring', icon: '💧' },
          { id: 'diagnostic-assistance', label: 'Diagnostic Assistance', icon: '🔍' },
          { id: 'digital-therapeutics', label: 'Digital Therapeutics', icon: '💻' },
          { id: 'documentation-automation', label: 'Documentation Automation', icon: '📝' },
          { id: 'e-therapy-telehealth', label: 'E-therapy and Telehealth', icon: '📱' },
          { id: 'family-engagement', label: 'Family Engagement Platforms', icon: '👨‍👩‍👧‍👦' },
          { id: 'gamification-recovery', label: 'Gamification for Recovery', icon: '🎮' },
          { id: 'group-therapy-facilitation', label: 'Group Therapy Facilitation', icon: '👥' },
          { id: 'insurance-verification-billing', label: 'Insurance Verification and Billing', icon: '💳' },
          { id: 'intervention-planning', label: 'Intervention Planning', icon: '🗺️' },
          { id: 'learning-management-systems', label: 'Learning Management Systems', icon: '📚' },
          { id: 'medication-monitoring', label: 'Medication Monitoring', icon: '💊' },
          { id: 'motivational-interviewing', label: 'Motivational Interviewing Assistance', icon: '💪' },
          { id: 'nlp-documentation', label: 'Natural Language Processing for Documentation', icon: '🗣️' },
          { id: 'outcome-prediction', label: 'Outcome Prediction', icon: '🔮' },
          { id: 'patient-progress-tracking', label: 'Patient Progress Tracking', icon: '📊' },
          { id: 'peer-support-matching', label: 'Peer Support Matching', icon: '🤝' },
          { id: 'prevention-education', label: 'Prevention and Education', icon: '📖' },
          { id: 'quality-assurance-automation', label: 'Quality Assurance Automation', icon: '🔍' },
          { id: 'recovery-support', label: 'Recovery Support', icon: '🏆' },
          { id: 'relapse-prevention', label: 'Relapse Prevention', icon: '🚫' },
          { id: 'remote-monitoring', label: 'Remote Monitoring', icon: '📡' },
          { id: 'risk-assessment', label: 'Risk Assessment', icon: '⚠️' },
          { id: 'sentiment-analysis', label: 'Sentiment Analysis', icon: '💭' },
          { id: 'staff-training-development', label: 'Staff Training and Development', icon: '👩‍🏫' },
          { id: 'substance-testing-automation', label: 'Substance Testing Automation', icon: '🧪' },
          { id: 'treatment-matching', label: 'Treatment Matching', icon: '🔗' },
          { id: 'vr-therapy', label: 'Virtual Reality (VR) Therapy', icon: '🕶️' },
          { id: 'withdrawal-management', label: 'Withdrawal Management', icon: '🚑' },
          { id: 'workforce-management', label: 'Workforce Management', icon: '👔' }
        ];
      case 'ambulatory-services':
        return [
          { id: 'appointment-scheduling', label: 'Appointment Scheduling', icon: '📅' },
          { id: 'asset-tracking', label: 'Asset Tracking', icon: '📦' },
          { id: 'bed-management', label: 'Bed Management', icon: '🛏️' },
          { id: 'billing-revenue-cycle-management', label: 'Billing and Revenue Cycle Management', icon: '💰' },
          { id: 'check-in-registration', label: 'Check-in/Registration', icon: '📝' },
          { id: 'clinical-decision-support', label: 'Clinical Decision Support (CDS)', icon: '🩺' },
          { id: 'clinical-documentation', label: 'Clinical Documentation', icon: '📄' },
          { id: 'clinical-trial-matching', label: 'Clinical Trial Matching', icon: '🔬' },
          { id: 'consent-management', label: 'Consent Management', icon: '🖊️' },
          { id: 'diagnostic-image-analysis', label: 'Diagnostic Image Analysis', icon: '🖥️' },
          { id: 'discharge-planning', label: 'Discharge Planning', icon: '🚪' },
          { id: 'ehr-management', label: 'Electronic Health Records (EHR) Management', icon: '📚' },
          { id: 'emergency-protocols', label: 'Emergency Protocols', icon: '🚨' },
          { id: 'financial-counseling', label: 'Financial Counseling', icon: '💼' },
          { id: 'facility-management', label: 'Facility Management', icon: '🏢' },
          { id: 'feedback-survey-analysis', label: 'Feedback and Survey Analysis', icon: '📊' },
          { id: 'fraud-detection', label: 'Fraud Detection', icon: '🕵️‍♂️' },
          { id: 'insurance-verification-billing', label: 'Insurance Verification and Billing', icon: '💳' },
          { id: 'inventory-supply-chain-management', label: 'Inventory and Supply Chain Management', icon: '📦' },
          { id: 'language-translation-services', label: 'Language Translation Services', icon: '🌐' },
          { id: 'lab-order-management', label: 'Lab Order Management', icon: '🧪' },
          { id: 'medical-coding', label: 'Medical Coding', icon: '💻' },
          { id: 'medication-management', label: 'Medication Management', icon: '💊' },
          { id: 'patient-education', label: 'Patient Education', icon: '📚' },
          { id: 'patient-engagement-communication', label: 'Patient Engagement and Communication', icon: '💬' },
          { id: 'patient-flow-management', label: 'Patient Flow Management', icon: '🚶‍♂️' },
          { id: 'patient-monitoring', label: 'Patient Monitoring', icon: '📊' },
          { id: 'patient-risk-stratification', label: 'Patient Risk Stratification', icon: '⚠️' },
          { id: 'patient-self-service-tools', label: 'Patient Self-Service Tools', icon: '🛠️' },
          { id: 'predictive-maintenance', label: 'Predictive Maintenance', icon: '🔧' },
          { id: 'predictive-analytics', label: 'Predictive Analytics for Patient Outcomes', icon: '📈' },
          { id: 'prescription-management', label: 'Prescription Management', icon: '💊' },
          { id: 'quality-assurance', label: 'Quality Assurance', icon: '✅' },
          { id: 'referral-coordination-management', label: 'Referral Coordination and Management', icon: '🔗' },
          { id: 'remote-patient-monitoring', label: 'Remote Patient Monitoring', icon: '📡' },
          { id: 'telemedicine', label: 'Telemedicine', icon: '📱' },
          { id: 'triage-symptom-assessment', label: 'Triage and Symptom Assessment', icon: '🩺' },
          { id: 'workforce-scheduling', label: 'Workforce Scheduling', icon: '🗓️' },
          { id: 'waitlist-management', label: 'Waitlist Management', icon: '⏳' },
          { id: 'lab-results-reporting', label: 'Lab Results Reporting', icon: '🧪' },
          { id: 'inventory-supply-chain', label: 'Inventory and Supply Chain', icon: '📦' },
          { id: 'telemedicine-virtual-consultation', label: 'Telemedicine and Virtual Consultation', icon: '📱' },
          { id: 'post-visit-follow-up-survey', label: 'Post-Visit Follow-Up and Survey', icon: '📋' },
          { id: 'patient-feedback-satisfaction', label: 'Patient Feedback and Satisfaction', icon: '😊' },
          { id: 'compliance-documentation', label: 'Compliance and Documentation', icon: '📜' }
        ];
      case 'biomedical-engineering':
        return [
          { id: '3d-bioprinting', label: '3D Bioprinting', icon: '🖨️' },
          { id: 'adaptive-prosthetics', label: 'Adaptive Prosthetics', icon: '🦾' },
          { id: 'assistive-robotics', label: 'Assistive Robotics', icon: '🤖' },
          { id: 'biomechanics-simulation', label: 'Biomechanics Simulation', icon: '🏃‍♂️' },
          { id: 'bioelectronic-medicine', label: 'Bioelectronic Medicine', icon: '⚡' },
          { id: 'biomechanical-modeling', label: 'Biomechanical Modeling', icon: '📊' },
          { id: 'biocompatible-materials-development', label: 'Biocompatible Materials Development', icon: '🧪' },
          { id: 'biodegradable-implants', label: 'Biodegradable Implants', icon: '🌱' },
          { id: 'cardiac-imaging', label: 'Cardiac Imaging', icon: '🫀' },
          { id: 'clinical-decision-support-systems', label: 'Clinical Decision Support Systems', icon: '🩺' },
          { id: 'clinical-workflow-automation', label: 'Clinical Workflow Automation', icon: '⚙️' },
          { id: 'customized-medical-devices', label: 'Customized Medical Devices', icon: '🛠️' },
          { id: 'diagnostic-imaging-automation', label: 'Diagnostic Imaging Automation', icon: '🖥️' },
          { id: 'digital-therapeutics', label: 'Digital Therapeutics', icon: '💻' },
          { id: 'digital-health-platforms', label: 'Digital Health Platforms', icon: '🌐' },
          { id: 'emg-analysis', label: 'Electromyography (EMG) Analysis', icon: '📈' },
          { id: 'healthcare-data-analytics', label: 'Healthcare Data Analytics', icon: '📊' },
          { id: 'hrv-monitoring', label: 'Heart Rate Variability Monitoring', icon: '❤️' },
          { id: 'implantable-devices-monitoring', label: 'Implantable Devices Monitoring', icon: '🔋' },
          { id: 'lab-on-a-chip-technology', label: 'Lab-on-a-Chip Technology', icon: '🧬' },
          { id: 'medical-device-testing-automation', label: 'Medical Device Testing Automation', icon: '🔬' },
          { id: 'medical-equipment-maintenance', label: 'Medical Equipment Maintenance', icon: '🔧' },
          { id: 'medical-image-analysis', label: 'Medical Image Analysis', icon: '🖥️' },
          { id: 'microfluidics-for-diagnostics', label: 'Microfluidics for Diagnostics', icon: '💧' },
          { id: 'minimally-invasive-surgical-robots', label: 'Minimally Invasive Surgical Robots', icon: '🤖' },
          { id: 'motion-capture-systems', label: 'Motion Capture Systems', icon: '🎥' },
          { id: 'nanomedicine-for-drug-delivery', label: 'Nanomedicine for Drug Delivery', icon: '💊' },
          { id: 'neurostimulation-devices', label: 'Neurostimulation Devices', icon: '🧠' },
          { id: 'non-invasive-monitoring-devices', label: 'Non-invasive Monitoring Devices', icon: '📡' },
          { id: 'patient-monitoring-systems', label: 'Patient Monitoring Systems', icon: '📊' },
          { id: 'personalized-rehabilitation-devices', label: 'Personalized Rehabilitation Devices', icon: '🦾' },
          { id: 'predictive-health-modeling', label: 'Predictive Health Modeling', icon: '🔮' },
          { id: 'robotic-surgery-systems', label: 'Robotic Surgery Systems', icon: '🤖' },
          { id: 'sensor-based-diagnostics', label: 'Sensor-Based Diagnostics', icon: '📡' },
          { id: 'smart-wearables-for-health-monitoring', label: 'Smart Wearables for Health Monitoring', icon: '⌚' },
          { id: 'smart-stents-and-implantable-sensors', label: 'Smart Stents and Implantable Sensors', icon: '🩺' },
          { id: 'telemedicine-platforms', label: 'Telemedicine Platforms', icon: '📱' },
          { id: 'tissue-engineering-and-regeneration', label: 'Tissue Engineering and Regeneration', icon: '🧬' },
          { id: 'wearable-diagnostic-tools', label: 'Wearable Diagnostic Tools', icon: '⌚' },
          { id: 'wireless-health-monitoring-systems', label: 'Wireless Health Monitoring Systems', icon: '📡' }
        ];
      case 'dental-care':
        return [
          { id: 'orthodontics', label: 'Orthodontics', icon: '🦷' },
          { id: 'cosmetic-dentistry', label: 'Cosmetic Dentistry', icon: '💎' },
          { id: 'automated-appointment-scheduling', label: 'Automated Appointment Scheduling', icon: '📅' },
          { id: 'cad-cam-dentistry', label: 'CAD/CAM Dentistry', icon: '🖥️' },
          { id: 'clinical-decision-support-systems', label: 'Clinical Decision Support Systems', icon: '🩺' },
          { id: 'cone-beam-computed-tomography', label: 'Cone Beam Computed Tomography (CBCT)', icon: '🖥️' },
          { id: 'dental-image-analysis', label: 'Dental Image Analysis', icon: '🖼️' },
          { id: 'digital-smile-design', label: 'Digital Smile Design', icon: '😊' },
          { id: 'ehr-for-dentistry', label: 'Electronic Health Records (EHR) for Dentistry', icon: '📚' },
          { id: 'implant-planning-software', label: 'Implant Planning Software', icon: '🦷' },
          { id: 'intraoral-scanners', label: 'Intraoral Scanners', icon: '🔍' },
          { id: 'laser-dentistry', label: 'Laser Dentistry', icon: '🔦' },
          { id: 'personalized-orthodontic-treatment-planning', label: 'Personalized Orthodontic Treatment Planning', icon: '🗺️' },
          { id: 'predictive-analytics-tooth-decay', label: 'Predictive Analytics for Tooth Decay', icon: '🔮' },
          { id: 'preventive-care-reminders', label: 'Preventive Care Reminders', icon: '⏰' },
          { id: 'robotic-surgery-dentistry', label: 'Robotic Surgery in Dentistry', icon: '🤖' },
          { id: 'root-canal-treatment-planning', label: 'Root Canal Treatment Planning', icon: '🦷' },
          { id: 'smart-dental-x-rays', label: 'Smart Dental X-rays', icon: '🖥️' },
          { id: 'smile-simulation-software', label: 'Smile Simulation Software', icon: '😊' },
          { id: 'software-driven-dental-billing', label: 'Software-Driven Dental Billing', icon: '💳' },
          { id: 'tele-dentistry-platforms', label: 'Tele-dentistry Platforms', icon: '📱' },
          { id: 'tooth-whitening-technology', label: 'Tooth Whitening Technology', icon: '✨' },
          { id: 'virtual-consultations', label: 'Virtual Consultations', icon: '🌐' },
          { id: 'wearable-health-devices-oral-care', label: 'Wearable Health Devices for Oral Care', icon: '⌚' },
          { id: '3d-printing-dental-appliances', label: '3D Printing for Dental Appliances', icon: '🖨️' },
          { id: 'dental-health-monitoring-apps', label: 'Dental Health Monitoring Apps', icon: '📱' },
          { id: 'automated-billing-claims-processing', label: 'Automated Billing and Claims Processing', icon: '💳' },
          { id: 'automated-patient-intake-registration', label: 'Automated Patient Intake and Registration', icon: '📝' },
          { id: 'dental-hygiene-management-systems', label: 'Dental Hygiene Management Systems', icon: '🧼' },
          { id: 'endodontic-workflow-automation', label: 'Endodontic Workflow Automation', icon: '⚙️' },
          { id: 'forensic-dentistry-software', label: 'Forensic Dentistry Software', icon: '🕵️‍♂️' },
          { id: 'implant-tracking-systems', label: 'Implant Tracking Systems', icon: '📍' },
          { id: 'laser-based-treatment-monitoring', label: 'Laser-Based Treatment Monitoring', icon: '🔦' },
          { id: 'medication-adherence-dentistry', label: 'Medication Adherence in Dentistry', icon: '💊' },
          { id: 'patient-data-management-systems', label: 'Patient Data Management Systems', icon: '📊' },
          { id: 'periodontal-disease-risk-assessment', label: 'Periodontal Disease Risk Assessment', icon: '⚠️' },
          { id: 'personalized-treatment-plans', label: 'Personalized Treatment Plans', icon: '🗺️' },
          { id: 'predictive-maintenance-dental-equipment', label: 'Predictive Maintenance for Dental Equipment', icon: '🔧' },
          { id: 'remote-dental-diagnostics', label: 'Remote Dental Diagnostics', icon: '📡' },
          { id: 'speech-recognition-dental-records', label: 'Speech Recognition for Dental Records', icon: '🗣️' },
          { id: 'virtual-dental-assistants', label: 'Virtual Dental Assistants', icon: '🤖' },
          { id: 'wearable-oral-health-devices', label: 'Wearable Oral Health Devices', icon: '⌚' }
        ];
      case 'clinical-research':
        return [
          { id: 'clinical-trials', label: 'Clinical Trials', icon: '📈' },
          { id: 'patient-recruitment', label: 'Patient Recruitment', icon: '👥' },
          { id: 'adverse-event-reporting', label: 'Adverse Event Reporting', icon: '🔬' },
          { id: 'automated-data-collection', label: 'Automated Data Collection', icon: '📊' },
          { id: 'biostatistics-data-analysis', label: 'Biostatistics and Data Analysis', icon: '📈' },
          { id: 'clinical-data-management', label: 'Clinical Data Management', icon: '📋' },
          { id: 'clinical-trial-design-optimization', label: 'Clinical Trial Design Optimization', icon: '📝' },
          { id: 'clinical-trial-recruitment', label: 'Clinical Trial Recruitment', icon: '👥' },
          { id: 'clinical-trial-monitoring', label: 'Clinical Trial Monitoring', icon: '🔍' },
          { id: 'clinical-trial-randomization', label: 'Clinical Trial Randomization', icon: '🎲' },
          { id: 'cognitive-behavioral-assessment-tools', label: 'Cognitive and Behavioral Assessment Tools', icon: '🧠' },
          { id: 'compliance-monitoring', label: 'Compliance Monitoring', icon: '✅' },
          { id: 'computerized-patient-reported-outcomes', label: 'Computerized Patient Reported Outcomes (ePRO)', icon: '💻' },
          { id: 'continuous-patient-monitoring', label: 'Continuous Patient Monitoring', icon: '📊' },
          { id: 'data-integrity-validation', label: 'Data Integrity and Validation', icon: '🔒' },
          { id: 'data-integration-platforms', label: 'Data Integration Platforms', icon: '🔗' },
          { id: 'decision-support-systems', label: 'Decision Support Systems for Research', icon: '🧠' },
          { id: 'diagnostic-tool-development', label: 'Diagnostic Tool Development', icon: '🧪' },
          { id: 'disease-progression-modeling', label: 'Disease Progression Modeling', icon: '📈' },
          { id: 'electronic-case-report-forms', label: 'Electronic Case Report Forms (eCRFs)', icon: '📄' },
          { id: 'electronic-consent-management', label: 'Electronic Consent Management', icon: '📝' },
          { id: 'endpoint-prediction-analysis', label: 'Endpoint Prediction and Analysis', icon: '📊' },
          { id: 'genomic-data-analysis', label: 'Genomic Data Analysis', icon: '🧬' },
          { id: 'laboratory-information-management-systems', label: 'Laboratory Information Management Systems (LIMS)', icon: '🔬' },
          { id: 'longitudinal-data-collection', label: 'Longitudinal Data Collection', icon: '📅' },
          { id: 'medical-imaging-in-research', label: 'Medical Imaging in Research', icon: '🖥️' },
          { id: 'mobile-health-data-collection', label: 'Mobile Health Data Collection', icon: '📱' },
          { id: 'monitoring-drug-safety', label: 'Monitoring of Drug Safety', icon: '⚠️' },
          { id: 'patient-stratification-trials', label: 'Patient Stratification for Trials', icon: '👥' },
          { id: 'patient-engagement-platforms', label: 'Patient Engagement Platforms', icon: '💬' },
          { id: 'predictive-modeling-outcomes', label: 'Predictive Modeling for Outcomes', icon: '🔮' },
          { id: 'protocol-development-automation', label: 'Protocol Development and Automation', icon: '⚙️' },
          { id: 'real-time-data-analytics-trials', label: 'Real-time Data Analytics for Trials', icon: '📈' },
          { id: 'remote-clinical-trials-management', label: 'Remote Clinical Trials Management', icon: '🌐' },
          { id: 'remote-patient-monitoring-trials', label: 'Remote Patient Monitoring for Trials', icon: '📡' },
          { id: 'recruitment-enrollment-optimization', label: 'Recruitment and Enrollment Optimization', icon: '📈' },
          { id: 'research-data-visualization', label: 'Research Data Visualization', icon: '📊' },
          { id: 'risk-based-monitoring', label: 'Risk-based Monitoring', icon: '⚠️' },
          { id: 'standardized-data-exchange-protocols', label: 'Standardized Data Exchange Protocols', icon: '🔄' },
          { id: 'statistical-process-control-research', label: 'Statistical Process Control in Research', icon: '📊' },
          { id: 'virtual-clinical-trials', label: 'Virtual Clinical Trials', icon: '🌐' },
          { id: 'workflow-automation-research-processes', label: 'Workflow Automation for Research Processes', icon: '⚙️' }
        ];
      
      case 'diagnostics-and-laboratory-services':
        return [
          { id: 'blood-testing', label: 'Blood Testing', icon: '🩸' },
          { id: 'imaging-services', label: 'Imaging Services', icon: '🖥️' },
          { id: 'automated-blood-analysis', label: 'Automated Blood Analysis', icon: '🔬' },
          { id: 'automated-diagnostic-imaging', label: 'Automated Diagnostic Imaging', icon: '🖥️' },
          { id: 'automated-laboratory-information-management-systems', label: 'Automated Laboratory Information Management Systems (LIMS)', icon: '📋' },
          { id: 'biochemical-pathway-analysis', label: 'Biochemical Pathway Analysis', icon: '🧬' },
          { id: 'bioinformatics-genetic-testing', label: 'Bioinformatics for Genetic Testing', icon: '🧬' },
          { id: 'clinical-trial-biomarker-analysis', label: 'Clinical Trial Biomarker Analysis', icon: '📈' },
          { id: 'digital-pathology', label: 'Digital Pathology', icon: '🖥️' },
          { id: 'dna-sequencing-automation', label: 'DNA Sequencing Automation', icon: '🧬' },
          { id: 'ehr-integration-lab-systems', label: 'EHR Integration with Lab Systems', icon: '📚' },
          { id: 'genetic-data-interpretation', label: 'Genetic Data Interpretation', icon: '🔍' },
          { id: 'high-throughput-screening', label: 'High-Throughput Screening', icon: '📊' },
          { id: 'laboratory-automation-systems', label: 'Laboratory Automation Systems', icon: '⚙️' },
          { id: 'laboratory-workflow-management', label: 'Laboratory Workflow Management', icon: '📋' },
          { id: 'liquid-biopsy-analysis', label: 'Liquid Biopsy Analysis', icon: '🧪' },
          { id: 'microbial-genomic-sequencing', label: 'Microbial Genomic Sequencing', icon: '🦠' },
          { id: 'molecular-diagnostics', label: 'Molecular Diagnostics', icon: '🧬' },
          { id: 'predictive-diagnostics-platforms', label: 'Predictive Diagnostics Platforms', icon: '🔮' },
          { id: 'real-time-pcr-testing-automation', label: 'Real-Time PCR Testing Automation', icon: '🔬' },
          { id: 'remote-laboratory-monitoring', label: 'Remote Laboratory Monitoring', icon: '📡' },
          { id: 'sample-tracking-management', label: 'Sample Tracking and Management', icon: '📦' },
          { id: 'smart-diagnostic-devices', label: 'Smart Diagnostic Devices', icon: '🧪' },
          { id: 'smart-lab-equipment', label: 'Smart Lab Equipment', icon: '🔧' },
          { id: 'speech-recognition-lab-reports', label: 'Speech Recognition for Lab Reports', icon: '🗣️' },
          { id: 'telepathology', label: 'Telepathology', icon: '🌐' },
          { id: 'test-result-interpretation-automation', label: 'Test Result Interpretation Automation', icon: '🔍' },
          { id: 'tissue-sample-automation', label: 'Tissue Sample Automation', icon: '🧪' },
          { id: 'workflow-automation-diagnostics', label: 'Workflow Automation for Diagnostics', icon: '⚙️' },
          { id: 'whole-genome-sequencing-automation', label: 'Whole Genome Sequencing Automation', icon: '🧬' },
          { id: 'wearable-diagnostic-devices', label: 'Wearable Diagnostic Devices', icon: '⌚' },
          { id: 'clinical-decision-support-lab-results', label: 'Clinical Decision Support for Lab Results', icon: '🩺' },
          { id: 'cross-laboratory-data-integration', label: 'Cross-Laboratory Data Integration', icon: '🔗' },
          { id: 'diagnostic-test-optimization', label: 'Diagnostic Test Optimization', icon: '⚙️' },
          { id: 'diagnostic-test-requisition-automation', label: 'Diagnostic Test Requisition Automation', icon: '📝' },
          { id: 'personalized-diagnostic-solutions', label: 'Personalized Diagnostic Solutions', icon: '🧬' },
          { id: 'predictive-risk-assessment-diseases', label: 'Predictive Risk Assessment for Diseases', icon: '🔮' },
          { id: 'remote-diagnostics-rural-areas', label: 'Remote Diagnostics for Rural Areas', icon: '🌄' },
          { id: 'real-time-monitoring-alerts', label: 'Real-Time Monitoring and Alerts', icon: '🔔' },
          { id: 'serum-protein-analysis-automation', label: 'Serum Protein Analysis Automation', icon: '🧪' },
          { id: 'smart-lab-equipment-maintenance', label: 'Smart Lab Equipment Maintenance', icon: '🔧' },
          { id: 'virtual-laboratory-platforms', label: 'Virtual Laboratory Platforms', icon: '🌐' }
        ];
      case 'emergency-medical-services':
        return [
          { id: 'ambulance-services', label: 'Ambulance Services', icon: '🚑' },
          { id: 'emergency-room', label: 'Emergency Room', icon: '🏥' },
          { id: 'automated-ambulance-dispatch', label: 'Automated Ambulance Dispatch', icon: '🚑' },
          { id: 'automated-patient-triage', label: 'Automated Patient Triage', icon: '🩺' },
          { id: 'cardiac-arrest-detection-systems', label: 'Cardiac Arrest Detection Systems', icon: '❤️' },
          { id: 'clinical-decision-support-paramedics', label: 'Clinical Decision Support for Paramedics', icon: '🩺' },
          { id: 'communication-coordination-platforms', label: 'Communication and Coordination Platforms', icon: '📞' },
          { id: 'critical-care-transport-systems', label: 'Critical Care Transport Systems', icon: '🚑' },
          { id: 'data-integration-emergency-response', label: 'Data Integration for Emergency Response', icon: '🔗' },
          { id: 'digital-patient-records-management', label: 'Digital Patient Records Management', icon: '📚' },
          { id: 'emergency-department-patient-flow', label: 'Emergency Department (ED) Patient Flow', icon: '🏥' },
          { id: 'emergency-medical-billing-automation', label: 'Emergency Medical Billing and Coding Automation', icon: '💳' },
          { id: 'emergency-response-route-optimization', label: 'Emergency Response Route Optimization', icon: '🗺️' },
          { id: 'enhanced-gps-navigation-ems', label: 'Enhanced GPS Navigation for EMS', icon: '🧭' },
          { id: 'incident-reporting-documentation-automation', label: 'Incident Reporting and Documentation Automation', icon: '📝' },
          { id: 'integrated-health-information-systems', label: 'Integrated Health Information Systems', icon: '🔗' },
          { id: 'mobile-health-applications-emergency-care', label: 'Mobile Health Applications for Emergency Care', icon: '📱' },
          { id: 'mobile-diagnostic-tools', label: 'Mobile Diagnostic Tools', icon: '🩺' },
          { id: 'mobile-patient-monitoring-systems', label: 'Mobile Patient Monitoring Systems', icon: '📊' },
          { id: 'predictive-analytics-emergency-events', label: 'Predictive Analytics for Emergency Events', icon: '🔮' },
          { id: 'real-time-data-sharing-hospitals', label: 'Real-Time Data Sharing with Hospitals', icon: '🏥' },
          { id: 'real-time-patient-tracking', label: 'Real-Time Patient Tracking', icon: '📍' },
          { id: 'remote-triage-consultation-systems', label: 'Remote Triage and Consultation Systems', icon: '📞' },
          { id: 'resource-allocation-management', label: 'Resource Allocation and Management', icon: '📦' },
          { id: 'smart-medical-equipment-ems', label: 'Smart Medical Equipment for EMS', icon: '🧪' },
          { id: 'telemedicine-integration-emergency-care', label: 'Telemedicine Integration for Emergency Care', icon: '📱' },
          { id: 'trauma-severity-scoring-automation', label: 'Trauma Severity Scoring Automation', icon: '⚖️' },
          { id: 'voice-recognition-ems-documentation', label: 'Voice Recognition for EMS Documentation', icon: '🗣️' },
          { id: 'wearable-health-monitoring-devices-ems', label: 'Wearable Health Monitoring Devices for EMS', icon: '⌚' },
          { id: 'vehicle-diagnostics-ems-fleet', label: 'Vehicle Diagnostics for EMS Fleet', icon: '🚑' },
          { id: 'virtual-ems-training-platforms', label: 'Virtual EMS Training Platforms', icon: '🎓' },
          { id: 'virtual-patient-consultation-transport', label: 'Virtual Patient Consultation during Transport', icon: '🌐' },
          { id: 'automated-medication-dispensing', label: 'Automated Medication Dispensing', icon: '💊' },
          { id: 'automated-patient-consent-management', label: 'Automated Patient Consent Management', icon: '📝' },
          { id: 'automated-incident-documentation', label: 'Automated Incident Documentation', icon: '📝' },
          { id: 'automated-reports-generation-ems', label: 'Automated Reports Generation for EMS', icon: '📊' },
          { id: 'communication-systems-multi-agency-coordination', label: 'Communication Systems for Multi-Agency Coordination', icon: '📞' },
          { id: 'ehr-integration-ems', label: 'Electronic Health Records (EHR) Integration for EMS', icon: '📚' },
          { id: 'real-time-crisis-management-systems', label: 'Real-Time Crisis Management Systems', icon: '🚨' },
          { id: 'predictive-emergency-response-models', label: 'Predictive Emergency Response Models', icon: '🔮' },
          { id: 'smart-ambulance-systems', label: 'Smart Ambulance Systems', icon: '🚑' },
          { id: 'tele-triage-systems', label: 'Tele-Triage Systems', icon: '📞' }
        ];
      case 'healthcare-consulting':
        return [
          { id: 'strategy-consulting', label: 'Strategy Consulting', icon: '💼' },
          { id: 'operational-consulting', label: 'Operational Consulting', icon: '⚙️' },
          { id: 'automated-billing-coding-consulting', label: 'Automated Billing and Coding Consulting', icon: '💳' },
          { id: 'clinical-workflow-optimization', label: 'Clinical Workflow Optimization', icon: '🩺' },
          { id: 'clinical-decision-support-systems', label: 'Clinical Decision Support Systems', icon: '🩺' },
          { id: 'compliance-regulatory-consulting', label: 'Compliance and Regulatory Consulting', icon: '📋' },
          { id: 'cost-reduction-strategies', label: 'Cost-Reduction Strategies', icon: '💰' },
          { id: 'data-integration-interoperability', label: 'Data Integration and Interoperability', icon: '🔗' },
          { id: 'data-security-privacy-consulting', label: 'Data Security and Privacy Consulting', icon: '🔒' },
          { id: 'digital-health-strategy', label: 'Digital Health Strategy', icon: '💻' },
          { id: 'ehr-implementation', label: 'Electronic Health Records (EHR) Implementation', icon: '📚' },
          { id: 'hie-consulting', label: 'Health Information Exchange (HIE) Consulting', icon: '🌐' },
          { id: 'health-system-integration', label: 'Health System Integration', icon: '🔗' },
          { id: 'hospital-readmission-reduction-strategies', label: 'Hospital Readmission Reduction Strategies', icon: '🏥' },
          { id: 'it-infrastructure-healthcare', label: 'IT Infrastructure for Healthcare', icon: '💻' },
          { id: 'medical-device-consulting', label: 'Medical Device Consulting', icon: '🩺' },
          { id: 'mobile-health-strategy', label: 'Mobile Health Strategy', icon: '📱' },
          { id: 'patient-engagement-retention-strategies', label: 'Patient Engagement and Retention Strategies', icon: '👥' },
          { id: 'patient-experience-optimization', label: 'Patient Experience Optimization', icon: '😊' },
          { id: 'predictive-analytics-healthcare-operations', label: 'Predictive Analytics for Healthcare Operations', icon: '🔮' },
          { id: 'process-improvement-healthcare-providers', label: 'Process Improvement for Healthcare Providers', icon: '⚙️' },
          { id: 'revenue-cycle-management-consulting', label: 'Revenue Cycle Management Consulting', icon: '💰' },
          { id: 'risk-management-strategies', label: 'Risk Management Strategies', icon: '⚠️' },
          { id: 'remote-monitoring-implementation', label: 'Remote Monitoring Implementation', icon: '📡' },
          { id: 'resource-allocation-consulting', label: 'Resource Allocation Consulting', icon: '📦' },
          { id: 'smart-healthcare-facility-design', label: 'Smart Healthcare Facility Design', icon: '🏢' },
          { id: 'telemedicine-telehealth-integration', label: 'Telemedicine and Telehealth Integration', icon: '📱' },
          { id: 'treatment-pathway-optimization', label: 'Treatment Pathway Optimization', icon: '🗺️' },
          { id: 'value-based-care-consulting', label: 'Value-Based Care Consulting', icon: '💰' },
          { id: 'virtual-care-solutions-strategy', label: 'Virtual Care Solutions Strategy', icon: '🌐' },
          { id: 'workflow-automation-healthcare-providers', label: 'Workflow Automation for Healthcare Providers', icon: '⚙️' },
          { id: 'clinical-trial-management-consulting', label: 'Clinical Trial Management Consulting', icon: '🔬' },
          { id: 'population-health-management-consulting', label: 'Population Health Management Consulting', icon: '🌍' },
          { id: 'healthcare-data-analytics', label: 'Healthcare Data Analytics', icon: '📊' },
          { id: 'healthcare-supply-chain-optimization', label: 'Healthcare Supply Chain Optimization', icon: '📦' },
          { id: 'insurance-claims-optimization', label: 'Insurance and Claims Optimization', icon: '💳' },
          { id: 'medical-cost-transparency-solutions', label: 'Medical Cost Transparency Solutions', icon: '💰' },
          { id: 'hospital-capacity-planning', label: 'Hospital Capacity Planning', icon: '🏥' },
          { id: 'strategic-healthcare-technology-integration', label: 'Strategic Healthcare Technology Integration', icon: '🔗' },
          { id: 'lean-management-healthcare', label: 'Lean Management in Healthcare', icon: '📉' },
          { id: 'digital-transformation-healthcare', label: 'Digital Transformation in Healthcare', icon: '💻' },
          { id: 'operational-consulting', label: 'Operational Consulting', icon: '⚙️' }
        ];
      case 'healthcare-education':
        return [
          { id: 'medical-training', label: 'Medical Training', icon: '🎓' },
          { id: 'patient-education', label: 'Patient Education', icon: '📚' },
          { id: 'automated-continuing-medical-education', label: 'Automated Continuing Medical Education (CME)', icon: '📖' },
          { id: 'clinical-skills-training-platforms', label: 'Clinical Skills Training Platforms', icon: '🩺' },
          { id: 'digital-simulation-medical-training', label: 'Digital Simulation for Medical Training', icon: '💻' },
          { id: 'e-learning-platforms-healthcare', label: 'E-Learning Platforms for Healthcare Professionals', icon: '🌐' },
          { id: 'ehr-training', label: 'Electronic Health Record (EHR) Training', icon: '📚' },
          { id: 'healthcare-gamification-learning', label: 'Healthcare Gamification for Learning', icon: '🎮' },
          { id: 'interactive-learning-management-systems', label: 'Interactive Learning Management Systems (LMS)', icon: '📊' },
          { id: 'medical-coding-billing-training', label: 'Medical Coding and Billing Training', icon: '💳' },
          { id: 'mobile-learning-healthcare', label: 'Mobile Learning for Healthcare Professionals', icon: '📱' },
          { id: 'online-medical-certification-programs', label: 'Online Medical Certification Programs', icon: '🎓' },
          { id: 'patient-education-platforms', label: 'Patient Education Platforms', icon: '💬' },
          { id: 'personalized-learning-paths', label: 'Personalized Learning Paths for Healthcare Students', icon: '🗺️' },
          { id: 'remote-healthcare-simulation-training', label: 'Remote Healthcare Simulation Training', icon: '📡' },
          { id: 'smart-training-tools-medical-students', label: 'Smart Training Tools for Medical Students', icon: '🛠️' },
          { id: 'telehealth-training-programs', label: 'Telehealth Training Programs', icon: '📱' },
          { id: 'vr-training-surgeons', label: 'Virtual Reality (VR) Training for Surgeons', icon: '🦾' },
          { id: 'voice-recognition-medical-education', label: 'Voice Recognition in Medical Education', icon: '🗣️' },
          { id: 'clinical-decision-making-training', label: 'Clinical Decision Making Training', icon: '🩺' },
          { id: 'medical-research-education-platforms', label: 'Medical Research Education Platforms', icon: '📚' },
          { id: 'real-time-feedback-medical-training', label: 'Real-time Feedback for Medical Training', icon: '🔄' },
          { id: 'healthcare-team-collaboration-tools', label: 'Healthcare Team Collaboration Tools', icon: '🤝' },
          { id: 'adaptive-learning-systems-healthcare', label: 'Adaptive Learning Systems for Healthcare Education', icon: '📈' },
          { id: 'automated-assessment-grading-medical-exams', label: 'Automated Assessment and Grading for Medical Exams', icon: '📝' },
          { id: 'competency-based-medical-education', label: 'Competency-Based Medical Education (CBME) Systems', icon: '📋' },
          { id: 'data-driven-healthcare-training', label: 'Data-Driven Healthcare Training Programs', icon: '📊' },
          { id: 'digital-patient-case-studies', label: 'Digital Patient Case Studies for Medical Students', icon: '📖' },
          { id: 'healthcare-compliance-ethics-training', label: 'Healthcare Compliance and Ethics Training', icon: '⚖️' },
          { id: 'online-platforms-medical-knowledge-sharing', label: 'Online Platforms for Medical Knowledge Sharing', icon: '🌐' },
          { id: 'remote-patient-care-education', label: 'Remote Patient Care Education', icon: '🏠' },
          { id: 'smart-textbooks-resources-medical-education', label: 'Smart Textbooks and Resources for Medical Education', icon: '📚' },
          { id: 'virtual-mentorship-programs-healthcare', label: 'Virtual Mentorship Programs in Healthcare', icon: '👩‍🏫' },
          { id: 'medical-practice-management-training', label: 'Medical Practice Management Training', icon: '🏢' },
          { id: 'predictive-analytics-medical-student-success', label: 'Predictive Analytics for Medical Student Success', icon: '🔮' },
          { id: 'professional-development-healthcare-workers', label: 'Professional Development for Healthcare Workers', icon: '👩‍⚕️' },
          { id: 'simulation-based-healthcare-training', label: 'Simulation-Based Healthcare Training', icon: '🎓' },
          { id: 'social-media-platforms-medical-learning', label: 'Social Media Platforms for Medical Learning', icon: '📱' },
          { id: 'training-healthcare-informatics', label: 'Training for Healthcare Informatics', icon: '💻' },
          { id: 'medical-research-data-analysis-education', label: 'Medical Research Data Analysis Education', icon: '📊' },
          { id: 'continuing-education-healthcare-administrators', label: 'Continuing Education for Healthcare Administrators', icon: '📚' },
          { id: 'interactive-healthcare-workshops-webinars', label: 'Interactive Healthcare Workshops and Webinars', icon: '🎤' }
        ];
      case 'healthcare-facilities-management':
        return [
          { id: 'facility-planning', label: 'Facility Planning', icon: '🏢' },
          { id: 'maintenance-services', label: 'Maintenance Services', icon: '🔧' },
          { id: 'automated-asset-tracking', label: 'Automated Asset Tracking', icon: '📦' },
          { id: 'building-systems-automation', label: 'Building Systems Automation', icon: '🏢' },
          { id: 'clinical-equipment-management', label: 'Clinical Equipment Management', icon: '🛠️' },
          { id: 'communication-systems-staff-coordination', label: 'Communication Systems for Staff Coordination', icon: '📞' },
          { id: 'compliance-management-facilities', label: 'Compliance Management for Healthcare Facilities', icon: '✅' },
          { id: 'cmms', label: 'Computerized Maintenance Management Systems (CMMS)', icon: '🖥️' },
          { id: 'contactless-check-in', label: 'Contactless Check-in for Patients', icon: '🤝' },
          { id: 'energy-management', label: 'Energy Management in Healthcare Facilities', icon: '⚡' },
          { id: 'environmental-services-management', label: 'Environmental Services Management', icon: '🌍' },
          { id: 'facility-layout-optimization', label: 'Facility Layout Optimization', icon: '📐' },
          { id: 'facility-security-systems', label: 'Facility Security Systems', icon: '🔒' },
          { id: 'green-building-management', label: 'Green Building Management', icon: '🌱' },
          { id: 'healthcare-workflow-automation', label: 'Healthcare Workflow Automation', icon: '⚙️' },
          { id: 'hospital-bed-management', label: 'Hospital Bed Management', icon: '🛏️' },
          { id: 'hospital-capacity-management', label: 'Hospital Capacity Management', icon: '🏥' },
          { id: 'hvac-systems-management', label: 'HVAC Systems Management', icon: '❄️' },
          { id: 'inventory-supply-chain-management', label: 'Inventory and Supply Chain Management', icon: '📦' },
          { id: 'maintenance-scheduling-automation', label: 'Maintenance Scheduling Automation', icon: '🗓️' },
          { id: 'mobile-facility-management-tools', label: 'Mobile Facility Management Tools', icon: '📱' },
          { id: 'operational-efficiency-optimization', label: 'Operational Efficiency Optimization', icon: '📈' },
          { id: 'patient-flow-management', label: 'Patient Flow Management', icon: '🚶‍♂️' },
          { id: 'predictive-maintenance-healthcare-equipment', label: 'Predictive Maintenance for Healthcare Equipment', icon: '🔧' },
          { id: 'real-time-location-systems', label: 'Real-Time Location Systems (RTLS)', icon: '📍' },
          { id: 'remote-monitoring-facility-systems', label: 'Remote Monitoring of Facility Systems', icon: '📡' },
          { id: 'resource-allocation-space-management', label: 'Resource Allocation and Space Management', icon: '📊' },
          { id: 'room-assignment-scheduling-automation', label: 'Room Assignment and Scheduling Automation', icon: '🗓️' },
          { id: 'safety-protocols-automation', label: 'Safety Protocols Automation', icon: '⚠️' },
          { id: 'service-request-incident-management', label: 'Service Request and Incident Management', icon: '📝' },
          { id: 'smart-building-systems', label: 'Smart Building Systems for Healthcare', icon: '🏢' },
          { id: 'staff-scheduling-automation', label: 'Staff Scheduling Automation', icon: '🗓️' },
          { id: 'telemedicine-integration-facility-management', label: 'Telemedicine Integration with Facility Management', icon: '📱' },
          { id: 'temperature-humidity-monitoring', label: 'Temperature and Humidity Monitoring', icon: '🌡️' },
          { id: 'utility-monitoring-reporting', label: 'Utility Monitoring and Reporting', icon: '📊' },
          { id: 'vendor-contract-management', label: 'Vendor and Contract Management', icon: '📄' },
          { id: 'waste-management-systems', label: 'Waste Management Systems', icon: '🗑️' },
          { id: 'water-quality-management', label: 'Water Quality Management', icon: '💧' },
          { id: 'workforce-productivity-analytics', label: 'Workforce and Productivity Analytics', icon: '📈' },
          { id: 'work-order-management-systems', label: 'Work Order Management Systems', icon: '📝' },
          { id: 'workplace-health-safety-compliance', label: 'Workplace Health and Safety Compliance', icon: '🦺' },
          { id: 'zoning-space-utilization-optimization', label: 'Zoning and Space Utilization Optimization', icon: '📏' }
        ];
      case 'healthcare-finance':
        return [
          { id: 'healthcare-funding', label: 'Healthcare Funding', icon: '💰' },
          { id: 'financial-advisory', label: 'Financial Advisory', icon: '📊' },
          { id: 'automated-billing-systems', label: 'Automated Billing Systems', icon: '💳' },
          { id: 'claim-management-automation', label: 'Claim Management Automation', icon: '📝' },
          { id: 'cost-optimization-tools', label: 'Cost Optimization Tools', icon: '📉' },
          { id: 'credit-risk-assessment', label: 'Credit Risk Assessment for Healthcare Providers', icon: '⚖️' },
          { id: 'digital-payment-systems', label: 'Digital Payment Systems for Healthcare', icon: '💻' },
          { id: 'eft-management', label: 'Electronic Funds Transfer (EFT) Management', icon: '🏦' },
          { id: 'financial-data-integration', label: 'Financial Data Integration', icon: '🔗' },
          { id: 'financial-forecasting-tools', label: 'Financial Forecasting Tools for Healthcare', icon: '🔮' },
          { id: 'healthcare-financial-analytics', label: 'Healthcare Financial Analytics', icon: '📊' },
          { id: 'insurance-reimbursement-optimization', label: 'Insurance Reimbursement Optimization', icon: '💰' },
          { id: 'medical-billing-compliance-management', label: 'Medical Billing Compliance Management', icon: '✅' },
          { id: 'patient-payment-plans-automation', label: 'Patient Payment Plans Automation', icon: '🗓️' },
          { id: 'payment-collection-systems', label: 'Payment Collection Systems', icon: '💳' },
          { id: 'patient-financial-assistance-platforms', label: 'Patient Financial Assistance Platforms', icon: '🤝' },
          { id: 'revenue-cycle-management-automation', label: 'Revenue Cycle Management Automation', icon: '📈' },
          { id: 'self-pay-collection-solutions', label: 'Self-Pay Collection Solutions', icon: '💵' },
          { id: 'smart-financial-reporting', label: 'Smart Financial Reporting for Healthcare', icon: '📊' },
          { id: 'tax-compliance-automation', label: 'Tax Compliance Automation for Healthcare Organizations', icon: '🧾' },
          { id: 'transaction-processing-systems', label: 'Transaction Processing Systems', icon: '🔄' },
          { id: 'vendor-payment-automation', label: 'Vendor Payment Automation', icon: '🏦' },
          { id: 'virtual-payment-gateways', label: 'Virtual Payment Gateways for Healthcare', icon: '🌐' },
          { id: 'hospital-cost-accounting-systems', label: 'Hospital Cost Accounting Systems', icon: '🏥' },
          { id: 'healthcare-asset-management', label: 'Healthcare Asset Management', icon: '📦' },
          { id: 'capital-investment-analysis', label: 'Capital Investment Analysis in Healthcare', icon: '💰' },
          { id: 'claims-adjudication-payment-processing', label: 'Claims Adjudication and Payment Processing', icon: '📝' },
          { id: 'cost-expense-tracking', label: 'Cost and Expense Tracking for Healthcare', icon: '📊' },
          { id: 'fraud-detection-healthcare-finance', label: 'Fraud Detection in Healthcare Finance', icon: '🕵️‍♂️' },
          { id: 'financial-auditing-tools', label: 'Financial Auditing Tools for Healthcare', icon: '📋' },
          { id: 'financial-risk-management', label: 'Financial Risk Management for Providers', icon: '⚠️' },
          { id: 'forecasting-healthcare-revenue', label: 'Forecasting Healthcare Revenue', icon: '🔮' },
          { id: 'provider-contract-management', label: 'Healthcare Provider Contract Management', icon: '📄' },
          { id: 'vendor-management', label: 'Healthcare Vendor Management', icon: '🤝' },
          { id: 'insurance-eligibility-verification-automation', label: 'Insurance Eligibility Verification Automation', icon: '✅' },
          { id: 'loan-financing-solutions', label: 'Loan and Financing Solutions for Healthcare Providers', icon: '💵' },
          { id: 'management-healthcare-budgets', label: 'Management of Healthcare Budgets', icon: '📊' },
          { id: 'payment-remittance-automation', label: 'Payment Remittance Automation', icon: '💳' },
          { id: 'payment-reconciliation-systems', label: 'Payment Reconciliation Systems', icon: '🔄' },
          { id: 'profitability-analysis', label: 'Profitability Analysis for Healthcare Practices', icon: '📈' },
          { id: 'financial-performance-benchmarking', label: 'Financial Performance Benchmarking', icon: '📊' },
          { id: 'tax-filing-reporting', label: 'Tax Filing and Reporting for Healthcare Organizations', icon: '🧾' }
        ];
        case 'healthcare-marketing-and-communications':
          return [
            { id: 'digital-marketing', label: 'Digital Marketing', icon: '📢' },
            { id: 'patient-engagement', label: 'Patient Engagement', icon: '👥' },
            { id: 'automated-content-creation', label: 'Automated Content Creation', icon: '📝' },
            { id: 'behavioral-targeting', label: 'Behavioral Targeting for Healthcare Ads', icon: '🎯' },
            { id: 'brand-reputation-management', label: 'Brand Reputation Management', icon: '🌟' },
            { id: 'campaign-performance-analytics', label: 'Campaign Performance Analytics', icon: '📊' },
            { id: 'chatbots-patient-inquiries', label: 'Chatbots for Patient Inquiries', icon: '🤖' },
            { id: 'community-engagement-platforms', label: 'Community Engagement Platforms', icon: '🌍' },
            { id: 'contactless-appointment-scheduling', label: 'Contactless Appointment Scheduling', icon: '📅' },
            { id: 'content-personalization', label: 'Content Personalization for Patients', icon: '🎨' },
            { id: 'crm-healthcare', label: 'Customer Relationship Management (CRM) for Healthcare', icon: '📇' },
            { id: 'data-driven-marketing-strategies', label: 'Data-Driven Marketing Strategies', icon: '📈' },
            { id: 'digital-advertising', label: 'Digital Advertising for Healthcare Services', icon: '💻' },
            { id: 'email-marketing-automation', label: 'Email Marketing Automation', icon: '📧' },
            { id: 'event-management-promotion', label: 'Event Management and Promotion for Healthcare', icon: '🎉' },
            { id: 'geographic-targeting', label: 'Geographic Targeting for Healthcare Marketing', icon: '🗺️' },
            { id: 'healthcare-brand-monitoring', label: 'Healthcare Brand Monitoring', icon: '🔍' },
            { id: 'consumer-behavior-analysis', label: 'Healthcare Consumer Behavior Analysis', icon: '📊' },
            { id: 'influencer-marketing', label: 'Healthcare Influencer Marketing', icon: '🌟' },
            { id: 'market-research-automation', label: 'Healthcare Market Research Automation', icon: '📋' },
            { id: 'newsletters-patient-updates', label: 'Healthcare Newsletters and Patient Updates', icon: '📰' },
            { id: 'healthcare-seo', label: 'Healthcare SEO (Search Engine Optimization)', icon: '🔍' },
            { id: 'interactive-education-content', label: 'Interactive Patient Education Content', icon: '📚' },
            { id: 'loyalty-retention-programs', label: 'Loyalty and Retention Programs for Healthcare', icon: '🏆' },
            { id: 'media-buying-campaign-automation', label: 'Media Buying and Campaign Automation', icon: '📢' },
            { id: 'mobile-health-app-marketing', label: 'Mobile Health App Marketing', icon: '📱' },
            { id: 'online-reputation-management', label: 'Online Reputation Management for Healthcare Providers', icon: '🌐' },
            { id: 'review-aggregation-management', label: 'Online Review Aggregation and Management', icon: '🗣️' },
            { id: 'patient-acquisition-retention', label: 'Patient Acquisition and Retention Strategies', icon: '👥' },
            { id: 'feedback-collection-analysis', label: 'Patient Feedback Collection and Analysis', icon: '📊' },
            { id: 'patient-referral-programs', label: 'Patient Referral Programs', icon: '🔗' },
            { id: 'predictive-analytics-marketing', label: 'Predictive Analytics for Marketing Campaigns', icon: '🔮' },
            { id: 'public-relations-automation', label: 'Public Relations Automation in Healthcare', icon: '📢' },
            { id: 'social-media-content-scheduling', label: 'Social Media Content Scheduling', icon: '📅' },
            { id: 'social-media-monitoring', label: 'Social Media Monitoring and Sentiment Analysis', icon: '📊' },
            { id: 'targeted-healthcare-campaigns', label: 'Targeted Healthcare Campaigns', icon: '🎯' },
            { id: 'telemedicine-promotion', label: 'Telemedicine Promotion Strategies', icon: '📱' },
            { id: 'text-message-campaign-automation', label: 'Text Message Campaign Automation', icon: '📱' },
            { id: 'video-marketing', label: 'Video Marketing for Healthcare Providers', icon: '🎥' },
            { id: 'virtual-consultation-promotions', label: 'Virtual Consultation Promotions', icon: '🌐' },
            { id: 'website-personalization', label: 'Website Personalization for Healthcare Users', icon: '🌐' },
            { id: 'website-traffic-analytics', label: 'Website Traffic Analytics for Healthcare', icon: '📊' }
          ];
          case 'healthcare-staffing-and-recruitment':
            return [
              { id: 'nurse-recruitment', label: 'Nurse Recruitment', icon: '👩‍⚕️' },
              { id: 'physician-recruitment', label: 'Physician Recruitment', icon: '👨‍⚕️' },
              { id: 'applicant-tracking-systems', label: 'Applicant Tracking Systems', icon: '📋' },
              { id: 'automated-credentialing-systems', label: 'Automated Credentialing Systems', icon: '✅' },
              { id: 'candidate-screening-matching', label: 'Candidate Screening and Matching', icon: '🔍' },
              { id: 'clinical-staffing-solutions', label: 'Clinical Staffing Solutions', icon: '🏥' },
              { id: 'digital-onboarding-processes', label: 'Digital Onboarding Processes', icon: '🖥️' },
              { id: 'employee-scheduling-optimization', label: 'Employee Scheduling Optimization', icon: '🗓️' },
              { id: 'job-board-integration', label: 'Healthcare Job Board Integration', icon: '🌐' },
              { id: 'talent-pool-management', label: 'Healthcare Talent Pool Management', icon: '👥' },
              { id: 'interview-scheduling-automation', label: 'Interview Scheduling Automation', icon: '📅' },
              { id: 'candidate-assessment-tools', label: 'Job Candidate Assessment Tools', icon: '📝' },
              { id: 'license-verification-automation', label: 'License Verification Automation', icon: '🛂' },
              { id: 'nurse-staffing-optimization', label: 'Nurse Staffing Optimization', icon: '👩‍⚕️' },
              { id: 'online-skill-testing', label: 'Online Skill Testing for Healthcare Professionals', icon: '🧠' },
              { id: 'payroll-compensation-management', label: 'Payroll and Compensation Management', icon: '💰' },
              { id: 'performance-tracking-reviews', label: 'Performance Tracking and Reviews', icon: '📊' },
              { id: 'recruitment-analytics-reporting', label: 'Recruitment Analytics and Reporting', icon: '📈' },
              { id: 'recruitment-marketing-platforms', label: 'Recruitment Marketing Platforms', icon: '📢' },
              { id: 'remote-workforce-recruitment', label: 'Remote Workforce Recruitment', icon: '🌍' },
              { id: 'retention-engagement-strategies', label: 'Retention and Engagement Strategies', icon: '🤝' },
              { id: 'resume-parsing-sorting', label: 'Resume Parsing and Sorting', icon: '📄' },
              { id: 'shift-management-automation', label: 'Shift Management Automation', icon: '🔄' },
              { id: 'staff-compliance-management', label: 'Staff Compliance Management', icon: '✅' },
              { id: 'talent-acquisition-chatbots', label: 'Talent Acquisition Chatbots', icon: '🤖' },
              { id: 'telemedicine-staffing-solutions', label: 'Telemedicine Staffing Solutions', icon: '📱' },
              { id: 'temporary-healthcare-staffing', label: 'Temporary Healthcare Staffing', icon: '⏳' },
              { id: 'workforce-capacity-planning', label: 'Workforce Capacity Planning', icon: '📊' },
              { id: 'diversity-inclusion-tracking', label: 'Workforce Diversity and Inclusion Tracking', icon: '🌈' },
              { id: 'workforce-forecasting', label: 'Workforce Forecasting and Demand Planning', icon: '🔮' },
              { id: 'training-development-automation', label: 'Workforce Training and Development Automation', icon: '📚' },
              { id: 'satisfaction-feedback-tools', label: 'Workforce Satisfaction and Feedback Tools', icon: '😊' },
              { id: 'work-hour-overtime-management', label: 'Work Hour and Overtime Management', icon: '🕒' },
              { id: 'social-recruiting-platforms', label: 'Social Recruiting Platforms for Healthcare', icon: '📱' },
              { id: 'staff-benefit-administration', label: 'Staff Benefit Administration', icon: '💼' },
              { id: 'temporary-contract-recruitment', label: 'Temporary and Contract Healthcare Recruitment', icon: '📝' },
              { id: 'telehealth-recruitment-strategies', label: 'Telehealth Recruitment Strategies', icon: '📱' },
              { id: 'vendor-agency-management', label: 'Vendor and Agency Management', icon: '🤝' },
              { id: 'workforce-data-integration', label: 'Workforce Data Integration', icon: '🔗' },
              { id: 'performance-metrics', label: 'Workforce Performance Metrics', icon: '📊' },
              { id: 'mobility-relocation-solutions', label: 'Staff Mobility and Relocation Solutions', icon: '🚚' },
              { id: 'video-interviewing-platforms', label: 'Video Interviewing Platforms', icon: '🎥' }
            ];
            case 'home-healthcare':
        return [
          { id: 'in-home-care', label: 'In-Home Care', icon: '🏠' },
          { id: 'telehealth-services', label: 'Telehealth Services', icon: '📱' },
          { id: 'automated-care-plan-development', label: 'Automated Care Plan Development', icon: '📝' },
          { id: 'automated-medication-reminders', label: 'Automated Medication Reminders', icon: '⏰' },
          { id: 'caregiver-scheduling-software', label: 'Caregiver Scheduling Software', icon: '📅' },
          { id: 'chronic-disease-management-platforms', label: 'Chronic Disease Management Platforms', icon: '💊' },
          { id: 'clinical-data-integration', label: 'Clinical Data Integration for Home Care', icon: '🔗' },
          { id: 'communication-tools', label: 'Communication Tools for Caregiver Coordination', icon: '📞' },
          { id: 'digital-patient-monitoring', label: 'Digital Patient Monitoring Systems', icon: '📊' },
          { id: 'ehr-home-care', label: 'Electronic Health Records (EHR) for Home Care', icon: '📚' },
          { id: 'evv', label: 'Electronic Visit Verification (EVV)', icon: '✅' },
          { id: 'health-risk-assessment-tools', label: 'Health Risk Assessment Tools', icon: '⚠️' },
          { id: 'home-care-billing', label: 'Home Care Billing and Revenue Cycle Management', icon: '💰' },
          { id: 'home-care-compliance-management', label: 'Home Care Compliance Management', icon: '📋' },
          { id: 'patient-engagement-tools', label: 'Home Health Patient Engagement Tools', icon: '💬' },
          { id: 'training-certification-platforms', label: 'Home Health Training and Certification Platforms', icon: '🎓' },
          { id: 'medication-adherence-monitoring', label: 'Medication Adherence Monitoring', icon: '💊' },
          { id: 'mobile-health-apps', label: 'Mobile Health Apps for Home Care', icon: '📱' },
          { id: 'online-patient-portal', label: 'Online Patient Portal for Home Care', icon: '🌐' },
          { id: 'health-data-analytics', label: 'Patient Health Data Analytics', icon: '📊' },
          { id: 'remote-patient-monitoring', label: 'Remote Patient Monitoring (RPM)', icon: '📡' },
          { id: 'remote-telehealth-consultations', label: 'Remote Telehealth Consultations', icon: '📞' },
          { id: 'secure-messaging-platforms', label: 'Secure Messaging Platforms for Care Coordination', icon: '🔒' },
          { id: 'smart-home-devices', label: 'Smart Home Devices for Patient Safety', icon: '🏡' },
          { id: 'smart-medication-dispensing', label: 'Smart Medication Dispensing Systems', icon: '💊' },
          { id: 'social-determinants-tracking', label: 'Social Determinants of Health Tracking', icon: '📊' },
          { id: 'staffing-optimization', label: 'Staffing Optimization for Home Healthcare', icon: '👥' },
          { id: 'telemonitoring-vital-signs', label: 'Telemonitoring for Vital Signs', icon: '🩺' },
          { id: 'telehealth-platforms', label: 'Telehealth Platforms for Home Healthcare', icon: '📱' },
          { id: 'therapy-rehabilitation-tools', label: 'Therapy and Rehabilitation Tools for Home Use', icon: '🏋️' },
          { id: 'wearable-health-devices', label: 'Wearable Health Devices for Home Care', icon: '⌚' },
          { id: 'workflow-management', label: 'Workflow Management for Home Healthcare', icon: '⚙️' },
          { id: 'predictive-analytics', label: 'Predictive Analytics for Patient Outcomes', icon: '🔮' },
          { id: 'quality-performance-tracking', label: 'Home Care Quality and Performance Tracking', icon: '📈' },
          { id: 'virtual-home-visits', label: 'Virtual Home Visits', icon: '🌐' },
          { id: 'virtual-health-assistants', label: 'Virtual Health Assistants for Patients', icon: '🤖' },
          { id: 'customizable-home-care-templates', label: 'Customizable Home Care Templates', icon: '📄' },
          { id: 'remote-caregiver-training', label: 'Remote Caregiver Training Solutions', icon: '📚' },
          { id: 'family-communication-tools', label: 'Family and Caregiver Communication Tools', icon: '👨‍👩‍👧‍👦' },
          { id: 'incident-reporting-systems', label: 'Incident and Emergency Reporting Systems', icon: '🚨' },
          { id: 'patient-referral-management', label: 'Patient Referral Management Systems', icon: '🔗' },
          { id: 'treatment-adherence-tracking', label: 'Treatment Adherence Tracking and Support', icon: '💊' }
        ];
      case 'hospitals-and-medical-centers':
        return [
            { id: 'automated-patient-scheduling', label: 'Automated Patient Scheduling', icon: '📅' },
            { id: 'bed-management-systems', label: 'Bed Management Systems', icon: '🛏️' },
            { id: 'clinical-decision-support-systems', label: 'Clinical Decision Support Systems', icon: '🧠' },
            { id: 'clinical-documentation-automation', label: 'Clinical Documentation Automation', icon: '📝' },
            { id: 'critical-care-monitoring-systems', label: 'Critical Care Monitoring Systems', icon: '⚠️' },
            { id: 'electronic-health-records-management', label: 'Electronic Health Records (EHR) Management', icon: '📂' },
            { id: 'emergency-room-triage-automation', label: 'Emergency Room Triage Automation', icon: '🚑' },
            { id: 'hospital-billing-and-coding-automation', label: 'Hospital Billing and Coding Automation', icon: '💰' },
            { id: 'hospital-capacity-management', label: 'Hospital Capacity Management', icon: '🏥' },
            { id: 'hospital-resource-allocation-systems', label: 'Hospital Resource Allocation Systems', icon: '📊' },
            { id: 'hospital-workflow-automation', label: 'Hospital Workflow Automation', icon: '⚙️' },
            { id: 'infection-control-monitoring', label: 'Infection Control Monitoring', icon: '🦠' },
            { id: 'medical-equipment-management', label: 'Medical Equipment Management', icon: '🛠️' },
            { id: 'medication-management-systems', label: 'Medication Management Systems', icon: '💊' },
            { id: 'patient-discharge-management', label: 'Patient Discharge Management', icon: '🚪' },
            { id: 'patient-flow-optimization', label: 'Patient Flow Optimization', icon: '🔄' },
            { id: 'patient-health-data-analytics', label: 'Patient Health Data Analytics', icon: '📈' },
            { id: 'patient-intake-and-registration-automation', label: 'Patient Intake and Registration Automation', icon: '📝' },
            { id: 'predictive-patient-monitoring', label: 'Predictive Patient Monitoring', icon: '🔍' },
            { id: 'predictive-staffing-solutions', label: 'Predictive Staffing Solutions', icon: '📊' },
            { id: 'quality-control-and-assurance-systems', label: 'Quality Control and Assurance Systems', icon: '✅' },
            { id: 'real-time-location-systems', label: 'Real-Time Location Systems (RTLS)', icon: '📍' },
            { id: 'remote-patient-monitoring', label: 'Remote Patient Monitoring', icon: '📡' },
            { id: 'revenue-cycle-management', label: 'Revenue Cycle Management', icon: '💵' },
            { id: 'robotic-surgery-systems', label: 'Robotic Surgery Systems', icon: '🤖' },
            { id: 'secure-messaging-platforms-for-healthcare-teams', label: 'Secure Messaging Platforms for Healthcare Teams', icon: '🔒' },
            { id: 'supply-chain-management-for-hospitals', label: 'Supply Chain Management for Hospitals', icon: '📦' },
            { id: 'surgical-instrument-tracking-systems', label: 'Surgical Instrument Tracking Systems', icon: '🔧' },
            { id: 'telemedicine-integration-for-hospital-care', label: 'Telemedicine Integration for Hospital Care', icon: '📞' },
            { id: 'telehealth-consultation-platforms', label: 'Telehealth Consultation Platforms', icon: '💻' },
            { id: 'treatment-pathway-optimization', label: 'Treatment Pathway Optimization', icon: '🛤️' },
            { id: 'virtual-patient-assistants', label: 'Virtual Patient Assistants', icon: '🤖' },
            { id: 'workforce-management-systems', label: 'Workforce Management Systems', icon: '👥' },
            { id: 'work-order-management-for-facility-maintenance', label: 'Work Order Management for Facility Maintenance', icon: '🔧' },
            { id: 'smart-patient-monitoring-devices', label: 'Smart Patient Monitoring Devices', icon: '📱' },
            { id: 'automated-referral-management', label: 'Automated Referral Management', icon: '🔗' },
            { id: 'mobile-health-applications-for-hospital-care', label: 'Mobile Health Applications for Hospital Care', icon: '📲' },
            { id: 'digital-patient-engagement-systems', label: 'Digital Patient Engagement Systems', icon: '💬' },
            { id: 'hospital-staff-credentialing-automation', label: 'Hospital Staff Credentialing Automation', icon: '🆔' },
            { id: 'medical-imaging-systems-automation', label: 'Medical Imaging Systems Automation', icon: '🖼️' }
        ];
      case 'integrative-and-complementary-medicine':
        return [
              { id: 'automated-acupuncture-point-mapping', label: 'Automated Acupuncture Point Mapping', icon: '🧘' },
              { id: 'clinical-decision-support-for-herbal-medicine', label: 'Clinical Decision Support for Herbal Medicine', icon: '🌱' },
              { id: 'digital-detoxification-programs', label: 'Digital Detoxification Programs', icon: '🧖' },
              { id: 'digital-health-tracking-for-integrative-therapies', label: 'Digital Health Tracking for Integrative Therapies', icon: '📊' },
              { id: 'energy-healing-management-systems', label: 'Energy Healing Management Systems', icon: '⚡' },
              { id: 'herb-and-supplement-tracking-software', label: 'Herb and Supplement Tracking Software', icon: '🌿' },
              { id: 'integrative-pain-management-platforms', label: 'Integrative Pain Management Platforms', icon: '💊' },
              { id: 'meditation-and-mindfulness-program-automation', label: 'Meditation and Mindfulness Program Automation', icon: '🧘‍♀️' },
              { id: 'mobile-health-apps-for-integrative-medicine', label: 'Mobile Health Apps for Integrative Medicine', icon: '📱' },
              { id: 'natural-remedy-prescription-systems', label: 'Natural Remedy Prescription Systems', icon: '📜' },
              { id: 'nutritional-counseling-software', label: 'Nutritional Counseling Software', icon: '🥗' },
              { id: 'online-wellness-consultations', label: 'Online Wellness Consultations', icon: '💻' },
              { id: 'personalized-holistic-treatment-plans', label: 'Personalized Holistic Treatment Plans', icon: '📝' },
              { id: 'predictive-health-modeling-for-complementary-therapies', label: 'Predictive Health Modeling for Complementary Therapies', icon: '🔍' },
              { id: 'protocol-based-integrative-care-management', label: 'Protocol-Based Integrative Care Management', icon: '📋' },
              { id: 'reflexology-treatment-management-systems', label: 'Reflexology Treatment Management Systems', icon: '👣' },
              { id: 'remote-consultations-for-holistic-health', label: 'Remote Consultations for Holistic Health', icon: '📞' },
              { id: 'remote-monitoring-of-complementary-therapies', label: 'Remote Monitoring of Complementary Therapies', icon: '📡' },
              { id: 'remote-yoga-and-physical-therapy-programs', label: 'Remote Yoga and Physical Therapy Programs', icon: '🧘‍♂️' },
              { id: 'scheduling-and-coordination-for-integrative-therapies', label: 'Scheduling and Coordination for Integrative Therapies', icon: '📅' },
              { id: 'smart-wearables-for-holistic-health-monitoring', label: 'Smart Wearables for Holistic Health Monitoring', icon: '⌚' },
              { id: 'spa-and-wellness-treatment-scheduling-automation', label: 'Spa and Wellness Treatment Scheduling Automation', icon: '🏖️' },
              { id: 'telemedicine-platforms-for-integrative-medicine', label: 'Telemedicine Platforms for Integrative Medicine', icon: '📞' },
              { id: 'teletherapy-for-stress-relief-and-emotional-health', label: 'Teletherapy for Stress Relief and Emotional Health', icon: '🧠' },
              { id: 'traditional-chinese-medicine-data-integration', label: 'Traditional Chinese Medicine (TCM) Data Integration', icon: '🀄' },
              { id: 'virtual-holistic-health-workshops', label: 'Virtual Holistic Health Workshops', icon: '🌐' },
              { id: 'virtual-healing-and-therapy-sessions', label: 'Virtual Healing and Therapy Sessions', icon: '💫' },
              { id: 'virtual-nutritionist-and-diet-planning', label: 'Virtual Nutritionist and Diet Planning', icon: '🥗' },
              { id: 'wellness-program-automation-for-corporate-health', label: 'Wellness Program Automation for Corporate Health', icon: '🏢' },
              { id: 'weight-loss-and-detox-program-management', label: 'Weight Loss and Detox Program Management', icon: '⚖️' },
              { id: 'complementary-medicine-compliance-monitoring', label: 'Complementary Medicine Compliance Monitoring', icon: '✅' },
              { id: 'personalized-herbal-medicine-management', label: 'Personalized Herbal Medicine Management', icon: '🌼' },
              { id: 'aromatherapy-program-automation', label: 'Aromatherapy Program Automation', icon: '🌸' },
              { id: 'biofeedback-and-neurofeedback-therapy-management', label: 'Biofeedback and Neurofeedback Therapy Management', icon: '🧠' },
              { id: 'digital-integrative-health-records', label: 'Digital Integrative Health Records', icon: '📂' },
              { id: 'herbal-remedy-safety-and-interaction-monitoring', label: 'Herbal Remedy Safety and Interaction Monitoring', icon: '⚠️' },
              { id: 'integrative-health-research-and-data-management', label: 'Integrative Health Research and Data Management', icon: '🔬' },
              { id: 'integrative-medicine-clinical-trials-automation', label: 'Integrative Medicine Clinical Trials Automation', icon: '🧪' },
              { id: 'patient-education-for-holistic-therapies', label: 'Patient Education for Holistic Therapies', icon: '📚' },
              { id: 'wellness-and-preventative-care-automation', label: 'Wellness and Preventative Care Automation', icon: '🏥' }
        ];
      case 'long-term-care-insurance':
        return [
                { id: 'automated-claims-processing', label: 'Automated Claims Processing', icon: '📝' },
                { id: 'claims-adjudication-systems', label: 'Claims Adjudication Systems', icon: '⚖️' },
                { id: 'customer-relationship-management-for-insurance', label: 'Customer Relationship Management (CRM) for Insurance', icon: '📞' },
                { id: 'data-analytics-for-risk-assessment', label: 'Data Analytics for Risk Assessment', icon: '📊' },
                { id: 'digital-health-and-wellness-integration-for-policyholders', label: 'Digital Health and Wellness Integration for Policyholders', icon: '🌐' },
                { id: 'digital-policy-management', label: 'Digital Policy Management', icon: '📄' },
                { id: 'elderly-care-needs-assessment-software', label: 'Elderly Care Needs Assessment Software', icon: '👵' },
                { id: 'fraud-detection-in-claims', label: 'Fraud Detection in Claims', icon: '🔍' },
                { id: 'health-data-integration-for-insurance-plans', label: 'Health Data Integration for Insurance Plans', icon: '🔗' },
                { id: 'insurance-premium-calculation-automation', label: 'Insurance Premium Calculation Automation', icon: '💰' },
                { id: 'insurance-risk-management-systems', label: 'Insurance Risk Management Systems', icon: '📈' },
                { id: 'long-term-care-eligibility-verification', label: 'Long-Term Care Eligibility Verification', icon: '✅' },
                { id: 'online-enrollment-platforms', label: 'Online Enrollment Platforms', icon: '🖥️' },
                { id: 'policyholder-support-automation', label: 'Policyholder Support Automation', icon: '🤝' },
                { id: 'predictive-analytics-for-claims-payouts', label: 'Predictive Analytics for Claims Payouts', icon: '🔮' },
                { id: 'personalized-care-plan-automation', label: 'Personalized Care Plan Automation', icon: '📝' },
                { id: 'policyholder-health-tracking', label: 'Policyholder Health Tracking', icon: '📊' },
                { id: 'policyholder-engagement-platforms', label: 'Policyholder Engagement Platforms', icon: '💬' },
                { id: 'remote-health-monitoring-for-policyholders', label: 'Remote Health Monitoring for Policyholders', icon: '📡' },
                { id: 'remote-underwriting-tools', label: 'Remote Underwriting Tools', icon: '🖥️' },
                { id: 'smart-claims-submission-tools', label: 'Smart Claims Submission Tools', icon: '📩' },
                { id: 'telemedicine-integration-for-policyholders', label: 'Telemedicine Integration for Policyholders', icon: '📞' },
                { id: 'wellness-program-integration-for-long-term-care', label: 'Wellness Program Integration for Long-Term Care', icon: '🏥' },
                { id: 'automated-medical-review-for-claims', label: 'Automated Medical Review for Claims', icon: '🔍' },
                { id: 'automated-premium-billing-and-payment-systems', label: 'Automated Premium Billing and Payment Systems', icon: '💳' },
                { id: 'caregiver-support-systems', label: 'Caregiver Support Systems', icon: '👩‍⚕️' },
                { id: 'claims-dispute-resolution-platforms', label: 'Claims Dispute Resolution Platforms', icon: '⚖️' },
                { id: 'healthcare-provider-network-management', label: 'Healthcare Provider Network Management', icon: '🏥' },
                { id: 'long-term-care-provider-evaluation-systems', label: 'Long-Term Care Provider Evaluation Systems', icon: '🔍' },
                { id: 'mobile-application-for-insurance-management', label: 'Mobile Application for Insurance Management', icon: '📱' },
                { id: 'personalized-policy-recommendations', label: 'Personalized Policy Recommendations', icon: '📝' },
                { id: 'predictive-modeling-for-health-risk', label: 'Predictive Modeling for Health Risk', icon: '📈' },
                { id: 'real-time-policyholder-health-monitoring', label: 'Real-Time Policyholder Health Monitoring', icon: '⏱️' },
                { id: 'remote-care-coordination', label: 'Remote Care Coordination', icon: '🔄' },
                { id: 'scheduling-and-coordination-for-caregivers', label: 'Scheduling and Coordination for Caregivers', icon: '📅' },
                { id: 'smart-home-device-integration-for-policyholders', label: 'Smart Home Device Integration for Policyholders', icon: '🏠' },
                { id: 'telehealth-and-virtual-consultations-for-policyholders', label: 'Telehealth and Virtual Consultations for Policyholders', icon: '💻' },
                { id: 'wellness-program-monitoring-for-policyholders', label: 'Wellness Program Monitoring for Policyholders', icon: '📊' },
                { id: 'workflows-for-policy-renewal-and-updates', label: 'Workflows for Policy Renewal and Updates', icon: '🔄' },
                { id: 'workflow-automation-for-customer-service', label: 'Workflow Automation for Customer Service', icon: '⚙️' }
        ];
      case 'managed-care-organizations':
        return [
                  { id: 'automated-claims-processing', label: 'Automated Claims Processing', icon: '📝' },
                  { id: 'care-coordination-systems', label: 'Care Coordination Systems', icon: '🔄' },
                  { id: 'care-management-platforms', label: 'Care Management Platforms', icon: '🏥' },
                  { id: 'case-management-automation', label: 'Case Management Automation', icon: '⚙️' },
                  { id: 'clinical-decision-support-systems', label: 'Clinical Decision Support Systems', icon: '🧠' },
                  { id: 'cost-management-systems', label: 'Cost Management Systems', icon: '💰' },
                  { id: 'credentialing-and-provider-enrollment', label: 'Credentialing and Provider Enrollment', icon: '🆔' },
                  { id: 'digital-health-integration', label: 'Digital Health Integration', icon: '🌐' },
                  { id: 'disease-management-systems', label: 'Disease Management Systems', icon: '💊' },
                  { id: 'eligibility-verification-automation', label: 'Eligibility Verification Automation', icon: '✅' },
                  { id: 'emergency-care-management-systems', label: 'Emergency Care Management Systems', icon: '🚑' },
                  { id: 'electronic-health-record-integration', label: 'Electronic Health Record (EHR) Integration', icon: '📂' },
                  { id: 'electronic-medical-record-for-managed-care', label: 'Electronic Medical Record (EMR) for Managed Care', icon: '📋' },
                  { id: 'health-risk-assessment-tools', label: 'Health Risk Assessment Tools', icon: '🔍' },
                  { id: 'healthcare-analytics-platforms', label: 'Healthcare Analytics Platforms', icon: '📊' },
                  { id: 'hospital-readmission-reduction-systems', label: 'Hospital Readmission Reduction Systems', icon: '🏥' },
                  { id: 'integrated-patient-care-platforms', label: 'Integrated Patient Care Platforms', icon: '🔗' },
                  { id: 'member-enrollment-automation', label: 'Member Enrollment Automation', icon: '📝' },
                  { id: 'network-provider-management-systems', label: 'Network Provider Management Systems', icon: '🌐' },
                  { id: 'outcome-measurement-tools', label: 'Outcome Measurement Tools', icon: '📈' },
                  { id: 'patient-engagement-platforms', label: 'Patient Engagement Platforms', icon: '💬' },
                  { id: 'patient-health-data-integration', label: 'Patient Health Data Integration', icon: '🔗' },
                  { id: 'patient-intake-automation', label: 'Patient Intake Automation', icon: '📝' },
                  { id: 'payment-integrity-systems', label: 'Payment Integrity Systems', icon: '💵' },
                  { id: 'population-health-management-tools', label: 'Population Health Management Tools', icon: '🌍' },
                  { id: 'predictive-modeling-for-risk-stratification', label: 'Predictive Modeling for Risk Stratification', icon: '🔮' },
                  { id: 'preventive-care-management-systems', label: 'Preventive Care Management Systems', icon: '🩺' },
                  { id: 'prescription-management-systems', label: 'Prescription Management Systems', icon: '💊' },
                  { id: 'provider-contracting-and-negotiation-automation', label: 'Provider Contracting and Negotiation Automation', icon: '🤝' },
                  { id: 'quality-assurance-and-monitoring-systems', label: 'Quality Assurance and Monitoring Systems', icon: '✅' },
                  { id: 'real-time-claims-adjudication', label: 'Real-Time Claims Adjudication', icon: '⚖️' },
                  { id: 'referral-management-systems', label: 'Referral Management Systems', icon: '🔗' },
                  { id: 'remote-patient-monitoring-platforms', label: 'Remote Patient Monitoring Platforms', icon: '📡' },
                  { id: 'risk-adjustment-tools', label: 'Risk Adjustment Tools', icon: '⚖️' },
                  { id: 'smart-resource-allocation-systems', label: 'Smart Resource Allocation Systems', icon: '📊' },
                  { id: 'telehealth-integration-platforms', label: 'Telehealth Integration Platforms', icon: '📞' },
                  { id: 'telemedicine-claims-management', label: 'Telemedicine Claims Management', icon: '💻' },
                  { id: 'utilization-review-automation', label: 'Utilization Review Automation', icon: '🔄' },
                  { id: 'value-based-care-management-systems', label: 'Value-Based Care Management Systems', icon: '💵' },
                  { id: 'workflow-automation-for-administrative-tasks', label: 'Workflow Automation for Administrative Tasks', icon: '⚙️' }
        ];
      case 'medical-devices':
        return [
                    { id: 'automated-diagnostic-imaging-systems', label: 'Automated Diagnostic Imaging Systems', icon: '🖼️' },
                    { id: 'automated-insulin-delivery-systems', label: 'Automated Insulin Delivery Systems', icon: '💉' },
                    { id: 'biometric-sensors-for-health-monitoring', label: 'Biometric Sensors for Health Monitoring', icon: '📊' },
                    { id: 'cardiovascular-monitoring-devices', label: 'Cardiovascular Monitoring Devices', icon: '❤️' },
                    { id: 'connected-wearables-for-health-tracking', label: 'Connected Wearables for Health Tracking', icon: '⌚' },
                    { id: 'custom-prosthetics-design-and-fabrication', label: 'Custom Prosthetics Design and Fabrication', icon: '🦾' },
                    { id: 'digital-thermometers-with-cloud-integration', label: 'Digital Thermometers with Cloud Integration', icon: '🌡️' },
                    { id: 'diagnostic-ultrasound-automation', label: 'Diagnostic Ultrasound Automation', icon: '🔊' },
                    { id: 'electronic-stethoscopes-with-data-recording', label: 'Electronic Stethoscopes with Data Recording', icon: '🎧' },
                    { id: 'health-data-integration-devices', label: 'Health Data Integration Devices', icon: '🔗' },
                    { id: 'implantable-device-monitoring-systems', label: 'Implantable Device Monitoring Systems', icon: '🦾' },
                    { id: 'infusion-pump-automation', label: 'Infusion Pump Automation', icon: '💧' },
                    { id: 'mobile-health-monitoring-devices', label: 'Mobile Health Monitoring Devices', icon: '📱' },
                    { id: 'neurostimulation-devices', label: 'Neurostimulation Devices', icon: '🧠' },
                    { id: 'orthopedic-device-monitoring-systems', label: 'Orthopedic Device Monitoring Systems', icon: '🦴' },
                    { id: 'personalized-medical-device-platforms', label: 'Personalized Medical Device Platforms', icon: '🛠️' },
                    { id: 'portable-ecg-and-ekg-devices', label: 'Portable ECG and EKG Devices', icon: '📈' },
                    { id: 'real-time-patient-monitoring-systems', label: 'Real-Time Patient Monitoring Systems', icon: '⏱️' },
                    { id: 'remote-patient-monitoring-devices', label: 'Remote Patient Monitoring Devices', icon: '📡' },
                    { id: 'smart-glucose-monitoring-systems', label: 'Smart Glucose Monitoring Systems', icon: '🍬' },
                    { id: 'smart-hearing-aids-with-data-connectivity', label: 'Smart Hearing Aids with Data Connectivity', icon: '👂' },
                    { id: 'smart-oxygen-therapy-devices', label: 'Smart Oxygen Therapy Devices', icon: '💨' },
                    { id: 'smart-surgical-instruments', label: 'Smart Surgical Instruments', icon: '🔪' },
                    { id: 'surgical-robotics-for-precision-procedures', label: 'Surgical Robotics for Precision Procedures', icon: '🤖' },
                    { id: 'telemedicine-device-integration', label: 'Telemedicine Device Integration', icon: '📞' },
                    { id: 'therapeutic-laser-devices', label: 'Therapeutic Laser Devices', icon: '🔦' },
                    { id: 'transdermal-drug-delivery-systems', label: 'Transdermal Drug Delivery Systems', icon: '💊' },
                    { id: 'virtual-care-platforms-with-device-integration', label: 'Virtual Care Platforms with Device Integration', icon: '🌐' },
                    { id: 'wearable-ecg-monitors', label: 'Wearable ECG Monitors', icon: '📈' },
                    { id: 'wearable-sleep-monitoring-devices', label: 'Wearable Sleep Monitoring Devices', icon: '😴' },
                    { id: 'wireless-patient-monitoring-devices', label: 'Wireless Patient Monitoring Devices', icon: '📶' },
                    { id: 'wound-care-and-healing-monitoring-systems', label: 'Wound Care and Healing Monitoring Systems', icon: '🩹' },
                    { id: 'automated-medication-dispensing-systems', label: 'Automated Medication Dispensing Systems', icon: '💊' },
                    { id: 'automated-rehabilitation-devices', label: 'Automated Rehabilitation Devices', icon: '🏋️' },
                    { id: 'continuous-glucose-monitoring-systems', label: 'Continuous Glucose Monitoring Systems', icon: '📊' },
                    { id: 'digital-hearing-aids-with-adaptive-sound-features', label: 'Digital Hearing Aids with Adaptive Sound Features', icon: '🎧' },
                    { id: 'intelligent-inhalers-for-respiratory-care', label: 'Intelligent Inhalers for Respiratory Care', icon: '💨' },
                    { id: 'machine-learning-in-diagnostic-devices', label: 'Machine Learning in Diagnostic Devices', icon: '🤖' },
                    { id: 'smart-contact-lenses-for-health-monitoring', label: 'Smart Contact Lenses for Health Monitoring', icon: '👁️' },
                    { id: 'virtual-reality-based-rehabilitation-devices', label: 'Virtual Reality-Based Rehabilitation Devices', icon: '🕶️' }
        ];
      case 'medical-education-technology':
        return [
                      { id: 'adaptive-learning-systems', label: 'Adaptive Learning Systems', icon: '📚' },
                      { id: 'augmented-reality-for-medical-training', label: 'Augmented Reality for Medical Training', icon: '🕶️' },
                      { id: 'automated-clinical-skills-assessment', label: 'Automated Clinical Skills Assessment', icon: '📝' },
                      { id: 'clinical-simulation-platforms', label: 'Clinical Simulation Platforms', icon: '🎭' },
                      { id: 'computerized-medical-case-studies', label: 'Computerized Medical Case Studies', icon: '💻' },
                      { id: 'continuing-medical-education-cme-platforms', label: 'Continuing Medical Education (CME) Platforms', icon: '📖' },
                      { id: 'digital-anatomy-training-tools', label: 'Digital Anatomy Training Tools', icon: '🦴' },
                      { id: 'digital-health-record-training-modules', label: 'Digital Health Record Training Modules', icon: '📂' },
                      { id: 'e-learning-for-healthcare-professionals', label: 'E-Learning for Healthcare Professionals', icon: '💻' },
                      { id: 'electronic-medical-transcription-training', label: 'Electronic Medical Transcription Training', icon: '🖥️' },
                      { id: 'electronic-quizzes-and-testing-platforms', label: 'Electronic Quizzes and Testing Platforms', icon: '📝' },
                      { id: 'interactive-patient-scenario-simulations', label: 'Interactive Patient Scenario Simulations', icon: '👥' },
                      { id: 'interactive-virtual-laboratories', label: 'Interactive Virtual Laboratories', icon: '🔬' },
                      { id: 'medical-certification-platforms', label: 'Medical Certification Platforms', icon: '🎓' },
                      { id: 'medical-coding-and-billing-education-tools', label: 'Medical Coding and Billing Education Tools', icon: '💵' },
                      { id: 'medical-imaging-and-radiology-training-tools', label: 'Medical Imaging and Radiology Training Tools', icon: '🩻' },
                      { id: 'medical-research-training-platforms', label: 'Medical Research Training Platforms', icon: '🔍' },
                      { id: 'mobile-learning-apps-for-medical-students', label: 'Mobile Learning Apps for Medical Students', icon: '📱' },
                      { id: 'online-medical-education-platforms', label: 'Online Medical Education Platforms', icon: '🌐' },
                      { id: 'online-platform-for-virtual-clinical-rotations', label: 'Online Platform for Virtual Clinical Rotations', icon: '🔄' },
                      { id: 'personalized-learning-paths-for-medical-students', label: 'Personalized Learning Paths for Medical Students', icon: '🛤️' },
                      { id: 'physician-skills-training-with-real-time-feedback', label: 'Physician Skills Training with Real-Time Feedback', icon: '⏱️' },
                      { id: 'predictive-analytics-for-student-performance', label: 'Predictive Analytics for Student Performance', icon: '📊' },
                      { id: 'preoperative-education-and-training-tools', label: 'Preoperative Education and Training Tools', icon: '🩺' },
                      { id: 'telemedicine-training-for-healthcare-providers', label: 'Telemedicine Training for Healthcare Providers', icon: '📞' },
                      { id: 'textbook-and-learning-resource-automation', label: 'Textbook and Learning Resource Automation', icon: '📚' },
                      { id: 'virtual-clinical-practice-for-medical-students', label: 'Virtual Clinical Practice for Medical Students', icon: '🏥' },
                      { id: 'virtual-health-assistant-training', label: 'Virtual Health Assistant Training', icon: '🤖' },
                      { id: 'virtual-reality-based-surgical-training', label: 'Virtual Reality-Based Surgical Training', icon: '🕶️' },
                      { id: 'video-based-medical-education-platforms', label: 'Video-Based Medical Education Platforms', icon: '📹' },
                      { id: 'virtual-simulation-for-emergency-medicine', label: 'Virtual Simulation for Emergency Medicine', icon: '🚑' },
                      { id: 'voice-recognition-for-medical-education', label: 'Voice Recognition for Medical Education', icon: '🎤' },
                      { id: 'smart-mobile-applications-for-medical-training', label: 'Smart Mobile Applications for Medical Training', icon: '📱' },
                      { id: 'patient-education-platforms-for-medical-students', label: 'Patient Education Platforms for Medical Students', icon: '👩‍⚕️' },
                      { id: 'real-time-feedback-for-medical-procedure-practice', label: 'Real-Time Feedback for Medical Procedure Practice', icon: '⏱️' },
                      { id: 'remote-learning-for-healthcare-professionals', label: 'Remote Learning for Healthcare Professionals', icon: '🌍' },
                      { id: 'remote-collaboration-tools-for-medical-education', label: 'Remote Collaboration Tools for Medical Education', icon: '🤝' },
                      { id: 'software-for-interdisciplinary-medical-training', label: 'Software for Interdisciplinary Medical Training', icon: '🔗' },
                      { id: 'tele-education-for-medical-professionals', label: 'Tele-Education for Medical Professionals', icon: '📞' },
                      { id: 'workflow-management-for-medical-training-programs', label: 'Workflow Management for Medical Training Programs', icon: '⚙️' }
        ];
      case 'medical-tourism':
        return [
                        { id: 'automated-appointment-scheduling-for-medical-tourists', label: 'Automated Appointment Scheduling for Medical Tourists', icon: '📅' },
                        { id: 'billing-and-payment-automation-for-cross-border-care', label: 'Billing and Payment Automation for Cross-Border Care', icon: '💳' },
                        { id: 'clinical-care-coordination-platforms', label: 'Clinical Care Coordination Platforms', icon: '🔗' },
                        { id: 'cross-border-insurance-verification', label: 'Cross-Border Insurance Verification', icon: '✅' },
                        { id: 'digital-health-record-management-for-international-patients', label: 'Digital Health Record Management for International Patients', icon: '📂' },
                        { id: 'electronic-patient-consent-management', label: 'Electronic Patient Consent Management', icon: '📝' },
                        { id: 'health-tourism-data-analytics', label: 'Health Tourism Data Analytics', icon: '📊' },
                        { id: 'healthcare-travel-itinerary-management', label: 'Healthcare Travel Itinerary Management', icon: '🗺️' },
                        { id: 'hospital-and-clinic-rating-and-review-systems', label: 'Hospital and Clinic Rating and Review Systems', icon: '⭐' },
                        { id: 'language-translation-for-medical-consultations', label: 'Language Translation for Medical Consultations', icon: '🌐' },
                        { id: 'local-transportation-coordination-for-medical-tourists', label: 'Local Transportation Coordination for Medical Tourists', icon: '🚗' },
                        { id: 'medical-travel-insurance-automation', label: 'Medical Travel Insurance Automation', icon: '🛡️' },
                        { id: 'mobile-health-apps-for-medical-tourists', label: 'Mobile Health Apps for Medical Tourists', icon: '📱' },
                        { id: 'online-patient-consultation-platforms', label: 'Online Patient Consultation Platforms', icon: '💻' },
                        { id: 'patient-experience-management-in-medical-tourism', label: 'Patient Experience Management in Medical Tourism', icon: '😊' },
                        { id: 'patient-health-and-wellness-tracking-during-travel', label: 'Patient Health and Wellness Tracking during Travel', icon: '🌍' },
                        { id: 'personalized-travel-and-treatment-packages', label: 'Personalized Travel and Treatment Packages', icon: '🎁' },
                        { id: 'predictive-analytics-for-medical-tourism-demand', label: 'Predictive Analytics for Medical Tourism Demand', icon: '🔮' },
                        { id: 'price-transparency-platforms-for-medical-services', label: 'Price Transparency Platforms for Medical Services', icon: '💵' },
                        { id: 'real-time-medical-tourism-feedback-systems', label: 'Real-Time Medical Tourism Feedback Systems', icon: '📣' },
                        { id: 'remote-patient-monitoring-for-medical-tourists', label: 'Remote Patient Monitoring for Medical Tourists', icon: '📡' },
                        { id: 'remote-medical-consultation-systems', label: 'Remote Medical Consultation Systems', icon: '📞' },
                        { id: 'telemedicine-integration-for-medical-tourism', label: 'Telemedicine Integration for Medical Tourism', icon: '💻' },
                        { id: 'virtual-pre-treatment-consultations', label: 'Virtual Pre-Treatment Consultations', icon: '🩺' },
                        { id: 'travel-logistics-automation-for-medical-tourists', label: 'Travel Logistics Automation for Medical Tourists', icon: '🚀' },
                        { id: 'telehealth-follow-up-systems-for-international-patients', label: 'Telehealth Follow-Up Systems for International Patients', icon: '📞' },
                        { id: 'treatment-matching-platforms-for-medical-tourists', label: 'Treatment Matching Platforms for Medical Tourists', icon: '🔍' },
                        { id: 'virtual-health-assistants-for-medical-tourists', label: 'Virtual Health Assistants for Medical Tourists', icon: '🤖' },
                        { id: 'wellness-and-post-treatment-recovery-tracking', label: 'Wellness and Post-Treatment Recovery Tracking', icon: '🏥' },
                        { id: 'workflow-automation-for-medical-tourism-agencies', label: 'Workflow Automation for Medical Tourism Agencies', icon: '⚙️' },
                        { id: 'electronic-visa-processing-for-medical-tourists', label: 'Electronic Visa Processing for Medical Tourists', icon: '🛂' },
                        { id: 'international-medical-concierge-services', label: 'International Medical Concierge Services', icon: '🌍' },
                        { id: 'health-tourism-marketing-automation', label: 'Health Tourism Marketing Automation', icon: '📈' },
                        { id: 'international-patient-referral-systems', label: 'International Patient Referral Systems', icon: '🔗' },
                        { id: 'online-medical-tourism-portals', label: 'Online Medical Tourism Portals', icon: '🌐' },
                        { id: 'online-medical-tourism-booking-platforms', label: 'Online Medical Tourism Booking Platforms', icon: '🛎️' },
                        { id: 'patient-data-integration-across-multiple-countries', label: 'Patient Data Integration Across Multiple Countries', icon: '🌍' },
                        { id: 'quality-assurance-and-compliance-systems-for-medical-tourism', label: 'Quality Assurance and Compliance Systems for Medical Tourism', icon: '✅' },
                        { id: 'smart-travel-solutions-for-medical-patients', label: 'Smart Travel Solutions for Medical Patients', icon: '🧳' },
                        { id: 'travel-and-accommodation-booking-integration-for-healthcare-travelers', label: 'Travel and Accommodation Booking Integration for Healthcare Travelers', icon: '🏨' }
        ];
      case 'mental-health':
        return [
                          { id: 'automated-cognitive-behavioral-therapy-cbt', label: 'Automated Cognitive Behavioral Therapy (CBT)', icon: '🤖' },
                          { id: 'automated-mental-health-assessments', label: 'Automated Mental Health Assessments', icon: '📝' },
                          { id: 'behavioral-health-data-analytics', label: 'Behavioral Health Data Analytics', icon: '📊' },
                          { id: 'chatbots-for-mental-health-support', label: 'Chatbots for Mental Health Support', icon: '💬' },
                          { id: 'cloud-based-mental-health-records', label: 'Cloud-Based Mental Health Records', icon: '☁️' },
                          { id: 'cognitive-training-platforms', label: 'Cognitive Training Platforms', icon: '🧠' },
                          { id: 'digital-therapy-tools', label: 'Digital Therapy Tools', icon: '💻' },
                          { id: 'electronic-prescription-management-for-mental-health', label: 'Electronic Prescription Management for Mental Health', icon: '💊' },
                          { id: 'electronic-patient-health-monitoring', label: 'Electronic Patient Health Monitoring', icon: '📈' },
                          { id: 'emotion-recognition-and-monitoring', label: 'Emotion Recognition and Monitoring', icon: '😌' },
                          { id: 'gamified-mental-health-programs', label: 'Gamified Mental Health Programs', icon: '🎮' },
                          { id: 'interactive-mental-health-apps', label: 'Interactive Mental Health Apps', icon: '📱' },
                          { id: 'mental-health-chatbots-for-crisis-intervention', label: 'Mental Health Chatbots for Crisis Intervention', icon: '🚨' },
                          { id: 'mental-health-diagnosis-assistance', label: 'Mental Health Diagnosis Assistance', icon: '🔍' },
                          { id: 'mental-health-education-platforms', label: 'Mental Health Education Platforms', icon: '📚' },
                          { id: 'mobile-mental-health-screening', label: 'Mobile Mental Health Screening', icon: '📲' },
                          { id: 'personalized-therapy-recommendation-systems', label: 'Personalized Therapy Recommendation Systems', icon: '🧩' },
                          { id: 'predictive-models-for-mental-health-disorders', label: 'Predictive Models for Mental Health Disorders', icon: '🔮' },
                          { id: 'psychotherapy-session-management-systems', label: 'Psychotherapy Session Management Systems', icon: '📅' },
                          { id: 'remote-mental-health-consultations', label: 'Remote Mental Health Consultations', icon: '📞' },
                          { id: 'remote-mental-health-monitoring', label: 'Remote Mental Health Monitoring', icon: '📡' },
                          { id: 'speech-analysis-for-mental-health-detection', label: 'Speech Analysis for Mental Health Detection', icon: '🗣️' },
                          { id: 'social-media-sentiment-monitoring-for-mental-health', label: 'Social Media Sentiment Monitoring for Mental Health', icon: '📱' },
                          { id: 'stress-management-tools', label: 'Stress Management Tools', icon: '🧘' },
                          { id: 'telemedicine-for-mental-health', label: 'Telemedicine for Mental Health', icon: '💻' },
                          { id: 'therapy-progress-tracking', label: 'Therapy Progress Tracking', icon: '📈' },
                          { id: 'virtual-mental-health-counseling', label: 'Virtual Mental Health Counseling', icon: '🏥' },
                          { id: 'virtual-support-groups-for-mental-health', label: 'Virtual Support Groups for Mental Health', icon: '👥' },
                          { id: 'wearable-mental-health-devices', label: 'Wearable Mental Health Devices', icon: '⌚' },
                          { id: 'workforce-mental-health-management', label: 'Workforce Mental Health Management', icon: '👨‍⚕️' },
                          { id: 'workplace-mental-health-monitoring', label: 'Workplace Mental Health Monitoring', icon: '🏢' },
                          { id: 'online-therapy-and-counseling-platforms', label: 'Online Therapy and Counseling Platforms', icon: '💻' },
                          { id: 'patient-provider-communication-platforms-for-mental-health', label: 'Patient-Provider Communication Platforms for Mental Health', icon: '📞' },
                          { id: 'predictive-analytics-for-suicide-prevention', label: 'Predictive Analytics for Suicide Prevention', icon: '🔮' },
                          { id: 'real-time-mental-health-data-collection', label: 'Real-Time Mental Health Data Collection', icon: '⏱️' },
                          { id: 'real-time-crisis-response-systems', label: 'Real-Time Crisis Response Systems', icon: '🚨' },
                          { id: 'smart-journal-and-mood-tracking-apps', label: 'Smart Journal and Mood Tracking Apps', icon: '📓' },
                          { id: 'treatment-plan-automation-for-mental-health', label: 'Treatment Plan Automation for Mental Health', icon: '⚙️' },
                          { id: 'virtual-reality-therapy-for-mental-health', label: 'Virtual Reality Therapy for Mental Health', icon: '🕶️' },
                          { id: 'wellness-and-resilience-building-platforms', label: 'Wellness and Resilience Building Platforms', icon: '🌱' }
        ];
      case 'nursing-and-residential-care':
        return [
                            { id: 'automated-care-plan-development', label: 'Automated Care Plan Development', icon: '📝' },
                            { id: 'automated-clinical-documentation', label: 'Automated Clinical Documentation', icon: '📄' },
                            { id: 'automated-medication-dispensing', label: 'Automated Medication Dispensing', icon: '💊' },
                            { id: 'caregiver-scheduling-systems', label: 'Caregiver Scheduling Systems', icon: '📅' },
                            { id: 'clinical-decision-support-for-nurses', label: 'Clinical Decision Support for Nurses', icon: '🧠' },
                            { id: 'digital-health-record-management', label: 'Digital Health Record Management', icon: '📂' },
                            { id: 'digital-patient-monitoring', label: 'Digital Patient Monitoring', icon: '📈' },
                            { id: 'electronic-health-records-ehr-integration', label: 'Electronic Health Records (EHR) Integration', icon: '📋' },
                            { id: 'electronic-visit-verification-evv', label: 'Electronic Visit Verification (EVV)', icon: '✅' },
                            { id: 'employee-and-staffing-management', label: 'Employee and Staffing Management', icon: '👥' },
                            { id: 'facility-and-bed-management', label: 'Facility and Bed Management', icon: '🏥' },
                            { id: 'health-data-integration-for-nursing-homes', label: 'Health Data Integration for Nursing Homes', icon: '🔗' },
                            { id: 'infection-control-monitoring-systems', label: 'Infection Control Monitoring Systems', icon: '🦠' },
                            { id: 'mobile-health-apps-for-nursing-care', label: 'Mobile Health Apps for Nursing Care', icon: '📱' },
                            { id: 'mobile-patient-monitoring-systems', label: 'Mobile Patient Monitoring Systems', icon: '📲' },
                            { id: 'nursing-staff-training-and-development-platforms', label: 'Nursing Staff Training and Development Platforms', icon: '🎓' },
                            { id: 'nutritional-monitoring-and-management', label: 'Nutritional Monitoring and Management', icon: '🥗' },
                            { id: 'patient-engagement-platforms', label: 'Patient Engagement Platforms', icon: '💬' },
                            { id: 'patient-feedback-collection-systems', label: 'Patient Feedback Collection Systems', icon: '📋' },
                            { id: 'patient-intake-and-registration-automation', label: 'Patient Intake and Registration Automation', icon: '📝' },
                            { id: 'patient-progress-tracking-systems', label: 'Patient Progress Tracking Systems', icon: '📈' },
                            { id: 'personalized-treatment-plan-automation', label: 'Personalized Treatment Plan Automation', icon: '⚙️' },
                            { id: 'predictive-analytics-for-fall-prevention', label: 'Predictive Analytics for Fall Prevention', icon: '🔮' },
                            { id: 'predictive-staffing-solutions', label: 'Predictive Staffing Solutions', icon: '📊' },
                            { id: 'real-time-location-systems-rtls-for-patient-tracking', label: 'Real-Time Location Systems (RTLS) for Patient Tracking', icon: '📍' },
                            { id: 'remote-health-monitoring-for-elderly-patients', label: 'Remote Health Monitoring for Elderly Patients', icon: '📡' },
                            { id: 'remote-patient-consultations', label: 'Remote Patient Consultations', icon: '📞' },
                            { id: 'risk-management-for-residential-care-facilities', label: 'Risk Management for Residential Care Facilities', icon: '⚖️' },
                            { id: 'smart-home-integration-for-senior-care', label: 'Smart Home Integration for Senior Care', icon: '🏠' },
                            { id: 'smart-medication-reminders', label: 'Smart Medication Reminders', icon: '⏰' },
                            { id: 'telemedicine-integration-for-residential-care', label: 'Telemedicine Integration for Residential Care', icon: '💻' },
                            { id: 'treatment-and-therapy-scheduling-systems', label: 'Treatment and Therapy Scheduling Systems', icon: '📅' },
                            { id: 'virtual-consultations-for-residents', label: 'Virtual Consultations for Residents', icon: '🏥' },
                            { id: 'voice-activated-patient-assistance', label: 'Voice-Activated Patient Assistance', icon: '🗣️' },
                            { id: 'virtual-reality-for-senior-mental-health-and-wellness', label: 'Virtual Reality for Senior Mental Health and Wellness', icon: '🕶️' },
                            { id: 'workflow-automation-for-administrative-tasks', label: 'Workflow Automation for Administrative Tasks', icon: '⚙️' },
                            { id: 'wound-care-monitoring-systems', label: 'Wound Care Monitoring Systems', icon: '🩹' },
                            { id: 'wearable-health-devices-for-elderly-care', label: 'Wearable Health Devices for Elderly Care', icon: '⌚' },
                            { id: 'wellness-and-rehabilitation-program-automation', label: 'Wellness and Rehabilitation Program Automation', icon: '🏋️' },
                            { id: 'work-order-management-for-facility-maintenance', label: 'Work Order Management for Facility Maintenance', icon: '🔧' }
        ];
      case 'occupational-health':
        return [
                              { id: 'automated-employee-health-risk-assessments', label: 'Automated Employee Health Risk Assessments', icon: '📝' },
                              { id: 'automated-health-screening-for-employees', label: 'Automated Health Screening for Employees', icon: '🏥' },
                              { id: 'behavioral-health-support-systems-for-workers', label: 'Behavioral Health Support Systems for Workers', icon: '🧠' },
                              { id: 'biometrics-tracking-for-workplace-health', label: 'Biometrics Tracking for Workplace Health', icon: '📊' },
                              { id: 'digital-health-records-for-occupational-health', label: 'Digital Health Records for Occupational Health', icon: '📂' },
                              { id: 'digital-wellness-programs-for-employees', label: 'Digital Wellness Programs for Employees', icon: '💻' },
                              { id: 'employee-fitness-and-wellness-monitoring', label: 'Employee Fitness and Wellness Monitoring', icon: '🏋️' },
                              { id: 'employee-health-and-safety-reporting-systems', label: 'Employee Health and Safety Reporting Systems', icon: '📋' },
                              { id: 'employee-injury-reporting-and-management', label: 'Employee Injury Reporting and Management', icon: '🚑' },
                              { id: 'employee-mental-health-monitoring', label: 'Employee Mental Health Monitoring', icon: '🧠' },
                              { id: 'ergonomic-assessment-tools', label: 'Ergonomic Assessment Tools', icon: '🪑' },
                              { id: 'health-data-integration-for-occupational-health', label: 'Health Data Integration for Occupational Health', icon: '🔗' },
                              { id: 'health-monitoring-wearables-for-workers', label: 'Health Monitoring Wearables for Workers', icon: '⌚' },
                              { id: 'injury-and-illness-tracking-systems', label: 'Injury and Illness Tracking Systems', icon: '📈' },
                              { id: 'job-safety-and-risk-assessment-automation', label: 'Job Safety and Risk Assessment Automation', icon: '⚖️' },
                              { id: 'occupational-disease-management-systems', label: 'Occupational Disease Management Systems', icon: '🦠' },
                              { id: 'occupational-health-compliance-management', label: 'Occupational Health Compliance Management', icon: '✅' },
                              { id: 'personal-protective-equipment-ppe-compliance-tracking', label: 'Personal Protective Equipment (PPE) Compliance Tracking', icon: '🦺' },
                              { id: 'predictive-injury-prevention-systems', label: 'Predictive Injury Prevention Systems', icon: '🔮' },
                              { id: 'preventive-health-and-safety-training-platforms', label: 'Preventive Health and Safety Training Platforms', icon: '📚' },
                              { id: 'real-time-employee-health-monitoring', label: 'Real-Time Employee Health Monitoring', icon: '⏱️' },
                              { id: 'remote-health-consultations-for-employees', label: 'Remote Health Consultations for Employees', icon: '📞' },
                              { id: 'risk-stratification-for-occupational-health', label: 'Risk Stratification for Occupational Health', icon: '📊' },
                              { id: 'smart-workplace-safety-tools', label: 'Smart Workplace Safety Tools', icon: '🦺' },
                              { id: 'smart-wearables-for-employee-health-and-safety', label: 'Smart Wearables for Employee Health and Safety', icon: '⌚' },
                              { id: 'telemedicine-integration-for-occupational-health', label: 'Telemedicine Integration for Occupational Health', icon: '💻' },
                              { id: 'telework-health-and-safety-solutions', label: 'Telework Health and Safety Solutions', icon: '🏡' },
                              { id: 'treatment-and-rehabilitation-tracking-for-workers', label: 'Treatment and Rehabilitation Tracking for Workers', icon: '🏥' },
                              { id: 'vaccine-and-immunization-management-systems', label: 'Vaccine and Immunization Management Systems', icon: '💉' },
                              { id: 'virtual-health-consultations-for-workers', label: 'Virtual Health Consultations for Workers', icon: '🏥' },
                              { id: 'workplace-ergonomics-optimization-systems', label: 'Workplace Ergonomics Optimization Systems', icon: '🪑' },
                              { id: 'workplace-health-and-safety-audits', label: 'Workplace Health and Safety Audits', icon: '🔍' },
                              { id: 'workplace-stress-monitoring-systems', label: 'Workplace Stress Monitoring Systems', icon: '😟' },
                              { id: 'work-injury-claims-management', label: 'Work Injury Claims Management', icon: '📋' },
                              { id: 'work-related-mental-health-programs', label: 'Work-Related Mental Health Programs', icon: '🧠' },
                              { id: 'worksite-health-screening-automation', label: 'Worksite Health Screening Automation', icon: '🏥' },
                              { id: 'worker-fatigue-management-systems', label: 'Worker Fatigue Management Systems', icon: '😴' },
                              { id: 'worker-health-and-wellness-coaching', label: 'Worker Health and Wellness Coaching', icon: '🏋️' },
                              { id: 'workforce-health-data-analytics', label: 'Workforce Health Data Analytics', icon: '📊' },
                              { id: 'workplace-safety-training-automation', label: 'Workplace Safety Training Automation', icon: '📚' }
        ];
      case 'oncology-services':
        return [
                                { id: 'automated-cancer-diagnosis-systems', label: 'Automated Cancer Diagnosis Systems', icon: '🩺' },
                                { id: 'automated-chemotherapy-scheduling', label: 'Automated Chemotherapy Scheduling', icon: '📅' },
                                { id: 'cancer-biomarker-identification-platforms', label: 'Cancer Biomarker Identification Platforms', icon: '🔬' },
                                { id: 'cancer-data-analytics', label: 'Cancer Data Analytics', icon: '📊' },
                                { id: 'clinical-decision-support-for-oncology', label: 'Clinical Decision Support for Oncology', icon: '🧠' },
                                { id: 'clinical-trial-matching-for-cancer-patients', label: 'Clinical Trial Matching for Cancer Patients', icon: '🔗' },
                                { id: 'digital-pathology-for-cancer-diagnosis', label: 'Digital Pathology for Cancer Diagnosis', icon: '🖥️' },
                                { id: 'electronic-health-records-for-oncology', label: 'Electronic Health Records for Oncology', icon: '📂' },
                                { id: 'genetic-testing-for-cancer-risk-assessment', label: 'Genetic Testing for Cancer Risk Assessment', icon: '🧬' },
                                { id: 'image-guided-cancer-treatment-systems', label: 'Image-Guided Cancer Treatment Systems', icon: '🖼️' },
                                { id: 'immunotherapy-treatment-monitoring', label: 'Immunotherapy Treatment Monitoring', icon: '💉' },
                                { id: 'lab-test-result-automation-for-oncology', label: 'Lab Test Result Automation for Oncology', icon: '📋' },
                                { id: 'medical-imaging-analysis-for-tumor-detection', label: 'Medical Imaging Analysis for Tumor Detection', icon: '🩻' },
                                { id: 'personalized-cancer-treatment-planning', label: 'Personalized Cancer Treatment Planning', icon: '🗺️' },
                                { id: 'predictive-analytics-for-cancer-outcomes', label: 'Predictive Analytics for Cancer Outcomes', icon: '🔮' },
                                { id: 'radiation-therapy-planning-and-monitoring', label: 'Radiation Therapy Planning and Monitoring', icon: '⚛️' },
                                { id: 'remote-cancer-patient-monitoring', label: 'Remote Cancer Patient Monitoring', icon: '📡' },
                                { id: 'remote-chemotherapy-administration-tracking', label: 'Remote Chemotherapy Administration Tracking', icon: '📞' },
                                { id: 'robotic-surgery-for-cancer-treatment', label: 'Robotic Surgery for Cancer Treatment', icon: '🤖' },
                                { id: 'screening-and-early-detection-automation', label: 'Screening and Early Detection Automation', icon: '🔍' },
                                { id: 'smart-wearables-for-cancer-patients', label: 'Smart Wearables for Cancer Patients', icon: '⌚' },
                                { id: 'telemedicine-for-oncology-consultations', label: 'Telemedicine for Oncology Consultations', icon: '💻' },
                                { id: 'telehealth-integration-for-cancer-care', label: 'Telehealth Integration for Cancer Care', icon: '🌐' },
                                { id: 'treatment-adherence-monitoring-systems', label: 'Treatment Adherence Monitoring Systems', icon: '📈' },
                                { id: 'tumor-detection-via-smart-imaging', label: 'Tumor Detection via Smart Imaging', icon: '🖼️' },
                                { id: 'tumor-board-management-automation', label: 'Tumor Board Management Automation', icon: '📋' },
                                { id: 'virtual-cancer-care-assistants', label: 'Virtual Cancer Care Assistants', icon: '🤖' },
                                { id: 'virtual-clinical-trials-for-cancer-research', label: 'Virtual Clinical Trials for Cancer Research', icon: '🔬' },
                                { id: 'virtual-reality-for-oncology-patient-education', label: 'Virtual Reality for Oncology Patient Education', icon: '🕶️' },
                                { id: 'workflow-automation-for-oncology-clinics', label: 'Workflow Automation for Oncology Clinics', icon: '⚙️' },
                                { id: 'workload-management-for-oncology-healthcare-providers', label: 'Workload Management for Oncology Healthcare Providers', icon: '📊' },
                                { id: 'clinical-research-data-management-for-cancer-studies', label: 'Clinical Research Data Management for Cancer Studies', icon: '📚' },
                                { id: 'decision-support-for-precision-oncology', label: 'Decision Support for Precision Oncology', icon: '🧠' },
                                { id: 'electronic-prescription-management-for-oncology', label: 'Electronic Prescription Management for Oncology', icon: '💊' },
                                { id: 'immunotherapy-response-prediction', label: 'Immunotherapy Response Prediction', icon: '🔮' },
                                { id: 'lab-data-integration-for-oncology-treatment', label: 'Lab Data Integration for Oncology Treatment', icon: '🔗' },
                                { id: 'patient-outcome-tracking-systems', label: 'Patient Outcome Tracking Systems', icon: '📈' },
                                { id: 'patient-scheduling-systems-for-oncology-services', label: 'Patient Scheduling Systems for Oncology Services', icon: '📅' },
                                { id: 'radiation-dose-optimization-software', label: 'Radiation Dose Optimization Software', icon: '⚛️' },
                                { id: 'treatment-planning-automation-for-oncology', label: 'Treatment Planning Automation for Oncology', icon: '⚙️' }
        ];
      case 'pharmaceutical-benefits-management':
        return [
                                  { id: 'automated-drug-formulary-management', label: 'Automated Drug Formulary Management', icon: '📋' },
                                  { id: 'automated-claims-adjudication', label: 'Automated Claims Adjudication', icon: '⚖️' },
                                  { id: 'benefits-plan-design-automation', label: 'Benefits Plan Design Automation', icon: '📝' },
                                  { id: 'bulk-prescription-order-processing', label: 'Bulk Prescription Order Processing', icon: '📦' },
                                  { id: 'cost-optimization-for-prescription-drugs', label: 'Cost Optimization for Prescription Drugs', icon: '💰' },
                                  { id: 'data-analytics-for-drug-utilization', label: 'Data Analytics for Drug Utilization', icon: '📊' },
                                  { id: 'drug-formularies-price-comparison-tools', label: 'Drug Formularies Price Comparison Tools', icon: '💵' },
                                  { id: 'drug-prior-authorization-automation', label: 'Drug Prior Authorization Automation', icon: '✅' },
                                  { id: 'electronic-prescription-tracking', label: 'Electronic Prescription Tracking', icon: '📲' },
                                  { id: 'eligibility-verification-automation', label: 'Eligibility Verification Automation', icon: '🔍' },
                                  { id: 'formulary-compliance-monitoring', label: 'Formulary Compliance Monitoring', icon: '📋' },
                                  { id: 'health-risk-assessment-for-pharmacy-benefits', label: 'Health Risk Assessment for Pharmacy Benefits', icon: '🩺' },
                                  { id: 'medication-adherence-monitoring', label: 'Medication Adherence Monitoring', icon: '💊' },
                                  { id: 'medication-therapy-management-systems', label: 'Medication Therapy Management Systems', icon: '🧪' },
                                  { id: 'medication-therapy-reconciliation-automation', label: 'Medication Therapy Reconciliation Automation', icon: '🔄' },
                                  { id: 'network-pharmacy-management', label: 'Network Pharmacy Management', icon: '🏪' },
                                  { id: 'online-prescription-refill-systems', label: 'Online Prescription Refill Systems', icon: '🔄' },
                                  { id: 'patient-assistance-program-management', label: 'Patient Assistance Program Management', icon: '🤝' },
                                  { id: 'payment-and-billing-systems-for-pharmacy-benefits', label: 'Payment and Billing Systems for Pharmacy Benefits', icon: '💳' },
                                  { id: 'pharmacy-benefit-claims-processing', label: 'Pharmacy Benefit Claims Processing', icon: '📋' },
                                  { id: 'pharmacy-data-integration-platforms', label: 'Pharmacy Data Integration Platforms', icon: '🔗' },
                                  { id: 'pharmacy-network-optimization', label: 'Pharmacy Network Optimization', icon: '🌐' },
                                  { id: 'personalized-drug-pricing-solutions', label: 'Personalized Drug Pricing Solutions', icon: '💵' },
                                  { id: 'predictive-analytics-for-drug-utilization', label: 'Predictive Analytics for Drug Utilization', icon: '🔮' },
                                  { id: 'predictive-cost-management-for-pharmaceutical-plans', label: 'Predictive Cost Management for Pharmaceutical Plans', icon: '📈' },
                                  { id: 'prescription-cost-control-strategies', label: 'Prescription Cost Control Strategies', icon: '💰' },
                                  { id: 'prescription-drug-abuse-prevention-tools', label: 'Prescription Drug Abuse Prevention Tools', icon: '🚫' },
                                  { id: 'provider-engagement-platforms-for-drug-benefits', label: 'Provider Engagement Platforms for Drug Benefits', icon: '🤝' },
                                  { id: 'real-time-drug-coverage-verification', label: 'Real-Time Drug Coverage Verification', icon: '⏱️' },
                                  { id: 'reimbursement-management-systems', label: 'Reimbursement Management Systems', icon: '💵' },
                                  { id: 'specialty-drug-management-systems', label: 'Specialty Drug Management Systems', icon: '💊' },
                                  { id: 'strategic-drug-sourcing-and-procurement', label: 'Strategic Drug Sourcing and Procurement', icon: '📦' },
                                  { id: 'supply-chain-automation-for-pharmacy-benefits', label: 'Supply Chain Automation for Pharmacy Benefits', icon: '🔗' },
                                  { id: 'telehealth-integration-for-pharmacy-benefits', label: 'Telehealth Integration for Pharmacy Benefits', icon: '💻' },
                                  { id: 'therapeutic-class-management-for-formularies', label: 'Therapeutic Class Management for Formularies', icon: '⚕️' },
                                  { id: 'treatment-pathway-optimization-for-pharmaceutical-benefits', label: 'Treatment Pathway Optimization for Pharmaceutical Benefits', icon: '🛤️' },
                                  { id: 'utilization-management-and-review-systems', label: 'Utilization Management and Review Systems', icon: '📊' },
                                  { id: 'value-based-drug-contracting-systems', label: 'Value-Based Drug Contracting Systems', icon: '💵' },
                                  { id: 'workflow-automation-for-pharmacy-benefit-managers', label: 'Workflow Automation for Pharmacy Benefit Managers', icon: '⚙️' },
                                  { id: 'workflow-optimization-for-pharmacy-benefit-claims', label: 'Workflow Optimization for Pharmacy Benefit Claims', icon: '🔄' }
        ];
      case 'pharmaceuticals':
        return [
                                    { id: 'automated-drug-discovery', label: 'Automated Drug Discovery', icon: '🔍' },
                                    { id: 'automated-drug-manufacturing', label: 'Automated Drug Manufacturing', icon: '🏭' },
                                    { id: 'biopharmaceutical-data-analysis', label: 'Biopharmaceutical Data Analysis', icon: '📊' },
                                    { id: 'clinical-trial-data-management', label: 'Clinical Trial Data Management', icon: '📋' },
                                    { id: 'clinical-trial-recruitment-platforms', label: 'Clinical Trial Recruitment Platforms', icon: '🧑‍⚕️' },
                                    { id: 'clinical-trial-monitoring-systems', label: 'Clinical Trial Monitoring Systems', icon: '🔍' },
                                    { id: 'compliance-and-regulatory-reporting-systems', label: 'Compliance and Regulatory Reporting Systems', icon: '✅' },
                                    { id: 'customized-drug-formulation-platforms', label: 'Customized Drug Formulation Platforms', icon: '⚗️' },
                                    { id: 'drug-batch-testing-automation', label: 'Drug Batch Testing Automation', icon: '🔬' },
                                    { id: 'drug-distribution-and-logistics-management', label: 'Drug Distribution and Logistics Management', icon: '🚚' },
                                    { id: 'drug-formulary-optimization', label: 'Drug Formulary Optimization', icon: '📋' },
                                    { id: 'drug-interaction-screening-systems', label: 'Drug Interaction Screening Systems', icon: '⚠️' },
                                    { id: 'drug-inventory-management-systems', label: 'Drug Inventory Management Systems', icon: '📦' },
                                    { id: 'drug-labeling-and-packaging-automation', label: 'Drug Labeling and Packaging Automation', icon: '📦' },
                                    { id: 'drug-pricing-optimization', label: 'Drug Pricing Optimization', icon: '💵' },
                                    { id: 'drug-production-line-automation', label: 'Drug Production Line Automation', icon: '🏭' },
                                    { id: 'drug-repurposing-platforms', label: 'Drug Repurposing Platforms', icon: '🔄' },
                                    { id: 'drug-safety-monitoring', label: 'Drug Safety Monitoring', icon: '🛡️' },
                                    { id: 'drug-supply-chain-automation', label: 'Drug Supply Chain Automation', icon: '🔗' },
                                    { id: 'drug-target-identification', label: 'Drug Target Identification', icon: '🎯' },
                                    { id: 'electronic-prescription-management', label: 'Electronic Prescription Management', icon: '💊' },
                                    { id: 'inventory-tracking-and-stock-management', label: 'Inventory Tracking and Stock Management', icon: '📦' },
                                    { id: 'medication-adherence-monitoring-systems', label: 'Medication Adherence Monitoring Systems', icon: '📈' },
                                    { id: 'medication-dispensing-automation', label: 'Medication Dispensing Automation', icon: '💊' },
                                    { id: 'online-pharmaceutical-marketing-platforms', label: 'Online Pharmaceutical Marketing Platforms', icon: '🌐' },
                                    { id: 'pharmaceutical-compliance-monitoring', label: 'Pharmaceutical Compliance Monitoring', icon: '✅' },
                                    { id: 'pharmaceutical-contract-manufacturing', label: 'Pharmaceutical Contract Manufacturing', icon: '🏭' },
                                    { id: 'pharmaceutical-customer-relationship-management-crm', label: 'Pharmaceutical Customer Relationship Management (CRM)', icon: '🤝' },
                                    { id: 'pharmaceutical-data-integration-platforms', label: 'Pharmaceutical Data Integration Platforms', icon: '🔗' },
                                    { id: 'pharmaceutical-quality-assurance-systems', label: 'Pharmaceutical Quality Assurance Systems', icon: '🔍' },
                                    { id: 'pharmaceutical-regulatory-compliance-tools', label: 'Pharmaceutical Regulatory Compliance Tools', icon: '📋' },
                                    { id: 'personalized-medicine-platforms', label: 'Personalized Medicine Platforms', icon: '🧬' },
                                    { id: 'predictive-analytics-for-drug-development', label: 'Predictive Analytics for Drug Development', icon: '🔮' },
                                    { id: 'predictive-modeling-for-drug-efficacy', label: 'Predictive Modeling for Drug Efficacy', icon: '📈' },
                                    { id: 'prescription-drug-monitoring-programs', label: 'Prescription Drug Monitoring Programs', icon: '📋' },
                                    { id: 'remote-health-monitoring-for-pharmaceutical-applications', label: 'Remote Health Monitoring for Pharmaceutical Applications', icon: '📡' },
                                    { id: 'supply-chain-traceability-for-pharmaceuticals', label: 'Supply Chain Traceability for Pharmaceuticals', icon: '🔗' },
                                    { id: 'telepharmacy-systems', label: 'Telepharmacy Systems', icon: '💻' },
                                    { id: 'virtual-clinical-trials-for-pharmaceutical-research', label: 'Virtual Clinical Trials for Pharmaceutical Research', icon: '🔬' },
                                    { id: 'workflow-automation-in-pharmaceutical-manufacturing', label: 'Workflow Automation in Pharmaceutical Manufacturing', icon: '⚙️' }
        ];
      case 'pharmacy-services':
        return [
                                      { id: 'automated-prescription-filling', label: 'Automated Prescription Filling', icon: '💊' },
                                      { id: 'automated-medication-dispensing', label: 'Automated Medication Dispensing', icon: '🏭' },
                                      { id: 'barcode-medication-administration-systems', label: 'Barcode Medication Administration Systems', icon: '📦' },
                                      { id: 'clinical-decision-support-for-pharmacists', label: 'Clinical Decision Support for Pharmacists', icon: '🧠' },
                                      { id: 'clinical-pharmacy-workflow-automation', label: 'Clinical Pharmacy Workflow Automation', icon: '⚙️' },
                                      { id: 'compounding-medication-management', label: 'Compounding Medication Management', icon: '⚗️' },
                                      { id: 'customer-relationship-management-for-pharmacies', label: 'Customer Relationship Management for Pharmacies', icon: '🤝' },
                                      { id: 'drug-interaction-checking-and-alerts', label: 'Drug Interaction Checking and Alerts', icon: '⚠️' },
                                      { id: 'drug-inventory-management-systems', label: 'Drug Inventory Management Systems', icon: '📦' },
                                      { id: 'electronic-prescription-transfers', label: 'Electronic Prescription Transfers', icon: '📲' },
                                      { id: 'electronic-health-record-integration-for-pharmacies', label: 'Electronic Health Record Integration for Pharmacies', icon: '📂' },
                                      { id: 'employee-training-and-development-platforms-for-pharmacy-staff', label: 'Employee Training and Development Platforms for Pharmacy Staff', icon: '🎓' },
                                      { id: 'medication-adherence-monitoring', label: 'Medication Adherence Monitoring', icon: '📈' },
                                      { id: 'medication-therapy-management-systems', label: 'Medication Therapy Management Systems', icon: '🧪' },
                                      { id: 'medication-synchronization-tools', label: 'Medication Synchronization Tools', icon: '🔄' },
                                      { id: 'mobile-prescription-refill-platforms', label: 'Mobile Prescription Refill Platforms', icon: '📱' },
                                      { id: 'online-pharmacy-management-systems', label: 'Online Pharmacy Management Systems', icon: '🌐' },
                                      { id: 'order-management-and-fulfillment-automation', label: 'Order Management and Fulfillment Automation', icon: '📦' },
                                      { id: 'pharmacy-benefit-management-integration', label: 'Pharmacy Benefit Management Integration', icon: '🔗' },
                                      { id: 'pharmacy-compliance-tracking', label: 'Pharmacy Compliance Tracking', icon: '✅' },
                                      { id: 'pharmacy-order-verification-automation', label: 'Pharmacy Order Verification Automation', icon: '🔍' },
                                      { id: 'prescription-drug-monitoring-systems', label: 'Prescription Drug Monitoring Systems', icon: '📋' },
                                      { id: 'prescription-pricing-and-discount-tools', label: 'Prescription Pricing and Discount Tools', icon: '💵' },
                                      { id: 'predictive-analytics-for-drug-utilization', label: 'Predictive Analytics for Drug Utilization', icon: '🔮' },
                                      { id: 'remote-patient-counseling-systems', label: 'Remote Patient Counseling Systems', icon: '📞' },
                                      { id: 'remote-medication-monitoring', label: 'Remote Medication Monitoring', icon: '📡' },
                                      { id: 'robotic-prescription-dispensing-systems', label: 'Robotic Prescription Dispensing Systems', icon: '🤖' },
                                      { id: 'smart-pill-bottles-for-medication-tracking', label: 'Smart Pill Bottles for Medication Tracking', icon: '💡' },
                                      { id: 'telepharmacy-services', label: 'Telepharmacy Services', icon: '💻' },
                                      { id: 'telehealth-integration-with-pharmacy-services', label: 'Telehealth Integration with Pharmacy Services', icon: '🌐' },
                                      { id: 'therapeutic-drug-monitoring-systems', label: 'Therapeutic Drug Monitoring Systems', icon: '🧪' },
                                      { id: 'virtual-health-assistance-for-pharmacy-services', label: 'Virtual Health Assistance for Pharmacy Services', icon: '🤖' },
                                      { id: 'virtual-pharmacy-consultations', label: 'Virtual Pharmacy Consultations', icon: '🏥' },
                                      { id: 'workflow-automation-for-pharmacy-operations', label: 'Workflow Automation for Pharmacy Operations', icon: '⚙️' },
                                      { id: 'drug-recall-management-systems', label: 'Drug Recall Management Systems', icon: '🚨' },
                                      { id: 'pharmacy-data-integration-platforms', label: 'Pharmacy Data Integration Platforms', icon: '🔗' },
                                      { id: 'pharmacy-workflow-and-process-optimization', label: 'Pharmacy Workflow and Process Optimization', icon: '📈' },
                                      { id: 'supply-chain-automation-for-pharmacies', label: 'Supply Chain Automation for Pharmacies', icon: '🔗' },
                                      { id: 'vendor-management-systems-for-pharmacy-inventory', label: 'Vendor Management Systems for Pharmacy Inventory', icon: '📦' },
                                      { id: 'voice-activated-pharmacy-services', label: 'Voice-Activated Pharmacy Services', icon: '🗣️' }
        ];
      case 'public-health':
        return [
                                        { id: 'automated-disease-surveillance-systems', label: 'Automated Disease Surveillance Systems', icon: '🔍' },
                                        { id: 'automated-health-data-collection', label: 'Automated Health Data Collection', icon: '📊' },
                                        { id: 'community-health-monitoring-platforms', label: 'Community Health Monitoring Platforms', icon: '🏘️' },
                                        { id: 'contact-tracing-systems', label: 'Contact Tracing Systems', icon: '📞' },
                                        { id: 'data-analytics-for-public-health', label: 'Data Analytics for Public Health', icon: '📈' },
                                        { id: 'disease-prevention-campaign-automation', label: 'Disease Prevention Campaign Automation', icon: '📢' },
                                        { id: 'emergency-response-systems', label: 'Emergency Response Systems', icon: '🚑' },
                                        { id: 'environmental-health-data-tracking', label: 'Environmental Health Data Tracking', icon: '🌍' },
                                        { id: 'epidemiological-research-tools', label: 'Epidemiological Research Tools', icon: '🔬' },
                                        { id: 'health-risk-assessment-platforms', label: 'Health Risk Assessment Platforms', icon: '🩺' },
                                        { id: 'immunization-tracking-and-management', label: 'Immunization Tracking and Management', icon: '💉' },
                                        { id: 'infectious-disease-management-systems', label: 'Infectious Disease Management Systems', icon: '🦠' },
                                        { id: 'mobile-health-apps-for-public-health', label: 'Mobile Health Apps for Public Health', icon: '📱' },
                                        { id: 'patient-outreach-and-engagement-platforms', label: 'Patient Outreach and Engagement Platforms', icon: '🤝' },
                                        { id: 'predictive-modeling-for-disease-outbreaks', label: 'Predictive Modeling for Disease Outbreaks', icon: '🔮' },
                                        { id: 'public-health-education-and-awareness-platforms', label: 'Public Health Education and Awareness Platforms', icon: '📚' },
                                        { id: 'public-health-policy-simulation-tools', label: 'Public Health Policy Simulation Tools', icon: '📊' },
                                        { id: 'quarantine-and-isolation-management-systems', label: 'Quarantine and Isolation Management Systems', icon: '🏠' },
                                        { id: 'remote-health-monitoring-for-populations', label: 'Remote Health Monitoring for Populations', icon: '📡' },
                                        { id: 'reporting-and-compliance-systems-for-public-health', label: 'Reporting and Compliance Systems for Public Health', icon: '✅' },
                                        { id: 'smart-health-infrastructure-management', label: 'Smart Health Infrastructure Management', icon: '🏗️' },
                                        { id: 'social-determinants-of-health-data-collection', label: 'Social Determinants of Health Data Collection', icon: '📊' },
                                        { id: 'telehealth-platforms-for-public-health', label: 'Telehealth Platforms for Public Health', icon: '💻' },
                                        { id: 'vaccine-distribution-and-monitoring-systems', label: 'Vaccine Distribution and Monitoring Systems', icon: '💉' },
                                        { id: 'virtual-health-assistance-for-public-health', label: 'Virtual Health Assistance for Public Health', icon: '🤖' },
                                        { id: 'volunteer-management-for-public-health-campaigns', label: 'Volunteer Management for Public Health Campaigns', icon: '👥' },
                                        { id: 'waste-management-and-environmental-health-tracking', label: 'Waste Management and Environmental Health Tracking', icon: '♻️' },
                                        { id: 'water-quality-monitoring-and-reporting', label: 'Water Quality Monitoring and Reporting', icon: '💧' },
                                        { id: 'workforce-management-for-public-health-programs', label: 'Workforce Management for Public Health Programs', icon: '👨‍⚕️' },
                                        { id: 'health-equity-analysis-tools', label: 'Health Equity Analysis Tools', icon: '⚖️' },
                                        { id: 'mobile-public-health-clinics-scheduling', label: 'Mobile Public Health Clinics Scheduling', icon: '🚑' },
                                        { id: 'population-health-management-platforms', label: 'Population Health Management Platforms', icon: '🌍' },
                                        { id: 'public-health-disaster-response-systems', label: 'Public Health Disaster Response Systems', icon: '🚨' },
                                        { id: 'public-health-research-data-management', label: 'Public Health Research Data Management', icon: '📚' },
                                        { id: 'risk-communication-platforms', label: 'Risk Communication Platforms', icon: '📢' },
                                        { id: 'rural-health-outreach-automation', label: 'Rural Health Outreach Automation', icon: '🏞️' },
                                        { id: 'social-media-monitoring-for-public-health-trends', label: 'Social Media Monitoring for Public Health Trends', icon: '📱' },
                                        { id: 'telemedicine-for-public-health-initiatives', label: 'Telemedicine for Public Health Initiatives', icon: '💻' },
                                        { id: 'treatment-adherence-monitoring-for-populations', label: 'Treatment Adherence Monitoring for Populations', icon: '📈' },
                                        { id: 'wellness-and-preventive-health-monitoring-systems', label: 'Wellness and Preventive Health Monitoring Systems', icon: '🏥' }
        ];
      case 'rehabilitation-services':
        return [
                                          { id: 'automated-rehabilitation-progress-tracking', label: 'Automated Rehabilitation Progress Tracking', icon: '📈' },
                                          { id: 'automated-treatment-plan-generation', label: 'Automated Treatment Plan Generation', icon: '⚙️' },
                                          { id: 'clinical-decision-support-for-rehabilitation', label: 'Clinical Decision Support for Rehabilitation', icon: '🧠' },
                                          { id: 'cognitive-rehabilitation-software', label: 'Cognitive Rehabilitation Software', icon: '🧠' },
                                          { id: 'digital-therapeutics-for-rehabilitation', label: 'Digital Therapeutics for Rehabilitation', icon: '💻' },
                                          { id: 'digital-physical-therapy-programs', label: 'Digital Physical Therapy Programs', icon: '🏋️' },
                                          { id: 'disability-management-systems', label: 'Disability Management Systems', icon: '🦽' },
                                          { id: 'electronic-health-record-integration-for-rehabilitation', label: 'Electronic Health Record Integration for Rehabilitation', icon: '📂' },
                                          { id: 'gamified-rehabilitation-platforms', label: 'Gamified Rehabilitation Platforms', icon: '🎮' },
                                          { id: 'home-based-rehabilitation-solutions', label: 'Home-Based Rehabilitation Solutions', icon: '🏠' },
                                          { id: 'inpatient-rehabilitation-management-systems', label: 'Inpatient Rehabilitation Management Systems', icon: '🏥' },
                                          { id: 'interactive-exercise-and-movement-tracking', label: 'Interactive Exercise and Movement Tracking', icon: '🏃' },
                                          { id: 'mobile-rehabilitation-apps', label: 'Mobile Rehabilitation Apps', icon: '📱' },
                                          { id: 'motion-capture-for-physical-rehabilitation', label: 'Motion Capture for Physical Rehabilitation', icon: '🎥' },
                                          { id: 'music-therapy-software-for-rehabilitation', label: 'Music Therapy Software for Rehabilitation', icon: '🎶' },
                                          { id: 'neurological-rehabilitation-tools', label: 'Neurological Rehabilitation Tools', icon: '🧠' },
                                          { id: 'occupational-therapy-management-software', label: 'Occupational Therapy Management Software', icon: '🧑‍⚕️' },
                                          { id: 'online-rehabilitation-programs', label: 'Online Rehabilitation Programs', icon: '🌐' },
                                          { id: 'patient-engagement-and-education-platforms', label: 'Patient Engagement and Education Platforms', icon: '📚' },
                                          { id: 'post-surgical-rehabilitation-monitoring', label: 'Post-Surgical Rehabilitation Monitoring', icon: '🏥' },
                                          { id: 'predictive-analytics-for-rehabilitation-outcomes', label: 'Predictive Analytics for Rehabilitation Outcomes', icon: '🔮' },
                                          { id: 'personalized-rehabilitation-programs', label: 'Personalized Rehabilitation Programs', icon: '🧩' },
                                          { id: 'physical-therapy-progress-monitoring', label: 'Physical Therapy Progress Monitoring', icon: '📈' },
                                          { id: 'real-time-biofeedback-for-rehabilitation', label: 'Real-Time Biofeedback for Rehabilitation', icon: '⏱️' },
                                          { id: 'remote-physical-therapy-consultations', label: 'Remote Physical Therapy Consultations', icon: '📞' },
                                          { id: 'remote-rehabilitation-monitoring', label: 'Remote Rehabilitation Monitoring', icon: '📡' },
                                          { id: 'robotic-assisted-rehabilitation-systems', label: 'Robotic-Assisted Rehabilitation Systems', icon: '🤖' },
                                          { id: 'rehabilitation-data-analytics', label: 'Rehabilitation Data Analytics', icon: '📊' },
                                          { id: 'rehabilitation-efficiency-optimization-tools', label: 'Rehabilitation Efficiency Optimization Tools', icon: '⚙️' },
                                          { id: 'rehabilitation-workflow-automation', label: 'Rehabilitation Workflow Automation', icon: '⚙️' },
                                          { id: 'respiratory-therapy-systems', label: 'Respiratory Therapy Systems', icon: '💨' },
                                          { id: 'robotic-exoskeletons-for-rehabilitation', label: 'Robotic Exoskeletons for Rehabilitation', icon: '🤖' },
                                          { id: 'smart-wearables-for-rehabilitation', label: 'Smart Wearables for Rehabilitation', icon: '⌚' },
                                          { id: 'speech-and-language-therapy-software', label: 'Speech and Language Therapy Software', icon: '🗣️' },
                                          { id: 'stroke-rehabilitation-management', label: 'Stroke Rehabilitation Management', icon: '🧠' },
                                          { id: 'telehealth-integration-for-rehabilitation', label: 'Telehealth Integration for Rehabilitation', icon: '💻' },
                                          { id: 'tele-rehabilitation-platforms', label: 'Tele-Rehabilitation Platforms', icon: '📞' },
                                          { id: 'treatment-adherence-monitoring-in-rehabilitation', label: 'Treatment Adherence Monitoring in Rehabilitation', icon: '📈' },
                                          { id: 'virtual-reality-for-rehabilitation-therapy', label: 'Virtual Reality for Rehabilitation Therapy', icon: '🕶️' },
                                          { id: 'workforce-management-for-rehabilitation-centers', label: 'Workforce Management for Rehabilitation Centers', icon: '👥' }
        ];
      case 'telemedicine-and-telehealth':
        return [
                                            { id: 'automated-appointment-scheduling', label: 'Automated Appointment Scheduling', icon: '📅' },
                                            { id: 'clinical-decision-support-for-telemedicine', label: 'Clinical Decision Support for Telemedicine', icon: '🧠' },
                                            { id: 'digital-health-records-integration-for-telemedicine', label: 'Digital Health Records Integration for Telemedicine', icon: '📂' },
                                            { id: 'disease-monitoring-platforms', label: 'Disease Monitoring Platforms', icon: '📊' },
                                            { id: 'e-prescription-and-medication-management', label: 'E-Prescription and Medication Management', icon: '💊' },
                                            { id: 'emergency-telemedicine-services', label: 'Emergency Telemedicine Services', icon: '🚑' },
                                            { id: 'health-risk-assessment-tools', label: 'Health Risk Assessment Tools', icon: '🩺' },
                                            { id: 'healthcare-provider-remote-monitoring', label: 'Healthcare Provider Remote Monitoring', icon: '📡' },
                                            { id: 'live-remote-consultations', label: 'Live Remote Consultations', icon: '📞' },
                                            { id: 'mobile-health-apps-for-telehealth', label: 'Mobile Health Apps for Telehealth', icon: '📱' },
                                            { id: 'online-health-education-platforms', label: 'Online Health Education Platforms', icon: '📚' },
                                            { id: 'online-patient-registration-systems', label: 'Online Patient Registration Systems', icon: '📝' },
                                            { id: 'patient-communication-portals', label: 'Patient Communication Portals', icon: '💬' },
                                            { id: 'patient-monitoring-and-alert-systems', label: 'Patient Monitoring and Alert Systems', icon: '🔔' },
                                            { id: 'predictive-analytics-for-telehealth-outcomes', label: 'Predictive Analytics for Telehealth Outcomes', icon: '🔮' },
                                            { id: 'real-time-video-consultations', label: 'Real-Time Video Consultations', icon: '📹' },
                                            { id: 'remote-diagnostic-tools', label: 'Remote Diagnostic Tools', icon: '🔧' },
                                            { id: 'remote-health-data-collection', label: 'Remote Health Data Collection', icon: '📊' },
                                            { id: 'remote-patient-management-platforms', label: 'Remote Patient Management Platforms', icon: '🏥' },
                                            { id: 'telehealth-billing-and-coding-automation', label: 'Telehealth Billing and Coding Automation', icon: '💵' },
                                            { id: 'telehealth-integration-with-ehr-emr-systems', label: 'Telehealth Integration with EHR/EMR Systems', icon: '🔗' },
                                            { id: 'telehealth-for-chronic-disease-management', label: 'Telehealth for Chronic Disease Management', icon: '🩺' },
                                            { id: 'telehealth-for-mental-health-support', label: 'Telehealth for Mental Health Support', icon: '🧠' },
                                            { id: 'telehealth-for-post-surgical-care', label: 'Telehealth for Post-Surgical Care', icon: '🏥' },
                                            { id: 'telehealth-for-preventative-care', label: 'Telehealth for Preventative Care', icon: '🩺' },
                                            { id: 'telehealth-for-rehabilitation-services', label: 'Telehealth for Rehabilitation Services', icon: '🏋️' },
                                            { id: 'telemedicine-for-specialized-care', label: 'Telemedicine for Specialized Care (e.g., dermatology, cardiology)', icon: '🏥' },
                                            { id: 'telemedicine-consultation-platforms', label: 'Telemedicine Consultation Platforms', icon: '💻' },
                                            { id: 'telemedicine-monitoring-for-elderly-care', label: 'Telemedicine Monitoring for Elderly Care', icon: '👵' },
                                            { id: 'telemedicine-workflow-automation', label: 'Telemedicine Workflow Automation', icon: '⚙️' },
                                            { id: 'virtual-health-assistants-for-patients', label: 'Virtual Health Assistants for Patients', icon: '🤖' },
                                            { id: 'virtual-physical-therapy-platforms', label: 'Virtual Physical Therapy Platforms', icon: '🏋️' },
                                            { id: 'virtual-health-coaching-platforms', label: 'Virtual Health Coaching Platforms', icon: '🏃' },
                                            { id: 'virtual-medical-exam-and-consultation-tools', label: 'Virtual Medical Exam and Consultation Tools', icon: '🩺' },
                                            { id: 'wearable-devices-for-telemedicine-integration', label: 'Wearable Devices for Telemedicine Integration', icon: '⌚' },
                                            { id: 'workflow-automation-for-telehealth-providers', label: 'Workflow Automation for Telehealth Providers', icon: '⚙️' },
                                            { id: 'workforce-management-for-telehealth-teams', label: 'Workforce Management for Telehealth Teams', icon: '👥' },
                                            { id: 'remote-health-education-and-training-tools', label: 'Remote Health Education and Training Tools', icon: '📚' },
                                            { id: 'telehealth-solutions-for-rural-healthcare', label: 'Telehealth Solutions for Rural Healthcare', icon: '🏞️' },
                                            { id: 'virtual-urgent-care-services', label: 'Virtual Urgent Care Services', icon: '🚑' }
        ];
      case 'womens-health':
        return [
                                              { id: 'automated-breast-cancer-screening', label: 'Automated Breast Cancer Screening', icon: '🩺' },
                                              { id: 'automated-hormonal-health-tracking', label: 'Automated Hormonal Health Tracking', icon: '📊' },
                                              { id: 'contraceptive-management-platforms', label: 'Contraceptive Management Platforms', icon: '💊' },
                                              { id: 'digital-menstrual-cycle-tracking', label: 'Digital Menstrual Cycle Tracking', icon: '📅' },
                                              { id: 'digital-postpartum-care-monitoring', label: 'Digital Postpartum Care Monitoring', icon: '👶' },
                                              { id: 'digital-pregnancy-monitoring-tools', label: 'Digital Pregnancy Monitoring Tools', icon: '🤰' },
                                              { id: 'electronic-health-records-for-womens-health', label: 'Electronic Health Records for Women’s Health', icon: '📂' },
                                              { id: 'fertility-monitoring-and-tracking', label: 'Fertility Monitoring and Tracking', icon: '🧬' },
                                              { id: 'high-risk-pregnancy-management-systems', label: 'High-Risk Pregnancy Management Systems', icon: '⚠️' },
                                              { id: 'health-risk-assessments-for-women', label: 'Health Risk Assessments for Women', icon: '🩺' },
                                              { id: 'hormone-replacement-therapy-monitoring', label: 'Hormone Replacement Therapy Monitoring', icon: '💊' },
                                              { id: 'mobile-health-apps-for-womens-wellness', label: 'Mobile Health Apps for Women’s Wellness', icon: '📱' },
                                              { id: 'online-reproductive-health-consultations', label: 'Online Reproductive Health Consultations', icon: '💻' },
                                              { id: 'online-womens-health-education-platforms', label: 'Online Women’s Health Education Platforms', icon: '📚' },
                                              { id: 'predictive-analytics-for-womens-health', label: 'Predictive Analytics for Women’s Health', icon: '🔮' },
                                              { id: 'remote-postpartum-support', label: 'Remote Postpartum Support', icon: '📞' },
                                              { id: 'remote-prenatal-care-monitoring', label: 'Remote Prenatal Care Monitoring', icon: '📡' },
                                              { id: 'remote-womens-health-consultations', label: 'Remote Women’s Health Consultations', icon: '📞' },
                                              { id: 'sexual-health-monitoring-platforms', label: 'Sexual Health Monitoring Platforms', icon: '❤️' },
                                              { id: 'telehealth-for-womens-mental-health', label: 'Telehealth for Women’s Mental Health', icon: '🧠' },
                                              { id: 'telemedicine-for-womens-health-services', label: 'Telemedicine for Women’s Health Services', icon: '💻' },
                                              { id: 'virtual-menopause-counseling', label: 'Virtual Menopause Counseling', icon: '🧑‍⚕️' },
                                              { id: 'virtual-pregnancy-consultations', label: 'Virtual Pregnancy Consultations', icon: '🤰' },
                                              { id: 'virtual-rehabilitation-for-postpartum-recovery', label: 'Virtual Rehabilitation for Postpartum Recovery', icon: '🏋️' },
                                              { id: 'voice-activated-patient-assistance', label: 'Voice-Activated Patient Assistance', icon: '🗣️' },
                                              { id: 'wearable-devices-for-womens-health-tracking', label: 'Wearable Devices for Women’s Health Tracking', icon: '⌚' },
                                              { id: 'womens-health-data-analytics', label: 'Women’s Health Data Analytics', icon: '📊' },
                                              { id: 'womens-health-screening-and-risk-management', label: 'Women’s Health Screening and Risk Management', icon: '🔍' },
                                              { id: 'workflow-automation-for-womens-health-clinics', label: 'Workflow Automation for Women’s Health Clinics', icon: '⚙️' },
                                              { id: 'automated-cervical-cancer-screening', label: 'Automated Cervical Cancer Screening', icon: '🩺' },
                                              { id: 'automated-reproductive-health-history-collection', label: 'Automated Reproductive Health History Collection', icon: '📝' },
                                              { id: 'digital-weight-and-fitness-tracking-for-women', label: 'Digital Weight and Fitness Tracking for Women', icon: '⚖️' },
                                              { id: 'endometriosis-management-platforms', label: 'Endometriosis Management Platforms', icon: '🌼' },
                                              { id: 'genetic-testing-for-womens-health-risk-assessment', label: 'Genetic Testing for Women’s Health Risk Assessment', icon: '🧬' },
                                              { id: 'lactation-support-platforms', label: 'Lactation Support Platforms', icon: '🍼' },
                                              { id: 'maternal-health-data-integration', label: 'Maternal Health Data Integration', icon: '📊' },
                                              { id: 'mobile-app-for-breast-health-monitoring', label: 'Mobile App for Breast Health Monitoring', icon: '📱' },
                                              { id: 'smart-devices-for-pelvic-health-monitoring', label: 'Smart Devices for Pelvic Health Monitoring', icon: '🩺' },
                                              { id: 'virtual-support-groups-for-womens-health', label: 'Virtual Support Groups for Women’s Health', icon: '👥' },
                                              { id: 'virtual-womens-health-community-platforms', label: 'Virtual Women’s Health Community Platforms', icon: '🌐' },
                                              { id: 'womens-health-compliance-and-monitoring-systems', label: 'Women’s Health Compliance and Monitoring Systems', icon: '✅' }
        ];
      case 'alternative-and-complementary-medicine':
        return [
                                                { id: 'acupuncture-treatment-scheduling', label: 'Acupuncture Treatment Scheduling', icon: '📅' },
                                                { id: 'aromatherapy-treatment-platforms', label: 'Aromatherapy Treatment Platforms', icon: '🌸' },
                                                { id: 'automated-herbal-remedy-prescriptions', label: 'Automated Herbal Remedy Prescriptions', icon: '💊' },
                                                { id: 'biofeedback-therapy-systems', label: 'Biofeedback Therapy Systems', icon: '🧠' },
                                                { id: 'chiropractic-care-management-systems', label: 'Chiropractic Care Management Systems', icon: '👐' },
                                                { id: 'cognitive-behavioral-therapy-cbt-automation', label: 'Cognitive Behavioral Therapy (CBT) Automation', icon: '🧠' },
                                                { id: 'digital-detox-programs', label: 'Digital Detox Programs', icon: '📵' },
                                                { id: 'digital-health-coaching-for-alternative-medicine', label: 'Digital Health Coaching for Alternative Medicine', icon: '💻' },
                                                { id: 'energy-healing-management-platforms', label: 'Energy Healing Management Platforms', icon: '⚡' },
                                                { id: 'herbal-supplement-tracking', label: 'Herbal Supplement Tracking', icon: '🌿' },
                                                { id: 'holistic-health-data-integration', label: 'Holistic Health Data Integration', icon: '🔗' },
                                                { id: 'homeopathy-consultation-platforms', label: 'Homeopathy Consultation Platforms', icon: '🏥' },
                                                { id: 'meditation-and-mindfulness-program-automation', label: 'Meditation and Mindfulness Program Automation', icon: '🧘' },
                                                { id: 'mobile-health-apps-for-alternative-medicine', label: 'Mobile Health Apps for Alternative Medicine', icon: '📱' },
                                                { id: 'personalized-detoxification-programs', label: 'Personalized Detoxification Programs', icon: '🧪' },
                                                { id: 'predictive-wellness-analytics', label: 'Predictive Wellness Analytics', icon: '🔮' },
                                                { id: 'preventative-health-monitoring-tools', label: 'Preventative Health Monitoring Tools', icon: '🩺' },
                                                { id: 'reflexology-treatment-management-systems', label: 'Reflexology Treatment Management Systems', icon: '👣' },
                                                { id: 'reiki-healing-session-tracking', label: 'Reiki Healing Session Tracking', icon: '👐' },
                                                { id: 'remote-therapy-and-consultation-platforms', label: 'Remote Therapy and Consultation Platforms', icon: '📞' },
                                                { id: 'remote-monitoring-for-holistic-health', label: 'Remote Monitoring for Holistic Health', icon: '📡' },
                                                { id: 'remote-yoga-and-pilates-programs', label: 'Remote Yoga and Pilates Programs', icon: '🧘‍♀️' },
                                                { id: 'sleep-therapy-management-systems', label: 'Sleep Therapy Management Systems', icon: '😴' },
                                                { id: 'smart-wearables-for-complementary-medicine', label: 'Smart Wearables for Complementary Medicine', icon: '⌚' },
                                                { id: 'stress-management-program-automation', label: 'Stress Management Program Automation', icon: '🧘' },
                                                { id: 'telehealth-integration-for-complementary-medicine', label: 'Telehealth Integration for Complementary Medicine', icon: '💻' },
                                                { id: 'traditional-chinese-medicine-tcm-data-integration', label: 'Traditional Chinese Medicine (TCM) Data Integration', icon: '🀄' },
                                                { id: 'virtual-counseling-for-complementary-therapies', label: 'Virtual Counseling for Complementary Therapies', icon: '🏥' },
                                                { id: 'virtual-health-assistants-for-alternative-medicine', label: 'Virtual Health Assistants for Alternative Medicine', icon: '🤖' },
                                                { id: 'virtual-reality-for-alternative-therapies', label: 'Virtual Reality for Alternative Therapies', icon: '🕶️' },
                                                { id: 'wellness-and-preventive-care-monitoring', label: 'Wellness and Preventive Care Monitoring', icon: '🏥' },
                                                { id: 'weight-loss-and-detox-program-automation', label: 'Weight Loss and Detox Program Automation', icon: '⚖️' },
                                                { id: 'therapeutic-massage-scheduling-and-management', label: 'Therapeutic Massage Scheduling and Management', icon: '💆' },
                                                { id: 'smart-meditation-devices', label: 'Smart Meditation Devices', icon: '🧘' },
                                                { id: 'online-nutritional-counseling-platforms', label: 'Online Nutritional Counseling Platforms', icon: '🥗' },
                                                { id: 'online-virtual-healing-circles', label: 'Online Virtual Healing Circles', icon: '🌐' },
                                                { id: 'patient-education-for-holistic-therapies', label: 'Patient Education for Holistic Therapies', icon: '📚' },
                                                { id: 'personal-growth-and-development-tracking', label: 'Personal Growth and Development Tracking', icon: '🌱' },
                                                { id: 'sleep-management-and-monitoring-systems', label: 'Sleep Management and Monitoring Systems', icon: '😴' },
                                                { id: 'wellness-retreat-planning-automation', label: 'Wellness Retreat Planning Automation', icon: '🏖️' }
        ];
      case 'health-insurance':
        return [
                                                  { id: 'automated-claims-processing', label: 'Automated Claims Processing', icon: '📝' },
                                                  { id: 'automated-eligibility-verification', label: 'Automated Eligibility Verification', icon: '✅' },
                                                  { id: 'benefits-management-platforms', label: 'Benefits Management Platforms', icon: '📊' },
                                                  { id: 'claims-adjudication-systems', label: 'Claims Adjudication Systems', icon: '⚖️' },
                                                  { id: 'consumer-health-insurance-portals', label: 'Consumer Health Insurance Portals', icon: '🌐' },
                                                  { id: 'coverage-determination-automation', label: 'Coverage Determination Automation', icon: '🔍' },
                                                  { id: 'cross-platform-patient-data-integration', label: 'Cross-Platform Patient Data Integration', icon: '🔗' },
                                                  { id: 'digital-health-insurance-enrollment', label: 'Digital Health Insurance Enrollment', icon: '💻' },
                                                  { id: 'ehr-integration-for-insurance', label: 'Electronic Health Record (EHR) Integration for Insurance', icon: '📂' },
                                                  { id: 'fraud-detection-in-claims', label: 'Fraud Detection in Claims', icon: '🚨' },
                                                  { id: 'healthcare-cost-transparency-tools', label: 'Healthcare Cost Transparency Tools', icon: '💰' },
                                                  { id: 'health-insurance-data-analytics', label: 'Health Insurance Data Analytics', icon: '📈' },
                                                  { id: 'health-insurance-premium-calculation-automation', label: 'Health Insurance Premium Calculation Automation', icon: '⚖️' },
                                                  { id: 'healthcare-provider-network-management', label: 'Healthcare Provider Network Management', icon: '🏥' },
                                                  { id: 'health-risk-assessment-platforms', label: 'Health Risk Assessment Platforms', icon: '🩺' },
                                                  { id: 'insurance-billing-automation', label: 'Insurance Billing Automation', icon: '💳' },
                                                  { id: 'insurance-claims-monitoring', label: 'Insurance Claims Monitoring', icon: '🔍' },
                                                  { id: 'insurance-reimbursement-optimization', label: 'Insurance Reimbursement Optimization', icon: '💵' },
                                                  { id: 'insurance-verification-tools', label: 'Insurance Verification Tools', icon: '✅' },
                                                  { id: 'mobile-health-insurance-apps', label: 'Mobile Health Insurance Apps', icon: '📱' },
                                                  { id: 'predictive-analytics-for-health-insurance-risk-management', label: 'Predictive Analytics for Health Insurance Risk Management', icon: '🔮' },
                                                  { id: 'preventive-health-incentive-programs', label: 'Preventive Health Incentive Programs', icon: '🎁' },
                                                  { id: 'provider-credentialing-automation', label: 'Provider Credentialing Automation', icon: '📝' },
                                                  { id: 'smart-insurance-benefits-cards', label: 'Smart Insurance Benefits Cards', icon: '💳' },
                                                  { id: 'smart-contracting-systems-for-health-insurance', label: 'Smart Contracting Systems for Health Insurance', icon: '📜' },
                                                  { id: 'social-determinants-of-health-data-integration', label: 'Social Determinants of Health Data Integration', icon: '🌍' },
                                                  { id: 'telemedicine-integration-for-health-insurance', label: 'Telemedicine Integration for Health Insurance', icon: '📞' },
                                                  { id: 'telehealth-coverage-management', label: 'Telehealth Coverage Management', icon: '💻' },
                                                  { id: 'treatment-cost-estimation-tools', label: 'Treatment Cost Estimation Tools', icon: '💰' },
                                                  { id: 'utilization-management-systems', label: 'Utilization Management Systems', icon: '📊' },
                                                  { id: 'value-based-care-payment-solutions', label: 'Value-Based Care Payment Solutions', icon: '💵' },
                                                  { id: 'virtual-health-insurance-assistance', label: 'Virtual Health Insurance Assistance', icon: '🤖' },
                                                  { id: 'wellness-program-integration-for-health-insurance', label: 'Wellness Program Integration for Health Insurance', icon: '🏋️' },
                                                  { id: 'workforce-health-benefits-management', label: 'Workforce Health Benefits Management', icon: '👥' },
                                                  { id: 'worksite-health-insurance-solutions', label: 'Worksite Health Insurance Solutions', icon: '🏢' },
                                                  { id: 'insurance-appeals-management', label: 'Insurance Appeals Management', icon: '📄' },
                                                  { id: 'claims-auditing-tools', label: 'Claims Auditing Tools', icon: '🔍' },
                                                  { id: 'digital-customer-support-for-health-insurance', label: 'Digital Customer Support for Health Insurance', icon: '💬' },
                                                  { id: 'health-insurance-premium-payment-systems', label: 'Health Insurance Premium Payment Systems', icon: '💳' },
                                                  { id: 'virtual-care-benefits-integration', label: 'Virtual Care Benefits Integration', icon: '🌐' }
        ];
      case 'preventive-and-wellness-services':
        return [
                                                    { id: 'automated-health-risk-assessments', label: 'Automated Health Risk Assessments', icon: '🩺' },
                                                    { id: 'behavioral-health-screening-tools', label: 'Behavioral Health Screening Tools', icon: '🧠' },
                                                    { id: 'chronic-disease-management-platforms', label: 'Chronic Disease Management Platforms', icon: '🏥' },
                                                    { id: 'corporate-wellness-programs', label: 'Corporate Wellness Programs', icon: '🏢' },
                                                    { id: 'digital-health-tracking-for-preventive-care', label: 'Digital Health Tracking for Preventive Care', icon: '📱' },
                                                    { id: 'disease-prevention-campaign-automation', label: 'Disease Prevention Campaign Automation', icon: '📢' },
                                                    { id: 'employee-wellness-program-automation', label: 'Employee Wellness Program Automation', icon: '👥' },
                                                    { id: 'environmental-health-monitoring', label: 'Environmental Health Monitoring', icon: '🌍' },
                                                    { id: 'fitness-and-wellness-app-integration', label: 'Fitness and Wellness App Integration', icon: '🏋️' },
                                                    { id: 'genetic-health-risk-assessments', label: 'Genetic Health Risk Assessments', icon: '🧬' },
                                                    { id: 'health-education-platforms', label: 'Health Education Platforms', icon: '📚' },
                                                    { id: 'health-monitoring-wearables', label: 'Health Monitoring Wearables', icon: '⌚' },
                                                    { id: 'health-screening-and-diagnostics-automation', label: 'Health Screening and Diagnostics Automation', icon: '🩺' },
                                                    { id: 'healthy-lifestyle-coaching-platforms', label: 'Healthy Lifestyle Coaching Platforms', icon: '🥗' },
                                                    { id: 'immunization-tracking-and-management', label: 'Immunization Tracking and Management', icon: '💉' },
                                                    { id: 'nutritional-counseling-and-meal-planning', label: 'Nutritional Counseling and Meal Planning', icon: '🍽️' },
                                                    { id: 'online-fitness-and-exercise-programs', label: 'Online Fitness and Exercise Programs', icon: '🏃' },
                                                    { id: 'online-mental-health-and-wellness-counseling', label: 'Online Mental Health and Wellness Counseling', icon: '💬' },
                                                    { id: 'preventive-health-data-analytics', label: 'Preventive Health Data Analytics', icon: '📊' },
                                                    { id: 'preventive-health-education-for-patients', label: 'Preventive Health Education for Patients', icon: '📖' },
                                                    { id: 'preventive-health-screenings-and-check-ups', label: 'Preventive Health Screenings and Check-ups', icon: '🩺' },
                                                    { id: 'preventive-health-tracking-systems', label: 'Preventive Health Tracking Systems', icon: '📈' },
                                                    { id: 'personalized-wellness-plans', label: 'Personalized Wellness Plans', icon: '📝' },
                                                    { id: 'predictive-health-risk-modeling', label: 'Predictive Health Risk Modeling', icon: '🔮' },
                                                    { id: 'remote-patient-monitoring-for-preventive-health', label: 'Remote Patient Monitoring for Preventive Health', icon: '📡' },
                                                    { id: 'remote-wellness-consultations', label: 'Remote Wellness Consultations', icon: '💻' },
                                                    { id: 'sleep-health-monitoring-systems', label: 'Sleep Health Monitoring Systems', icon: '😴' },
                                                    { id: 'smart-health-devices-for-wellness', label: 'Smart Health Devices for Wellness', icon: '📱' },
                                                    { id: 'smart-weight-and-fitness-management', label: 'Smart Weight and Fitness Management', icon: '⚖️' },
                                                    { id: 'social-determinants-of-health-data-integration', label: 'Social Determinants of Health Data Integration', icon: '🌍' },
                                                    { id: 'telemedicine-integration-for-preventive-care', label: 'Telemedicine Integration for Preventive Care', icon: '📞' },
                                                    { id: 'telehealth-for-preventive-services', label: 'Telehealth for Preventive Services', icon: '💻' },
                                                    { id: 'virtual-health-and-wellness-coaching', label: 'Virtual Health and Wellness Coaching', icon: '🤖' },
                                                    { id: 'virtual-preventive-health-workshops', label: 'Virtual Preventive Health Workshops', icon: '🏥' },
                                                    { id: 'virtual-wellness-support-groups', label: 'Virtual Wellness Support Groups', icon: '👥' },
                                                    { id: 'wellness-program-tracking-and-analytics', label: 'Wellness Program Tracking and Analytics', icon: '📊' },
                                                    { id: 'wellness-risk-assessment-tools', label: 'Wellness Risk Assessment Tools', icon: '🛠️' },
                                                    { id: 'workplace-wellness-solutions', label: 'Workplace Wellness Solutions', icon: '🏢' },
                                                    { id: 'weight-management-programs', label: 'Weight Management Programs', icon: '⚖️' },
                                                    { id: 'wellness-outcome-measurement-tools', label: 'Wellness Outcome Measurement Tools', icon: '📏' }
        ];
      case 'health-consulting':
        return [
                                                      { id: 'automated-healthcare-data-analytics', label: 'Automated Healthcare Data Analytics', icon: '📊' },
                                                      { id: 'business-process-optimization-for-healthcare', label: 'Business Process Optimization for Healthcare', icon: '⚙️' },
                                                      { id: 'clinical-workflow-automation', label: 'Clinical Workflow Automation', icon: '🏥' },
                                                      { id: 'compliance-and-regulatory-consulting', label: 'Compliance and Regulatory Consulting', icon: '📜' },
                                                      { id: 'contracting-and-negotiation-automation', label: 'Contracting and Negotiation Automation', icon: '🤝' },
                                                      { id: 'cost-reduction-and-efficiency-consulting', label: 'Cost Reduction and Efficiency Consulting', icon: '💰' },
                                                      { id: 'customized-health-it-solutions', label: 'Customized Health IT Solutions', icon: '💻' },
                                                      { id: 'data-integration-for-healthcare-systems', label: 'Data Integration for Healthcare Systems', icon: '🔗' },
                                                      { id: 'ehr-implementation', label: 'Electronic Health Record (EHR) Implementation', icon: '📂' },
                                                      { id: 'ehr-optimization', label: 'Electronic Health Record Optimization', icon: '⚙️' },
                                                      { id: 'healthcare-compliance-monitoring', label: 'Healthcare Compliance Monitoring', icon: '🔍' },
                                                      { id: 'healthcare-data-security-consulting', label: 'Healthcare Data Security Consulting', icon: '🔒' },
                                                      { id: 'healthcare-financial-management-consulting', label: 'Healthcare Financial Management Consulting', icon: '💵' },
                                                      { id: 'healthcare-quality-assurance-and-improvement', label: 'Healthcare Quality Assurance and Improvement', icon: '⭐' },
                                                      { id: 'healthcare-staffing-solutions', label: 'Healthcare Staffing Solutions', icon: '👥' },
                                                      { id: 'healthcare-strategy-and-operational-consulting', label: 'Healthcare Strategy and Operational Consulting', icon: '📈' },
                                                      { id: 'health-information-exchange-solutions', label: 'Health Information Exchange (HIE) Solutions', icon: '🌐' },
                                                      { id: 'health-insurance-navigation-services', label: 'Health Insurance Navigation Services', icon: '🗺️' },
                                                      { id: 'healthcare-business-intelligence-solutions', label: 'Healthcare Business Intelligence Solutions', icon: '📊' },
                                                      { id: 'healthcare-management-system-integration', label: 'Healthcare Management System Integration', icon: '🔗' },
                                                      { id: 'healthcare-marketing-automation', label: 'Healthcare Marketing Automation', icon: '📣' },
                                                      { id: 'healthcare-performance-improvement-programs', label: 'Healthcare Performance Improvement Programs', icon: '📈' },
                                                      { id: 'healthcare-process-redesign-and-automation', label: 'Healthcare Process Redesign and Automation', icon: '🔄' },
                                                      { id: 'healthcare-risk-management-solutions', label: 'Healthcare Risk Management Solutions', icon: '⚠️' },
                                                      { id: 'healthcare-software-integration-and-customization', label: 'Healthcare Software Integration and Customization', icon: '🛠️' },
                                                      { id: 'hospital-and-facility-operations-optimization', label: 'Hospital and Facility Operations Optimization', icon: '🏥' },
                                                      { id: 'hospital-readmission-prevention-consulting', label: 'Hospital Readmission Prevention Consulting', icon: '🚫' },
                                                      { id: 'human-resources-management-for-healthcare-providers', label: 'Human Resources Management for Healthcare Providers', icon: '👔' },
                                                      { id: 'integrated-care-management-consulting', label: 'Integrated Care Management Consulting', icon: '🔗' },
                                                      { id: 'it-systems-consulting-for-healthcare-providers', label: 'IT Systems Consulting for Healthcare Providers', icon: '💻' },
                                                      { id: 'it-system-optimization-for-healthcare', label: 'IT System Optimization for Healthcare', icon: '⚙️' },
                                                      { id: 'medical-billing-and-coding-consulting', label: 'Medical Billing and Coding Consulting', icon: '💳' },
                                                      { id: 'patient-experience-and-engagement-consulting', label: 'Patient Experience and Engagement Consulting', icon: '😊' },
                                                      { id: 'patient-flow-optimization-consulting', label: 'Patient Flow Optimization Consulting', icon: '🚶' },
                                                      { id: 'patient-privacy-and-hipaa-compliance', label: 'Patient Privacy and HIPAA Compliance', icon: '🔒' },
                                                      { id: 'population-health-management-consulting', label: 'Population Health Management Consulting', icon: '🌍' },
                                                      { id: 'telehealth-consulting-services', label: 'Telehealth Consulting Services', icon: '📞' },
                                                      { id: 'telemedicine-strategy-consulting', label: 'Telemedicine Strategy Consulting', icon: '💡' },
                                                      { id: 'value-based-care-consulting', label: 'Value-Based Care Consulting', icon: '💵' },
                                                      { id: 'virtual-health-and-wellness-solutions', label: 'Virtual Health and Wellness Solutions', icon: '🌐' }
        ];
      case 'health-finance':
        return [
                                                        { id: 'automated-billing-and-invoicing-systems', label: 'Automated Billing and Invoicing Systems', icon: '💼' },
                                                        { id: 'automated-claims-processing', label: 'Automated Claims Processing', icon: '📝' },
                                                        { id: 'claims-reimbursement-optimization', label: 'Claims Reimbursement Optimization', icon: '💵' },
                                                        { id: 'cost-estimation-tools-for-healthcare-services', label: 'Cost Estimation Tools for Healthcare Services', icon: '💰' },
                                                        { id: 'financial-reporting-automation', label: 'Financial Reporting Automation', icon: '📊' },
                                                        { id: 'healthcare-account-management-systems', label: 'Healthcare Account Management Systems', icon: '🏦' },
                                                        { id: 'healthcare-budgeting-and-forecasting-software', label: 'Healthcare Budgeting and Forecasting Software', icon: '📈' },
                                                        { id: 'healthcare-cost-analysis-tools', label: 'Healthcare Cost Analysis Tools', icon: '🔍' },
                                                        { id: 'healthcare-financial-data-analytics', label: 'Healthcare Financial Data Analytics', icon: '📊' },
                                                        { id: 'healthcare-financial-compliance-automation', label: 'Healthcare Financial Compliance Automation', icon: '✅' },
                                                        { id: 'healthcare-payment-solutions', label: 'Healthcare Payment Solutions', icon: '💳' },
                                                        { id: 'healthcare-provider-payment-processing', label: 'Healthcare Provider Payment Processing', icon: '🏥' },
                                                        { id: 'insurance-eligibility-and-verification-systems', label: 'Insurance Eligibility and Verification Systems', icon: '✅' },
                                                        { id: 'invoice-reconciliation-systems', label: 'Invoice Reconciliation Systems', icon: '📄' },
                                                        { id: 'medical-billing-automation', label: 'Medical Billing Automation', icon: '💻' },
                                                        { id: 'patient-billing-and-payment-systems', label: 'Patient Billing and Payment Systems', icon: '💳' },
                                                        { id: 'patient-payment-portal-integration', label: 'Patient Payment Portal Integration', icon: '🌐' },
                                                        { id: 'payroll-systems-for-healthcare-providers', label: 'Payroll Systems for Healthcare Providers', icon: '💼' },
                                                        { id: 'predictive-financial-analytics-for-healthcare', label: 'Predictive Financial Analytics for Healthcare', icon: '🔮' },
                                                        { id: 'provider-payment-optimization', label: 'Provider Payment Optimization', icon: '⚖️' },
                                                        { id: 'revenue-cycle-management-automation', label: 'Revenue Cycle Management Automation', icon: '📈' },
                                                        { id: 'risk-based-payment-models-for-healthcare', label: 'Risk-Based Payment Models for Healthcare', icon: '⚖️' },
                                                        { id: 'self-pay-management-systems', label: 'Self-Pay Management Systems', icon: '💵' },
                                                        { id: 'telemedicine-payment-integration', label: 'Telemedicine Payment Integration', icon: '📞' },
                                                        { id: 'telehealth-financial-solutions', label: 'Telehealth Financial Solutions', icon: '💻' },
                                                        { id: 'value-based-care-payment-models', label: 'Value-Based Care Payment Models', icon: '💵' },
                                                        { id: 'vendor-and-contract-management-for-healthcare-providers', label: 'Vendor and Contract Management for Healthcare Providers', icon: '📜' },
                                                        { id: 'workforce-cost-management-in-healthcare', label: 'Workforce Cost Management in Healthcare', icon: '👥' },
                                                        { id: 'cost-control-systems-for-healthcare-providers', label: 'Cost Control Systems for Healthcare Providers', icon: '💰' },
                                                        { id: 'insurance-claims-denial-management', label: 'Insurance Claims Denial Management', icon: '🚫' },
                                                        { id: 'financial-risk-management-systems-for-healthcare', label: 'Financial Risk Management Systems for Healthcare', icon: '⚠️' },
                                                        { id: 'integrated-payment-solutions-for-health-systems', label: 'Integrated Payment Solutions for Health Systems', icon: '🔗' },
                                                        { id: 'patient-financial-assistance-programs', label: 'Patient Financial Assistance Programs', icon: '🤝' },
                                                        { id: 'payment-gateway-integration-for-healthcare-services', label: 'Payment Gateway Integration for Healthcare Services', icon: '💳' },
                                                        { id: 'real-time-financial-data-visualization', label: 'Real-Time Financial Data Visualization', icon: '📊' },
                                                        { id: 'reimbursement-rate-optimization', label: 'Reimbursement Rate Optimization', icon: '💵' },
                                                        { id: 'revenue-forecasting-for-healthcare-organizations', label: 'Revenue Forecasting for Healthcare Organizations', icon: '📈' },
                                                        { id: 'smart-contracting-systems-for-healthcare-payments', label: 'Smart Contracting Systems for Healthcare Payments', icon: '📜' },
                                                        { id: 'taxation-and-compliance-solutions-for-healthcare-providers', label: 'Taxation and Compliance Solutions for Healthcare Providers', icon: '🧾' },
                                                        { id: 'workflow-automation-for-healthcare-billing-departments', label: 'Workflow Automation for Healthcare Billing Departments', icon: '🔄' }
        ];
      case 'health-care-innovation-entrepreneurship':
        return [
                                                          { id: 'automated-healthcare-startups', label: 'Automated Healthcare Startups', icon: '🚀' },
                                                          { id: 'clinical-trial-innovation-platforms', label: 'Clinical Trial Innovation Platforms', icon: '🧪' },
                                                          { id: 'digital-health-solutions-for-patient-engagement', label: 'Digital Health Solutions for Patient Engagement', icon: '💻' },
                                                          { id: 'digital-therapeutics-development', label: 'Digital Therapeutics Development', icon: '💊' },
                                                          { id: 'disease-prevention-and-management-solutions', label: 'Disease Prevention and Management Solutions', icon: '🩺' },
                                                          { id: 'e-health-and-telemedicine-startups', label: 'E-health and Telemedicine Startups', icon: '📞' },
                                                          { id: 'health-data-integration-platforms', label: 'Health Data Integration Platforms', icon: '🔗' },
                                                          { id: 'healthcare-blockchain-solutions', label: 'Healthcare Blockchain Solutions', icon: '🔒' },
                                                          { id: 'healthcare-crowdsourcing-platforms', label: 'Healthcare Crowdsourcing Platforms', icon: '👥' },
                                                          { id: 'healthcare-data-analytics-startups', label: 'Healthcare Data Analytics Startups', icon: '📊' },
                                                          { id: 'healthcare-digital-transformation-solutions', label: 'Healthcare Digital Transformation Solutions', icon: '🔄' },
                                                          { id: 'healthcare-iot-startups', label: 'Healthcare IoT Startups', icon: '📡' },
                                                          { id: 'healthcare-innovation-consulting', label: 'Healthcare Innovation Consulting', icon: '💡' },
                                                          { id: 'healthcare-mobile-application-development', label: 'Healthcare Mobile Application Development', icon: '📱' },
                                                          { id: 'healthcare-payment-models-innovation', label: 'Healthcare Payment Models Innovation', icon: '💳' },
                                                          { id: 'health-monitoring-wearables-and-devices', label: 'Health Monitoring Wearables and Devices', icon: '⌚' },
                                                          { id: 'hospital-workflow-optimization-solutions', label: 'Hospital Workflow Optimization Solutions', icon: '🏥' },
                                                          { id: 'hospital-and-clinic-management-systems', label: 'Hospital and Clinic Management Systems', icon: '🏥' },
                                                          { id: 'personalized-medicine-startups', label: 'Personalized Medicine Startups', icon: '🧬' },
                                                          { id: 'predictive-health-analytics-platforms', label: 'Predictive Health Analytics Platforms', icon: '🔮' },
                                                          { id: 'preventive-healthcare-solutions', label: 'Preventive Healthcare Solutions', icon: '🩺' },
                                                          { id: 'precision-medicine-startups', label: 'Precision Medicine Startups', icon: '🧪' },
                                                          { id: 'remote-patient-monitoring-solutions', label: 'Remote Patient Monitoring Solutions', icon: '📡' },
                                                          { id: 'remote-surgery-and-robotics-startups', label: 'Remote Surgery and Robotics Startups', icon: '🤖' },
                                                          { id: 'smart-health-infrastructure-solutions', label: 'Smart Health Infrastructure Solutions', icon: '🏗️' },
                                                          { id: 'telehealth-integration-platforms', label: 'Telehealth Integration Platforms', icon: '📞' },
                                                          { id: 'telemedicine-business-models', label: 'Telemedicine Business Models', icon: '💼' },
                                                          { id: 'virtual-care-platforms', label: 'Virtual Care Platforms', icon: '🌐' },
                                                          { id: 'virtual-health-coaching-startups', label: 'Virtual Health Coaching Startups', icon: '🤝' },
                                                          { id: 'virtual-health-clinics-development', label: 'Virtual Health Clinics Development', icon: '🏥' },
                                                          { id: 'wearable-health-tech-startups', label: 'Wearable Health Tech Startups', icon: '⌚' },
                                                          { id: 'wellness-and-mental-health-digital-solutions', label: 'Wellness and Mental Health Digital Solutions', icon: '🧠' },
                                                          { id: 'workflow-automation-for-healthcare-providers', label: 'Workflow Automation for Healthcare Providers', icon: '🔄' },
                                                          { id: 'workplace-wellness-and-health-solutions', label: 'Workplace Wellness and Health Solutions', icon: '🏢' },
                                                          { id: 'digital-therapeutics-for-chronic-conditions', label: 'Digital Therapeutics for Chronic Conditions', icon: '💊' },
                                                          { id: 'health-innovation-and-accelerator-programs', label: 'Health Innovation and Accelerator Programs', icon: '🚀' },
                                                          { id: 'integrative-healthcare-service-platforms', label: 'Integrative Healthcare Service Platforms', icon: '🔗' },
                                                          { id: 'personalized-wellness-solutions', label: 'Personalized Wellness Solutions', icon: '🌱' },
                                                          { id: 'population-health-management-innovations', label: 'Population Health Management Innovations', icon: '🌍' },
                                                          { id: 'value-based-healthcare-solutions', label: 'Value-Based Healthcare Solutions', icon: '💵' }
        ];
      case 'veterinary-healthcare':
        return [
                                                            { id: 'automated-animal-health-monitoring', label: 'Automated Animal Health Monitoring', icon: '🐾' },
                                                            { id: 'automated-pet-appointment-scheduling', label: 'Automated Pet Appointment Scheduling', icon: '📅' },
                                                            { id: 'animal-behavior-tracking-systems', label: 'Animal Behavior Tracking Systems', icon: '🐕' },
                                                            { id: 'animal-care-management-software', label: 'Animal Care Management Software', icon: '📋' },
                                                            { id: 'animal-diagnostic-tools-automation', label: 'Animal Diagnostic Tools Automation', icon: '🔬' },
                                                            { id: 'animal-health-data-analytics', label: 'Animal Health Data Analytics', icon: '📊' },
                                                            { id: 'animal-medication-management-systems', label: 'Animal Medication Management Systems', icon: '💊' },
                                                            { id: 'automated-veterinary-clinic-management', label: 'Automated Veterinary Clinic Management', icon: '🏥' },
                                                            { id: 'chronic-disease-management-for-animals', label: 'Chronic Disease Management for Animals', icon: '🐾' },
                                                            { id: 'client-communication-platforms-for-veterinary-care', label: 'Client Communication Platforms for Veterinary Care', icon: '💬' },
                                                            { id: 'clinical-decision-support-for-veterinary-practices', label: 'Clinical Decision Support for Veterinary Practices', icon: '🩺' },
                                                            { id: 'diagnostic-imaging-systems-for-veterinary-use', label: 'Diagnostic Imaging Systems for Veterinary Use', icon: '🖥️' },
                                                            { id: 'electronic-health-records-for-veterinary-clinics', label: 'Electronic Health Records for Veterinary Clinics', icon: '📂' },
                                                            { id: 'pet-insurance-claim-management-automation', label: 'Pet Insurance Claim Management Automation', icon: '📄' },
                                                            { id: 'pet-owner-education-platforms', label: 'Pet Owner Education Platforms', icon: '📚' },
                                                            { id: 'pet-wellness-tracking-and-management', label: 'Pet Wellness Tracking and Management', icon: '🐶' },
                                                            { id: 'predictive-analytics-for-animal-health', label: 'Predictive Analytics for Animal Health', icon: '🔮' },
                                                            { id: 'preventive-care-solutions-for-pets', label: 'Preventive Care Solutions for Pets', icon: '🩺' },
                                                            { id: 'prescription-management-for-veterinary-care', label: 'Prescription Management for Veterinary Care', icon: '💊' },
                                                            { id: 'real-time-monitoring-of-animal-vital-signs', label: 'Real-Time Monitoring of Animal Vital Signs', icon: '📈' },
                                                            { id: 'remote-veterinary-consultations', label: 'Remote Veterinary Consultations', icon: '📞' },
                                                            { id: 'smart-wearables-for-pets', label: 'Smart Wearables for Pets', icon: '⌚' },
                                                            { id: 'telemedicine-for-veterinary-practices', label: 'Telemedicine for Veterinary Practices', icon: '💻' },
                                                            { id: 'telehealth-platforms-for-animal-care', label: 'Telehealth Platforms for Animal Care', icon: '🌐' },
                                                            { id: 'veterinary-e-prescription-systems', label: 'Veterinary E-prescription Systems', icon: '📜' },
                                                            { id: 'veterinary-practice-billing-automation', label: 'Veterinary Practice Billing Automation', icon: '💰' },
                                                            { id: 'veterinary-radiology-and-imaging-automation', label: 'Veterinary Radiology and Imaging Automation', icon: '🖥️' },
                                                            { id: 'virtual-health-assistants-for-pet-care', label: 'Virtual Health Assistants for Pet Care', icon: '🤖' },
                                                            { id: 'virtual-pet-health-consultations', label: 'Virtual Pet Health Consultations', icon: '🏥' },
                                                            { id: 'wearable-health-devices-for-animals', label: 'Wearable Health Devices for Animals', icon: '⌚' },
                                                            { id: 'workflow-automation-for-veterinary-practices', label: 'Workflow Automation for Veterinary Practices', icon: '🔄' },
                                                            { id: 'animal-surgery-and-procedure-assistance', label: 'Animal Surgery and Procedure Assistance', icon: '🩺' },
                                                            { id: 'animal-vaccination-tracking', label: 'Animal Vaccination Tracking', icon: '💉' },
                                                            { id: 'disease-surveillance-systems-for-animals', label: 'Disease Surveillance Systems for Animals', icon: '🔍' },
                                                            { id: 'pet-health-monitoring-wearables', label: 'Pet Health Monitoring Wearables', icon: '⌚' },
                                                            { id: 'remote-pet-health-monitoring-solutions', label: 'Remote Pet Health Monitoring Solutions', icon: '📡' },
                                                            { id: 'smart-pet-health-devices', label: 'Smart Pet Health Devices', icon: '🐾' },
                                                            { id: 'veterinary-staff-scheduling-systems', label: 'Veterinary Staff Scheduling Systems', icon: '📅' },
                                                            { id: 'veterinary-supply-chain-automation', label: 'Veterinary Supply Chain Automation', icon: '🔗' },
                                                            { id: 'veterinary-telemedicine-systems-for-rural-areas', label: 'Veterinary Telemedicine Systems for Rural Areas', icon: '🌄' }
        ];
      case 'wellness-and-fitness':
        return [
                                                              { id: 'automated-fitness-tracking', label: 'Automated Fitness Tracking', icon: '🏋️' },
                                                              { id: 'body-composition-analysis-systems', label: 'Body Composition Analysis Systems', icon: '📊' },
                                                              { id: 'digital-personal-training-platforms', label: 'Digital Personal Training Platforms', icon: '💻' },
                                                              { id: 'digital-wellness-coaching', label: 'Digital Wellness Coaching', icon: '🌐' },
                                                              { id: 'fitness-program-personalization', label: 'Fitness Program Personalization', icon: '📝' },
                                                              { id: 'health-and-wellness-app-integration', label: 'Health and Wellness App Integration', icon: '📱' },
                                                              { id: 'health-monitoring-wearables', label: 'Health Monitoring Wearables', icon: '⌚' },
                                                              { id: 'interactive-fitness-classes-and-virtual-training', label: 'Interactive Fitness Classes and Virtual Training', icon: '🎥' },
                                                              { id: 'meditation-and-mindfulness-program-automation', label: 'Meditation and Mindfulness Program Automation', icon: '🧘' },
                                                              { id: 'nutritional-tracking-and-meal-planning', label: 'Nutritional Tracking and Meal Planning', icon: '🥗' },
                                                              { id: 'online-fitness-community-platforms', label: 'Online Fitness Community Platforms', icon: '👥' },
                                                              { id: 'personal-health-dashboard', label: 'Personal Health Dashboard', icon: '📊' },
                                                              { id: 'real-time-fitness-data-analytics', label: 'Real-Time Fitness Data Analytics', icon: '📈' },
                                                              { id: 'remote-fitness-and-wellness-coaching', label: 'Remote Fitness and Wellness Coaching', icon: '📞' },
                                                              { id: 'remote-health-monitoring-solutions', label: 'Remote Health Monitoring Solutions', icon: '📡' },
                                                              { id: 'sleep-tracking-and-optimization-systems', label: 'Sleep Tracking and Optimization Systems', icon: '😴' },
                                                              { id: 'smart-workout-equipment', label: 'Smart Workout Equipment', icon: '🏋️‍♂️' },
                                                              { id: 'smart-fitness-apparel', label: 'Smart Fitness Apparel', icon: '👕' },
                                                              { id: 'smart-nutrition-and-supplementation-solutions', label: 'Smart Nutrition and Supplementation Solutions', icon: '💊' },
                                                              { id: 'smart-water-intake-monitoring', label: 'Smart Water Intake Monitoring', icon: '💧' },
                                                              { id: 'stress-management-platforms', label: 'Stress Management Platforms', icon: '🧘‍♀️' },
                                                              { id: 'virtual-fitness-classes-and-programs', label: 'Virtual Fitness Classes and Programs', icon: '🎥' },
                                                              { id: 'virtual-health-assistant-for-wellness', label: 'Virtual Health Assistant for Wellness', icon: '🤖' },
                                                              { id: 'virtual-personal-trainers', label: 'Virtual Personal Trainers', icon: '👤' },
                                                              { id: 'wearable-fitness-devices-and-integration', label: 'Wearable Fitness Devices and Integration', icon: '⌚' },
                                                              { id: 'wellness-and-fitness-gamification', label: 'Wellness and Fitness Gamification', icon: '🎮' },
                                                              { id: 'fitness-progression-tracking-systems', label: 'Fitness Progression Tracking Systems', icon: '📈' },
                                                              { id: 'heart-rate-variability-monitoring-tools', label: 'Heart Rate Variability Monitoring Tools', icon: '❤️' },
                                                              { id: 'injury-prevention-and-recovery-programs', label: 'Injury Prevention and Recovery Programs', icon: '🩹' },
                                                              { id: 'mobility-and-flexibility-training-tools', label: 'Mobility and Flexibility Training Tools', icon: '🧘' },
                                                              { id: 'online-wellness-consultations', label: 'Online Wellness Consultations', icon: '💻' },
                                                              { id: 'online-yoga-and-pilates-programs', label: 'Online Yoga and Pilates Programs', icon: '🧘‍♀️' },
                                                              { id: 'physical-therapy-and-rehabilitation-solutions', label: 'Physical Therapy and Rehabilitation Solutions', icon: '🏥' },
                                                              { id: 'predictive-health-and-fitness-analytics', label: 'Predictive Health and Fitness Analytics', icon: '🔮' },
                                                              { id: 'real-time-workout-feedback-systems', label: 'Real-Time Workout Feedback Systems', icon: '📊' },
                                                              { id: 'wellness-challenges-and-tracking-platforms', label: 'Wellness Challenges and Tracking Platforms', icon: '🏆' },
                                                              { id: 'workplace-wellness-solutions', label: 'Workplace Wellness Solutions', icon: '🏢' },
                                                              { id: 'customized-fitness-and-wellness-plans', label: 'Customized Fitness and Wellness Plans', icon: '📝' },
                                                              { id: 'wellness-retreat-and-event-management-software', label: 'Wellness Retreat and Event Management Software', icon: '🏖️' },
                                                              { id: 'weight-loss-program-automation', label: 'Weight Loss Program Automation', icon: '⚖️' }
        ];
      case 'genomic-medicine':
        return [
                                                                { id: 'automated-genetic-data-analysis', label: 'Automated Genetic Data Analysis', icon: '🧬' },
                                                                { id: 'bioinformatics-for-genomic-research', label: 'Bioinformatics for Genomic Research', icon: '🔬' },
                                                                { id: 'cancer-genomics-solutions', label: 'Cancer Genomics Solutions', icon: '🎗️' },
                                                                { id: 'clinical-genomic-testing-platforms', label: 'Clinical Genomic Testing Platforms', icon: '🏥' },
                                                                { id: 'dna-sequencing-automation', label: 'DNA Sequencing Automation', icon: '🧬' },
                                                                { id: 'genomic-data-interpretation-tools', label: 'Genomic Data Interpretation Tools', icon: '📊' },
                                                                { id: 'genomic-variant-annotation-systems', label: 'Genomic Variant Annotation Systems', icon: '📝' },
                                                                { id: 'genomic-data-integration-with-ehrs', label: 'Genomic Data Integration with EHRs', icon: '🔗' },
                                                                { id: 'genomic-diagnostics-for-rare-diseases', label: 'Genomic Diagnostics for Rare Diseases', icon: '🧬' },
                                                                { id: 'genetic-counseling-automation', label: 'Genetic Counseling Automation', icon: '👩‍⚕️' },
                                                                { id: 'genetic-data-management-systems', label: 'Genetic Data Management Systems', icon: '💻' },
                                                                { id: 'gwas-automation', label: 'Genome-Wide Association Studies (GWAS) Automation', icon: '📊' },
                                                                { id: 'genome-editing-tools-for-therapy', label: 'Genome Editing Tools for Therapy', icon: '🧬' },
                                                                { id: 'genome-sequencing-and-diagnostics', label: 'Genome Sequencing and Diagnostics', icon: '🔬' },
                                                                { id: 'hereditary-disease-risk-prediction-systems', label: 'Hereditary Disease Risk Prediction Systems', icon: '🔮' },
                                                                { id: 'pharmacogenomic-testing-platforms', label: 'Pharmacogenomic Testing Platforms', icon: '💊' },
                                                                { id: 'precision-medicine-platforms-for-genomics', label: 'Precision Medicine Platforms for Genomics', icon: '🧪' },
                                                                { id: 'predictive-genetic-testing-solutions', label: 'Predictive Genetic Testing Solutions', icon: '🔍' },
                                                                { id: 'personalized-genomic-treatment-plans', label: 'Personalized Genomic Treatment Plans', icon: '📝' },
                                                                { id: 'population-genomics-databases', label: 'Population Genomics Databases', icon: '🌍' },
                                                                { id: 'rare-genetic-mutation-detection-systems', label: 'Rare Genetic Mutation Detection Systems', icon: '🔬' },
                                                                { id: 'real-time-genomic-data-collection', label: 'Real-Time Genomic Data Collection', icon: '📡' },
                                                                { id: 'research-tools-for-genomic-studies', label: 'Research Tools for Genomic Studies', icon: '🔬' },
                                                                { id: 'rna-sequencing-automation', label: 'RNA Sequencing Automation', icon: '🧬' },
                                                                { id: 'smart-genetic-testing-kits', label: 'Smart Genetic Testing Kits', icon: '🧬' },
                                                                { id: 'snp-detection-systems', label: 'SNP (Single Nucleotide Polymorphism) Detection Systems', icon: '🔍' },
                                                                { id: 'software-for-gene-expression-analysis', label: 'Software for Gene Expression Analysis', icon: '💻' },
                                                                { id: 'whole-genome-sequencing-platforms', label: 'Whole Genome Sequencing Platforms', icon: '🧬' },
                                                                { id: 'integrated-genomic-data-analysis-systems', label: 'Integrated Genomic Data Analysis Systems', icon: '🔗' },
                                                                { id: 'custom-genetic-test-development', label: 'Custom Genetic Test Development', icon: '🧬' },
                                                                { id: 'ngs-workflow-automation', label: 'Next-Generation Sequencing (NGS) Workflow Automation', icon: '🔄' },
                                                                { id: 'pathogenic-variant-identification-systems', label: 'Pathogenic Variant Identification Systems', icon: '🔍' },
                                                                { id: 'population-health-genomics-analysis', label: 'Population Health Genomics Analysis', icon: '🌍' },
                                                                { id: 'precision-oncology-genomic-solutions', label: 'Precision Oncology Genomic Solutions', icon: '🎗️' },
                                                                { id: 'predictive-modeling-for-genetic-risk-assessment', label: 'Predictive Modeling for Genetic Risk Assessment', icon: '🔮' },
                                                                { id: 'smart-devices-for-genetic-testing', label: 'Smart Devices for Genetic Testing', icon: '🧬' },
                                                                { id: 'targeted-genetic-screening-platforms', label: 'Targeted Genetic Screening Platforms', icon: '🎯' },
                                                                { id: 'virtual-genetic-counseling-platforms', label: 'Virtual Genetic Counseling Platforms', icon: '💻' },
                                                                { id: 'whole-exome-sequencing-automation', label: 'Whole Exome Sequencing Automation', icon: '🧬' },
                                                                { id: 'whole-genome-variant-calling-tools', label: 'Whole Genome Variant Calling Tools', icon: '🔍' }
                                                              ];
                                                              case 'agricultural-banking':
        return [
                                                                  { id: 'automated-loan-underwriting', label: 'Automated Loan Underwriting', icon: '📄' },
                                                                  { id: 'precision-agriculture-financing', label: 'Precision Agriculture Financing', icon: '🌾' },
                                                                  { id: 'crop-insurance-automation', label: 'Crop Insurance Automation', icon: '🛡️' },
                                                                  { id: 'agri-tech-startups-funding', label: 'Agri-tech Startups Funding', icon: '💼' },
                                                                  { id: 'credit-scoring-with-alternative-data', label: 'Credit Scoring with Alternative Data', icon: '📊' },
                                                                  { id: 'automated-risk-assessment-models', label: 'Automated Risk Assessment Models', icon: '⚖️' },
                                                                  { id: 'supply-chain-financing', label: 'Supply Chain Financing', icon: '🔗' },
                                                                  { id: 'predictive-crop-yield-forecasting', label: 'Predictive Crop Yield Forecasting', icon: '🌱' },
                                                                  { id: 'blockchain-for-agricultural-transactions', label: 'Blockchain for Agricultural Transactions', icon: '🔗' },
                                                                  { id: 'smart-agriculture-financing', label: 'Smart Agriculture Financing', icon: '🌾' },
                                                                  { id: 'weather-linked-loan-products', label: 'Weather-Linked Loan Products', icon: '☔' },
                                                                  { id: 'automated-loan-monitoring', label: 'Automated Loan Monitoring', icon: '🔍' },
                                                                  { id: 'financial-advisory-platforms', label: 'Financial Advisory Platforms', icon: '💼' },
                                                                  { id: 'loan-portfolio-management', label: 'Loan Portfolio Management', icon: '📈' },
                                                                  { id: 'digital-wallets-for-farmers', label: 'Digital Wallets for Farmers', icon: '💳' },
                                                                  { id: 'farm-equipment-financing', label: 'Farm Equipment Financing', icon: '🚜' },
                                                                  { id: 'automated-crop-financing', label: 'Automated Crop Financing', icon: '🌾' },
                                                                  { id: 'financial-forecasting-models', label: 'Financial Forecasting Models', icon: '📊' },
                                                                  { id: 'payment-automation-systems', label: 'Payment Automation Systems', icon: '💵' },
                                                                  { id: 'automated-debt-collection-systems', label: 'Automated Debt Collection Systems', icon: '💳' },
                                                                  { id: 'supply-chain-risk-management', label: 'Supply Chain Risk Management', icon: '⚠️' },
                                                                  { id: 'smart-contract-management', label: 'Smart Contract Management', icon: '📜' },
                                                                  { id: 'government-subsidy-distribution', label: 'Government Subsidy Distribution', icon: '🏛️' },
                                                                  { id: 'automated-land-valuation', label: 'Automated Land Valuation', icon: '🏞️' },
                                                                  { id: 'farm-asset-management-tools', label: 'Farm Asset Management Tools', icon: '🛠️' },
                                                                  { id: 'digital-financing-for-agro-processing', label: 'Digital Financing for Agro-Processing', icon: '💻' },
                                                                  { id: 'environmental-impact-assessments', label: 'Environmental Impact Assessments', icon: '🌍' },
                                                                  { id: 'agricultural-product-financing', label: 'Agricultural Product Financing', icon: '🌾' },
                                                                  { id: 'food-safety-compliance-automation', label: 'Food Safety Compliance Automation', icon: '🛡️' },
                                                                  { id: 'automated-loan-disbursement', label: 'Automated Loan Disbursement', icon: '💵' },
                                                                  { id: 'digital-crop-trading-platforms', label: 'Digital Crop Trading Platforms', icon: '🌾' },
                                                                  { id: 'livestock-financing-risk-assessment', label: 'Livestock Financing Risk Assessment', icon: '🐄' },
                                                                  { id: 'automated-payment-processing-in-agriculture', label: 'Automated Payment Processing in Agriculture', icon: '💳' },
                                                                  { id: 'loan-risk-mitigation-systems', label: 'Loan Risk Mitigation Systems', icon: '⚖️' },
                                                                  { id: 'custom-financing-models-for-farms', label: 'Custom Financing Models for Farms', icon: '📝' },
                                                                  { id: 'seasonal-credit-scoring', label: 'Seasonal Credit Scoring', icon: '📊' },
                                                                  { id: 'remote-sensing-for-credit-risk', label: 'Remote Sensing for Credit Risk', icon: '📡' },
                                                                  { id: 'market-price-prediction-models', label: 'Market Price Prediction Models', icon: '📈' },
                                                                  { id: 'intelligent-collateral-management', label: 'Intelligent Collateral Management', icon: '🔒' },
                                                                  { id: 'automated-subsidy-allocation', label: 'Automated Subsidy Allocation', icon: '💰' }
                                                                ];
                                                                case 'alternative-investments':
        return [
                                                                    { id: 'private-equity-fund-management', label: 'Private Equity Fund Management', icon: '💼' },
                                                                    { id: 'hedge-fund-risk-optimization', label: 'Hedge Fund Risk Optimization', icon: '📈' },
                                                                    { id: 'real-estate-investment-analysis', label: 'Real Estate Investment Analysis', icon: '🏢' },
                                                                    { id: 'venture-capital-investment-platforms', label: 'Venture Capital Investment Platforms', icon: '🚀' },
                                                                    { id: 'crowdfunding-platforms-for-startups', label: 'Crowdfunding Platforms for Startups', icon: '👥' },
                                                                    { id: 'commodities-trading-algorithms', label: 'Commodities Trading Algorithms', icon: '📊' },
                                                                    { id: 'blockchain-for-investment-management', label: 'Blockchain for Investment Management', icon: '🔗' },
                                                                    { id: 'esg-investments', label: 'Environmental, Social, and Governance (ESG) Investments', icon: '🌍' },
                                                                    { id: 'secondary-market-for-private-equity', label: 'Secondary Market for Private Equity', icon: '📈' },
                                                                    { id: 'tokenization-of-real-assets', label: 'Tokenization of Real Assets', icon: '💰' },
                                                                    { id: 'peer-to-peer-lending-platforms', label: 'Peer-to-Peer Lending Platforms', icon: '🤝' },
                                                                    { id: 'investment-portfolio-rebalancing', label: 'Investment Portfolio Rebalancing', icon: '🔄' },
                                                                    { id: 'cryptocurrency-fund-management', label: 'Cryptocurrency Fund Management', icon: '₿' },
                                                                    { id: 'digital-asset-trading-platforms', label: 'Digital Asset Trading Platforms', icon: '💻' },
                                                                    { id: 'predictive-market-analytics', label: 'Predictive Market Analytics', icon: '🔮' },
                                                                    { id: 'quantitative-investment-strategies', label: 'Quantitative Investment Strategies', icon: '📊' },
                                                                    { id: 'distressed-asset-investment-analysis', label: 'Distressed Asset Investment Analysis', icon: '📉' },
                                                                    { id: 'private-debt-investment-platforms', label: 'Private Debt Investment Platforms', icon: '💵' },
                                                                    { id: 'structured-finance-products-automation', label: 'Structured Finance Products Automation', icon: '📜' },
                                                                    { id: 'commodity-futures-trading', label: 'Commodity Futures Trading', icon: '📈' },
                                                                    { id: 'infrastructure-fund-risk-assessment', label: 'Infrastructure Fund Risk Assessment', icon: '🏗️' },
                                                                    { id: 'alternative-real-estate-funding', label: 'Alternative Real Estate Funding', icon: '🏠' },
                                                                    { id: 'art-investment-platforms', label: 'Art Investment Platforms', icon: '🎨' },
                                                                    { id: 'agriculture-investment-analytics', label: 'Agriculture Investment Analytics', icon: '🌾' },
                                                                    { id: 'impact-investing-platforms', label: 'Impact Investing Platforms', icon: '🌍' },
                                                                    { id: 'alternative-fixed-income-management', label: 'Alternative Fixed Income Management', icon: '💵' },
                                                                    { id: 'cross-border-investment-opportunities', label: 'Cross-Border Investment Opportunities', icon: '🌐' },
                                                                    { id: 'hedge-fund-performance-monitoring', label: 'Hedge Fund Performance Monitoring', icon: '📊' },
                                                                    { id: 'global-private-equity-sourcing', label: 'Global Private Equity Sourcing', icon: '🌍' },
                                                                    { id: 'alternative-investment-advisory-services', label: 'Alternative Investment Advisory Services', icon: '💼' },
                                                                    { id: 'crowd-sourced-real-estate-investment', label: 'Crowd-Sourced Real Estate Investment', icon: '👥' },
                                                                    { id: 'energy-market-investment-strategies', label: 'Energy Market Investment Strategies', icon: '⚡' },
                                                                    { id: 'syndicated-loan-investment-automation', label: 'Syndicated Loan Investment Automation', icon: '🤝' },
                                                                    { id: 'private-market-liquidity-solutions', label: 'Private Market Liquidity Solutions', icon: '💧' },
                                                                    { id: 'insurance-linked-securities-management', label: 'Insurance-Linked Securities (ILS) Management', icon: '🛡️' },
                                                                    { id: 'intellectual-property-investment-analysis', label: 'Intellectual Property Investment Analysis', icon: '📚' },
                                                                    { id: 'alternative-asset-pricing-models', label: 'Alternative Asset Pricing Models', icon: '📈' },
                                                                    { id: 'fintech-investment-opportunities', label: 'FinTech Investment Opportunities', icon: '💻' },
                                                                    { id: 'rare-earth-metals-investment-platforms', label: 'Rare Earth Metals Investment Platforms', icon: '🌍' },
                                                                    { id: 'direct-lending-platforms', label: 'Direct Lending Platforms', icon: '💵' }
                                                                  ];      
                                                                  case 'asset-management':
        return [
                                                                      { id: 'automated-portfolio-management', label: 'Automated Portfolio Management', icon: '📊' },
                                                                      { id: 'risk-assessment-and-management-tools', label: 'Risk Assessment and Management Tools', icon: '⚖️' },
                                                                      { id: 'real-time-investment-monitoring', label: 'Real-Time Investment Monitoring', icon: '⏱️' },
                                                                      { id: 'algorithmic-trading-strategies', label: 'Algorithmic Trading Strategies', icon: '🤖' },
                                                                      { id: 'smart-beta-strategies', label: 'Smart Beta Strategies', icon: '📈' },
                                                                      { id: 'robo-advisory-services', label: 'Robo-Advisory Services', icon: '🤖' },
                                                                      { id: 'dynamic-asset-allocation-models', label: 'Dynamic Asset Allocation Models', icon: '🔄' },
                                                                      { id: 'investment-analytics-platforms', label: 'Investment Analytics Platforms', icon: '📊' },
                                                                      { id: 'predictive-analytics-for-market-trends', label: 'Predictive Analytics for Market Trends', icon: '🔮' },
                                                                      { id: 'etfs-management', label: 'ETFs (Exchange-Traded Funds) Management', icon: '📈' },
                                                                      { id: 'alternative-investment-portfolio-strategies', label: 'Alternative Investment Portfolio Strategies', icon: '💼' },
                                                                      { id: 'customized-investment-solutions', label: 'Customized Investment Solutions', icon: '📝' },
                                                                      { id: 'asset-class-diversification-tools', label: 'Asset Class Diversification Tools', icon: '🌍' },
                                                                      { id: 'liquidity-management-automation', label: 'Liquidity Management Automation', icon: '💧' },
                                                                      { id: 'investment-risk-prediction-models', label: 'Investment Risk Prediction Models', icon: '📉' },
                                                                      { id: 'factor-investing-automation', label: 'Factor Investing Automation', icon: '📊' },
                                                                      { id: 'automated-fund-rebalancing', label: 'Automated Fund Rebalancing', icon: '🔄' },
                                                                      { id: 'tax-efficient-investment-strategies', label: 'Tax-Efficient Investment Strategies', icon: '💰' },
                                                                      { id: 'sustainable-investment-strategies', label: 'Sustainable Investment Strategies', icon: '🌱' },
                                                                      { id: 'market-sentiment-analysis', label: 'Market Sentiment Analysis', icon: '📈' },
                                                                      { id: 'fund-performance-evaluation-tools', label: 'Fund Performance Evaluation Tools', icon: '📊' },
                                                                      { id: 'client-portfolio-reporting-systems', label: 'Client Portfolio Reporting Systems', icon: '📄' },
                                                                      { id: 'esg-investment-solutions', label: 'ESG (Environmental, Social, Governance) Investment Solutions', icon: '🌍' },
                                                                      { id: 'real-estate-investment-analysis', label: 'Real Estate Investment Analysis', icon: '🏢' },
                                                                      { id: 'private-equity-investment-tracking', label: 'Private Equity Investment Tracking', icon: '💼' },
                                                                      { id: 'multi-asset-fund-management', label: 'Multi-Asset Fund Management', icon: '🌐' },
                                                                      { id: 'hedge-fund-analytics-and-reporting', label: 'Hedge Fund Analytics and Reporting', icon: '📊' },
                                                                      { id: 'retirement-planning-automation', label: 'Retirement Planning Automation', icon: '🏦' },
                                                                      { id: 'global-asset-allocation-optimization', label: 'Global Asset Allocation Optimization', icon: '🌍' },
                                                                      { id: 'thematic-investment-strategy-tools', label: 'Thematic Investment Strategy Tools', icon: '🎯' },
                                                                      { id: 'global-market-exposure-management', label: 'Global Market Exposure Management', icon: '🌐' },
                                                                      { id: 'pension-fund-management-automation', label: 'Pension Fund Management Automation', icon: '🏦' },
                                                                      { id: 'mutual-fund-distribution-automation', label: 'Mutual Fund Distribution Automation', icon: '💼' },
                                                                      { id: 'personalized-wealth-management-platforms', label: 'Personalized Wealth Management Platforms', icon: '👤' },
                                                                      { id: 'data-driven-investment-selection', label: 'Data-Driven Investment Selection', icon: '📊' },
                                                                      { id: 'quantitative-fund-management', label: 'Quantitative Fund Management', icon: '📈' },
                                                                      { id: 'financial-performance-benchmarking', label: 'Financial Performance Benchmarking', icon: '📊' },
                                                                      { id: 'cross-border-investment-strategy-tools', label: 'Cross-Border Investment Strategy Tools', icon: '🌍' },
                                                                      { id: 'client-investment-risk-profiling', label: 'Client Investment Risk Profiling', icon: '📝' },
                                                                      { id: 'capital-flow-monitoring-and-analysis', label: 'Capital Flow Monitoring and Analysis', icon: '💵' }
                                                                    ];
                                                                    case 'automated-investment-services':
        return [
                                                                        { id: 'personalized-investment-portfolio-creation', label: 'Personalized Investment Portfolio Creation', icon: '📝' },
                                                                        { id: 'automated-risk-profiling', label: 'Automated Risk Profiling', icon: '⚖️' },
                                                                        { id: 'goal-based-investment-planning', label: 'Goal-Based Investment Planning', icon: '🎯' },
                                                                        { id: 'tax-loss-harvesting-tools', label: 'Tax-Loss Harvesting Tools', icon: '💰' },
                                                                        { id: 'retirement-planning-automation', label: 'Retirement Planning Automation', icon: '🏦' },
                                                                        { id: 'behavioral-investment-analytics', label: 'Behavioral Investment Analytics', icon: '📊' },
                                                                        { id: 'portfolio-rebalancing-automation', label: 'Portfolio Rebalancing Automation', icon: '🔄' },
                                                                        { id: 'dynamic-asset-allocation', label: 'Dynamic Asset Allocation', icon: '📈' },
                                                                        { id: 'automated-wealth-management', label: 'Automated Wealth Management', icon: '🤖' },
                                                                        { id: 'low-cost-investment-solutions', label: 'Low-Cost Investment Solutions', icon: '💵' },
                                                                        { id: 'real-time-investment-monitoring', label: 'Real-Time Investment Monitoring', icon: '⏱️' },
                                                                        { id: 'expense-optimization-models', label: 'Expense Optimization Models', icon: '📉' },
                                                                        { id: 'socially-responsible-investment-portfolios', label: 'Socially Responsible Investment Portfolios', icon: '🌍' },
                                                                        { id: 'sustainable-investment-strategies', label: 'Sustainable Investment Strategies', icon: '🌱' },
                                                                        { id: 'automatic-contribution-scheduling', label: 'Automatic Contribution Scheduling', icon: '📅' },
                                                                        { id: 'investment-fund-selection-automation', label: 'Investment Fund Selection Automation', icon: '💼' },
                                                                        { id: 'customizable-investment-strategies', label: 'Customizable Investment Strategies', icon: '🛠️' },
                                                                        { id: 'financial-goal-tracking-and-alerts', label: 'Financial Goal Tracking and Alerts', icon: '🔔' },
                                                                        { id: 'automated-fee-analysis-and-transparency', label: 'Automated Fee Analysis and Transparency', icon: '📊' },
                                                                        { id: 'automatic-reinvestment-of-dividends', label: 'Automatic Reinvestment of Dividends', icon: '💵' },
                                                                        { id: 'digital-portfolio-customization', label: 'Digital Portfolio Customization', icon: '💻' },
                                                                        { id: 'client-portfolio-reporting-systems', label: 'Client Portfolio Reporting Systems', icon: '📄' },
                                                                        { id: 'risk-adjusted-return-calculation', label: 'Risk-Adjusted Return Calculation', icon: '⚖️' },
                                                                        { id: 'cryptocurrency-investment-automation', label: 'Cryptocurrency Investment Automation', icon: '₿' },
                                                                        { id: 'global-market-diversification-tools', label: 'Global Market Diversification Tools', icon: '🌍' },
                                                                        { id: 'investment-education-and-insights', label: 'Investment Education and Insights', icon: '📚' },
                                                                        { id: 'cross-asset-class-investment-automation', label: 'Cross-Asset Class Investment Automation', icon: '🔄' },
                                                                        { id: 'continuous-portfolio-optimization', label: 'Continuous Portfolio Optimization', icon: '📈' },
                                                                        { id: 'real-time-tax-optimization', label: 'Real-Time Tax Optimization', icon: '💰' },
                                                                        { id: 'behavioral-finance-insights', label: 'Behavioral Finance Insights', icon: '🧠' },
                                                                        { id: 'multi-tier-investment-plans', label: 'Multi-Tier Investment Plans', icon: '📊' },
                                                                        { id: 'automated-financial-health-assessment', label: 'Automated Financial Health Assessment', icon: '🏥' },
                                                                        { id: 'income-distribution-planning', label: 'Income Distribution Planning', icon: '💵' },
                                                                        { id: 'investment-strategy-testing-tools', label: 'Investment Strategy Testing Tools', icon: '🧪' },
                                                                        { id: 'estate-planning-integration', label: 'Estate Planning Integration', icon: '🏡' },
                                                                        { id: 'debt-management-and-investment-solutions', label: 'Debt Management and Investment Solutions', icon: '💳' },
                                                                        { id: 'smart-financial-goal-adjustments', label: 'Smart Financial Goal Adjustments', icon: '⚙️' },
                                                                        { id: 'ai-driven-market-sentiment-analysis', label: 'AI-Driven Market Sentiment Analysis', icon: '🤖' },
                                                                        { id: 'currency-hedging-for-global-portfolios', label: 'Currency Hedging for Global Portfolios', icon: '💱' },
                                                                        { id: 'automated-risk-mitigation-models', label: 'Automated Risk Mitigation Models', icon: '⚖️' }
                                                                      ];
                                                                      case 'bancassurance':
        return [
                                                                          { id: 'automated-insurance-policy-generation', label: 'Automated Insurance Policy Generation', icon: '📄' },
                                                                          { id: 'customer-risk-profiling-for-insurance-products', label: 'Customer Risk Profiling for Insurance Products', icon: '⚖️' },
                                                                          { id: 'digital-insurance-product-distribution', label: 'Digital Insurance Product Distribution', icon: '💻' },
                                                                          { id: 'automated-claims-processing', label: 'Automated Claims Processing', icon: '📝' },
                                                                          { id: 'cross-selling-insurance-with-banking-products', label: 'Cross-Selling Insurance with Banking Products', icon: '🏦' },
                                                                          { id: 'personalized-insurance-product-recommendations', label: 'Personalized Insurance Product Recommendations', icon: '🎯' },
                                                                          { id: 'claims-fraud-detection-and-prevention', label: 'Claims Fraud Detection and Prevention', icon: '🚨' },
                                                                          { id: 'real-time-underwriting-automation', label: 'Real-Time Underwriting Automation', icon: '⏱️' },
                                                                          { id: 'insurance-premium-payment-automation', label: 'Insurance Premium Payment Automation', icon: '💳' },
                                                                          { id: 'customer-life-cycle-management-for-insurance', label: 'Customer Life-Cycle Management for Insurance', icon: '🔄' },
                                                                          { id: 'automated-renewal-reminders', label: 'Automated Renewal Reminders', icon: '🔔' },
                                                                          { id: 'mobile-insurance-claims-submission', label: 'Mobile Insurance Claims Submission', icon: '📱' },
                                                                          { id: 'integrated-insurance-advisory-services', label: 'Integrated Insurance Advisory Services', icon: '🤝' },
                                                                          { id: 'insurance-data-analytics-for-product-design', label: 'Insurance Data Analytics for Product Design', icon: '📊' },
                                                                          { id: 'behavioral-insights-for-insurance-customization', label: 'Behavioral Insights for Insurance Customization', icon: '🧠' },
                                                                          { id: 'dynamic-pricing-for-insurance-products', label: 'Dynamic Pricing for Insurance Products', icon: '💵' },
                                                                          { id: 'multi-channel-insurance-sales-platforms', label: 'Multi-Channel Insurance Sales Platforms', icon: '🌐' },
                                                                          { id: 'real-time-risk-assessment-for-insurance-policies', label: 'Real-Time Risk Assessment for Insurance Policies', icon: '⚖️' },
                                                                          { id: 'insurance-portfolio-optimization', label: 'Insurance Portfolio Optimization', icon: '📈' },
                                                                          { id: 'automated-policy-issuance-and-endorsements', label: 'Automated Policy Issuance and Endorsements', icon: '📄' },
                                                                          { id: 'claims-settlement-optimization', label: 'Claims Settlement Optimization', icon: '⚖️' },
                                                                          { id: 'personalized-health-and-life-insurance-plans', label: 'Personalized Health and Life Insurance Plans', icon: '❤️' },
                                                                          { id: 'ai-powered-insurance-chatbots', label: 'AI-Powered Insurance Chatbots', icon: '🤖' },
                                                                          { id: 'subscription-based-insurance-services', label: 'Subscription-Based Insurance Services', icon: '📅' },
                                                                          { id: 'automated-insurance-data-collection', label: 'Automated Insurance Data Collection', icon: '📊' },
                                                                          { id: 'intelligent-customer-support-for-insurance-queries', label: 'Intelligent Customer Support for Insurance Queries', icon: '💬' },
                                                                          { id: 'insurance-fraud-risk-management', label: 'Insurance Fraud Risk Management', icon: '🚨' },
                                                                          { id: 'digital-onboarding-for-insurance-products', label: 'Digital Onboarding for Insurance Products', icon: '💻' },
                                                                          { id: 'customized-investment-linked-insurance-solutions', label: 'Customized Investment-Linked Insurance Solutions', icon: '💼' },
                                                                          { id: 'targeted-marketing-for-insurance-products', label: 'Targeted Marketing for Insurance Products', icon: '🎯' },
                                                                          { id: 'integrated-financial-and-insurance-planning', label: 'Integrated Financial and Insurance Planning', icon: '🔗' },
                                                                          { id: 'predictive-analytics-for-claims-forecasting', label: 'Predictive Analytics for Claims Forecasting', icon: '🔮' },
                                                                          { id: 'insurance-product-portfolio-management', label: 'Insurance Product Portfolio Management', icon: '📊' },
                                                                          { id: 'customer-feedback-automation-for-insurance', label: 'Customer Feedback Automation for Insurance', icon: '📋' },
                                                                          { id: 'automated-life-insurance-risk-assessment', label: 'Automated Life Insurance Risk Assessment', icon: '⚖️' },
                                                                          { id: 'self-service-insurance-claims-management', label: 'Self-Service Insurance Claims Management', icon: '🛠️' },
                                                                          { id: 'insurance-benefits-tracking-systems', label: 'Insurance Benefits Tracking Systems', icon: '📈' },
                                                                          { id: 'mobile-based-insurance-claims-approval', label: 'Mobile-Based Insurance Claims Approval', icon: '📱' },
                                                                          { id: 'digital-health-insurance-verification', label: 'Digital Health Insurance Verification', icon: '💻' },
                                                                          { id: 'insurance-policy-compliance-automation', label: 'Insurance Policy Compliance Automation', icon: '📜' }
                                                                        ];
                                                                        case 'brokerage-services':
        return [
                                                                            { id: 'automated-trade-execution', label: 'Automated Trade Execution', icon: '⚙️' },
                                                                            { id: 'algorithmic-trading-strategies', label: 'Algorithmic Trading Strategies', icon: '🤖' },
                                                                            { id: 'real-time-market-data-feeds', label: 'Real-Time Market Data Feeds', icon: '📈' },
                                                                            { id: 'robo-trading-solutions', label: 'Robo-Trading Solutions', icon: '🤖' },
                                                                            { id: 'trade-risk-management', label: 'Trade Risk Management', icon: '⚖️' },
                                                                            { id: 'customizable-trading-platforms', label: 'Customizable Trading Platforms', icon: '🛠️' },
                                                                            { id: 'order-routing-optimization', label: 'Order Routing Optimization', icon: '🔄' },
                                                                            { id: 'market-sentiment-analysis-for-trading', label: 'Market Sentiment Analysis for Trading', icon: '📊' },
                                                                            { id: 'smart-order-execution-systems', label: 'Smart Order Execution Systems', icon: '⚙️' },
                                                                            { id: 'automated-portfolio-rebalancing', label: 'Automated Portfolio Rebalancing', icon: '🔄' },
                                                                            { id: 'real-time-transaction-monitoring', label: 'Real-Time Transaction Monitoring', icon: '⏱️' },
                                                                            { id: 'cross-asset-class-trading-solutions', label: 'Cross-Asset Class Trading Solutions', icon: '🌐' },
                                                                            { id: 'comprehensive-trade-reporting', label: 'Comprehensive Trade Reporting', icon: '📄' },
                                                                            { id: 'predictive-analytics-for-trade-opportunities', label: 'Predictive Analytics for Trade Opportunities', icon: '🔮' },
                                                                            { id: 'low-cost-brokerage-services', label: 'Low-Cost Brokerage Services', icon: '💵' },
                                                                            { id: 'direct-market-access-platforms', label: 'Direct Market Access Platforms', icon: '📈' },
                                                                            { id: 'hedging-strategy-automation', label: 'Hedging Strategy Automation', icon: '🛡️' },
                                                                            { id: 'multi-exchange-trading-platforms', label: 'Multi-Exchange Trading Platforms', icon: '🌍' },
                                                                            { id: 'options-and-derivatives-trading-automation', label: 'Options and Derivatives Trading Automation', icon: '📈' },
                                                                            { id: 'client-portfolio-customization-tools', label: 'Client Portfolio Customization Tools', icon: '📝' },
                                                                            { id: 'tax-optimization-for-investment-portfolios', label: 'Tax Optimization for Investment Portfolios', icon: '💰' },
                                                                            { id: 'trade-settlement-automation', label: 'Trade Settlement Automation', icon: '📄' },
                                                                            { id: 'liquidity-management-solutions', label: 'Liquidity Management Solutions', icon: '💧' },
                                                                            { id: 'client-performance-analytics', label: 'Client Performance Analytics', icon: '📊' },
                                                                            { id: 'automated-margin-trading-solutions', label: 'Automated Margin Trading Solutions', icon: '📈' },
                                                                            { id: 'cross-border-trading-integration', label: 'Cross-Border Trading Integration', icon: '🌍' },
                                                                            { id: 'real-time-price-alerts', label: 'Real-Time Price Alerts', icon: '🔔' },
                                                                            { id: 'blockchain-enabled-securities-trading', label: 'Blockchain-Enabled Securities Trading', icon: '🔗' },
                                                                            { id: 'customized-financial-product-offerings', label: 'Customized Financial Product Offerings', icon: '💼' },
                                                                            { id: 'fractional-share-trading', label: 'Fractional Share Trading', icon: '📉' },
                                                                            { id: 'trade-execution-analytics-and-reporting', label: 'Trade Execution Analytics and Reporting', icon: '📊' },
                                                                            { id: 'brokerage-fee-optimization', label: 'Brokerage Fee Optimization', icon: '💵' },
                                                                            { id: 'customer-profile-analysis-for-trading-services', label: 'Customer Profile Analysis for Trading Services', icon: '👤' },
                                                                            { id: 'capital-flow-monitoring-and-analysis', label: 'Capital Flow Monitoring and Analysis', icon: '💵' }
                                                                          ];
                                                                          case 'capital-markets':
        return [
                                                                              { id: 'automated-securities-trading', label: 'Automated Securities Trading', icon: '📈' },
                                                                              { id: 'algorithmic-trading-strategies', label: 'Algorithmic Trading Strategies', icon: '🤖' },
                                                                              { id: 'market-liquidity-optimization', label: 'Market Liquidity Optimization', icon: '💧' },
                                                                              { id: 'real-time-price-discovery', label: 'Real-Time Price Discovery', icon: '⏱️' },
                                                                              { id: 'trade-execution-optimization', label: 'Trade Execution Optimization', icon: '⚙️' },
                                                                              { id: 'automated-trade-settlement', label: 'Automated Trade Settlement', icon: '📄' },
                                                                              { id: 'debt-issuance-automation', label: 'Debt Issuance Automation', icon: '💵' },
                                                                              { id: 'equity-financing-automation', label: 'Equity Financing Automation', icon: '📈' },
                                                                              { id: 'syndicated-loan-trading-platforms', label: 'Syndicated Loan Trading Platforms', icon: '🤝' },
                                                                              { id: 'risk-management-solutions-for-capital-markets', label: 'Risk Management Solutions for Capital Markets', icon: '⚖️' },
                                                                              { id: 'market-making-automation', label: 'Market Making Automation', icon: '📊' },
                                                                              { id: 'predictive-analytics-for-market-trends', label: 'Predictive Analytics for Market Trends', icon: '🔮' },
                                                                              { id: 'customizable-trading-platforms', label: 'Customizable Trading Platforms', icon: '🛠️' },
                                                                              { id: 'smart-order-routing-systems', label: 'Smart Order Routing Systems', icon: '🔄' },
                                                                              { id: 'bond-pricing-automation', label: 'Bond Pricing Automation', icon: '💵' },
                                                                              { id: 'capital-raising-solutions', label: 'Capital Raising Solutions', icon: '🏦' },
                                                                              { id: 'foreign-exchange-trading-automation', label: 'Foreign Exchange Trading Automation', icon: '💱' },
                                                                              { id: 'portfolio-optimization-tools', label: 'Portfolio Optimization Tools', icon: '📈' },
                                                                              { id: 'cross-border-trade-facilitation', label: 'Cross-Border Trade Facilitation', icon: '🌍' },
                                                                              { id: 'regulatory-compliance-automation', label: 'Regulatory Compliance Automation', icon: '📜' },
                                                                              { id: 'real-time-trade-monitoring', label: 'Real-Time Trade Monitoring', icon: '⏱️' },
                                                                              { id: 'fixed-income-investment-management', label: 'Fixed-Income Investment Management', icon: '💵' },
                                                                              { id: 'derivatives-trading-automation', label: 'Derivatives Trading Automation', icon: '📈' },
                                                                              { id: 'asset-backed-securities-market-automation', label: 'Asset-Backed Securities (ABS) Market Automation', icon: '🏦' },
                                                                              { id: 'commodity-futures-trading', label: 'Commodity Futures Trading', icon: '📈' },
                                                                              { id: 'real-time-risk-analysis', label: 'Real-Time Risk Analysis', icon: '⚖️' },
                                                                              { id: 'structured-finance-automation', label: 'Structured Finance Automation', icon: '📜' },
                                                                              { id: 'trading-strategy-backtesting', label: 'Trading Strategy Backtesting', icon: '🔄' },
                                                                              { id: 'private-equity-market-integration', label: 'Private Equity Market Integration', icon: '💼' },
                                                                              { id: 'crowdfunding-in-capital-markets', label: 'Crowdfunding in Capital Markets', icon: '👥' },
                                                                              { id: 'blockchain-for-securities-trading', label: 'Blockchain for Securities Trading', icon: '🔗' },
                                                                              { id: 'automated-mergers-and-acquisitions-analysis', label: 'Automated Mergers and Acquisitions Analysis', icon: '🤝' },
                                                                              { id: 'cross-asset-class-investment-solutions', label: 'Cross-Asset Class Investment Solutions', icon: '🌐' },
                                                                              { id: 'automated-financial-statement-analysis', label: 'Automated Financial Statement Analysis', icon: '📊' },
                                                                              { id: 'client-reporting-and-analytics', label: 'Client Reporting and Analytics', icon: '📄' },
                                                                              { id: 'investment-bank-process-automation', label: 'Investment Bank Process Automation', icon: '🏦' },
                                                                              { id: 'crowd-sourced-investment-platforms', label: 'Crowd-Sourced Investment Platforms', icon: '👥' },
                                                                              { id: 'corporate-bond-trading-platforms', label: 'Corporate Bond Trading Platforms', icon: '🏦' },
                                                                              { id: 'high-frequency-trading-algorithms', label: 'High-Frequency Trading Algorithms', icon: '⚡' },
                                                                              { id: 'capital-market-data-analytics', label: 'Capital Market Data Analytics', icon: '📊' }
                                                                            ];
                                                                            case 'cash-management-services':
        return [
                                                                                { id: 'automated-cash-flow-forecasting', label: 'Automated Cash Flow Forecasting', icon: '📈' },
                                                                                { id: 'real-time-cash-positioning', label: 'Real-Time Cash Positioning', icon: '⏱️' },
                                                                                { id: 'intelligent-payment-routing', label: 'Intelligent Payment Routing', icon: '🔄' },
                                                                                { id: 'cash-reconciliation-automation', label: 'Cash Reconciliation Automation', icon: '📄' },
                                                                                { id: 'automated-account-reconciliation', label: 'Automated Account Reconciliation', icon: '🔄' },
                                                                                { id: 'electronic-funds-transfer-eft-automation', label: 'Electronic Funds Transfer (EFT) Automation', icon: '💳' },
                                                                                { id: 'payment-processing-optimization', label: 'Payment Processing Optimization', icon: '⚙️' },
                                                                                { id: 'treasury-management-systems', label: 'Treasury Management Systems', icon: '🏦' },
                                                                                { id: 'automated-invoice-processing', label: 'Automated Invoice Processing', icon: '📄' },
                                                                                { id: 'cross-border-payment-solutions', label: 'Cross-Border Payment Solutions', icon: '🌍' },
                                                                                { id: 'liquidity-management-automation', label: 'Liquidity Management Automation', icon: '💧' },
                                                                                { id: 'real-time-payment-tracking', label: 'Real-Time Payment Tracking', icon: '⏱️' },
                                                                                { id: 'disbursement-automation', label: 'Disbursement Automation', icon: '💵' },
                                                                                { id: 'fraud-detection-in-payment-systems', label: 'Fraud Detection in Payment Systems', icon: '🚨' },
                                                                                { id: 'automated-bank-statement-matching', label: 'Automated Bank Statement Matching', icon: '📊' },
                                                                                { id: 'cash-flow-monitoring-dashboards', label: 'Cash Flow Monitoring Dashboards', icon: '📈' },
                                                                                { id: 'cash-forecasting-models', label: 'Cash Forecasting Models', icon: '🔮' },
                                                                                { id: 'corporate-payment-gateway-solutions', label: 'Corporate Payment Gateway Solutions', icon: '💳' },
                                                                                { id: 'integrated-payment-solutions', label: 'Integrated Payment Solutions', icon: '🔗' },
                                                                                { id: 'expense-management-automation', label: 'Expense Management Automation', icon: '💵' },
                                                                                { id: 'centralized-cash-management-platforms', label: 'Centralized Cash Management Platforms', icon: '🏦' },
                                                                                { id: 'cash-allocation-optimization', label: 'Cash Allocation Optimization', icon: '📊' },
                                                                                { id: 'bulk-payment-solutions', label: 'Bulk Payment Solutions', icon: '📦' },
                                                                                { id: 'mobile-payment-solutions-for-businesses', label: 'Mobile Payment Solutions for Businesses', icon: '📱' },
                                                                                { id: 'automated-tax-payment-processing', label: 'Automated Tax Payment Processing', icon: '💰' },
                                                                                { id: 'global-treasury-solutions', label: 'Global Treasury Solutions', icon: '🌍' },
                                                                                { id: 'automated-supplier-payment-systems', label: 'Automated Supplier Payment Systems', icon: '🤝' },
                                                                                { id: 'demand-deposit-management', label: 'Demand Deposit Management', icon: '🏦' },
                                                                                { id: 'cash-position-optimization-tools', label: 'Cash Position Optimization Tools', icon: '📈' },
                                                                                { id: 'vendor-payment-automation', label: 'Vendor Payment Automation', icon: '💼' },
                                                                                { id: 'transaction-monitoring-and-alerts', label: 'Transaction Monitoring and Alerts', icon: '🔔' },
                                                                                { id: 'working-capital-management', label: 'Working Capital Management', icon: '💵' },
                                                                                { id: 'foreign-currency-management-automation', label: 'Foreign Currency Management Automation', icon: '💱' },
                                                                                { id: 'automated-payroll-processing', label: 'Automated Payroll Processing', icon: '💼' },
                                                                                { id: 'bank-account-management-automation', label: 'Bank Account Management Automation', icon: '🏦' },
                                                                                { id: 'real-time-funds-transfer-for-smes', label: 'Real-Time Funds Transfer for SMEs', icon: '⏱️' },
                                                                                { id: 'dynamic-payment-terms-management', label: 'Dynamic Payment Terms Management', icon: '🔄' },
                                                                                { id: 'automated-billing-solutions', label: 'Automated Billing Solutions', icon: '📄' },
                                                                                { id: 'cash-flow-analytics-for-businesses', label: 'Cash Flow Analytics for Businesses', icon: '📊' },
                                                                                { id: 'transaction-reconciliation-systems', label: 'Transaction Reconciliation Systems', icon: '🔄' }
                                                                              ];  
                                                                              case 'central-banking':
                                                                                return [
                                                                                  { id: 'monetary-policy-automation', label: 'Monetary Policy Automation', icon: '🏦' },
                                                                                  { id: 'real-time-economic-data-analysis', label: 'Real-Time Economic Data Analysis', icon: '📊' },
                                                                                  { id: 'central-bank-digital-currency-development', label: 'Central Bank Digital Currency (CBDC) Development', icon: '💱' },
                                                                                  { id: 'interest-rate-policy-optimization', label: 'Interest Rate Policy Optimization', icon: '📈' },
                                                                                  { id: 'currency-issuance-automation', label: 'Currency Issuance Automation', icon: '💵' },
                                                                                  { id: 'financial-market-monitoring-systems', label: 'Financial Market Monitoring Systems', icon: '📈' },
                                                                                  { id: 'cross-border-payment-settlement-solutions', label: 'Cross-Border Payment Settlement Solutions', icon: '🌍' },
                                                                                  { id: 'centralized-risk-management-systems', label: 'Centralized Risk Management Systems', icon: '⚖️' },
                                                                                  { id: 'foreign-exchange-reserve-management', label: 'Foreign Exchange Reserve Management', icon: '💱' },
                                                                                  { id: 'sovereign-debt-issuance-automation', label: 'Sovereign Debt Issuance Automation', icon: '📄' },
                                                                                  { id: 'automated-banking-supervision-tools', label: 'Automated Banking Supervision Tools', icon: '🔍' },
                                                                                  { id: 'market-liquidity-monitoring-systems', label: 'Market Liquidity Monitoring Systems', icon: '💧' },
                                                                                  { id: 'banking-system-stress-testing', label: 'Banking System Stress Testing', icon: '⚠️' },
                                                                                  { id: 'real-time-inflation-monitoring', label: 'Real-Time Inflation Monitoring', icon: '📈' },
                                                                                  { id: 'automated-regulatory-compliance', label: 'Automated Regulatory Compliance', icon: '📜' },
                                                                                  { id: 'electronic-payment-system-management', label: 'Electronic Payment System Management', icon: '💳' },
                                                                                  { id: 'centralized-payment-processing', label: 'Centralized Payment Processing', icon: '🏦' },
                                                                                  { id: 'financial-stability-risk-detection', label: 'Financial Stability Risk Detection', icon: '⚖️' },
                                                                                  { id: 'automated-monetary-transactions', label: 'Automated Monetary Transactions', icon: '💵' },
                                                                                  { id: 'banknote-authentication-and-verification', label: 'Banknote Authentication and Verification', icon: '🔍' },
                                                                                  { id: 'digital-payment-ecosystem-regulation', label: 'Digital Payment Ecosystem Regulation', icon: '🌐' },
                                                                                  { id: 'real-time-exchange-rate-monitoring', label: 'Real-Time Exchange Rate Monitoring', icon: '📈' },
                                                                                  { id: 'central-bank-lending-facilities-automation', label: 'Central Bank Lending Facilities Automation', icon: '🏦' },
                                                                                  { id: 'cross-border-settlement-platforms', label: 'Cross-Border Settlement Platforms', icon: '🌍' },
                                                                                  { id: 'financial-reporting-and-transparency-tools', label: 'Financial Reporting and Transparency Tools', icon: '📄' },
                                                                                  { id: 'financial-crisis-simulation-and-prediction', label: 'Financial Crisis Simulation and Prediction', icon: '🔮' },
                                                                                  { id: 'liquidity-forecasting-systems', label: 'Liquidity Forecasting Systems', icon: '💧' },
                                                                                  { id: 'capital-adequacy-assessment-tools', label: 'Capital Adequacy Assessment Tools', icon: '📊' },
                                                                                  { id: 'automated-fraud-detection-in-banking', label: 'Automated Fraud Detection in Banking', icon: '🚨' },
                                                                                  { id: 'central-bank-collateral-management', label: 'Central Bank Collateral Management', icon: '🏦' },
                                                                                  { id: 'centralized-credit-risk-evaluation', label: 'Centralized Credit Risk Evaluation', icon: '⚖️' },
                                                                                  { id: 'market-intervention-strategies-automation', label: 'Market Intervention Strategies Automation', icon: '📈' },
                                                                                  { id: 'debt-management-automation', label: 'Debt Management Automation', icon: '💵' },
                                                                                  { id: 'automated-financial-inclusion-initiatives', label: 'Automated Financial Inclusion Initiatives', icon: '🌍' },
                                                                                  { id: 'reserve-bank-compliance-tools', label: 'Reserve Bank Compliance Tools', icon: '📜' },
                                                                                  { id: 'currency-demand-forecasting', label: 'Currency Demand Forecasting', icon: '🔮' },
                                                                                  { id: 'central-bank-operations-management', label: 'Central Bank Operations Management', icon: '🏦' },
                                                                                  { id: 'monetary-transmission-mechanism-optimization', label: 'Monetary Transmission Mechanism Optimization', icon: '⚙️' },
                                                                                  { id: 'central-bank-data-governance-solutions', label: 'Central Bank Data Governance Solutions', icon: '📊' }
                                                                                ];
                                                                                case 'compliance-and-regulatory-affairs':
                                                                                  return [
                                                                                    { id: 'automated-transaction-monitoring', label: 'Automated Transaction Monitoring', icon: '🔍' },
                                                                                    { id: 'anti-money-laundering-compliance', label: 'Anti-Money Laundering (AML) Compliance', icon: '🚨' },
                                                                                    { id: 'know-your-customer-automation', label: 'Know Your Customer (KYC) Automation', icon: '🆔' },
                                                                                    { id: 'risk-based-compliance-monitoring', label: 'Risk-Based Compliance Monitoring', icon: '⚖️' },
                                                                                    { id: 'regulatory-reporting-automation', label: 'Regulatory Reporting Automation', icon: '📄' },
                                                                                    { id: 'fraud-detection-and-prevention-systems', label: 'Fraud Detection and Prevention Systems', icon: '🚨' },
                                                                                    { id: 'real-time-compliance-monitoring', label: 'Real-Time Compliance Monitoring', icon: '⏱️' },
                                                                                    { id: 'regulatory-data-collection-and-management', label: 'Regulatory Data Collection and Management', icon: '📊' },
                                                                                    { id: 'automated-risk-assessment', label: 'Automated Risk Assessment', icon: '⚖️' },
                                                                                    { id: 'tax-compliance-automation', label: 'Tax Compliance Automation', icon: '💰' },
                                                                                    { id: 'client-identity-verification-solutions', label: 'Client Identity Verification Solutions', icon: '🆔' },
                                                                                    { id: 'sanctions-screening-and-compliance', label: 'Sanctions Screening and Compliance', icon: '🔍' },
                                                                                    { id: 'audit-trail-management-systems', label: 'Audit Trail Management Systems', icon: '📜' },
                                                                                    { id: 'cross-border-regulatory-compliance', label: 'Cross-Border Regulatory Compliance', icon: '🌍' },
                                                                                    { id: 'consumer-protection-compliance-solutions', label: 'Consumer Protection Compliance Solutions', icon: '🛡️' },
                                                                                    { id: 'data-privacy-and-protection-automation', label: 'Data Privacy and Protection Automation', icon: '🔒' },
                                                                                    { id: 'compliance-risk-assessment-models', label: 'Compliance Risk Assessment Models', icon: '⚖️' },
                                                                                    { id: 'financial-crime-detection-tools', label: 'Financial Crime Detection Tools', icon: '🚨' },
                                                                                    { id: 'regulatory-filings-and-submissions-automation', label: 'Regulatory Filings and Submissions Automation', icon: '📄' },
                                                                                    { id: 'compliance-workflow-automation', label: 'Compliance Workflow Automation', icon: '🔄' },
                                                                                    { id: 'internal-control-monitoring', label: 'Internal Control Monitoring', icon: '🔍' },
                                                                                    { id: 'automated-compliance-testing', label: 'Automated Compliance Testing', icon: '🧪' },
                                                                                    { id: 'financial-conduct-monitoring', label: 'Financial Conduct Monitoring', icon: '📈' },
                                                                                    { id: 'regulatory-change-management', label: 'Regulatory Change Management', icon: '🔄' },
                                                                                    { id: 'compliance-training-automation', label: 'Compliance Training Automation', icon: '📚' },
                                                                                    { id: 'digital-compliance-dashboards', label: 'Digital Compliance Dashboards', icon: '💻' },
                                                                                    { id: 'corporate-governance-monitoring-tools', label: 'Corporate Governance Monitoring Tools', icon: '🏛️' },
                                                                                    { id: 'suspicious-activity-detection', label: 'Suspicious Activity Detection', icon: '🚨' },
                                                                                    { id: 'behavioral-compliance-monitoring', label: 'Behavioral Compliance Monitoring', icon: '🧠' },
                                                                                    { id: 'regulatory-audit-automation', label: 'Regulatory Audit Automation', icon: '📜' },
                                                                                    { id: 'third-party-risk-management', label: 'Third-Party Risk Management', icon: '🤝' },
                                                                                    { id: 'transaction-data-validation', label: 'Transaction Data Validation', icon: '✅' },
                                                                                    { id: 'compliance-reporting-dashboards', label: 'Compliance Reporting Dashboards', icon: '📊' },
                                                                                    { id: 'operational-risk-management-automation', label: 'Operational Risk Management Automation', icon: '⚙️' }
                                                                                  ];
                                                                                  case 'consumer-banking':
                                                                                    return [
                                                                                      { id: 'automated-account-opening', label: 'Automated Account Opening', icon: '🏦' },
                                                                                      { id: 'personalized-financial-advisory-services', label: 'Personalized Financial Advisory Services', icon: '💼' },
                                                                                      { id: 'automated-loan-origination', label: 'Automated Loan Origination', icon: '📄' },
                                                                                      { id: 'instant-credit-scoring-and-approval', label: 'Instant Credit Scoring and Approval', icon: '✅' },
                                                                                      { id: 'mobile-banking-solutions', label: 'Mobile Banking Solutions', icon: '📱' },
                                                                                      { id: 'contactless-payment-systems', label: 'Contactless Payment Systems', icon: '💳' },
                                                                                      { id: 'customer-identity-verification', label: 'Customer Identity Verification', icon: '🆔' },
                                                                                      { id: 'automated-bill-payments', label: 'Automated Bill Payments', icon: '💵' },
                                                                                      { id: 'real-time-fraud-detection', label: 'Real-Time Fraud Detection', icon: '🚨' },
                                                                                      { id: 'voice-activated-banking-services', label: 'Voice-Activated Banking Services', icon: '🗣️' },
                                                                                      { id: 'digital-wallet-integration', label: 'Digital Wallet Integration', icon: '💳' },
                                                                                      { id: 'personalized-savings-plans', label: 'Personalized Savings Plans', icon: '💰' },
                                                                                      { id: 'expense-tracking-automation', label: 'Expense Tracking Automation', icon: '📊' },
                                                                                      { id: 'automated-overdraft-protection', label: 'Automated Overdraft Protection', icon: '⚠️' },
                                                                                      { id: 'transaction-categorization-tools', label: 'Transaction Categorization Tools', icon: '📂' },
                                                                                      { id: 'online-mortgage-application-processing', label: 'Online Mortgage Application Processing', icon: '🏠' },
                                                                                      { id: 'automated-personal-loan-management', label: 'Automated Personal Loan Management', icon: '💵' },
                                                                                      { id: 'interest-rate-monitoring-and-alerts', label: 'Interest Rate Monitoring and Alerts', icon: '📈' },
                                                                                      { id: 'atm-transaction-monitoring', label: 'ATM Transaction Monitoring', icon: '🏧' },
                                                                                      { id: 'customer-service-chatbots', label: 'Customer Service Chatbots', icon: '🤖' },
                                                                                      { id: 'automated-investment-products', label: 'Automated Investment Products', icon: '📈' },
                                                                                      { id: 'real-time-account-balance-alerts', label: 'Real-Time Account Balance Alerts', icon: '🔔' },
                                                                                      { id: 'card-fraud-prevention-systems', label: 'Card Fraud Prevention Systems', icon: '🚨' },
                                                                                      { id: 'smart-budgeting-tools', label: 'Smart Budgeting Tools', icon: '📊' },
                                                                                      { id: 'automated-credit-card-payments', label: 'Automated Credit Card Payments', icon: '💳' },
                                                                                      { id: 'banking-chat-support-automation', label: 'Banking Chat Support Automation', icon: '💬' },
                                                                                      { id: 'predictive-customer-retention-models', label: 'Predictive Customer Retention Models', icon: '🔮' },
                                                                                      { id: 'automated-financial-planning-solutions', label: 'Automated Financial Planning Solutions', icon: '📝' },
                                                                                      { id: 'loyalty-and-rewards-program-automation', label: 'Loyalty and Rewards Program Automation', icon: '🏆' },
                                                                                      { id: 'automated-currency-exchange-services', label: 'Automated Currency Exchange Services', icon: '💱' },
                                                                                      { id: 'mobile-check-deposit-solutions', label: 'Mobile Check Deposit Solutions', icon: '📱' },
                                                                                      { id: 'instant-payment-transfers', label: 'Instant Payment Transfers', icon: '⚡' },
                                                                                      { id: 'automated-tax-filing-assistance', label: 'Automated Tax Filing Assistance', icon: '🧾' },
                                                                                      { id: 'customer-behavior-analytics', label: 'Customer Behavior Analytics', icon: '📊' },
                                                                                      { id: 'financial-health-score-calculation', label: 'Financial Health Score Calculation', icon: '💵' },
                                                                                      { id: 'bank-statement-automation', label: 'Bank Statement Automation', icon: '📄' },
                                                                                      { id: 'loan-payment-scheduling-systems', label: 'Loan Payment Scheduling Systems', icon: '📅' },
                                                                                      { id: 'automated-subscription-management', label: 'Automated Subscription Management', icon: '🔄' },
                                                                                      { id: 'real-time-customer-feedback-systems', label: 'Real-Time Customer Feedback Systems', icon: '📣' },
                                                                                      { id: 'personalized-loan-offers', label: 'Personalized Loan Offers', icon: '🎯' }
                                                                                    ];
                                                                                    case 'correspondent-banking':
        return [
          { id: 'cross-border-payment-processing', label: 'Cross-Border Payment Processing', icon: '🌍' },
          { id: 'automated-payment-settlements', label: 'Automated Payment Settlements', icon: '💵' },
          { id: 'foreign-currency-exchange-solutions', label: 'Foreign Currency Exchange Solutions', icon: '💱' },
          { id: 'real-time-international-transfers', label: 'Real-Time International Transfers', icon: '⏱️' },
          { id: 'automated-swift-messaging-systems', label: 'Automated Swift Messaging Systems', icon: '📩' },
          { id: 'international-payment-reconciliation', label: 'International Payment Reconciliation', icon: '📄' },
          { id: 'multi-currency-payment-systems', label: 'Multi-Currency Payment Systems', icon: '💳' },
          { id: 'risk-assessment-for-cross-border-transactions', label: 'Risk Assessment for Cross-Border Transactions', icon: '⚖️' },
          { id: 'digital-remittance-platforms', label: 'Digital Remittance Platforms', icon: '💻' },
          { id: 'global-payment-gateway-solutions', label: 'Global Payment Gateway Solutions', icon: '🌐' },
          { id: 'instant-cross-border-liquidity-management', label: 'Instant Cross-Border Liquidity Management', icon: '💧' },
          { id: 'automated-trade-finance-solutions', label: 'Automated Trade Finance Solutions', icon: '📈' },
          { id: 'payment-fraud-prevention-systems', label: 'Payment Fraud Prevention Systems', icon: '🚨' },
          { id: 'regulatory-compliance-for-cross-border-payments', label: 'Regulatory Compliance for Cross-Border Payments', icon: '📜' },
          { id: 'blockchain-for-international-transactions', label: 'Blockchain for International Transactions', icon: '🔗' },
          { id: 'global-treasury-management-solutions', label: 'Global Treasury Management Solutions', icon: '🏦' },
          { id: 'correspondent-account-management-automation', label: 'Correspondent Account Management Automation', icon: '🔄' },
          { id: 'swift-transaction-tracking', label: 'Swift Transaction Tracking', icon: '📩' },
          { id: 'automated-swift-gpi-integration', label: 'Automated SWIFT GPI Integration', icon: '🔗' },
          { id: 'international-fund-transfer-optimization', label: 'International Fund Transfer Optimization', icon: '📈' },
          { id: 'third-party-payment-service-integration', label: 'Third-Party Payment Service Integration', icon: '🤝' },
          { id: 'currency-hedging-tools', label: 'Currency Hedging Tools', icon: '💱' },
          { id: 'payment-service-provider-automation', label: 'Payment Service Provider Automation', icon: '⚙️' },
          { id: 'cross-border-invoice-automation', label: 'Cross-Border Invoice Automation', icon: '📄' },
          { id: 'international-money-market-transactions', label: 'International Money Market Transactions', icon: '💵' },
          { id: 'global-risk-management-solutions', label: 'Global Risk Management Solutions', icon: '🌍' },
          { id: 'automated-documentary-collections', label: 'Automated Documentary Collections', icon: '📄' },
          { id: 'international-payment-fraud-detection', label: 'International Payment Fraud Detection', icon: '🚨' },
          { id: 'digital-onboarding-for-correspondent-banks', label: 'Digital Onboarding for Correspondent Banks', icon: '💻' },
          { id: 'cross-border-cash-flow-forecasting', label: 'Cross-Border Cash Flow Forecasting', icon: '🔮' },
          { id: 'regulatory-reporting-for-cross-border-transactions', label: 'Regulatory Reporting for Cross-Border Transactions', icon: '📜' },
          { id: 'global-clearing-and-settlement-automation', label: 'Global Clearing and Settlement Automation', icon: '🔄' },
          { id: 'liquidity-monitoring-in-international-markets', label: 'Liquidity Monitoring in International Markets', icon: '💧' },
          { id: 'automated-compliance-screening-for-correspondent-banking', label: 'Automated Compliance Screening for Correspondent Banking', icon: '✅' },
          { id: 'international-trade-credit-risk-management', label: 'International Trade Credit Risk Management', icon: '⚖️' },
          { id: 'transaction-cost-optimization', label: 'Transaction Cost Optimization', icon: '💵' },
          { id: 'payment-linkage-between-domestic-and-international-banks', label: 'Payment Linkage Between Domestic and International Banks', icon: '🔗' },
          { id: 'automated-reconciliation-of-international-payments', label: 'Automated Reconciliation of International Payments', icon: '🔄' },
          { id: 'global-fund-transfer-tracking-and-analytics', label: 'Global Fund Transfer Tracking and Analytics', icon: '📊' },
          { id: 'currency-risk-management-automation', label: 'Currency Risk Management Automation', icon: '💱' }
        ];        
        
        case 'credit-card-services':
          return [
            { id: 'automated-credit-card-application-processing', label: 'Automated Credit Card Application Processing', icon: '📄' },
            { id: 'real-time-fraud-detection', label: 'Real-Time Fraud Detection', icon: '🚨' },
            { id: 'automated-credit-scoring-models', label: 'Automated Credit Scoring Models', icon: '📊' },
            { id: 'credit-card-payment-scheduling', label: 'Credit Card Payment Scheduling', icon: '📅' },
            { id: 'personalized-credit-card-offers', label: 'Personalized Credit Card Offers', icon: '🎯' },
            { id: 'dynamic-credit-limit-management', label: 'Dynamic Credit Limit Management', icon: '⚖️' },
            { id: 'automated-transaction-categorization', label: 'Automated Transaction Categorization', icon: '🔄' },
            { id: 'automated-reward-points-management', label: 'Automated Reward Points Management', icon: '🏆' },
            { id: 'instant-credit-card-activation', label: 'Instant Credit Card Activation', icon: '⚡' },
            { id: 'transaction-dispute-management-systems', label: 'Transaction Dispute Management Systems', icon: '📄' },
            { id: 'real-time-credit-card-transaction-alerts', label: 'Real-Time Credit Card Transaction Alerts', icon: '🔔' },
            { id: 'fraudulent-transaction-monitoring', label: 'Fraudulent Transaction Monitoring', icon: '🚨' },
            { id: 'credit-card-billing-automation', label: 'Credit Card Billing Automation', icon: '💳' },
            { id: 'mobile-credit-card-management', label: 'Mobile Credit Card Management', icon: '📱' },
            { id: 'cross-border-payment-optimization', label: 'Cross-Border Payment Optimization', icon: '🌍' },
            { id: 'credit-card-statement-generation', label: 'Credit Card Statement Generation', icon: '📄' },
            { id: 'cashback-and-reward-program-automation', label: 'Cashback and Reward Program Automation', icon: '🏆' },
            { id: 'credit-card-interest-rate-adjustment', label: 'Credit Card Interest Rate Adjustment', icon: '📈' },
            { id: 'automated-balance-transfer-solutions', label: 'Automated Balance Transfer Solutions', icon: '🔄' },
            { id: 'real-time-payment-verification', label: 'Real-Time Payment Verification', icon: '✅' },
            { id: 'digital-wallet-integration-for-credit-cards', label: 'Digital Wallet Integration for Credit Cards', icon: '💳' },
            { id: 'smart-credit-card-security-features', label: 'Smart Credit Card Security Features', icon: '🔒' },
            { id: 'automated-late-payment-reminders', label: 'Automated Late Payment Reminders', icon: '🔔' },
            { id: 'customer-profile-and-preference-analysis', label: 'Customer Profile and Preference Analysis', icon: '📊' },
            { id: 'predictive-analytics-for-credit-usage', label: 'Predictive Analytics for Credit Usage', icon: '🔮' },
            { id: 'instant-credit-card-approval', label: 'Instant Credit Card Approval', icon: '✅' },
            { id: 'cardholder-transaction-history-analytics', label: 'Cardholder Transaction History Analytics', icon: '📈' },
            { id: 'credit-card-fraud-prevention-tools', label: 'Credit Card Fraud Prevention Tools', icon: '🚨' },
            { id: 'automated-credit-card-payment-collection', label: 'Automated Credit Card Payment Collection', icon: '💳' },
            { id: 'risk-based-credit-card-issuance', label: 'Risk-Based Credit Card Issuance', icon: '⚖️' },
            { id: 'custom-credit-card-design-solutions', label: 'Custom Credit Card Design Solutions', icon: '🎨' },
            { id: 'ai-driven-credit-card-marketing-campaigns', label: 'AI-Driven Credit Card Marketing Campaigns', icon: '🤖' },
            { id: 'credit-card-fee-and-penalty-management', label: 'Credit Card Fee and Penalty Management', icon: '💵' },
            { id: 'international-credit-card-payment-solutions', label: 'International Credit Card Payment Solutions', icon: '🌍' },
            { id: 'credit-card-chargeback-automation', label: 'Credit Card Chargeback Automation', icon: '🔄' },
            { id: 'behavioral-analytics-for-reward-redemption', label: 'Behavioral Analytics for Reward Redemption', icon: '🧠' },
            { id: 'personalized-spending-limits', label: 'Personalized Spending Limits', icon: '💳' },
            { id: 'subscription-management-for-cardholders', label: 'Subscription Management for Cardholders', icon: '📅' },
            { id: 'mobile-credit-card-fraud-prevention', label: 'Mobile Credit Card Fraud Prevention', icon: '📱' },
            { id: 'loyalty-program-automation', label: 'Loyalty Program Automation', icon: '🏆' }
          ];

          case 'credit-unions':
            return [
              { id: 'automated-member-onboarding', label: 'Automated Member Onboarding', icon: '🏦' },
              { id: 'loan-application-processing-automation', label: 'Loan Application Processing Automation', icon: '📄' },
              { id: 'real-time-account-monitoring', label: 'Real-Time Account Monitoring', icon: '⏱️' },
              { id: 'automated-credit-scoring', label: 'Automated Credit Scoring', icon: '📊' },
              { id: 'member-personalization-platforms', label: 'Member Personalization Platforms', icon: '👤' },
              { id: 'automated-transaction-alerts', label: 'Automated Transaction Alerts', icon: '🔔' },
              { id: 'mobile-banking-app-integration', label: 'Mobile Banking App Integration', icon: '📱' },
              { id: 'automated-loan-approval-workflow', label: 'Automated Loan Approval Workflow', icon: '✅' },
              { id: 'member-identity-verification', label: 'Member Identity Verification', icon: '🆔' },
              { id: 'automated-member-communications', label: 'Automated Member Communications', icon: '💬' },
              { id: 'real-time-fraud-detection-systems', label: 'Real-Time Fraud Detection Systems', icon: '🚨' },
              { id: 'automated-deposit-management', label: 'Automated Deposit Management', icon: '💵' },
              { id: 'loan-repayment-scheduling-automation', label: 'Loan Repayment Scheduling Automation', icon: '📅' },
              { id: 'customer-behavior-analytics', label: 'Customer Behavior Analytics', icon: '📊' },
              { id: 'branchless-banking-solutions', label: 'Branchless Banking Solutions', icon: '🏦' },
              { id: 'cross-platform-payment-solutions', label: 'Cross-Platform Payment Solutions', icon: '🌐' },
              { id: 'automated-financial-counseling-tools', label: 'Automated Financial Counseling Tools', icon: '📝' },
              { id: 'smart-budgeting-assistance-for-members', label: 'Smart Budgeting Assistance for Members', icon: '💰' },
              { id: 'automated-credit-monitoring-and-alerts', label: 'Automated Credit Monitoring and Alerts', icon: '🔍' },
              { id: 'personalized-loan-offers', label: 'Personalized Loan Offers', icon: '🎯' },
              { id: 'atm-cash-management-automation', label: 'ATM Cash Management Automation', icon: '🏧' },
              { id: 'dynamic-interest-rate-adjustments', label: 'Dynamic Interest Rate Adjustments', icon: '📈' },
              { id: 'real-time-credit-card-management', label: 'Real-Time Credit Card Management', icon: '💳' },
              { id: 'automated-fund-transfers', label: 'Automated Fund Transfers', icon: '🔄' },
              { id: 'transaction-categorization-for-members', label: 'Transaction Categorization for Members', icon: '📂' },
              { id: 'debt-consolidation-solutions-automation', label: 'Debt Consolidation Solutions Automation', icon: '💳' },
              { id: 'digital-document-signing-for-loan-processing', label: 'Digital Document Signing for Loan Processing', icon: '🖊️' },
              { id: 'automated-member-satisfaction-surveys', label: 'Automated Member Satisfaction Surveys', icon: '📋' },
              { id: 'personalized-product-recommendations', label: 'Personalized Product Recommendations', icon: '🎯' },
              { id: 'mobile-check-deposit-automation', label: 'Mobile Check Deposit Automation', icon: '📱' },
              { id: 'automatic-payment-matching', label: 'Automatic Payment Matching', icon: '🔄' },
              { id: 'member-engagement-and-retention-tools', label: 'Member Engagement and Retention Tools', icon: '🤝' },
              { id: 'automated-savings-program-management', label: 'Automated Savings Program Management', icon: '💰' },
              { id: 'integrated-payment-gateway-solutions', label: 'Integrated Payment Gateway Solutions', icon: '🔗' },
              { id: 'risk-based-loan-allocation-systems', label: 'Risk-Based Loan Allocation Systems', icon: '⚖️' },
              { id: 'automated-account-reconciliation', label: 'Automated Account Reconciliation', icon: '🔄' },
              { id: 'member-loyalty-and-rewards-programs', label: 'Member Loyalty and Rewards Programs', icon: '🏆' },
              { id: 'peer-to-peer-lending-solutions', label: 'Peer-to-Peer Lending Solutions', icon: '🤝' },
              { id: 'automated-regulatory-compliance-reporting', label: 'Automated Regulatory Compliance Reporting', icon: '📜' },
              { id: 'online-community-building-for-members', label: 'Online Community Building for Members', icon: '🌐' }
            ];

            case 'custodial-services':
              return [
                { id: 'automated-asset-safekeeping', label: 'Automated Asset Safekeeping', icon: '🔒' },
                { id: 'real-time-asset-monitoring', label: 'Real-Time Asset Monitoring', icon: '⏱️' },
                { id: 'automated-transaction-settlement', label: 'Automated Transaction Settlement', icon: '📄' },
                { id: 'digital-custody-for-cryptocurrencies', label: 'Digital Custody for Cryptocurrencies', icon: '₿' },
                { id: 'blockchain-based-asset-tracking', label: 'Blockchain-Based Asset Tracking', icon: '🔗' },
                { id: 'portfolio-reconciliation-automation', label: 'Portfolio Reconciliation Automation', icon: '🔄' },
                { id: 'automated-tax-reporting', label: 'Automated Tax Reporting', icon: '🧾' },
                { id: 'security-lending-and-borrowing-automation', label: 'Security Lending and Borrowing Automation', icon: '🤝' },
                { id: 'digital-asset-custody-solutions', label: 'Digital Asset Custody Solutions', icon: '💻' },
                { id: 'cross-border-asset-custody', label: 'Cross-Border Asset Custody', icon: '🌍' },
                { id: 'automated-compliance-and-reporting', label: 'Automated Compliance and Reporting', icon: '📜' },
                { id: 'custodial-account-management', label: 'Custodial Account Management', icon: '🏦' },
                { id: 'corporate-actions-automation', label: 'Corporate Actions Automation', icon: '📄' },
                { id: 'dividend-processing-automation', label: 'Dividend Processing Automation', icon: '💵' },
                { id: 'automated-securities-lending-transactions', label: 'Automated Securities Lending Transactions', icon: '📈' },
                { id: 'trade-matching-and-settlement-automation', label: 'Trade Matching and Settlement Automation', icon: '🔄' },
                { id: 'real-time-asset-valuation', label: 'Real-Time Asset Valuation', icon: '📊' },
                { id: 'automated-investment-fund-custody', label: 'Automated Investment Fund Custody', icon: '💼' },
                { id: 'legal-and-regulatory-document-management', label: 'Legal and Regulatory Document Management', icon: '📜' },
                { id: 'collateral-management-automation', label: 'Collateral Management Automation', icon: '🔒' },
                { id: 'foreign-exchange-custodial-services', label: 'Foreign Exchange Custodial Services', icon: '💱' },
                { id: 'cash-management-and-reinvestment-automation', label: 'Cash Management and Reinvestment Automation', icon: '💵' },
                { id: 'electronic-fund-transfer-automation', label: 'Electronic Fund Transfer Automation', icon: '💳' },
                { id: 'risk-management-in-asset-custody', label: 'Risk Management in Asset Custody', icon: '⚖️' },
                { id: 'multi-asset-class-custodial-solutions', label: 'Multi-Asset Class Custodial Solutions', icon: '🌐' },
                { id: 'performance-and-reporting-analytics', label: 'Performance and Reporting Analytics', icon: '📊' },
                { id: 'automated-asset-protection-mechanisms', label: 'Automated Asset Protection Mechanisms', icon: '🛡️' },
                { id: 'compliance-risk-monitoring', label: 'Compliance Risk Monitoring', icon: '🔍' },
                { id: 'custodial-data-analytics-and-insights', label: 'Custodial Data Analytics and Insights', icon: '📈' },
                { id: 'real-time-transaction-processing', label: 'Real-Time Transaction Processing', icon: '⏱️' },
                { id: 'asset-transfer-automation', label: 'Asset Transfer Automation', icon: '🔄' },
                { id: 'custodial-service-integration-with-digital-platforms', label: 'Custodial Service Integration with Digital Platforms', icon: '🌐' },
                { id: 'automated-income-distribution', label: 'Automated Income Distribution', icon: '💵' },
                { id: 'security-ownership-and-tracking', label: 'Security Ownership and Tracking', icon: '🔍' },
                { id: 'automated-client-statement-generation', label: 'Automated Client Statement Generation', icon: '📄' },
                { id: 'document-custody-automation', label: 'Document Custody Automation', icon: '📜' },
                { id: 'legal-settlement-processing', label: 'Legal Settlement Processing', icon: '⚖️' },
                { id: 'private-equity-fund-custody-services', label: 'Private Equity Fund Custody Services', icon: '💼' },
                { id: 'cross-currency-asset-management', label: 'Cross-Currency Asset Management', icon: '💱' },
                { id: 'real-time-compliance-monitoring-for-custodial-services', label: 'Real-Time Compliance Monitoring for Custodial Services', icon: '🔍' }
              ];
              case 'cybersecurity-services':
                return [
                  { id: 'automated-threat-detection', label: 'Automated Threat Detection', icon: '🛡️' },
                  { id: 'real-time-intrusion-detection-systems', label: 'Real-Time Intrusion Detection Systems', icon: '🔍' },
                  { id: 'endpoint-security-automation', label: 'Endpoint Security Automation', icon: '💻' },
                  { id: 'behavioral-analytics-for-fraud-prevention', label: 'Behavioral Analytics for Fraud Prevention', icon: '📊' },
                  { id: 'network-traffic-analysis-and-security', label: 'Network Traffic Analysis and Security', icon: '🌐' },
                  { id: 'automated-vulnerability-scanning', label: 'Automated Vulnerability Scanning', icon: '🔒' },
                  { id: 'multi-factor-authentication-solutions', label: 'Multi-Factor Authentication Solutions', icon: '🔑' },
                  { id: 'automated-patch-management', label: 'Automated Patch Management', icon: '⚙️' },
                  { id: 'siem', label: 'Security Incident and Event Management (SIEM)', icon: '📈' },
                  { id: 'data-loss-prevention-systems', label: 'Data Loss Prevention Systems', icon: '🗂️' },
                  { id: 'automated-malware-analysis', label: 'Automated Malware Analysis', icon: '🦠' },
                  { id: 'phishing-detection-and-prevention', label: 'Phishing Detection and Prevention', icon: '🚫' },
                  { id: 'cloud-security-automation', label: 'Cloud Security Automation', icon: '☁️' },
                  { id: 'identity-and-access-management', label: 'Identity and Access Management (IAM)', icon: '👤' },
                  { id: 'threat-intelligence-automation', label: 'Threat Intelligence Automation', icon: '🧠' },
                  { id: 'automated-compliance-monitoring', label: 'Automated Compliance Monitoring', icon: '📜' },
                  { id: 'firewall-configuration-automation', label: 'Firewall Configuration Automation', icon: '🛡️' },
                  { id: 'network-segmentation-security', label: 'Network Segmentation Security', icon: '🔗' },
                  { id: 'real-time-security-monitoring-and-alerts', label: 'Real-Time Security Monitoring and Alerts', icon: '⏱️' },
                  { id: 'automated-penetration-testing', label: 'Automated Penetration Testing', icon: '🔍' },
                  { id: 'risk-based-access-control-systems', label: 'Risk-Based Access Control Systems', icon: '⚖️' },
                  { id: 'cryptographic-key-management-automation', label: 'Cryptographic Key Management Automation', icon: '🔑' },
                  { id: 'continuous-security-auditing', label: 'Continuous Security Auditing', icon: '🔍' },
                  { id: 'apt-detection', label: 'Advanced Persistent Threat (APT) Detection', icon: '🚨' },
                  { id: 'automated-data-encryption', label: 'Automated Data Encryption', icon: '🔒' },
                  { id: 'user-and-entity-behavior-analytics', label: 'User and Entity Behavior Analytics (UEBA)', icon: '📊' },
                  { id: 'ips-automation', label: 'Intrusion Prevention System (IPS) Automation', icon: '🛡️' },
                  { id: 'automated-cybersecurity-policy-enforcement', label: 'Automated Cybersecurity Policy Enforcement', icon: '📜' },
                  { id: 'secure-application-development-practices', label: 'Secure Application Development Practices', icon: '🛠️' },
                  { id: 'automated-backup-and-disaster-recovery-solutions', label: 'Automated Backup and Disaster Recovery Solutions', icon: '💾' },
                  { id: 'ransomware-detection-and-mitigation', label: 'Ransomware Detection and Mitigation', icon: '🦠' },
                  { id: 'iot-security-automation', label: 'IoT Security Automation', icon: '📡' },
                  { id: 'automated-security-reporting', label: 'Automated Security Reporting', icon: '📊' },
                  { id: 'cloud-access-security-brokers', label: 'Cloud Access Security Brokers (CASBs)', icon: '☁️' },
                  { id: 'automated-forensics-and-incident-response', label: 'Automated Forensics and Incident Response', icon: '🔍' },
                  { id: 'security-awareness-training-automation', label: 'Security Awareness Training Automation', icon: '📚' },
                  { id: 'api-security-automation', label: 'API Security Automation', icon: '🔒' },
                  { id: 'automated-ddos-attack-mitigation', label: 'Automated DDoS Attack Mitigation', icon: '🚫' },
                  { id: 'biometric-security-systems', label: 'Biometric Security Systems', icon: '👁️' },
                  { id: 'automated-security-configuration-management', label: 'Automated Security Configuration Management', icon: '⚙️' }
                ];
                case 'derivatives-trading':
                  return [
                    { id: 'automated-derivatives-pricing', label: 'Automated Derivatives Pricing', icon: '💹' },
                    { id: 'algorithmic-trading-strategies-for-derivatives', label: 'Algorithmic Trading Strategies for Derivatives', icon: '🤖' },
                    { id: 'real-time-market-risk-assessment', label: 'Real-Time Market Risk Assessment', icon: '📊' },
                    { id: 'automated-hedging-strategies', label: 'Automated Hedging Strategies', icon: '🛡️' },
                    { id: 'portfolio-optimization-for-derivatives', label: 'Portfolio Optimization for Derivatives', icon: '📈' },
                    { id: 'derivatives-trade-execution-platforms', label: 'Derivatives Trade Execution Platforms', icon: '💼' },
                    { id: 'cross-asset-class-derivatives-trading', label: 'Cross-Asset Class Derivatives Trading', icon: '🌐' },
                    { id: 'smart-order-routing-for-derivatives', label: 'Smart Order Routing for Derivatives', icon: '🚀' },
                    { id: 'derivative-trade-matching-automation', label: 'Derivative Trade Matching Automation', icon: '🔄' },
                    { id: 'automated-risk-mitigation-solutions', label: 'Automated Risk Mitigation Solutions', icon: '⚖️' },
                    { id: 'real-time-cds-pricing', label: 'Real-Time Credit Default Swap (CDS) Pricing', icon: '💵' },
                    { id: 'options-and-futures-trading-automation', label: 'Options and Futures Trading Automation', icon: '📈' },
                    { id: 'automated-spread-trading-strategies', label: 'Automated Spread Trading Strategies', icon: '📊' },
                    { id: 'liquidity-management-for-derivatives', label: 'Liquidity Management for Derivatives', icon: '💧' },
                    { id: 'real-time-volatility-tracking-for-derivatives', label: 'Real-Time Volatility Tracking for Derivatives', icon: '📉' },
                    { id: 'derivatives-clearing-automation', label: 'Derivatives Clearing Automation', icon: '🔒' },
                    { id: 'cross-border-derivatives-settlement-solutions', label: 'Cross-Border Derivatives Settlement Solutions', icon: '🌍' },
                    { id: 'customizable-trading-algorithms-for-derivatives', label: 'Customizable Trading Algorithms for Derivatives', icon: '⚙️' },
                    { id: 'synthetic-asset-creation-via-derivatives', label: 'Synthetic Asset Creation via Derivatives', icon: '🧩' },
                    { id: 'derivative-collateral-management-automation', label: 'Derivative Collateral Management Automation', icon: '📜' },
                    { id: 'market-data-aggregation-for-derivatives', label: 'Market Data Aggregation for Derivatives', icon: '📊' },
                    { id: 'event-driven-trading-for-derivatives', label: 'Event-Driven Trading for Derivatives', icon: '📅' },
                    { id: 'derivatives-backtesting-automation', label: 'Derivatives Backtesting Automation', icon: '🔍' },
                    { id: 'dynamic-margining-for-derivatives-positions', label: 'Dynamic Margining for Derivatives Positions', icon: '📈' },
                    { id: 'trade-confirmation-automation', label: 'Trade Confirmation Automation', icon: '✅' },
                    { id: 'derivative-contract-lifecycle-management', label: 'Derivative Contract Lifecycle Management', icon: '📑' },
                    { id: 'real-time-exposure-monitoring-for-derivatives', label: 'Real-Time Exposure Monitoring for Derivatives', icon: '👁️' },
                    { id: 'portfolio-stress-testing-for-derivatives', label: 'Portfolio Stress Testing for Derivatives', icon: '⚠️' },
                    { id: 'dynamic-option-pricing-models', label: 'Dynamic Option Pricing Models', icon: '📈' },
                    { id: 'currency-derivatives-trading-automation', label: 'Currency Derivatives Trading Automation', icon: '💱' },
                    { id: 'commodity-derivatives-risk-management', label: 'Commodity Derivatives Risk Management', icon: '🌾' },
                    { id: 'automated-settlement-and-payment-processing-for-derivatives', label: 'Automated Settlement and Payment Processing for Derivatives', icon: '💳' },
                    { id: 'derivatives-compliance-and-regulatory-automation', label: 'Derivatives Compliance and Regulatory Automation', icon: '📜' },
                    { id: 'derivatives-strategy-optimization-tools', label: 'Derivatives Strategy Optimization Tools', icon: '🛠️' },
                    { id: 'counterparty-risk-management-for-derivatives', label: 'Counterparty Risk Management for Derivatives', icon: '⚖️' },
                    { id: 'quantitative-analysis-for-derivatives-pricing', label: 'Quantitative Analysis for Derivatives Pricing', icon: '📊' },
                    { id: 'volatility-surface-modeling-for-derivatives', label: 'Volatility Surface Modeling for Derivatives', icon: '📈' },
                    { id: 'intraday-derivatives-trading-automation', label: 'Intraday Derivatives Trading Automation', icon: '⏱️' },
                    { id: 'custom-derivatives-product-development', label: 'Custom Derivatives Product Development', icon: '🛠️' },
                    { id: 'automated-risk-return-optimization-for-derivatives', label: 'Automated Risk-Return Optimization for Derivatives', icon: '📈' }
                  ];
                  case 'development-banking':
                    return [
                      { id: 'automated-project-financing-solutions', label: 'Automated Project Financing Solutions', icon: '💼' },
                      { id: 'infrastructure-investment-evaluation', label: 'Infrastructure Investment Evaluation', icon: '🏗️' },
                      { id: 'loan-disbursement-automation-for-development-projects', label: 'Loan Disbursement Automation for Development Projects', icon: '💰' },
                      { id: 'microfinance-lending-solutions', label: 'Microfinance Lending Solutions', icon: '🏦' },
                      { id: 'risk-assessment-for-development-projects', label: 'Risk Assessment for Development Projects', icon: '⚖️' },
                      { id: 'sustainable-investment-platforms', label: 'Sustainable Investment Platforms', icon: '🌱' },
                      { id: 'impact-investment-monitoring-tools', label: 'Impact Investment Monitoring Tools', icon: '📊' },
                      { id: 'real-time-project-performance-tracking', label: 'Real-Time Project Performance Tracking', icon: '⏱️' },
                      { id: 'automated-financial-inclusion-programs', label: 'Automated Financial Inclusion Programs', icon: '📈' },
                      { id: 'cross-border-development-financing-solutions', label: 'Cross-Border Development Financing Solutions', icon: '🌍' },
                      { id: 'smart-fund-allocation-for-development-projects', label: 'Smart Fund Allocation for Development Projects', icon: '💡' },
                      { id: 'automated-environmental-impact-assessments', label: 'Automated Environmental Impact Assessments', icon: '🌳' },
                      { id: 'development-loan-origination-automation', label: 'Development Loan Origination Automation', icon: '📝' },
                      { id: 'digital-banking-solutions-for-rural-communities', label: 'Digital Banking Solutions for Rural Communities', icon: '📱' },
                      { id: 'social-impact-bond-management', label: 'Social Impact Bond Management', icon: '💵' },
                      { id: 'green-bond-issuance-and-management-automation', label: 'Green Bond Issuance and Management Automation', icon: '🌿' },
                      { id: 'government-program-fund-distribution-automation', label: 'Government Program Fund Distribution Automation', icon: '🏛️' },
                      { id: 'sme-financing-automation', label: 'Small and Medium Enterprise (SME) Financing Automation', icon: '🏢' },
                      { id: 'mobile-based-banking-for-development-projects', label: 'Mobile-Based Banking for Development Projects', icon: '📲' },
                      { id: 'financial-risk-mitigation-for-developing-economies', label: 'Financial Risk Mitigation for Developing Economies', icon: '🛡️' },
                      { id: 'automated-development-loan-monitoring', label: 'Automated Development Loan Monitoring', icon: '🔍' },
                      { id: 'supply-chain-financing-for-development-projects', label: 'Supply Chain Financing for Development Projects', icon: '🔗' },
                      { id: 'predictive-analytics-for-project-success-rates', label: 'Predictive Analytics for Project Success Rates', icon: '📊' },
                      { id: 'debt-management-solutions-for-developing-economies', label: 'Debt Management Solutions for Developing Economies', icon: '📉' },
                      { id: 'automated-collateral-management-for-development-loans', label: 'Automated Collateral Management for Development Loans', icon: '🔒' },
                      { id: 'real-time-investment-portfolio-tracking', label: 'Real-Time Investment Portfolio Tracking', icon: '📈' },
                      { id: 'project-cost-estimation-and-budgeting-automation', label: 'Project Cost Estimation and Budgeting Automation', icon: '💵' },
                      { id: 'foreign-direct-investment-tracking-systems', label: 'Foreign Direct Investment (FDI) Tracking Systems', icon: '🌍' },
                      { id: 'global-development-partnership-platforms', label: 'Global Development Partnership Platforms', icon: '🤝' },
                      { id: 'automated-reporting-for-development-impact', label: 'Automated Reporting for Development Impact', icon: '📜' },
                      { id: 'capacity-building-program-management', label: 'Capacity Building Program Management', icon: '🏗️' },
                      { id: 'crowd-funding-platforms-for-development-initiatives', label: 'Crowd-Funding Platforms for Development Initiatives', icon: '💰' },
                      { id: 'governance-risk-evaluation-in-development-financing', label: 'Governance Risk Evaluation in Development Financing', icon: '⚖️' },
                      { id: 'automated-loan-repayment-solutions', label: 'Automated Loan Repayment Solutions', icon: '💳' },
                      { id: 'community-development-financing-tools', label: 'Community Development Financing Tools', icon: '🏘️' },
                      { id: 'cross-country-infrastructure-projects-management', label: 'Cross-Country Infrastructure Projects Management', icon: '🌍' },
                      { id: 'capital-raising-for-development-projects', label: 'Capital Raising for Development Projects', icon: '💵' },
                      { id: 'integrated-development-finance-platforms', label: 'Integrated Development Finance Platforms', icon: '🔗' },
                      { id: 'automated-compliance-for-development-banking', label: 'Automated Compliance for Development Banking', icon: '📜' },
                      { id: 'post-project-evaluation-tools', label: 'Post-Project Evaluation Tools', icon: '🔍' }
                    ];
                    case 'digital-banking':
                      return [
                        { id: 'mobile-banking-solutions', label: 'Mobile Banking Solutions', icon: '📱' },
                        { id: 'automated-account-opening-and-onboarding', label: 'Automated Account Opening and Onboarding', icon: '📝' },
                        { id: 'digital-wallet-integration', label: 'Digital Wallet Integration', icon: '💳' },
                        { id: 'instant-credit-and-loan-approval', label: 'Instant Credit and Loan Approval', icon: '⚡' },
                        { id: 'automated-personal-finance-management', label: 'Automated Personal Finance Management', icon: '📊' },
                        { id: 'peer-to-peer-payment-platforms', label: 'Peer-to-Peer Payment Platforms', icon: '🤝' },
                        { id: 'real-time-transaction-alerts', label: 'Real-Time Transaction Alerts', icon: '🔔' },
                        { id: 'digital-identity-verification', label: 'Digital Identity Verification', icon: '🛡️' },
                        { id: 'online-fraud-detection-systems', label: 'Online Fraud Detection Systems', icon: '🚫' },
                        { id: 'digital-banking-customer-support-chatbots', label: 'Digital Banking Customer Support Chatbots', icon: '🤖' },
                        { id: 'automated-bill-payment-systems', label: 'Automated Bill Payment Systems', icon: '💵' },
                        { id: 'contactless-payment-solutions', label: 'Contactless Payment Solutions', icon: '📲' },
                        { id: 'mobile-check-deposit-solutions', label: 'Mobile Check Deposit Solutions', icon: '📄' },
                        { id: 'automated-loan-repayment-reminders', label: 'Automated Loan Repayment Reminders', icon: '⏰' },
                        { id: 'online-savings-account-management', label: 'Online Savings Account Management', icon: '🏦' },
                        { id: 'digital-mortgage-application-processing', label: 'Digital Mortgage Application Processing', icon: '🏠' },
                        { id: 'remote-account-management-services', label: 'Remote Account Management Services', icon: '🌐' },
                        { id: 'cross-platform-integration-for-banking-services', label: 'Cross-Platform Integration for Banking Services', icon: '🔗' },
                        { id: 'customizable-digital-banking-interfaces', label: 'Customizable Digital Banking Interfaces', icon: '🎨' },
                        { id: 'real-time-payment-processing', label: 'Real-Time Payment Processing', icon: '⚡' },
                        { id: 'blockchain-for-secure-digital-transactions', label: 'Blockchain for Secure Digital Transactions', icon: '🔗' },
                        { id: 'mobile-first-banking-platforms', label: 'Mobile-First Banking Platforms', icon: '📱' },
                        { id: 'personalized-digital-banking-offers', label: 'Personalized Digital Banking Offers', icon: '🎁' },
                        { id: 'automated-wealth-management-tools', label: 'Automated Wealth Management Tools', icon: '💰' },
                        { id: 'cryptocurrency-and-blockchain-banking-services', label: 'Cryptocurrency and Blockchain Banking Services', icon: '₿' },
                        { id: 'instant-cross-border-payments', label: 'Instant Cross-Border Payments', icon: '🌍' },
                        { id: 'digital-banking-security-solutions', label: 'Digital Banking Security Solutions', icon: '🔒' },
                        { id: 'online-investment-portfolio-management', label: 'Online Investment Portfolio Management', icon: '📈' },
                        { id: 'digital-insurance-services-integration', label: 'Digital Insurance Services Integration', icon: '🛡️' },
                        { id: 'automated-customer-feedback-collection', label: 'Automated Customer Feedback Collection', icon: '📋' },
                        { id: 'ai-powered-budgeting-and-expense-tracking', label: 'AI-Powered Budgeting and Expense Tracking', icon: '🤖' },
                        { id: 'automated-tax-filing-integration', label: 'Automated Tax Filing Integration', icon: '🧾' },
                        { id: 'robo-advisory-digital-services', label: 'Robo-Advisory Digital Services', icon: '🤖' },
                        { id: 'virtual-banking-assistants', label: 'Virtual Banking Assistants', icon: '👩‍💻' },
                        { id: 'automated-credit-scoring-models', label: 'Automated Credit Scoring Models', icon: '📊' },
                        { id: 'real-time-currency-exchange', label: 'Real-Time Currency Exchange', icon: '💱' },
                        { id: 'subscription-management-and-payments-automation', label: 'Subscription Management and Payments Automation', icon: '📅' },
                        { id: 'mobile-banking-fraud-prevention', label: 'Mobile Banking Fraud Prevention', icon: '🚫' },
                        { id: 'digital-banking-customer-loyalty-programs', label: 'Digital Banking Customer Loyalty Programs', icon: '🏆' },
                        { id: 'data-driven-financial-planning-tools', label: 'Data-Driven Financial Planning Tools', icon: '📈' }
                      ];
                      case 'financial-advisory-services':
                        return [
                          { id: 'automated-investment-portfolio-management', label: 'Automated Investment Portfolio Management', icon: '📈' },
                          { id: 'retirement-planning-automation', label: 'Retirement Planning Automation', icon: '🕰️' },
                          { id: 'tax-efficient-investment-strategies', label: 'Tax-Efficient Investment Strategies', icon: '💰' },
                          { id: 'personalized-financial-planning-tools', label: 'Personalized Financial Planning Tools', icon: '🛠️' },
                          { id: 'risk-based-investment-advisory', label: 'Risk-Based Investment Advisory', icon: '⚖️' },
                          { id: 'goal-based-financial-planning', label: 'Goal-Based Financial Planning', icon: '🎯' },
                          { id: 'automated-asset-allocation', label: 'Automated Asset Allocation', icon: '📊' },
                          { id: 'real-time-portfolio-rebalancing', label: 'Real-Time Portfolio Rebalancing', icon: '🔄' },
                          { id: 'client-risk-profiling-automation', label: 'Client Risk Profiling Automation', icon: '👤' },
                          { id: 'holistic-wealth-management-platforms', label: 'Holistic Wealth Management Platforms', icon: '🏦' },
                          { id: 'automated-estate-planning-solutions', label: 'Automated Estate Planning Solutions', icon: '🏠' },
                          { id: 'financial-health-monitoring-tools', label: 'Financial Health Monitoring Tools', icon: '📈' },
                          { id: 'smart-budgeting-assistance', label: 'Smart Budgeting Assistance', icon: '💵' },
                          { id: 'digital-tax-filing-and-reporting', label: 'Digital Tax Filing and Reporting', icon: '🧾' },
                          { id: 'automated-debt-management-and-repayment-plans', label: 'Automated Debt Management and Repayment Plans', icon: '💳' },
                          { id: 'investment-return-forecasting-models', label: 'Investment Return Forecasting Models', icon: '📊' },
                          { id: 'financial-product-recommendations', label: 'Financial Product Recommendations', icon: '📋' },
                          { id: 'customizable-financial-planning-dashboards', label: 'Customizable Financial Planning Dashboards', icon: '📊' },
                          { id: 'automated-savings-goal-tracking', label: 'Automated Savings Goal Tracking', icon: '🎯' },
                          { id: 'behavioral-finance-insights-for-clients', label: 'Behavioral Finance Insights for Clients', icon: '🧠' },
                          { id: 'dynamic-withdrawal-strategies-for-retirees', label: 'Dynamic Withdrawal Strategies for Retirees', icon: '💵' },
                          { id: 'interactive-financial-goal-tracking', label: 'Interactive Financial Goal Tracking', icon: '📈' },
                          { id: 'real-time-market-insights-for-clients', label: 'Real-Time Market Insights for Clients', icon: '📊' },
                          { id: 'mobile-financial-planning-solutions', label: 'Mobile Financial Planning Solutions', icon: '📱' },
                          { id: 'automated-investment-risk-monitoring', label: 'Automated Investment Risk Monitoring', icon: '⚠️' },
                          { id: 'alternative-investment-opportunities-analysis', label: 'Alternative Investment Opportunities Analysis', icon: '🔍' },
                          { id: 'digital-financial-portfolio-reporting', label: 'Digital Financial Portfolio Reporting', icon: '📊' },
                          { id: 'comprehensive-tax-optimization-models', label: 'Comprehensive Tax Optimization Models', icon: '📈' },
                          { id: 'cash-flow-management-tools', label: 'Cash Flow Management Tools', icon: '💵' },
                          { id: 'financial-education-and-insights-platforms', label: 'Financial Education and Insights Platforms', icon: '📚' },
                          { id: 'automated-client-communications-and-alerts', label: 'Automated Client Communications and Alerts', icon: '📬' },
                          { id: 'wealth-transfer-planning', label: 'Wealth Transfer Planning', icon: '🏦' },
                          { id: 'socially-responsible-investment-advice', label: 'Socially Responsible Investment Advice', icon: '🌍' },
                          { id: 'client-centric-risk-management', label: 'Client-Centric Risk Management', icon: '⚖️' },
                          { id: 'digital-retirement-account-management', label: 'Digital Retirement Account Management', icon: '🏦' },
                          { id: 'automated-client-onboarding-and-profiling', label: 'Automated Client Onboarding and Profiling', icon: '📝' },
                          { id: 'real-time-tracking-of-financial-goals', label: 'Real-Time Tracking of Financial Goals', icon: '⏱️' },
                          { id: 'financial-scenario-simulation-and-forecasting', label: 'Financial Scenario Simulation and Forecasting', icon: '📊' },
                          { id: 'client-engagement-and-retention-tools', label: 'Client Engagement and Retention Tools', icon: '🤝' },
                          { id: 'real-time-fee-and-expense-analysis', label: 'Real-Time Fee and Expense Analysis', icon: '💵' }
                        ];
                        case 'fintech-partnerships':
                          return [
                            { id: 'digital-payment-solutions', label: 'Digital Payment Solutions', icon: '💳' },
                            { id: 'automated-loan-processing-platforms', label: 'Automated Loan Processing Platforms', icon: '🏦' },
                            { id: 'blockchain-based-payment-networks', label: 'Blockchain-Based Payment Networks', icon: '🔗' },
                            { id: 'peer-to-peer-lending-platforms', label: 'Peer-to-Peer Lending Platforms', icon: '🤝' },
                            { id: 'cryptocurrency-integration-in-banking', label: 'Cryptocurrency Integration in Banking', icon: '₿' },
                            { id: 'real-time-cross-border-payment-solutions', label: 'Real-Time Cross-Border Payment Solutions', icon: '🌍' },
                            { id: 'robo-advisory-investment-platforms', label: 'Robo-Advisory Investment Platforms', icon: '🤖' },
                            { id: 'open-banking-api-integration', label: 'Open Banking API Integration', icon: '🔌' },
                            { id: 'mobile-wallets-and-payment-systems', label: 'Mobile Wallets and Payment Systems', icon: '📱' },
                            { id: 'digital-identity-verification-services', label: 'Digital Identity Verification Services', icon: '🛡️' },
                            { id: 'automated-compliance-and-kyc-platforms', label: 'Automated Compliance and KYC Platforms', icon: '📜' },
                            { id: 'regtech-solutions-for-financial-institutions', label: 'RegTech Solutions for Financial Institutions', icon: '⚖️' },
                            { id: 'personal-finance-management-tools', label: 'Personal Finance Management Tools', icon: '📊' },
                            { id: 'instant-credit-scoring-solutions', label: 'Instant Credit Scoring Solutions', icon: '⚡' },
                            { id: 'automated-bill-payment-systems', label: 'Automated Bill Payment Systems', icon: '💵' },
                            { id: 'micro-investment-platforms', label: 'Micro-Investment Platforms', icon: '💰' },
                            { id: 'crowdfunding-and-crowdsourcing-platforms', label: 'Crowdfunding and Crowdsourcing Platforms', icon: '👥' },
                            { id: 'smart-contract-solutions-for-financial-products', label: 'Smart Contract Solutions for Financial Products', icon: '📜' },
                            { id: 'automated-tax-filing-and-reporting-services', label: 'Automated Tax Filing and Reporting Services', icon: '🧾' },
                            { id: 'blockchain-for-secure-document-management', label: 'Blockchain for Secure Document Management', icon: '🔒' },
                            { id: 'digital-asset-management-platforms', label: 'Digital Asset Management Platforms', icon: '💼' },
                            { id: 'biometric-authentication-solutions', label: 'Biometric Authentication Solutions', icon: '👁️' },
                            { id: 'financial-data-aggregation-and-analytics', label: 'Financial Data Aggregation and Analytics', icon: '📊' },
                            { id: 'subscription-based-financial-services-models', label: 'Subscription-Based Financial Services Models', icon: '📅' },
                            { id: 'ai-driven-credit-risk-assessment', label: 'AI-Driven Credit Risk Assessment', icon: '🤖' },
                            { id: 'insurance-tech-platforms', label: 'Insurance Tech Platforms (InsurTech)', icon: '🛡️' },
                            { id: 'automated-wealth-management-platforms', label: 'Automated Wealth Management Platforms', icon: '💰' },
                            { id: 'digital-banking-as-a-service-platforms', label: 'Digital Banking-as-a-Service Platforms', icon: '🏦' },
                            { id: 'real-time-transaction-monitoring', label: 'Real-Time Transaction Monitoring', icon: '⏱️' },
                            { id: 'alternative-lending-platforms', label: 'Alternative Lending Platforms', icon: '💵' },
                            { id: 'digital-lending-platforms-with-smart-contracts', label: 'Digital Lending Platforms with Smart Contracts', icon: '📜' },
                            { id: 'cross-platform-payment-gateways', label: 'Cross-Platform Payment Gateways', icon: '🔗' },
                            { id: 'automated-financial-planning-tools', label: 'Automated Financial Planning Tools', icon: '🛠️' },
                            { id: 'mobile-first-banking-solutions', label: 'Mobile-First Banking Solutions', icon: '📱' },
                            { id: 'digital-banking-ecosystem-integration', label: 'Digital Banking Ecosystem Integration', icon: '🌐' },
                            { id: 'blockchain-for-trade-finance-automation', label: 'Blockchain for Trade Finance Automation', icon: '🔗' },
                            { id: 'regulatory-reporting-automation-platforms', label: 'Regulatory Reporting Automation Platforms', icon: '📜' },
                            { id: 'voice-activated-banking-services', label: 'Voice-Activated Banking Services', icon: '🗣️' },
                            { id: 'integrated-payment-gateway-solutions', label: 'Integrated Payment Gateway Solutions', icon: '🔗' },
                            { id: 'artificial-intelligence-for-financial-fraud-prevention', label: 'Artificial Intelligence for Financial Fraud Prevention', icon: '🛡️' }
                          ];
                          case 'foreign-exchange-services':
                            return [
                              { id: 'automated-currency-trading-platforms', label: 'Automated Currency Trading Platforms', icon: '💱' },
                              { id: 'real-time-currency-conversion-solutions', label: 'Real-Time Currency Conversion Solutions', icon: '🔄' },
                              { id: 'cross-border-payment-automation', label: 'Cross-Border Payment Automation', icon: '🌍' },
                              { id: 'foreign-exchange-hedging-tools', label: 'Foreign Exchange Hedging Tools', icon: '🛡️' },
                              { id: 'forex-risk-management-solutions', label: 'Forex Risk Management Solutions', icon: '⚖️' },
                              { id: 'currency-exchange-rate-forecasting', label: 'Currency Exchange Rate Forecasting', icon: '📈' },
                              { id: 'automated-forex-market-analysis', label: 'Automated Forex Market Analysis', icon: '📊' },
                              { id: 'forex-liquidity-management', label: 'Forex Liquidity Management', icon: '💧' },
                              { id: 'foreign-exchange-arbitrage-strategies', label: 'Foreign Exchange Arbitrage Strategies', icon: '💹' },
                              { id: 'multi-currency-payment-gateways', label: 'Multi-Currency Payment Gateways', icon: '🌐' },
                              { id: 'automated-fx-positioning-and-rebalancing', label: 'Automated FX Positioning and Rebalancing', icon: '🔄' },
                              { id: 'cross-border-fund-transfer-automation', label: 'Cross-Border Fund Transfer Automation', icon: '💵' },
                              { id: 'currency-swap-trading-platforms', label: 'Currency Swap Trading Platforms', icon: '🔄' },
                              { id: 'automated-forex-trade-execution', label: 'Automated Forex Trade Execution', icon: '⚡' },
                              { id: 'predictive-analytics-for-currency-movements', label: 'Predictive Analytics for Currency Movements', icon: '📊' },
                              { id: 'foreign-exchange-market-sentiment-analysis', label: 'Foreign Exchange Market Sentiment Analysis', icon: '🧠' },
                              { id: 'automated-forex-portfolio-management', label: 'Automated Forex Portfolio Management', icon: '📈' },
                              { id: 'fx-rate-alerts-and-monitoring', label: 'FX Rate Alerts and Monitoring', icon: '🔔' },
                              { id: 'currency-exchange-rate-optimization', label: 'Currency Exchange Rate Optimization', icon: '⚙️' },
                              { id: 'foreign-exchange-transaction-cost-reduction', label: 'Foreign Exchange Transaction Cost Reduction', icon: '💰' },
                              { id: 'blockchain-based-forex-transactions', label: 'Blockchain-Based Forex Transactions', icon: '🔗' },
                              { id: 'real-time-forex-market-data-integration', label: 'Real-Time Forex Market Data Integration', icon: '📊' },
                              { id: 'forex-trading-algorithm-development', label: 'Forex Trading Algorithm Development', icon: '🤖' },
                              { id: 'automated-forex-settlement-systems', label: 'Automated Forex Settlement Systems', icon: '⚖️' },
                              { id: 'foreign-exchange-spread-management', label: 'Foreign Exchange Spread Management', icon: '📉' },
                              { id: 'currency-hedging-strategies-automation', label: 'Currency Hedging Strategies Automation', icon: '🛡️' },
                              { id: 'integrated-forex-and-commodity-trading', label: 'Integrated Forex and Commodity Trading', icon: '🌾' },
                              { id: 'foreign-exchange-risk-exposure-calculation', label: 'Foreign Exchange Risk Exposure Calculation', icon: '⚖️' },
                              { id: 'fx-market-liquidity-sourcing', label: 'FX Market Liquidity Sourcing', icon: '💧' },
                              { id: 'foreign-currency-funding-solutions', label: 'Foreign Currency Funding Solutions', icon: '💵' },
                              { id: 'forex-trade-reconciliation-automation', label: 'Forex Trade Reconciliation Automation', icon: '🔄' },
                              { id: 'smart-currency-allocation-systems', label: 'Smart Currency Allocation Systems', icon: '💡' },
                              { id: 'forex-margin-trading-solutions', label: 'Forex Margin Trading Solutions', icon: '📈' },
                              { id: 'foreign-exchange-fraud-detection-systems', label: 'Foreign Exchange Fraud Detection Systems', icon: '🚫' },
                              { id: 'currency-pairs-trading-automation', label: 'Currency Pairs Trading Automation', icon: '🔄' },
                              { id: 'forex-transaction-reporting-and-analytics', label: 'Forex Transaction Reporting and Analytics', icon: '📊' },
                              { id: 'digital-currency-exchange-platforms', label: 'Digital Currency Exchange Platforms', icon: '💱' },
                              { id: 'forex-broker-integration-systems', label: 'Forex Broker Integration Systems', icon: '🏦' },
                              { id: 'foreign-exchange-payment-reconciliation', label: 'Foreign Exchange Payment Reconciliation', icon: '🔄' },
                              { id: 'fx-liquidity-aggregation-solutions', label: 'FX Liquidity Aggregation Solutions', icon: '💧' }
                            ];
                            case 'insurance-banking-related':
                              return [
                                { id: 'automated-policy-issuance', label: 'Automated Policy Issuance', icon: '📄' },
                                { id: 'claims-processing-automation', label: 'Claims Processing Automation', icon: '⚙️' },
                                { id: 'digital-insurance-platforms', label: 'Digital Insurance Platforms', icon: '💻' },
                                { id: 'real-time-risk-assessment-for-policies', label: 'Real-Time Risk Assessment for Policies', icon: '📊' },
                                { id: 'dynamic-pricing-for-insurance-products', label: 'Dynamic Pricing for Insurance Products', icon: '💵' },
                                { id: 'fraud-detection-in-insurance-claims', label: 'Fraud Detection in Insurance Claims', icon: '🚫' },
                                { id: 'automated-underwriting-systems', label: 'Automated Underwriting Systems', icon: '📝' },
                                { id: 'customer-onboarding-for-insurance-products', label: 'Customer Onboarding for Insurance Products', icon: '👥' },
                                { id: 'insurance-document-management-automation', label: 'Insurance Document Management Automation', icon: '📂' },
                                { id: 'personalized-insurance-offerings', label: 'Personalized Insurance Offerings', icon: '🎁' },
                                { id: 'automated-premium-payments', label: 'Automated Premium Payments', icon: '💳' },
                                { id: 'policy-renewal-automation', label: 'Policy Renewal Automation', icon: '🔄' },
                                { id: 'insurance-subscription-management', label: 'Insurance Subscription Management', icon: '📅' },
                                { id: 'digital-health-insurance-solutions', label: 'Digital Health Insurance Solutions', icon: '🏥' },
                                { id: 'insurance-policy-compliance-monitoring', label: 'Insurance Policy Compliance Monitoring', icon: '📜' },
                                { id: 'blockchain-for-insurance-claims-management', label: 'Blockchain for Insurance Claims Management', icon: '🔗' },
                                { id: 'automated-risk-based-pricing-models', label: 'Automated Risk-Based Pricing Models', icon: '⚖️' },
                                { id: 'mobile-insurance-management-solutions', label: 'Mobile Insurance Management Solutions', icon: '📱' },
                                { id: 'claims-fraud-prevention-and-analytics', label: 'Claims Fraud Prevention and Analytics', icon: '🔍' },
                                { id: 'instant-claims-settlement-platforms', label: 'Instant Claims Settlement Platforms', icon: '⚡' },
                                { id: 'insurance-cross-selling-automation', label: 'Insurance Cross-Selling Automation', icon: '🔄' },
                                { id: 'real-time-claims-tracking', label: 'Real-Time Claims Tracking', icon: '⏱️' },
                                { id: 'insurance-benefits-administration-automation', label: 'Insurance Benefits Administration Automation', icon: '🏦' },
                                { id: 'telematics-for-car-insurance-premium-adjustments', label: 'Telematics for Car Insurance Premium Adjustments', icon: '🚗' },
                                { id: 'automated-life-insurance-risk-assessment', label: 'Automated Life Insurance Risk Assessment', icon: '🛡️' },
                                { id: 'on-demand-insurance-product-customization', label: 'On-Demand Insurance Product Customization', icon: '⚙️' },
                                { id: 'health-insurance-enrollment-automation', label: 'Health Insurance Enrollment Automation', icon: '📝' },
                                { id: 'automated-claim-dispute-resolution', label: 'Automated Claim Dispute Resolution', icon: '⚖️' },
                                { id: 'behavioral-analytics-for-insurance-fraud-prevention', label: 'Behavioral Analytics for Insurance Fraud Prevention', icon: '🧠' },
                                { id: 'customer-claims-assistance-chatbots', label: 'Customer Claims Assistance Chatbots', icon: '🤖' },
                                { id: 'insurance-portfolio-management-automation', label: 'Insurance Portfolio Management Automation', icon: '📊' },
                                { id: 'real-time-insurance-product-recommendations', label: 'Real-Time Insurance Product Recommendations', icon: '📈' },
                                { id: 'automated-insurance-eligibility-verification', label: 'Automated Insurance Eligibility Verification', icon: '✅' },
                                { id: 'insurance-policy-transfer-and-modification', label: 'Insurance Policy Transfer and Modification', icon: '🔄' },
                                { id: 'predictive-analytics-for-claim-forecasting', label: 'Predictive Analytics for Claim Forecasting', icon: '📊' },
                                { id: 'risk-prediction-models-for-insurance-policies', label: 'Risk Prediction Models for Insurance Policies', icon: '⚖️' },
                                { id: 'integrated-insurance-with-banking-products', label: 'Integrated Insurance with Banking Products', icon: '🏦' },
                                { id: 'customized-insurance-solutions-based-on-usage-data', label: 'Customized Insurance Solutions Based on Usage Data', icon: '📊' },
                                { id: 'automated-insurance-refund-processing', label: 'Automated Insurance Refund Processing', icon: '💵' },
                                { id: 'data-driven-claims-settlement-strategies', label: 'Data-Driven Claims Settlement Strategies', icon: '📈' }
                              ];
                              case 'investment-banking':
                                return [
                                  { id: 'automated-equity-research-reports', label: 'Automated Equity Research Reports', icon: '📊' },
                                  { id: 'real-time-market-analysis-tools', label: 'Real-Time Market Analysis Tools', icon: '📈' },
                                  { id: 'predictive-analytics-for-investment-opportunities', label: 'Predictive Analytics for Investment Opportunities', icon: '🔍' },
                                  { id: 'automated-trade-execution-platforms', label: 'Automated Trade Execution Platforms', icon: '⚡' },
                                  { id: 'portfolio-optimization-for-institutional-investors', label: 'Portfolio Optimization for Institutional Investors', icon: '📈' },
                                  { id: 'mergers-and-acquisitions-advisory-tools', label: 'Mergers and Acquisitions (M&A) Advisory Tools', icon: '🤝' },
                                  { id: 'securities-underwriting-automation', label: 'Securities Underwriting Automation', icon: '📜' },
                                  { id: 'investment-risk-management-systems', label: 'Investment Risk Management Systems', icon: '⚖️' },
                                  { id: 'algorithmic-trading-for-investment-banking', label: 'Algorithmic Trading for Investment Banking', icon: '🤖' },
                                  { id: 'structured-finance-solutions-automation', label: 'Structured Finance Solutions Automation', icon: '🏦' },
                                  { id: 'automated-client-reporting-systems', label: 'Automated Client Reporting Systems', icon: '📋' },
                                  { id: 'real-time-investment-monitoring', label: 'Real-Time Investment Monitoring', icon: '⏱️' },
                                  { id: 'debt-capital-markets-automation', label: 'Debt Capital Markets Automation', icon: '💵' },
                                  { id: 'syndicated-loan-origination-and-management', label: 'Syndicated Loan Origination and Management', icon: '📄' },
                                  { id: 'automated-equity-and-bond-issuance', label: 'Automated Equity and Bond Issuance', icon: '📈' },
                                  { id: 'cross-border-investment-solutions', label: 'Cross-Border Investment Solutions', icon: '🌍' },
                                  { id: 'derivative-pricing-and-execution-automation', label: 'Derivative Pricing and Execution Automation', icon: '📉' },
                                  { id: 'private-equity-fund-management-tools', label: 'Private Equity Fund Management Tools', icon: '💼' },
                                  { id: 'real-time-fx-hedging-solutions', label: 'Real-Time FX Hedging Solutions', icon: '💱' },
                                  { id: 'corporate-bond-issuance-automation', label: 'Corporate Bond Issuance Automation', icon: '📜' },
                                  { id: 'investment-portfolio-rebalancing', label: 'Investment Portfolio Rebalancing', icon: '🔄' },
                                  { id: 'trading-book-management-automation', label: 'Trading Book Management Automation', icon: '📊' },
                                  { id: 'data-driven-ma-valuation-models', label: 'Data-Driven M&A Valuation Models', icon: '📈' },
                                  { id: 'private-wealth-management-automation', label: 'Private Wealth Management Automation', icon: '🏦' },
                                  { id: 'automated-tax-efficient-investment-strategies', label: 'Automated Tax-Efficient Investment Strategies', icon: '🧾' },
                                  { id: 'risk-based-asset-allocation-models', label: 'Risk-Based Asset Allocation Models', icon: '⚖️' },
                                  { id: 'capital-raising-and-syndication-tools', label: 'Capital Raising and Syndication Tools', icon: '💰' },
                                  { id: 'market-sentiment-analysis-for-investment-insights', label: 'Market Sentiment Analysis for Investment Insights', icon: '📊' },
                                  { id: 'asset-and-liability-management-systems', label: 'Asset and Liability Management Systems', icon: '📉' },
                                  { id: 'automated-due-diligence-for-ma-transactions', label: 'Automated Due Diligence for M&A Transactions', icon: '🔍' },
                                  { id: 'securitization-and-structured-product-solutions', label: 'Securitization and Structured Product Solutions', icon: '📜' },
                                  { id: 'real-time-risk-exposure-monitoring', label: 'Real-Time Risk Exposure Monitoring', icon: '⏱️' },
                                  { id: 'investment-advisory-automation', label: 'Investment Advisory Automation', icon: '🤖' },
                                  { id: 'smart-order-routing-for-investment-transactions', label: 'Smart Order Routing for Investment Transactions', icon: '🚀' },
                                  { id: 'asset-management-platform-integration', label: 'Asset Management Platform Integration', icon: '🔗' },
                                  { id: 'automated-client-onboarding-for-investment-services', label: 'Automated Client Onboarding for Investment Services', icon: '📝' },
                                  { id: 'blockchain-for-secure-investment-transactions', label: 'Blockchain for Secure Investment Transactions', icon: '🔗' },
                                  { id: 'trade-settlement-and-clearing-automation', label: 'Trade Settlement and Clearing Automation', icon: '⚖️' },
                                  { id: 'cross-asset-investment-trading-automation', label: 'Cross-Asset Investment Trading Automation', icon: '🔄' },
                                  { id: 'investment-bank-compliance-automation', label: 'Investment Bank Compliance Automation', icon: '📜' }
                                ];
                                case 'islamic-banking':
                                  return [
                                    { id: 'automated-shariah-compliance-monitoring', label: 'Automated Shariah Compliance Monitoring', icon: '📜' },
                                    { id: 'real-time-risk-assessment-for-islamic-finance', label: 'Real-Time Risk Assessment for Islamic Finance', icon: '⚖️' },
                                    { id: 'automated-murabaha-financing-solutions', label: 'Automated Murabaha Financing Solutions', icon: '💵' },
                                    { id: 'digital-islamic-banking-platforms', label: 'Digital Islamic Banking Platforms', icon: '💻' },
                                    { id: 'halal-investment-portfolio-management', label: 'Halal Investment Portfolio Management', icon: '📈' },
                                    { id: 'zakat-calculation-and-distribution-tools', label: 'Zakat Calculation and Distribution Tools', icon: '💰' },
                                    { id: 'automated-mudarabah-contract-management', label: 'Automated Mudarabah Contract Management', icon: '📜' },
                                    { id: 'islamic-loan-origination-automation', label: 'Islamic Loan Origination Automation', icon: '📝' },
                                    { id: 'sukuk-issuance-and-management-platforms', label: 'Sukuk Issuance and Management Platforms', icon: '📊' },
                                    { id: 'real-time-islamic-financing-calculators', label: 'Real-Time Islamic Financing Calculators', icon: '🔢' },
                                    { id: 'takaful-claims-automation', label: 'Takaful (Islamic Insurance) Claims Automation', icon: '🛡️' },
                                    { id: 'islamic-banking-customer-onboarding', label: 'Islamic Banking Customer Onboarding', icon: '👥' },
                                    { id: 'islamic-credit-scoring-models', label: 'Islamic Credit Scoring Models', icon: '📊' },
                                    { id: 'automated-wakala-agreements', label: 'Automated Wakala Agreements', icon: '📜' },
                                    { id: 'automated-ijarah-contract-processing', label: 'Automated Ijarah Contract Processing', icon: '⚖️' },
                                    { id: 'risk-free-investment-platforms-for-islamic-banking', label: 'Risk-Free Investment Platforms for Islamic Banking', icon: '💵' },
                                    { id: 'shariah-compliant-investment-product-recommendations', label: 'Shariah-Compliant Investment Product Recommendations', icon: '🎁' },
                                    { id: 'fintech-solutions-for-islamic-banking', label: 'Fintech Solutions for Islamic Banking', icon: '🤖' },
                                    { id: 'smart-contracts-for-islamic-finance', label: 'Smart Contracts for Islamic Finance', icon: '🔗' },
                                    { id: 'islamic-banking-digital-wallets', label: 'Islamic Banking Digital Wallets', icon: '📱' },
                                    { id: 'crowdfunding-platforms-for-islamic-investments', label: 'Crowdfunding Platforms for Islamic Investments', icon: '👥' },
                                    { id: 'automated-musharakah-contract-management', label: 'Automated Musharakah Contract Management', icon: '📜' },
                                    { id: 'islamic-bank-performance-analytics', label: 'Islamic Bank Performance Analytics', icon: '📊' },
                                    { id: 'automated-takaful-policy-issuance', label: 'Automated Takaful Policy Issuance', icon: '📄' },
                                    { id: 'real-time-compliance-reporting-for-islamic-banks', label: 'Real-Time Compliance Reporting for Islamic Banks', icon: '📜' },
                                    { id: 'peer-to-peer-lending-platforms-in-islamic-banking', label: 'Peer-to-Peer Lending Platforms in Islamic Banking', icon: '🤝' },
                                    { id: 'halal-fund-management-solutions', label: 'Halal Fund Management Solutions', icon: '💼' },
                                    { id: 'automated-islamic-finance-risk-mitigation-tools', label: 'Automated Islamic Finance Risk Mitigation Tools', icon: '🛡️' },
                                    { id: 'shariah-advisory-platforms-for-islamic-banks', label: 'Shariah Advisory Platforms for Islamic Banks', icon: '📜' },
                                    { id: 'automated-shariah-audit-and-reporting', label: 'Automated Shariah Audit and Reporting', icon: '🔍' },
                                    { id: 'sustainable-islamic-investment-automation', label: 'Sustainable Islamic Investment Automation', icon: '🌱' },
                                    { id: 'online-islamic-banking-loan-management', label: 'Online Islamic Banking Loan Management', icon: '💻' },
                                    { id: 'automated-cash-flow-management-for-islamic-firms', label: 'Automated Cash Flow Management for Islamic Firms', icon: '💵' },
                                    { id: 'automated-asset-valuation-for-islamic-finance', label: 'Automated Asset Valuation for Islamic Finance', icon: '📊' },
                                    { id: 'islamic-banking-credit-risk-management', label: 'Islamic Banking Credit Risk Management', icon: '⚖️' },
                                    { id: 'financial-inclusion-solutions-for-islamic-banking', label: 'Financial Inclusion Solutions for Islamic Banking', icon: '🌍' },
                                    { id: 'islamic-banking-product-customization-tools', label: 'Islamic Banking Product Customization Tools', icon: '🛠️' },
                                    { id: 'peer-to-peer-islamic-finance-platforms', label: 'Peer-to-Peer Islamic Finance Platforms', icon: '🤝' },
                                    { id: 'digital-platforms-for-islamic-microfinance', label: 'Digital Platforms for Islamic Microfinance', icon: '💻' },
                                    { id: 'islamic-banking-mobile-payment-solutions', label: 'Islamic Banking Mobile Payment Solutions', icon: '📱' }
                                  ];
                                  case 'leasing-services':
                                    return [
                                      { id: 'automated-lease-origination', label: 'Automated Lease Origination', icon: '📝' },
                                      { id: 'real-time-lease-payment-tracking', label: 'Real-Time Lease Payment Tracking', icon: '⏱️' },
                                      { id: 'lease-document-management-automation', label: 'Lease Document Management Automation', icon: '📂' },
                                      { id: 'automated-asset-valuation-for-leasing', label: 'Automated Asset Valuation for Leasing', icon: '📊' },
                                      { id: 'online-equipment-leasing-platforms', label: 'Online Equipment Leasing Platforms', icon: '💻' },
                                      { id: 'automated-lease-term-customization', label: 'Automated Lease Term Customization', icon: '⚙️' },
                                      { id: 'smart-contract-solutions-for-leasing', label: 'Smart Contract Solutions for Leasing', icon: '🔗' },
                                      { id: 'predictive-maintenance-for-leased-equipment', label: 'Predictive Maintenance for Leased Equipment', icon: '🔧' },
                                      { id: 'lease-portfolio-management-automation', label: 'Lease Portfolio Management Automation', icon: '📈' },
                                      { id: 'automated-credit-scoring-for-leasing', label: 'Automated Credit Scoring for Leasing', icon: '📊' },
                                      { id: 'real-time-lease-rate-calculation', label: 'Real-Time Lease Rate Calculation', icon: '💵' },
                                      { id: 'lease-renewal-and-termination-automation', label: 'Lease Renewal and Termination Automation', icon: '🔄' },
                                      { id: 'lease-compliance-monitoring', label: 'Lease Compliance Monitoring', icon: '📜' },
                                      { id: 'customizable-leasing-plans-for-businesses', label: 'Customizable Leasing Plans for Businesses', icon: '🏢' },
                                      { id: 'automated-billing-and-invoicing-for-leases', label: 'Automated Billing and Invoicing for Leases', icon: '💳' },
                                      { id: 'cross-border-leasing-solutions', label: 'Cross-Border Leasing Solutions', icon: '🌍' },
                                      { id: 'risk-management-in-leasing-contracts', label: 'Risk Management in Leasing Contracts', icon: '⚖️' },
                                      { id: 'mobile-leasing-application-and-approval', label: 'Mobile Leasing Application and Approval', icon: '📱' },
                                      { id: 'automated-documentation-and-e-signature-solutions', label: 'Automated Documentation and e-Signature Solutions', icon: '✍️' },
                                      { id: 'fleet-management-for-leased-vehicles', label: 'Fleet Management for Leased Vehicles', icon: '🚗' },
                                      { id: 'predictive-analytics-for-lease-default-risks', label: 'Predictive Analytics for Lease Default Risks', icon: '📉' },
                                      { id: 'automated-payment-collection-for-leased-assets', label: 'Automated Payment Collection for Leased Assets', icon: '💵' },
                                      { id: 'tax-optimization-for-leasing', label: 'Tax Optimization for Leasing', icon: '💰' },
                                      { id: 'customer-leasing-experience-enhancement', label: 'Customer Leasing Experience Enhancement', icon: '🌟' },
                                      { id: 'automated-asset-tracking-for-leased-equipment', label: 'Automated Asset Tracking for Leased Equipment', icon: '📦' },
                                      { id: 'dynamic-lease-pricing-models', label: 'Dynamic Lease Pricing Models', icon: '📈' },
                                      { id: 'online-leasing-contract-management', label: 'Online Leasing Contract Management', icon: '💻' },
                                      { id: 'cross-industry-leasing-solutions', label: 'Cross-Industry Leasing Solutions (e.g., automotive, machinery)', icon: '🌐' },
                                      { id: 'real-time-lease-portfolio-valuation', label: 'Real-Time Lease Portfolio Valuation', icon: '📊' },
                                      { id: 'automated-lease-transfer-and-assignment', label: 'Automated Lease Transfer and Assignment', icon: '🔄' },
                                      { id: 'smart-contracts-for-vehicle-leasing', label: 'Smart Contracts for Vehicle Leasing', icon: '🚗' },
                                      { id: 'leasing-repayment-scheduling-automation', label: 'Leasing Repayment Scheduling Automation', icon: '📅' },
                                      { id: 'lease-insurance-integration', label: 'Lease Insurance Integration', icon: '🛡️' },
                                      { id: 'customized-financial-products-for-lease-financing', label: 'Customized Financial Products for Lease Financing', icon: '💼' },
                                      { id: 'automated-lease-securitization-solutions', label: 'Automated Lease Securitization Solutions', icon: '📜' },
                                      { id: 'customer-credit-risk-assessment-for-leasing', label: 'Customer Credit Risk Assessment for Leasing', icon: '📊' },
                                      { id: 'real-time-asset-depreciation-calculation', label: 'Real-Time Asset Depreciation Calculation', icon: '📉' },
                                      { id: 'automated-leasing-compliance-reporting', label: 'Automated Leasing Compliance Reporting', icon: '📜' },
                                      { id: 'integrated-leasing-solutions-for-smes', label: 'Integrated Leasing Solutions for SMEs', icon: '🏢' },
                                      { id: 'blockchain-for-lease-asset-tracking-and-management', label: 'Blockchain for Lease Asset Tracking and Management', icon: '🔗' }
                                    ];
                                    case 'mergers-and-acquisitions-advisory':
                                      return [
                                        { id: 'automated-due-diligence-processes', label: 'Automated Due Diligence Processes', icon: '📋' },
                                        { id: 'real-time-market-analysis-for-ma', label: 'Real-Time Market Analysis for M&A', icon: '📈' },
                                        { id: 'predictive-analytics-for-ma-trends', label: 'Predictive Analytics for M&A Trends', icon: '🔍' },
                                        { id: 'valuation-models-automation', label: 'Valuation Models Automation', icon: '💵' },
                                        { id: 'ma-deal-structuring-tools', label: 'M&A Deal Structuring Tools', icon: '⚖️' },
                                        { id: 'automated-risk-assessment-for-ma', label: 'Automated Risk Assessment for M&A', icon: '⚠️' },
                                        { id: 'ma-financial-modeling-software', label: 'M&A Financial Modeling Software', icon: '📊' },
                                        { id: 'target-identification-and-screening-tools', label: 'Target Identification and Screening Tools', icon: '🎯' },
                                        { id: 'automated-compliance-checking-for-ma-deals', label: 'Automated Compliance Checking for M&A Deals', icon: '📜' },
                                        { id: 'cross-border-ma-integration-platforms', label: 'Cross-Border M&A Integration Platforms', icon: '🌍' },
                                        { id: 'ma-data-room-automation', label: 'M&A Data Room Automation', icon: '📁' },
                                        { id: 'real-time-financial-performance-monitoring', label: 'Real-Time Financial Performance Monitoring', icon: '⏱️' },
                                        { id: 'post-merger-integration-tools', label: 'Post-Merger Integration Tools', icon: '🔄' },
                                        { id: 'automated-legal-document-management-for-ma', label: 'Automated Legal Document Management for M&A', icon: '📄' },
                                        { id: 'ma-financial-and-tax-due-diligence-automation', label: 'M&A Financial and Tax Due Diligence Automation', icon: '🧾' },
                                        { id: 'strategic-fit-analysis-for-ma-transactions', label: 'Strategic Fit Analysis for M&A Transactions', icon: '📊' },
                                        { id: 'ma-deal-flow-management-software', label: 'M&A Deal Flow Management Software', icon: '📈' },
                                        { id: 'automated-stakeholder-communication-systems', label: 'Automated Stakeholder Communication Systems', icon: '📬' },
                                        { id: 'acquisition-financing-tools', label: 'Acquisition Financing Tools', icon: '💰' },
                                        { id: 'intelligent-deal-flow-automation', label: 'Intelligent Deal Flow Automation', icon: '🤖' },
                                        { id: 'due-diligence-task-management-solutions', label: 'Due Diligence Task Management Solutions', icon: '📝' },
                                        { id: 'ma-deal-execution-automation', label: 'M&A Deal Execution Automation', icon: '⚡' },
                                        { id: 'real-time-regulatory-compliance-tools', label: 'Real-Time Regulatory Compliance Tools', icon: '📜' },
                                        { id: 'risk-mitigation-models-for-ma', label: 'Risk Mitigation Models for M&A', icon: '🛡️' },
                                        { id: 'deal-lifecycle-management-solutions', label: 'Deal Lifecycle Management Solutions', icon: '🔄' },
                                        { id: 'transaction-cost-estimation-tools', label: 'Transaction Cost Estimation Tools', icon: '💵' },
                                        { id: 'ma-negotiation-support-platforms', label: 'M&A Negotiation Support Platforms', icon: '🤝' },
                                        { id: 'employee-integration-solutions-post-ma', label: 'Employee Integration Solutions Post-M&A', icon: '👥' },
                                        { id: 'market-sentiment-analysis-for-ma', label: 'Market Sentiment Analysis for M&A', icon: '📊' },
                                        { id: 'automated-reporting-for-ma-performance', label: 'Automated Reporting for M&A Performance', icon: '📈' },
                                        { id: 'ma-synergy-identification-tools', label: 'M&A Synergy Identification Tools', icon: '🔍' },
                                        { id: 'transaction-approval-workflow-automation', label: 'Transaction Approval Workflow Automation', icon: '✅' },
                                        { id: 'automated-financial-document-generation', label: 'Automated Financial Document Generation', icon: '📄' },
                                        { id: 'ma-deal-closing-management', label: 'M&A Deal Closing Management', icon: '🔒' },
                                        { id: 'cross-platform-ma-data-integration', label: 'Cross-Platform M&A Data Integration', icon: '🔗' },
                                        { id: 'business-valuation-automation', label: 'Business Valuation Automation', icon: '📊' },
                                        { id: 'ma-deal-monitoring-dashboards', label: 'M&A Deal Monitoring Dashboards', icon: '📈' },
                                        { id: 'automated-confidentiality-agreement-management', label: 'Automated Confidentiality Agreement Management', icon: '🔒' },
                                        { id: 'ma-tax-optimization-solutions', label: 'M&A Tax Optimization Solutions', icon: '🧾' },
                                        { id: 'ma-transaction-modeling-and-simulation', label: 'M&A Transaction Modeling and Simulation', icon: '📊' }
                                      ];
                                      case 'merchant-banking':
                                        return [
                                          { id: 'automated-investment-portfolio-management', label: 'Automated Investment Portfolio Management', icon: '📈' },
                                          { id: 'real-time-capital-raising-platforms', label: 'Real-Time Capital Raising Platforms', icon: '💵' },
                                          { id: 'private-equity-deal-sourcing', label: 'Private Equity Deal Sourcing', icon: '🤝' },
                                          { id: 'automated-syndicated-loan-origination', label: 'Automated Syndicated Loan Origination', icon: '📝' },
                                          { id: 'mergers-and-acquisitions-advisory-automation', label: 'Mergers and Acquisitions Advisory Automation', icon: '⚖️' },
                                          { id: 'automated-debt-securitization-solutions', label: 'Automated Debt Securitization Solutions', icon: '📜' },
                                          { id: 'cross-border-transaction-support', label: 'Cross-Border Transaction Support', icon: '🌍' },
                                          { id: 'risk-management-solutions-for-merchant-banking', label: 'Risk Management Solutions for Merchant Banking', icon: '🛡️' },
                                          { id: 'corporate-restructuring-tools', label: 'Corporate Restructuring Tools', icon: '🏢' },
                                          { id: 'automated-due-diligence-for-private-equity', label: 'Automated Due Diligence for Private Equity', icon: '📋' },
                                          { id: 'investor-relations-management', label: 'Investor Relations Management', icon: '📞' },
                                          { id: 'venture-capital-deal-flow-automation', label: 'Venture Capital Deal Flow Automation', icon: '🚀' },
                                          { id: 'private-debt-placement-platforms', label: 'Private Debt Placement Platforms', icon: '💼' },
                                          { id: 'digital-investment-banking-solutions', label: 'Digital Investment Banking Solutions', icon: '💻' },
                                          { id: 'merchant-banking-client-portfolio-tracking', label: 'Merchant Banking Client Portfolio Tracking', icon: '📊' },
                                          { id: 'real-time-market-risk-analytics', label: 'Real-Time Market Risk Analytics', icon: '📈' },
                                          { id: 'automated-compliance-monitoring-for-deals', label: 'Automated Compliance Monitoring for Deals', icon: '📜' },
                                          { id: 'deal-structuring-automation', label: 'Deal Structuring Automation', icon: '⚖️' },
                                          { id: 'customized-financing-solutions-for-corporates', label: 'Customized Financing Solutions for Corporates', icon: '🏦' },
                                          { id: 'automated-transaction-monitoring', label: 'Automated Transaction Monitoring', icon: '🔍' },
                                          { id: 'financial-modeling-for-ma-deals', label: 'Financial Modeling for M&A Deals', icon: '📊' },
                                          { id: 'automated-equity-and-debt-issuance', label: 'Automated Equity and Debt Issuance', icon: '📈' },
                                          { id: 'alternative-investment-management-solutions', label: 'Alternative Investment Management Solutions', icon: '💼' },
                                          { id: 'private-equity-fund-management-automation', label: 'Private Equity Fund Management Automation', icon: '🏦' },
                                          { id: 'smart-contracting-for-private-equity-transactions', label: 'Smart Contracting for Private Equity Transactions', icon: '🔗' },
                                          { id: 'private-banking-services-automation', label: 'Private Banking Services Automation', icon: '🏦' },
                                          { id: 'investment-exit-strategy-automation', label: 'Investment Exit Strategy Automation', icon: '🔄' },
                                          { id: 'capital-markets-sourcing-automation', label: 'Capital Markets Sourcing Automation', icon: '💵' },
                                          { id: 'real-time-valuation-tools-for-ma', label: 'Real-Time Valuation Tools for Mergers and Acquisitions', icon: '📈' },
                                          { id: 'corporate-governance-and-risk-tools', label: 'Corporate Governance and Risk Tools', icon: '⚖️' },
                                          { id: 'asset-management-integration', label: 'Asset Management Integration', icon: '🔗' },
                                          { id: 'transaction-cost-optimization-tools', label: 'Transaction Cost Optimization Tools', icon: '💰' },
                                          { id: 'real-time-deal-flow-tracking', label: 'Real-Time Deal Flow Tracking', icon: '⏱️' },
                                          { id: 'equity-and-debt-issuance-platforms', label: 'Equity and Debt Issuance Platforms', icon: '📈' },
                                          { id: 'real-time-performance-monitoring-for-investment-funds', label: 'Real-Time Performance Monitoring for Investment Funds', icon: '📊' },
                                          { id: 'tax-optimization-in-merchant-banking-deals', label: 'Tax Optimization in Merchant Banking Deals', icon: '🧾' },
                                          { id: 'automated-financial-reporting-for-corporate-clients', label: 'Automated Financial Reporting for Corporate Clients', icon: '📄' },
                                          { id: 'private-equity-portfolio-analytics', label: 'Private Equity Portfolio Analytics', icon: '📊' },
                                          { id: 'business-valuation-automation-for-deals', label: 'Business Valuation Automation for Deals', icon: '📈' },
                                          { id: 'deal-sourcing-and-lead-generation-platforms', label: 'Deal Sourcing and Lead Generation Platforms', icon: '🔍' }
                                        ];
                                        case 'microfinance':
                                          return [
                                            { id: 'automated-loan-origination-for-microenterprises', label: 'Automated Loan Origination for Microenterprises', icon: '📝' },
                                            { id: 'risk-based-credit-scoring-for-microloans', label: 'Risk-Based Credit Scoring for Microloans', icon: '📊' },
                                            { id: 'mobile-based-microfinance-solutions', label: 'Mobile-Based Microfinance Solutions', icon: '📱' },
                                            { id: 'digital-savings-account-management', label: 'Digital Savings Account Management', icon: '💻' },
                                            { id: 'microloan-disbursement-automation', label: 'Microloan Disbursement Automation', icon: '💵' },
                                            { id: 'loan-repayment-tracking-and-alerts', label: 'Loan Repayment Tracking and Alerts', icon: '⏱️' },
                                            { id: 'automated-client-onboarding-for-microfinance-institutions', label: 'Automated Client Onboarding for Microfinance Institutions', icon: '👥' },
                                            { id: 'microloan-collection-systems', label: 'Microloan Collection Systems', icon: '💳' },
                                            { id: 'customizable-loan-product-offerings', label: 'Customizable Loan Product Offerings', icon: '🎁' },
                                            { id: 'microfinance-portfolio-management-automation', label: 'Microfinance Portfolio Management Automation', icon: '📈' },
                                            { id: 'loan-default-prediction-models', label: 'Loan Default Prediction Models', icon: '🔍' },
                                            { id: 'peer-to-peer-lending-platforms-for-microfinance', label: 'Peer-to-Peer Lending Platforms for Microfinance', icon: '🤝' },
                                            { id: 'automated-financial-literacy-programs', label: 'Automated Financial Literacy Programs', icon: '📚' },
                                            { id: 'financial-health-monitoring-for-microloans', label: 'Financial Health Monitoring for Microloans', icon: '💼' },
                                            { id: 'microinsurance-products-automation', label: 'Microinsurance Products Automation', icon: '🛡️' },
                                            { id: 'real-time-loan-approval-and-disbursement', label: 'Real-Time Loan Approval and Disbursement', icon: '⚡' },
                                            { id: 'automated-microloan-restructuring-and-renegotiation', label: 'Automated Microloan Restructuring and Renegotiation', icon: '🔄' },
                                            { id: 'crowdfunding-solutions-for-microfinance-projects', label: 'Crowdfunding Solutions for Microfinance Projects', icon: '👥' },
                                            { id: 'mobile-payment-solutions-for-microfinance-clients', label: 'Mobile Payment Solutions for Microfinance Clients', icon: '📱' },
                                            { id: 'microfinance-data-analytics-for-performance-monitoring', label: 'Microfinance Data Analytics for Performance Monitoring', icon: '📊' },
                                            { id: 'automated-cash-flow-management-for-small-businesses', label: 'Automated Cash Flow Management for Small Businesses', icon: '💵' },
                                            { id: 'microfinance-risk-management-tools', label: 'Microfinance Risk Management Tools', icon: '🛡️' },
                                            { id: 'interest-rate-optimization-for-microloans', label: 'Interest Rate Optimization for Microloans', icon: '📈' },
                                            { id: 'digital-microfinance-platforms-integration', label: 'Digital Microfinance Platforms Integration', icon: '🔗' },
                                            { id: 'microfinance-loan-performance-reporting-automation', label: 'Microfinance Loan Performance Reporting Automation', icon: '📊' },
                                            { id: 'microfinance-client-profiling-systems', label: 'Microfinance Client Profiling Systems', icon: '👤' },
                                            { id: 'loan-product-personalization-for-microfinance-clients', label: 'Loan Product Personalization for Microfinance Clients', icon: '🎨' },
                                            { id: 'automated-microfinance-loan-settlement', label: 'Automated Microfinance Loan Settlement', icon: '💵' },
                                            { id: 'real-time-credit-monitoring-for-microborrowers', label: 'Real-Time Credit Monitoring for Microborrowers', icon: '🔍' },
                                            { id: 'microfinance-portfolio-diversification-automation', label: 'Microfinance Portfolio Diversification Automation', icon: '📈' },
                                            { id: 'automated-loan-disbursement-via-digital-wallets', label: 'Automated Loan Disbursement via Digital Wallets', icon: '💳' },
                                            { id: 'microfinance-fund-allocation-optimization', label: 'Microfinance Fund Allocation Optimization', icon: '💰' },
                                            { id: 'digital-microfinance-risk-assessment-tools', label: 'Digital Microfinance Risk Assessment Tools', icon: '🛡️' },
                                            { id: 'loan-to-value-ratio-automation-for-microfinance', label: 'Loan-to-Value Ratio Automation for Microfinance', icon: '📊' },
                                            { id: 'microloan-tracking-and-reporting-dashboards', label: 'Microloan Tracking and Reporting Dashboards', icon: '📈' },
                                            { id: 'automated-collection-reminders-for-microloans', label: 'Automated Collection Reminders for Microloans', icon: '🔔' },
                                            { id: 'dynamic-loan-repayment-scheduling', label: 'Dynamic Loan Repayment Scheduling', icon: '📅' },
                                            { id: 'microfinance-investment-opportunities-automation', label: 'Microfinance Investment Opportunities Automation', icon: '💼' },
                                            { id: 'client-behavior-analytics-for-loan-approval', label: 'Client Behavior Analytics for Loan Approval', icon: '📊' },
                                            { id: 'microfinance-credit-risk-mitigation-models', label: 'Microfinance Credit Risk Mitigation Models', icon: '🛡️' }
                                          ];
                                          case 'mortgage-banking':
                                            return [
                                              { id: 'automated-loan-origination-systems', label: 'Automated Loan Origination Systems', icon: '📝' },
                                              { id: 'real-time-mortgage-rate-comparison-tools', label: 'Real-Time Mortgage Rate Comparison Tools', icon: '📈' },
                                              { id: 'digital-mortgage-application-processing', label: 'Digital Mortgage Application Processing', icon: '💻' },
                                              { id: 'loan-approval-automation', label: 'Loan Approval Automation', icon: '⚡' },
                                              { id: 'automated-mortgage-document-management', label: 'Automated Mortgage Document Management', icon: '📂' },
                                              { id: 'electronic-signature-solutions-for-mortgage-agreements', label: 'Electronic Signature Solutions for Mortgage Agreements', icon: '✍️' },
                                              { id: 'risk-based-mortgage-loan-scoring', label: 'Risk-Based Mortgage Loan Scoring', icon: '📊' },
                                              { id: 'mortgage-payment-processing-automation', label: 'Mortgage Payment Processing Automation', icon: '💵' },
                                              { id: 'automated-underwriting-systems', label: 'Automated Underwriting Systems', icon: '⚖️' },
                                              { id: 'mortgage-loan-servicing-automation', label: 'Mortgage Loan Servicing Automation', icon: '🏦' },
                                              { id: 'credit-risk-assessment-for-mortgages', label: 'Credit Risk Assessment for Mortgages', icon: '🔍' },
                                              { id: 'automated-mortgage-pre-qualification-tools', label: 'Automated Mortgage Pre-Qualification Tools', icon: '✅' },
                                              { id: 'real-time-mortgage-eligibility-checks', label: 'Real-Time Mortgage Eligibility Checks', icon: '⏱️' },
                                              { id: 'mortgage-portfolio-management', label: 'Mortgage Portfolio Management', icon: '📈' },
                                              { id: 'automated-escrow-management', label: 'Automated Escrow Management', icon: '💰' },
                                              { id: 'loan-repayment-tracking-systems', label: 'Loan Repayment Tracking Systems', icon: '📅' },
                                              { id: 'mortgage-refinancing-automation', label: 'Mortgage Refinancing Automation', icon: '🔄' },
                                              { id: 'cross-border-mortgage-solutions', label: 'Cross-Border Mortgage Solutions', icon: '🌍' },
                                              { id: 'mortgage-rate-lock-automation', label: 'Mortgage Rate Lock Automation', icon: '🔒' },
                                              { id: 'automated-mortgage-default-prediction', label: 'Automated Mortgage Default Prediction', icon: '⚠️' },
                                              { id: 'automated-customer-communications-for-mortgages', label: 'Automated Customer Communications for Mortgages', icon: '📬' },
                                              { id: 'loan-document-pre-processing-automation', label: 'Loan Document Pre-Processing Automation', icon: '📄' },
                                              { id: 'digital-mortgage-closing-platforms', label: 'Digital Mortgage Closing Platforms', icon: '💻' },
                                              { id: 'dynamic-mortgage-payment-calculators', label: 'Dynamic Mortgage Payment Calculators', icon: '📊' },
                                              { id: 'online-mortgage-application-validation', label: 'Online Mortgage Application Validation', icon: '✅' },
                                              { id: 'real-time-appraisal-and-valuation-systems', label: 'Real-Time Appraisal and Valuation Systems', icon: '📈' },
                                              { id: 'automated-interest-rate-adjustments-for-mortgages', label: 'Automated Interest Rate Adjustments for Mortgages', icon: '⚖️' },
                                              { id: 'mortgage-insurance-product-automation', label: 'Mortgage Insurance Product Automation', icon: '🛡️' },
                                              { id: 'mortgage-fraud-detection-and-prevention', label: 'Mortgage Fraud Detection and Prevention', icon: '🚫' },
                                              { id: 'automated-foreclosure-process-management', label: 'Automated Foreclosure Process Management', icon: '🏚️' },
                                              { id: 'mortgage-loan-performance-analytics', label: 'Mortgage Loan Performance Analytics', icon: '📊' },
                                              { id: 'automated-mortgage-payment-reminders', label: 'Automated Mortgage Payment Reminders', icon: '🔔' },
                                              { id: 'customer-onboarding-automation-for-mortgages', label: 'Customer Onboarding Automation for Mortgages', icon: '👥' },
                                              { id: 'mortgage-document-compliance-automation', label: 'Mortgage Document Compliance Automation', icon: '📜' },
                                              { id: 'loan-modification-and-refinancing-solutions', label: 'Loan Modification and Refinancing Solutions', icon: '🔄' },
                                              { id: 'automated-tax-and-insurance-escrow-calculations', label: 'Automated Tax and Insurance Escrow Calculations', icon: '💰' },
                                              { id: 'mortgage-data-analytics-and-reporting-tools', label: 'Mortgage Data Analytics and Reporting Tools', icon: '📊' },
                                              { id: 'real-time-mortgage-application-status-updates', label: 'Real-Time Mortgage Application Status Updates', icon: '⏱️' },
                                              { id: 'automated-post-closing-mortgage-solutions', label: 'Automated Post-Closing Mortgage Solutions', icon: '📄' },
                                              { id: 'mortgage-portfolio-risk-management-tools', label: 'Mortgage Portfolio Risk Management Tools', icon: '⚖️' }
                                            ];
                                            case 'payment-processing':
                                              return [
                                                { id: 'real-time-payment-authorization', label: 'Real-Time Payment Authorization', icon: '✅' },
                                                { id: 'cross-border-payment-solutions', label: 'Cross-Border Payment Solutions', icon: '🌍' },
                                                { id: 'mobile-payment-integration', label: 'Mobile Payment Integration', icon: '📱' },
                                                { id: 'digital-wallet-payment-systems', label: 'Digital Wallet Payment Systems', icon: '💳' },
                                                { id: 'instant-payment-settlement', label: 'Instant Payment Settlement', icon: '⚡' },
                                                { id: 'automated-transaction-verification', label: 'Automated Transaction Verification', icon: '🔍' },
                                                { id: 'fraud-detection-in-payment-transactions', label: 'Fraud Detection in Payment Transactions', icon: '🚫' },
                                                { id: 'recurring-payment-automation', label: 'Recurring Payment Automation', icon: '🔄' },
                                                { id: 'cryptocurrency-payment-processing', label: 'Cryptocurrency Payment Processing', icon: '₿' },
                                                { id: 'peer-to-peer-payment-platforms', label: 'Peer-to-Peer Payment Platforms', icon: '🤝' },
                                                { id: 'automated-payment-reconciliation', label: 'Automated Payment Reconciliation', icon: '📊' },
                                                { id: 'smart-payment-gateways', label: 'Smart Payment Gateways', icon: '🔗' },
                                                { id: 'tokenization-for-payment-security', label: 'Tokenization for Payment Security', icon: '🔒' },
                                                { id: 'payment-fraud-prevention-systems', label: 'Payment Fraud Prevention Systems', icon: '🛡️' },
                                                { id: 'multi-currency-payment-processing', label: 'Multi-Currency Payment Processing', icon: '💱' },
                                                { id: 'point-of-sale-payment-solutions', label: 'Point of Sale (POS) Payment Solutions', icon: '🛍️' },
                                                { id: 'mobile-payment-security-solutions', label: 'Mobile Payment Security Solutions', icon: '🔐' },
                                                { id: 'subscription-based-payment-solutions', label: 'Subscription-Based Payment Solutions', icon: '📅' },
                                                { id: 'invoice-payment-automation', label: 'Invoice Payment Automation', icon: '📄' },
                                                { id: 'cloud-based-payment-processing-solutions', label: 'Cloud-Based Payment Processing Solutions', icon: '☁️' },
                                                { id: 'seamless-cross-platform-payment-integration', label: 'Seamless Cross-Platform Payment Integration', icon: '🔗' },
                                                { id: 'payment-card-data-protection-systems', label: 'Payment Card Data Protection Systems', icon: '🛡️' },
                                                { id: 'instant-fund-transfers-and-settlement', label: 'Instant Fund Transfers and Settlement', icon: '⚡' },
                                                { id: 'automated-currency-conversion-for-payments', label: 'Automated Currency Conversion for Payments', icon: '💱' },
                                                { id: 'payment-dispute-management-solutions', label: 'Payment Dispute Management Solutions', icon: '⚖️' },
                                                { id: 'payment-confirmation-and-tracking-systems', label: 'Payment Confirmation and Tracking Systems', icon: '📦' },
                                                { id: 'dynamic-payment-routing-for-cost-optimization', label: 'Dynamic Payment Routing for Cost Optimization', icon: '🔄' },
                                                { id: 'secure-payment-authentication-solutions', label: 'Secure Payment Authentication Solutions', icon: '🔒' },
                                                { id: 'e-commerce-payment-solutions', label: 'E-commerce Payment Solutions', icon: '🛒' },
                                                { id: 'digital-invoice-generation-and-payment-collection', label: 'Digital Invoice Generation and Payment Collection', icon: '💻' },
                                                { id: 'payment-analytics-and-reporting-tools', label: 'Payment Analytics and Reporting Tools', icon: '📊' },
                                                { id: 'chargeback-management-systems', label: 'Chargeback Management Systems', icon: '🔄' },
                                                { id: 'automated-refund-processing', label: 'Automated Refund Processing', icon: '💵' },
                                                { id: 'micro-payment-solutions', label: 'Micro-Payment Solutions', icon: '💰' },
                                                { id: 'secure-tokenized-transactions', label: 'Secure Tokenized Transactions', icon: '🔐' },
                                                { id: 'payment-gateway-integration-services', label: 'Payment Gateway Integration Services', icon: '🔗' },
                                                { id: 'real-time-payment-notifications-and-alerts', label: 'Real-Time Payment Notifications and Alerts', icon: '🔔' },
                                                { id: 'payment-fraud-detection-algorithms', label: 'Payment Fraud Detection Algorithms', icon: '🛡️' },
                                                { id: 'payment-risk-management-solutions', label: 'Payment Risk Management Solutions', icon: '⚖️' },
                                                { id: 'contactless-payment-solutions', label: 'Contactless Payment Solutions', icon: '📱' }
                                              ];
                                              case 'private-banking':
                                                return [
                                                  { id: 'personalized-wealth-management', label: 'Personalized Wealth Management', icon: '💼' },
                                                  { id: 'automated-portfolio-rebalancing', label: 'Automated Portfolio Rebalancing', icon: '🔄' },
                                                  { id: 'customizable-investment-strategies', label: 'Customizable Investment Strategies', icon: '📈' },
                                                  { id: 'real-time-risk-assessment-for-clients', label: 'Real-Time Risk Assessment for Clients', icon: '⚖️' },
                                                  { id: 'digital-wealth-advisory-platforms', label: 'Digital Wealth Advisory Platforms', icon: '💻' },
                                                  { id: 'automated-tax-optimization-solutions', label: 'Automated Tax Optimization Solutions', icon: '🧾' },
                                                  { id: 'smart-estate-planning-tools', label: 'Smart Estate Planning Tools', icon: '🏡' },
                                                  { id: 'wealth-transfer-management-systems', label: 'Wealth Transfer Management Systems', icon: '🔄' },
                                                  { id: 'personalized-retirement-planning', label: 'Personalized Retirement Planning', icon: '🕰️' },
                                                  { id: 'real-time-investment-performance-tracking', label: 'Real-Time Investment Performance Tracking', icon: '📊' },
                                                  { id: 'automated-client-reporting-systems', label: 'Automated Client Reporting Systems', icon: '📋' },
                                                  { id: 'risk-based-asset-allocation', label: 'Risk-Based Asset Allocation', icon: '⚖️' },
                                                  { id: 'custom-credit-risk-management-solutions', label: 'Custom Credit Risk Management Solutions', icon: '📊' },
                                                  { id: 'investment-fund-management-automation', label: 'Investment Fund Management Automation', icon: '🏦' },
                                                  { id: 'holistic-financial-planning-tools', label: 'Holistic Financial Planning Tools', icon: '🛠️' },
                                                  { id: 'integrated-family-office-services', label: 'Integrated Family Office Services', icon: '🏢' },
                                                  { id: 'digital-onboarding-for-high-net-worth-individuals', label: 'Digital Onboarding for High-Net-Worth Individuals', icon: '👥' },
                                                  { id: 'automated-client-communication-tools', label: 'Automated Client Communication Tools', icon: '📬' },
                                                  { id: 'next-generation-investment-platforms', label: 'Next-Generation Investment Platforms', icon: '🚀' },
                                                  { id: 'alternative-investment-portfolio-management', label: 'Alternative Investment Portfolio Management', icon: '💼' },
                                                  { id: 'real-time-wealth-analytics', label: 'Real-Time Wealth Analytics', icon: '📈' },
                                                  { id: 'financial-data-aggregation-for-clients', label: 'Financial Data Aggregation for Clients', icon: '📊' },
                                                  { id: 'smart-investment-insights-and-alerts', label: 'Smart Investment Insights and Alerts', icon: '🔔' },
                                                  { id: 'bespoke-banking-solutions-for-uhnwis', label: 'Bespoke Banking Solutions for UHNWIs', icon: '🎁' },
                                                  { id: 'automated-billing-and-fee-structures', label: 'Automated Billing and Fee Structures', icon: '💳' },
                                                  { id: 'cross-border-wealth-management-solutions', label: 'Cross-Border Wealth Management Solutions', icon: '🌍' },
                                                  { id: 'dynamic-asset-valuation-tools', label: 'Dynamic Asset Valuation Tools', icon: '📈' },
                                                  { id: 'personalized-insurance-solutions-for-wealth-protection', label: 'Personalized Insurance Solutions for Wealth Protection', icon: '🛡️' },
                                                  { id: 'private-equity-fund-management-automation', label: 'Private Equity Fund Management Automation', icon: '🏦' },
                                                  { id: 'digital-portfolio-diversification', label: 'Digital Portfolio Diversification', icon: '📊' },
                                                  { id: 'automated-succession-planning-solutions', label: 'Automated Succession Planning Solutions', icon: '🔄' },
                                                  { id: 'real-time-monitoring-of-client-assets', label: 'Real-Time Monitoring of Client Assets', icon: '⏱️' },
                                                  { id: 'custom-financial-products-for-private-clients', label: 'Custom Financial Products for Private Clients', icon: '💼' },
                                                  { id: 'digital-family-wealth-platforms', label: 'Digital Family Wealth Platforms', icon: '💻' },
                                                  { id: 'hedge-fund-investment-strategy-automation', label: 'Hedge Fund Investment Strategy Automation', icon: '📈' },
                                                  { id: 'tax-efficient-wealth-transfer-tools', label: 'Tax-Efficient Wealth Transfer Tools', icon: '🧾' },
                                                  { id: 'automated-risk-mitigation-strategies', label: 'Automated Risk Mitigation Strategies', icon: '🛡️' },
                                                  { id: 'estate-tax-planning-automation', label: 'Estate Tax Planning Automation', icon: '📜' },
                                                  { id: 'investment-monitoring-dashboards', label: 'Investment Monitoring Dashboards', icon: '📊' },
                                                  { id: 'alternative-investment-sourcing-platforms', label: 'Alternative Investment Sourcing Platforms', icon: '🔍' }
                                                ];
                                                case 'retail-banking':
                                                  return [
                                                    { id: 'automated-account-opening', label: 'Automated Account Opening', icon: '📝' },
                                                    { id: 'mobile-banking-solutions', label: 'Mobile Banking Solutions', icon: '📱' },
                                                    { id: 'instant-loan-approval-systems', label: 'Instant Loan Approval Systems', icon: '⚡' },
                                                    { id: 'customer-onboarding-automation', label: 'Customer Onboarding Automation', icon: '👥' },
                                                    { id: 'personalized-banking-experiences', label: 'Personalized Banking Experiences', icon: '🎁' },
                                                    { id: 'automated-loan-processing', label: 'Automated Loan Processing', icon: '🔄' },
                                                    { id: 'real-time-fraud-detection', label: 'Real-Time Fraud Detection', icon: '🚫' },
                                                    { id: 'transaction-categorization-tools', label: 'Transaction Categorization Tools', icon: '📊' },
                                                    { id: 'digital-wallet-integration', label: 'Digital Wallet Integration', icon: '💳' },
                                                    { id: 'automated-bill-payments', label: 'Automated Bill Payments', icon: '💵' },
                                                    { id: 'personalized-financial-advice', label: 'Personalized Financial Advice', icon: '💼' },
                                                    { id: 'mobile-check-deposit-solutions', label: 'Mobile Check Deposit Solutions', icon: '📄' },
                                                    { id: 'digital-credit-card-management', label: 'Digital Credit Card Management', icon: '💳' },
                                                    { id: 'instant-payment-transfer-solutions', label: 'Instant Payment Transfer Solutions', icon: '⚡' },
                                                    { id: 'automated-savings-plans', label: 'Automated Savings Plans', icon: '💰' },
                                                    { id: 'customer-service-chatbots', label: 'Customer Service Chatbots', icon: '🤖' },
                                                    { id: 'expense-management-tools', label: 'Expense Management Tools', icon: '📊' },
                                                    { id: 'automated-credit-scoring-models', label: 'Automated Credit Scoring Models', icon: '📈' },
                                                    { id: 'customer-loyalty-program-automation', label: 'Customer Loyalty Program Automation', icon: '🏆' },
                                                    { id: 'smart-budgeting-tools', label: 'Smart Budgeting Tools', icon: '🛠️' },
                                                    { id: 'real-time-account-monitoring', label: 'Real-Time Account Monitoring', icon: '⏱️' },
                                                    { id: 'contactless-payment-solutions', label: 'Contactless Payment Solutions', icon: '📱' },
                                                    { id: 'voice-activated-banking', label: 'Voice-Activated Banking', icon: '🗣️' },
                                                    { id: 'online-mortgage-application-processing', label: 'Online Mortgage Application Processing', icon: '🏡' },
                                                    { id: 'automated-insurance-services', label: 'Automated Insurance Services', icon: '🛡️' },
                                                    { id: 'digital-account-alerts', label: 'Digital Account Alerts', icon: '🔔' },
                                                    { id: 'automated-customer-notifications', label: 'Automated Customer Notifications', icon: '📬' },
                                                    { id: 'fraud-prevention-and-risk-management', label: 'Fraud Prevention and Risk Management', icon: '🛡️' },
                                                    { id: 'automated-transaction-dispute-resolution', label: 'Automated Transaction Dispute Resolution', icon: '⚖️' },
                                                    { id: 'loan-repayment-scheduling-automation', label: 'Loan Repayment Scheduling Automation', icon: '📅' },
                                                    { id: 'real-time-loan-rate-alerts', label: 'Real-Time Loan Rate Alerts', icon: '⚡' },
                                                    { id: 'mobile-first-banking-platforms', label: 'Mobile-First Banking Platforms', icon: '📱' },
                                                    { id: 'smart-loan-matching-solutions', label: 'Smart Loan Matching Solutions', icon: '🤖' },
                                                    { id: 'automated-kyc-and-compliance', label: 'Automated KYC and Compliance', icon: '📜' },
                                                    { id: 'instant-account-fund-transfer', label: 'Instant Account Fund Transfer', icon: '⚡' },
                                                    { id: 'subscription-management-for-banking-products', label: 'Subscription Management for Banking Products', icon: '📅' },
                                                    { id: 'wealth-management-automation', label: 'Wealth Management Automation', icon: '💼' },
                                                    { id: 'digital-banking-security-features', label: 'Digital Banking Security Features', icon: '🔒' },
                                                    { id: 'online-customer-feedback-systems', label: 'Online Customer Feedback Systems', icon: '💬' },
                                                    { id: 'personalized-product-recommendations', label: 'Personalized Product Recommendations', icon: '🎁' }
                                                  ];
                                                  case 'risk-management':
                                                    return [
                                                      { id: 'automated-credit-risk-assessment', label: 'Automated Credit Risk Assessment', icon: '📊' },
                                                      { id: 'real-time-market-risk-monitoring', label: 'Real-Time Market Risk Monitoring', icon: '⏱️' },
                                                      { id: 'operational-risk-management-automation', label: 'Operational Risk Management Automation', icon: '⚙️' },
                                                      { id: 'fraud-detection-and-prevention-systems', label: 'Fraud Detection and Prevention Systems', icon: '🚫' },
                                                      { id: 'liquidity-risk-modeling-and-automation', label: 'Liquidity Risk Modeling and Automation', icon: '💧' },
                                                      { id: 'stress-testing-and-scenario-analysis', label: 'Stress Testing and Scenario Analysis', icon: '🔍' },
                                                      { id: 'automated-compliance-risk-reporting', label: 'Automated Compliance Risk Reporting', icon: '📜' },
                                                      { id: 'cybersecurity-risk-assessment', label: 'Cybersecurity Risk Assessment', icon: '🛡️' },
                                                      { id: 'risk-based-pricing-models', label: 'Risk-Based Pricing Models', icon: '⚖️' },
                                                      { id: 'portfolio-risk-management-tools', label: 'Portfolio Risk Management Tools', icon: '📈' },
                                                      { id: 'credit-default-risk-mitigation', label: 'Credit Default Risk Mitigation', icon: '🛡️' },
                                                      { id: 'real-time-risk-exposure-monitoring', label: 'Real-Time Risk Exposure Monitoring', icon: '⏱️' },
                                                      { id: 'fraudulent-transaction-detection', label: 'Fraudulent Transaction Detection', icon: '🔍' },
                                                      { id: 'automated-risk-dashboards', label: 'Automated Risk Dashboards', icon: '📊' },
                                                      { id: 'regulatory-compliance-automation', label: 'Regulatory Compliance Automation', icon: '📜' },
                                                      { id: 'counterparty-risk-management-solutions', label: 'Counterparty Risk Management Solutions', icon: '🤝' },
                                                      { id: 'automated-risk-reporting-and-analysis', label: 'Automated Risk Reporting and Analysis', icon: '📈' },
                                                      { id: 'market-volatility-risk-models', label: 'Market Volatility Risk Models', icon: '📉' },
                                                      { id: 'credit-scoring-automation', label: 'Credit Scoring Automation', icon: '📊' },
                                                      { id: 'risk-based-asset-allocation', label: 'Risk-Based Asset Allocation', icon: '⚖️' },
                                                      { id: 'collateral-management-solutions', label: 'Collateral Management Solutions', icon: '🏦' },
                                                      { id: 'automated-trade-and-settlement-risk-monitoring', label: 'Automated Trade and Settlement Risk Monitoring', icon: '⚖️' },
                                                      { id: 'insurance-risk-automation', label: 'Insurance Risk Automation', icon: '🛡️' },
                                                      { id: 'risk-mitigation-strategy-optimization', label: 'Risk Mitigation Strategy Optimization', icon: '🛡️' },
                                                      { id: 'operational-loss-forecasting', label: 'Operational Loss Forecasting', icon: '📉' },
                                                      { id: 'debt-collection-risk-assessment-tools', label: 'Debt Collection Risk Assessment Tools', icon: '📊' },
                                                      { id: 'regulatory-change-impact-analysis', label: 'Regulatory Change Impact Analysis', icon: '📜' },
                                                      { id: 'business-continuity-and-disaster-recovery-automation', label: 'Business Continuity and Disaster Recovery Automation', icon: '🏢' },
                                                      { id: 'risk-based-capital-allocation', label: 'Risk-Based Capital Allocation', icon: '💰' },
                                                      { id: 'risk-aware-investment-strategies', label: 'Risk-Aware Investment Strategies', icon: '📈' },
                                                      { id: 'third-party-risk-management-automation', label: 'Third-Party Risk Management Automation', icon: '🤝' },
                                                      { id: 'real-time-risk-decision-making', label: 'Real-Time Risk Decision Making', icon: '⏱️' },
                                                      { id: 'model-validation-and-risk-governance', label: 'Model Validation and Risk Governance', icon: '📊' },
                                                      { id: 'reputational-risk-management-tools', label: 'Reputational Risk Management Tools', icon: '🛡️' },
                                                      { id: 'quantitative-risk-analysis-automation', label: 'Quantitative Risk Analysis Automation', icon: '📈' },
                                                      { id: 'real-time-risk-scenario-simulations', label: 'Real-Time Risk Scenario Simulations', icon: '🔍' },
                                                      { id: 'risk-concentration-monitoring', label: 'Risk Concentration Monitoring', icon: '📊' },
                                                      { id: 'real-time-risk-impact-analytics', label: 'Real-Time Risk Impact Analytics', icon: '📈' },
                                                      { id: 'internal-controls-automation-for-risk', label: 'Internal Controls Automation for Risk', icon: '🔒' },
                                                      { id: 'portfolio-stress-testing-automation', label: 'Portfolio Stress Testing Automation', icon: '📊' }
                                                    ];
                                                    case 'securities-and-trading':
                                                      return [
                                                        { id: 'algorithmic-trading-strategies', label: 'Algorithmic Trading Strategies', icon: '🤖' },
                                                        { id: 'real-time-market-data-analytics', label: 'Real-Time Market Data Analytics', icon: '📊' },
                                                        { id: 'automated-trade-execution-systems', label: 'Automated Trade Execution Systems', icon: '⚡' },
                                                        { id: 'high-frequency-trading-platforms', label: 'High-Frequency Trading (HFT) Platforms', icon: '📈' },
                                                        { id: 'smart-order-routing', label: 'Smart Order Routing', icon: '🔄' },
                                                        { id: 'market-liquidity-management', label: 'Market Liquidity Management', icon: '💧' },
                                                        { id: 'real-time-risk-monitoring-for-trades', label: 'Real-Time Risk Monitoring for Trades', icon: '⚖️' },
                                                        { id: 'portfolio-optimization-for-traders', label: 'Portfolio Optimization for Traders', icon: '📈' },
                                                        { id: 'trade-settlement-automation', label: 'Trade Settlement Automation', icon: '🔄' },
                                                        { id: 'order-matching-automation', label: 'Order Matching Automation', icon: '⚖️' },
                                                        { id: 'cross-border-trading-solutions', label: 'Cross-Border Trading Solutions', icon: '🌍' },
                                                        { id: 'options-and-derivatives-trading-automation', label: 'Options and Derivatives Trading Automation', icon: '📉' },
                                                        { id: 'predictive-market-analytics-for-securities', label: 'Predictive Market Analytics for Securities', icon: '🔍' },
                                                        { id: 'trade-compliance-automation', label: 'Trade Compliance Automation', icon: '📜' },
                                                        { id: 'dynamic-trade-pricing-solutions', label: 'Dynamic Trade Pricing Solutions', icon: '💵' },
                                                        { id: 'real-time-trade-confirmation-systems', label: 'Real-Time Trade Confirmation Systems', icon: '✅' },
                                                        { id: 'blockchain-integration-for-securities-trading', label: 'Blockchain Integration for Securities Trading', icon: '🔗' },
                                                        { id: 'securities-lending-and-borrowing-automation', label: 'Securities Lending and Borrowing Automation', icon: '📄' },
                                                        { id: 'digital-trading-platforms', label: 'Digital Trading Platforms', icon: '💻' },
                                                        { id: 'client-focused-trading-dashboards', label: 'Client-Focused Trading Dashboards', icon: '📊' },
                                                        { id: 'market-sentiment-analysis-tools', label: 'Market Sentiment Analysis Tools', icon: '📈' },
                                                        { id: 'automated-risk-adjustment-for-trades', label: 'Automated Risk Adjustment for Trades', icon: '⚖️' },
                                                        { id: 'cross-asset-class-trading-systems', label: 'Cross-Asset Class Trading Systems', icon: '🌐' },
                                                        { id: 'trade-performance-reporting-automation', label: 'Trade Performance Reporting Automation', icon: '📊' },
                                                        { id: 'intraday-trading-automation', label: 'Intraday Trading Automation', icon: '⏱️' },
                                                        { id: 'currency-and-commodities-trading-solutions', label: 'Currency and Commodities Trading Solutions', icon: '💱' },
                                                        { id: 'algorithmic-execution-strategies', label: 'Algorithmic Execution Strategies', icon: '🤖' },
                                                        { id: 'transaction-cost-analysis-tools', label: 'Transaction Cost Analysis Tools', icon: '💰' },
                                                        { id: 'capital-market-strategy-automation', label: 'Capital Market Strategy Automation', icon: '📈' },
                                                        { id: 'real-time-compliance-and-regulatory-monitoring', label: 'Real-Time Compliance and Regulatory Monitoring', icon: '📜' },
                                                        { id: 'automated-position-management-systems', label: 'Automated Position Management Systems', icon: '📊' },
                                                        { id: 'trade-data-visualization-and-insights', label: 'Trade Data Visualization and Insights', icon: '📈' },
                                                        { id: 'automated-portfolio-rebalancing', label: 'Automated Portfolio Rebalancing', icon: '🔄' },
                                                        { id: 'order-flow-management', label: 'Order Flow Management', icon: '📈' },
                                                        { id: 'trading-book-management-systems', label: 'Trading Book Management Systems', icon: '📊' },
                                                        { id: 'risk-adjusted-return-optimization', label: 'Risk-Adjusted Return Optimization', icon: '⚖️' },
                                                        { id: 'automated-price-discovery-for-securities', label: 'Automated Price Discovery for Securities', icon: '📈' },
                                                        { id: 'market-making-automation', label: 'Market Making Automation', icon: '📈' },
                                                        { id: 'proprietary-trading-system-automation', label: 'Proprietary Trading System Automation', icon: '🤖' },
                                                        { id: 'derivatives-risk-management-automation', label: 'Derivatives Risk Management Automation', icon: '📉' }
                                                      ];
                                                      case 'sme-banking':
                                                        return [
                                                          { id: 'automated-loan-origination-for-smes', label: 'Automated Loan Origination for SMEs', icon: '📝' },
                                                          { id: 'digital-sme-onboarding-solutions', label: 'Digital SME Onboarding Solutions', icon: '💻' },
                                                          { id: 'sme-credit-scoring-and-risk-assessment', label: 'SME Credit Scoring and Risk Assessment', icon: '📊' },
                                                          { id: 'real-time-business-cash-flow-monitoring', label: 'Real-Time Business Cash Flow Monitoring', icon: '⏱️' },
                                                          { id: 'automated-business-loan-approval', label: 'Automated Business Loan Approval', icon: '⚡' },
                                                          { id: 'sme-transaction-categorization-tools', label: 'SME Transaction Categorization Tools', icon: '📊' },
                                                          { id: 'invoice-financing-and-automation', label: 'Invoice Financing and Automation', icon: '💵' },
                                                          { id: 'business-payment-solutions-automation', label: 'Business Payment Solutions Automation', icon: '🔄' },
                                                          { id: 'cross-border-payment-solutions-for-smes', label: 'Cross-Border Payment Solutions for SMEs', icon: '🌍' },
                                                          { id: 'sme-loan-repayment-scheduling', label: 'SME Loan Repayment Scheduling', icon: '📅' },
                                                          { id: 'sme-fundraising-platforms', label: 'SME Fundraising Platforms', icon: '💰' },
                                                          { id: 'automated-risk-mitigation-for-sme-loans', label: 'Automated Risk Mitigation for SME Loans', icon: '🛡️' },
                                                          { id: 'sme-lending-platforms-with-custom-terms', label: 'SME Lending Platforms with Custom Terms', icon: '⚖️' },
                                                          { id: 'business-expense-management-tools', label: 'Business Expense Management Tools', icon: '📊' },
                                                          { id: 'integrated-financial-management-for-smes', label: 'Integrated Financial Management for SMEs', icon: '🏦' },
                                                          { id: 'automated-tax-filing-for-small-businesses', label: 'Automated Tax Filing for Small Businesses', icon: '🧾' },
                                                          { id: 'real-time-business-performance-dashboards', label: 'Real-Time Business Performance Dashboards', icon: '📈' },
                                                          { id: 'sme-payroll-processing-automation', label: 'SME Payroll Processing Automation', icon: '💵' },
                                                          { id: 'dynamic-pricing-for-sme-loans', label: 'Dynamic Pricing for SME Loans', icon: '📈' },
                                                          { id: 'business-financing-automation', label: 'Business Financing Automation', icon: '💰' },
                                                          { id: 'mobile-banking-for-small-businesses', label: 'Mobile Banking for Small Businesses', icon: '📱' },
                                                          { id: 'automated-sme-credit-limit-management', label: 'Automated SME Credit Limit Management', icon: '📊' },
                                                          { id: 'sme-risk-management-tools', label: 'SME Risk Management Tools', icon: '🛡️' },
                                                          { id: 'sme-lending-portfolio-optimization', label: 'SME Lending Portfolio Optimization', icon: '📈' },
                                                          { id: 'online-invoice-payments-and-reconciliation', label: 'Online Invoice Payments and Reconciliation', icon: '💻' },
                                                          { id: 'automated-trade-finance-solutions-for-smes', label: 'Automated Trade Finance Solutions for SMEs', icon: '📦' },
                                                          { id: 'sme-cash-flow-forecasting-tools', label: 'SME Cash Flow Forecasting Tools', icon: '📊' },
                                                          { id: 'sme-market-data-analytics', label: 'SME Market Data Analytics', icon: '📈' },
                                                          { id: 'sme-financial-health-monitoring', label: 'SME Financial Health Monitoring', icon: '💼' },
                                                          { id: 'automated-business-insurance-solutions', label: 'Automated Business Insurance Solutions', icon: '🛡️' },
                                                          { id: 'digital-merchant-services-for-smes', label: 'Digital Merchant Services for SMEs', icon: '💻' },
                                                          { id: 'sme-supply-chain-financing', label: 'SME Supply Chain Financing', icon: '🔗' },
                                                          { id: 'real-time-business-tax-optimization', label: 'Real-Time Business Tax Optimization', icon: '🧾' },
                                                          { id: 'sme-banking-fraud-detection-systems', label: 'SME Banking Fraud Detection Systems', icon: '🚫' },
                                                          { id: 'automated-business-loan-refinancing', label: 'Automated Business Loan Refinancing', icon: '🔄' },
                                                          { id: 'personalized-business-banking-services', label: 'Personalized Business Banking Services', icon: '🎁' },
                                                          { id: 'credit-risk-modeling-for-smes', label: 'Credit Risk Modeling for SMEs', icon: '📊' },
                                                          { id: 'sme-customer-relationship-management-tools', label: 'SME Customer Relationship Management (CRM) Tools', icon: '👥' },
                                                          { id: 'mobile-invoice-and-payment-solutions', label: 'Mobile Invoice and Payment Solutions', icon: '📱' }
                                                        ];
                                                        case 'syndicated-lending':
                                                          return [
                                                            { id: 'automated-loan-syndication-platforms', label: 'Automated Loan Syndication Platforms', icon: '📝' },
                                                            { id: 'real-time-syndicated-loan-performance-tracking', label: 'Real-Time Syndicated Loan Performance Tracking', icon: '📊' },
                                                            { id: 'risk-assessment-and-pricing-for-syndicated-loans', label: 'Risk Assessment and Pricing for Syndicated Loans', icon: '⚖️' },
                                                            { id: 'automated-syndication-documentation-management', label: 'Automated Syndication Documentation Management', icon: '📄' },
                                                            { id: 'cross-border-loan-syndication-solutions', label: 'Cross-Border Loan Syndication Solutions', icon: '🌍' },
                                                            { id: 'loan-distribution-automation-for-syndicated-deals', label: 'Loan Distribution Automation for Syndicated Deals', icon: '🔄' },
                                                            { id: 'syndicated-loan-pricing-models', label: 'Syndicated Loan Pricing Models', icon: '💰' },
                                                            { id: 'real-time-credit-risk-monitoring-for-syndications', label: 'Real-Time Credit Risk Monitoring for Syndications', icon: '🔍' },
                                                            { id: 'automated-syndicated-loan-approval-workflow', label: 'Automated Syndicated Loan Approval Workflow', icon: '⚡' },
                                                            { id: 'syndicated-loan-origination-tools', label: 'Syndicated Loan Origination Tools', icon: '🛠️' },
                                                            { id: 'loan-syndication-data-room-management', label: 'Loan Syndication Data Room Management', icon: '📁' },
                                                            { id: 'syndicated-loan-servicing-automation', label: 'Syndicated Loan Servicing Automation', icon: '🔧' },
                                                            { id: 'customizable-loan-terms-and-syndication-agreements', label: 'Customizable Loan Terms and Syndication Agreements', icon: '📝' },
                                                            { id: 'automated-syndicated-loan-documentation-review', label: 'Automated Syndicated Loan Documentation Review', icon: '📑' },
                                                            { id: 'syndicated-loan-transaction-compliance-monitoring', label: 'Syndicated Loan Transaction Compliance Monitoring', icon: '✅' },
                                                            { id: 'loan-syndication-market-analysis', label: 'Loan Syndication Market Analysis', icon: '📊' },
                                                            { id: 'smart-contracting-for-syndicated-loans', label: 'Smart Contracting for Syndicated Loans', icon: '🤖' },
                                                            { id: 'automated-syndicated-loan-settlement-and-disbursement', label: 'Automated Syndicated Loan Settlement and Disbursement', icon: '💵' },
                                                            { id: 'syndicated-loan-syndication-and-participation-tracking', label: 'Syndicated Loan Syndication and Participation Tracking', icon: '📈' },
                                                            { id: 'loan-distribution-fee-automation', label: 'Loan Distribution Fee Automation', icon: '💰' },
                                                            { id: 'syndicated-loan-risk-and-exposure-calculation', label: 'Syndicated Loan Risk and Exposure Calculation', icon: '⚖️' },
                                                            { id: 'automated-credit-syndication-proposal-generation', label: 'Automated Credit Syndication Proposal Generation', icon: '📝' },
                                                            { id: 'syndicated-loan-portfolio-management', label: 'Syndicated Loan Portfolio Management', icon: '📊' },
                                                            { id: 'real-time-loan-syndication-deal-flow-tracking', label: 'Real-Time Loan Syndication Deal Flow Tracking', icon: '⏱️' },
                                                            { id: 'automated-debt-and-equity-syndication-integration', label: 'Automated Debt and Equity Syndication Integration', icon: '🔗' },
                                                            { id: 'credit-rating-model-automation-for-syndicated-loans', label: 'Credit Rating Model Automation for Syndicated Loans', icon: '📊' },
                                                            { id: 'syndicated-loan-payment-and-interest-calculation', label: 'Syndicated Loan Payment and Interest Calculation', icon: '💵' },
                                                            { id: 'regulatory-reporting-automation-for-syndicated-loans', label: 'Regulatory Reporting Automation for Syndicated Loans', icon: '📜' },
                                                            { id: 'real-time-syndicated-loan-market-pricing-updates', label: 'Real-Time Syndicated Loan Market Pricing Updates', icon: '📈' },
                                                            { id: 'risk-mitigation-in-syndicated-loan-structures', label: 'Risk Mitigation in Syndicated Loan Structures', icon: '🛡️' },
                                                            { id: 'syndicated-loan-secondary-market-automation', label: 'Syndicated Loan Secondary Market Automation', icon: '📈' },
                                                            { id: 'syndicated-loan-documentation-and-compliance-automation', label: 'Syndicated Loan Documentation and Compliance Automation', icon: '📄' },
                                                            { id: 'automated-syndicated-loan-repayment-monitoring', label: 'Automated Syndicated Loan Repayment Monitoring', icon: '🔄' },
                                                            { id: 'real-time-syndicated-loan-performance-analytics', label: 'Real-Time Syndicated Loan Performance Analytics', icon: '📊' },
                                                            { id: 'loan-syndication-trading-platforms', label: 'Loan Syndication Trading Platforms', icon: '💹' },
                                                            { id: 'investor-reporting-for-syndicated-loan-participations', label: 'Investor Reporting for Syndicated Loan Participations', icon: '📊' },
                                                            { id: 'automated-risk-and-return-analysis-for-syndicated-loans', label: 'Automated Risk and Return Analysis for Syndicated Loans', icon: '📈' },
                                                            { id: 'syndicated-loan-term-sheet-generation', label: 'Syndicated Loan Term Sheet Generation', icon: '📝' },
                                                            { id: 'syndicated-loan-data-visualization-tools', label: 'Syndicated Loan Data Visualization Tools', icon: '📊' },
                                                            { id: 'automated-loan-restructuring-solutions-for-syndicates', label: 'Automated Loan Restructuring Solutions for Syndicates', icon: '🔄' }
                                                          ];
                                                          case 'treasury-services':
                                                            return [
                                                              { id: 'automated-cash-flow-forecasting', label: 'Automated Cash Flow Forecasting', icon: '📈' },
                                                              { id: 'liquidity-management-solutions', label: 'Liquidity Management Solutions', icon: '💧' },
                                                              { id: 'real-time-cash-positioning', label: 'Real-Time Cash Positioning', icon: '⏱️' },
                                                              { id: 'automated-payment-processing', label: 'Automated Payment Processing', icon: '💳' },
                                                              { id: 'foreign-exchange-risk-management', label: 'Foreign Exchange Risk Management', icon: '🌍' },
                                                              { id: 'cash-pooling-automation', label: 'Cash Pooling Automation', icon: '🏦' },
                                                              { id: 'treasury-management-systems', label: 'Treasury Management Systems', icon: '📊' },
                                                              { id: 'automated-reconciliation-of-bank-accounts', label: 'Automated Reconciliation of Bank Accounts', icon: '🔄' },
                                                              { id: 'payment-approval-workflow-automation', label: 'Payment Approval Workflow Automation', icon: '✅' },
                                                              { id: 'treasury-reporting-automation', label: 'Treasury Reporting Automation', icon: '📜' },
                                                              { id: 'cash-concentration-systems', label: 'Cash Concentration Systems', icon: '💵' },
                                                              { id: 'integrated-payments-and-receivables-solutions', label: 'Integrated Payments and Receivables Solutions', icon: '🔗' },
                                                              { id: 'real-time-bank-account-monitoring', label: 'Real-Time Bank Account Monitoring', icon: '👀' },
                                                              { id: 'trade-finance-automation', label: 'Trade Finance Automation', icon: '📦' },
                                                              { id: 'intraday-liquidity-monitoring', label: 'Intraday Liquidity Monitoring', icon: '⏳' },
                                                              { id: 'automated-fund-transfers-and-settlements', label: 'Automated Fund Transfers and Settlements', icon: '💸' },
                                                              { id: 'risk-hedging-tools-for-treasury', label: 'Risk Hedging Tools for Treasury', icon: '🛡️' },
                                                              { id: 'automated-liquidity-forecasting-models', label: 'Automated Liquidity Forecasting Models', icon: '📊' },
                                                              { id: 'corporate-treasury-portfolio-management', label: 'Corporate Treasury Portfolio Management', icon: '📈' },
                                                              { id: 'interest-rate-risk-management-automation', label: 'Interest Rate Risk Management Automation', icon: '📉' },
                                                              { id: 'cash-and-liquidity-optimization', label: 'Cash and Liquidity Optimization', icon: '💰' },
                                                              { id: 'automated-debt-management-solutions', label: 'Automated Debt Management Solutions', icon: '📑' },
                                                              { id: 'cash-position-optimization', label: 'Cash Position Optimization', icon: '📊' },
                                                              { id: 'electronic-funds-transfer-solutions', label: 'Electronic Funds Transfer Solutions', icon: '💳' },
                                                              { id: 'digital-treasury-integration', label: 'Digital Treasury Integration', icon: '💻' },
                                                              { id: 'multi-currency-treasury-solutions', label: 'Multi-Currency Treasury Solutions', icon: '🌐' },
                                                              { id: 'automated-foreign-currency-transactions', label: 'Automated Foreign Currency Transactions', icon: '💱' },
                                                              { id: 'treasury-cash-flow-optimization', label: 'Treasury Cash Flow Optimization', icon: '📈' },
                                                              { id: 'investment-management-for-treasury', label: 'Investment Management for Treasury', icon: '💼' },
                                                              { id: 'short-term-borrowing-and-investment-automation', label: 'Short-Term Borrowing and Investment Automation', icon: '💵' },
                                                              { id: 'treasury-cash-management-dashboards', label: 'Treasury Cash Management Dashboards', icon: '📊' },
                                                              { id: 'automated-compliance-and-regulatory-reporting', label: 'Automated Compliance and Regulatory Reporting', icon: '📜' },
                                                              { id: 'bank-fee-analysis-and-optimization', label: 'Bank Fee Analysis and Optimization', icon: '💰' },
                                                              { id: 'automated-invoice-payments-and-settlements', label: 'Automated Invoice Payments and Settlements', icon: '💳' },
                                                              { id: 'real-time-trade-settlement-automation', label: 'Real-Time Trade Settlement Automation', icon: '⚡' },
                                                              { id: 'automated-hedging-and-derivatives-management', label: 'Automated Hedging and Derivatives Management', icon: '📈' },
                                                              { id: 'treasury-fraud-prevention-systems', label: 'Treasury Fraud Prevention Systems', icon: '🚫' },
                                                              { id: 'bank-account-management-automation', label: 'Bank Account Management Automation', icon: '🏦' },
                                                              { id: 'transaction-cost-optimization-for-treasury', label: 'Transaction Cost Optimization for Treasury', icon: '💵' },
                                                              { id: 'securities-and-collateral-management-automation', label: 'Securities and Collateral Management Automation', icon: '📈' }
                                                            ];
                                                            case 'trust-services':
                                                              return [
                                                                { id: 'automated-trust-administration', label: 'Automated Trust Administration', icon: '🏛️' },
                                                                { id: 'digital-estate-planning-solutions', label: 'Digital Estate Planning Solutions', icon: '📜' },
                                                                { id: 'trust-portfolio-management-automation', label: 'Trust Portfolio Management Automation', icon: '📊' },
                                                                { id: 'automated-wealth-transfer-solutions', label: 'Automated Wealth Transfer Solutions', icon: '💰' },
                                                                { id: 'real-time-asset-valuation-for-trusts', label: 'Real-Time Asset Valuation for Trusts', icon: '📈' },
                                                                { id: 'trust-fund-distribution-automation', label: 'Trust Fund Distribution Automation', icon: '🔄' },
                                                                { id: 'estate-tax-planning-automation', label: 'Estate Tax Planning Automation', icon: '🧾' },
                                                                { id: 'automated-beneficiary-tracking', label: 'Automated Beneficiary Tracking', icon: '👥' },
                                                                { id: 'digital-trust-document-management', label: 'Digital Trust Document Management', icon: '📁' },
                                                                { id: 'automated-trustee-reporting-systems', label: 'Automated Trustee Reporting Systems', icon: '📊' },
                                                                { id: 'client-risk-profiling-for-trusts', label: 'Client Risk Profiling for Trusts', icon: '🛡️' },
                                                                { id: 'automated-charitable-giving-programs', label: 'Automated Charitable Giving Programs', icon: '🎁' },
                                                                { id: 'estate-and-trust-compliance-monitoring', label: 'Estate and Trust Compliance Monitoring', icon: '✅' },
                                                                { id: 'automated-trust-account-reconciliation', label: 'Automated Trust Account Reconciliation', icon: '🔄' },
                                                                { id: 'trust-fund-investment-strategy-automation', label: 'Trust Fund Investment Strategy Automation', icon: '📈' },
                                                                { id: 'smart-contracts-for-trust-services', label: 'Smart Contracts for Trust Services', icon: '🤖' },
                                                                { id: 'automated-income-distribution-for-trusts', label: 'Automated Income Distribution for Trusts', icon: '💵' },
                                                                { id: 'real-time-trust-performance-analytics', label: 'Real-Time Trust Performance Analytics', icon: '📊' },
                                                                { id: 'beneficiary-communication-automation', label: 'Beneficiary Communication Automation', icon: '📞' },
                                                                { id: 'legal-document-automation-for-trusts', label: 'Legal Document Automation for Trusts', icon: '📜' },
                                                                { id: 'trust-risk-management-solutions', label: 'Trust Risk Management Solutions', icon: '🛡️' },
                                                                { id: 'integrated-tax-reporting-for-trusts', label: 'Integrated Tax Reporting for Trusts', icon: '🧾' },
                                                                { id: 'trustee-decision-support-tools', label: 'Trustee Decision Support Tools', icon: '🛠️' },
                                                                { id: 'automated-trust-fund-auditing', label: 'Automated Trust Fund Auditing', icon: '🔍' },
                                                                { id: 'custom-trust-products-and-services', label: 'Custom Trust Products and Services', icon: '🎁' },
                                                                { id: 'digital-access-to-trust-account-information', label: 'Digital Access to Trust Account Information', icon: '💻' },
                                                                { id: 'automated-trust-asset-transfer-solutions', label: 'Automated Trust Asset Transfer Solutions', icon: '🔄' },
                                                                { id: 'generational-wealth-transfer-management', label: 'Generational Wealth Transfer Management', icon: '👪' },
                                                                { id: 'real-time-trustee-compensation-monitoring', label: 'Real-Time Trustee Compensation Monitoring', icon: '⏱️' },
                                                                { id: 'estate-settlement-process-automation', label: 'Estate Settlement Process Automation', icon: '⚖️' },
                                                                { id: 'automated-legal-and-fiduciary-risk-monitoring', label: 'Automated Legal and Fiduciary Risk Monitoring', icon: '🛡️' },
                                                                { id: 'trust-fund-allocation-automation', label: 'Trust Fund Allocation Automation', icon: '📊' },
                                                                { id: 'customer-relationship-management-for-trust-services', label: 'Customer Relationship Management for Trust Services', icon: '👥' },
                                                                { id: 'personalized-trust-investment-advice', label: 'Personalized Trust Investment Advice', icon: '💼' },
                                                                { id: 'real-time-tax-filing-for-trusts', label: 'Real-Time Tax Filing for Trusts', icon: '🧾' },
                                                                { id: 'multigenerational-trust-planning-tools', label: 'Multigenerational Trust Planning Tools', icon: '📅' },
                                                                { id: 'trust-fund-liquidation-automation', label: 'Trust Fund Liquidation Automation', icon: '💰' },
                                                                { id: 'trust-document-compliance-automation', label: 'Trust Document Compliance Automation', icon: '✅' },
                                                                { id: 'automated-trust-portfolio-rebalancing', label: 'Automated Trust Portfolio Rebalancing', icon: '🔄' },
                                                                { id: 'real-time-asset-tracking-for-trusts', label: 'Real-Time Asset Tracking for Trusts', icon: '📍' }
                                                              ];
                                                              case 'wealth-management':
                                                                return [
                                                                  { id: 'automated-portfolio-management', label: 'Automated Portfolio Management', icon: '📈' },
                                                                  { id: 'real-time-investment-performance-tracking', label: 'Real-Time Investment Performance Tracking', icon: '📊' },
                                                                  { id: 'risk-based-asset-allocation', label: 'Risk-Based Asset Allocation', icon: '⚖️' },
                                                                  { id: 'personalized-financial-planning-tools', label: 'Personalized Financial Planning Tools', icon: '📝' },
                                                                  { id: 'automated-retirement-planning-solutions', label: 'Automated Retirement Planning Solutions', icon: '🏖️' },
                                                                  { id: 'tax-efficient-investment-strategies', label: 'Tax-Efficient Investment Strategies', icon: '💰' },
                                                                  { id: 'customizable-wealth-management-platforms', label: 'Customizable Wealth Management Platforms', icon: '🛠️' },
                                                                  { id: 'dynamic-investment-rebalancing', label: 'Dynamic Investment Rebalancing', icon: '🔄' },
                                                                  { id: 'smart-wealth-advisory-solutions', label: 'Smart Wealth Advisory Solutions', icon: '🤖' },
                                                                  { id: 'automated-client-onboarding-for-wealth-management', label: 'Automated Client Onboarding for Wealth Management', icon: '👥' },
                                                                  { id: 'holistic-wealth-management-tools', label: 'Holistic Wealth Management Tools', icon: '🌐' },
                                                                  { id: 'goal-based-investment-tracking', label: 'Goal-Based Investment Tracking', icon: '🎯' },
                                                                  { id: 'wealth-transfer-and-estate-planning-automation', label: 'Wealth Transfer and Estate Planning Automation', icon: '🏛️' },
                                                                  { id: 'digital-client-reporting-systems', label: 'Digital Client Reporting Systems', icon: '📄' },
                                                                  { id: 'integrated-investment-risk-management', label: 'Integrated Investment Risk Management', icon: '🛡️' },
                                                                  { id: 'wealth-allocation-optimization', label: 'Wealth Allocation Optimization', icon: '📈' },
                                                                  { id: 'real-time-market-insights-for-clients', label: 'Real-Time Market Insights for Clients', icon: '📊' },
                                                                  { id: 'automated-fund-rebalancing', label: 'Automated Fund Rebalancing', icon: '🔄' },
                                                                  { id: 'interactive-investment-dashboards', label: 'Interactive Investment Dashboards', icon: '📊' },
                                                                  { id: 'personalized-tax-reporting-for-wealth-clients', label: 'Personalized Tax Reporting for Wealth Clients', icon: '🧾' },
                                                                  { id: 'investment-strategy-automation', label: 'Investment Strategy Automation', icon: '⚙️' },
                                                                  { id: 'automated-client-communication-tools', label: 'Automated Client Communication Tools', icon: '📞' },
                                                                  { id: 'financial-portfolio-simulation', label: 'Financial Portfolio Simulation', icon: '🔍' },
                                                                  { id: 'family-office-automation', label: 'Family Office Automation', icon: '🏠' },
                                                                  { id: 'multi-asset-class-investment-solutions', label: 'Multi-Asset Class Investment Solutions', icon: '🌍' },
                                                                  { id: 'real-time-wealth-forecasting', label: 'Real-Time Wealth Forecasting', icon: '🔮' },
                                                                  { id: 'asset-protection-and-risk-management-automation', label: 'Asset Protection and Risk Management Automation', icon: '🛡️' },
                                                                  { id: 'customizable-wealth-management-solutions', label: 'Customizable Wealth Management Solutions', icon: '🛠️' },
                                                                  { id: 'global-investment-strategy-integration', label: 'Global Investment Strategy Integration', icon: '🌐' },
                                                                  { id: 'digital-asset-management-for-clients', label: 'Digital Asset Management for Clients', icon: '💻' },
                                                                  { id: 'behavioral-wealth-insights-and-strategies', label: 'Behavioral Wealth Insights and Strategies', icon: '🧠' },
                                                                  { id: 'automated-investment-proposals-and-reports', label: 'Automated Investment Proposals and Reports', icon: '📑' },
                                                                  { id: 'financial-health-monitoring-for-wealth-clients', label: 'Financial Health Monitoring for Wealth Clients', icon: '💼' },
                                                                  { id: 'real-time-tax-optimization-strategies', label: 'Real-Time Tax Optimization Strategies', icon: '🧾' },
                                                                  { id: 'digital-investment-risk-profiling', label: 'Digital Investment Risk Profiling', icon: '📊' },
                                                                  { id: 'client-centric-investment-portfolio-customization', label: 'Client-Centric Investment Portfolio Customization', icon: '👥' },
                                                                  { id: 'predictive-wealth-management-tools', label: 'Predictive Wealth Management Tools', icon: '🔮' },
                                                                  { id: 'automatic-wealth-performance-benchmarking', label: 'Automatic Wealth Performance Benchmarking', icon: '📊' },
                                                                  { id: 'philanthropic-giving-automation', label: 'Philanthropic Giving Automation', icon: '🎁' },
                                                                  { id: 'sustainable-and-impact-investment-solutions', label: 'Sustainable and Impact Investment Solutions', icon: '🌱' }
        ];

case 'agri-business-services':
  return [
    { id: 'farm-management-software', label: 'Farm Management Software', icon: '💻' },
    { id: 'crop-monitoring-solutions', label: 'Crop Monitoring Solutions', icon: '📡' },
    { id: 'precision-irrigation-systems', label: 'Precision Irrigation Systems', icon: '🚿' },
    { id: 'soil-health-analytics', label: 'Soil Health and Fertility Analytics', icon: '🌱' },
    { id: 'livestock-tracking-management', label: 'Livestock Tracking and Management', icon: '🐄' },
    { id: 'automated-crop-protection', label: 'Automated Crop Protection Systems', icon: '🛡️' },
    { id: 'smart-fertilization-tech', label: 'Smart Fertilization Technologies', icon: '🧪' },
    { id: 'supply-chain-optimization', label: 'Supply Chain Optimization Tools', icon: '📦' },
    { id: 'predictive-weather-tools', label: 'Predictive Weather and Climate Tools', icon: '🌦️' },
    { id: 'autonomous-tractors', label: 'Autonomous Tractors and Harvesters', icon: '🚜' },
    { id: 'crop-yield-prediction', label: 'Crop Yield Prediction Software', icon: '📊' },
    { id: 'digital-marketplaces', label: 'Digital Marketplaces for Agriculture', icon: '🛒' },
    { id: 'remote-sensing-land', label: 'Remote Sensing for Land Management', icon: '🛰️' },
    { id: 'real-time-pest-detection', label: 'Real-Time Pest Detection Solutions', icon: '🐛' },
    { id: 'automated-greenhouse', label: 'Automated Greenhouse Control Systems', icon: '🏡' },
    { id: 'farm-to-table-logistics', label: 'Farm-to-Table Logistics Solutions', icon: '🚚' },
    { id: 'plant-disease-diagnostic', label: 'Plant Disease Diagnostic Tools', icon: '🩺' },
    { id: 'virtual-farming-assistance', label: 'Virtual Farming Assistance Platforms', icon: '🖥️' },
    { id: 'crop-rotation-planning', label: 'Crop Rotation and Planning Software', icon: '🔄' },
    { id: 'online-agri-training', label: 'Online Agricultural Training Platforms', icon: '🎓' },
    { id: 'data-driven-livestock', label: 'Data-Driven Livestock Breeding Solutions', icon: '🧬' },
    { id: 'smart-feeding-systems', label: 'Smart Feeding Systems for Animals', icon: '🍽️' },
    { id: 'digital-financial-management', label: 'Digital Financial Management for Farmers', icon: '💳' },
    { id: 'automated-weeding', label: 'Automated Weeding and Cultivation Systems', icon: '🌿' },
    { id: 'virtual-crop-simulation', label: 'Virtual Crop Simulation Software', icon: '🌾' },
    { id: 'blockchain-supply-chains', label: 'Blockchain for Agricultural Supply Chains', icon: '🔗' },
    { id: 'farm-data-analytics', label: 'Farm Data Analytics Platforms', icon: '📈' },
    { id: 'autonomous-drone-spraying', label: 'Autonomous Drone Spraying Systems', icon: '🚁' },
    { id: 'on-demand-advisory', label: 'On-demand Agricultural Advisory Services', icon: '📞' },
    { id: 'farm-equipment-rental', label: 'Farm Equipment Rental Platforms', icon: '🛠️' },
    { id: 'agricultural-insurance', label: 'Agricultural Insurance Automation', icon: '📝' },
    { id: 'vertical-farming-management', label: 'Vertical Farming Management Systems', icon: '🏢' },
    { id: 'predictive-supply-chain', label: 'Predictive Supply Chain Solutions', icon: '🔮' },
    { id: 'cloud-agri-inventory', label: 'Cloud-Based Agricultural Inventory Management', icon: '☁️' },
    { id: 'smart-food-processing', label: 'Smart Food Processing Technologies', icon: '🍲' },
    { id: 'crop-import-export', label: 'Crop Import and Export Optimization', icon: '🌍' },
    { id: 'agri-waste-management', label: 'Agricultural Waste Management Solutions', icon: '🗑️' },
    { id: 'real-time-water-monitoring', label: 'Real-Time Water Usage Monitoring', icon: '💧' },
    { id: 'e-commerce-farm-products', label: 'E-commerce Platforms for Farm Products', icon: '🛒' },
    { id: 'weather-crop-forecasting', label: 'Weather-Driven Crop Forecasting Tools', icon: '🌦️' }
  ];

case 'agrochemicals':
  return [
    { id: 'precision-pesticide', label: 'Precision Pesticide Application', icon: '🎯' },
    { id: 'smart-fertilizer', label: 'Smart Fertilizer Management Systems', icon: '🧪' },
    { id: 'automated-crop-protection', label: 'Automated Crop Protection Solutions', icon: '🛡️' },
    { id: 'integrated-pest-management', label: 'Integrated Pest Management Software', icon: '🐛' },
    { id: 'soil-fertility-monitoring', label: 'Soil Fertility Monitoring Systems', icon: '🌱' },
    { id: 'crop-nutrient-optimization', label: 'Crop Nutrient Optimization Tools', icon: '📊' },
    { id: 'predictive-pest-models', label: 'Predictive Pest Infestation Models', icon: '🔮' },
    { id: 'digital-fertilizer-blending', label: 'Digital Fertilizer Blending Solutions', icon: '🧪' },
    { id: 'remote-sensing-chemical', label: 'Remote Sensing for Chemical Application', icon: '🛰️' },
    { id: 'data-driven-herbicide', label: 'Data-Driven Herbicide Optimization', icon: '🌿' },
    { id: 'automated-weed-control', label: 'Automated Weed Control Systems', icon: '🌾' },
    { id: 'climate-sensitive-chemical', label: 'Climate-Sensitive Chemical Application', icon: '🌦️' },
    { id: 'soil-ph-moisture-sensors', label: 'Soil pH and Moisture Sensors', icon: '💧' },
    { id: 'drone-crop-protection', label: 'Drone-Assisted Crop Protection', icon: '🚁' },
    { id: 'digital-chemical-inventory', label: 'Digital Chemical Inventory Management', icon: '📦' },
    { id: 'customizable-pest-control', label: 'Customizable Pest Control Scheduling Software', icon: '📅' },
    { id: 'chemical-usage-analytics', label: 'Chemical Usage Analytics and Optimization', icon: '📈' },
    { id: 'crop-specific-chemical', label: 'Crop-Specific Chemical Recommendation Platforms', icon: '🌾' },
    { id: 'digital-pest-mapping', label: 'Digital Pest and Disease Mapping Tools', icon: '🗺️' },
    { id: 'chemical-resistance-monitoring', label: 'Chemical Resistance Monitoring Systems', icon: '⚠️' },
    { id: 'fertilizer-efficiency-analytics', label: 'Fertilizer Efficiency Analytics', icon: '📊' },
    { id: 'smart-irrigation-chemical', label: 'Smart Irrigation and Chemical Integration', icon: '🚿' },
    { id: 'precision-spraying', label: 'Precision Spraying Technologies', icon: '💦' },
    { id: 'bio-based-agrochemicals', label: 'Bio-based Agrochemical Solutions', icon: '🌿' },
    { id: 'agricultural-runoff', label: 'Agricultural Runoff Management Systems', icon: '🌊' },
    { id: 'digital-compliance', label: 'Digital Compliance and Regulation Tracking', icon: '📝' },
    { id: 'smart-fertilization-sensing', label: 'Smart Fertilization Sensing Systems', icon: '📡' },
    { id: 'real-time-chemical', label: 'Real-Time Chemical Performance Monitoring', icon: '⏱️' },
    { id: 'automated-growth-regulators', label: 'Automated Plant Growth Regulators', icon: '🌱' },
    { id: 'precision-fungicide', label: 'Precision Fungicide Delivery Systems', icon: '🦠' },
    { id: 'soil-health-predictive', label: 'Soil Health Predictive Modeling', icon: '🌱' },
    { id: 'integrated-crop-nutrition', label: 'Integrated Crop Nutrition Management', icon: '🍎' },
    { id: 'automated-fertilizer-scheduling', label: 'Automated Fertilizer Application Scheduling', icon: '📅' },
    { id: 'intelligent-field-mapping', label: 'Intelligent Field Mapping for Chemical Application', icon: '🗺️' },
    { id: 'chemical-risk-assessment', label: 'Chemical Risk Assessment Tools', icon: '⚠️' },
    { id: 'customizable-agrochemical', label: 'Customizable Agrochemical Product Delivery', icon: '📦' },
    { id: 'post-application-residue', label: 'Post-Application Chemical Residue Tracking', icon: '🧪' },
    { id: 'eco-friendly-chemicals', label: 'Eco-Friendly Chemical Alternatives Analysis', icon: '🌍' },
    { id: 'precision-insecticide', label: 'Precision Insecticide and Fungicide Application', icon: '🐜' },
    { id: 'toxicity-impact-modeling', label: 'Toxicity and Environmental Impact Modeling', icon: '🌱' }
  ];

case 'agricultural-equipment':
  return [
    { id: 'autonomous-tractors', label: 'Autonomous Tractors', icon: '🚜' },
    { id: 'smart-harvesting-systems', label: 'Smart Harvesting Systems', icon: '🌾' },
    { id: 'precision-seeding', label: 'Precision Seeding Equipment', icon: '🌱' },
    { id: 'automated-irrigation', label: 'Automated Irrigation Management', icon: '🚿' },
    { id: 'drones-surveillance', label: 'Drones for Field Surveillance', icon: '🚁' },
    { id: 'robotic-weed-control', label: 'Robotic Weed Control Systems', icon: '🌿' },
    { id: 'soil-compaction-tools', label: 'Soil Compaction Measurement Tools', icon: '📏' },
    { id: 'automated-plowing', label: 'Automated Plowing and Tilling Systems', icon: '🛠️' },
    { id: 'precision-fertilizer', label: 'Precision Fertilizer Application', icon: '🧪' },
    { id: 'smart-fertilizer-spreaders', label: 'Smart Fertilizer Spreaders', icon: '📦' },
    { id: 'automated-crop-drones', label: 'Automated Crop Monitoring Drones', icon: '🚁' },
    { id: 'gps-tractor-navigation', label: 'GPS-Enabled Tractor Navigation Systems', icon: '📍' },
    { id: 'harvest-yield-mapping', label: 'Harvest Yield Mapping Systems', icon: '🗺️' },
    { id: 'digital-fleet-management', label: 'Digital Equipment Fleet Management', icon: '📊' },
    { id: 'tractor-performance', label: 'Tractor Performance Monitoring Tools', icon: '📈' },
    { id: 'real-time-field-data', label: 'Real-Time Field Data Collection Equipment', icon: '⏱️' },
    { id: 'automated-planting', label: 'Automated Planting and Seeding Machinery', icon: '🌱' },
    { id: 'smart-grain-handling', label: 'Smart Grain Handling Equipment', icon: '🌾' },
    { id: 'remote-mowers', label: 'Remote-Controlled Mowers', icon: '✂️' },
    { id: 'autonomous-irrigation', label: 'Autonomous Irrigation Controllers', icon: '🚿' },
    { id: 'weather-equipment-scheduling', label: 'Weather-Driven Equipment Scheduling Systems', icon: '🌦️' },
    { id: 'real-time-diagnostics', label: 'Real-Time Equipment Diagnostics Tools', icon: '🛠️' },
    { id: 'crop-spraying-robotics', label: 'Crop Spraying Robotics', icon: '💦' },
    { id: 'automated-grain-sorting', label: 'Automated Grain Sorting and Packaging', icon: '📦' },
    { id: 'autonomous-fruit-picking', label: 'Autonomous Fruit Picking Systems', icon: '🍎' },
    { id: 'smart-equipment-scheduling', label: 'Smart Farm Equipment Scheduling', icon: '📅' },
    { id: 'precision-land-leveling', label: 'Precision Land Leveling Equipment', icon: '📏' },
    { id: 'integrated-precision-equipment', label: 'Integrated Equipment for Precision Agriculture', icon: '🛠️' },
    { id: 'digital-tractor-fleet', label: 'Digital Tractor Fleet Optimization', icon: '📊' },
    { id: 'autonomous-soil-tillage', label: 'Autonomous Soil Tillage Solutions', icon: '🌱' },
    { id: 'precision-row-crop', label: 'Precision Equipment for Row Crop Management', icon: '🌾' },
    { id: 'smart-watering-systems', label: 'Smart Watering Systems for Agricultural Machinery', icon: '💧' },
    { id: 'vehicle-telematics', label: 'Agricultural Vehicle Telematics Systems', icon: '📡' },
    { id: 'automated-calibration', label: 'Automated Equipment Calibration Systems', icon: '⚙️' },
    { id: 'remote-performance-monitoring', label: 'Remote Equipment Performance Monitoring', icon: '📊' },
    { id: 'smart-harvester-tech', label: 'Smart Harvester Technology', icon: '🌾' },
    { id: 'real-time-maintenance-alerts', label: 'Real-Time Equipment Maintenance Alerts', icon: '⚠️' },
    { id: 'automated-crop-adjustments', label: 'Automated Crop-Specific Equipment Adjustments', icon: '🌱' },
    { id: 'data-driven-equipment-analytics', label: 'Data-Driven Equipment Usage Analytics', icon: '📈' },
    { id: 'remote-fertilizer-application', label: 'Remote-Controlled Fertilizer Application Systems', icon: '🧪' }
  ];

  case 'agricultural-technology':
    return [
      { id: 'precision-agriculture-software', label: 'Precision Agriculture Software', icon: '📊' },
      { id: 'smart-irrigation-management', label: 'Smart Irrigation Management Systems', icon: '🚿' },
      { id: 'automated-crop-monitoring', label: 'Automated Crop Monitoring Systems', icon: '📡' },
      { id: 'digital-farm-management', label: 'Digital Farm Management Platforms', icon: '💻' },
      { id: 'farm-data-analytics', label: 'Farm Data Analytics Tools', icon: '📈' },
      { id: 'crop-disease-prediction', label: 'Crop Disease Prediction Software', icon: '🦠' },
      { id: 'remote-sensing-soil', label: 'Remote Sensing for Soil Health', icon: '🛰️' },
      { id: 'yield-prediction-modeling', label: 'Yield Prediction Modeling', icon: '🔮' },
      { id: 'farm-to-table-supply-chain', label: 'Farm-to-Table Supply Chain Management', icon: '📦' },
      { id: 'gps-farm-equipment', label: 'GPS-Enabled Farm Equipment Navigation', icon: '📍' },
      { id: 'automated-farm-equipment', label: 'Automated Farm Equipment Control Systems', icon: '🚜' },
      { id: 'drones-precision-agriculture', label: 'Drones for Precision Agriculture', icon: '🚁' },
      { id: 'digital-soil-health-mapping', label: 'Digital Soil Health Mapping', icon: '🗺️' },
      { id: 'climate-responsive-farming', label: 'Climate-Responsive Farming Platforms', icon: '🌦️' },
      { id: 'virtual-field-mapping', label: 'Virtual Field Mapping Tools', icon: '🖥️' },
      { id: 'autonomous-field-robots', label: 'Autonomous Field Robots', icon: '🤖' },
      { id: 'crop-rotation-optimization', label: 'Crop Rotation Optimization Software', icon: '🔄' },
      { id: 'precision-livestock-monitoring', label: 'Precision Livestock Monitoring Systems', icon: '🐄' },
      { id: 'digital-greenhouse-control', label: 'Digital Greenhouse Control Systems', icon: '🏡' },
      { id: 'smart-crop-fertilization', label: 'Smart Crop Fertilization Tools', icon: '🧪' },
      { id: 'livestock-tracking-monitoring', label: 'Livestock Tracking and Monitoring Systems', icon: '🐖' },
      { id: 'weather-forecasting-agriculture', label: 'Weather Forecasting Tools for Agriculture', icon: '🌦️' },
      { id: 'digital-weed-management', label: 'Digital Weed Management Systems', icon: '🌿' },
      { id: 'real-time-crop-health', label: 'Real-Time Crop Health Monitoring', icon: '🌱' },
      { id: 'soil-moisture-irrigation', label: 'Soil Moisture and Irrigation Optimization', icon: '💧' },
      { id: 'e-commerce-farm-products', label: 'E-Commerce Platforms for Farm Products', icon: '🛒' },
    { id: 'indoor-farming-management', label: 'Indoor Farming Management Software', icon: '🏠' },
    { id: 'blockchain-agricultural-traceability', label: 'Blockchain for Agricultural Traceability', icon: '🔗' },
    { id: 'automated-pest-control', label: 'Automated Pest Control Solutions', icon: '🐜' },
    { id: 'smart-farm-asset-management', label: 'Smart Farm Asset Management', icon: '📊' },
    { id: 'supply-chain-transparency', label: 'Supply Chain Transparency Platforms', icon: '📦' },
    { id: 'data-driven-seed-selection', label: 'Data-Driven Seed Selection Tools', icon: '🌱' },
    { id: 'remote-crop-surveillance', label: 'Remote Crop Surveillance Platforms', icon: '🛰️' },
    { id: 'vertical-farming-automation', label: 'Vertical Farming Automation Systems', icon: '🏢' },
    { id: 'smart-fertilization-chemical', label: 'Smart Fertilization and Chemical Application Tools', icon: '🧪' },
    { id: 'digital-farm-equipment-rental', label: 'Digital Farm Equipment Rental Platforms', icon: '🛠️' },
    { id: 'customizable-farm-equipment', label: 'Customizable Farm Equipment Optimization Software', icon: '⚙️' },
    { id: 'harvest-scheduling-automation', label: 'Harvest Scheduling and Automation Systems', icon: '📅' },
    { id: 'online-agricultural-knowledge', label: 'Online Agricultural Knowledge Platforms', icon: '🎓' },
    { id: 'real-time-farm-performance', label: 'Real-Time Farm Performance Dashboards', icon: '📊' }
        ];
      // ... existing code ...
case 'animal-husbandry':
  return [
    { id: 'automated-livestock-monitoring', label: 'Automated Livestock Monitoring Systems', icon: '🐄' },
    { id: 'smart-herd-management', label: 'Smart Herd Management Solutions', icon: '📊' },
    { id: 'precision-livestock-feeding', label: 'Precision Livestock Feeding Systems', icon: '🍽️' },
    { id: 'automated-breeding-systems', label: 'Automated Breeding Systems', icon: '🧬' },
    { id: 'livestock-health-monitoring', label: 'Livestock Health Monitoring Platforms', icon: '🩺' },
    { id: 'wearable-sensors-animal', label: 'Wearable Sensors for Animal Tracking', icon: '📡' },
    { id: 'real-time-animal-activity', label: 'Real-Time Animal Activity Monitoring', icon: '⏱️' },
    { id: 'virtual-veterinary-consultations', label: 'Virtual Veterinary Consultations', icon: '🖥️' },
    { id: 'digital-milk-production', label: 'Digital Milk Production Monitoring', icon: '🥛' },
    { id: 'automated-animal-weight', label: 'Automated Animal Weight and Growth Tracking', icon: '📏' },
    { id: 'remote-livestock-fencing', label: 'Remote Livestock Fencing Solutions', icon: '🚧' },
    { id: 'livestock-disease-prediction', label: 'Livestock Disease Prediction Tools', icon: '🦠' },
    { id: 'automated-calf-management', label: 'Automated Calf Management Systems', icon: '🐄' },
    { id: 'smart-cattle-identification', label: 'Smart Cattle Identification Solutions', icon: '🆔' },
    { id: 'livestock-genetic-management', label: 'Livestock Genetic Management Software', icon: '🧬' },
    { id: 'livestock-rationing-feed', label: 'Livestock Rationing and Feed Optimization', icon: '🌾' },
    { id: 'animal-behavior-analysis', label: 'Animal Behavior Analysis Platforms', icon: '📊' },
    { id: 'precision-livestock-nutrition', label: 'Precision Livestock Nutrition Systems', icon: '🍎' },
    { id: 'smart-barns-facility', label: 'Smart Barns and Facility Management Systems', icon: '🏠' },
    { id: 'automated-egg-production', label: 'Automated Egg Production Tracking', icon: '🥚' },
    { id: 'livestock-performance-analytics', label: 'Livestock Performance Analytics', icon: '📈' },
    { id: 'real-time-animal-health', label: 'Real-Time Animal Health Alerts', icon: '⚠️' },
    { id: 'automated-milking-systems', label: 'Automated Milking Systems', icon: '🥛' },
    { id: 'livestock-welfare-comfort', label: 'Livestock Welfare and Comfort Monitoring', icon: '🐄' },
    { id: 'digital-livestock-marketplaces', label: 'Digital Livestock Marketplaces', icon: '🛒' },
    { id: 'remote-veterinary-diagnostics', label: 'Remote Veterinary Diagnostics Tools', icon: '🩺' },
    { id: 'digital-animal-tracking', label: 'Digital Animal Tracking for Disease Control', icon: '📡' },
    { id: 'smart-watering-livestock', label: 'Smart Watering Systems for Livestock', icon: '💧' },
    { id: 'animal-breeding-optimization', label: 'Animal Breeding Optimization Software', icon: '🧬' },
    { id: 'mobile-livestock-management', label: 'Mobile Livestock Management Platforms', icon: '📱' },
    { id: 'blockchain-livestock-traceability', label: 'Blockchain for Livestock Traceability', icon: '🔗' },
    { id: 'livestock-risk-management', label: 'Livestock Risk Management Platforms', icon: '⚠️' },
    { id: 'automated-animal-waste', label: 'Automated Animal Waste Management Systems', icon: '🗑️' },
    { id: 'smart-grazing-systems', label: 'Smart Grazing Systems', icon: '🌾' },
    { id: 'livestock-immunization-tracking', label: 'Livestock Immunization Tracking', icon: '💉' },
    { id: 'data-driven-meat-quality', label: 'Data-Driven Meat Quality Monitoring', icon: '🍖' },
    { id: 'environmental-impact-livestock', label: 'Environmental Impact Monitoring for Livestock', icon: '🌍' },
    { id: 'herd-health-treatment', label: 'Herd Health and Treatment Scheduling', icon: '📅' },
    { id: 'digital-livestock-insurance', label: 'Digital Livestock Insurance Solutions', icon: '📝' },
    { id: 'real-time-livestock-supply-chain', label: 'Real-Time Livestock Supply Chain Monitoring', icon: '📦' }
  ];
// ... existing code ...
     // ... existing code ...
case 'aquaculture':
  return [
    { id: 'automated-fish-feeding', label: 'Automated Fish Feeding Systems', icon: '🍽️' },
    { id: 'smart-aquaculture-monitoring', label: 'Smart Aquaculture Monitoring Solutions', icon: '📡' },
    { id: 'water-quality-temperature', label: 'Water Quality and Temperature Control Systems', icon: '🌡️' },
    { id: 'fish-health-monitoring', label: 'Fish Health Monitoring Platforms', icon: '🩺' },
    { id: 'real-time-aquaculture-data', label: 'Real-Time Aquaculture Data Analytics', icon: '📊' },
    { id: 'remote-sensing-fish-stock', label: 'Remote Sensing for Fish Stock Management', icon: '🛰️' },
    { id: 'automated-fish-harvesting', label: 'Automated Fish Harvesting Systems', icon: '🎣' },
    { id: 'precision-aquaculture-nutrition', label: 'Precision Aquaculture Nutrition Systems', icon: '🍎' },
    { id: 'fish-behavior-analysis', label: 'Fish Behavior Analysis Tools', icon: '📊' },
    { id: 'environmental-impact-aquaculture', label: 'Environmental Impact Monitoring in Aquaculture', icon: '🌍' },
    { id: 'real-time-fish-growth', label: 'Real-Time Fish Growth Tracking', icon: '📏' },
    { id: 'intelligent-aquaculture-farm', label: 'Intelligent Aquaculture Farm Management', icon: '🏠' },
    { id: 'fish-disease-prediction', label: 'Fish Disease Prediction and Prevention Software', icon: '🦠' },
    { id: 'automated-water-filtration', label: 'Automated Water Filtration Systems', icon: '💧' },
    { id: 'fish-stock-density', label: 'Fish Stock Density Optimization Software', icon: '📊' },
    { id: 'digital-aquaculture-dashboards', label: 'Digital Aquaculture Farm Performance Dashboards', icon: '📈' },
    { id: 'smart-fish-farm-scheduling', label: 'Smart Fish Farm Equipment Scheduling', icon: '📅' },
    { id: 'sustainable-feed-optimization', label: 'Sustainable Feed Optimization in Aquaculture', icon: '🌾' },
    { id: 'fish-tracking-identification', label: 'Fish Tracking and Identification Systems', icon: '📡' },
    { id: 'aquaculture-supply-chain', label: 'Aquaculture Supply Chain Optimization', icon: '📦' },
    { id: 'digital-fish-harvesting', label: 'Digital Fish Harvesting Scheduling', icon: '📅' },
    { id: 'smart-oxygen-ph', label: 'Smart Oxygen and pH Regulation Tools', icon: '🧪' },
    { id: 'remote-aquaculture-monitoring', label: 'Remote Aquaculture Farm Monitoring', icon: '🛰️' },
    { id: 'fish-farm-automation', label: 'Fish Farm Automation Systems', icon: '🤖' },
    { id: 'aquaculture-risk-management', label: 'Aquaculture Risk Management Platforms', icon: '⚠️' },
    { id: 'precision-water-nutrients', label: 'Precision Monitoring of Water Nutrients', icon: '💧' },
    { id: 'predictive-aquaculture-yield', label: 'Predictive Aquaculture Yield Estimation Tools', icon: '🔮' },
    { id: 'smart-fish-breeding', label: 'Smart Fish Breeding Systems', icon: '🧬' },
    { id: 'automated-aquaculture-integration', label: 'Automated Aquaculture System Integration', icon: '⚙️' },
    { id: 'intelligent-fish-farm-fencing', label: 'Intelligent Fish Farm Fencing Systems', icon: '🚧' },
    { id: 'real-time-aquaculture-compliance', label: 'Real-Time Aquaculture Compliance Monitoring', icon: '📝' },
    { id: 'autonomous-underwater-vehicles', label: 'Autonomous Underwater Vehicles for Aquaculture', icon: '🤿' },
    { id: 'digital-aquaculture-forecasting', label: 'Digital Aquaculture Supply and Demand Forecasting', icon: '🔮' },
    { id: 'fish-feed-management', label: 'Fish Feed Management Software', icon: '🍽️' },
    { id: 'iot-water-quality', label: 'IoT-Based Water Quality Monitoring', icon: '📡' },
    { id: 'fish-welfare-monitoring', label: 'Fish Welfare Monitoring Systems', icon: '🐟' },
    { id: 'marine-aquaculture-monitoring', label: 'Marine Aquaculture Monitoring and Control', icon: '🌊' },
    { id: 'automated-harvesting-sorting', label: 'Automated Harvesting and Sorting Technology', icon: '🎣' },
    { id: 'smart-fish-tank-monitoring', label: 'Smart Fish Tank Monitoring Systems', icon: '🐟' },
    { id: 'blockchain-aquaculture-traceability', label: 'Blockchain for Traceability in Aquaculture', icon: '🔗' }
  ];
// ... existing code ...
      // ... existing code ...
case 'biogas-production':
  return [
    { id: 'automated-biogas-monitoring', label: 'Automated Biogas Plant Monitoring', icon: '📡' },
    { id: 'smart-biogas-management', label: 'Smart Biogas Production Management Systems', icon: '📊' },
    { id: 'real-time-biogas-yield', label: 'Real-Time Biogas Yield Optimization', icon: '📈' },
    { id: 'organic-waste-feedstock', label: 'Organic Waste Feedstock Analysis Tools', icon: '🗑️' },
    { id: 'biogas-storage-distribution', label: 'Biogas Storage and Distribution Automation', icon: '📦' },
    { id: 'remote-sensing-biogas', label: 'Remote Sensing for Biogas Plant Efficiency', icon: '🛰️' },
    { id: 'predictive-maintenance-biogas', label: 'Predictive Maintenance for Biogas Equipment', icon: '🛠️' },
    { id: 'digital-biogas-flow', label: 'Digital Biogas Flow Control Systems', icon: '💧' },
    { id: 'biogas-plant-performance', label: 'Biogas Plant Performance Analytics', icon: '📊' },
    { id: 'waste-to-energy-monitoring', label: 'Waste-to-Energy Conversion Monitoring', icon: '🔥' },
    { id: 'smart-methane-production', label: 'Smart Methane Production Control', icon: '⛽' },
    { id: 'feedstock-preprocessing', label: 'Feedstock Preprocessing Automation', icon: '⚙️' },
    { id: 'automated-biogas-purification', label: 'Automated Biogas Purification Systems', icon: '🧪' },
    { id: 'real-time-gas-composition', label: 'Real-Time Gas Composition Monitoring', icon: '📊' },
    { id: 'intelligent-biogas-environmental', label: 'Intelligent Biogas Plant Environmental Control', icon: '🌍' },
    { id: 'biogas-quality-optimization', label: 'Biogas Quality Optimization Tools', icon: '📈' },
    { id: 'waste-management-supply-chain', label: 'Waste Management and Feedstock Supply Chain Systems', icon: '📦' },
    { id: 'digital-tracking-biogas', label: 'Digital Tracking of Biogas Production from Waste', icon: '📡' },
    { id: 'biogas-facility-safety', label: 'Biogas Facility Safety Monitoring Systems', icon: '⚠️' },
    { id: 'energy-consumption-optimization', label: 'Energy Consumption Optimization in Biogas Plants', icon: '⚡' },
    { id: 'predictive-modeling-biogas', label: 'Predictive Modeling for Biogas Production', icon: '🔮' },
    { id: 'biogas-energy-efficiency', label: 'Biogas Energy Efficiency Analytics', icon: '📊' },
    { id: 'integrated-waste-to-energy', label: 'Integrated Waste-to-Energy Solutions', icon: '🔥' },
    { id: 'biogas-production-simulation', label: 'Biogas Production Simulation Software', icon: '🖥️' },
    { id: 'remote-monitoring-biogas', label: 'Remote Monitoring of Biogas Plant Equipment', icon: '🛰️' },
    { id: 'smart-biogas-scheduling', label: 'Smart Biogas Plant Scheduling Systems', icon: '📅' },
    { id: 'automated-organic-waste', label: 'Automated Organic Waste Sorting for Biogas', icon: '🗑️' },
    { id: 'digital-compliance-biogas', label: 'Digital Compliance Management for Biogas Plants', icon: '📝' },
    { id: 'real-time-biogas-pipeline', label: 'Real-Time Biogas Pipeline Monitoring', icon: '📡' },
    { id: 'smart-heat-recovery', label: 'Smart Heat Recovery Systems for Biogas Plants', icon: '🔥' },
    { id: 'biogas-energy-demand', label: 'Biogas Energy Demand Forecasting', icon: '🔮' },
    { id: 'iot-biogas-equipment', label: 'IoT-Enabled Biogas Equipment Management', icon: '📡' },
    { id: 'carbon-footprint-monitoring', label: 'Carbon Footprint Monitoring in Biogas Production', icon: '🌍' },
    { id: 'distributed-biogas-generation', label: 'Distributed Biogas Generation Systems', icon: '⚡' },
    { id: 'biogas-byproduct-management', label: 'Biogas Byproduct Management Software', icon: '📦' },
    { id: 'automated-biogas-market', label: 'Automated Biogas Market Price Monitoring', icon: '💹' },
    { id: 'data-driven-feedstock', label: 'Data-Driven Feedstock Quality Assessment', icon: '📊' },
    { id: 'biogas-renewable-integration', label: 'Biogas Plant Integration with Renewable Energy Grids', icon: '🔌' },
    { id: 'optimized-anaerobic-digestion', label: 'Optimized Anaerobic Digestion Control Systems', icon: '⚙️' },
    { id: 'biogas-automation-sustainability', label: 'Biogas Plant Automation for Efficiency and Sustainability', icon: '🌱' }
  ];
// ... existing code ...
      // ... existing code ...
case 'cattle-ranching':
  return [
    { id: 'smart-herd-management', label: 'Smart Herd Management Systems', icon: '📊' },
    { id: 'real-time-cattle-tracking', label: 'Real-Time Cattle Tracking and Monitoring', icon: '📡' },
    { id: 'automated-feed-rationing', label: 'Automated Feed Rationing Systems', icon: '🍽️' },
    { id: 'livestock-health-monitoring', label: 'Livestock Health Monitoring Platforms', icon: '🩺' },
    { id: 'digital-cattle-identification', label: 'Digital Cattle Identification Solutions', icon: '🆔' },
    { id: 'precision-grazing-management', label: 'Precision Grazing Management Systems', icon: '🌾' },
    { id: 'remote-cattle-fencing', label: 'Remote Cattle Fencing Solutions', icon: '🚧' },
    { id: 'predictive-weight-gain', label: 'Predictive Weight Gain Modeling', icon: '📏' },
    { id: 'automated-cattle-breeding', label: 'Automated Cattle Breeding Programs', icon: '🧬' },
    { id: 'livestock-performance-analytics', label: 'Livestock Performance Analytics', icon: '📈' },
    { id: 'digital-cattle-marketplaces', label: 'Digital Cattle Marketplaces', icon: '🛒' },
    { id: 'herd-health-treatment', label: 'Herd Health and Treatment Scheduling', icon: '📅' },
    { id: 'smart-watering-cattle', label: 'Smart Watering Systems for Cattle', icon: '💧' },
    { id: 'livestock-welfare-monitoring', label: 'Livestock Welfare Monitoring Tools', icon: '🐄' },
    { id: 'real-time-disease-detection', label: 'Real-Time Disease Detection and Alerts', icon: '⚠️' },
    { id: 'cattle-behavior-analysis', label: 'Cattle Behavior Analysis Systems', icon: '📊' },
    { id: 'environmental-impact-ranching', label: 'Environmental Impact Monitoring for Ranches', icon: '🌍' },
    { id: 'automated-cattle-sorting', label: 'Automated Cattle Sorting Systems', icon: '🤖' },
    { id: 'livestock-traceability', label: 'Livestock Traceability Platforms', icon: '📡' },
    { id: 'digital-cattle-auction', label: 'Digital Cattle Auction Systems', icon: '💰' },
    { id: 'precision-cattle-breeding', label: 'Precision Cattle Breeding Solutions', icon: '🧬' },
    { id: 'livestock-genetic-optimization', label: 'Livestock Genetic Optimization Software', icon: '🧬' },
    { id: 'smart-cattle-ranch-equipment', label: 'Smart Cattle Ranch Equipment Control', icon: '⚙️' },
    { id: 'remote-veterinary-consultations', label: 'Remote Veterinary Consultations', icon: '🖥️' },
    { id: 'livestock-immunization-tracking', label: 'Livestock Immunization Tracking', icon: '💉' },
    { id: 'mobile-cattle-management', label: 'Mobile Cattle Management Applications', icon: '📱' },
    { id: 'digital-ranch-resource', label: 'Digital Ranch Resource Management', icon: '📊' },
    { id: 'autonomous-cattle-herding', label: 'Autonomous Cattle Herding Systems', icon: '🤖' },
    { id: 'livestock-supply-chain', label: 'Livestock Supply Chain Optimization', icon: '📦' },
    { id: 'cattle-feed-quality', label: 'Cattle Feed Quality Monitoring', icon: '🌾' },
    { id: 'automated-cattle-weight', label: 'Automated Cattle Weight Scales', icon: '📏' },
    { id: 'virtual-ranch-planning', label: 'Virtual Ranch Planning Tools', icon: '🖥️' },
    { id: 'real-time-feed-intake', label: 'Real-Time Feed Intake Monitoring', icon: '🍽️' },
    { id: 'gps-herd-navigation', label: 'GPS-Enabled Herd Navigation Systems', icon: '📍' },
    { id: 'cattle-risk-management', label: 'Cattle Risk Management Solutions', icon: '⚠️' },
    { id: 'ranch-environmental-monitoring', label: 'Ranch Environmental Condition Monitoring', icon: '🌍' },
    { id: 'automated-calf-care', label: 'Automated Calf Care and Tracking', icon: '🐄' },
    { id: 'cattle-health-risk', label: 'Cattle Health Risk Assessment Software', icon: '🩺' },
    { id: 'smart-pasture-management', label: 'Smart Pasture Management Systems', icon: '🌾' },
    { id: 'digital-livestock-insurance', label: 'Digital Livestock Insurance Solutions', icon: '📝' }
  ];

  // ... existing code ...
case 'cereal-grain-farming':
  return [
    { id: 'precision-seeding-systems', label: 'Precision Seeding Systems', icon: '🌱' },
    { id: 'smart-irrigation-grain', label: 'Smart Irrigation Management for Grain Crops', icon: '🚿' },
    { id: 'automated-grain-harvesting', label: 'Automated Grain Harvesting Systems', icon: '🌾' },
    { id: 'crop-yield-prediction', label: 'Crop Yield Prediction Models', icon: '🔮' },
    { id: 'real-time-soil-monitoring', label: 'Real-Time Soil Monitoring for Grains', icon: '🌱' },
    { id: 'digital-grain-marketplaces', label: 'Digital Grain Marketplaces', icon: '🛒' },
    { id: 'remote-sensing-crop-health', label: 'Remote Sensing for Crop Health', icon: '🛰️' },
    { id: 'digital-fertilizer-nutrient', label: 'Digital Fertilizer and Nutrient Management', icon: '🧪' },
    { id: 'grain-quality-monitoring', label: 'Grain Quality Monitoring Tools', icon: '📊' },
    { id: 'smart-grain-sorting', label: 'Smart Grain Sorting and Packaging', icon: '📦' },
    { id: 'automated-crop-protection', label: 'Automated Crop Protection Systems', icon: '🛡️' },
    { id: 'smart-fertilization-grains', label: 'Smart Fertilization Techniques for Grains', icon: '🧪' },
    { id: 'real-time-pest-detection', label: 'Real-Time Pest and Disease Detection', icon: '🐛' },
    { id: 'crop-rotation-optimization', label: 'Crop Rotation Optimization Software', icon: '🔄' },
    { id: 'data-driven-water-management', label: 'Data-Driven Water Management for Grains', icon: '💧' },
    { id: 'harvest-scheduling-automation', label: 'Harvest Scheduling Automation', icon: '📅' },
    { id: 'digital-grain-storage', label: 'Digital Grain Storage Management', icon: '📦' },
    { id: 'precision-weed-control', label: 'Precision Weed Control in Grain Fields', icon: '🌿' },
    { id: 'weather-forecasting-grain', label: 'Weather Forecasting for Grain Farming', icon: '🌦️' },
    { id: 'field-mapping-analysis', label: 'Field Mapping and Analysis Tools', icon: '🗺️' },
    { id: 'predictive-maintenance-grain', label: 'Predictive Maintenance for Grain Farming Equipment', icon: '🛠️' },
    { id: 'soil-fertility-ph', label: 'Soil Fertility and pH Control Systems', icon: '🌱' },
    { id: 'drone-field-surveillance', label: 'Drone-Assisted Field Surveillance', icon: '🚁' },
    { id: 'grain-yield-mapping', label: 'Grain Yield Mapping and Analysis', icon: '🗺️' },
    { id: 'automated-crop-monitoring', label: 'Automated Crop Monitoring Systems', icon: '📡' },
    { id: 'smart-harvest-timing', label: 'Smart Harvest Timing Tools', icon: '⏱️' },
    { id: 'grain-supply-chain', label: 'Grain Supply Chain Optimization', icon: '📦' },
    { id: 'livestock-grain-integration', label: 'Livestock and Grain Farm Integration Software', icon: '🐄' },
    { id: 'remote-field-equipment', label: 'Remote Field Equipment Monitoring', icon: '🛰️' },
    { id: 'grain-storage-optimization', label: 'Grain Storage Optimization Solutions', icon: '📦' },
    { id: 'soil-erosion-monitoring', label: 'Soil Erosion Monitoring Tools for Grain Fields', icon: '🌱' },
    { id: 'digital-equipment-fleet', label: 'Digital Equipment Fleet Management for Grains', icon: '📊' },
    { id: 'integrated-crop-management', label: 'Integrated Crop Management Software', icon: '📊' },
    { id: 'real-time-grain-moisture', label: 'Real-Time Grain Moisture Content Monitoring', icon: '💧' },
    { id: 'data-driven-grain-pricing', label: 'Data-Driven Grain Pricing and Trading Platforms', icon: '💹' },
    { id: 'automated-irrigation-scheduling', label: 'Automated Irrigation Scheduling for Grains', icon: '🚿' },
    { id: 'grain-production-analytics', label: 'Grain Production Analytics and Insights', icon: '📊' },
    { id: 'real-time-crop-growth', label: 'Real-Time Crop Growth Analytics', icon: '🌱' },
    { id: 'sustainable-grain-farming', label: 'Sustainable Farming Practices for Grain Production', icon: '🌍' },
    { id: 'grain-export-import', label: 'Grain Export and Import Tracking Systems', icon: '🌍' }
  ];
// ... existing code ...
// ... existing code ...
case 'crop-protection':
  return [
    { id: 'automated-pest-detection', label: 'Automated Pest Detection Systems', icon: '🐛' },
    { id: 'precision-spraying', label: 'Precision Spraying Technologies', icon: '💦' },
    { id: 'digital-weed-management', label: 'Digital Weed Management Solutions', icon: '🌿' },
    { id: 'smart-pest-control', label: 'Smart Pest Control Systems', icon: '🛡️' },
    { id: 'crop-disease-monitoring', label: 'Crop Disease Monitoring Platforms', icon: '🦠' },
    { id: 'remote-sensing-pest', label: 'Remote Sensing for Pest Infestation', icon: '🛰️' },
    { id: 'crop-protection-scheduling', label: 'Crop Protection Scheduling Software', icon: '📅' },
    { id: 'real-time-pest-mapping', label: 'Real-Time Pest Activity Mapping', icon: '🗺️' },
    { id: 'integrated-pest-management', label: 'Integrated Pest Management Solutions', icon: '📊' },
    { id: 'pest-resistance-monitoring', label: 'Pest Resistance Monitoring Tools', icon: '⚠️' },
    { id: 'automated-disease-detection', label: 'Automated Disease Detection and Alerts', icon: '🦠' },
    { id: 'crop-protection-risk', label: 'Crop Protection Risk Assessment Software', icon: '⚠️' },
    { id: 'precision-herbicide', label: 'Precision Herbicide Application Systems', icon: '🌿' },
    { id: 'drone-assisted-pest', label: 'Drone-Assisted Pest Control', icon: '🚁' },
    { id: 'data-driven-pest-forecasting', label: 'Data-Driven Pest Forecasting Models', icon: '🔮' },
    { id: 'smart-fungicide', label: 'Smart Fungicide Application Systems', icon: '🦠' },
    { id: 'biocontrol-integration', label: 'Biocontrol Integration for Pest Management', icon: '🐞' },
    { id: 'real-time-pest-performance', label: 'Real-Time Pest Control Performance Tracking', icon: '📊' },
    { id: 'digital-weed-control', label: 'Digital Weed Control Management', icon: '🌿' },
    { id: 'automated-fertilizer-pesticide', label: 'Automated Fertilizer and Pesticide Blending Systems', icon: '🧪' },
    { id: 'crop-pest-behavior', label: 'Crop Pest Behavior Analysis Tools', icon: '📊' },
    { id: 'soil-borne-pest-detection', label: 'Soil-Borne Pest Detection Systems', icon: '🌱' },
    { id: 'environmental-impact-crop', label: 'Environmental Impact Monitoring for Crop Protection', icon: '🌍' },
    { id: 'digital-chemical-application', label: 'Digital Chemical Application Tracking', icon: '🧪' },
    { id: 'crop-protection-compliance', label: 'Crop Protection Compliance Management', icon: '📝' },
    { id: 'smart-pest-equipment', label: 'Smart Pest Control Equipment Scheduling', icon: '📅' },
    { id: 'remote-crop-protection', label: 'Remote Crop Protection Monitoring', icon: '🛰️' },
    { id: 'predictive-pest-disease', label: 'Predictive Pest and Disease Risk Models', icon: '🔮' },
    { id: 'field-mapping-crop', label: 'Field Mapping for Crop Protection Applications', icon: '🗺️' },
    { id: 'integrated-crop-irrigation', label: 'Integrated Crop Protection and Irrigation Systems', icon: '🚿' },
    { id: 'automated-pest-reporting', label: 'Automated Pest and Disease Reporting Systems', icon: '📊' },
    { id: 'customizable-crop-protection', label: 'Customizable Crop Protection Plans', icon: '📝' },
    { id: 'digital-surveillance-pest', label: 'Digital Surveillance for Pest Control', icon: '📡' },
    { id: 'climate-sensitive-crop', label: 'Climate-Sensitive Crop Protection Technologies', icon: '🌦️' },
    { id: 'data-driven-pest-optimization', label: 'Data-Driven Pest Control Optimization', icon: '📊' },
    { id: 'chemical-residue-monitoring', label: 'Chemical Residue Monitoring and Tracking', icon: '🧪' },
    { id: 'mobile-pest-control', label: 'Mobile Pest Control Apps', icon: '📱' },
    { id: 'biodegradable-pest-control', label: 'Biodegradable Pest Control Solutions', icon: '🌿' },
    { id: 'pest-detection-organic', label: 'Pest Detection for Organic Farming Systems', icon: '🌱' },
    { id: 'automated-pest-reporting-analytics', label: 'Automated Pest Control Reporting and Analytics', icon: '📊' }
  ];
// ... existing code ...
// ... existing code ...
case 'crop-production':
  return [
    { id: 'precision-seeding-systems', label: 'Precision Seeding Systems', icon: '🌱' },
    { id: 'automated-crop-monitoring', label: 'Automated Crop Monitoring', icon: '📡' },
    { id: 'smart-fertilizer-application', label: 'Smart Fertilizer Application', icon: '🧪' },
    { id: 'crop-yield-prediction', label: 'Crop Yield Prediction Tools', icon: '🔮' },
    { id: 'digital-irrigation-management', label: 'Digital Irrigation Management', icon: '🚿' },
    { id: 'real-time-crop-health', label: 'Real-Time Crop Health Monitoring', icon: '🌱' },
    { id: 'soil-moisture-monitoring', label: 'Soil Moisture Monitoring and Control', icon: '💧' },
    { id: 'automated-harvest-scheduling', label: 'Automated Harvest Scheduling', icon: '📅' },
    { id: 'remote-sensing-crop-growth', label: 'Remote Sensing for Crop Growth', icon: '🛰️' },
    { id: 'integrated-crop-management', label: 'Integrated Crop Management Systems', icon: '📊' },
    { id: 'field-mapping-analytics', label: 'Field Mapping and Analytics', icon: '🗺️' },
    { id: 'crop-disease-detection', label: 'Crop Disease Detection and Management', icon: '🦠' },
    { id: 'smart-pest-control', label: 'Smart Pest and Insect Control Systems', icon: '🐛' },
    { id: 'precision-weed-control', label: 'Precision Weed Control Solutions', icon: '🌿' },
    { id: 'data-driven-crop-rotation', label: 'Data-Driven Crop Rotation Planning', icon: '🔄' },
    { id: 'real-time-soil-nutrient', label: 'Real-Time Soil Nutrient Monitoring', icon: '🌱' },
    { id: 'automated-greenhouse-climate', label: 'Automated Greenhouse Climate Control', icon: '🏡' },
    { id: 'crop-growth-simulation', label: 'Crop Growth Simulation Tools', icon: '🖥️' },
    { id: 'variable-rate-irrigation', label: 'Variable Rate Irrigation Systems', icon: '🚿' },
    { id: 'smart-crop-disease-forecasting', label: 'Smart Crop Disease Forecasting', icon: '🦠' },
    { id: 'automated-fertilizer-pesticide', label: 'Automated Fertilizer and Pesticide Blending', icon: '🧪' },
    { id: 'remote-irrigation-fertilization', label: 'Remote Irrigation and Fertilization Monitoring', icon: '🛰️' },
    { id: 'farm-data-analytics', label: 'Farm Data Analytics for Crop Management', icon: '📊' },
    { id: 'autonomous-field-equipment', label: 'Autonomous Field Equipment for Crop Cultivation', icon: '🤖' },
    { id: 'smart-planting-depth', label: 'Smart Planting Depth Control Systems', icon: '🌱' },
    { id: 'precision-harvesting', label: 'Precision Harvesting Technology', icon: '🌾' },
    { id: 'crop-stress-detection', label: 'Crop Stress Detection Software', icon: '⚠️' },
    { id: 'digital-farm-dashboards', label: 'Digital Farm Management Dashboards', icon: '📊' },
    { id: 'smart-crop-protection', label: 'Smart Crop Protection Scheduling', icon: '🛡️' },
    { id: 'real-time-crop-stress', label: 'Real-Time Crop Stress and Water Management', icon: '💧' },
    { id: 'satellite-imaging-crop', label: 'Satellite Imaging for Crop Monitoring', icon: '🛰️' },
    { id: 'weather-based-crop-growth', label: 'Weather-Based Crop Growth Models', icon: '🌦️' },
    { id: 'automated-soil-testing', label: 'Automated Soil Testing and Analysis', icon: '🌱' },
    { id: 'remote-crop-yield-mapping', label: 'Remote Crop Yield Mapping', icon: '🗺️' },
    { id: 'crop-performance-forecasting', label: 'Crop Performance Forecasting', icon: '🔮' },
    { id: 'precision-plant-breeding', label: 'Precision Plant Breeding Software', icon: '🧬' },
    { id: 'digital-soil-health', label: 'Digital Soil Health Management Tools', icon: '🌱' },
    { id: 'real-time-data-collection', label: 'Real-Time Data Collection for Crop Production', icon: '📡' },
    { id: 'farm-to-market-traceability', label: 'Farm-to-Market Crop Traceability Systems', icon: '📦' },
    { id: 'digital-marketplaces-crop', label: 'Digital Marketplaces for Crop Distribution', icon: '🛒' }
  ];
// ... existing code ...
// ... existing code ...
case 'dairy-farming':
  return [
    { id: 'automated-milking-systems', label: 'Automated Milking Systems', icon: '🥛' },
    { id: 'real-time-milk-production', label: 'Real-Time Milk Production Monitoring', icon: '📊' },
    { id: 'smart-herd-management', label: 'Smart Herd Management Solutions', icon: '📊' },
    { id: 'digital-dairy-farm-management', label: 'Digital Dairy Farm Management Platforms', icon: '💻' },
    { id: 'precision-feed-rationing', label: 'Precision Feed Rationing Systems', icon: '🍽️' },
    { id: 'cow-health-monitoring', label: 'Cow Health Monitoring and Diagnostics', icon: '🩺' },
    { id: 'automated-breeding-systems', label: 'Automated Breeding Systems', icon: '🧬' },
    { id: 'cow-behavior-analysis', label: 'Dairy Cow Behavior Analysis', icon: '📊' },
    { id: 'milk-quality-monitoring', label: 'Milk Quality Monitoring Systems', icon: '🥛' },
    { id: 'automated-calf-management', label: 'Automated Calf Management Tools', icon: '🐄' },
    { id: 'digital-milk-testing', label: 'Digital Milk Testing and Analysis', icon: '🧪' },
    { id: 'remote-monitoring-dairy', label: 'Remote Monitoring of Dairy Barns', icon: '🛰️' },
    { id: 'real-time-milk-yield', label: 'Real-Time Milk Yield Optimization', icon: '📈' },
    { id: 'smart-cattle-identification', label: 'Smart Cattle Identification Systems', icon: '🆔' },
    { id: 'precision-nutrient-management', label: 'Precision Nutrient Management for Dairy Cows', icon: '🍎' },
    { id: 'herd-genetic-optimization', label: 'Herd Genetic Optimization Software', icon: '🧬' },
    { id: 'automated-cow-tracking', label: 'Automated Cow Tracking and Location Systems', icon: '📡' },
    { id: 'smart-cow-cooling', label: 'Smart Cow Cooling and Comfort Systems', icon: '❄️' },
    { id: 'farm-to-dairy-supply-chain', label: 'Farm-to-Dairy Supply Chain Management', icon: '📦' },
    { id: 'milk-production-forecasting', label: 'Milk Production Forecasting Tools', icon: '🔮' },
    { id: 'real-time-disease-detection', label: 'Real-Time Disease Detection and Alerts', icon: '⚠️' },
    { id: 'automatic-feeding-systems', label: 'Automatic Feeding Systems for Dairy Cows', icon: '🍽️' },
    { id: 'smart-watering-solutions', label: 'Smart Watering Solutions for Dairy Farms', icon: '💧' },
    { id: 'dairy-farm-performance', label: 'Dairy Farm Performance Analytics', icon: '📊' },
    { id: 'mobile-dairy-farm-management', label: 'Mobile Dairy Farm Management Applications', icon: '📱' },
    { id: 'digital-compliance-regulatory', label: 'Digital Compliance and Regulatory Tracking', icon: '📝' },
    { id: 'integrated-dairy-resource', label: 'Integrated Dairy Farm Resource Management', icon: '📊' },
    { id: 'milk-storage-distribution', label: 'Milk Storage and Distribution Automation', icon: '📦' },
    { id: 'cow-milking-time-optimization', label: 'Cow Milking Time Optimization', icon: '⏱️' },
    { id: 'remote-calf-health-monitoring', label: 'Remote Calf Health Monitoring', icon: '🐄' },
    { id: 'real-time-animal-welfare', label: 'Real-Time Animal Welfare Monitoring', icon: '🐄' },
    { id: 'dairy-waste-management', label: 'Dairy Waste Management Systems', icon: '🗑️' },
    { id: 'environmental-impact-dairy', label: 'Environmental Impact Monitoring for Dairy Farms', icon: '🌍' },
    { id: 'digital-training-support', label: 'Digital Training and Support Platforms for Dairy Farmers', icon: '🎓' },
    { id: 'automated-equipment-maintenance', label: 'Automated Equipment Maintenance for Dairy Farms', icon: '🛠️' },
    { id: 'real-time-data-sharing', label: 'Real-Time Data Sharing for Dairy Supply Chains', icon: '📡' },
    { id: 'integrated-milk-processing', label: 'Integrated Milk Processing Management', icon: '🥛' },
    { id: 'smart-milking-robot-fleet', label: 'Smart Milking Robot Fleet Management', icon: '🤖' },
    { id: 'digital-dairy-financial', label: 'Digital Dairy Farm Financial Management Tools', icon: '💳' },
    { id: 'blockchain-dairy-traceability', label: 'Blockchain for Dairy Product Traceability', icon: '🔗' }
  ];
// ... existing code ...
// ... existing code ...
case 'farm-management':
  return [
    { id: 'farm-data-management', label: 'Farm Data Management Platforms', icon: '📊' },
    { id: 'precision-crop-planning', label: 'Precision Crop Planning Systems', icon: '🌱' },
    { id: 'digital-farm-dashboards', label: 'Digital Farm Performance Dashboards', icon: '📊' },
    { id: 'automated-field-mapping', label: 'Automated Field Mapping Solutions', icon: '🗺️' },
    { id: 'smart-irrigation-scheduling', label: 'Smart Irrigation Scheduling Software', icon: '🚿' },
    { id: 'livestock-management', label: 'Livestock Management Systems', icon: '🐄' },
    { id: 'real-time-equipment-tracking', label: 'Real-Time Farm Equipment Tracking', icon: '📡' },
    { id: 'crop-yield-prediction', label: 'Crop Yield Prediction and Optimization', icon: '🔮' },
    { id: 'farm-to-table-supply-chain', label: 'Farm-to-Table Supply Chain Automation', icon: '📦' },
    { id: 'farm-equipment-fleet', label: 'Farm Equipment Fleet Management', icon: '🚜' },
    { id: 'remote-farm-monitoring', label: 'Remote Farm Monitoring Solutions', icon: '🛰️' },
    { id: 'field-weather-forecasting', label: 'Field Weather Forecasting Tools', icon: '🌦️' },
    { id: 'farm-financial-management', label: 'Farm Financial Management Platforms', icon: '💳' },
    { id: 'digital-farm-resource', label: 'Digital Farm Resource Allocation', icon: '📊' },
    { id: 'automated-pest-disease', label: 'Automated Pest and Disease Detection', icon: '🐛' },
    { id: 'soil-health-monitoring', label: 'Soil Health Monitoring Tools', icon: '🌱' },
    { id: 'digital-compliance-management', label: 'Digital Compliance Management for Farms', icon: '📝' },
    { id: 'crop-rotation-scheduling', label: 'Crop Rotation and Scheduling Software', icon: '🔄' },
    { id: 'smart-fertilizer-pesticide', label: 'Smart Fertilizer and Picide Application', icon: '🧪' },
    { id: 'automated-harvest-scheduling', label: 'Automated Harvest Scheduling and Tracking', icon: '📅' },
    { id: 'integrated-farm-risk', label: 'Integrated Farm Risk Management Solutions', icon: '⚠️' },
    { id: 'farm-labor-management', label: 'Farm Labor Management Platforms', icon: '👨‍🌾' },
    { id: 'smart-waste-management', label: 'Smart Waste Management Systems for Farms', icon: '🗑️' },
    { id: 'precision-land-management', label: 'Precision Land Management Software', icon: '🌍' },
    { id: 'remote-veterinary-monitoring', label: 'Remote Veterinary Monitoring for Livestock', icon: '🩺' },
    { id: 'real-time-market-price', label: 'Real-Time Market Price and Supply Forecasting', icon: '💹' },
    { id: 'sustainable-farming-practices', label: 'Sustainable Farming Practices Management', icon: '🌍' },
    { id: 'farm-equipment-maintenance', label: 'Farm Equipment Maintenance Scheduling', icon: '🛠️' },
    { id: 'farm-safety-monitoring', label: 'Farm Safety Monitoring Systems', icon: '⚠️' },
    { id: 'mobile-farm-management', label: 'Mobile Farm Management Apps', icon: '📱' },
    { id: 'digital-crop-protection', label: 'Digital Crop Protection and Disease Control', icon: '🛡️' },
    { id: 'real-time-data-driven', label: 'Real-Time Data-Driven Decision-Making Tools', icon: '📊' },
    { id: 'agricultural-e-commerce', label: 'Agricultural E-commerce Platforms', icon: '🛒' },
    { id: 'greenhouse-nursery-management', label: 'Greenhouse and Nursery Management Software', icon: '🏡' },
    { id: 'livestock-feeding-optimization', label: 'Livestock Feeding Optimization Tools', icon: '🍽️' },
    { id: 'smart-pasture-management', label: 'Smart Pasture Management Systems', icon: '🌾' },
    { id: 'automated-crop-growth', label: 'Automated Crop Growth Monitoring', icon: '🌱' },
    { id: 'digital-traceability', label: 'Digital Traceability for Crop and Livestock', icon: '📡' },
    { id: 'farm-inventory-management', label: 'Farm Inventory Management Systems', icon: '📦' },
    { id: 'smart-farm-reporting', label: 'Smart Farm Reporting and Analytics', icon: '📊' }
  ];
// ... existing code ...
// ... existing code ...
case 'farm-to-table':
  return [
    { id: 'direct-to-consumer-delivery', label: 'Direct-to-Consumer Food Delivery Platforms', icon: '🚚' },
    { id: 'smart-agricultural-e-commerce', label: 'Smart Agricultural E-Commerce Systems', icon: '🛒' },
    { id: 'farm-to-table-logistics', label: 'Farm-to-Table Logistics Optimization', icon: '📦' },
    { id: 'real-time-inventory-tracking', label: 'Real-Time Inventory Tracking for Fresh Produce', icon: '📊' },
    { id: 'digital-order-management', label: 'Digital Order Management for Farms', icon: '📝' },
    { id: 'farm-fresh-subscription', label: 'Farm Fresh Product Subscription Services', icon: '📦' },
    { id: 'blockchain-food-traceability', label: 'Blockchain for Food Traceability', icon: '🔗' },
    { id: 'automated-packaging', label: 'Automated Packaging Solutions for Fresh Foods', icon: '📦' },
    { id: 'farm-supply-chain-transparency', label: 'Farm Supply Chain Transparency Platforms', icon: '📡' },
    { id: 'farm-harvest-forecasting', label: 'Farm Harvest Forecasting Software', icon: '🔮' },
    { id: 'digital-farmers-market', label: 'Digital Farmers’ Market Platforms', icon: '🛒' },
    { id: 'food-waste-reduction', label: 'Food Waste Reduction Tools for Farmers', icon: '🗑️' },
    { id: 'direct-farm-sales', label: 'Direct Farm Sales and Payment Systems', icon: '💰' },
    { id: 'crop-livestock-demand', label: 'Crop and Livestock Demand Forecasting', icon: '🔮' },
    { id: 'farm-to-table-quality', label: 'Farm-to-Table Food Quality Control Tools', icon: '🥗' },
    { id: 'sustainable-packaging', label: 'Sustainable Packaging Solutions for Agricultural Products', icon: '🌿' },
    { id: 'farm-delivery-route', label: 'Farm Delivery Route Optimization', icon: '📍' },
    { id: 'real-time-food-safety', label: 'Real-Time Food Safety Compliance Monitoring', icon: '⚠️' },
    { id: 'farm-to-retail-distribution', label: 'Farm-to-Retail Product Distribution Systems', icon: '📦' },
    { id: 'local-food-sourcing', label: 'Local Food Sourcing Platforms', icon: '🌍' },
    { id: 'smart-delivery-management', label: 'Smart Delivery Management for Farm Products', icon: '🚚' },
    { id: 'mobile-farm-to-consumer', label: 'Mobile Applications for Farm-to-Consumer Sales', icon: '📱' },
    { id: 'food-production-consumption', label: 'Food Production and Consumption Analytics', icon: '📊' },
    { id: 'restaurant-farm-partnership', label: 'Restaurant and Farm Partnership Management', icon: '🍽️' },
    { id: 'digital-food-processing', label: 'Digital Food Processing and Packaging Integration', icon: '📦' },
    { id: 'local-farm-to-retailer', label: 'Local Farm-to-Retailer Ordering Systems', icon: '🛒' },
    { id: 'integrated-food-supply-chain', label: 'Integrated Food Supply Chain Management', icon: '📦' },
    { id: 'food-authentication', label: 'Food Authentication and Certification Platforms', icon: '📝' },
    { id: 'temperature-controlled-delivery', label: 'Temperature-Controlled Farm-to-Table Delivery', icon: '🌡️' },
    { id: 'farm-harvest-tracking', label: 'Farm Harvest Tracking and Delivery Integration', icon: '📦' },
    { id: 'farm-to-consumer-marketplaces', label: 'Farm-to-Consumer Marketplaces', icon: '🛒' },
    { id: 'automated-quality-assurance', label: 'Automated Quality Assurance for Farm Products', icon: '✅' },
    { id: 'digital-customer-engagement', label: 'Digital Customer Engagement for Farm Brands', icon: '📱' },
    { id: 'localized-food-sourcing', label: 'Localized Food Sourcing and Distribution Networks', icon: '🌍' },
    { id: 'real-time-product-availability', label: 'Real-Time Farm Product Availability Platforms', icon: '📡' },
    { id: 'direct-farm-shipping', label: 'Direct Farm Shipping and Handling Solutions', icon: '📦' },
    { id: 'fresh-produce-demand', label: 'Fresh Produce Demand Matching Systems', icon: '🍎' },
    { id: 'digital-supply-chain-optimization', label: 'Digital Supply Chain Optimization for Farm Goods', icon: '📦' },
    { id: 'smart-food-storage', label: 'Smart Food Storage and Distribution Solutions', icon: '📦' },
    { id: 'blockchain-secure-transactions', label: 'Blockchain for Secure Farm-to-Table Transactions', icon: '🔗' }
  ];
// ... existing code ...
// ... existing code ...
case 'fisheries':
  return [
    { id: 'smart-fish-feeding', label: 'Smart Fish Feeding Systems', icon: '🍽️' },
    { id: 'real-time-water-quality', label: 'Real-Time Water Quality Monitoring', icon: '💧' },
    { id: 'automated-fish-stock', label: 'Automated Fish Stock Management', icon: '🐟' },
    { id: 'fish-health-monitoring', label: 'Fish Health Monitoring Solutions', icon: '🩺' },
    { id: 'precision-aquaculture-nutrition', label: 'Precision Aquaculture Nutrition Systems', icon: '🍎' },
    { id: 'fish-disease-detection', label: 'Fish Disease Detection and Management', icon: '🦠' },
    { id: 'automated-fish-harvesting', label: 'Automated Fish Harvesting Systems', icon: '🎣' },
    { id: 'digital-fish-farming', label: 'Digital Fish Farming Platforms', icon: '💻' },
    { id: 'remote-sensing-fisheries', label: 'Remote Sensing for Fisheries Management', icon: '🛰️' },
    { id: 'fish-population-monitoring', label: 'Fish Population Monitoring Tools', icon: '📊' },
    { id: 'smart-fish-breeding', label: 'Smart Fish Breeding Systems', icon: '🧬' },
    { id: 'automated-water-filtration', label: 'Automated Water Filtration Systems', icon: '💧' },
    { id: 'data-driven-fish-growth', label: 'Data-Driven Fish Growth Tracking', icon: '📏' },
    { id: 'fish-farm-performance', label: 'Fish Farm Performance Analytics', icon: '📊' },
    { id: 'digital-fish-processing', label: 'Digital Fish Processing Solutions', icon: '🐟' },
    { id: 'automated-aquaculture-control', label: 'Automated Aquaculture Equipment Control', icon: '⚙️' },
    { id: 'real-time-fish-behavior', label: 'Real-Time Fish Behavior Monitoring', icon: '📊' },
    { id: 'predictive-fish-stocking', label: 'Predictive Models for Fish Stocking', icon: '🔮' },
    { id: 'fish-disease-risk', label: 'Fish Disease and Pathogen Risk Forecasting', icon: '🦠' },
    { id: 'fisheries-resource-management', label: 'Fisheries Resource Management Software', icon: '📊' },
    { id: 'digital-fish-harvesting', label: 'Digital Fish Harvesting Scheduling', icon: '📅' },
    { id: 'integrated-fish-farm', label: 'Integrated Fish Farm Management Systems', icon: '📊' },
    { id: 'fish-farm-waste-management', label: 'Fish Farm Waste Management Automation', icon: '🗑️' },
    { id: 'real-time-fish-habitat', label: 'Real-Time Monitoring of Fish Habitat Conditions', icon: '🌊' },
    { id: 'fish-sustainability-certification', label: 'Fish Sustainability Certification Platforms', icon: '📝' },
    { id: 'precision-fishery-resource', label: 'Precision Fishery Resource Allocation', icon: '🌊' },
    { id: 'smart-fish-feeding-efficiency', label: 'Smart Monitoring of Fish Feeding Efficiency', icon: '🍽️' },
    { id: 'blockchain-fisheries-traceability', label: 'Blockchain for Fisheries Traceability', icon: '🔗' },
    { id: 'fishery-supply-chain', label: 'Fishery Supply Chain Management', icon: '📦' },
    { id: 'automated-fish-sorting', label: 'Automated Fish Sorting Systems', icon: '🐟' },
    { id: 'remote-offshore-fisheries', label: 'Remote Monitoring for Offshore Fisheries', icon: '🛰️' },
    { id: 'fish-farm-environmental-impact', label: 'Fish Farm Environmental Impact Monitoring', icon: '🌍' },
    { id: 'smart-fish-farm-scheduling', label: 'Smart Fish Farm Scheduling and Optimization', icon: '📅' },
    { id: 'fish-health-record-keeping', label: 'Fish Health Record Keeping and Reporting', icon: '📝' },
    { id: 'digital-water-treatment', label: 'Digital Water Treatment Solutions', icon: '💧' },
    { id: 'fish-catching-distribution', label: 'Fish Catching and Distribution Optimization', icon: '🎣' },
    { id: 'aquaculture-wastewater-treatment', label: 'Aquaculture Wastewater Treatment Systems', icon: '💧' },
    { id: 'fisheries-risk-management', label: 'Fisheries Risk Management Software', icon: '⚠️' },
    { id: 'predictive-maintenance-aquaculture', label: 'Predictive Maintenance for Aquaculture Equipment', icon: '🛠️' },
    { id: 'smart-fish-stocking', label: 'Smart Fish Stocking and Release Systems', icon: '🐟' }
  ];
// ... existing code ...
// ... existing code ...
case 'floriculture':
  return [
    { id: 'smart-greenhouse-management', label: 'Smart Greenhouse Management Systems', icon: '🏡' },
    { id: 'automated-flower-planting', label: 'Automated Flower Planting Solutions', icon: '🌱' },
    { id: 'precision-irrigation-flowers', label: 'Precision Irrigation for Flower Cultivation', icon: '🚿' },
    { id: 'digital-flower-health', label: 'Digital Flower Health Monitoring', icon: '🌸' },
    { id: 'climate-control-greenhouses', label: 'Climate Control and Monitoring in Greenhouses', icon: '🌡️' },
    { id: 'automated-harvesting-flowers', label: 'Automated Harvesting Systems for Flowers', icon: '🌺' },
    { id: 'flower-growth-simulation', label: 'Flower Growth Simulation Tools', icon: '🖥️' },
    { id: 'digital-fertilization-flowers', label: 'Digital Fertilization and Nutrient Management', icon: '🧪' },
    { id: 'pest-disease-detection-flowers', label: 'Pest and Disease Detection in Flower Crops', icon: '🐛' },
    { id: 'smart-flower-sorting', label: 'Smart Flower Sorting and Packaging Systems', icon: '📦' },
    { id: 'real-time-flower-yield', label: 'Real-Time Flower Yield Forecasting', icon: '🔮' },
    { id: 'soil-health-moisture-flowers', label: 'Soil Health and Moisture Monitoring for Flowers', icon: '🌱' },
    { id: 'automated-flower-processing', label: 'Automated Flower Processing and Packaging', icon: '📦' },
    { id: 'remote-flower-farm-monitoring', label: 'Remote Flower Farm Monitoring', icon: '🛰️' },
    { id: 'flower-supply-chain', label: 'Flower Supply Chain Optimization', icon: '📦' },
    { id: 'digital-flower-inventory', label: 'Digital Flower Inventory Management', icon: '📊' },
    { id: 'crop-rotation-flowers', label: 'Crop Rotation and Planning for Flowers', icon: '🔄' },
    { id: 'smart-pollination-systems', label: 'Smart Pollination Systems', icon: '🐝' },
    { id: 'automated-flower-distribution', label: 'Automated Flower Distribution Scheduling', icon: '📅' },
    { id: 'smart-temperature-regulation', label: 'Smart Temperature Regulation for Flower Storage', icon: '🌡️' },
    { id: 'digital-traceability-flowers', label: 'Digital Traceability for Flower Products', icon: '📡' },
    { id: 'data-driven-flower-variety', label: 'Data-Driven Flower Variety Selection', icon: '📊' },
    { id: 'flower-delivery-route', label: 'Flower Delivery Route Optimization', icon: '📍' },
    { id: 'real-time-market-demand-flowers', label: 'Real-Time Market Demand Forecasting for Flowers', icon: '🔮' },
    { id: 'floral-waste-management', label: 'Floral Waste Management Solutions', icon: '🗑️' },
    { id: 'flower-breeding-genetic', label: 'Flower Breeding and Genetic Management Software', icon: '🧬' },
    { id: 'flower-packaging-optimization', label: 'Flower Packaging Optimization Systems', icon: '📦' },
    { id: 'environmental-impact-flowers', label: 'Environmental Impact Monitoring for Flower Farms', icon: '🌍' },
    { id: 'smart-led-lighting', label: 'Smart LED Lighting for Flower Growth', icon: '💡' },
    { id: 'automated-flower-pricing', label: 'Automated Flower Pricing and Market Integration', icon: '💰' },
    { id: 'customizable-flower-care', label: 'Customizable Flower Care Software', icon: '🌸' },
    { id: 'digital-floral-design', label: 'Digital Floral Design Tools', icon: '🖼️' },
    { id: 'remote-sensing-flower-farms', label: 'Remote Sensing for Flower Farm Conditions', icon: '🛰️' },
    { id: 'harvest-timing-flowers', label: 'Harvest Timing Optimization for Flowers', icon: '⏱️' },
    { id: 'blockchain-floral-traceability', label: 'Blockchain for Floral Product Traceability', icon: '🔗' },
    { id: 'real-time-flower-quality', label: 'Real-Time Flower Product Quality Monitoring', icon: '✅' },
    { id: 'farm-to-table-flower-distribution', label: 'Farm-to-Table Flower Distribution Platforms', icon: '📦' },
    { id: 'energy-efficiency-greenhouses', label: 'Energy Efficiency Optimization for Flower Greenhouses', icon: '⚡' },
    { id: 'smart-flower-varieties', label: 'Smart Flower Varieties Inventory', icon: '📊' },
    { id: 'digital-customer-engagement-flowers', label: 'Digital Customer Engagement for Flower Businesses', icon: '📱' }
  ];
// ... existing code ...
// ... existing code ...
case 'food-processing':
  return [
    { id: 'automated-food-sorting', label: 'Automated Food Sorting and Grading Systems', icon: '📦' },
    { id: 'real-time-food-quality', label: 'Real-Time Food Quality Control Systems', icon: '✅' },
    { id: 'precision-cooking', label: 'Precision Cooking and Heat Control', icon: '🍳' },
    { id: 'smart-food-packaging', label: 'Smart Food Packaging Solutions', icon: '📦' },
    { id: 'food-traceability-blockchain', label: 'Food Traceability and Blockchain Integration', icon: '🔗' },
    { id: 'digital-inventory-management', label: 'Digital Inventory Management for Food Products', icon: '📊' },
    { id: 'automated-food-production', label: 'Automated Food Production Line Management', icon: '🏭' },
    { id: 'predictive-maintenance-food', label: 'Predictive Maintenance for Food Processing Equipment', icon: '🛠️' },
    { id: 'digital-food-supply-chain', label: 'Digital Food Supply Chain Optimization', icon: '📦' },
    { id: 'smart-temperature-humidity', label: 'Smart Temperature and Humidity Control', icon: '🌡️' },
    { id: 'food-waste-reduction', label: 'Food Waste Reduction Solutions', icon: '🗑️' },
    { id: 'real-time-data-analytics', label: 'Real-Time Data Analytics for Food Processing', icon: '📊' },
    { id: 'automated-food-labeling', label: 'Automated Food Labeling Systems', icon: '🏷️' },
    { id: 'digital-waste-management', label: 'Digital Waste Management in Food Production', icon: '🗑️' },
    { id: 'smart-ingredients-sourcing', label: 'Smart Ingredients Sourcing Platforms', icon: '🍎' },
    { id: 'food-processing-efficiency', label: 'Food Processing Plant Efficiency Optimization', icon: '📈' },
    { id: 'real-time-packaging-monitoring', label: 'Real-Time Packaging Line Monitoring', icon: '📦' },
    { id: 'traceable-sustainable-sourcing', label: 'Traceable and Sustainable Sourcing Solutions', icon: '🌍' },
    { id: 'iot-food-processing', label: 'IoT-Based Food Processing Equipment', icon: '📡' },
    { id: 'mobile-food-processing', label: 'Mobile Food Processing Management Apps', icon: '📱' },
    { id: 'predictive-quality-control', label: 'Predictive Quality Control Systems', icon: '🔮' },
    { id: 'energy-management-food', label: 'Energy Management in Food Processing', icon: '⚡' },
    { id: 'digital-compliance-regulation', label: 'Digital Compliance and Regulation Tracking', icon: '📝' },
    { id: 'automated-food-preservation', label: 'Automated Food Preservation Technologies', icon: '❄️' },
    { id: 'food-safety-monitoring', label: 'Food Safety Monitoring Platforms', icon: '⚠️' },
    { id: 'smart-food-inventory', label: 'Smart Food Inventory Replenishment', icon: '📦' },
    { id: 'food-production-simulation', label: 'Food Production Simulation Software', icon: '🖥️' },
    { id: 'integrated-food-production', label: 'Integrated Food Production Management Systems', icon: '📊' },
    { id: 'digital-monitoring-machines', label: 'Digital Monitoring of Food Processing Machines', icon: '📡' },
    { id: 'supply-chain-transparency', label: 'Supply Chain Transparency for Processed Foods', icon: '📦' },
    { id: 'smart-production-scheduling', label: 'Smart Production Scheduling and Optimization', icon: '📅' },
    { id: 'automated-food-formulation', label: 'Automated Food Formulation and Recipe Systems', icon: '🍲' },
    { id: 'real-time-ingredient-monitoring', label: 'Real-Time Food Ingredient Monitoring', icon: '🍎' },
    { id: 'digital-demand-forecasting', label: 'Digital Demand Forecasting for Processed Foods', icon: '🔮' },
    { id: 'food-product-customization', label: 'Food Product Customization and Personalization Tools', icon: '🍽️' },
    { id: 'smart-wastewater-treatment', label: 'Smart Food Processing Wastewater Treatment', icon: '💧' },
    { id: 'automated-metal-detection', label: 'Automated Metal Detection in Food Processing', icon: '🔍' },
    { id: 'digital-batch-process-control', label: 'Digital Batch and Process Control Systems', icon: '⚙️' },
    { id: 'real-time-product-development', label: 'Real-Time Data-Driven Product Development', icon: '📊' },
    { id: 'remote-monitoring-food', label: 'Remote Monitoring of Food Processing Facilities', icon: '🛰️' }
  ];
// ... existing code ...
// ... existing code ...
case 'forest-products':
  return [
    { id: 'smart-forest-management', label: 'Smart Forest Management Systems', icon: '🌲' },
    { id: 'automated-timber-harvesting', label: 'Automated Timber Harvesting Systems', icon: '🪓' },
    { id: 'digital-forest-inventory', label: 'Digital Forest Inventory Management', icon: '📊' },
    { id: 'remote-sensing-forest-health', label: 'Remote Sensing for Forest Health Monitoring', icon: '🛰️' },
    { id: 'real-time-tree-growth', label: 'Real-Time Tree Growth Tracking', icon: '📏' },
    { id: 'precision-forestry-equipment', label: 'Precision Forestry Equipment', icon: '⚙️' },
    { id: 'automated-wood-sorting', label: 'Automated Wood Sorting and Grading', icon: '📦' },
    { id: 'forestry-supply-chain', label: 'Forestry Supply Chain Optimization', icon: '📦' },
    { id: 'digital-timber-tracking', label: 'Digital Timber Tracking and Traceability', icon: '📡' },
    { id: 'sustainable-forest-harvest', label: 'Sustainable Forest Harvest Planning', icon: '🌍' },
    { id: 'forest-fire-detection', label: 'Forest Fire Detection and Prevention Systems', icon: '🔥' },
    { id: 'smart-logging-scheduling', label: 'Smart Logging Equipment Scheduling', icon: '📅' },
    { id: 'real-time-carbon-footprint', label: 'Real-Time Forest Carbon Footprint Monitoring', icon: '🌍' },
    { id: 'forest-regeneration-monitoring', label: 'Forest Regeneration Monitoring Systems', icon: '🌱' },
    { id: 'deforestation-analytics', label: 'Deforestation and Land Use Change Analytics', icon: '📊' },
    { id: 'digital-timber-marketplaces', label: 'Digital Timber Marketplaces', icon: '🛒' },
    { id: 'automated-wood-processing', label: 'Automated Wood Processing and Packaging', icon: '📦' },
    { id: 'forest-soil-health', label: 'Forest Soil Health Monitoring', icon: '🌱' },
    { id: 'precision-planting-trees', label: 'Precision Planting Systems for Trees', icon: '🌱' },
    { id: 'digital-forest-disease', label: 'Digital Forest Disease Prediction Tools', icon: '🦠' },
    { id: 'forest-data-analytics', label: 'Forest Data Analytics Platforms', icon: '📊' },
    { id: 'remote-monitoring-forest', label: 'Remote Monitoring of Forest Conditions', icon: '🛰️' },
    { id: 'smart-forest-irrigation', label: 'Smart Forest Irrigation Solutions', icon: '🚿' },
    { id: 'timberland-investment', label: 'Timberland Investment Management Software', icon: '💰' },
    { id: 'automated-forest-inventory', label: 'Automated Forest Inventory and Reporting', icon: '📊' },
    { id: 'smart-forest-restoration', label: 'Smart Forest Restoration Technologies', icon: '🌱' },
    { id: 'forest-risk-assessment', label: 'Forest Risk Assessment and Management Systems', icon: '⚠️' },
    { id: 'environmental-impact-timber', label: 'Environmental Impact Monitoring for Timber Harvesting', icon: '🌍' },
    { id: 'sustainable-timber-sourcing', label: 'Sustainable Timber Sourcing Platforms', icon: '🌲' },
    { id: 'digital-forest-certification', label: 'Digital Forest Certification Systems', icon: '📝' },
    { id: 'smart-waste-management-forest', label: 'Smart Waste Management in Forest Products', icon: '🗑️' },
    { id: 'forest-asset-management', label: 'Forest Asset Management Software', icon: '📊' },
    { id: 'tree-disease-detection', label: 'Tree Disease Detection and Management Systems', icon: '🦠' },
    { id: 'timber-price-forecasting', label: 'Timber Price Forecasting and Optimization', icon: '💹' },
    { id: 'real-time-forest-fire', label: 'Real-Time Forest Fire Risk Mapping', icon: '🔥' },
    { id: 'digital-forest-monitoring', label: 'Digital Forest Monitoring with Drones', icon: '🚁' },
    { id: 'biomass-harvesting', label: 'Biomass Harvesting and Management Systems', icon: '🌱' },
    { id: 'forest-supply-chain-automation', label: 'Forest and Wood Product Supply Chain Automation', icon: '📦' },
    { id: 'remote-sensing-tree-species', label: 'Remote Sensing for Tree Species Identification', icon: '🛰️' },
    { id: 'forest-health-biodiversity', label: 'Forest Health and Biodiversity Monitoring Tools', icon: '🌍' }
  ];
// ... existing code ...
// ... existing code ...
case 'fruit-farming':
  return [
    { id: 'precision-fruit-harvesting', label: 'Precision Fruit Harvesting Systems', icon: '🍎' },
    { id: 'smart-irrigation-fruit', label: 'Smart Irrigation Management for Fruit Crops', icon: '🚿' },
    { id: 'digital-fruit-health', label: 'Digital Fruit Health Monitoring', icon: '🩺' },
    { id: 'automated-fruit-sorting', label: 'Automated Fruit Sorting and Grading Systems', icon: '📦' },
    { id: 'real-time-crop-yield', label: 'Real-Time Crop Yield Prediction', icon: '🔮' },
    { id: 'remote-sensing-fruit', label: 'Remote Sensing for Fruit Tree Health', icon: '🛰️' },
    { id: 'automated-fruit-packaging', label: 'Automated Fruit Packaging Solutions', icon: '📦' },
    { id: 'precision-fertilization-fruit', label: 'Precision Fertilization for Fruit Trees', icon: '🧪' },
    { id: 'crop-stress-detection', label: 'Crop Stress Detection in Fruit Farming', icon: '⚠️' },
    { id: 'real-time-soil-moisture', label: 'Real-Time Soil Moisture and Nutrient Monitoring', icon: '🌱' },
    { id: 'automated-pest-disease-fruit', label: 'Automated Pest and Disease Control for Fruit Crops', icon: '🐛' },
    { id: 'mobile-fruit-farm-management', label: 'Mobile Fruit Farm Management Apps', icon: '📱' },
    { id: 'smart-fruit-pruning', label: 'Smart Fruit Tree Pruning Systems', icon: '✂️' },
    { id: 'digital-farm-to-market', label: 'Digital Farm-to-Market Distribution Platforms', icon: '📦' },
    { id: 'integrated-orchard-management', label: 'Integrated Orchard Management Systems', icon: '📊' },
    { id: 'fruit-harvest-timing', label: 'Fruit Harvest Timing Optimization Tools', icon: '⏱️' },
    { id: 'data-driven-disease-forecasting', label: 'Data-Driven Fruit Crop Disease Forecasting', icon: '🦠' },
    { id: 'real-temperature-humidity', label: 'Real-Time Temperature and Humidity Control for Fruit Storage', icon: '🌡️' },
    { id: 'digital-fruit-growth', label: 'Digital Fruit Growth Tracking Systems', icon: '📏' },
    { id: 'fruit-supply-chain', label: 'Fruit Supply Chain Optimization Platforms', icon: '📦' },
    { id: 'automated-fruit-pollination', label: 'Automated Fruit Pollination Systems', icon: '🐝' },
    { id: 'digital-water-usage', label: 'Digital Water Usage Monitoring for Fruit Crops', icon: '💧' },
    { id: 'fruit-ripeness-detection', label: 'Fruit Ripeness Detection and Harvesting Optimization', icon: '🍎' },
    { id: 'smart-orchard-mapping', label: 'Smart Orchard Mapping and Analytics', icon: '🗺️' },
    { id: 'fruit-tree-disease-risk', label: 'Fruit Tree Disease Risk Management Tools', icon: '🦠' },
    { id: 'harvest-packing-efficiency', label: 'Harvest and Packing Efficiency Optimization', icon: '📦' },
    { id: 'autonomous-fruit-picking', label: 'Autonomous Fruit Picking Robots', icon: '🤖' },
    { id: 'real-time-fruit-quality', label: 'Real-Time Fruit Quality Monitoring', icon: '✅' },
    { id: 'precision-tree-spacing', label: 'Precision Tree Spacing and Growth Monitoring', icon: '🌱' },
    { id: 'automated-fertilizer-fruit', label: 'Automated Fertilizer Application for Fruit Crops', icon: '🧪' },
    { id: 'data-driven-fruit-planning', label: 'Data-Driven Fruit Crop Planning and Forecasting', icon: '📊' },
    { id: 'integrated-fruit-resource', label: 'Integrated Fruit Farm Resource Management', icon: '📊' },
    { id: 'mobile-orchard-monitoring', label: 'Mobile Orchard Monitoring and Reporting', icon: '📱' },
    { id: 'digital-pest-infestation', label: 'Digital Pest Infestation Mapping for Orchards', icon: '🐛' },
    { id: 'automated-weed-control-fruit', label: 'Automated Weed Control for Fruit Crops', icon: '🌿' },
    { id: 'real-time-fruit-storage', label: 'Real-Time Fruit Storage Condition Monitoring', icon: '🌡️' },
    { id: 'environmental-impact-fruit', label: 'Environmental Impact Monitoring for Fruit Orchards', icon: '🌍' },
    { id: 'smart-fruit-disease', label: 'Smart Fruit Tree Disease Management', icon: '🦠' },
    { id: 'orchard-climate-control', label: 'Orchard Climate Control Systems', icon: '🌡️' },
    { id: 'digital-fruit-market-pricing', label: 'Digital Fruit Market Pricing and Analytics', icon: '💹' }
  ];
// ... existing code ...
// ... existing code ...
case 'greenhouse-nursery':
  return [
    { id: 'smart-greenhouse-climate', label: 'Smart Greenhouse Climate Control Systems', icon: '🌡️' },
    { id: 'automated-irrigation-greenhouse', label: 'Automated Irrigation Management for Greenhouses', icon: '🚿' },
    { id: 'precision-planting-nursery', label: 'Precision Planting Systems for Nurseries', icon: '🌱' },
    { id: 'digital-crop-monitoring', label: 'Digital Crop Monitoring in Greenhouses', icon: '📡' },
    { id: 'automated-fertilization-greenhouse', label: 'Automated Fertilization Systems for Greenhouse Plants', icon: '🧪' },
    { id: 'greenhouse-energy-efficiency', label: 'Greenhouse Energy Efficiency Optimization', icon: '⚡' },
    { id: 'real-time-soil-moisture-greenhouse', label: 'Real-Time Soil Moisture Monitoring in Greenhouses', icon: '💧' },
    { id: 'smart-nursery-inventory', label: 'Smart Nursery Inventory Management', icon: '📊' },
    { id: 'automated-plant-sorting', label: 'Automated Plant Sorting and Grading Systems', icon: '📦' },
    { id: 'remote-sensing-greenhouse', label: 'Remote Sensing for Greenhouse Crop Health', icon: '🛰️' },
    { id: 'greenhouse-lighting-control', label: 'Greenhouse Lighting Control and Optimization', icon: '💡' },
    { id: 'digital-greenhouse-environmental', label: 'Digital Greenhouse Environmental Monitoring', icon: '🌍' },
    { id: 'automated-pest-disease-greenhouse', label: 'Automated Greenhouse Pest and Disease Control', icon: '🐛' },
    { id: 'real-time-temperature-regulation', label: 'Real-Time Temperature Regulation in Greenhouses', icon: '🌡️' },
    { id: 'crop-growth-prediction', label: 'Crop Growth Prediction for Greenhouses', icon: '🔮' },
    { id: 'automated-plant-pruning', label: 'Automated Plant Pruning and Care Systems', icon: '✂️' },
    { id: 'smart-greenhouse-watering', label: 'Smart Greenhouse Watering Systems', icon: '🚿' },
    { id: 'greenhouse-production-scheduling', label: 'Greenhouse Production Scheduling Software', icon: '📅' },
    { id: 'smart-fertilizer-greenhouse', label: 'Smart Fertilizer Application for Greenhouse Crops', icon: '🧪' },
    { id: 'nursery-growth-simulation', label: 'Nursery Plant Growth Simulation Tools', icon: '🖥️' },
    { id: 'digital-crop-yield-forecasting', label: 'Digital Crop Yield Forecasting for Greenhouses', icon: '🔮' },
    { id: 'automated-plant-harvesting', label: 'Automated Plant Harvesting Systems for Nurseries', icon: '🌱' },
    { id: 'real-time-plant-stress', label: 'Real-Time Plant Stress Detection', icon: '⚠️' },
    { id: 'greenhouse-microclimate', label: 'Greenhouse Microclimate Control', icon: '🌡️' },
    { id: 'integrated-nursery-supply-chain', label: 'Integrated Nursery Supply Chain Management', icon: '📦' },
    { id: 'smart-nursery-resource', label: 'Smart Nursery Resource Allocation Tools', icon: '📊' },
    { id: 'automated-pest-detection-greenhouse', label: 'Automated Pest Detection in Greenhouses', icon: '🐛' },
    { id: 'real-time-data-analytics-greenhouse', label: 'Real-Time Data Analytics for Greenhouse Operations', icon: '📊' },
    { id: 'greenhouse-water-usage', label: 'Greenhouse Water Usage Optimization', icon: '💧' },
    { id: 'automated-seedling-monitoring', label: 'Automated Seedling Monitoring and Tracking', icon: '🌱' },
    { id: 'predictive-growth-modeling', label: 'Predictive Growth Modeling for Greenhouse Plants', icon: '🔮' },
    { id: 'integrated-plant-disease', label: 'Integrated Plant Disease Management Systems', icon: '🦠' },
    { id: 'smart-greenhouse-ventilation', label: 'Smart Greenhouse Ventilation Systems', icon: '🌬️' },
    { id: 'digital-nursery-order', label: 'Digital Nursery Customer Order Management', icon: '📝' },
    { id: 'automated-plant-packaging', label: 'Automated Plant Packaging and Distribution', icon: '📦' },
    { id: 'greenhouse-waste-management', label: 'Greenhouse Waste and Resource Management', icon: '🗑️' },
    { id: 'remote-monitoring-greenhouse', label: 'Remote Monitoring of Greenhouse Conditions', icon: '🛰️' },
    { id: 'smart-temperature-humidity-nursery', label: 'Smart Temperature and Humidity Sensors for Nurseries', icon: '🌡️' },
    { id: 'digital-greenhouse-lighting', label: 'Digital Greenhouse Lighting and CO2 Regulation', icon: '💡' },
    { id: 'automated-greenhouse-reporting', label: 'Automated Greenhouse Climate Data Reporting', icon: '📊' }
  ];
// ... existing code ...
// ... existing code ...
case 'herb-farming':
  return [
    { id: 'smart-herb-irrigation', label: 'Smart Herb Irrigation Systems', icon: '🚿' },
    { id: 'automated-herb-harvesting', label: 'Automated Herb Harvesting Systems', icon: '🌿' },
    { id: 'precision-fertilization-herb', label: 'Precision Fertilization for Herb Crops', icon: '🧪' },
    { id: 'real-time-herb-health', label: 'Real-Time Herb Crop Health Monitoring', icon: '🩺' },
    { id: 'digital-herb-farm-management', label: 'Digital Herb Farm Management Platforms', icon: '💻' },
    { id: 'automated-herb-sorting', label: 'Automated Herb Sorting and Packaging', icon: '📦' },
    { id: 'herb-growth-tracking', label: 'Herb Growth Tracking and Analysis Tools', icon: '📏' },
    { id: 'soil-moisture-nutrient-herb', label: 'Soil Moisture and Nutrient Monitoring for Herbs', icon: '🌱' },
    { id: 'herb-pest-disease-detection', label: 'Herb Pest and Disease Detection Systems', icon: '🐛' },
    { id: 'remote-sensing-herb', label: 'Remote Sensing for Herb Plant Health', icon: '🛰️' },
    { id: 'smart-herb-pruning', label: 'Smart Herb Pruning Systems', icon: '✂️' },
    { id: 'digital-climate-control-herb', label: 'Digital Climate Control for Herb Greenhouses', icon: '🌡️' },
    { id: 'herb-plant-stress-detection', label: 'Herb Plant Stress Detection Tools', icon: '⚠️' },
    { id: 'real-time-herb-quality', label: 'Real-Time Herb Quality Monitoring', icon: '✅' },
    { id: 'automated-herb-planting', label: 'Automated Herb Planting Systems', icon: '🌱' },
    { id: 'herb-production-forecasting', label: 'Herb Production Forecasting Tools', icon: '🔮' },
    { id: 'data-driven-herb-variety', label: 'Data-Driven Herb Variety Selection', icon: '📊' },
    { id: 'smart-greenhouse-herb', label: 'Smart Greenhouse Management for Herb Farming', icon: '🏡' },
    { id: 'real-time-herb-yield', label: 'Real-Time Herb Yield Estimation', icon: '📈' },
    { id: 'herb-harvest-timing', label: 'Herb Harvest Timing Optimization', icon: '⏱️' },
    { id: 'automated-weed-control-herb', label: 'Automated Weed Control in Herb Crops', icon: '🌿' },
    { id: 'herb-traceability-supply-chain', label: 'Herb Traceability and Supply Chain Management', icon: '📦' },
    { id: 'remote-herb-field-monitoring', label: 'Remote Herb Field Monitoring', icon: '🛰️' },
    { id: 'smart-fertilizer-herb', label: 'Smart Fertilizer Application for Herb Crops', icon: '🧪' },
    { id: 'herb-farm-resource-management', label: 'Herb Farm Resource Management Systems', icon: '📊' },
    { id: 'digital-herb-packaging', label: 'Digital Herb Packaging and Distribution Systems', icon: '📦' },
    { id: 'herb-crop-rotation', label: 'Herb Crop Rotation and Planning Software', icon: '🔄' },
    { id: 'environmental-impact-herb', label: 'Environmental Impact Monitoring for Herb Farms', icon: '🌍' },
    { id: 'herb-demand-forecasting', label: 'Herb Demand Forecasting Platforms', icon: '🔮' },
    { id: 'integrated-herb-farming', label: 'Integrated Herb Farming and Marketing Tools', icon: '📊' },
    { id: 'herb-nutrient-optimization', label: 'Herb Nutrient Optimization Systems', icon: '🍎' },
    { id: 'smart-herb-plant-care', label: 'Smart Herb Plant Care and Maintenance Solutions', icon: '🌿' },
    { id: 'precision-herb-monitoring', label: 'Precision Herb Crop Monitoring and Control', icon: '📡' },
    { id: 'automated-seedling-monitoring-herb', label: 'Automated Seedling Monitoring for Herbs', icon: '🌱' },
    { id: 'data-driven-herb-pest-control', label: 'Data-Driven Herb Pest Control Strategies', icon: '🐛' },
    { id: 'herb-farm-equipment-maintenance', label: 'Herb Farm Equipment Maintenance Scheduling', icon: '🛠️' },
    { id: 'herb-waste-reduction', label: 'Herb Waste Reduction and Recycling Solutions', icon: '🗑️' },
    { id: 'herb-processing-automation', label: 'Herb Processing Automation Systems', icon: '⚙️' },
    { id: 'real-time-herb-storage', label: 'Real-Time Herb Storage and Temperature Control', icon: '🌡️' },
    { id: 'customizable-herb-reporting', label: 'Customizable Herb Farm Reporting and Analytics', icon: '📊' }
  ];
// ... existing code ...
// ... existing code ...
      case 'hydroponics':
        return [
    { id: 'smart-hydroponic-monitoring', label: 'Smart Hydroponic System Monitoring', icon: '📡' },
    { id: 'automated-nutrient-management', label: 'Automated Nutrient Solution Management', icon: '🧪' },
    { id: 'precision-irrigation-hydroponics', label: 'Precision Irrigation Control for Hydroponics', icon: '🚿' },
    { id: 'digital-hydroponic-management', label: 'Digital Hydroponic Farm Management Platforms', icon: '💻' },
    { id: 'real-time-water-quality', label: 'Real-Time Water Quality Monitoring in Hydroponics', icon: '💧' },
    { id: 'automated-plant-growth', label: 'Automated Plant Growth Tracking', icon: '📏' },
    { id: 'hydroponic-system-efficiency', label: 'Hydroponic System Efficiency Optimization', icon: '📈' },
    { id: 'climate-control-hydroponics', label: 'Climate Control Systems for Hydroponics', icon: '🌡️' },
    { id: 'automated-plant-sorting', label: 'Automated Plant Sorting and Grading for Nurseries', icon: '📦' },
    { id: 'hydroponic-nutrient-delivery', label: 'Hydroponic Nutrient Delivery Automation', icon: '🧪' },
    { id: 'remote-hydroponic-monitoring', label: 'Remote Hydroponic Farm Monitoring', icon: '🛰️' },
    { id: 'smart-lighting-hydroponics', label: 'Smart Lighting Systems for Hydroponics', icon: '💡' },
    { id: 'digital-environmental-monitoring', label: 'Digital Environmental Monitoring for Nurseries', icon: '🌍' },
    { id: 'automated-pest-disease-hydroponics', label: 'Automated Pest and Disease Detection in Hydroponics', icon: '🐛' },
    { id: 'greenhouse-climate-optimization', label: 'Greenhouse Climate Optimization for Hydroponics', icon: '🌡️' },
    { id: 'automated-plant-care-hydroponics', label: 'Automated Plant Care Systems for Hydroponic Farms', icon: '🌱' },
    { id: 'hydroponic-water-recycling', label: 'Hydroponic Water Recycling and Efficiency Tools', icon: '💧' },
    { id: 'digital-nursery-inventory', label: 'Digital Nursery Inventory and Resource Management', icon: '📊' },
    { id: 'smart-fertilizer-hydroponics', label: 'Smart Fertilizer Application for Hydroponic Systems', icon: '🧪' },
    { id: 'real-time-plant-health', label: 'Real-Time Plant Health Monitoring in Hydroponics', icon: '🩺' },
    { id: 'automated-seedling-monitoring', label: 'Automated Seedling Monitoring and Tracking', icon: '🌱' },
    { id: 'precision-crop-management', label: 'Precision Crop Management for Nursery Plants', icon: '🌱' },
    { id: 'hydroponic-plant-stress', label: 'Hydroponic Plant Stress Detection', icon: '⚠️' },
    { id: 'data-driven-yield-prediction', label: 'Data-Driven Crop Yield Prediction for Hydroponics', icon: '🔮' },
    { id: 'smart-hydroponic-harvesting', label: 'Smart Hydroponic Harvesting Systems', icon: '🌱' },
    { id: 'digital-nursery-scheduling', label: 'Digital Nursery Plant Scheduling and Planning', icon: '📅' },
    { id: 'automated-nursery-shipping', label: 'Automated Nursery Plant Shipping and Distribution', icon: '📦' },
    { id: 'real-time-hydroponic-production', label: 'Real-Time Hydroponic Farm Production Reporting', icon: '📊' },
    { id: 'remote-hydroponic-diagnostics', label: 'Remote Hydroponic System Diagnostics', icon: '🛠️' },
    { id: 'nutrient-optimization-hydroponics', label: 'Nutrient Optimization for Hydroponic Crops', icon: '🍎' },
    { id: 'smart-nursery-climate', label: 'Smart Nursery Climate Control Systems', icon: '🌡️' },
    { id: 'hydroponic-system-performance', label: 'Hydroponic System Performance Analytics', icon: '📊' },
    { id: 'automated-plant-pollination', label: 'Automated Plant Pollination Systems for Hydroponics', icon: '🐝' },
    { id: 'hydroponic-supply-chain', label: 'Hydroponic Supply Chain and Distribution Automation', icon: '📦' },
    { id: 'data-driven-pest-disease', label: 'Data-Driven Pest and Disease Management for Hydroponics', icon: '🐛' },
    { id: 'smart-crop-rotation', label: 'Smart Crop Rotation Planning for Nurseries', icon: '🔄' },
    { id: 'mobile-hydroponic-management', label: 'Mobile Hydroponic Farm Management Apps', icon: '📱' },
    { id: 'greenhouse-waste-management', label: 'Greenhouse Waste Management for Hydroponics', icon: '🗑️' },
    { id: 'automated-hydroponic-harvest', label: 'Automated Hydroponic Harvest Timing Optimization', icon: '⏱️' },
    { id: 'real-time-hydroponic-growth', label: 'Real-Time Hydroponic Crop Growth Simulation', icon: '🖥️' }
  ];
// ... existing code ...
// ... existing code ...
case 'indoor-farming':
        return [
    { id: 'smart-indoor-climate', label: 'Smart Indoor Climate Control Systems', icon: '🌡️' },
    { id: 'automated-hydroponic-aeroponic', label: 'Automated Hydroponic and Aeroponic Systems', icon: '💧' },
    { id: 'indoor-farm-lighting', label: 'Indoor Farm Lighting Optimization', icon: '💡' },
    { id: 'precision-irrigation-indoor', label: 'Precision Irrigation for Indoor Crops', icon: '🚿' },
    { id: 'real-time-crop-health', label: 'Real-Time Indoor Crop Health Monitoring', icon: '🩺' },
    { id: 'automated-nutrient-delivery', label: 'Automated Nutrient Delivery Systems for Indoor Farms', icon: '🧪' },
    { id: 'indoor-farm-resource', label: 'Indoor Farm Resource Management Platforms', icon: '📊' },
    { id: 'digital-water-quality', label: 'Digital Water Quality and pH Control', icon: '💧' },
    { id: 'smart-environmental-sensors', label: 'Smart Environmental Sensors for Indoor Farming', icon: '📡' },
    { id: 'data-driven-farm-performance', label: 'Data-Driven Indoor Farm Performance Analytics', icon: '📊' },
    { id: 'indoor-crop-stress', label: 'Indoor Crop Stress Detection Systems', icon: '⚠️' },
    { id: 'automated-harvesting-indoor', label: 'Automated Harvesting Systems for Indoor Crops', icon: '🌱' },
    { id: 'real-time-plant-growth', label: 'Real-Time Indoor Plant Growth Monitoring', icon: '📏' },
    { id: 'smart-vertical-farming', label: 'Smart Vertical Farming Solutions', icon: '🏢' },
    { id: 'indoor-farm-temperature', label: 'Indoor Farm Temperature Regulation Automation', icon: '🌡️' },
    { id: 'indoor-farm-energy', label: 'Indoor Farm Energy Efficiency Optimization', icon: '⚡' },
    { id: 'integrated-pest-disease', label: 'Integrated Pest and Disease Control for Indoor Farming', icon: '🐛' },
    { id: 'remote-monitoring-indoor', label: 'Remote Monitoring and Control for Indoor Farms', icon: '🛰️' },
    { id: 'indoor-crop-yield', label: 'Indoor Crop Yield Prediction and Analysis', icon: '🔮' },
    { id: 'automated-plant-sorting', label: 'Automated Plant Sorting and Grading Systems', icon: '📦' },
    { id: 'digital-indoor-scheduling', label: 'Digital Indoor Farm Scheduling and Planning', icon: '📅' },
    { id: 'real-time-soil-nutrient', label: 'Real-Time Soil and Nutrient Monitoring in Indoor Farms', icon: '🌱' },
    { id: 'smart-fertilizer-indoor', label: 'Smart Fertilizer Application for Indoor Crops', icon: '🧪' },
    { id: 'indoor-farm-equipment', label: 'Indoor Farming Equipment Maintenance Automation', icon: '🛠️' },
    { id: 'vertical-farm-design', label: 'Vertical Farm Design and Optimization Tools', icon: '🏢' },
    { id: 'indoor-lighting-irrigation', label: 'Indoor Farm Lighting and Irrigation Integration', icon: '💡' },
    { id: 'crop-rotation-indoor', label: 'Crop Rotation Planning for Indoor Farms', icon: '🔄' },
    { id: 'indoor-farm-waste', label: 'Indoor Farming Waste and Resource Management', icon: '🗑️' },
    { id: 'customizable-indoor-reporting', label: 'Customizable Indoor Farm Reporting Tools', icon: '📊' },
    { id: 'automated-plant-care', label: 'Automated Plant Care and Pruning Systems', icon: '✂️' },
    { id: 'smart-environmental-control', label: 'Smart Environmental Control for Indoor Greenhouses', icon: '🌡️' },
    { id: 'indoor-farm-automation', label: 'Indoor Farm Automation for Crop Care and Growth', icon: '🤖' },
    { id: 'data-driven-crop-selection', label: 'Data-Driven Indoor Farm Crop Selection', icon: '📊' },
    { id: 'real-time-indoor-watering', label: 'Real-Time Indoor Farm Watering Systems', icon: '🚿' },
    { id: 'indoor-farm-security', label: 'Indoor Farm Security and Surveillance Systems', icon: '📹' },
    { id: 'automated-packaging-indoor', label: 'Automated Packaging and Distribution for Indoor Produce', icon: '📦' },
    { id: 'nutrient-management-indoor', label: 'Nutrient Management and Customization for Indoor Farming', icon: '🍎' },
    { id: 'real-time-monitoring-indoor', label: 'Real-Time Monitoring for Indoor Farm Conditions', icon: '📡' },
    { id: 'indoor-air-quality', label: 'Indoor Farm Air Quality and Humidity Control', icon: '🌬️' },
    { id: 'digital-indoor-supply-chain', label: 'Digital Indoor Farm Supply Chain Integration', icon: '📦' }
  ];
// ... existing code ...
// ... existing code ...
case 'irrigation-systems':
        return [
    { id: 'smart-irrigation-scheduling', label: 'Smart Irrigation Scheduling Systems', icon: '📅' },
    { id: 'real-time-soil-moisture', label: 'Real-Time Soil Moisture Monitoring', icon: '💧' },
    { id: 'automated-drip-irrigation', label: 'Automated Drip Irrigation Systems', icon: '🚿' },
    { id: 'precision-irrigation-control', label: 'Precision Irrigation Control Solutions', icon: '🎯' },
    { id: 'weather-based-irrigation', label: 'Weather-Based Irrigation Management', icon: '🌦️' },
    { id: 'irrigation-water-flow', label: 'Irrigation Water Flow Optimization', icon: '💧' },
    { id: 'digital-irrigation-performance', label: 'Digital Irrigation System Performance Monitoring', icon: '📊' },
    { id: 'automated-irrigation-leak', label: 'Automated Irrigation Leak Detection', icon: '⚠️' },
    { id: 'remote-irrigation-management', label: 'Remote Irrigation Management Platforms', icon: '🛰️' },
    { id: 'crop-specific-irrigation', label: 'Crop-Specific Irrigation Scheduling Tools', icon: '🌱' },
    { id: 'irrigation-energy-efficiency', label: 'Irrigation System Energy Efficiency Solutions', icon: '⚡' },
    { id: 'real-time-evapotranspiration', label: 'Real-Time Evapotranspiration Monitoring', icon: '🌡️' },
    { id: 'cloud-based-irrigation', label: 'Cloud-Based Irrigation Control Platforms', icon: '☁️' },
    { id: 'smart-sprinkler-systems', label: 'Smart Sprinkler Systems for Agriculture', icon: '🚿' },
    { id: 'automated-water-distribution', label: 'Automated Water Distribution for Large-Scale Farms', icon: '📦' },
    { id: 'integrated-irrigation-fertilization', label: 'Integrated Irrigation and Fertilization Systems', icon: '🧪' },
    { id: 'irrigation-water-efficiency', label: 'Irrigation Water Use Efficiency Analytics', icon: '📊' },
    { id: 'soil-salinity-monitoring', label: 'Soil Salinity Monitoring for Irrigation Systems', icon: '🌱' },
    { id: 'automated-watering-nutrient', label: 'Automated Watering and Nutrient Delivery Systems', icon: '💧' },
    { id: 'digital-irrigation-pipeline', label: 'Digital Irrigation Pipeline Monitoring', icon: '📡' },
    { id: 'smart-irrigation-pump', label: 'Smart Irrigation Pump Control Solutions', icon: '🚰' },
    { id: 'irrigation-maintenance-scheduling', label: 'Irrigation System Maintenance Scheduling Tools', icon: '🛠️' },
    { id: 'remote-sensing-irrigation', label: 'Remote Sensing for Irrigation Needs Assessment', icon: '🛰️' },
    { id: 'irrigation-data-analytics', label: 'Irrigation System Data Analytics and Reporting', icon: '📊' },
    { id: 'data-driven-irrigation-optimization', label: 'Data-Driven Irrigation Optimization for Crop Yield', icon: '📈' },
    { id: 'sensor-integrated-irrigation', label: 'Sensor-Integrated Irrigation Management Tools', icon: '📡' },
    { id: 'irrigation-flow-monitoring', label: 'Irrigation Flow Monitoring and Control Systems', icon: '💧' },
    { id: 'real-time-water-quality', label: 'Real-Time Water Quality Monitoring for Irrigation', icon: '💧' },
    { id: 'predictive-irrigation-demand', label: 'Predictive Irrigation Demand Forecasting', icon: '🔮' },
    { id: 'irrigation-weather-integration', label: 'Irrigation System Integration with Weather Forecasts', icon: '🌦️' },
    { id: 'smart-irrigation-controllers', label: 'Smart Irrigation Controllers with Mobile Integration', icon: '📱' },
    { id: 'sustainable-water-management', label: 'Sustainable Water Management Systems for Irrigation', icon: '🌍' },
    { id: 'iot-irrigation-monitoring', label: 'IoT-Enabled Irrigation System Monitoring', icon: '📡' },
    { id: 'irrigation-automation-greenhouses', label: 'Irrigation Automation for Greenhouses and Nurseries', icon: '🏡' },
    { id: 'irrigation-calibration', label: 'Irrigation System Calibration and Performance Optimization', icon: '⚙️' },
    { id: 'automated-water-conservation', label: 'Automated Water Conservation Techniques for Irrigation', icon: '💧' },
    { id: 'gps-irrigation-mapping', label: 'GPS-Based Irrigation System Mapping', icon: '📍' },
    { id: 'automated-irrigation-zone', label: 'Automated Irrigation Zone Control Systems', icon: '🚿' },
    { id: 'smart-watering-urban', label: 'Smart Watering Solutions for Urban Farming', icon: '🏙️' },
    { id: 'irrigation-failure-detection', label: 'Irrigation System Failure Detection and Alerts', icon: '⚠️' }
  ];
// ... existing code ...
// ... existing code ...
case 'livestock-farming':
  return [
    { id: 'automated-livestock-health', label: 'Automated Livestock Health Monitoring', icon: '🩺' },
    { id: 'smart-herd-management', label: 'Smart Herd Management Systems', icon: '🐄' },
    { id: 'precision-livestock-feeding', label: 'Precision Livestock Feeding Solutions', icon: '🍴' },
    { id: 'real-time-livestock-tracking', label: 'Real-Time Livestock Tracking and Identification', icon: '📍' },
    { id: 'digital-livestock-performance', label: 'Digital Livestock Performance Analytics', icon: '📊' },
    { id: 'automated-milking-systems', label: 'Automated Milking Systems', icon: '🥛' },
    { id: 'livestock-growth-prediction', label: 'Livestock Growth Prediction Tools', icon: '📈' },
    { id: 'precision-breeding-genetics', label: 'Precision Breeding and Genetics Management', icon: '🧬' },
    { id: 'mobile-livestock-management', label: 'Mobile Livestock Management Applications', icon: '📱' },
    { id: 'smart-watering-livestock', label: 'Smart Watering Systems for Livestock', icon: '💧' },
    { id: 'remote-sensing-livestock', label: 'Remote Sensing for Livestock Health', icon: '🛰️' },
    { id: 'automated-animal-sorting', label: 'Automated Animal Sorting Systems', icon: '🚜' },
    { id: 'livestock-disease-detection', label: 'Livestock Disease Detection and Reporting', icon: '⚠️' },
    { id: 'smart-livestock-feed', label: 'Smart Livestock Feed Scheduling', icon: '🍽️' },
    { id: 'real-time-animal-activity', label: 'Real-Time Animal Activity Monitoring', icon: '🏃‍♂️' },
    { id: 'livestock-waste-management', label: 'Livestock Waste Management Solutions', icon: '🗑️' },
    { id: 'digital-livestock-traceability', label: 'Digital Livestock Traceability Platforms', icon: '📡' },
    { id: 'predictive-livestock-disease', label: 'Predictive Livestock Disease Risk Management', icon: '🔮' },
    { id: 'animal-comfort-welfare', label: 'Animal Comfort and Welfare Monitoring', icon: '🐾' },
    { id: 'livestock-immunization', label: 'Livestock Immunization and Health Record Tracking', icon: '💉' },
    { id: 'automated-livestock-weight', label: 'Automated Livestock Weight Monitoring', icon: '⚖️' },
    { id: 'smart-grazing-management', label: 'Smart Grazing Management Systems', icon: '🌱' },
    { id: 'livestock-breeding-optimization', label: 'Livestock Breeding Optimization Software', icon: '🧬' },
    { id: 'automated-cattle-herding', label: 'Automated Cattle Herding Solutions', icon: '🐮' },
    { id: 'precision-livestock-feedlot', label: 'Precision Livestock Management for Feedlot Operations', icon: '🏭' },
    { id: 'real-time-livestock-market', label: 'Real-Time Livestock Market Pricing and Sales Platforms', icon: '💲' },
    { id: 'livestock-risk-management', label: 'Livestock Risk Management and Insurance Automation', icon: '📑' },
    { id: 'automated-livestock-alerts', label: 'Automated Livestock Health and Treatment Alerts', icon: '🚨' },
    { id: 'digital-livestock-welfare', label: 'Digital Livestock Welfare Assessments', icon: '📋' },
    { id: 'livestock-environmental-impact', label: 'Livestock Environmental Impact Monitoring', icon: '🌍' },
    { id: 'data-driven-livestock-reproduction', label: 'Data-Driven Livestock Reproductive Management', icon: '📊' },
    { id: 'mobile-livestock-health', label: 'Mobile Livestock Health Diagnostic Tools', icon: '📱' },
    { id: 'real-time-livestock-behavior', label: 'Real-Time Monitoring of Livestock Behavior', icon: '👀' },
    { id: 'remote-veterinary-consultation', label: 'Remote Veterinary Consultation Platforms', icon: '👨‍⚕️' },
    { id: 'farm-to-table-livestock', label: 'Farm-to-Table Livestock Traceability Systems', icon: '🏡' },
    { id: 'livestock-supply-chain', label: 'Livestock Supply Chain Automation', icon: '📦' },
    { id: 'livestock-feed-nutrition', label: 'Livestock Feed and Nutrition Optimization', icon: '🍽️' },
    { id: 'livestock-performance-reporting', label: 'Livestock Performance and Efficiency Reporting', icon: '📈' },
    { id: 'smart-herd-dairy', label: 'Smart Herd Management for Dairy Farms', icon: '🐄' },
    { id: 'automated-animal-transportation', label: 'Automated Animal Transportation Scheduling', icon: '🚚' }
  ];
// ... existing code ...
// ... existing code ...
case 'livestock-feed-production':
  return [
    { id: 'automated-feed-formulation', label: 'Automated Feed Formulation Systems', icon: '🧪' },
    { id: 'precision-feed-rationing', label: 'Precision Feed Rationing Software', icon: '📊' },
    { id: 'real-time-feed-quality', label: 'Real-Time Feed Ingredient Quality Monitoring', icon: '🔍' },
    { id: 'digital-feed-scheduling', label: 'Digital Feed Production Scheduling', icon: '📅' },
    { id: 'smart-feed-mixing', label: 'Smart Feed Mixing and Blending Systems', icon: '🥄' },
    { id: 'feed-quality-control', label: 'Feed Quality Control and Testing Automation', icon: '✅' },
    { id: 'automated-feed-manufacturing', label: 'Automated Feed Manufacturing and Processing', icon: '🏭' },
    { id: 'digital-feed-supply-chain', label: 'Digital Supply Chain Management for Feed Production', icon: '📦' },
    { id: 'feedstock-inventory', label: 'Feedstock Supply and Inventory Management', icon: '📦' },
    { id: 'real-time-feed-manufacturing', label: 'Real-Time Monitoring of Feed Manufacturing Processes', icon: '👀' },
    { id: 'data-driven-feed-efficiency', label: 'Data-Driven Feed Efficiency Analytics', icon: '📈' },
    { id: 'automated-feed-pelletizing', label: 'Automated Feed Pelletizing Systems', icon: '⚙️' },
    { id: 'precision-additive-mixing', label: 'Precision Additive Mixing for Livestock Feed', icon: '🧪' },
    { id: 'feed-ingredient-traceability', label: 'Feed Ingredient Traceability Platforms', icon: '📡' },
    { id: 'smart-feed-storage', label: 'Smart Feed Storage and Handling Systems', icon: '🏚️' },
    { id: 'feed-waste-reduction', label: 'Livestock Feed Waste Reduction Solutions', icon: '🗑️' },
    { id: 'nutritional-optimization', label: 'Nutritional Optimization for Livestock Feed', icon: '🍽️' },
    { id: 'digital-feed-compliance', label: 'Digital Compliance and Regulation Tracking for Feed Production', icon: '📑' },
    { id: 'automated-feed-packaging', label: 'Automated Packaging and Distribution of Feed', icon: '📦' },
    { id: 'predictive-feed-maintenance', label: 'Predictive Maintenance for Feed Production Equipment', icon: '🛠️' },
    { id: 'real-time-feed-consumption', label: 'Real-Time Feed Consumption Monitoring for Livestock', icon: '👀' },
    { id: 'feed-cost-optimization', label: 'Feed Cost Optimization Tools', icon: '💲' },
    { id: 'mobile-feed-production', label: 'Mobile Feed Production Management Apps', icon: '📱' },
    { id: 'remote-feed-plant', label: 'Remote Monitoring and Control of Feed Plants', icon: '🛰️' },
    { id: 'automated-feed-transport', label: 'Automated Feed Transport and Delivery Systems', icon: '🚚' },
    { id: 'digital-feed-performance', label: 'Digital Feed Performance Analytics', icon: '📊' },
    { id: 'customizable-feed-recipes', label: 'Customizable Livestock Feed Recipes', icon: '📝' },
    { id: 'feed-environmental-impact', label: 'Environmental Impact Monitoring in Feed Production', icon: '🌍' },
    { id: 'feed-ingredient-sourcing', label: 'Feed Ingredient Sourcing Automation', icon: '📦' },
    { id: 'real-time-feedstock-quality', label: 'Real-Time Feedstock Quality Assessment', icon: '🔍' },
    { id: 'feed-production-reporting', label: 'Feed Production Performance Reporting Systems', icon: '📈' },
    { id: 'smart-feed-equipment', label: 'Smart Feed Production Equipment Control', icon: '⚙️' },
    { id: 'nutrient-profiling', label: 'Nutrient Profiling for Livestock Feed', icon: '🍽️' },
    { id: 'digital-feed-inventory', label: 'Digital Inventory Management for Feed Ingredients', icon: '📦' },
    { id: 'farm-specific-feed', label: 'Farm-Specific Feed Ration Recommendations', icon: '🏡' },
    { id: 'feed-mill-efficiency', label: 'Feed Mill Efficiency Optimization Tools', icon: '⚙️' },
    { id: 'data-driven-feed-sustainability', label: 'Data-Driven Sustainability Practices for Feed Production', icon: '🌍' },
    { id: 'automated-feedstock-sorting', label: 'Automated Feedstock Sorting Systems', icon: '🚜' },
    { id: 'real-time-ingredient-procurement', label: 'Real-Time Ingredient Procurement and Cost Management', icon: '💲' },
    { id: 'smart-feed-distribution', label: 'Smart Feed Distribution Systems', icon: '📦' }
  ];
// ... existing code ...
// ... existing code ...
case 'meat-processing':
  return [
    { id: 'automated-meat-cutting', label: 'Automated Meat Cutting and Processing Systems', icon: '🔪' },
    { id: 'smart-meat-quality', label: 'Smart Meat Quality Control and Grading', icon: '✅' },
    { id: 'real-time-meat-inventory', label: 'Real-Time Meat Inventory Management', icon: '📦' },
    { id: 'digital-meat-traceability', label: 'Digital Traceability Systems for Meat Products', icon: '📡' },
    { id: 'meat-plant-efficiency', label: 'Meat Processing Plant Efficiency Optimization', icon: '⚙️' },
    { id: 'automated-meat-packaging', label: 'Automated Packaging Solutions for Meat Products', icon: '📦' },
    { id: 'precision-meat-portioning', label: 'Precision Meat Portioning and Weighing', icon: '⚖️' },
    { id: 'meat-equipment-maintenance', label: 'Meat Processing Equipment Maintenance Automation', icon: '🛠️' },
    { id: 'real-time-meat-storage', label: 'Real-Time Temperature and Humidity Monitoring in Meat Storage', icon: '🌡️' },
    { id: 'meat-labeling-barcode', label: 'Meat Product Labeling and Barcode Automation', icon: '🏷️' },
    { id: 'digital-meat-compliance', label: 'Digital Compliance Management for Meat Processing', icon: '📑' },
    { id: 'automated-meat-inspection', label: 'Automated Meat Inspection and Quality Testing', icon: '🔍' },
    { id: 'meat-supply-chain', label: 'Meat Supply Chain Optimization Systems', icon: '📦' },
    { id: 'predictive-meat-maintenance', label: 'Predictive Maintenance for Meat Processing Equipment', icon: '🛠️' },
    { id: 'real-time-meat-scheduling', label: 'Real-Time Meat Production Scheduling', icon: '📅' },
    { id: 'automated-meat-data', label: 'Automated Meat Processing Data Collection', icon: '📊' },
    { id: 'digital-meat-waste', label: 'Digital Waste Management Solutions in Meat Plants', icon: '🗑️' },
    { id: 'smart-meat-trimming', label: 'Smart Meat Trimming and Deboning Systems', icon: '🔪' },
    { id: 'meat-production-reporting', label: 'Meat Production and Processing Reporting Tools', icon: '📈' },
    { id: 'meat-inventory-forecasting', label: 'Inventory Forecasting and Management for Meat Plants', icon: '📦' },
    { id: 'data-driven-meat-safety', label: 'Data-Driven Meat Safety and Contamination Monitoring', icon: '⚠️' },
    { id: 'meat-traceability-platforms', label: 'Meat Product Traceability and Transparency Platforms', icon: '📡' },
    { id: 'real-time-meat-yield', label: 'Real-Time Analysis of Meat Yield and Efficiency', icon: '📊' },
    { id: 'automated-meat-distribution', label: 'Automated Packing and Distribution of Meat Products', icon: '🚚' },
    { id: 'smart-cold-storage', label: 'Smart Cold Storage Management for Meat Products', icon: '❄️' },
    { id: 'digital-meat-scheduling', label: 'Digital Employee Scheduling for Meat Processing Plants', icon: '📅' },
    { id: 'automated-meat-byproduct', label: 'Automated Meat Byproduct Management', icon: '🗑️' },
    { id: 'intelligent-meat-labeling', label: 'Intelligent Labeling and Barcoding for Meat Products', icon: '🏷️' },
    { id: 'remote-meat-monitoring', label: 'Remote Monitoring of Meat Processing Operations', icon: '🛰️' },
    { id: 'meat-waste-reduction', label: 'Waste Reduction and Recycling in Meat Plants', icon: '♻️' },
    { id: 'meat-product-customization', label: 'Meat Product Customization and Personalization Tools', icon: '🛠️' },
    { id: 'integrated-meat-processing', label: 'Integrated Meat Processing and Packaging Solutions', icon: '📦' },
    { id: 'energy-efficiency-meat', label: 'Energy Efficiency Monitoring for Meat Plants', icon: '⚡' },
    { id: 'digital-haccp', label: 'Digital Hazard Analysis and Critical Control Point (HACCP) Systems', icon: '📑' },
    { id: 'smart-meat-sorting', label: 'Smart Sorting and Classifying of Meat Products', icon: '🔍' },
    { id: 'real-time-meat-kpis', label: 'Real-Time Reporting for Meat Processing KPIs', icon: '📊' },
    { id: 'blockchain-meat-traceability', label: 'Blockchain for Meat Product Traceability', icon: '🔗' },
    { id: 'smart-meat-packaging', label: 'Smart Tracking of Meat Packaging Materials', icon: '📦' },
    { id: 'meat-plant-logistics', label: 'Meat Plant Supply Chain and Logistics Optimization', icon: '🚚' },
    { id: 'automated-meat-inventory', label: 'Automated Inventory Replenishment Systems for Meat Plants', icon: '📦' }
  ];
// ... existing code ...
// ... existing code ...
case 'mushroom-farming':
  return [
    { id: 'smart-mushroom-climate', label: 'Smart Mushroom Farm Climate Control', icon: '🌡️' },
    { id: 'automated-mushroom-harvesting', label: 'Automated Mushroom Harvesting Systems', icon: '🤖' },
    { id: 'digital-mushroom-growth', label: 'Digital Monitoring of Mushroom Growth', icon: '📊' },
    { id: 'real-time-mushroom-humidity', label: 'Real-Time Humidity and Temperature Control for Mushrooms', icon: '💧' },
    { id: 'automated-mushroom-sorting', label: 'Automated Mushroom Sorting and Grading Systems', icon: '🔍' },
    { id: 'precision-mushroom-irrigation', label: 'Precision Irrigation Systems for Mushroom Farms', icon: '🚿' },
    { id: 'data-driven-mushroom-yield', label: 'Data-Driven Mushroom Yield Prediction', icon: '📈' },
    { id: 'remote-mushroom-monitoring', label: 'Remote Monitoring of Mushroom Farm Conditions', icon: '🛰️' },
    { id: 'real-time-mushroom-disease', label: 'Real-Time Mushroom Disease Detection', icon: '⚠️' },
    { id: 'automated-mushroom-packaging', label: 'Automated Mushroom Packaging Solutions', icon: '📦' },
    { id: 'mushroom-environmental-impact', label: 'Mushroom Farm Environmental Impact Monitoring', icon: '🌍' },
    { id: 'smart-mushroom-nutrient', label: 'Smart Nutrient Delivery Systems for Mushrooms', icon: '🍽️' },
    { id: 'mushroom-stress-detection', label: 'Mushroom Crop Stress Detection Systems', icon: '⚠️' },
    { id: 'digital-mushroom-resource', label: 'Digital Mushroom Farm Resource Management', icon: '📊' },
    { id: 'automated-mushroom-spawn', label: 'Automated Mushroom Spawn Production', icon: '🧫' },
    { id: 'remote-sensing-mushroom', label: 'Remote Sensing for Mushroom Farm Performance', icon: '🛰️' },
    { id: 'automated-mushroom-waste', label: 'Automated Waste Management for Mushroom Farms', icon: '🗑️' },
    { id: 'mushroom-substrate-quality', label: 'Mushroom Substrate Quality Monitoring', icon: '🔍' },
    { id: 'digital-mushroom-traceability', label: 'Digital Farm-to-Market Traceability for Mushrooms', icon: '📡' },
    { id: 'smart-mushroom-disease', label: 'Smart Mushroom Disease Prevention Systems', icon: '🛡️' },
    { id: 'precision-mushroom-fertilization', label: 'Precision Mushroom Fertilization Management', icon: '🧪' },
    { id: 'real-time-mushroom-harvesting', label: 'Real-Time Mushroom Harvesting Optimization', icon: '📅' },
    { id: 'digital-mushroom-dashboard', label: 'Digital Mushroom Farm Performance Dashboards', icon: '📊' },
    { id: 'automated-mushroom-rotation', label: 'Automated Mushroom Crop Rotation Scheduling', icon: '🔄' },
    { id: 'real-time-mushroom-light', label: 'Real-Time Monitoring of Mushroom Farm Light Conditions', icon: '💡' },
    { id: 'smart-mushroom-pest', label: 'Smart Pest Control for Mushroom Farms', icon: '🐛' },
    { id: 'automated-mushroom-ventilation', label: 'Automated Ventilation and Air Circulation Systems', icon: '🌬️' },
    { id: 'predictive-mushroom-maintenance', label: 'Predictive Maintenance for Mushroom Farm Equipment', icon: '🛠️' },
    { id: 'integrated-mushroom-management', label: 'Integrated Mushroom Farm Management Systems', icon: '📊' },
    { id: 'smart-mushroom-watering', label: 'Smart Watering Systems for Mushroom Farms', icon: '💧' },
    { id: 'digital-mushroom-reporting', label: 'Digital Mushroom Production Reporting Tools', icon: '📈' },
    { id: 'blockchain-mushroom-traceability', label: 'Blockchain for Mushroom Supply Chain Transparency', icon: '🔗' },
    { id: 'real-time-mushroom-co2', label: 'Real-Time Monitoring of CO2 Levels in Mushroom Farms', icon: '🌬️' },
    { id: 'automated-mushroom-substrate', label: 'Automated Substrate Mixing and Preparation', icon: '🧪' },
    { id: 'mushroom-growth-simulation', label: 'Mushroom Growth Simulation Software', icon: '💻' },
    { id: 'remote-mushroom-diagnostics', label: 'Remote Mushroom Farm Diagnostics and Troubleshooting', icon: '🛠️' },
    { id: 'predictive-mushroom-harvesting', label: 'Predictive Analytics for Mushroom Farm Harvesting', icon: '🔮' },
    { id: 'smart-mushroom-environmental', label: 'Smart Environmental Control for Mushroom Growth Rooms', icon: '🌡️' },
    { id: 'digital-mushroom-quality', label: 'Digital Quality Control for Mushroom Products', icon: '✅' },
    { id: 'automated-mushroom-labor', label: 'Automated Labor Scheduling for Mushroom Farms', icon: '📅' }
  ];
// ... existing code ...
// ... existing code ...
case 'nutraceuticals':
  return [
    { id: 'smart-nutraceutical-development', label: 'Smart Nutraceutical Product Development', icon: '🧪' },
    { id: 'digital-nutrient-profiling', label: 'Digital Nutrient Profiling for Supplements', icon: '📊' },
    { id: 'automated-nutraceutical-sourcing', label: 'Automated Nutraceutical Ingredient Sourcing', icon: '📦' },
    { id: 'real-time-nutraceutical-quality', label: 'Real-Time Quality Control for Nutraceutical Products', icon: '✅' },
    { id: 'data-driven-nutraceutical-formulation', label: 'Data-Driven Formulation of Nutraceutical Supplements', icon: '📈' },
    { id: 'precision-nutrient-optimization', label: 'Precision Nutrient Optimization for Functional Foods', icon: '🍽️' },
    { id: 'automated-nutraceutical-manufacturing', label: 'Automated Manufacturing of Nutraceutical Products', icon: '🏭' },
    { id: 'digital-nutraceutical-supply-chain', label: 'Digital Nutraceutical Supply Chain Management', icon: '📦' },
    { id: 'real-time-nutraceutical-production', label: 'Real-Time Monitoring of Nutraceutical Production', icon: '👀' },
    { id: 'nutraceutical-traceability', label: 'Nutraceutical Product Traceability and Transparency', icon: '📡' },
    { id: 'smart-ingredient-blending', label: 'Smart Ingredient Blending and Mixing Systems', icon: '🥄' },
    { id: 'automated-nutraceutical-packaging', label: 'Automated Packaging for Nutraceutical Products', icon: '📦' },
    { id: 'nutraceutical-demand-forecasting', label: 'Nutraceutical Market Demand Forecasting', icon: '🔮' },
    { id: 'digital-nutraceutical-engagement', label: 'Digital Nutraceutical Consumer Engagement Platforms', icon: '📱' },
    { id: 'precision-nutraceutical-dosing', label: 'Precision Dosing in Nutraceutical Supplements', icon: '💊' },
    { id: 'online-nutraceutical-customization', label: 'Online Nutraceutical Product Customization Tools', icon: '🛠️' },
    { id: 'nutraceutical-regulatory-compliance', label: 'Nutraceutical Regulatory Compliance Automation', icon: '📑' },
    { id: 'smart-nutraceutical-storage', label: 'Smart Storage and Distribution Systems for Nutraceuticals', icon: '🏚️' },
    { id: 'real-time-nutraceutical-ingredient', label: 'Real-Time Nutraceutical Ingredient Quality Monitoring', icon: '🔍' },
    { id: 'data-driven-nutraceutical-performance', label: 'Data-Driven Product Performance Tracking', icon: '📊' },
    { id: 'nutraceutical-ecommerce', label: 'Nutraceutical E-commerce Platform Automation', icon: '🛒' },
    { id: 'digital-nutraceutical-testing', label: 'Digital Nutraceutical Product Testing and Research', icon: '🔬' },
    { id: 'automated-nutraceutical-labeling', label: 'Automated Nutraceutical Labeling Systems', icon: '🏷️' },
    { id: 'integrated-nutraceutical-manufacturing', label: 'Integrated Nutraceutical Manufacturing and Packaging', icon: '📦' },
    { id: 'real-time-nutraceutical-shelf-life', label: 'Real-Time Nutraceutical Product Shelf Life Monitoring', icon: '⏳' },
    { id: 'nutraceutical-ingredient-sourcing', label: 'Nutraceutical Ingredient Sourcing Automation', icon: '📦' },
    { id: 'precision-nutraceutical-cultivation', label: 'Precision Cultivation for Nutraceutical Ingredients', icon: '🌱' },
    { id: 'automated-nutraceutical-research', label: 'Automated Nutraceutical Research and Development Tools', icon: '🧪' },
    { id: 'nutraceutical-sustainability', label: 'Nutraceutical Sustainability Optimization Systems', icon: '🌍' },
    { id: 'digital-nutraceutical-feedback', label: 'Digital Consumer Feedback and Quality Assurance', icon: '📝' },
    { id: 'nutraceutical-supply-chain-transparency', label: 'Nutraceutical Supply Chain Transparency Tools', icon: '📡' },
    { id: 'nutraceutical-ingredient-traceability', label: 'Nutraceutical Ingredient Traceability Platforms', icon: '📡' },
    { id: 'predictive-nutraceutical-sourcing', label: 'Predictive Analytics for Nutraceutical Ingredient Sourcing', icon: '🔮' },
    { id: 'automated-nutraceutical-equipment', label: 'Automated Nutraceutical Production Equipment Management', icon: '⚙️' },
    { id: 'real-time-nutraceutical-stock', label: 'Real-Time Nutraceutical Stock and Inventory Management', icon: '📦' },
    { id: 'smart-nutraceutical-labeling', label: 'Smart Nutraceutical Labeling and Compliance Tools', icon: '🏷️' },
    { id: 'digital-nutraceutical-marketing', label: 'Digital Nutraceutical Marketing and Branding Platforms', icon: '📢' },
    { id: 'data-driven-nutraceutical-trends', label: 'Data-Driven Nutraceutical Trend Analysis', icon: '📈' },
    { id: 'precision-nutraceutical-processing', label: 'Precision Processing for Nutraceutical Raw Materials', icon: '⚙️' },
    { id: 'automated-nutraceutical-delivery', label: 'Automated Nutraceutical Order and Delivery Systems', icon: '🚚' }
  ];
// ... existing code ...
// ... existing code ...
case 'organic-farming':
  return [
    { id: 'precision-organic-irrigation', label: 'Precision Organic Irrigation Systems', icon: '🚿' },
    { id: 'automated-organic-monitoring', label: 'Automated Organic Crop Monitoring', icon: '👀' },
    { id: 'smart-soil-health', label: 'Smart Soil Health Management for Organic Farms', icon: '🌱' },
    { id: 'organic-pest-control', label: 'Organic Pest Control and Monitoring Systems', icon: '🐛' },
    { id: 'digital-organic-management', label: 'Digital Organic Farm Management Platforms', icon: '📊' },
    { id: 'real-time-organic-yield', label: 'Real-Time Organic Crop Yield Prediction', icon: '📈' },
    { id: 'automated-organic-weed', label: 'Automated Organic Weed Control Solutions', icon: '🌿' },
    { id: 'organic-fertilization', label: 'Organic Fertilization and Nutrient Management', icon: '🧪' },
    { id: 'remote-sensing-organic', label: 'Remote Sensing for Organic Farm Health', icon: '🛰️' },
    { id: 'organic-crop-rotation', label: 'Organic Crop Rotation Scheduling Software', icon: '🔄' },
    { id: 'digital-organic-certification', label: 'Digital Organic Certification and Compliance Tools', icon: '📑' },
    { id: 'smart-greenhouse-organic', label: 'Smart Greenhouse Management for Organic Crops', icon: '🏡' },
    { id: 'integrated-organic-pest', label: 'Integrated Organic Pest and Disease Management', icon: '🛡️' },
    { id: 'data-driven-organic-irrigation', label: 'Data-Driven Organic Irrigation Scheduling', icon: '💧' },
    { id: 'smart-crop-protection', label: 'Smart Crop Protection for Organic Farms', icon: '🛡️' },
    { id: 'real-time-organic-performance', label: 'Real-Time Organic Farm Performance Analytics', icon: '📊' },
    { id: 'automated-organic-seedling', label: 'Automated Organic Seedling Monitoring and Care', icon: '🌱' },
    { id: 'digital-soil-moisture', label: 'Digital Soil Moisture and Nutrient Monitoring for Organic Crops', icon: '💧' },
    { id: 'organic-resource-optimization', label: 'Organic Farm Resource Optimization Systems', icon: '⚙️' },
    { id: 'digital-organic-marketplaces', label: 'Digital Marketplaces for Organic Products', icon: '🛒' },
    { id: 'precision-organic-fertilizer', label: 'Precision Organic Fertilizer Application', icon: '🧪' },
    { id: 'real-time-organic-weather', label: 'Real-Time Weather and Climate Data for Organic Farming', icon: '🌦️' },
    { id: 'remote-organic-yield', label: 'Remote Organic Crop Yield Assessment', icon: '🛰️' },
    { id: 'automated-organic-harvesting', label: 'Automated Organic Crop Harvesting Systems', icon: '🤖' },
    { id: 'digital-organic-traceability', label: 'Digital Organic Farm Traceability and Transparency', icon: '📡' },
    { id: 'smart-organic-composting', label: 'Smart Organic Composting Solutions', icon: '♻️' },
    { id: 'mobile-organic-management', label: 'Mobile Organic Farm Management Apps', icon: '📱' },
    { id: 'predictive-organic-growth', label: 'Predictive Analytics for Organic Crop Growth', icon: '🔮' },
    { id: 'sustainable-organic-reporting', label: 'Sustainable Organic Farm Reporting Tools', icon: '📈' },
    { id: 'automated-organic-harvest', label: 'Automated Organic Harvest Scheduling', icon: '📅' },
    { id: 'real-time-organic-pest', label: 'Real-Time Organic Pest Infestation Mapping', icon: '🐛' },
    { id: 'digital-organic-supply-chain', label: 'Digital Organic Supply Chain Management', icon: '📦' },
    { id: 'automated-organic-equipment', label: 'Automated Organic Farm Equipment Maintenance', icon: '🛠️' },
    { id: 'precision-organic-pollination', label: 'Precision Organic Pollination Systems', icon: '🐝' },
    { id: 'organic-waste-management', label: 'Organic Farm Waste and Resource Management Solutions', icon: '🗑️' },
    { id: 'smart-organic-soil', label: 'Smart Organic Soil Fertility Management', icon: '🌱' },
    { id: 'remote-organic-climate', label: 'Remote Monitoring for Organic Farm Climate Control', icon: '🌡️' },
    { id: 'data-driven-organic-demand', label: 'Data-Driven Organic Market Demand Forecasting', icon: '🔮' },
    { id: 'organic-packaging-distribution', label: 'Organic Product Packaging and Distribution Automation', icon: '📦' },
    { id: 'integrated-organic-financial', label: 'Integrated Organic Farm Financial and Operations Management', icon: '📊' }
  ];
// ... existing code ...
// ... existing code ...
case 'poultry-farming':
  return [
    { id: 'smart-poultry-health', label: 'Smart Poultry Health Monitoring Systems', icon: '🩺' },
    { id: 'automated-poultry-feeding', label: 'Automated Poultry Feeding Systems', icon: '🍽️' },
    { id: 'real-time-egg-production', label: 'Real-Time Egg Production Tracking', icon: '🥚' },
    { id: 'digital-poultry-management', label: 'Digital Poultry Farm Management Platforms', icon: '📊' },
    { id: 'precision-poultry-disease', label: 'Precision Poultry Disease Detection', icon: '⚠️' },
    { id: 'automated-poultry-environment', label: 'Automated Poultry Environmental Control Systems', icon: '🌡️' },
    { id: 'smart-poultry-lighting', label: 'Smart Poultry Lighting and Temperature Regulation', icon: '💡' },
    { id: 'remote-poultry-monitoring', label: 'Remote Poultry Farm Monitoring', icon: '🛰️' },
    { id: 'digital-poultry-inventory', label: 'Digital Poultry Inventory Management', icon: '📦' },
    { id: 'poultry-waste-management', label: 'Poultry Waste Management Automation', icon: '🗑️' },
    { id: 'real-time-poultry-feed', label: 'Real-Time Poultry Feed Monitoring and Optimization', icon: '🍽️' },
    { id: 'mobile-poultry-management', label: 'Mobile Poultry Farm Management Apps', icon: '📱' },
    { id: 'automated-egg-sorting', label: 'Automated Egg Sorting and Grading Systems', icon: '🥚' },
    { id: 'poultry-behavior-monitoring', label: 'Poultry Behavior Monitoring and Analysis', icon: '👀' },
    { id: 'digital-poultry-biosecurity', label: 'Digital Poultry Biosecurity and Disease Prevention', icon: '🛡️' },
    { id: 'smart-poultry-watering', label: 'Smart Watering Systems for Poultry', icon: '💧' },
    { id: 'poultry-health-risk', label: 'Poultry Health Risk Assessment Tools', icon: '⚠️' },
    { id: 'real-time-poultry-demand', label: 'Real-Time Poultry Market Demand Forecasting', icon: '🔮' },
    { id: 'automated-poultry-housing', label: 'Automated Poultry Housing and Ventilation Systems', icon: '🏠' },
    { id: 'digital-poultry-hatchery', label: 'Digital Poultry Hatchery Management', icon: '🐣' },
    { id: 'poultry-mortality-tracking', label: 'Poultry Mortality Tracking and Reporting', icon: '📝' },
    { id: 'predictive-poultry-growth', label: 'Predictive Analytics for Poultry Growth and Production', icon: '📈' },
    { id: 'smart-poultry-nesting', label: 'Smart Nesting Systems for Poultry', icon: '🥚' },
    { id: 'automated-poultry-flock', label: 'Automated Poultry Flock Monitoring', icon: '🐔' },
    { id: 'real-time-poultry-performance', label: 'Real-Time Data Collection for Poultry Performance', icon: '📊' },
    { id: 'poultry-egg-incubation', label: 'Poultry Egg Incubation Optimization', icon: '🥚' },
    { id: 'poultry-breeding-optimization', label: 'Poultry Breeding and Genetic Optimization Software', icon: '🧬' },
    { id: 'digital-poultry-supply-chain', label: 'Digital Poultry Supply Chain Management', icon: '📦' },
    { id: 'intelligent-poultry-transport', label: 'Intelligent Poultry Transport and Logistics', icon: '🚚' },
    { id: 'real-time-poultry-welfare', label: 'Real-Time Poultry Welfare and Comfort Monitoring', icon: '🐔' },
    { id: 'precision-poultry-waste', label: 'Precision Poultry Waste Recycling', icon: '♻️' },
    { id: 'automated-poultry-egg-collection', label: 'Automated Poultry Egg Collection Systems', icon: '🥚' },
    { id: 'integrated-poultry-nutrition', label: 'Integrated Poultry Nutrition and Feed Management', icon: '🍽️' },
    { id: 'poultry-health-antibiotic', label: 'Poultry Health and Antibiotic Use Monitoring', icon: '💊' },
    { id: 'smart-poultry-packaging', label: 'Smart Poultry Product Packaging Solutions', icon: '📦' },
    { id: 'poultry-feed-stock', label: 'Poultry Feed Stock Management Systems', icon: '🍽️' },
    { id: 'digital-poultry-health-reports', label: 'Digital Poultry Flock Health Reports', icon: '📝' },
    { id: 'poultry-growth-performance', label: 'Poultry Growth Rate and Performance Analytics', icon: '📈' },
    { id: 'smart-poultry-housing', label: 'Smart Poultry Housing Design and Automation', icon: '🏠' },
    { id: 'real-time-poultry-market', label: 'Real-Time Poultry Market Pricing and Sales Platforms', icon: '💲' }
  ];
// ... existing code ...
// ... existing code ...
case 'precision-agriculture':
  return [
    { id: 'precision-irrigation', label: 'Precision Irrigation Systems', icon: '🚿' },
    { id: 'automated-soil-health', label: 'Automated Soil Health Monitoring', icon: '🌱' },
    { id: 'smart-fertilizer', label: 'Smart Fertilizer Application', icon: '🧪' },
    { id: 'crop-yield-prediction', label: 'Crop Yield Prediction Models', icon: '📈' },
    { id: 'real-time-crop-health', label: 'Real-Time Crop Health Monitoring', icon: '👀' },
    { id: 'precision-seeding', label: 'Precision Seeding and Planting Systems', icon: '🌱' },
    { id: 'remote-sensing-soil', label: 'Remote Sensing for Soil Moisture', icon: '🛰️' },
    { id: 'automated-pest-detection', label: 'Automated Pest and Disease Detection', icon: '🐛' },
    { id: 'digital-field-mapping', label: 'Digital Field Mapping Tools', icon: '🗺️' },
    { id: 'real-time-weather', label: 'Real-Time Weather Data Integration for Farming', icon: '🌦️' },
    { id: 'precision-livestock', label: 'Precision Livestock Monitoring', icon: '🐄' },
    { id: 'smart-weed-control', label: 'Smart Weed Control Systems', icon: '🌿' },
    { id: 'gps-tractor-navigation', label: 'GPS-Enabled Tractor Navigation Systems', icon: '🚜' },
    { id: 'variable-rate-fertilizer', label: 'Variable Rate Technology for Fertilizers', icon: '🧪' },
    { id: 'farm-data-analytics', label: 'Farm Data Analytics Platforms', icon: '📊' },
    { id: 'drones-crop-surveillance', label: 'Drones for Crop Surveillance and Monitoring', icon: '🚁' },
    { id: 'automated-harvesting', label: 'Automated Harvesting Systems', icon: '🤖' },
    { id: 'smart-crop-protection', label: 'Smart Crop Protection Systems', icon: '🛡️' },
    { id: 'precision-crop-rotation', label: 'Precision Crop Rotation Planning', icon: '🔄' },
    { id: 'digital-irrigation-scheduling', label: 'Digital Irrigation Scheduling', icon: '🚿' },
    { id: 'soil-erosion-monitoring', label: 'Soil Erosion Monitoring and Control', icon: '🌱' },
    { id: 'remote-equipment-monitoring', label: 'Remote Equipment Monitoring and Diagnostics', icon: '🛠️' },
    { id: 'data-driven-equipment', label: 'Data-Driven Farm Equipment Optimization', icon: '⚙️' },
    { id: 'smart-weather-forecasting', label: 'Smart Weather Forecasting for Crops', icon: '🌦️' },
    { id: 'precision-livestock-feeding', label: 'Precision Livestock Feeding Systems', icon: '🍽️' },
    { id: 'integrated-pest-management', label: 'Integrated Pest Management Systems', icon: '🐛' },
    { id: 'real-time-equipment-tracking', label: 'Real-Time Field Equipment Tracking', icon: '📍' },
    { id: 'precision-harvesting', label: 'Precision Harvesting Technology', icon: '🤖' },
    { id: 'digital-resource-allocation', label: 'Digital Farm Resource Allocation', icon: '📊' },
    { id: 'real-time-fertilizer-monitoring', label: 'Real-Time Fertilizer and Pesticide Monitoring', icon: '🧪' },
    { id: 'precision-land-leveling', label: 'Precision Land Leveling Tools', icon: '⚙️' },
    { id: 'automated-crop-sorting', label: 'Automated Crop Sorting and Grading', icon: '🔍' },
    { id: 'real-time-water-usage', label: 'Real-Time Water Usage Tracking', icon: '💧' },
    { id: 'data-driven-disease-management', label: 'Data-Driven Plant Disease Management', icon: '⚠️' },
    { id: 'automated-farm-data', label: 'Automated Farm Data Collection Systems', icon: '📊' },
    { id: 'smart-soil-ph', label: 'Smart Soil pH Monitoring', icon: '🌱' },
    { id: 'digital-farm-dashboards', label: 'Digital Farm Performance Dashboards', icon: '📊' },
    { id: 'automated-soil-nutrient', label: 'Automated Soil Nutrient Testing', icon: '🧪' },
    { id: 'precision-agrochemical', label: 'Precision Agrochemical Application', icon: '🧪' },
    { id: 'farm-to-table-supply-chain', label: 'Farm-to-Table Supply Chain Optimization', icon: '📦' }
  ];
// ... existing code ...
// ... existing code ...
case 'seed-production':
  return [
    { id: 'smart-seed-sourcing', label: 'Smart Seed Sourcing and Supply Chain Management', icon: '📦' },
    { id: 'automated-seed-sorting', label: 'Automated Seed Sorting and Grading Systems', icon: '🔍' },
    { id: 'precision-seed-coating', label: 'Precision Seed Coating Technology', icon: '🧪' },
    { id: 'real-time-seed-germination', label: 'Real-Time Seed Germination Monitoring', icon: '🌱' },
    { id: 'digital-seed-quality', label: 'Digital Seed Quality Control', icon: '✅' },
    { id: 'automated-seed-packaging', label: 'Automated Seed Packaging Solutions', icon: '📦' },
    { id: 'seed-storage-inventory', label: 'Seed Storage and Inventory Management Systems', icon: '📦' },
    { id: 'predictive-seed-yield', label: 'Predictive Seed Yield Optimization Tools', icon: '📈' },
    { id: 'digital-seed-traceability', label: 'Digital Traceability for Seed Products', icon: '📡' },
    { id: 'seedling-growth-simulation', label: 'Seedling Growth Simulation Software', icon: '💻' },
    { id: 'real-time-seed-environment', label: 'Real-Time Environmental Control for Seed Production', icon: '🌡️' },
    { id: 'automated-seed-treatment', label: 'Automated Seed Treatment Systems', icon: '🧪' },
    { id: 'seed-health-monitoring', label: 'Seed Health Monitoring and Disease Detection', icon: '🩺' },
    { id: 'data-driven-seed-production', label: 'Data-Driven Seed Production Planning', icon: '📊' },
    { id: 'precision-seed-testing', label: 'Precision Seed Testing and Analysis Tools', icon: '🔬' },
    { id: 'smart-fertilization-seed', label: 'Smart Fertilization for Seed Crops', icon: '🧪' },
    { id: 'seed-harvesting-automation', label: 'Seed Harvesting Automation', icon: '🤖' },
    { id: 'digital-seed-scheduling', label: 'Digital Seed Production Scheduling', icon: '📅' },
    { id: 'smart-water-seed', label: 'Smart Water Management for Seed Crops', icon: '💧' },
    { id: 'genetic-seed-testing', label: 'Genetic Testing and Seed Improvement Platforms', icon: '🧬' },
    { id: 'automated-seed-delivery', label: 'Automated Seed Delivery Systems', icon: '🚚' },
    { id: 'remote-seed-monitoring', label: 'Remote Monitoring for Seed Production Facilities', icon: '🛰️' },
    { id: 'seed-moisture-quality', label: 'Seed Moisture and Quality Control Systems', icon: '💧' },
    { id: 'seedling-care-growth', label: 'Seedling Care and Growth Optimization', icon: '🌱' },
    { id: 'digital-seed-marketplaces', label: 'Digital Seed Marketplaces and Sales Platforms', icon: '🛒' },
    { id: 'soil-health-seed', label: 'Soil Health and Nutrient Monitoring for Seed Crops', icon: '🌱' },
    { id: 'real-time-seed-data', label: 'Real-Time Data Collection for Seed Production', icon: '📊' },
    { id: 'precision-planting-seed', label: 'Precision Planting for Seed Crops', icon: '🌱' },
    { id: 'automated-seedling-transplantation', label: 'Automated Seedling Transplantation Systems', icon: '🤖' },
    { id: 'smart-weed-pest-seed', label: 'Smart Weed and Pest Management in Seed Production', icon: '🐛' },
    { id: 'seed-inventory-forecasting', label: 'Seed Inventory Forecasting Tools', icon: '🔮' },
    { id: 'digital-seed-certification', label: 'Digital Seed Testing and Certification Systems', icon: '📑' },
    { id: 'precision-harvesting-seed', label: 'Precision Harvesting for Seed Crops', icon: '🤖' },
    { id: 'automated-seedling-sorting', label: 'Automated Seedling Sorting for Packaging', icon: '🔍' },
    { id: 'seed-resource-optimization', label: 'Seed Production Resource Optimization', icon: '⚙️' },
    { id: 'seed-production-analytics', label: 'Seed Production Performance Analytics', icon: '📊' },
    { id: 'remote-sensing-seed', label: 'Remote Sensing for Seed Crop Health', icon: '🛰️' },
    { id: 'digital-seed-distribution', label: 'Digital Seed Distribution Networks', icon: '📦' },
    { id: 'smart-irrigation-seed', label: 'Smart Irrigation Systems for Seed Production', icon: '🚿' },
    { id: 'integrated-seed-research', label: 'Integrated Seed Research and Development Tools', icon: '🧪' }
  ];
// ... existing code ...
// ... existing code ...
      case 'sustainable-agriculture':
        return [
    { id: 'precision-water-management', label: 'Precision Water Management Systems', icon: '🚿' },
    { id: 'smart-irrigation-conservation', label: 'Smart Irrigation and Water Conservation', icon: '💧' },
    { id: 'organic-fertilizer', label: 'Organic Fertilizer Application Systems', icon: '🧪' },
    { id: 'automated-crop-rotation', label: 'Automated Crop Rotation and Planning', icon: '🔄' },
    { id: 'real-time-soil-health', label: 'Real-Time Soil Health Monitoring', icon: '🌱' },
    { id: 'integrated-pest-management', label: 'Integrated Pest Management Solutions', icon: '🐛' },
    { id: 'digital-farm-resource', label: 'Digital Farm Resource Optimization', icon: '📊' },
    { id: 'sustainable-farm-energy', label: 'Sustainable Farm Energy Management', icon: '⚡' },
    { id: 'remote-sensing-crop-stress', label: 'Remote Sensing for Crop Stress Detection', icon: '🛰️' },
    { id: 'data-driven-soil-nutrient', label: 'Data-Driven Soil Nutrient Management', icon: '📊' },
    { id: 'smart-greenhouse-climate', label: 'Smart Greenhouse Climate Control', icon: '🏡' },
    { id: 'automated-waste-recycling', label: 'Automated Waste Recycling in Agriculture', icon: '♻️' },
    { id: 'digital-carbon-footprint', label: 'Digital Carbon Footprint Tracking for Farms', icon: '🌍' },
    { id: 'precision-livestock-management', label: 'Precision Livestock Management Systems', icon: '🐄' },
    { id: 'smart-feed-nutrition', label: 'Smart Feed and Nutrition Management', icon: '🍽️' },
    { id: 'renewable-energy-farms', label: 'Renewable Energy Integration for Farms', icon: '⚡' },
    { id: 'sustainable-crop-protection', label: 'Sustainable Crop Protection Systems', icon: '🛡️' },
    { id: 'real-time-environmental-impact', label: 'Real-Time Environmental Impact Monitoring', icon: '🌍' },
    { id: 'farm-biodiversity', label: 'Farm Biodiversity and Conservation Tools', icon: '🌿' },
    { id: 'integrated-weed-control', label: 'Integrated Weed Control Solutions', icon: '🌿' },
    { id: 'mobile-sustainable-farm', label: 'Mobile Platforms for Sustainable Farm Management', icon: '📱' },
    { id: 'real-time-weather-monitoring', label: 'Real-Time Weather Monitoring for Sustainable Farming', icon: '🌦️' },
    { id: 'smart-fertilizer-application', label: 'Smart Fertilizer Application Systems', icon: '🧪' },
    { id: 'farm-to-table-sustainability', label: 'Farm-to-Table Sustainability Tracking', icon: '📦' },
    { id: 'digital-soil-erosion', label: 'Digital Soil Erosion Management Tools', icon: '🌱' },
    { id: 'sustainable-irrigation', label: 'Sustainable Irrigation Practices and Automation', icon: '🚿' },
    { id: 'digital-water-usage', label: 'Digital Water Usage Analytics for Farms', icon: '💧' },
    { id: 'low-emission-farm-equipment', label: 'Low-Emission Farm Equipment and Technology', icon: '🚜' },
    { id: 'automated-sustainable-harvesting', label: 'Automated Crop Harvesting Systems for Sustainability', icon: '🤖' },
    { id: 'real-time-water-quality', label: 'Real-Time Water Quality Monitoring for Irrigation', icon: '💧' },
    { id: 'smart-fertilization-nutrient', label: 'Smart Fertilization and Nutrient Cycling', icon: '🧪' },
    { id: 'eco-friendly-packaging', label: 'Eco-Friendly Packaging Solutions for Farm Products', icon: '📦' },
    { id: 'waste-to-energy', label: 'Waste-to-Energy Systems for Farms', icon: '⚡' },
    { id: 'crop-disease-prediction', label: 'Crop Disease Prediction and Control Systems', icon: '⚠️' },
    { id: 'soil-remediation', label: 'Soil Remediation and Restoration Technologies', icon: '🌱' },
    { id: 'sustainable-crop-yield', label: 'Sustainable Crop Yield Forecasting', icon: '📈' },
    { id: 'real-time-greenhouse-gas', label: 'Real-Time Monitoring of Greenhouse Gas Emissions', icon: '🌍' },
    { id: 'eco-friendly-distribution', label: 'Eco-Friendly Packaging and Distribution Automation', icon: '📦' },
    { id: 'precision-composting', label: 'Precision Composting Systems', icon: '♻️' },
    { id: 'circular-economy-agriculture', label: 'Circular Economy Practices in Agriculture', icon: '🔄' }
  ];
// ... existing code ...
// ... existing code ...
case 'soil-fertility-management':
  return [
    { id: 'smart-soil-nutrient', label: 'Smart Soil Nutrient Management Systems', icon: '🌱' },
    { id: 'real-time-soil-health', label: 'Real-Time Soil Health Monitoring', icon: '👀' },
    { id: 'precision-fertilizer', label: 'Precision Fertilizer Application Technology', icon: '🧪' },
    { id: 'soil-ph-moisture', label: 'Soil pH and Moisture Regulation Tools', icon: '🌱' },
    { id: 'automated-soil-testing', label: 'Automated Soil Testing and Analysis', icon: '🔬' },
    { id: 'digital-soil-fertility', label: 'Digital Soil Fertility Mapping', icon: '🗺️' },
    { id: 'smart-irrigation-nutrient', label: 'Smart Irrigation for Soil Nutrient Optimization', icon: '🚿' },
    { id: 'data-driven-soil-erosion', label: 'Data-Driven Soil Erosion Management', icon: '🌱' },
    { id: 'soil-organic-matter', label: 'Soil Organic Matter Tracking', icon: '📊' },
    { id: 'precision-composting', label: 'Precision Composting for Soil Health', icon: '♻️' },
    { id: 'digital-nutrient-deficiency', label: 'Digital Crop Nutrient Deficiency Detection', icon: '⚠️' },
    { id: 'soil-microbe-monitoring', label: 'Soil Microbe and Ecosystem Monitoring', icon: '🦠' },
    { id: 'automated-soil-amending', label: 'Automated Soil Amending Systems', icon: '⚙️' },
    { id: 'real-time-soil-condition', label: 'Real-Time Soil Condition Monitoring', icon: '👀' },
    { id: 'remote-sensing-soil-texture', label: 'Remote Sensing for Soil Texture Mapping', icon: '🛰️' },
    { id: 'soil-quality-forecasting', label: 'Soil Quality Forecasting Tools', icon: '🔮' },
    { id: 'smart-fertilization-scheduling', label: 'Smart Fertilization Scheduling Systems', icon: '📅' },
    { id: 'mobile-soil-fertility', label: 'Mobile Soil Fertility Management Apps', icon: '📱' },
    { id: 'soil-moisture-management', label: 'Soil Moisture Management and Automation', icon: '💧' },
    { id: 'automated-fertilizer-blending', label: 'Automated Soil Fertilizer Blending Systems', icon: '🧪' },
    { id: 'soil-carbon-sequestration', label: 'Soil Carbon Sequestration Measurement Tools', icon: '🌍' },
    { id: 'precision-lime-application', label: 'Precision Lime Application for Soil pH Adjustment', icon: '🧪' },
    { id: 'smart-crop-rotation', label: 'Smart Crop Rotation Planning for Soil Health', icon: '🔄' },
    { id: 'real-time-soil-temperature', label: 'Real-Time Soil Temperature Monitoring', icon: '🌡️' },
    { id: 'digital-organic-decomposition', label: 'Digital Organic Matter Decomposition Tracking', icon: '📊' },
    { id: 'soil-salinity-management', label: 'Soil Salinity Management and Monitoring', icon: '🌱' },
    { id: 'automated-nutrient-deficiency', label: 'Automated Soil Nutrient Deficiency Alerts', icon: '⚠️' },
    { id: 'digital-crop-soil-interaction', label: 'Digital Crop and Soil Interaction Analysis', icon: '📊' },
    { id: 'smart-soil-erosion', label: 'Smart Soil Erosion Control Systems', icon: '🌱' },
    { id: 'soil-conservation', label: 'Soil Conservation and Fertility Enhancement Tools', icon: '🌱' },
    { id: 'precision-nitrogen-management', label: 'Precision Nitrogen Management Systems', icon: '🧪' },
    { id: 'digital-fertilizer-supply-chain', label: 'Digital Soil Fertilizer Supply Chain Management', icon: '📦' },
    { id: 'remote-soil-fertility', label: 'Remote Soil Fertility Monitoring Platforms', icon: '🛰️' },
    { id: 'soil-remediation', label: 'Soil Remediation and Restoration Technologies', icon: '🌱' },
    { id: 'real-time-soil-fertility', label: 'Real-Time Soil Fertility Data Analytics', icon: '📊' },
    { id: 'soil-compaction-detection', label: 'Soil Compaction Detection and Prevention Systems', icon: '🌱' },
    { id: 'automated-soil-moisture', label: 'Automated Soil Moisture and Irrigation Control', icon: '💧' },
    { id: 'remote-sensing-soil-water', label: 'Remote Sensing for Soil Water Holding Capacity', icon: '🛰️' },
    { id: 'digital-soil-fertility-forecasting', label: 'Digital Soil Fertility Forecasting Tools', icon: '🔮' },
    { id: 'smart-soil-amending', label: 'Smart Soil Amending and Fertilizer Management Software', icon: '⚙️' }
  ];
// ... existing code ...
// ... existing code ...
case 'tea-coffee-production':
  return [
    { id: 'automated-tea-harvesting', label: 'Automated Tea Harvesting Systems', icon: '🤖' },
    { id: 'smart-irrigation-tea', label: 'Smart Irrigation for Tea Plantations', icon: '🚿' },
    { id: 'digital-tea-quality', label: 'Digital Tea Leaf Quality Control', icon: '✅' },
    { id: 'precision-fertilizer-tea', label: 'Precision Fertilizer Application for Tea Crops', icon: '🧪' },
    { id: 'real-time-weather-tea', label: 'Real-Time Weather Monitoring for Tea Farms', icon: '🌦️' },
    { id: 'smart-tea-processing', label: 'Smart Tea Processing and Drying Systems', icon: '🍵' },
    { id: 'automated-coffee-sorting', label: 'Automated Coffee Bean Sorting and Grading', icon: '🔍' },
    { id: 'data-driven-coffee-yield', label: 'Data-Driven Coffee Crop Yield Prediction', icon: '📈' },
    { id: 'coffee-plant-health', label: 'Coffee Plant Health Monitoring Systems', icon: '🩺' },
    { id: 'digital-tea-management', label: 'Digital Tea Plantation Management Platforms', icon: '📊' },
    { id: 'remote-sensing-coffee', label: 'Remote Sensing for Coffee Tree Growth', icon: '🛰️' },
    { id: 'automated-tea-coffee-packaging', label: 'Automated Tea and Coffee Packaging Solutions', icon: '📦' },
    { id: 'precision-tea-coffee-harvest', label: 'Precision Tea and Coffee Harvest Timing', icon: '📅' },
    { id: 'coffee-roasting-optimization', label: 'Coffee Bean Roasting Optimization Software', icon: '🔥' },
    { id: 'tea-pest-detection', label: 'Tea Pest and Disease Detection Tools', icon: '🐛' },
    { id: 'smart-fertilizer-tea-coffee', label: 'Smart Fertilizer Management for Tea and Coffee', icon: '🧪' },
    { id: 'digital-tea-coffee-traceability', label: 'Digital Traceability for Tea and Coffee Products', icon: '📡' },
    { id: 'real-time-tea-stress', label: 'Real-Time Tea Plant Stress Detection', icon: '⚠️' },
    { id: 'smart-coffee-watering', label: 'Smart Coffee Watering Systems', icon: '💧' },
    { id: 'automated-coffee-processing', label: 'Automated Coffee Bean Processing Systems', icon: '🤖' },
    { id: 'tea-plantation-environmental', label: 'Tea Plantation Environmental Impact Monitoring', icon: '🌍' },
    { id: 'data-driven-coffee-quality', label: 'Data-Driven Coffee Quality Control', icon: '📊' },
    { id: 'smart-harvesting-scheduling', label: 'Smart Harvesting Scheduling for Tea and Coffee', icon: '📅' },
    { id: 'precision-coffee-fertilization', label: 'Precision Coffee Fertilization Systems', icon: '🧪' },
    { id: 'coffee-plant-breeding', label: 'Coffee Plant Breeding and Genetic Management', icon: '🧬' },
    { id: 'digital-tea-coffee-supply-chain', label: 'Digital Tea and Coffee Supply Chain Optimization', icon: '📦' },
    { id: 'coffee-bean-ripeness', label: 'Coffee Bean Ripeness Prediction Tools', icon: '🔮' },
    { id: 'automated-tea-plucking', label: 'Automated Tea Leaf Plucking Systems', icon: '🤖' },
    { id: 'coffee-production-reporting', label: 'Coffee Production Reporting and Analytics', icon: '📊' },
    { id: 'remote-coffee-monitoring', label: 'Remote Coffee Plantation Monitoring', icon: '🛰️' },
    { id: 'smart-coffee-rotation', label: 'Smart Coffee Crop Rotation Scheduling', icon: '🔄' },
    { id: 'digital-tea-coffee-demand', label: 'Digital Tea and Coffee Market Demand Forecasting', icon: '🔮' },
    { id: 'coffee-soil-health', label: 'Coffee Plant Soil Health and Moisture Monitoring', icon: '🌱' },
    { id: 'real-time-tea-processing', label: 'Real-Time Tea Processing Line Control', icon: '⚙️' },
    { id: 'precision-coffee-pest', label: 'Precision Coffee Pest and Disease Management', icon: '🐛' },
    { id: 'automated-coffee-drying', label: 'Automated Coffee Drying Systems', icon: '🔥' },
    { id: 'real-time-tea-quality', label: 'Real-Time Tea Quality Assessment Systems', icon: '✅' },
    { id: 'coffee-bean-storage', label: 'Coffee Bean Storage Optimization', icon: '📦' },
    { id: 'digital-coffee-roasting', label: 'Digital Coffee Roasting and Blending Software', icon: '🔥' },
    { id: 'green-tea-coffee-sustainability', label: 'Green Tea and Coffee Sustainability Analytics', icon: '🌍' }
  ];
// ... existing code ...
// ... existing code ...
case 'tree-crops-agroforestry':
  return [
    { id: 'smart-agroforestry-land', label: 'Smart Agroforestry Land Management Systems', icon: '🌳' },
    { id: 'automated-tree-planting', label: 'Automated Tree Planting and Nursery Management', icon: '🌱' },
    { id: 'precision-irrigation-tree', label: 'Precision Irrigation for Tree Crops', icon: '🚿' },
    { id: 'tree-growth-monitoring', label: 'Tree Growth Monitoring and Analysis Tools', icon: '📊' },
    { id: 'real-time-soil-agroforestry', label: 'Real-Time Soil Health Monitoring in Agroforestry', icon: '🌱' },
    { id: 'automated-tree-harvesting', label: 'Automated Tree Crop Harvesting Systems', icon: '🤖' },
    { id: 'digital-agroforestry-design', label: 'Digital Agroforestry Design and Planning Tools', icon: '🗺️' },
    { id: 'smart-carbon-sequestration', label: 'Smart Forest and Tree Crop Carbon Sequestration Measurement', icon: '🌍' },
    { id: 'automated-tree-disease', label: 'Automated Tree Disease Detection and Management', icon: '⚠️' },
    { id: 'remote-sensing-tree-canopy', label: 'Remote Sensing for Tree Canopy Health Monitoring', icon: '🛰️' },
    { id: 'integrated-agroforestry-pest', label: 'Integrated Agroforestry Pest and Disease Control', icon: '🐛' },
    { id: 'real-time-water-tree', label: 'Real-Time Water Usage Monitoring for Tree Crops', icon: '💧' },
    { id: 'automated-fertilization-tree', label: 'Automated Fertilization Systems for Tree Crops', icon: '🧪' },
    { id: 'smart-pollination-agroforestry', label: 'Smart Pollination Management for Agroforestry', icon: '🐝' },
    { id: 'precision-harvest-scheduling', label: 'Precision Harvest Scheduling for Tree Crops', icon: '📅' },
    { id: 'data-driven-agroforestry', label: 'Data-Driven Crop Rotation and Agroforestry Management', icon: '🔄' },
    { id: 'digital-tree-yield', label: 'Digital Tree Crop Yield Prediction Models', icon: '📈' },
    { id: 'sustainable-agroforestry', label: 'Sustainable Forestry and Agroforestry Practices Optimization', icon: '🌍' },
    { id: 'remote-tree-stress', label: 'Remote Tree Stress and Health Monitoring Systems', icon: '⚠️' },
    { id: 'smart-soil-agroforestry', label: 'Smart Soil Fertility and Nutrient Management for Agroforestry', icon: '🌱' },
    { id: 'tree-crop-diversity', label: 'Tree and Crop Diversity Monitoring in Agroforestry', icon: '🌿' },
    { id: 'automated-tree-pruning', label: 'Automated Tree Pruning and Maintenance Systems', icon: '✂️' },
    { id: 'precision-agroforestry-carbon', label: 'Precision Agroforestry Carbon Footprint Tracking', icon: '🌍' },
    { id: 'real-time-agroforestry-climate', label: 'Real-Time Agroforestry Climate Impact Monitoring', icon: '🌡️' },
    { id: 'digital-agroforestry-resource', label: 'Digital Agroforestry Resource Allocation Systems', icon: '📊' },
    { id: 'smart-tree-breeding', label: 'Smart Tree Crop Breeding and Genetics Tools', icon: '🧬' },
    { id: 'mobile-agroforestry', label: 'Mobile Agroforestry Management and Reporting Apps', icon: '📱' },
    { id: 'digital-tree-traceability', label: 'Digital Tree Crop Traceability and Certification', icon: '📡' },
    { id: 'tree-soil-moisture', label: 'Tree Crop Soil Moisture and Temperature Monitoring', icon: '🌱' },
    { id: 'smart-forest-management', label: 'Smart Forest Management and Timber Harvesting', icon: '🌲' },
    { id: 'automated-agroforestry-equipment', label: 'Automated Agroforestry Equipment Monitoring and Maintenance', icon: '🛠️' },
    { id: 'real-time-weather-agroforestry', label: 'Real-Time Weather and Climate Data for Agroforestry', icon: '🌦️' },
    { id: 'smart-irrigation-agroforestry', label: 'Smart Irrigation Scheduling for Agroforestry Systems', icon: '🚿' },
    { id: 'tree-growth-modeling', label: 'Tree Crop Growth Modeling and Simulation Tools', icon: '💻' },
    { id: 'digital-agroforestry-supply-chain', label: 'Digital Agroforestry Supply Chain Management', icon: '📦' },
    { id: 'precision-soil-erosion', label: 'Precision Soil Erosion Control in Agroforestry', icon: '🌱' },
    { id: 'integrated-agroforestry-traceability', label: 'Integrated Agroforestry Supply Chain Traceability', icon: '📡' },
    { id: 'smart-agroforestry-waste', label: 'Smart Agroforestry Waste Management Systems', icon: '🗑️' },
    { id: 'remote-agroforestry-biodiversity', label: 'Remote Monitoring of Agroforestry Biodiversity', icon: '🌿' },
    { id: 'automated-tree-inventory', label: 'Automated Tree Crop Inventory and Resource Management', icon: '📦' }
  ];
// ... existing code ...
// ... existing code ...
case 'turf-sod-farming':
  return [
    { id: 'smart-irrigation-turf', label: 'Smart Irrigation Systems for Turf', icon: '🚿' },
    { id: 'automated-turf-harvesting', label: 'Automated Turf Sod Harvesting', icon: '🤖' },
    { id: 'digital-turf-monitoring', label: 'Digital Turf Field Monitoring and Management', icon: '📊' },
    { id: 'precision-fertilization-turf', label: 'Precision Fertilization for Turf Grass', icon: '🧪' },
    { id: 'automated-soil-moisture-turf', label: 'Automated Soil Moisture Monitoring for Turf', icon: '💧' },
    { id: 'turf-quality-control', label: 'Turf Quality Control and Grading Systems', icon: '✅' },
    { id: 'real-time-turf-growth', label: 'Real-Time Turf Growth Tracking', icon: '📈' },
    { id: 'precision-seeding-turf', label: 'Precision Seeding Systems for Turf Crops', icon: '🌱' },
    { id: 'remote-sensing-turf', label: 'Remote Sensing for Turf Health and Stress', icon: '🛰️' },
    { id: 'turf-pest-detection', label: 'Turf Pest and Disease Detection Systems', icon: '🐛' },
    { id: 'digital-turf-supply-chain', label: 'Digital Turf and Sod Supply Chain Management', icon: '📦' },
    { id: 'smart-turf-maintenance', label: 'Smart Turf Maintenance Scheduling', icon: '📅' },
    { id: 'turf-field-analytics', label: 'Turf Field Performance Analytics', icon: '📊' },
    { id: 'automated-turf-packaging', label: 'Automated Turf Roll Packaging and Distribution', icon: '📦' },
    { id: 'data-driven-irrigation-turf', label: 'Data-Driven Irrigation Scheduling for Turf Farms', icon: '🚿' },
    { id: 'smart-turf-watering', label: 'Smart Turf Watering Systems', icon: '💧' },
    { id: 'turf-grass-breeding', label: 'Turf Grass Breeding and Genetic Optimization', icon: '🧬' },
    { id: 'real-time-turf-disease', label: 'Real-Time Turf Disease Prevention Alerts', icon: '⚠️' },
    { id: 'automated-weed-control', label: 'Automated Weed Control for Turf and Sod', icon: '🌿' },
    { id: 'remote-turf-monitoring', label: 'Remote Monitoring for Turf Field Conditions', icon: '🛰️' },
    { id: 'smart-temperature-turf', label: 'Smart Temperature Regulation for Turf Farms', icon: '🌡️' },
    { id: 'predictive-turf-growth', label: 'Predictive Turf Growth Modeling and Simulation', icon: '🔮' },
    { id: 'automated-turf-maintenance', label: 'Automated Turf Field Maintenance Equipment', icon: '🛠️' },
    { id: 'real-time-soil-turf', label: 'Real-Time Soil and Nutrient Monitoring for Turf', icon: '🌱' },
    { id: 'precision-turf-harvesting', label: 'Precision Turf Harvesting Tools', icon: '✂️' },
    { id: 'digital-turf-resource', label: 'Digital Turf Farm Resource Optimization', icon: '📊' },
    { id: 'turf-health-monitoring', label: 'Turf Health Monitoring and Diagnostic Tools', icon: '🩺' },
    { id: 'smart-fertilizer-turf', label: 'Smart Fertilizer Application for Turf Fields', icon: '🧪' },
    { id: 'environmental-impact-turf', label: 'Environmental Impact Monitoring for Turf Farms', icon: '🌍' },
    { id: 'turf-market-demand', label: 'Turf Market Demand Forecasting Tools', icon: '🔮' },
    { id: 'automated-turf-preparation', label: 'Automated Turf Field Preparation and Planting', icon: '🌱' },
    { id: 'precision-turf-irrigation', label: 'Precision Turf Irrigation and Drainage Systems', icon: '🚿' },
    { id: 'mobile-turf-management', label: 'Mobile Turf Farm Management Apps', icon: '📱' },
    { id: 'smart-turf-transport', label: 'Smart Turf Sod Transport Management', icon: '🚚' },
    { id: 'digital-turf-erosion', label: 'Digital Turf Soil Erosion and Compaction Monitoring', icon: '🌱' },
    { id: 'remote-turf-mapping', label: 'Remote Turf Field Mapping and Analysis', icon: '🗺️' },
    { id: 'real-time-turf-disease-risk', label: 'Real-Time Turf Disease Risk Forecasting', icon: '⚠️' },
    { id: 'turf-grass-selection', label: 'Turf Grass Selection Optimization Tools', icon: '🌱' },
    { id: 'automated-turf-fertilizer', label: 'Automated Turf Fertilizer Blending Systems', icon: '🧪' },
    { id: 'turf-crop-rotation', label: 'Turf Crop Rotation and Sustainability Software', icon: '🔄' }
  ];
// ... existing code ...
// ... existing code ...
case 'vegetable-farming':
  return [
    { id: 'precision-irrigation-vegetables', label: 'Precision Irrigation Systems for Vegetables', icon: '🚿' },
    { id: 'smart-fertilizer-vegetables', label: 'Smart Fertilizer Application for Vegetables', icon: '🧪' },
    { id: 'automated-pest-detection-vegetables', label: 'Automated Pest and Disease Detection for Vegetables', icon: '🐛' },
    { id: 'real-time-soil-moisture-vegetables', label: 'Real-Time Soil Moisture Monitoring for Vegetables', icon: '💧' },
    { id: 'digital-yield-prediction-vegetables', label: 'Digital Crop Yield Prediction for Vegetables', icon: '📈' },
    { id: 'automated-weeding-vegetables', label: 'Automated Weeding Systems for Vegetable Fields', icon: '🌿' },
    { id: 'remote-sensing-vegetables', label: 'Remote Sensing for Vegetable Crop Health', icon: '🛰️' },
    { id: 'digital-vegetable-management', label: 'Digital Vegetable Farm Management Platforms', icon: '📊' },
    { id: 'smart-harvest-scheduling', label: 'Smart Harvest Scheduling and Automation', icon: '📅' },
    { id: 'precision-seeding-vegetables', label: 'Precision Seeding and Planting Systems for Vegetables', icon: '🌱' },
    { id: 'real-time-temperature-vegetables', label: 'Real-Time Temperature and Humidity Control for Vegetables', icon: '🌡️' },
    { id: 'automated-vegetable-sorting', label: 'Automated Vegetable Sorting and Grading', icon: '🔍' },
    { id: 'digital-soil-fertility-vegetables', label: 'Digital Soil Fertility Monitoring for Vegetable Crops', icon: '🌱' },
    { id: 'automated-vegetable-packaging', label: 'Automated Vegetable Packaging and Distribution', icon: '📦' },
    { id: 'smart-watering-vegetables', label: 'Smart Watering Solutions for Vegetable Farms', icon: '💧' },
    { id: 'data-driven-crop-rotation', label: 'Data-Driven Crop Rotation Planning for Vegetables', icon: '🔄' },
    { id: 'automated-harvesting-leafy', label: 'Automated Harvesting for Leafy Vegetables', icon: '🤖' },
    { id: 'real-time-pest-risk-vegetables', label: 'Real-Time Pest and Disease Risk Forecasting for Vegetables', icon: '⚠️' },
    { id: 'precision-planting-vegetables', label: 'Precision Planting for Vegetables', icon: '🌱' },
    { id: 'vegetable-stress-detection', label: 'Vegetable Crop Stress Detection Systems', icon: '⚠️' },
    { id: 'smart-fertilization-vegetables', label: 'Smart Fertilization and Nutrient Management for Vegetables', icon: '🧪' },
    { id: 'digital-market-demand-vegetables', label: 'Digital Market Demand Forecasting for Vegetables', icon: '🔮' },
    { id: 'remote-field-monitoring-vegetables', label: 'Remote Field Monitoring for Vegetable Growth', icon: '🛰️' },
    { id: 'real-time-growth-analytics', label: 'Real-Time Vegetables Growth Analytics', icon: '📊' },
    { id: 'automated-planting-vegetables', label: 'Automated Vegetable Planting and Transplanting Systems', icon: '🌱' },
    { id: 'smart-soil-nutrient-vegetables', label: 'Smart Soil and Nutrient Management for Vegetables', icon: '🌱' },
    { id: 'precision-weed-control-vegetables', label: 'Precision Weed Control Systems for Vegetables', icon: '🌿' },
    { id: 'digital-traceability-vegetables', label: 'Digital Traceability for Vegetable Products', icon: '📡' },
    { id: 'automated-irrigation-scheduling', label: 'Automated Irrigation Scheduling for Vegetables', icon: '🚿' },
    { id: 'real-time-harvest-quality', label: 'Real-Time Monitoring of Vegetable Harvest Quality', icon: '✅' },
    { id: 'smart-crop-protection-vegetables', label: 'Smart Crop Protection for Vegetables', icon: '🛡️' },
    { id: 'remote-monitoring-vegetables', label: 'Remote Monitoring of Vegetable Farm Conditions', icon: '🛰️' },
    { id: 'predictive-maintenance-vegetables', label: 'Predictive Maintenance for Vegetable Farming Equipment', icon: '🛠️' },
    { id: 'mobile-vegetable-management', label: 'Mobile Vegetable Farm Management Apps', icon: '📱' },
    { id: 'real-time-weather-vegetables', label: 'Real-Time Weather Data Integration for Vegetables', icon: '🌦️' },
    { id: 'digital-crop-health-reports', label: 'Digital Vegetable Crop Health Reports', icon: '📝' },
    { id: 'automated-soil-health-vegetables', label: 'Automated Soil Health and pH Control for Vegetables', icon: '🌱' },
    { id: 'digital-water-optimization', label: 'Digital Water Use Optimization for Vegetable Farms', icon: '💧' },
    { id: 'precision-disease-management', label: 'Precision Disease Management for Vegetables', icon: '⚠️' },
    { id: 'real-time-field-mapping', label: 'Real-Time Field Mapping and Vegetables Monitoring', icon: '🗺️' }
  ];
// ... existing code ...
// ... existing code ...
case 'wine-production':
  return [
    { id: 'precision-vineyard-irrigation', label: 'Precision Vineyard Irrigation Systems', icon: '🚿' },
    { id: 'automated-grape-harvesting', label: 'Automated Grape Harvesting Systems', icon: '🤖' },
    { id: 'smart-vineyard-climate', label: 'Smart Vineyard Climate Control', icon: '🌡️' },
    { id: 'digital-vineyard-health', label: 'Digital Vineyard Health Monitoring', icon: '📊' },
    { id: 'real-time-soil-moisture-vineyard', label: 'Real-Time Soil Moisture and pH Monitoring for Vineyards', icon: '🌱' },
    { id: 'automated-grape-sorting', label: 'Automated Grape Sorting and Grading', icon: '🔍' },
    { id: 'smart-fertilization-vineyard', label: 'Smart Fertilization and Nutrient Management for Vineyards', icon: '🧪' },
    { id: 'remote-sensing-vineyard', label: 'Remote Sensing for Vineyard Health and Stress', icon: '🛰️' },
    { id: 'precision-grape-pruning', label: 'Precision Grape Pruning Systems', icon: '✂️' },
    { id: 'real-time-weather-vineyard', label: 'Real-Time Weather and Climate Data Integration for Vineyards', icon: '🌦️' },
    { id: 'automated-wine-fermentation', label: 'Automated Wine Fermentation Monitoring', icon: '🍷' },
    { id: 'smart-grape-pest-detection', label: 'Smart Grape Pest and Disease Detection', icon: '🐛' },
    { id: 'digital-wine-quality', label: 'Digital Wine Quality Control Systems', icon: '✅' },
    { id: 'automated-grape-packing', label: 'Automated Grape Packing and Bottling Solutions', icon: '📦' },
    { id: 'smart-wine-storage', label: 'Smart Wine Storage and Aging Optimization', icon: '🍷' },
    { id: 'predictive-harvesting-grapes', label: 'Predictive Harvesting Tools for Grapes', icon: '🔮' },
    { id: 'digital-grape-yield', label: 'Digital Grape Yield Prediction Systems', icon: '📈' },
    { id: 'automated-wine-bottling', label: 'Automated Wine Bottling and Labeling Systems', icon: '🍷' },
    { id: 'precision-soil-water-vineyard', label: 'Precision Soil and Water Management for Vineyards', icon: '🌱' },
    { id: 'real-time-grape-ripeness', label: 'Real-Time Grape Ripeness Monitoring', icon: '🍇' },
    { id: 'automated-vineyard-maintenance', label: 'Automated Vineyard Equipment Maintenance', icon: '🛠️' },
    { id: 'vineyard-waste-management', label: 'Vineyard Waste Management and Recycling Solutions', icon: '♻️' },
    { id: 'digital-wine-production', label: 'Digital Wine Production Scheduling', icon: '📅' },
    { id: 'smart-vineyard-trellising', label: 'Smart Vineyard Trellising and Training Systems', icon: '🌿' },
    { id: 'data-driven-wine-production', label: 'Data-Driven Wine Production and Processing', icon: '📊' },
    { id: 'real-time-wine-temperature', label: 'Real-Time Monitoring of Wine Temperature and Humidity', icon: '🌡️' },
    { id: 'wine-flavor-profiling', label: 'Wine Flavor and Aroma Profiling Tools', icon: '🍷' },
    { id: 'smart-grape-disease', label: 'Smart Grape Disease Forecasting', icon: '⚠️' },
    { id: 'digital-wine-traceability', label: 'Digital Wine Traceability and Compliance Tracking', icon: '📡' },
    { id: 'vineyard-fertilizer-automation', label: 'Vineyard Fertilizer Application Automation', icon: '🧪' },
    { id: 'remote-vineyard-surveillance', label: 'Remote Vineyard Surveillance for Security', icon: '🛰️' },
    { id: 'wine-supply-chain', label: 'Wine Supply Chain and Logistics Optimization', icon: '📦' },
    { id: 'digital-harvest-scheduling', label: 'Digital Harvest Scheduling and Coordination for Grapes', icon: '📅' },
    { id: 'automated-wine-quality', label: 'Automated Wine Quality Testing and Analysis', icon: '🍷' },
    { id: 'real-time-wine-storage', label: 'Real-Time Wine Storage Condition Monitoring', icon: '🍷' },
    { id: 'smart-wine-blending', label: 'Smart Wine Blending Tools', icon: '🍷' },
    { id: 'digital-wine-inventory', label: 'Digital Wine Inventory Management', icon: '📦' },
    { id: 'precision-grape-genetics', label: 'Precision Grape Vine Genetics and Breeding', icon: '🧬' },
    { id: 'vineyard-harvesting-analytics', label: 'Vineyard Harvesting Performance Analytics', icon: '📊' },
    { id: 'wine-marketing-distribution', label: 'Wine Marketing and Distribution Platforms', icon: '📢' }
  ];
// ... existing code ...

      default:
        return [
          { id: 'general-niche-1', label: 'General Niche 1', icon: '🔍' },
          { id: 'general-niche-2', label: 'General Niche 2', icon: '🎯' }
        ];
    }
  };
  
  // Step 4: Technologies
  const technologyOptions = [
    { id: 'ai-ml', label: 'AI/Machine Learning', icon: '🧠' },
    { id: 'blockchain', label: 'Blockchain', icon: '🔗' },
    { id: 'cloud', label: 'Cloud Computing', icon: '☁️' },
    { id: 'iot', label: 'Internet of Things', icon: '🔌' },
    { id: 'ar-vr', label: 'AR/VR', icon: '👓' },
    { id: 'robotics', label: 'Robotics', icon: '🤖' },
    { id: 'big-data', label: 'Big Data', icon: '📊' },
    { id: 'mobile', label: 'Mobile Technology', icon: '📱' }
  ];
  
  // Step 6: Target Audience
  const targetAudienceOptions = [
    { id: 'consumers', label: 'Consumers (B2C)', icon: '👤' },
    { id: 'businesses', label: 'Businesses (B2B)', icon: '🏢' },
    { id: 'governments', label: 'Governments', icon: '🏛️' },
    { id: 'nonprofits', label: 'Nonprofits', icon: '🤝' },
    { id: 'education', label: 'Educational Institutions', icon: '🎓' },
    { id: 'healthcare', label: 'Healthcare Providers', icon: '⚕️' },
    { id: 'developers', label: 'Developers', icon: '👨‍💻' },
    { id: 'startups', label: 'Startups', icon: '🚀' }
  ];
  
  // Step 7: Platform
  const platformOptions = [
    { id: 'web-app', label: 'Web Application', icon: '🌐' },
    { id: 'mobile-app', label: 'Mobile Application', icon: '📱' },
    { id: 'desktop-app', label: 'Desktop Application', icon: '💻' },
    { id: 'api', label: 'API Service', icon: '🔄' },
    { id: 'saas', label: 'SaaS Platform', icon: '☁️' },
    { id: 'marketplace', label: 'Marketplace', icon: '🛒' },
    { id: 'iot-platform', label: 'IoT Platform', icon: '🔌' },
    { id: 'hybrid', label: 'Hybrid Platform', icon: '🔄' }
  ];
  
  // Step 8: Frontend Technologies
  const frontendOptions = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' },
    { id: 'vue', label: 'Vue.js', icon: '🟢' },
    { id: 'svelte', label: 'Svelte', icon: '🔥' },
    { id: 'next', label: 'Next.js', icon: '⏭️' },
    { id: 'native', label: 'React Native', icon: '📱' },
    { id: 'flutter', label: 'Flutter', icon: '🦋' },
    { id: 'html-css-js', label: 'HTML/CSS/JavaScript', icon: '📄' }
  ];
  
  // Backend Technologies
  const backendOptions = [
    { id: 'node', label: 'Node.js', icon: '🟢' },
    { id: 'python', label: 'Python', icon: '🐍' },
    { id: 'java', label: 'Java', icon: '☕' },
    { id: 'ruby', label: 'Ruby', icon: '💎' },
    { id: 'php', label: 'PHP', icon: '🐘' },
    { id: 'go', label: 'Go', icon: '🔵' },
    { id: 'dotnet', label: '.NET', icon: '🔷' },
    { id: 'rust', label: 'Rust', icon: '🦀' }
  ];
  
  // Step 9: Hosting Platform
  const hostingOptions = [
    { id: 'aws', label: 'Amazon Web Services', icon: '☁️' },
    { id: 'azure', label: 'Microsoft Azure', icon: '☁️' },
    { id: 'gcp', label: 'Google Cloud Platform', icon: '☁️' },
    { id: 'heroku', label: 'Heroku', icon: '🟣' },
    { id: 'digitalocean', label: 'DigitalOcean', icon: '🌊' },
    { id: 'vercel', label: 'Vercel', icon: '▲' },
    { id: 'netlify', label: 'Netlify', icon: '🕸️' },
    { id: 'on-premise', label: 'On-premise', icon: '🏢' }
  ];
  
  // Step 10: Database
  const databaseOptions = [
    { id: 'mysql', label: 'MySQL', icon: '🐬' },
    { id: 'postgresql', label: 'PostgreSQL', icon: '🐘' },
    { id: 'mongodb', label: 'MongoDB', icon: '🍃' },
    { id: 'firebase', label: 'Firebase', icon: '🔥' },
    { id: 'dynamodb', label: 'DynamoDB', icon: '📊' },
    { id: 'redis', label: 'Redis', icon: '🔴' },
    { id: 'elasticsearch', label: 'Elasticsearch', icon: '🔍' },
    { id: 'sql-server', label: 'SQL Server', icon: '📁' }
  ];
  
  // Step 11: Authentication & Security
  const authSecurityOptions = [
    { id: 'oauth', label: 'OAuth', icon: '🔐' },
    { id: 'jwt', label: 'JWT', icon: '🔑' },
    { id: 'mfa', label: 'Multi-factor Authentication', icon: '🔢' },
    { id: 'sso', label: 'Single Sign-On', icon: '🔄' },
    { id: 'rbac', label: 'Role-based Access Control', icon: '👥' },
    { id: 'data-encryption', label: 'Data Encryption', icon: '🔒' },
    { id: 'api-security', label: 'API Security', icon: '🛡️' },
    { id: 'compliance', label: 'Compliance Frameworks', icon: '📋' }
  ];
  
  // Step 12: Monetization
  const monetizationOptions = [
    { id: 'subscription', label: 'Subscription Model', icon: '💳' },
    { id: 'one-time', label: 'One-time Purchase', icon: '💰' },
    { id: 'freemium', label: 'Freemium', icon: '🆓' },
    { id: 'ads', label: 'Advertisement', icon: '📢' },
    { id: 'marketplace', label: 'Marketplace Fees', icon: '🛒' },
    { id: 'data-monetization', label: 'Data Monetization', icon: '📊' },
    { id: 'api-usage', label: 'API Usage Fees', icon: '🔄' },
    { id: 'donation', label: 'Donation/Open Source', icon: '🤝' }
  ];
  
  // Step 13: Version Control
  const versionControlOptions = [
    { id: 'git', label: 'Git', icon: '📝' },
    { id: 'github', label: 'GitHub', icon: '🐙' },
    { id: 'gitlab', label: 'GitLab', icon: '🦊' },
    { id: 'bitbucket', label: 'Bitbucket', icon: '🪣' },
    { id: 'azure-devops', label: 'Azure DevOps', icon: '🔷' },
    { id: 'svn', label: 'SVN', icon: '📁' },
    { id: 'mercurial', label: 'Mercurial', icon: '☿️' },
    { id: 'perforce', label: 'Perforce', icon: '🔄' }
  ];
  
  // Step 14: UI/UX Design
  const uiuxOptions = [
    { id: 'material', label: 'Material Design', icon: '🟦' },
    { id: 'flat', label: 'Flat Design', icon: '🟪' },
    { id: 'skeuomorphic', label: 'Skeuomorphic Design', icon: '🎨' },
    { id: 'minimalist', label: 'Minimalist', icon: '◻️' },
    { id: 'brutalist', label: 'Brutalist', icon: '🧱' },
    { id: 'neumorphism', label: 'Neumorphism', icon: '🔘' },
    { id: 'glassmorphism', label: 'Glassmorphism', icon: '🔍' },
    { id: 'custom', label: 'Custom Design System', icon: '✨' }
  ];
  
  // Step 15: Timeline
  const timelineOptions = [
    { id: '1-3-months', label: '1-3 months', icon: '🕒' },
    { id: '3-6-months', label: '3-6 months', icon: '🕓' },
    { id: '6-12-months', label: '6-12 months', icon: '🕔' },
    { id: '1-2-years', label: '1-2 years', icon: '🕕' },
    { id: '2-plus-years', label: '2+ years', icon: '🕖' },
    { id: 'ongoing', label: 'Ongoing Project', icon: '🔄' },
    { id: 'mvp-first', label: 'MVP First (3 months)', icon: '🚀' },
    { id: 'agile', label: 'Agile Iterations', icon: '🔄' }
  ];
  
  // Step 16: Legal & Compliance
  const legalComplianceOptions = [
    { id: 'gdpr', label: 'GDPR Compliance', icon: '🇪🇺' },
    { id: 'ccpa', label: 'CCPA Compliance', icon: '🇺🇸' },
    { id: 'hipaa', label: 'HIPAA Compliance', icon: '⚕️' },
    { id: 'pci-dss', label: 'PCI DSS Compliance', icon: '💳' },
    { id: 'coppa', label: 'COPPA Compliance', icon: '👶' },
    { id: 'accessibility', label: 'Accessibility (ADA, WCAG)', icon: '♿' },
    { id: 'terms-privacy', label: 'Terms & Privacy Policies', icon: '📜' },
    { id: 'intellectual-property', label: 'Intellectual Property Protection', icon: '©️' }
  ];
  
// ... existing code ...
  const handleSelection = (id, isMultiSelect = false) => {
    switch(currentStep) {
      case 1: // Base Industry
      setFormData({ ...formData, baseIndustry: id, subIndustry: null }); // Reset subIndustry
        break;
      case 2: // Sub-Industry
      setFormData({ ...formData, subIndustry: id });
        break;
        case 3: // Business Model
        setFormData({...formData, niches: id});
        break;
          case 4: // Business Model
        setFormData({...formData, primaryTechDomains: id});
        break;
    case 5: // Business Model
      setFormData({...formData, businessModel: id});
        break;
      case 6: // Target Audience
        setFormData({...formData, targetAudience: id});
        break;
    case 7: // Market Selection
      setFormData({...formData, market: id});
        break;
    /*case 7: // Specific Problems
        if (isMultiSelect) {
        const updatedProblems = formData.specificProblems?.includes(id)
          ? formData.specificProblems.filter((item) => item !== id)
          : [...(formData.specificProblems || []), id];
        setFormData({...formData, specificProblems: updatedProblems});
        }
        break;
    case 8: // Solutions
      if (isMultiSelect) {
        const updatedSolutions = formData.solutions?.includes(id)
          ? formData.solutions.filter((item) => item !== id)
          : [...(formData.solutions || []), id];
        setFormData({...formData, solutions: updatedSolutions});
      }
        break;
    case 9: // Healthcare Technology Platforms
      if (isMultiSelect) {
        const updatedPlatforms = formData.healthcarePlatforms?.includes(id)
          ? formData.healthcarePlatforms.filter((item) => item !== id)
          : [...(formData.healthcarePlatforms || []), id];
        setFormData({...formData, healthcarePlatforms: updatedPlatforms});
      }
        break;
    case 10: // Machine Learning Frameworks
        if (isMultiSelect) {
        const updatedMLFrameworks = formData.mlFrameworks?.includes(id)
          ? formData.mlFrameworks.filter((item) => item !== id)
          : [...(formData.mlFrameworks || []), id];
        setFormData({...formData, mlFrameworks: updatedMLFrameworks});
        }
        break;
    case 11: // NLP Tools
      if (isMultiSelect) {
        const updatedNLPTools = formData.nlpTools?.includes(id)
          ? formData.nlpTools.filter((item) => item !== id)
          : [...(formData.nlpTools || []), id];
        setFormData({...formData, nlpTools: updatedNLPTools});
      }
        break;
    case 12: // Platform Type
      setFormData({...formData, platformType: id});
      break;
      case 13: // Combined Front-End Technologies
      if (isMultiSelect) {
        if (formData.platformType === 'web') {
          const updatedWebFrontend = formData.webFrontendTech?.includes(id)
            ? formData.webFrontendTech.filter((item) => item !== id)
            : [...(formData.webFrontendTech || []), id];
          setFormData({...formData, webFrontendTech: updatedWebFrontend});
        } else if (formData.platformType === 'mobile') {
          const updatedMobileFrontend = formData.mobileFrontendTech?.includes(id)
            ? formData.mobileFrontendTech.filter((item) => item !== id)
            : [...(formData.mobileFrontendTech || []), id];
          setFormData({...formData, mobileFrontendTech: updatedMobileFrontend});
        } else if (formData.platformType === 'hybrid') {
          // For hybrid, allow selection of both web and mobile front-end technologies
          const updatedWebFrontend = formData.webFrontendTech?.includes(id)
            ? formData.webFrontendTech.filter((item) => item !== id)
            : [...(formData.webFrontendTech || []), id];
          const updatedMobileFrontend = formData.mobileFrontendTech?.includes(id)
            ? formData.mobileFrontendTech.filter((item) => item !== id)
            : [...(formData.mobileFrontendTech || []), id];
          setFormData({
            ...formData,
            webFrontendTech: updatedWebFrontend,
            mobileFrontendTech: updatedMobileFrontend
          });
        }
      }
      break;

    case 14: // Combined Back-End Technologies
      if (isMultiSelect) {
        if (formData.platformType === 'web') {
          const updatedWebBackend = formData.webBackendTech?.includes(id)
            ? formData.webBackendTech.filter((item) => item !== id)
            : [...(formData.webBackendTech || []), id];
          setFormData({...formData, webBackendTech: updatedWebBackend});
        } else if (formData.platformType === 'mobile') {
          const updatedMobileBackend = formData.mobileBackendTech?.includes(id)
            ? formData.mobileBackendTech.filter((item) => item !== id)
            : [...(formData.mobileBackendTech || []), id];
          setFormData({...formData, mobileBackendTech: updatedMobileBackend});
        } else if (formData.platformType === 'hybrid') {
          // For hybrid, allow selection of both web and mobile back-end technologies
          const updatedWebBackend = formData.webBackendTech?.includes(id)
            ? formData.webBackendTech.filter((item) => item !== id)
            : [...(formData.webBackendTech || []), id];
          const updatedMobileBackend = formData.mobileBackendTech?.includes(id)
            ? formData.mobileBackendTech.filter((item) => item !== id)
            : [...(formData.mobileBackendTech || []), id];
          setFormData({
            ...formData,
            webBackendTech: updatedWebBackend,
            mobileBackendTech: updatedMobileBackend
          });
        }
      }
      break;
    case 15: // Databases
      if (isMultiSelect) {
        const updatedDatabases = formData.databases?.includes(id)
          ? formData.databases.filter((item) => item !== id)
          : [...(formData.databases || []), id];
        setFormData({...formData, databases: updatedDatabases});
      }
      break;
    case 16: // Hosting Platforms
      if (isMultiSelect) {
        const updatedHosting = formData.hostingPlatforms?.includes(id)
          ? formData.hostingPlatforms.filter((item) => item !== id)
          : [...(formData.hostingPlatforms || []), id];
        setFormData({...formData, hostingPlatforms: updatedHosting});
      }
      break;
    case 17: // Version Control
        setFormData({...formData, versionControl: id});
        break;
    case 18: // UI/UX Design
        setFormData({...formData, uiuxDesign: id});
        break;
    case 19: // No-Code Platforms
      if (isMultiSelect) {
        const updatedNoCode = formData.noCodePlatforms?.includes(id)
          ? formData.noCodePlatforms.filter((item) => item !== id)
          : [...(formData.noCodePlatforms || []), id];
        setFormData({...formData, noCodePlatforms: updatedNoCode});
      }
        break;
    case 20: // Low-Code Platforms
        if (isMultiSelect) {
        const updatedLowCode = formData.lowCodePlatforms?.includes(id)
          ? formData.lowCodePlatforms.filter((item) => item !== id)
          : [...(formData.lowCodePlatforms || []), id];
        setFormData({...formData, lowCodePlatforms: updatedLowCode});
        }
        break;
    case 21: // Authentication and Security
      if (isMultiSelect) {
        const updatedAuthSecurity = formData.authSecurity?.includes(id)
          ? formData.authSecurity.filter((item) => item !== id)
          : [...(formData.authSecurity || []), id];
        setFormData({...formData, authSecurity: updatedAuthSecurity});
      }
      break;
    case 22: // Testing Types
      if (isMultiSelect) {
        const updatedTesting = formData.testingTypes?.includes(id)
          ? formData.testingTypes.filter((item) => item !== id)
          : [...(formData.testingTypes || []), id];
        setFormData({...formData, testingTypes: updatedTesting});
      }
      break;
    case 23: // Pricing Models
      setFormData({...formData, pricingModel: id});
      break;
    case 24: // Payment Gateways
      if (isMultiSelect) {
        const updatedPaymentGateways = formData.paymentGateways?.includes(id)
          ? formData.paymentGateways.filter((item) => item !== id)
          : [...(formData.paymentGateways || []), id];
        setFormData({...formData, paymentGateways: updatedPaymentGateways});
      }
      break;
    case 25: // APIs
      if (isMultiSelect) {
        const updatedAPIs = formData.apis?.includes(id)
          ? formData.apis.filter((item) => item !== id)
          : [...(formData.apis || []), id];
        setFormData({...formData, apis: updatedAPIs});
      }
      break;
    case 26: // Data Collection Methods
      if (isMultiSelect) {
        const updatedDataCollection = formData.dataCollection?.includes(id)
          ? formData.dataCollection.filter((item) => item !== id)
          : [...(formData.dataCollection || []), id];
        setFormData({...formData, dataCollection: updatedDataCollection});
      }
      break;

   case 27: // Data Processing Tools
   if (isMultiSelect) {
     const updatedDataProcessing = formData.dataProcessing?.includes(id)
       ? formData.dataProcessing.filter((item) => item !== id) // Remove if already selected
       : [...(formData.dataProcessing || []), id]; // Add if not selected
     setFormData({ ...formData, dataProcessing: updatedDataProcessing });
   }
   break;

      case 28: // Legal and Compliance (or your final case)
      if (isMultiSelect) {
        const updatedLegalCompliance = formData.legalCompliance?.includes(id)
          ? formData.legalCompliance.filter((item) => item !== id)
          : [...(formData.legalCompliance || []), id];
        setFormData({...formData, legalCompliance: updatedLegalCompliance});
        }
        break;*/
      default:
        break;
    }
  };
// ... existing code ...
  
  const handleTextInput = (e) => {
    if (currentStep === 5) { // Problem/Solution
      setFormData({...formData, problem: e.target.value});
    }
  };
  
  
  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete the form
      onComplete(formData);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };
  
// ... existing code ...
  const isNextDisabled = () => {
    switch(currentStep) {
      case 1:
        return !formData.baseIndustry;
      case 2:
        return !formData.subIndustry;
      case 3:
      return !formData.niches;
      case 4:
      return formData.primaryTechDomains?.length === 0;
      case 5:
      return !formData.businessModel;
      case 6:
        return !formData.targetAudience;
      case 7:
      return !formData.market;
      /*case 7:
      return formData.specificProblems?.length === 0;
      case 8:
      return formData.solutions?.length === 0;
      case 9:
      return formData.healthcarePlatforms?.length === 0;
      case 10:
      return formData.mlFrameworks?.length === 0;
      case 11:
      return formData.nlpTools?.length === 0;
      case 12:
      return !formData.platformType;
    case 13: // Combined Front-End Technologies
      if (formData.platformType === 'web') {
        return formData.webFrontendTech?.length === 0;
      } else if (formData.platformType === 'mobile') {
        return formData.mobileFrontendTech?.length === 0;
      } else if (formData.platformType === 'hybrid') {
        // For hybrid, both web and mobile front-end technologies must be selected
        return formData.webFrontendTech?.length === 0 || formData.mobileFrontendTech?.length === 0;
      }
      return true; // Default case
    case 14: // Combined Back-End Technologies
      if (formData.platformType === 'web') {
        return formData.webBackendTech?.length === 0;
      } else if (formData.platformType === 'mobile') {
        return formData.mobileBackendTech?.length === 0;
      } else if (formData.platformType === 'hybrid') {
        // For hybrid, both web and mobile back-end technologies must be selected
        return formData.webBackendTech?.length === 0 || formData.mobileBackendTech?.length === 0;
      }
      return true; // Default case
      case 15:
      return formData.databases?.length === 0;
      case 16:
      return formData.hostingPlatforms?.length === 0;
    case 17:
      return !formData.versionControl;
    case 18:
      return !formData.uiuxDesign;
    case 19:
      return formData.noCodePlatforms?.length === 0;
    case 20:
      return formData.lowCodePlatforms?.length === 0;
    case 21:
      return formData.authSecurity?.length === 0;
    case 22:
      return formData.testingTypes?.length === 0;
    case 23:
      return !formData.pricingModel;
    case 24:
      return formData.paymentGateways?.length === 0;
    case 25:
      return formData.apis?.length === 0;
    case 26:
      return formData.dataCollection?.length === 0;
    case 27:
      return formData.dataProcessing?.length === 0;
    case 28:
      return formData.legalCompliance?.length === 0;
      */
      default:
        return false;
    }
  };
// ... existing code ...
  
  // Calculate progress percentage
  const progress = (currentStep / 7) * 100;
  
  const renderStepContent = () => {
    switch(currentStep) {
      case 1: // Primary Industry
        return (
          <>
            <h2 className="input-form-title">Select the Primary Industry</h2>
            <div className="options-grid">
              {baseIndustries.map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.baseIndustry === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );

      case 2: // Sub-Industry
        return (
          <>
            <h2 className="input-form-title">
              {formData.baseIndustry === 'healthcare'
                ? 'Select the Sub-Industry within the Healthcare sector'
                : formData.baseIndustry === 'banking'
                ? 'Select the Sub-Industry within the Banking sector'
                : formData.baseIndustry === 'agriculture'
                ? 'Select the Sub-Industry within the Agriculture sector'
                : 'Which sub-industry within the selected base industry are you most focused on?'}
            </h2>
            <div className="options-grid">
              {getSubIndustries().map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.subIndustry === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );

    

      case 3: // Niche
      
        return (
          <>
            <h2 className="input-form-title">{formData.baseIndustry === 'healthcare'
                ? 'Select the Niche within the Healthcare sector'
                : formData.baseIndustry === 'banking'
                ? 'Select the Niche within the Banking sector'
                : formData.baseIndustry === 'agriculture'
                ? 'Select the Niche within the Agriculture sector'
                : 'Which Niche within the selected base industry are you most focused on?'}</h2>
            <div className="options-grid">
              {getNiches().map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.niches === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      
      case 4: // Primary Technology Domains
        return (
          <>
          <h2 className="input-form-title">Select the Technology Domain</h2>
            <div className="options-grid">
            {[
              { id: 'ai', label: 'Artificial Intelligence (AI)', icon: '🤖' },
              { id: 'ml', label: 'Machine Learning (ML)', icon: '🧠' },
              { id: 'cloud-computing', label: 'Cloud Computing', icon: '☁️' },
              { id: 'big-data-analytics', label: 'Big Data Analytics', icon: '📊' },
              { id: 'iot', label: 'Internet of Things (IoT)', icon: '🌐' },
              { id: 'blockchain', label: 'Blockchain Technology', icon: '⛓️' },
              { id: 'rpa', label: 'Robotic Process Automation (RPA)', icon: '🤖' },
              { id: 'nlp', label: 'Natural Language Processing (NLP)', icon: '🗣️' },
              { id: 'telemedicine', label: 'Telemedicine', icon: '🏥' },
              { id: 'wearable-devices', label: 'Wearable Devices', icon: '⌚' },
              { id: 'ar', label: 'Augmented Reality (AR)', icon: '🕶️' },
              { id: 'vr', label: 'Virtual Reality (VR)', icon: '👓' },
              { id: '5g', label: '5G Technology', icon: '📶' },
              { id: 'edge-computing', label: 'Edge Computing', icon: '🖥️' },
              { id: 'voice-recognition', label: 'Voice Recognition Technology', icon: '🎤' },
              { id: 'data-privacy', label: 'Data Privacy and Security Technologies', icon: '🔒' },
              { id: 'ehr', label: 'Electronic Health Records (EHR)', icon: '📋' },
              { id: 'automated-billing', label: 'Automated Billing Systems', icon: '💳' },
              { id: 'biometric-auth', label: 'Biometric Authentication', icon: '🖐️' },
              { id: 'healthcare-automation', label: 'Healthcare Automation Software', icon: '⚙️' },
              { id: 'cdss', label: 'Clinical Decision Support Systems (CDSS)', icon: '📈' },
              { id: 'predictive-analytics', label: 'Predictive Analytics', icon: '🔮' },
              { id: 'patient-monitoring', label: 'Patient Monitoring Systems', icon: '📉' },
              { id: 'robotics', label: 'Robotics in Healthcare', icon: '🤖' },
              { id: 'smart-hospitals', label: 'Smart Hospitals', icon: '🏥' },
              { id: 'data-integration', label: 'Data Integration Platforms', icon: '🔗' },
              { id: 'healthcare-iot', label: 'Healthcare IoT Devices', icon: '🌐' },
              { id: 'smart-wearables', label: 'Smart Wearables', icon: '⌚' },
              { id: 'e-prescribing', label: 'E-Prescribing Systems', icon: '💊' },
              { id: 'hie', label: 'Health Information Exchange (HIE)', icon: '📤' },
              { id: 'automated-imaging', label: 'Automated Imaging Systems', icon: '📷' },
              { id: 'medical-chatbots', label: 'Medical Chatbots', icon: '💬' },
              { id: 'supply-chain', label: 'Supply Chain Automation', icon: '📦' },
              { id: 'medical-research', label: 'Automation in Medical Research', icon: '🔬' },
              { id: 'testing-diagnostics', label: 'Automated Testing and Diagnostics', icon: '🩺' },
              { id: 'computer-vision', label: 'Computer Vision', icon: '👁️' },
              { id: 'genomic-data', label: 'Genomic Data Analysis', icon: '🧬' },
              { id: 'digital-therapeutics', label: 'Digital Therapeutics', icon: '💡' },
              { id: 'mhealth', label: 'Mobile Health (mHealth)', icon: '📱' },
              { id: 'sdoh', label: 'Social Determinants of Health (SDOH) Platforms', icon: '🌍' }
            ].map((item) => (
                <button
                  key={item.id}
                className={`option-button ${formData.primaryTechDomains?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );

        case 5: // Business Model
        return (
          <>
            <h2 className="input-form-title">Select the Business Model
            </h2>
            <div className="options-grid">
              {[
                { id: 'saas', label: 'Software-as-a-Service (SaaS)', icon: '💻' },
                { id: 'b2b', label: 'Business-to-Business (B2B)', icon: '🏢' },
                { id: 'b2c', label: 'Business-to-Consumer (B2C)', icon: '🛒' },
                { id: 'd2c', label: 'Direct-to-Consumer (D2C)', icon: '🏠' },
                { id: 'subscription', label: 'Subscription-Based Service', icon: '📅' },
                { id: 'freemium', label: 'Freemium', icon: '🎁' },
                { id: 'marketplace', label: 'Marketplace', icon: '🛍️' },
                { id: 'pay-per-use', label: 'Pay-Per-Use', icon: '💳' },
                { id: 'paas', label: 'Platform-as-a-Service (PaaS)', icon: '☁️' },
                { id: 'consultant', label: 'Consultant or Freelancer Services', icon: '👔' },
                { id: 'franchise', label: 'Franchise', icon: '🏪' },
                { id: 'licensing', label: 'Licensing', icon: '📜' },
                { id: 'managed-services', label: 'Managed Services', icon: '🛠️' },
                { id: 'affiliate', label: 'Affiliate Marketing', icon: '🔗' },
                { id: 'referral', label: 'Referral-Based', icon: '👥' },
                { id: 'crowdsourcing', label: 'Crowdsourcing', icon: '🤝' },
                { id: 'advertising', label: 'Advertising-Based', icon: '📢' },
                { id: 'insurance-partnerships', label: 'Insurance Partnerships', icon: '🛡️' },
                { id: 'telemedicine', label: 'Telemedicine', icon: '📱' },
                { id: 'pay-for-performance', label: 'Pay-for-Performance', icon: '💵' },
                { id: 'outcome-based', label: 'Outcome-Based', icon: '📈' },
                { id: 'integrated-care', label: 'Integrated Care', icon: '🏥' },
                { id: 'healthtech-startup', label: 'HealthTech Startup', icon: '🚀' },
                { id: 'hybrid', label: 'Hybrid (B2B & B2C)', icon: '🔄' },
                { id: 'peer-to-peer', label: 'Peer-to-Peer', icon: '👥' },
                { id: 'daas', label: 'Data-as-a-Service (DaaS)', icon: '📊' },
                { id: 'collaborative-care', label: 'Collaborative Care', icon: '🤝' },
                { id: 'value-based-care', label: 'Value-Based Care', icon: '💰' },
                { id: 'contractual-agreements', label: 'Contractual Agreements', icon: '📜' },
                { id: 'health-insurance-providers', label: 'Health Insurance Providers', icon: '🛡️' },
                { id: 'non-profit-healthcare', label: 'Non-Profit Healthcare', icon: '🤝' },
                { id: 'government-funded-services', label: 'Government-Funded Services', icon: '🏛️' },
                { id: 'ecommerce-health-products', label: 'E-commerce for Health Products', icon: '🛒' },
                { id: 'wellness-program-subscription', label: 'Wellness Program Subscription', icon: '📅' },
                { id: 'pay-per-consultation', label: 'Pay-Per-Consultation', icon: '💵' },
                { id: 'retail-healthcare', label: 'Retail Healthcare', icon: '🏪' },
                { id: 'community-health', label: 'Community Health', icon: '🏥' },
                { id: 'mobile-health-apps', label: 'Mobile Health Applications', icon: '📱' },
                { id: 'telehealth-platforms', label: 'Telehealth Platforms', icon: '📞' },
                { id: 'clinical-research-and-trials', label: 'Clinical Research and Trials', icon: '🔬' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.businessModel === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );

      case 6: // Target Audience
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Select the Target Audience
            </h2>
            <div className="options-grid">
              {[
                { id: 'patients-general-public', label: 'Patients (General Public)', icon: '👥' },
                { id: 'elderly-population', label: 'Elderly Population', icon: '👵' },
                { id: 'children-and-pediatrics', label: 'Children and Pediatrics', icon: '👶' },
                { id: 'pregnant-women', label: 'Pregnant Women', icon: '🤰' },
                { id: 'healthcare-providers', label: 'Healthcare Providers (Doctors, Nurses, etc.)', icon: '👨‍⚕️' },
                { id: 'health-insurance-companies', label: 'Health Insurance Companies', icon: '🛡️' },
                { id: 'pharmaceutical-companies', label: 'Pharmaceutical Companies', icon: '💊' },
                { id: 'healthcare-administrators', label: 'Healthcare Administrators and Executives', icon: '👔' },
                { id: 'medical-researchers', label: 'Medical Researchers', icon: '🔬' },
                { id: 'hospitals-and-healthcare-facilities', label: 'Hospitals and Healthcare Facilities', icon: '🏥' },
                { id: 'mental-health-patients', label: 'Mental Health Patients', icon: '🧠' },
                { id: 'chronic-disease-patients', label: 'Chronic Disease Patients (e.g., Diabetes, Heart Disease)', icon: '🩺' },
                { id: 'wellness-enthusiasts', label: 'Wellness Enthusiasts', icon: '💪' },
                { id: 'individuals-with-special-needs', label: 'Individuals with Special Needs', icon: '♿' },
                { id: 'public-health-officials', label: 'Public Health Officials', icon: '🌍' },
                { id: 'health-and-fitness-enthusiasts', label: 'Health and Fitness Enthusiasts', icon: '🏋️' },
                { id: 'caregivers-and-family-members', label: 'Caregivers and Family Members', icon: '👪' },
                { id: 'fitness-and-rehabilitation-centers', label: 'Fitness and Rehabilitation Centers', icon: '🏋️‍♂️' },
                { id: 'government-health-agencies', label: 'Government Health Agencies', icon: '🏛️' },
                { id: 'medical-device-manufacturers', label: 'Medical Device Manufacturers', icon: '⚙️' },
                { id: 'medical-equipment-suppliers', label: 'Medical Equipment Suppliers', icon: '🩺' },
                { id: 'government-contractors', label: 'Government Contractors for Healthcare Services', icon: '📜' },
                { id: 'employers-and-corporate-health-programs', label: 'Employers and Corporate Health Programs', icon: '🏢' },
                { id: 'educational-institutions', label: 'Educational Institutions (Medical Schools, Universities)', icon: '🎓' },
                { id: 'insurance-brokers-and-agents', label: 'Insurance Brokers and Agents', icon: '📋' },
                { id: 'healthcare-startups-and-innovators', label: 'Healthcare Startups and Innovators', icon: '🚀' },
                { id: 'telemedicine-users', label: 'Telemedicine Users', icon: '📱' },
                { id: 'healthcare-consultants', label: 'Healthcare Consultants', icon: '💼' },
                { id: 'nonprofit-healthcare-organizations', label: 'Nonprofit Healthcare Organizations', icon: '🤝' },
                { id: 'environmental-health-organizations', label: 'Environmental Health Organizations', icon: '🌿' },
                { id: 'clinical-trial-participants', label: 'Clinical Trial Participants', icon: '🧪' },
                { id: 'diagnostic-laboratories', label: 'Diagnostic Laboratories', icon: '🔬' },
                { id: 'community-health-organizations', label: 'Community Health Organizations', icon: '🏘️' },
                { id: 'researchers-in-biomedical-engineering', label: 'Researchers in Biomedical Engineering', icon: '⚙️' },
                { id: 'healthcare-software-providers', label: 'Healthcare Software Providers', icon: '💻' },
                { id: 'veterinary-health-providers', label: 'Veterinary Health Providers', icon: '🐾' },
                { id: 'sports-medicine-and-rehabilitation-patients', label: 'Sports Medicine and Rehabilitation Patients', icon: '🏃' },
                { id: 'public-health-advocacy-groups', label: 'Public Health Advocacy Groups', icon: '📢' },
                { id: 'rural-and-underserved-communities', label: 'Rural and Underserved Communities', icon: '🏞️' },
                { id: 'healthcare-marketing-agencies', label: 'Healthcare Marketing Agencies', icon: '📈' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.targetAudience === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the target audiences for your start-up or project idea</h2>
            <div className="options-grid">
              {[
                { id: 'general-public', label: 'General Public', icon: '👥' },
                { id: 'businesses', label: 'Businesses', icon: '🏢' },
                { id: 'government-agencies', label: 'Government Agencies', icon: '🏛️' },
                { id: 'nonprofit-organizations', label: 'Nonprofit Organizations', icon: '🤝' },
                { id: 'educational-institutions', label: 'Educational Institutions', icon: '🎓' },
                { id: 'startups', label: 'Startups', icon: '🚀' },
                { id: 'investors', label: 'Investors', icon: '💰' },
                { id: 'developers', label: 'Developers', icon: '👨‍💻' },
                { id: 'marketers', label: 'Marketers', icon: '📈' },
                { id: 'consumers', label: 'Consumers', icon: '🛒' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.targetAudience === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }

      case 7: // Market Selection
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Select the Market Segment</h2>
            <div className="options-grid">
              {[
                { id: 'local', label: 'Local', icon: '📍' },
                { id: 'regional', label: 'Regional', icon: '🌍' },
                { id: 'national', label: 'National', icon: '🇺🇸' },
                { id: 'global', label: 'Global', icon: '🌐' },
                { id: 'saturated', label: 'Saturated', icon: '📊' },
                { id: 'emerging', label: 'Emerging', icon: '🚀' },
                { id: 'niche', label: 'Niche', icon: '🎯' },
                { id: 'developed', label: 'Developed', icon: '🏙️' },
                { id: 'developing', label: 'Developing', icon: '🏗️' },
                { id: 'fragmented', label: 'Fragmented', icon: '🧩' },
                { id: 'consolidated', label: 'Consolidated', icon: '🔗' },
                { id: 'mature', label: 'Mature', icon: '📈' },
                { id: 'underdeveloped', label: 'Underdeveloped', icon: '🌱' },
                { id: 'regulated', label: 'Regulated', icon: '📜' },
                { id: 'unregulated', label: 'Unregulated', icon: '🚫' },
                { id: 'innovative', label: 'Innovative', icon: '💡' },
                
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.market === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the market that best aligns with your start-up or project idea</h2>
            <div className="options-grid">
              {[
                { id: 'local', label: 'Local', icon: '📍' },
                { id: 'regional', label: 'Regional', icon: '🌍' },
                { id: 'national', label: 'National', icon: '🇺🇸' },
                { id: 'global', label: 'Global', icon: '🌐' },
                { id: 'emerging', label: 'Emerging', icon: '🚀' },
                { id: 'developed', label: 'Developed', icon: '🏙️' },
                { id: 'developing', label: 'Developing', icon: '🏗️' },
                { id: 'niche', label: 'Niche', icon: '🎯' },
                { id: 'saturated', label: 'Saturated', icon: '📊' },
                { id: 'dynamic', label: 'Dynamic', icon: '⚡' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.market === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }

     /* case 7: // Specific Problems
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">If you plan to solve any of the specific problems related to your start-up or project idea, please select as many as applicable</h2>
            <div className="options-grid">
              {[
                { id: 'high-operational-costs', label: 'High Operational Costs', icon: '💸' },
                { id: 'inaccurate-medical-records', label: 'Inaccurate Medical Records', icon: '📄' },
                { id: 'limited-access-to-healthcare-services', label: 'Limited Access to Healthcare Services', icon: '🚫' },
                { id: 'inconsistent-care-delivery', label: 'Inconsistent Care Delivery', icon: '🔄' },
                { id: 'long-wait-times-for-patients', label: 'Long Wait Times for Patients', icon: '⏳' },
                { id: 'inefficient-resource-allocation', label: 'Inefficient Resource Allocation', icon: '📊' },
                { id: 'complex-billing-and-reimbursement-processes', label: 'Complex Billing and Reimbursement Processes', icon: '💳' },
                { id: 'fragmented-health-data', label: 'Fragmented Health Data', icon: '🧩' },
                { id: 'lack-of-standardized-protocols', label: 'Lack of Standardized Protocols', icon: '📜' },
                { id: 'inadequate-patient-engagement', label: 'Inadequate Patient Engagement', icon: '👥' },
                { id: 'delayed-diagnosis-and-treatment', label: 'Delayed Diagnosis and Treatment', icon: '⏱️' },
                { id: 'poor-communication-across-healthcare-teams', label: 'Poor Communication Across Healthcare Teams', icon: '📞' },
                { id: 'healthcare-provider-burnout', label: 'Healthcare Provider Burnout', icon: '🔥' },
                { id: 'slow-adoption-of-digital-health-solutions', label: 'Slow Adoption of Digital Health Solutions', icon: '📱' },
                { id: 'limited-preventive-care-utilization', label: 'Limited Preventive Care Utilization', icon: '🩺' },
                { id: 'poor-patient-follow-up-and-monitoring', label: 'Poor Patient Follow-up and Monitoring', icon: '📅' },
                { id: 'inefficient-care-coordination', label: 'Inefficient Care Coordination', icon: '🔗' },
                { id: 'low-medication-adherence', label: 'Low Medication Adherence', icon: '💊' },
                { id: 'lack-of-personalized-treatment-plans', label: 'Lack of Personalized Treatment Plans', icon: '📋' },
                { id: 'health-information-privacy-and-security-concerns', label: 'Health Information Privacy and Security Concerns', icon: '🔒' },
                { id: 'limited-availability-of-specialist-care', label: 'Limited Availability of Specialist Care', icon: '👨‍⚕️' },
                { id: 'ineffective-chronic-disease-management', label: 'Ineffective Chronic Disease Management', icon: '🩺' },
                { id: 'uncoordinated-patient-experience', label: 'Uncoordinated Patient Experience', icon: '👥' },
                { id: 'low-patient-satisfaction', label: 'Low Patient Satisfaction', icon: '😞' },
                { id: 'insufficient-health-data-analytics', label: 'Insufficient Health Data Analytics', icon: '📊' },
                { id: 'inadequate-access-to-mental-health-services', label: 'Inadequate Access to Mental Health Services', icon: '🧠' },
                { id: 'slow-emergency-response-systems', label: 'Slow Emergency Response Systems', icon: '🚨' },
                { id: 'suboptimal-patient-outcomes', label: 'Suboptimal Patient Outcomes', icon: '📉' },
                { id: 'difficulty-in-managing-healthcare-records', label: 'Difficulty in Managing Healthcare Records', icon: '📁' },
                { id: 'barriers-to-telemedicine-adoption', label: 'Barriers to Telemedicine Adoption', icon: '📱' },
                { id: 'lack-of-real-time-health-monitoring', label: 'Lack of Real-time Health Monitoring', icon: '⏱️' },
                { id: 'unnecessary-readmissions', label: 'Unnecessary Readmissions', icon: '🏥' },
                { id: 'inadequate-decision-support-for-healthcare-providers', label: 'Inadequate Decision Support for Healthcare Providers', icon: '🛠️' },
                { id: 'poor-workflow-efficiency-in-healthcare-settings', label: 'Poor Workflow Efficiency in Healthcare Settings', icon: '📊' },
                { id: 'misalignment-between-healthcare-providers-and-patients', label: 'Misalignment Between Healthcare Providers and Patients', icon: '👥' },
                { id: 'slow-processing-of-claims-and-payments', label: 'Slow Processing of Claims and Payments', icon: '💳' },
                { id: 'disconnected-healthcare-systems', label: 'Disconnected Healthcare Systems', icon: '🔗' },
                { id: 'high-risk-of-medical-errors', label: 'High Risk of Medical Errors', icon: '⚠️' },
                { id: 'lack-of-healthcare-system-integration', label: 'Lack of Healthcare System Integration', icon: '🔗' },
                { id: 'limited-access-to-affordable-care', label: 'Limited Access to Affordable Care', icon: '💰' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.specificProblems?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">If you plan to solve any of the specific problems related to your start-up or project idea, please select as many as applicable</h2>
            <div className="options-grid">
              {[
                { id: 'high-operational-costs', label: 'High Operational Costs', icon: '💸' },
                { id: 'inefficient-resource-allocation', label: 'Inefficient Resource Allocation', icon: '📊' },
                { id: 'poor-customer-engagement', label: 'Poor Customer Engagement', icon: '👥' },
                { id: 'slow-adoption-of-technology', label: 'Slow Adoption of Technology', icon: '📱' },
                { id: 'lack-of-standardized-processes', label: 'Lack of Standardized Processes', icon: '📜' },
                { id: 'ineffective-marketing-strategies', label: 'Ineffective Marketing Strategies', icon: '📈' },
                { id: 'low-customer-satisfaction', label: 'Low Customer Satisfaction', icon: '😞' },
                { id: 'inadequate-data-analytics', label: 'Inadequate Data Analytics', icon: '📊' },
                { id: 'poor-communication-across-teams', label: 'Poor Communication Across Teams', icon: '📞' },
                { id: 'high-risk-of-errors', label: 'High Risk of Errors', icon: '⚠️' },
                { id: 'lack-of-system-integration', label: 'Lack of System Integration', icon: '🔗' },
                { id: 'limited-access-to-affordable-solutions', label: 'Limited Access to Affordable Solutions', icon: '💰' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.specificProblems?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }

      case 8: // Solutions
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">If you plan to provide any of the following solutions related to your start-up or project idea, please select as many as applicable</h2>
            <div className="options-grid">
              {[
                { id: 'automated-patient-scheduling', label: 'Automated Patient Scheduling and Appointment Management', icon: '📅' },
                { id: 'digital-health-record-management', label: 'Digital Health Record Management Systems', icon: '📄' },
                { id: 'predictive-analytics-patient-risk', label: 'Predictive Analytics for Patient Risk Assessment', icon: '📊' },
                { id: 'real-time-health-data-monitoring', label: 'Real-Time Health Data Monitoring', icon: '⏱️' },
                { id: 'personalized-treatment-plans', label: 'Personalized Treatment Plans and Decision Support', icon: '📋' },
                { id: 'telemedicine-virtual-care', label: 'Telemedicine and Virtual Care Platforms', icon: '📱' },
                { id: 'automated-billing-payment', label: 'Automated Billing and Payment Systems', icon: '💳' },
                { id: 'patient-engagement-tools', label: 'Patient Engagement and Communication Tools', icon: '👥' },
                { id: 'remote-patient-monitoring', label: 'Remote Patient Monitoring and Follow-up Solutions', icon: '📡' },
                { id: 'cloud-healthcare-data-storage', label: 'Cloud-Based Healthcare Data Storage and Sharing', icon: '☁️' },
                { id: 'mobile-health-applications', label: 'Mobile Health Applications for Self-Care', icon: '📱' },
                { id: 'workflow-automation-providers', label: 'Workflow Automation for Healthcare Providers', icon: '⚙️' },
                { id: 'electronic-prescribing', label: 'Electronic Prescribing and Medication Management', icon: '💊' },
                { id: 'chronic-disease-management', label: 'Chronic Disease Management Platforms', icon: '🩺' },
                { id: 'healthcare-workflow-optimization', label: 'Healthcare Workflow Optimization Tools', icon: '📊' },
                { id: 'virtual-health-coaching', label: 'Virtual Health Coaching and Counselling Platforms', icon: '💬' },
                { id: 'integrated-healthcare-data', label: 'Integrated Healthcare Data Solutions', icon: '🔗' },
                { id: 'electronic-patient-check-in', label: 'Electronic Patient Check-in Systems', icon: '📝' },
                { id: 'healthcare-fraud-detection', label: 'Healthcare Fraud Detection Systems', icon: '🚫' },
                { id: 'digital-health-literacy', label: 'Digital Health Literacy and Education Platforms', icon: '📚' },
                { id: 'real-time-resource-allocation', label: 'Real-Time Resource Allocation and Scheduling', icon: '📅' },
                { id: 'interoperability-solutions', label: 'Interoperability Solutions for Healthcare Systems', icon: '🔗' },
                { id: 'health-information-security', label: 'Health Information Security and Privacy Protection Tools', icon: '🔒' },
                { id: 'automated-clinical-documentation', label: 'Automated Clinical Documentation and Reporting', icon: '📄' },
                { id: 'healthcare-performance-monitoring', label: 'Healthcare Performance and Quality Monitoring', icon: '📊' },
                { id: 'personalized-wellness-programs', label: 'Personalized Wellness Programs', icon: '💪' },
                { id: 'remote-diagnostics-testing', label: 'Remote Diagnostics and Testing Platforms', icon: '🩺' },
                { id: 'patient-self-management-tools', label: 'Patient Self-Management Tools', icon: '👤' },
                { id: 'intelligent-insurance-claim', label: 'Intelligent Health Insurance Claim Management', icon: '💳' },
                { id: 'telehealth-platform-integration', label: 'Telehealth Platform Integration', icon: '📱' },
                { id: 'health-risk-prediction', label: 'Health Risk Prediction Models', icon: '📈' },
                { id: 'virtual-rehabilitation', label: 'Virtual Rehabilitation and Physical Therapy Solutions', icon: '🩹' },
                { id: 'online-prescription-refill', label: 'Online Prescription Refill and Management Services', icon: '💊' },
                { id: 'population-health-management', label: 'Population Health Management Tools', icon: '🌍' },
                { id: 'smart-medical-devices', label: 'Smart Medical Devices Integration', icon: '⚙️' },
                { id: 'predictive-staffing', label: 'Predictive Staffing and Workforce Management Solutions', icon: '👥' },
                { id: 'healthcare-analytics', label: 'Healthcare Analytics for Operational Efficiency', icon: '📊' },
                { id: 'smart-hospital-room', label: 'Smart Hospital Room and Equipment Management', icon: '🏥' },
                { id: 'automated-clinical-trial', label: 'Automated Clinical Trial Management', icon: '🧪' },
                { id: 'cross-platform-patient-data', label: 'Cross-Platform Patient Data Integration', icon: '🔗' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.solutions?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">If you plan to provide any of the following solutions related to your start-up or project idea, please select as many as applicable</h2>
            <div className="options-grid">
              {[
                { id: 'automated-scheduling', label: 'Other-Automated Scheduling and Appointment Management', icon: '📅' },
                { id: 'digital-record-management', label: 'Digital Record Management Systems', icon: '📄' },
                { id: 'predictive-analytics', label: 'Predictive Analytics for Risk Assessment', icon: '📊' },
                { id: 'real-time-data-monitoring', label: 'Real-Time Data Monitoring', icon: '⏱️' },
                { id: 'personalized-plans', label: 'Personalized Plans and Decision Support', icon: '📋' },
                { id: 'virtual-care-platforms', label: 'Virtual Care Platforms', icon: '📱' },
                { id: 'automated-billing', label: 'Automated Billing and Payment Systems', icon: '💳' },
                { id: 'customer-engagement-tools', label: 'Customer Engagement and Communication Tools', icon: '👥' },
                { id: 'remote-monitoring', label: 'Remote Monitoring and Follow-up Solutions', icon: '📡' },
                { id: 'cloud-data-storage', label: 'Cloud-Based Data Storage and Sharing', icon: '☁️' },
                { id: 'mobile-applications', label: 'Mobile Applications for Self-Service', icon: '📱' },
                { id: 'workflow-automation', label: 'Workflow Automation for Providers', icon: '⚙️' },
                { id: 'electronic-documentation', label: 'Electronic Documentation and Reporting', icon: '📄' },
                { id: 'performance-monitoring', label: 'Performance and Quality Monitoring', icon: '📊' },
                { id: 'personalized-programs', label: 'Personalized Programs', icon: '💪' },
                { id: 'remote-diagnostics', label: 'Remote Diagnostics and Testing Platforms', icon: '🩺' },
                { id: 'self-management-tools', label: 'Self-Management Tools', icon: '👤' },
                { id: 'intelligent-claim-management', label: 'Intelligent Insurance Claim Management', icon: '💳' },
                { id: 'platform-integration', label: 'Platform Integration', icon: '📱' },
                { id: 'risk-prediction', label: 'Risk Prediction Models', icon: '📈' },
                { id: 'virtual-rehabilitation', label: 'Virtual Rehabilitation Solutions', icon: '🩹' },
                { id: 'online-service-management', label: 'Online Service Management', icon: '💊' },
                { id: 'population-management', label: 'Population Management Tools', icon: '🌍' },
                { id: 'smart-devices-integration', label: 'Smart Devices Integration', icon: '⚙️' },
                { id: 'predictive-staffing', label: 'Predictive Staffing and Workforce Management Solutions', icon: '👥' },
                { id: 'analytics-operational-efficiency', label: 'Analytics for Operational Efficiency', icon: '📊' },
                { id: 'smart-room-management', label: 'Smart Room and Equipment Management', icon: '🏢' },
                { id: 'automated-trial-management', label: 'Automated Trial Management', icon: '🧪' },
                { id: 'cross-platform-data-integration', label: 'Cross-Platform Data Integration', icon: '🔗' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.solutions?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }


      case 9: // Cross-Functional Healthcare Technology Platforms
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Please select the following cross-functional Healthcare technology platforms related to your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'salesforce-health-cloud', label: 'Salesforce Health Cloud', icon: '☁️' },
                { id: 'microsoft-azure-healthcare', label: 'Microsoft Azure Healthcare', icon: '🟦' },
                { id: 'aws-healthcare', label: 'Amazon Web Services (AWS) Healthcare', icon: '🟧' },
                { id: 'google-cloud-healthcare-api', label: 'Google Cloud Healthcare API', icon: '🟥' },
                { id: 'ibm-watson-health', label: 'IBM Watson Health', icon: '🟫' },
                { id: 'cerner-millennium', label: 'Cerner Millennium', icon: '🏥' },
                { id: 'epic-systems', label: 'Epic Systems', icon: '📊' },
                { id: 'allscripts', label: 'Allscripts', icon: '📋' },
                { id: 'meditech', label: 'Meditech', icon: '🩺' },
                { id: 'oracle-health-sciences', label: 'Oracle Health Sciences', icon: '🟪' },
                { id: 'sap-healthcare', label: 'SAP Healthcare', icon: '🟨' },
                { id: 'health-catalyst', label: 'Health Catalyst', icon: '📈' },
                { id: 'redox', label: 'Redox', icon: '🔗' },
                { id: 'mendix-healthcare-platform', label: 'Mendix Healthcare Platform', icon: '🛠️' },
                { id: 'zoho-healthcare', label: 'Zoho Healthcare', icon: '📱' },
                { id: 'change-healthcare', label: 'Change Healthcare', icon: '🔄' },
                { id: 'pega-healthcare-platform', label: 'Pega Healthcare Platform', icon: '🏢' },
                { id: 'intersystems-healthshare', label: 'InterSystems HealthShare', icon: '🌐' },
                { id: 'nextech', label: 'Nextech', icon: '💻' },
                { id: 'pointclickcare', label: 'PointClickCare', icon: '📅' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.healthcarePlatforms?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the following cross-functional technology platforms related to your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'salesforce', label: 'Salesforce', icon: '☁️' },
                { id: 'microsoft-azure', label: 'Microsoft Azure', icon: '🟦' },
                { id: 'aws', label: 'Amazon Web Services (AWS)', icon: '🟧' },
                { id: 'google-cloud', label: 'Google Cloud', icon: '🟥' },
                { id: 'ibm', label: 'IBM', icon: '🟫' },
                { id: 'oracle', label: 'Oracle', icon: '🟪' },
                { id: 'sap', label: 'SAP', icon: '🟨' }
               
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.healthcarePlatforms?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }
  
        // ... existing code ...
      case 10: // Machine Learning Frameworks
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Please select the following machine learning frameworks relevant to healthcare for your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'tensorflow', label: 'TensorFlow', icon: '🤖' },
                { id: 'pytorch', label: 'PyTorch', icon: '🔥' },
                { id: 'keras', label: 'Keras', icon: '🧠' },
                { id: 'scikit-learn', label: 'Scikit-learn', icon: '📊' },
                { id: 'xgboost', label: 'XGBoost', icon: '🚀' },
                { id: 'lightgbm', label: 'LightGBM', icon: '💡' },
                { id: 'ibm-watson-ml', label: 'IBM Watson Machine Learning', icon: '🟫' },
                { id: 'azure-ml', label: 'Microsoft Azure Machine Learning', icon: '🟦' },
                { id: 'google-cloud-ai', label: 'Google Cloud AI', icon: '🟥' },
                { id: 'amazon-sagemaker', label: 'Amazon SageMaker', icon: '🟧' },
                { id: 'h2o-ai', label: 'H2O.ai', icon: '💧' },
                { id: 'rapidminer', label: 'RapidMiner', icon: '⛏️' },
                { id: 'automl', label: 'AutoML', icon: '🤖' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.mlFrameworks?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the following machine learning frameworks for your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'tensorflow', label: 'TensorFlow', icon: '🤖' },
                { id: 'pytorch', label: 'PyTorch', icon: '🔥' },
                { id: 'keras', label: 'Keras', icon: '🧠' },
                { id: 'scikit-learn', label: 'Scikit-learn', icon: '📊' },
                { id: 'xgboost', label: 'XGBoost', icon: '🚀' },
                { id: 'lightgbm', label: 'LightGBM', icon: '💡' },
                { id: 'apache-mahout', label: 'Apache Mahout', icon: '🐘' },
                { id: 'caffe', label: 'Caffe', icon: '☕' },
                { id: 'mxnet', label: 'MXNet', icon: '🕸️' },
                { id: 'theano', label: 'Theano', icon: 'Θ' },
                { id: 'deeplearning4j', label: 'Deeplearning4j', icon: '🟨' },
                { id: 'cntk', label: 'CNTK (Microsoft Cognitive Toolkit)', icon: '🟦' },
                { id: 'orange-data-mining', label: 'Orange Data Mining', icon: '🍊' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.mlFrameworks?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }
  
      
      case 11: // NLP Tools
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Please select the following NLP tools relevant to healthcare for your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'spacy', label: 'SpaCy', icon: '📝' },
                { id: 'medspacy', label: 'MedSpacy', icon: '🏥' },
                { id: 'ctakes', label: 'Clinical Text Analysis and Knowledge Extraction System (cTAKES)', icon: '🔬' },
                { id: 'bert', label: 'BERT (Bidirectional Encoder Representations from Transformers)', icon: '🔄' },
                { id: 'huggingface', label: 'Hugging Face Transformers', icon: '🤗' },
                { id: 'watson-nlu', label: 'Watson Natural Language Understanding (IBM Watson NLU)', icon: '🟫' },
                { id: 'stanford-nlp', label: 'Stanford NLP', icon: '🎓' },
                { id: 'corenlp', label: 'CoreNLP (Stanford CoreNLP)', icon: '📚' },
                { id: 'allennlp', label: 'AllenNLP', icon: '🧠' },
                { id: 'flair', label: 'FLAIR', icon: '✨' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.nlpTools?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the following NLP tools for your start-up or project idea, if applicable.</h2>
            <div className="options-grid">
              {[
                { id: 'spacy', label: 'SpaCy', icon: '📝' },
                { id: 'nltk', label: 'NLTK (Natural Language Toolkit)', icon: '📚' },
                { id: 'gensim', label: 'Gensim', icon: '🧬' },
                { id: 'stanford-nlp', label: 'Stanford NLP', icon: '🎓' },
                { id: 'bert', label: 'BERT (Bidirectional Encoder Representations from Transformers)', icon: '🔄' },
                { id: 'opennlp', label: 'OpenNLP', icon: '📖' },
                { id: 'allennlp', label: 'AllenNLP', icon: '🧠' }
                
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.nlpTools?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }

  
        case 12: // Platform Type
          return (
            <>
              <h2 className="input-form-title">Please select the type of platform or application you want to build for your start-up or project idea.</h2>
              <div className="options-grid">
                {[
                  { id: 'web', label: 'Web-Based Platforms', icon: '🌐' },
                  { id: 'mobile', label: 'Mobile Platforms (iOS and Android)', icon: '📱' },
                  { id: 'hybrid', label: 'Hybrid Platforms (Web and Mobile)', icon: '🔗' }
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`option-button ${formData.platformType === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
  
       */
    // ... existing code ...

  /*  
    case 13: // Combined Front-End Technologies
        return (
          <>
        <h2 className="input-form-title">Please select the front-end technologies for your start-up or project idea.</h2>
            <div className="options-grid">
          
          {formData.platformType === 'web' || formData.platformType === 'hybrid' ? (
            <>
            <div className="tech-section">
              <h3 className="sub-title">Web Front-End Technologies</h3>
              <div className="options-grid">
              {[
                { id: 'react', label: 'React', icon: '⚛️' },
                { id: 'angular', label: 'Angular', icon: '🅰️' },
                { id: 'vue', label: 'Vue.js', icon: '🖖' },
                { id: 'html5', label: 'HTML5', icon: '📄' },
                { id: 'css3', label: 'CSS3', icon: '🎨' },
                { id: 'javascript', label: 'JavaScript (ES6+)', icon: '📜' },
                { id: 'sass', label: 'SASS', icon: '💅' },
                { id: 'bootstrap', label: 'Bootstrap', icon: '🅱️' },
                { id: 'tailwind', label: 'Tailwind CSS', icon: '🌬️' },
                { id: 'material-ui', label: 'Material UI', icon: '🎨' },
                { id: 'ember', label: 'Ember.js', icon: '🛠️' },
                { id: 'jquery', label: 'jQuery', icon: '💲' },
                { id: 'd3', label: 'D3.js', icon: '📊' },
                { id: 'chartjs', label: 'Chart.js', icon: '📈' },
                { id: 'webassembly', label: 'WebAssembly', icon: '🖥️' },
                { id: 'typescript', label: 'TypeScript', icon: '🟦' },
                { id: 'redux', label: 'Redux', icon: '🔄' },
                { id: 'nextjs', label: 'Next.js', icon: '⏭️' },
                { id: 'gatsby', label: 'Gatsby.js', icon: '🚀' },
                { id: 'graphql', label: 'GraphQL', icon: '📡' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.webFrontendTech?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
              </div>
              </div>
            </>
          ) : null}

          
          {formData.platformType === 'mobile' || formData.platformType === 'hybrid' ? (
            <>
            <div className="tech-section">
              <h3 className="sub-title">Mobile Front-End Technologies</h3>
              <div className="options-grid">
              {[
                { id: 'react-native', label: 'React Native', icon: '⚛️' },
                { id: 'flutter', label: 'Flutter', icon: '🦋' },
                { id: 'swift', label: 'Swift (iOS)', icon: '🍏' },
                { id: 'kotlin', label: 'Kotlin (Android)', icon: '🟪' },
                { id: 'xamarin', label: 'Xamarin', icon: '🦄' },
                { id: 'ionic', label: 'Ionic', icon: '⚡' },
                { id: 'cordova', label: 'Cordova/PhoneGap', icon: '📱' },
                { id: 'objective-c', label: 'Objective-C (iOS)', icon: '🅾️' },
                { id: 'java', label: 'Java (Android)', icon: '☕' },
                { id: 'sencha-touch', label: 'Sencha Touch', icon: '🖐️' },
                { id: 'jetpack-compose', label: 'Jetpack Compose (Android)', icon: '🛠️' },
                { id: 'pwa', label: 'PWA', icon: '🌐' },
                { id: 'nativescript', label: 'NativeScript', icon: '📜' },
                { id: 'vue-native', label: 'Vue Native', icon: '🖖' },
                { id: 'appcelerator', label: 'Appcelerator Titanium', icon: '🛠️' },
                { id: 'expo', label: 'Expo', icon: '🚀' },
                { id: 'reactxp', label: 'ReactXP', icon: '⚛️' },
                { id: 'framework7', label: 'Framework7', icon: '7️⃣' },
                { id: 'quasar', label: 'Quasar Framework', icon: '🪐' },
                { id: 'telerik', label: 'Telerik Platform', icon: '🛠️' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.mobileFrontendTech?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
              </div></div>
            </>
          ) : null}
        </div>
      </>
    );

  case 14: // Combined Back-End Technologies
    return (
      <>
        <h2 className="input-form-title">Please select the back-end technologies for your start-up or project idea.</h2>
        <div className="options-grid">
          
          {formData.platformType === 'web' || formData.platformType === 'hybrid' ? (
            <>
            <div className="tech-section">
              <h3 className="sub-title">Web Back-End Technologies</h3>
              <div className="options-grid">
              {[
                { id: 'nodejs', label: 'Node.js', icon: '🟢' },
                { id: 'ruby-on-rails', label: 'Ruby on Rails', icon: '💎' },
                { id: 'django', label: 'Django', icon: '🐍' },
                { id: 'spring-boot', label: 'Spring Boot', icon: '🌱' },
                { id: 'flask', label: 'Flask', icon: '🍶' },
                { id: 'aspnet-core', label: 'ASP.NET Core', icon: '🟦' },
                { id: 'expressjs', label: 'Express.js', icon: '🚂' },
                { id: 'laravel', label: 'Laravel', icon: '🪶' },
                { id: 'php', label: 'PHP', icon: '🐘' },
                { id: 'go', label: 'Go (Golang)', icon: '🐹' },
                { id: 'java', label: 'Java', icon: '☕' },
                { id: 'python', label: 'Python', icon: '🐍' },
                { id: 'graphql', label: 'GraphQL', icon: '📡' },
                { id: 'microsoft-azure', label: 'Microsoft Azure', icon: '🟦' },
                { id: 'aws-lambda', label: 'AWS Lambda', icon: '☁️' },
                { id: 'google-cloud-functions', label: 'Google Cloud Functions', icon: '🔵' },
                { id: 'postgresql', label: 'PostgreSQL', icon: '🐘' },
                { id: 'mysql', label: 'MySQL', icon: '🐬' },
                { id: 'mongodb', label: 'MongoDB', icon: '🍃' },
                { id: 'redis', label: 'Redis', icon: '🔴' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.webBackendTech?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
              </div>
              </div>
            </>
          ) : null}

         
          {formData.platformType === 'mobile' || formData.platformType === 'hybrid' ? (
            <>
            <div className="tech-section">
              <h3 className="sub-title">Mobile Back-End Technologies</h3>
              <div className="options-grid">
              {[
                { id: 'nodejs', label: 'Node.js', icon: '🟢' },
                    { id: 'ruby-on-rails', label: 'Ruby on Rails', icon: '💎' },
                    { id: 'django', label: 'Django', icon: '🐍' },
                    { id: 'spring-boot', label: 'Spring Boot', icon: '🌱' },
                    { id: 'flask', label: 'Flask', icon: '🍶' },
                    { id: 'laravel', label: 'Laravel', icon: '🪶' },
                    { id: 'aspnet-core', label: 'ASP.NET Core', icon: '🟦' },
                    { id: 'expressjs', label: 'Express.js', icon: '🚂' },
                    { id: 'firebase', label: 'Firebase', icon: '🔥' },
                    { id: 'aws-lambda', label: 'AWS Lambda', icon: '☁️' },
                    { id: 'microsoft-azure-functions', label: 'Microsoft Azure Functions', icon: '🟦' },
                    { id: 'google-cloud-functions', label: 'Google Cloud Functions', icon: '🔵' },
                    { id: 'graphql', label: 'GraphQL', icon: '📡' },
                    { id: 'restful-apis', label: 'RESTful APIs', icon: '🌐' },
                    { id: 'socketio', label: 'Socket.io', icon: '🔌' },
                    { id: 'ktor', label: 'Kotlin for Backend (Ktor)', icon: '🟪' },
                    { id: 'cloud-firestore', label: 'Cloud Firestore', icon: '🔥' },
                    { id: 'mongodb', label: 'MongoDB', icon: '🍃' },
                    { id: 'postgresql', label: 'PostgreSQL', icon: '🐘' },
                    { id: 'mysql', label: 'MySQL', icon: '🐬' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`option-button ${formData.mobileBackendTech?.includes(item.id) ? 'selected' : ''}`}
                      onClick={() => handleSelection(item.id, true)}
                    >
                      <span className="option-icon">{item.icon}</span>
                      <span className="option-label">{item.label}</span>
                    </button>
                  ))}
                  </div></div>
                </>
              ) : null}
            </div>
          </>
        );

      case 15: // Databases
      return (
        <>
          <h2 className="input-form-title">Please select the databases you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'mysql', label: 'MySQL', icon: '🐬' },
              { id: 'postgresql', label: 'PostgreSQL', icon: '🐘' },
              { id: 'mongodb', label: 'MongoDB', icon: '🍃' },
              { id: 'oracle', label: 'Oracle Database', icon: '🟥' },
              { id: 'mssql', label: 'Microsoft SQL Server', icon: '🟦' },
              { id: 'sqlite', label: 'SQLite', icon: '💡' },
              { id: 'cassandra', label: 'Cassandra', icon: '🦋' },
              { id: 'redis', label: 'Redis', icon: '🔴' },
              { id: 'dynamodb', label: 'Amazon DynamoDB', icon: '🟧' },
              { id: 'firebase-realtime', label: 'Firebase Realtime Database', icon: '🔥' },
              { id: 'hbase', label: 'Apache HBase', icon: '🐝' },
              { id: 'elasticsearch', label: 'Elasticsearch', icon: '🔍' },
              { id: 'neo4j', label: 'Neo4j', icon: '🕸️' },
              { id: 'couchdb', label: 'CouchDB', icon: '🛋️' },
              { id: 'ibm-db2', label: 'IBM Db2', icon: '🟫' },
              { id: 'mariadb', label: 'MariaDB', icon: '🦋' },
              { id: 'cloud-spanner', label: 'Cloud Spanner (Google Cloud)', icon: '🔵' },
              { id: 'graphql-db', label: 'GraphQL Databases (Hasura, Prisma)', icon: '📡' },
              { id: 'cosmosdb', label: 'Azure Cosmos DB', icon: '🟦' },
              { id: 'ravendb', label: 'RavenDB', icon: '🦅' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.databases?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );

     // ... existing code ...
     case 16: // Hosting Platforms
     return (
       <>
         <h2 className="input-form-title">Please select the hosting platforms you will use to build your start-up or project idea.</h2>
         <div className="options-grid">
           {[
             { id: 'aws', label: 'Amazon Web Services (AWS)', icon: '☁️' },
             { id: 'azure', label: 'Microsoft Azure', icon: '🌐' },
             { id: 'gcp', label: 'Google Cloud Platform (GCP)', icon: '🔵' },
             { id: 'ibm-cloud', label: 'IBM Cloud', icon: '🟦' },
             { id: 'oracle-cloud', label: 'Oracle Cloud', icon: '🟥' },
             { id: 'digitalocean', label: 'DigitalOcean', icon: '🐳' },
             { id: 'heroku', label: 'Heroku', icon: '🟣' },
             { id: 'firebase-hosting', label: 'Firebase Hosting', icon: '🔥' },
             { id: 'alibaba-cloud', label: 'Alibaba Cloud', icon: '🟨' },
             { id: 'vercel', label: 'Vercel', icon: '⚡' },
             { id: 'netlify', label: 'Netlify', icon: '🕸️' },
             { id: 'kubernetes', label: 'Kubernetes (with cloud providers)', icon: '⚓' },
             { id: 'bluehost', label: 'Bluehost', icon: '🟦' },
             { id: 'hostgator', label: 'HostGator', icon: '🐊' },
             { id: 'cloudflare', label: 'Cloudflare', icon: '🌩️' },
             { id: 'linode', label: 'Linode', icon: '🟢' },
             { id: 'siteground', label: 'SiteGround', icon: '🟧' },
             { id: 'rackspace', label: 'Rackspace', icon: '🟫' },
             { id: 'redhat-openshift', label: 'RedHat OpenShift', icon: '🎩' },
             { id: 'pivotal-cf', label: 'Pivotal Cloud Foundry (PCF)', icon: '🟣' }
           ].map((item) => (
             <button
               key={item.id}
               className={`option-button ${formData.hostingPlatforms?.includes(item.id) ? 'selected' : ''}`}
               onClick={() => handleSelection(item.id, true)}
             >
               <span className="option-icon">{item.icon}</span>
               <span className="option-label">{item.label}</span>
             </button>
           ))}
         </div>
       </>
     );
// ... existing code ...
    
       // ... existing code ...
      case 17: // Version Control
      return (
        <>
          <h2 className="input-form-title">Please select the version control platform you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'git', label: 'Git', icon: '📚' },
              { id: 'github', label: 'GitHub', icon: '🐙' },
              { id: 'gitlab', label: 'GitLab', icon: '🦊' },
              { id: 'bitbucket', label: 'Bitbucket', icon: '🪣' },
              { id: 'svn', label: 'Subversion (SVN)', icon: '🦎' },
              { id: 'mercurial', label: 'Mercurial', icon: '☿' },
              { id: 'perforce', label: 'Perforce', icon: '🟣' },
              { id: 'aws-codecommit', label: 'AWS CodeCommit', icon: '☁️' },
              { id: 'azure-devops', label: 'Azure DevOps', icon: '🌐' },
              { id: 'google-cloud-repos', label: 'Google Cloud Source Repositories', icon: '🔵' },
              { id: 'phabricator', label: 'Phabricator', icon: '🦄' },
              { id: 'sourceforge', label: 'SourceForge', icon: '🦊' },
              { id: 'fossil', label: 'Fossil', icon: '🦖' },
              { id: 'cvs', label: 'CVS (Concurrent Versions System)', icon: '📦' },
              { id: 'tfs', label: 'Team Foundation Server (TFS)', icon: '🟦' }
            ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.versionControl === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
// ... existing code ...
    
         // ... existing code ...
      case 18: // UI/UX Design
        return (
          <>
          <h2 className="input-form-title">Please select the UI/UX design platform you will use to build your start-up or project idea.</h2>
            <div className="options-grid">
            {[
              { id: 'adobe-xd', label: 'Adobe XD', icon: '🖌️' },
              { id: 'sketch', label: 'Sketch', icon: '✏️' },
              { id: 'figma', label: 'Figma', icon: '🎨' },
              { id: 'invision', label: 'InVision', icon: '👁️' },
              { id: 'axure-rp', label: 'Axure RP', icon: '📐' },
              { id: 'marvel', label: 'Marvel', icon: '🦸' },
              { id: 'balsamiq', label: 'Balsamiq', icon: '🖼️' },
              { id: 'framer', label: 'Framer', icon: '🖇️' },
              { id: 'principle', label: 'Principle', icon: '📜' },
              { id: 'zeplin', label: 'Zeplin', icon: '✈️' },
              { id: 'canva', label: 'Canva', icon: '🖍️' },
              { id: 'affinity-designer', label: 'Affinity Designer', icon: '🎨' },
              { id: 'uxpin', label: 'UXPin', icon: '📌' },
              { id: 'fluid-ui', label: 'Fluid UI', icon: '💧' },
              { id: 'proto-io', label: 'Proto.io', icon: '📱' }
            ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.uiuxDesign === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
// ... existing code ...
    
          // ... existing code ...
      case 19: // No-Code Platforms
        return (
          <>
          <h2 className="input-form-title">Please select the no-code platforms you will use to build your start-up or project idea.</h2>
            <div className="options-grid">
            {[
              { id: 'bubble', label: 'Bubble', icon: '🫧' },
              { id: 'outsystems', label: 'OutSystems', icon: '🚀' },
              { id: 'appgyver', label: 'Appgyver', icon: '🛠️' },
              { id: 'mendix', label: 'Mendix', icon: '🛠️' },
              { id: 'zoho-creator', label: 'Zoho Creator', icon: '🟦' },
              { id: 'quick-base', label: 'Quick Base', icon: '🏗️' },
              { id: 'retool', label: 'Retool', icon: '🛠️' },
              { id: 'adalo', label: 'Adalo', icon: '📱' },
              { id: 'kissflow', label: 'Kissflow', icon: '💋' },
              { id: 'glide', label: 'Glide', icon: '🛝' },
              { id: 'thrive', label: 'Thrive', icon: '🌱' },
              { id: 'appsheet', label: 'AppSheet', icon: '📄' },
              { id: 'make', label: 'Integromat (now Make)', icon: '🔄' },
              { id: 'wix-code', label: 'Wix Code', icon: '🖥️' },
              { id: 'knack', label: 'Knack', icon: '🔗' },
              { id: 'betty-blocks', label: 'Betty Blocks', icon: '🧱' },
              { id: 'unqork', label: 'Unqork', icon: '🦄' },
              { id: 'powerapps', label: 'Microsoft PowerApps', icon: '🟦' },
              { id: 'tadabase', label: 'Tadabase', icon: '📊' },
              { id: 'caspio', label: 'Caspio', icon: '🌊' }
            ].map((item) => (
                <button
                  key={item.id}
                className={`option-button ${formData.noCodePlatforms?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
// ... existing code ...
    
         // ... existing code ...
      case 20: // Low-Code Platforms
      return (
        <>
          <h2 className="input-form-title">Please select the low-code platforms you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'outsystems', label: 'OutSystems', icon: '🚀' },
              { id: 'mendix', label: 'Mendix', icon: '🛠️' },
              { id: 'powerapps', label: 'Microsoft PowerApps', icon: '🟦' },
              { id: 'appian', label: 'Appian', icon: '📊' },
              { id: 'zoho-creator', label: 'Zoho Creator', icon: '🟦' },
              { id: 'betty-blocks', label: 'Betty Blocks', icon: '🧱' },
              { id: 'quick-base', label: 'Quick Base', icon: '🏗️' },
              { id: 'kissflow', label: 'Kissflow', icon: '💋' },
              { id: 'salesforce-lightning', label: 'Salesforce Lightning Platform', icon: '⚡' },
              { id: 'appsheet', label: 'Google AppSheet', icon: '📄' },
              { id: 'pega-systems', label: 'Pega Systems', icon: '🟢' },
              { id: 'creatio', label: 'Creatio', icon: '🛠️' },
              { id: 'servicenow', label: 'ServiceNow', icon: '⏱️' },
              { id: 'tibco', label: 'Tibco', icon: '🟧' },
              { id: 'make', label: 'Integromat (now Make)', icon: '🔄' },
              { id: 'caspio', label: 'Caspio', icon: '🌊' },
              { id: 'claris-filemaker', label: 'Claris FileMaker', icon: '📁' },
              { id: 'wavemaker', label: 'WaveMaker', icon: '🌊' },
              { id: 'spring-boot-lowcode', label: 'Spring Boot (with Low-code Plugins)', icon: '🟩' },
              { id: 'joget', label: 'Joget', icon: '🏃' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.lowCodePlatforms?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
// ... existing code ...
    
         // ... existing code ...
      case 21: // Authentication and Security
      return (
        <>
          <h2 className="input-form-title">Please select the authentication and security features you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'mfa', label: 'Multi-Factor Authentication (MFA)', icon: '🔒' },
              { id: 'sso', label: 'Single Sign-On (SSO)', icon: '🔑' },
              { id: 'rbac', label: 'Role-Based Access Control (RBAC)', icon: '👤' },
              { id: 'oauth2', label: 'OAuth 2.0', icon: '🔐' },
              { id: 'openid-connect', label: 'OpenID Connect', icon: '🆔' },
              { id: 'encryption', label: 'Encryption (AES, RSA, TLS/SSL)', icon: '🔏' },
              { id: 'ssl-certificates', label: 'Secure Socket Layer (SSL) Certificates', icon: '📜' },
              { id: 'pki', label: 'Public Key Infrastructure (PKI)', icon: '🗝️' },
              { id: 'hipaa-compliance', label: 'HIPAA Compliance', icon: '🏥' },
              { id: 'data-masking', label: 'Data Masking', icon: '🎭' },
              { id: 'biometric-auth', label: 'Biometric Authentication', icon: '🖐️' },
              { id: 'fingerprint-face-recognition', label: 'Fingerprint and Face Recognition', icon: '👤' },
              { id: '2fa', label: 'Two-Factor Authentication (2FA)', icon: '🔒' },
              { id: 'healthcare-id-auth', label: 'User Authentication via Healthcare ID (e.g., patient ID)', icon: '🆔' },
              { id: 'behavioral-biometrics', label: 'Behavioral Biometrics', icon: '📊' },
              { id: 'access-auditing-logging', label: 'Access Auditing and Logging', icon: '📝' },
              { id: 'idps', label: 'Intrusion Detection and Prevention Systems (IDPS)', icon: '🚨' },
              { id: 'endpoint-security', label: 'Endpoint Security', icon: '🖥️' },
              { id: 'siem', label: 'Security Information and Event Management (SIEM)', icon: '📡' },
              { id: 'blockchain-security', label: 'Blockchain for Data Security', icon: '⛓️' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.authSecurity?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
// ... existing code ...
    
        // ... existing code ...
      case 22: // Testing Types
      return (
        <>
          <h2 className="input-form-title">Please select the testing types you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'functional-testing', label: 'Functional Testing', icon: '🧪' },
              { id: 'regression-testing', label: 'Regression Testing', icon: '🔄' },
              { id: 'performance-testing', label: 'Performance Testing', icon: '⏱️' },
              { id: 'security-testing', label: 'Security Testing', icon: '🔒' },
              { id: 'usability-testing', label: 'Usability Testing', icon: '👤' },
              { id: 'compatibility-testing', label: 'Compatibility Testing', icon: '🖥️' },
              { id: 'integration-testing', label: 'Integration Testing', icon: '🔗' },
              { id: 'unit-testing', label: 'Unit Testing', icon: '🧪' },
              { id: 'acceptance-testing', label: 'Acceptance Testing', icon: '✅' },
              { id: 'compliance-testing', label: 'Compliance Testing (HIPAA, GDPR, etc.)', icon: '📜' },
              { id: 'end-to-end-testing', label: 'End-to-End Testing', icon: '🔄' },
              { id: 'ui-testing', label: 'User Interface (UI) Testing', icon: '🖼️' },
              { id: 'ux-testing', label: 'User Experience (UX) Testing', icon: '👥' },
              { id: 'data-integrity-testing', label: 'Data Integrity Testing', icon: '📊' },
              { id: 'load-testing', label: 'Load Testing', icon: '📈' },
              { id: 'stress-testing', label: 'Stress Testing', icon: '📉' },
              { id: 'penetration-testing', label: 'Penetration Testing', icon: '🛡️' },
              { id: 'api-testing', label: 'API Testing', icon: '📡' },
              { id: 'smoke-testing', label: 'Smoke Testing', icon: '💨' },
              { id: 'beta-testing', label: 'Beta Testing', icon: '🧪' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.testingTypes?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );

     case 23: // Pricing Models
     return (
       <>
         <h2 className="input-form-title">Please select the pricing models you will use to build your start-up or project idea.</h2>
         <div className="options-grid">
           {[
             { id: 'subscription', label: 'Subscription-Based Pricing', icon: '📅' },
             { id: 'freemium', label: 'Freemium Model', icon: '🎁' },
             { id: 'pay-per-use', label: 'Pay-Per-Use', icon: '💸' },
             { id: 'license-fee', label: 'License Fee Model', icon: '📜' },
             { id: 'tiered-pricing', label: 'Tiered Pricing', icon: '📊' },
             { id: 'flat-rate', label: 'Flat Rate Pricing', icon: '💲' },
             { id: 'pay-as-you-go', label: 'Pay-As-You-Go Pricing', icon: '⏳' },
             { id: 'value-based', label: 'Value-Based Pricing', icon: '💰' },
             { id: 'freemium-upgrades', label: 'Freemium with Paid Upgrades', icon: '🆙' },
             { id: 'transaction-based', label: 'Transaction-Based Pricing', icon: '💳' },
             { id: 'usage-based', label: 'Usage-Based Pricing', icon: '📈' },
             { id: 'saas-pricing', label: 'SaaS Pricing', icon: '☁️' },
             { id: 'custom-pricing', label: 'Custom Pricing', icon: '🛠️' },
             { id: 'consulting-based', label: 'Consulting-Based Pricing', icon: '💼' },
             { id: 'per-user', label: 'Per-User Pricing', icon: '👤' },
             { id: 'pay-per-feature', label: 'Pay-Per-Feature', icon: '🔧' },
             { id: 'in-app-purchases', label: 'In-App Purchases', icon: '📱' },
             { id: 'bundled-pricing', label: 'Bundled Pricing', icon: '📦' },
             { id: 'insurance-reimbursement', label: 'Insurance Reimbursement Model', icon: '🏥' },
             { id: 'commission-based', label: 'Commission-Based Pricing', icon: '💼' }
           ].map((item) => (
             <button
               key={item.id}
               className={`option-button ${formData.pricingModel === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
// ... existing code ...
    
// ... existing code ...
case 24: // Payment Gateways
        return (
          <>
    <h2 className="input-form-title">Please select the payment gateways you will use to build your start-up or project idea.</h2>
            <div className="options-grid">
      {[
        { id: 'stripe', label: 'Stripe', icon: '💳' },
        { id: 'paypal', label: 'PayPal', icon: '🌐' },
        { id: 'square', label: 'Square', icon: '🟦' },
        { id: 'braintree', label: 'Braintree', icon: '🌳' },
        { id: 'razorpay', label: 'Razorpay', icon: '💰' },
        { id: 'authorize-net', label: 'Authorize.Net', icon: '🛡️' },
        { id: 'adyen', label: 'Adyen', icon: '🟧' },
        { id: 'worldpay', label: 'Worldpay', icon: '🌍' },
        { id: '2checkout', label: '2Checkout', icon: '🛒' },
        { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
        { id: 'google-pay', label: 'Google Pay', icon: '🔵' },
        { id: 'quickbooks-payments', label: 'QuickBooks Payments', icon: '📊' },
        { id: 'skrill', label: 'Skrill', icon: '💳' },
        { id: 'klarna', label: 'Klarna', icon: '🟩' },
        { id: 'wepay', label: 'WePay', icon: '🟦' },
        { id: 'paysimple', label: 'PaySimple', icon: '🟨' },
        { id: 'bluepay', label: 'BluePay', icon: '🟦' },
        { id: 'fattmerchant', label: 'Fattmerchant', icon: '🟫' },
        { id: 'payline-data', label: 'Payline Data', icon: '📡' },
        { id: 'paymentcloud', label: 'PaymentCloud', icon: '☁️' }
      ].map((item) => (
                <button
                  key={item.id}
          className={`option-button ${formData.paymentGateways?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
// ... existing code ...
    
            // ... existing code ...
      case 25: // APIs
      if (formData.baseIndustry === 'healthcare') {
        return (
          <>
            <h2 className="input-form-title">Please select the APIs relevant to healthcare for your start-up or project idea.</h2>
            <div className="options-grid">
              {[
                { id: 'fhir', label: 'FHIR (Fast Healthcare Interoperability Resources) API', icon: '🏥' },
                { id: 'redox', label: 'Redox API', icon: '🔴' },
                { id: 'healthkit', label: 'Apple HealthKit API', icon: '🍎' },
                { id: 'google-fit', label: 'Google Fit API', icon: '🔵' },
                { id: 'healthvault', label: 'Microsoft HealthVault API', icon: '🟦' },
                { id: 'human-api', label: 'Human API', icon: '👤' },
                { id: 'cerner-opendev', label: 'Cerner Open Developer Experience (OpenDEV) API', icon: '🟩' },
                { id: 'epic-api', label: 'Epic Systems API', icon: '📊' },
                { id: 'allscripts-api', label: 'Allscripts API', icon: '🟫' },
                { id: 'amazon-healthlake', label: 'Amazon HealthLake API', icon: '🟧' },
                { id: 'meditech-api', label: 'Meditech API', icon: '🟦' },
                { id: 'medeanalytics-api', label: 'MedeAnalytics API', icon: '📈' },
                { id: 'mend-api', label: 'Mend API (Telehealth and Video Conferencing)', icon: '📹' },
                { id: 'ambra-health-api', label: 'Ambra Health API (for Medical Imaging)', icon: '🖼️' },
                { id: 'nlp-apis', label: 'NLP APIs (Google Cloud Natural Language API, IBM Watson NLP)', icon: '🗣️' },
                { id: 'labcorp-api', label: 'LabCorp API', icon: '🧪' },
                { id: 'twilio-api', label: 'Twilio API (for SMS and communication)', icon: '📞' },
                { id: 'docusign-api', label: 'DocuSign API (for eSignature)', icon: '📝' },
                { id: 'stripe-api', label: 'Stripe API (for Payment Processing)', icon: '💳' },
                { id: 'plaid-api', label: 'Plaid API (for financial services integration)', icon: '💰' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.apis?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      } else {
        // Default question for other industries
        return (
          <>
            <h2 className="input-form-title">Please select the APIs you will use to build your start-up or project idea.</h2>
            <div className="options-grid">
              {[
                { id: 'rest', label: 'REST API', icon: '🌐' },
                { id: 'graphql', label: 'GraphQL', icon: '📊' },
                { id: 'soap', label: 'SOAP API', icon: '🧼' },
                { id: 'twilio-api', label: 'Twilio API (for SMS and communication)', icon: '📞' },
                { id: 'docusign-api', label: 'DocuSign API (for eSignature)', icon: '📝' },
                { id: 'stripe-api', label: 'Stripe API (for Payment Processing)', icon: '💳' },
                { id: 'plaid-api', label: 'Plaid API (for financial services integration)', icon: '💰' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`option-button ${formData.apis?.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleSelection(item.id, true)}
                >
                  <span className="option-icon">{item.icon}</span>
                  <span className="option-label">{item.label}</span>
                </button>
              ))}
            </div>
          </>
        );
      }
// ... existing code ...
          // ... existing code ...
      case 26: // Data Collection Methods
      return (
        <>
          <h2 className="input-form-title">Please choose the methods or tools you will use to collect data for your start-up or project idea, if applicable.</h2>
          <div className="options-grid">
            {[
              { id: 'surveys', label: 'Surveys', icon: '📝' },
              { id: 'sensors', label: 'Sensors', icon: '📡' },
              { id: 'web-scraping', label: 'Web Scraping', icon: '🕸️' },
              { id: 'iot-devices', label: 'IoT Devices', icon: '🌐' },
              { id: 'mobile-apps', label: 'Mobile Apps', icon: '📱' },
              { id: 'social-media', label: 'Social Media', icon: '📱' },
              { id: 'crm-systems', label: 'CRM Systems', icon: '📊' },
              { id: 'transaction-logs', label: 'Transaction Logs', icon: '💳' },
              { id: 'user-behavior-tracking', label: 'User Behavior Tracking', icon: '👤' },
              { id: 'api-integrations', label: 'API Integrations', icon: '🔗' },
              { id: 'forms', label: 'Forms', icon: '📄' },
              { id: 'focus-groups', label: 'Focus Groups', icon: '👥' },
              { id: 'interviews', label: 'Interviews', icon: '🗣️' },
              { id: 'observational-studies', label: 'Observational Studies', icon: '👀' },
              { id: 'experiments', label: 'Experiments', icon: '🧪' },
              { id: 'logs', label: 'Logs', icon: '📜' },
              { id: 'cookies', label: 'Cookies', icon: '🍪' },
              { id: 'analytics-tools', label: 'Analytics Tools', icon: '📊' },
              { id: 'data-streams', label: 'Data Streams', icon: '🌊' },
              { id: 'public-datasets', label: 'Public Datasets', icon: '📂' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.dataCollection?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
// ... existing code ...
    
         // ... existing code ...
      case 27: // Data Processing Tools
      return (
        <>
          <h2 className="input-form-title">Please select the tools you will use for data processing in your start-up or project idea, if applicable.</h2>
          <div className="options-grid">
            {[
              { id: 'hadoop', label: 'Apache Hadoop', icon: '🐘' },
              { id: 'spark', label: 'Apache Spark', icon: '🔥' },
              { id: 'pandas', label: 'Python (Pandas)', icon: '🐼' },
              { id: 'numpy', label: 'Python (NumPy)', icon: '🔢' },
              { id: 'r-programming', label: 'R Programming', icon: '📊' },
              { id: 'sql-databases', label: 'SQL Databases (MySQL, PostgreSQL, etc.)', icon: '🗄️' },
              { id: 'datarobot', label: 'DataRobot', icon: '🤖' },
              { id: 'tableau', label: 'Tableau', icon: '📈' },
              { id: 'sas', label: 'SAS', icon: '🟦' },
              { id: 'talend', label: 'Talend', icon: '🟧' },
              { id: 'power-bi', label: 'Microsoft Power BI', icon: '📊' },
              { id: 'watson-studio', label: 'IBM Watson Studio', icon: '🟫' },
              { id: 'knime', label: 'KNIME', icon: '🟩' },
              { id: 'google-dataflow', label: 'Google Cloud Dataflow', icon: '🌐' },
              { id: 'alteryx', label: 'Alteryx', icon: '🟨' },
              { id: 'domo', label: 'Domo', icon: '🟦' },
              { id: 'qlikview', label: 'QlikView', icon: '📊' },
              { id: 'matlab', label: 'MATLAB', icon: '🧮' },
              { id: 'excel', label: 'Excel (for smaller data sets)', icon: '📊' },
              { id: 'h2o', label: 'H2O.ai', icon: '💧' },
              { id: 'rapidminer', label: 'RapidMiner', icon: '⛏️' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.dataProcessing?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
// ... existing code ...
    // ... existing code ...
    case 28: // Legal and Compliance
    if (formData.baseIndustry === 'healthcare') {
      return (
        <>
          <h2 className="input-form-title">Please select the legal and compliance features relevant to healthcare for your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'hipaa', label: 'HIPAA Compliance', icon: '🏥' },
              { id: 'gdpr', label: 'GDPR Compliance', icon: '🇪🇺' },
              { id: 'hitech', label: 'HITECH Act Compliance', icon: '📜' },
              { id: 'soc2', label: 'SOC 2 Compliance', icon: '🛡️' },
              { id: 'fda-21cfr', label: 'FDA Regulations (21 CFR Part 11)', icon: '🇺🇸' },
              { id: 'data-encryption', label: 'Data Encryption (End-to-End)', icon: '🔏' },
              { id: 'audit-trails', label: 'Audit Trails and Logging', icon: '📝' },
              { id: 'consent-management', label: 'Consent Management', icon: '✅' },
              { id: 'data-masking', label: 'Data Masking', icon: '🎭' },
              { id: 'access-control', label: 'Access Control and Role-Based Permissions', icon: '🔐' },
              { id: 'patient-anonymization', label: 'Patient Data Anonymization', icon: '👤' },
              { id: 'secure-storage', label: 'Secure Data Storage (Cloud and On-premise)', icon: '🗄️' },
              { id: 'esignature-compliance', label: 'Electronic Signature Compliance (eSignature)', icon: '📝' },
              { id: 'cross-border-data', label: 'Cross-Border Data Protection', icon: '🌍' },
              { id: 'wcag', label: 'Accessibility Standards (WCAG Compliance)', icon: '♿' },
              { id: 'data-retention', label: 'Data Retention and Destruction Policies', icon: '🗑️' },
              { id: 'regulatory-reporting', label: 'Regulatory Reporting', icon: '📊' },
              { id: 'pipeda', label: 'PIPEDA (Personal Information Protection and Electronic Documents Act)', icon: '🇨🇦' },
              { id: 'pci-dss', label: 'PCI DSS Compliance (Payment Card Industry Data Security Standard)', icon: '💳' },
              { id: 'telemedicine-regulations', label: 'Telemedicine Regulations (e.g., State-Specific Telemedicine Laws)', icon: '📱' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.legalCompliance?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
    } else {
      // Default question for other industries
      return (
        <>
          <h2 className="input-form-title">Please select the legal and compliance features you will use to build your start-up or project idea.</h2>
          <div className="options-grid">
            {[
              { id: 'gdpr', label: 'GDPR Compliance', icon: '🇪🇺' },
              { id: 'ccpa', label: 'CCPA Compliance', icon: '🇺🇸' },
              { id: 'data-encryption', label: 'Data Encryption (End-to-End)', icon: '🔏' },
              { id: 'audit-trails', label: 'Audit Trails and Logging', icon: '📝' },
              { id: 'consent-management', label: 'Consent Management', icon: '✅' },
              { id: 'access-control', label: 'Access Control and Role-Based Permissions', icon: '🔐' },
              { id: 'secure-storage', label: 'Secure Data Storage (Cloud and On-premise)', icon: '🗄️' },
              { id: 'cross-border-data', label: 'Cross-Border Data Protection', icon: '🌍' },
              { id: 'wcag', label: 'Accessibility Standards (WCAG Compliance)', icon: '♿' },
              { id: 'data-retention', label: 'Data Retention and Destruction Policies', icon: '🗑️' }
            ].map((item) => (
              <button
                key={item.id}
                className={`option-button ${formData.legalCompliance?.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(item.id, true)}
              >
                <span className="option-icon">{item.icon}</span>
                <span className="option-label">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      );
    }
// ... existing code ...
    */
      default:
        return null;
    }
  };
  
  return (
    <div className="user-input-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(currentStep / 7) * 100}%` }}></div>
      </div>
      
      <div className="step-indicator">
        Step {currentStep} of 7
      </div>
      
      <div className="input-form-content">
        {renderStepContent()}
        
        <div className="input-form-actions">
          <button
            className="back-button"
            onClick={handleBack}
            disabled={currentStep === 1} // Disable back button on the first step
          >
            Back
          </button>
          <button
            className="next-button"
            onClick={handleNext}
            disabled={isNextDisabled()}
          >
            {currentStep === 30 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInputForm;