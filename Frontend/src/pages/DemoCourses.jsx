import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DemoCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const demoCourses = [
    {
      id: 1,
      title: "Basic Greetings",
      category: "beginner",
      description: "Learn essential Nepali greetings and introductions. Perfect for beginners starting their language journey.",
      duration: "15 min",
      lessons: 3,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Namaste", "How are you?", "My name is...", "Nice to meet you"]
    },
    {
      id: 2,
      title: "Numbers 1-10",
      category: "beginner",
      description: "Master counting from 1 to 10 in Nepali with interactive exercises and pronunciation practice.",
      duration: "20 min",
      lessons: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Counting 1-10", "Number pronunciation", "Practice exercises"]
    },
    {
      id: 3,
      title: "Family Members",
      category: "intermediate",
      description: "Learn to talk about family members in Nepali. Build your vocabulary with common family terms.",
      duration: "25 min",
      lessons: 4,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Family vocabulary", "Possessive pronouns", "Family conversations"]
    },
    {
      id: 4,
      title: "Food and Dining",
      category: "intermediate",
      description: "Explore Nepali cuisine vocabulary and learn to order food in restaurants.",
      duration: "30 min",
      lessons: 5,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Food vocabulary", "Restaurant phrases", "Cultural dining tips"]
    },
    {
      id: 5,
      title: "Travel Phrases",
      category: "beginner",
      description: "Essential phrases for travelers visiting Nepal. Learn survival language skills.",
      duration: "18 min",
      lessons: 3,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Directions", "Transportation", "Emergency phrases"]
    },
    {
      id: 6,
      title: "Business Nepali",
      category: "advanced",
      description: "Professional Nepali for business settings. Learn formal language and business etiquette.",
      duration: "35 min",
      lessons: 6,
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["Formal greetings", "Business meetings", "Professional vocabulary"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? demoCourses 
    : demoCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133251] mb-4">
            Free Demo Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our free sample lessons and experience the quality of our Nepali language courses. 
            No registration required!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#133251] text-white'
                    : 'text-gray-600 hover:text-[#133251] hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[#133251]">{course.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                    course.category === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.category === 'intermediate' ? 'bg-cyan-100 text-cyan-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#133251] mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video Preview */}
                <div className="mb-4">
                  <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                    <iframe
                      src={course.videoUrl}
                      title={course.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-[#133251] text-white py-3 px-4 rounded-lg hover:bg-[#0f2a42] transition-colors duration-300 font-medium">
                    Start Free Demo
                  </button>
                  <Link
                    to="/register"
                    className="block w-full text-center text-[#133251] py-2 px-4 rounded-lg border border-[#133251] hover:bg-[#133251] hover:text-white transition-colors duration-300 font-medium"
                  >
                    Enroll in Full Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#133251] to-cyan-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for More?</h2>
            <p className="text-xl mb-6 opacity-90">
              Unlock unlimited access to all our courses and start your Nepali language journey today.
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="inline-block bg-white text-[#133251] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Full Access
              </Link>
              <Link
                to="/price"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#133251] transition-colors duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCourses; 