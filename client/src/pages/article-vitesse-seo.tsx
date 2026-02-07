import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Globe, 
  Search, 
  Clock, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  CheckCircle2,
  AlertTriangle,
  Target,
  Smartphone,
  Server,
  Gauge
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

export default function ArticleVitesseSEO() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_vitesse_seo', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vitesse de site web et SEO : le guide ultime pour dominer Google en 2026",
    "description": "Découvrez pourquoi la vitesse de chargement est le facteur SEO #1 en 2026. Core Web Vitals, impact sur le référencement, solutions concrètes pour un site ultra-rapide.",
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "datePublished": "2026-12-06",
    "dateModified": "2026-02-07T10:00:00+01:00",
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
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/vitesse-seo"
    },
    "keywords": "vitesse site web, SEO, Core Web Vitals, LCP, FID, CLS, référencement Google, performance web, temps de chargement",
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "articleSection": "SEO & Performance"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelle est la vitesse de chargement idéale pour le SEO ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google recommande un temps de chargement inférieur à 2.5 secondes pour le LCP (Largest Contentful Paint). Idéalement, visez moins de 1.5 seconde pour un avantage SEO significatif. Les sites chargeant en moins de 1 seconde ont 3x plus de chances d'être en première page."
        }
      },
      {
        "@type": "Question",
        "name": "Comment la vitesse impacte-t-elle le référencement Google ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La vitesse est un facteur de ranking officiel depuis 2010 (desktop) et 2018 (mobile). Depuis 2021, les Core Web Vitals (LCP, FID, CLS) sont intégrés aux signaux de classement. Un site lent = moins de pages crawlées, taux de rebond plus élevé, et positions inférieures."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que les Core Web Vitals et pourquoi sont-ils importants ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les Core Web Vitals sont 3 métriques Google : LCP (vitesse d'affichage du contenu principal, < 2.5s), FID/INP (réactivité aux interactions, < 100ms), et CLS (stabilité visuelle, < 0.1). Ils représentent 15-20% du score de ranking selon les études."
        }
      },
      {
        "@type": "Question",
        "name": "Un hébergement rapide améliore-t-il vraiment le SEO ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. L'hébergement représente 40-60% du temps de réponse total. Un serveur premium comme Kinsta (Google Cloud + CDN Cloudflare) peut réduire le TTFB de 800ms à 100ms, impactant directement LCP et le crawl budget Google."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est l'impact de la vitesse sur les conversions ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amazon a calculé qu'1 seconde de délai = -7% de conversions. Pour un site e-commerce à 100 000€/mois, c'est 7 000€ perdus. Google rapporte que 53% des visiteurs mobiles quittent un site qui met plus de 3 secondes à charger."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment optimiser la vitesse de son site pour le SEO",
    "description": "Guide étape par étape pour améliorer la vitesse de chargement et le référencement de votre site web",
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0-50"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mesurer les performances actuelles",
        "text": "Utilisez Google PageSpeed Insights, GTmetrix ou Lighthouse pour établir un baseline de vos Core Web Vitals (LCP, FID, CLS)."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Optimiser les images",
        "text": "Convertissez en WebP, compressez sans perte, ajoutez lazy loading et dimensions explicites pour éviter le CLS."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Activer la mise en cache",
        "text": "Configurez le cache navigateur et serveur. Utilisez un CDN pour distribuer le contenu globalement."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Optimiser le code",
        "text": "Minifiez CSS/JS, éliminez le code inutilisé, différez le JavaScript non-critique, inlinez le CSS critique."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Choisir un hébergement performant",
        "text": "Migrez vers un hébergement premium avec serveurs optimisés, SSD NVMe, HTTP/3 et CDN intégré comme Kinsta."
      }
    ]
  };

  const combinedSchema = [articleSchema, faqSchema, howToSchema];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        image="https://wp-vitesse-pro.fr/images/vitesse-seo-hero.webp"
        title="Vitesse de site web et SEO : le guide ultime 2026 | Core Web Vitals"
        description="Découvrez pourquoi la vitesse est le facteur SEO #1 en 2026. Core Web Vitals, LCP, impact Google, solutions concrètes. Guide complet pour dominer les SERPs."
        canonical="https://wp-vitesse-pro.fr/article/vitesse-seo"
        type="article"
        schema={combinedSchema}
      />
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                SEO & PERFORMANCE
              </Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">18 min de lecture</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Mis à jour : Décembre 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-article">
              Vitesse de site web et SEO : le guide ultime pour dominer Google en 2026
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              La vitesse de chargement n'est plus un luxe, c'est <strong>LE facteur SEO différenciateur</strong>. 
              Découvrez comment les Core Web Vitals impactent votre référencement et les solutions pour 
              transformer votre site en machine à ranking.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Core Web Vitals", "LCP", "SEO 2026", "Google Ranking", "Performance Web"].map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/vitesse-seo-hero.webp" type="image/webp" />
              <img 
                src="/images/vitesse-seo-hero.png" 
                alt="Vitesse de site et SEO - Impact sur le référencement" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Comment la vitesse de votre site impacte directement votre référencement SEO
            </figcaption>
          </figure>

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-10">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-red-900 dark:text-red-100 mb-2 text-lg">
                  Statistique choc : 53% des visiteurs partent après 3 secondes
                </h2>
                <p className="text-red-800 dark:text-red-200">
                  Google révèle que plus de la moitié des utilisateurs mobiles abandonnent un site 
                  qui met plus de 3 secondes à charger. Chaque seconde compte pour votre SEO ET vos revenus.
                </p>
              </div>
            </div>
          </div>

          <nav className="bg-muted/50 rounded-lg p-6 mb-10 border" aria-label="Table des matières">
            <h2 className="font-bold mb-4 text-lg">Sommaire de l'article</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#pourquoi-vitesse" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Pourquoi la vitesse est cruciale pour le SEO</a></li>
              <li><a href="#core-web-vitals" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Core Web Vitals : Les 3 métriques qui comptent</a></li>
              <li><a href="#impact-seo" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Impact concret sur le référencement Google</a></li>
              <li><a href="#impact-business" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Impact sur les conversions et le chiffre d'affaires</a></li>
              <li><a href="#optimisation" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> 10 techniques d'optimisation avancées</a></li>
              <li><a href="#hebergement" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Le rôle crucial de l'hébergement</a></li>
              <li><a href="#outils" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Outils de mesure et monitoring</a></li>
              <li><a href="#faq" className="text-primary hover:underline flex items-center gap-2"><CheckCircle2 className="w-4 h-4" aria-hidden="true" /> FAQ</a></li>
            </ul>
          </nav>

          <section id="pourquoi-vitesse" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Pourquoi la Vitesse est Cruciale pour le SEO</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depuis 2010, Google a officiellement intégré la vitesse comme facteur de ranking. 
                En 2018, cette importance s'est étendue au mobile avec le "Speed Update". 
                Et depuis 2021, les <strong>Core Web Vitals</strong> sont devenus des signaux de 
                classement à part entière dans l'algorithme de Google.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2010</div>
                    <p className="text-sm text-muted-foreground">Vitesse = facteur SEO desktop</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2018</div>
                    <p className="text-sm text-muted-foreground">Speed Update mobile</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2021</div>
                    <p className="text-sm text-muted-foreground">Core Web Vitals officiels</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mb-4">Les 4 raisons fondamentales</h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">1. Expérience utilisateur</h4>
                    <p className="text-muted-foreground text-sm">
                      Google veut offrir les meilleurs résultats. Un site lent = mauvaise expérience = 
                      Google ne veut pas l'afficher en premier.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <Search className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">2. Crawl Budget</h4>
                    <p className="text-muted-foreground text-sm">
                      Googlebot a un temps limité par site. Un site lent = moins de pages crawlées = 
                      moins de pages indexées = moins de trafic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">3. Taux de rebond</h4>
                    <p className="text-muted-foreground text-sm">
                      Un visiteur qui quitte immédiatement envoie un signal négatif à Google. 
                      Site lent = rebond élevé = positions qui chutent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold mb-1">4. Mobile-First Indexing</h4>
                    <p className="text-muted-foreground text-sm">
                      Google indexe d'abord la version mobile. Sur mobile, la vitesse est encore 
                      plus critique (connexions variables, CPU limité).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="core-web-vitals" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Core Web Vitals : Les 3 Métriques Qui Comptent</h2>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Les Core Web Vitals sont un ensemble de métriques réelles mesurant l'expérience utilisateur. 
              Google les utilise directement dans son algorithme de ranking depuis mai 2021.
            </p>

            <div className="grid gap-6 mb-8">
              <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                      <Gauge className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">LCP - Largest Contentful Paint</h3>
                        <Badge className="bg-green-600">Critique</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Mesure le temps d'affichage du plus grand élément visible (image hero, titre principal).
                        C'est la métrique de <strong>vitesse perçue</strong> la plus importante.
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                          <div className="font-bold text-green-700 dark:text-green-300">&lt; 2.5s</div>
                          <div className="text-xs text-muted-foreground">Bon</div>
                        </div>
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                          <div className="font-bold text-yellow-700 dark:text-yellow-300">2.5s - 4s</div>
                          <div className="text-xs text-muted-foreground">À améliorer</div>
                        </div>
                        <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                          <div className="font-bold text-red-700 dark:text-red-300">&gt; 4s</div>
                          <div className="text-xs text-muted-foreground">Mauvais</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                      <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">INP - Interaction to Next Paint</h3>
                        <Badge className="bg-blue-600">Remplace FID</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Mesure la réactivité aux interactions utilisateur (clics, touches, saisie clavier).
                        Remplace le FID depuis mars 2026 pour une mesure plus complète.
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                          <div className="font-bold text-green-700 dark:text-green-300">&lt; 200ms</div>
                          <div className="text-xs text-muted-foreground">Bon</div>
                        </div>
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                          <div className="font-bold text-yellow-700 dark:text-yellow-300">200-500ms</div>
                          <div className="text-xs text-muted-foreground">À améliorer</div>
                        </div>
                        <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                          <div className="font-bold text-red-700 dark:text-red-300">&gt; 500ms</div>
                          <div className="text-xs text-muted-foreground">Mauvais</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                      <Target className="w-6 h-6 text-purple-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">CLS - Cumulative Layout Shift</h3>
                        <Badge className="bg-purple-600">Stabilité</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Mesure la stabilité visuelle de la page. Les éléments qui "sautent" pendant 
                        le chargement frustrent les utilisateurs et pénalisent le SEO.
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                          <div className="font-bold text-green-700 dark:text-green-300">&lt; 0.1</div>
                          <div className="text-xs text-muted-foreground">Bon</div>
                        </div>
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                          <div className="font-bold text-yellow-700 dark:text-yellow-300">0.1 - 0.25</div>
                          <div className="text-xs text-muted-foreground">À améliorer</div>
                        </div>
                        <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                          <div className="font-bold text-red-700 dark:text-red-300">&gt; 0.25</div>
                          <div className="text-xs text-muted-foreground">Mauvais</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="impact-seo" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Impact Concret sur le Référencement Google</h2>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" aria-hidden="true" />
                Études et données réelles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">+15-20%</div>
                  <p className="text-sm text-muted-foreground">
                    Poids des Core Web Vitals dans l'algorithme de ranking selon les études SEO
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">3x</div>
                  <p className="text-sm text-muted-foreground">
                    Plus de chances d'être en page 1 avec un site chargeant en moins de 1 seconde
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">-25%</div>
                  <p className="text-sm text-muted-foreground">
                    Réduction du taux de rebond observée après optimisation des Core Web Vitals
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">+30%</div>
                  <p className="text-sm text-muted-foreground">
                    Augmentation du crawl budget Google après amélioration du TTFB
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4">Corrélation vitesse / positions Google</h3>
              <p className="text-muted-foreground mb-6">
                Plusieurs études majeures (Backlinko, Ahrefs, SEMrush) ont analysé des millions de résultats 
                Google et confirment une <strong>corrélation forte entre vitesse et positions</strong> :
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Les sites en position 1-3 chargent en moyenne 1.65 seconde</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Les sites en position 7-10 chargent en moyenne 2.45 secondes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>94% des résultats en top 3 passent les Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Le TTFB moyen des top 10 est de 420ms vs 1200ms pour les autres</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="impact-business" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Impact sur les Conversions et le Chiffre d'Affaires</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <ShoppingCart className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-3">E-commerce : chaque seconde compte</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Amazon : +1s = -7% de conversions (= $1.6 milliard/an)</li>
                    <li>• Walmart : +1s chargement = -2% de conversions</li>
                    <li>• Pinterest : -40% temps attente = +15% inscriptions</li>
                    <li>• BBC : +1s = -10% d'utilisateurs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-3">Mobile : l'enjeu crucial</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 53% quittent après 3 secondes (Google)</li>
                    <li>• 70% du trafic web est mobile en 2026</li>
                    <li>• Mobile = connexions plus lentes, CPU limité</li>
                    <li>• Mobile-First Indexing = Google juge sur mobile</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-3">
                Calcul ROI : combien vous perdez ?
              </h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm mb-4">
                Formule simple : <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
                CA mensuel × 7% × nombre de secondes au-delà de 1s</code>
              </p>
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                Exemple : Site e-commerce à 50 000€/mois chargeant en 4 secondes :<br />
                50 000€ × 7% × 3 = <strong>10 500€ perdus chaque mois</strong>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 md:p-8 text-white mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Prêt à accélérer votre site ?
                </h3>
                <p className="text-white/90">
                  Kinsta : temps de réponse &lt; 200ms, CDN global, support expert 24/7.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg whitespace-nowrap"
                onClick={() => handleCTAClick('middle_cta')}
                data-testid="button-article-cta-middle"
              >
                Découvrir Kinsta
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <section id="optimisation" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">10 Techniques d'Optimisation Avancées</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Optimisation des images",
                  desc: "Format WebP/AVIF, compression intelligente, lazy loading, dimensions explicites pour éviter le CLS.",
                  impact: "LCP -40%, CLS amélioré"
                },
                {
                  num: "02",
                  title: "CSS critique inline",
                  desc: "Inlinez le CSS au-dessus de la ligne de flottaison, différez le reste pour éviter le render-blocking.",
                  impact: "LCP -30%"
                },
                {
                  num: "03",
                  title: "JavaScript différé",
                  desc: "Utilisez defer/async, éliminez le code inutilisé, code splitting pour les grandes applications.",
                  impact: "INP amélioré, LCP -20%"
                },
                {
                  num: "04",
                  title: "Préchargement intelligent",
                  desc: "Preconnect pour les domaines tiers, preload pour les ressources critiques (fonts, images hero).",
                  impact: "LCP -15%"
                },
                {
                  num: "05",
                  title: "Cache navigateur agressif",
                  desc: "Headers Cache-Control optimisés, versioning des assets, service workers pour offline.",
                  impact: "Chargements suivants instantanés"
                },
                {
                  num: "06",
                  title: "CDN global",
                  desc: "Contenu distribué sur des serveurs proches de chaque visiteur. Essentiel pour l'audience internationale.",
                  impact: "TTFB -60%, LCP amélioré"
                },
                {
                  num: "07",
                  title: "Compression Brotli/Gzip",
                  desc: "Compression du texte (HTML, CSS, JS). Brotli est 15-25% plus efficace que Gzip.",
                  impact: "Taille -70%"
                },
                {
                  num: "08",
                  title: "HTTP/3 et QUIC",
                  desc: "Nouveau protocole plus rapide, moins de latence, meilleure gestion des connexions.",
                  impact: "TTFB -10-15%"
                },
                {
                  num: "09",
                  title: "Optimisation base de données",
                  desc: "Indexation, nettoyage des révisions, optimisation des requêtes. Critique pour WordPress.",
                  impact: "TTFB -30%"
                },
                {
                  num: "10",
                  title: "Hébergement premium",
                  desc: "Infrastructure Google Cloud/AWS, SSD NVMe, PHP 8.x, cache objet Redis/Memcached.",
                  impact: "TTFB de 800ms à 100ms"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="text-2xl font-bold text-primary/30">{item.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                    <Badge variant="outline" className="text-xs">{item.impact}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="hebergement" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Le Rôle Crucial de l'Hébergement</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                L'hébergement est le <strong>fondement de la performance</strong>. Même avec toutes les 
                optimisations du monde, un hébergeur lent limitera toujours vos résultats. 
                Le TTFB (Time To First Byte) dépend directement de votre serveur.
              </p>
            </div>

            <Card className="border-2 border-primary bg-primary/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Server className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg mb-3">Pourquoi Kinsta pour la performance ?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>Infrastructure Google Cloud Premium</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>CDN Cloudflare Enterprise (260+ PoPs)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>TTFB moyen : 100-150ms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>Edge Caching pour contenu dynamique</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>HTTP/3 et Early Hints</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>PHP 8.3 + OPcache</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>Redis cache objet inclus</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                          <span>APM intégré pour monitoring</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 gradient-cta text-white"
                      onClick={() => handleCTAClick('hosting_section')}
                      data-testid="button-article-cta-hosting"
                    >
                      Tester Kinsta gratuitement
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="outils" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Outils de Mesure et Monitoring</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { name: "Google PageSpeed Insights", desc: "Outil officiel Google, données réelles + lab", free: true },
                { name: "Google Search Console", desc: "Rapport Core Web Vitals pour votre site", free: true },
                { name: "GTmetrix", desc: "Analyse détaillée avec waterfall", free: true },
                { name: "WebPageTest", desc: "Tests multi-localisation, filmstrips", free: true },
                { name: "Lighthouse (Chrome DevTools)", desc: "Audit complet performance, SEO, accessibilité", free: true },
                { name: "Kinsta APM", desc: "Monitoring applicatif intégré", free: false }
              ].map((tool, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{tool.name}</h3>
                      <Badge variant={tool.free ? "secondary" : "default"}>
                        {tool.free ? "Gratuit" : "Premium"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true"></div>
              <h2 className="text-2xl md:text-3xl font-bold">Questions Fréquentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Quelle est la vitesse de chargement idéale pour le SEO ?",
                  a: "Google recommande un LCP inférieur à 2.5 secondes. Idéalement, visez moins de 1.5 seconde pour un avantage SEO significatif. Les sites chargeant en moins de 1 seconde ont 3x plus de chances d'être en première page."
                },
                {
                  q: "Comment la vitesse impacte-t-elle le référencement Google ?",
                  a: "La vitesse est un facteur de ranking officiel depuis 2010 (desktop) et 2018 (mobile). Depuis 2021, les Core Web Vitals sont intégrés aux signaux de classement. Un site lent = moins de pages crawlées, taux de rebond plus élevé, et positions inférieures."
                },
                {
                  q: "Qu'est-ce que les Core Web Vitals et pourquoi sont-ils importants ?",
                  a: "Les Core Web Vitals sont 3 métriques Google : LCP (vitesse d'affichage, < 2.5s), INP (réactivité, < 200ms), et CLS (stabilité visuelle, < 0.1). Ils représentent 15-20% du score de ranking selon les études."
                },
                {
                  q: "Un hébergement rapide améliore-t-il vraiment le SEO ?",
                  a: "Absolument. L'hébergement représente 40-60% du temps de réponse total. Un serveur premium comme Kinsta peut réduire le TTFB de 800ms à 100ms, impactant directement LCP et le crawl budget Google."
                },
                {
                  q: "Quel est l'impact de la vitesse sur les conversions ?",
                  a: "Amazon a calculé qu'1 seconde de délai = -7% de conversions. Pour un site e-commerce à 100 000€/mois, c'est 7 000€ perdus. Google rapporte que 53% des visiteurs mobiles quittent un site qui met plus de 3 secondes à charger."
                }
              ].map((faq, index) => (
                <details key={index} className="group border rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:bg-muted/50">
                    {faq.q}
                    <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 md:p-8 text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Passez à l'action maintenant
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Ne laissez plus la lenteur de votre site nuire à votre SEO et vos conversions. 
                Kinsta offre la performance premium dont vous avez besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
                  onClick={() => handleCTAClick('footer_cta')}
                  data-testid="button-article-cta-footer"
                >
                  Découvrir Kinsta
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/audit-site">
                    Auditer mon site gratuitement
                  </a>
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Migration gratuite • Support 24/7 • Garantie 30 jours
              </p>
            </div>
          </section>

        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
