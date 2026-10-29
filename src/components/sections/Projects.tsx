import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Analytics Projects <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">That Deliver Insights</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            End-to-end data analytics projects demonstrating technical depth, business acumen, and actionable insights from real-world datasets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="animate-fade-in-up">
          <Card variant="outlined" padding="lg" className="text-center">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Dashboards & Full Reports</h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                Each project includes a fully interactive dashboard with filters, drill-downs, and real-time calculations, 
                plus a comprehensive PDF business report with methodology, findings, and limitations.
              </p>
              <Button variant="primary" size="lg" onClick={() => document.querySelector('#dashboards')?.scrollIntoView({ behavior: 'smooth' })}>
                View All Dashboards & Reports
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};