"use client"

import Image from "next/image"

export function ProfileHeader() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-8 md:py-16 xl:py-24 px-4 md:px-6 xl:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 md:left-20 xl:left-32 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-20 md:left-40 xl:left-64 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-20 right-16 md:right-32 xl:right-48 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 left-16 md:left-32 xl:left-48 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 right-10 md:right-20 xl:right-32 w-2 h-2 bg-orange-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-40 left-32 md:left-60 xl:left-80 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-700"></div>

      </div>

      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-16 2xl:gap-24">
          <div className="flex-1 text-center lg:text-left xl:pr-8">
            {/* Logo and name section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-6 mb-6 md:mb-8 xl:mb-12">
              <div className="w-16 h-16 md:w-20 md:h-20 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-xl xl:rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-6Y16WEVqoaffsrGP9TSnRn06JFiU3H.jpeg"
                  alt="AT Logo - Symbol of Trust Since 1957"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="xl:ml-4">
                <h1 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-orange-600 xl:mb-2">Akshay Bardia</h1>
                <p className="text-orange-700 font-medium text-sm md:text-base xl:text-xl 2xl:text-2xl">
                  Chartered Accountant | Entrepreneur | Angel investor
                </p>
              </div>
            </div>

            <div className="mb-6 xl:mb-10">
              <div className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium leading-relaxed max-w-2xl xl:max-w-4xl mx-auto lg:mx-0 text-center lg:text-left xl:leading-loose">
                <p>Partner – <span className="font-semibold">Anopchand Tilokchand Jewellers</span></p>
                <p>Founder – <span className="font-semibold">AT Plus Jewellers</span></p>
              </div>
            </div>

            {/* Location and badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 xl:gap-8 mb-4 xl:mb-8">
              <div className="flex items-center gap-2 xl:gap-3 text-orange-600">
                <svg className="w-5 h-5 xl:w-7 xl:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-sm md:text-base xl:text-xl 2xl:text-2xl">Raipur • Kolkata • Mumbai</span>
              </div>
            </div>


          </div>

          <div className="relative mt-8 lg:mt-0 lg:ml-8 xl:ml-16">
            <div className="relative w-72 h-80 md:w-80 md:h-96 xl:w-96 xl:h-[28rem] 2xl:w-[26rem] 2xl:h-[32rem]">
              {/* Enhanced colorful geometric shapes with better layering and gradients */}
              <div className="absolute -top-6 -left-6 w-28 h-28 md:w-32 md:h-32 xl:w-40 xl:h-40 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-3xl rotate-12 opacity-85 shadow-lg animate-float"></div>
              <div className="absolute -top-4 -right-8 w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-pink-400 via-purple-400 to-purple-500 rounded-2xl -rotate-12 opacity-85 shadow-lg animate-float-delayed"></div>
              <div className="absolute -bottom-8 -left-4 w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 bg-gradient-to-br from-purple-400 via-pink-400 to-pink-500 rounded-3xl rotate-45 opacity-85 shadow-lg animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-18 h-18 md:w-20 md:h-20 xl:w-28 xl:h-28 bg-gradient-to-br from-orange-400 via-red-400 to-red-500 rounded-2xl -rotate-45 opacity-85 shadow-lg animate-float-delayed"></div>

              {/* Enhanced decorative circles with subtle animations */}
              <div className="absolute top-6 right-6 w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-md animate-bounce-slow"></div>
              <div className="absolute bottom-10 left-2 w-3 h-3 xl:w-5 xl:h-5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-md animate-bounce-slow delay-300"></div>
              <div className="absolute top-1/2 -right-2 w-2 h-2 xl:w-4 xl:h-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-md animate-pulse"></div>


              {/* Main photo container with enhanced styling */}
              <div className="relative z-10 w-56 h-72 md:w-64 md:h-80 xl:w-80 xl:h-96 2xl:w-96 2xl:h-[28rem] mx-auto mt-6 md:mt-8 xl:mt-12 rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl border-4 xl:border-6 border-white transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                <Image
                  src="/images/profilepic.jpg"
                  alt="Akshay Bardia with family"
                  width={384}
                  height={448}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-8px) rotate(-12deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}