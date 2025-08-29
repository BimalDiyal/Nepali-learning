import {
  BookOpen,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  CheckCircle,
  Play,
  PenTool,
  Brain,
  MessageCircle,
  Clock,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";

import Bimal from "../assets/Bimal.png";
import Himal from "../assets/Himal.JPG";
import Tupesh from "../assets/Tupesh.JPG";
import Nabin from "../assets/Nabin.JPG";

export default function About() {
  const stats = [
    { number: "10K+", label: "Active Learners", icon: <Users className="w-8 h-8 text-orange-500" /> },
    { number: "500+", label: "Lessons Created", icon: <BookOpen className="w-8 h-8 text-orange-500" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-8 h-8 text-orange-500" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-8 h-8 text-orange-500" /> },
  ];

  const features = [
    { icon: <Play className="w-10 h-10 text-orange-500" />, title: "Interactive Typing", description: "Master Nepali script through hands-on typing exercises with real-time feedback and pronunciation guides." },
    { icon: <PenTool className="w-10 h-10 text-orange-500" />, title: "Writing Practice", description: "Develop your writing skills with guided exercises that teach proper Nepali character formation and grammar." },
    { icon: <Brain className="w-10 h-10 text-orange-500" />, title: "Smart Learning", description: "AI-powered adaptive learning that adjusts to your pace and focuses on areas where you need improvement." },
    { icon: <MessageCircle className="w-10 h-10 text-orange-500" />, title: "Conversation Skills", description: "Practice real-world conversations with native speakers and learn cultural nuances of Nepali communication." },
    { icon: <Clock className="w-10 h-10 text-orange-500" />, title: "Flexible Schedule", description: "Learn at your own pace with bite-sized lessons that fit into your busy lifestyle." },
    { icon: <Zap className="w-10 h-10 text-orange-500" />, title: "Quick Progress", description: "See measurable progress with our gamified learning system and achievement tracking." },
  ];

  const values = [
    { icon: <Heart className="w-12 h-12 text-red-500" />, title: "Passion for Learning", description: "We believe everyone deserves access to quality language education that makes learning enjoyable and effective." },
    { icon: <Target className="w-12 h-12 text-blue-500" />, title: "Clear Goals", description: "Our structured curriculum helps you achieve specific language milestones with confidence." },
    { icon: <Shield className="w-12 h-12 text-green-500" />, title: "Quality Assurance", description: "Every lesson is crafted by native speakers and language experts to ensure accuracy and cultural authenticity." },
    { icon: <Smartphone className="w-12 h-12 text-purple-500" />, title: "Accessibility", description: "Learn anywhere, anytime with our mobile-first design that works seamlessly across all devices." },
  ];

  const team = [
    { name: "Bimal Diyal", role: "Founder & CEO", image: Bimal, bio: "Native Nepali speaker with 15+ years in education technology. Passionate about making language learning accessible to everyone." },
    { name: "Himal Pandey", role: "Head of Curriculum", image: Himal, bio: "Linguistics expert specializing in South Asian languages. Creates engaging content that makes learning Nepali fun and effective." },
    { name: "Tupesh Ghimire", role: "Community Manager", image: Tupesh, bio: "Handles learner support and engagement. Committed to fostering a vibrant and inclusive learning environment." },
    { name: "Nabin Adhikari", role: "Lead Developer", image: Nabin, bio: "Full-stack developer focused on creating intuitive learning experiences. Believes technology should enhance, not complicate learning." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#133251] to-cyan-600 rounded-lg p-8 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nepali Learn</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
          Empowering people worldwide to connect with Nepali culture through innovative language learning technology.
        </p>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To break down language barriers and foster cultural understanding by making Nepali language learning accessible, engaging, and effective for everyone.
            </p>
            {["Native speaker content", "Cultural authenticity", "Proven learning methods"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 mt-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Team collaboration" className="rounded-xl shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-cyan-600 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Nepali Learn?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Our comprehensive approach combines traditional learning methods with cutting-edge technology to deliver the most effective Nepali language learning experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            These principles guide everything we do and ensure we deliver the best possible learning experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Our diverse team of language experts, educators, and technologists are passionate about making Nepali learning accessible to everyone.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#133251] to-cyan-600 rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Nepali Learning Journey?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of learners who are already mastering Nepali with our proven methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/lessons" className="bg-white text-[#133251] hover:bg-gray-200 font-bold px-8 py-3 rounded-full transition-colors">
              Start Learning Now
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#133251] font-bold px-8 py-3 rounded-full transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}