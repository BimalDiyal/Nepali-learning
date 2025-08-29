import React from "react";
import { UserCheck, CalendarCheck, MessageCircle, Star } from "lucide-react";

export default function Live() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      <header className="bg-gradient-to-r from-[#133251] to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nepali Learn Live</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Experience the power of personalized learning with our one-on-one Nepali tutoring sessions. Our expert tutors are here to help you reach your language goals, no matter your level.
        </p>
      </header>
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=700" alt="Live Tutoring" className="rounded-xl shadow-lg w-full h-80 object-cover" />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#133251] mb-4 flex items-center gap-2"><UserCheck className="w-7 h-7 text-cyan-500" /> Live Tutoring Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                          <li className="flex items-center gap-2"><CalendarCheck className="w-5 h-5 text-cyan-500" />Flexible scheduling to fit your needs</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-cyan-500" />Native Nepali-speaking tutors</li>
              <li className="flex items-center gap-2"><Star className="w-5 h-5 text-cyan-500" />Personalized lesson plans and feedback</li>
            </ul>
            <p className="mt-6">Ready to start? <a href="/contact" className="text-cyan-600 underline hover:text-cyan-800">Contact us</a> to book your first session!</p>
          <a
            href="/liveClasses"
            className="inline-block mt-6 bg-[#133251] hover:bg-[#0f2a42] text-white font-bold px-8 py-3 rounded-full text-lg shadow transition-all duration-200"
          >
            Join Now
          </a>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow p-8 text-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#133251]">What Our Students Say</h3>
          <p className="italic mb-2">“My tutor was patient and encouraging. I made more progress in a few weeks than I had in months of self-study!”</p>
          <span className="block text-gray-500">— Ganesh, Beginner Learner</span>
        </div>
      </section>
    </div>
  );
} 