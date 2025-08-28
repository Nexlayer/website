import { X, Linkedin, Github } from "./icons"
import { NexlayerLogo } from "./NexlayerLogo"

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side - Logo and Social Links */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <NexlayerLogo className="h-8 w-auto" />
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Examples</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Status</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Report Abuse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <p className="text-gray-400 text-sm text-center">© 2024 Nexlayer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
