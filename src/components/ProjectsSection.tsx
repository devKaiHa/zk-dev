import { ExternalLink } from "lucide-react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "PROJECTS.E_RECRUITMENT",
      description: "PROJECTS.E_RECRUITMENT_CONTENT",
      technologies: ["ReactJS", "ReactNative", "NodeJS", "MongoDB"],
      status: "PROJECTS.BETA",
      category: "PROJECTS.GOVERNANCE",
      openSource: false,
      githubLink: null,
      previewLink: null,
    },
    {
      title: "PROJECTS.HIRA_INSTITUTE",
      description: "PROJECTS.HIRA_INSTITUTE_CONTENT",
      technologies: ["ReactJS", "NodeJS", "MongoDB"],
      status: "PROJECTS.ALPHA",
      category: "PROJECTS.EDUCATION",
      openSource: true,
      githubLink: "https://github.com/DevZeroSh/hira",
      previewLink: null,
    },
    {
      title: "PROJECTS.E_EXHIBITION",
      description: "PROJECTS.E_EXHIBITION_CONTENT",
      technologies: ["C#", "Unity", "MSSQL"],
      status: "PROJECTS.DEVELOPMENT",
      category: "PROJECTS.BUSINESS",
      openSource: false,
      githubLink: null,
      previewLink: null,
    },
    {
      title: "PROJECTS.ONLINE_MARKETPLACE",
      description: "PROJECTS.ONLINE_MARKETPLACE_CONTENT",
      technologies: ["ReactJS", "NodeJS", "MongoDB"],
      status: "PROJECTS.DEVELOPMENT",
      category: "PROJECTS.BUSINESS",
      openSource: false,
      githubLink: null,
      previewLink: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PROJECTS.LIVE":
        return "text-green-400 bg-green-400/20";
      case "PROJECTS.BETA":
        return "text-blue-400 bg-blue-400/20";
      case "PROJECTS.DEVELOPMENT":
        return "text-yellow-400 bg-yellow-400/20";
      case "PROJECTS.RESEARCH":
        return "text-purple-400 bg-purple-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
  };

  const handleAnimationEnd = () => {
    setSpinning(false);
  };

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-dark/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t("PROJECTS.OUR")}{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {t("PROJECTS.PROJECTS")}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("PROJECTS.OUR_PROJECTS_CONTENT")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              id={`project${index + 1}`}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-brand-light/50 transition-all duration-500 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/5 to-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-sm text-brand-light font-medium mb-2 block">
                      {t(project.category)}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors duration-300">
                      {t(project.title)}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}>
                    {t(project.status)}
                  </span>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">
                  {t(project.description)}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* <button className="flex items-center gap-2 px-4 py-2 bg-gradient-brand text-white rounded-full hover:scale-105 transition-transform duration-300">
                    Learn More
                    <ArrowRight size={16} />
                  </button> */}
                  {project?.openSource && project?.githubLink && (
                    <button className="p-2 text-white/60 hover:text-white transition-colors duration-300">
                      <GitHubIcon
                        onClick={() => {
                          window.open(project?.githubLink, "_blank");
                        }}
                        size={20}
                      />
                    </button>
                  )}
                  {project?.previewLink && (
                    <button className="p-2 text-white/60 hover:text-white transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={handleClick}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:border-brand-light/50 hover:bg-white/15 transition-all duration-300">
            <span>{t("PROJECTS.MORE_ON_WAY")}</span>
            <HourglassBottomIcon
              onAnimationEnd={handleAnimationEnd}
              className={spinning ? "animate-spin-once" : ""}
            />
          </button>
        </div>

        {/* <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:border-brand-light/50 hover:bg-white/15 transition-all duration-300">
            <span>View All Projects</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
