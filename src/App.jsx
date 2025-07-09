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
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
              <span className="block text-3xl md:text-4xl text-gray-700 mb-3">
                Discover How To
                <span className="relative ml-2">
                  Melt Fat Effortlessly
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -right-6 -top-2 h-8 w-8 text-pink-500 animate-pulse"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>

              <span className="relative inline-block mt-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl inline-block cursor-pointer shadow-xl transform transition-all duration-300 hover:scale-105 group">
                  <a href="https://ab1a76i3k0s6uhfi1kydm9qc8e.hop.clickbank.net">
                    <span className="relative z-10">
                      Lose 10-15lbs in Just 21 Days!
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline-block ml-3 mb-1 animate-bounce group-hover:animate-spin"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              </span>

              <span className="block mt-6 text-3xl md:text-4xl leading-tight text-gray-800">
                Without Starving - Enjoy The
                <span className="relative ml-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  Delicious Smoothie Solution!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -right-8 -top-3 h-10 w-10 text-green-500 animate-bounce"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-2xl bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <span className="font-bold text-blue-600">
                Join 37,000+ People
              </span>{" "}
              Who Melted Stubborn Fat With This
              <span className="inline-flex items-center ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Doctor-Approved
              </span>
              Smoothie Diet System
            </p>
          </div>

          {/* Image Section - Improved Layout */}
          <div className="relative order-1 md:order-2">
            <div className="overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <img
                src="/smoothie_diet_main_pic.png"
                alt="Delicious weight loss smoothies"
                className="w-full object-cover"
              />
            </div>

            {/* Stats Box - Better Positioning */}
            <div className="mt-6 md:mt-0 md:absolute md:-bottom-4 md:right-0 bg-white p-3 md:p-4 rounded-lg shadow-lg w-full max-w-xs mx-auto">
              <div className="flex justify-between">
                <div className="text-center px-2">
                  <div className="text-xl font-bold text-green-600">
                    37,000+
                  </div>
                  <div className="text-xs md:text-sm">Users</div>
                </div>
                <div className="text-center px-2 border-x border-gray-200">
                  <div className="text-xl font-bold text-green-600">96%</div>
                  <div className="text-xs md:text-sm">Success Rate</div>
                </div>
                <div className="text-center px-2">
                  <div className="text-xl font-bold text-green-600">21</div>
                  <div className="text-xs md:text-sm">Days Program</div>
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
                alt="smoothie weight lose"
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
