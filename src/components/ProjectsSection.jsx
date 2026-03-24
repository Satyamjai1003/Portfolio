import { useState, useRef } from "react";
import { ArrowRight, ExternalLink, Github, X, Calendar, Layers, Star, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Customer Credit Profiling System",
    description:
      "Machine learning project to analyze customer credit data and predict risk using classification models with Streamlit deployment.",
    image: "/projects/project1.png",
    tags: ["Python", "Machine Learning", "Streamlit","NumPy","Pandas","Matplotlib" ,"Scikit-learn"],
    demoUrl: "#",
    githubUrl: "https://github.com/Satyamjai1003",
    date: "Jan 2025 – Mar 2025",
    highlights: [
      "Built classification models (Random Forest, XGBoost) with 88% accuracy",
      "Interactive Streamlit dashboard for real-time credit risk prediction",
      "Feature engineering pipeline on 10,000+ customer records",
    ],
  },
  {
    id: 2,
    title: "CPU Scheduling Simulator",
    description:
      "Interactive simulator for CPU scheduling algorithms with Gantt charts, performance metrics, and algorithm comparison using Streamlit.",
    image: "/projects/project2.png",
    tags: ["Python", "Streamlit", "OS", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "https://github.com/Satyamjai1003",
    date: "Feb 2025 – Mar 2025",
    highlights: [
      "Simulates FCFS, SJF, Round Robin, and Priority scheduling algorithms",
      "Dynamic Gantt chart generation with performance metrics comparison",
      "Visual turnaround time and waiting time analysis per process",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website built with React and Tailwind CSS featuring animations, dark mode and contact integration.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "JavaScript","HTML","CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Satyamjai1003",
    date: "Feb 2026 – Mar 2026",
    highlights: [
      "Fully responsive design with dark mode.",
      "Smooth scroll animations and section transitions",
      "Contact form integration with EmailJS for direct messaging",
    ],
  },
  {
    id: 4,
    title: "Food Delivery Market Intelligence & Revenue Analysis Dashboard",
    description:
      "Developed an interactive dashboard to analyze revenue, orders, and customer trends across multiple food delivery brands, enabling data-driven insights.",
    image: "/projects/project5.png",
    tags: ["Power BI", "Data Analysis", "Data Visualization", "DAX", "Power Query", "Business Intelligence"],
    demoUrl: "https://app.powerbi.com/groups/me/reports/def32697-243a-4936-867a-8cd7985c2ded/f33c46bb696c6c929d09?experience=power-bi",
    githubUrl: "https://github.com/Satyamjai1003/Food-Delivery-Market-Intelligence-Revenue-Analysis-dashboard.git",
    date: "October 2025 – December 2025",
    highlights: [
      "Analyzed 6,000+ records of food delivery data to identify key revenue drivers and customer behavior patterns",
      "Created interactive visualizations and charts to present complex data in an easy-to-understand format",
      "Built an interactive dashboard to track key KPIs like revenue, total orders, customer count, and delivery performance."
    ],
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Desktop Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-[55%] -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm border border-primary/20 items-center justify-center rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/10"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-[55%] -translate-y-1/2 translate-x-5 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm border border-primary/20 items-center justify-center rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/10"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 px-4 sm:px-8 snap-x snap-mandatory hide-scrollbar relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => openModal(project)}
              className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover cursor-pointer flex flex-col min-w-[300px] w-[85vw] sm:w-[360px] md:w-[400px] shrink-0 snap-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 border border-white/5 hover:border-primary/40 relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "auto", paddingTop: "16px", flexWrap: "nowrap" }}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  >
                    <ExternalLink size={14} className="opacity-80" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700 transition-all duration-200"
                    style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  >
                    <Github size={14} className="opacity-90" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Satyamjai1003"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={closeModal}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project Image Banner */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 rounded-full p-1.5 text-white transition-all duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
              >
                <X size={18} />
              </button>

              {/* Title over image */}
              <div className="absolute bottom-4 left-5">
                <p className="text-xs text-slate-300 flex items-center gap-1 mb-1">
                  <Calendar size={12} />
                  {selectedProject.date}
                </p>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-2">
                  <Star size={13} />
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: "hsl(var(--primary))" }}
                      />
                      <span className="text-foreground/85">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-2">
                  <Layers size={13} />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                  Links
                </h4>
                <div className="flex flex-row items-center justify-center gap-3">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-6 py-2.5 text-xs font-medium text-slate-100 hover:bg-slate-700 transition-all duration-200"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};