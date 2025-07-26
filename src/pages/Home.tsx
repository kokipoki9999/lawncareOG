import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Professional mowing, trimming, and maintenance to keep your lawn pristine year-round.',
      image: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg',
      features: ['Weekly/Bi-weekly Mowing', 'Edge Trimming', 'Leaf Removal', 'Fertilization']
    },
    {
      title: 'Snow Removal',
      description: 'Reliable snow and ice removal services to keep your property safe and accessible.',
      image: '/garage-driveaway-covered-in-snow.jpg',
      features: ['24/7 Emergency Service', 'Driveway Clearing', 'Walkway Salting', 'Commercial Plowing']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'GreenPro has transformed our yard completely. Their attention to detail is outstanding!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Business Owner',
      content: 'Reliable snow removal service that keeps our business running smoothly all winter long.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Property Manager',
      content: 'Professional, punctual, and affordable. Couldn\'t ask for better lawn care service.',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Property's
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Best Friend</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional lawn care and snow removal services that keep your property beautiful and safe year-round. 
                Trusted by over 500+ satisfied customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Call Now
                </a>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">500+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-green-600" />
                  <span className="text-gray-600">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg"
                alt="Beautiful maintained lawn"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Property Care Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine lawns in summer to clear driveways in winter, we've got your property covered year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Choose GreenPro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just maintain properties – we transform them into spaces you'll love coming home to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Always On Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable service you can count on. We show up when we say we will, every single time.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">15+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of experience caring for properties just like yours. We know what works.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">500+ Happy Customers</h3>
              <p className="text-gray-600 leading-relaxed">
                Join hundreds of satisfied customers who trust us with their most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it – hear from real customers about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of satisfied customers and experience the GreenPro difference. 
            Get your free quote today and see why we're the #1 choice for property care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;