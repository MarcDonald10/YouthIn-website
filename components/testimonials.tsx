"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Amina K.",
    role: "Fondatrice, EcoTech Solutions",
    content:
      "YouthIn m'a permis de trouver les mentors et le financement dont j'avais besoin pour lancer mon entreprise de technologie verte. Une plateforme incroyable qui change vraiment la donne !",
    image: "/young-african-woman-entrepreneur-smiling.jpg",
    rating: 5,
  },
  {
    name: "Malik B.",
    role: "Développeur, AppGen",
    content:
      "La communauté YouthIn est exceptionnelle. J'ai trouvé des collaborateurs talentueux, des conseils précieux et du soutien constant pour mon projet d'application mobile.",
    image: "/young-african-male-developer-coding.jpg",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Artiste Sociale",
    content:
      "Grâce à YouthIn, j'ai pu financer mon projet d'art communautaire et toucher des milliers de jeunes. C'est plus qu'une plateforme, c'est un véritable mouvement de transformation !",
    image: "/young-woman-artist-creative.jpg",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary-light relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star size={16} className="fill-primary" />
            <span className="text-sm font-semibold">Témoignages</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6">
            Ils Nous Font <span className="text-primary">Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment YouthIn transforme la vie de jeunes entrepreneurs partout dans le monde
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all h-full relative overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={80} className="text-primary" />
                </div>

                <div className="relative z-10">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-foreground leading-relaxed mb-8 text-lg">{testimonial.content}</p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
