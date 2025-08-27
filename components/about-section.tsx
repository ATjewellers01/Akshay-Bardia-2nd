export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Introduction</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl lg:text-2xl mb-8 text-center font-light">
              In the world of fine jewellery, where trust is built over decades and every creation tells a story, Akshay
              Bardia stands as the custodian of a rich family legacy.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <p>
                  A Chartered Accountant by profession and a jeweller by lineage, Akshay is the third-generation
                  entrepreneur at <strong>Anopchand Tilokchand Jewellers</strong>—the largest jewellery retailer in
                  Chhattisgarh.
                </p>

                <p>
                  Founded by his grandfather <strong>Late Shri Jasraj Ji Bardia</strong> and nurtured by his father
                  <strong> Shri Ashok Bardia</strong>, the brand has represented integrity, craftsmanship, and tradition
                  for over <strong>65 years</strong>.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">65+</div>
                  <div className="text-muted-foreground">Years of Legacy</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">3rd</div>
                    <div className="text-sm text-muted-foreground">Generation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">#1</div>
                    <div className="text-sm text-muted-foreground">In Chhattisgarh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
