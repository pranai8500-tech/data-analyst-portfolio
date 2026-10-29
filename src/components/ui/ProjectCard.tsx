import type { Project } from '../../data/projects';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { Button } from './Button';
import { SkillTag } from './SkillTag';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const hasDashboard = !!project.dashboardFile;
  const hasReport = !!project.reportFile;
  const hasLive = !!project.liveUrl;
  const hasGithub = !!project.githubUrl;

  return (
    <Card 
      variant="elevated" 
      padding="lg" 
      hover 
      className="flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-2 text-base text-slate-300 leading-relaxed">
              {project.description}
            </CardDescription>
          </div>
          <span className="flex-shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {project.category === 'analytics' ? 'Analytics' : 'AI Chatbot'}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 5).map((tool) => (
            <SkillTag key={tool} category="Programming" className="text-xs px-2 py-1">
              {tool}
            </SkillTag>
          ))}
          {project.tools.length > 5 && (
            <SkillTag category="Programming" className="text-xs px-2 py-1 text-slate-500 border-slate-600 bg-slate-800/50">
              +{project.tools.length - 5} more
            </SkillTag>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {hasDashboard && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 min-w-[140px] justify-center"
                onClick={() => window.open(project.dashboardFile!, '_blank', 'noopener,noreferrer')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </Button>
            )}
            {hasReport && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 min-w-[140px] justify-center"
                onClick={() => window.open(project.reportFile!, '_blank', 'noopener,noreferrer')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Report
              </Button>
            )}
            {hasLive && (
              <Button 
                variant="primary" 
                size="sm" 
                className="flex-1 min-w-[140px] justify-center"
                onClick={() => window.open(project.liveUrl!, '_blank', 'noopener,noreferrer')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Button>
            )}
            {hasGithub && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1 min-w-[140px] justify-center"
                onClick={() => window.open(project.githubUrl!, '_blank', 'noopener,noreferrer')}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};