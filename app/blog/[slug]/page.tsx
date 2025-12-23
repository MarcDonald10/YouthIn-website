import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostContent from "@/components/blog-post-content"

const blogPosts = [
  {
    slug: "5-etapes-lancer-startup-succes",
    title: "5 Étapes Clés pour Lancer une Startup à Succès en 2025",
    description:
      "Découvrez les étapes essentielles pour transformer votre idée en une entreprise prospère. De la validation du concept au lancement.",
    category: "Entrepreneuriat",
    author: "Marie Dupont",
    date: "15 Jan 2025",
    readTime: "8 min",
    image: "/young-african-woman-entrepreneur-smiling.jpg",
  },
  {
    slug: "pouvoir-mentorat-croissance",
    title: "Le Pouvoir du Mentorat dans la Croissance Entrepreneuriale",
    description:
      "Comment un bon mentor peut accélérer votre parcours entrepreneurial et vous éviter les erreurs coûteuses.",
    category: "Conseils",
    author: "Jean Martin",
    date: "12 Jan 2025",
    readTime: "6 min",
    image: "/young-african-male-developer-coding.jpg",
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: `${post.title} - YouthIn Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-24">
      <BlogPostContent post={post} />
    </main>
  )
}
