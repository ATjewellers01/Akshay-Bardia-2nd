export function ATPlusSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <h2 className="text-2xl font-bold text-gray-800">AT Plus Jewellers</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <p className="text-gray-700 leading-relaxed mb-8">
              In 2014, Akshay founded <span className="font-bold text-orange-600">AT Plus Jewellers</span>, a modern
              jewellery manufacturing house focused on precision, innovation, and scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Operates across <span className="font-semibold">Raipur, Kolkata, and Mumbai</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Equipped with a state-of-the-art{" "}
                    <span className="font-semibold">25,000 sq. ft. integrated manufacturing facility</span> in Raipur
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Specializes in{" "}
                    <span className="font-semibold">CNC Fusion Jewellery and Lightweight Casting Technology</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Proudly serves India's most respected corporate clients, including the{" "}
                    <span className="font-semibold">Tatas (CaratLane), Birlas (Indriya), and Reliance Jewels</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
