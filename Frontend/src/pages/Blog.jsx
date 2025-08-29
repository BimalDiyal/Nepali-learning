import { useState } from "react";
import { Search, Calendar, User, Clock,  ArrowRight, BookOpen, Globe, PenTool, MessageCircle, Star, Filter } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const categories = [
    { id: "all", name: "All Posts", icon: <BookOpen className="w-5 h-5" /> },
    { id: "culture", name: "Nepali Culture", icon: <Globe className="w-5 h-5" /> },
    { id: "grammar", name: "Grammar Tips", icon: <PenTool className="w-5 h-5" /> },
    { id: "vocabulary", name: "Vocabulary", icon: <MessageCircle className="w-5 h-5" /> },
    { id: "learning", name: "Learning Tips", icon: <Star className="w-5 h-5" /> },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Essential Nepali Greetings: Beyond Namaste",
      excerpt: "Discover the rich variety of Nepali greetings used in different contexts, from formal business meetings to casual family gatherings. Learn when and how to use each greeting appropriately.",
      content: "Nepali culture places great importance on greetings, and knowing the right way to greet someone can make a significant difference in your interactions. While 'Namaste' is the most well-known Nepali greeting, there are many other ways to say hello depending on the time of day, the person's age, and the formality of the situation...",
      author: "Priya Sharma",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "culture",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tags: ["greetings", "culture", "basics"],
      featured: true
    },
    {
      id: 2,
      title: "Mastering Nepali Verb Conjugation: A Complete Guide",
      excerpt: "Understanding Nepali verb conjugation is crucial for forming correct sentences. This comprehensive guide breaks down the patterns and rules you need to know.",
      content: "Nepali verbs change form based on tense, person, and number. Unlike English, Nepali has a rich system of verb conjugation that reflects the subject's person (first, second, third) and number (singular, plural). This guide will help you understand the basic patterns...",
      author: "Rajesh Thapa",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "grammar",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
      tags: ["grammar", "verbs", "conjugation"],
      featured: true
    },
    {
      id: 3,
      title: "50 Must-Know Nepali Words for Travelers",
      excerpt: "Planning a trip to Nepal? Learn these essential words and phrases that will help you navigate daily interactions and show respect for the local culture.",
      content: "Whether you're trekking in the Himalayas, exploring Kathmandu's ancient temples, or simply trying to order food at a local restaurant, knowing some basic Nepali words can greatly enhance your experience. This list covers essential vocabulary for travelers...",
      author: "Amit Patel",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "vocabulary",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      tags: ["travel", "vocabulary", "basics"],
      featured: false
    },
    {
      id: 4,
      title: "The Art of Nepali Tea Culture: Chiya and Beyond",
      excerpt: "Explore the rich tradition of tea drinking in Nepal, from the famous masala chiya to ceremonial tea practices that reflect the country's hospitality.",
      content: "Tea is more than just a beverage in Nepal—it's a symbol of hospitality, friendship, and tradition. The famous masala chiya (spiced tea) is just the beginning of Nepal's rich tea culture. From street-side tea stalls to elaborate tea ceremonies...",
      author: "Priya Sharma",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "culture",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=250&fit=crop",
      tags: ["culture", "tea", "traditions"],
      featured: false
    },
    {
      id: 5,
      title: "Effective Study Techniques for Learning Nepali Script",
      excerpt: "Struggling with the Devanagari script? Discover proven techniques and exercises that will help you master Nepali writing faster and more effectively.",
      content: "Learning the Devanagari script can seem daunting at first, but with the right approach, you can master it more quickly than you might think. This guide shares effective study techniques, memory aids, and practice exercises...",
      author: "Rajesh Thapa",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "learning",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["script", "writing", "study-tips"],
      featured: false
    },
    {
      id: 6,
      title: "Understanding Nepali Honorifics: Respect in Language",
      excerpt: "Learn how to show respect through language in Nepali culture. Understanding honorifics is essential for proper communication and cultural sensitivity.",
      content: "Nepali language has a sophisticated system of honorifics that reflects the hierarchical nature of Nepali society. Using the appropriate level of respect in your speech is crucial for effective communication and showing cultural awareness...",
      author: "Priya Sharma",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "grammar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      tags: ["honorifics", "respect", "culture"],
      featured: false
    },
    {
      id: 7,
      title: "Nepali Festivals: Celebrations That Bring Communities Together",
      excerpt: "Discover the major festivals of Nepal and learn the vocabulary and phrases associated with these joyous celebrations.",
      content: "Nepal is home to numerous festivals that reflect its rich cultural diversity and religious harmony. From Dashain and Tihar to Buddha Jayanti and Indra Jatra, each festival has its own unique traditions, foods, and vocabulary...",
      author: "Amit Patel",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "culture",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tags: ["festivals", "culture", "vocabulary"],
      featured: false
    },
    {
      id: 8,
      title: "Common Mistakes in Nepali Pronunciation and How to Avoid Them",
      excerpt: "Identify and correct the most common pronunciation errors that learners make when speaking Nepali.",
      content: "Pronunciation is one of the biggest challenges for Nepali learners. This guide identifies the most common mistakes and provides practical tips for improving your pronunciation. From mastering the retroflex consonants to getting the tone right...",
      author: "Rajesh Thapa",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "learning",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
      tags: ["pronunciation", "speaking", "common-mistakes"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "readTime") {
      return parseInt(a.readTime) - parseInt(b.readTime);
    }
    return 0;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "culture") {
      window.location.href = "/culture";
    } else if (categoryId === "grammar") {
      window.location.href = "/grammar";
    } else if (categoryId === "vocabulary") {
      window.location.href = "/vocabulary";
    } else if (categoryId === "learning") {
      window.location.href = "/learning";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nepali Learning Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100 mb-8">
            Discover language tips, cultural insights, and learning strategies to master Nepali faster and more effectively.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Intro Banner */}
      {selectedCategory !== "all" && (
        <div
          className="max-w-4xl mx-auto my-8 p-6 rounded-xl shadow bg-gradient-to-r from-orange-100 to-yellow-50 border-l-4 border-orange-400 flex items-center gap-4"
          id={
            selectedCategory === "culture"
              ? "category-culture"
              : selectedCategory === "grammar"
              ? "category-grammar"
              : selectedCategory === "vocabulary"
              ? "category-vocabulary"
              : selectedCategory === "learning"
              ? "category-learning"
              : undefined
          }
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-700 text-base">
              {selectedCategory === "culture" && (
                <>Explore the heart of Nepal! Learn about Nepali traditions, festivals, daily life, and cultural etiquette. Understanding culture is key to using the language naturally and respectfully in real situations.</>
              )}
              {selectedCategory === "grammar" && (
                <>Master Nepali grammar! Find tips and guides on verb conjugation, honorifics, sentence structure, and more. Solid grammar skills help you build sentences and express yourself clearly in Nepali.</>
              )}
              {selectedCategory === "vocabulary" && (
                <>Grow your Nepali vocabulary! Discover essential words, phrases, and themed lists for travel, daily life, and conversation. Expanding your vocabulary makes it easier to understand and be understood.</>
              )}
              {selectedCategory === "learning" && (
                <>Get the best learning tips! Find advice on study techniques, pronunciation, script, and motivation. These tips will help you learn Nepali faster, remember more, and enjoy the process.</>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {searchTerm ? `Search Results for "${searchTerm}"` : "All Articles"}
            </h2>
            <span className="text-gray-600">{sortedPosts.length} articles</span>
          </div>

          {sortedPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get weekly language tips, cultural insights, and learning strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 