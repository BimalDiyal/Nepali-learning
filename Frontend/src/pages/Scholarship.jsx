import React from "react";
import { Award, Mail, HelpCircle } from "lucide-react";

export default function Scholarship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      <header className="bg-gradient-to-r from-[#133251] to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nepali Learn Scholarship</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Are you a student planning on studying abroad? Apply for a chance to win $1,000 and a free lifetime membership to Nepali Learn!
        </p>
      </header>
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7346.jpg?w=700" alt="Scholarship" className="rounded-xl shadow-lg w-full h-80 object-cover" />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#133251] mb-4 flex items-center gap-2"><Award className="w-7 h-7 text-cyan-500" /> How to Apply</h2>
          <ul className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
            <li>Write a short essay (500 words) on how learning Nepali will help you achieve your goals.</li>
            <li>Submit your essay and academic transcript to <a href="mailto:scholarship@nepalilearn.com" className="text-cyan-600 underline hover:text-cyan-800">scholarship@nepalilearn.com</a>.</li>
            <li>Winners will be announced on our website and contacted by email.</li>
          </ul>
          <p className="mt-6">For more information, <a href="/contact" className="text-cyan-600 underline hover:text-cyan-800">contact us</a>.</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow p-8 text-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-[#133251] flex items-center gap-2"><HelpCircle className="w-6 h-6 text-cyan-500" /> FAQ</h3>
          <ul className="space-y-4 text-left">
            <li><span className="font-semibold">Who can apply?</span> Any student planning to study abroad and interested in learning Nepali.</li>
            <li><span className="font-semibold">How will I know if I win?</span> Winners will be notified by email and announced on our website.</li>
            <li><span className="font-semibold">Can I apply more than once?</span> No, each student may submit only one application per year.</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 