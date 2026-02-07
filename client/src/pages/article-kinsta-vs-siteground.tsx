import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, X } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

export default function ArticleKinstaVsSiteground() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_kinsta_vs_siteground', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    "headline": "Kinsta vs SiteGround 2026 : quel hébergeur WordPress choisir ?",
    "description": "Comparaison détaillée Kinsta vs SiteGround : performances, prix, support. Quel hébergeur pour votre site WordPress ?",
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
        image="https://wp-vitesse-pro.fr/images/kinsta-vs-siteground-hero.webp"
        title="Kinsta vs SiteGround 2026 : quel hébergeur WordPress choisir ?"
        description="Comparaison détaillée : Kinsta vs SiteGround. Performance, prix, support, features. Quel hébergeur pour votre WordPress ? Analyse complète."
        canonical="https://wp-vitesse-pro.fr/article/kinsta-vs-siteground"
        type="article"
        schema={schema}
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary">COMPARATIF</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">4 min de lecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kinsta vs SiteGround : quel hébergeur WordPress choisir en 2026 ?
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Deux grands noms de l'hébergement WordPress. Mais qui est vraiment le meilleur ? Comparaison honnête des performances, prix et support.
            </p>
          </div>

          {/* Quick Verdict */}
          
          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/kinsta-vs-siteground-hero.webp" type="image/webp" />
              <img 
                src="/images/kinsta-vs-siteground-hero.png" 
                alt="Kinsta vs SiteGround - Comparatif hébergement WordPress" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Comparaison détaillée entre Kinsta et SiteGround pour l'hébergement WordPress
            </figcaption>
          </figure>
<Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-lg mb-2">🏆 Meilleur pour Performance</p>
                  <p className="text-sm text-muted-foreground"><strong>Kinsta</strong> (LCP &lt;1.5s garantis)</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">💰 Meilleur Rapport Qualité/Prix</p>
                  <p className="text-sm text-muted-foreground"><strong>SiteGround</strong> (€2.99/mois vs €35+)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-semibold">Critère</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">Kinsta</th>
                  <th className="text-center py-3 px-4 font-semibold">SiteGround</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: "Performance (LCP)", kinsta: "<1.5s ⭐", siteground: "~2s" },
                  { criterion: "Infrastructure", kinsta: "Google Cloud", siteground: "Classique" },
                  { criterion: "CDN Inclus", kinsta: "Cloudflare Enterprise ✓", siteground: "Inclus basique" },
                  { criterion: "Prix de départ", kinsta: "€35/mois", siteground: "€2.99/mois" },
                  { criterion: "Migration", kinsta: "Gratuite gérée", siteground: "Gratuite gérée" },
                  { criterion: "Support Réponse", kinsta: "<2 minutes 24/7", siteground: "Chat 24/7" },
                  { criterion: "Support Expertise", kinsta: "Expert WordPress", siteground: "Général" },
                  { criterion: "Sauvegardes Auto", kinsta: "14 jours ✓", siteground: "30 jours (payant)" },
                  { criterion: "Uptime Garanti", kinsta: "99.9% ✓", siteground: "99.9% ✓" },
                  { criterion: "WAF/DDoS", kinsta: "Cloudflare Enterprise", siteground: "Basique" },
                  { criterion: "Staging Gratuit", kinsta: "Oui ✓", siteground: "Oui ✓" },
                  { criterion: "Git/SSH", kinsta: "Oui ✓", siteground: "Oui ✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{row.criterion}</td>
                    <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">{row.kinsta}</td>
                    <td className="text-center py-3 px-4">{row.siteground}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed Analysis */}
          <section className="space-y-8 mb-10">
            <Card>
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-lg">Performance & Vitesse</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold text-primary">Kinsta Gagne</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Google Cloud + Cloudflare Enterprise = <strong>3-4x plus rapide</strong> que SiteGround. LCP &lt;1.5s garanti vs 2-3s chez SiteGround.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-lg">Support & Assistance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold text-primary">Kinsta Gagne</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Experts WordPress dédiés, réponse &lt;2min 24/7. SiteGround : support généraliste, plus de temps d'attente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-lg">Prix & Budget</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold text-orange-600 dark:text-orange-400">SiteGround Gagne</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    SiteGround €2.99/mois vs Kinsta €35/mois. Mais calcul ROI : <strong>+20% conversions avec Kinsta = retour sur investissement en 1-2 mois</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-lg">Sécurité</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold text-primary">Kinsta Gagne</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    WAF Cloudflare Enterprise, isolation LXD complète, monitoring 24/7. SiteGround : sécurité standard (pas de WAF Enterprise).
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Scenarios */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Qui Choisir ?</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">👤 Débutant / Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>SiteGround</strong> : Interface simple, support accessible, bon rapport qualité/prix pour commencer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🚀 E-commerce / WooCommerce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Kinsta</strong> : Performance critique, chaque milliseconde = conversions. Vaut largement les €35/mois.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🏢 Agence / Multi-sites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Kinsta</strong> : Support expert, multisites optimisés, sécurité de haut niveau.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">💰 Budget Ultra Serré</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>SiteGround</strong> : Commence à €2.99/mois. Basculez vers Kinsta quand le site grandit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Notre Recommandation : Kinsta
            </h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">
              Oui, c'est plus cher. Mais la performance = conversions. Et les 30 premiers jours sont gratuits pour tester.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTAClick('final_cta')}
              data-testid="button-article-comparatif-final-cta"
            >
              Essayer Kinsta Gratuitement
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </section>
        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
