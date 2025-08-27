export function PersonalCommitmentsSection() {
  const commitments = [
    {
      icon: "🌿",
      text: "An active Vipassana practitioner and believer in self-development",
    },
    {
      icon: "🧗",
      text: "Passionate about trekking and exploring nature",
    },
    {
      icon: "💡",
      text: "A strong advocate of purpose-driven entrepreneurship",
    },
    {
      icon: "📈",
      text: "An angel investor, supporting promising startups and young entrepreneurs",
    },
    {
      icon: "🤝",
      text: "An active member of RTI and YPO, committed to learning and contributing to business leadership communities",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <h2 className="text-2xl font-bold text-gray-800">Personal Commitments</h2>
          </div>

          <p className="text-gray-700 text-lg mb-8">Beyond business, Akshay is:</p>

          <div className="space-y-6">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl flex-shrink-0">{commitment.icon}</div>
                <p className="text-gray-700 leading-relaxed">{commitment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
