const HARDCODED_PROJECTS = [
{
  id: 1,
  Img: "foody.png",
  Title: "Unified Food Tracking & Smart Assistance",
  Description:
    "Built a full-stack food-diary and health chatbot platform enabling nutrient tracking, health-parameter graphs, and medical report analysis via PDF/CSV/text uploads.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "Fine-tuned Biomistral (open-weight 7B LLM) via Supervised Fine-Tuning (SFT) using Alpaca/Guanaco-style instruction tuning on curated clinical and nutrition datasets (NIH Clinical Nutrition, MIMIC-III, USDA/Open Food Facts).",
    "Built a full-stack food-diary and health chatbot platform (React, Node.js/Express, PostgreSQL) enabling nutrient tracking, health-parameter graphs, and medical report analysis via PDF/CSV/text uploads.",
    "Implemented dynamic schema management, parameterized SQL queries, and Recharts-based visualizations for macronutrient and health-marker trends over time."
  ],
  TechStack: [
    "React",
    "Node.js",
    "PostgreSQL",
    "Biomistral (SFT)",
    "Ollama"
  ]
},
{
  id: 2,
  Img: "pilot.png",
  Title: "Vision-Language Virtual Desktop Assistant",
  Description:
    "An intelligent desktop assistant that automates tasks using an adaptive screen-stability detection algorithm and thread-safe PyQt5 overlay, achieving 90% task success at sub-4-second average cycle time.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "Ran a 5-configuration ablation study (component removal, model swap) to quantify each module's contribution to task success rate and latency, validating design choices empirically rather than by assumption.",
    "Investigated failure modes across 50 diverse tasks (micro UI elements, custom-rendered applications) to identify detection limitations and inform mitigation strategies.",
    "Implemented an adaptive screen-stability detection algorithm (NMAD differencing) and thread-safe PyQt5 overlay, achieving 90% task success at sub-4-second average cycle time."
  ],
  TechStack: [
    "Python",
    "PyQt5",
    "OmniParser",
    "Gemini 2.5"
  ]
},
{
  id: 3,
  Img: "facematch.png",
  Title: "BioTrack: Distributed Biometric Framework",
  Description:
    "A three-tier multi-modal platform integrating face recognition with semantic search and geofencing to provide distributed biometric tracking and analysis.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "Evaluated three face-recognition architectures (VGG-Face, FaceNet, InsightFace) on embedding dimensionality, accuracy, and CPU inference latency to select the best-performing model.",
    "Conducted FAR/FRR threshold-sensitivity analysis across cosine-similarity thresholds to identify an optimal operating point (τ = 0.45) for the deployed system.",
    "Built a three-tier multi-modal platform (Flask, React, React Native) integrating the selected model with semantic search (Gemini + MiniLM) and geofencing (Haversine + ray-casting)."
  ],
  TechStack: [
    "Python",
    "Flask",
    "React Native",
    "InsightFace",
    "MongoDB"
  ]
},
{
  id: 6,
  Img: "MIS.png",
  Title: "Customer Complaint Analytics & MIS Platform",
  Description:
    "A data analytics platform leveraging NLP and predictive modeling to analyze customer complaints and generate interactive MIS dashboards for decision support.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "NLP-based sentiment analysis",
    "Topic extraction from complaint data",
    "Predictive escalation modeling",
    "Automated KPI dashboards",
    "BigQuery ETL pipeline",
    "Power BI integration"
  ],
  TechStack: [
    "Python",
    "SQL",
    "BigQuery",
    "Power BI",
    "GCP",
    "VADER NLP",
    "Airflow"
  ]
},
{
  id: 7,
  Img: "facematch.png",
  Title: "Robust Face Embedding for Heterogeneous Images",
  Description:
    "Deep learning based research system for learning domain-invariant face embeddings across heterogeneous inputs such as sketch-photo and low-high resolution images.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "Cross-domain face embedding learning",
    "Contrastive & triplet loss training",
    "Robust similarity matching",
    "Heterogeneous dataset support",
    "Illumination invariant feature extraction",
    "Benchmark dataset evaluation"
  ],
  TechStack: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "NumPy",
    "scikit-learn"
  ]
},
{
  id: 8,
  Img: "drone.png",
  Title: "Emergency Signal Localization using Autonomous Drones",
  Description:
    "A distributed multi-drone system using RF detection and AI-based path optimization to localize emergency signals in real-time search-and-rescue missions.",
  Github: "https://github.com/adityajha2118",
  Features: [
    "RF signal detection",
    "Audio-based localization",
    "Multi-drone coordination",
    "AI path optimization",
    "Edge inference on Raspberry Pi",
    "Real-time signal mapping"
  ],
  TechStack: [
    "Python",
    "TensorFlow Lite",
    "ROS",
    "OpenCV",
    "MQTT",
    "Raspberry Pi"
  ]
}
];

const HARDCODED_CERTIFICATES = [
  { id: 1, Img: "html.svg" },
  { id: 2, Img: "html.svg" },
  { id: 3, Img: "html.svg" },
  { id: 4, Img: "html.svg" }
];

export { HARDCODED_CERTIFICATES, HARDCODED_PROJECTS };