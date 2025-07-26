import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Lawn Care Tips for a Perfect Spring Green-Up',
      excerpt: 'Discover the secrets to getting your lawn ready for spring with our comprehensive guide to early season lawn care practices.',
      content: 'Spring is the perfect time to set your lawn up for success throughout the growing season...',
      author: 'Mike Rodriguez',
      date: 'March 15, 2025',
      category: 'Lawn Care',
      image: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Winter Snow Removal: Protecting Your Property and Preventing Damage',
      excerpt: 'Learn professional snow removal techniques that protect your landscaping while keeping your property safe and accessible.',
      content: 'Proper snow removal is about more than just clearing paths - it\'s about protecting your investment...',
      author: 'Sarah Johnson',
      date: 'February 28, 2025',
      category: 'Snow Removal',
      image: 'https://images.pexels.com/photos/789541/pexels-photo-789541.jpeg',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'The Complete Guide to Fall Lawn Preparation',
      excerpt: 'Prepare your lawn for winter success with these essential fall maintenance tasks that ensure a healthy spring recovery.',
      content: 'Fall preparation is crucial for a healthy lawn that bounces back strong in spring...',
      author: 'David Chen',
      date: 'October 12, 2024',
      category: 'Seasonal Care',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Eco-Friendly Landscaping: Beautiful Yards That Help the Environment',
      excerpt: 'Create stunning landscapes while supporting local ecosystems with these sustainable landscaping practices and native plant choices.',
      content: 'Sustainable landscaping practices benefit both your property and the environment...',
      author: 'Mike Rodriguez',
      date: 'September 8, 2024',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Summer Lawn Stress: How to Keep Your Grass Green During Heat Waves',
      excerpt: 'Beat the summer heat with proven strategies for maintaining a lush, green lawn even during the hottest months of the year.',
      content: 'Summer heat can stress your lawn, but with the right care strategies...',
      author: 'Sarah Johnson',
      date: 'July 20, 2024',
      category: 'Lawn Care',
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Commercial Property Maintenance: First Impressions Matter',
      excerpt: 'Learn how professional property maintenance can boost your business image and create lasting positive impressions with customers.',
      content: 'Your property\'s appearance speaks volumes about your business before customers even walk through the door...',
      author: 'David Chen',
      date: 'June 5, 2024',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Lawn Care', 'Snow Removal', 'Landscaping', 'Seasonal Care', 'Commercial'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Property Care
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Expert Tips</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover professional insights, seasonal tips, and expert advice to keep your property 
            looking its absolute best throughout the year.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Property Care Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get expert tips, seasonal advice, and exclusive offers delivered to your inbox. 
            Join hundreds of property owners who trust our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 flex-1 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Put These Tips into Action?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let our professional team handle the hard work while you enjoy a beautiful, 
            well-maintained property. Get your personalized service plan today.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Custom Plan
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;