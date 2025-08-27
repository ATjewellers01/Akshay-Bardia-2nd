export function BusinessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">AT Plus Jewellers</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2014, AT Plus Jewellers represents modern jewellery manufacturing focused on precision,
              innovation, and scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Manufacturing Excellence</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>State-of-the-art 25,000 sq. ft. integrated manufacturing facility in Raipur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Specializes in CNC Fusion Jewellery and Lightweight Casting Technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Operations across Raipur, Kolkata, and Mumbai</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Prestigious Clients</h3>
                <p className="text-muted-foreground mb-6">Proudly serves India's most respected corporate clients:</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Tatas (CaratLane)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Birlas (Indriya)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Reliance Jewels</span>
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
