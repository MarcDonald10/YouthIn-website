import type { Metadata } from "next"
import DownloadContent from "@/components/download-content"

export const metadata: Metadata = {
  title: "Télécharger - YouthIn",
  description: "Téléchargez YouthIn sur iOS et Android. Commencez votre parcours d'innovation dès aujourd'hui.",
}

export default function DownloadPage() {
  return <DownloadContent />
}
