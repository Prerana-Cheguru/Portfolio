
import { Experience, SkillCategory, Certification } from './types';

export const SUMMARY = "Highly skilled AI Solution Architect (Full-Stack and Process BI Expertise) with 12+ years enterprise experience designing and deploying LLMs (GPT-4, Claude, Llama, BERT, T5), Generative AI solutions, conversational AI interfaces, and intelligent automation into production achieving 30-50% operational efficiency improvements, $5M+ incremental revenue, 99.9%+ uptime SLA. Advanced proficiency in Microsoft Power Platform and Cloud-native deployment on AWS, Azure, and GCP.";

export const EXPERIENCES: Experience[] = [
  {
    client: "Citizens Bank",
    location: "Dallas, TX, USA",
    role: "AI Solution Architect",
    period: "May 2024 – Present",
    responsibilities: [
      "Spearheaded design and deployment of LLMs (GPT-4, Claude, Llama, BERT, T5) for intelligent insurance policy management and real-time claim analysis.",
      "Developed context-aware conversational AI chatbots using fine-tuned LLMs with prompt engineering (few-shot, CoT) to automate customer support and claim guidance.",
      "Implemented NLP models for text classification, NER, and sentiment analysis on customer feedback to accelerate claim processing.",
      "Built RAG pipelines combining semantic embeddings, vector search, and LLM generation using LangChain and LlamaIndex.",
      "Designed advanced vector indexing solutions using PGVector and ChromaDB for sub-second query latency.",
      "Architected complex Power Automate Cloud workflows with parallel processing to orchestrate end-to-end policy lifecycles.",
      "Designed Power Automate Desktop flows (RPA) automating repetitive underwriting tasks, achieving significant manual processing reduction.",
      "Developed custom Power Automate connectors integrating legacy insurance systems with modern cloud apps (Salesforce, SharePoint).",
      "Implemented Power Automate governance with DLP policies, RBAC, and audit logging for security compliance.",
      "Designed high-performance Power BI dashboards with complex DAX for monitoring fraud detection rates and premium pricing trends.",
      "Developed scalable ETL pipelines using AWS Glue to load insurance data into AWS Redshift.",
      "Built enterprise-grade database architectures with PostgreSQL and MongoDB with automated backup.",
      "Deployed containerized ML models using Docker and Kubernetes enabling automatic scaling and zero-downtime.",
      "Implemented MLflow orchestration for experiment tracking and model versioning of pricing and fraud models."
    ],
    impact: "30% ↓ claim processing | 40% ↑ fraud detection | $100M+ premium tracking"
  },
  {
    client: "E-Bay",
    location: "Austin, TX, USA",
    role: "Senior AI Engineer",
    period: "January 2024 – April 2024",
    responsibilities: [
      "Led design of Generative AI-powered Automated Content Generation System creating personalized email campaigns and ads using GPT-3 and Claude.",
      "Implemented RAG architecture combining real-time product catalogs with LLM generation for personalized marketing.",
      "Applied advanced prompt engineering (few-shot, zero-shot, role-based) to optimize LLM output quality.",
      "Leveraged HuggingFace semantic embeddings to analyze customer purchase history and classify segments.",
      "Developed LangChain-based content generation framework with modular components and fallback mechanisms.",
      "Implemented query classification systems using BERT-based NLP models to route customer inquiries.",
      "Architected Power Automate Cloud workflows orchestrating end-to-end content pipelines from ingestion to distribution.",
      "Built custom Power Automate connectors for OpenAI and Hugging Face APIs.",
      "Designed Power BI dashboards tracking volume generated, model latency, and customer engagement KPIs.",
      "Architected AWS infrastructure utilizing Bedrock for managed LLM access.",
      "Developed RESTful APIs using Node.js/Express.js with comprehensive audit logging.",
      "Implemented Airflow-based MLOps pipeline for automated LLM fine-tuning and evaluation.",
      "Achieved 50% increase in customer engagement and 35% boost in conversion rates."
    ],
    impact: "50% ↑ engagement | 35% ↑ conversions | 40% ↓ content creation time"
  },
  {
    client: "Lowe’s Companies, Inc.",
    location: "Charlotte, NC, USA",
    role: "Senior Data Scientist (Gen AI)",
    period: "May 2020 – December 2023",
    responsibilities: [
      "Designed LLM integration strategy leveraging GPT-3, BERT, and Llama for product recommendation and financial synthesis.",
      "Developed fine-tuned language models using LoRA to efficiently adapt pre-trained LLMs to domain-specific vocabulary.",
      "Built Generative AI pipelines for intelligent document processing from unstructured customer feedback and warranty docs.",
      "Developed conversational AI chatbot systems using BERT and RoBERTa for 24/7 order tracking and claims processing.",
      "Applied vector embeddings and semantic search using sentence transformers to power product search.",
      "Built predictive analytics systems using Random Forest and XGBoost to forecast customer churn and demand.",
      "Implemented deep learning frameworks (TensorFlow, PyTorch) for time-series forecasting of sales patterns.",
      "Automated large-scale ETL workflows using AWS Glue extracting from point-of-sale and transactional databases.",
      "Designed data quality validation pipelines with automatic anomaly detection and profiling.",
      "Built interactive dashboards using Tableau and R Shiny visualizing risk profiles and market trends.",
      "Designed advanced Power BI dashboards with DAX for CLV analysis and credit risk assessment.",
      "Deployed scalable ML models using AWS SageMaker with automatic model tuning.",
      "Orchestrated CI/CD pipelines using AWS EKS and Apache Airflow."
    ],
    impact: "Deployed to 500+ stores | $10B+ retail operations | 99.9% uptime"
  },
  {
    client: "Frontier Communications",
    location: "McKinney, TX, USA",
    role: "Senior Data Scientist",
    period: "May 2019 – April 2020",
    responsibilities: [
      "Performed advanced topic modeling using LDA and NMF on customer feedback to classify insights.",
      "Analyzed unstructured customer feedback using NER and sentiment analysis (VADER, TextBlob) to identify drivers.",
      "Built customer behavior prediction models for sales forecasting and inventory optimization.",
      "Leveraged CNNs for image recognition in mobile applications improving product recommendation accuracy.",
      "Implemented RNNs and LSTMs to model shopping sequences and customer journey progression.",
      "Deployed advanced NLP algorithms for intent classification and topic extraction.",
      "Employed GANs to synthesize training data improving model generalization for limited datasets.",
      "Unified multi-source data integration to develop 360-degree customer profiles.",
      "Created Power BI and Tableau visualizations communicating key metrics to operations and executives.",
      "Orchestrated containerized ML applications using Kubernetes with automatic scaling and load balancing."
    ],
    impact: "↑ Customer retention | ↑ Engagement metrics | Improved efficiency"
  },
  {
    client: "Discover Financial Services",
    location: "Hyderabad, TG, India",
    role: "Senior Data Scientist",
    period: "March 2017 – February 2019",
    responsibilities: [
      "Forecasted video performance using Time Series analysis (ARIMA, SARIMA) achieving 20% ROI improvement.",
      "Applied NLP techniques including CRF and LDA to boost creator engagement by 15%.",
      "Segmented content creators using DBSCAN and Spectral Clustering enhancing impact scaling by 25%.",
      "Developed dynamic pricing models using reinforcement learning and optimization algorithms.",
      "Built collaborative recommendation engine using Matrix Factorization and KNN increasing collaboration by 40%.",
      "Utilized GNNs for influencer relationship mapping and network-based marketing optimization.",
      "Implemented real-time data streaming using Apache Kafka and AWS Kinesis.",
      "Leveraged cloud-based analytics platforms including Google BigQuery and Cloud AutoML."
    ],
    impact: "20% ↑ ROI | 15% ↑ engagement | 25% ↑ scaling | 40% ↑ collaboration"
  },
  {
    client: "Humana Inc",
    location: "Hyderabad, TG, India",
    role: "Data Scientist",
    period: "April 2015 – February 2017",
    responsibilities: [
      "Integrated healthcare data from clinical records and insurance claims using SQL and MongoDB.",
      "Performed comprehensive EDA uncovering patterns in patient outcomes and treatment efficacy.",
      "Built predictive classification models (SVM, XGBoost) for disease diagnosis and readmission prediction.",
      "Modeled disease progression using LSTM networks capturing long-term temporal dependencies.",
      "Deployed CNNs and ResNet-50 for medical image analysis (MRI, CT scan interpretation).",
      "Analyzed clinical notes using NLTK, spaCy, and BERT-based NLP models.",
      "Developed interactive healthcare dashboards using R Shiny and Tableau.",
      "Forecasted healthcare trends using Prophet enabling capacity planning.",
      "Assessed patient churn risk using survival analysis and Matplotlib visualization."
    ],
    impact: "Improved patient outcomes | Enhanced diagnostics | Optimized resources"
  },
  {
    client: "PayPal",
    location: "Hyderabad, TG, India",
    role: "Python Developer / Machine Learning",
    period: "June 2013 – March 2015",
    responsibilities: [
      "Developed scalable, production-grade web applications using Python and Django framework.",
      "Built machine learning models using Scikit-learn for fraud detection and risk assessment.",
      "Integrated Python-based ML models into Django apps for real-time inference.",
      "Designed and implemented end-to-end full-stack web applications with MySQL databases.",
      "Developed dynamic UI components using AngularJS with two-way data binding.",
      "Implemented responsive web design adhering to W3C standards and WCAG accessibility guidelines.",
      "Handled complex data parsing using custom XML schema processing and JSON data pipelines.",
      "Managed source code and CI/CD workflows using Git and GitHub."
    ],
    impact: "Served millions of users | Reliable performance | Security compliant"
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Languages", technologies: "Python, JavaScript/TypeScript, SQL, Java, R, HTML5, CSS3, XML, JSON" },
  { category: "Frontend", technologies: "React, Angular, HTML5, CSS3, jQuery, AngularJS, Responsive Design, Web Components" },
  { category: "Backend & APIs", technologies: "Node.js, Express.js, FastAPI, Flask, Django, .NET, REST APIs, GraphQL, Microservices" },
  { category: "AI/ML", technologies: "Scikit-learn, NLTK, spaCy, TensorFlow, Keras, PyTorch, Pandas, NumPy, Matplotlib, OpenCV, XGBoost" },
  { category: "NLP/Generative AI", technologies: "Named Entity Recognition, BERT, GPT-3/4, Claude, Llama, T5, RAG, Prompt Engineering, LoRA, Fine-tuning" },
  { category: "Power Platform", technologies: "Power Automate (Cloud/Desktop), Power BI (DAX, Data Modeling), Custom Connectors, DLP, Governance" },
  { category: "Cloud & Data", technologies: "AWS (SageMaker, Bedrock), Azure (ML, AKS), GCP (Vertex AI), PostgreSQL, MongoDB, Redis, Pinecone, PGVector, Spark, Kafka" }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Oracle Cloud Generative AI Professional", description: "1Z0-1127-25 certification demonstrating expertise in OCI Generative AI services" },
  { name: "IBM AI Engineering Specialization", description: "Specialized training in enterprise AI engineering and model deployment" },
  { name: "Deep Learning Specialization", description: "DeepLearning.AI specialization covering neural networks and advanced architectures" },
  { name: "Mathematics for Machine Learning", description: "Imperial College London specialization in ML mathematics foundations" },
  { name: "AWS Certified Machine Learning", description: "Specialty certification in AWS ML solution design and deployment" },
  { name: "Microsoft Azure Fundamentals", description: "Certified in Azure services and cloud concepts" },
  { name: "GCP Business Professional", description: "Google Cloud Platform business accreditation demonstrating GCP expertise" }
];
