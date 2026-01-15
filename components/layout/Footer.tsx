import { X, Linkedin, Github } from "../icons";
import { NexlayerLogo } from "../NexlayerLogo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-sm:flex-col justify-between gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="mb-6">
                <NexlayerLogo className="h-8 w-auto" />
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <a
                href="https://x.com/nexlayerai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/nexlayerai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="max-sm:flex justify-between max-sm:mt-4 grid gap-4 md:gap-12 col-span-2 lg:col-span-3 grid-cols-3">
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="http://nexlayer.com/blog"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Hire a partner
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="https://docs.nexlayer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.nexlayer.com/api-reference"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="https://join.slack.com/t/nexlayercommunity/shared_invite/zt-3ns0038s0-16GWdSAD1aPdyxDzmbGaiw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="https://app.nexlayer.io/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.nexlayer.io/legal/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <p className="text-cyan-400 text-xs sm:text-sm text-center mb-6">
            Selected by Google AI Startup Program · Recognized by NVIDIA Inception
          </p>
          <p className="text-gray-400 text-sm text-center mb-8">
            © 2025 Nexlayer. All rights reserved. Nexlayer – The Cloud Agents
            Trust™ are trademarks of Nexlayer Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
