import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
}) => {
  return (
    <section 
      id={id} 
      className={`scroll-mt-32 py-24 px-6 md:px-12 lg:px-24 bg-transparent relative z-10 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && (
              <div className="inline-flex mb-6 relative group">
                {/* Subtle Glow Behind */}
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Badge Container */}
                <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                   {/* Animated Gradient Border */}
                   <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#78350f_50%,#fbbf24_100%)]" />
                   
                   {/* Badge Content */}
                   <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500 backdrop-blur-3xl shadow-[inset_0_0_10px_rgba(251,191,36,0.1)]">
                     {subtitle}
                   </span>
                </div>
              </div>
            )}
            
            {title && (
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight drop-shadow-sm">
                {title}
              </h2>
            )}

            {/* Decorative Divider */}
            <div className="h-px w-24 bg-gradient-to-r from-neutral-800 via-neutral-700 to-transparent mt-8"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};