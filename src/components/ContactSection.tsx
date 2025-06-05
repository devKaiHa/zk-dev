import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@zk-dev.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+90 (538) 740 08 61",
      description: "Available 7/24",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Aleppo, Syria",
      description: "Come say hello at our office",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Start a conversation",
      description: "Available 24/7 for support",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-brand-dark/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to revolutionize your privacy infrastructure? Let's discuss
            how ZK-dev can transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Whether you're interested in our cutting-edge solutions, want to
                join our team, or have questions about zero-knowledge
                technology, we'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-brand-light/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    <p className="text-brand-light font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="p-8 bg-gradient-ethereal rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white mb-4">
                Join Our Community
              </h4>
              <p className="text-white/70 mb-6">
                Stay updated with the latest developments in zero-knowledge
                technology and connect with like-minded innovators.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gradient-brand text-white rounded-full hover:scale-105 transition-transform duration-300">
                  Join Discord
                </button>
                <button
                  onClick={() => window.open("https://x.com/zk-dev", "_blank")}
                  className="px-6 py-3 border border-brand-light/50 text-brand-light rounded-full hover:bg-brand-light/10 transition-all duration-300">
                  Follow X
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your project or inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
                <span>Send Message</span>
                <Send
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
