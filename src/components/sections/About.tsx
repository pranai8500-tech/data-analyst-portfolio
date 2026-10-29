import { Card, CardContent } from '../ui/Card';
import { SkillTag } from '../ui/SkillTag';

export const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Data-Driven Mindset',
      description: 'I approach every problem with curiosity and analytical rigor, letting data guide decisions rather than assumptions.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16M6 16l4-16m4 16l4-16M14 16l4-16" />
        </svg>
      ),
      title: 'Business Impact Focus',
      description: 'Every analysis I build aims to answer real business questions and drive measurable outcomes for stakeholders.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Continuous Learning',
      description: 'Actively expanding my toolkit with new techniques, libraries, and best practices in the rapidly evolving data landscape.',
    },
  ];

  const journey = [
    { year: '2024', title: 'Final Year BTech', description: 'Specializing in data analytics and business intelligence. Building portfolio projects with real datasets.' },
    { year: '2023', title: 'Core Analytics Skills', description: 'Mastered Python, Pandas, SQL, and visualization libraries. Completed multiple end-to-end analytics projects.' },
    { year: '2022', title: 'Foundation Building', description: 'Strong fundamentals in statistics, programming, and database systems. Started exploring data science.' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Final-Year BTech Student <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aspiring Data Analyst</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about transforming raw data into actionable business insights. My journey combines strong technical foundations with a business-oriented mindset.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-white">What Drives Me</h3>
            <p className="text-slate-300 leading-relaxed">
              As a final-year BTech student, I've discovered that my true passion lies at the intersection of data and business decision-making. 
              I don't just analyze numbers—I seek to understand the story they tell and the decisions they can inform.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Through my academic projects and self-driven portfolio work, I've built end-to-end analytics solutions: 
              from data cleaning and exploratory analysis to interactive dashboards and business reports. 
              I'm proficient in Python (Pandas, NumPy), SQL, Excel, Power BI, and modern visualization libraries like ECharts and Chart.js.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I'm actively seeking entry-level Data Analyst roles where I can contribute analytical rigor, 
              learn from experienced mentors, and grow into a senior analytics professional who drives strategic decisions.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-semibold text-white">Core Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {highlights.map((item) => (
                <Card key={item.title} variant="outlined" padding="md" className="transition-all hover:border-blue-500/50">
                  <CardContent className="flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-2xl font-semibold text-white text-center mb-10">My Journey</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent" />
            <div className="space-y-10">
              {journey.map((item) => (
                <div key={item.year} className="relative pl-20">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 z-10 shadow-lg shadow-blue-500/30" />
                  <div className="absolute left-6 top-6 text-xs font-bold text-blue-400 w-32 text-right">{item.year}</div>
                  <Card variant="outlined" padding="md">
                    <CardContent>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-semibold text-white text-center mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Machine Learning', 'Advanced SQL', 'dbt', 'Airflow', 'Tableau', 'Statistical Modeling', 'A/B Testing', 'Data Storytelling'].map((topic) => (
              <SkillTag key={topic} category="Analytics" className="text-sm px-3 py-1.5 cursor-default">
                {topic}
              </SkillTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};