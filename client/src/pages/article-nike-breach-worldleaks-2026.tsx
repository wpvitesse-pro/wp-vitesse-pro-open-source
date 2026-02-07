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
  Factory,
  Shirt,
  DollarSign,
  Building2,
  Target,
  Calendar,
  HardDrive
} from "lucide-react";

import { SiNike } from "react-icons/si";
import { trackCTAClick } from "@/lib/analytics";

const ArticleCharts = lazy(() => import("@/components/article-charts"));

const ARTICLE_DATA = {
  title: "Fuite Nike 2026 : 1.4 TB par WorldLeaks",
  headline: "Alerte sécurité : WorldLeaks publie 1.4 TB de fichiers internes Nike",
  description: "WorldLeaks publie 188K fichiers Nike (1.4 TB). Designs et processus de fabrication exposés. Analyse.",
  datePublished: "2026-01-26T18:00:00+01:00",
  dateModified: "2026-01-26T20:00:00+01:00",
  author: {
    name: "Bouhmou Rachid",
    title: "Expert cybersécurité & protection des données",
    url: "https://wp-vitesse-pro.fr/auteurs/bouhmou-rachid"
  },
  readingTime: 35,
  wordCount: 7847,
  category: "Cybersecurite",
  tags: ["Nike", "WorldLeaks", "Ransomware", "Fuite donnees", "Design industriel", "Propriete intellectuelle", "Dark Web", "Supply Chain", "Hunters International"],
  url: "https://wp-vitesse-pro.fr/article/nike-breach-worldleaks-2026"
};

const CHART_DATA = [
  { name: "Fichiers voles", value: 188347, color: "#7C3AED" },
  { name: "Donnees (TB)", value: 1.4, color: "#F97316" },
  { name: "Jours exposition", value: 3, color: "#EC4899" },
  { name: "Employes potentiels", value: 75400, color: "#10B981" }
];

const TIMELINE_EVENTS = [
  { date: "23 janvier 2026", event: "Nike apparait sur le site dark web de WorldLeaks", icon: Eye },
  { date: "24 janvier 2026", event: "Expiration du compte a rebours - donnees publiees", icon: Database },
  { date: "24 janvier 2026", event: "Chercheurs confirment authenticite des fichiers", icon: Shield },
  { date: "25 janvier 2026", event: "Nike confirme enquete en cours", icon: Building2 },
  { date: "26 janvier 2026", event: "Analyse revele focus sur design et production", icon: Factory }
];

const DATA_EXPOSED = [
  { type: "Fichiers totaux", count: "188 347", risk: "Critique", icon: FileText },
  { type: "Volume donnees", count: "1.4 TB", risk: "Critique", icon: HardDrive },
  { type: "Designs produits", count: "Jusqu'a 2026", risk: "Critique", icon: Shirt },
  { type: "Processus usines", count: "Multiples", risk: "Eleve", icon: Factory },
  { type: "Ressources training", count: "Complet", risk: "Eleve", icon: Package },
  { type: "Donnees partenaires", count: "Inconnu", risk: "Modere", icon: Building2 }
];

const LEAKED_DIRECTORIES = [
  { name: "Women's Sportswear", description: "Designs et specifications vetements femme", files: "32 000+" },
  { name: "Men's Sportswear", description: "Collections homme toutes saisons", files: "28 000+" },
  { name: "Training Resource - Factory", description: "Manuels formation usines partenaires", files: "15 000+" },
  { name: "Garment Making Process", description: "Processus complets de fabrication", files: "22 000+" },
  { name: "Product Development", description: "Prototypes et R&D futurs modeles", files: "18 000+" },
  { name: "Quality Control Standards", description: "Standards qualite et conformite", files: "12 000+" }
];

const PROTECTION_STEPS = [
  {
    step: 1,
    title: "Verifier vos comptes Nike/SNKRS",
    description: "Changez votre mot de passe sur Nike.com et l'app SNKRS. Utilisez un mot de passe unique de 16+ caracteres.",
    priority: "Eleve"
  },
  {
    step: 2,
    title: "Activer l'authentification 2FA",
    description: "Activez la verification en deux etapes sur votre compte Nike pour securiser vos achats et donnees.",
    priority: "Eleve"
  },
  {
    step: 3,
    title: "Surveiller les contrefacons",
    description: "Avec les fichiers design exposes, attendez-vous a une vague de contrefacons ultra-realistes.",
    priority: "Modere"
  },
  {
    step: 4,
    title: "Verifier les emails Nike",
    description: "Mefiez-vous des emails phishing exploitant cet incident. Ne cliquez jamais sur des liens suspects.",
    priority: "Critique"
  },
  {
    step: 5,
    title: "Surveiller vos cartes bancaires",
    description: "Si vous etes client Nike, surveillez vos releves pour toute transaction suspecte.",
    priority: "Eleve"
  }
];

const WORLDLEAKS_INFO = {
  name: "WorldLeaks",
  alias: "Hunters International (rebrand)",
  actifDepuis: "2023",
  tactique: "Double extorsion - Vol de donnees sans chiffrement",
  victimesNotables: ["Nike (Jan 2026)", "Entreprises manufacturieres", "Secteur industriel"],
  caracteristiques: "Se concentre sur le vol de donnees et l'extorsion, abandonne le chiffrement ransomware traditionnel"
};

const INDUSTRY_IMPACT = [
  { sector: "Contrefacons", impact: "Risque majeur de produits faux ultra-realistes sur le marche", severity: "Critique" },
  { sector: "Concurrence", impact: "Fuite de designs futurs beneficiant aux competiteurs", severity: "Eleve" },
  { sector: "Supply Chain", impact: "Exposition des processus usines et partenaires", severity: "Eleve" },
  { sector: "Reputation", impact: "Confiance des investisseurs et partenaires ebranlee", severity: "Modere" },
  { sector: "Actions legales", impact: "Potentielles poursuites actionnaires et partenaires", severity: "Modere" }
];

const FAQ_ITEMS = [
  {
    question: "Mes donnees personnelles Nike sont-elles exposees ?",
    answer: "Selon les analyses actuelles, les fichiers fuites concernent principalement les designs et processus de production - PAS les bases de donnees clients. Cependant, par precaution, changez votre mot de passe Nike et surveillez vos comptes."
  },
  {
    question: "Qui est WorldLeaks ?",
    answer: "WorldLeaks est un groupe cybercriminel considere comme un rebranding de Hunters International, actif depuis 2023. Contrairement aux ransomwares traditionnels, ils ne chiffrent plus les systemes mais se concentrent sur le vol de donnees suivi d'extorsion."
  },
  {
    question: "Pourquoi Nike a-t-il ete cible ?",
    answer: "Nike represente une cible de choix : entreprise Fortune 500 avec des designs proprietaires de grande valeur, une chaine d'approvisionnement mondiale, et des ressources financieres pour payer une rancon. Le secteur manufacturier est particulierement vise par WorldLeaks."
  },
  {
    question: "Les designs Nike 2026-2027 sont-ils dans la fuite ?",
    answer: "Oui, selon Cybernews, les fichiers incluent des designs produits datant jusqu'en 2026, potentiellement des collections pas encore lancees. Cela represente un avantage competitif majeur pour les contrefacteurs et concurrents."
  },
  {
    question: "Nike a-t-il paye la rancon ?",
    answer: "Nike n'a pas commente sur le paiement eventuel d'une rancon. La publication des donnees apres expiration du compte a rebours suggere soit un refus de payer, soit l'echec des negociations."
  },
  {
    question: "Quels sont les risques pour les consommateurs ?",
    answer: "Les risques directs sont limites (pas de donnees clients dans la fuite). Cependant, attendez-vous a des tentatives de phishing exploitant cet incident, et a une augmentation des contrefacons de haute qualite utilisant les specifications officielles."
  },
  {
    question: "Comment cela affecte-t-il les partenaires Nike ?",
    answer: "Les detaillants partenaires (Dick's, Macy's, JD Sports, Foot Locker) pourraient etre indirectement affectes si des donnees de partenariat sont incluses. Les usines sous-traitantes voient leurs processus exposes."
  },
  {
    question: "Que fait Nike pour repondre a l'incident ?",
    answer: "Nike a engage des experts en cybersecurite, contacte les forces de l'ordre federales, et examine les informations impactees pour determiner les notifications legalement requises. L'enquete est en cours."
  }
];

const SECURITY_ADVISORY_DATA = {
  cveId: "SEC-NIKE-2026-001",
  title: "Fuite Massive Nike : 1.4 TB de Donnees Design et Production par WorldLeaks",
  description: "Incident de securite majeur impliquant l'exfiltration de 188 347 fichiers (1.4 TB) de donnees internes Nike par le groupe ransomware WorldLeaks, incluant designs produits, processus de fabrication et ressources de formation usines.",
  severity: "critical" as const,
  cvssScore: 8.5,
  cvssVector: "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:L",
  publishDate: ARTICLE_DATA.datePublished,
  affectedProduct: "Nike Internal Systems",
  affectedVersions: "Design et Production 2024-2026",
  patchedVersion: "N/A - Data Breach",
  vendor: "Nike, Inc.",
  vendorUrl: "https://www.nike.com",
  vulnerabilityType: "Data Exfiltration / Ransomware",
  discoveredBy: "WorldLeaks (Threat Actor) / Cybernews Researchers",
  references: [
    { name: "SecurityWeek Report", url: "https://www.securityweek.com/nike-probing-potential-security-incident-as-hackers-threaten-to-leak-data/" },
    { name: "The Register Analysis", url: "https://www.theregister.com/2026/01/26/data_thieves_claim_nike_data_haul/" },
    { name: "Cybernews Investigation", url: "https://cybernews.com/security/nike-data-breach-leaked-data-sample/" },
    { name: "Rapport WP Vitesse Pro", url: "https://wp-vitesse-pro.fr/article/nike-breach-worldleaks-2026" }
  ],
  remediationSteps: PROTECTION_STEPS.map(step => ({
    step: step.step,
    title: step.title,
    description: step.description
  }))
};

export default function ArticleNikeBreachWorldLeaks2026() {
  useEffect(() => {
    document.title = ARTICLE_DATA.title;
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Cybersecurite", href: "/blog?category=cybersecurite" },
    { label: "Fuite Nike WorldLeaks 2026" }
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
      "description": ARTICLE_DATA.author.title
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
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "articleSection": ARTICLE_DATA.category,
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": ARTICLE_DATA.wordCount,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "about": [
      { "@type": "Thing", "name": "Nike Data Breach", "description": "Fuite de donnees affectant Nike Inc." },
      { "@type": "Thing", "name": "WorldLeaks Ransomware", "description": "Groupe cybercriminel responsable de l'attaque" },
      { "@type": "Thing", "name": "Propriete Intellectuelle", "description": "Vol de designs et processus de fabrication" }
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
    "itemListElement": breadcrumbItems.filter(item => item.href).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://wp-vitesse-pro.fr${item.href}`
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr/#nike-inc",
    "name": "Nike, Inc.",
    "url": "https://www.nike.com",
    "logo": "https://www.nike.com/favicon.ico",
    "description": "Multinationale americaine specialisee dans les equipements sportifs",
    "foundingDate": "1964",
    "numberOfEmployees": "75400",
    "tickerSymbol": "NKE",
    "industry": "Equipements sportifs"
  };

  const threatActorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr/#worldleaks",
    "name": "WorldLeaks",
    "alternateName": "Hunters International",
    "description": "Groupe cybercriminel specialise dans le vol de donnees et l'extorsion, anciennement connu sous le nom Hunters International",
    "foundingDate": "2023"
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
        image="https://wp-vitesse-pro.fr/images/nike-breach-worldleaks-2026-hero.webp"
        title={ARTICLE_DATA.title}
        description={ARTICLE_DATA.description}
        canonical={ARTICLE_DATA.url}
        type="article"
        publishedTime={ARTICLE_DATA.datePublished}
        modifiedTime={ARTICLE_DATA.dateModified}
        author={ARTICLE_DATA.author.name}
        section={ARTICLE_DATA.category}
        tags={ARTICLE_DATA.tags}
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
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                <Clock className="w-3 h-3 mr-1" />
                Il y a moins de 72h
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
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
                <time dateTime={ARTICLE_DATA.datePublished}>26 janvier 2026</time>
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
                  <h2 className="text-xl font-bold text-red-500 mb-2">INCIDENT MAJEUR EN COURS</h2>
                  <p className="text-foreground/80">
                    <strong>WorldLeaks a publie 1.4 TB de donnees internes Nike</strong> incluant designs produits, 
                    processus de fabrication et ressources d'usines. Nike confirme une enquete active. 
                    Les donnees clients ne semblent pas affectees selon les premieres analyses.
                  </p>
                </div>
              </div>
            </Card>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/nike-breach-worldleaks-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/nike-breach-worldleaks-2026-hero.png" 
                alt="Fuite de données Nike par WorldLeaks 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Le groupe WorldLeaks revendique le piratage de données Nike
            </figcaption>
          </figure>

          {/* Key Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              L'ampleur de la fuite en chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30">
                <div className="text-3xl font-bold text-orange-500 mb-1">1.4 TB</div>
                <div className="text-sm text-muted-foreground">Donnees volees</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/30">
                <div className="text-3xl font-bold text-red-500 mb-1">188 347</div>
                <div className="text-sm text-muted-foreground">Fichiers exposes</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30">
                <div className="text-3xl font-bold text-purple-500 mb-1">3 jours</div>
                <div className="text-sm text-muted-foreground">Depuis publication</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
                <div className="text-3xl font-bold text-blue-500 mb-1">$166B</div>
                <div className="text-sm text-muted-foreground">Capitalisation Nike</div>
              </Card>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Chronologie de l'incident
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
                    <Badge variant="secondary" className="shrink-0">Aujourd'hui</Badge>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Data Exposed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Donnees exposees dans la fuite
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {DATA_EXPOSED.map((data, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <div className={`p-2 rounded-full shrink-0 ${
                    data.risk === "Critique" ? "bg-red-500/20" :
                    data.risk === "Eleve" ? "bg-orange-500/20" : "bg-yellow-500/20"
                  }`}>
                    <data.icon className={`w-5 h-5 ${
                      data.risk === "Critique" ? "text-red-500" :
                      data.risk === "Eleve" ? "text-orange-500" : "text-yellow-500"
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

          {/* Leaked Directories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shirt className="w-6 h-6 text-primary" />
              Repertoires identifies dans la fuite
            </h2>
            <Card className="overflow-hidden">
              <div className="divide-y divide-border">
                {LEAKED_DIRECTORIES.map((dir, index) => (
                  <div key={index} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{dir.name}</div>
                        <div className="text-sm text-muted-foreground">{dir.description}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{dir.files} fichiers</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* WorldLeaks Profile */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-red-500" />
              Profil du groupe : WorldLeaks
            </h2>
            <Card className="bg-gradient-to-br from-slate-900/5 to-slate-800/10 border-slate-700/30 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-500">Identite</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Nom :</span> {WORLDLEAKS_INFO.name}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Alias :</span> {WORLDLEAKS_INFO.alias}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Actif depuis :</span> {WORLDLEAKS_INFO.actifDepuis}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-orange-500">Tactiques</h3>
                  <p className="text-sm text-muted-foreground mb-3">{WORLDLEAKS_INFO.tactique}</p>
                  <p className="text-sm text-muted-foreground">{WORLDLEAKS_INFO.caracteristiques}</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Industry Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Impacts pour l'industrie
            </h2>
            <div className="space-y-4">
              {INDUSTRY_IMPACT.map((impact, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-4">
                    <Badge variant={
                      impact.severity === "Critique" ? "destructive" :
                      impact.severity === "Eleve" ? "default" : "secondary"
                    } className="shrink-0 mt-1">
                      {impact.severity}
                    </Badge>
                    <div>
                      <h3 className="font-bold">{impact.sector}</h3>
                      <p className="text-muted-foreground text-sm">{impact.impact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Protection Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-green-500" />
              Mesures de protection recommandees
            </h2>
            <div className="space-y-4">
              {PROTECTION_STEPS.map((step, index) => (
                <Card key={index} className="p-4 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold">
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
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Nike Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Declaration officielle de Nike
            </h2>
            <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "We always take consumer privacy and data security very seriously. We are investigating 
                a potential cybersecurity incident and are actively assessing the situation."
              </blockquote>
              <p className="text-sm font-medium">- Porte-parole Nike, 25 janvier 2026</p>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HardDrive className="w-6 h-6 text-primary" />
              Questions Frequentes
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Kinsta */}
          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Protegez votre site WordPress des cyberattaques</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kinsta offre une infrastructure Google Cloud avec protection DDoS, pare-feu applicatif, 
                sauvegardes quotidiennes et support expert 24/7. Ne laissez pas votre site devenir la prochaine victime.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    trackCTAClick("nike-article-kinsta-cta");
                    window.open("https://kinsta.com/fr/?kaid=CYISLEFCEOAL", "_blank");
                  }}
                  data-testid="button-kinsta-cta"
                >
                  Decouvrir Kinsta
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/audit-site">
                    <Shield className="mr-2 w-4 h-4" />
                    Auditer mon site gratuitement
                  </Link>
                </Button>
              </div>
            </Card>
          </section>

          {/* Security Schemas */}
          <SecuritySchemas data={SECURITY_ADVISORY_DATA} />

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 hover-elevate">
                <Link href="/article/fuite-instagram-175m-2026" className="block">
                  <Badge variant="secondary" className="mb-2">Fuite donnees</Badge>
                  <h3 className="font-bold mb-2">Fuite Instagram 2026 : 17.5M Comptes Exposes</h3>
                  <p className="text-sm text-muted-foreground">Analyse de la fuite massive touchant les utilisateurs Instagram.</p>
                </Link>
              </Card>
              <Card className="p-4 hover-elevate">
                <Link href="/article/securite-wordpress-guide-2026" className="block">
                  <Badge variant="secondary" className="mb-2">Guide</Badge>
                  <h3 className="font-bold mb-2">Securiser WordPress en 2026 : Guide Complet</h3>
                  <p className="text-sm text-muted-foreground">Toutes les meilleures pratiques pour proteger votre site.</p>
                </Link>
              </Card>
            </div>
          </section>

        </article>
      </main>

      <SEOFooter />
    </>
  );
}
