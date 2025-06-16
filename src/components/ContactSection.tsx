import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
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
      title: "CONTACT.EMAIL_US",
      content: "info@zk-dev.com",
      description: "CONTACT.EMAIL_US_CONTENT",
      link: "mailto:info@zk-dev.com",
    },
    {
      icon: Phone,
      title: "CONTACT.CALL_US",
      content: "+963 959 482 327",
      content2: "+90 (538) 740 08 61",
      description: "CONTACT.CALL_US_CONTENT",
      link: "tel:963959482327",
      link2: "tel:905387400861",
    },
    {
      icon: MapPin,
      title: "CONTACT.VISIT_US",
      content: "Aleppo, Syria",
      description: "CONTACT.VISIT_US_CONTENT",
      link: "https://maps.app.goo.gl/NPVrPg7EPMyQxm447",
    },
    {
      icon: WhatsAppIcon,
      title: "CONTACT.LIVE_CHAT",
      content: t("CONTACT.START_CONVERSATION"),
      content2: t("CONTACT.START_CONVERSATION"),
      description: "CONTACT.LIVE_CHAT_CONTENT",
      link: "https://wa.me/963959482327",
      link2: "https://wa.me/905387400861",
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
            {t("CONTACT.GET_IN")}{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {t("CONTACT.TOUCH")}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("CONTACT.CONTACT_CONTENT")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                {t("CONTACT.LETS_CONNECT")}
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                {t("CONTACT.LETS_CONNECT_CONTENT")}
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
                      {t(info.title)}
                    </h4>
                    <p className="text-brand-light font-medium mb-1 cursor-pointer">
                      <span
                        onClick={() => {
                          if (info?.link) {
                            window.open(info.link, "_blank");
                          }
                        }}>
                        {info.content}
                      </span>
                      {info?.content2 && (
                        <>
                          <br />
                          <span
                            onClick={() => {
                              window.open(info?.link2, "_blank");
                            }}>
                            {info?.content2}
                          </span>
                        </>
                      )}
                    </p>
                    <p className="text-white/60 text-sm">
                      {t(info.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            {/*<div className="p-8 bg-gradient-ethereal rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white mb-4">
                Join Our Community
              </h4>
              <p className="text-white/70 mb-6">
                Stay updated with the latest developments in zero-knowledge
                technology and connect with like-minded innovators.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open("https://x.com/zk-dev", "_blank")}
                  className="px-6 py-3 bg-gradient-brand text-white rounded-full hover:scale-105 transition-transform duration-300">
                  Follow X
                </button>
                 <button
                  onClick={() => window.open("https://x.com/zk-dev", "_blank")}
                  className="px-6 py-3 border border-brand-light/50 text-brand-light rounded-full hover:bg-brand-light/10 transition-all duration-300">
                  Join Community
                </button> 
              </div>
            </div>*/}
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
                    {t("CONTACT.NAME")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-2">
                    {t("CONTACT.EMAIL")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white/80 text-sm font-medium mb-2">
                  {t("CONTACT.SUBJECT")}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm font-medium mb-2">
                  {t("CONTACT.MESSAGE")}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
                <span>{t("CONTACT.SEND")}</span>
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
