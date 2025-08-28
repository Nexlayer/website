import { Button } from "./ui/button"
import { X, Linkedin, Github } from "./icons"
import { NexlayerLogo } from "./NexlayerLogo"

export const Navigation = () => {
  return (
    <nav className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <NexlayerLogo className="h-7 w-auto" />
            <span className="bg-teal-900/50 text-cyan-400 text-xs font-medium px-2 py-1 rounded border border-cyan-400/30">
              Beta
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Button variant="ghost" className="text-gray-300 hover:text-white text-sm font-medium">
              Sign in
            </Button>
            <Button className="bg-white text-black hover:bg-transparent hover:border-cyan-400 hover:border-2 hover:text-cyan-400 text-sm px-4 py-2 font-medium rounded-lg transition-all duration-300">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
