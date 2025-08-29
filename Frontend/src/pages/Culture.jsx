import React from "react";

export default function Culture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Nepali Culture</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          Dive into the heart of Nepal! Explore traditions, festivals, daily life, and etiquette. Understanding culture is key to using Nepali naturally and respectfully.
        </p>
      </header>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-700">Culture Articles & Resources</h2>
        <div className="bg-white rounded-xl shadow p-8 text-gray-700">
          <p>Culture-related articles and resources will appear here. (You can connect this to your blog or add static content.)</p>
        </div>
      </section>
    </div>
  );
} 