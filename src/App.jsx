import React, { useState, useEffect } from "react";

const SmoothieDietLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-green-50 to-white">
      {/* Sticky Offer Bar */}
      <div className="bg-red-600 text-white py-2 text-center font-bold sticky top-0 z-50">
        ⚠️ WARNING: Only 23 Copies Left at Discounted Price! |
        <span className="ml-2">83% OFF TODAY</span>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Lose <span className="text-green-600">10-15lbs in 21 Days</span>
              Without Starving - The Delicious Smoothie Solution!
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Join 37,000+ People Who Melted Stubborn Fat With This
              Doctor-Approved Smoothie Diet System
            </p>

            <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4">
              <h2 className="font-bold text-lg">⚠️ Limited Time Offer:</h2>
              <div className="flex space-x-4 mt-2 items-center">
                <div className="text-center">
                  <span className="text-2xl font-bold bg-red-600 text-white px-3 py-1 rounded">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <span className="block text-sm mt-1">HOURS</span>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <span className="text-2xl font-bold bg-red-600 text-white px-3 py-1 rounded">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <span className="block text-sm mt-1">MINUTES</span>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <span className="text-2xl font-bold bg-red-600 text-white px-3 py-1 rounded">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <span className="block text-sm mt-1">SECONDS</span>
                </div>
              </div>
            </div>

            <a
              href="https://ab1a76i3k0s6uhfi1kydm9qc8e.hop.clickbank.net
"
              className="mt-8 inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-center py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              YES! I WANT MY CUSTOM SMOOTHIE PLAN NOW! →
            </a>

            <div className="mt-6 flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-gray-600">
                256-Bit Encrypted Secure Checkout
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505252585461-04db1a846087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Delicious weight loss smoothies"
              className="rounded-xl shadow-xl border-4 border-white w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex">
                <div className="text-center pr-4 border-r border-gray-200">
                  <div className="text-2xl font-bold text-green-600">
                    37,000+
                  </div>
                  <div className="text-sm">Users</div>
                </div>
                <div className="text-center px-4 border-r border-gray-200">
                  <div className="text-2xl font-bold text-green-600">96%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="text-center pl-4">
                  <div className="text-2xl font-bold text-green-600">21</div>
                  <div className="text-sm">Days Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            REAL PEOPLE, <span className="text-pink-600">REAL RESULTS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Danielle's Testimonial */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/testimonial-img1.png"
                alt="Danielle Before After"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Danielle Lost{" "}
                <span className="text-blue-600">8 Pounds in 1 Week!</span>
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">
                “Getting into this diet was so easy and the results were so
                fast.{" "}
                <strong>
                  After only 1 week on the Smoothie Diet I weighed myself and
                  realized I had lost 8 pounds!
                </strong>{" "}
                I feel better and more confident than I have in a very long
                time...”
              </p>
              <p className="text-xs text-gray-500">
                Danielle was shocked when she realized she lost 8 lbs in 1 week
                – Houston, TX
              </p>
            </div>

            {/* Sarah's Testimonial */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/testimonial-img2.png"
                alt="Sarah Before After"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Sarah Dropped{" "}
                <span className="text-blue-600">3 Pounds in 3 Days!</span>
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">
                “I’ve never seen the weight come off like this. I really LOVE
                this diet! It’s more like a life overhaul!...
                <strong>
                  This is the perfect ‘Mommy Makeover’ I was looking for.
                </strong>
                ”
              </p>
              <p className="text-xs text-gray-500">
                Sarah used the Smoothie Diet to do a complete "Mommy Makeover" –
                Tulsa, OK
              </p>
            </div>

            {/* Jade's Testimonial */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/testimonial-img3.png"
                alt="Jade Before After"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Jade Kicked{" "}
                <span className="text-blue-600">12 Pounds in 21 Days!</span>
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">
                “I’ve been trying forever to lose the last 10-15 lbs...
                <strong>
                  Now I feel confident about myself and my love handles are
                  gone!
                </strong>
                ”
              </p>
              <p className="text-xs text-gray-500">
                Jade was able to lose her stubborn belly fat and get rid of her
                love handles – Buffalo, NY
              </p>
            </div>
          </div>

          {/* Additional Proof Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-full">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                OVER 37,000 SATISFIED USERS WORLDWIDE
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Final CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready To Transform Your Body in 21 Days?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers and get instant access to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              "21-Day Meal Plan",
              "Shopping Lists",
              "Smoothie Recipes",
              "Detox Guide",
              "Maintenance Plan",
              "VIP Email Support",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <div className="bg-green-800 rounded-full w-6 h-6 mr-2 flex items-center justify-center">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://ab1a76i3k0s6uhfi1kydm9qc8e.hop.clickbank.net"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold text-xl py-5 px-12 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            GET INSTANT ACCESS NOW
          </a>

          <div className="mt-8 flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-lg">
              <span className="font-bold">60-Day Money-Back Guarantee</span> -
              If you don't see amazing results, we'll refund every penny!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          *Results vary based on individual commitment and body type. This is
          not medical advice - consult your doctor before starting any diet
          program.
          <div className="mt-4">
            © {new Date().getFullYear()} SmoothieDiet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmoothieDietLanding;
