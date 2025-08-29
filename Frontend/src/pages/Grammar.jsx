import React from "react";

export default function Grammar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-500 to-purple-400 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Grammar Tips</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          Master Nepali grammar! Find tips and guides on verb conjugation, honorifics, sentence structure, and more. Solid grammar skills help you express yourself clearly.
        </p>
      </header>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Grammar Articles & Resources</h2>
        <div className="bg-white rounded-xl shadow p-8 text-gray-700">
          <p>Grammar-related articles and resources will appear here. (You can connect this to your blog or add static content.)</p>
        </div>
      </section>
    </div>
  );
} 