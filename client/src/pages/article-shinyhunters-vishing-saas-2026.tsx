import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";
import { 
  AlertTriangle, Shield, Lock, Users, Clock, 
  CheckCircle, XCircle, ArrowRight, ExternalLink,
  Eye, Bug, UserX, AlertCircle, ShieldAlert, ShieldCheck,
  Smartphone, Globe, TrendingUp, Target, FileWarning,
  Download, Search, Database, Server, RefreshCw, Code, Trash2,
  Phone, PhoneCall, Key, Mail, Building2, CloudOff,
  Fingerprint, KeyRound, UserCheck, MessageSquare, Headphones,
  Wallet, CreditCard, Network, FileSearch, Layers, Activity,
  BarChart3, Siren, Ban, History, Upload, Container, Bell
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";
import { SocialShare } from "@/components/social-share";
import { SecuritySchemas } from "@/components/security-schemas";

import rachidBouhmouJpg from "@/assets/images/rachid-bouhmou.jpg";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

const ARTICLE_DATA = {
  title: "ShinyHunters : comment le vishing sophistiqué contourne le MFA et vide les plateformes SaaS des entreprises",
  description: "Investigation exclusive sur la campagne ShinyHunters de janvier 2026 : techniques de vishing élaborées, contournement du MFA, vol massif de données SaaS (Salesforce, Microsoft 365, Okta). Analyse Mandiant/Google, 100+ victimes, guide de protection complet.",
  publishDate: "2026-01-31T14:00:00+01:00",
  modifiedDate: "2026-02-01T08:00:00+01:00",
  author: {
    name: "Bouhmou Rachid",
    url: "/auteur/bouhmou-rachid",
    avatar: rachidBouhmouJpg,
    sameAs: [
      "https://www.linkedin.com/in/bouhmou-rachid-cyber/",
      "https://twitter.com/jmorel_cyber"
    ]
  },
  readTime: "25 min",
  category: "Cybersécurité",
  tags: ["ShinyHunters", "vishing", "MFA bypass", "SaaS security", "Okta", "Salesforce", "social engineering", "phishing", "Mandiant", "UNC6661", "data breach 2026"]
};

const ATTACK_STATS = [
  {
    metric: "~100",
    description: "organisations ciblées en janvier 2026",
    icon: Building2,
    color: "text-red-500"
  },
  {
    metric: "50M+",
    description: "d'enregistrements volés et divulgués",
    icon: Database,
    color: "text-orange-500"
  },
  {
    metric: "72h",
    description: "délai d'extorsion après compromission",
    icon: Clock,
    color: "text-yellow-500"
  },
  {
    metric: "+449%",
    description: "augmentation des attaques vishing depuis 2025",
    icon: TrendingUp,
    color: "text-red-600"
  }
];

const ATTACK_PHASES = [
  {
    phase: 1,
    name: "Reconnaissance & Ciblage",
    description: "Les attaquants identifient les employés via LinkedIn, collectent leurs numéros de téléphone et préparent des domaines de phishing personnalisés au nom de l'entreprise",
    icon: Search
  },
  {
    phase: 2,
    name: "Appel Vishing",
    description: "Un faux membre du support IT appelle l'employé, prétextant une mise à jour urgente des paramètres MFA ou une réinitialisation de mot de passe requise",
    icon: PhoneCall
  },
  {
    phase: 3,
    name: "Redirection vers Site de Phishing",
    description: "La victime est dirigée vers un site identique au SSO de l'entreprise (ex: entreprisesso.com) où elle entre ses identifiants et code MFA",
    icon: Globe
  },
  {
    phase: 4,
    name: "Relai en Temps Réel",
    description: "L'attaquant utilise les identifiants en temps réel sur le vrai portail SSO, déclenche le vrai défi MFA que la victime approuve par téléphone",
    icon: RefreshCw
  },
  {
    phase: 5,
    name: "Enregistrement Device MFA",
    description: "L'attaquant enregistre son propre appareil pour le MFA, obtenant un accès persistant même après changement de mot de passe",
    icon: Fingerprint
  },
  {
    phase: 6,
    name: "Exfiltration SaaS",
    description: "Pivot vers Salesforce, Microsoft 365, SharePoint, Slack, Google Drive pour voler données clients, contrats, credentials AWS/Snowflake",
    icon: CloudOff
  },
  {
    phase: 7,
    name: "Extorsion",
    description: "Email de rançon sous 72h avec preuves sur Limewire, menaces DDoS, harcèlement des employés, publication sur le DLS ShinyHunters",
    icon: Wallet
  }
];

const CONFIRMED_VICTIMS = [
  { name: "Betterment", sector: "Fintech", records: "20M+", status: "Confirmé" },
  { name: "Match Group (Hinge, OkCupid)", sector: "Dating", records: "10M+", status: "En investigation" },
  { name: "Grubhub", sector: "Food Delivery", records: "Non divulgué", status: "Confirmé" },
  { name: "SoundCloud", sector: "Streaming", records: "30M+", status: "Allégué" },
  { name: "Panera Bread", sector: "Restauration", records: "14M", status: "Allégué" },
  { name: "Bumble", sector: "Dating", records: "30GB", status: "Allégué" },
  { name: "Crunchbase", sector: "Tech/Data", records: "2M", status: "Allégué" },
  { name: "Canva", sector: "Design", records: "Non divulgué", status: "Parmi cibles" },
  { name: "Epic Games", sector: "Gaming", records: "Non divulgué", status: "Parmi cibles" },
  { name: "Atlassian", sector: "Software", records: "Non divulgué", status: "Parmi cibles" }
];

const PROTECTION_MEASURES = [
  {
    category: "Authentification Résistante au Phishing",
    measures: [
      "Déployer FIDO2/WebAuthn (clés de sécurité YubiKey, passkeys)",
      "Désactiver le MFA par push notification et SMS",
      "Exiger vérification multi-étapes pour réinitialisation mot de passe",
      "Implémenter la vérification d'identité visuelle pour le help desk"
    ],
    icon: Key,
    priority: "Critique"
  },
  {
    category: "Contrôle d'Accès SaaS",
    measures: [
      "Restreindre le self-service password reset",
      "Implémenter le provisioning just-in-time",
      "Auditer les permissions OAuth/Connected Apps",
      "Monitorer les enregistrements de nouveaux appareils"
    ],
    icon: Lock,
    priority: "Élevé"
  },
  {
    category: "Logging & Détection",
    measures: [
      "Tracker les événements SSO (nouvelles connexions, géolocalisation inhabituelle)",
      "Alerter sur PowerShell User-Agent accédant SharePoint/OneDrive",
      "Monitorer les exports massifs depuis les apps SaaS",
      "Logger l'activité API pour anomalies"
    ],
    icon: Activity,
    priority: "Élevé"
  },
  {
    category: "Formation Employés",
    measures: [
      "Exercices de simulation vishing réguliers",
      "Politique stricte : ne jamais partager de mot de passe par téléphone",
      "Vérification des demandes IT via canaux internes connus",
      "Sensibilisation aux deepfakes vocaux et IA"
    ],
    icon: Users,
    priority: "Critique"
  }
];

export default function ArticleShinyHuntersVishingSaaS2026() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_shinyhunters_vishing_2026', location);
    window.open(KINSTA_LINK, "_blank", "noopener,noreferrer");
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-shinyhunters-vishing-2026.png",
      "license": "https://wp-vitesse-pro.fr/licence-images",
      "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`,
      "jobTitle": "Expert Cybersécurité & Threat Intelligence",
      "sameAs": ARTICLE_DATA.author.sameAs,
      "worksFor": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro News",
      "url": "https://wp-vitesse-pro.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    },
    "dateline": "PARIS, FRANCE",
    "printSection": "Cybersecurity Investigation",
    "articleSection": "Cybersécurité",
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": 8500,
    "inLanguage": "fr-FR",
    "copyrightYear": 2026,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Voice Phishing (Vishing)",
        "sameAs": "https://en.wikipedia.org/wiki/Voice_phishing"
      },
      {
        "@type": "Thing",
        "name": "Multi-factor Authentication",
        "sameAs": "https://en.wikipedia.org/wiki/Multi-factor_authentication"
      },
      {
        "@type": "Thing",
        "name": "Social Engineering",
        "sameAs": "https://en.wikipedia.org/wiki/Social_engineering_(security)"
      },
      {
        "@type": "Thing",
        "name": "SaaS (Software as a Service)",
        "sameAs": "https://en.wikipedia.org/wiki/Software_as_a_service"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Mandiant",
        "sameAs": "https://en.wikipedia.org/wiki/Mandiant"
      },
      {
        "@type": "Organization",
        "name": "Google Threat Intelligence Group",
        "sameAs": "https://cloud.google.com/security/threat-intelligence"
      },
      {
        "@type": "Organization",
        "name": "Okta",
        "sameAs": "https://en.wikipedia.org/wiki/Okta_(company)"
      },
      {
        "@type": "Organization",
        "name": "Salesforce",
        "sameAs": "https://en.wikipedia.org/wiki/Salesforce"
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le vishing et comment ShinyHunters l'utilise-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le vishing (voice phishing) est une technique d'ingénierie sociale par téléphone. ShinyHunters appelle les employés en se faisant passer pour le support IT, prétextant une mise à jour MFA urgente, puis les dirige vers des sites de phishing personnalisés pour voler leurs identifiants SSO et codes MFA en temps réel."
        }
      },
      {
        "@type": "Question",
        "name": "Comment le MFA est-il contourné dans ces attaques ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'attaquant relaye les identifiants volés en temps réel sur le vrai portail SSO, ce qui déclenche un vrai défi MFA. La victime, encore au téléphone avec l'attaquant, approuve la notification push ou fournit le code OTP. L'attaquant enregistre ensuite son propre appareil MFA pour un accès persistant."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles plateformes SaaS sont ciblées par ShinyHunters ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ShinyHunters cible principalement Salesforce, Microsoft 365, SharePoint, OneDrive, Slack, Google Workspace, DocuSign et Google Drive. Ils recherchent des données clients, contrats confidentiels, credentials cloud (AWS, Snowflake), et informations PII."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se protéger contre les attaques vishing de ShinyHunters ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Déployez une authentification résistante au phishing (FIDO2, passkeys, clés de sécurité). Désactivez le MFA par push/SMS. Implémentez une vérification d'identité visuelle pour les demandes help desk. Formez les employés à ne jamais partager de mots de passe par téléphone et vérifier via canaux internes connus."
        }
      },
      {
        "@type": "Question",
        "name": "Qui sont UNC6661, UNC6671 et UNC6240 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ce sont les identifiants de clusters de menaces utilisés par Google Threat Intelligence Group pour tracker cette activité. UNC6661 et UNC6671 sont les opérateurs de vishing, tandis qu'UNC6240 est le groupe d'extorsion ShinyHunters qui gère les demandes de rançon et le site de fuite de données."
        }
      },
      {
        "@type": "Question",
        "name": "Combien d'organisations ont été touchées par cette campagne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Environ 100 organisations ont été ciblées en janvier 2026, avec plus de 50 millions d'enregistrements volés. Les victimes confirmées incluent Betterment, Grubhub, Match Group, et potentiellement Canva, Epic Games, Atlassian, parmi d'autres."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le lien avec Scattered Spider et Lapsus$ ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les techniques utilisées (vishing, contournement MFA, ciblage SSO) sont similaires à celles de Scattered Spider et Lapsus$. Ces groupes partagent des tactiques et potentiellement des membres, formant un écosystème criminel interconnecté spécialisé dans le vol de données SaaS."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment protéger votre entreprise contre les attaques vishing ShinyHunters",
    "description": "Guide de protection complet contre les attaques de vishing et contournement MFA ciblant les plateformes SaaS",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-shinyhunters-vishing-2026.png"
    },
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0-500"
    },
    "tool": [
      { "@type": "HowToTool", "name": "Clés de sécurité FIDO2 (YubiKey)" },
      { "@type": "HowToTool", "name": "Solution IAM (Okta, Microsoft Entra)" },
      { "@type": "HowToTool", "name": "SIEM pour logging et détection" },
      { "@type": "HowToTool", "name": "Plateforme de formation sécurité" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Déployer l'authentification résistante au phishing",
        "text": "Remplacez le MFA push/SMS par des clés de sécurité FIDO2 ou des passkeys pour tous les comptes à privilèges et accès SSO critiques."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Sécuriser les processus help desk",
        "text": "Implémentez une vérification d'identité visuelle (photo ID + confirmation vidéo) pour toutes les demandes de réinitialisation de mot de passe ou modification MFA."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Auditer les permissions OAuth et Connected Apps",
        "text": "Passez en revue et restreignez les autorisations OAuth dans Salesforce, Microsoft 365, Google Workspace. Supprimez les applications non autorisées."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Activer le logging et la détection avancés",
        "text": "Configurez des alertes pour les nouvelles connexions depuis des localisations inhabituelles, les enregistrements de nouveaux appareils MFA, et les exports massifs de données."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Former les employés au vishing",
        "text": "Conduisez des exercices de simulation vishing réguliers. Établissez une politique stricte : ne jamais partager de credentials par téléphone, toujours vérifier via canaux internes."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Préparer un plan de réponse aux incidents",
        "text": "Documentez les procédures de réponse spécifiques aux compromissions SSO/SaaS, incluant l'isolation des comptes, la révocation des tokens, et la notification des parties affectées."
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://wp-vitesse-pro.fr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://wp-vitesse-pro.fr/guide"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ShinyHunters Vishing SaaS 2026",
        "item": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026",
    "url": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026",
    "name": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://wp-vitesse-pro.fr/#website",
      "url": "https://wp-vitesse-pro.fr",
      "name": "WP Vitesse Pro"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "breadcrumb": {
      "@id": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026#breadcrumb"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wp-vitesse-pro.fr/#organization",
    "name": "WP Vitesse Pro",
    "url": "https://wp-vitesse-pro.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/wpvitessepro",
      "https://www.linkedin.com/company/wp-vitesse-pro"
    ],
    "knowsAbout": ["Cybersécurité", "Threat Intelligence", "SaaS Security", "Vishing", "MFA Bypass"]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid#person",
    "name": ARTICLE_DATA.author.name,
    "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`,
    "image": {
      "@type": "ImageObject",
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.avatar}`
    },
    "jobTitle": "Expert Cybersécurité & Threat Intelligence",
    "sameAs": ARTICLE_DATA.author.sameAs,
    "worksFor": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "knowsAbout": ["Threat Intelligence", "Vishing", "Social Engineering", "SaaS Security", "Identity Security"],
    "description": "Expert en cybersécurité spécialisé dans l'analyse des menaces avancées et la protection des infrastructures cloud."
  };

  const threatActorSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "name": "ShinyHunters",
    "alternateName": ["UNC6240", "Scattered Lapsus$ Hunters"],
    "description": "Groupe de cybercriminels spécialisé dans le vol de données SaaS via des techniques de vishing et contournement MFA, actif depuis 2020",
    "sameAs": "https://en.wikipedia.org/wiki/ShinyHunters"
  };

  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "Investigation ShinyHunters Vishing Campaign Janvier 2026",
    "headline": "Analyse approfondie de la campagne d'extorsion ShinyHunters ciblant les plateformes SaaS",
    "author": {
      "@type": "Organization",
      "name": "WP Vitesse Pro Security Lab"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "description": "Rapport d'investigation sur les techniques de vishing et contournement MFA utilisées par ShinyHunters pour compromettre environ 100 organisations",
    "reportNumber": "WPV-2026-SHINYHUNTERS-001",
    "about": {
      "@type": "Thing",
      "name": "ShinyHunters Vishing Campaign"
    }
  };

  const specialAnnouncementSchema = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": "Alerte Sécurité : Campagne de Vishing ShinyHunters en Cours",
    "text": "URGENT: Une vague d'attaques vishing cible les employés d'entreprises pour voler leurs accès SSO. Ne partagez jamais vos identifiants par téléphone.",
    "datePosted": ARTICLE_DATA.publishDate,
    "category": "Cybersecurity Alert"
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Statistiques Campagne ShinyHunters Janvier 2026",
    "description": "Données sur la campagne de vishing et vol de données SaaS par ShinyHunters",
    "keywords": ["ShinyHunters", "vishing", "MFA bypass", "SaaS breach", "data theft 2026"],
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "creator": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Organisations ciblées",
        "value": "100",
        "unitText": "entreprises"
      },
      {
        "@type": "PropertyValue",
        "name": "Enregistrements volés",
        "value": "50000000",
        "unitText": "records"
      },
      {
        "@type": "PropertyValue",
        "name": "Augmentation vishing",
        "value": "449",
        "unitText": "pourcentage"
      }
    ]
  };

  const claimReviewSchema = {
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    "url": "https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026",
    "claimReviewed": "Le groupe ShinyHunters utilise des appels téléphoniques frauduleux pour contourner l'authentification MFA et voler des données d'entreprise",
    "itemReviewed": {
      "@type": "Claim",
      "author": {
        "@type": "Organization",
        "name": "Google Threat Intelligence Group / Mandiant"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "alternateName": "Confirmé"
    },
    "author": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Phases de l'attaque vishing ShinyHunters",
    "description": "Les 7 étapes de la chaîne d'attaque vishing vers l'exfiltration SaaS",
    "numberOfItems": 7,
    "itemListElement": ATTACK_PHASES.map((phase) => ({
      "@type": "ListItem",
      "position": phase.phase,
      "name": phase.name,
      "description": phase.description
    }))
  };

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossaire Sécurité - Vishing et Contournement MFA",
    "description": "Définitions des termes techniques liés aux attaques vishing et MFA bypass",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "Vishing",
        "description": "Voice phishing - technique d'ingénierie sociale utilisant des appels téléphoniques pour obtenir des informations sensibles"
      },
      {
        "@type": "DefinedTerm",
        "name": "MFA Bypass",
        "description": "Contournement de l'authentification multi-facteurs, souvent via relai en temps réel des codes OTP ou manipulation de la victime"
      },
      {
        "@type": "DefinedTerm",
        "name": "SSO (Single Sign-On)",
        "description": "Authentification unique permettant d'accéder à plusieurs applications avec un seul jeu d'identifiants"
      },
      {
        "@type": "DefinedTerm",
        "name": "FIDO2",
        "description": "Standard d'authentification sans mot de passe résistant au phishing, utilisant des clés de sécurité matérielles ou passkeys"
      },
      {
        "@type": "DefinedTerm",
        "name": "Credential Harvesting",
        "description": "Collecte d'identifiants via des sites de phishing imitant des portails d'authentification légitimes"
      },
      {
        "@type": "DefinedTerm",
        "name": "Threat Cluster (UNC)",
        "description": "Identifiant temporaire utilisé par Mandiant pour tracker des ensembles d'activités malveillantes avant attribution définitive"
      }
    ]
  };

  const allSchemas = [
    articleSchema,
    faqSchema,
    howToSchema,
    breadcrumbSchema,
    webPageSchema,
    organizationSchema,
    personSchema,
    threatActorSchema,
    reportSchema,
    specialAnnouncementSchema,
    datasetSchema,
    claimReviewSchema,
    itemListSchema,
    definedTermSetSchema
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      <SEO
        image="https://wp-vitesse-pro.fr/images/shinyhunters-vishing-saas-2026-hero.webp"
        title="ShinyHunters : vishing et vol SaaS 2026"
        description="Campagne ShinyHunters 2026 : vishing, contournement MFA, vol données Salesforce/Microsoft 365. 100+ victimes."
        canonical="/article/shinyhunters-vishing-saas-2026"
        keywords="ShinyHunters, vishing, MFA bypass, SaaS security, Okta breach, Salesforce hack, social engineering 2026, Mandiant, UNC6661, voice phishing, cybersécurité entreprise"
        type="article"
      />

      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <main className="pt-20">
        <Breadcrumbs 
          items={[
            { name: "Accueil", url: "/" },
            { name: "Articles", url: "/guide" },
            { name: "ShinyHunters Vishing 2026", url: "/article/shinyhunters-vishing-saas-2026" }
          ]}
        />

        {/* Hero Section */}
        <header className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex justify-center mb-6">
              <Badge variant="destructive" className="px-4 py-1.5 text-sm font-bold animate-pulse flex items-center gap-2">
                <Siren className="w-4 h-4" />
                ALERTE SÉCURITÉ CRITIQUE - CAMPAGNE EN COURS
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-6 text-white leading-tight">
              <span className="text-red-500">ShinyHunters</span> : L'art du vishing <span className="text-slate-300">qui contourne votre MFA</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 text-center max-w-4xl mx-auto mb-8">
              Investigation exclusive sur la campagne de janvier 2026 : comment des appels téléphoniques
              sophistiqués permettent à ce groupe criminel de pénétrer Salesforce, Microsoft 365, Okta
              et d'exfiltrer des millions de données d'entreprise.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-slate-400 text-sm mb-10">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-500" />
                31 Janvier 2026
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-500" />
                {ARTICLE_DATA.readTime} de lecture
              </span>
              <Link href={ARTICLE_DATA.author.url}>
                <span className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
                  <img src={ARTICLE_DATA.author.avatar} alt={ARTICLE_DATA.author.name} className="w-6 h-6 rounded-full" />
                  {ARTICLE_DATA.author.name}
                </span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {ATTACK_STATS.map((stat, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 text-center p-4">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.metric}</div>
                  <div className="text-xs text-slate-400">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/shinyhunters-vishing-saas-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/shinyhunters-vishing-saas-2026-hero.png" 
                alt="ShinyHunters vishing SaaS 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Le groupe ShinyHunters cible les entreprises SaaS avec des attaques par vishing
            </figcaption>
          </figure>

        {/* Introduction */}
        <section id="introduction" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                <strong className="text-foreground">31 janvier 2026, 09h00 UTC.</strong> Google Threat Intelligence Group 
                et Mandiant publient un rapport explosif : le groupe cybercriminel <strong>ShinyHunters</strong> a 
                orchestré une vague d'attaques sans précédent ciblant les plateformes SaaS d'entreprise. 
                Leur arme ? Pas une vulnérabilité zero-day, pas un malware sophistiqué. Simplement... 
                <strong className="text-red-500"> un appel téléphonique.</strong>
              </p>

              <p className="text-lg leading-relaxed">
                Cette investigation exclusive décortique une campagne qui a compromis environ <strong>100 organisations</strong>, 
                exfiltré plus de <strong>50 millions d'enregistrements</strong>, et démontré que l'authentification 
                multi-facteurs (MFA) — longtemps considérée comme le rempart ultime — peut être contournée 
                par quelques minutes de manipulation psychologique.
              </p>

              <Card className="bg-red-950/20 border-red-900/50 my-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Avertissement Important</h3>
                      <p className="text-slate-300 text-sm">
                        Cette activité n'est <strong>pas</strong> le résultat d'une vulnérabilité dans les produits ou 
                        infrastructures des fournisseurs (Okta, Salesforce, Microsoft). Elle exploite exclusivement 
                        la confiance des employés envers leur support IT interne. <strong>Le facteur humain reste 
                        le maillon faible.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* L'Anatomie de l'Attaque */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Anatomie d'une Attaque <span className="text-red-500">en 7 Phases</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              De l'appel téléphonique initial à l'email de rançon : voici comment ShinyHunters 
              transforme la confiance en accès total.
            </p>

            <div className="space-y-6">
              {ATTACK_PHASES.map((phase) => (
                <Card key={phase.phase} className="bg-background hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">Phase {phase.phase}</Badge>
                          <h3 className="text-lg font-bold">{phase.name}</h3>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scénario d'Attaque Détaillé */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <PhoneCall className="inline-block w-8 h-8 mr-3 text-red-500" />
              Scénario d'Attaque : La Conversation Qui Coûte des Millions
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="bg-slate-950 border-slate-800 my-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <Phone className="w-5 h-5" />
                    Transcription Simulée - Appel Vishing UNC6661
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-4">
                  <p className="text-slate-400">[14:32 - L'employé reçoit un appel]</p>
                  
                  <p><span className="text-red-400 font-bold">Attaquant :</span> <span className="text-slate-300">"Bonjour, ici Thomas du support IT de [Entreprise]. Nous effectuons une mise à jour urgente de sécurité sur les paramètres MFA suite à une tentative d'intrusion détectée ce matin. Votre compte fait partie des comptes prioritaires à sécuriser."</span></p>
                  
                  <p><span className="text-blue-400 font-bold">Victime :</span> <span className="text-slate-300">"Oh, d'accord. Que dois-je faire ?"</span></p>
                  
                  <p><span className="text-red-400 font-bold">Attaquant :</span> <span className="text-slate-300">"Je vais vous envoyer un lien vers notre portail de mise à jour. Pouvez-vous vous rendre sur entreprise-sso.com et entrer vos identifiants pour que je puisse vérifier que la configuration est correcte ?"</span></p>
                  
                  <p className="text-slate-400">[La victime navigue vers le faux site, identique au vrai SSO]</p>
                  
                  <p><span className="text-blue-400 font-bold">Victime :</span> <span className="text-slate-300">"C'est fait, j'ai entré mon email et mot de passe."</span></p>
                  
                  <p><span className="text-red-400 font-bold">Attaquant :</span> <span className="text-slate-300">"Parfait. Vous devriez recevoir une notification push sur votre téléphone. Pouvez-vous l'approuver pour confirmer la mise à jour ?"</span></p>
                  
                  <p className="text-slate-400">[L'attaquant utilise les credentials en temps réel sur le vrai Okta, déclenchant un vrai MFA push]</p>
                  
                  <p><span className="text-blue-400 font-bold">Victime :</span> <span className="text-slate-300">"Oui, je viens de l'approuver."</span></p>
                  
                  <p><span className="text-red-400 font-bold">Attaquant :</span> <span className="text-slate-300">"Excellent, tout est en ordre. Merci pour votre coopération. Bonne fin de journée !"</span></p>
                  
                  <p className="text-yellow-400 mt-6">[L'attaquant a maintenant un accès complet au compte et enregistre immédiatement son propre appareil MFA]</p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold mt-12 mb-4">Pourquoi Ça Fonctionne</h3>

              <p>
                Cette attaque exploite plusieurs biais psychologiques :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Autorité :</strong> L'attaquant se présente comme le support IT, une figure d'autorité technique</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Urgence :</strong> La mention d'une "tentative d'intrusion" crée un stress qui court-circuite l'esprit critique</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Familiarité :</strong> Le site de phishing est visuellement identique au vrai portail SSO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>Validation :</strong> Le vrai push MFA sur le téléphone de la victime confirme la légitimité perçue</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Techniques Avancées UNC6661 */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Code className="inline-block w-8 h-8 mr-3 text-purple-500" />
              Techniques Avancées : Ce Que Révèle l'Analyse Mandiant
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                L'analyse de Google Threat Intelligence Group révèle des tactiques opérationnelles 
                sophistiquées qui différencient ShinyHunters des groupes de phishing traditionnels.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Domaines de Phishing Personnalisés</h3>

              <Card className="bg-slate-950 border-slate-800 my-6">
                <CardContent className="p-6 font-mono text-sm">
                  <p className="text-slate-400 mb-3">Patterns de domaines utilisés par UNC6661 :</p>
                  <div className="space-y-1 text-green-400">
                    <p>&lt;companyname&gt;sso.com</p>
                    <p>&lt;companyname&gt;internal.com</p>
                    <p>&lt;companyname&gt;-okta.com</p>
                    <p>&lt;companyname&gt;-login.com</p>
                  </div>
                  <p className="text-slate-400 mt-4">Registrars identifiés : NICENIC (UNC6661), Tucows (UNC6671)</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Exfiltration via PowerShell</h3>

              <p>
                Une fois l'accès SSO obtenu, les attaquants utilisent PowerShell pour automatiser 
                le téléchargement massif de données depuis SharePoint et OneDrive :
              </p>

              <Card className="bg-slate-950 border-slate-800 my-6">
                <CardContent className="p-6 font-mono text-xs overflow-x-auto">
                  <pre className="text-green-400">
{`User-Agent: Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) 
            WindowsPowerShell/5.1.20348.4294

# Recherches ciblées dans les applications cloud :
Keywords: "poc", "confidential", "internal", "proposal", 
          "salesforce", "vpn", "aws", "snowflake"`}
                  </pre>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Effacement des Traces : ToogleBox Recall</h3>

              <p>
                Dans au moins un incident, UNC6661 a activé l'add-on <strong>ToogleBox Recall</strong> 
                pour Google Workspace, un outil conçu pour rechercher et supprimer définitivement des emails. 
                Ils ont supprimé l'email de notification "Security method enrolled" d'Okta pour 
                empêcher la victime de remarquer l'enregistrement d'un nouvel appareil MFA.
              </p>

              <Card className="bg-amber-950/30 border-amber-900/50 my-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileWarning className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-400 mb-2">Indicateur de Compromission</h4>
                      <p className="text-sm text-slate-300">
                        Surveillez les autorisations OAuth pour des applications comme "ToogleBox Recall" 
                        avec des scopes incluant <code className="bg-slate-800 px-1 rounded">gmail.addons.execute</code> et 
                        <code className="bg-slate-800 px-1 rounded ml-1">script.external_request</code>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Victimes Confirmées */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <Database className="inline-block w-8 h-8 mr-3 text-red-500" />
              Victimes Confirmées et Alléguées
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Un panorama des organisations touchées par cette vague d'attaques en janvier 2026.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 font-bold">Organisation</th>
                    <th className="text-left py-4 px-4 font-bold">Secteur</th>
                    <th className="text-left py-4 px-4 font-bold">Enregistrements</th>
                    <th className="text-left py-4 px-4 font-bold">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {CONFIRMED_VICTIMS.map((victim, index) => (
                    <tr key={index} className="border-b border-slate-800 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{victim.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{victim.sector}</td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="font-mono">{victim.records}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={victim.status === "Confirmé" ? "destructive" : 
                                  victim.status === "En investigation" ? "secondary" : "outline"}
                        >
                          {victim.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              Source : Google Threat Intelligence Group, Silent Push, ZeroFox, The Register - Janvier 2026
            </p>
          </div>
        </section>

        {/* Impact des Attaques 2025 */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <History className="inline-block w-8 h-8 mr-3 text-purple-500" />
              L'Héritage 2025 : 1,5 Milliard d'Enregistrements
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                La campagne de janvier 2026 s'inscrit dans la continuité d'opérations dévastatrices en 2025. 
                Via la compromission des tokens OAuth de Salesloft Drift, ShinyHunters avait déjà impacté 
                <strong> 760 entreprises</strong> et exfiltré <strong>1,5 milliard d'enregistrements</strong>.
              </p>

              <Card className="bg-purple-950/20 border-purple-900/50 my-8">
                <CardHeader>
                  <CardTitle className="text-purple-400">Victimes Majeures 2025 (Impact Continu en 2026)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["LVMH (Louis Vuitton, Dior, Tiffany)", "Cisco", "Adidas", "Qantas", 
                      "TransUnion", "Workday", "Pandora", "Chanel", "Farmers Insurance"].map((company, index) => (
                      <Badge key={index} variant="outline" className="justify-center py-2">
                        {company}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <p>
                Cette continuité démontre que ShinyHunters n'est pas un groupe opportuniste, mais une 
                organisation criminelle structurée avec des objectifs à long terme, des processus établis, 
                et une capacité d'adaptation rapide aux mesures de défense.
              </p>
            </div>
          </div>
        </section>

        {/* Analyse Approfondie : Les Clusters de Menaces */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Layers className="inline-block w-8 h-8 mr-3 text-purple-500" />
              Décryptage : L'Écosystème UNC6661 / UNC6671 / UNC6240
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Google Threat Intelligence Group (GTIG) utilise un système de classification sophistiqué pour 
                tracker les activités malveillantes avant leur attribution définitive à un groupe connu. 
                Les identifiants "UNC" (Uncategorized) permettent de suivre des ensembles de tactiques, 
                techniques et procédures (TTPs) distinctes tout en reconnaissant les interconnexions entre 
                différents opérateurs.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">UNC6661 : Les Opérateurs Vishing Primaires</h3>
              
              <p>
                UNC6661 est le cluster principal responsable des appels vishing observés début à mi-janvier 2026. 
                Leurs caractéristiques distinctives incluent :
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Utilisation préférentielle du registrar <strong>NICENIC</strong> pour les domaines de phishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Scripts d'appel hautement personnalisés mentionnant des informations internes (noms de managers, projets récents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Utilisation de l'add-on ToogleBox Recall pour supprimer les traces d'enregistrement MFA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Pivot vers des entreprises crypto via phishing secondaire depuis comptes compromis</span>
                </li>
              </ul>

              <p>
                L'analyse des logs révèle que UNC6661 cible spécifiquement les données à haute valeur, 
                effectuant des recherches ciblées pour des termes comme "poc", "confidential", "internal", 
                "proposal", "salesforce", "vpn", "aws" et "snowflake" — indiquant une connaissance approfondie 
                des structures d'entreprise et des actifs de valeur.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">UNC6671 : Le Second Vecteur Opérationnel</h3>

              <p>
                Parallèlement, UNC6671 conduit des opérations similaires avec des différences tactiques notables :
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Préférence pour le registrar <strong>Tucows</strong> plutôt que NICENIC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Emails d'extorsion non marqués "ShinyHunters", suggérant une opération indépendante ou sous-traitée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Utilisation d'un Tox ID différent pour les négociations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>Tactiques d'extorsion plus agressives</strong> incluant le harcèlement direct du personnel victime</span>
                </li>
              </ul>

              <p>
                Cette distinction est cruciale : elle suggère que l'écosystème ShinyHunters fonctionne comme 
                une franchise criminelle, avec plusieurs équipes opérationnelles partageant des outils et 
                des méthodologies tout en maintenant des chaînes de commandement distinctes.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">UNC6240 : Le Bras Extorsion</h3>

              <p>
                UNC6240 représente la branche extorsion et monétisation de l'écosystème. GTIG attribue à 
                ce cluster les activités post-compromission incluant :
              </p>

              <Card className="bg-slate-950 border-slate-800 my-6">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Wallet className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Envoi d'emails de rançon avec délais de 72 heures et adresses BTC pour paiement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Upload className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Hébergement de preuves de vol sur Limewire pour crédibiliser les menaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Gestion du site de fuite de données (DLS) "SHINYHUNTERS"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Coordination d'attaques DDoS contre les sites web des victimes récalcitrantes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p>
                Les emails de contact attribués à UNC6240 (<code className="bg-slate-800 px-1 rounded">shinycorp@tutanota.com</code>, 
                <code className="bg-slate-800 px-1 rounded ml-1">shinygroup@onionmail.com</code>) sont cohérents avec les 
                opérations ShinyHunters historiques, confirmant la continuité de ce groupe criminel.
              </p>
            </div>
          </div>
        </section>

        {/* Anatomie Technique du MFA Bypass */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <KeyRound className="inline-block w-8 h-8 mr-3 text-red-500" />
              Anatomie Technique : Comment le MFA Est Contourné
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                L'efficacité dévastatrice de ces attaques repose sur une compréhension fine des mécanismes 
                d'authentification multi-facteurs et de leurs faiblesses intrinsèques. Voici une analyse 
                technique détaillée du processus de contournement.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Le Problème Fondamental du MFA "Push"</h3>

              <p>
                L'authentification MFA par notification push (utilisée par Microsoft Authenticator, Okta Verify, 
                Duo, etc.) repose sur un modèle de confiance implicite : l'utilisateur est supposé approuver 
                uniquement les demandes qu'il a lui-même initiées. Ce modèle s'effondre face aux attaques 
                de type "relay en temps réel" :
              </p>

              <Card className="bg-slate-950 border-slate-800 my-6">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Flux d'Attaque MFA Relay</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-xs overflow-x-auto">
                  <pre className="text-green-400">
{`┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌─────────────┐
│   VICTIME   │     │  ATTAQUANT   │     │ PHISHING    │     │  VRAI SSO   │
│ (Téléphone) │     │ (Au téléphone│     │   SITE      │     │   (Okta)    │
└──────┬──────┘     │  avec victime│     └──────┬──────┘     └──────┬──────┘
       │            └──────┬───────┘            │                   │
       │                   │                    │                   │
       │  1. Appel vishing │                    │                   │
       │<──────────────────│                    │                   │
       │                   │                    │                   │
       │  2. "Allez sur    │                    │                   │
       │   entreprise-sso  │                    │                   │
       │   .com"           │                    │                   │
       │──────────────────>│                    │                   │
       │                   │                    │                   │
       │       3. Victime entre credentials     │                   │
       │                   │<───────────────────│                   │
       │                   │                    │                   │
       │                   │  4. Relay immédiat │                   │
       │                   │  des credentials   │                   │
       │                   │───────────────────────────────────────>│
       │                   │                    │                   │
       │                   │                    │   5. Okta envoie  │
       │  6. Notification  │                    │   MFA push        │
       │     push réelle   │<──────────────────────────────────────│
       │                   │                    │                   │
       │  7. "Approuvez la │                    │                   │
       │   notification"   │                    │                   │
       │<──────────────────│                    │                   │
       │                   │                    │                   │
       │  8. Victime       │                    │                   │
       │  approuve         │                    │                   │
       │──────────────────>│                    │                   │
       │                   │                    │                   │
       │                   │  9. Session        │                   │
       │                   │  authentifiée      │                   │
       │                   │<──────────────────────────────────────│
       │                   │                    │                   │
       │                   │  10. Enregistrement nouveau MFA device │
       │                   │───────────────────────────────────────>│
       │                   │                    │                   │
       ▼                   ▼                    ▼                   ▼
                     ACCÈS PERSISTANT OBTENU`}
                  </pre>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi les Codes SMS/OTP Sont Également Vulnérables</h3>

              <p>
                Les codes OTP (One-Time Password) transmis par SMS ou générés par des applications TOTP 
                (Google Authenticator, Authy) souffrent du même problème : ils peuvent être relayés en 
                temps réel par l'attaquant. Le délai de validité de 30-60 secondes est largement suffisant 
                pour que l'attaquant saisisse le code sur le vrai portail SSO.
              </p>

              <Card className="bg-amber-950/30 border-amber-900/50 my-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-400 mb-2">Méthodes MFA Vulnérables au Relay</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        <li>• Notifications push (Microsoft Authenticator, Okta Verify, Duo)</li>
                        <li>• Codes SMS</li>
                        <li>• Codes TOTP (Google Authenticator, Authy)</li>
                        <li>• Questions de sécurité</li>
                        <li>• Appels téléphoniques de vérification</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">La Solution : Authentification Résistante au Phishing</h3>

              <p>
                Seules les méthodes d'authentification basées sur la cryptographie à clé publique et la 
                vérification d'origine (WebAuthn/FIDO2) sont résistantes au relay :
              </p>

              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Clés de sécurité FIDO2 (YubiKey, Titan)</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      La clé vérifie cryptographiquement que la demande provient du domaine légitime (ex: okta.com). 
                      Même si la victime insère la clé sur un faux site, l'authentification échoue car le domaine 
                      ne correspond pas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Passkeys (iCloud Keychain, Google Password Manager)</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Mêmes garanties cryptographiques que les clés matérielles, avec l'avantage de la 
                      synchronisation multi-appareils et d'une UX plus fluide.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Device-Bound Session Credentials (DBSC)</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Technologie émergente liant les sessions au hardware de l'appareil, empêchant le vol 
                      de cookies de session.
                    </p>
                  </div>
                </li>
              </ul>

              <p>
                Google a explicitement recommandé dans son rapport de "se déplacer vers une authentification 
                résistante au phishing là où c'est possible", soulignant que "les méthodes comme les clés 
                de sécurité FIDO2 ou les passkeys sont résistantes à l'ingénierie sociale d'une manière que 
                l'authentification push ou SMS ne l'est pas."
              </p>
            </div>
          </div>
        </section>

        {/* Impact pour les Entreprises Françaises */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Building2 className="inline-block w-8 h-8 mr-3 text-blue-500" />
              Impact et Risques pour les Entreprises Françaises
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Bien que la campagne de janvier 2026 ait principalement ciblé des entreprises nord-américaines, 
                les implications pour les organisations françaises sont significatives. L'écosystème cybercriminel 
                ne connaît pas de frontières, et les mêmes TTPs sont régulièrement adaptées pour de nouveaux marchés.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Facteurs de Risque Spécifiques au Marché Français</h3>

              <Card className="bg-blue-950/20 border-blue-900/50 my-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-400 mb-3">Vulnérabilités Identifiées</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Adoption plus lente des passkeys par rapport aux US/UK</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Préférence culturelle pour le téléphone, facilitant le vishing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Forte dépendance aux plateformes SaaS américaines (M365, Salesforce)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Budget cybersécurité PME souvent insuffisant</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-400 mb-3">Points Forts Français</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ANSSI fournit des recommandations proactives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>RGPD impose des notifications rapides en cas de breach</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Culture SSI renforcée dans les grandes entreprises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Directive NIS2 impose des mesures de sécurité accrues</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Implications RGPD d'une Compromission Type ShinyHunters</h3>

              <p>
                Une attaque réussie de type ShinyHunters expose les entreprises françaises à des obligations 
                réglementaires strictes :
              </p>

              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-lg">1.</span>
                  <div>
                    <strong>Notification CNIL sous 72 heures</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Toute violation de données personnelles doit être notifiée à la CNIL dans les 72 heures 
                      suivant sa découverte. Un vol de données Salesforce contenant des informations clients 
                      qualifie comme violation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-lg">2.</span>
                  <div>
                    <strong>Information des personnes concernées</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Si la violation présente un risque élevé (ex: données bancaires, données de santé), 
                      les personnes concernées doivent être informées directement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-lg">3.</span>
                  <div>
                    <strong>Risque de sanctions financières</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Jusqu'à 4% du chiffre d'affaires mondial ou 20 millions d'euros en cas de manquements 
                      aux obligations de sécurité des données.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Secteurs Français à Risque Élevé</h3>

              <p>
                Basé sur les TTPs de ShinyHunters et les caractéristiques du tissu économique français, 
                les secteurs suivants présentent un profil de risque élevé :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { sector: "Luxe & Mode", reason: "LVMH déjà ciblé en 2025, haute valeur des données clients VIP" },
                  { sector: "Fintech & Crypto", reason: "Cible privilégiée pour phishing secondaire, actifs numériques" },
                  { sector: "E-commerce", reason: "Données de paiement, historiques d'achat, PII massifs" },
                  { sector: "SaaS B2B", reason: "Position privilégiée dans la supply chain des données" },
                  { sector: "Santé & Pharma", reason: "Données de santé hautement sensibles et monnayables" },
                  { sector: "Cabinets de conseil", reason: "Accès aux données confidentielles de multiples clients" }
                ].map((item, index) => (
                  <Card key={index} className="bg-red-950/10 border-red-900/30">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-red-400 mb-1">{item.sector}</h4>
                      <p className="text-xs text-muted-foreground">{item.reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Historique ShinyHunters */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Target className="inline-block w-8 h-8 mr-3 text-red-500" />
              L'Évolution de ShinyHunters : De 2020 à 2026
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Pour comprendre la menace actuelle, il est essentiel de retracer l'évolution de ShinyHunters 
                depuis ses débuts. Ce groupe illustre parfaitement la professionnalisation progressive de 
                la cybercriminalité organisée.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">2020-2021 : Les Débuts et l'Émergence</h3>

              <p>
                ShinyHunters émerge en 2020 comme un groupe spécialisé dans le vol et la revente de bases 
                de données massives. Leurs premières victimes notables incluent Tokopedia (91 millions de 
                comptes), Microsoft GitHub (500 Go de code source), et Wattpad (270 millions de records).
              </p>

              <p>
                À cette époque, le groupe opère principalement via l'exploitation de mauvaises configurations 
                cloud (buckets S3 exposés, repositories Git publics) et la compromission de credentials 
                développeurs sur des forums underground.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">2022-2023 : Industrialisation et Diversification</h3>

              <p>
                La période 2022-2023 marque un tournant avec l'adoption de techniques plus sophistiquées :
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Développement de kits de phishing personnalisables pour les fournisseurs d'identité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Collaboration avec des groupes spécialisés en initial access (courtiers d'accès)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Introduction du modèle d'extorsion à double levier (rançon + menace de publication)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Recrutement via Discord et Telegram de "callers" anglophones pour le vishing</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">2024-2025 : L'Ère du Social Engineering de Masse</h3>

              <p>
                La convergence avec les tactiques de <strong>Scattered Spider</strong> (0ktapus, Scatter Swine) 
                et <strong>Lapsus$</strong> marque l'ère moderne de ShinyHunters. Ces groupes partagent des 
                caractéristiques communes :
              </p>

              <Card className="bg-purple-950/20 border-purple-900/50 my-6">
                <CardContent className="p-6">
                  <h4 className="font-bold text-purple-400 mb-4">Caractéristiques de l'Écosystème Vishing Moderne</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">Profil des Opérateurs</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Souvent jeunes (16-25 ans), natifs anglophones</li>
                        <li>• Recrutement sur Discord, Telegram</li>
                        <li>• Rémunération à la commission sur les rançons</li>
                        <li>• Formation par tutoriels et mentorat</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Infrastructure</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Kits de phishing Okta/Entra prêts à l'emploi</li>
                        <li>• Numéros VoIP à rotation rapide</li>
                        <li>• VPN et proxys pour masquer l'origine</li>
                        <li>• Wallets crypto pour les paiements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">2026 : La Campagne Actuelle et Ses Innovations</h3>

              <p>
                La campagne documentée par Mandiant en janvier 2026 représente l'aboutissement de cette 
                évolution, avec des innovations notables :
              </p>

              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Expansion des cibles SaaS</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Au-delà de Salesforce et M365, ciblage de DocuSign, Slack, Google Workspace, 
                      et même des outils internes moins protégés.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Trash2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Anti-forensics sophistiquées</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Utilisation d'outils comme ToogleBox Recall pour supprimer les traces, 
                      rendant la détection post-incident plus difficile.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Pivot vers le crypto</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Utilisation des accès compromis pour envoyer du phishing ciblé vers des 
                      entreprises crypto, démontrant une stratégie de supply chain.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Harcèlement du personnel</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Escalade des tactiques d'extorsion incluant des appels de harcèlement aux 
                      employés et dirigeants, attaques DDoS, menaces personnelles.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Économie de l'Extorsion */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <CreditCard className="inline-block w-8 h-8 mr-3 text-amber-500" />
              L'Économie de l'Extorsion : Combien Coûte une Attaque ShinyHunters ?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Au-delà des aspects techniques, comprendre les motivations financières des attaquants 
                permet de mieux évaluer les risques et prioriser les investissements en sécurité.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Structure des Demandes de Rançon</h3>

              <p>
                Les emails d'extorsion de ShinyHunters suivent un pattern établi, avec des montants 
                généralement calculés en fonction de :
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>La taille estimée de l'entreprise (chiffre d'affaires, nombre d'employés)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>La sensibilité perçue des données volées (PII, données financières, secrets commerciaux)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Le potentiel de dommage réputationnel (entreprises B2C vs B2B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>La capacité estimée de payer (entreprises cotées, startups bien financées)</span>
                </li>
              </ul>

              <Card className="bg-amber-950/20 border-amber-900/50 my-6">
                <CardHeader>
                  <CardTitle className="text-amber-400">Fourchettes de Rançon Observées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-400">$50K - $200K</div>
                      <div className="text-xs text-muted-foreground mt-1">PME (50-200 employés)</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-400">$200K - $1M</div>
                      <div className="text-xs text-muted-foreground mt-1">ETI (200-2000 employés)</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-400">$1M - $10M+</div>
                      <div className="text-xs text-muted-foreground mt-1">Grandes entreprises</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Le Coût Total d'une Compromission</h3>

              <p>
                La rançon ne représente qu'une fraction du coût total. Une analyse par IBM Security et 
                le Ponemon Institute estime le coût moyen d'une violation de données à <strong>$4,45 millions</strong> 
                en 2023, avec des coûts incluant :
              </p>

              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">35%</span>
                  <span>Perte de revenus due à l'interruption d'activité et perte de clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">28%</span>
                  <span>Coûts de détection et escalade (forensics, consultants, legal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">22%</span>
                  <span>Notification et réponse post-incident</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">15%</span>
                  <span>Actions correctives et renforcement de la sécurité</span>
                </li>
              </ul>

              <p>
                Pour les victimes de ShinyHunters, ces coûts sont souvent amplifiés par la nature des 
                données volées (données SaaS incluant souvent des credentials tierces, contacts clients 
                stratégiques, communications internes sensibles) et par les tactiques d'extorsion agressives 
                qui maximisent la pression médiatique.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Rentabilité de l'Investissement en Protection</h3>

              <p>
                Face à ces coûts, l'investissement en mesures préventives présente un ROI très favorable :
              </p>

              <Card className="bg-green-950/20 border-green-900/50 my-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-400 mb-3">Investissements Prioritaires</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$50-100/user/an</strong> - Clés de sécurité FIDO2</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$20K-100K/an</strong> - Solution SIEM/detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$10K-50K/an</strong> - Formation sécurité employés</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-400 mb-3">Coûts Évités</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$50K-10M</strong> - Rançon</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$500K-5M</strong> - Forensics & legal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span><strong>$1M-50M</strong> - Perte revenus & réputation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Réponse aux Incidents */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Siren className="inline-block w-8 h-8 mr-3 text-red-500" />
              Plan de Réponse en Cas d'Incident
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Si votre organisation suspecte une compromission de type ShinyHunters, voici les étapes 
                critiques à suivre dans les premières heures.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Premières 60 Minutes : Containment</h3>

              <ol className="space-y-4 my-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold flex-shrink-0">1</span>
                  <div>
                    <strong>Isoler les comptes compromis</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Désactiver immédiatement les sessions SSO suspectes via la console admin Okta/Entra. 
                      Révoquer tous les tokens d'accès et forcer la déconnexion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold flex-shrink-0">2</span>
                  <div>
                    <strong>Vérifier les enregistrements MFA récents</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Auditer tous les appareils MFA enregistrés dans les dernières 48-72h. 
                      Supprimer tout appareil non reconnu par l'utilisateur.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold flex-shrink-0">3</span>
                  <div>
                    <strong>Auditer les autorisations OAuth</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Rechercher et révoquer les applications OAuth suspectes (ToogleBox Recall, 
                      applications inconnues avec des scopes sensibles).
                    </p>
                  </div>
                </li>
              </ol>

              <h3 className="text-xl font-bold mt-8 mb-4">Heures 2-24 : Investigation</h3>

              <ol className="space-y-4 my-4" start={4}>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold flex-shrink-0">4</span>
                  <div>
                    <strong>Collecter les logs</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Exporter les logs SSO, les journaux d'audit SaaS (Salesforce, M365, Slack), 
                      les logs de téléphonie d'entreprise pour identifier l'appel vishing initial.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold flex-shrink-0">5</span>
                  <div>
                    <strong>Évaluer l'exfiltration</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Analyser les downloads SharePoint/OneDrive, les exports Salesforce, les 
                      recherches effectuées dans les applications pour déterminer le scope des données volées.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold flex-shrink-0">6</span>
                  <div>
                    <strong>Identifier le mouvement latéral</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Vérifier si l'attaquant a utilisé le compte compromis pour envoyer du phishing 
                      à d'autres employés ou partenaires externes.
                    </p>
                  </div>
                </li>
              </ol>

              <h3 className="text-xl font-bold mt-8 mb-4">Jour 2+ : Notification et Récupération</h3>

              <ol className="space-y-4 my-4" start={7}>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">7</span>
                  <div>
                    <strong>Notifications réglementaires</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Notifier la CNIL dans les 72h si des données personnelles sont affectées. 
                      Documenter l'incident pour conformité RGPD/NIS2.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">8</span>
                  <div>
                    <strong>Communication interne et externe</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Préparer des communications pour les employés, clients affectés, et potentiellement 
                      les médias si les attaquants publient des données.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">9</span>
                  <div>
                    <strong>Hardening et leçons apprises</strong>
                    <p className="text-muted-foreground text-sm mt-1">
                      Implémenter les contrôles manquants identifiés pendant l'investigation. 
                      Planifier le déploiement de l'authentification résistante au phishing.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Guide de Protection */}
        <section id="protection" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <Shield className="inline-block w-8 h-8 mr-3 text-green-500" />
              Guide de Protection Complet
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Recommandations de durcissement basées sur l'analyse Mandiant et les meilleures pratiques 
              de l'industrie pour contrer les attaques vishing et MFA bypass.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {PROTECTION_MEASURES.map((category, index) => (
                <Card key={index} className="bg-background hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-green-500" />
                        </div>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </div>
                      <Badge variant={category.priority === "Critique" ? "destructive" : "secondary"}>
                        {category.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.measures.map((measure, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IoCs et Détection */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Search className="inline-block w-8 h-8 mr-3 text-purple-500" />
              Indicateurs de Compromission (IoCs)
            </h2>

            <div className="space-y-6">
              <Card className="bg-slate-950 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-red-400">Patterns de Domaines Malveillants</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-1 text-green-400">
                  <p>&lt;companyname&gt;sso[.]com</p>
                  <p>&lt;companyname&gt;internal[.]com</p>
                  <p>&lt;companyname&gt;-okta[.]com</p>
                  <p>&lt;companyname&gt;-login[.]com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-950 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-amber-400">Emails de Contact Extorsion</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-1 text-slate-300">
                  <p>shinycorp@tutanota[.]com</p>
                  <p>shinygroup@onionmail[.]com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-950 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-blue-400">Activité Post-Compromission à Surveiller</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2 text-slate-300">
                  <p>• PowerShell User-Agent accédant SharePoint/OneDrive</p>
                  <p>• Approbations OAuth inattendues (ex: "ToogleBox Recall")</p>
                  <p>• Emails sortants supprimés depuis comptes compromis</p>
                  <p>• Enregistrements de nouveaux appareils MFA depuis IPs inhabituelles</p>
                  <p>• Exports massifs de données depuis Salesforce, M365, Google Drive</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <MessageSquare className="inline-block w-8 h-8 mr-3 text-purple-500" />
              Questions Fréquentes
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
                <Card key={index} className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <span className="text-purple-500 font-bold">Q{index + 1}.</span>
                      {faq.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Kinsta */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-purple-950 via-slate-950 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">Protection Recommandée</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sécurisez Votre Infrastructure WordPress
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Même si les attaques ShinyHunters ciblent principalement les plateformes SaaS d'entreprise, 
              votre site WordPress peut être un vecteur d'accès initial. Kinsta offre une protection 
              multicouche avec WAF, détection de malware, et sauvegardes automatiques.
            </p>
            <Button 
              size="lg" 
              onClick={() => handleCTAClick('article_cta')}
              className="bg-purple-600 hover:bg-purple-700"
              data-testid="button-cta-kinsta"
            >
              Découvrir Kinsta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Sources et Références */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Sources et Références</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Google/Mandiant Threat Intelligence Report", url: "https://cloud.google.com/blog/topics/threat-intelligence/expansion-shinyhunters-saas-data-theft" },
                { name: "The Hacker News - ShinyHunters Vishing", url: "https://thehackernews.com/2026/01/mandiant-finds-shinyhunters-using.html" },
                { name: "BleepingComputer Analysis", url: "https://www.bleepingcomputer.com/news/security/mandiant-details-how-shinyhunters-abuse-sso-to-steal-cloud-data/" },
                { name: "ZeroFox Flash Report", url: "https://www.zerofox.com/intelligence/flash-report-shinyhunters-sso-phishing-campaign/" },
                { name: "Silent Push Research", url: "https://www.theregister.com/2026/01/26/shinyhunters_okta_sso_campaign/" },
                { name: "Okta Threat Intelligence", url: "https://www.okta.com/blog/threat-intelligence/phishing-kits-adapt-to-the-script-of-callers/" }
              ].map((source, index) => (
                <a 
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-background hover-elevate transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span className="text-sm">{source.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Author & Share */}
        <section className="py-12 md:py-16 bg-background border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Link href={ARTICLE_DATA.author.url}>
                    <img 
                      src={ARTICLE_DATA.author.avatar} 
                      alt={ARTICLE_DATA.author.name}
                      className="w-20 h-20 rounded-full border-2 border-purple-500 cursor-pointer hover:scale-105 transition-transform"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link href={ARTICLE_DATA.author.url}>
                      <h3 className="text-xl font-bold hover:text-purple-500 transition-colors cursor-pointer">
                        {ARTICLE_DATA.author.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4">
                      Expert Cybersécurité & Threat Intelligence chez WP Vitesse Pro. 
                      Spécialisé dans l'analyse des menaces avancées, le social engineering, 
                      et la protection des infrastructures cloud.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ARTICLE_DATA.tags.slice(0, 5).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <SocialShare 
                      url="https://wp-vitesse-pro.fr/article/shinyhunters-vishing-saas-2026"
                      title={ARTICLE_DATA.title}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Articles Connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/article/malware-wordpress-plugin-2026">
                <Card className="bg-background hover-elevate cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Badge variant="destructive" className="mb-3">Malware</Badge>
                    <h3 className="font-bold mb-2">Plugin WordPress Malveillant 2026</h3>
                    <p className="text-sm text-muted-foreground">
                      Fausses mises à jour navigateur ciblant les administrateurs WordPress.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/article/cve-2025-10484-woocommerce">
                <Card className="bg-background hover-elevate cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Badge variant="destructive" className="mb-3">CVE Critique</Badge>
                    <h3 className="font-bold mb-2">CVE-2025-10484 WooCommerce</h3>
                    <p className="text-sm text-muted-foreground">
                      Bypass d'authentification total sur les boutiques e-commerce.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/article/securite-wordpress-guide-2026">
                <Card className="bg-background hover-elevate cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-3">Guide</Badge>
                    <h3 className="font-bold mb-2">Guide Sécurité WordPress 2026</h3>
                    <p className="text-sm text-muted-foreground">
                      Les meilleures pratiques pour protéger votre site WordPress.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SEOFooter />
    </div>
  );
}
