export function RecognitionLeadershipSection() {
  const recognitions = [
    {
      icon: "🏅",
      title: "GJEPC's 40 Under 40",
      description: "Honoured in GJEPC's prestigious recognition program",
    },
    {
      icon: "💎",
      title: "Youth Member GJCI",
      description: "Youth Member of the Gems & Jewellery Council of India",
    },
    {
      icon: "🔧",
      title: "Manufacturing Innovator",
      description: "Recognized as an Innovator in Modern Jewellery Manufacturing",
    },
    {
      icon: "🤝",
      title: "Trusted Partner",
      description: "Trusted partner to leading jewellery retail chains across India",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <h2 className="text-2xl font-bold text-gray-800">Recognition & Industry Leadership</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
