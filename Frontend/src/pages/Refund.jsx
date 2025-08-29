import React from 'react';

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#133251] mb-8 text-center">
            Refund Policy
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                1. General Refund Policy
              </h2>
              <p className="leading-relaxed">
                At NepaliLearn, we are committed to providing high-quality language learning experiences. 
                We understand that sometimes a course may not meet your expectations, and we want to ensure 
                your satisfaction with our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                2. 30-Day Money-Back Guarantee
              </h2>
              <p className="leading-relaxed">
                We offer a 30-day money-back guarantee for all our online courses. If you are not satisfied 
                with your purchase within 30 days of enrollment, you may request a full refund. The refund 
                will be processed within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                3. Refund Eligibility
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#133251] mb-2">Eligible for Refund:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Course completion less than 25%</li>
                  <li>• Request made within 30 days of purchase</li>
                  <li>• Technical issues preventing course access</li>
                  <li>• Course content significantly different from description</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg mt-3">
                <h3 className="font-semibold text-red-800 mb-2">Not Eligible for Refund:</h3>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Course completion more than 25%</li>
                  <li>• Request made after 30 days of purchase</li>
                  <li>• Certificate already issued</li>
                  <li>• Live tutoring sessions already attended</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                4. How to Request a Refund
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  To request a refund, please contact our support team at{' '}
                  <span className="text-cyan-500 font-medium">nepalilearn@gmail.com</span> with the following information:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Your full name and email address</li>
                  <li>• Order number or transaction ID</li>
                  <li>• Course name and enrollment date</li>
                  <li>• Reason for refund request</li>
                  <li>• Any supporting documentation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                5. Refund Processing
              </h2>
              <p className="leading-relaxed">
                Once your refund request is approved, we will process the refund to your original payment 
                method within 5-7 business days. You will receive an email confirmation once the refund 
                has been processed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                6. Live Tutoring Sessions
              </h2>
              <p className="leading-relaxed">
                For live tutoring sessions, cancellations must be made at least 24 hours before the scheduled 
                session to be eligible for a refund or rescheduling. No-shows and late cancellations are 
                not eligible for refunds.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                7. Subscription Cancellations
              </h2>
              <p className="leading-relaxed">
                For subscription-based services, you may cancel at any time. You will continue to have 
                access to the service until the end of your current billing period. No refunds are provided 
                for partial months of subscription service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#133251] mb-3">
                8. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about our refund policy or need to request a refund, please 
                contact us at{' '}
                <span className="text-cyan-500">nepalilearn@gmail.com</span> or use our contact form.
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

export default Refund; 