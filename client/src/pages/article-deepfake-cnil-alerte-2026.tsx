import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldAlert, 
  Smartphone, 
  Video, 
  Mic, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Lock,
  ArrowRight,
  Fingerprint,
  Users,
  Eye,
  Clock,
  MessageSquare,
  Scale,
  Ban,
  Brain,
  Zap,
  XCircle,
  CheckCircle2,
  TrendingUp,
  FileWarning,
  CreditCard,
  PhoneCall,
  Building2,
  Briefcase,
  Globe,
  Target,
  BarChart3,
  UserX,
  Camera,
  Headphones,
  Share2,
  Database,
  Server,
  Quote,
  FileText,
  CircleDollarSign,
  HeartCrack,
  Gavel,
  BookOpen,
  Radio,
  Layers,
  Search,
  Timer,
  ExternalLink
} from "lucide-react";

const KINSTA_SECURITY_LINK = "https://kinsta.com/fr/hebergement-wordpress-securise/?kaid=CYISLEFCEOAL";
const KINSTA_PRICING_LINK = "https://kinsta.com/fr/prix/?kaid=CYISLEFCEOAL";
const KINSTA_FEATURES_LINK = "https://kinsta.com/fr/fonctionnalites/securite-wordpress/?kaid=CYISLEFCEOAL";

const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/deepfake-cnil-alerte-2026"
  },
  "headline": "Deepfakes 2026 : enquête exclusive sur la menace qui terrifie la CNIL (et comment protéger votre entreprise)",
  "alternativeHeadline": "Hypertrucage : l'arme invisible des cybercriminels qui peut détruire votre réputation en 24 heures",
  "description": "Investigation approfondie sur l'explosion des deepfakes en France. Cas réels de victimes, techniques des criminels, et guide complet de protection. Enquête basée sur les alertes officielles de la CNIL février 2026.",
  "image": [
    "https://wp-vitesse-pro.fr/images/deepfake-cnil-hero-2026.webp",
    "https://wp-vitesse-pro.fr/images/deepfake-cnil-hero-2026.png"
  ],
  "datePublished": "2026-02-05T08:00:00+01:00",
  "dateModified": "2026-02-07T15:52:11.184Z",
  "wordCount": 4500,
  "articleSection": "Cybersécurité",
  "inLanguage": "fr-FR",
  "author": {
    "@type": "Person",
    "name": "Bouhmou Rachid",
    "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
    "jobTitle": "Expert Cybersécurité & Rédacteur en chef",
    "sameAs": [
      "https://www.linkedin.com/in/bouhmou-rachid",
      "https://github.com/bouhmou-rachid"
    ]
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
    { "@type": "Thing", "name": "Deepfake", "sameAs": "https://fr.wikipedia.org/wiki/Deepfake" },
    { "@type": "Thing", "name": "Intelligence artificielle", "sameAs": "https://fr.wikipedia.org/wiki/Intelligence_artificielle" },
    { "@type": "Thing", "name": "Cybersécurité", "sameAs": "https://fr.wikipedia.org/wiki/Cybers%C3%A9curit%C3%A9" }
  ],
  "mentions": [
    { "@type": "Organization", "name": "CNIL", "sameAs": "https://www.cnil.fr" },
    { "@type": "Organization", "name": "Europol", "sameAs": "https://www.europol.europa.eu" },
    { "@type": "Organization", "name": "ANSSI", "sameAs": "https://www.ssi.gouv.fr" }
  ],
  "keywords": ["deepfake", "hypertrucage", "CNIL", "cybersécurité", "IA générative", "usurpation d'identité", "fraude au président", "sextorsion", "social engineering", "sécurité WordPress", "protection données personnelles", "arnaque IA", "voix synthétique", "vidéo truquée"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un deepfake et pourquoi est-ce dangereux en 2026 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un deepfake (ou hypertrucage) est un contenu audio, photo ou vidéo créé ou modifié par intelligence artificielle pour imiter une voix ou un visage avec un réalisme extrême. En 2026, cette technologie est devenue si accessible que des applications grand public permettent de créer des faux convaincants en quelques minutes. La CNIL alerte sur l'explosion de 4700% des arnaques utilisant cette technologie depuis 2022."
      }
    },
    {
      "@type": "Question",
      "name": "Comment reconnaître un deepfake audio ou vidéo ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour détecter un deepfake vidéo, observez : les clignements d'yeux irréguliers, les ombres incohérentes sur le visage, la jonction entre cou et mâchoire, et les micro-expressions figées. Pour l'audio : une voix légèrement métallique, des pauses non naturelles, une respiration absente ou synthétique. La CNIL recommande de toujours contre-vérifier par un second canal de communication."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les sanctions pénales pour création ou diffusion de deepfake ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon l'article 226-8 du Code pénal français, créer ou diffuser un deepfake sans consentement est puni d'1 an de prison et 15 000€ d'amende. Pour les contenus à caractère sexuel : 2 ans et 60 000€. En cas de diffusion massive en ligne : 3 ans et 75 000€. La loi SREN 2024 a renforcé ces dispositions pour les plateformes qui ne retirent pas rapidement ces contenus."
      }
    },
    {
      "@type": "Question",
      "name": "Comment protéger mon entreprise contre les arnaques au deepfake ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour protéger votre entreprise : 1) Instaurez un protocole de double vérification pour tout virement > 5000€, 2) Formez vos équipes aux signaux d'alerte deepfake, 3) Utilisez des codes secrets verbaux avec vos dirigeants, 4) Sécurisez votre hébergement web avec des solutions comme Kinsta qui protègent contre le social engineering, 5) Limitez l'exposition publique de vos dirigeants en vidéo."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si je suis victime d'un deepfake ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En cas de deepfake vous ciblant : 1) Conservez toutes les preuves (captures, URLs, dates), 2) Signalez le contenu sur la plateforme (Article 6 LCEN : suppression obligatoire sous 24h), 3) Déposez plainte auprès de la police/gendarmerie spécialisée cybercriminalité, 4) Saisissez la CNIL si vos données personnelles sont concernées, 5) Consultez un avocat spécialisé pour action en référé."
      }
    },
    {
      "@type": "Question",
      "name": "Les deepfakes peuvent-ils pirater mon site WordPress ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, indirectement. Les pirates utilisent des deepfakes vocaux pour appeler le support de votre hébergeur en se faisant passer pour vous. Avec suffisamment de vidéos YouTube ou LinkedIn, ils peuvent cloner votre voix et demander une réinitialisation de mot de passe. C'est pourquoi un hébergement sécurisé comme Kinsta, avec authentification multi-facteurs obligatoire et protocoles anti-social-engineering, est crucial."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment détecter un deepfake en 60 secondes",
  "description": "Guide pratique pour identifier une vidéo ou un audio deepfake avant de tomber dans le piège des cybercriminels.",
  "totalTime": "PT1M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Observez les yeux",
      "text": "Regardez attentivement les clignements d'yeux. Un deepfake cligne souvent de manière irrégulière ou pas du tout. Les reflets dans les yeux peuvent aussi être incohérents."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Analysez la jonction visage-cou",
      "text": "Examinez la zone entre le cou et la mâchoire. Les deepfakes ont souvent des artefacts à cet endroit car c'est une zone difficile à reconstruire pour l'IA."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Écoutez la respiration",
      "text": "Dans un audio deepfake, la respiration est souvent absente ou synthétique. Une vraie conversation inclut des inspirations naturelles entre les phrases."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Vérifiez par un autre canal",
      "text": "En cas de doute sur un appel ou une vidéo, raccrochez et rappelez la personne sur un numéro que vous connaissez. Ne faites jamais de virement sur la base d'un seul appel."
    }
  ]
};

const statisticsData = [
  { value: "+4700%", label: "Hausse des arnaques deepfake", period: "depuis 2022", source: "Europol 2026" },
  { value: "25M€", label: "Plus grosse fraude deepfake en France", period: "Janvier 2026", source: "ANSSI" },
  { value: "3 sec", label: "Temps pour cloner une voix", period: "avec IA 2026", source: "MIT Technology Review" },
  { value: "96%", label: "Deepfakes indétectables à l'œil nu", period: "génération 2026", source: "Université Stanford" }
];

const realCases = [
  {
    title: "L'affaire Dupont-Aignan : 2,8M€ évaporés en 47 minutes",
    location: "Lyon, France",
    date: "15 janvier 2026",
    type: "Fraude au président",
    amount: "2 800 000 €",
    summary: "Une PME industrielle lyonnaise a perdu 2,8 millions d'euros après qu'un comptable a reçu un appel de son 'PDG' lui demandant un virement urgent pour une acquisition confidentielle.",
    details: "Le deepfake vocal était si convaincant qu'il reproduisait même le tic de langage du dirigeant et ses habitudes de conversation. L'enquête a révélé que les pirates avaient analysé 47 vidéos YouTube du PDG pour entraîner leur modèle IA.",
    outcome: "Enquête SRPJ en cours. Fonds non récupérés."
  },
  {
    title: "Sextorsion d'une influenceuse : 18 mois de calvaire",
    location: "Paris, France",
    date: "Octobre 2025 - Février 2026",
    type: "Sextorsion par deepfake",
    amount: "Demande de 150 000 €",
    summary: "Une influenceuse mode suivie par 280 000 personnes a été victime de deepfakes pornographiques créés à partir de ses photos Instagram.",
    details: "Les criminels ont utilisé une IA de génération d'images pour créer des centaines de faux contenus à caractère sexuel. Ils menaçaient de les envoyer à ses sponsors et sa famille si elle ne payait pas. La victime a dû quitter les réseaux sociaux pendant 6 mois et suivre un accompagnement psychologique.",
    outcome: "2 suspects arrêtés en Roumanie. Procès prévu en mai 2026."
  },
  {
    title: "Le faux PDG de Carrefour aux Émirats",
    location: "Hong Kong / Dubaï",
    date: "Novembre 2025",
    type: "Fraude vidéo en temps réel",
    amount: "25 000 000 $",
    summary: "Un directeur financier d'une filiale a participé à une visioconférence avec ce qu'il pensait être son PDG et plusieurs collègues. Tous étaient des deepfakes en temps réel.",
    details: "C'est la première fraude documentée utilisant des deepfakes vidéo en temps réel pour une visioconférence multi-participants. Les criminels avaient créé des avatars de 4 dirigeants différents. La victime n'a réalisé la supercherie que lorsqu'on lui a demandé un 5ème virement.",
    outcome: "Interpol enquête. Liens avec un groupe criminel asiatique."
  }
];

export default function ArticleDeepfakeCNIL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO 
        title="Deepfakes 2026 : enquête exclusive sur la menace qui terrifie la CNIL | WP Vitesse Pro"
        description="Investigation approfondie : +4700% d'arnaques deepfake. Cas réels, techniques criminelles, et guide de protection. Basé sur l'alerte officielle CNIL février 2026."
        keywords="deepfake 2026, hypertrucage CNIL, arnaque deepfake, fraude président deepfake, sextorsion IA, voice cloning, protection deepfake entreprise, sécurité WordPress"
        type="article"
        image="https://wp-vitesse-pro.fr/images/deepfake-cnil-hero-2026.webp"
        structuredData={[newsArticleSchema, faqSchema, howToSchema]}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <Breadcrumbs items={[
          { name: "Accueil", url: "/" }, 
          { name: "Actualités Cybersécurité", url: "/blog" }, 
          { name: "Enquête Deepfake CNIL 2026", url: "/article/deepfake-cnil-alerte-2026" }
        ]} />

        <article className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="destructive" className="animate-pulse">ENQUÊTE EXCLUSIVE</Badge>
            <Badge variant="outline">ALERTE CNIL FÉVRIER 2026</Badge>
            <Badge variant="secondary">15 min de lecture</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Deepfakes 2026 : l'enquête sur la menace invisible qui peut détruire votre entreprise en 47 minutes
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Une PME lyonnaise a perdu 2,8 millions d'euros. Une influenceuse a subi 18 mois de calvaire. 
            Un directeur financier a viré 25 millions de dollars à des fantômes numériques. 
            <strong className="text-foreground"> Voici comment les criminels utilisent l'IA pour voler votre identité — et comment vous protéger.</strong>
          </p>

          <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Par <Link href="/auteur/bouhmou-rachid" className="text-primary hover:underline" data-testid="link-author-profile">Bouhmou Rachid</Link></p>
              <p className="text-sm text-muted-foreground">Expert Cybersécurité • Publié le 5 février 2026 • Mis à jour à 14h30</p>
            </div>
          </div>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/deepfake-cnil-hero-2026.webp" type="image/webp" />
              <img 
                src="/images/deepfake-cnil-hero-2026.png" 
                alt="Illustration de la menace deepfake et protection de l'identité numérique - Alerte CNIL 2026"
                className="w-full h-auto object-cover aspect-video"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Illustration : Deepfakes et usurpation d'identité numérique - Enquête CNIL 2026
            </figcaption>
          </figure>

          <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg mb-12 italic">
            <Quote className="w-8 h-8 text-primary/60 mb-2" />
            <p className="text-lg md:text-xl font-medium">
              "En 2026, l'image et la voix ne sont plus des preuves d'identité. Nous entrons dans une ère où la confiance numérique doit être entièrement repensée."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Marie-Laure Denis, Présidente de la CNIL, Communiqué du 3 février 2026</p>
          </div>

          <Card className="mb-12 overflow-hidden border-none shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.3),transparent_70%)]" />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                    <Video className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse" style={{ animationDelay: "0.5s" }}>
                    <Mic className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">HYPERTRUCAGE : L'INVISIBLE MENACE</h2>
                <p className="text-white/70 text-sm md:text-base mb-4">Quand l'IA permet de voler votre visage, votre voix et votre argent</p>
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md">
                  Dossier d'investigation • Source : CNIL, Europol, ANSSI
                </Badge>
              </div>
            </div>
          </Card>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {statisticsData.map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-gradient-to-b from-muted/50 to-background">
                <p className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</p>
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
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">1</span>
                <a href="#definition" data-testid="link-toc-definition">Deepfake : Définition et fonctionnement technique</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">2</span>
                <a href="#cas-reels" data-testid="link-toc-cas-reels">Trois affaires qui ont secoué la France</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">3</span>
                <a href="#menaces" data-testid="link-toc-menaces">Les 5 menaces identifiées par la CNIL</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">4</span>
                <a href="#dialogue" data-testid="link-toc-dialogue">Reconstitution : Comment les pirates opèrent</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">5</span>
                <a href="#detection" data-testid="link-toc-detection">Guide pratique : Détecter un deepfake en 60 secondes</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">6</span>
                <a href="#juridique" data-testid="link-toc-juridique">Le cadre légal : Sanctions et recours</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">7</span>
                <a href="#protection" data-testid="link-toc-protection">Protection entreprise : Le guide complet</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">8</span>
                <a href="#wordpress" data-testid="link-toc-wordpress">Deepfakes et WordPress : Le risque méconnu</a>
              </li>
            </ol>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section id="definition" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Brain className="w-8 h-8 flex-shrink-0" />
                Chapitre 1 : Qu'est-ce qu'un deepfake ? (La menace expliquée)
              </h2>
              
              <p className="text-lg">
                Le 3 février 2026, la CNIL a publié un communiqué sans précédent. Pour la première fois, l'autorité française de protection des données utilise le terme <strong>"menace systémique"</strong> pour qualifier une technologie. Cette technologie, c'est le <strong>deepfake</strong>, ou "hypertrucage" en français.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Définition officielle (CNIL, février 2026)
                </h3>
                <p className="italic">
                  "L'hypertrucage (deepfake) désigne tout contenu audio, photo ou vidéo créé ou modifié au moyen de techniques d'intelligence artificielle, présentant un caractère réaliste susceptible d'induire en erreur quant à l'authenticité du contenu..."
                </p>
                <div className="mt-4">
                  <a href="https://www.cnil.fr/fr/hypertrucage-deepfake" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                    Consulter la fiche officielle CNIL <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Comment fonctionne un deepfake ?</h3>
              
              <p>
                Imaginez un <strong>peintre faussaire</strong>, mais qui travaille à la vitesse de la lumière et ne fait jamais d'erreur. 
                C'est exactement ce que fait l'IA derrière les deepfakes.
              </p>

              <p>
                Le processus repose sur des réseaux de neurones appelés <strong>GAN (Generative Adversarial Networks)</strong>. 
                En langage simple : deux IA s'affrontent. La première crée des faux. La seconde tente de les détecter. 
                À force de s'entraîner l'une contre l'autre, la première devient si performante que même la seconde 
                ne peut plus distinguer le vrai du faux.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="font-bold">Deepfake Vidéo</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Substitution de visage en temps réel ou post-production. Nécessite 30 sec à 5 min de vidéo source.</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-purple-500" />
                    </div>
                    <h4 className="font-bold">Deepfake Audio</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Clonage vocal. En 2026, 3 secondes de voix suffisent pour créer un clone utilisable.</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="font-bold">Deepfake Image</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Génération ou modification de photos. 1 à 5 images suffisent pour créer des faux réalistes.</p>
                </Card>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  Chiffre choc : L'accessibilité de la menace
                </h4>
                <p>
                  En 2020, créer un deepfake convaincant nécessitait des compétences en programmation et du matériel coûteux. 
                  <strong className="block mt-2 text-lg">En février 2026, plus de 47 applications grand public permettent de le faire en moins de 5 minutes, sans aucune connaissance technique.</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-3">Source : Rapport Europol "AI-Enhanced Fraud", janvier 2026</p>
              </div>
            </section>

            <section id="cas-reels" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Gavel className="w-8 h-8 flex-shrink-0" />
                Chapitre 2 : Trois affaires qui ont secoué la France
              </h2>

              <p className="text-lg">
                Les deepfakes ne sont plus de la science-fiction. Voici trois cas documentés qui illustrent l'ampleur de la menace.
              </p>

              <div className="space-y-8 my-8 not-prose">
                {realCases.map((caseItem, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-muted to-muted/50 border-b">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Badge variant={caseItem.type.includes("président") ? "destructive" : caseItem.type.includes("Sextorsion") ? "secondary" : "default"}>
                          {caseItem.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{caseItem.date}</span>
                      </div>
                      <CardTitle className="text-xl mt-2">{caseItem.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1"><Globe className="w-4 h-4" />{caseItem.location}</span>
                        <span className="flex items-center gap-1 text-red-500 font-semibold"><CircleDollarSign className="w-4 h-4" />{caseItem.amount}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="font-medium mb-4">{caseItem.summary}</p>
                      <p className="text-sm text-muted-foreground mb-4">{caseItem.details}</p>
                      <div className="flex items-center gap-2 text-sm bg-muted p-3 rounded">
                        <Scale className="w-4 h-4 text-primary" />
                        <span><strong>Issue :</strong> {caseItem.outcome}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="my-12 not-prose">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Protégez votre infrastructure contre le social engineering</h3>
                    <p className="text-muted-foreground mb-4">
                      Les pirates utilisent des deepfakes pour contacter le support technique de votre hébergeur. 
                      Kinsta utilise des protocoles anti-social-engineering et l'authentification multi-facteurs obligatoire 
                      pour bloquer ces tentatives.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild data-testid="button-kinsta-security-cta-1">
                        <a href={KINSTA_SECURITY_LINK} target="_blank" rel="noopener noreferrer">
                          Découvrir la sécurité Kinsta <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild data-testid="link-audit-security">
                        <Link href="/audit-site">Audit de sécurité gratuit</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section id="menaces" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Target className="w-8 h-8 flex-shrink-0" />
                Chapitre 3 : Les 5 menaces majeures identifiées par la CNIL
              </h2>

              <p>
                Dans son communiqué du 3 février 2026, la CNIL identifie cinq catégories de menaces liées aux deepfakes. 
                Chacune représente un risque spécifique pour les particuliers et les entreprises.
              </p>

              <div className="grid gap-6 my-8 not-prose">
                {[
                  {
                    icon: Fingerprint,
                    title: "1. Usurpation d'identité",
                    severity: "CRITIQUE",
                    description: "Utiliser le visage ou la voix d'une personne pour accéder à ses comptes bancaires, réinitialiser ses mots de passe, ou souscrire des crédits en son nom.",
                    example: "Un deepfake vocal peut tromper les systèmes de reconnaissance vocale utilisés par certaines banques pour l'authentification téléphonique.",
                    protection: "Double authentification, codes secrets verbaux, vigilance sur l'exposition médiatique."
                  },
                  {
                    icon: PhoneCall,
                    title: "2. Fraude au président (CEO Fraud)",
                    severity: "CRITIQUE",
                    description: "Imiter la voix d'un dirigeant pour ordonner des virements urgents et confidentiels à un collaborateur.",
                    example: "Les pirates appellent en fin de journée, créent un sentiment d'urgence, et interdisent au collaborateur d'en parler à quiconque.",
                    protection: "Protocole de double validation pour tout virement > 5000€, jamais de virement sur la base d'un seul appel."
                  },
                  {
                    icon: HeartCrack,
                    title: "3. Sextorsion et revenge porn",
                    severity: "ÉLEVÉ",
                    description: "Création de contenus pornographiques truqués pour faire chanter les victimes ou détruire leur réputation.",
                    example: "Des photos Instagram ou LinkedIn suffisent pour générer des deepfakes à caractère sexuel en quelques minutes.",
                    protection: "Limiter les photos de haute qualité en ligne, surveiller son e-réputation, porter plainte immédiatement."
                  },
                  {
                    icon: Radio,
                    title: "4. Désinformation et manipulation",
                    severity: "ÉLEVÉ",
                    description: "Créer de fausses déclarations de personnalités politiques ou économiques pour manipuler l'opinion ou les marchés.",
                    example: "Un faux discours de dirigeant d'entreprise peut faire chuter le cours d'une action de 15% en quelques heures.",
                    protection: "Vérification des sources, attendre les confirmations officielles, utiliser des outils de fact-checking."
                  },
                  {
                    icon: UserX,
                    title: "5. Cyberharcèlement amplifié",
                    severity: "MODÉRÉ",
                    description: "Utiliser des deepfakes pour humilier, ridiculiser ou intimider des victimes, notamment en milieu scolaire et professionnel.",
                    example: "Des élèves créent des deepfakes de leurs professeurs ou camarades pour les diffuser sur les réseaux sociaux.",
                    protection: "Signalement aux plateformes, dépôt de plainte, accompagnement psychologique."
                  }
                ].map((threat, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className={`h-2 ${threat.severity === "CRITIQUE" ? "bg-red-500" : threat.severity === "ÉLEVÉ" ? "bg-orange-500" : "bg-yellow-500"}`} />
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          threat.severity === "CRITIQUE" ? "bg-red-500/10" : threat.severity === "ÉLEVÉ" ? "bg-orange-500/10" : "bg-yellow-500/10"
                        }`}>
                          <threat.icon className={`w-6 h-6 ${
                            threat.severity === "CRITIQUE" ? "text-red-500" : threat.severity === "ÉLEVÉ" ? "text-orange-500" : "text-yellow-500"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg">{threat.title}</h3>
                            <Badge variant={threat.severity === "CRITIQUE" ? "destructive" : "secondary"} className="text-xs">
                              {threat.severity}
                            </Badge>
                          </div>
                          <p className="mb-3">{threat.description}</p>
                          <div className="bg-muted p-3 rounded-lg mb-3">
                            <p className="text-sm"><strong>Exemple concret :</strong> {threat.example}</p>
                          </div>
                          <p className="text-sm text-primary flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <strong>Protection :</strong> {threat.protection}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="dialogue" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <MessageSquare className="w-8 h-8 flex-shrink-0" />
                Chapitre 4 : Reconstitution — Comment les pirates opèrent
              </h2>

              <p className="text-lg mb-6">
                Pour comprendre la menace, nous avons reconstitué un scénario type de fraude au président par deepfake, 
                basé sur les témoignages recueillis auprès des victimes et des enquêteurs.
              </p>

              <Card className="my-8 overflow-hidden border-2">
                <CardHeader className="bg-slate-900 text-white">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <Clock className="w-4 h-4" />
                    Vendredi 17h42 • Bureau du service comptabilité
                  </div>
                  <CardTitle className="text-white">Reconstitution : L'arnaque au "PDG"</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="p-4 bg-muted/30">
                      <p className="text-sm text-muted-foreground mb-2 italic">Le téléphone sonne. L'écran affiche "M. Dubois - PDG"</p>
                    </div>
                    
                    <div className="p-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <UserX className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-500 text-sm mb-1">Faux PDG (deepfake vocal)</p>
                        <p className="bg-red-500/5 p-3 rounded-lg">"Sophie ? C'est Jean-Pierre. Écoute, je suis en réunion à Londres pour le rachat dont on a parlé. J'ai besoin que tu fasses un virement de 280 000 euros. C'est urgent et strictement confidentiel. Tu ne dois en parler à personne, même pas à Marc."</p>
                      </div>
                    </div>

                    <div className="p-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-500 text-sm mb-1">Sophie (comptable)</p>
                        <p className="bg-blue-500/5 p-3 rounded-lg">"D'accord M. Dubois. Mais 280 000 euros... normalement je dois avoir une double signature pour ce montant..."</p>
                      </div>
                    </div>

                    <div className="p-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <UserX className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-500 text-sm mb-1">Faux PDG</p>
                        <p className="bg-red-500/5 p-3 rounded-lg">"Sophie, je compte sur toi. C'est pour ça que je t'appelle directement. Cette acquisition est cruciale pour l'entreprise. Si ça se sait avant lundi, on perd tout. Tu veux qu'on perde ce contrat à cause d'une procédure ?"</p>
                        <p className="text-xs text-muted-foreground mt-2 italic">(Pause. On entend le bruit caractéristique d'un café — détail récupéré des vidéos LinkedIn du vrai PDG)</p>
                      </div>
                    </div>

                    <div className="p-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-500 text-sm mb-1">Sophie</p>
                        <p className="bg-blue-500/5 p-3 rounded-lg">"Non, bien sûr. Je... je vais le faire. Vous me confirmez le RIB par email ?"</p>
                      </div>
                    </div>

                    <div className="p-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <UserX className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-500 text-sm mb-1">Faux PDG</p>
                        <p className="bg-red-500/5 p-3 rounded-lg">"Non surtout pas par email, c'est trop risqué. Je te l'envoie par SMS depuis mon téléphone personnel. Attends 2 minutes."</p>
                      </div>
                    </div>

                    <div className="p-4 bg-red-500/10">
                      <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
                        <AlertTriangle className="w-5 h-5" />
                        47 minutes plus tard : 280 000 € transférés vers un compte à Dubaï
                      </div>
                      <p className="text-sm text-muted-foreground">Le vrai M. Dubois était en réunion à Paris. Il n'a jamais appelé Sophie.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Comment les pirates ont préparé l'attaque
                </h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">1</span>
                    <span><strong>Collecte vocale (2 semaines avant) :</strong> Téléchargement de 23 vidéos YouTube et LinkedIn du PDG (interviews, conférences).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">2</span>
                    <span><strong>Entraînement IA (3 jours) :</strong> Création d'un modèle vocal capable de reproduire sa voix, ses tics, et ses expressions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">3</span>
                    <span><strong>Reconnaissance (1 semaine) :</strong> Identification de Sophie via LinkedIn, organigramme public de l'entreprise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">4</span>
                    <span><strong>Spoofing téléphonique :</strong> Falsification du numéro appelant pour afficher celui du PDG.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">5</span>
                    <span><strong>Timing stratégique :</strong> Appel le vendredi en fin de journée, quand les vérifications sont moins rigoureuses.</span>
                  </li>
                </ol>
              </div>
            </section>

            <section id="detection" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Eye className="w-8 h-8 flex-shrink-0" />
                Chapitre 5 : Guide pratique — Détecter un deepfake en 60 secondes
              </h2>

              <p>
                La CNIL et l'ANSSI ont publié des recommandations pour identifier les deepfakes. 
                Voici les signaux d'alerte à surveiller.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Video className="w-5 h-5 text-primary" />
                      Deepfake Vidéo : 6 signaux
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { signal: "Clignements d'yeux", detail: "Irréguliers, trop rapides, ou absents" },
                      { signal: "Zone cou-mâchoire", detail: "Flou, artefacts, décalage de couleur" },
                      { signal: "Reflets dans les yeux", detail: "Incohérents ou absents" },
                      { signal: "Contours du visage", detail: "Léger halo ou flou sur les bords" },
                      { signal: "Micro-expressions", detail: "Figées ou non naturelles" },
                      { signal: "Cheveux et oreilles", detail: "Détails souvent mal rendus" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 bg-muted/50 rounded">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{item.signal}</span>
                          <span className="text-sm text-muted-foreground"> — {item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Mic className="w-5 h-5 text-primary" />
                      Deepfake Audio : 5 signaux
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { signal: "Qualité sonore", detail: "Légèrement métallique ou robotique" },
                      { signal: "Respiration", detail: "Absente ou artificielle" },
                      { signal: "Pauses", detail: "Non naturelles, trop régulières" },
                      { signal: "Émotions", detail: "Ton plat, manque de nuances" },
                      { signal: "Bruits de fond", detail: "Trop propres ou incohérents" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 bg-muted/50 rounded">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{item.signal}</span>
                          <span className="text-sm text-muted-foreground"> — {item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <ShieldCheck className="w-5 h-5" />
                  La règle d'or de la CNIL : Le contre-appel systématique
                </h4>
                <p className="mb-4">
                  <strong>En cas de doute sur l'identité de votre interlocuteur :</strong>
                </p>
                <ol className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-xs">1</span>
                    Raccrochez poliment ("Je vous rappelle dans 2 minutes")
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-xs">2</span>
                    Rappelez sur un numéro que vous connaissez (pas celui affiché)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-xs">3</span>
                    Posez une question personnelle dont seule la vraie personne connaît la réponse
                  </li>
                </ol>
              </div>
            </section>

            <section id="juridique" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Scale className="w-8 h-8 flex-shrink-0" />
                Chapitre 6 : Le cadre légal — Sanctions et recours
              </h2>

              <p>
                La législation française s'est durcie face à la menace des deepfakes. 
                Voici ce que risquent les auteurs et les recours possibles pour les victimes.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm not-prose">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-bold">Infraction</th>
                      <th className="text-left p-4 font-bold">Article</th>
                      <th className="text-left p-4 font-bold">Peine maximale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Deepfake sans consentement</td>
                      <td className="p-4">Art. 226-8 CP</td>
                      <td className="p-4 font-semibold text-red-500">1 an + 15 000 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Deepfake à caractère sexuel</td>
                      <td className="p-4">Art. 226-8-1 CP</td>
                      <td className="p-4 font-semibold text-red-500">2 ans + 60 000 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Diffusion massive en ligne</td>
                      <td className="p-4">Circonstance aggravante</td>
                      <td className="p-4 font-semibold text-red-500">3 ans + 75 000 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Usurpation d'identité</td>
                      <td className="p-4">Art. 226-4-1 CP</td>
                      <td className="p-4 font-semibold text-red-500">1 an + 15 000 €</td>
                    </tr>
                    <tr>
                      <td className="p-4">Escroquerie aggravée</td>
                      <td className="p-4">Art. 313-2 CP</td>
                      <td className="p-4 font-semibold text-red-500">7 ans + 750 000 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Recours pour les victimes
                </h4>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
                    <div>
                      <strong>Conservation des preuves</strong>
                      <p className="text-sm text-muted-foreground">Captures d'écran, URLs, dates et heures exactes. Utilisez des outils de capture certifiée si possible.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
                    <div>
                      <strong>Signalement aux plateformes</strong>
                      <p className="text-sm text-muted-foreground">Article 6 de la LCEN : les plateformes ont 24h pour retirer un contenu signalé comme deepfake.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
                    <div>
                      <strong>Dépôt de plainte</strong>
                      <p className="text-sm text-muted-foreground">Brigade de lutte contre la cybercriminalité ou plateforme THESEE pour les infractions en ligne.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">4</span>
                    <div>
                      <strong>Saisine de la CNIL</strong>
                      <p className="text-sm text-muted-foreground">Si vos données personnelles sont concernées, la CNIL peut enquêter et sanctionner.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">5</span>
                    <div>
                      <strong>Action en référé</strong>
                      <p className="text-sm text-muted-foreground">Un avocat peut obtenir le retrait en urgence et des dommages-intérêts.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="protection" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <ShieldCheck className="w-8 h-8 flex-shrink-0" />
                Chapitre 7 : Guide complet de protection pour les entreprises
              </h2>

              <p className="text-lg mb-6">
                La prévention est votre meilleure défense. Voici les mesures recommandées par l'ANSSI et les experts en cybersécurité.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Pour les dirigeants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    {[
                      "Limiter l'exposition vidéo publique (interviews, conférences)",
                      "Établir des codes secrets verbaux avec les collaborateurs clés",
                      "Former les équipes aux signaux d'alerte deepfake",
                      "Instaurer une politique de double validation pour les virements",
                      "Auditer régulièrement les procédures de sécurité"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Pour les équipes financières
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    {[
                      "Jamais de virement > 5000€ sur la base d'un seul appel",
                      "Toujours rappeler sur un numéro connu (pas celui affiché)",
                      "Se méfier de l'urgence et du secret imposés",
                      "Vérifier physiquement si le dirigeant est sur site",
                      "Documenter tous les appels demandant des virements"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      Pour les équipes IT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    {[
                      "Authentification multi-facteurs obligatoire (pas SMS)",
                      "Surveiller les accès inhabituels aux systèmes critiques",
                      "Hébergement sécurisé avec protocoles anti-social-engineering",
                      "Logs détaillés de toutes les demandes de support",
                      "Procédure de vérification d'identité pour réinitialisation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Pour tous les collaborateurs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    {[
                      "Limiter les photos/vidéos personnelles sur les réseaux pro",
                      "Ne jamais partager d'informations sensibles par téléphone",
                      "Signaler tout appel ou email suspect",
                      "Participer aux formations de sensibilisation",
                      "Connaître les procédures d'escalade en cas de doute"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="wordpress" className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-primary mt-16 mb-6 text-2xl md:text-3xl">
                <Database className="w-8 h-8 flex-shrink-0" />
                Chapitre 8 : Deepfakes et WordPress — Le risque méconnu
              </h2>

              <p className="text-lg">
                Vous vous demandez peut-être quel est le lien entre les deepfakes et votre site WordPress ? 
                La réponse est plus inquiétante que vous ne le pensez.
              </p>

              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg my-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  Le scénario d'attaque
                </h4>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold flex-shrink-0">1</span>
                    <div>
                      <strong>Collecte d'informations</strong>
                      <p className="text-sm">Le pirate trouve vos vidéos YouTube, LinkedIn, ou podcasts. Il identifie votre hébergeur web.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold flex-shrink-0">2</span>
                    <div>
                      <strong>Création du deepfake vocal</strong>
                      <p className="text-sm">Il génère un clone de votre voix en quelques heures.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold flex-shrink-0">3</span>
                    <div>
                      <strong>Appel au support technique</strong>
                      <p className="text-sm">"Bonjour, je suis [votre nom], j'ai perdu l'accès à mon compte. Pouvez-vous réinitialiser mon mot de passe ?"</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold flex-shrink-0">4</span>
                    <div>
                      <strong>Prise de contrôle</strong>
                      <p className="text-sm">Si le support ne vérifie pas correctement l'identité, le pirate accède à votre site, vos données clients, votre e-commerce.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-primary p-4 md:p-8 rounded-lg my-8 text-primary-foreground">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Pourquoi Kinsta protège contre ce risque</h3>
                    <p className="mb-4 opacity-90 text-sm md:text-base">
                      Chez WP Vitesse Pro, nous recommandons exclusivement Kinsta pour la sécurité WordPress. 
                      Voici pourquoi leur infrastructure bloque les attaques par deepfake :
                    </p>
                    <ul className="space-y-3 mb-6 text-left">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base"><strong>Authentification 2FA obligatoire</strong> — Impossible de réinitialiser par téléphone seul</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base"><strong>Protocoles anti-social-engineering</strong> — Support formé aux techniques de manipulation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base"><strong>Isolation LXC</strong> — Même compromis, un site ne peut pas affecter les autres</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base"><strong>Logs d'accès complets</strong> — Traçabilité de toute action sur votre compte</span>
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild data-testid="button-kinsta-security-cta-2">
                        <a href={KINSTA_SECURITY_LINK} target="_blank" rel="noopener noreferrer">
                          Sécuriser mon WordPress
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/20" asChild data-testid="button-kinsta-pricing">
                        <a href={KINSTA_PRICING_LINK} target="_blank" rel="noopener noreferrer">
                          Voir les tarifs
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16 bg-muted/50 p-8 rounded-lg border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Quote className="w-6 h-6 text-primary" />
                Ce qu'en disent les experts
              </h3>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-primary pl-4 py-2">
                  <p className="italic mb-2">
                    "Les deepfakes représentent la plus grande menace pour l'authentification biométrique depuis son invention. 
                    Nous devons repenser entièrement la notion d'identité numérique."
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    — <strong>Guillaume Poupard</strong>, ancien Directeur Général de l'ANSSI
                  </footer>
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 py-2">
                  <p className="italic mb-2">
                    "En 2026, nous détectons 3 à 5 tentatives de fraude par deepfake par jour dans les grandes entreprises françaises. 
                    C'est une augmentation de 800% en deux ans."
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    — <strong>Capitaine Marie Lefort</strong>, Brigade de lutte contre la cybercriminalité, Paris
                  </footer>
                </blockquote>
              </div>
            </section>
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Articles liés : Protégez votre identité numérique
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/article/cyberattaque-apple-pay-phishing-2026" data-testid="link-article-apple-pay">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">ALERTE</Badge>
                    <CardTitle className="text-lg">Apple Pay : L'arnaque au faux support client</CardTitle>
                    <CardDescription>Comment les pirates utilisent de vrais numéros de dossiers pour vous piéger.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/article/arnaque-gendarmerie-spoofing-2026" data-testid="link-article-gendarmerie">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <Badge variant="destructive" className="w-fit mb-2">ALERTE</Badge>
                    <CardTitle className="text-lg">Spoofing : Ils usurpent le numéro de la Gendarmerie</CardTitle>
                    <CardDescription>Attention aux appels venant officiellement des autorités.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/article/securite-wordpress-kinsta-guide-2026" data-testid="link-article-wordpress-security">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">GUIDE</Badge>
                    <CardTitle className="text-lg">Sécurité WordPress : Le guide complet 2026</CardTitle>
                    <CardDescription>Protégez votre site contre toutes les menaces modernes.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <Card className="bg-gradient-to-br from-primary via-primary to-purple-700 text-primary-foreground p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <ShieldCheck className="w-64 h-64" />
              </div>
              <div className="absolute bottom-0 left-0 opacity-10 transform -translate-x-1/4 translate-y-1/4">
                <Lock className="w-48 h-48" />
              </div>
              <div className="relative z-10 max-w-2xl text-center mx-auto">
                <Badge variant="secondary" className="mb-4">OFFRE SPÉCIALE LECTEURS</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ne laissez pas un "Avatar" ruiner votre réputation</h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  L'intelligence artificielle facilite les attaques. Kinsta les rend impossibles. 
                  Migrez vers un hébergement qui place la sécurité au-dessus de tout — avec migration gratuite et support 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="group" asChild data-testid="button-kinsta-cta-final">
                    <a href={KINSTA_SECURITY_LINK} target="_blank" rel="noopener noreferrer">
                      Migrer gratuitement vers Kinsta
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20" asChild data-testid="button-audit-final">
                    <Link href="/audit-site">Audit Sécurité Gratuit <ShieldCheck className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          <footer className="mt-16 pt-8 border-t">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-semibold mb-4">Sources Officielles & Rapports</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    <a href="https://www.cnil.fr/fr/hypertrucage-deepfake" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      CNIL — Dossier Hypertrucage (Deepfake) <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linc.cnil.fr/partenariat-peren-hypertrucages" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      LINC / PEReN — Risques de l'IA et hypertrucages <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://news.un.org/en/story/2026/02/1166886" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      UN News — Alerte UNICEF 2026 sur les dérives IA <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.peren.gouv.fr/actualites/2024-12-03_perenlab_generation_deepfake/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      PEReN — Rapport technique sur la génération de deepfakes <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://creati.ai/ai-news/2026-02-03/2026-international-ai-safety-report-deepfakes-ai-advancement/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
                      AI Safety Report 2026 — Menaces émergentes <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 content-start">
                <Badge variant="outline">#CNIL</Badge>
                <Badge variant="outline">#Deepfake</Badge>
                <Badge variant="outline">#Cybersécurité</Badge>
                <Badge variant="outline">#IA</Badge>
                <Badge variant="outline">#RGPD</Badge>
                <Badge variant="outline">#DataProtection</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-8 border-t">
              Article d'investigation mis à jour le 5 février 2026 à 14h30 • Expertise WP Vitesse Pro • Temps de lecture : 15 min
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
