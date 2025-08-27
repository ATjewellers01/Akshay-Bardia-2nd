export function GratitudeSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
          <h2 className="text-2xl font-bold text-gray-800">Gratitude</h2>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
          <p className="text-gray-700 leading-relaxed mb-6">Akshay credits his journey to:</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                The blessings of his <span className="font-semibold">grandfather</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                The mentorship and values instilled by his father{" "}
                <span className="font-semibold">Shri Ashok Bardia</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                The support of his brother <span className="font-semibold">Ankit Bardia</span> and the dedication of his
                entire team
              </p>
            </div>
          </div>

          <div className="border-t border-pink-100 pt-6">
            <p className="text-gray-700 leading-relaxed">
              At home, he draws strength from his wife <span className="font-semibold text-pink-600">Sonal</span> and
              daughters
              <span className="font-semibold text-pink-600"> Amaira & Miraya</span>, who remind him daily of what truly
              matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
