export function RecognitionCards() {
  const recognitions = [
    {
      title: "ICAI - CA Member",
      subtitle: "Institute of Chartered Accountants of India",
      color: "bg-gradient-to-br from-amber-50 to-orange-100 border-l-4 border-amber-400",
      textColor: "text-amber-800",
      icon: "🏆",
      iconBg: "bg-amber-100",
    },
    {
      title: "Young Entrepreneur",
      subtitle: "Rising Business Leader in Retail",
      color: "bg-gradient-to-br from-rose-50 to-pink-100 border-l-4 border-rose-400",
      textColor: "text-rose-800",
      icon: "🚀",
      iconBg: "bg-rose-100",
    },
    {
      title: "Legacy Custodian",
      subtitle: "3rd Generation Family Business",
      color: "bg-gradient-to-br from-yellow-50 to-amber-100 border-l-4 border-yellow-400",
      textColor: "text-yellow-800",
      icon: "👑",
      iconBg: "bg-yellow-100",
    },
    {
      title: "Market Leader",
      subtitle: "Chhattisgarh's Largest Jewellery Retailer",
      color: "bg-gradient-to-br from-emerald-50 to-green-100 border-l-4 border-emerald-400",
      textColor: "text-emerald-800",
      icon: "💎",
      iconBg: "bg-emerald-100",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">Achievements</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Recognitions & Roles</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional achievements and leadership positions that define excellence in the jewellery industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className={`${item.color} ${item.textColor} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
            >
              <div
                className={`${item.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-opacity-90 transition-colors">{item.title}</h4>
              <p className="text-sm opacity-75 leading-relaxed">{item.subtitle}</p>

              <div className="mt-4 w-12 h-1 bg-current opacity-20 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
