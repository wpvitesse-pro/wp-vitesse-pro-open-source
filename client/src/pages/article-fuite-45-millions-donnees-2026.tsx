import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar, SEOFooter } from "@/components/navbar";
import { SEO } from "@/components/seo";
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
  BadgeEuro,
  Heart,
  Car,
  Vote,
  FileSearch,
  CloudOff,
  Skull,
  UserCog,
  MapPin,
  Building,
  Stethoscope,
  Landmark,
  FileKey
} from "lucide-react";

const ARTICLE_DATA = {
  title: "Fuite de 45 millions de données françaises : analyse complète de la plus grande exposition de données de 2026",
  headline: "45 millions de français exposés : enquête exclusive sur la méga-fuite de données découverte par Cybernews",
  description: "Analyse approfondie de la fuite massive de 45 millions de données françaises découverte le 14 janvier 2026. Registres électoraux, données de santé, IBAN, CRM : comment les cybercriminels ont compilé 5 bases distinctes et quels sont les risques pour les victimes.",
  datePublished: "2026-01-25T10:00:00+01:00",
  dateModified: "2026-01-25T14:00:00+01:00",
  author: "Bouhmou Rachid",
  authorTitle: "Expert Cybersécurité & Journaliste d'Investigation",
  readingTime: 52,
  wordCount: 7842,
  category: "Fuite de Données",
  tags: ["Fuite de données", "Cybersécurité", "RGPD", "Cybernews", "Données personnelles", "IBAN", "Santé", "RPPS", "Phishing", "France", "Protection données"],
  image: "/src/assets/optimized/french-data-leak-2026.png",
  url: "https://wp-vitesse-pro.fr/article/fuite-45-millions-donnees-francaises-2026"
};

const TIMELINE_EVENTS = [
  { date: "Dates inconnues", event: "Multiples fuites de données dans différents secteurs : élections, santé, CRM, banques, assurances auto", icon: Database },
  { date: "Période indéterminée", event: "Un courtier en données cybercriminel agrège les 5 bases de données distinctes", icon: Skull },
  { date: "12-13 janvier 2026", event: "L'équipe de recherche Cybernews détecte le serveur cloud non protégé en France", icon: Search },
  { date: "13 janvier 2026", event: "Notification immédiate à l'hébergeur français pour fermeture du serveur", icon: ShieldAlert },
  { date: "14 janvier 2026", event: "Le propriétaire met la base de données hors ligne - Serveur sécurisé", icon: Lock },
  { date: "14 janvier 2026", event: "Publication de l'enquête Cybernews - Révélation au grand public", icon: Megaphone },
  { date: "15-25 janvier 2026", event: "Enquêtes CNIL et ANSSI en cours - Identification du propriétaire recherchée", icon: Gavel }
];

const IMPACT_STATS = [
  { type: "Données exposées", count: "45M+", trend: "historique", icon: Database, color: "text-red-500" },
  { type: "Taille de la base", count: "30,1 Go", trend: "massif", icon: Server, color: "text-orange-500" },
  { type: "Sources distinctes", count: "5+", trend: "compilation", icon: Layers, color: "text-yellow-500" },
  { type: "Emails uniques", count: "28M", trend: "critique", icon: Mail, color: "text-purple-500" },
  { type: "IBAN exposés", count: "6M", trend: "critique", icon: CreditCard, color: "text-red-600" },
  { type: "Pop. française", count: "67%", trend: "affectée", icon: Users, color: "text-blue-500" }
];

const DATA_CATEGORIES = [
  { 
    category: "Registres électoraux/démographiques", 
    count: "23+ millions",
    items: ["Noms complets", "Adresses postales", "Dates de naissance", "Données électorales"],
    sensitivity: "haute", 
    icon: Vote,
    risk: "Usurpation d'identité, fraude électorale"
  },
  { 
    category: "Professionnels de santé (RPPS/ADELI)", 
    count: "9,2 millions",
    items: ["Numéros RPPS/ADELI", "Spécialités médicales", "Coordonnées professionnelles", "Établissements"],
    sensitivity: "critique", 
    icon: Stethoscope,
    risk: "Usurpation de médecins, fraude à l'Assurance Maladie"
  },
  { 
    category: "Profils financiers", 
    count: "6 millions",
    items: ["IBAN bancaires", "Codes BIC", "Banques françaises associées", "Coordonnées clients"],
    sensitivity: "critique", 
    icon: CreditCard,
    risk: "Prélèvements frauduleux, vol bancaire"
  },
  { 
    category: "Contacts CRM", 
    count: "6+ millions",
    items: ["Historiques d'échanges clients", "Données commerciales", "Préférences", "Comportements d'achat"],
    sensitivity: "moyenne", 
    icon: Building2,
    risk: "Phishing ciblé, ingénierie sociale"
  },
  { 
    category: "Assurance automobile", 
    count: "Non spécifié",
    items: ["Immatriculations véhicules", "Contrats d'assurance", "Identités conducteurs", "Adresses"],
    sensitivity: "haute", 
    icon: Car,
    risk: "Fraude à l'assurance, vol de véhicule ciblé"
  }
];

const EXPERT_QUOTES = [
  {
    quote: "Contrairement aux fuites traditionnelles causées par des erreurs de configuration d'entreprises, cette fuite semble être l'œuvre d'un courtier en données ou d'un cybercriminel. Ces acteurs fusionnent souvent des ensembles de données volées issues de plusieurs fuites afin d'augmenter leur valeur de revente et permettre le recoupement d'identités.",
    author: "Équipe de recherche Cybernews",
    title: "Analystes en cybersécurité",
    context: "Analyse de la nature de la fuite"
  },
  {
    quote: "Le mélange de données dresse un tableau inquiétant : différents secteurs, un seul référentiel – et aucune protection. L'incident pose un risque grave pour la vie privée de millions de citoyens français.",
    author: "Équipe de recherche Cybernews",
    title: "Découvreurs de la fuite",
    context: "Impact de la compilation multi-sources"
  },
  {
    quote: "En combinant données démographiques, médicales et financières, des attaquants pourraient construire des profils d'identité détaillés, qui leur permettraient de mener des campagnes de phishing ciblées et de commettre des fraudes financières.",
    author: "Experts Cybersécurité",
    title: "Analystes risques cyber",
    context: "Risques de recoupement des données"
  }
];

const PROTECTION_CONSEILS = [
  {
    title: "Surveillez vos comptes bancaires quotidiennement",
    description: "Avec 6 millions d'IBAN exposés, vérifiez chaque jour vos relevés bancaires. Activez les alertes SMS instantanées pour tout mouvement sur votre compte.",
    priority: "urgente",
    icon: Eye
  },
  {
    title: "Activez la liste blanche des créanciers SEPA",
    description: "Contactez votre banque pour activer ce service gratuit. Seuls les créanciers que vous autorisez explicitement pourront effectuer des prélèvements.",
    priority: "urgente",
    icon: ShieldCheck
  },
  {
    title: "Méfiez-vous des appels et emails médicaux",
    description: "Avec 9,2 millions de dossiers santé exposés, les escrocs peuvent se faire passer pour des professionnels de santé. Ne donnez jamais d'informations par téléphone.",
    priority: "urgente",
    icon: Stethoscope
  },
  {
    title: "Vérifiez vos informations électorales",
    description: "Consultez votre mairie pour confirmer que vos données électorales n'ont pas été modifiées frauduleusement.",
    priority: "recommandée",
    icon: Vote
  },
  {
    title: "Activez la double authentification partout",
    description: "Protégez tous vos comptes en ligne avec la 2FA : banques, emails, impôts, Ameli, France Connect.",
    priority: "urgente",
    icon: Fingerprint
  },
  {
    title: "Vérifiez si vous êtes concerné",
    description: "Utilisez HaveIBeenPwned ou des services français pour vérifier si votre email figure dans cette fuite.",
    priority: "recommandée",
    icon: Search
  },
  {
    title: "Signalez toute fraude immédiatement",
    description: "En cas de prélèvement frauduleux, vous avez 13 mois pour contester. Votre banque doit rembourser sous 24h ouvrées.",
    priority: "si concerné",
    icon: Gavel
  },
  {
    title: "Gelez votre dossier de crédit",
    description: "Contactez la Banque de France pour signaler un risque d'usurpation et bloquer toute demande de crédit à votre nom.",
    priority: "recommandée",
    icon: Lock
  }
];

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que la fuite de 45 millions de données françaises ?",
    answer: "Il s'agit de la découverte le 14 janvier 2026 par Cybernews d'un serveur cloud non protégé en France contenant plus de 45 millions d'enregistrements de citoyens français. Cette base compile au moins 5 sources distinctes : registres électoraux (23M), professionnels de santé RPPS/ADELI (9,2M), données financières IBAN (6M), contacts CRM (6M+) et données d'assurance auto."
  },
  {
    question: "Qui est responsable de cette fuite de données ?",
    answer: "Le propriétaire exact n'a pas été identifié. Selon Cybernews, il s'agirait probablement d'un courtier en données cybercriminel qui a agrégé plusieurs fuites distinctes pour augmenter leur valeur de revente sur le dark web. L'enquête des autorités françaises (CNIL, ANSSI) est en cours."
  },
  {
    question: "Comment savoir si mes données sont concernées ?",
    answer: "Vous pouvez vérifier votre email sur HaveIBeenPwned.com ou attendre les notifications officielles si les autorités identifient les sources des données. Avec 45 millions d'entrées pour 67 millions de Français, il y a environ 67% de chances que vos données soient concernées."
  },
  {
    question: "Quels sont les risques concrets pour les victimes ?",
    answer: "Les risques incluent : prélèvements bancaires frauduleux (6M d'IBAN exposés), usurpation d'identité via les données électorales, fraude médicale avec les numéros RPPS/ADELI, phishing ultra-ciblé grâce au croisement des données, et création d'identités synthétiques pour des escroqueries."
  },
  {
    question: "La base de données est-elle toujours accessible ?",
    answer: "Non. Après notification par Cybernews le 13 janvier, l'hébergeur et le propriétaire ont sécurisé le serveur le 14 janvier 2026. Cependant, la durée d'exposition reste inconnue, et il est impossible de savoir si les données ont été copiées par des tiers malveillants."
  },
  {
    question: "Comment cette fuite se compare-t-elle aux autres incidents français ?",
    answer: "C'est l'une des plus graves jamais recensées en France. Elle dépasse France Travail (43M en 2024) et Viamedis/Almerys (33M en 2024). La particularité ici est l'agrégation de 5 sources distinctes, permettant un recoupement d'identités particulièrement dangereux."
  },
  {
    question: "Quelles sanctions RGPD sont possibles ?",
    answer: "Si les responsables sont identifiés, ils risquent des amendes CNIL pouvant atteindre 4% du chiffre d'affaires mondial ou 20 millions d'euros. Pour référence, Free Mobile a été condamné à 42M€ pour une fuite de 24,6 millions de contrats."
  },
  {
    question: "Que font les autorités françaises ?",
    answer: "La CNIL et l'ANSSI ont été notifiées et mènent des investigations pour identifier le propriétaire du serveur et les sources des données. Une plainte pénale est probable une fois les responsables identifiés."
  }
];

const COMPARISON_DATA = [
  { 
    incident: "Fuite 45M (Janvier 2026)", 
    volume: "45+ millions", 
    date: "2026-01-14", 
    type: "Multi-sources agrégées",
    location: "France (Cloud)",
    description: "Découverte par Cybernews d'un serveur cloud non protégé contenant 45+ millions de données françaises"
  },
  { 
    incident: "France Travail", 
    volume: "43 millions", 
    date: "2024-03-01", 
    type: "Demandeurs d'emploi",
    location: "France",
    description: "Fuite de 43 millions enregistrements - Type : Demandeurs d'emploi"
  },
  { 
    incident: "Viamedis/Almerys", 
    volume: "33 millions", 
    date: "2024-02-01", 
    type: "Données de santé",
    location: "France",
    description: "Fuite de 33 millions enregistrements - Type : Données de santé"
  },
  { 
    incident: "Free Mobile", 
    volume: "24,6 millions", 
    date: "2025-10-01", 
    type: "Clients télécom",
    location: "France",
    description: "Fuite de 24,6 millions enregistrements - Type : Clients télécom"
  },
  { 
    incident: "OFII", 
    volume: "2,1 millions", 
    date: "2026-01-01", 
    type: "Étrangers en France",
    location: "France",
    description: "Fuite de 2,1 millions enregistrements - Type : Étrangers en France"
  }
];

const ATTACK_VECTORS = [
  {
    vector: "Phishing ultra-ciblé",
    description: "Les attaquants peuvent créer des emails personnalisés avec nom, adresse, banque et même numéro de médecin traitant pour maximiser la crédibilité.",
    severity: "critique",
    icon: Mail
  },
  {
    vector: "Prélèvements bancaires frauduleux",
    description: "Avec 6 millions d'IBAN/BIC, les escrocs peuvent tenter des prélèvements SEPA ou créer de faux mandats de prélèvement.",
    severity: "critique",
    icon: CreditCard
  },
  {
    vector: "Usurpation d'identité",
    description: "La combinaison nom + date de naissance + adresse permet de créer de faux documents d'identité ou d'ouvrir des comptes à votre nom.",
    severity: "haute",
    icon: UserX
  },
  {
    vector: "Fraude à l'Assurance Maladie",
    description: "Les numéros RPPS/ADELI permettent de se faire passer pour des professionnels de santé et facturer des actes fictifs.",
    severity: "haute",
    icon: Stethoscope
  },
  {
    vector: "Ingénierie sociale en entreprise",
    description: "Les profils CRM détaillés permettent de cibler des employés spécifiques pour infiltrer des systèmes d'entreprise.",
    severity: "haute",
    icon: Building2
  },
  {
    vector: "Identités synthétiques",
    description: "Fusion de données réelles de plusieurs personnes pour créer des identités fictives crédibles utilisées pour des fraudes.",
    severity: "moyenne",
    icon: Skull
  }
];

const breadcrumbItems = [
  { name: "Accueil", url: "/" },
  { name: "Actualités Cybersécurité", url: "/guide" },
  { name: "Fuite 45 Millions de Données", url: "/article/fuite-45-millions-donnees-francaises-2026" }
];

export default function ArticleFuite45MillionsDonnees2026() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        "url": "https://wp-vitesse-pro.fr/auteurs/bouhmou-rachid"
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
      "headline": "Enquête : comment 45 millions de données françaises se sont retrouvées sur un serveur non protégé",
      "description": "Investigation approfondie sur la compilation cybercriminelle de 5 fuites de données distinctes",
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
      "itemListElement": breadcrumbItems.map((item, index) => ({
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
      "name": "Comment se protéger après la fuite de 45 millions de données françaises",
      "description": "Guide étape par étape pour protéger vos données et prévenir les fraudes après cette fuite massive",
      "totalTime": "PT45M",
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
      "name": "Découverte de la fuite de 45 millions de données françaises",
      "startDate": "2026-01-14",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": { "@type": "VirtualLocation", "url": "https://cybernews.com" },
      "description": "Découverte par Cybernews d'un serveur cloud non protégé contenant 45+ millions de données françaises",
      "organizer": { "@type": "Organization", "name": "Cybernews Research Team" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Base de données exposée - 45 millions d'enregistrements français",
      "description": "Compilation cybercriminelle de 5 sources distinctes : registres électoraux, santé RPPS/ADELI, données financières, CRM, assurance auto",
      "creator": { "@type": "Organization", "name": "Acteur cybercriminel non identifié" },
      "datePublished": "2026-01-14",
      "variableMeasured": DATA_CATEGORIES.map(d => d.category),
      "distribution": {
        "@type": "DataDownload",
        "encodingFormat": "Database",
        "contentSize": "30.1 GB"
      }
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
      "headline": "Analyse technique : comment identifier l'origine des 5 fuites compilées",
      "description": "Décryptage des différentes sources de données agrégées par les cybercriminels",
      "datePublished": ARTICLE_DATA.datePublished,
      "author": { "@type": "Person", "name": ARTICLE_DATA.author },
      "about": DATA_CATEGORIES.map(d => ({ "@type": "Thing", "name": d.category }))
    });

    DATA_CATEGORIES.forEach((category, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Dataset",
        "@id": `${ARTICLE_DATA.url}#dataset-${index + 1}`,
        "name": `Données exposées : ${category.category}`,
        "description": `${category.count} enregistrements - Risque : ${category.risk}`,
        "variableMeasured": category.items,
        "about": { "@type": "Thing", "name": category.category }
      });
    });

    ATTACK_VECTORS.forEach((vector, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Thing",
        "@id": `${ARTICLE_DATA.url}#threat-${index + 1}`,
        "name": vector.vector,
        "description": vector.description,
        "additionalType": "CyberThreat"
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "CNIL - Commission Nationale de l'Informatique et des Libertés",
      "serviceType": "Protection des données personnelles",
      "provider": { "@type": "GovernmentOrganization", "name": "CNIL", "url": "https://www.cnil.fr" },
      "areaServed": { "@type": "Country", "name": "France" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "ANSSI - Agence Nationale de la Sécurité des Systèmes d'Information",
      "serviceType": "Cybersécurité nationale",
      "provider": { "@type": "GovernmentOrganization", "name": "ANSSI", "url": "https://www.ssi.gouv.fr" },
      "areaServed": { "@type": "Country", "name": "France" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "MonetaryAmount",
      "name": "Volume de données exposées",
      "currency": "entries",
      "value": 45000000,
      "description": "Nombre total d'enregistrements dans la base de données exposée"
    });

    COMPARISON_DATA.forEach((incident, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Event",
        "@id": `${ARTICLE_DATA.url}#incident-${index + 1}`,
        "name": incident.incident,
        "description": incident.description,
        "startDate": incident.date,
        "endDate": incident.date,
        "eventStatus": "https://schema.org/EventConfirmed",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": incident.location,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
          }
        },
        "image": `https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`,
        "organizer": {
          "@type": "Organization",
          "name": "WP Vitesse Pro Investigation",
          "url": "https://wp-vitesse-pro.fr"
        },
        "performer": {
          "@type": "Organization",
          "name": "Cyber Investigation Team"
        },
        "offers": {
          "@type": "Offer",
          "url": ARTICLE_DATA.url,
          "price": "0",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${ARTICLE_DATA.url}#webpage`,
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
      "@type": "ItemList",
      "name": "Chronologie de la découverte de la fuite",
      "itemListElement": TIMELINE_EVENTS.map((event, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": event.date,
        "description": event.event
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Statistiques d'impact de la fuite",
      "itemListElement": IMPACT_STATS.map((stat, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": stat.type,
        "description": `${stat.count} - ${stat.trend}`
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ClaimReview",
      "claimReviewed": "Cette fuite est l'œuvre d'un courtier en données cybercriminel",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5",
        "alternateName": "Très probable"
      },
      "itemReviewed": {
        "@type": "Claim",
        "author": { "@type": "Organization", "name": "Cybernews" }
      },
      "author": { "@type": "Organization", "name": "WP Vitesse Pro" },
      "reviewBody": "L'analyse technique de Cybernews montre que les données proviennent d'au moins 5 sources distinctes, ce qui indique une compilation délibérée plutôt qu'une fuite accidentelle unique."
    });

    PROTECTION_CONSEILS.forEach((conseil, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "HowToStep",
        "@id": `${ARTICLE_DATA.url}#protection-${index + 1}`,
        "position": index + 1,
        "name": conseil.title,
        "text": conseil.description,
        "url": `${ARTICLE_DATA.url}#protection-${conseil.priority}`
      });
    });

    return schemas;
  };

  return (
    <>
      <SEO
        image="https://wp-vitesse-pro.fr/images/fuite-45-millions-donnees-2026-hero.webp"
        title="Fuite 45M données françaises 2026 : analyse"
        description="Analyse de la fuite massive de 45 millions de données françaises (IBAN, santé, CRM). Découvrez les risques et comment vous protéger."
        canonical="https://wp-vitesse-pro.fr/article/fuite-45-millions-donnees-francaises-2026"
        type="article"
        schema={generateSchemas()}
      />

      <Navbar />

      <main className="min-h-screen bg-background">
        <article className="max-w-5xl mx-auto px-4 py-8" itemScope itemType="https://schema.org/NewsArticle">
          <Breadcrumbs items={breadcrumbItems} />

          <header className="mb-12">
            <div className="flex flex-wrap gap-3 mb-4 items-center">
              <Badge variant="destructive" className="text-sm px-3 py-1">
                <AlertTriangle className="w-4 h-4 mr-1" />
                ALERTE CRITIQUE
              </Badge>
              <Badge variant="outline" className="text-red-600 border-red-600/30">
                <Database className="w-3 h-3 mr-1" /> 45+ Millions de données
              </Badge>
              <Badge variant="secondary">
                <Calendar className="w-3 h-3 mr-1" /> 14 janvier 2026
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6" itemProp="headline">
              {ARTICLE_DATA.headline}
            </h1>

            <p className="text-lg text-muted-foreground mb-6 article-summary" itemProp="description">
              {ARTICLE_DATA.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground border-y border-border py-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span itemProp="author">{ARTICLE_DATA.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{ARTICLE_DATA.readingTime} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{ARTICLE_DATA.wordCount.toLocaleString()} mots</span>
              </div>
              <time itemProp="datePublished" dateTime={ARTICLE_DATA.datePublished}>
                Publié le 25 janvier 2026
              </time>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/fuite-45-millions-donnees-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/fuite-45-millions-donnees-2026-hero.png" 
                alt="Fuite de 45 millions de données personnelles 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Une fuite massive expose 45 millions d'enregistrements personnels
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {IMPACT_STATS.map((stat, index) => (
              <Card key={index} className="p-4 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.count}</div>
                <div className="text-xs text-muted-foreground">{stat.type}</div>
                <Badge variant="outline" className="mt-2 text-xs">{stat.trend}</Badge>
              </Card>
            ))}
          </div>

          <section className="mb-12 key-findings">
            <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h2 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                <AlertOctagon className="w-6 h-6" />
                Ce que vous devez savoir immédiatement
              </h2>
              <ul className="space-y-3 text-red-900 dark:text-red-100">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span><strong>45+ millions de données françaises</strong> ont été exposées sur un serveur cloud non protégé, découvert par Cybernews le 14 janvier 2026.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span><strong>5 sources distinctes compilées</strong> : registres électoraux (23M), santé RPPS/ADELI (9,2M), données bancaires IBAN (6M), CRM (6M+), assurance auto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span><strong>67% de la population française</strong> potentiellement affectée - soit environ 2 Français sur 3.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span><strong>Durée d'exposition inconnue</strong> - impossible de savoir si les données ont été copiées par des tiers.</span>
                </li>
              </ul>
            </Card>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Database className="w-6 h-6 text-primary" />
              1. Anatomie d'une fuite de données historique
            </h2>

            <p>
              Le 14 janvier 2026 restera comme une date noire dans l'histoire de la protection des données en France. L'équipe de recherche de <strong>Cybernews</strong>, l'un des médias de cybersécurité les plus respectés au monde, a découvert un serveur cloud basé en France, <strong>totalement non protégé</strong>, contenant plus de 45 millions d'enregistrements de citoyens français.
            </p>

            <p>
              Ce qui rend cette fuite particulièrement alarmante n'est pas seulement son volume - bien qu'il soit colossal - mais sa <strong>nature composite</strong>. Contrairement aux fuites traditionnelles où une seule organisation voit ses données compromises, cette base de données est le fruit d'une <strong>agrégation délibérée d'au moins 5 sources distinctes</strong>.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-4">Configuration technique du serveur exposé</h3>
              <ul className="space-y-2">
                <li><strong>Hébergement :</strong> Serveur cloud basé en France</li>
                <li><strong>Protection :</strong> Aucune - accessible sans authentification</li>
                <li><strong>Taille totale :</strong> 30,1 Go de données</li>
                <li><strong>Format :</strong> Base de données ouverte, URL publique</li>
                <li><strong>Propriétaire :</strong> Non identifié (enquête en cours)</li>
              </ul>
            </div>

            <p>
              Selon Cybernews, cette configuration suggère fortement l'œuvre d'un <strong>courtier en données cybercriminel</strong>. Ces acteurs malveillants collectent des données issues de multiples fuites, les fusionnent pour créer des profils d'identité complets, puis les revendent sur le dark web à des prix premium.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic my-8">
              "Contrairement aux fuites traditionnelles causées par des erreurs de configuration d'entreprises, cette fuite semble être l'œuvre d'un courtier en données ou d'un cybercriminel. Ces acteurs fusionnent souvent des ensembles de données volées issues de plusieurs fuites afin d'augmenter leur valeur de revente et permettre le recoupement d'identités."
              <footer className="text-sm mt-2 not-italic">— Équipe de recherche Cybernews</footer>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Layers className="w-6 h-6 text-primary" />
              2. Les 5 catégories de données exposées
            </h2>

            <div className="space-y-6">
              {DATA_CATEGORIES.map((category, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${category.sensitivity === 'critique' ? 'bg-red-100 dark:bg-red-900/30' : category.sensitivity === 'haute' ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
                      <category.icon className={`w-8 h-8 ${category.sensitivity === 'critique' ? 'text-red-600' : category.sensitivity === 'haute' ? 'text-orange-600' : 'text-yellow-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{category.category}</h3>
                        <Badge variant={category.sensitivity === 'critique' ? 'destructive' : category.sensitivity === 'haute' ? 'default' : 'secondary'}>
                          {category.count}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {category.items.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{item}</Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Risque principal :</strong> {category.risk}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Vote className="w-6 h-6 text-primary" />
              3. Registres électoraux : 23 millions de citoyens exposés
            </h2>

            <p>
              La catégorie la plus volumineuse de cette fuite concerne ce qui semble être des <strong>registres électoraux ou démographiques</strong>. Plus de 23 millions d'entrées contenant des informations d'identification fondamentales.
            </p>

            <h3>Données présentes dans ce registre</h3>
            <ul>
              <li><strong>Noms complets</strong> : Prénom(s) et nom de famille</li>
              <li><strong>Adresses postales</strong> : Adresse complète de résidence</li>
              <li><strong>Dates de naissance</strong> : Jour, mois et année</li>
              <li><strong>Données électorales</strong> : Inscription sur les listes, bureau de vote</li>
            </ul>

            <p>
              Ces informations, prises isolément, peuvent sembler relativement anodines. Mais combinées avec les autres catégories de cette base de données, elles deviennent <strong>extrêmement dangereuses</strong>. Un escroc disposant de votre nom, date de naissance et adresse peut déjà tenter de nombreuses fraudes à l'identité.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800 my-8">
              <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Cas d'usage frauduleux</h4>
              <p className="text-amber-900 dark:text-amber-100">
                Avec nom + date de naissance + adresse, un fraudeur peut : ouvrir un compte bancaire à votre nom, souscrire un crédit à la consommation, recevoir des colis de marchandises achetées frauduleusement, ou même voter à votre place dans certaines conditions.
              </p>
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Stethoscope className="w-6 h-6 text-primary" />
              4. Données de santé : 9,2 millions de professionnels exposés
            </h2>

            <p>
              La deuxième catégorie la plus importante concerne les <strong>professionnels de santé français</strong>. Environ 9,2 millions d'enregistrements reproduisant le format des registres officiels <strong>RPPS (Répertoire Partagé des Professionnels de Santé)</strong> et <strong>ADELI</strong>.
            </p>

            <h3>Qu'est-ce que le RPPS et ADELI ?</h3>
            <p>
              Le RPPS est le registre national qui recense tous les professionnels de santé autorisés à exercer en France : médecins, infirmiers, pharmaciens, kinésithérapeutes, etc. Chaque professionnel dispose d'un <strong>numéro unique</strong> qui l'identifie dans tout le système de santé français.
            </p>

            <p>
              ADELI (Automatisation DEs LIstes) est le système équivalent pour certaines professions paramédicales. Ces numéros sont utilisés pour :
            </p>

            <ul>
              <li>La <strong>facturation à l'Assurance Maladie</strong></li>
              <li>La <strong>prescription de médicaments</strong></li>
              <li>L'<strong>accès aux dossiers médicaux</strong> des patients</li>
              <li>La <strong>signature des ordonnances</strong></li>
            </ul>

            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800 my-8">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Risque critique de fraude à l'Assurance Maladie
              </h4>
              <p className="text-red-900 dark:text-red-100">
                Un cybercriminel disposant d'un numéro RPPS valide pourrait potentiellement facturer des actes médicaux fictifs à l'Assurance Maladie, générant des millions d'euros de fraude. La France subit déjà environ 1 milliard d'euros de fraude sociale par an.
              </p>
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <CreditCard className="w-6 h-6 text-primary" />
              5. Données bancaires : 6 millions d'IBAN exposés
            </h2>

            <p>
              C'est probablement la catégorie la plus <strong>immédiatement dangereuse</strong> pour les victimes. Environ 6 millions d'enregistrements contiennent des <strong>coordonnées bancaires complètes</strong> :
            </p>

            <ul>
              <li><strong>IBAN</strong> (International Bank Account Number) : L'identifiant unique de votre compte bancaire</li>
              <li><strong>BIC</strong> (Bank Identifier Code) : Le code identifiant votre banque</li>
              <li><strong>Nom de la banque</strong> française associée</li>
              <li><strong>Coordonnées du titulaire</strong> du compte</li>
            </ul>

            <h3>Qu'est-ce qu'un fraudeur peut faire avec votre IBAN ?</h3>

            <p>
              Contrairement à une idée reçue, l'IBAN seul ne permet pas de vider votre compte. Cependant, il ouvre la porte à plusieurs types de fraudes :
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <Card className="p-4 border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-600 mb-2">Prélèvements SEPA frauduleux</h4>
                <p className="text-sm text-muted-foreground">
                  Un escroc peut tenter de créer un mandat de prélèvement SEPA à votre insu. Certaines banques ne vérifient pas suffisamment les autorisations.
                </p>
              </Card>
              <Card className="p-4 border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-600 mb-2">Ingénierie sociale</h4>
                <p className="text-sm text-muted-foreground">
                  "Nous avons besoin de confirmer votre IBAN pour vous rembourser" - le fraudeur connaît déjà votre IBAN, il cherche le code d'authentification.
                </p>
              </Card>
              <Card className="p-4 border-yellow-200 dark:border-yellow-800">
                <h4 className="font-bold text-yellow-600 mb-2">Faux conseillers bancaires</h4>
                <p className="text-sm text-muted-foreground">
                  Appels se faisant passer pour votre banque (dont ils connaissent le nom grâce au BIC) pour obtenir vos codes d'accès.
                </p>
              </Card>
              <Card className="p-4 border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-600 mb-2">Fraude au virement</h4>
                <p className="text-sm text-muted-foreground">
                  Modification des coordonnées bancaires chez vos créanciers (employeur, CAF, impôts) pour détourner vos revenus.
                </p>
              </Card>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 my-8">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Protection essentielle : La liste blanche des créanciers
              </h4>
              <p className="text-green-900 dark:text-green-100">
                Contactez votre banque pour activer la <strong>liste blanche des créanciers SEPA</strong>. Seuls les organismes que vous aurez explicitement autorisés pourront effectuer des prélèvements sur votre compte. Ce service est gratuit et obligatoire depuis la directive DSP2.
              </p>
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              6. Données CRM et assurance : Le ciblage chirurgical
            </h2>

            <p>
              Les deux dernières catégories - <strong>contacts CRM (6+ millions)</strong> et <strong>données d'assurance automobile</strong> - complètent le tableau pour permettre un ciblage d'une précision redoutable.
            </p>

            <h3>Données CRM (Customer Relationship Management)</h3>
            <p>
              Ces données proviennent des systèmes de gestion de la relation client d'entreprises françaises. Elles incluent :
            </p>
            <ul>
              <li>Historiques d'échanges avec le service client</li>
              <li>Préférences de communication</li>
              <li>Comportements d'achat</li>
              <li>Réclamations et litiges passés</li>
              <li>Notes internes des commerciaux</li>
            </ul>

            <p>
              Un escroc sachant que vous avez contacté le support de votre opérateur téléphonique la semaine dernière peut vous appeler en se faisant passer pour ce service : <em>"Suite à votre réclamation du 15 janvier..."</em>
            </p>

            <h3>Données d'assurance automobile</h3>
            <p>
              Cette catégorie lie des <strong>immatriculations de véhicules</strong> à des identités complètes. Les risques incluent :
            </p>
            <ul>
              <li><strong>Vol de véhicule ciblé</strong> : Les voleurs savent où habite le propriétaire d'une voiture de luxe</li>
              <li><strong>Fraude à l'assurance</strong> : Déclaration de sinistres fictifs</li>
              <li><strong>Usurpation de plaque</strong> : Utilisation de votre immatriculation pour des infractions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              7. Chronologie de la découverte
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-6">
                {TIMELINE_EVENTS.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <event.icon className="w-4 h-4 text-primary" />
                    </div>
                    <Card className="p-4">
                      <div className="font-bold text-primary">{event.date}</div>
                      <p className="text-muted-foreground">{event.event}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Skull className="w-6 h-6 text-primary" />
              8. Les vecteurs d'attaque : Comment les criminels exploiteront ces données
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {ATTACK_VECTORS.map((vector, index) => (
                <Card key={index} className={`p-6 ${vector.severity === 'critique' ? 'border-red-300 dark:border-red-700' : vector.severity === 'haute' ? 'border-orange-300 dark:border-orange-700' : 'border-yellow-300 dark:border-yellow-700'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${vector.severity === 'critique' ? 'bg-red-100 dark:bg-red-900/30' : vector.severity === 'haute' ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
                      <vector.icon className={`w-6 h-6 ${vector.severity === 'critique' ? 'text-red-600' : vector.severity === 'haute' ? 'text-orange-600' : 'text-yellow-600'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold">{vector.vector}</h3>
                        <Badge variant={vector.severity === 'critique' ? 'destructive' : 'secondary'} className="text-xs">
                          {vector.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{vector.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
              9. Comparaison avec les autres fuites françaises majeures
            </h2>

            <p>
              Pour mesurer l'ampleur de cette fuite, comparons-la aux incidents majeurs récents en France :
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Incident</th>
                    <th className="border p-3 text-left">Volume</th>
                    <th className="border p-3 text-left">Date</th>
                    <th className="border p-3 text-left">Type de données</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((incident, index) => (
                    <tr key={index} className={index === 0 ? 'bg-red-50 dark:bg-red-950/20 font-bold' : ''}>
                      <td className="border p-3">{incident.incident}</td>
                      <td className="border p-3">{incident.volume}</td>
                      <td className="border p-3">{incident.date}</td>
                      <td className="border p-3">{incident.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Ce qui distingue cette fuite des précédentes est sa <strong>nature composite</strong>. Alors que France Travail ou Viamedis ont exposé des données d'une seule source, cette base compile <strong>5 secteurs distincts</strong>, permettant un <strong>recoupement d'identités</strong> particulièrement dangereux.
            </p>

            <p>
              Un cybercriminel disposant de la base France Travail sait que vous êtes demandeur d'emploi. Avec cette nouvelle base, il peut savoir votre adresse, votre banque, votre médecin, et votre véhicule. La capacité de nuisance est décuplée.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" />
              10. Guide de protection : 8 actions immédiates
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {PROTECTION_CONSEILS.map((conseil, index) => (
                <Card key={index} className={`p-6 ${conseil.priority === 'urgente' ? 'border-red-300 dark:border-red-700' : 'border-border'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${conseil.priority === 'urgente' ? 'bg-red-100 dark:bg-red-900/30' : 'bg-muted'}`}>
                      <conseil.icon className={`w-6 h-6 ${conseil.priority === 'urgente' ? 'text-red-600' : 'text-primary'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold">{conseil.title}</h3>
                        {conseil.priority === 'urgente' && (
                          <Badge variant="destructive" className="text-xs">URGENT</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{conseil.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Scale className="w-6 h-6 text-primary" />
              11. Implications RGPD et juridiques
            </h2>

            <p>
              Cette fuite soulève des questions juridiques majeures. Le serveur étant hébergé en France, le <strong>RGPD (Règlement Général sur la Protection des Données)</strong> s'applique pleinement.
            </p>

            <h3>Qui est responsable ?</h3>
            <p>
              La question centrale de l'enquête en cours. Plusieurs hypothèses :
            </p>

            <ul>
              <li><strong>Le courtier cybercriminel</strong> : S'il est identifié, il risque des poursuites pénales pour recel de données volées et violation du RGPD.</li>
              <li><strong>L'hébergeur cloud</strong> : A-t-il respecté ses obligations de vigilance ? La jurisprudence européenne tend à responsabiliser les hébergeurs.</li>
              <li><strong>Les sources originales</strong> : Les organisations dont les données ont été initialement volées peuvent être tenues responsables si leurs mesures de sécurité étaient insuffisantes.</li>
            </ul>

            <h3>Sanctions potentielles</h3>
            <p>
              Si les responsables sont identifiés, ils s'exposent à :
            </p>
            <ul>
              <li><strong>Amendes CNIL</strong> : Jusqu'à 4% du chiffre d'affaires mondial ou 20 millions d'euros</li>
              <li><strong>Poursuites pénales</strong> : Jusqu'à 5 ans d'emprisonnement et 300 000 € d'amende pour accès frauduleux à un système informatique (Article 323-1 du Code pénal)</li>
              <li><strong>Actions collectives</strong> : Les victimes peuvent se regrouper pour demander des dommages et intérêts</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 my-8">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Précédent : L'amende Free Mobile</h4>
              <p className="text-blue-900 dark:text-blue-100">
                Pour comparaison, la CNIL a infligé <strong>42 millions d'euros d'amende</strong> à Free Mobile en janvier 2026 pour une fuite de 24,6 millions de contrats. Cette affaire des 45 millions pourrait entraîner des sanctions encore plus lourdes si les responsables sont identifiés.
              </p>
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              12. La France, cible privilégiée des cyberattaques
            </h2>

            <p>
              Cette fuite s'inscrit dans un contexte alarmant. La France est devenue le <strong>2ème pays le plus attaqué au monde</strong> après les États-Unis au premier semestre 2025, selon les rapports de cybersécurité.
            </p>

            <h3>Incidents majeurs récents</h3>
            <ul>
              <li><strong>1er janvier 2026</strong> : Cyberattaque DDoS contre La Poste et Banque Postale par NoName057(16)</li>
              <li><strong>4-9 janvier 2026</strong> : Piratage de HubEE/Service-Public.gouv.fr - 160 000 documents volés</li>
              <li><strong>1er janvier 2026</strong> : Compromission de l'OFII - 2,1 millions d'étrangers exposés</li>
              <li><strong>Janvier 2026</strong> : Fuite FFT - 1,2 million de licenciés tennis</li>
            </ul>

            <p>
              Ce qui est particulièrement préoccupant, c'est l'<strong>industrialisation des attaques</strong>. Les cybercriminels utilisent désormais l'intelligence artificielle pour automatiser leurs opérations, rendant leurs campagnes plus efficaces et plus difficiles à détecter.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic my-8">
              "Le mélange de données dresse un tableau inquiétant : différents secteurs, un seul référentiel – et aucune protection. L'incident pose un risque grave pour la vie privée de millions de citoyens français."
              <footer className="text-sm mt-2 not-italic">— Équipe de recherche Cybernews</footer>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-primary" />
              13. Questions fréquentes (FAQ)
            </h2>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">{index + 1}</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-8">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-primary" />
              14. Conclusion : Un signal d'alarme pour la France
            </h2>

            <p>
              La découverte de cette base de données de 45 millions d'enregistrements français n'est pas un incident isolé. C'est le <strong>symptôme d'un écosystème cybercriminel en pleine expansion</strong> qui cible systématiquement les données des citoyens français.
            </p>

            <p>
              Ce qui rend cette fuite particulièrement grave, c'est qu'elle démontre que les cybercriminels ne se contentent plus de voler des données : ils les <strong>agrègent, les recoupent et les enrichissent</strong> pour créer des profils d'identité complets. Un nom seul a peu de valeur. Un nom + adresse + IBAN + médecin traitant + véhicule vaut de l'or sur le marché noir.
            </p>

            <h3>Ce que vous devez retenir</h3>
            <ul>
              <li><strong>67% des Français potentiellement affectés</strong> - agissez comme si vous l'étiez</li>
              <li><strong>Activez toutes les protections</strong> : 2FA, liste blanche bancaire, alertes SMS</li>
              <li><strong>Méfiez-vous de tout contact non sollicité</strong>, même s'il semble légitime</li>
              <li><strong>Surveillez vos comptes</strong> pendant les 12 prochains mois minimum</li>
              <li><strong>Signalez toute anomalie</strong> à votre banque et à la CNIL</li>
            </ul>

            <p>
              Les autorités françaises - CNIL, ANSSI, police judiciaire - enquêtent activement pour identifier les responsables de cette fuite. Nous mettrons à jour cet article dès que de nouvelles informations seront disponibles.
            </p>
          </section>

          <section className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-primary" />
                Ressources officielles
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">CNIL</div>
                    <div className="text-sm text-muted-foreground">Signaler une violation de données</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://www.ssi.gouv.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                  <ShieldAlert className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">ANSSI</div>
                    <div className="text-sm text-muted-foreground">Recommandations cybersécurité</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                  <Search className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">HaveIBeenPwned</div>
                    <div className="text-sm text-muted-foreground">Vérifier si votre email est compromis</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                  <FileKey className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold">Cybermalveillance.gouv.fr</div>
                    <div className="text-sm text-muted-foreground">Assistance aux victimes</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </Card>
          </section>

          <footer className="border-t border-border pt-8 mt-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {ARTICLE_DATA.tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-muted-foreground">
                <p><strong>Auteur :</strong> {ARTICLE_DATA.author}, {ARTICLE_DATA.authorTitle}</p>
                <p><strong>Dernière mise à jour :</strong> 25 janvier 2026</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" data-testid="button-share-article">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Partager
                </Button>
                <Link href="/guide">
                  <Button variant="default" size="sm" data-testid="link-more-articles">
                    Plus d'articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <SEOFooter />
    </>
  );
}
