export function PersonalSection() {
  const commitments = [
    {
      icon: "🌿",
      title: "Vipassana Practitioner",
      description: "Active believer in self-development and mindfulness",
    },
    {
      icon: "🧗",
      title: "Nature Explorer",
      description: "Passionate about trekking and exploring nature",
    },
    {
      icon: "💡",
      title: "Purpose-Driven Entrepreneur",
      description: "Strong advocate of meaningful business practices",
    },
    {
      icon: "📈",
      title: "Angel Investor",
      description: "Supporting promising startups and young entrepreneurs",
    },
    {
      icon: "🤝",
      title: "Community Leader",
      description: "Active member of RTI and YPO business communities",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Personal Commitments</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond business, Akshay is committed to personal growth, community leadership, and supporting the next
              generation of entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Gratitude</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground text-center">
              <p className="mb-4">
                Akshay credits his journey to the blessings of his grandfather, the mentorship and values instilled by
                his father <strong>Shri Ashok Bardia</strong>, and the support of his brother
                <strong> Ankit Bardia</strong> and the dedication of his entire team.
              </p>
              <p>
                At home, he draws strength from his wife <strong>Sonal</strong> and daughters
                <strong> Amaira & Miraya</strong>, who remind him daily of what truly matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
