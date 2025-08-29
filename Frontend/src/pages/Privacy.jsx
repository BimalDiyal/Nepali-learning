import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#133251] mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                enroll in courses, or contact us for support. This may include your name, email address, 
                phone number, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products, services, and events.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                3. Information Sharing
              </h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                5. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website, 
                analyze usage patterns, and personalize content and advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                6. Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications and request restrictions on how we use your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                7. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <span className="text-cyan-500">nepalilearn@gmail.com</span>
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 