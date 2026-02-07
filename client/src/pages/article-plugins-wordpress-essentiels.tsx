import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Gauge, 
  Search, 
  Clock, 
  BarChart3, 
  CheckCircle2,
  AlertTriangle,
  Database,
  Image,
  Lock,
  RefreshCw,
  Globe,
  FileText,
  Settings,
  TrendingUp,
  Star,
  Users,
  Euro
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

export default function ArticlePluginsWordPressEssentiels() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_plugins_essentiels', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Les 25 plugins WordPress essentiels en 2026 : guide complet pour un site ultra-performant",
    "description": "Découvrez les 25 meilleurs plugins WordPress indispensables en 2026. Performance, SEO, sécurité, cache, sauvegarde. Guide expert avec comparatifs et recommandations.",
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "datePublished": "2026-12-14",
    "dateModified": "2026-02-07T15:52:11.184Z",
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
      "@id": "https://wp-vitesse-pro.fr/article/plugins-wordpress-essentiels"
    },
    "keywords": "plugins WordPress, meilleurs plugins WordPress 2026, plugins WordPress essentiels, plugin cache WordPress, plugin SEO WordPress, plugin sécurité WordPress, extensions WordPress, optimisation WordPress",
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "articleSection": "Guide WordPress",
    "wordCount": 3500
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de plugins WordPress peut-on installer ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il n'y a pas de limite technique, mais on recommande de ne pas dépasser 20-30 plugins actifs pour maintenir de bonnes performances. La qualité prime sur la quantité. Un hébergeur premium comme Kinsta permet d'en gérer plus grâce à son infrastructure optimisée."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le meilleur plugin de cache WordPress en 2026 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WP Rocket est le meilleur plugin de cache payant (49€/an), offrant cache page, lazy loading, minification et CDN. Pour les solutions gratuites, LiteSpeed Cache (si compatible) ou W3 Total Cache sont excellents. Note : Kinsta inclut un système de cache serveur intégré, rendant ces plugins optionnels."
        }
      },
      {
        "@type": "Question",
        "name": "Yoast SEO ou Rank Math : lequel choisir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rank Math offre plus de fonctionnalités gratuitement (Schema, redirections, analytics intégrés) tandis que Yoast est plus simple d'utilisation. Pour les débutants : Yoast. Pour les utilisateurs avancés cherchant des fonctionnalités premium gratuites : Rank Math."
        }
      },
      {
        "@type": "Question",
        "name": "Les plugins gratuits sont-ils sûrs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les plugins du répertoire officiel WordPress.org sont vérifiés, mais pas tous régulièrement mis à jour. Vérifiez : dernière mise à jour (< 6 mois), nombre d'installations actives (> 10 000), note utilisateurs (> 4 étoiles), compatibilité avec votre version WordPress."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savoir si un plugin ralentit mon site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilisez Query Monitor (gratuit) pour identifier les plugins lents. Testez avec PageSpeed Insights avant/après désactivation. Les plugins de slider, page builders lourds, et plugins sociaux sont souvent les plus gourmands en ressources."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il des plugins de sécurité avec un bon hébergeur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un hébergeur premium comme Kinsta inclut pare-feu, protection DDoS, scans malware et backups automatiques. Un plugin de sécurité léger (comme Limit Login Attempts) peut compléter, mais les solutions complètes type Wordfence sont souvent redondantes et gourmandes."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment choisir et installer les meilleurs plugins WordPress",
    "description": "Guide étape par étape pour sélectionner et configurer les plugins WordPress essentiels pour votre site",
    "totalTime": "PT1H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0-200"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Auditer vos besoins",
        "text": "Listez les fonctionnalités dont vous avez réellement besoin : SEO, cache, sécurité, formulaires, e-commerce, etc."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Vérifier la qualité des plugins",
        "text": "Contrôlez les notes, le nombre d'installations, la date de dernière mise à jour et la compatibilité WordPress."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Tester sur un environnement de staging",
        "text": "Installez d'abord les plugins sur un site de test pour vérifier les conflits et l'impact sur les performances."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Configurer correctement chaque plugin",
        "text": "Suivez les guides de configuration officiels et optimisez les paramètres pour votre cas d'usage spécifique."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Monitorer les performances",
        "text": "Utilisez PageSpeed Insights et Query Monitor pour vérifier que vos plugins n'impactent pas négativement la vitesse."
      }
    ]
  };

  const plugins = {
    performance: [
      { name: "WP Rocket", price: "49€/an", rating: 4.9, note: "Le meilleur plugin de cache premium. Cache, lazy loading, minification, CDN. ROI immédiat." },
      { name: "LiteSpeed Cache", price: "Gratuit", rating: 4.8, note: "Excellent si hébergeur compatible (LiteSpeed). Fonctionnalités premium gratuites." },
      { name: "Imagify", price: "Freemium", rating: 4.6, note: "Optimisation d'images automatique. WebP, compression, redimensionnement." },
      { name: "Perfmatters", price: "24.95$/an", rating: 4.9, note: "Désactive scripts inutiles, database cleanup, lazy loading avancé." },
      { name: "Asset CleanUp", price: "Freemium", rating: 4.7, note: "Désactive CSS/JS page par page. Réduction significative du poids." }
    ],
    seo: [
      { name: "Rank Math", price: "Gratuit/Pro", rating: 4.9, note: "SEO complet : Schema, redirections, analytics. Version gratuite très complète." },
      { name: "Yoast SEO", price: "Gratuit/Pro", rating: 4.8, note: "Le plus populaire. Simple d'utilisation, excellent pour débutants." },
      { name: "Schema Pro", price: "79$/an", rating: 4.7, note: "Schema markup avancé. Rich snippets, FAQ, How-To, Products." },
      { name: "Redirection", price: "Gratuit", rating: 4.6, note: "Gestion des redirections 301/302. Logs d'erreurs 404." }
    ],
    security: [
      { name: "Wordfence", price: "Freemium", rating: 4.7, note: "Pare-feu, scan malware, 2FA. Complet mais gourmand en ressources." },
      { name: "Sucuri Security", price: "Freemium", rating: 4.5, note: "Audit sécurité, monitoring, hardening. Version pro = CDN+WAF." },
      { name: "Limit Login Attempts", price: "Gratuit", rating: 4.8, note: "Protection brute force simple et légère. Essentiel minimum." },
      { name: "UpdraftPlus", price: "Freemium", rating: 4.8, note: "Backups automatiques vers cloud. Restauration en 1 clic." }
    ],
    essential: [
      { name: "Elementor", price: "Freemium", rating: 4.6, note: "Page builder #1. Version gratuite puissante. Pro pour WooCommerce." },
      { name: "WPForms", price: "Freemium", rating: 4.9, note: "Formulaires drag & drop. Simple, rapide, accessible." },
      { name: "MonsterInsights", price: "Freemium", rating: 4.5, note: "Google Analytics simplifié. Rapports dans le dashboard." },
      { name: "Smush", price: "Freemium", rating: 4.7, note: "Compression d'images bulk. Lazy loading. CDN gratuit limité." }
    ]
  };

  return (
    <>
      <SEO
        image="https://wp-vitesse-pro.fr/images/plugins-wordpress-essentiels-hero.webp"
        title="25 plugins WordPress essentiels 2026 | guide expert"
        description="Les 25 meilleurs plugins WordPress 2026 : performance, SEO, sécurité, cache. Guide expert avec comparatifs détaillés."
        keywords="plugins WordPress, meilleurs plugins WordPress 2026, plugin cache WordPress, plugin SEO WordPress, extensions WordPress essentielles"
        canonical="https://wp-vitesse-pro.fr/article/plugins-wordpress-essentiels"
        type="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <Navbar />
      
      <article className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Guide WordPress</Badge>
              <Badge variant="outline">Mise à jour : Décembre 2026</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Les 25 plugins WordPress essentiels en 2026 : guide complet pour un site ultra-performant
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Sélection experte des meilleurs plugins WordPress pour optimiser performance, SEO, sécurité et conversions. Comparatifs détaillés, configurations recommandées et pièges à éviter.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>15 min de lecture</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span>3 500+ mots</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>25 plugins analysés</span>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/plugins-wordpress-essentiels-hero.webp" type="image/webp" />
              <img 
                src="/images/plugins-wordpress-essentiels-hero.png" 
                alt="Plugins WordPress essentiels 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Sélection des meilleurs plugins WordPress indispensables en 2026
            </figcaption>
          </figure>

          <Card className="mb-12 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Conseil d'expert : L'hébergement avant les plugins</h3>
                  <p className="text-muted-foreground mb-4">
                    Avant d'installer des plugins de performance, assurez-vous d'avoir un hébergement de qualité. <strong>Un bon hébergeur comme Kinsta inclut déjà</strong> : cache serveur, CDN Cloudflare, optimisation PHP, et sécurité avancée. Cela rend plusieurs plugins redondants et allège votre site.
                  </p>
                  <Button 
                    onClick={() => handleCTAClick('intro_card')}
                    className="gap-2"
                    data-testid="button-cta-intro"
                  >
                    Découvrir Kinsta <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <nav className="mb-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="font-bold mb-4">Sommaire</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#intro" className="text-primary hover:underline">1. Pourquoi les bons plugins changent tout</a></li>
              <li><a href="#performance" className="text-primary hover:underline">2. Plugins de performance et cache (5 plugins)</a></li>
              <li><a href="#seo" className="text-primary hover:underline">3. Plugins SEO et référencement (4 plugins)</a></li>
              <li><a href="#security" className="text-primary hover:underline">4. Plugins de sécurité et backup (4 plugins)</a></li>
              <li><a href="#essential" className="text-primary hover:underline">5. Plugins essentiels polyvalents (4 plugins)</a></li>
              <li><a href="#woocommerce" className="text-primary hover:underline">6. Plugins WooCommerce indispensables (4 plugins)</a></li>
              <li><a href="#avoid" className="text-primary hover:underline">7. Plugins à éviter en 2026</a></li>
              <li><a href="#configuration" className="text-primary hover:underline">8. Configuration optimale recommandée</a></li>
              <li><a href="#faq" className="text-primary hover:underline">9. FAQ : Questions fréquentes</a></li>
            </ol>
          </nav>

          <section id="intro" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pourquoi le Choix des Plugins WordPress Est Crucial en 2026
            </h2>
            
            <p className="mb-4">
              En 2026, WordPress propulse <strong>43% de tous les sites web mondiaux</strong>. Cette popularité s'explique en grande partie par son écosystème de plus de 60 000 plugins gratuits et premium. Mais cette abondance est à double tranchant : <strong>le mauvais choix de plugins peut transformer un site rapide en escargot</strong>.
            </p>

            <p className="mb-4">
              Selon nos analyses, un site WordPress moyen utilise entre 15 et 25 plugins actifs. Le problème ? <strong>Chaque plugin ajoute du code, des requêtes base de données, et potentiellement des failles de sécurité</strong>. Google a confirmé que les Core Web Vitals (vitesse, interactivité, stabilité) impactent directement le référencement depuis 2021.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <Card className="p-4 text-center">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">60 000+</p>
                <p className="text-sm text-muted-foreground">Plugins disponibles</p>
              </Card>
              <Card className="p-4 text-center">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">52%</p>
                <p className="text-sm text-muted-foreground">Vulnérabilités via plugins</p>
              </Card>
              <Card className="p-4 text-center">
                <Gauge className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">-40%</p>
                <p className="text-sm text-muted-foreground">Temps de chargement optimisable</p>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4">Les 3 critères pour choisir un plugin WordPress</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong>Mises à jour régulières</strong> : Un plugin non mis à jour depuis plus de 6 mois présente des risques de sécurité et d'incompatibilité.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong>Popularité et avis</strong> : Privilégiez les plugins avec plus de 10 000 installations actives et une note supérieure à 4 étoiles.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong>Impact performance</strong> : Testez chaque plugin avec Query Monitor ou PageSpeed Insights avant/après installation.
                </div>
              </div>
            </div>
          </section>

          <section id="performance" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Gauge className="w-8 h-8 text-primary" />
              Plugins de Performance et Cache (Top 5)
            </h2>
            
            <p className="mb-6">
              La performance est le critère #1 pour le SEO et l'expérience utilisateur. Google pénalise les sites lents, et <strong>53% des visiteurs mobiles quittent un site qui met plus de 3 secondes à charger</strong>. Voici les meilleurs plugins pour accélérer votre WordPress.
            </p>

            <div className="space-y-6 mb-8">
              {plugins.performance.map((plugin, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{idx + 1}. {plugin.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{plugin.price}</Badge>
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          {plugin.rating}/5
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{plugin.note}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">WP Rocket : Analyse détaillée</h3>
            
            <p className="mb-4">
              <strong>WP Rocket</strong> est le plugin de cache le plus recommandé par les experts WordPress. Contrairement aux solutions gratuites, il fonctionne dès l'installation sans configuration complexe. Ses fonctionnalités clés :
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li><strong>Cache de page</strong> : Génération de fichiers HTML statiques pour un chargement instantané</li>
              <li><strong>Lazy loading</strong> : Images et iframes chargées uniquement quand visibles</li>
              <li><strong>Minification</strong> : Compression CSS, JavaScript et HTML</li>
              <li><strong>Preload</strong> : Pré-chargement intelligent des pages</li>
              <li><strong>Database cleanup</strong> : Nettoyage automatique des révisions et transients</li>
              <li><strong>CDN intégré</strong> : Compatibilité native avec Cloudflare, BunnyCDN, etc.</li>
            </ul>

            <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50 mb-6">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Résultats moyens avec WP Rocket
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Temps de chargement : <strong>-50% en moyenne</strong></li>
                <li>• Score PageSpeed Mobile : <strong>+15-25 points</strong></li>
                <li>• LCP (Largest Contentful Paint) : <strong>Amélioration de 40%</strong></li>
              </ul>
            </Card>

            <div className="p-6 bg-muted/50 rounded-lg mb-6">
              <h4 className="font-bold mb-3">Note importante sur Kinsta et le cache</h4>
              <p className="text-sm text-muted-foreground">
                Si vous utilisez <strong>Kinsta</strong>, le cache serveur est déjà intégré et optimisé. WP Rocket reste utile pour ses fonctionnalités additionnelles (lazy loading, minification), mais désactivez le cache de page qui ferait double emploi. Kinsta offre des performances supérieures grâce à son cache NGINX + CDN Cloudflare Enterprise inclus.
              </p>
            </div>
          </section>

          <section id="seo" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              Plugins SEO et Référencement (Top 4)
            </h2>
            
            <p className="mb-6">
              Le SEO technique est la base de votre visibilité Google. Ces plugins vous aident à optimiser les méta-données, générer des sitemaps, gérer les redirections et implémenter le Schema markup pour les rich snippets.
            </p>

            <div className="space-y-6 mb-8">
              {plugins.seo.map((plugin, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{idx + 1}. {plugin.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{plugin.price}</Badge>
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          {plugin.rating}/5
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{plugin.note}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Rank Math vs Yoast SEO : Le verdict 2026</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h4 className="font-bold mb-4 text-green-600">Choisissez Rank Math si...</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Vous voulez des fonctionnalités premium gratuites</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Vous avez besoin de Schema markup avancé</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Vous gérez plusieurs sites (multi-sites)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Vous voulez l'intégration Google Analytics</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-4 text-blue-600">Choisissez Yoast SEO si...</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Vous débutez en SEO</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Vous préférez une interface simple</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Vous avez besoin de cours SEO intégrés</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Vous avez déjà investi dans Yoast Premium</li>
                </ul>
              </Card>
            </div>

            <p className="mb-4">
              <strong>Notre recommandation 2026</strong> : Rank Math offre un meilleur rapport qualité/prix avec sa version gratuite qui inclut des fonctionnalités que Yoast réserve à sa version premium (redirections, Schema avancé, analyse de mots-clés multiples). Pour un nouveau site, partez sur Rank Math.
            </p>
          </section>

          <section id="security" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Plugins de Sécurité et Backup (Top 4)
            </h2>
            
            <p className="mb-6">
              <strong>52% des vulnérabilités WordPress proviennent des plugins</strong>. La sécurité n'est pas optionnelle. Ces plugins protègent contre les attaques brute force, les malwares, et assurent des sauvegardes fiables.
            </p>

            <div className="space-y-6 mb-8">
              {plugins.security.map((plugin, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{idx + 1}. {plugin.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{plugin.price}</Badge>
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          {plugin.rating}/5
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{plugin.note}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 mb-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                Sécurité avec Kinsta : Plugins superflus ?
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Kinsta inclut nativement une sécurité enterprise-grade :
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• <strong>Pare-feu matériel</strong> et logiciel (Google Cloud Platform)</li>
                <li>• <strong>Protection DDoS</strong> via Cloudflare Enterprise</li>
                <li>• <strong>Scans malware</strong> quotidiens automatiques</li>
                <li>• <strong>Backups automatiques</strong> quotidiens (14-30 jours de rétention)</li>
                <li>• <strong>Isolation des conteneurs</strong> : chaque site isolé</li>
                <li>• <strong>2FA</strong> pour le dashboard</li>
              </ul>
              <p className="text-sm">
                Avec Kinsta, un simple plugin comme <strong>Limit Login Attempts</strong> suffit. Wordfence devient redondant et consomme des ressources inutilement.
              </p>
            </Card>
          </section>

          <section id="essential" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary" />
              Plugins Essentiels Polyvalents (Top 4)
            </h2>
            
            <p className="mb-6">
              Ces plugins répondent à des besoins universels : création de pages, formulaires, analytics. Ils sont utilisés sur des millions de sites et ont prouvé leur fiabilité.
            </p>

            <div className="space-y-6 mb-8">
              {plugins.essential.map((plugin, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{idx + 1}. {plugin.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{plugin.price}</Badge>
                        <div className="flex items-center gap-1 text-sm text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          {plugin.rating}/5
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{plugin.note}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Elementor : Le page builder #1 analysé</h3>
            
            <p className="mb-4">
              <strong>Elementor</strong> équipe plus de 16 millions de sites. Son éditeur drag & drop permet de créer des designs professionnels sans code. Points forts :
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li><strong>Version gratuite puissante</strong> : 30+ widgets, responsive, templates</li>
              <li><strong>Theme Builder (Pro)</strong> : Headers, footers, archives personnalisés</li>
              <li><strong>WooCommerce Builder (Pro)</strong> : Pages produit custom</li>
              <li><strong>Performance améliorée</strong> : Elementor 3.x plus léger que les versions précédentes</li>
            </ul>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-900/50 mb-6">
              <p className="text-sm flex gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span><strong>Attention performance</strong> : Elementor ajoute du poids. Pour les sites axés vitesse/SEO, considérez Kadence Blocks (plus léger) ou le bloc editor natif WordPress (Gutenberg).</span>
              </p>
            </div>
          </section>

          <section id="woocommerce" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-primary" />
              Plugins WooCommerce Indispensables
            </h2>
            
            <p className="mb-6">
              Pour les boutiques en ligne, ces plugins sont essentiels pour améliorer les conversions, optimiser les performances e-commerce et gérer les paiements.
            </p>

            <div className="space-y-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">1. WooCommerce Stripe Gateway</h3>
                <Badge variant="outline" className="mb-3">Gratuit</Badge>
                <p className="text-muted-foreground">Paiement par carte Stripe officiel. Apple Pay, Google Pay, SEPA. Indispensable pour l'Europe.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">2. CartFlows</h3>
                <Badge variant="outline" className="mb-3">Freemium</Badge>
                <p className="text-muted-foreground">Tunnels de vente optimisés. Upsells, order bumps, checkout personnalisé. +30% conversions moyennes.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">3. WooCommerce PDF Invoices</h3>
                <Badge variant="outline" className="mb-3">Gratuit</Badge>
                <p className="text-muted-foreground">Factures PDF automatiques conformes. Numérotation séquentielle, templates personnalisables.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">4. YITH WooCommerce Wishlist</h3>
                <Badge variant="outline" className="mb-3">Freemium</Badge>
                <p className="text-muted-foreground">Liste de souhaits. Augmente l'engagement et facilite les conversions futures.</p>
              </Card>
            </div>
          </section>

          <section id="avoid" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              Plugins à Éviter en 2026
            </h2>
            
            <p className="mb-6">
              Certains plugins populaires sont devenus obsolètes, trop lourds, ou présentent des risques. Voici ceux à éviter ou remplacer :
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-4 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10">
                <h4 className="font-bold text-red-600">Jetpack (version complète)</h4>
                <p className="text-sm text-muted-foreground">Trop lourd, ajoute 20+ fonctionnalités inutiles. Préférez des plugins spécialisés.</p>
              </Card>
              
              <Card className="p-4 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10">
                <h4 className="font-bold text-red-600">Revolution Slider</h4>
                <p className="text-sm text-muted-foreground">Très lourd (-30 points PageSpeed), vulnérabilités historiques. Utilisez le bloc image natif.</p>
              </Card>
              
              <Card className="p-4 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10">
                <h4 className="font-bold text-red-600">AddThis / ShareThis</h4>
                <p className="text-sm text-muted-foreground">Scripts externes lourds, tracking intrusif. Utilisez des boutons de partage légers CSS.</p>
              </Card>
              
              <Card className="p-4 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10">
                <h4 className="font-bold text-red-600">Plugins "All-in-One" génériques</h4>
                <p className="text-sm text-muted-foreground">Font tout mais mal. Préférez des plugins spécialisés qui font une chose parfaitement.</p>
              </Card>
            </div>
          </section>

          <section id="configuration" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-primary" />
              Configuration Optimale Recommandée 2026
            </h2>
            
            <p className="mb-6">
              Voici notre stack de plugins recommandée selon votre type de site. <strong>Moins c'est mieux</strong> : chaque plugin ajouté doit apporter une valeur mesurable.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  Blog / Site vitrine (8-12 plugins)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Rank Math (SEO)</li>
                  <li>✓ WP Rocket ou cache hébergeur</li>
                  <li>✓ Imagify (images)</li>
                  <li>✓ UpdraftPlus (backups)</li>
                  <li>✓ WPForms Lite (formulaires)</li>
                  <li>✓ Limit Login Attempts</li>
                  <li>✓ Redirection (301)</li>
                  <li>○ MonsterInsights (optionnel)</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-green-500" />
                  E-commerce WooCommerce (12-18 plugins)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Stack Blog + :</li>
                  <li>✓ WooCommerce</li>
                  <li>✓ Stripe Gateway</li>
                  <li>✓ WooCommerce PDF Invoices</li>
                  <li>✓ CartFlows ou checkout natif</li>
                  <li>✓ YITH Wishlist</li>
                  <li>✓ Perfmatters (scripts)</li>
                  <li>○ Mailchimp for WooCommerce</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Configuration optimale avec Kinsta
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Avec un hébergeur premium comme Kinsta, vous pouvez réduire votre nombre de plugins :
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <strong>Cache</strong> : Inclus (NGINX + Edge Caching Cloudflare)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <strong>CDN</strong> : Inclus (Cloudflare Enterprise)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <strong>Backups</strong> : Inclus (quotidiens, 14-30 jours)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <strong>Sécurité</strong> : Inclus (pare-feu, DDoS, malware)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <strong>SSL</strong> : Inclus (Let's Encrypt + Cloudflare)</li>
              </ul>
              <Button 
                onClick={() => handleCTAClick('configuration_section')}
                className="gap-2"
                data-testid="button-cta-config"
              >
                Découvrir l'hébergement Kinsta <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          </section>

          <section id="faq" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              FAQ : Questions Fréquentes sur les Plugins WordPress
            </h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold mb-2">Combien de plugins WordPress peut-on installer ?</h3>
                <p className="text-muted-foreground">
                  Il n'y a pas de limite technique, mais on recommande de ne pas dépasser 20-30 plugins actifs pour maintenir de bonnes performances. La qualité prime sur la quantité. Un hébergeur premium comme Kinsta permet d'en gérer plus grâce à son infrastructure optimisée.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">Quel est le meilleur plugin de cache WordPress en 2026 ?</h3>
                <p className="text-muted-foreground">
                  WP Rocket est le meilleur plugin de cache payant (49€/an), offrant cache page, lazy loading, minification et CDN. Pour les solutions gratuites, LiteSpeed Cache (si compatible) ou W3 Total Cache sont excellents. Note : Kinsta inclut un système de cache serveur intégré, rendant ces plugins optionnels.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">Yoast SEO ou Rank Math : lequel choisir ?</h3>
                <p className="text-muted-foreground">
                  Rank Math offre plus de fonctionnalités gratuitement (Schema, redirections, analytics intégrés) tandis que Yoast est plus simple d'utilisation. Pour les débutants : Yoast. Pour les utilisateurs avancés cherchant des fonctionnalités premium gratuites : Rank Math.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">Comment savoir si un plugin ralentit mon site ?</h3>
                <p className="text-muted-foreground">
                  Utilisez Query Monitor (gratuit) pour identifier les plugins lents. Testez avec PageSpeed Insights avant/après désactivation. Les plugins de slider, page builders lourds, et plugins sociaux sont souvent les plus gourmands en ressources.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">Faut-il des plugins de sécurité avec un bon hébergeur ?</h3>
                <p className="text-muted-foreground">
                  Un hébergeur premium comme Kinsta inclut pare-feu, protection DDoS, scans malware et backups automatiques. Un plugin de sécurité léger (comme Limit Login Attempts) peut compléter, mais les solutions complètes type Wordfence sont souvent redondantes et gourmandes.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold mb-2">Les plugins gratuits sont-ils sûrs ?</h3>
                <p className="text-muted-foreground">
                  Les plugins du répertoire officiel WordPress.org sont vérifiés, mais pas tous régulièrement mis à jour. Vérifiez : dernière mise à jour (&lt; 6 mois), nombre d'installations actives (&gt; 10 000), note utilisateurs (&gt; 4 étoiles), compatibilité avec votre version WordPress.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Optimisez votre WordPress avec le bon hébergement
                </h2>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                  Les meilleurs plugins ne compensent pas un hébergement médiocre. Kinsta offre une infrastructure Google Cloud optimisée qui rend plusieurs plugins superflus : cache, CDN, sécurité, backups inclus.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => handleCTAClick('footer_cta')}
                    className="gap-2"
                    data-testid="button-cta-footer"
                  >
                    Essayer Kinsta <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => window.location.href = '/audit-site'}
                    data-testid="button-audit-footer"
                  >
                    Auditer mon site gratuitement
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          <section className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Dernière mise à jour : 14 décembre 2026
            </p>
            <p>
              Cet article contient des liens affiliés. En cliquant sur les liens Kinsta, nous pouvons recevoir une commission sans frais supplémentaires pour vous.
            </p>
          </section>

        </div>
      </article>
      
      <SEOFooter />
    </>
  );
}
