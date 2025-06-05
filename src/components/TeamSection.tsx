import { Linkedin, Twitter, Github } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdalrohman ALHAJALI",
      role: "Founder & CEO",
      bio: "Cryptography researcher with 10+ years in zero-knowledge protocols. Former Principal Engineer at leading blockchain companies.",
      avatar: "/api/placeholder/300/300",
      expertise: [
        "Zero-Knowledge Proofs",
        "Cryptography",
        "Blockchain Architecture",
      ],
    },
    {
      name: "Mohammad SHAHROUR",
      role: "Back-end team leader & Co-Founder",
      bio: "Full-stack engineer specializing in privacy-preserving technologies and scalable distributed systems.",
      avatar: "/api/placeholder/300/300",
      expertise: [
        "Systems Architecture",
        "Privacy Tech",
        "Distributed Computing",
      ],
    },
    {
      name: "Abdulrahman HASANATO",
      role: "Front-end team leader & Co-Founder",
      bio: "PhD in Applied Cryptography from MIT. Published 25+ papers on zero-knowledge proofs and privacy-preserving computation.",
      avatar: "/api/placeholder/300/300",
      expertise: ["Applied Cryptography", "Research", "Protocol Design"],
    },
    {
      name: "Other person",
      role: "Barista",
      bio: "Previously led engineering teams at top fintech companies. Expert in building secure, scalable financial infrastructure.",
      avatar: "/api/placeholder/300/300",
      expertise: ["Tea", "Coffee", "Rose Hip"],
    },
  ];

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
            Meet Our{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Visionary experts united by a shared passion for privacy technology
            and the future of decentralized systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-brand-light/50 transition-all duration-500 hover:scale-105 p-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-brand rounded-full p-1">
                      <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-light font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-3">
                      <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                        <Linkedin size={18} />
                      </button>
                      <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                        <Twitter size={18} />
                      </button>
                      <button className="p-2 text-white/60 hover:text-brand-light transition-colors duration-300">
                        <Github size={18} />
                      </button>
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
            { label: "Team Members", value: "10+" },
            { label: "Countries", value: "5" },
            { label: "Research Papers", value: "50+" },
            { label: "Years Combined Experience", value: "200+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
              <div className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
