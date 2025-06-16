import { Mail } from "lucide-react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "FOOTER.COMPANY": [
      { text: t("NAV.ABOUT"), href: "/#about" },
      { text: t("NAV.PROJECTS"), href: "/#team" },
    ],
    "FOOTER.PROJECTS": [
      { text: t("PROJECTS.E_RECRUITMENT"), href: "#project1" },
      { text: t("PROJECTS.HIRA_INSTITUTE"), href: "#project2" },
      { text: t("PROJECTS.E_EXHIBITION"), href: "#project3" },
      { text: t("PROJECTS.ONLINE_MARKETPLACE"), href: "#project4" },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
              ZK-DEV
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              {t("FOOTER.ABOUT")}
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white/60 hover:text-white hover:border-brand-light/50 transition-all duration-300">
                <LocalPhoneIcon
                  onClick={() => {
                    window.open("tel:905387400861");
                  }}
                  size={20}
                />
              </button>
              <button className="p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white/60 hover:text-white hover:border-brand-light/50 transition-all duration-300">
                <Mail
                  onClick={() => {
                    window.open("mailto:info@zk-dev.com");
                  }}
                  size={20}
                />
              </button>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{t(category)}</h3>
              <ul className="space-y-3">
                {links.map((linkItem) => (
                  <li key={linkItem.text}>
                    <a
                      href={linkItem.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                      {linkItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        {/* <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/60">
                We hate spammers too, don't worry, we're not going to spam your
                inbox :)
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-brand text-white rounded-xl hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} ZK-DEV. {t("FOOTER.RIGHTS")}
          </div>
          <div className="flex gap-6 text-sm">
            {/*   <button className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-white/60 hover:text-white transition-colors duration-300">
              Terms of Service
            </button>
            <button className="text-white/60 hover:text-white transition-colors duration-300">
              Cookie Policy
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
