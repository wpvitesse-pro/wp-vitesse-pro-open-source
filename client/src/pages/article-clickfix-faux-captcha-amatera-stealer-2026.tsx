import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ExternalLink,
  FileText,
  Target,
  Zap,
  Eye,
  Lock,
  Bug,
  AlertCircle,
  Monitor,
  Cpu,
  Database,
  Globe,
  Users,
  Terminal,
  Settings,
  BookOpen,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const ARTICLE_DATA = {
  title: "Alerte Windows : les faux CAPTCHA ClickFix installent le virus Amatera - investigation complète",
  metaTitle: "Faux CAPTCHA Windows ClickFix : Amatera Stealer Vole Vos Données | Investigation 2026",
  metaDescription: "Investigation exclusive sur l'attaque ClickFix : des faux CAPTCHA Windows installent le malware Amatera. Analyse technique, chaîne d'infection, protection. +517% d'attaques en 2025.",
  url: "https://wp-vitesse-pro.fr/article/clickfix-faux-captcha-amatera-stealer-2026",
  publishedAt: "2026-01-30T08:00:00+01:00",
  modifiedAt: "2026-01-30T08:00:00+01:00",
  author: "Bouhmou Rachid",
  readingTime: 28,
  wordCount: 7850,
  category: "Cybersécurité",
  tags: ["ClickFix", "CAPTCHA", "Windows", "Amatera Stealer", "Malware", "Infostealer", "PowerShell", "Social Engineering"],
};

const breadcrumbs = [
  { name: "Accueil", url: "/" },
  { name: "Actualités Cybersécurité", url: "/guide" },
  { name: "ClickFix Faux CAPTCHA Amatera", url: ARTICLE_DATA.url },
];

const sources = [
  { name: "BlackPoint Cyber - Novel Fake CAPTCHA Chain Delivering Amatera Stealer (Janvier 2026)", url: "https://blackpointcyber.com/blog/novel-fake-captcha-chain-delivering-amatera-stealer/" },
  { name: "01net - Windows : méfiez-vous, ces CAPTCHA peuvent vous faire installer un virus (29/01/2026)", url: "https://www.01net.com/actualites/windows-mefiez-vous-captcha-peuvent-vous-faire-installer-virus.html" },
  { name: "Microsoft Security Blog - Think before you ClickFix (Août 2025)", url: "https://www.microsoft.com/en-us/security/blog/2025/08/21/think-before-you-clickfix-analyzing-the-clickfix-social-engineering-technique/" },
  { name: "Infosecurity Magazine - ClickFix Attacks Surge 517% in 2025", url: "https://www.infosecurity-magazine.com/news/clickfix-attacks-surge-2025/" },
  { name: "Proofpoint - Amatera Stealer: Rebranded ACR Stealer (Juin 2025)", url: "https://www.proofpoint.com/uk/blog/threat-insight/amatera-stealer-rebranded-acr-stealer-improved-evasion-sophistication" },
  { name: "ESET Threat Report H1 2025 - ClickFix Statistics", url: "https://www.eset.com/threat-report/" },
  { name: "Palo Alto Unit 42 - Preventing ClickFix Attack Vector", url: "https://unit42.paloaltonetworks.com/preventing-clickfix-attack-vector/" },
  { name: "Kaspersky - What is ClickFix and how to protect your company", url: "https://www.kaspersky.com/blog/what-is-clickfix/53348/" },
  { name: "BleepingComputer - New ClickFix attacks abuse Windows App-V scripts (Janvier 2026)", url: "https://www.bleepingcomputer.com/news/security/new-clickfix-attacks-abuse-windows-app-v-scripts-to-push-malware/" },
  { name: "eSentire TRU - EVALUSION Campaign Delivers Amatera Stealer (Novembre 2025)", url: "https://www.esentire.com/blog/evalusion-campaign-delivers-amatera-stealer-and-netsupport-rat" },
];

const tableOfContents = [
  { id: "resume-executif", title: "1. Résumé Exécutif" },
  { id: "clickfix-technique", title: "2. ClickFix : Anatomie d'une Révolution Criminelle" },
  { id: "amatera-stealer", title: "3. Amatera Stealer : Le Voleur de Données Ultime" },
  { id: "chaine-infection", title: "4. Chaîne d'Infection Complète : Du Clic à l'Exfiltration" },
  { id: "techniques-evasion", title: "5. Techniques d'Évasion Sophistiquées" },
  { id: "victimes-cibles", title: "6. Qui Sont les Victimes ? Secteurs et Géographies" },
  { id: "protection-detection", title: "7. Protection et Détection : Guide Pratique" },
  { id: "entreprises-reponse", title: "8. Entreprises : Plan de Réponse Immédiat" },
  { id: "particuliers-securite", title: "9. Particuliers : Sécurisez Votre PC Windows" },
  { id: "hebergement-securise", title: "10. L'Importance d'un Hébergement Sécurisé" },
  { id: "faq", title: "11. FAQ : Questions Fréquentes" },
  { id: "conclusion", title: "12. Conclusion et Recommandations" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'une attaque ClickFix exactement ?",
    answer: "ClickFix est une technique d'ingénierie sociale où les cybercriminels manipulent les utilisateurs pour qu'ils exécutent eux-mêmes des commandes malveillantes. Au lieu d'exploiter des failles techniques, les pirates créent de fausses pages (CAPTCHA, mises à jour de navigateur, erreurs) qui demandent à l'utilisateur de coller une commande dans la fenêtre Exécuter de Windows (Win+R). Cette commande télécharge et installe un malware sans déclencher les protections de sécurité, car Windows considère l'action comme légitime puisque c'est l'utilisateur lui-même qui l'exécute.",
  },
  {
    question: "Comment savoir si j'ai été infecté par Amatera Stealer ?",
    answer: "Les signes d'une infection Amatera incluent : des connexions suspectes à vos comptes en ligne (alertes de connexion depuis des lieux inconnus), des transactions bancaires non autorisées, des mots de passe qui ne fonctionnent plus, des sessions Discord/Telegram déconnectées mystérieusement, ou des portefeuilles crypto vidés. Le malware opère silencieusement en mémoire, donc il n'y a pas de fichier visible sur le disque. Utilisez un antivirus avec analyse comportementale et vérifiez vos historiques de connexion sur tous vos comptes sensibles.",
  },
  {
    question: "Pourquoi les antivirus ne détectent-ils pas cette attaque ?",
    answer: "Cette attaque contourne les antivirus de trois façons : 1) L'utilisateur exécute lui-même la commande, donc Windows la considère comme légitime. 2) Le malware utilise des scripts Microsoft signés (SyncAppvPublishingServer.vbs) comme cheval de Troie, ce qui les rend invisibles aux outils de sécurité. 3) Tout s'exécute en mémoire sans écrire de fichier sur le disque, échappant aux analyses de signatures classiques. Seuls les antivirus avec analyse comportementale avancée peuvent détecter ce type d'attaque.",
  },
  {
    question: "Que faire si j'ai copié-collé une commande dans Win+R ?",
    answer: "Agissez immédiatement : 1) Déconnectez-vous d'Internet (débranchez le câble ou désactivez le WiFi). 2) Changez TOUS vos mots de passe depuis un autre appareil sain (priorité : email, banque, crypto). 3) Activez l'authentification à deux facteurs partout. 4) Lancez une analyse antivirus complète avec plusieurs outils (Malwarebytes, ESET, Windows Defender). 5) Surveillez vos comptes bancaires et signalez toute activité suspecte. 6) Considérez une réinstallation complète de Windows si l'infection est confirmée.",
  },
  {
    question: "Windows 10 et Windows 11 sont-ils tous les deux vulnérables ?",
    answer: "Oui, les deux versions sont vulnérables à l'attaque ClickFix. Cependant, cette campagne spécifique utilisant SyncAppvPublishingServer.vbs cible principalement les éditions Enterprise et Education de Windows 10/11, car le composant App-V n'est pas disponible sur les éditions Home et Pro. Sur ces dernières, la commande échoue et l'infection n'aboutit pas. Attention : d'autres variantes ClickFix utilisent des vecteurs différents qui fonctionnent sur toutes les éditions.",
  },
  {
    question: "Les faux CAPTCHA sont-ils faciles à reconnaître ?",
    answer: "Pas toujours. Les faux CAPTCHA sont très sophistiqués et imitent parfaitement les vrais tests de vérification. Les indices d'alerte sont : 1) Le CAPTCHA vous demande d'ouvrir la fenêtre Exécuter (Win+R) - un vrai CAPTCHA ne fait JAMAIS cela. 2) Vous devez copier-coller une commande - les vrais CAPTCHA demandent de cliquer sur des images ou de cocher une case. 3) L'URL du site ne correspond pas au service attendu. 4) Le design semble légèrement différent du vrai reCAPTCHA de Google.",
  },
  {
    question: "Cette attaque peut-elle toucher les Mac ou seulement Windows ?",
    answer: "ClickFix cible principalement Windows, mais des variantes pour macOS existent depuis janvier 2025. Sur Mac, les attaquants demandent d'ouvrir le Terminal et de coller une commande qui installe AMOS (Atomic macOS Stealer). Le principe est identique : exploiter la confiance de l'utilisateur pour lui faire exécuter du code malveillant. Les utilisateurs Mac ne sont donc pas à l'abri et doivent appliquer la même vigilance.",
  },
  {
    question: "Quelles données Amatera Stealer peut-il voler exactement ?",
    answer: "Amatera Stealer est un infostealer complet qui cible : tous les mots de passe enregistrés dans les navigateurs (Chrome, Edge, Firefox, Brave), les cookies de session (permettant de pirater vos comptes sans mot de passe), les données de cartes bancaires enregistrées, les portefeuilles crypto (MetaMask, Exodus, etc.), les identifiants Discord/Telegram/Steam, les fichiers sensibles (.pdf, .docx, .xlsx), les captures d'écran, et le contenu du presse-papiers. Toutes ces données sont exfiltrées en quelques secondes vers les serveurs des pirates.",
  },
  {
    question: "Comment les entreprises peuvent-elles bloquer cette attaque ?",
    answer: "Les entreprises doivent implémenter plusieurs mesures : 1) Désactiver ou restreindre la fenêtre Exécuter (Win+R) via GPO. 2) Restreindre l'exécution de PowerShell aux utilisateurs qui en ont besoin. 3) Désactiver SyncAppvPublishingServer.vbs si App-V n'est pas utilisé. 4) Activer les logs PowerShell avancés (Script Block Logging). 5) Déployer un EDR avec détection comportementale. 6) Former les employés à reconnaître les faux CAPTCHA. 7) Surveiller le trafic réseau vers des domaines suspects.",
  },
  {
    question: "Quel est le lien avec WordPress et l'hébergement web ?",
    answer: "Les sites WordPress compromis sont souvent utilisés comme vecteurs d'infection ClickFix. Les attaquants injectent du JavaScript malveillant dans des sites légitimes piratés, qui affiche ensuite les faux CAPTCHA aux visiteurs. Un hébergement WordPress sécurisé comme Kinsta protège contre ces injections grâce à un pare-feu applicatif (WAF), une surveillance proactive 24/7, des sauvegardes automatiques, et une isolation des sites. Les propriétaires de sites WordPress doivent maintenir leurs plugins à jour pour éviter de devenir complices involontaires de ces attaques.",
  },
];

export default function ArticleClickFixFauxCaptchaAmateraStealer2026() {
  const schemaNewsArticle = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${ARTICLE_DATA.url}#article`,
    headline: ARTICLE_DATA.title,
    name: ARTICLE_DATA.title,
    description: ARTICLE_DATA.metaDescription,
    image: "https://wp-vitesse-pro.fr/og-image.png",
    url: ARTICLE_DATA.url,
    datePublished: ARTICLE_DATA.publishedAt,
    dateModified: ARTICLE_DATA.modifiedAt,
    author: {
      "@type": "Person",
      name: ARTICLE_DATA.author,
      url: "https://wp-vitesse-pro.fr/a-propos",
      jobTitle: "Expert Cybersécurité & Performance WordPress",
    },
    publisher: {
      "@type": "Organization",
      name: "WP Vitesse Pro",
      url: "https://wp-vitesse-pro.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://wp-vitesse-pro.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ARTICLE_DATA.url,
    },
    articleSection: ARTICLE_DATA.category,
    keywords: ARTICLE_DATA.tags.join(", "),
    wordCount: ARTICLE_DATA.wordCount,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "ClickFix", description: "Technique d'ingénierie sociale exploitant les faux CAPTCHA" },
      { "@type": "Thing", name: "Amatera Stealer", description: "Malware infostealer volant données et identifiants" },
      { "@type": "Thing", name: "Windows Security", description: "Sécurité du système d'exploitation Windows" },
    ],
  };

  const schemaTechArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${ARTICLE_DATA.url}#tech`,
    headline: "Analyse technique ClickFix + Amatera Stealer : chaîne d'infection complète",
    description: "Documentation technique de l'attaque ClickFix utilisant SyncAppvPublishingServer.vbs comme LOLBIN pour déployer Amatera Stealer via stéganographie PNG.",
    image: "https://wp-vitesse-pro.fr/og-image.png",
    url: ARTICLE_DATA.url,
    datePublished: ARTICLE_DATA.publishedAt,
    author: { 
      "@type": "Person", 
      "name": ARTICLE_DATA.author,
      "url": "https://wp-vitesse-pro.fr/a-propos"
    },
    proficiencyLevel: "Expert",
    dependencies: "Windows 10/11 Enterprise, App-V, PowerShell",
    technicalAudience: "Security Analysts, SOC Teams, IT Administrators",
  };

  const schemaHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${ARTICLE_DATA.url}#howto`,
    name: "Comment se protéger de l'attaque ClickFix et Amatera Stealer",
    description: "Guide étape par étape pour protéger votre PC Windows contre les faux CAPTCHA ClickFix qui installent le malware Amatera.",
    image: "https://wp-vitesse-pro.fr/og-image.png",
    totalTime: "PT30M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Ne jamais copier-coller de commandes dans Win+R",
        text: "La règle d'or : aucun site légitime ne vous demandera jamais de coller une commande dans la fenêtre Exécuter de Windows. Si un CAPTCHA vous demande cela, fermez immédiatement l'onglet.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Vérifier l'URL avant toute action",
        text: "Avant de cliquer sur quoi que ce soit, vérifiez que l'URL correspond au site attendu. Les faux CAPTCHA sont hébergés sur des domaines suspects qui imitent les sites légitimes.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Désactiver SyncAppvPublishingServer.vbs si inutilisé",
        text: "Si vous n'utilisez pas App-V, désactivez ce script Microsoft qui peut être détourné. Consultez votre administrateur système ou suivez le guide de désactivation.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Activer l'authentification à deux facteurs partout",
        text: "Même si vos mots de passe sont volés, le 2FA empêche les pirates d'accéder à vos comptes. Priorité : email, banque, réseaux sociaux, crypto.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Installer un antivirus avec détection comportementale",
        text: "Les antivirus classiques ne détectent pas ClickFix. Optez pour une solution avec analyse comportementale comme Bitdefender, ESET ou Malwarebytes Premium.",
      },
    ],
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${ARTICLE_DATA.url}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://wp-vitesse-pro.fr${crumb.url}`,
    })),
  };

  const schemaSoftwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${ARTICLE_DATA.url}#malware`,
    name: "Amatera Stealer",
    alternateName: ["ACR Stealer", "AcridRain Stealer"],
    applicationCategory: "Malware",
    operatingSystem: "Windows 10, Windows 11",
    softwareVersion: "2025-2026",
    description: "Infostealer C++ capable de voler mots de passe, cookies, données bancaires et portefeuilles crypto via des techniques d'évasion avancées incluant WoW64 syscalls et stéganographie PNG.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "1",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1",
      reviewCount: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "1", bestRating: "5" },
      author: { "@type": "Organization", name: "WP Vitesse Pro" },
      reviewBody: "Malware extrêmement dangereux utilisant des techniques d'évasion sophistiquées. Menace critique pour les entreprises et particuliers.",
    },
    offers: {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO
        title="Faux CAPTCHA ClickFix : Amatera Stealer 2026"
        description="Alerte : les faux CAPTCHA ClickFix installent Amatera Stealer sur Windows. Analyse technique et protection contre cette menace (+517% en 2025)."
        canonical="https://wp-vitesse-pro.fr/article/clickfix-faux-captcha-amatera-stealer-2026"
        image="https://wp-vitesse-pro.fr/images/clickfix-faux-captcha-amatera-stealer-2026-hero.webp"
        keywords="ClickFix, faux CAPTCHA, Amatera Stealer, malware Windows, infostealer, PowerShell, ingénierie sociale, vol de données, cybersécurité 2026"
        type="article"
        datePublished={ARTICLE_DATA.publishedAt}
        dateModified={ARTICLE_DATA.modifiedAt}
        author={ARTICLE_DATA.author}
        category={ARTICLE_DATA.category}
        schema={{ "@graph": [schemaNewsArticle, schemaTechArticle, schemaHowTo, schemaFAQ, schemaBreadcrumb, schemaSoftwareApplication] }}
      />

      <article className="min-h-screen bg-background" data-testid="article-clickfix-amatera">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'Ariane">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.url} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4" />}
                  <Link
                    href={crumb.url}
                    className="hover:text-white transition-colors"
                    data-testid={`breadcrumb-${index}`}
                  >
                    {crumb.name}
                  </Link>
                </span>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="destructive" className="text-sm" data-testid="badge-urgence">
                <AlertTriangle className="w-4 h-4 mr-1" />
                ALERTE CRITIQUE
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-category">
                {ARTICLE_DATA.category}
              </Badge>
              <Badge variant="outline" className="text-sm border-white/30 text-white" data-testid="badge-date">
                <Clock className="w-4 h-4 mr-1" />
                30 Janvier 2026
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl" data-testid="article-title">
              {ARTICLE_DATA.title}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed" data-testid="article-excerpt">
              <strong>INVESTIGATION EXCLUSIVE</strong> — Une nouvelle campagne d'attaques ClickFix exploite des faux CAPTCHA 
              pour manipuler les utilisateurs Windows et installer le redoutable malware Amatera Stealer. 
              Cette technique a explosé de <strong>+517%</strong> en 2025, devenant le 2ème vecteur d'attaque mondial. 
              Analyse technique complète, chaîne d'infection et guide de protection.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{ARTICLE_DATA.wordCount.toLocaleString()} mots</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{ARTICLE_DATA.readingTime} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Par {ARTICLE_DATA.author}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl py-8">
          <figure className="mb-0 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/clickfix-faux-captcha-amatera-stealer-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/clickfix-faux-captcha-amatera-stealer-2026-hero.png" 
                alt="ClickFix - Faux CAPTCHA et malware Amatera Stealer 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              L'attaque ClickFix utilise de faux CAPTCHA pour déployer le malware Amatera Stealer
            </figcaption>
          </figure>
        </div>

        {/* Stats Banner */}
        <section className="bg-destructive/10 border-y border-destructive/20 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div data-testid="stat-growth">
                <div className="text-3xl md:text-4xl font-bold text-destructive">+517%</div>
                <div className="text-sm text-muted-foreground">Augmentation ClickFix 2025</div>
              </div>
              <div data-testid="stat-ranking">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">#2</div>
                <div className="text-sm text-muted-foreground">Vecteur d'attaque mondial</div>
              </div>
              <div data-testid="stat-attacks">
                <div className="text-3xl md:text-4xl font-bold text-amber-600">8%</div>
                <div className="text-sm text-muted-foreground">De toutes les attaques bloquées</div>
              </div>
              <div data-testid="stat-price">
                <div className="text-3xl md:text-4xl font-bold text-red-700">$199+</div>
                <div className="text-sm text-muted-foreground">Prix mensuel Amatera MaaS</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-4" data-testid="table-of-contents">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5" />
                    Sommaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        data-testid={`toc-${item.id}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 prose prose-lg dark:prose-invert max-w-none">
              {/* Section 1: Résumé Exécutif */}
              <section id="resume-executif" className="mb-16" data-testid="section-resume">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  1. Résumé Exécutif : Ce Que Vous Devez Savoir
                </h2>

                <Card className="bg-destructive/5 border-destructive/20 mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-destructive mb-4">Points Critiques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span><strong>Menace active</strong> : Des milliers d'attaques ClickFix sont lancées quotidiennement contre les utilisateurs Windows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span><strong>Contournement antivirus</strong> : L'attaque exploite des scripts Microsoft légitimes pour échapper à toute détection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span><strong>Vol massif de données</strong> : Mots de passe, cookies, cartes bancaires, portefeuilles crypto exfiltrés en secondes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span><strong>Exécution en mémoire</strong> : Aucun fichier sur le disque = invisible aux analyses traditionnelles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Le 27 janvier 2026, les chercheurs en cybersécurité de <strong>BlackPoint Cyber</strong> ont publié une analyse 
                  détaillée d'une nouvelle campagne d'attaques particulièrement sophistiquée. Cette offensive combine la technique 
                  d'ingénierie sociale <strong>ClickFix</strong> avec le déploiement du malware <strong>Amatera Stealer</strong>, 
                  créant une menace capable de contourner la quasi-totalité des protections de sécurité actuelles.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  L'attaque repose sur un principe simple mais redoutablement efficace : au lieu d'exploiter des vulnérabilités 
                  techniques dans Windows ou dans les logiciels, les cybercriminels manipulent psychologiquement les utilisateurs 
                  pour qu'ils exécutent eux-mêmes le code malveillant. La victime devient ainsi, sans le savoir, le vecteur de 
                  sa propre infection.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Cette technique a connu une explosion spectaculaire en 2025, avec une augmentation de <strong>517%</strong> selon 
                  ESET, la positionnant comme le <strong>2ème vecteur d'attaque le plus utilisé</strong> après le phishing classique. 
                  Microsoft, Kaspersky, Palo Alto Networks et de nombreuses autres organisations de sécurité tirent la sonnette 
                  d'alarme face à cette menace qui ne cesse de se perfectionner.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <h4 className="font-bold text-lg mb-2">La règle d'or à retenir</h4>
                  <p className="text-lg">
                    <strong>Aucun site web légitime ne vous demandera jamais de copier-coller une commande dans la fenêtre 
                    Exécuter de Windows (Win+R).</strong> Si un CAPTCHA ou une page web vous demande cela, vous êtes face 
                    à une tentative d'attaque. Fermez immédiatement l'onglet.
                  </p>
                </div>
              </section>

              {/* Section 2: ClickFix Technique */}
              <section id="clickfix-technique" className="mb-16" data-testid="section-clickfix">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-orange-600" />
                  2. ClickFix : Anatomie d'une Révolution Criminelle
                </h2>

                <h3 className="text-2xl font-bold mb-4">2.1 Qu'est-ce que ClickFix ?</h3>

                <p className="text-lg leading-relaxed mb-6">
                  ClickFix n'est pas un malware à proprement parler, mais une <strong>technique d'ingénierie sociale</strong> qui 
                  exploite la confiance naturelle des utilisateurs envers les interfaces familières d'Internet. Le nom "ClickFix" 
                  fait référence à l'action demandée : un simple clic (ou copier-coller) pour "réparer" un prétendu problème.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  La technique a été documentée pour la première fois par <strong>Proofpoint</strong> en mars 2024, lorsque le 
                  groupe cybercriminel <strong>TA571</strong> l'a utilisée pour distribuer des malwares. Depuis, elle a été 
                  adoptée par des dizaines de groupes criminels et même par des acteurs étatiques comme <strong>APT28</strong> (Russie), 
                  <strong>Kimsuky</strong> (Corée du Nord) et <strong>MuddyWater</strong> (Iran).
                </p>

                <h3 className="text-2xl font-bold mb-4">2.2 Les différentes variantes ClickFix</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Eye className="w-5 h-5 text-red-500" />
                        ClickFix Original
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Utilise la fenêtre Exécuter (Win+R) pour lancer des commandes PowerShell malveillantes. 
                        Apparu en mars 2024.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-orange-500" />
                        TerminalFix
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cible macOS en demandant d'ouvrir le Terminal et de coller une commande. 
                        Déploie AMOS stealer.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-500" />
                        ConsentFix
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Exploite les flux OAuth pour voler des tokens d'authentification directement dans le navigateur. 
                        Apparu en décembre 2025.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="w-5 h-5 text-purple-500" />
                        ClearFake
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Variante utilisant des sites WordPress compromis pour afficher de fausses mises à jour de navigateur.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">2.3 Statistiques alarmantes (2024-2026)</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left">Métrique</th>
                        <th className="border p-3 text-left">Valeur</th>
                        <th className="border p-3 text-left">Source</th>
                        <th className="border p-3 text-left">Période</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-medium">Croissance des attaques</td>
                        <td className="border p-3 text-destructive font-bold">+517%</td>
                        <td className="border p-3">ESET</td>
                        <td className="border p-3">S1 2025</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Part des attaques bloquées</td>
                        <td className="border p-3 text-orange-600 font-bold">8%</td>
                        <td className="border p-3">ESET</td>
                        <td className="border p-3">S1 2025</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">Classement vecteur d'attaque</td>
                        <td className="border p-3 text-amber-600 font-bold">#2 mondial</td>
                        <td className="border p-3">ESET</td>
                        <td className="border p-3">S1 2025</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Méthode d'accès initial</td>
                        <td className="border p-3 font-bold">47%</td>
                        <td className="border p-3">Microsoft</td>
                        <td className="border p-3">2025</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">Alertes Albert (CIS)</td>
                        <td className="border p-3 font-bold">&gt;33%</td>
                        <td className="border p-3">CIS CTI</td>
                        <td className="border p-3">S1 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold mb-4">2.4 Pourquoi ClickFix fonctionne si bien ?</h3>

                <p className="text-lg leading-relaxed mb-6">
                  L'efficacité redoutable de ClickFix repose sur plusieurs facteurs psychologiques et techniques :
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Familiarité des CAPTCHA :</strong> Les utilisateurs sont habitués à résoudre des CAPTCHA 
                      quotidiennement. Un faux CAPTCHA ne déclenche aucune alerte mentale.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Exécution utilisateur :</strong> Puisque c'est l'utilisateur qui lance la commande, 
                      Windows ne bloque pas l'action. Les UAC et antivirus restent silencieux.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Scripts Microsoft signés :</strong> L'utilisation de composants Windows légitimes 
                      (comme SyncAppvPublishingServer.vbs) rend l'attaque invisible aux outils de sécurité.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Exécution en mémoire :</strong> Aucun fichier n'est écrit sur le disque, 
                      ce qui échappe aux analyses basées sur les signatures.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Urgence psychologique :</strong> Le message "Vérifiez que vous n'êtes pas un robot" 
                      crée un sentiment d'urgence qui court-circuite la réflexion critique.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 3: Amatera Stealer */}
              <section id="amatera-stealer" className="mb-16" data-testid="section-amatera">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Bug className="w-8 h-8 text-red-600" />
                  3. Amatera Stealer : Le Voleur de Données Ultime
                </h2>

                <h3 className="text-2xl font-bold mb-4">3.1 Origines et évolution</h3>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Amatera Stealer</strong> n'est pas un nouveau venu dans l'écosystème cybercriminel. Il s'agit en réalité 
                  d'une version "rebrandée" de <strong>ACR Stealer</strong> (également connu sous le nom d'AcridRain Stealer), 
                  un malware développé et opéré par un acteur russophone connu sous le pseudonyme <strong>SheldIO</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  En juillet 2024, SheldIO a cessé les ventes d'ACR Stealer et a vendu le code source à un acheteur inconnu. 
                  En décembre 2024, le malware a réapparu sous le nom "Amatera" avec des améliorations significatives en 
                  termes d'évasion et de sophistication. Il est désormais proposé en tant que <strong>Malware-as-a-Service (MaaS)</strong> 
                  avec des tarifs allant de <strong>$199/mois</strong> à <strong>$1499/an</strong>, incluant un support client via Telegram.
                </p>

                <h3 className="text-2xl font-bold mb-4">3.2 Capacités de vol de données</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-red-200 dark:border-red-900">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-red-500" />
                        Données Navigateurs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Tous les mots de passe enregistrés (Chrome, Edge, Firefox, Brave...)</li>
                        <li>• Cookies de session (permettant le piratage sans mot de passe)</li>
                        <li>• Données de cartes bancaires</li>
                        <li>• Historique de navigation</li>
                        <li>• Données de formulaires auto-remplis</li>
                        <li>• <strong>Bypass App Bound Encryption</strong> de Chrome</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-900">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-orange-500" />
                        Portefeuilles Crypto
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Wallets desktop : Electrum, Exodus, Atomic, etc.</li>
                        <li>• Extensions navigateur : MetaMask, Phantom, Coinbase Wallet</li>
                        <li>• Fichiers de configuration wallet</li>
                        <li>• Clés privées et seed phrases</li>
                        <li>• Historique des transactions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-200 dark:border-amber-900">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-500" />
                        Applications & Messageries
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Discord, Telegram, Signal, WhatsApp</li>
                        <li>• Sessions Steam et plateformes gaming</li>
                        <li>• Clients email : Thunderbird, Outlook</li>
                        <li>• FTP/SSH : FileZilla, WinSCP, PuTTY</li>
                        <li>• Remote access : AnyDesk, TeamViewer</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-900">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-purple-500" />
                        Système & Fichiers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Captures d'écran automatiques</li>
                        <li>• Contenu du presse-papiers</li>
                        <li>• Fichiers .pdf, .docx, .xlsx, .txt</li>
                        <li>• Liste des processus actifs</li>
                        <li>• Inventaire logiciels installés</li>
                        <li>• Spécifications hardware</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">3.3 Capacité d'exécution secondaire</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Au-delà du vol de données, Amatera Stealer possède une capacité particulièrement dangereuse : 
                  le <strong>téléchargement et l'exécution de payloads secondaires</strong>. Cela signifie que les 
                  attaquants peuvent, après l'infection initiale, déployer :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span><strong>Ransomwares :</strong> Chiffrement de tous les fichiers avec demande de rançon (ex: Interlock)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span><strong>RATs (Remote Access Trojans) :</strong> Contrôle total à distance du PC infecté</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span><strong>Cryptominers :</strong> Utilisation des ressources du PC pour miner des cryptomonnaies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span><strong>Autres stealers :</strong> Déploiement de malwares additionnels pour maximiser le vol</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: Chaîne d'Infection */}
              <section id="chaine-infection" className="mb-16" data-testid="section-chaine">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-600" />
                  4. Chaîne d'Infection Complète : Du Clic à l'Exfiltration
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  La campagne analysée par BlackPoint Cyber se distingue par la sophistication de sa chaîne d'infection, 
                  composée de multiples étapes conçues pour échapper à la détection. Voici le déroulement complet :
                </p>

                <div className="space-y-6 mb-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-red-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Faux CAPTCHA - Manipulation Initiale</h4>
                          <p className="text-muted-foreground mb-3">
                            La victime arrive sur une page web malveillante (via phishing, malvertising ou site compromis) 
                            qui affiche un faux test CAPTCHA imitant parfaitement les vérifications Google reCAPTCHA.
                          </p>
                          <p className="text-muted-foreground">
                            Le CAPTCHA demande à l'utilisateur de "prouver qu'il n'est pas un robot" en copiant-collant 
                            une commande dans la fenêtre Exécuter (Win+R). Cette commande est automatiquement copiée 
                            dans le presse-papiers via JavaScript.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-orange-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">SyncAppvPublishingServer.vbs - Le Cheval de Troie Microsoft</h4>
                          <p className="text-muted-foreground mb-3">
                            La commande collée n'invoque pas PowerShell directement. Elle utilise 
                            <strong> SyncAppvPublishingServer.vbs</strong>, un script Microsoft signé normalement utilisé 
                            pour la virtualisation d'applications en entreprise (App-V).
                          </p>
                          <p className="text-muted-foreground">
                            Ce script, étant un composant Windows légitime et signé, est considéré comme "de confiance" 
                            par les antivirus. Il sert de <strong>LOLBIN</strong> (Living Off the Land Binary) pour 
                            proxy l'exécution de PowerShell, modifiant la chaîne de processus de manière à éviter 
                            la détection.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-amber-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-amber-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Variable d'Environnement - Porte de Vérification</h4>
                          <p className="text-muted-foreground">
                            La commande définit une variable d'environnement temporaire (<code>ALLUSERSPROFILE_X</code>) 
                            avec une valeur opaque. Cette variable servira plus tard de "gate" pour vérifier que 
                            l'utilisateur a bien exécuté la commande manuellement, bloquant l'analyse dans les sandboxes 
                            de sécurité qui ne simulent pas cette action.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-yellow-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-yellow-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Obfuscation par Alias - Dissimulation des Cmdlets</h4>
                          <p className="text-muted-foreground mb-3">
                            Le script PowerShell évite d'utiliser des commandes explicites comme <code>Invoke-Expression</code>. 
                            Il reconstruit dynamiquement les cmdlets à l'aide d'alias et de wildcards :
                          </p>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li><code>gal i*x</code> résout vers <code>iex</code> (Invoke-Expression)</li>
                            <li><code>gcm *stM*</code> résout vers <code>Invoke-RestMethod</code></li>
                          </ul>
                          <p className="text-muted-foreground mt-3">
                            Cette technique rend l'analyse statique du code pratiquement impossible.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-green-600">5</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Script "herf54" - Bruit et Fragmentation</h4>
                          <p className="text-muted-foreground">
                            Le loader télécharge un script nommé "herf54" composé de milliers de variables avec des noms 
                            ressemblant à des cmdlets PowerShell. Chaque variable stocke un fragment base64. Ces fragments 
                            sont assemblés, décodés et exécutés en mémoire via <code>ScriptBlock.Create</code>. 
                            L'objectif est de noyer le code malveillant dans une avalanche de bruit.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-blue-600">6</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Google Calendar - Configuration Live</h4>
                          <p className="text-muted-foreground mb-3">
                            Le loader récupère sa configuration depuis un <strong>fichier .ics de Google Calendar</strong>. 
                            Cette technique innovante permet aux attaquants de mettre à jour l'infrastructure C2 
                            (Command & Control) sans modifier les étapes précédentes de la chaîne.
                          </p>
                          <p className="text-muted-foreground">
                            La configuration est extraite du champ DESCRIPTION d'un événement spécifique, 
                            encodée en base64, et contient les URLs des serveurs de commande.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-purple-600">7</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Stéganographie PNG - Payload Invisible</h4>
                          <p className="text-muted-foreground">
                            Le payload final est dissimulé à l'intérieur d'images PNG hébergées sur des services légitimes. 
                            La technique de <strong>stéganographie LSB</strong> (Least Significant Bit) cache le code 
                            malveillant chiffré dans les pixels de l'image. Le loader télécharge l'image, extrait les 
                            données cachées, les déchiffre et les exécute entièrement en mémoire.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-700">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-red-700">8</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Amatera Stealer - Exfiltration</h4>
                          <p className="text-muted-foreground">
                            Le malware Amatera s'installe en mémoire (jamais sur le disque), scanne immédiatement 
                            tous les navigateurs, applications et fichiers, puis exfiltre les données volées vers 
                            les serveurs C2 via des connexions TLS chiffrées. L'opération complète prend moins 
                            de 30 secondes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 5: Techniques d'Évasion */}
              <section id="techniques-evasion" className="mb-16" data-testid="section-evasion">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-purple-600" />
                  5. Techniques d'Évasion Sophistiquées
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Ce qui rend cette campagne particulièrement dangereuse, c'est l'accumulation de techniques d'évasion 
                  qui, individuellement, sont connues, mais qui combinées créent une attaque pratiquement indétectable 
                  par les solutions de sécurité traditionnelles.
                </p>

                <h3 className="text-2xl font-bold mb-4">5.1 WoW64 Syscalls</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Amatera utilise des <strong>appels système directs (syscalls)</strong> via l'interface WoW64 pour 
                  contourner les hooks user-mode installés par les EDR et antivirus. En appelant directement les 
                  fonctions du noyau Windows sans passer par les APIs standard (comme <code>WinHttpSendRequest</code>), 
                  le malware devient invisible aux outils de surveillance qui monitorent ces APIs.
                </p>

                <h3 className="text-2xl font-bold mb-4">5.2 NTSockets pour le C2</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Au lieu d'utiliser les bibliothèques réseau standard, Amatera communique avec ses serveurs de 
                  commande via <code>NtDeviceIoControl</code> avec le driver AFD (Auxiliary Function Driver). 
                  Les communications sont chiffrées en TLS via les APIs Windows natives (<code>AcquireCredentialsHandleA</code>, 
                  <code>EncryptMessage</code>), rendant l'analyse du trafic réseau extrêmement difficile.
                </p>

                <h3 className="text-2xl font-bold mb-4">5.3 Bypass AMSI</h3>

                <p className="text-lg leading-relaxed mb-6">
                  L'interface AMSI (Anti-Malware Scan Interface) de Windows est censée permettre aux antivirus 
                  d'analyser le code PowerShell avant son exécution. La campagne utilise plusieurs techniques 
                  de contournement, dont l'utilisation ironique de la clé XOR <code>AMSI_RESULT_NOT_DETECTED</code> 
                  pour déchiffrer les payloads, une moquerie délibérée envers les défenses Microsoft.
                </p>

                <h3 className="text-2xl font-bold mb-4">5.4 Exécution 100% en mémoire</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Aucun fichier n'est jamais écrit sur le disque dur. Toute la chaîne d'infection, du téléchargement 
                  initial jusqu'à l'exfiltration des données, s'exécute exclusivement en mémoire RAM. Cela rend 
                  l'analyse forensique post-incident particulièrement complexe, car il ne reste aucune trace 
                  persistante de l'infection une fois le PC redémarré.
                </p>

                <h3 className="text-2xl font-bold mb-4">5.5 Filtrage des cibles</h3>

                <p className="text-lg leading-relaxed mb-6">
                  L'utilisation du script App-V (<code>SyncAppvPublishingServer.vbs</code>) n'est pas anodine. 
                  Ce composant n'est présent que sur les éditions <strong>Enterprise</strong> et <strong>Education</strong> 
                  de Windows. Sur les éditions Home et Pro, la commande échoue silencieusement. Cela permet aux 
                  attaquants de :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1" />
                    <span>Cibler préférentiellement les entreprises (valeur des données plus élevée)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1" />
                    <span>Éviter les sandboxes de sécurité qui utilisent généralement Windows Pro ou Home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1" />
                    <span>Filtrer les machines "low-value" des particuliers</span>
                  </li>
                </ul>
              </section>

              {/* Section 6: Victimes et Cibles */}
              <section id="victimes-cibles" className="mb-16" data-testid="section-victimes">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  6. Qui Sont les Victimes ? Secteurs et Géographies
                </h2>

                <h3 className="text-2xl font-bold mb-4">6.1 Secteurs les plus touchés</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Les campagnes ClickFix ne ciblent pas de manière uniforme. Certains secteurs sont 
                  particulièrement visés en raison de la valeur des données qu'ils détiennent :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Santé</h4>
                      <p className="text-sm text-muted-foreground">
                        Données médicales, prescriptions, informations d'assurance. Compromission du site HEP2go documentée.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Hôtellerie</h4>
                      <p className="text-sm text-muted-foreground">
                        Campagne massive via faux Booking.com déployant PureRAT. Des milliers d'hôtels ciblés.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Automobile</h4>
                      <p className="text-sm text-muted-foreground">
                        Plus de 100 sites de concessionnaires compromis via LES Automotive.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Finance & Gouvernement</h4>
                      <p className="text-sm text-muted-foreground">
                        Usurpation d'identité d'autorités fiscales (Portugal). Ciblage d'organisations financières.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">E-commerce</h4>
                      <p className="text-sm text-muted-foreground">
                        Usurpation de plateformes comme Ricardo (Suisse). Vol de données clients et paiements.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Crypto & Fintech</h4>
                      <p className="text-sm text-muted-foreground">
                        Ciblage prioritaire des détenteurs de cryptomonnaies via la compromission des wallets.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">6.2 Géographie des attaques</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Les campagnes ClickFix sont observées mondialement, avec une concentration sur les pays 
                  européens et nord-américains :
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <strong>Europe :</strong> Portugal, Allemagne, Suisse, France, Luxembourg, Hongrie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <strong>Amérique :</strong> États-Unis, Mexique
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <strong>Asie :</strong> Japon
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">6.3 Acteurs de la menace identifiés</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left">Acteur</th>
                        <th className="border p-3 text-left">Attribution</th>
                        <th className="border p-3 text-left">Activité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-medium">TA571</td>
                        <td className="border p-3">Cybercrime (Initial Access Broker)</td>
                        <td className="border p-3">Premier utilisateur documenté (avril 2024)</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Storm-0426</td>
                        <td className="border p-3">Cybercrime</td>
                        <td className="border p-3">Distribution MintsLoader (Allemagne)</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">APT28</td>
                        <td className="border p-3 text-red-600">Nation-État (Russie)</td>
                        <td className="border p-3">Ciblage Ukraine</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Kimsuky</td>
                        <td className="border p-3 text-red-600">Nation-État (Corée du Nord)</td>
                        <td className="border p-3">ClickFake (faux entretiens d'embauche)</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">MuddyWater</td>
                        <td className="border p-3 text-red-600">Nation-État (Iran)</td>
                        <td className="border p-3">Espionnage infrastructures critiques</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Protection et Détection */}
              <section id="protection-detection" className="mb-16" data-testid="section-protection">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  7. Protection et Détection : Guide Pratique
                </h2>

                <h3 className="text-2xl font-bold mb-4">7.1 Pourquoi les défenses traditionnelles échouent</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left">Couche de Sécurité</th>
                        <th className="border p-3 text-left">Pourquoi elle échoue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-medium">EDR / Antivirus</td>
                        <td className="border p-3">Exécution via actions utilisateur légitimes + outils système de confiance</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Détection par signatures</td>
                        <td className="border p-3">Exécution fileless (pas d'écriture disque)</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">Monitoring processus</td>
                        <td className="border p-3">Apparaît comme powershell.exe lancé normalement par l'utilisateur</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Sécurité navigateur</td>
                        <td className="border p-3">Contourne Google Safe Browsing, pas de téléchargement visible</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium">Filtres email</td>
                        <td className="border p-3">Utilise souvent des domaines légitimes compromis</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-3 font-medium">Blacklists URL</td>
                        <td className="border p-3">Infrastructure rapidement rotée par les attaquants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold mb-4">7.2 Stratégies de détection efficaces</h3>

                <div className="space-y-4 mb-8">
                  <Card className="border-green-200 dark:border-green-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        PowerShell Script Block Logging
                      </h4>
                      <p className="text-muted-foreground">
                        Activez la journalisation détaillée des scripts PowerShell pour capturer le code exécuté, 
                        même s'il est obfusqué. Recherchez les patterns <code>FromBase64String</code>, 
                        <code>DownloadString</code>, <code>IEX</code>.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Surveillance du presse-papiers
                      </h4>
                      <p className="text-muted-foreground">
                        Monitorez les accès au presse-papiers, particulièrement quand ils contiennent des 
                        commandes encodées en Base64 ou des patterns PowerShell suspects.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Détection comportementale
                      </h4>
                      <p className="text-muted-foreground">
                        Utilisez des solutions EDR avec analyse comportementale (Bitdefender PHASR, Darktrace). 
                        Recherchez les chaînes de processus anormales : wscript.exe → powershell.exe 
                        avec connexions réseau immédiates.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Analyse trafic réseau
                      </h4>
                      <p className="text-muted-foreground">
                        Surveillez les connexions TLS vers des IPs protégées par CDN avec des patterns inhabituels, 
                        les requêtes HTTP POST vers des endpoints rares après exécution PowerShell.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">7.3 Indicateurs de compromission (IOC)</h3>

                <Card className="bg-muted mb-8">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-3">Patterns à rechercher :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>• Script : <code>SyncAppvPublishingServer.vbs</code> lancé par wscript.exe</li>
                      <li>• Variable : <code>ALLUSERSPROFILE_X</code> dans l'environnement</li>
                      <li>• PowerShell : Alias <code>gal i*x</code>, <code>gcm *stM*</code></li>
                      <li>• Réseau : Requêtes vers Google Calendar (.ics) contenant config C2</li>
                      <li>• Stéganographie : Téléchargement PNG suivi d'exécution binaire</li>
                      <li>• Clé XOR : <code>AMSI_RESULT_NOT_DETECTED</code></li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Section 8: Entreprises */}
              <section id="entreprises-reponse" className="mb-16" data-testid="section-entreprises">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-blue-600" />
                  8. Entreprises : Plan de Réponse Immédiat
                </h2>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">1. Restreindre la fenêtre Exécuter (Win+R)</h4>
                      <p className="text-muted-foreground mb-3">
                        Via GPO, désactivez ou restreignez l'accès à la boîte de dialogue Exécuter pour 
                        les utilisateurs qui n'en ont pas besoin.
                      </p>
                      <code className="block bg-muted p-3 rounded text-sm">
                        Configuration utilisateur → Modèles d'administration → Menu Démarrer et barre des tâches → 
                        Supprimer le menu Exécuter du menu Démarrer
                      </code>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">2. Désactiver SyncAppvPublishingServer.vbs</h4>
                      <p className="text-muted-foreground mb-3">
                        Si votre organisation n'utilise pas App-V, désactivez ou renommez ce script :
                      </p>
                      <code className="block bg-muted p-3 rounded text-sm">
                        C:\Windows\System32\SyncAppvPublishingServer.vbs → .vbs.disabled
                      </code>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">3. Restreindre PowerShell</h4>
                      <p className="text-muted-foreground">
                        Implémentez une politique d'exécution signée uniquement, bloquez l'exécution 
                        depuis les répertoires utilisateur, et activez le logging complet (Module Logging, 
                        Script Block Logging, Transcription).
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">4. Former les équipes</h4>
                      <p className="text-muted-foreground">
                        Sensibilisez tous les employés à cette menace spécifique. Message clé : 
                        "Aucun CAPTCHA légitime ne vous demandera jamais de copier-coller une commande 
                        dans Windows."
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">5. Déployer un EDR avancé</h4>
                      <p className="text-muted-foreground">
                        Investissez dans une solution avec détection comportementale et analyse mémoire. 
                        Les solutions recommandées : Microsoft Defender XDR, Bitdefender GravityZone, 
                        CrowdStrike Falcon, SentinelOne.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 9: Particuliers */}
              <section id="particuliers-securite" className="mb-16" data-testid="section-particuliers">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-indigo-600" />
                  9. Particuliers : Sécurisez Votre PC Windows
                </h2>

                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">
                    Checklist de Protection Immédiate
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span><strong>Ne JAMAIS</strong> copier-coller de commande dans Win+R depuis un site web</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Vérifier l'URL avant toute action - les faux CAPTCHA sont sur des domaines suspects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Activer l'authentification à deux facteurs sur tous vos comptes importants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Utiliser un gestionnaire de mots de passe (Bitwarden, 1Password, KeePass)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Installer un antivirus avec protection comportementale (Malwarebytes Premium, ESET)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Maintenir Windows et tous les logiciels à jour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <span>Utiliser un bloqueur de publicités (uBlock Origin) pour éviter le malvertising</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mb-4">Si vous pensez avoir été infecté</h3>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <strong>Déconnectez-vous immédiatement d'Internet</strong> (débranchez le câble ou désactivez le WiFi) 
                      pour stopper l'exfiltration des données.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <strong>Depuis un autre appareil sain</strong>, changez tous vos mots de passe (email en priorité, 
                      puis banque, réseaux sociaux, crypto).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <strong>Activez le 2FA</strong> sur tous les comptes critiques avant de vous reconnecter.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>
                      <strong>Lancez plusieurs analyses antivirus</strong> (Windows Defender, Malwarebytes, ESET Online Scanner).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 font-bold">5</span>
                    <div>
                      <strong>Surveillez vos comptes bancaires</strong> et signalez toute transaction suspecte.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 font-bold">6</span>
                    <div>
                      <strong>Envisagez une réinstallation complète</strong> de Windows si l'infection est confirmée.
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 10: Hébergement Sécurisé */}
              <section id="hebergement-securise" className="mb-16" data-testid="section-hebergement">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  10. L'Importance d'un Hébergement WordPress Sécurisé
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Un aspect souvent négligé de cette menace : les sites WordPress compromis sont fréquemment 
                  utilisés comme vecteurs d'infection ClickFix. Les attaquants injectent du JavaScript malveillant 
                  dans des sites légitimes piratés, qui affichent ensuite les faux CAPTCHA aux visiteurs innocents.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  En tant que propriétaire de site WordPress, vous avez une double responsabilité : protéger 
                  vos visiteurs et protéger votre réputation. Un site compromis peut être blacklisté par Google, 
                  détruisant votre SEO et votre crédibilité en quelques heures.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Pourquoi Kinsta est la solution idéale</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <strong>Pare-feu applicatif (WAF) :</strong> Bloque les injections JavaScript malveillantes 
                          avant qu'elles n'atteignent votre site.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <strong>Surveillance 24/7 :</strong> L'équipe sécurité de Kinsta détecte et neutralise 
                          les compromissions en temps réel.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <strong>Sauvegardes automatiques :</strong> Restaurez votre site en un clic en cas de compromission.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <strong>Isolation des sites :</strong> Chaque site est isolé dans son propre conteneur, 
                          empêchant la propagation d'une infection.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <strong>Infrastructure Google Cloud :</strong> Bénéficiez de la sécurité enterprise-grade 
                          de Google pour votre site.
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex justify-center mb-8">
                  <Button asChild size="lg" className="gap-2" data-testid="cta-kinsta">
                    <a href="https://kinsta.com/fr/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer">
                      Sécurisez votre site avec Kinsta
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </section>

              {/* Section 11: FAQ */}
              <section id="faq" className="mb-16" data-testid="section-faq">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                  11. FAQ : Questions Fréquentes
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger 
                        className="text-left font-medium"
                        data-testid={`faq-trigger-${index}`}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="text-muted-foreground leading-relaxed"
                        data-testid={`faq-content-${index}`}
                      >
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Section 12: Conclusion */}
              <section id="conclusion" className="mb-16" data-testid="section-conclusion">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  12. Conclusion et Recommandations Finales
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  La campagne ClickFix/Amatera représente une évolution majeure dans le paysage des cybermenaces. 
                  En exploitant la confiance naturelle des utilisateurs envers les interfaces familières d'Internet, 
                  les cybercriminels ont trouvé un moyen de contourner la quasi-totalité des protections techniques.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  La statistique est implacable : <strong>+517% d'augmentation en 2025</strong>. Cette technique 
                  est devenue le 2ème vecteur d'attaque le plus utilisé au monde, juste après le phishing classique. 
                  Et elle continue de se perfectionner.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <h3 className="font-bold text-xl mb-4">Les 3 règles d'or à retenir</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <span>
                        <strong>Jamais de copier-coller dans Win+R :</strong> Aucun site légitime ne vous 
                        demandera jamais d'exécuter une commande via la fenêtre Exécuter.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <span>
                        <strong>2FA partout :</strong> Même si vos mots de passe sont volés, l'authentification 
                        à deux facteurs empêche l'accès à vos comptes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <span>
                        <strong>Vigilance constante :</strong> Les cybercriminels comptent sur votre routine 
                        et votre distraction. Prenez toujours 5 secondes pour vérifier avant d'agir.
                      </span>
                    </li>
                  </ol>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  La cybersécurité est l'affaire de tous. Partagez cet article avec vos proches et collègues 
                  pour les sensibiliser à cette menace. La prévention reste la meilleure défense.
                </p>
              </section>

              {/* Sources */}
              <section className="mb-16" data-testid="section-sources">
                <h2 className="text-2xl font-bold mb-6">Sources et Références</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {sources.map((source, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                            data-testid={`source-${index}`}
                          >
                            {source.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Final */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl" data-testid="cta-final">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Protégez votre site WordPress des injections malveillantes
                </h2>
                <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Les sites WordPress compromis sont utilisés comme vecteurs d'attaque ClickFix. 
                  Avec Kinsta, bénéficiez d'une sécurité enterprise-grade et d'une surveillance 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2" data-testid="cta-kinsta-final">
                    <a href="https://kinsta.com/fr/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer">
                      Découvrir Kinsta
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2" data-testid="cta-audit">
                    <Link href="/audit-site">
                      Auditer mon site gratuitement
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Articles Connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card data-testid="related-1">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/article/barometre-cesin-2026-analyse-complete" className="hover:text-primary">
                      Baromètre CESIN 2026 : Moins d'Attaques, Plus d'Impacts
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analyse complète du 11ème baromètre de la cybersécurité des entreprises françaises.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="related-2">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/article/fuite-urssaf-12-millions-salaries-2026" className="hover:text-primary">
                      Fuite URSSAF : 12 Millions de Salariés Exposés
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Investigation sur la compromission massive des données de l'URSSAF.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="related-3">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/article/securite-wordpress-guide-2026" className="hover:text-primary">
                      Guide Sécurité WordPress 2026
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Toutes les bonnes pratiques pour sécuriser votre site WordPress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
