"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Users,
  Rocket,
  Award,
  Target,
  Sparkles,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Tous", slug: "all", icon: BookOpen },
  { name: "Entrepreneuriat", slug: "entrepreneurship", icon: Rocket },
  { name: "Innovation", slug: "innovation", icon: Lightbulb },
  { name: "Success Stories", slug: "success", icon: Award },
  { name: "Conseils", slug: "tips", icon: Target },
  { name: "Communauté", slug: "community", icon: Users },
]

const blogPosts = [
  {
    id: 1,
    slug: "5-etapes-lancer-startup-succes",
    title: "5 Étapes Clés pour Lancer une Startup à Succès en 2025",
    excerpt:
      "Découvrez les étapes essentielles pour transformer votre idée en une entreprise prospère. De la validation du concept au lancement.",
    category: "Entrepreneuriat",
    categorySlug: "entrepreneurship",
    author: "Marie Dupont",
    date: "15 Jan 2025",
    readTime: "8 min",
    image: "/young-african-woman-entrepreneur-smiling.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "pouvoir-mentorat-croissance",
    title: "Le Pouvoir du Mentorat dans la Croissance Entrepreneuriale",
    excerpt:
      "Comment un bon mentor peut accélérer votre parcours entrepreneurial et vous éviter les erreurs coûteuses.",
    category: "Conseils",
    categorySlug: "tips",
    author: "Jean Martin",
    date: "12 Jan 2025",
    readTime: "6 min",
    image: "/young-african-male-developer-coding.jpg",
    featured: true,
  },
  {
    id: 3,
    slug: "crowdfunding-financer-projet",
    title: "Crowdfunding: Comment Financer Votre Projet Innovant",
    excerpt:
      "Guide complet pour réussir votre campagne de crowdfunding et convaincre les investisseurs de soutenir votre vision.",
    category: "Entrepreneuriat",
    categorySlug: "entrepreneurship",
    author: "Aïcha Diallo",
    date: "10 Jan 2025",
    readTime: "10 min",
    image: "/young-woman-artist-creative.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "success-story-tech-startup-africaine",
    title: "Success Story: Comment Cette Startup Tech a Levé 2M€",
    excerpt:
      "Retour sur le parcours inspirant d'une startup africaine qui a réussi à lever des fonds importants en moins d'un an.",
    category: "Success Stories",
    categorySlug: "success",
    author: "Kofi Mensah",
    date: "8 Jan 2025",
    readTime: "7 min",
    image: "/smartphone-mockup-mobile-app-green-interface.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "innovation-impact-social",
    title: "Innovation et Impact Social: Créer une Entreprise à Mission",
    excerpt: "Découvrez comment allier business rentable et impact social positif pour construire un monde meilleur.",
    category: "Innovation",
    categorySlug: "innovation",
    author: "Sophie Laurent",
    date: "5 Jan 2025",
    readTime: "9 min",
    image: "/young-african-woman-entrepreneur-smiling.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "construire-communaute-engagee",
    title: "Comment Construire une Communauté Engagée Autour de Votre Projet",
    excerpt: "Les stratégies essentielles pour créer et animer une communauté fidèle qui soutiendra votre croissance.",
    category: "Communauté",
    categorySlug: "community",
    author: "Thomas Koffi",
    date: "3 Jan 2025",
    readTime: "5 min",
    image: "/young-african-male-developer-coding.jpg",
    featured: false,
  },
]

export default function BlogContent() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern-primary opacity-20" />
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220, 247, 99, 0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-60 left-20 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220, 247, 99, 0.1) 0%, transparent 70%)" }}
        animate={{ y: [0, -50, 0], x: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/15 text-primary px-6 py-3 rounded-full mb-8 border-2 border-primary/30 backdrop-blur-xl glow-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles size={20} />
            <span className="text-base font-black tracking-wide">Blog YouthIn</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-tight">
            Inspiration & <span className="gradient-primary-animated text-glow-primary">Ressources</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Conseils pratiques, success stories et actualités pour propulser votre parcours entrepreneurial
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.slug}
              className="flex items-center gap-2 px-6 py-3 bg-dark/60 backdrop-blur-xl border-2 border-primary/20 rounded-full hover:border-primary hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <category.icon size={18} className="text-primary" />
              <span className="font-bold text-white/80 group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.div className="mb-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl md:text-4xl font-display font-black mb-12 flex items-center gap-3">
            <TrendingUp className="text-primary" size={36} />
            Articles À La Une
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="relative card-primary rounded-3xl overflow-hidden h-full"
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 shimmer-primary opacity-0 group-hover:opacity-100" />

                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-dark px-4 py-2 rounded-full text-sm font-black">Featured</span>
                      </div>
                    </div>

                    <div className="p-8 relative">
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <span className="bg-primary/15 text-primary px-3 py-1 rounded-full font-bold border border-primary/30">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-black mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                        >
                          Lire Plus
                          <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-display font-black mb-12">Derniers Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="relative card-primary rounded-2xl overflow-hidden h-full"
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 shimmer-primary opacity-0 group-hover:opacity-100" />

                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>

                    <div className="p-6 relative">
                      <div className="flex items-center gap-3 text-xs text-white/60 mb-3">
                        <span className="bg-primary/15 text-primary px-2 py-1 rounded-full font-bold text-[10px] border border-primary/30">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-black mb-3 text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-white/50">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>

                        <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="relative bg-gradient-to-br from-primary/20 via-background to-background p-12 md:p-16 rounded-3xl border-2 border-primary/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="text-primary" size={40} />
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-display font-black mb-6">Reste Inspiré Chaque Semaine</h3>
              <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                Reçois nos meilleurs articles, conseils exclusifs et success stories directement dans ta boîte mail
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="ton-email@exemple.com"
                  className="flex-1 px-6 py-4 bg-dark/60 backdrop-blur-xl border-2 border-primary/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary text-dark hover:bg-primary/90 glow-primary-intense font-black px-8 py-4 h-auto rounded-xl text-secondary">
                    S'abonner
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
