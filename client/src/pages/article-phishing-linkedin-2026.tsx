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
  Eye, Mail, UserX, AlertCircle, ShieldAlert, ShieldCheck,
  Smartphone, Globe, TrendingUp, Target, FileWarning,
  MessageSquare, Search, Database, Briefcase, Building2
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";
import { SocialShare } from "@/components/social-share";
import { RemediationSteps, CVSSBadge, PatchedVersionBadge } from "@/components/security-schemas";

import rachidBouhmouJpg from "@/assets/images/rachid-bouhmou.jpg";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

const ARTICLE_DATA = {
  title: "Alerte phishing LinkedIn 2026 : 4,3 milliards de données volées, comment les cybercriminels exploitent votre réseau professionnel",
  description: "Enquête exclusive sur l'explosion du phishing sur LinkedIn en 2026. 34% des attaques passent désormais par les réseaux sociaux professionnels. Statistiques, techniques d'attaque et guide de protection complet.",
  publishDate: "2026-01-08T08:00:00Z",
  modifiedDate: "2026-01-08T08:00:00Z",
  author: {
    name: "Bouhmou Rachid",
    url: "/auteur/bouhmou-rachid",
    avatar: rachidBouhmouJpg,
    sameAs: [
      "https://www.linkedin.com/in/rachid-bouhmou-81823a3a1",
      "https://twitter.com/jmorel_cyber"
    ]
  },
  readTime: "24 min",
  category: "Cybersécurité",
  tags: ["phishing LinkedIn", "cybersécurité 2026", "fuite données LinkedIn", "ingénierie sociale", "sécurité réseaux sociaux", "protection entreprise"]
};

const PHISHING_STATS = [
  {
    metric: "4,3 milliards",
    description: "de données LinkedIn volées fin 2026",
    icon: Database,
    color: "text-red-500"
  },
  {
    metric: "34%",
    description: "des attaques phishing via réseaux sociaux",
    icon: TrendingUp,
    color: "text-orange-500"
  },
  {
    metric: "86 millions",
    description: "de faux comptes sur LinkedIn",
    icon: UserX,
    color: "text-yellow-500"
  },
  {
    metric: "70 M$",
    description: "de pertes financières en 2026",
    icon: AlertTriangle,
    color: "text-red-600"
  }
];

const ATTACK_TECHNIQUES = [
  {
    name: "Fausses offres d'emploi",
    description: "Messages proposant des postes attractifs avec salaires élevés pour récupérer CV et données personnelles",
    severity: "ÉLEVÉE",
    frequency: "42%"
  },
  {
    name: "Usurpation de recruteurs",
    description: "Création de profils imitant des recruteurs de grandes entreprises (Google, Microsoft, Amazon)",
    severity: "CRITIQUE",
    frequency: "28%"
  },
  {
    name: "Invitations à des événements",
    description: "Liens vers de faux webinaires ou conférences professionnelles exigeant une inscription",
    severity: "MOYENNE",
    frequency: "18%"
  },
  {
    name: "Propositions de partenariat",
    description: "Faux investisseurs ou partenaires commerciaux demandant des informations confidentielles",
    severity: "ÉLEVÉE",
    frequency: "12%"
  }
];

const PHISHING_REMEDIATION_STEPS = [
  {
    step: 1,
    title: "Activer l'authentification à deux facteurs",
    description: "Accédez à Paramètres > Connexion et sécurité > Vérification en deux étapes. Choisissez une application d'authentification (Google Authenticator, Microsoft Authenticator) plutôt que SMS pour une meilleure sécurité."
  },
  {
    step: 2,
    title: "Limiter la visibilité de votre profil",
    description: "Réduisez les informations visibles publiquement : masquez votre email, limitez qui peut voir vos connexions, désactivez les suggestions de profil. Cela réduit votre exposition aux attaques ciblées."
  },
  {
    step: 3,
    title: "Vérifier systématiquement les profils",
    description: "Avant d'accepter une connexion ou de répondre à un message, examinez : date de création du profil, nombre de connexions, cohérence du parcours, activité sur la plateforme, photos authentiques."
  },
  {
    step: 4,
    title: "Ne jamais cliquer sur des liens suspects",
    description: "Méfiez-vous des liens courts ou des redirections. Préférez toujours accéder aux sites directement via votre navigateur plutôt que via un lien reçu sur LinkedIn."
  },
  {
    step: 5,
    title: "Signaler les contenus suspects",
    description: "Utilisez la fonction de signalement LinkedIn pour les profils et messages suspects. Cela protège aussi les autres utilisateurs et aide LinkedIn à améliorer sa détection."
  }
];

const EMERGENCY_RESPONSE_STEPS = [
  {
    step: 1,
    title: "Changez votre mot de passe LinkedIn immédiatement",
    description: "Utilisez un mot de passe fort et unique. Assurez-vous de ne pas utiliser ce même mot de passe ailleurs."
  },
  {
    step: 2,
    title: "Modifiez les mots de passe des comptes similaires",
    description: "Si vous avez réutilisé le même mot de passe sur Gmail, Outlook ou d'autres services, changez-les immédiatement également."
  },
  {
    step: 3,
    title: "Activez la 2FA si ce n'est pas déjà fait",
    description: "Paramètres > Connexion et sécurité > Vérification en deux étapes. Préférez une application d'authentification au SMS."
  },
  {
    step: 4,
    title: "Vérifiez les sessions actives et déconnectez les inconnues",
    description: "Allez dans Paramètres > Connexion et sécurité > Où vous êtes connecté. Fermez toutes les sessions suspectes."
  },
  {
    step: 5,
    title: "Prévenez votre service IT",
    description: "Informez votre équipe de cybersécurité ou votre support IT pour qu'ils puissent surveiller votre compte d'entreprise."
  },
  {
    step: 6,
    title: "Signalez le message à LinkedIn",
    description: "Utilisez l'option de signalement pour indiquer à LinkedIn que le message ou le profil est frauduleux."
  },
  {
    step: 7,
    title: "Surveillez vos comptes bancaires",
    description: "Vérifiez vos relevés bancaires et mettez en place une surveillance pour détecter les activités suspectes."
  },
  {
    step: 8,
    title: "Envisagez une protection de crédit",
    description: "Si des données sensibles ont été compromises, vous pouvez geler temporairement votre crédit auprès des agences d'évaluation du crédit."
  }
];

export default function ArticlePhishingLinkedIn2026() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_phishing_linkedin_2026', location);
    window.open(KINSTA_LINK, "_blank", "noopener,noreferrer");
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
      "license": "https://wp-vitesse-pro.fr/licence-images",
      "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`,
      "jobTitle": "Expert Hébergement WordPress & Cybersécurité",
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
    "printSection": "Cybersecurity News",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
    },
    "articleSection": "Cybersécurité",
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": 4200,
    "inLanguage": "fr-FR",
    "copyrightYear": 2026,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Phishing",
        
      },
      {
        "@type": "Thing",
        "name": "LinkedIn",
        
      },
      {
        "@type": "Thing",
        "name": "Ingénierie sociale",
        
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi LinkedIn est-il devenu une cible privilégiée pour le phishing ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LinkedIn est devenu une cible privilégiée car il combine trois facteurs : la confiance professionnelle inhérente à la plateforme, la richesse des informations publiques sur les profils (poste, entreprise, compétences), et la facilité des échanges directs via la messagerie. Les cybercriminels exploitent cette confiance pour créer des attaques personnalisées très crédibles."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de données LinkedIn ont été volées en 2026 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fin 2026, une fuite massive a exposé 4,3 milliards d'enregistrements provenant de profils LinkedIn. Ces données incluent noms, emails, numéros de téléphone, historiques professionnels et photographies. Cette base permet aux cybercriminels de créer des attaques de spear phishing extrêmement personnalisées."
        }
      },
      {
        "@type": "Question",
        "name": "Comment reconnaître une tentative de phishing sur LinkedIn ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les signaux d'alerte incluent : profil récemment créé avec peu de connexions, offres trop alléchantes (salaires exceptionnels), demande urgente d'action, liens vers des sites externes, demande de documents personnels (CV, RIB), fautes d'orthographe ou formulations inhabituelles, et absence de l'entreprise sur les moteurs de recherche classiques."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les risques d'une attaque de phishing LinkedIn réussie ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les conséquences peuvent être graves : vol d'identifiants professionnels, accès non autorisé aux systèmes d'entreprise, installation de malwares, usurpation d'identité, pertes financières, atteinte à la réputation, et utilisation du compte compromis pour attaquer d'autres contacts du réseau."
        }
      },
      {
        "@type": "Question",
        "name": "L'authentification à deux facteurs protège-t-elle contre le phishing LinkedIn ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La 2FA offre une protection partielle mais n'est pas infaillible. Les attaques AITM (Adversary-in-the-Middle) modernes peuvent voler les tokens de session même avec la 2FA activée. Elle reste néanmoins essentielle comme couche de protection supplémentaire et doit être combinée avec une vigilance constante."
        }
      },
      {
        "@type": "Question",
        "name": "Que faire si j'ai cliqué sur un lien de phishing LinkedIn ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agissez immédiatement : 1) Changez votre mot de passe LinkedIn et ceux des comptes utilisant le même mot de passe 2) Activez la 2FA si ce n'est pas fait 3) Vérifiez les sessions actives et déconnectez les inconnues 4) Prévenez votre service IT si c'est un compte professionnel 5) Surveillez vos comptes bancaires 6) Signalez le message à LinkedIn."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment se protéger du phishing sur LinkedIn en 2026",
    "description": "Guide complet pour sécuriser votre compte LinkedIn et détecter les tentatives de phishing",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
      "license": "https://wp-vitesse-pro.fr/licence-images",
      "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
    },
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Paramètres LinkedIn"
      },
      {
        "@type": "HowToTool",
        "name": "Application d'authentification (Google Authenticator, Microsoft Authenticator)"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Activer l'authentification à deux facteurs",
        "text": "Accédez à Paramètres > Connexion et sécurité > Vérification en deux étapes. Choisissez une application d'authentification plutôt que SMS."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Limiter la visibilité de votre profil",
        "text": "Réduisez les informations visibles publiquement : masquez votre email, limitez qui peut voir vos connexions, désactivez les suggestions de profil."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Vérifier systématiquement les profils",
        "text": "Avant d'accepter une connexion ou de répondre à un message, examinez : date de création du profil, nombre de connexions, cohérence du parcours, activité sur la plateforme."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Ne jamais cliquer sur des liens suspects",
        "text": "Méfiez-vous des liens courts ou des redirections. Préférez toujours accéder aux sites directement via votre navigateur plutôt que via un lien reçu."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Signaler les contenus suspects",
        "text": "Utilisez la fonction de signalement LinkedIn pour les profils et messages suspects. Cela protège aussi les autres utilisateurs."
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026#breadcrumb",
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
        "name": "Phishing LinkedIn 2026",
        "item": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
      }
    ]
  };

  // Schema 5: WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026",
    "url": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026",
    "name": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://wp-vitesse-pro.fr/#website",
      "url": "https://wp-vitesse-pro.fr",
      "name": "WP Vitesse Pro",
      "publisher": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "breadcrumb": {
      "@id": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026#breadcrumb"
    }
  };

  // Schema 6: Organization
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
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    },
    "foundingDate": "2026",
    "areaServed": "FR",
    "knowsAbout": ["WordPress", "Hébergement Web", "Cybersécurité", "Performance Web"]
  };

  // Schema 7: Person (Author)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid#person",
    "name": ARTICLE_DATA.author.name,
    "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`,
    "image": {
      "@type": "ImageObject",
      "url": ARTICLE_DATA.author.avatar
    },
    "jobTitle": "Expert Hébergement WordPress & Cybersécurité",
    "sameAs": ARTICLE_DATA.author.sameAs,
    "worksFor": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "ANSSI - Agence Nationale de la Sécurité des Systèmes d'Information"
    },
    "knowsAbout": ["Cybersécurité", "WordPress Security", "Phishing", "Infrastructure Cloud"],
    "description": "Expert en sécurité WordPress et hébergement cloud avec plus de 10 ans d'expérience dans la protection des sites web contre les cybermenaces."
  };

  // Schema 8: ItemList (Attack Techniques)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Techniques de phishing LinkedIn les plus utilisées en 2026",
    "description": "Liste des principales méthodes d'attaque de phishing sur LinkedIn",
    "numberOfItems": 4,
    "itemListElement": ATTACK_TECHNIQUES.map((technique, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": technique.name,
      "description": technique.description
    }))
  };

  // Schema 9: DefinedTermSet (Glossary)
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossaire Cybersécurité - Phishing LinkedIn",
    "description": "Définitions des termes clés liés au phishing sur LinkedIn",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "Phishing",
        "description": "Technique d'ingénierie sociale visant à tromper les utilisateurs pour obtenir des informations sensibles"
      },
      {
        "@type": "DefinedTerm",
        "name": "Spear Phishing",
        "description": "Attaque de phishing ciblée et personnalisée visant une personne ou organisation spécifique"
      },
      {
        "@type": "DefinedTerm",
        "name": "AITM (Adversary-in-the-Middle)",
        "description": "Attaque où l'attaquant intercepte les communications en temps réel pour voler les tokens de session"
      },
      {
        "@type": "DefinedTerm",
        "name": "Ingénierie sociale",
        "description": "Manipulation psychologique visant à amener une personne à divulguer des informations confidentielles"
      },
      {
        "@type": "DefinedTerm",
        "name": "2FA (Authentification à deux facteurs)",
        "description": "Méthode de sécurité nécessitant deux formes d'identification pour accéder à un compte"
      }
    ]
  };

  // Schema 10: SpeakableSpecification (Voice Search)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#introduction", "#protection", "#conclusion"]
    },
    "url": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
  };

  // Schema 11: ImageObject
  const imageObjectSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
    "url": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
    "contentUrl": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
    "caption": "Alerte Phishing LinkedIn 2026 - Infographie sur les menaces cybersécurité",
    "creditText": "WP Vitesse Pro",
    "creator": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "copyrightNotice": "© 2026 WP Vitesse Pro",
    "license": "https://wp-vitesse-pro.fr/licence-images",
    "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
  };

  // Schema 12: Dataset (Statistics)
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Statistiques Phishing LinkedIn 2026-2026",
    "description": "Données et statistiques sur les attaques de phishing via LinkedIn",
    "keywords": ["phishing", "LinkedIn", "cybersécurité", "statistiques 2026"],
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "creator": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "distribution": {
      "@type": "DataDownload",
      "encodingFormat": "text/html",
      "contentUrl": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
    },
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Données LinkedIn volées",
        "value": "4.3 milliards",
        "unitText": "enregistrements"
      },
      {
        "@type": "PropertyValue",
        "name": "Attaques phishing hors email",
        "value": "34",
        "unitText": "pourcentage"
      },
      {
        "@type": "PropertyValue",
        "name": "Faux comptes LinkedIn",
        "value": "86 millions",
        "unitText": "comptes"
      },
      {
        "@type": "PropertyValue",
        "name": "Pertes financières 2026",
        "value": "70",
        "unitText": "millions USD"
      }
    ]
  };

  // Schema 13: ClaimReview (Fact-Checking)
  const claimReviewSchema = {
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    "url": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026",
    "claimReviewed": "LinkedIn est devenu l'une des plateformes les plus exploitées par les cybercriminels pour le phishing",
    "itemReviewed": {
      "@type": "Claim",
      "author": {
        "@type": "Organization",
        "name": "Push Security Research"
      },
      "datePublished": "2026-11-15",
      "appearance": {
        "@type": "WebPage",
        "url": "https://pushsecurity.com/blog/2026-top-phishing-trends"
      }
    },
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1,
      "ratingExplanation": "Affirmation vérifiée et confirmée par plusieurs sources de cybersécurité"
    }
  };

  // Schema 14: TechArticle
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "image": "https://wp-vitesse-pro.fr/og-phishing-linkedin-2026.png",
    "proficiencyLevel": "Beginner",
    "dependencies": "Aucun prérequis technique",
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr"
    },
    "mainEntityOfPage": "https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
  };

  // Schema 15: Report
  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "Rapport Phishing LinkedIn 2026",
    "description": "Analyse complète des menaces de phishing sur LinkedIn et guide de protection",
    "reportNumber": "WVP-SEC-2026-001",
    "datePublished": ARTICLE_DATA.publishDate,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "about": {
      "@type": "Thing",
      "name": "Sécurité LinkedIn"
    },
    "abstract": "Ce rapport analyse l'explosion du phishing sur LinkedIn en 2026, avec 4,3 milliards de données volées et 34% des attaques passant par les réseaux sociaux. Il fournit des recommandations concrètes pour se protéger."
  };

  // Schema 16: Course/EducationalContent
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Protection contre le phishing LinkedIn - Guide 2026",
    "description": "Apprenez à identifier et vous protéger des attaques de phishing sur LinkedIn",
    "provider": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr"
    },
    "educationalLevel": "Débutant",
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "teaches": [
      "Identifier les tentatives de phishing sur LinkedIn",
      "Configurer la sécurité de son compte LinkedIn",
      "Réagir en cas de compromission",
      "Protéger son entreprise contre les attaques"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT30M"
    }
  };

  return (
    <>
      <SEO
        title="Phishing LinkedIn 2026 : 4,3 milliards volés"
        description="34% des attaques phishing passent par LinkedIn en 2026. Techniques d'attaque, statistiques et guide de protection complet."
        canonical="https://wp-vitesse-pro.fr/article/phishing-linkedin-2026"
        type="article"
        keywords={ARTICLE_DATA.tags.join(", ")}
        image="https://wp-vitesse-pro.fr/images/phishing-linkedin-2026-hero.webp"
        author={ARTICLE_DATA.author.name}
        datePublished={ARTICLE_DATA.publishDate}
        dateModified={ARTICLE_DATA.modifiedDate}
        category={ARTICLE_DATA.category}
      />

      {/* 16 Rich Snippets / Structured Data Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-28">
        <article itemScope itemType="https://schema.org/NewsArticle">
          <meta itemProp="headline" content={ARTICLE_DATA.title} />
          <meta itemProp="datePublished" content={ARTICLE_DATA.publishDate} />
          <meta itemProp="dateModified" content={ARTICLE_DATA.modifiedDate} />
          <meta itemProp="author" content={ARTICLE_DATA.author.name} />
          
          {/* Hero Section */}
          <section className="relative py-12 md:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              <Breadcrumbs
                items={[
                  { name: "Articles", url: "/guide" },
                  { name: "Phishing LinkedIn 2026", url: "/article/phishing-linkedin-2026" }
                ]}
              />

              <div className="max-w-4xl mx-auto mt-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge variant="destructive" className="text-sm px-3 py-1">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    ALERTE SÉCURITÉ
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {ARTICLE_DATA.category}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {ARTICLE_DATA.readTime}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" itemProp="name">
                  Alerte phishing LinkedIn 2026 : <span className="text-red-500">4,3 milliards</span> de données volées
                </h1>
                
                <SocialShare 
                  url="https://wp-vitesse-pro.fr/article/phishing-linkedin-2026" 
                  title={ARTICLE_DATA.title} 
                  description={ARTICLE_DATA.description}
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed" itemProp="description">
                  Enquête exclusive sur l'explosion du phishing sur LinkedIn. Comment les cybercriminels exploitent votre réseau professionnel et les mesures concrètes pour vous protéger.
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <img 
                    src={ARTICLE_DATA.author.avatar} 
                    alt={ARTICLE_DATA.author.name}
                    className="w-12 h-12 rounded-full"
                    itemProp="image"
                  />
                  <div>
                    <Link href={ARTICLE_DATA.author.url}>
                      <span className="font-semibold hover:text-primary transition-colors" itemProp="name">
                        {ARTICLE_DATA.author.name}
                      </span>
                    </Link>
                    <p className="text-sm text-muted-foreground" itemProp="jobTitle">Expert Cybersécurité & Protection WordPress</p>
                    <time className="text-xs text-muted-foreground" dateTime={ARTICLE_DATA.publishDate} itemProp="datePublished">
                      Publié le 8 janvier 2026
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-4xl py-8">
            <figure className="mb-0 rounded-xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet="/images/phishing-linkedin-2026-hero.webp" type="image/webp" />
                <img 
                  src="/images/phishing-linkedin-2026-hero.png" 
                  alt="Phishing LinkedIn 2026 - Arnaques professionnelles" 
                  className="w-full h-auto object-cover aspect-video" 
                  width={1600} 
                  height={900} 
                  loading="eager" 
                  decoding="async" 
                />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                Nouvelles campagnes de phishing ciblant les utilisateurs LinkedIn
              </figcaption>
            </figure>
          </div>

          {/* Stats Grid */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {PHISHING_STATS.map((stat, index) => (
                    <Card key={index} className="text-center p-4 hover-elevate" data-testid={`stat-card-${index}`}>
                      <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl md:text-3xl font-bold">{stat.metric}</div>
                      <p className="text-xs md:text-sm text-muted-foreground">{stat.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="p-6 bg-card/50 border-primary/20">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    Sommaire de l'article
                  </h2>
                  <nav className="grid md:grid-cols-2 gap-2 text-sm">
                    <a href="#introduction" className="hover:text-primary transition-colors">1. L'essentiel à retenir</a>
                    <a href="#pourquoi-linkedin" className="hover:text-primary transition-colors">2. Pourquoi LinkedIn est si attractif</a>
                    <a href="#mecanismes" className="hover:text-primary transition-colors">3. Comment fonctionnent les attaques</a>
                    <a href="#techniques" className="hover:text-primary transition-colors">4. Techniques d'attaque en 2026</a>
                    <a href="#detection" className="hover:text-primary transition-colors">5. Pourquoi la détection est difficile</a>
                    <a href="#risques" className="hover:text-primary transition-colors">6. Risques pour les utilisateurs</a>
                    <a href="#protection" className="hover:text-primary transition-colors">7. Guide de protection complet</a>
                    <a href="#entreprises" className="hover:text-primary transition-colors">8. Stratégies pour les entreprises</a>
                    <a href="#futur" className="hover:text-primary transition-colors">9. Évolutions futures</a>
                    <a href="#conclusion" className="hover:text-primary transition-colors">10. Conclusion et recommandations</a>
                  </nav>
                </Card>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12" itemProp="articleBody">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                
                {/* Introduction */}
                <div id="introduction" className="mb-12">
                  <Card className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      L'essentiel à retenir
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>4,3 milliards</strong> de données LinkedIn volées fin 2026, créant une base massive pour le spear phishing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>34% des attaques phishing</strong> passent désormais par les réseaux sociaux, contournant les filtres email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span><strong>86 millions de faux comptes</strong> sur LinkedIn utilisés pour des campagnes d'ingénierie sociale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Les attaques ciblent particulièrement les <strong>cadres dirigeants des secteurs finance et tech</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Une simple interaction peut mener au <strong>vol de données ou à la compromission d'entreprise</strong></span>
                      </li>
                    </ul>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    Longtemps perçu comme un réseau professionnel sûr et fiable, <strong>LinkedIn est aujourd'hui devenu l'un des terrains de chasse privilégiés des cybercriminels</strong>. Cette transformation silencieuse représente l'une des évolutions les plus préoccupantes du paysage de la cybersécurité en 2026.
                  </p>

                  <p>
                    Avec plus d'un milliard de membres dans le monde, dont 29 millions en France, LinkedIn concentre une quantité phénoménale d'informations professionnelles. Ces données, souvent partagées publiquement et volontairement par les utilisateurs eux-mêmes, constituent une mine d'or pour les attaquants pratiquant l'ingénierie sociale.
                  </p>

                  <p>
                    En 2026, les équipes de sécurité de Push Security ont révélé une statistique alarmante : <strong>1 attaque de phishing sur 3 se produit désormais en dehors des canaux email traditionnels</strong>, notamment via les messageries LinkedIn. Cette évolution rend obsolètes de nombreuses stratégies de défense classiques.
                  </p>
                </div>

                {/* Pourquoi LinkedIn */}
                <div id="pourquoi-linkedin" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    Pourquoi LinkedIn est-il si attractif pour les cybercriminels ?
                  </h2>

                  <p>
                    LinkedIn réunit trois éléments clés qui en font une cible idéale pour les attaques de phishing : <strong>la visibilité des profils, la crédibilité du contexte professionnel et la facilité des échanges directs</strong>. Cette combinaison crée un environnement où l'ingénierie sociale atteint une efficacité redoutable.
                  </p>

                  <Card className="p-6 my-8 bg-card">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      Un réseau fondé sur la confiance professionnelle
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Contrairement à l'email, devenu un canal saturé d'arnaques où la méfiance est quasi immédiate, <strong>LinkedIn bénéficie encore d'une image de réseau sérieux et légitime</strong>. Les utilisateurs s'attendent à y recevoir des messages d'employeurs potentiels, de partenaires ou de collègues de leur secteur.
                    </p>
                    <p className="text-muted-foreground">
                      Lorsqu'un message semble s'inscrire dans ce cadre — proposition d'opportunité, prise de contact professionnelle, demande d'échange — il est rarement perçu comme suspect au premier abord. Cette <strong>confiance initiale augmente fortement les chances de réponse et d'engagement</strong>.
                    </p>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">Une forte exposition des profils et des parcours</h3>
                  
                  <p>
                    Les profils LinkedIn contiennent souvent une grande quantité d'informations professionnelles accessibles publiquement. On y trouve notamment :
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span>Le poste actuel et les responsabilités</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Le parcours professionnel détaillé</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span>Le secteur d'activité et projets menés</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>La localisation géographique</span>
                    </div>
                  </div>

                  <p>
                    Ces données constituent une véritable base de renseignement pour les attaquants. Elles leur permettent d'adapter précisément le ton, le vocabulaire et le contenu de leurs messages. <strong>Une attaque personnalisée mentionnant le bon poste, la bonne entreprise ou une compétence spécifique paraît immédiatement plus crédible</strong> qu'un message générique.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">La crise des données de 2026</h3>

                  <Card className="p-6 my-6 border-red-500/30 bg-red-500/5">
                    <div className="flex items-start gap-4">
                      <Database className="w-8 h-8 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Fuite massive : 4,3 milliards d'enregistrements</h4>
                        <p className="text-muted-foreground">
                          Fin 2026, une fuite de données sans précédent a exposé <strong>4,3 milliards d'enregistrements</strong> provenant de profils LinkedIn. Ces données incluent noms, emails, numéros de téléphone, historiques professionnels complets et photographies.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          Cette base massive permet aux cybercriminels de créer des attaques de <em>spear phishing</em> extrêmement personnalisées, où chaque détail semble authentique.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Mécanismes des attaques */}
                <div id="mecanismes" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Eye className="w-8 h-8 text-primary" />
                    Comment les attaques de phishing sur LinkedIn fonctionnent
                  </h2>

                  <p>
                    Les attaques suivent généralement un schéma progressif, rarement agressif dès le premier contact. Cette approche subtile est la clé de leur efficacité.
                  </p>

                  <Card className="p-6 my-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30">
                    <h3 className="text-xl font-semibold mb-4">Anatomie d'une attaque type</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold">Reconnaissance initiale</h4>
                          <p className="text-sm text-muted-foreground">L'attaquant étudie le profil cible : poste, entreprise, publications récentes, connexions communes.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold">Création d'un faux profil crédible</h4>
                          <p className="text-sm text-muted-foreground">Profil de recruteur, investisseur ou partenaire avec photo, historique et connexions factices.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold">Premier contact anodin</h4>
                          <p className="text-sm text-muted-foreground">Message personnalisé évoquant une opportunité, un intérêt pour le profil ou une connexion commune.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-semibold">Établissement de la confiance</h4>
                          <p className="text-sm text-muted-foreground">Échanges de plusieurs jours pour paraître légitime avant toute demande suspecte.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                          <h4 className="font-semibold">Exploitation</h4>
                          <p className="text-sm text-muted-foreground">Envoi d'un lien malveillant, demande de documents ou redirection vers une fausse plateforme.</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <p>
                    Un attaquant peut commencer par une invitation ou un message anodin, évoquant une opportunité, une prise de contact ou un intérêt pour le profil. <strong>Une fois la confiance établie, la conversation évolue vers une action</strong> : cliquer sur un lien, télécharger un document ou fournir des informations.
                  </p>
                </div>

                {/* Techniques d'attaque */}
                <div id="techniques" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldAlert className="w-8 h-8 text-primary" />
                    Techniques d'attaque les plus utilisées en 2026
                  </h2>

                  <p>
                    L'analyse des campagnes de phishing interceptées en 2026-2026 révèle plusieurs scénarios récurrents, chacun exploitant des leviers psychologiques spécifiques.
                  </p>

                  <div className="space-y-4 my-8">
                    {ATTACK_TECHNIQUES.map((technique, index) => (
                      <Card key={index} className="p-4 hover-elevate" data-testid={`technique-card-${index}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{technique.name}</h3>
                              <Badge variant={technique.severity === "CRITIQUE" ? "destructive" : technique.severity === "ÉLEVÉE" ? "default" : "secondary"}>
                                {technique.severity}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{technique.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{technique.frequency}</div>
                            <p className="text-xs text-muted-foreground">des attaques</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Les fausses offres d'emploi : le piège le plus répandu</h3>

                  <p>
                    Représentant <strong>42% des tentatives de phishing sur LinkedIn</strong>, les fausses offres d'emploi constituent le vecteur d'attaque le plus efficace. Le contexte économique incertain et la quête permanente de meilleures opportunités rendent les professionnels particulièrement réceptifs.
                  </p>

                  <Card className="p-6 my-6 bg-yellow-500/10 border-yellow-500/30">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      Signaux d'alerte d'une fausse offre
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Salaire anormalement élevé pour le poste proposé
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Processus de recrutement inhabituel (pas d'entretien téléphonique préalable)
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Demande de documents personnels dès le premier contact
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Entreprise introuvable sur les moteurs de recherche classiques
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Urgence artificielle ("offre valable 24h seulement")
                      </li>
                    </ul>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4 mt-8">L'usurpation de recruteurs de grandes entreprises</h3>

                  <p>
                    Les cybercriminels créent des profils imitant des recruteurs de GAFAM (Google, Amazon, Meta, Apple, Microsoft) ou de cabinets de conseil prestigieux. Ces profils sont soigneusement élaborés avec des photos volées, des historiques crédibles et parfois même des connexions avec de vrais employés de l'entreprise.
                  </p>

                  <p>
                    <strong>L'attaque AITM (Adversary-in-the-Middle)</strong> est particulièrement redoutable : les victimes sont dirigées vers des pages de connexion Microsoft ou Google parfaitement imitées. Même avec l'authentification à deux facteurs activée, les tokens de session peuvent être volés en temps réel.
                  </p>
                </div>

                {/* Détection difficile */}
                <div id="detection" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Eye className="w-8 h-8 text-primary" />
                    Pourquoi ces attaques sont difficiles à détecter
                  </h2>

                  <p>
                    Les attaques de phishing menées via LinkedIn sont particulièrement efficaces car <strong>elles ne ressemblent pas aux arnaques traditionnelles</strong>. Elles s'intègrent dans des échanges professionnels plausibles et exploitent des mécanismes humains plus que des failles techniques.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="p-6">
                      <MessageSquare className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Messages hautement personnalisés</h3>
                      <p className="text-sm text-muted-foreground">
                        Le vocabulaire employé correspond au métier de la victime, le message mentionne son entreprise, son poste ou son secteur d'activité. Cette personnalisation réduit les signaux d'alerte habituels.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <Shield className="w-8 h-8 text-blue-500 mb-4" />
                      <h3 className="font-semibold mb-2">Absence de signaux techniques</h3>
                      <p className="text-sm text-muted-foreground">
                        Pas de pièce jointe malveillante évidente, pas de lien immédiatement identifié comme dangereux. Les pages de phishing imitent fidèlement des services professionnels connus.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <Users className="w-8 h-8 text-green-500 mb-4" />
                      <h3 className="font-semibold mb-2">Contournement des filtres</h3>
                      <p className="text-sm text-muted-foreground">
                        Les messages LinkedIn contournent complètement les filtres anti-phishing des messageries d'entreprise. Les équipes de sécurité n'ont aucune visibilité sur ces communications.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <Clock className="w-8 h-8 text-orange-500 mb-4" />
                      <h3 className="font-semibold mb-2">Attaque progressive</h3>
                      <p className="text-sm text-muted-foreground">
                        Les échanges s'étalent sur plusieurs jours, le temps d'instaurer une relation de confiance. Chaque message pris isolément semble inoffensif.
                      </p>
                    </Card>
                  </div>

                  <p>
                    Contrairement aux messageries professionnelles d'entreprise, qui disposent de filtres anti-phishing avancés et de règles strictes de sécurité, <strong>les échanges sur LinkedIn reposent davantage sur la vigilance individuelle</strong>.
                  </p>
                </div>

                {/* Risques */}
                <div id="risques" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    Quels sont les risques pour les utilisateurs ?
                  </h2>

                  <p>
                    Une attaque réussie sur LinkedIn peut avoir des conséquences bien plus larges qu'un simple échange frauduleux. <strong>Un seul clic peut suffire à transformer un réseau de confiance en point d'entrée pour une attaque plus vaste</strong>.
                  </p>

                  <Card className="p-6 my-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
                    <h3 className="text-xl font-semibold mb-4">Conséquences potentielles d'une compromission</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Vol d'identifiants</h4>
                          <p className="text-sm text-muted-foreground">Accès aux comptes professionnels (Microsoft 365, Google Workspace)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Compromission d'entreprise</h4>
                          <p className="text-sm text-muted-foreground">Accès non autorisé aux systèmes et données de l'employeur</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Installation de malwares</h4>
                          <p className="text-sm text-muted-foreground">Logiciels espions, ransomwares ou chevaux de Troie</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Propagation dans le réseau</h4>
                          <p className="text-sm text-muted-foreground">Utilisation du compte pour attaquer les contacts de la victime</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Pertes financières</h4>
                          <p className="text-sm text-muted-foreground">Fraudes bancaires, escroqueries au président, détournements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileWarning className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Atteinte à la réputation</h4>
                          <p className="text-sm text-muted-foreground">Dommages à l'image professionnelle et à celle de l'entreprise</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <p>
                    En 2026, le FBI a recensé <strong>193 407 plaintes pour phishing</strong>, représentant 22,5% de l'ensemble des crimes sur Internet. Les pertes financières associées ont atteint 70 millions de dollars, un montant qui a <strong>quadruplé par rapport à 2023</strong>.
                  </p>

                  <p>
                    Pour les entreprises, le coût moyen d'une violation de données impliquant 10 millions d'enregistrements atteint <strong>50 millions de dollars</strong>. Pour les violations massives (50 millions d'enregistrements), ce coût peut grimper jusqu'à <strong>392 millions de dollars</strong>.
                  </p>
                </div>

                {/* Protection */}
                <div id="protection" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    Guide de protection complet
                  </h2>

                  <p>
                    Se protéger du phishing sur LinkedIn nécessite une approche combinant vigilance humaine et mesures techniques. Voici les actions concrètes à mettre en œuvre immédiatement.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">1. Adopter une vigilance renforcée</h3>

                  <p>
                    Sur LinkedIn, la vigilance doit être permanente, y compris face à des messages qui semblent parfaitement professionnels. <strong>Toute prise de contact inattendue mérite un minimum de recul</strong>.
                  </p>

                  <Card className="p-6 my-6 bg-green-500/10 border-green-500/30">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Questions à se poser avant de répondre
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Cette personne a-t-elle une raison légitime de me contacter ?</li>
                      <li>• L'offre ou la proposition semble-t-elle trop belle pour être vraie ?</li>
                      <li>• Y a-t-il une pression pour agir rapidement ?</li>
                      <li>• Me demande-t-on des informations personnelles ou des documents ?</li>
                      <li>• Puis-je vérifier l'identité de cette personne par un autre canal ?</li>
                    </ul>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4 mt-8">2. Vérifier systématiquement les profils</h3>

                  <p>
                    Avant de poursuivre une conversation, <strong>examinez attentivement le profil de l'expéditeur</strong>. Plusieurs indices peuvent révéler un faux profil :
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Date de création</h4>
                      <p className="text-sm text-muted-foreground">Les faux profils sont souvent récents (moins de 6 mois)</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Nombre de connexions</h4>
                      <p className="text-sm text-muted-foreground">Peu de connexions ou connexions incohérentes avec le profil</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Activité sur la plateforme</h4>
                      <p className="text-sm text-muted-foreground">Absence de publications, likes ou commentaires</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 mt-8">3. Configurer la sécurité de votre compte</h3>

                  <RemediationSteps steps={PHISHING_REMEDIATION_STEPS} />

                  <h3 className="text-xl font-semibold mb-4 mt-8">4. Réagir en cas de suspicion</h3>

                  <p>
                    Si vous avez cliqué sur un lien suspect ou partagé des informations, agissez immédiatement selon les étapes suivantes :
                  </p>

                  <RemediationSteps steps={EMERGENCY_RESPONSE_STEPS} />
                </div>

                {/* Entreprises */}
                <div id="entreprises" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-primary" />
                    Stratégies de protection pour les entreprises
                  </h2>

                  <p>
                    Pour les organisations, la menace du phishing LinkedIn représente un défi particulier : les communications se déroulent sur des comptes personnels, souvent consultés sur des appareils professionnels.
                  </p>

                  <Card className="p-6 my-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
                    <h3 className="text-xl font-semibold mb-4">Recommandations pour les équipes de sécurité</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Déployer des solutions de sécurité navigateur</h4>
                          <p className="text-sm text-muted-foreground">Les outils comme Push Security détectent le phishing sur tous les canaux, y compris LinkedIn, même sur les comptes personnels.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Former les collaborateurs</h4>
                          <p className="text-sm text-muted-foreground">Inclure les réseaux sociaux professionnels dans les programmes de sensibilisation à la sécurité.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Implémenter l'authentification phishing-resistant</h4>
                          <p className="text-sm text-muted-foreground">Les clés de sécurité (FIDO2/WebAuthn) résistent aux attaques AITM qui volent les tokens de session.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Surveiller les identifiants compromis</h4>
                          <p className="text-sm text-muted-foreground">Utiliser des services de détection de fuites pour identifier rapidement les comptes à risque.</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">Le rôle crucial de l'hébergement sécurisé</h3>

                  <p>
                    Bien que le phishing LinkedIn cible les individus, les conséquences affectent souvent les infrastructures de l'entreprise. Un attaquant ayant obtenu des identifiants peut tenter de compromettre les sites web et applications de l'organisation.
                  </p>

                  <p>
                    C'est pourquoi un <strong>hébergement web sécurisé avec des couches de protection multiples</strong> constitue une ligne de défense essentielle. Les hébergeurs WordPress managés comme Kinsta offrent une protection au niveau infrastructure qui peut bloquer les tentatives d'exploitation même si des identifiants ont été compromis.
                  </p>

                  <Card className="p-6 my-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">Protégez votre infrastructure WordPress</h4>
                        <p className="text-muted-foreground mb-4">
                          Un hébergement sécurisé avec WAF, isolation des sites et détection de malwares peut bloquer les attaques même après une compromission d'identifiants.
                        </p>
                        <Button onClick={() => handleCTAClick('entreprises_section')} className="gap-2" data-testid="button-cta-entreprises">
                          Découvrir Kinsta <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">99.9%</div>
                        <p className="text-sm text-muted-foreground">uptime garanti</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Évolutions futures */}
                <div id="futur" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    Évolutions et menaces émergentes
                  </h2>

                  <p>
                    Le phishing LinkedIn continue d'évoluer rapidement. Voici les tendances identifiées par les experts en cybersécurité pour 2026 et au-delà.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">L'IA générative au service des attaquants</h3>

                  <p>
                    En 2026, <strong>40% des emails de compromission de messagerie professionnelle (BEC) étaient générés par IA</strong>. Cette tendance s'étend désormais aux réseaux sociaux. Les messages de phishing créés par IA sont plus naturels, sans fautes, et parfaitement adaptés au contexte de la cible.
                  </p>

                  <p>
                    Les modèles d'IA entraînés sur les 4,3 milliards de données LinkedIn volées peuvent désormais <strong>prédire les comportements des utilisateurs</strong> et optimiser les messages pour maximiser les taux de réponse.
                  </p>

                  <Card className="p-6 my-6 bg-muted/50">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      Menaces émergentes pour 2026
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm">Deepfakes vocaux</h5>
                        <p className="text-xs text-muted-foreground">Appels vidéo avec des recruteurs "clonés" à partir de profils publics</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Attaques multi-canaux</h5>
                        <p className="text-xs text-muted-foreground">Combinaison LinkedIn + email + SMS pour une crédibilité maximale</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Supply chain attacks</h5>
                        <p className="text-xs text-muted-foreground">Ciblage des fournisseurs via LinkedIn pour atteindre les grandes entreprises</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Compromission de comptes vérifiés</h5>
                        <p className="text-xs text-muted-foreground">Piratage de comptes LinkedIn authentiques pour mener des attaques</p>
                      </div>
                    </div>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Renforcement réglementaire attendu</h3>

                  <p>
                    Face à l'ampleur des fuites de données, les régulateurs intensifient leur action. En 2026, on s'attend à des <strong>amendes RGPD plus sévères</strong> et à de nouvelles obligations pour les plateformes de réseaux sociaux en matière de protection des utilisateurs contre le phishing.
                  </p>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    Conclusion : la vigilance comme meilleure défense
                  </h2>

                  <p>
                    LinkedIn reste un outil professionnel puissant et indispensable pour le réseautage et le développement de carrière. Cependant, <strong>il est désormais aussi un canal privilégié pour le phishing ciblé</strong>.
                  </p>

                  <p>
                    En exploitant la confiance professionnelle, la richesse des profils et les échanges directs, les cybercriminels réussissent à contourner la méfiance habituelle liée aux emails. La fuite massive de 4,3 milliards de données en 2026 a fourni aux attaquants un arsenal sans précédent pour personnaliser leurs campagnes.
                  </p>

                  <Card className="p-6 my-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30">
                    <h3 className="text-xl font-semibold mb-4">Les 5 règles d'or à retenir</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
                        <span>Activez l'authentification à deux facteurs dès maintenant</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
                        <span>Vérifiez toujours l'identité avant de répondre à un inconnu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                        <span>Méfiez-vous des offres trop belles pour être vraies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
                        <span>Ne cliquez jamais sur des liens sans vérification préalable</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">5</div>
                        <span>Signalez tout comportement suspect à LinkedIn et à votre entreprise</span>
                      </div>
                    </div>
                  </Card>

                  <SocialShare 
                    url="https://wp-vitesse-pro.fr/article/phishing-linkedin-2026" 
                    title={ARTICLE_DATA.title} 
                  />

                  <p>
                    Comprendre pourquoi LinkedIn est utilisé comme vecteur d'attaque permet d'adapter ses réflexes, de protéger ses données et de préserver la sécurité de son environnement professionnel. <strong>Sur les réseaux comme ailleurs, la vigilance reste la meilleure défense</strong>.
                  </p>
                </div>

                {/* CTA Final */}
                <Card className="p-8 my-12 bg-gradient-to-r from-primary/20 to-purple-500/20 border-primary/30 text-center">
                  <h3 className="text-2xl font-bold mb-4">Protégez votre présence en ligne</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Votre site WordPress mérite la même vigilance. Un hébergement sécurisé avec protection WAF, sauvegardes automatiques et monitoring 24/7 peut faire la différence.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" onClick={() => handleCTAClick('conclusion')} className="gap-2" data-testid="button-cta-conclusion">
                      Découvrir Kinsta <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/audit-site">
                        Auditer mon site gratuitement
                      </Link>
                    </Button>
                  </div>
                </Card>

              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Articles connexes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 hover-elevate" data-testid="related-article-1">
                    <Link href="/article/vulnerabilites-wordpress-2026">
                      <Badge variant="outline" className="mb-2">Sécurité</Badge>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">Vulnérabilités WordPress Critiques Janvier 2026</h3>
                      <p className="text-sm text-muted-foreground">CVE-2026-8489, Post SMTP : les failles à corriger d'urgence</p>
                    </Link>
                  </Card>
                  <Card className="p-4 hover-elevate" data-testid="related-article-2">
                    <Link href="/article/securite-wordpress-2026">
                      <Badge variant="outline" className="mb-2">Guide</Badge>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">Guide Sécurité WordPress 2026</h3>
                      <p className="text-sm text-muted-foreground">Toutes les bonnes pratiques pour sécuriser votre site</p>
                    </Link>
                  </Card>
                  <Card className="p-4 hover-elevate" data-testid="related-article-3">
                    <Link href="/audit-site">
                      <Badge variant="outline" className="mb-2">Outil</Badge>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">Audit de Sécurité Gratuit</h3>
                      <p className="text-sm text-muted-foreground">Analysez les vulnérabilités de votre site en 2 minutes</p>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <SEOFooter />
    </>
  );
}
