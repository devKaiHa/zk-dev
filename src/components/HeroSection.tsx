import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 via-black to-brand-light/30"></div>

        {/* Animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(100, 208, 236, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 208, 236, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "float 8s ease-in-out infinite",
          }}></div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-brand-light rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}></div>
        ))}

        {/* Holographic scanlines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-brand-light/20 to-transparent animate-pulse"></div>
        </div>

        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-light/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-brand-dark/30 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Interactive logo/title */}
        <div
          className="group cursor-pointer mb-8"
          onClick={() => setIsPlaying(!isPlaying)}>
          <h1 className="text-7xl md:text-9xl font-black mb-4 relative">
            <span className="bg-gradient-brand bg-clip-text text-transparent relative z-10 hover:scale-105 transition-transform duration-500 inline-block">
              ZK
            </span>
            <span className="text-white/20 mx-4">•</span>
            <span className="bg-gradient-brand-reverse bg-clip-text text-transparent relative z-10 hover:scale-105 transition-transform duration-500 inline-block">
              DEV
            </span>

            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
          </h1>
        </div>

        <div className="text-lg md:text-xl text-white/60 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t("HERO.WHERE")}{" "}
          <span className="text-brand-light font-semibold hover:text-white transition-colors cursor-pointer">
            {t("HERO.VISIONARY_IDEAS")}
          </span>{" "}
          {t("HERO.TRANSFORM_INTO")}{" "}
          <span className="text-brand-light font-semibold hover:text-white transition-colors cursor-pointer">
            {t("HERO.POWERFUL_DIGITAL_REALITIES")}
          </span>
          .
        </div>

        {/* Interactive buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-brand text-white font-bold rounded-full overflow-hidden hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-light/50">
            <span className="relative z-10 flex items-center gap-3">
              {t("HERO.EXPLORE_UNIVERSE")}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 border-2 border-brand-light/30 text-brand-light font-bold rounded-full hover:border-brand-light hover:bg-brand-light/10 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              {t("HERO.VIEW_PROJECTS")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-light/0 via-brand-light/10 to-brand-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-500">
          <div className="text-sm tracking-widest">{t("HERO.SCROLL")}</div>
          <div className="relative">
            <ChevronDown
              size={32}
              className="animate-bounce group-hover:scale-125 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-brand-light/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
