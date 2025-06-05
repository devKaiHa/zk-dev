import {
  Code,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Lock,
  Rocket,
} from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "Privacy-First Architecture",
      description:
        "Revolutionary zero-knowledge protocols that ensure complete transaction privacy while maintaining full verifiability.",
      details:
        "Advanced cryptographic primitives including zk-SNARKs and STARKs for bulletproof privacy.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Quantum-Speed Processing",
      description:
        "Optimized algorithms delivering sub-millisecond proof generation with unprecedented throughput.",
      details:
        "Custom ASIC designs and parallel processing for maximum performance.",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: Code,
      title: "Developer Ecosystem",
      description:
        "Comprehensive SDK with intuitive APIs, extensive documentation, and powerful debugging tools.",
      details:
        "Multi-language support with TypeScript, Rust, Go, and Python bindings.",
      color: "from-blue-400 to-purple-600",
    },
    {
      icon: Globe,
      title: "Planetary Scale Infrastructure",
      description:
        "Distributed network architecture capable of handling billions of concurrent users globally.",
      details: "Edge computing integration with 99.99% uptime guarantee.",
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: Cpu,
      title: "Neural Network Integration",
      description:
        "AI-powered optimization for automatic circuit design and proof optimization.",
      details:
        "Machine learning algorithms that adapt and improve system performance.",
      color: "from-indigo-400 to-cyan-600",
    },
    {
      icon: Database,
      title: "Interchain Compatibility",
      description:
        "Seamless integration across all major blockchain networks and legacy systems.",
      details: "Universal bridge protocols supporting 50+ blockchain networks.",
      color: "from-teal-400 to-green-600",
    },
    {
      icon: Lock,
      title: "Military-Grade Security",
      description:
        "Post-quantum cryptographic standards with formal verification of all critical components.",
      details:
        "Audited by leading security firms with zero vulnerabilities found.",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: Rocket,
      title: "Future-Ready Innovation",
      description:
        "Continuous research and development pushing the boundaries of what's possible.",
      details:
        "Partnerships with top universities and research institutions worldwide.",
      color: "from-orange-400 to-red-600",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/20 via-transparent to-brand-light/20"></div>

        {/* Animated neural network lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000">
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#64d0ec" stopOpacity="0" />
              <stop offset="50%" stopColor="#64d0ec" stopOpacity="1" />
              <stop offset="100%" stopColor="#11619c" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Floating data nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-light rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-brand text-white text-sm font-bold rounded-full uppercase tracking-wider animate-glow">
              About ZK-dev
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              REDEFINING
            </span>
            <br />
            <span className="text-white">POSSIBILITY</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We're not just building technology—we're architecting the future of
            digital privacy. Our revolutionary zero-knowledge infrastructure is
            the foundation for a new era of decentralized applications that
            prioritize user sovereignty and data protection.
          </p>
        </div>

        {/* Interactive feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                hoveredCard === index ? "z-20" : "z-10"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveFeature(index)}>
              {/* Card */}
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-brand-light/50 transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Holographic scan line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow group-hover:scale-110 transition-all duration-500`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-light transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-4">
                    {feature.description}
                  </p>

                  {/* Expandable details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeFeature === index
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-brand-light text-xs font-semibold">
                      {feature.details}
                    </p>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-brand-light animate-pulse"
                          : "bg-white/20 group-hover:bg-brand-light/50"
                      }`}></div>
                  </div>
                </div>
              </div>

              {/* Particle effects on hover */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-brand-light rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Vision statement with interactive elements */}
        <div className="relative">
          <div className="max-w-5xl mx-auto p-12 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(100, 208, 236, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(17, 97, 156, 0.3) 0%, transparent 50%)`,
                }}></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-black text-white mb-8">
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  OUR VISION
                </span>
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                ZK-dev's vision is simple: to shape the future of the web by
                consistently delivering groundbreaking and highly functional
                digital platforms. We strive to be at the forefront of
                technological advancements, turning complex ideas into
                accessible and impactful realities for our clients and the wider
                digital community.
              </p>

              {/* Interactive stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "∞", label: "Privacy Guarantee" },
                  { value: "<1ms", label: "Proof Generation" },
                  { value: "20+", label: "Projects completed" },
                  { value: "99.99%", label: "System Uptime" },
                ].map((stat, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="text-3xl font-black bg-gradient-brand bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
