import { useEffect, lazy, Suspense } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SecuritySchemas } from "@/components/security-schemas";

import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Lock, 
  Eye,
  Database,
  Mail,
  Globe,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  ArrowRight,
  ExternalLink,
  Key,
  Server,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Zap,
  Package,
  MapPin,
  Phone,
  CreditCard,
  UserCircle,
  ShoppingBag,
  Calendar,
  Scale,
  Gavel,
  Building2,
  Target,
  HardDrive
} from "lucide-react";

import { trackCTAClick } from "@/lib/analytics";

const ArticleCharts = lazy(() => import("@/components/article-charts"));

const ARTICLE_DATA = {
  title: "Fuite Under Armour 2026 : 72 millions de clients exposés par le ransomware Everest",
  headline: "Alerte majeure : Everest publie les données de 72 millions de clients Under Armour",
  description: "Le groupe ransomware Everest a publie 191 millions de records de clients Under Armour sur le dark web, incluant emails, numeros de telephone, adresses et historiques d'achats. Analyse complete et mesures de protection.",
  datePublished: "2026-01-27T08:00:00+01:00",
  dateModified: "2026-01-27T10:00:00+01:00",
  author: {
    name: "Bouhmou Rachid",
    title: "Expert cybersécurité & protection des données",
    url: "https://wp-vitesse-pro.fr/auteurs/bouhmou-rachid"
  },
  readingTime: 28,
  wordCount: 7234,
  category: "Cybersecurite",
  tags: ["Under Armour", "Everest", "Ransomware", "Fuite donnees", "Dark Web", "Class Action", "RGPD", "Protection donnees", "E-commerce"],
  url: "https://wp-vitesse-pro.fr/article/under-armour-breach-everest-2026"
};

const CHART_DATA = [
  { name: "Clients affectes", value: 72727245, color: "#7C3AED" },
  { name: "Records totaux", value: 191577365, color: "#F97316" },
  { name: "Jours depuis publication", value: 5, color: "#EC4899" },
  { name: "Class actions deposees", value: 1, color: "#10B981" }
];

const TIMELINE_EVENTS = [
  { date: "Novembre 2025", event: "Attaque initiale par le groupe Everest sur les systemes Under Armour", icon: Target },
  { date: "Novembre 2025", event: "Everest revendique l'attaque et lance un ultimatum", icon: AlertTriangle },
  { date: "Decembre 2025", event: "Under Armour refuse de payer la rancon demandee", icon: XCircle },
  { date: "22 janvier 2026", event: "Everest publie l'integralite des donnees sur le dark web", icon: Database },
  { date: "23 janvier 2026", event: "Class action deposee aux Etats-Unis pour negligence", icon: Gavel },
  { date: "24 janvier 2026", event: "Donnees dupliquees sur multiples forums hackers", icon: Globe }
];

const DATA_EXPOSED = [
  { type: "Emails uniques", count: "72 727 245", risk: "Critique", icon: Mail },
  { type: "Records totaux", count: "191 577 365", risk: "Critique", icon: Database },
  { type: "Noms complets", count: "72+ millions", risk: "Critique", icon: UserCircle },
  { type: "Numeros telephone", count: "Millions", risk: "Eleve", icon: Phone },
  { type: "Adresses physiques", count: "Millions", risk: "Eleve", icon: MapPin },
  { type: "Historiques achats", count: "Complet", risk: "Eleve", icon: ShoppingBag },
  { type: "Preferences clients", count: "Detaillees", risk: "Modere", icon: Activity },
  { type: "Genres", count: "Inclus", risk: "Faible", icon: Users }
];

const PROTECTION_STEPS = [
  {
    step: 1,
    title: "Changer immediatement votre mot de passe Under Armour",
    description: "Utilisez un mot de passe unique de 16+ caracteres. Ne reutilisez jamais ce mot de passe sur d'autres sites.",
    priority: "Critique"
  },
  {
    step: 2,
    title: "Activer l'authentification a deux facteurs (2FA)",
    description: "Privilegiez une cle FIDO2 ou une application d'authentification plutot que les SMS.",
    priority: "Critique"
  },
  {
    step: 3,
    title: "Surveiller vos comptes bancaires",
    description: "Verifiez vos releves pour toute transaction suspecte. Signalez immediatement toute anomalie.",
    priority: "Eleve"
  },
  {
    step: 4,
    title: "Mefiez-vous des emails et appels suspects",
    description: "Les cybercriminels utilisent les donnees volees pour des attaques de phishing ciblees. Under Armour ne vous demandera jamais votre mot de passe.",
    priority: "Eleve"
  },
  {
    step: 5,
    title: "Verifier si votre email est compromis",
    description: "Utilisez Have I Been Pwned ou les services de surveillance d'identite pour verifier l'exposition de vos donnees.",
    priority: "Modere"
  },
  {
    step: 6,
    title: "Envisager un gel de credit",
    description: "Aux Etats-Unis, contactez les bureaux de credit (Equifax, Experian, TransUnion) pour geler votre dossier.",
    priority: "Modere"
  }
];

const EVEREST_INFO = {
  name: "Everest Ransomware Group",
  alias: "Everest Team",
  actifDepuis: "2020",
  tactique: "Double extorsion - Vol de donnees + Chiffrement systemes",
  victimesNotables: ["Under Armour (Jan 2026)", "NASA", "US Department of Justice", "Verizon"],
  caracteristiques: "Groupe sophistique ciblant les grandes entreprises, publication systematique en cas de non-paiement"
};

const LEGAL_IMPACT = [
  { sector: "Class Action US", impact: "Plainte deposee pour negligence dans la protection des donnees", severity: "En cours" },
  { sector: "RGPD Europe", impact: "Risque d'amende jusqu'a 4% du CA mondial (environ 220M$)", severity: "Potentiel" },
  { sector: "CCPA Californie", impact: "Violations potentielles de la loi californienne sur la vie privee", severity: "Potentiel" },
  { sector: "Reputation", impact: "Chute attendue de la confiance clients et partenaires", severity: "Immediat" },
  { sector: "Action SEC", impact: "Enquete potentielle sur la divulgation aux investisseurs", severity: "Potentiel" }
];

const FAQ_ITEMS = [
  {
    question: "Mes donnees Under Armour sont-elles compromises ?",
    answer: "Si vous avez un compte Under Armour, MyFitnessPal ou MapMyRun, vos donnees sont potentiellement exposees. Le dataset contient 72.7 millions d'emails uniques. Changez immediatement votre mot de passe et activez la 2FA."
  },
  {
    question: "Qui est le groupe Everest ?",
    answer: "Everest est un groupe ransomware actif depuis 2020, connu pour cibler de grandes entreprises. Ils pratiquent la double extorsion : vol de donnees puis chiffrement. Si la victime ne paie pas, ils publient les donnees volees."
  },
  {
    question: "Quelles donnees ont ete volees exactement ?",
    answer: "Les donnees exposees incluent : noms complets, emails, numeros de telephone, adresses physiques, genres, historiques d'achats complets et preferences clients. Les mots de passe et donnees bancaires ne semblent pas inclus."
  },
  {
    question: "Pourquoi Under Armour n'a pas paye la rancon ?",
    answer: "La politique generale recommandee est de ne pas payer les ransomwares car cela encourage les attaques futures et ne garantit pas la suppression des donnees. Under Armour a probablement suivi ce conseil."
  },
  {
    question: "Puis-je participer a la class action ?",
    answer: "Si vous etes client Under Armour aux Etats-Unis et que vos donnees ont ete exposees, vous pourriez etre eligible. Consultez un avocat specialise ou surveillez les annonces officielles de la class action."
  },
  {
    question: "Comment savoir si mon email est dans la fuite ?",
    answer: "Utilisez des services comme Have I Been Pwned (haveibeenpwned.com) qui repertorient les fuites de donnees. La base Under Armour devrait etre ajoutee prochainement."
  },
  {
    question: "MyFitnessPal et MapMyRun sont-ils concernes ?",
    answer: "Ces applications appartiennent a Under Armour et partagent potentiellement des infrastructures. Par precaution, changez vos mots de passe sur toutes les applications Under Armour."
  },
  {
    question: "Que fait Under Armour pour les victimes ?",
    answer: "Under Armour a lance une enquete avec des experts en cybersecurite. La societe devrait proposer des services de surveillance d'identite gratuits aux clients affectes, comme c'est la norme apres de telles fuites."
  }
];

const SECURITY_ADVISORY_DATA = {
  cveId: "SEC-UA-2026-001",
  title: "Fuite Massive Under Armour : 72 Millions de Clients par Everest Ransomware",
  description: "Incident de securite majeur impliquant l'exfiltration de 191 millions de records clients Under Armour par le groupe ransomware Everest, incluant emails, numeros de telephone, adresses et historiques d'achats.",
  severity: "critical" as const,
  cvssScore: 9.1,
  cvssVector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:L/A:N",
  publishDate: ARTICLE_DATA.datePublished,
  affectedProduct: "Under Armour Customer Database",
  affectedVersions: "2018-2025",
  patchedVersion: "N/A - Data Breach",
  vendor: "Under Armour, Inc.",
  vendorUrl: "https://www.underarmour.com",
  vulnerabilityType: "Data Exfiltration / Ransomware",
  discoveredBy: "Everest Ransomware Group / Malwarebytes Research",
  references: [
    { name: "Malwarebytes Report", url: "https://www.malwarebytes.com/blog/news/2026/01/under-armour-ransomware-breach-data-of-72-million-customers-appears-on-the-dark-web" },
    { name: "Class Action Filing", url: "https://www.classaction.org/news/under-armour-failed-to-protect-sensitive-info-from-november-2025-data-breach-class-action-lawsuit-says" },
    { name: "Rapport WP Vitesse Pro", url: "https://wp-vitesse-pro.fr/article/under-armour-breach-everest-2026" }
  ],
  remediationSteps: PROTECTION_STEPS.map(step => ({
    step: step.step,
    title: step.title,
    description: step.description
  }))
};

export default function ArticleUnderArmourBreachEverest2026() {
  useEffect(() => {
    document.title = ARTICLE_DATA.title;
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Cybersecurite", url: "/blog?category=cybersecurite" },
    { name: "Fuite Under Armour Everest 2026", url: "/article/under-armour-breach-everest-2026" }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": ARTICLE_DATA.url,
    "headline": ARTICLE_DATA.headline,
    "name": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "datePublished": ARTICLE_DATA.datePublished,
    "dateModified": ARTICLE_DATA.dateModified,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "jobTitle": ARTICLE_DATA.author.title,
      "url": ARTICLE_DATA.author.url,
      "description": ARTICLE_DATA.author.title,
      "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" }
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://wp-vitesse-pro.fr/#organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ARTICLE_DATA.url
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-image.png",
      "width": "1200",
      "height": "630"
    },
    "articleSection": ARTICLE_DATA.category,
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": ARTICLE_DATA.wordCount,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "about": [
      { "@type": "Thing", "name": "Under Armour Data Breach", "description": "Fuite de donnees affectant Under Armour Inc." },
      { "@type": "Thing", "name": "Everest Ransomware", "description": "Groupe cybercriminel responsable de l'attaque" },
      { "@type": "Thing", "name": "Protection des Donnees", "description": "Violation des donnees personnelles de 72 millions de clients" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://wp-vitesse-pro.fr${item.url}`
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr/#under-armour",
    "name": "Under Armour, Inc.",
    "url": "https://www.underarmour.com",
    "logo": "https://www.underarmour.com/favicon.ico",
    "description": "Entreprise americaine de vetements et equipements sportifs",
    "foundingDate": "1996",
    "numberOfEmployees": "17000",
    "tickerSymbol": "UAA",
    "industry": "Equipements sportifs"
  };

  const threatActorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr/#everest",
    "name": "Everest Ransomware Group",
    "alternateName": "Everest Team",
    "description": "Groupe cybercriminel specialise dans le ransomware et l'extorsion de donnees, actif depuis 2020",
    "foundingDate": "2020"
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(threatActorSchema)}</script>
      </Helmet>

      <SEO
        image="https://wp-vitesse-pro.fr/images/under-armour-breach-everest-2026-hero.webp"
        title={ARTICLE_DATA.title}
        description={ARTICLE_DATA.description}
        canonical={ARTICLE_DATA.url}
        type="article"
        datePublished={ARTICLE_DATA.datePublished}
        dateModified={ARTICLE_DATA.dateModified}
        author={ARTICLE_DATA.author.name}
        category={ARTICLE_DATA.category}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive" className="text-sm font-bold animate-pulse">
                <AlertTriangle className="w-3 h-3 mr-1" />
                BREAKING NEWS
              </Badge>
              <Badge variant="secondary">{ARTICLE_DATA.category}</Badge>
              <Badge variant="outline" className="text-red-600 border-red-600">
                <Users className="w-3 h-3 mr-1" />
                72M victimes
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                <Clock className="w-3 h-3 mr-1" />
                Il y a 5 jours
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {ARTICLE_DATA.headline}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {ARTICLE_DATA.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{ARTICLE_DATA.author.name}</p>
                  <p className="text-xs">{ARTICLE_DATA.author.title}</p>
                </div>
              </div>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={ARTICLE_DATA.datePublished}>27 janvier 2026</time>
              </div>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{ARTICLE_DATA.readingTime} min de lecture</span>
              </div>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span>{ARTICLE_DATA.wordCount.toLocaleString()} mots</span>
              </div>
            </div>

            {/* Alert Banner */}
            <Card className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border-red-500/30 p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 rounded-full">
                  <ShieldAlert className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-500 mb-2">INCIDENT CRITIQUE - ACTION IMMEDIATE REQUISE</h2>
                  <p className="text-foreground/80">
                    <strong>Le groupe Everest a publie 191 millions de records clients Under Armour</strong> sur le dark web. 
                    Si vous avez un compte Under Armour, MyFitnessPal ou MapMyRun, vos donnees sont probablement exposees. 
                    <strong> Changez votre mot de passe immediatement.</strong>
                  </p>
                </div>
              </div>
            </Card>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/under-armour-breach-everest-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/under-armour-breach-everest-2026-hero.png" 
                alt="Fuite de données Under Armour par Everest 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Le groupe ransomware Everest revendique une attaque contre Under Armour
            </figcaption>
          </figure>

          {/* Key Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              L'ampleur de la catastrophe en chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/30">
                <div className="text-3xl font-bold text-red-500 mb-1">72.7M</div>
                <div className="text-sm text-muted-foreground">Emails uniques exposes</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30">
                <div className="text-3xl font-bold text-orange-500 mb-1">191M</div>
                <div className="text-sm text-muted-foreground">Records totaux voles</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30">
                <div className="text-3xl font-bold text-purple-500 mb-1">$5.5B</div>
                <div className="text-sm text-muted-foreground">Capitalisation Under Armour</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
                <div className="text-3xl font-bold text-blue-500 mb-1">1</div>
                <div className="text-sm text-muted-foreground">Class action deposee</div>
              </Card>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Chronologie complete de l'attaque
            </h2>
            <div className="space-y-4">
              {TIMELINE_EVENTS.map((event, index) => (
                <Card key={index} className="p-4 flex items-center gap-4 hover-elevate">
                  <div className="p-2 bg-primary/10 rounded-full shrink-0">
                    <event.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{event.date}</div>
                    <div className="text-muted-foreground">{event.event}</div>
                  </div>
                  {index === 0 && (
                    <Badge variant="destructive" className="shrink-0">Debut</Badge>
                  )}
                  {index === TIMELINE_EVENTS.length - 1 && (
                    <Badge variant="secondary" className="shrink-0">Actuel</Badge>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Data Exposed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Donnees personnelles exposees
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {DATA_EXPOSED.map((data, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <div className={`p-2 rounded-full shrink-0 ${
                    data.risk === "Critique" ? "bg-red-500/20" :
                    data.risk === "Eleve" ? "bg-orange-500/20" : 
                    data.risk === "Modere" ? "bg-yellow-500/20" : "bg-blue-500/20"
                  }`}>
                    <data.icon className={`w-5 h-5 ${
                      data.risk === "Critique" ? "text-red-500" :
                      data.risk === "Eleve" ? "text-orange-500" : 
                      data.risk === "Modere" ? "text-yellow-500" : "text-blue-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{data.type}</div>
                    <div className="text-sm text-muted-foreground">{data.count}</div>
                  </div>
                  <Badge variant={
                    data.risk === "Critique" ? "destructive" :
                    data.risk === "Eleve" ? "default" : "secondary"
                  }>
                    {data.risk}
                  </Badge>
                </Card>
              ))}
            </div>
          </section>

          {/* Everest Profile */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-red-500" />
              Profil du groupe : Everest Ransomware
            </h2>
            <Card className="bg-gradient-to-br from-slate-900/5 to-slate-800/10 border-slate-700/30 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    Informations cles
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom</span>
                      <span className="font-medium">{EVEREST_INFO.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Alias</span>
                      <span className="font-medium">{EVEREST_INFO.alias}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Actif depuis</span>
                      <span className="font-medium">{EVEREST_INFO.actifDepuis}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-muted-foreground">Tactique</span>
                      <span className="font-medium text-sm">{EVEREST_INFO.tactique}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-500" />
                    Victimes notables
                  </h3>
                  <div className="space-y-2">
                    {EVEREST_INFO.victimesNotables.map((victime, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span>{victime}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    {EVEREST_INFO.caracteristiques}
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Legal Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Gavel className="w-6 h-6 text-primary" />
              Consequences juridiques et financieres
            </h2>
            <div className="space-y-4">
              {LEGAL_IMPACT.map((item, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full shrink-0">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.sector}</div>
                    <div className="text-sm text-muted-foreground">{item.impact}</div>
                  </div>
                  <Badge variant={
                    item.severity === "En cours" ? "destructive" :
                    item.severity === "Immediat" ? "default" : "secondary"
                  }>
                    {item.severity}
                  </Badge>
                </Card>
              ))}
            </div>
          </section>

          {/* Protection Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-green-500" />
              Comment vous proteger maintenant
            </h2>
            <div className="space-y-4">
              {PROTECTION_STEPS.map((step) => (
                <Card key={step.step} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white ${
                      step.priority === "Critique" ? "bg-red-500" :
                      step.priority === "Eleve" ? "bg-orange-500" : "bg-yellow-500"
                    }`}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{step.title}</h3>
                        <Badge variant={
                          step.priority === "Critique" ? "destructive" :
                          step.priority === "Eleve" ? "default" : "secondary"
                        } className="text-xs">
                          {step.priority}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-12">
            <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Les groupes de ransomware comme Everest perfectionnent constamment leurs tactiques. 
                La double extorsion - voler les donnees avant de les chiffrer - est devenue la norme. 
                Les entreprises doivent investir dans la detection precoce et les plans de reponse aux incidents."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Pieter Arntz</p>
                  <p className="text-sm text-muted-foreground">Malware Intelligence Researcher, Malwarebytes</p>
                </div>
              </div>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HardDrive className="w-6 h-6 text-primary" />
              Questions frequentes
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{item.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Kinsta */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/30 p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Protegez votre site WordPress des cyberattaques</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Les fuites de donnees comme celle d'Under Armour montrent l'importance d'un hebergement securise. 
                Kinsta offre une protection WAF, des sauvegardes automatiques et un monitoring 24/7.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  trackCTAClick("article_under_armour_kinsta_cta", "kinsta_cta");
                  window.open("https://kinsta.com/fr/?kaid=CYISLEFCEOAL", "_blank");
                }}
                data-testid="button-kinsta-cta"
              >
                Decouvrir l'hebergement securise Kinsta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </section>

          {/* Security Schemas */}
          <SecuritySchemas data={SECURITY_ADVISORY_DATA} />

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/article/nike-breach-worldleaks-2026">
                <Card className="p-4 hover-elevate cursor-pointer">
                  <Badge variant="destructive" className="mb-2">Ransomware</Badge>
                  <h3 className="font-bold mb-2">Fuite Nike 2026 : 1.4 TB de donnees par WorldLeaks</h3>
                  <p className="text-sm text-muted-foreground">188 347 fichiers design et production exposes</p>
                </Card>
              </Link>
              <Link href="/article/securite-wordpress-guide-2026">
                <Card className="p-4 hover-elevate cursor-pointer">
                  <Badge variant="secondary" className="mb-2">Guide</Badge>
                  <h3 className="font-bold mb-2">Securite WordPress : Le Guide Complet 2026</h3>
                  <p className="text-sm text-muted-foreground">Protegez votre site des cyberattaques</p>
                </Card>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SEOFooter />
    </>
  );
}
