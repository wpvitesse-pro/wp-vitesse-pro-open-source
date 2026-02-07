import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  ArrowRight,
  Users,
  Clock,
  Scale,
  Brain,
  Zap,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  PhoneCall,
  Building2,
  Globe,
  Quote,
  FileText,
  CircleDollarSign,
  Gavel,
  BookOpen,
  Layers,
  Timer,
  ShieldCheck,
  AlertCircle,
  Wallet,
  Smartphone,
  RefreshCcw,
  HelpCircle,
  Mail,
  ExternalLink,
  TrendingDown,
  Calendar,
  Banknote,
  XCircle,
  Info,
  MessageCircle,
  HeadphonesIcon,
  FileWarning
} from "lucide-react";

const KINSTA_SECURITY_LINK = "https://kinsta.com/fr/hebergement-wordpress-securise/?kaid=CYISLEFCEOAL";

const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/bug-bnp-paribas-debits-multiples-2026"
  },
  "headline": "Bug BNP Paribas : 40 000 transactions débitées jusqu'à 11 fois — Enquête sur la panne qui a vidé les comptes",
  "alternativeHeadline": "Incident technique BNP Paribas Fortis : des milliers de clients dans le rouge, la banque promet des remboursements",
  "description": "Enquête exclusive sur le bug technique du 4 février 2026 chez BNP Paribas qui a provoqué des débits multiples sur 40 000 transactions. Témoignages, explications techniques et recours pour les victimes.",
  "image": [
    "https://wp-vitesse-pro.fr/images/bug-bnp-paribas-hero-2026.webp",
    "https://wp-vitesse-pro.fr/images/bug-bnp-paribas-hero-2026.png"
  ],
  "datePublished": "2026-02-05T15:00:00+01:00",
  "dateModified": "2026-02-07T15:52:11.184Z",
  "wordCount": 3500,
  "articleSection": "Actualité Bancaire",
  "inLanguage": "fr-FR",
  "author": {
    "@type": "Person",
    "name": "Bouhmou Rachid",
    "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
    "jobTitle": "Expert Cybersécurité & Rédacteur en chef"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WP Vitesse Pro",
    "url": "https://wp-vitesse-pro.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "about": [
    { "@type": "Thing", "name": "BNP Paribas", "sameAs": "https://fr.wikipedia.org/wiki/BNP_Paribas" },
    { "@type": "Thing", "name": "Incident bancaire", "sameAs": "https://fr.wikipedia.org/wiki/Panne_informatique" }
  ],
  "mentions": [
    { "@type": "Organization", "name": "BNP Paribas Fortis", "sameAs": "https://www.bnpparibasfortis.be" },
    { "@type": "Organization", "name": "Ombudsfin", "sameAs": "https://www.ombudsfin.be" }
  ],
  "keywords": ["BNP Paribas bug", "débits multiples", "panne bancaire", "incident technique banque", "remboursement BNP", "bug informatique banque", "compte bancaire vidé", "problème BNP Paribas février 2026"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que s'est-il passé avec BNP Paribas le 4 février 2026 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un incident technique interne a provoqué le prélèvement multiple de transactions anciennes (1er, 2 et 3 février). Environ 40 000 transactions ont été affectées, certains clients voyant des paiements débités jusqu'à 11 fois. La banque a reconnu un problème lié à la 'relance d'un fichier' ayant entraîné la répétition de certaines opérations."
      }
    },
    {
      "@type": "Question",
      "name": "Dois-je contacter BNP Paribas pour être remboursé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, les clients concernés n'ont aucune démarche à effectuer selon la banque. Les montants indûment débités seront automatiquement recrédités. La banque a annoncé vouloir résoudre la situation 'dans la journée' du 5 février, mais sans calendrier précis."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de transactions ont été touchés par le bug BNP Paribas ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tous les types de paiements par carte ont été affectés : paiements en magasin, retraits ATM, paiements via Apple Pay ou autres moyens mobiles, ainsi que les prélèvements automatiques (abonnements, domiciliations). Les transactions des 1er, 2 et 3 février 2026 sont concernées."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si mon compte est passé dans le rouge à cause du bug ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conservez toutes les preuves (relevés, captures d'écran). Les frais de découvert générés par cet incident devraient être remboursés par la banque. Si ce n'est pas le cas automatiquement, contactez le service réclamations : gestiondesplaintes@bnpparibasfortis.com. En dernier recours, saisissez l'Ombudsfin (ombudsman@ombudsfin.be)."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que ce type de bug bancaire peut affecter mon site e-commerce ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indirectement, oui. Un bug de paiement peut générer des réclamations clients massives, endommager votre réputation et votre trésorerie si vos propres transactions sont affectées. C'est pourquoi une infrastructure web fiable et sécurisée est cruciale pour les e-commerçants. Un hébergement professionnel comme Kinsta offre une stabilité à 99,9% et une surveillance 24/7."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment vérifier si vous êtes concerné par le bug BNP Paribas",
  "description": "Guide étape par étape pour identifier les débits multiples et obtenir un remboursement.",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consultez vos relevés bancaires",
      "text": "Connectez-vous à votre application BNP Paribas ou Easy Banking et examinez les transactions du 4 et 5 février 2026. Recherchez des montants identiques débités plusieurs fois."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identifiez les doublons",
      "text": "Notez chaque transaction apparaissant plus d'une fois. Faites des captures d'écran comme preuves. Les transactions concernées datent du 1er, 2 et 3 février 2026."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Attendez le remboursement automatique",
      "text": "La banque a annoncé rembourser automatiquement les montants indus. Patientez 24 à 48 heures et vérifiez que les crédits apparaissent sur votre compte."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Réclamez si nécessaire",
      "text": "Si le remboursement n'est pas effectué sous 5 jours ouvrables, contactez gestiondesplaintes@bnpparibasfortis.com avec vos preuves. En dernier recours, saisissez l'Ombudsfin."
    }
  ]
};

const impactStats = [
  { value: "40 000", label: "Transactions affectées", icon: CreditCard },
  { value: "x11", label: "Débits max par transaction", icon: RefreshCcw },
  { value: "2 000€+", label: "Montants signalés indus", icon: Banknote },
  { value: "-3 568€", label: "Découvert client rapporté", icon: TrendingDown }
];

const timeline = [
  { date: "1-3 février", event: "Transactions originales effectuées normalement", status: "normal" },
  { date: "4 février matin", event: "Bug technique : relance du fichier de transactions", status: "error" },
  { date: "4 février", event: "Débits multiples apparaissent sur les comptes clients", status: "error" },
  { date: "4 février après-midi", event: "Premiers signalements clients massifs", status: "warning" },
  { date: "5 février", event: "BNP Paribas reconnaît l'incident et annonce les remboursements", status: "info" },
  { date: "5 février", event: "Corrections en cours selon la banque", status: "pending" }
];

const previousIncidents = [
  { date: "Mars 2024", description: "Panne majeure empêchant paiements et retraits par carte pendant plusieurs heures" },
  { date: "Avril 2019", description: "Bug informatique affectant l'affichage des soldes" },
  { date: "Janvier 2019", description: "Incident technique sur les virements" }
];

const testimonials = [
  {
    name: "Martine",
    location: "Belgique",
    quote: "Je n'ai plus d'argent, je n'ai plus rien. Je dépends désormais de ma voisine pour faire mes courses.",
    amount: "Compte vidé",
    source: "RTL.be"
  },
  {
    name: "Client anonyme",
    location: "Réunion",
    quote: "Ma domiciliation a été retirée 5 fois au lieu d'une. Le service client ne peut pas me donner de délai précis.",
    amount: "x5 débits",
    source: "Free Dom"
  },
  {
    name: "Client anonyme",
    location: "Bruxelles",
    quote: "Un paiement du 2 février a été prélevé 10 fois le 4 février. Total : 1 718 euros débités en trop.",
    amount: "1 718€ indus",
    source: "Bruxelles Today"
  }
];

export default function ArticleBugBNPParibas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO 
        title="Bug BNP Paribas : 40 000 transactions débitées jusqu'à 11 fois — Enquête | WP Vitesse Pro"
        description="Enquête exclusive : le bug du 4 février 2026 chez BNP Paribas a provoqué des débits multiples sur 40 000 transactions. Témoignages, explications et recours."
        keywords="BNP Paribas bug 2026, débits multiples, panne bancaire, incident technique banque, remboursement BNP, bug informatique février 2026"
        type="article"
        image="https://wp-vitesse-pro.fr/images/bug-bnp-paribas-hero-2026.webp"
        structuredData={[newsArticleSchema, faqSchema, howToSchema]}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-destructive z-50 origin-left" style={{ scaleX }} />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <Breadcrumbs items={[
          { name: "Accueil", url: "/" }, 
          { name: "Actualités", url: "/blog" }, 
          { name: "Bug BNP Paribas Février 2026", url: "/article/bug-bnp-paribas-debits-multiples-2026" }
        ]} />

        <article className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="destructive" className="animate-pulse">ALERTE BANCAIRE</Badge>
            <Badge variant="outline">BREAKING NEWS</Badge>
            <Badge variant="secondary">Mis à jour : 5 fév. 17h30</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Bug BNP Paribas : 40 000 transactions débitées jusqu'à 11 fois — Des milliers de clients dans le rouge
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Un incident technique "rarissime" a vidé les comptes de milliers de clients ce 4 février 2026. 
            Certains se retrouvent avec <strong className="text-destructive">plus de 3 500 € de découvert</strong>. 
            Voici ce qui s'est passé, qui est concerné, et comment obtenir votre remboursement.
          </p>

          <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Par <Link href="/auteur/bouhmou-rachid" className="text-primary hover:underline" data-testid="link-author-bnp">Bouhmou Rachid</Link></p>
              <p className="text-sm text-muted-foreground">Expert Cybersécurité • 5 février 2026 • Dernière mise à jour : 17h30</p>
            </div>
          </div>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/bug-bnp-paribas-hero-2026.webp" type="image/webp" />
              <img 
                src="/images/bug-bnp-paribas-hero-2026.png" 
                alt="Illustration d'une crise bancaire avec des erreurs de transactions multiples - Bug BNP Paribas février 2026"
                className="w-full h-auto object-cover aspect-video"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Illustration : Crise des débits multiples chez BNP Paribas - 4 février 2026
            </figcaption>
          </figure>

          <Card className="mb-12 overflow-hidden border-destructive/50 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h2 className="font-bold text-lg mb-2">Ce que vous devez savoir en 30 secondes</h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Quoi :</strong> Bug technique ayant provoqué des débits multiples (jusqu'à 11 fois)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Quand :</strong> Transactions du 1-3 février redébitées le 4 février 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Combien :</strong> 40 000 transactions, des milliers de clients touchés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Que faire :</strong> Rien — les remboursements sont automatiques selon BNP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {impactStats.map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-gradient-to-b from-destructive/10 to-background border-destructive/20">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-destructive" />
                <p className="text-2xl md:text-3xl font-black text-destructive mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </section>

          <nav className="bg-muted/50 p-6 rounded-lg mb-12 border">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Sommaire de l'enquête
            </h2>
            <ol className="space-y-2 text-sm">
              {[
                { id: "faits", label: "Les faits : Que s'est-il passé exactement ?" },
                { id: "temoignages", label: "Témoignages : \"Je n'ai plus rien\"" },
                { id: "technique", label: "Explication technique : Pourquoi ce bug ?" },
                { id: "chronologie", label: "Chronologie : Du bug à la reconnaissance" },
                { id: "precedents", label: "Historique : Ce n'est pas la première fois" },
                { id: "recours", label: "Vos recours : Comment être remboursé" },
                { id: "prevention", label: "Se protéger : Leçons pour les entreprises" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i + 1}</span>
                  <a href={`#${item.id}`} data-testid={`link-toc-bnp-${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section id="faits" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <FileWarning className="w-8 h-8 flex-shrink-0" />
                Les faits : Que s'est-il passé exactement ?
              </h2>
              
              <p className="text-lg">
                Le mercredi 4 février 2026, des milliers de clients BNP Paribas Fortis ont découvert avec stupeur 
                que leurs comptes bancaires affichaient des <strong>soldes négatifs inexplicables</strong>. 
                En quelques heures, les réseaux sociaux et les lignes du service client ont été submergés de plaintes.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-destructive">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Quote className="w-5 h-5 text-destructive" />
                  Déclaration officielle de BNP Paribas Fortis
                </h3>
                <p className="italic mb-3">
                  "Un incident technique interne a entraîné le prélèvement multiple de certaines transactions 
                  des jours précédents. Environ 40 000 transactions sont concernées. Les clients n'ont aucune 
                  démarche à effectuer — les remboursements sont automatiques."
                </p>
                <p className="text-sm text-muted-foreground">— Laurent Loncke, Responsable Général du Retail Banking, 5 février 2026</p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Quels types de transactions sont concernés ?</h3>
              
              <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
                {[
                  { icon: CreditCard, title: "Paiements en magasin", desc: "Achats par carte bancaire effectués du 1er au 3 février" },
                  { icon: Smartphone, title: "Paiements mobiles", desc: "Apple Pay, Google Pay et autres solutions sans contact" },
                  { icon: Banknote, title: "Retraits ATM", desc: "Retraits d'espèces aux distributeurs" },
                  { icon: RefreshCcw, title: "Prélèvements automatiques", desc: "Abonnements, domiciliations mensuelles" }
                ].map((item, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>

              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  Ampleur du problème
                </h4>
                <p className="mb-4">
                  Selon les témoignages recueillis par plusieurs médias (RTL, La Libre, DH), les conséquences 
                  sont parfois dramatiques :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>Des clients retrouvés avec un <strong>solde négatif de plus de 3 500 €</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>Des transactions débitées <strong>jusqu'à 11 fois</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>Des personnes <strong>incapables de faire leurs courses</strong> ou payer leur loyer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>Des comptes passés en négatif <strong>alors que le découvert n'était pas autorisé</strong></span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="temoignages" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <MessageCircle className="w-8 h-8 flex-shrink-0" />
                Témoignages : "Je n'ai plus rien"
              </h2>

              <p>
                Les victimes témoignent de situations parfois dramatiques. Voici quelques cas documentés par la presse.
              </p>

              <div className="space-y-6 my-8 not-prose">
                {testimonials.map((t, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">{t.name}</span>
                            <Badge variant="outline" className="text-xs">{t.location}</Badge>
                            <Badge variant="destructive" className="text-xs">{t.amount}</Badge>
                          </div>
                          <blockquote className="italic text-lg border-l-4 border-destructive pl-4 py-2">
                            "{t.quote}"
                          </blockquote>
                          <p className="text-xs text-muted-foreground mt-2">
                            Source : {t.source === "RTL.be" ? (
                              <a href="https://www.rtl.be/actu/belgique/societe/je-nai-plus-dargent-je-nai-plus-rien-cause-du-bug-chez-bnp-paribas-martine/2026-02-04/article/778774" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                                RTL.be <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : t.source === "Free Dom" ? (
                              <a href="https://freedom.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                                Free Dom <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <a href="https://www.bruxellestoday.be/actualite/bnp-paribas-bug-carte-paiements.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                                Bruxelles Today <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Impact sur la vie quotidienne
                </h4>
                <p className="text-sm">
                  Pour de nombreuses familles, ce bug a des conséquences immédiates : impossibilité de faire les courses, 
                  de payer le carburant, de régler des factures urgentes. Certains clients rapportent dépendre 
                  de proches ou de voisins pour subvenir à leurs besoins en attendant le remboursement.
                </p>
              </div>
            </section>

            <section id="technique" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Brain className="w-8 h-8 flex-shrink-0" />
                Explication technique : Pourquoi ce bug ?
              </h2>

              <p>
                Selon les informations communiquées par BNP Paribas Fortis, l'incident est dû à un 
                <strong> problème technique interne lié à la "relance d'un fichier"</strong>.
              </p>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4">Ce qui s'est probablement passé (analyse technique)</h4>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
                    <div>
                      <strong>Fichier de transactions</strong>
                      <p className="text-sm text-muted-foreground">Les transactions bancaires sont traitées par "lots" (batch processing). Un fichier contient toutes les opérations à exécuter.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
                    <div>
                      <strong>Erreur de relance</strong>
                      <p className="text-sm text-muted-foreground">Le fichier des transactions du 1-3 février a été relancé par erreur, probablement suite à un incident technique ou une intervention manuelle.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
                    <div>
                      <strong>Absence de contrôle de doublon</strong>
                      <p className="text-sm text-muted-foreground">Le système n'a pas détecté que ces transactions avaient déjà été exécutées, permettant des débits multiples.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">4</span>
                    <div>
                      <strong>Exécutions répétées</strong>
                      <p className="text-sm text-muted-foreground">Certaines transactions ont été rejouées jusqu'à 11 fois avant détection du problème.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Ce que la banque aurait dû avoir en place
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Contrôle d'idempotence :</strong> Vérification qu'une transaction n'est exécutée qu'une seule fois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Monitoring en temps réel :</strong> Alertes automatiques en cas d'anomalie sur le volume de transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Validation avant exécution :</strong> Contrôle humain ou automatisé avant le traitement massif</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="chronologie" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Clock className="w-8 h-8 flex-shrink-0" />
                Chronologie : Du bug à la reconnaissance
              </h2>

              <div className="space-y-4 my-8 not-prose">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                      item.status === "error" ? "bg-destructive" :
                      item.status === "warning" ? "bg-orange-500" :
                      item.status === "info" ? "bg-blue-500" :
                      item.status === "pending" ? "bg-yellow-500 animate-pulse" :
                      "bg-green-500"
                    }`} />
                    <div className="flex-1 pb-4 border-b last:border-0">
                      <p className="font-bold">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="precedents" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Layers className="w-8 h-8 flex-shrink-0" />
                Historique : Ce n'est pas la première fois
              </h2>

              <p>
                La banque qualifie cet incident de "rarissime". Pourtant, l'historique des pannes techniques 
                chez BNP Paribas montre une <strong>fragilité récurrente des systèmes informatiques</strong>.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm not-prose">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-bold">Date</th>
                      <th className="text-left p-4 font-bold">Incident</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousIncidents.map((incident, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4 font-medium">{incident.date}</td>
                        <td className="p-4 text-muted-foreground">{incident.description}</td>
                      </tr>
                    ))}
                    <tr className="bg-destructive/5">
                      <td className="p-4 font-bold text-destructive">Février 2026</td>
                      <td className="p-4 font-bold">Bug de débits multiples — 40 000 transactions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  La question de la dette technique
                </h4>
                <p className="text-sm">
                  Ces incidents répétés soulèvent des questions sur l'état des infrastructures IT bancaires. 
                  La "dette technique" — l'accumulation de systèmes obsolètes ou mal maintenus — peut conduire 
                  à des pannes de plus en plus fréquentes et graves. C'est un sujet que les régulateurs 
                  européens (BCE, EBA) surveillent de plus en plus près.
                </p>
              </div>
            </section>

            <section id="recours" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Gavel className="w-8 h-8 flex-shrink-0" />
                Vos recours : Comment être remboursé
              </h2>

              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  Bonne nouvelle : Les remboursements sont automatiques
                </h4>
                <p className="mb-4">
                  Selon BNP Paribas, <strong>vous n'avez aucune démarche à effectuer</strong>. 
                  Les montants indûment débités seront recrédités automatiquement sur votre compte.
                </p>
                <p className="text-sm text-muted-foreground">
                  La banque a annoncé vouloir résoudre la situation "dans la journée" du 5 février, 
                  mais certains clients pourraient voir les corrections arriver progressivement.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Si le remboursement n'arrive pas</h3>

              <div className="space-y-4 my-6 not-prose">
                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Timer className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Étape 1 : Patientez 48-72h</h4>
                      <p className="text-sm text-muted-foreground">Vérifiez régulièrement votre compte. Les corrections peuvent arriver par lots.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <HeadphonesIcon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Étape 2 : Contactez le service client</h4>
                      <p className="text-sm text-muted-foreground">
                        Appelez le service client BNP Paribas avec vos relevés en main. 
                        Notez le numéro de dossier qui vous sera attribué.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Étape 3 : Réclamation écrite</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Envoyez une réclamation formelle avec preuves (captures d'écran, relevés) :
                      </p>
                      <div className="bg-muted p-3 rounded text-xs font-mono">
                        <p><strong>Email :</strong> gestiondesplaintes@bnpparibasfortis.com</p>
                        <p><strong>Courrier :</strong> BNP Paribas Fortis SA — Service Gestion des plaintes</p>
                        <p>Montagne du Parc 3, 1000 Bruxelles</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-bold">Étape 4 : Saisir l'Ombudsfin (dernier recours)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Si aucune réponse satisfaisante sous 30 jours, saisissez le médiateur financier :
                      </p>
                      <div className="bg-muted p-3 rounded text-xs font-mono">
                        <p><strong>Email :</strong> ombudsman@ombudsfin.be</p>
                        <p><strong>Adresse :</strong> Boulevard du Roi Albert II 8 (Bte 2), 1000 Bruxelles</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  N'oubliez pas les frais annexes
                </h4>
                <p className="text-sm">
                  Si le bug a généré des frais de découvert, des agios, ou des rejets de prélèvements, 
                  <strong> conservez toutes les preuves</strong>. Vous êtes en droit de demander le remboursement 
                  de ces frais causés par l'erreur de la banque.
                </p>
              </div>
            </section>

            <section id="prevention" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <ShieldCheck className="w-8 h-8 flex-shrink-0" />
                Se protéger : Leçons pour les entreprises
              </h2>

              <p>
                Cet incident bancaire rappelle une vérité fondamentale : <strong>la fiabilité informatique 
                est critique pour toute activité économique</strong>. Si une grande banque peut subir 
                ce type de panne, qu'en est-il de votre propre infrastructure ?
              </p>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4">Pour les e-commerçants et entrepreneurs</h4>
                <p className="mb-4">
                  Un bug de paiement sur votre site peut avoir des conséquences similaires : clients débités 
                  en double, réclamations massives, dommage à votre réputation. Voici comment vous protéger :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Hébergement fiable :</strong> Choisissez une infrastructure avec SLA de 99,9% et monitoring 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Sauvegardes automatiques :</strong> Restauration rapide en cas de problème</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Staging obligatoire :</strong> Testez toute modification avant mise en production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Support expert :</strong> Accès à une équipe technique 24/7 en cas d'urgence</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="my-12 not-prose">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Votre site mérite une infrastructure fiable</h3>
                    <p className="text-muted-foreground mb-4">
                      Kinsta offre un hébergement WordPress avec 99,9% de disponibilité garantie, 
                      sauvegardes automatiques quotidiennes, et support expert 24/7. 
                      Évitez les bugs qui peuvent ruiner votre réputation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild data-testid="button-kinsta-bnp-cta">
                        <a href={KINSTA_SECURITY_LINK} target="_blank" rel="noopener noreferrer">
                          Découvrir Kinsta <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild data-testid="link-audit-bnp">
                        <Link href="/audit-site">Audit gratuit de votre site</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Articles liés
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/article/deepfake-cnil-alerte-2026" data-testid="link-article-deepfake-bnp">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">ENQUÊTE</Badge>
                    <CardTitle className="text-lg">Deepfakes 2026 : La menace qui terrifie la CNIL</CardTitle>
                    <CardDescription>Comment les criminels utilisent l'IA pour vider vos comptes.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/article/cyberattaque-apple-pay-phishing-2026" data-testid="link-article-apple-pay-bnp">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">ALERTE</Badge>
                    <CardTitle className="text-lg">Apple Pay : L'arnaque au faux support client</CardTitle>
                    <CardDescription>Les nouvelles techniques des cybercriminels pour vider vos comptes.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap justify-between items-start gap-6">
              <div>
                <p className="font-semibold mb-2">Sources</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    <a href="https://www.rtl.be/actu/belgique/societe/je-nai-plus-dargent-je-nai-plus-rien-cause-du-bug-chez-bnp-paribas-martine/2026-02-04/article/778774" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      RTL.be — Témoignage "Je n'ai plus rien" <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rtbf.be/article/incident-technique-chez-bnp-paribas-fortis-des-clients-debites-par-erreur-11673749" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      RTBF — Incident technique BNP Paribas Fortis <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.7sur7.be/belgique/des-clients-de-bnp-paribas-fortis-debites-plusieurs-fois-a-cause-dun-probleme-technique~a62d617b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      7sur7.be — Débits multiples à cause d'un problème technique <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lesoir.be/726820/article/2026-02-05/je-nai-plus-dargent-des-clients-bnp-inquiets-apres-une-panne-informatique" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      Le Soir — Clients BNP inquiets après une panne <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bruxellestoday.be/actualite/bnp-paribas-bug-carte-paiements.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      Bruxelles Today — Alerte paiements carte <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sudinfo.be/id1104675/article/2026-02-04/mais-que-se-passe-t-il-chez-bnp-paribas-plusieurs-clients-debites-sur-leur" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      Sudinfo — Plusieurs clients débités par erreur <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.totalbug.com/bnp-paribas/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      TotalBug — Monitoring des pannes en temps réel <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">#BNPParibas</Badge>
                <Badge variant="outline">#Bug</Badge>
                <Badge variant="outline">#Banque</Badge>
                <Badge variant="outline">#DébitsMultiples</Badge>
                <Badge variant="outline">#Remboursement</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Article mis à jour le 5 février 2026 à 17h30 • Nous suivons l'évolution de la situation
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
