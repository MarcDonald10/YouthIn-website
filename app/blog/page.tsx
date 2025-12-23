import type { Metadata } from "next"
import BlogContent from "@/components/blog-content"

export const metadata: Metadata = {
  title: "Blog - YouthIn",
  description:
    "Découvrez les dernières actualités, conseils et histoires inspirantes de la communauté YouthIn. Entrepreneuriat, innovation et success stories.",
}

export default function BlogPage() {
  return (
    <main className="pt-24">
      <BlogContent />
    </main>
  )
}
