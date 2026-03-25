import React, { useState } from 'react';
import certImg from "../assets/certificate1.png";
import certImg2 from "../assets/certificate2.png";
import certImg3 from "../assets/certificate3.png";
import certImg4 from "../assets/certificate4.png";
import { Eye, ExternalLink, Download, X, ArrowRight } from 'lucide-react';

export const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Basic Machine Learning",
      provider: "Lovely Professional University",
      date: "2025",
      description: "Implemented complete machine learning workflows including preprocessing, pipeline creation and model optimization.",
      image: certImg,
      link: "https://drive.google.com/file/d/1AzPiVXEecCY6K8LktI8_14ixdWiE_C1U/view?usp=sharing",
    },
    {
      id: 2,
      title: "Cloud Computing Fundamentals",
      provider: "NPTEL",
      date: "2025",
      description: "Completed NPTEL Cloud Computing certification, covering cloud architecture, virtualization, service models (IaaS, PaaS, SaaS), and real-world applications.",
      image: certImg2,
      link: "https://drive.google.com/file/d/1PC07li0dSiJQo8TsYy6yd0H0XDdYkiTE/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Java Programming",
      provider: "IamNeo",
      date: "2025",
      description: "Completed Java Programming certification from iamneo, gaining strong fundamentals in object-oriented programming and problem-solving.",
      image: certImg3,
      link: "https://drive.google.com/file/d/1kehqCoOM2vfQQeoKyFFn9Hvk7GlpIafi/view",
    },
    {
      id: 4,
      title: "Professional Soft Skills Learning Pathway",
      provider: "LinkedIn Learning",
      date: "2023",
      description: "Developed strong interpersonal, presentation, and workplace readiness skills through structured learning.",
      image: certImg4,
      link: "https://drive.google.com/file/d/1Jte1dARWQKp6d8E-YnZsp9z1KO4zGB0i/view?usp=drive_link",
    },
  ];

  const handleDownload = (imgUrl, title) => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-cert.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-24 px-4 bg-[#030014] text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Certificates & <span className="text-[#a78bfa]">Learnings</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Verified certificates that showcase skills and professional growth.
          </p>
        </div>

        {/* Grid with Arrow Flow */}
        <div className="relative">
          {/* Desktop: Horizontal flow lines */}
          <div className="hidden lg:block absolute top-36 left-0 right-0 h-1 bg-gradient-to-r from-[#8b5cf6]/20 via-[#8b5cf6]/40 to-[#8b5cf6]/20 pointer-events-none" />
          
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {certificates.map((cert, index) => (
              <div key={cert.id} className="relative group">
                {/* Arrow connector for desktop (hidden on md and below) */}
                {index < certificates.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-36 transform translate-x-full">
                    <div className="text-[#8b5cf6]/50 group-hover:text-[#8b5cf6]/80 transition-colors duration-300">
                      <ArrowRight size={20} strokeWidth={2} />
                    </div>
                  </div>
                )}

                <article
                  className="group relative bg-[#0a0a1a] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#8b5cf6]/30 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] h-full hover:-translate-y-2"
                >
                  {/* Progress indicator line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b5cf6] via-[#8b5cf6]/50 to-transparent origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[2.5rem]" />

                  {/* Image & Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Visual Match: Overlay with Gradient & Navy themes */}
                    <div className="absolute inset-0 bg-[#000000]/60 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      
                      {/* Eye Icon - Consistent Purple/Navy */}
                      <button 
                        onClick={() => setSelectedImage(cert.image)}
                        className="p-3 bg-[#0d0d21] text-[#a78bfa] rounded-full border border-white/10 hover:bg-[#8b5cf6] hover:text-white transition-all"
                      >
                        <Eye size={20} />
                      </button>

                      {/* Center External Link - Signature Gradient */}
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-4 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-purple-500/20"
                      >
                        <ExternalLink size={24} />
                      </a>

                      {/* Download Icon - NO GREEN, Matches Eye Icon */}
                      <button 
                        onClick={() => handleDownload(cert.image, cert.title)}
                        className="p-3 bg-[#0d0d21] text-[#a78bfa] rounded-full border border-white/10 hover:bg-[#8b5cf6] hover:text-white transition-all"
                      >
                        <Download size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-7 text-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] tracking-[0.2em] font-bold text-[#a78bfa] uppercase">
                        {cert.provider}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#a78bfa] transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2 px-2">
                      {cert.description}
                    </p>

                    {/* Main Gradient Button */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                    >
                      View Certificate
                      <span className="ml-1 opacity-70">↗</span>
                    </a>

                    {/* Visual flow indicator */}
                    <div className="pt-3 flex items-center gap-2 text-[#8b5cf6]/60 group-hover:text-[#8b5cf6] transition-colors duration-300">
                      <div className="flex-1 h-px bg-gradient-to-r from-[#8b5cf6]/30 to-transparent" />
                      <ArrowRight size={16} className="flex-shrink-0" />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
            <X size={36} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.2)] border border-white/10 animate-in zoom-in-95 duration-300"
            alt="Full size certificate"
          />
        </div>
      )}
    </section>
  );
};