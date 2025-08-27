export function IntroductionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            In the world of fine jewellery, where trust is built over decades and every creation tells a story,
            <span className="font-semibold text-orange-600"> Akshay Bardia</span> stands as the custodian of a rich
            family legacy.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A Chartered Accountant by profession and a jeweller by lineage, Akshay is the third-generation entrepreneur
            at
            <span className="font-semibold"> Anopchand Tilokchand Jewellers</span>—the largest jewellery retailer in
            Chhattisgarh. Founded by his grandfather <span className="font-semibold">Late Shri Jasraj Ji Bardia</span>{" "}
            and nurtured by his father
            <span className="font-semibold"> Shri Ashok Bardia</span>, the brand has represented integrity,
            craftsmanship, and tradition for over <span className="font-bold text-orange-600">65 years</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
