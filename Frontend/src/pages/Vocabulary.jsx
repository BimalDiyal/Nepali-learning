import React from "react";

export default function Vocabulary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      <header className="bg-gradient-to-r from-[#133251] to-cyan-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Vocabulary</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          Grow your Nepali vocabulary! Discover essential words, phrases, and themed lists for travel, daily life, and conversation.
        </p>
      </header>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Vocabulary Articles & Resources</h2>
        <div className="bg-white rounded-xl shadow p-8 text-gray-700">
          <p>Vocabulary-related articles and resources will appear here. (You can connect this to your blog or add static content.)</p>
        </div>
      </section>
    </div>
  );
} 