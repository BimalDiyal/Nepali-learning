
import { Calendar, Video, User, Clock, ArrowRight } from "lucide-react";
import Hemant from "../assets/Hemant.jpg"
import Rohit from "../assets/Rohit.png";

import Hema from "../assets/Hema.jpg";

const sampleClasses = [
  {
    title: "Beginner Nepali Conversation",
    time: "Mon, Wed, Fri - 7:00 PM NPT",
    teacher: "Hemant Diyal",
    link: "#join-beginner"
  },
  {
    title: "Intermediate Grammar & Practice",
    time: "Tue, Thu - 6:00 PM NPT",
    teacher: "Rohit Bist",
    link: "#join-intermediate"
  },
  {
    title: "Advanced Speaking & Culture",
    time: "Saturday - 5:00 PM NPT",
    teacher: "Hema Diyal",
    link: "#join-advanced"
  }
];

const teachers = [
  {
    name: "Hemant Diyal",
    bio: "Native Nepali speaker with 8+ years of teaching experience. Specializes in beginner conversation and pronunciation.",
    image: Hemant
  },
  {
    name: "Rohit Bist",
    bio: "Grammar expert and language coach. Loves helping students build confidence in real conversations.",
   image: Rohit
  },
  {
    name: "Hema Diyal",
    bio: "Cultural ambassador and advanced speaking instructor. Passionate about Nepali traditions and language.",
    image: Hema
  }
];

export default function LiveClasses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#133251] to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nepali Live Classes</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Join our interactive live classes and practice Nepali with expert teachers and fellow learners. All levels welcome!
        </p>
      </header>

      {/* Class Schedule */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#133251] flex items-center gap-2"><Calendar className="w-7 h-7 text-cyan-500" /> Class Schedule</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sampleClasses.map((cls, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Video className="w-5 h-5 text-cyan-500" /> {cls.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-1"><Clock className="w-4 h-4" /> {cls.time}</div>
              <div className="flex items-center gap-2 text-gray-600 mb-4"><User className="w-4 h-4" /> {cls.teacher}</div>
              <a href={cls.link} className="mt-auto bg-[#133251] hover:bg-[#0f2a42] text-white font-bold px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200">
                Join Class <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#133251] flex items-center gap-2"><User className="w-7 h-7 text-cyan-500" /> Meet Our Teachers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-cyan-100" />
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-gray-600 mb-2">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#133251]">Ready to join a class?</h2>
        <p className="text-lg text-gray-700 mb-6">Sign up now and start speaking Nepali with confidence!</p>
        <a href="#join-beginner" className="bg-[#133251] hover:bg-[#0f2a42] text-white font-bold px-8 py-3 rounded-full text-lg shadow transition-all duration-200 inline-block">
          Join Your First Class
        </a>
      </section>
    </div>
  );
} 