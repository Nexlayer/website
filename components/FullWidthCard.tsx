interface FullWidthCardProps {
  title: string
  description: string
  subtitle: string
  children: React.ReactNode
}

export const FullWidthCard = ({ title, description, subtitle, children }: FullWidthCardProps) => {
  return (
    <div className="group rounded-xl p-8 border border-[#2a2a2a] flex flex-col min-h-[400px] hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: description }} />
      <p className="text-sm text-gray-500 mb-8" dangerouslySetInnerHTML={{ __html: subtitle }} />

      {/* Visual element */}
      <div className="flex-grow flex items-center justify-center mb-8">
        <div className="relative w-full h-32">
          {children}
        </div>
      </div>
    </div>
  )
}
