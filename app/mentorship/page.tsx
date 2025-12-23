import type { Metadata } from "next"
import MentorshipContent from "@/components/mentorship-content"

export const metadata: Metadata = {
  title: "Mentorat - YouthIn",
  description:
    "Connectez-vous avec des mentors experts. Matching intelligent, sessions personnalisées et accompagnement sur mesure.",
}

export default function MentorshipPage() {
  return <MentorshipContent />
}
