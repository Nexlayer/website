import { Clock, Wrench, AlertTriangle, Server, Database, Shield, Globe, Settings, FileText } from "lucide-react"

export const ComparisonSection = () => {
  return (
    <div className="min-h-screen bg-[#191919] p-6 bg-[rgba(10,10,10,1)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16"></div>

        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2 z-0"></div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-gray-900">VS</span>
          </div>

          {/* Left Side - Without Nexlayer (Chaotic) */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Without Nexlayer</h2>
            <div className="relative h-[600px] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 600">
                <defs>
                  <pattern id="dashPattern" patternUnits="userSpaceOnUse" width="8" height="8">
                    <path d="M0,4 L8,4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                  </pattern>
                </defs>

                {/* Chaotic connecting lines */}
                <path
                  d="M50,20 Q150,40 200,60 T350,80"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
                <path
                  d="M80,40 Q120,80 160,60 Q200,40 240,80"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <path
                  d="M300,50 Q250,100 200,120 Q150,140 100,180"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                />
                <path
                  d="M40,160 Q100,120 160,140 Q220,160 280,120"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                />
                <path
                  d="M320,100 Q280,160 240,180 Q200,200 160,240"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="12,4"
                />
                <path
                  d="M60,200 Q120,180 180,200 Q240,220 300,200"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6,8"
                />
                <path
                  d="M350,160 Q300,200 250,240 Q200,280 150,320"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,6"
                />
                <path
                  d="M80,280 Q140,260 200,280 Q260,300 320,280"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="10,10"
                />
                <path
                  d="M30,240 Q90,300 150,280 Q210,260 270,300"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
                <path
                  d="M180,320 Q220,280 260,300 Q300,320 340,300"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <path
                  d="M120,320 Q160,300 200,320 Q240,340 280,320"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="12,8"
                />
                <path
                  d="M40,300 Q80,340 120,360 Q160,380 200,360"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                />
              </svg>

              <div className="absolute top-4 left-8 bg-red-500/20 border border-red-500/40 rounded-lg p-3 transform rotate-12">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-red-400" />
                  <span className="text-sm text-red-300">Hire DevOps Engineers</span>
                </div>
              </div>

              <div className="absolute top-8 right-12 bg-orange-500/20 border border-orange-500/40 rounded-lg p-3 transform -rotate-6">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-orange-400" />
                  <span className="text-sm text-orange-300">Learn Docker</span>
                </div>
              </div>

              <div className="absolute top-20 left-32 bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-3 transform rotate-45">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-yellow-300">Learn Kubernetes</span>
                </div>
              </div>

              <div className="absolute top-24 right-32 bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 transform -rotate-12">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span className="text-sm text-purple-300">Write Dockerfiles</span>
                </div>
              </div>

              <div className="absolute top-40 left-4 bg-pink-500/20 border border-pink-500/40 rounded-lg p-3 transform rotate-12">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-pink-400" />
                  <span className="text-sm text-pink-300">Container Registry</span>
                </div>
              </div>

              <div className="absolute top-12 right-48 bg-indigo-500/20 border border-indigo-500/40 rounded-lg p-3 transform -rotate-45">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-indigo-400" />
                  <span className="text-sm text-indigo-300">Kubernetes YAMLs</span>
                </div>
              </div>

              <div className="absolute top-36 left-48 bg-red-500/20 border border-red-500/40 rounded-lg p-3 transform rotate-6">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-red-400" />
                  <span className="text-sm text-red-300">Cloud Setup</span>
                </div>
              </div>

              <div className="absolute top-52 left-16 bg-orange-500/20 border border-orange-500/40 rounded-lg p-3 transform -rotate-12">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span className="text-sm text-orange-300">Networking/DNS</span>
                </div>
              </div>

              <div className="absolute top-16 left-60 bg-green-500/20 border border-green-500/40 rounded-lg p-3 transform rotate-24">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-green-300">ConfigMaps</span>
                </div>
              </div>

              <div className="absolute top-56 right-8 bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 transform -rotate-24">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-blue-300">Secrets Mgmt</span>
                </div>
              </div>

              <div className="absolute top-68 left-8 bg-cyan-500/20 border border-cyan-500/40 rounded-lg p-3 transform rotate-18">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-cyan-300">Storage Volumes</span>
                </div>
              </div>

              <div className="absolute top-72 left-40 bg-violet-500/20 border border-violet-500/40 rounded-lg p-3 transform -rotate-18">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-violet-400" />
                  <span className="text-sm text-violet-300">TLS/Certificates</span>
                </div>
              </div>

              <div className="absolute top-28 right-4 bg-rose-500/20 border border-rose-500/40 rounded-lg p-3 transform rotate-36">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-400" />
                  <span className="text-sm text-rose-300">Monitoring</span>
                </div>
              </div>

              <div className="absolute top-76 right-24 bg-amber-500/20 border border-amber-500/40 rounded-lg p-3 transform -rotate-36">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-amber-400" />
                  <span className="text-sm text-amber-300">Auto-Scaling</span>
                </div>
              </div>

              <div className="absolute top-80 left-56 bg-teal-500/20 border border-teal-500/40 rounded-lg p-3 transform rotate-8">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-teal-400" />
                  <span className="text-sm text-teal-300">Debugging</span>
                </div>
              </div>

              {/* Warning triangles scattered */}
              <AlertTriangle className="absolute top-8 right-4 h-6 w-6 text-yellow-400 animate-pulse" />
              <AlertTriangle className="absolute top-44 left-2 h-6 w-6 text-red-400 animate-pulse" />
              <AlertTriangle className="absolute top-32 right-24 h-6 w-6 text-orange-400 animate-pulse" />
              <AlertTriangle className="absolute top-60 left-12 h-6 w-6 text-yellow-400 animate-pulse" />
              <AlertTriangle className="absolute top-48 left-44 h-6 w-6 text-red-400 animate-pulse" />
              <AlertTriangle className="absolute top-64 right-16 h-6 w-6 text-orange-400 animate-pulse" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg text-red-300">🚀 Without Nexlayer: months of complex infrastructure hell...</div>
            </div>
          </div>

          {/* Right Side - With Nexlayer (Clean Stack) */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">With Nexlayer</h2>
            <div className="space-y-4">
              {/* One Prompt → Deploy */}
              <div className="bg-[#28B8CD] border border-[#28B8CD] rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-[#28B8CD]/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full animate-pulse bg-lime-400 text-white"></div>
                  <span className="text-black font-bold">One Prompt → Deploy</span>
                </div>
              </div>

              {/* Auto-containerized */}

              {/* Nexlayer YAML */}

              {/* Scaling Handled */}
              <div className="bg-[#28B8CD] border border-[#28B8CD] rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-[#28B8CD]/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full animate-pulse bg-lime-400"></div>
                  <span className="font-bold text-black">Auto-scale</span>
                </div>
              </div>

              {/* Live App URL */}
              <div className="bg-[#28B8CD] border border-[#28B8CD] rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-[#28B8CD]/20 transition-all duration-300 ring-2 ring-[#28B8CD]/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full animate-pulse bg-lime-400"></div>
                  <span className="font-bold text-black">Live App URL</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg text-green-300">⚡ With Nexlayer: live in minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
