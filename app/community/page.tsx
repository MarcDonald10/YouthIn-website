import type { Metadata } from "next"
import CommunityContent from "@/components/community-content"

export const metadata: Metadata = {
  title: "Communauté - YouthIn",
  description: "Rejoignez une communauté vibrante de jeunes innovateurs. Collaborez, partagez et grandissez ensemble.",
}

export default function CommunityPage() {
  return <CommunityContent />
}
