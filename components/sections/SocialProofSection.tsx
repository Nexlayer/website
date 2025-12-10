"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Moved my AI project from Render to Nexlayer. 95% cost savings, instant deploys. Game-changing.",
    author: "Leah T.",
    role: "ex-Stripe Engineer, built BlinkAI",
    avatar: "/images/leah-avatar.png",
  },
  {
    quote:
      "I deployed my Lovable MVP with supabase with one prompt to Nexlayer.",
    author: "Amish M.",
    role: "Founder @ StellarStack",
    avatar: "/images/amish-avatar.png",
  },
  {
    quote:
      "Nexlayer is building The Cloud Agents Trust. This is exactly the kind of platform shift we saw when AWS first launched — but reimagined for the AI agent era.",
    author: "Frank H.",
    role: "ex-Google X, Tech Lead",
    avatar: "/images/frank-avatar.png",
  },
  {
    quote:
      "Claude vibe-coded me a fullstack task manager app and deployed it instantly. Nexlayer just works.",
    author: "Andy P.",
    role: "ex-EVP of Product at HubSpot",
    avatar: "/images/andy-avatar.png",
  },
  {
    quote:
      "Super nice and seamless. I spun it up in just a few minutes — fullstack, database, and API live. Way easier than Vercel.",
    author: "Eli V.",
    role: "Founder of VenTech Digital",
    avatar: "/images/eli-avatar.png",
  },
  {
    quote:
      "I built our MVP in Lovable, but trying to make it real, so we could scale for our users felt impossible. Nexlayer made it super easy.",
    author: "Leila D.",
    role: "Founder of PreserveMyStory",
    avatar: "/images/leila-avatar.png",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center"
        >
          Founders are shipping faster
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-black rounded-2xl p-8 border border-gray-800"
            >
              {/* Quote marks - reuse existing style */}
              <div className="text-4xl text-cyan-400 mb-6 font-serif">"</div>

              {/* Testimonial text */}
              <p className="text-white text-lg mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Attribution - reuse existing style */}
              <div className="text-gray-400 text-sm flex items-center gap-3">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
