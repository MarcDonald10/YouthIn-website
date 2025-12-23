import type { Metadata } from "next"
import CrowdfundingContent from "@/components/crowdfunding-content"

export const metadata: Metadata = {
  title: "Financement Participatif - YouthIn",
  description: "Financez vos projets grâce au crowdfunding communautaire. Sécurisé, transparent et accessible à tous.",
}

export default function CrowdfundingPage() {
  return <CrowdfundingContent />
}
