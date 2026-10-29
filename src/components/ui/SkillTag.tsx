import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface SkillTagProps extends HTMLAttributes<HTMLSpanElement> {
  category?: string;
  proficiency?: number;
  showProficiency?: boolean;
}

export const SkillTag = forwardRef<HTMLSpanElement, SkillTagProps>(
  ({ className = '', category, proficiency, showProficiency = false, children, ...props }, ref) => {
    const categoryColors: Record<string, string> = {
      'Programming': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Data Querying': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'Data Analysis': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      'Spreadsheets': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      'BI & Visualization': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Visualization': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Data Prep': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Business Analysis': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      'Analytics': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    };

    const categoryColor = categoryColors[category || ''] || 'bg-slate-700/50 text-slate-300 border-slate-600';

    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 ${categoryColor} ${className}`}
        {...props}
      >
        {children}
        {showProficiency && proficiency !== undefined && (
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`w-1 h-1 rounded-full transition-colors ${
                  i < Math.round(proficiency / 20) ? 'bg-current' : 'bg-slate-600'
                }`}
              />
            ))}
          </span>
        )}
      </span>
    );
  }
);

SkillTag.displayName = 'SkillTag';

export interface SkillCardProps {
  name: string;
  category: string;
  proficiency: number;
}

export const SkillCard = ({ name, category, proficiency }: SkillCardProps) => (
  <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
    <div className="flex items-start justify-between gap-3 mb-3">
      <div>
        <h4 className="text-white font-semibold text-base">{name}</h4>
        <span className="text-xs text-slate-500 uppercase tracking-wider">{category}</span>
      </div>
      <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden flex-shrink-0 mt-1">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 group-hover:from-blue-400 group-hover:to-cyan-300"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-500">{proficiency}% proficiency</span>
      <span className="text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">View projects →</span>
    </div>
  </div>
);