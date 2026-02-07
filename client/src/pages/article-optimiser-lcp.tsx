import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, AlertTriangle, TrendingUp } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

export default function ArticleOptimiserLcp() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_optimiser_lcp', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Optimiser LCP < 1.5s sur WordPress : guide complet 2026",
    "description": "Guide complet pour optimiser le Largest Contentful Paint (LCP) sous 1.5s. 5 leviers essentiels + cas réels.",
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "datePublished": "2026-12-05",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert Hébergement WordPress & Cybersécurité",
      "sameAs": [
        "https://www.linkedin.com/in/bouhmou-rachid-cyber/",
        "https://twitter.com/jmorel_cyber"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      }
    },
    "publisher": { "@type": "Organization", "name": "WP Vitesse Pro" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <SEO
        image="https://wp-vitesse-pro.fr/images/optimiser-lcp-hero.webp"
        title="Optimiser LCP &lt; 1.5s sur WordPress : guide complet 2026"
        description="Comment optimiser le Largest Contentful Paint (LCP) sous 1.5s. 5 leviers essentiels, outils, cas réels. Guide WordPress 2026."
        canonical="https://wp-vitesse-pro.fr/article/optimiser-lcp"
        type="article"
        schema={schema}
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary">PERFORMANCE</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">6 min de lecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Optimiser LCP &lt; 1.5s sur WordPress : guide complet 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              LCP (Largest Contentful Paint) = LA métrique que Google utilise pour classer les sites. &lt;1.5s = "bon" = top du classement. Voici les 5 leviers pour y arriver.
            </p>
          </div>

          
          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/optimiser-lcp-hero.webp" type="image/webp" />
              <img 
                src="/images/optimiser-lcp-hero.png" 
                alt="Optimiser le Largest Contentful Paint (LCP)" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Guide technique pour optimiser la métrique LCP et améliorer vos Core Web Vitals
            </figcaption>
          </figure>
<Card className="mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    LCP &lt; 1.5s = +7-20% conversions
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Chaque 100ms gagnés = +1% conversions supplémentaires. LCP à 1.5s vs 2.5s = +7% de ventes directes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Les 5 Leviers d'Optimisation</h2>

            {[
              {
                num: 1,
                title: "Infrastructure Serveur Ultra-Rapide",
                impact: "TTFB -70%",
                content: "Le TTFB (Time To First Byte) = temps avant que le serveur commence à envoyer la réponse. C'est la fondation du LCP.",
                details: [
                  "• Bluehost/SiteGround : TTFB 500-800ms",
                  "• Kinsta (Google Cloud) : TTFB <200ms",
                  "= 3-4x plus rapide"
                ],
                solution: "Utiliser une infrastructure cloud performante (Kinsta = Google Cloud = meilleur TTFB)"
              },
              {
                num: 2,
                title: "CDN Enterprise Worldwide",
                impact: "Latence -60%",
                content: "Sans CDN, le contenu voyage depuis les USA/Europe. Avec CDN, il est servi depuis le cache proche de l'utilisateur.",
                details: [
                  "• Sans CDN : images depuis un serveur = 500-1000ms",
                  "• Avec Cloudflare Enterprise : cache mondial = 50-200ms",
                  "= Site BEAUCOUP plus rapide en Europe"
                ],
                solution: "Cloudflare Enterprise CDN (Kinsta l'inclut)"
              },
              {
                num: 3,
                title: "Cache Redis Optimisé",
                impact: "Requêtes BD -80%",
                content: "Sans cache, chaque requête passe par la base de données. Avec cache Redis, les réponses sont instantanées.",
                details: [
                  "• Sans cache : requête DB = 100-300ms",
                  "• Avec Redis : cache hit = 1-10ms",
                  "= Réponse 30-100x plus rapide"
                ],
                solution: "Activer le cache Redis (Kinsta le configure automatiquement)"
              },
              {
                num: 4,
                title: "Minification & Compression",
                impact: "Taille JS/CSS -50%",
                content: "Les fichiers JS/CSS gonflés ralentissent le chargement. Minifier = supprimer les espaces inutiles.",
                details: [
                  "• Avant minification : CSS 50KB, JS 100KB",
                  "• Après minification : CSS 15KB, JS 30KB",
                  "= 70% plus léger"
                ],
                solution: "Plugin Autoptimize ou WP Rocket (minification auto)"
              },
              {
                num: 5,
                title: "Images Optimisées + Lazy-Loading",
                impact: "Taille page -40%",
                content: "Les images non optimisées = 50-70% du poids de la page. Lazy-loading = charger que ce qui est visible.",
                details: [
                  "• Image JPG 5MB → PNG optimisé 200KB",
                  "• Lazy-loading : images en-dessous du fold ne chargent que quand on scroll",
                  "= Chargement initial drastiquement réduit"
                ],
                solution: "ShortPixel (compression auto) + plugin native lazy-load"
              }
            ].map((lever) => (
              <Card key={lever.num} className="mb-6 border-2">
                <CardHeader className="bg-primary/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {lever.num}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{lever.title}</CardTitle>
                        <p className="text-xs text-primary font-semibold mt-1">Impact: {lever.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">{lever.content}</p>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded mb-4 text-xs">
                    {lever.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-primary">✓ {lever.solution}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Cas Réel : Site Kinsta vs Bluehost</h2>
            <div className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">❌ Bluehost (Non Optimisé)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs">
                    <div className="flex justify-between"><span>TTFB :</span> <strong>650ms</strong></div>
                    <div className="flex justify-between"><span>LCP :</span> <strong>4.2s</strong></div>
                    <div className="flex justify-between"><span>PageSpeed :</span> <strong>42/100</strong></div>
                    <div className="flex justify-between"><span>Conversions :</span> <span className="text-red-600"><strong>-30%</strong></span></div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">✅ Kinsta (Optimisé)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs">
                    <div className="flex justify-between"><span>TTFB :</span> <strong>120ms</strong></div>
                    <div className="flex justify-between"><span>LCP :</span> <strong>1.1s</strong></div>
                    <div className="flex justify-between"><span>PageSpeed :</span> <strong>96/100</strong></div>
                    <div className="flex justify-between"><span>Conversions :</span> <span className="text-green-600"><strong>+20%</strong></span></div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground mt-4">
                <strong>Résultat :</strong> Kinsta = 3.8x plus rapide = +20% conversions = ROI énorme
              </p>
            </div>
          </section>

          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Erreurs Courantes à Éviter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">❌ Essayer d'optimiser sur un mauvais hébergeur</p>
                <p className="text-muted-foreground">Aucune optimisation ne peut compenser un mauvais hébergement. Le TTFB reste énorme.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">❌ Charger les polices depuis des CDN externes</p>
                <p className="text-muted-foreground">Google Fonts, TypeKit, etc. = requêtes externes lentes. Héberger les polices localement.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">❌ Trop de plugins</p>
                <p className="text-muted-foreground">Chaque plugin = plus de PHP, JS, CSS. Supprimer les inutilisés.</p>
              </div>
            </CardContent>
          </Card>

          <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              LCP &lt; 1.5s en Automatique avec Kinsta
            </h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">
              Pas besoin d'optimiser manuellement. Google Cloud + Redis + Cloudflare Enterprise = LCP &lt;1.5s d'office.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTAClick('final_cta')}
              data-testid="button-article-lcp-final-cta"
            >
              Atteindre LCP &lt; 1.5s Maintenant
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </section>
        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
