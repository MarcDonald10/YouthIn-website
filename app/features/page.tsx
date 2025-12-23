import type { Metadata } from "next"
import FeaturesContent from "@/components/features-content"

export const metadata: Metadata = {
  title: "Fonctionnalités - YouthIn",
  description:
    "Découvrez toutes les fonctionnalités de YouthIn : projets, mentorat, financement participatif, communauté, gamification et plus.",
}

export default function FeaturesPage() {
  return <FeaturesContent />
}
