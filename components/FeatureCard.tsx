interface FeatureCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export const FeatureCard = ({ title, description, children }: FeatureCardProps) => {
  return (
    <div className="group rounded-xl p-8 border border-[#2a2a2a] flex flex-col min-h-[500px] hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-8 flex-grow" dangerouslySetInnerHTML={{ __html: description }} />
      
      {/* Abstract visual element */}
      <div className="flex-grow flex items-center justify-center mb-8">
        <div className="relative w-full h-48">
          {children}
        </div>
      </div>
    </div>
  )
}
