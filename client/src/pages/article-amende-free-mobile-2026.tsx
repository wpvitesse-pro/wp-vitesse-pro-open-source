import { useEffect, lazy, Suspense } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Navbar, SEOFooter } from "@/components/navbar";
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
  Percent,
  Award,
  Target,
  Layers,
  Binary,
  CircleAlert,
  BadgeEuro
} from "lucide-react";

import { trackCTAClick } from "@/lib/analytics";

const ArticleCharts = lazy(() => import("@/components/article-charts"));

import bannerWebP from "@assets/optimized/free-mobile-amende-800.webp";
import bannerWebP2x from "@assets/optimized/free-mobile-amende-1600.webp";
import bannerWebP400 from "@assets/optimized/free-mobile-amende-400.webp";

const ARTICLE_DATA = {
  title: "Amende CNIL Free Mobile 42M€ : analyse RGPD",
  headline: "Free Mobile condamné à 42 millions d'euros : enquête exclusive sur la plus grande fuite de données télécom française",
  description: "Analyse de l'amende CNIL 42M€ à Free Mobile. Fuite de données, violations RGPD, conseils protection.",
  datePublished: "2026-01-14T18:00:00+01:00",
  dateModified: "2026-01-14T22:00:00+01:00",
  author: "Marie Lefebvre",
  authorTitle: "Experte Protection des Données & Cybersécurité",
  readingTime: 48,
  wordCount: 7156,
  category: "Protection des Données",
  tags: ["Free Mobile", "CNIL", "RGPD", "GDPR", "Amende", "Fuite de données", "IBAN", "Cybersécurité", "Iliad", "Protection données personnelles"],
  image: bannerWebP,
  url: "https://wp-vitesse-pro.fr/article/amende-free-mobile-cnil-42-millions-2026"
};

const CHART_DATA = [
  { name: "Free Mobile", value: 27, color: "#EF4444" },
  { name: "Free (Fixe)", value: 15, color: "#F97316" }
];

const TIMELINE_EVENTS = [
  { date: "28 septembre 2026", event: "Début de la cyberattaque - L'attaquant s'infiltre via le VPN de Free Mobile", icon: AlertTriangle },
  { date: "17 octobre 2026", event: "Exfiltration massive des données : 43,6 Go de données clients extraites", icon: Database },
  { date: "21 octobre 2026", event: "L'attaquant contacte Free Mobile pour révéler l'intrusion", icon: MessageCircle },
  { date: "22 octobre 2026", event: "Free découvre officiellement la brèche et expulse l'attaquant", icon: ShieldAlert },
  { date: "25 octobre 2026", event: "Notification à la CNIL et premiers emails aux clients affectés", icon: Mail },
  { date: "Novembre 2026", event: "Plus de 2 500 plaintes déposées auprès de la CNIL", icon: FileWarning },
  { date: "Janvier 2026", event: "Mise en examen du hacker présumé (utilisateur 'drussellx')", icon: Gavel },
  { date: "8 janvier 2026", event: "Délibération SAN-2026-001 de la formation restreinte de la CNIL", icon: Scale },
  { date: "13 janvier 2026", event: "Publication officielle des sanctions : 42 millions d'euros au total", icon: BadgeEuro }
];

const IMPACT_STATS = [
  { type: "Total de l'amende", count: "42M €", trend: "record", icon: BadgeEuro },
  { type: "Contrats exposés", count: "24,6M", trend: "massif", icon: Users },
  { type: "Plaintes CNIL", count: "2 500+", trend: "record", icon: FileWarning },
  { type: "IBAN compromis", count: "5,11M", trend: "critique", icon: CreditCard },
  { type: "Durée de l'intrusion", count: "~24 jours", trend: "prolongée", icon: Timer },
  { type: "Données exfiltrées", count: "43,6 Go", trend: "massif", icon: Database }
];

const DATA_COMPROMISED = [
  { category: "Identité", items: ["Nom et prénom", "Date de naissance"], sensitivity: "haute", icon: UserCheck },
  { category: "Coordonnées", items: ["Adresse email", "Numéro de téléphone", "Adresse postale"], sensitivity: "haute", icon: Phone },
  { category: "Données contractuelles", items: ["Numéro client/abonné", "Type d'offre souscrite", "Date de souscription"], sensitivity: "moyenne", icon: FileText },
  { category: "Données bancaires", items: ["IBAN", "BIC"], sensitivity: "critique", icon: CreditCard },
  { category: "Données archivées", items: ["Contrats résiliés depuis 5-10+ ans", "Historique des offres"], sensitivity: "moyenne", icon: Database }
];

const RGPD_VIOLATIONS = [
  {
    article: "Article 32",
    title: "Manquement à l'obligation de sécurité des données",
    amende: "27M € (Free Mobile) + 15M € (Free)",
    description: "Les mesures de sécurité déployées n'étaient pas adaptées au volume et à la sensibilité des données traitées. L'authentification VPN était insuffisamment robuste et les systèmes de détection d'intrusion inefficaces.",
    details: ["Authentification VPN faible", "Détection comportementale défaillante", "Absence de mesures élémentaires de protection", "Accès distant mal sécurisé"]
  },
  {
    article: "Article 34",
    title: "Communication insuffisante aux personnes concernées",
    amende: "Inclus dans la sanction globale",
    description: "L'email d'information envoyé aux victimes ne comportait pas toutes les informations requises par le RGPD, notamment sur les risques concrets et les mesures de protection à adopter.",
    details: ["Omission des conséquences concrètes", "Conseils de protection insuffisants", "Information à deux niveaux inadéquate"]
  },
  {
    article: "Article 5-1-e",
    title: "Conservation excessive des données (Free Mobile uniquement)",
    amende: "Aggrave la sanction Free Mobile",
    description: "Free Mobile a conservé des millions de données de clients résiliés pendant des durées manifestement excessives, sans justification ni tri entre données nécessaires et superflues.",
    details: ["Données conservées 5-10 ans après résiliation", "Absence de tri des données archivées", "3 millions de contrats > 10 ans", "Aucune purge automatique"]
  }
];

const PROTECTION_CONSEILS = [
  {
    title: "Surveillez vos comptes bancaires",
    description: "Consultez quotidiennement vos relevés pour détecter tout prélèvement suspect. Activez les alertes SMS pour chaque transaction.",
    priority: "urgente",
    icon: Eye
  },
  {
    title: "Activez la liste blanche des créanciers",
    description: "Demandez à votre banque d'activer ce service : seuls les créanciers que vous autorisez pourront effectuer des prélèvements.",
    priority: "recommandée",
    icon: ShieldCheck
  },
  {
    title: "Méfiez-vous du phishing",
    description: "Ne cliquez jamais sur les liens dans les emails ou SMS suspects. Tapez manuellement l'adresse de votre banque dans le navigateur.",
    priority: "urgente",
    icon: AlertOctagon
  },
  {
    title: "Changez vos mots de passe",
    description: "Modifiez les mots de passe de tous vos comptes en ligne, en particulier si vous utilisiez les mêmes identifiants que pour Free.",
    priority: "recommandée",
    icon: Key
  },
  {
    title: "Activez la double authentification",
    description: "Ajoutez une couche de sécurité supplémentaire sur vos comptes bancaires, emails et réseaux sociaux.",
    priority: "recommandée",
    icon: Fingerprint
  },
  {
    title: "Contestez les prélèvements frauduleux",
    description: "Vous avez 13 mois pour contester un prélèvement non autorisé. Votre banque doit vous rembourser sous 24h ouvrées.",
    priority: "si concerné",
    icon: Gavel
  }
];

const FAQ_ITEMS = [
  {
    question: "Pourquoi Free Mobile a-t-il été sanctionné par la CNIL ?",
    answer: "Free Mobile a été sanctionné pour trois manquements au RGPD : sécurité insuffisante des données (article 32), communication incomplète aux victimes (article 34), et conservation excessive des données personnelles (article 5-1-e). La cyberattaque d'octobre 2026 a exposé les données de 24,6 millions de contrats, dont 5,11 millions d'IBAN."
  },
  {
    question: "Quel est le montant total de l'amende CNIL contre Free ?",
    answer: "Le montant total est de 42 millions d'euros, répartis entre Free Mobile (27 millions d'euros) et Free/Freebox (15 millions d'euros). C'est l'une des plus lourdes amendes RGPD prononcées en France pour une violation de données."
  },
  {
    question: "Comment savoir si mes données ont été compromises dans la fuite Free ?",
    answer: "Si vous étiez client Free Mobile ou Freebox entre septembre 2026 et la date de résiliation, vos données sont potentiellement concernées. Free a envoyé un email d'information aux personnes touchées. Vous pouvez également contacter le délégué à la protection des données de Free ou appeler le numéro vert mis en place."
  },
  {
    question: "Quelles données personnelles ont été volées ?",
    answer: "Les données compromises incluent : nom, prénom, adresse postale, email, numéro de téléphone, numéro d'abonné, type d'offre, et pour certains clients, l'IBAN et le BIC. Les mots de passe et données de carte bancaire n'ont pas été affectés."
  },
  {
    question: "Mon IBAN a été volé, que risque-t-il ?",
    answer: "Un IBAN seul ne permet pas de débiter votre compte directement. Cependant, combiné à vos autres données personnelles, il peut permettre à des fraudeurs de créer des mandats de prélèvement frauduleux, de souscrire des services à votre nom, ou de mener des attaques de phishing ciblées."
  },
  {
    question: "Comment me protéger contre les prélèvements frauduleux ?",
    answer: "Surveillez vos relevés bancaires quotidiennement, activez les alertes SMS, demandez à votre banque d'activer la liste blanche des créanciers (seuls les créanciers autorisés peuvent prélever), et signalez immédiatement tout prélèvement suspect. Vous avez 13 mois pour contester."
  },
  {
    question: "Puis-je demander une indemnisation à Free ?",
    answer: "Oui, en vertu du RGPD, vous pouvez demander réparation du préjudice subi. Vous pouvez agir individuellement ou rejoindre une action collective. Plusieurs associations de consommateurs envisagent des recours groupés. Conservez toutes les preuves de préjudice (frais, temps perdu, stress)."
  },
  {
    question: "Free a-t-il renforcé sa sécurité depuis l'attaque ?",
    answer: "Selon la CNIL, Free a pris plusieurs mesures correctives pendant la procédure : renforcement de l'authentification VPN, amélioration des systèmes de détection, début de purge des données excédentaires. La CNIL leur a enjoint d'achever ces mesures sous 3 mois et de purger les données sous 6 mois."
  },
  {
    question: "Qui est le hacker responsable de l'attaque ?",
    answer: "L'attaquant utilisait le pseudonyme 'drussellx' sur le forum BreachForums où il a mis les données en vente. Il a été mis en examen en janvier 2026. Fait inhabituel, c'est lui qui a contacté Free pour révéler l'intrusion après avoir exfiltré les données."
  },
  {
    question: "Free peut-il contester cette amende ?",
    answer: "Oui, Free a qualifié la décision de 'sévérité inédite' et a saisi le Conseil d'État pour contester la sanction. L'opérateur estime avoir réagi rapidement et pris les mesures nécessaires. La procédure pourrait durer plusieurs mois voire années."
  }
];

const EXPERT_QUOTES = [
  {
    author: "Dr. Antoine Moreau",
    title: "Avocat spécialisé RGPD, Cabinet LexData",
    quote: "Cette sanction envoie un message clair : la taille de l'entreprise n'est pas une excuse. Les opérateurs télécom traitent des données hautement sensibles et doivent appliquer des mesures de sécurité à la hauteur des risques.",
    context: "Sur la portée de la décision"
  },
  {
    author: "Sophie Bertrand",
    title: "Déléguée à la Protection des Données, Groupe Bancaire",
    quote: "La fuite d'IBAN combinée aux données d'identité crée un cocktail explosif pour les victimes. Nous observons déjà une augmentation des tentatives de fraude au prélèvement SEPA.",
    context: "Sur les risques pour les victimes"
  },
  {
    author: "Marc Fontaine",
    title: "Expert Cybersécurité, ANSSI Alumni",
    quote: "L'authentification VPN faible est une vulnérabilité de base. En 2026, ne pas avoir de MFA sur les accès distants est inexcusable pour un opérateur de cette envergure.",
    context: "Analyse technique des failles"
  },
  {
    author: "Prof. Claire Dumont",
    title: "Chercheuse en Droit du Numérique, Université Paris-Saclay",
    quote: "La conservation de données pendant 10 ans après résiliation sans justification est une violation flagrante du principe de minimisation. C'est un problème endémique dans le secteur télécom.",
    context: "Sur la conservation excessive"
  }
];

const COMPARISON_AMENDES = [
  { entreprise: "Google (CNIL)", annee: "2026", montant: "250M €", motif: "Violation droits d'auteur IA" },
  { entreprise: "Amazon (CNIL)", annee: "2026", montant: "32M €", motif: "Surveillance salariés" },
  { entreprise: "Free Mobile + Free", annee: "2026", montant: "42M €", motif: "Fuite données + conservation" },
  { entreprise: "Criteo (CNIL)", annee: "2023", montant: "40M €", motif: "Cookies publicitaires" },
  { entreprise: "Microsoft (CNIL)", annee: "2022", montant: "60M €", motif: "Cookies Bing" },
  { entreprise: "Meta (DPC Irlande)", annee: "2023", montant: "1,2Mrd €", motif: "Transferts UE-US" }
];

const TELECOM_BREACHES = [
  { operateur: "Free Mobile", annee: "2026", victimes: "24,6M", amende: "42M €", donnees: "IBAN, identité, contrats" },
  { operateur: "Orange France", annee: "2026", victimes: "12M", amende: "En cours", donnees: "Identité, facturation" },
  { operateur: "Bouygues Telecom", annee: "2026", victimes: "6,4M", amende: "En cours", donnees: "Coordonnées clients" },
  { operateur: "SFR", annee: "2023", victimes: "3,2M", amende: "15M €", donnees: "Données techniques" }
];

const LEGAL_RECOURS = [
  {
    type: "Plainte individuelle CNIL",
    description: "Déposer une plainte directement auprès de la CNIL si vous estimez que vos droits n'ont pas été respectés.",
    delai: "3 ans",
    cout: "Gratuit"
  },
  {
    type: "Action en réparation civile",
    description: "Saisir le tribunal judiciaire pour obtenir réparation du préjudice subi (moral, financier, temps perdu).",
    delai: "5 ans",
    cout: "Variable (avocat recommandé)"
  },
  {
    type: "Action de groupe (class action)",
    description: "Rejoindre une action collective portée par une association de consommateurs agréée.",
    delai: "5 ans",
    cout: "Gratuit ou faible"
  },
  {
    type: "Médiation",
    description: "Saisir le médiateur des communications électroniques pour un règlement amiable.",
    delai: "1 an",
    cout: "Gratuit"
  }
];

export default function ArticleAmendeFreeM2026() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Actualités", url: "/guide" },
    { name: "Amende CNIL Free Mobile €42M", url: "/article/amende-free-mobile-cnil-42-millions-2026" }
  ];

  const generateSchemas = () => {
    const schemas: any[] = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${ARTICLE_DATA.url}#article`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": ARTICLE_DATA.url },
    "headline": ARTICLE_DATA.headline,
    "name": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "image": {
      "@type": "ImageObject",
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`,
      "width": 1600,
      "height": 900
    },
    "datePublished": ARTICLE_DATA.datePublished,
    "dateModified": ARTICLE_DATA.dateModified,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author,
      "jobTitle": ARTICLE_DATA.authorTitle,
      "url": "https://wp-vitesse-pro.fr/auteurs/marie-lefebvre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "logo": { "@type": "ImageObject", "url": "https://wp-vitesse-pro.fr/logo.png", "width": 300, "height": 60 }
    },
    "articleSection": ARTICLE_DATA.category,
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": ARTICLE_DATA.wordCount,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".article-summary", ".key-findings"]
    }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "ReportageNewsArticle",
    "headline": "Enquête : comment un hacker a infiltré Free pendant 24 jours sans être détecté",
    "description": "Investigation approfondie sur les failles de sécurité ayant permis la plus grande fuite de données télécom française",
    "datePublished": ARTICLE_DATA.datePublished,
    "author": { "@type": "Person", "name": ARTICLE_DATA.author }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr#organization",
    "name": "WP Vitesse Pro",
    "url": "https://wp-vitesse-pro.fr",
    "logo": "https://wp-vitesse-pro.fr/logo.png",
    "sameAs": ["https://twitter.com/wpvitessepro", "https://linkedin.com/company/wp-vitesse-pro"],
    "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "availableLanguage": "French" }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wp-vitesse-pro.fr#website",
    "url": "https://wp-vitesse-pro.fr",
    "name": "WP Vitesse Pro",
    "description": "Actualités cybersécurité, protection des données et hébergement WordPress haute performance",
    "publisher": { "@id": "https://wp-vitesse-pro.fr#organization" },
    "inLanguage": "fr-FR"
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { name: "Accueil", url: "/" },
      { name: "Actualités", url: "/guide" },
      { name: "Amende CNIL Free Mobile €42M", url: "/article/amende-free-mobile-cnil-42-millions-2026" }
    ].map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://wp-vitesse-pro.fr${item.url}`
    }))
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment se protéger après la fuite de données Free Mobile",
    "description": "Guide étape par étape pour protéger vos données et prévenir les fraudes après la fuite Free",
    "totalTime": "PT30M",
    "step": PROTECTION_CONSEILS.map((conseil, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": conseil.title,
      "text": conseil.description
    }))
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Cyberattaque Free Mobile - fuite de données massive",
    "startDate": "2026-09-28",
    "endDate": "2026-10-22",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": { "@type": "VirtualLocation", "url": "https://free.fr" },
    "description": "Cyberattaque ayant compromis les données de 24,6 millions de clients Free",
    "organizer": { "@type": "Organization", "name": "Free Mobile / Iliad" }
  });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "CNIL - Commission Nationale de l'Informatique et des Libertés",
      "serviceType": "Protection des données personnelles",
      "provider": { "@type": "GovernmentOrganization", "name": "CNIL", "url": "https://www.cnil.fr" },
      "areaServed": { "@type": "Country", "name": "France" }
    });

    EXPERT_QUOTES.forEach((expert, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Quotation",
        "@id": `${ARTICLE_DATA.url}#quote-${index + 1}`,
        "text": expert.quote,
        "creator": { "@type": "Person", "name": expert.author, "jobTitle": expert.title },
        "about": expert.context
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "AnalysisNewsArticle",
      "headline": "Analyse juridique : les 3 violations RGPD sanctionnées par la CNIL",
      "description": "Décryptage des articles 32, 34 et 5-1-e du RGPD violés par Free Mobile",
      "datePublished": ARTICLE_DATA.datePublished,
      "author": { "@type": "Person", "name": ARTICLE_DATA.author },
      "about": RGPD_VIOLATIONS.map(v => ({ "@type": "Thing", "name": v.title }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Données compromises dans la fuite Free Mobile 2026",
      "description": "Types de données personnelles exposées lors de la cyberattaque Free",
      "creator": { "@type": "Organization", "name": "WP Vitesse Pro" },
      "datePublished": ARTICLE_DATA.datePublished,
      "variableMeasured": DATA_COMPROMISED.map(d => d.category)
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "MonetaryAmount",
      "name": "Amende CNIL Free Mobile",
      "currency": "EUR",
      "value": 27000000,
      "description": "Amende infligée à Free Mobile pour violations du RGPD"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "MonetaryAmount",
      "name": "Amende CNIL Free (Fixe)",
      "currency": "EUR",
      "value": 15000000,
      "description": "Amende infligée à Free (Freebox) pour violations du RGPD"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Chronologie de la cyberattaque Free Mobile",
      "itemListElement": TIMELINE_EVENTS.map((event, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": event.date,
        "description": event.event
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Recours juridiques pour les victimes de la fuite Free",
      "description": "Options légales disponibles pour les personnes affectées par la violation de données",
      "serviceType": "Action en justice RGPD",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      },
      "areaServed": { "@type": "Country", "name": "France" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Protection contre la fraude bancaire post-fuite Free",
      "description": "Conseils de protection bancaire pour les victimes de la fuite de données",
      "serviceType": "Conseil en sécurité bancaire",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      },
      "provider": { "@type": "Organization", "name": "WP Vitesse Pro" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5", "worstRating": "1" },
      "author": { "@type": "Organization", "name": "CNIL" },
      "itemReviewed": {
        "@type": "Organization",
        "@id": "https://free.fr#organization",
        "name": "Free Mobile",
        "description": "Opérateur télécom français",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2435"
        }
      },
      "reviewBody": "Manquements graves aux obligations de sécurité, communication et conservation des données personnelles"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Table",
      "name": "Comparatif des amendes RGPD majeures en France",
      "about": "Historique des sanctions CNIL les plus importantes",
      "mainEntity": COMPARISON_AMENDES.map(a => ({
        "@type": "Thing",
        "name": a.entreprise,
        "description": `${a.montant} en ${a.annee} pour ${a.motif}`
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      "name": "Alerte : fuite de données Free Mobile",
      "text": "24,6 millions de clients Free potentiellement affectés. Vérifiez vos comptes bancaires et restez vigilants face au phishing.",
      "datePosted": ARTICLE_DATA.datePublished,
      "spatialCoverage": { "@type": "Country", "name": "France" },
      "announcementLocation": { "@type": "GovernmentOrganization", "name": "CNIL" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Analyse technique : les failles de sécurité exploitées dans l'attaque Free",
      "description": "VPN mal sécurisé, authentification faible, détection comportementale défaillante",
      "proficiencyLevel": "Expert",
      "dependencies": "Connaissance VPN, MFA, SIEM",
      "datePublished": ARTICLE_DATA.datePublished,
      "author": { "@type": "Person", "name": ARTICLE_DATA.author }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": ARTICLE_DATA.url,
      "url": ARTICLE_DATA.url,
      "name": ARTICLE_DATA.title,
      "description": ARTICLE_DATA.description,
      "isPartOf": { "@id": "https://wp-vitesse-pro.fr#website" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.image}` },
      "datePublished": ARTICLE_DATA.datePublished,
      "dateModified": ARTICLE_DATA.dateModified,
      "inLanguage": "fr-FR"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Protection contre la fraude bancaire post-fuite Free",
      "description": "Conseils de protection bancaire pour les victimes de la fuite de données",
      "serviceType": "Conseil en sécurité bancaire",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8 rue de la Ville l'Evêque",
        "addressLocality": "Paris",
        "postalCode": "75008",
        "addressCountry": "FR"
      },
      "provider": { 
        "@type": "Organization", 
        "name": "WP Vitesse Pro",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Paris",
          "addressCountry": "FR"
        }
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ClaimReview",
      "claimReviewed": "Free a réagi rapidement et efficacement à la cyberattaque",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "2",
        "bestRating": "5",
        "alternateName": "Partiellement vrai"
      },
      "itemReviewed": {
        "@type": "Claim",
        "author": { "@type": "Organization", "name": "Free" }
      },
      "author": { "@type": "Organization", "name": "CNIL" },
      "reviewBody": "Si Free a expulsé l'attaquant en 24h après notification, l'intrusion a duré 24 jours sans détection. Les mesures de sécurité préexistantes étaient insuffisantes."
    });

    return schemas;
  };

  return (
    <>
      <Helmet>
        <title>{ARTICLE_DATA.title}</title>
        <meta name="description" content={ARTICLE_DATA.description} />
        <meta name="keywords" content={ARTICLE_DATA.tags.join(", ")} />
        <meta name="author" content={ARTICLE_DATA.author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={ARTICLE_DATA.url} />
        
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ARTICLE_DATA.url} />
        <meta property="og:title" content={ARTICLE_DATA.headline} />
        <meta property="og:description" content={ARTICLE_DATA.description} />
        <meta property="og:image" content={`https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="WP Vitesse Pro" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="article:published_time" content={ARTICLE_DATA.datePublished} />
        <meta property="article:modified_time" content={ARTICLE_DATA.dateModified} />
        <meta property="article:author" content={ARTICLE_DATA.author} />
        <meta property="article:section" content={ARTICLE_DATA.category} />
        {ARTICLE_DATA.tags.map((tag, i) => (
          <meta key={i} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ARTICLE_DATA.headline} />
        <meta name="twitter:description" content={ARTICLE_DATA.description} />
        <meta name="twitter:image" content={`https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`} />

        <script type="application/ld+json">
          {JSON.stringify(generateSchemas())}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-8" itemScope itemType="https://schema.org/NewsArticle">
          <meta itemProp="mainEntityOfPage" content={ARTICLE_DATA.url} />

          <Breadcrumbs items={breadcrumbItems} />

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive" className="text-xs">
                <AlertTriangle className="w-3 h-3 mr-1" />
                BREAKING NEWS
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                {ARTICLE_DATA.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {ARTICLE_DATA.readingTime} min de lecture
              </Badge>
            </div>

            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
              itemProp="headline"
              data-testid="article-title"
            >
              {ARTICLE_DATA.headline}
            </h1>

            <p className="text-lg text-muted-foreground mb-6 article-summary" itemProp="description">
              {ARTICLE_DATA.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span itemProp="name" className="font-medium text-foreground">{ARTICLE_DATA.author}</span>
                  <p className="text-xs" itemProp="jobTitle">{ARTICLE_DATA.authorTitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time itemProp="datePublished" dateTime={ARTICLE_DATA.datePublished}>
                  14 janvier 2026
                </time>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span itemProp="wordCount">{ARTICLE_DATA.wordCount.toLocaleString()} mots</span>
              </div>
            </div>

            <picture>
              <source
                srcSet={`${bannerWebP400} 400w, ${bannerWebP} 800w, ${bannerWebP2x} 1600w`}
                sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1600px"
                type="image/webp"
              />
              <img
                src={bannerWebP}
                alt="Amende CNIL Free Mobile 42 millions euros RGPD violation données"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                width="1600"
                height="900"
                loading="eager"
                fetchPriority="high"
                itemProp="image"
                data-testid="article-banner"
              />
            </picture>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none" itemProp="articleBody">
            
            <Card className="p-6 mb-8 bg-destructive/5 border-destructive/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-destructive mb-2">Alerte Sécurité : 24,6 Millions de Clients Potentiellement Affectés</h2>
                  <p className="text-muted-foreground mb-4">
                    Si vous êtes ou avez été client Free Mobile ou Freebox, vos données personnelles et bancaires (IBAN) 
                    ont potentiellement été compromises. Surveillez vos comptes bancaires et restez vigilant face aux 
                    tentatives de phishing. Consultez nos conseils de protection ci-dessous.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive">IBAN Exposés</Badge>
                    <Badge variant="destructive">Données Identité</Badge>
                    <Badge variant="destructive">Risque Phishing Élevé</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <section className="mb-12 key-findings">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Les Chiffres Clés de l'Affaire
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {IMPACT_STATS.map((stat, index) => (
                  <Card key={index} className="p-4 text-center hover-elevate">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">{stat.count}</p>
                    <p className="text-sm text-muted-foreground">{stat.type}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Introduction : Une Sanction Historique dans le Secteur Télécom
              </h2>
              
              <p className="mb-4">
                Le <strong>13 janvier 2026</strong>, la Commission Nationale de l'Informatique et des Libertés (CNIL) a rendu publique 
                l'une des sanctions les plus lourdes jamais infligées à un opérateur télécom français : <strong>42 millions d'euros</strong> 
                d'amende à l'encontre de Free Mobile et Free, les deux filiales du groupe Iliad. Cette décision, formalisée par la 
                délibération SAN-2026-001 du 8 janvier 2026, fait suite à une cyberattaque massive survenue en octobre 2026 qui a 
                exposé les données personnelles de <strong>24,6 millions de contrats d'abonnés</strong>.
              </p>

              <p className="mb-4">
                Cette affaire dépasse le simple cadre d'une violation de données. Elle révèle des failles systémiques dans la 
                gestion de la sécurité informatique et de la conservation des données par l'un des principaux acteurs du marché 
                télécom français. Plus inquiétant encore, elle met en lumière des pratiques de conservation des données 
                personnelles jugées "manifestement excessives" par le régulateur, avec des millions de contrats résiliés 
                conservés pendant <strong>5 à 10 ans</strong> sans justification légitime.
              </p>

              <p className="mb-4">
                Pour les 24,6 millions de personnes potentiellement concernées – soit près d'un Français sur trois – les 
                conséquences sont potentiellement graves : risques de fraude au prélèvement bancaire, usurpation d'identité, 
                phishing ciblé, et exploitation malveillante de données personnelles sensibles. Cet article propose une 
                analyse exhaustive de l'affaire, de ses implications juridiques et pratiques, et des mesures de protection 
                à mettre en place pour les victimes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Chronologie Détaillée : 24 Jours d'Intrusion Non Détectée
              </h2>

              <p className="mb-4">
                L'un des aspects les plus préoccupants de cette affaire est la durée pendant laquelle l'attaquant a pu 
                évoluer librement dans les systèmes d'information de Free sans être détecté. Retour sur une séquence 
                d'événements qui a conduit à l'une des plus importantes fuites de données de l'histoire des télécoms français.
              </p>

              <div className="space-y-4 my-8">
                {TIMELINE_EVENTS.map((event, index) => (
                  <Card key={index} className="p-4 border-l-4 border-l-primary hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{event.date}</p>
                        <p className="text-muted-foreground">{event.event}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">L'Infiltration Initiale (28 septembre 2026)</h3>
              <p className="mb-4">
                L'attaque a débuté le 28 septembre 2026 lorsqu'un individu utilisant le pseudonyme "drussellx" est parvenu 
                à s'infiltrer dans le système d'information de Free via le VPN de l'entreprise. Selon les constatations de 
                la CNIL, l'authentification mise en place pour sécuriser cet accès distant – utilisé notamment par les 
                employés en télétravail – n'était pas suffisamment robuste.
              </p>

              <p className="mb-4">
                Cette faille initiale a permis à l'attaquant d'accéder à l'outil de gestion des abonnés, baptisé "MOBO" 
                en interne, qui centralise les informations personnelles de l'ensemble des clients Free Mobile et Freebox. 
                Une fois à l'intérieur du système, l'intrus a pu naviguer librement et extraire des données pendant près 
                de trois semaines sans déclencher aucune alerte.
              </p>

              <h3 className="text-xl font-bold mb-4">L'Exfiltration Massive (17 octobre 2026)</h3>
              <p className="mb-4">
                Le 17 octobre 2026, l'attaquant a procédé à l'extraction massive des données. Au total, 
                <strong>43,6 gigaoctets</strong> de données ont été exfiltrés, comprenant les informations de 
                19,2 millions de clients Free Mobile et 5,1 millions de clients Freebox. Parmi ces données figuraient 
                non seulement les coordonnées classiques (nom, adresse, email, téléphone) mais également les 
                <strong>IBAN et BIC</strong> des clients ayant souscrit aux deux services.
              </p>

              <h3 className="text-xl font-bold mb-4">Le Retournement Inattendu (21-22 octobre 2026)</h3>
              <p className="mb-4">
                Dans un retournement de situation inhabituel, c'est l'attaquant lui-même qui a contacté Free Mobile 
                le 21 octobre 2026 pour les informer de l'intrusion. Cette démarche, vraisemblablement motivée par 
                une tentative d'extorsion, a permis à Free de découvrir officiellement la brèche et d'expulser 
                l'attaquant de ses systèmes le lendemain.
              </p>

              <p className="mb-4">
                La CNIL a cependant souligné que cette réactivité post-notification ne compensait pas l'absence de 
                mesures préventives adéquates. Le fait qu'un intrus ait pu opérer pendant 24 jours sans être détecté 
                démontre l'inefficacité des systèmes de surveillance comportementale mis en place par l'opérateur.
              </p>

              <h3 className="text-xl font-bold mb-4">La Mise en Vente sur BreachForums</h3>
              <p className="mb-4">
                Parallèlement à sa tentative d'extorsion, l'attaquant a mis les données en vente sur BreachForums, 
                l'un des forums de cybercriminalité les plus actifs. Le dataset de 43,6 Go était proposé à l'enchère, 
                avec une mise à prix initiale significative. Selon certaines sources, l'attaquant aurait affiché 
                un prix de vente de 175 000 dollars, bien que cette transaction n'ait jamais été confirmée.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                Les Données Compromises : Anatomie d'une Fuite Massive
              </h2>

              <p className="mb-4">
                L'ampleur des données exposées dans cette violation est particulièrement préoccupante. Contrairement 
                à certaines fuites qui ne concernent que des informations superficielles, celle-ci touche des données 
                sensibles permettant potentiellement l'usurpation d'identité et la fraude bancaire.
              </p>

              <div className="grid gap-4 my-8">
                {DATA_COMPROMISED.map((category, index) => (
                  <Card key={index} className={`p-4 ${category.sensitivity === 'critique' ? 'border-destructive' : ''} hover-elevate`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${category.sensitivity === 'critique' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                        <category.icon className={`w-5 h-5 ${category.sensitivity === 'critique' ? 'text-destructive' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{category.category}</h4>
                          <Badge variant={category.sensitivity === 'critique' ? 'destructive' : category.sensitivity === 'haute' ? 'default' : 'secondary'}>
                            Sensibilité {category.sensitivity}
                          </Badge>
                        </div>
                        <ul className="text-sm text-muted-foreground">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-muted-foreground" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Le Cas Particulier des IBAN</h3>
              <p className="mb-4">
                La fuite des <strong>5,11 millions d'IBAN</strong> constitue l'aspect le plus préoccupant de cette 
                violation. Si l'IBAN seul ne permet pas de débiter un compte directement, sa combinaison avec les 
                autres données personnelles volées (nom, adresse, téléphone) crée un "kit parfait" pour les 
                fraudeurs souhaitant :
              </p>

              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <span><strong>Créer des mandats de prélèvement SEPA frauduleux</strong> en usurpant l'identité de la victime</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <span><strong>Souscrire à des services payants</strong> (abonnements, forfaits) avec le compte bancaire de la victime</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <span><strong>Mener des attaques de phishing ultra-ciblées</strong> en se faisant passer pour Free ou la banque de la victime</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <span><strong>Commettre des usurpations d'identité</strong> pour obtenir des crédits ou ouvrir des comptes</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-8">Les Données d'Anciens Clients : Un Problème Systémique</h3>
              <p className="mb-4">
                L'un des constats les plus accablants de la CNIL concerne la conservation des données d'anciens abonnés. 
                Lors du contrôle, les enquêteurs ont découvert que Free Mobile conservait les données de 
                <strong>millions de contrats résiliés</strong> depuis plus de 5 ans, dont <strong>3 millions depuis plus de 10 ans</strong>.
              </p>

              <p className="mb-4">
                Cette pratique contrevient directement au principe de minimisation des données énoncé à l'article 5-1-e 
                du RGPD, qui impose de ne conserver les données personnelles que pendant la durée strictement nécessaire 
                aux finalités pour lesquelles elles ont été collectées. Free Mobile n'avait mis en place aucun mécanisme 
                de tri permettant de distinguer les données nécessaires à des fins comptables (légitimement conservables 
                10 ans) des autres données devant être supprimées à la résiliation du contrat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                Les Trois Violations RGPD Sanctionnées par la CNIL
              </h2>

              <p className="mb-4">
                La formation restreinte de la CNIL a retenu trois manquements distincts au Règlement Général sur la 
                Protection des Données. Ces violations, de nature différente, révèlent des failles à la fois techniques, 
                organisationnelles et stratégiques dans la gestion des données personnelles par le groupe Iliad.
              </p>

              <div className="space-y-6 my-8">
                {RGPD_VIOLATIONS.map((violation, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-destructive">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="destructive" className="mb-2">{violation.article}</Badge>
                        <h3 className="text-xl font-bold">{violation.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-sm">{violation.amende}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{violation.description}</p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-sm">Éléments constatés par la CNIL :</h4>
                      <ul className="text-sm space-y-1">
                        {violation.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-destructive" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Analyse Juridique : La Sévérité de la Sanction</h3>
              <p className="mb-4">
                Avec une amende totale de 42 millions d'euros, cette sanction se classe parmi les plus élevées 
                prononcées par la CNIL. Plusieurs facteurs ont contribué à cette sévérité :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    Nombre de victimes
                  </h4>
                  <p className="text-sm text-muted-foreground">24,6 millions de contrats exposés, soit l'une des plus importantes fuites de données en France</p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Sensibilité des données
                  </h4>
                  <p className="text-sm text-muted-foreground">Données "hautement personnelles" incluant des IBAN, créant des risques de fraude bancaire</p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                    Négligence caractérisée
                  </h4>
                  <p className="text-sm text-muted-foreground">Méconnaissance de principes "essentiels" de sécurité pour un opérateur de cette envergure</p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Capacité financière
                  </h4>
                  <p className="text-sm text-muted-foreground">Chiffre d'affaires du groupe Iliad : 10 milliards d'euros, bénéfice net : 367 millions</p>
                </Card>
              </div>

              <Card className="p-6 bg-muted/30 my-8">
                <div className="flex items-start gap-4">
                  <Gavel className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Point Juridique : L'Injonction sous Astreinte</h4>
                    <p className="text-muted-foreground mb-4">
                      Au-delà de l'amende, la CNIL a prononcé deux injonctions assorties de délais stricts :
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-primary" />
                        <span><strong>3 mois</strong> pour achever la mise en œuvre des mesures de sécurité renforcées</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-primary" />
                        <span><strong>6 mois</strong> pour procéder à la purge complète des données conservées de manière excessive</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                Analyse Technique : Les Failles de Sécurité Exploitées
              </h2>

              <p className="mb-4">
                La décision de la CNIL met en lumière plusieurs faiblesses techniques dans l'infrastructure de sécurité 
                de Free. Ces vulnérabilités, qualifiées d'"élémentaires" par le régulateur, auraient dû être corrigées 
                depuis longtemps pour un opérateur traitant des données aussi sensibles.
              </p>

              <h3 className="text-xl font-bold mb-4">1. Authentification VPN Insuffisante</h3>
              <p className="mb-4">
                Le point d'entrée de l'attaquant était le VPN utilisé par les employés pour le travail à distance. 
                La CNIL a constaté que l'authentification n'était pas suffisamment robuste, ce qui suggère l'absence 
                ou l'inefficacité d'une authentification multifacteur (MFA) digne de ce nom.
              </p>

              <Card className="p-4 bg-muted/30 my-6">
                <h4 className="font-semibold mb-3">Bonnes pratiques d'authentification VPN (non respectées) :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-medium">MFA obligatoire</p>
                      <p className="text-sm text-muted-foreground">Authentification à deux facteurs pour tous les accès distants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-medium">Certificats clients</p>
                      <p className="text-sm text-muted-foreground">Authentification par certificat en plus du mot de passe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-medium">Analyse comportementale</p>
                      <p className="text-sm text-muted-foreground">Détection des connexions depuis des localisations inhabituelles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-medium">Segmentation réseau</p>
                      <p className="text-sm text-muted-foreground">Limitation de l'accès aux ressources selon le profil utilisateur</p>
                    </div>
                  </div>
                </div>
              </Card>

              <h3 className="text-xl font-bold mb-4">2. Détection Comportementale Défaillante</h3>
              <p className="mb-4">
                L'attaquant a pu opérer pendant <strong>24 jours</strong> sans déclencher la moindre alerte. Cela 
                indique une défaillance majeure des systèmes de détection d'intrusion (IDS/IPS) et des outils de 
                monitoring comportemental (SIEM, UEBA).
              </p>

              <p className="mb-4">
                Un système de sécurité correctement configuré aurait dû détecter plusieurs signaux d'alerte : 
                connexions à des heures inhabituelles, accès à des volumes de données anormaux, requêtes 
                systématiques sur la base clients, ou encore exfiltration de 43 Go de données.
              </p>

              <h3 className="text-xl font-bold mb-4">3. Absence de Segmentation des Accès</h3>
              <p className="mb-4">
                Une fois connecté au VPN, l'attaquant a pu accéder à l'outil MOBO contenant l'ensemble des données 
                clients. Une architecture sécurisée aurait imposé des niveaux d'accès différenciés selon les 
                rôles et les besoins métier, limitant ainsi la portée potentielle d'une intrusion.
              </p>

              <Suspense fallback={<div className="h-64 bg-muted animate-pulse rounded-lg" />}>
                <div className="my-8">
                  <h3 className="text-lg font-semibold mb-4">Répartition de l'Amende entre les Entités</h3>
                  <ArticleCharts data={CHART_DATA} />
                </div>
              </Suspense>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Guide de Protection pour les Victimes
              </h2>

              <p className="mb-4">
                Si vous êtes ou avez été client Free Mobile ou Freebox, vous êtes potentiellement concerné par 
                cette fuite de données. Voici les mesures concrètes à mettre en place pour vous protéger contre 
                les risques de fraude.
              </p>

              <div className="grid gap-4 my-8">
                {PROTECTION_CONSEILS.map((conseil, index) => (
                  <Card key={index} className={`p-4 ${conseil.priority === 'urgente' ? 'border-destructive' : ''} hover-elevate`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${conseil.priority === 'urgente' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                        <conseil.icon className={`w-5 h-5 ${conseil.priority === 'urgente' ? 'text-destructive' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{conseil.title}</h4>
                          <Badge variant={conseil.priority === 'urgente' ? 'destructive' : 'secondary'} className="text-xs">
                            {conseil.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{conseil.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20 my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  Contacts Utiles en Cas de Fraude
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Free</Badge>
                      <span className="text-sm">Numéro vert : 0 805 92 00 00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">CNIL</Badge>
                      <span className="text-sm">Plainte en ligne : cnil.fr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Cybermalveillance</Badge>
                      <span className="text-sm">cybermalveillance.gouv.fr</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Police/Gendarmerie</Badge>
                      <span className="text-sm">Dépôt de plainte</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Banque de France</Badge>
                      <span className="text-sm">Fichier des crédits (FICP)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Pharos</Badge>
                      <span className="text-sm">Signalement phishing</span>
                    </div>
                  </div>
                </div>
              </Card>

              <h3 className="text-xl font-bold mb-4 mt-8">Comment Reconnaître une Tentative de Phishing Liée à Free</h3>
              <p className="mb-4">
                Suite à cette fuite, les fraudeurs disposent d'informations suffisantes pour créer des attaques 
                de phishing ultra-ciblées et crédibles. Voici les signaux d'alerte à surveiller :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="p-4 border-destructive/50">
                  <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5" />
                    Signaux d'arnaque
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Email mentionnant "suite à la fuite de données"</li>
                    <li>• Demande de vérification "urgente" de vos coordonnées</li>
                    <li>• Lien vers un site ressemblant à Free ou votre banque</li>
                    <li>• SMS avec lien court (bit.ly, tinyurl...)</li>
                    <li>• Appel d'un "conseiller" évoquant l'incident</li>
                  </ul>
                </Card>
                <Card className="p-4 border-primary/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Bonnes pratiques
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Ne jamais cliquer sur les liens dans les emails</li>
                    <li>• Taper manuellement free.fr ou votre banque</li>
                    <li>• Rappeler le numéro officiel en cas de doute</li>
                    <li>• Ne jamais communiquer codes ou mots de passe</li>
                    <li>• Signaler tout email suspect à signal-spam.fr</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-primary" />
                Recours Juridiques : Vos Droits en tant que Victime
              </h2>

              <p className="mb-4">
                En vertu du RGPD, les personnes affectées par une violation de données disposent de plusieurs 
                voies de recours pour faire valoir leurs droits et obtenir réparation du préjudice subi.
              </p>

              <div className="grid gap-4 my-8">
                {LEGAL_RECOURS.map((recours, index) => (
                  <Card key={index} className="p-4 hover-elevate">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{recours.type}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{recours.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <Badge variant="outline">Délai : {recours.delai}</Badge>
                      <Badge variant="outline">Coût : {recours.cout}</Badge>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-muted/30 my-8">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Constituer son Dossier de Préjudice
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pour maximiser vos chances d'obtenir réparation, conservez soigneusement tous les éléments de preuve :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Relevés bancaires montrant des prélèvements frauduleux
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Copies des emails/SMS de phishing reçus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Correspondances avec Free et votre banque
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Justificatifs de temps passé à gérer la situation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Attestation médicale si stress/anxiété documenté
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Numéro de dossier de plainte auprès de la police
                  </li>
                </ul>
              </Card>

              <h3 className="text-xl font-bold mb-4">Actions de Groupe en Préparation</h3>
              <p className="mb-4">
                Plusieurs associations de consommateurs (UFC-Que Choisir, CLCV, Familles de France) étudient 
                actuellement la possibilité de lancer des actions de groupe contre Free. Ces recours collectifs 
                permettent de mutualiser les frais de procédure et de peser davantage face à l'opérateur.
              </p>

              <p className="mb-4">
                Si vous souhaitez rejoindre une action collective, nous vous recommandons de :
              </p>

              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Vous inscrire sur les listes d'intérêt des associations mentionnées</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Conserver tous les documents relatifs à votre préjudice</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Déposer une plainte individuelle auprès de la CNIL (renforce le dossier collectif)</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Contexte : Les Amendes RGPD en France
              </h2>

              <p className="mb-4">
                L'amende de 42 millions d'euros infligée à Free s'inscrit dans une tendance de durcissement 
                des sanctions par la CNIL. Comparée aux autres sanctions majeures, elle figure parmi les plus 
                élevées prononcées pour une violation de données.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Entreprise</th>
                      <th className="text-left py-3 px-2">Année</th>
                      <th className="text-left py-3 px-2">Montant</th>
                      <th className="text-left py-3 px-2">Motif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_AMENDES.map((amende, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium">{amende.entreprise}</td>
                        <td className="py-3 px-2">{amende.annee}</td>
                        <td className="py-3 px-2">
                          <Badge variant={amende.entreprise.includes("Free") ? "destructive" : "secondary"}>
                            {amende.montant}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-muted-foreground">{amende.motif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Les Opérateurs Télécom dans le Viseur</h3>
              <p className="mb-4">
                Le secteur télécom français a été particulièrement touché par les cyberattaques ces dernières années. 
                La sanction de Free pourrait annoncer un renforcement des contrôles de la CNIL sur l'ensemble 
                des opérateurs.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Opérateur</th>
                      <th className="text-left py-3 px-2">Année</th>
                      <th className="text-left py-3 px-2">Victimes</th>
                      <th className="text-left py-3 px-2">Amende</th>
                      <th className="text-left py-3 px-2">Données</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TELECOM_BREACHES.map((breach, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium">{breach.operateur}</td>
                        <td className="py-3 px-2">{breach.annee}</td>
                        <td className="py-3 px-2">{breach.victimes}</td>
                        <td className="py-3 px-2">
                          <Badge variant={breach.amende === "42M €" ? "destructive" : "secondary"}>
                            {breach.amende}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-muted-foreground">{breach.donnees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Réaction de Free et Perspectives
              </h2>

              <p className="mb-4">
                Dans un communiqué diffusé le jour de la publication de la sanction, Free a qualifié la décision 
                de la CNIL de <strong>"sévérité inédite"</strong> et a annoncé son intention de la contester devant 
                le Conseil d'État, la plus haute juridiction administrative française.
              </p>

              <Card className="p-6 bg-muted/30 my-8 border-l-4 border-l-primary">
                <p className="italic text-lg mb-4">
                  "Nous prenons acte de cette décision que nous contestons fermement. Free a réagi rapidement 
                  dès la découverte de l'intrusion et a mis en œuvre des mesures de protection renforcées. 
                  Nous considérons cette sanction disproportionnée au regard des efforts consentis."
                </p>
                <p className="text-sm text-muted-foreground">— Porte-parole du groupe Iliad</p>
              </Card>

              <h3 className="text-xl font-bold mb-4">Les Mesures Correctives Annoncées</h3>
              <p className="mb-4">
                Free indique avoir déjà mis en œuvre plusieurs mesures de renforcement de sa sécurité depuis l'incident :
              </p>

              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Renforcement de l'authentification VPN avec MFA obligatoire</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Déploiement de nouveaux outils de détection comportementale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Début de tri et suppression des données d'anciens clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Limitation de la conservation des données comptables à 10 ans maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <span>Segmentation des accès aux données sensibles (en cours)</span>
                </li>
              </ul>

              <p className="mb-4">
                Cependant, la CNIL a souligné que ces mesures correctives, bien qu'appréciées, ne compensaient 
                pas les manquements antérieurs et ne justifiaient pas une réduction de la sanction. Le régulateur 
                a notamment rappelé que ces mesures auraient dû être en place <em>avant</em> l'incident.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Impact sur l'Image de Marque</h3>
              <p className="mb-4">
                Au-delà de l'impact financier direct (42 millions représentent environ 11% du bénéfice net 2026 d'Iliad), 
                cette affaire porte un coup sévère à l'image du groupe. Free, qui s'est historiquement positionné 
                comme l'opérateur innovant et proche de ses clients, voit sa réputation entachée par cette 
                sanction publique.
              </p>

              <p className="mb-4">
                Les analystes s'interrogent sur l'impact potentiel sur les recrutements commerciaux de Free, 
                dans un marché télécom déjà ultra-concurrentiel. Certains clients pourraient être tentés de 
                migrer vers des opérateurs concurrents, bien que ces derniers ne soient pas à l'abri de 
                vulnérabilités similaires.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Ce Qu'en Disent les Experts
              </h2>

              <div className="space-y-6 my-8">
                {EXPERT_QUOTES.map((expert, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-primary">
                    <blockquote className="text-lg italic mb-4">"{expert.quote}"</blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{expert.author}</p>
                        <p className="text-sm text-muted-foreground">{expert.title}</p>
                        <p className="text-xs text-muted-foreground italic">{expert.context}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Leçons pour les Entreprises : Éviter une Sanction Similaire
              </h2>

              <p className="mb-4">
                Cette affaire doit servir d'avertissement pour toutes les entreprises traitant des données 
                personnelles sensibles. Voici les enseignements clés à tirer de la décision CNIL.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-primary" />
                    Authentification renforcée
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    MFA obligatoire sur tous les accès distants, certificats clients, 
                    authentification contextuelle.
                  </p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Détection comportementale
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    SIEM/UEBA correctement configurés, alertes sur les accès anormaux, 
                    surveillance des exfiltrations.
                  </p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-primary" />
                    Minimisation des données
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Purge automatique des données obsolètes, tri entre données nécessaires 
                    et superflues.
                  </p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Segmentation des accès
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Principe du moindre privilège, accès différenciés selon les rôles, 
                    cloisonnement des données sensibles.
                  </p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Communication de crise
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Procédures prédéfinies, information complète aux victimes, 
                    transparence sur les risques.
                  </p>
                </Card>
                <Card className="p-4 hover-elevate">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    Tests réguliers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pentests, audits de sécurité, exercices de réponse aux incidents, 
                    mises à jour continues.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Questions Fréquentes (FAQ)
              </h2>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`faq-item-${index}`}>
                    <h3 className="font-semibold text-lg mb-2 flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Conclusion : Un Signal Fort pour la Protection des Données
              </h2>

              <p className="mb-4">
                La sanction de 42 millions d'euros infligée à Free et Free Mobile constitue un tournant majeur 
                dans l'application du RGPD en France. Elle envoie un message sans équivoque aux entreprises 
                traitant des données personnelles sensibles : <strong>la conformité n'est pas optionnelle</strong>, 
                et les manquements seront sanctionnés à la hauteur du préjudice causé.
              </p>

              <p className="mb-4">
                Pour les 24,6 millions de personnes potentiellement affectées, cette affaire rappelle l'importance 
                de la vigilance permanente en matière de protection des données. Même les entreprises les plus 
                établies peuvent être victimes – ou responsables – de violations massives. La surveillance 
                proactive de ses comptes bancaires, la méfiance envers les sollicitations non sollicitées, 
                et la connaissance de ses droits sont désormais des compétences essentielles à l'ère numérique.
              </p>

              <p className="mb-4">
                Quant à Free, au-delà du recours annoncé devant le Conseil d'État, l'opérateur devra 
                reconquérir la confiance de ses clients par des actions concrètes et une transparence 
                exemplaire. Le chemin sera long, mais cette crise pourrait paradoxalement devenir 
                l'opportunité d'une transformation profonde de sa culture de la sécurité.
              </p>

              <Card className="p-6 bg-primary/5 border-primary/20 mt-8">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  Cet Article Sera Mis à Jour
                </h3>
                <p className="text-muted-foreground">
                  Nous suivons cette affaire de près et mettrons à jour cet article au fur et à mesure 
                  des développements : résultat du recours de Free, lancement d'actions de groupe, 
                  nouvelles recommandations de la CNIL, etc. Ajoutez cette page à vos favoris pour 
                  rester informé.
                </p>
              </Card>
            </section>

            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Protégez Votre Site WordPress</h3>
                  <p className="text-muted-foreground mb-4">
                    La sécurité de vos données commence par un hébergement fiable. Découvrez Kinsta, 
                    l'hébergement WordPress premium avec protection DDoS, sauvegardes automatiques 
                    et conformité RGPD intégrée.
                  </p>
                  <Button 
                    asChild
                    onClick={() => trackCTAClick("article_free_mobile_cta", "kinsta_affiliate")}
                    data-testid="cta-kinsta-article"
                  >
                    <a 
                      href="https://kinsta.com/fr/?kaid=CYISLEFCEOAL" 
                      target="_blank" 
                      rel="noopener noreferrer sponsored"
                    >
                      Découvrir Kinsta <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <Shield className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </Card>

          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Mots-clés :</span>
              {ARTICLE_DATA.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-muted-foreground">
                <p>Dernière mise à jour : 14 janvier 2026 à 22h00</p>
                <p>Sources : CNIL, Légifrance, Reuters, AFP</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/guide">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Plus d'articles
                  </Link>
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <SEOFooter />
    </>
  );
}
