import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#133251] mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using NepaliLearn, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                2. Use License
              </h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on NepaliLearn 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                3. User Account
              </h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account 
                or password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                4. Course Content
              </h2>
              <p className="leading-relaxed">
                All course materials, including but not limited to text, graphics, images, audio, 
                and video content, are the property of NepaliLearn and are protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                5. Payment Terms
              </h2>
              <p className="leading-relaxed">
                Payment for courses and services must be made in advance. All fees are non-refundable 
                unless otherwise stated in our refund policy. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                6. Prohibited Uses
              </h2>
              <p className="leading-relaxed">
                You may not use our services for any unlawful purpose or to solicit others to perform 
                unlawful acts. You may not violate any international, federal, provincial, or state 
                regulations, rules, laws, or local ordinances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                7. Disclaimer
              </h2>
              <p className="leading-relaxed">
                The materials on NepaliLearn are provided on an 'as is' basis. NepaliLearn makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                8. Limitations
              </h2>
              <p className="leading-relaxed">
                In no event shall NepaliLearn or its suppliers be liable for any damages arising out 
                of the use or inability to use the materials on our website, even if we have been 
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                9. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
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

export default Terms; 