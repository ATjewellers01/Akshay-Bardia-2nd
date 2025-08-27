export function ProfileSummary() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-2 mb-6">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Profile Summary</h3>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Akshay is a Chartered Accountant and visionary leader known for his dynamic legacy as a partner in Anopchand
            Tilokchand Jewellers—Chhattisgarh's largest retail jewellery brand—while also spearheading his family
            business and fostering Raipur Bardia.
          </p>
          <p>
            With a keen eye for innovation and a commitment to excellence, Akshay seamlessly blends traditional
            craftsmanship with modern business strategies. His leadership has been instrumental in expanding the
            family's jewellery empire and establishing AT Plus Jewellers as a trusted name in the industry.
          </p>
        </div>
      </div>
    </section>
  )
}
