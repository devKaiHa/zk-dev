import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: "TEAM.ALHAJALI",
      role: `${t("TEAM.FOUNDER")} & ${t("TEAM.CEO")}`,
      bio: "TEAM.ALHAJALI_CONTENT",
      avatar: "/api/placeholder/300/300",
      resume: "alhajali",
      xtwitter: "Aa253Abdabd",
      github: "Abdalrhman253",
      linkedIn: "abdalrohman-alhajali-3033b41ba",
      expertise: [
        "TEAM.PROJECT_MANAGEMENT",
        "TEAM.INTERNATIONAL_BUSINESS",
        "TEAM.DATA_ANALYSIS",
      ],
    },
    {
      name: "TEAM.SHAHROUR",
      role: `${t("TEAM.CO_FOUNDER")} & ${t("TEAM.BACK_LEADER")}`,
      bio: "TEAM.SHAHROUR_CONTENT",
      avatar: "/api/placeholder/300/300",
      resume: "shahrour",
      xtwitter: "MohammadShahrur",
      github: "DevZeroSh",
      linkedIn: "mohammad-shahrour-b9ab69270",
      expertise: ["TEAM.BACK_DEVELOPMENT", "TEAM.SERVER_MANAGEMENT"],
    },
    {
      name: "TEAM.HASANATO",
      role: `${t("TEAM.CO_FOUNDER")} & ${t("TEAM.FRONT_LEADER")}`,
      bio: "TEAM.HASANATO_CONTENT",
      avatar: "/api/placeholder/300/300",
      resume: "hasanato",
      xtwitter: "devKaiHa",
      github: "devKaiHa",
      linkedIn: "devKaiHa",
      expertise: ["TEAM.FRONT_DEVELOPMENT", "TEAM.UI_UX"],
    },
  ];

  const handleDownload = (resume: String) => {
    const link = document.createElement("a");
    link.href = `/resume/${resume}_ar.pdf`;

    // Suggest a filename for the user
    link.download = `${resume}_AR.pdf`; // This is the name of the downloaded file

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the link to trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <section
      id="team"
      className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-dark/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t("TEAM.MEET_OUR")}{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {t("TEAM.TEAM")}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("TEAM.MEET_TEAM_CONTENT")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-brand-light/50 transition-all duration-500 hover:scale-105 p-6">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-brand rounded-full p-1">
                      <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                        {t(
                          member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(member.name)}
                    </h3>
                    <p className="text-brand-light font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {t(member.bio)}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20">
                          {t(skill)}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-3">
                      <Tooltip
                        title="LinkedIn"
                        placement="top"
                        disableInteractive>
                        <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                          <LinkedInIcon
                            size={18}
                            onClick={() => {
                              window.open(
                                `https://www.linkedin.com/in/${member.linkedIn}`,
                                "_blank"
                              );
                            }}
                          />
                        </button>
                      </Tooltip>
                      <Tooltip title="X" placement="top" disableInteractive>
                        <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                          <XIcon
                            size={18}
                            onClick={() => {
                              window.open(
                                `https://www.x.com/${member.xtwitter}`,
                                "_blank"
                              );
                            }}
                          />
                        </button>
                      </Tooltip>
                      <Tooltip
                        title="GitHub"
                        placement="top"
                        disableInteractive>
                        <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                          <GitHubIcon
                            size={18}
                            onClick={() => {
                              window.open(
                                `https://www.github.com/${member.github}`,
                                "_blank"
                              );
                            }}
                          />
                        </button>
                      </Tooltip>
                      <Tooltip
                        title={t("TEAM.RESUME")}
                        placement="top"
                        disableInteractive>
                        <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                          <DescriptionIcon
                            size={18}
                            onClick={() => {
                              handleDownload(member.resume);
                            }}
                          />
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "TEAM.TEAM_MEMBERS", value: "10+" },
            { label: "TEAM.COUNTRY", value: "3" },
            { label: "TEAM.RESEARCH_PAPERS", value: "50+" },
            { label: "TEAM.YEARS_COMBINED_EXP", value: "100+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
              <div className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2 cursor-pointer">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{t(stat.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
