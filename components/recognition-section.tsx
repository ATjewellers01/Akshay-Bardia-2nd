export function RecognitionSection() {
  const recognitions = [
    {
      icon: "🏅",
      title: "GJEPC's 40 Under 40",
      description: "Honoured for outstanding contribution to the gems & jewellery industry",
    },
    {
      icon: "💎",
      title: "Youth Member",
      description: "Gems & Jewellery Council of India",
    },
    {
      icon: "🔧",
      title: "Innovation Leader",
      description: "Recognized as an Innovator in Modern Jewellery Manufacturing",
    },
    {
      icon: "🤝",
      title: "Trusted Partner",
      description: "Leading jewellery retail chains across India",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Recognition & Industry Leadership</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
