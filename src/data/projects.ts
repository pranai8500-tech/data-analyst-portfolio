export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  tools: string[];
  dashboardFile?: string;
  reportFile?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'analytics' | 'chatbot';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'dataco',
    title: 'DataCo Supply Chain Analytics',
    shortTitle: 'DataCo Supply Chain',
    description: 'End-to-end supply chain analytics dashboard analyzing sales, profitability, delivery performance, and late-delivery risk across global markets.',
    detailedDescription: 'Built an interactive supply chain analytics dashboard using the DataCo Global dataset (180,519 order lines, Jan 2015 – Jan 2018). The dashboard provides executive KPIs, monthly revenue and order trends, delivery performance by shipping mode and region, product-level profitability analysis with discount bands, customer segmentation, and data quality diagnostics. Key findings include a 42% sales drop in Nov-2017 driven by a lines-per-order collapse (data capture change, not demand loss), highest late-delivery rates in Standard Class shipping, and top 10 products contributing disproportionate profit share.',
    tools: ['Python', 'Pandas', 'ECharts', 'HTML/CSS/JS'],
    dashboardFile: '/projects/dataco-dashboard.html',
    reportFile: '/projects/dataco-report.pdf',
    category: 'analytics',
    featured: true,
  },
  {
    id: 'online-retail',
    title: 'Online Retail Business Analytics',
    shortTitle: 'Online Retail Analytics',
    description: 'Revenue, customer, product, and geographic analysis for a UK-based online retailer with Pareto analysis, customer lifetime value estimation, and market concentration insights.',
    detailedDescription: 'Analyzed the Online Retail dataset (Dec 2010 – Dec 2011, 541,909 transaction lines) to build a multi-page executive dashboard. Features include monthly revenue and order trends with MoM growth, product Pareto analysis (top 30 products), revenue concentration by product tier, customer RFM-style analysis (recency segments, frequency vs spend scatter, high-value inactive customers), geographic revenue and AOV by country with small-sample flags, and a ranked opportunities/risks table. Data quality notes: 135,080 lines missing CustomerID (excluded from customer KPIs), service/fee codes excluded from product KPIs, and SQL max-price discount proxy is implausible (not actual discounting).',
    tools: ['Python', 'Pandas', 'ECharts', 'HTML/CSS/JS'],
    dashboardFile: '/projects/online-retail-dashboard.html',
    reportFile: '/projects/online-retail-report.pdf',
    category: 'analytics',
    featured: true,
  },
  {
    id: 'telco-churn',
    title: 'Telco Customer Churn Intelligence',
    shortTitle: 'Customer Churn Analysis',
    description: 'Customer churn analysis with revenue exposure, churn drivers by contract/tenure/payment/internet service, high-value churner identification, and recorded churn reasons.',
    detailedDescription: 'Analyzed a telco customer snapshot (7,043 customers, California) to quantify churn rate (26.5% overall), revenue exposure from churned customers ($139K/mo monthly charges), and churn drivers across contract type, tenure, payment method, internet service, and tech support. Month-to-month contract customers churn at 42.7% vs 2.8% for two-year. Fiber optic customers churn at 41.9% vs 7.3% for DSL. Electronic check payment method shows 45.3% churn vs 15-19% for automatic methods. High-value churners (CLTV above average $2,708) account for $31K/mo in monthly charges. Top recorded reasons: Competitor made better offer, Moved, Competitor offered higher download speeds. Limitations: single snapshot, no reporting date, associations not causation, churn score/CLTV used as supplied without model documentation.',
    tools: ['Python', 'Pandas', 'Chart.js', 'HTML/CSS/JS'],
    dashboardFile: '/projects/telco-churn-dashboard.html',
    reportFile: '/projects/telco-churn-report.pdf',
    category: 'analytics',
    featured: true,
  },
  {
    id: 'insightai',
    title: 'InsightAI Analytics Chatbot',
    shortTitle: 'InsightAI',
    description: 'AI-powered data analytics chatbot that lets users upload datasets and ask natural language questions to generate insights, visualizations, and code.',
    detailedDescription: 'Built a Streamlit-based AI data analytics assistant that accepts CSV/Excel uploads, uses LLMs to generate Python analysis code, executes it safely, and returns insights with visualizations. Features include automated EDA, statistical summaries, correlation analysis, chart generation (matplotlib/seaborn/plotly), and code transparency. Deployed on Streamlit Cloud with a public URL. The chatbot democratizes data analysis for non-technical users while providing reproducible code for analysts.',
    tools: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'Pandas', 'Plotly'],
    liveUrl: 'https://insightai-ft5wqqi7hxectrfnudytky.streamlit.app/',
    githubUrl: 'https://github.com/pranai8500-tech/InsightAI',
    category: 'chatbot',
    featured: true,
  },
];

export const skills = [
  { name: 'Python', category: 'Programming', proficiency: 90 },
  { name: 'SQL', category: 'Data Querying', proficiency: 85 },
  { name: 'Pandas', category: 'Data Analysis', proficiency: 88 },
  { name: 'NumPy', category: 'Data Analysis', proficiency: 80 },
  { name: 'Excel', category: 'Spreadsheets', proficiency: 85 },
  { name: 'Power BI', category: 'BI & Visualization', proficiency: 80 },
  { name: 'ECharts', category: 'Visualization', proficiency: 75 },
  { name: 'Chart.js', category: 'Visualization', proficiency: 75 },
  { name: 'Data Cleaning', category: 'Data Prep', proficiency: 90 },
  { name: 'Exploratory Data Analysis', category: 'Data Analysis', proficiency: 88 },
  { name: 'KPI Development', category: 'Business Analysis', proficiency: 82 },
  { name: 'Business Reporting', category: 'Business Analysis', proficiency: 85 },
  { name: 'Statistical Analysis', category: 'Analytics', proficiency: 78 },
  { name: 'Data Visualization', category: 'Visualization', proficiency: 85 },
];

export const skillCategories = [
  'Programming',
  'Data Querying',
  'Data Analysis',
  'Spreadsheets',
  'BI & Visualization',
  'Visualization',
  'Data Prep',
  'Business Analysis',
  'Analytics',
];