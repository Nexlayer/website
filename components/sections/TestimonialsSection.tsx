"use client"

import { useState } from "react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

const Testimonial = ({ quote, author, role, company, avatar }: TestimonialProps) => (
  <div className="bg-gray-800/20 border border-gray-700 rounded-2xl p-8">
    <div className="mb-6">
      <svg className="w-8 h-8 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-300 text-lg leading-relaxed">{quote}</p>
    </div>
    <div className="flex items-center">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="text-white font-semibold">{author}</h4>
        <p className="text-gray-400 text-sm">{role} at {company}</p>
      </div>
    </div>
  </div>
)

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Nexlayer transformed our deployment process. What used to take days now takes minutes. The AI agents handle everything automatically.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow",
      avatar: "/public/images/amish-avatar.png"
    },
    {
      quote: "The global edge network is incredible. Our users worldwide experience lightning-fast performance without any configuration.",
      author: "Marcus Rodriguez",
      role: "Lead Engineer",
      company: "GlobalScale",
      avatar: "/public/images/frank-avatar.png"
    },
    {
      quote: "Zero configuration deployment is a game-changer. Our team can focus on building features instead of managing infrastructure.",
      author: "Emily Watson",
      role: "VP of Engineering",
      company: "InnovateCorp",
      avatar: "/public/images/leah-avatar.png"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what developers are saying about their experience with Nexlayer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
