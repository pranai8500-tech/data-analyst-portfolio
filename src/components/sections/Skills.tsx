import { skills, skillCategories } from '../../data/projects';
import { SkillCard } from '../ui/SkillTag';
import { Card, CardContent } from '../ui/Card';

export const Skills = () => {
  const categorizedSkills = skillCategories.map(category => ({
    category,
    items: skills.filter(s => s.category === category).sort((a, b) => b.proficiency - a.proficiency),
  })).filter(g => g.items.length > 0);

  return (
    <section id="skills" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tools & Technologies <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">I Work With</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Proficient in modern data stack tools for end-to-end analytics workflows — from data extraction to business reporting.
          </p>
        </div>

        <div className="space-y-12">
          {categorizedSkills.map((group, groupIndex) => (
            <div key={group.category} className="animate-fade-in-up" style={{ animationDelay: `${groupIndex * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />
                <h3 className="text-xl font-semibold text-white uppercase tracking-wider text-slate-300">{group.category}</h3>
                <span className="text-sm text-slate-500 px-2 py-0.5 bg-slate-800 rounded-full">{group.items.length} skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 pt-12 border-t border-slate-800 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold text-white text-center mb-8">Workflow & Methodology</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '🔍', title: 'Data Discovery', desc: 'Requirements gathering, source identification, data profiling' },
                { icon: '🧹', title: 'Data Cleaning', desc: 'Missing values, outliers, deduplication, type correction' },
                { icon: '📊', title: 'Exploratory Analysis', desc: 'Distributions, correlations, patterns, hypothesis testing' },
                { icon: '📈', title: 'KPI Development', desc: 'Business metrics, dashboards, automated reporting' },
                { icon: '💡', title: 'Insight Generation', desc: 'Root cause analysis, trend identification, recommendations' },
                { icon: '📝', title: 'Business Reporting', desc: 'Executive summaries, stakeholder presentations, documentation' },
                { icon: '🤝', title: 'Collaboration', desc: 'Cross-functional alignment, requirement iteration, knowledge sharing' },
                { icon: '🚀', title: 'Continuous Improvement', desc: 'Model monitoring, feedback loops, process optimization' },
                ].map((step) => (
                <Card key={step.title} variant="outlined" padding="md" className="transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};