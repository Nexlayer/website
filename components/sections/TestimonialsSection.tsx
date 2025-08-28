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

        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to start shipping?</h2>
          <p className="text-xl text-gray-400 mb-8">Start for free today — no credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jnsbqhb7fyt.typeform.com/to/a9DtuhOo?utm_source=website&utm_medium=hero_cta&utm_campaign=mcp_onboarding_q3_2025&utm_term=intent_ship_now&utm_content=home_v1&typeform-source=preview-fork-of-nexlayer-website-32-c6lbguqz3vzumzqeu.vusercontent.net"
              className="inline-flex items-center px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black rounded-lg font-semibold transition-colors"
            >
              Start shipping
            </a>
            <a
              href="https://cal.com/nexlayer/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 hover:bg-transparent hover:border-cyan-400 hover:border-2 hover:text-cyan-400 rounded-lg font-semibold transition-all duration-300 bg-white text-black"
            >
              Talk with an engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
