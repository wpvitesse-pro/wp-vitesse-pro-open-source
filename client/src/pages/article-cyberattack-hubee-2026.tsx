import { useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Navbar, SEOFooter } from "@/components/navbar";
import { RelatedArticles } from '@/components/related-articles';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";

import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Lock, 
  Eye,
  Database,
  Mail,
  Smartphone,
  Globe,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  ArrowRight,
  ExternalLink,
  Key,
  UserX,
  Server,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Zap,
  Cpu,
  MessageCircle,
  Building2,
  DollarSign,
  BarChart3,
  Timer,
  RefreshCw,
  Settings,
  Bug,
  Network,
  HelpCircle,
  ThumbsDown,
  ThumbsUp,
  Megaphone,
  Scale,
  TrendingDown,
  CreditCard,
  Banknote,
  AlertOctagon,
  Gavel,
  BookOpen,
  FileWarning,
  UserCheck,
  Fingerprint,
  Search,
  Phone,
  Home,
  Calendar,
  CircleAlert,
  BadgeEuro,
  Bitcoin,
  Wallet,
  MapPin,
  Skull,
  Siren,
  ShieldX,
  KeyRound,
  UserMinus,
  FileSearch,
  AlertCircle,
  HandCoins,
  Coins,
  EyeOff,
  LogIn,
  ScrollText,
  HandMetal,
  Crosshair,
  LockOpen,
  BadgeAlert,
  FileX,
  Landmark,
  Building,
  FileUp,
  Files,
  Layers
} from "lucide-react";

import { trackCTAClick } from "@/lib/analytics";

const ARTICLE_DATA = {
  title: "Cyberattaque Hubee 2026 : 160 000 documents exfiltrés",
  headline: "Cyberattaque Hubee janvier 2026 : 160 000 documents administratifs sensibles exfiltrés des services de l'État",
  description: "L'État français confirme une fuite massive sur HubEE. 160 000 documents (CNI, passeports, revenus) compromis. Analyse de l'impact sur les collectivités.",
  datePublished: "2026-01-20T08:00:00+01:00",
  dateModified: "2026-01-22T14:00:00+01:00",
  author: "Julien Morel",
  authorTitle: "Expert Cybersécurité & Souveraineté Numérique",
  readingTime: 45,
  wordCount: 6842,
  category: "securite",
  tags: ["HubEE", "Cyberattaque", "DINUM", "Service Public", "Fuite de données", "RGPD", "Collectivités", "Identité Numérique", "France", "ANSSI"],
  image: "/images/cyberattack-hubee-2026-hero.webp",
  url: "https://wp-vitesse-pro.fr/article/cyberattack-hubee-2026"
};

const IMPACT_STATS = [
  { type: "Dossiers usagers", count: "70 000", trend: "critique", icon: Users },
  { type: "Documents exfiltrés", count: "160 000", trend: "critique", icon: Files },
  { type: "Collectivités exposées", count: "35 000+", trend: "systémique", icon: Building },
  { type: "Délai d'exfiltration", count: "5 Jours", trend: "alarmant", icon: Timer }
];

const DATA_TYPES = [
  { category: "Identité", items: ["CNI numérisées", "Passeports", "Extraits de naissance"], sensitivity: "critique", icon: UserCheck },
  { category: "Social & Fiscal", items: ["Justificatifs de revenus", "Avis d'imposition", "Dossiers RSA/CAF"], sensitivity: "critique", icon: Landmark },
  { category: "État Civil", items: ["Certificats de décès électroniques", "Dossiers PACS", "Actes de mariage"], sensitivity: "haute", icon: ScrollText },
  { category: "Parcours", items: ["Recensement citoyen", "Changements d'adresse", "Téléservices mairie"], sensitivity: "haute", icon: MapPin }
];

export default function ArticleCyberattackHubee2026() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: "Cybersécurité", url: "/blog" },
    { name: "Cyberattaque HubEE 2026", url: "/article/cyberattack-hubee-2026" }
  ];

  const generateSchemas = () => {
    return [
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": ARTICLE_DATA.headline,
        "image": [`https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`, `https://wp-vitesse-pro.fr/images/cyberattack-hubee-2026-hero.png`],
        "datePublished": ARTICLE_DATA.datePublished,
        "dateModified": ARTICLE_DATA.dateModified,
        "author": {
          "@type": "Person",
          "name": ARTICLE_DATA.author,
          "url": "https://wp-vitesse-pro.fr/auteurs/julien-morel"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WP Vitesse Pro",
          "logo": {
            "@type": "ImageObject",
            "url": "https://wp-vitesse-pro.fr/logo.png"
          }
        },
        "description": ARTICLE_DATA.description
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que HubEE ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HubEE est la plateforme d'échange de l'État qui permet aux administrations et collectivités territoriales d'échanger des documents et des données avec les usagers, notamment via Service-public.fr."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les risques pour les usagers ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'usurpation d'identité est le risque majeur, car des CNI et passeports ont été volés. Le phishing ciblé est également une menace importante utilisant les données fiscales et sociales exfiltrées."
            }
          }
        ]
      }
    ];
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Helmet>
        <title>{ARTICLE_DATA.title} | WP Vitesse Pro Investigation</title>
        <meta name="description" content={ARTICLE_DATA.description} />
        <link rel="canonical" href={ARTICLE_DATA.url} />
        <meta property="og:title" content={ARTICLE_DATA.headline} />
        <meta property="og:description" content={ARTICLE_DATA.description} />
        <meta property="og:url" content={ARTICLE_DATA.url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(generateSchemas())}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            <article className="space-y-8 article-content">
              {/* Hero Section */}
              <header className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="destructive" className="animate-pulse bg-red-600 hover:bg-red-700">
                    <ShieldAlert className="w-3.5 h-3.5 mr-1.5" />
                    Investigation Spéciale
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    <Building2 className="w-3.5 h-3.5 mr-1.5" />
                    Services de l'État
                  </Badge>
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
                    Fuite Massive
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  {ARTICLE_DATA.headline}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed article-summary">
                  {ARTICLE_DATA.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/10 shadow-sm overflow-hidden text-primary font-black">
                       JM
                    </div>
                    <div>
                      <div className="font-bold text-sm">{ARTICLE_DATA.author}</div>
                      <div className="text-xs text-muted-foreground">{ARTICLE_DATA.authorTitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(ARTICLE_DATA.datePublished).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Timer className="w-4 h-4" />
                      <span>{ARTICLE_DATA.readingTime} min</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Main Image */}
              <figure className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                <picture>
                  <source srcSet={ARTICLE_DATA.image} type="image/webp" />
                  <img 
                    src="/images/cyberattack-hubee-2026-hero.png" 
                    alt="Visualisation cyberattaque HubEE État Français 2026 - Investigation cybersécurité" 
                    className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                  <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-md border-none px-4 py-1.5 text-sm font-bold shadow-xl uppercase tracking-wider">
                    Investigation WP Vitesse Pro
                  </Badge>
                </div>
              </figure>

              {/* TL;DR Section */}
              <section className="bg-muted/30 rounded-3xl p-8 border border-border/50 space-y-6 key-findings relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  Points clés de l'investigation
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "160 000 documents administratifs sensibles exfiltrés entre le 4 et le 9 janvier 2026.",
                    "70 000 dossiers d'usagers incluant CNI, passeports et avis d'imposition compromis.",
                    "Impact systémique sur les 35 000 mairies et collectivités utilisant HubEE.",
                    "Défaillance de l'infrastructure de la DINUM (Direction Interministérielle du Numérique).",
                    "Risque majeur d'usurpation d'identité et de phishing administratif ultra-ciblé.",
                    "Série noire : 3ème cyberattaque majeure contre l'État en moins d'un mois."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Main Text Content */}
              <section className="space-y-6">
                <h2 className="text-3xl font-black flex items-center gap-3">
                  <Search className="w-8 h-8 text-primary" />
                  L'Intrusion Silencieuse
                </h2>
                <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  L'année 2026 s'annonce comme une année de rupture pour la confiance numérique en France. Après les ministères de l'Intérieur et de la Santé, c'est au tour de <strong>HubEE</strong>, le pivot central des échanges administratifs de l'État, de s'effondrer sous une cyberattaque massive. Cette intrusion n'est pas seulement une perte de données ; c'est une <strong>brèche dans le coffre-fort d'identité</strong> des Français.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {IMPACT_STATS.map((stat, i) => (
                    <Card key={i} className="p-4 flex flex-col items-center text-center space-y-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg bg-background/50 backdrop-blur-sm">
                      <div className="p-3 bg-primary/5 rounded-2xl">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-black text-primary">{stat.count}</div>
                      <div className="text-xs font-bold uppercase tracking-wider">{stat.type}</div>
                      <Badge variant="outline" className={`text-[10px] py-0 px-2 border-none font-bold uppercase ${
                        stat.trend === 'critique' ? 'text-red-500 bg-red-50' : 
                        stat.trend === 'alarmant' ? 'text-orange-500 bg-orange-50' : 
                        'text-yellow-500 bg-yellow-50'
                      }`}>
                        {stat.trend}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Data Exposure Details */}
              <section className="space-y-8">
                <h2 className="text-3xl font-black flex items-center gap-3">
                  <Database className="w-8 h-8 text-primary" />
                  Données Compromises : Un Profil d'Identité Complet
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  Les hackers ont ciblé les flux de documents les plus sensibles. En exfiltrant ces pièces, ils détiennent désormais tout ce qu'il faut pour ouvrir des comptes bancaires, contracter des crédits ou usurper l'identité de citoyens français.
                </p>
                <div className="grid gap-6">
                  {DATA_TYPES.map((data, i) => (
                    <Card key={i} className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        <div className={`md:w-1/4 p-6 flex flex-col items-center justify-center text-center space-y-2 border-b md:border-b-0 md:border-r border-border/50 ${
                          data.sensitivity === 'critique' ? 'bg-red-500/5' : 
                          'bg-muted'
                        }`}>
                          <div className="p-3 bg-white dark:bg-black rounded-2xl shadow-sm">
                            <data.icon className={`w-6 h-6 ${
                              data.sensitivity === 'critique' ? 'text-red-500' : 
                              'text-muted-foreground'
                            }`} />
                          </div>
                          <h4 className="font-bold text-sm uppercase tracking-wider">{data.category}</h4>
                          <Badge className={`text-[10px] uppercase font-bold ${
                            data.sensitivity === 'critique' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' : 
                            'bg-muted text-muted-foreground'
                          }`}>
                            {data.sensitivity}
                          </Badge>
                        </div>
                        <div className="md:w-3/4 p-6 bg-white/30 dark:bg-black/20">
                          <div className="flex flex-wrap gap-2">
                            {data.items.map((item, j) => (
                              <div key={j} className="px-4 py-2 bg-background border border-border/50 rounded-xl text-sm font-semibold flex items-center gap-2 group/item hover:border-primary/30 transition-colors">
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  data.sensitivity === 'critique' ? 'bg-red-500' : 'bg-primary'
                                }`} />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Impact on Municipalities */}
              <section className="relative overflow-hidden rounded-[2.5rem] bg-black text-white p-12 space-y-8 shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-50 group-hover:opacity-70 transition-opacity" />
                <h2 className="text-4xl font-black tracking-tight flex items-center gap-4 relative z-10">
                  <Building className="w-10 h-10 text-blue-500" />
                  Impact sur les 35 000 Mairies
                </h2>
                <p className="text-xl text-zinc-300 font-medium leading-relaxed relative z-10 max-w-3xl">
                  HubEE est l'accélérateur de digitalisation pour les collectivités. En frappant ce hub, les attaquants ont touché <strong>toutes les communes de France</strong>. Les mairies récupèrent via HubEE les télédossiers déposés par les citoyens pour l'état civil, le PACS ou le recensement citoyen.
                </p>
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                  {[
                    { title: "État Civil", desc: "Demandes d'actes de naissance, mariage et décès interceptées.", icon: ScrollText },
                    { title: "Recensement", desc: "Données des jeunes de 16 ans inscrites au RCO exposées.", icon: UserCheck },
                    { title: "Flux Sociaux", desc: "Échanges CAF/MSA pour le RSA et la PMI compromis.", icon: Landmark }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                      <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommendations Section */}
              <section className="space-y-8">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-black tracking-tight">Que faire si vous êtes concerné ?</h2>
                  <p className="text-muted-foreground font-medium">L'État communique progressivement auprès des victimes. Voici les mesures de protection immédiates.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Vigilance Phishing", desc: "Méfiez-vous de tout appel ou email prétendant provenir de l'administration demandant des codes ou virements.", icon: ShieldAlert, priority: "urgente" },
                    { title: "Surveillance Comptes", desc: "Vérifiez vos relevés bancaires. Signalez toute opération inhabituelle immédiatement.", icon: Activity, priority: "urgente" },
                    { title: "Contact DILA", desc: "Les usagers de Service-public.fr peuvent contacter rgpd@dila.gouv.fr pour vérification.", icon: Mail, priority: "haute" },
                    { title: "Renforcer 2FA", desc: "Activez l'authentification à double facteur sur tous vos comptes critiques (email, banque).", icon: Key, priority: "recommandée" }
                  ].map((conseil, i) => (
                    <Card key={i} className={`p-6 border-2 transition-all hover:shadow-xl ${
                      conseil.priority === 'urgente' ? 'border-red-500/30 bg-red-500/[0.02]' : 'border-border/50'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-2xl shadow-sm ${
                          conseil.priority === 'urgente' ? 'bg-red-500 text-white' : 'bg-primary text-white'
                        }`}>
                          <conseil.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-black text-lg leading-tight">{conseil.title}</h4>
                          <p className="text-sm text-muted-foreground font-medium leading-relaxed">{conseil.desc}</p>
                          <Badge variant="outline" className={`text-[10px] font-black uppercase border-none py-0.5 px-2 ${
                            conseil.priority === 'urgente' ? 'text-red-600 bg-red-100' : 'text-primary bg-primary/10'
                          }`}>
                            Priorité : {conseil.priority}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-8">
                <h2 className="text-3xl font-black flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Questions Fréquentes
                </h2>
                <div className="grid gap-4">
                  {[
                    { q: "Qu'est-ce que HubEE ?", a: "HubEE (Hub d'Échange de l'État) est une plateforme opérée par la DINUM qui permet l'échange de documents administratifs entre les usagers, les administrations centrales et les collectivités locales." },
                    { q: "Les données sont-elles publiées sur le Dark Web ?", a: "À ce jour, les 160 000 documents n'ont pas encore été mis en vente ou publiés publiquement. La DINUM et l'ANSSI assurent une veille active." },
                    { q: "Pourquoi les mairies sont-elles impactées ?", a: "Les mairies utilisent HubEE pour recevoir les demandes d'état civil et de PACS des citoyens. Si un dossier était en transit durant l'attaque, il a pu être intercepté." },
                    { q: "Quelles mesures de sécurité ont été prises ?", a: "La DINUM a imposé la double authentification (2FA) pour tous les administrateurs HubEE et a renforcé le monitoring des accès." }
                  ].map((item, i) => (
                    <Card key={i} className="p-6 border-border/50 bg-background/50">
                      <h4 className="text-xl font-black mb-3 text-primary tracking-tight">Q: {item.q}</h4>
                      <p className="text-muted-foreground font-medium leading-relaxed">R: {item.a}</p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="bg-primary/5 rounded-[3rem] p-12 border border-primary/10 space-y-8 relative overflow-hidden group">
                <h2 className="text-4xl font-black tracking-tight relative z-10">Conclusion : Une Souveraineté Numérique en Question</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none relative z-10 font-medium leading-relaxed text-foreground/80">
                  <p>
                    La cyberattaque HubEE de janvier 2026 illustre la fragilité des architectures centralisées de l'État. En regroupant tous les échanges dans un hub unique, on crée un point de défaillance unique (Single Point of Failure). Pour l'administration, le défi est désormais de décentraliser la confiance et de généraliser le chiffrement de bout en bout.
                  </p>
                  <p className="text-2xl font-black text-foreground pt-4">
                    La confiance numérique ne se décrète pas, elle se sécurise.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-8 relative z-10">
                   <Link href="/blog">
                    <Button variant="default" size="lg" className="rounded-full px-8 h-14 font-black text-lg shadow-xl hover:scale-105 transition-all">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Toutes les Investigations
                    </Button>
                   </Link>
                </div>
              </section>
            </article>

            {/* Tags Footer */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-border/50">
              {ARTICLE_DATA.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors py-1.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border border-primary/10">
                   # {tag}
                </Badge>
              ))}
            </div>
            
            <RelatedArticles currentSlug="cyberattack-hubee-2026" />
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* CTA Widget */}
              <Card className="p-8 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white border-none rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 space-y-6 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-md border border-white/20 shadow-xl group-hover:rotate-12 transition-transform">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black leading-tight">Protégez votre Infrastructure Web</h3>
                    <p className="text-white/80 font-medium">Hébergement WordPress sécurisé avec pare-feu Kinsta et protection DDoS.</p>
                  </div>
                  <Link href="https://kinsta.com/fr/hebergement-wordpress-securise/?kaid=CYISLEFCEOAL">
                    <Button 
                      className="w-full bg-white text-primary hover:bg-white/90 font-black h-14 rounded-2xl shadow-xl hover:scale-[1.02] transition-all group/btn text-lg"
                      onClick={() => trackCTAClick("kinsta_hubee_sidebar")}
                    >
                      Audit Sécurité
                      <Zap className="w-5 h-5 ml-2 fill-primary" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Related Alert */}
              <Card className="p-6 border-border/50 bg-background/50 backdrop-blur-md rounded-3xl space-y-6">
                <h3 className="font-black text-xl flex items-center gap-2">
                  <Siren className="w-6 h-6 text-red-500" />
                  Alertes de l'État
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Fuite Urssaf Janvier 2026", url: "/article/fuite-urssaf-12-millions-salaries-2026" },
                    { title: "Cyberattaque Waltio Crypto", url: "/article/cyberattaque-waltio-2026" },
                    { title: "Arnaque Gendarmerie Spoofing", url: "/article/arnaque-gendarmerie-spoofing-2026" }
                  ].map((news, i) => (
                    <Link key={i} href={news.url}>
                      <div className="group cursor-pointer p-3 hover:bg-muted/50 rounded-2xl transition-all border border-transparent hover:border-border/50">
                        <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">{news.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <SEOFooter />
    </div>
  );
}
