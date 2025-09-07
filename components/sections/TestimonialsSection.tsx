export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Moved my AI project from Render to Nexlayer. 95% cost savings, instant deploys. Game-changing.",
      author: "Leah T.",
      role: "ex-Stripe, AWS Engineer, Founder @ BlinkAI",
      avatar: "/images/leah-avatar.png",
    },
    {
      quote: "I deployed my Lovable MVP with supabase with one prompt to Nexlayer. 🤯",
      author: "Amish M.",
      role: "Founder & CTO @ StellarStack",
      avatar: "/images/amish-avatar.png",
    },
    {
      quote:
        "Nexlayer is building The Cloud Agents Trust.™ This is exactly the kind of platform shift we saw when AWS first launched — but reimagined for the agent era.",
      author: "Frank H.",
      role: "ex-Google X, Tech Lead",
      avatar: "/images/frank-avatar.png",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black rounded-2xl p-8 border border-gray-800">
              {/* Quote marks */}
              <div className="text-4xl text-cyan-400 mb-6 font-serif">"</div>

              {/* Testimonial text */}
              <p className="text-white text-lg mb-6 leading-relaxed">{testimonial.quote}</p>

              {/* Attribution */}
              <div className="text-gray-400 text-sm flex items-center gap-3">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
