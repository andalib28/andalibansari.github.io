// Central place to edit site-wide content. Update this file rather than
// hunting through components for copy changes.

export const SITE = {
  title: "Andalib Ansari - Data Platform & AI Engineering",
  description:
    "Data platform design, Airflow, custom data quality servers, warehouse modeling, and AI apps with n8n and LangChain.",
};

export const NAV_LINKS = [
  { href: "#expertise", label: "expertise" },
  { href: "#services", label: "services" },
  { href: "#teaching", label: "teaching" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/andalibansari/",
  github: "https://github.com/", // TODO: replace with your real GitHub URL
  email: "hello@andalibansari.com",
  // TODO: replace with your real Calendly/Cal.com booking link
  calendly: "https://calendly.com/YOUR-USERNAME",
};

// Path to your CV in /public — export your CV as PDF and drop it there
// with this exact filename, or change the path here to match.
export const CV_PATH = "/Andalib_Ansari_CV.pdf";

// Real stats pulled from your Udemy instructor profile and course page.
// Update these numbers periodically as ratings/students grow.
export const UDEMY = {
  instructorUrl: "https://www.udemy.com/user/andalib-ansari/", // TODO: confirm this is your real instructor URL
  instructorRating: "4.4",
  reviews: "2,095",
  students: "29,283",
  courseCount: "2",
  course: {
    title: "Data Engineering Bootcamp: SQL, ETL, PySpark & AWS (Hands-on)",
    tagline: "Build ETL pipelines with real-world projects, step by step.",
    url: "https://www.udemy.com/course/data-engineering-bootcamp-series-1/?couponCode=DEAI2026", // TODO: replace with the real course URL
    rating: "4.6",
    ratingsCount: "23 ratings",
    hours: "10 total hours",
    lectures: "57 lectures",
    level: "All Levels",
  },
};

export const METRICS = [
  { value: "12+", label: "years in data & AI engineering" },
  { value: "60%", label: "infrastructure cost reduction delivered" },
  { value: "1500+", label: "automated data-quality checks / day" },
  { value: "45%", label: "query cost savings delivered" },
];


export const EXPERTISE = [
  {
    icon: "platform",
    color: "teal",
    title: "End-to-End Data Platform Design",
    description:
      "Architecting the full path from raw ingestion to governed, trusted data - data lake, warehouse, catalog, and lineage as one coherent platform, not disconnected tools.",
    tags: ["AWS S3", "Data Lake", "Data Catalog", "Data Lineage"],
  },
  {
    icon: "airflow",
    color: "amber",
    title: "Airflow Platform Setup",
    description:
      "Standing up production-grade Airflow - custom operators and plugins, DAG authoring standards, code-review conventions, and on-call runbooks that scale as teams grow.",
    tags: ["Apache Airflow", "Custom Operators", "DAG Standards", "PagerDuty SOPs"],
  },
  {
    icon: "shield",
    color: "teal",
    title: "Custom Data Quality Server",
    description:
      "Building in-house data quality services from scratch — automated checks that catch schema drift, null violations, and SLA breaches before they hit downstream consumers.",
    tags: ["Flask API","React UI", "1500+ checks/day", "SLA/SLO", "Observability"],
  },
  {
    icon: "schema",
    color: "amber",
    title: "Data Warehouse Modeling",
    description:
      "Designing dimensional models and star schemas built for fast, trustworthy BI — the layer between raw pipelines and the dashboards people actually make decisions from.",
    tags: ["Redshift", "Snowflake", "Databricks", "BigQuery", "Data Modeling", "SQL"],
  },
  {
    icon: "agent",
    color: "violet",
    title: "AI Apps on Warehouse & Event Data",
    description:
      "Building agentic AI applications with n8n and LangChain directly on top of warehouse and event-stream data — RAG assistants, natural-language query agents, and automation workflows.",
    tags: ["n8n", "LangChain", "RAG", "Event Data", "Data Warehouse"],
  },
  {
    icon: "migration",
    color: "amber",
    title: "Data Warehouse Migration",
    description:
      "Moving traditional, on-prem data warehouses to modern cloud platforms — replatforming schemas, pipelines, and workloads with minimal downtime and validated parity.",
    tags: ["Redshift", "Snowflake", "Databricks", "BigQuery"],
  },
  {
    icon: "coaching",
    color: "teal",
    title: "1:1 / Group Data & AI Engineering Coaching",
    description:
      "Mentoring engineers and small teams on data platform fundamentals and applied AI — architecture reviews, career guidance, and hands-on pairing, one-on-one or in groups.",
    tags: ["Mentoring", "Architecture Reviews", "Career Guidance", "Team Training"],
  },
];

export const PROCESS = [
  {
    num: "01 / Discover",
    title: "Audit & scope",
    description:
      "Review your current data platform, pipelines, and any existing AI workflows. Come out with a scoped, prioritised plan.",
  },
  {
    num: "02 / Build",
    title: "Design & implement",
    description:
      "Hands-on delivery — platform architecture, Airflow setup, data quality server, warehouse models, or the n8n/LangChain agent itself.",
  },
  {
    num: "03 / Handover",
    title: "Document & support",
    description:
      "Runbooks, DAG standards, and a short support window so your team can own and extend what's built.",
  },
];

export const SERVICES = [
  {
    title: "Data & AI Consulting",
    description:
      "Architecture reviews and hands-on build support across any of the five core areas — scoped as a fixed project or ongoing advisory.",
    cta: "Discuss a project →",
  },
  {
    title: "Digital Presence Audit",
    description:
      "A monthly report that finds the fixable gaps in your Google listing, reviews, and social media - ranked by what they're costing you in lost patients, with a clear action list to close them.",
    cta: "Request an audit →",
  },
  {
    title: "Data Engineering Build",
    description:
      "End-to-end delivery: pipelines, Airflow platform, data quality server, or warehouse migration — scoped and shipped.",
    cta: "Scope a build →",
  },
];

export const SELECTED_WORK = [
  {
    domain: "Global gaming platform",
    title: "Enterprise data lake consolidation",
    description:
      "Unified BI, AI, and operational workloads onto a single governed AWS data lake, cutting infrastructure costs 60%.",
  },
  {
    domain: "Global gaming platform",
    title: "In-house data quality server",
    description:
      "Built a Flask-based data quality platform running 1500+ automated checks a day across ingestion and transformation layers.",
  },
  {
    domain: "Global gaming platform",
    title: "Agentic BI assistant",
    description:
      "Built a production RAG assistant that lets analysts ask the warehouse questions in plain English - orchestrated with n8n, reasoning handled by LangChain, semantic search backed by a vector database.",
  },
  {
    domain: "Ride-hailing super-app",
    title: "Centralised warehouse & Airflow platform",
    description:
      "Built the data warehouse powering executive dashboards, plus an Airflow DAG generator framework to automate pipeline creation.",
  },
];

export const EXPERIENCE = [
  {
    date: "JUL 2023 — PRESENT · PERTH",
    role: "Senior Data Architect, Data & AI Engineering",
    org: "Microgaming Asia",
    description:
      "Architected an enterprise AWS data lake and led a production RAG-based BI Assistant. Manages a team of 5 data engineers.",
  },
  {
    date: "DEC 2019 — JUN 2023 · SINGAPORE",
    role: "Data Architect, Data & AI Engineering",
    org: "Microgaming Asia",
    description:
      "Re-engineered the on-prem Financial Data Warehouse onto Redshift; scaled the Airflow platform and trained 15+ engineers.",
  },
  {
    date: "AUG 2017 — NOV 2019 · SINGAPORE",
    role: "Data Engineer",
    org: "Grab",
    description:
      "Built the centralised Data Warehouse powering C-suite dashboards across ride-hailing, payments, food, and delivery.",
  },
  {
    date: "JAN 2015 — JUL 2017 · MUMBAI",
    role: "Data Engineer",
    org: "WebEngage",
    description:
      "Built the company's Data Warehouse from scratch on Redshift, maintaining 99.9% uptime across ETL, warehouse, and BI layers.",
  },
  {
    date: "JAN 2014 — DEC 2014 · MUMBAI",
    role: "Data Analyst",
    org: "Freestone Infotech",
    description:
      "Designed ETL pipelines generating credit scoring metrics from raw telco datasets on an EMR/Hadoop/Hive stack.",
  },
];

export const CONTACT_OPTIONS = [
  "End-to-End Data Platform Design",
  "Airflow Platform Setup",
  "Custom Data Quality Server",
  "Data Warehouse Modeling",
  "AI Engineering",
  "Digital Presence Audit",
  "Something else",
];
