import { Trophy, Award, Medal, Star, Target, Zap, Code, Code2, TrendingUp, Users, ArrowRight } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Basic Machine Learning",
      category: "Training",
      date: "2025",
      description: "Developed end-to-end machine learning models using Python, including data preprocessing, pipeline creation, model training, and performance evaluation across multiple algorithms.",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      id: 2,
      title: "Open Source Contributor",
      category: "Community",
      date: "2023",
      description: "Active contributor to major Python data science libraries with 50+ merged pull requests.",
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: 3,
      title: "Research Publication",
      category: "Academic",
      date: "2023",
      description: "Co-authored paper on machine learning optimization techniques published in IEEE conference.",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      id: 4,
      title: "Mentorship Program",
      category: "Leadership",
      date: "2023",
      description: "Mentored 20+ junior developers in data science and full-stack development.",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      id: 5,
      title: "Performance Optimization",
      category: "Technical",
      date: "2024",
      description: "Improved application performance by 300% through advanced algorithms and caching strategies.",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      id: 6,
      title: "Industry Recognition",
      category: "Professional",
      date: "2024",
      description: "Recognized as 'Rising Star' by tech community for innovative contributions to data engineering.",
      icon: Medal,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
          My <span className="text-primary">Achievements</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-16 leading-relaxed text-base md:text-lg">
          Milestones and accomplishments spanning competitive programming, open source contributions, and professional recognition in technology.
        </p>

        {/* Timeline/Flow Container */}
        <div className="relative">
          {/* Desktop: Horizontal flow lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 pointer-events-none" />
          
          {/* Grid with arrow indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={achievement.id} className="relative group">
                  {/* Arrow connector for desktop (hidden on md and below) */}
                  {index < achievements.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-20 transform translate-x-full">
                      <div className="text-primary/50 group-hover:text-primary/80 transition-colors duration-300">
                        <ArrowRight size={20} strokeWidth={2} />
                      </div>
                    </div>
                  )}

                  {/* Achievement Card */}
                  <div className="group relative p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 h-full">
                    {/* Background gradient effect */}
                    <div
                      className={`absolute -top-12 -right-12 w-32 h-32 ${achievement.bgColor} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    />

                    {/* Progress indicator line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />

                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${achievement.bgColor} ${achievement.borderColor} border-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <IconComponent className={`h-7 w-7 ${achievement.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.15em] text-primary/80 font-semibold">
                          {achievement.category}
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {achievement.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Visual flow indicator */}
                      <div className="pt-3 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                        <ArrowRight size={16} className="flex-shrink-0" />
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical flow line with arrows */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2 pointer-events-none" />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border/40">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {achievements.length}+
            </div>
            <p className="text-muted-foreground text-sm">Major Achievements</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {new Set(achievements.map((a) => a.date)).size}
            </div>
            <p className="text-muted-foreground text-sm">Years of Impact</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {new Set(achievements.map((a) => a.category)).size}+
            </div>
            <p className="text-muted-foreground text-sm">Categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
