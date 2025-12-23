"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern-primary opacity-20" />
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220, 247, 99, 0.12) 0%, transparent 70%)" }}
        animate={{ y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 text-sm text-white/60 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight size={14} />
          <span className="text-primary">{post.category}</span>
        </motion.div>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-primary hover:bg-primary/10 mb-8 -ml-2"
              >
                <ArrowLeft size={18} className="mr-2" />
                Retour au Blog
              </Button>
            </Link>

            <span className="bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-black border-2 border-primary/30 inline-block mb-6">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-10">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent"
                >
                  <Heart size={18} className="mr-2" />
                  J'aime
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent"
                >
                  <Bookmark size={18} className="mr-2" />
                  Sauvegarder
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent"
                >
                  <Share2 size={18} className="mr-2" />
                  Partager
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="relative aspect-[16/9] rounded-3xl overflow-hidden border-2 border-primary/20 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>

        {/* Content */}
        <motion.article
          className="max-w-3xl mx-auto prose prose-invert prose-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-8 text-white/80 leading-relaxed">
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">{post.description}</p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">Introduction</h2>
            <p>
              Le parcours entrepreneurial est parsemé de défis, mais aussi d'opportunités extraordinaires. Dans cet
              article, nous allons explorer les étapes essentielles qui vous permettront de transformer votre idée en
              une entreprise florissante.
            </p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">1. Valider Votre Concept</h2>
            <p>
              Avant de vous lancer tête baissée, il est crucial de valider que votre idée répond à un véritable besoin
              du marché. Menez des interviews avec vos clients potentiels, créez un MVP (Minimum Viable Product) et
              testez rapidement vos hypothèses.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg my-8">
              <p className="text-white/90 font-semibold mb-0">
                💡 <strong className="text-primary">Conseil Pro:</strong> Ne tombez pas amoureux de votre idée initiale.
                Soyez prêt à pivoter en fonction des retours du marché.
              </p>
            </div>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">
              2. Construire une Équipe Solide
            </h2>
            <p>
              Le succès d'une startup repose rarement sur une seule personne. Entourez-vous de co-fondateurs
              complémentaires qui partagent votre vision mais apportent des compétences différentes. La diversité des
              talents et des perspectives est un atout majeur.
            </p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">3. Lever des Fonds</h2>
            <p>
              Le financement est souvent l'un des plus grands obstacles pour les jeunes entrepreneurs. Explorez toutes
              les options: bootstrapping, business angels, crowdfunding, incubateurs, et venture capital. Chaque source
              de financement a ses avantages et ses contraintes.
            </p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">4. Lancer et Itérer</h2>
            <p>
              Ne visez pas la perfection dès le premier jour. Lancez rapidement, collectez des données, et améliorez
              continuellement votre produit. L'approche agile et le cycle build-measure-learn sont vos meilleurs alliés.
            </p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">5. Scaler Intelligemment</h2>
            <p>
              Une fois que vous avez trouvé votre product-market fit, il est temps de passer à l'échelle. Mais
              attention: la croissance doit être maîtrisée. Assurez-vous que vos processus, votre équipe et votre
              infrastructure peuvent supporter l'expansion.
            </p>

            <h2 className="text-3xl font-display font-black text-foreground mt-12 mb-6">Conclusion</h2>
            <p>
              Lancer une startup est un marathon, pas un sprint. Avec de la persévérance, une bonne stratégie, et le
              soutien d'une communauté comme YouthIn, vous pouvez transformer vos rêves entrepreneuriaux en réalité.
              N'oubliez pas: chaque grand succès a commencé par une simple idée et le courage de passer à l'action.
            </p>
          </div>
        </motion.article>

        {/* Author Card */}
        <motion.div
          className="max-w-3xl mx-auto mt-20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="card-primary p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                <User className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-black mb-2">{post.author}</h3>
                <p className="text-white/60 mb-4">
                  Entrepreneur passionné et mentor chez YouthIn. Spécialisé dans l'accompagnement des jeunes startups
                  tech en Afrique.
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 bg-transparent"
                  >
                    Suivre
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white/60 hover:text-primary hover:bg-primary/10">
                    Voir le profil
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="max-w-4xl mx-auto mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-primary/20 via-background to-background p-12 rounded-3xl border-2 border-primary/30 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-black mb-6">Prêt à Lancer Ton Projet?</h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Rejoins YouthIn et accède à un écosystème complet pour transformer tes idées en réalité
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-dark hover:bg-primary/90 glow-primary-intense font-black px-12 py-6 h-auto rounded-xl"
                >
                  <Link href="/download">Télécharger YouthIn</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
