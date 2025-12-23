import type { Metadata } from "next"
import InvestorsContent from "@/components/investors-content"

export const metadata: Metadata = {
  title: "Investisseurs - YouthIn",
  description:
    "Opportunité d'investissement exceptionnelle. Rejoignez la révolution de l'entrepreneuriat africain avec YouthIn.",
}

export default function InvestorsPage() {
  return (
    <main>
      <InvestorsContent />
    </main>
  )
}
