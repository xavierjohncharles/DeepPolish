import React from 'react'

const SparkleIcon = () => (
  <svg
    className="w-6 h-6 text-accent"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const ServiceCard = ({ imagePath, imageAlt }) => {
  return (
    <div className="bg-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-accent/20">
      {/* Image */}
      <img
        src={imagePath}
        alt={imageAlt}
        className="w-full h-[320px] md:h-[450px] object-cover object-top"
      />
    </div>
  )
}

const Services = () => {
  const services = [
    {
      title: 'Deep Cleaning',
      description:
        'Comprehensive deep cleaning service that reaches every corner of your home. Perfect for spring cleaning or when you need that extra level of detail.',
      imagePath: '/images/our-services/Services4.PNG',
      imageAlt: 'Deep cleaning service',
    },
    {
      title: 'Airbnb & Holiday Let',
      description:
        'Professional cleaning service tailored for short-term rentals. Ensure your property is guest-ready with our thorough and efficient cleaning.',
      imagePath: '/images/our-services/Services1.PNG',
      imageAlt: 'Airbnb and holiday let cleaning',
    },
    {
      title: 'Move in / Move out',
      description:
        "Complete cleaning service for when you're moving. We ensure your old or new home is spotless, making your transition smooth and stress-free.",
      imagePath: '/images/our-services/Services2.PNG',
      imageAlt: 'Move in and move out cleaning',
    },
    {
      title: 'Home Maintenance',
      description:
        'Regular maintenance cleaning to keep your home in perfect condition. Customizable schedules to fit your lifestyle and needs.',
      imagePath: '/images/our-services/Services3.PNG',
      imageAlt: 'Home maintenance cleaning',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-navy to-navy/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imagePath={service.imagePath}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

