import { socialMedia } from "../constants";

import { footerLinks } from "../constants";

import { footerLogo } from "../nike_landing_assets/assets/images";

import { copyrightSign } from "../nike_landing_assets/assets/icons";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl gap-12 md:gap-20">
        <div>
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Logo" />
          </a>

          <p className="mt-4 max-w-sm text-gray-400">
            Get ready for the new term. Find your perfect fit in store or
            online. Get free delivery & returns.
          </p>

          <div className="mt-6 flex gap-6">
            {socialMedia.map((icon) => (
              <div
                key={icon.name}
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white"
              >
                <img src={icon.src} alt={icon.name} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4 md:mt-0">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-white mb-6">{section.title}</h4>

              <ul className="text-gray-400">
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 hover:text-gray-300">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center text-gray-400">
        <div className="flex items-center gap-2">
          <img
            src={copyrightSign}
            alt="hii i m bug"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
