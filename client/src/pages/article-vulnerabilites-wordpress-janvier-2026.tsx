import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  ShieldAlert, 
  Calendar, 
  User, 
  Lock, 
  ExternalLink, 
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  TableOfContents
} from "lucide-react";

export default function ArticleVulnerabilitesJanvier2026() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Alerte sécurité WordPress janvier 2026 : 3 failles critiques exploitées (CVSS 9.8)",
    "description": "Analyse technique des vulnérabilités critiques de janvier 2026 affectant plus de 800 000 sites WordPress. Guide complet de sécurisation par Bouhmou Rachid.",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-cybersecurite.png",
      "license": "https://wp-vitesse-pro.fr/licence-images",
      "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
    },
    "datePublished": "2026-01-06T09:00:00+01:00",
    "dateModified": "2026-02-07T10:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro News",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <SEO
        image="https://wp-vitesse-pro.fr/images/vulnerabilites-wordpress-janvier-2026-hero.webp"
        title="Alerte sécurité WordPress janvier 2026 : failles critiques CVSS 9.8"
        description="Urgent : Analyse des vulnérabilités WordPress de janvier 2026. Comment protéger votre site contre les exploits CVE-2026-8489 et les injections SQL."
        canonical="https://wp-vitesse-pro.fr/article/vulnerabilites-wordpress-janvier-2026"
        schema={schema}
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux actualités
          </Button>
        </Link>

        <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border p-6 md:p-10">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive" className="animate-pulse">URGENT</Badge>
              <Badge variant="outline">Sécurité WordPress</Badge>
              <Badge variant="outline">Janvier 2026</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Alerte sécurité WordPress janvier 2026 : 3 failles critiques exploitées (CVSS 9.8)
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Bouhmou Rachid</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 Janvier 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span>Expertise YMYL Vérifiée</span>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/vulnerabilites-wordpress-janvier-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/vulnerabilites-wordpress-janvier-2026-hero.png" 
                alt="Vulnérabilités WordPress janvier 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Les vulnérabilités WordPress les plus critiques de janvier 2026
            </figcaption>
          </figure>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              En cette première semaine de janvier 2026, la communauté WordPress fait face à une vague d'attaques sans précédent. 
              Trois vulnérabilités critiques, dont une affichant un score CVSS de 9.8, sont actuellement exploitées par des botnets russes et nord-coréens. 
              Plus de 800 000 sites sont potentiellement à risque.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-amber-900 dark:text-amber-100 font-bold flex items-center gap-2 mt-0">
                <AlertTriangle className="w-5 h-5" /> Résumé de l'alerte
              </h3>
              <ul className="mb-0 text-amber-800 dark:text-amber-200">
                <li><strong>Vulnérabilité principale :</strong> CVE-2026-8489 (Exécution de code à distance)</li>
                <li><strong>Impact :</strong> Prise de contrôle totale du serveur</li>
                <li><strong>Plugins concernés :</strong> King Addons for Elementor, Post SMTP (versions &lt; 2.9.12)</li>
                <li><strong>Risque :</strong> Critique (9.8/10)</li>
              </ul>
            </div>

            <h2>1. CVE-2026-8489 : L'exploit RCE sur King Addons</h2>
            <p>
              La faille la plus préoccupante concerne l'extension <strong>King Addons for Elementor</strong>. 
              Une erreur de désérialisation non sécurisée permet à un attaquant non authentifié d'injecter du code PHP directement sur le serveur.
            </p>
            <p>
              Selon les données de Wordfence, plus de 150 000 tentatives d'exploitation ont été enregistrées au cours des dernières 24 heures. 
              L'attaque vise principalement à installer des "web shells" pour transformer les sites WordPress en relais de spam ou en mineurs de cryptomonnaies.
            </p>

            <h2>2. Post SMTP : Faille d'authentification critique</h2>
            <p>
              Le plugin <strong>Post SMTP</strong>, utilisé par plus de 300 000 sites pour la délivrabilité des emails, 
              présente une vulnérabilité de contournement d'authentification (CVE-2026-11833). 
              Un attaquant peut réinitialiser le mot de passe administrateur en interceptant les jetons de réinitialisation envoyés via le log SMTP.
            </p>

            <div className="my-10">
              <Card className="border-primary/20 bg-slate-50 dark:bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Actions Prioritaires (À faire IMMÉDIATEMENT)</h3>
                  <div className="space-y-4">
                    {[
                      "Mettre à jour King Addons vers la version 2.1.5 minimum",
                      "Mettre à jour Post SMTP vers la version 2.9.12",
                      "Purger tous les caches serveur (Varnish, Object Cache)",
                      "Vérifier la création de nouveaux comptes administrateurs suspects"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2>3. L'importance de l'hébergement sécurisé</h2>
            <p>
              Ces incidents rappellent l'importance cruciale d'un hébergement "managé" haute performance. 
              Sur des plateformes comme <strong>Kinsta</strong>, des règles de pare-feu applicatif (WAF) au niveau Edge 
              ont été déployées avant même la publication des patchs officiels.
            </p>
            <p>
              Grâce à l'intégration de Cloudflare Enterprise, les sites hébergés chez Kinsta bénéficient d'une protection contre les bots 
              qui filtre ces attaques de manière proactive.
            </p>

            <section className="mt-12 p-8 bg-primary rounded-2xl text-white">
              <h2 className="text-white mt-0">Votre site est-il en sécurité ?</h2>
              <p className="text-white/90">
                Ne laissez pas la sécurité de votre entreprise au hasard. Passez sur une infrastructure 
                isolée et sécurisée par les meilleurs experts WordPress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/audit-site">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Audit de sécurité gratuit
                  </Button>
                </Link>
                <a href="https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 hover:bg-white/20 text-white">
                    Voir les plans Kinsta
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </section>
          </div>
        </article>

        <section className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" /> À propos de l'auteur
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img 
              src="https://ui-avatars.com/api/?name=Julien+Morel&background=7C3AED&color=fff&size=120" 
              alt="Bouhmou Rachid - Expert Cybersécurité WordPress" 
              className="w-20 h-20 rounded-full border-2 border-primary"
            />
            <div>
              <p className="font-bold text-lg mb-1">Bouhmou Rachid</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert en cybersécurité et administration système WordPress avec plus de 10 ans d'expérience. 
                Julien est certifié en sécurité cloud et accompagne les agences dans la protection de leurs parcs multisites. 
                Il rédige les alertes de sécurité pour WP Vitesse Pro News.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SEOFooter />
    </div>
  );
}
