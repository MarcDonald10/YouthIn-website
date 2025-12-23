import Hero from "@/components/hero"
import FeaturesTeaser from "@/components/features-teaser"
import Stats from "@/components/stats"
import GrowthChart from "@/components/growth-chart"
import InteractiveDashboard from "@/components/interactive-dashboard"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"
import CTAInvestor from "@/components/cta-investor"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <GrowthChart />
      <InteractiveDashboard />
      <FeaturesTeaser />
      <Partners />
      <Testimonials />
      <CTAInvestor />
    </main>
  )
}
