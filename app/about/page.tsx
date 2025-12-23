import type { Metadata } from "next"
import AboutContent from "@/components/about-content"

export const metadata: Metadata = {
  title: "À Propos - YouthIn",
  description:
    "Découvrez notre vision, mission et valeurs. YouthIn est dédiée à l'empowerment des jeunes innovateurs à travers le monde.",
}

export default function AboutPage() {
  return <AboutContent />
}
