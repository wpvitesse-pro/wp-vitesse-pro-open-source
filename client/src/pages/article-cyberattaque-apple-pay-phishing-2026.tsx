import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  ArrowRight,
  Users,
  ShieldAlert,
  Smartphone,
  Mail,
  Phone,
  CreditCard,
  Lock,
  CheckCircle2,
  XCircle,
  Eye,
  AlertCircle,
  FileText,
  Globe,
  Quote,
  BookOpen,
  Shield,
  Fingerprint,
  MessageSquare,
  ExternalLink,
  Clock,
  Target,
  Zap,
  Brain,
  Ban,
  Search
} from "lucide-react";

const KINSTA_SECURITY_LINK = "https://kinsta.com/fr/hebergement-wordpress-securise/?kaid=CYISLEFCEOAL";
const KINSTA_PRICING_LINK = "https://kinsta.com/fr/prix/?kaid=CYISLEFCEOAL";

const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/cyberattaque-apple-pay-phishing-2026"
  },
  "headline": "Arnaque Apple Pay : une campagne de phishing massive vise des millions d'utilisateurs — Comment vous protéger",
  "alternativeHeadline": "Alerte sécurité : de faux mails Apple Pay piègent les utilisateurs avec des transactions fictives de 800€",
  "description": "Enquête exclusive sur la campagne de phishing ciblant Apple Pay en février 2026. Faux mails, numéros d'assistance frauduleux, et techniques des escrocs. Guide complet pour identifier et éviter cette arnaque.",
  "image": [
    "https://wp-vitesse-pro.fr/images/cyberattaque-apple-pay-hero-2026.webp",
    "https://wp-vitesse-pro.fr/images/cyberattaque-apple-pay-hero-2026.png"
  ],
  "datePublished": "2026-02-05T18:00:00+01:00",
  "dateModified": "2026-02-07T15:48:38.339Z",
  "wordCount": 3800,
  "articleSection": "Cybersécurité",
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
    { "@type": "Thing", "name": "Phishing", "sameAs": "https://fr.wikipedia.org/wiki/Hame%C3%A7onnage" },
    { "@type": "Thing", "name": "Apple Pay", "sameAs": "https://fr.wikipedia.org/wiki/Apple_Pay" },
    { "@type": "Thing", "name": "Cybersécurité", "sameAs": "https://fr.wikipedia.org/wiki/Cybers%C3%A9curit%C3%A9" }
  ],
  "mentions": [
    { "@type": "Organization", "name": "Apple", "sameAs": "https://www.apple.com/fr/" },
    { "@type": "Organization", "name": "CERT-FR", "sameAs": "https://www.cert.ssi.gouv.fr" }
  ],
  "keywords": ["arnaque Apple Pay", "phishing Apple", "cyberattaque 2026", "faux mail Apple", "escroquerie paiement mobile", "sécurité iPhone", "fraude Apple Pay", "hameçonnage", "protection données personnelles"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment reconnaître un faux mail Apple Pay ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vérifiez l'adresse de l'expéditeur (les vraies adresses Apple se terminent par @apple.com), méfiez-vous des formulations génériques comme 'Bonjour {Nom}', des fautes d'orthographe, et des demandes urgentes d'appeler un numéro. Apple ne demande jamais d'informations sensibles par mail."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si j'ai reçu un mail suspect concernant Apple Pay ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ne cliquez sur aucun lien, n'appelez pas le numéro indiqué, et supprimez le message. Vérifiez votre historique de transactions directement dans les réglages de votre iPhone. En cas de doute, contactez Apple via leur site officiel ou l'app Support Apple."
      }
    },
    {
      "@type": "Question",
      "name": "Les utilisateurs français sont-ils concernés par cette arnaque Apple Pay ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Actuellement, la campagne cible principalement les États-Unis, mais des cas similaires ont déjà été signalés en France. Les escrocs adaptent rapidement leurs attaques aux différents marchés, il est donc prudent de rester vigilant."
      }
    },
    {
      "@type": "Question",
      "name": "Apple peut-il me contacter pour un problème de fraude ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apple ne propose jamais de rendez-vous pour des affaires de fraude par e-mail et ne demande jamais de résoudre des problèmes de facturation en passant un appel sur un numéro fourni par mail ou SMS. Tout contact de ce type est suspect."
      }
    },
    {
      "@type": "Question",
      "name": "J'ai communiqué mes identifiants, que dois-je faire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Changez immédiatement votre mot de passe Apple ID sur appleid.apple.com, activez l'authentification à deux facteurs si ce n'est pas déjà fait, contactez votre banque pour surveiller vos transactions, et signalez l'arnaque à Apple et aux autorités (cybermalveillance.gouv.fr)."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment vérifier si un mail Apple Pay est légitime",
  "description": "Guide en 5 étapes pour identifier un mail de phishing ciblant Apple Pay.",
  "totalTime": "PT3M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Vérifier l'adresse de l'expéditeur",
      "text": "Les vrais mails Apple proviennent d'adresses se terminant par @apple.com ou @email.apple.com. Toute autre adresse est suspecte."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Analyser le ton du message",
      "text": "Apple ne crée jamais de sentiment d'urgence extrême. Méfiez-vous des messages alarmistes demandant une action immédiate."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Vérifier la personnalisation",
      "text": "Les vrais mails Apple utilisent votre nom complet. Les formules génériques comme 'Cher client' ou 'Bonjour {Nom}' sont des signaux d'alarme."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Ne jamais cliquer sur les liens",
      "text": "Accédez directement à votre compte Apple via les réglages de votre iPhone ou appleid.apple.com pour vérifier toute activité suspecte."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Signaler le message",
      "text": "Transférez le mail suspect à reportphishing@apple.com, puis supprimez-le définitivement."
    }
  ]
};

const alertSigns = [
  {
    icon: Mail,
    title: "Adresse email suspecte",
    description: "L'expéditeur utilise une adresse avec des chiffres étranges ou un domaine qui n'est pas @apple.com",
    example: "support-apple-12847@secure-billing.net"
  },
  {
    icon: MessageSquare,
    title: "Formulation générique",
    description: "Le mail commence par 'Bonjour {Nom}' ou 'Cher client' au lieu de votre vrai nom",
    example: "Bonjour Nom, votre transaction a été bloquée..."
  },
  {
    icon: AlertCircle,
    title: "Ton alarmiste",
    description: "Le message crée un sentiment d'urgence extrême avec des menaces de blocage immédiat",
    example: "Action requise IMMÉDIATEMENT sous 24h"
  },
  {
    icon: Phone,
    title: "Numéro à appeler",
    description: "Le mail vous demande d'appeler un numéro spécifique pour 'résoudre' le problème",
    example: "Appelez notre équipe anti-fraude au 08XX..."
  },
  {
    icon: CreditCard,
    title: "Demande d'informations",
    description: "On vous demande votre mot de passe, code de vérification ou informations bancaires",
    example: "Confirmez votre carte pour débloquer le paiement"
  },
  {
    icon: FileText,
    title: "Faux numéro de dossier",
    description: "Un numéro de dossier d'assistance est mentionné pour paraître légitime",
    example: "Dossier #APL-2026-FR-847291"
  }
];

const protectionSteps = [
  {
    step: 1,
    title: "Ne répondez jamais",
    description: "Ne cliquez sur aucun lien et n'appelez jamais le numéro indiqué dans le mail suspect.",
    icon: Ban
  },
  {
    step: 2,
    title: "Vérifiez par vous-même",
    description: "Ouvrez l'app Réglages > [Votre nom] > Paiements et livraison pour voir vos vraies transactions.",
    icon: Search
  },
  {
    step: 3,
    title: "Contactez Apple directement",
    description: "Utilisez l'app Support Apple ou visitez support.apple.com/fr-fr pour tout contact officiel.",
    icon: Shield
  },
  {
    step: 4,
    title: "Signalez l'arnaque",
    description: "Transférez le mail à reportphishing@apple.com puis supprimez-le.",
    icon: AlertTriangle
  },
  {
    step: 5,
    title: "Renforcez votre sécurité",
    description: "Activez l'authentification à deux facteurs et changez votre mot de passe régulièrement.",
    icon: Lock
  }
];

const statisticsData = [
  { value: "+4700%", label: "Hausse des arnaques IA", period: "2023-2026", source: "Europol" },
  { value: "800€", label: "Montant typique affiché", period: "Février 2026", source: "AppleInsider" },
  { value: "24h", label: "Délai de pression", period: "Tactique standard", source: "CERT-FR" },
  { value: "87%", label: "Mails non détectés", period: "Par les filtres", source: "Mailinblack" }
];

export default function ArticleCyberattaqueApplePay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO 
        title="Arnaque Apple Pay 2026 : campagne de phishing massive — Guide de protection | WP Vitesse Pro"
        description="Alerte sécurité : une campagne de phishing cible les utilisateurs Apple Pay avec de faux mails de transactions bloquées. Découvrez comment identifier et éviter cette arnaque."
        keywords="arnaque Apple Pay 2026, phishing Apple, faux mail Apple Pay, escroquerie paiement mobile, sécurité iPhone, fraude Apple, hameçonnage février 2026"
        type="article"
        image="https://wp-vitesse-pro.fr/images/cyberattaque-apple-pay-hero-2026.webp"
        structuredData={[newsArticleSchema, faqSchema, howToSchema]}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-destructive z-50 origin-left" style={{ scaleX }} />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <Breadcrumbs items={[
          { name: "Accueil", url: "/" }, 
          { name: "Actualités Cybersécurité", url: "/blog" }, 
          { name: "Arnaque Apple Pay Février 2026", url: "/article/cyberattaque-apple-pay-phishing-2026" }
        ]} />

        <article className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="destructive" className="animate-pulse">ALERTE SÉCURITÉ</Badge>
            <Badge variant="outline">PHISHING EN COURS</Badge>
            <Badge variant="secondary">10 min de lecture</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Arnaque Apple Pay : des millions d'utilisateurs ciblés par une campagne de phishing — voici comment vous protéger
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Votre smartphone vibre. Un mail d'Apple annonce une <strong className="text-destructive">transaction de 800€ bloquée</strong>. 
            Le ton est urgent. Un numéro à appeler. Mais derrière cette alerte se cache l'une des arnaques les plus sophistiquées de 2026.
            <strong className="text-foreground"> Voici tout ce que vous devez savoir pour ne pas tomber dans le piège.</strong>
          </p>

          <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Par <Link href="/auteur/bouhmou-rachid" className="text-primary hover:underline" data-testid="link-author-apple-pay">Bouhmou Rachid</Link></p>
              <p className="text-sm text-muted-foreground">Expert Cybersécurité • 5 février 2026 • Dernière mise à jour : 18h30</p>
            </div>
          </div>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/cyberattaque-apple-pay-hero-2026.webp" type="image/webp" />
              <img 
                src="/images/cyberattaque-apple-pay-hero-2026.png" 
                alt="Illustration de la cyberattaque phishing ciblant Apple Pay - Février 2026"
                className="w-full h-auto object-cover aspect-video"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Illustration : Campagne de phishing ciblant les utilisateurs Apple Pay - Février 2026
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
                      <span><strong>Quoi :</strong> Faux mails imitant Apple signalant une transaction bloquée ou suspecte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Objectif :</strong> Vous faire appeler un faux support pour voler vos identifiants et données bancaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Cibles :</strong> Tous les utilisateurs Apple Pay (iPhone, iPad, Mac, Apple Watch)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong>Règle d'or :</strong> Apple ne demande JAMAIS d'appeler un numéro reçu par mail</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {statisticsData.map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-gradient-to-b from-destructive/10 to-background border-destructive/20">
                <p className="text-2xl md:text-3xl font-black text-destructive mb-1">{stat.value}</p>
                <p className="text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.period}</p>
                <p className="text-xs text-muted-foreground/70 mt-2">Source: {stat.source}</p>
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
                { id: "attaque", label: "L'attaque : Comment fonctionne cette arnaque ?" },
                { id: "signes", label: "Les 6 signes qui doivent vous alerter" },
                { id: "mecanisme", label: "Anatomie d'un mail de phishing Apple Pay" },
                { id: "temoignages", label: "Ce qui se passe si vous appelez le numéro" },
                { id: "protection", label: "Guide : Comment vous protéger en 5 étapes" },
                { id: "victime", label: "Que faire si vous êtes tombé dans le piège ?" },
                { id: "faq", label: "Questions fréquentes" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i + 1}</span>
                  <a href={`#${item.id}`} data-testid={`link-toc-apple-${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section id="attaque" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <ShieldAlert className="w-8 h-8 flex-shrink-0" />
                L'attaque : Une campagne de phishing redoutablement sophistiquée
              </h2>
              
              <p className="text-lg">
                Depuis le début du mois de février 2026, une vague de mails frauduleux déferle sur les boîtes de réception des utilisateurs Apple. 
                Selon les informations publiées par{" "}
                <a 
                  href="https://appleinsider.com/articles/26/02/03/apple-users-are-being-targeted-by-a-coordinated-apple-pay-phishing-campaign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                  data-testid="link-source-appleinsider"
                >
                  AppleInsider <ExternalLink className="w-3 h-3" />
                </a>, 
                cette campagne cible spécifiquement <strong>Apple Pay</strong>, le système de paiement intégré aux appareils Apple.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Quote className="w-5 h-5 text-primary" />
                  Ce que rapporte 01net
                </h3>
                <blockquote className="italic text-muted-foreground">
                  "Une attaque phishing visant les utilisateurs Apple est en cours. Comme le rapportent nos confrères d'Apple Insider, 
                  la cyberattaque cible spécifiquement Apple Pay, la solution de paiement intégrée aux appareils de la marque. 
                  Pour berner leurs victimes, les cybercriminels imitent les véritables alertes de fraude envoyées par Apple."
                </blockquote>
                <p className="text-sm mt-2">
                  — Source :{" "}
                  <a 
                    href="https://www.01net.com/actualites/cyberattaque-contre-apple-pay-mails-apple-phishing-cours.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    data-testid="link-source-01net"
                  >
                    01net, 5 février 2026 <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Le scénario type de l'attaque</h3>
              
              <p>
                Le mode opératoire est toujours le même. Vous recevez un mail qui semble provenir d'Apple. 
                Le message évoque une <strong>transaction bloquée</strong>, une <strong>activité suspecte</strong> détectée, 
                ou un <strong>rendez-vous de sécurité</strong> à confirmer. Le montant affiché impressionne : souvent plusieurs centaines d'euros.
              </p>

              <Card className="my-8 border-amber-500/50 bg-amber-500/5">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-600" />
                    Exemple de mail frauduleux (reconstitution)
                  </h4>
                  <div className="bg-background/80 p-4 rounded-lg border text-sm font-mono">
                    <p className="text-muted-foreground mb-2">De : support-billing@apple-secure-12847.net</p>
                    <p className="text-muted-foreground mb-4">Objet : [Urgent] Transaction Apple Pay bloquée - 847,00€</p>
                    <p className="mb-2">Bonjour {"{Nom}"},</p>
                    <p className="mb-2">Une transaction de <strong>847,00€</strong> a été bloquée sur votre compte Apple Pay suite à une activité suspecte.</p>
                    <p className="mb-2">Numéro de dossier : APL-2026-FR-847291</p>
                    <p className="mb-4">Pour débloquer votre compte et éviter la suspension définitive, veuillez contacter notre équipe anti-fraude :</p>
                    <p className="text-destructive font-bold">📞 08 XX XX XX XX (gratuit, 24h/24)</p>
                  </div>
                </CardContent>
              </Card>

              <p>
                L'objectif des pirates est clair : <strong>créer un stress immédiat</strong> pour court-circuiter toute réflexion. 
                Comme le souligne{" "}
                <a 
                  href="https://www.lebigdata.fr/apple-pay-attention-a-ce-scam-qui-frappe-des-millions-dutilisateurs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                  data-testid="link-source-lebigdata"
                >
                  Le Big Data <ExternalLink className="w-3 h-3" />
                </a> : 
                "Votre cerveau passe en mode survie et occulte les détails suspects."
              </p>
            </section>

            <section id="signes" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Eye className="w-8 h-8 flex-shrink-0" />
                Les 6 signes qui doivent immédiatement vous alerter
              </h2>

              <p className="text-lg mb-8">
                Malgré leur sophistication croissante, ces mails frauduleux laissent toujours des indices. 
                Voici les 6 signaux d'alarme à repérer instantanément :
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {alertSigns.map((sign, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                          <sign.icon className="w-5 h-5 text-destructive" />
                        </div>
                        <CardTitle className="text-base">{sign.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{sign.description}</p>
                      <p className="text-xs bg-muted p-2 rounded font-mono">{sign.example}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/5 p-6 rounded-lg my-8 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Fingerprint className="w-5 h-5 text-primary" />
                  Le détail qui trahit toujours les escrocs
                </h3>
                <p>
                  Selon{" "}
                  <a 
                    href="https://www.iphon.fr/post/clients-apple-pay-vises-arnaque-etes-vous-concerne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    data-testid="link-source-iphon"
                  >
                    iPhon.fr <ExternalLink className="w-3 h-3" />
                  </a>, 
                  "le mail de l'expéditeur est bourré de chiffres et de termes étranges, contrairement à l'adresse officielle d'Apple". 
                  Les vraies adresses Apple se terminent toujours par <strong>@apple.com</strong> ou <strong>@email.apple.com</strong>.
                </p>
              </div>
            </section>

            <section id="mecanisme" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Brain className="w-8 h-8 flex-shrink-0" />
                Pourquoi cette arnaque fonctionne si bien ?
              </h2>

              <p className="text-lg">
                Cette campagne de phishing est particulièrement efficace car elle exploite plusieurs leviers psychologiques puissants :
              </p>

              <div className="grid gap-6 my-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-red-500" />
                      1. L'urgence artificielle
                    </h4>
                    <p className="text-muted-foreground">
                      Le message suggère une perte financière imminente. Face à la menace de perdre 800€, 
                      le cerveau passe en mode "réaction" plutôt que "réflexion".
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-amber-500" />
                      2. L'imitation parfaite
                    </h4>
                    <p className="text-muted-foreground">
                      Les mails reproduisent fidèlement le design Apple : logo, mise en forme, copyright en bas de page. 
                      Même un utilisateur averti peut hésiter une seconde.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      3. Les faux numéros de dossier
                    </h4>
                    <p className="text-muted-foreground">
                      Les escrocs vont jusqu'à créer de vrais dossiers d'assistance chez Apple, 
                      puis utilisent ce numéro légitime pour renforcer leur crédibilité.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="temoignages" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Phone className="w-8 h-8 flex-shrink-0" />
                Ce qui se passe si vous appelez le numéro
              </h2>

              <p className="text-lg">
                Le vrai danger commence lorsque la victime compose le numéro indiqué. 
                À l'autre bout du fil, un faux agent d'assistance Apple — parfaitement formé — attend.
              </p>

              <Card className="my-8 bg-slate-900 text-white border-none">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 text-amber-400">Reconstitution d'un appel type</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <span className="text-amber-400 font-bold shrink-0">Escroc :</span>
                      <span>"Bonjour, support Apple, Marie à votre écoute. Vous nous contactez suite à l'alerte de sécurité ?"</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-400 font-bold shrink-0">Victime :</span>
                      <span>"Oui, j'ai reçu un mail disant qu'une transaction de 847€ a été bloquée..."</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-400 font-bold shrink-0">Escroc :</span>
                      <span>"Je vois votre dossier. Effectivement, une tentative de fraude a été détectée. Pour sécuriser votre compte, 
                      j'ai besoin de vérifier quelques informations. Pouvez-vous me confirmer l'adresse email associée à votre identifiant Apple ?"</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-red-400 font-bold shrink-0">⚠️</span>
                      <span className="text-red-300">L'escroc va progressivement demander : email, mot de passe, 
                      code de vérification à 6 chiffres, et informations de carte bancaire.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-destructive">
                  <XCircle className="w-5 h-5" />
                  Rappel crucial
                </h3>
                <p className="font-medium">
                  Apple ne propose <strong>JAMAIS</strong> de rendez-vous pour des affaires de fraude par e-mail 
                  et ne demande <strong>JAMAIS</strong> de résoudre des problèmes de facturation en passant un appel 
                  sur un numéro fourni par mail ou SMS.
                </p>
              </div>
            </section>

            <section id="protection" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Lock className="w-8 h-8 flex-shrink-0" />
                Guide pratique : Comment vous protéger en 5 étapes
              </h2>

              <div className="space-y-6 my-8">
                {protectionSteps.map((item) => (
                  <Card key={item.step} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Étape {item.step} : {item.title}
                          </h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="my-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    Les bons réflexes à adopter
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>Vérifiez vos transactions directement dans Réglages &gt; [Votre nom] &gt; Paiements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>Utilisez l'app officielle "Support Apple" pour tout contact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>Activez l'authentification à deux facteurs sur appleid.apple.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>Utilisez un gestionnaire de mots de passe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="victime" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-destructive mt-16 mb-6 text-2xl md:text-3xl">
                <AlertTriangle className="w-8 h-8 flex-shrink-0" />
                Que faire si vous êtes tombé dans le piège ?
              </h2>

              <p className="text-lg mb-6">
                Si vous avez communiqué vos informations aux escrocs, agissez <strong>immédiatement</strong> :
              </p>

              <div className="grid gap-4 md:grid-cols-2 my-8">
                <Card className="border-destructive/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center text-sm font-bold">1</span>
                      Changez votre mot de passe
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Rendez-vous sur{" "}
                      <a href="https://appleid.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        appleid.apple.com
                      </a>{" "}
                      et modifiez immédiatement votre mot de passe Apple ID.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center text-sm font-bold">2</span>
                      Contactez votre banque
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Faites opposition sur vos cartes liées à Apple Pay et demandez une surveillance renforcée de vos comptes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center text-sm font-bold">3</span>
                      Signalez l'arnaque
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Déclarez l'escroquerie sur{" "}
                      <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        cybermalveillance.gouv.fr
                      </a>{" "}
                      et transférez le mail à reportphishing@apple.com.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center text-sm font-bold">4</span>
                      Déposez plainte
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Si vous avez subi un préjudice financier, portez plainte au commissariat ou via{" "}
                      <a href="https://www.pre-plainte-en-ligne.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        pre-plainte-en-ligne.gouv.fr
                      </a>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <FileText className="w-8 h-8 flex-shrink-0" />
                Questions fréquentes
              </h2>

              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">{faq["name"]}</h4>
                      <p className="text-muted-foreground text-sm">{faq["acceptedAnswer"]["text"]}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mt-16 mb-12">
              <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">Protégez aussi votre site web</h3>
                      <p className="text-muted-foreground mb-4">
                        Les cybercriminels ne ciblent pas que les particuliers. Votre site WordPress peut aussi être victime 
                        de phishing, d'injections malveillantes ou de vol de données clients. Un hébergement sécurisé comme 
                        Kinsta offre une protection proactive avec pare-feu, détection de malwares et sauvegardes automatiques.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Button asChild>
                          <a 
                            href={KINSTA_SECURITY_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            data-testid="link-kinsta-security-apple"
                          >
                            Découvrir la sécurité Kinsta
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a 
                            href={KINSTA_PRICING_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            data-testid="link-kinsta-pricing-apple"
                          >
                            Voir les tarifs
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          <footer className="border-t pt-8 mt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
              <div>
                <h4 className="font-bold mb-2">Sources officielles</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <a href="https://appleinsider.com/articles/26/02/03/apple-users-are-being-targeted-by-a-coordinated-apple-pay-phishing-campaign" target="_blank" rel="noopener noreferrer" className="hover:text-primary" data-testid="link-footer-appleinsider">
                      AppleInsider
                    </a>
                  </li>
                  <li>
                    <a href="https://www.01net.com/actualites/cyberattaque-contre-apple-pay-mails-apple-phishing-cours.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary" data-testid="link-footer-01net">
                      01net
                    </a>
                  </li>
                  <li>
                    <a href="https://www.iphon.fr/post/clients-apple-pay-vises-arnaque-etes-vous-concerne" target="_blank" rel="noopener noreferrer" className="hover:text-primary" data-testid="link-footer-iphon">
                      iPhon.fr
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lebigdata.fr/apple-pay-attention-a-ce-scam-qui-frappe-des-millions-dutilisateurs" target="_blank" rel="noopener noreferrer" className="hover:text-primary" data-testid="link-footer-lebigdata">
                      Le Big Data
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Ressources Apple</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <a href="https://support.apple.com/fr-fr/102568" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Reconnaître le phishing
                    </a>
                  </li>
                  <li>
                    <a href="https://appleid.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Gérer votre Apple ID
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Signalement</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>reportphishing@apple.com</li>
                  <li>
                    <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      cybermalveillance.gouv.fr
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Auteur</h4>
                <p className="text-muted-foreground">
                  <Link href="/auteur/bouhmou-rachid" className="hover:text-primary">Bouhmou Rachid</Link>
                  <br />Expert Cybersécurité
                  <br />WP Vitesse Pro
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t text-xs text-muted-foreground">
              <p>
                Article publié le 5 février 2026 • Dernière mise à jour : 18h30
                <br />
                Investigation basée sur les alertes d'AppleInsider, 01net, iPhon.fr et Le Big Data.
              </p>
            </div>
          </footer>

        </article>
      </main>
    </div>
  );
}
