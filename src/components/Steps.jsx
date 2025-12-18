import React from 'react'

const SparkleIcon = () => (
  <svg
    className="w-5 h-5 text-accent sparkle inline-block"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const StepCard = ({ stepNumber, title, description, imagePath, imageAlt }) => (
  <div className="bg-navy border border-accent/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
    {/* Image */}
    <div className="rounded-t-3xl overflow-hidden">
      <img
        src={imagePath}
        alt={imageAlt}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <div
        className="hidden w-full h-64 bg-gradient-to-br from-accent/20 to-navy items-center justify-center"
        style={{ display: 'none' }}
      >
        <span className="text-accent text-xl">{imageAlt}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-navy font-bold text-lg">
          {stepNumber}
        </div>
        <div className="flex items-center space-x-1">
          <SparkleIcon />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
)

const Steps = () => {
  const steps = [
    {
      stepNumber: '1',
      title: 'Send Us a Message',
      description: 'Reach out to us via WhatsApp with your cleaning requirements. Tell us about your space and what you need.',
      imagePath: '/images/how-to-book/sendmessage.jpg',
      imageAlt: 'Send Message',
    },
    {
      stepNumber: '2',
      title: 'Request a Quote',
      description: 'We\'ll provide you with a transparent, detailed quote based on your specific needs and property size.',
      imagePath: '/images/how-to-book/quote.jpg',
      imageAlt: 'Get Quote',
    },
    {
      stepNumber: '3',
      title: 'Pay Your Deposit',
      description: 'Secure your booking with a simple deposit payment. We make it easy and secure.',
      imagePath: '/images/how-to-book/pay.jpg',
      imageAlt: 'Pay Deposit',
    },
    {
      stepNumber: '4',
      title: 'Confirm Appointment',
      description: 'Once confirmed, we\'ll arrive at your scheduled time, ready to deliver exceptional cleaning results.',
      imagePath: '/images/how-to-book/confirm.jpg',
      imageAlt: 'Confirm Booking',
    },
  ]

  return (
    <section id="how-to-book" className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Book
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple steps to get your space sparkling clean
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              imagePath={step.imagePath}
              imageAlt={step.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps

