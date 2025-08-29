import React from "react";
import { Users, Gift, Link2, TrendingUp } from "lucide-react";

export default function Affiliate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <header className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nepali Affiliate Program</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Become part of our affiliate program and turn your love for Nepali Learn into exciting rewards. Share our platform and earn commissions for every new learner you refer!
        </p>
      </header>
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://img.freepik.com/free-vector/affiliate-marketing-concept-illustration_114360-7292.jpg?w=700" alt="Affiliate" className="rounded-xl shadow-lg w-full h-80 object-cover" />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-700 mb-4 flex items-center gap-2"><Gift className="w-7 h-7 text-orange-400" /> How to Join</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li className="flex items-center gap-2"><Users className="w-5 h-5 text-orange-400" />Sign up for our affiliate program using the online form</li>
            <li className="flex items-center gap-2"><Link2 className="w-5 h-5 text-orange-400" />Share your unique referral link with friends, family, and your network</li>
            <li className="flex items-center gap-2"><Gift className="w-5 h-5 text-orange-400" />Earn rewards for every new user who joins Nepali Learn through your link</li>
            <li className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-orange-400" />Track your progress and rewards in your affiliate dashboard</li>
          </ul>
          <p className="mt-6">Ready to join? <a href="/contact" className="text-orange-600 underline hover:text-orange-800">Contact us</a> for more details.</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow p-8 text-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-700">Success Story</h3>
          <p className="italic mb-2">“I joined the Nepali Learn Affiliate Program and within a few months, I was able to earn extra income while helping others discover the beauty of the Nepali language. The dashboard made it easy to track my referrals and rewards!”</p>
          <span className="block text-gray-500">— Sita, Affiliate Partner</span>
        </div>
      </section>
    </div>
  );
} 