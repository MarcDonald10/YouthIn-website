"use client"

import Link from "next/link"
import { Facebook, X, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex gap-3 items-center group mb-4">
              <div className="relative w-50 h-15 flex items-center">
                <Image
                  src="/logo/logo-green.png"
                  alt="YouthIn Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              La plateforme mobile qui transforme les jeunes innovateurs d'aujourd'hui en leaders de demain.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: X, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-border hover:border-primary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "À Propos", href: "/about" },
                { label: "Fonctionnalités", href: "/features" },
                { label: "Communauté", href: "/community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">Ressources</h4>
            <ul className="space-y-3">
              {[
                { label: "Mentorat", href: "/mentorship" },
                { label: "Financement", href: "/crowdfunding" },
                { label: "Investisseurs", href: "/investors" },
                { label: "Télécharger", href: "/download" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@youthin.app" className="hover:text-primary transition-colors">
                  contact@youthin.app
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>............</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} YouthIn. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    </footer>
  )
}
