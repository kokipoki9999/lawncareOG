import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Excellence',
      description: 'We take genuine pride in every lawn we maintain and every driveway we clear.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability You Can Trust',
      description: 'Rain or shine, we deliver consistent, dependable service you can count on.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer-First Approach',
      description: 'Your satisfaction isn\'t just our goal – it\'s our commitment to you.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Standards',
      description: 'Licensed, insured, and equipped with the best tools for exceptional results.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Caring for Properties,
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Building Relationships</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 15 years, GreenPro has been the trusted partner for homeowners and businesses 
                who demand excellence in property care. We're not just a service provider – we're your 
                neighbors, committed to making our community more beautiful.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
                alt="Professional lawn care team"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                GreenPro began in 2009 with a simple mission: to provide property care services that 
                exceed expectations. What started as a small family business has grown into the area's 
                most trusted name in lawn care and snow removal.
              </p>
              <p className="mb-6">
                Our founder, Mike Rodriguez, started the company after years of working for larger 
                landscaping firms. He saw an opportunity to provide more personalized, reliable service 
                while building genuine relationships with customers. That vision remains at the heart 
                of everything we do today.
              </p>
              <p>
                Today, our team of trained professionals serves over 500 residential and commercial 
                properties throughout the region. We've invested in the best equipment, ongoing training, 
                and eco-friendly practices to ensure we're always delivering the highest quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your property's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                  alt="Mike Rodriguez"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                With over 20 years in the industry, Mike leads our team with passion and expertise.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                  alt="Sarah Johnson"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Operations Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Sarah ensures every project runs smoothly and exceeds customer expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="David Chen"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Chen</h3>
              <p className="text-blue-600 font-medium mb-4">Lead Technician</p>
              <p className="text-gray-600 leading-relaxed">
                David's attention to detail and technical expertise ensures quality in every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the GreenPro Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our family of satisfied customers and discover why we're the trusted choice 
            for property care in our community.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;