import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/booking-steps/WHO ARE WE.zip - .PNG"
                alt="About Deep Polish"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="hidden w-full h-96 bg-gradient-to-br from-accent/20 to-navy items-center justify-center rounded-3xl"
                style={{ display: 'none' }}
              >
                <span className="text-accent text-2xl">About Image</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Who Are We?
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Deep Polish is your trusted partner for premium cleaning services across London. 
                We bring professional, thorough cleaning directly to your doorstep.
              </p>
              <p>
                Our team of experienced cleaners is dedicated to delivering exceptional results 
                that exceed your expectations. We understand that your home or property deserves 
                the best care, and that's exactly what we provide.
              </p>
              <p>
                With attention to detail and a commitment to excellence, Deep Polish transforms 
                spaces into pristine environments you can be proud of.
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-navy"></div>
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-navy"></div>
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-navy"></div>
              </div>
              <div>
                <p className="text-white font-semibold">Expert Team</p>
                <p className="text-gray-400 text-sm">Professional cleaners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

