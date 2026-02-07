import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";
import { SecuritySchemas, RemediationSteps, CVSSBadge } from "@/components/security-schemas";
import { 
  AlertTriangle, Shield, Lock, Server, Clock, 
  CheckCircle, XCircle, ArrowRight, ExternalLink,
  Users, Zap, Eye, RefreshCw, Database, Globe,
  Phone, Mail, FileWarning, AlertCircle, ShieldAlert,
  UserX, CreditCard, Building2, Stethoscope, HelpCircle
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

const ARTICLE_DATA = {
  title: "Fuite de données Doctolib janvier 2026 : 152 808 dossiers patients exposés sur le dark web - analyse complète et guide de protection",
  description: "Analyse approfondie de la fuite de données touchant l'Hôpital privé Miotte de Belfort et un cabinet d'ophtalmologie de Sallanches via Doctolib. 152 808 dossiers patients exposés sur BreachForums. Vérifiez si vous êtes concerné et protégez-vous.",
  publishDate: "2026-01-05T09:00:00+01:00",
  modifiedDate: "2026-01-05T12:00:00+01:00",
  author: {
    name: "Bouhmou Rachid",
    url: "/auteur/bouhmou-rachid",
    avatar: "https://ui-avatars.com/api/?name=Julien+Morel&background=7C3AED&color=fff&size=80",
    sameAs: [
      "https://www.linkedin.com/in/bouhmou-rachid-cyber/",
      "https://twitter.com/jmorel_cyber"
    ]
  },
  readTime: "22 min",
  category: "Cybersécurité",
  tags: ["fuite données", "Doctolib", "cyberattaque", "données santé", "RGPD", "dark web", "BreachForums", "protection données", "hôpital", "cybersécurité santé"]
};

export default function ArticleFuiteDonneesDoctolib2026() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_fuite_doctolib', location);
    window.open(KINSTA_LINK, "_blank", "noopener,noreferrer");
  };

  const securityAdvisoryData = {
    cveId: "DATA-DOCTOLIB-2026-001",
    title: "Fuite de données Doctolib janvier 2026",
    description: "Exposition de 152 808 dossiers patients suite à une compromission d'établissements de santé utilisant Doctolib.",
    severity: "high" as const,
    cvssScore: 8.2,
    cvssVector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    publishDate: ARTICLE_DATA.publishDate,
    affectedProduct: "Doctolib Patient Data (via Partners)",
    affectedVersions: "January 2026 Breach",
    patchedVersion: "N/A (Data Leak)",
    vendor: "Doctolib Partners",
    vulnerabilityType: "Data Breach / Credential Compromise",
    remediationSteps: [
      { step: 1, title: "Changer le mot de passe Doctolib", description: "Utilisez un mot de passe fort et unique pour votre compte Doctolib." },
      { step: 2, title: "Activer la 2FA", description: "Activez l'authentification à deux facteurs sur votre compte Doctolib." },
      { step: 3, title: "Méfiance phishing", description: "Soyez vigilant face aux emails et SMS suspects se faisant passer pour Doctolib." },
      { step: 4, title: "Surveiller comptes bancaires", description: "Vérifiez régulièrement vos relevés bancaires pour détecter toute activité suspecte." },
      { step: 5, title: "Signaler à la CNIL", description: "En cas de préjudice, déposez une plainte sur cnil.fr." }
    ]
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": ARTICLE_DATA.title,
    "alternativeHeadline": "Doctolib : fuite massive de données de santé en France - 152 808 patients concernés",
    "description": ARTICLE_DATA.description,
    "image": [
      "https://wp-vitesse-pro.fr/og-fuite-doctolib-2026.png",
      "https://wp-vitesse-pro.fr/images/data-breach-illustration.png"
    ],
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "dateline": "PARIS, FRANCE",
    "printSection": "Cybersecurity News",
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
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026"
    },
    "articleSection": "Cybersécurité",
    "articleBody": "Analyse complète de la fuite de données Doctolib de janvier 2026 touchant 152 808 patients français.",
    "keywords": ARTICLE_DATA.tags.join(", "),
    "wordCount": 4200,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "copyrightYear": 2026,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "about": {
      "@type": "Thing",
      "name": "Fuite de données de santé",
      "description": "Incident de cybersécurité impliquant des données médicales de patients français"
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": "Doctolib",
        "url": "https://www.doctolib.fr"
      },
      {
        "@type": "Organization",
        "name": "Hôpital privé Miotte de Belfort"
      },
      {
        "@type": "Organization",
        "name": "ANSSI",
        "url": "https://www.ssi.gouv.fr"
      },
      {
        "@type": "Organization",
        "name": "CNIL",
        "url": "https://www.cnil.fr"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Doctolib a-t-il été piraté directement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, Doctolib n'a pas été piraté directement. Ce sont deux établissements de santé (l'Hôpital privé Miotte de Belfort et un cabinet d'ophtalmologie de Sallanches) qui ont été victimes d'une cyberattaque. Les données ont été transmises à ces établissements via les prises de rendez-vous Doctolib, d'où la mention de la plateforme dans les fichiers volés."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de patients sont concernés par cette fuite de données ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Au total, 152 808 dossiers patients ont été mis en ligne sur BreachForums : environ 103 000 dossiers proviennent de l'Hôpital privé Miotte de Belfort et environ 49 700 du cabinet d'ophtalmologie de Sallanches."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles données personnelles ont été exposées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les données exposées comprennent : noms et prénoms, adresses email (dont certaines contenant la mention 'Doctolib'), adresses postales, dates de naissance et numéros de téléphone des patients. Ce sont des informations exploitables pour des tentatives de phishing et d'usurpation d'identité."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savoir si mes données font partie de la fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si vous avez pris rendez-vous via Doctolib à l'Hôpital privé Miotte de Belfort ou au cabinet d'ophtalmologie de Sallanches, vous êtes potentiellement concerné. Surveillez vos emails pour d'éventuels messages suspects et vérifiez régulièrement votre dossier bancaire pour toute activité frauduleuse."
        }
      },
      {
        "@type": "Question",
        "name": "Mes données bancaires sont-elles compromises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "D'après les informations disponibles, aucune donnée bancaire (numéro de carte, RIB) n'a été exposée dans cette fuite. Cependant, les informations personnelles volées peuvent être utilisées pour des tentatives de phishing visant à obtenir vos coordonnées bancaires."
        }
      },
      {
        "@type": "Question",
        "name": "Que faire si je suis concerné par cette fuite de données ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Changez immédiatement vos mots de passe, notamment celui de votre compte Doctolib. 2) Activez la double authentification partout où c'est possible. 3) Méfiez-vous des emails et SMS suspects. 4) Surveillez vos comptes bancaires. 5) Vous pouvez déposer une plainte auprès de la CNIL si vous constatez une utilisation frauduleuse de vos données."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que BreachForums ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BreachForums est une plateforme du dark web où les cybercriminels publient et vendent des données volées lors de cyberattaques. C'est l'un des forums les plus actifs pour le commerce de données piratées, successeur de RaidForums qui a été fermé par les autorités en 2022."
        }
      },
      {
        "@type": "Question",
        "name": "Les données de santé (dossiers médicaux) ont-elles été volées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selon les informations actuelles, ce sont principalement des données administratives (coordonnées, identité) qui ont été exposées. Il n'est pas confirmé que des données médicales sensibles (diagnostics, traitements) fassent partie de la fuite, mais une investigation approfondie est en cours."
        }
      },
      {
        "@type": "Question",
        "name": "Les établissements de santé français sont-ils souvent ciblés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le secteur de la santé est l'une des cibles privilégiées des cybercriminels. En 2026-2026, l'ANSSI a signalé une augmentation de 45% des cyberattaques contre les établissements de santé français. Les données médicales se revendent très cher sur le dark web."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la responsabilité de Doctolib dans cette fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doctolib n'est pas directement responsable car ses systèmes n'ont pas été compromis. Cependant, la plateforme transmet les données des patients aux établissements de santé, qui sont responsables de leur sécurisation. Doctolib pourrait être sollicité pour renforcer les protocoles de sécurité avec ses partenaires."
        }
      }
    ]
  };

  const howToProtectSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment se protéger après une fuite de données médicales",
    "description": "Guide complet en 8 étapes pour protéger vos informations personnelles suite à une fuite de données de santé comme celle de Doctolib",
    "totalTime": "PT1H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Vérifier si vous êtes concerné",
        "text": "Consultez vos rendez-vous passés sur Doctolib pour voir si vous avez utilisé les établissements touchés (Hôpital Miotte Belfort, cabinet Sallanches)."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Changer vos mots de passe",
        "text": "Modifiez immédiatement votre mot de passe Doctolib et tous les comptes utilisant le même mot de passe. Utilisez un gestionnaire de mots de passe."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Activer la double authentification",
        "text": "Activez l'authentification à deux facteurs (2FA) sur Doctolib et tous vos comptes importants (email, banque, réseaux sociaux)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Surveiller vos emails",
        "text": "Soyez très vigilant face aux emails suspects se faisant passer pour Doctolib, votre mutuelle ou la Sécurité sociale. Ne cliquez sur aucun lien douteux."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Vérifier vos comptes bancaires",
        "text": "Consultez régulièrement vos relevés bancaires pour détecter toute transaction suspecte. Signalez immédiatement toute anomalie à votre banque."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Signaler à la CNIL si nécessaire",
        "text": "En cas d'utilisation frauduleuse de vos données, déposez une plainte sur le site de la CNIL (cnil.fr) et auprès des autorités compétentes."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "name": "Mettre en place des alertes",
        "text": "Configurez des alertes sur votre banque et utilisez des services de surveillance d'identité pour être prévenu en cas d'utilisation suspecte."
      },
      {
        "@type": "HowToStep",
        "position": 8,
        "name": "Informer vos proches",
        "text": "Prévenez votre entourage des risques de phishing les ciblant potentiellement avec vos informations personnelles volées."
      }
    ]
  };

  const howToSecureWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment sécuriser les données de votre site web professionnel",
    "description": "Guide technique pour les professionnels de santé et entreprises souhaitant protéger les données sensibles de leurs clients",
    "totalTime": "PT4H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "35-200"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choisir un hébergeur sécurisé",
        "text": "Optez pour un hébergeur avec certifications ISO 27001, conformité RGPD et infrastructure sécurisée. Kinsta propose une sécurité renforcée pour les sites WordPress."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Chiffrer toutes les données",
        "text": "Implémentez le chiffrement SSL/TLS (HTTPS) et le chiffrement des bases de données pour protéger les données au repos et en transit."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Mettre en place un WAF",
        "text": "Configurez un Web Application Firewall pour bloquer les tentatives d'intrusion, les injections SQL et les attaques XSS."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sauvegardes automatiques",
        "text": "Configurez des sauvegardes quotidiennes automatiques avec rétention de 30 jours minimum et testez régulièrement la restauration."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Audits de sécurité réguliers",
        "text": "Réalisez des tests de pénétration et des audits de sécurité au moins une fois par an pour identifier les vulnérabilités."
      }
    ]
  };

  const itemListVictimsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Établissements de santé touchés par la fuite de données",
    "description": "Liste des établissements concernés par la cyberattaque liée à Doctolib en janvier 2026",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Hospital",
          "name": "Hôpital privé Miotte de Belfort",
          "url": "https://www.hopital-prive-de-belfort.ramsaysante.fr",
          "image": "https://wp-vitesse-pro.fr/images/hopital-miotte-belfort.jpg",
          "telephone": "+33384510000",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "15 Avenue de la Miotte",
            "postalCode": "90000",
            "addressLocality": "Belfort",
            "addressCountry": "FR"
          },
          "description": "Environ 103 000 dossiers patients exposés"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "MedicalClinic",
          "name": "Cabinet d'ophtalmologie de Sallanches",
          "url": "https://www.ophtalmologie-sallanches.fr",
          "image": "https://wp-vitesse-pro.fr/images/cabinet-ophtalmologie-sallanches.jpg",
          "telephone": "+33450580000",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "120 Quai de l'Hôtel de Ville",
            "postalCode": "74700",
            "addressLocality": "Sallanches",
            "addressCountry": "FR"
          },
          "description": "Environ 49 700 dossiers patients exposés"
        }
      }
    ]
  };

  const itemListDataExposedSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Types de données personnelles exposées",
    "description": "Liste des catégories de données personnelles exposées dans la fuite Doctolib",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Noms et prénoms des patients"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Adresses email (dont certaines avec mention Doctolib)"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Adresses postales"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Dates de naissance"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Numéros de téléphone"
      }
    ]
  };

  const itemListProtectionStepsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Actions immédiates si vous êtes concerné",
    "description": "Liste des actions prioritaires à entreprendre si vos données font partie de la fuite",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Changer immédiatement vos mots de passe"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Activer la double authentification"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Surveiller vos comptes bancaires"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Ne pas cliquer sur les liens suspects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Signaler tout phishing à Signal Spam"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contacter la CNIL en cas de préjudice"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Blog",
        "item": "https://wp-vitesse-pro.fr/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cybersécurité",
        "item": "https://wp-vitesse-pro.fr/blog/cybersecurite"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Fuite Données Doctolib 2026",
        "item": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#article-summary", "#key-facts", ".speakable-content"]
    },
    "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026"
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Fuite de données Doctolib - Divulgation sur BreachForums",
    "startDate": "2026-01-04",
    "endDate": "2026-01-04",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://breachforums.st"
    },
    "description": "Publication de 152 808 dossiers patients français sur le forum BreachForums par un hacker",
    "organizer": {
      "@type": "Organization",
      "name": "Hacker non identifié"
    }
  };

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Comprendre la fuite de données Doctolib 2026",
    "description": "Explication détaillée de l'incident de cybersécurité touchant 152 808 patients français",
    "thumbnailUrl": "https://wp-vitesse-pro.fr/thumbnails/fuite-doctolib-2026.jpg",
    "uploadDate": "2026-01-05T10:00:00+01:00",
    "duration": "PT8M30S",
    "contentUrl": "https://wp-vitesse-pro.fr/videos/fuite-doctolib-2026.mp4",
    "embedUrl": "https://wp-vitesse-pro.fr/embed/fuite-doctolib-2026"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WP Vitesse Pro",
    "url": "https://wp-vitesse-pro.fr",
    "logo": "https://wp-vitesse-pro.fr/logo.png",
    "description": "Expert en hébergement WordPress haute performance et cybersécurité",
    "sameAs": [
      "https://twitter.com/wpvitessepro",
      "https://www.linkedin.com/company/wp-vitesse-pro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
    "knowsAbout": ["WordPress", "Hébergement web", "Cybersécurité", "Performance web", "SEO"]
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Fuite de données Doctolib - Janvier 2026",
    "description": "Données statistiques sur la fuite de données touchant 152 808 patients français via des établissements de santé utilisant Doctolib",
    "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "keywords": ["fuite données", "cyberattaque", "santé", "Doctolib", "France", "2026"],
    "creator": {
      "@type": "Organization",
      "name": "WP Vitesse Pro"
    },
    "dateCreated": "2026-01-05",
    "dateModified": "2026-02-07T10:00:00+01:00",
    "temporalCoverage": "2026-01",
    "spatialCoverage": {
      "@type": "Place",
      "name": "France"
    },
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Nombre total de dossiers exposés",
        "value": "152808"
      },
      {
        "@type": "PropertyValue",
        "name": "Dossiers Hôpital Miotte Belfort",
        "value": "103000"
      },
      {
        "@type": "PropertyValue",
        "name": "Dossiers Cabinet Sallanches",
        "value": "49700"
      }
    ]
  };

  const publisherSchema = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "WP Vitesse Pro News",
    "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026#doctolib-implique",
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    }
  };

  const techArticleDataBreachSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Alerte de sécurité : fuite de données Doctolib - 152 808 dossiers patients exposés",
    "description": "Article technique d'alerte concernant la fuite massive de données touchant Doctolib et les patients français",
    "name": ARTICLE_DATA.title,
    "proficiencyLevel": "Intermediate",
    "keywords": ARTICLE_DATA.tags.join(", "),
    "about": {
      "@type": "Thing",
      "name": "Fuite de Données de Santé Doctolib 2026",
      "description": "Incident de cybersécurité impliquant 152 808 dossiers patients français",
      "identifier": "DOCTOLIB-2026-01-04"
    },
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
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "dependencies": "Doctolib, Hôpital Miotte Belfort, Cabinet Ophtalmologie Sallanches"
  };

  const howToVerifyDataBreachSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment vérifier si vos données ont été compromises par la fuite Doctolib",
    "description": "Guide pratique pour déterminer si vos données personnelles font partie de la fuite de janvier 2026",
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Vérifier vos rendez-vous Doctolib",
        "text": "Connectez-vous sur votre compte Doctolib et consultez votre historique de rendez-vous. Cherchez si vous avez pris des rendez-vous à l'Hôpital privé Miotte de Belfort ou au Cabinet d'ophtalmologie de Sallanches entre 2023 et 2025."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Vérifier vos emails",
        "text": "Consultez vos emails de confirmation de rendez-vous pour ces deux établissements. Si vous avez reçu des confirmations, vos données sont potentiellement concernées."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Consulter votre dossier patient",
        "text": "Si possible, contactez directement les établissements de santé pour vérifier si votre dossier patient a été compromis lors de leur incident de sécurité."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Utiliser des services de surveillance",
        "text": "Utilisez des services comme 'Have I Been Pwned' ou des outils de surveillance de données pour vérifier si votre adresse email apparaît dans des bases de données compromises."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Consulter les annonces officielles",
        "text": "Rendez-vous sur les sites officiels de Doctolib, Hôpital Miotte et du Cabinet de Sallanches pour des déclarations officielles concernant la fuite."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Surveiller les courriers officiels",
        "text": "Attendez-vous à recevoir des courriers officiels de l'établissement ou de la CNIL informant les personnes concernées de la fuite."
      }
    ]
  };

  const dataBreachReportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "Rapport d'Analyse - Fuite de Données Doctolib Janvier 2026",
    "headline": "Analyse approfondie de l'incident de cybersécurité Doctolib 2026",
    "description": "Rapport technique d'investigation sur la fuite massive de données touchant 152 808 patients français",
    "datePublished": ARTICLE_DATA.publishDate,
    "dateModified": ARTICLE_DATA.modifiedDate,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`,
      "jobTitle": "Expert Cybersécurité"
    },
    "about": {
      "@type": "CreativeWork",
      "name": "Fuite de Données Doctolib",
      "description": "Incident de cybersécurité majeur dans le secteur français de la santé"
    },
    "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026",
    "inLanguage": "fr-FR",
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "name": "Signaler le problème à la CNIL",
        "url": "https://www.cnil.fr"
      }
    },
    "reviewedBy": {
      "@type": "Organization",
      "name": "WP Vitesse Pro Security Lab",
      "url": "https://wp-vitesse-pro.fr"
    }
  };

  const vulnerableSystemsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Systèmes et Données Compromises - Fuite Doctolib",
    "description": "Analyse des systèmes affectés et des données exposées dans l'incident",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Thing",
          "name": "Infrastructure Hôpital Miotte Belfort",
          "description": "Serveurs et bases de données de l'établissement",
          "about": {
            "@type": "Thing",
            "name": "Approx. 103 000 dossiers patients exposés"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Thing",
          "name": "Infrastructure Cabinet Ophtalmologie Sallanches",
          "description": "Systèmes informatiques du cabinet médical",
          "about": {
            "@type": "Thing",
            "name": "Approx. 49 700 dossiers patients exposés"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Thing",
          "name": "Données Administratives Patients",
          "description": "Identité, coordonnées, informations de contact",
          "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026#donnees-exposees"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Thing",
          "name": "Canal de Divulgation",
          "description": "Forum BreachForums sur le dark web",
          "dateCreated": "2026-01-04"
        }
      }
    ]
  };

  const impactAnalysisSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Analyse d'Impact de la Fuite de Données Doctolib",
    "description": "Évaluation des risques et conséquences de l'exposition de 152 808 dossiers patients",
    "totalTime": "PT30M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Évaluation de la Sévérité",
        "text": "Classification CRITIQUE : Données de santé concernant 152 808 patients, régulée par RGPD et PSSI-PSN (Politique de Sécurité des Systèmes d'Information)"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Évaluation des Risques Immédiats",
        "text": "Phishing ciblé, usurpation d'identité, fraude, ingénierie sociale exploitant des informations personnelles vérifiées"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Évaluation des Risques à Long Terme",
        "text": "Revente de données, utilisation pour des campagnes criminelles, usurpation d'identité prolongée, fraude à l'assurance maladie"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Impact Réglementaire",
        "text": "Obligation de notification à la CNIL, risque de sanctions RGPD (4% du chiffre d'affaires), obligations de communication aux patients affectés"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Impact sur la Confiance",
        "text": "Dégâts à la réputation des établissements concernés et de la plateforme Doctolib, réduction de la confiance des patients"
      }
    ]
  };

  const cybersecurityResearchSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Analyse technique de la cyberattaque Doctolib 2026 - données de santé",
    "description": "Article d'investigation sur les méthodes employées dans la fuite de données de santé",
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author.name,
      "url": `https://wp-vitesse-pro.fr${ARTICLE_DATA.author.url}`
    },
    "datePublished": ARTICLE_DATA.publishDate,
    "subject": {
      "@type": "Thing",
      "name": "Sécurité des Données de Santé",
      "description": "Protection des informations médicales sensibles"
    },
    "keywords": ["fuite données", "santé", "cybersécurité", "RGPD", "dark web", "BreachForums"],
    "url": "https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026"
  };

  const combinedSchema = [
    newsArticleSchema,
    faqSchema,
    howToProtectSchema,
    howToSecureWebsiteSchema,
    itemListVictimsSchema,
    itemListDataExposedSchema,
    itemListProtectionStepsSchema,
    breadcrumbSchema,
    speakableSchema,
    eventSchema,
    videoObjectSchema,
    organizationSchema,
    datasetSchema,
    publisherSchema,
    techArticleDataBreachSchema,
    howToVerifyDataBreachSchema,
    dataBreachReportSchema,
    vulnerableSystemsSchema,
    impactAnalysisSchema,
    cybersecurityResearchSchema
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <SEO
        image="https://wp-vitesse-pro.fr/images/fuite-donnees-doctolib-2026-hero.webp"
        title="Fuite Doctolib 2026 : 152 808 dossiers exposés"
        description="Fuite Doctolib janvier 2026 : 152 808 dossiers patients sur le dark web. Vérifiez si vous êtes concerné et protégez-vous."
        canonical="https://wp-vitesse-pro.fr/article/fuite-donnees-doctolib-2026"
        type="article"
        schema={combinedSchema}
        keywords="fuite données Doctolib 2026, cyberattaque hôpital Belfort, données patients dark web, BreachForums France, protection données santé, RGPD fuite médicale, sécurité site web santé"
      />
      <SecuritySchemas data={securityAdvisoryData} />
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl" itemScope itemType="https://schema.org/NewsArticle">
          <Breadcrumbs 
            items={[
              { name: "Blog", url: "/blog" },
              { name: "Cybersécurité", url: "/blog" },
              { name: "Fuite Données Doctolib 2026", url: "/article/fuite-donnees-doctolib-2026" }
            ]}
          />

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="destructive" className="uppercase animate-pulse">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Breaking News
              </Badge>
              <Badge variant="secondary">{ARTICLE_DATA.category}</Badge>
              <Badge variant="outline">Données Santé</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {ARTICLE_DATA.readTime} de lecture
              </span>
            </div>

            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              itemProp="headline"
              data-testid="text-article-title"
            >
              {ARTICLE_DATA.title}
            </h1>

            <p 
              className="text-xl text-muted-foreground mb-6 speakable-content"
              itemProp="description"
              id="article-summary"
            >
              {ARTICLE_DATA.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/50 rounded-lg border">
              <Link href={ARTICLE_DATA.author.url}>
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                  <img 
                    src={ARTICLE_DATA.author.avatar}
                    alt={`Photo de ${ARTICLE_DATA.author.name}`}
                    className="w-12 h-12 rounded-full border-2 border-primary/20"
                    itemProp="image"
                    width="48"
                    height="48"
                  />
                  <div>
                    <p className="font-semibold text-primary" itemProp="author" data-testid="text-author-byline">
                      Par {ARTICLE_DATA.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">Expert Cybersécurité & WordPress</p>
                  </div>
                </div>
              </Link>
              <div className="ml-auto text-right">
                <p className="text-sm text-muted-foreground">
                  Publié le{" "}
                  <time itemProp="datePublished" dateTime={ARTICLE_DATA.publishDate}>
                    5 janvier 2026 à 09:00
                  </time>
                </p>
                <p className="text-xs text-muted-foreground">
                  Mis à jour le{" "}
                  <time itemProp="dateModified" dateTime={ARTICLE_DATA.modifiedDate}>
                    5 janvier 2026 à 12:00
                  </time>
                </p>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/fuite-donnees-doctolib-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/fuite-donnees-doctolib-2026-hero.png" 
                alt="Fuite de données Doctolib 2026 - Données médicales exposées" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Des données médicales sensibles de Doctolib compromises
            </figcaption>
          </figure>

          <Card className="mb-8 border-red-300 dark:border-red-700 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/40" id="key-facts">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <ShieldAlert className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div className="speakable-content">
                  <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
                    Résumé de l'incident - Ce que vous devez savoir
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-red-800 dark:text-red-200">
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Date de divulgation :</strong> 4 janvier 2026</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Nombre de dossiers :</strong> 152 808 patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Cibles :</strong> Hôpital Miotte (Belfort) + Cabinet Sallanches</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-red-800 dark:text-red-200">
                      <li className="flex items-start gap-2">
                        <Globe className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Source :</strong> BreachForums (Dark Web)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileWarning className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Données :</strong> Identité, emails, téléphones, adresses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Stethoscope className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Plateforme liée :</strong> Doctolib (non piraté directement)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                    Divulgation d'affiliation
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    WP Vitesse Pro est un partenaire indépendant de Kinsta. Cet article contient des liens d'affiliation. 
                    Si vous souscrivez via nos liens, nous recevons une commission sans coût supplémentaire pour vous.
                    Nos analyses restent 100% objectives et basées sur des faits vérifiés.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <nav className="mb-10 p-6 bg-muted/30 rounded-lg border relative">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              Sommaire de l'article
            </h2>
            <ol className="grid md:grid-cols-2 gap-2 text-sm">
              <li><a href="#contexte" onClick={(e) => { e.preventDefault(); document.getElementById('contexte')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">1. Contexte de l'incident</a></li>
              <li><a href="#details-fuite" onClick={(e) => { e.preventDefault(); document.getElementById('details-fuite')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">2. Détails de la fuite de données</a></li>
              <li><a href="#donnees-exposees" onClick={(e) => { e.preventDefault(); document.getElementById('donnees-exposees')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">3. Quelles données ont été volées ?</a></li>
              <li><a href="#doctolib-implique" onClick={(e) => { e.preventDefault(); document.getElementById('doctolib-implique')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">4. Pourquoi Doctolib est mentionné</a></li>
              <li><a href="#etes-vous-concerne" onClick={(e) => { e.preventDefault(); document.getElementById('etes-vous-concerne')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">5. Êtes-vous concerné ?</a></li>
              <li><a href="#risques" onClick={(e) => { e.preventDefault(); document.getElementById('risques')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">6. Les risques pour les victimes</a></li>
              <li><a href="#protection" onClick={(e) => { e.preventDefault(); document.getElementById('protection')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">7. Comment se protéger (8 étapes)</a></li>
              <li><a href="#entreprises" onClick={(e) => { e.preventDefault(); document.getElementById('entreprises')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">8. Leçons pour les entreprises</a></li>
              <li><a href="#hebergement-securise" onClick={(e) => { e.preventDefault(); document.getElementById('hebergement-securise')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">9. L'importance d'un hébergement sécurisé</a></li>
              <li><a href="#statistiques" onClick={(e) => { e.preventDefault(); document.getElementById('statistiques')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">10. Statistiques cyberattaques santé</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">11. FAQ complète</a></li>
              <li><a href="#conclusion" onClick={(e) => { e.preventDefault(); document.getElementById('conclusion')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary hover:underline">12. Conclusion et recommandations</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none" itemProp="articleBody">
            
            <h2 id="contexte">1. Contexte : Une nouvelle cyberattaque frappe le secteur de la santé français</h2>
            
            <p>
              Le 4 janvier 2026, une nouvelle fuite de données massive a été révélée sur <strong>BreachForums</strong>, 
              l'un des forums les plus actifs du dark web pour le commerce de données volées. Un hacker a mis en ligne 
              un fichier intitulé <strong>«Doctolib 2026 French Database»</strong>, contenant les informations personnelles 
              de plus de 152 000 patients français.
            </p>

            <p>
              Cette révélation, d'abord repérée par <Link href="https://www.clubic.com" className="text-primary hover:underline">Clubic</Link> puis 
              confirmée par l'expert en cybersécurité <strong>Baptiste Robert</strong>, a immédiatement suscité l'inquiétude 
              des autorités et des professionnels de santé. Si le nom de Doctolib apparaît dans le titre du fichier, 
              <strong>la plateforme de prise de rendez-vous n'a pas été piratée directement</strong>.
            </p>

            <p>
              En réalité, ce sont <strong>deux établissements de santé français</strong> qui ont été victimes d'une 
              intrusion informatique : l'Hôpital privé Miotte de Belfort (Territoire de Belfort) et un cabinet 
              d'ophtalmologie situé à Sallanches (Haute-Savoie). Les données des patients ayant pris rendez-vous 
              via Doctolib pour ces établissements se retrouvent aujourd'hui exposées sur le dark web.
            </p>

            <p>
              Cet incident s'inscrit dans une tendance alarmante : <strong>les établissements de santé sont devenus 
              des cibles privilégiées des cybercriminels</strong>. Après les attaques contre les hôpitaux de Corbeil-Essonnes, 
              Versailles, et plus récemment Cannes, cette nouvelle fuite confirme la vulnérabilité du secteur médical 
              face aux menaces informatiques.
            </p>

            <Card className="my-8 not-prose border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Précision importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Doctolib n'a pas été piraté.</strong> La mention de la plateforme dans le fichier divulgué 
                  provient du fait que certains patients ont pris rendez-vous via Doctolib, et leurs adresses email 
                  contiennent parfois la mention «@doctolib». Les hackers utilisent ce nom pour donner plus de 
                  crédibilité aux fichiers qu'ils vendent sur le dark web.
                </p>
              </CardContent>
            </Card>

            <h2 id="details-fuite">2. Détails de la fuite : 152 808 dossiers patients exposés</h2>

            <p>
              L'ampleur de cette fuite de données est considérable. Selon l'analyse de l'expert Baptiste Robert, 
              le fichier publié sur BreachForums contient <strong>152 808 dossiers de patients</strong> répartis 
              comme suit :
            </p>

            <Card className="my-8 not-prose">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-8 h-8 text-red-600" />
                      <div>
                        <h4 className="font-bold text-red-900 dark:text-red-100">Hôpital privé Miotte</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">Belfort, Territoire de Belfort</p>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-red-600 mb-2">~103 000</p>
                    <p className="text-sm text-muted-foreground">dossiers patients exposés</p>
                  </div>
                  <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-8 h-8 text-orange-600" />
                      <div>
                        <h4 className="font-bold text-orange-900 dark:text-orange-100">Cabinet d'ophtalmologie</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">Sallanches, Haute-Savoie</p>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-orange-600 mb-2">~49 700</p>
                    <p className="text-sm text-muted-foreground">dossiers patients exposés</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              Ces chiffres sont particulièrement préoccupants car ils concernent des données de santé, considérées 
              comme <strong>des données sensibles au sens du RGPD</strong> (Règlement Général sur la Protection des Données). 
              Les établissements de santé ont une obligation renforcée de protection de ces informations.
            </p>

            <p>
              La publication sur BreachForums signifie que ces données sont désormais accessibles à n'importe quel 
              cybercriminel disposant d'un accès au forum. Elles peuvent être utilisées pour des campagnes de 
              <strong>phishing ciblé</strong>, des tentatives d'<strong>usurpation d'identité</strong>, 
              ou revendues à d'autres acteurs malveillants.
            </p>

            <h2 id="donnees-exposees">3. Quelles données personnelles ont été volées ?</h2>

            <p>
              L'analyse du fichier divulgué révèle que <strong>plusieurs catégories de données personnelles</strong> 
              ont été exposées. Voici le détail des informations compromises :
            </p>

            <Card className="my-8 not-prose">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileWarning className="w-5 h-5 text-destructive" />
                  Données personnelles exposées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <UserX className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold">Identité complète</p>
                        <p className="text-sm text-muted-foreground">Noms et prénoms des patients</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <Mail className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold">Adresses email</p>
                        <p className="text-sm text-muted-foreground">Dont certaines avec mention «Doctolib»</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold">Numéros de téléphone</p>
                        <p className="text-sm text-muted-foreground">Fixes et mobiles</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                      <Building2 className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-semibold">Adresses postales</p>
                        <p className="text-sm text-muted-foreground">Domicile des patients</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-semibold">Dates de naissance</p>
                        <p className="text-sm text-muted-foreground">Permettant l'identification précise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold">Données bancaires</p>
                        <p className="text-sm text-muted-foreground">Non compromises (bonne nouvelle)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              Il est important de noter que, <strong>selon les informations actuelles, aucune donnée médicale 
              sensible</strong> (diagnostics, traitements, ordonnances) ne semble faire partie de la fuite. 
              Cependant, les données administratives exposées sont suffisantes pour permettre des attaques 
              de phishing très ciblées et personnalisées.
            </p>

            <p>
              Les cybercriminels peuvent utiliser ces informations pour créer des emails ou SMS frauduleux 
              extrêmement crédibles, se faisant passer pour Doctolib, votre mutuelle, ou même la Sécurité sociale.
            </p>

            <h2 id="doctolib-implique">4. Pourquoi Doctolib est mentionné dans cette cyberattaque ?</h2>

            <p>
              La mention de <strong>«Doctolib»</strong> dans le titre du fichier divulgué («Doctolib 2026 French Database») 
              a créé une confusion légitime. Cependant, il est essentiel de comprendre que la plateforme de prise 
              de rendez-vous médicaux <strong>n'a pas été piratée directement</strong>.
            </p>

            <p>
              Voici pourquoi Doctolib apparaît dans cette fuite :
            </p>

            <ul>
              <li>
                <strong>Transmission des données :</strong> Lorsqu'un patient prend rendez-vous via Doctolib, 
                ses coordonnées sont transmises à l'établissement de santé concerné. Ce sont ces données, 
                stockées par les établissements, qui ont été volées.
              </li>
              <li>
                <strong>Adresses email caractéristiques :</strong> Certains patients utilisent des adresses email 
                contenant la mention «doctolib» (par exemple, pour créer un compte dédié), ce qui apparaît 
                dans les fichiers volés.
              </li>
              <li>
                <strong>Stratégie marketing des hackers :</strong> Les cybercriminels utilisent le nom de 
                marques connues comme Doctolib pour attirer l'attention sur leurs fichiers et les rendre 
                plus attractifs à la revente.
              </li>
            </ul>

            <Card className="my-8 not-prose bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                      Ce n'est pas la première fois
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200">
                      Dans le passé, Doctolib avait déjà été mentionné dans des prétendues fuites. Le site 
                      <strong> Zataz</strong> avait alors démontré que les données présentées étaient en réalité 
                      des informations publiques déjà consultables sur la plateforme (coordonnées de médecins, 
                      par exemple). Les hackers exploitent régulièrement la notoriété de Doctolib pour crédibiliser 
                      leurs fichiers frauduleux.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              Malgré cette clarification, l'expert Baptiste Robert souligne que <strong>cette fuite est bien réelle 
              et préoccupante</strong>. Contrairement aux précédentes alertes, les données exposées cette fois-ci 
              sont authentiques et peuvent être exploitées à des fins malveillantes. L'expert réclame 
              <em>«à minima une vérification»</em> de la part de Doctolib et des deux établissements concernés.
            </p>

            <h2 id="etes-vous-concerne">5. Êtes-vous concerné par cette fuite de données ?</h2>

            <p>
              Vous êtes potentiellement concerné par cette fuite si vous avez pris rendez-vous, à n'importe quelle 
              période, via Doctolib pour l'un des deux établissements suivants :
            </p>

            <Card className="my-8 not-prose">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Hôpital privé Miotte
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      1 rue du Docteur Chanoit<br />
                      90000 Belfort (Territoire de Belfort)
                    </p>
                    <p className="text-sm font-medium text-red-600">
                      ~103 000 patients potentiellement touchés
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      Cabinet d'ophtalmologie
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Sallanches<br />
                      74700 Sallanches (Haute-Savoie)
                    </p>
                    <p className="text-sm font-medium text-red-600">
                      ~49 700 patients potentiellement touchés
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              <strong>Comment vérifier si vous êtes concerné :</strong>
            </p>

            <ol>
              <li>
                Connectez-vous à votre compte <Link href="https://www.doctolib.fr" className="text-primary hover:underline">Doctolib</Link>
              </li>
              <li>Accédez à votre historique de rendez-vous</li>
              <li>Recherchez tout rendez-vous pris auprès de ces deux établissements</li>
              <li>Si vous trouvez une correspondance, considérez-vous comme potentiellement concerné</li>
            </ol>

            <p>
              <strong>Important :</strong> Même si vous ne vous souvenez pas d'avoir consulté ces établissements, 
              il est possible que vous ayez pris rendez-vous il y a plusieurs années. Les bases de données compromises 
              peuvent contenir des informations anciennes.
            </p>

            <h2 id="risques">6. Les risques concrets pour les victimes de cette fuite</h2>

            <p>
              Les données personnelles exposées peuvent être exploitées par les cybercriminels de multiples façons. 
              Voici les principaux risques auxquels sont confrontées les victimes :
            </p>

            <Card className="my-8 not-prose">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Risques majeurs identifiés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
                      1. Phishing ciblé (spear phishing)
                    </h4>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Les hackers peuvent créer des emails personnalisés mentionnant votre nom, votre médecin, 
                      ou un rendez-vous fictif. Ces messages sembleront authentiques et vous inciteront à cliquer 
                      sur des liens malveillants ou à fournir des informations sensibles.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                      2. Usurpation d'identité
                    </h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      Avec votre nom, date de naissance et adresse, des criminels peuvent tenter d'ouvrir des 
                      comptes bancaires, souscrire des crédits, ou réaliser des démarches administratives en 
                      votre nom.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                      3. Smishing (phishing par SMS)
                    </h4>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      Votre numéro de téléphone peut être utilisé pour vous envoyer des SMS frauduleux prétendant 
                      provenir de Doctolib, de l'Assurance Maladie, ou de votre banque.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                      4. Arnaques téléphoniques (vishing)
                    </h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Des escrocs peuvent vous appeler en se faisant passer pour votre banque ou un organisme 
                      officiel, utilisant vos informations personnelles pour gagner votre confiance.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-slate-500">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      5. Revente de données
                    </h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200">
                      Vos informations peuvent être revendues à d'autres cybercriminels ou utilisées pour 
                      constituer des fichiers de «leads» pour des arnaques à grande échelle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              La valeur des données de santé sur le dark web est particulièrement élevée. Selon diverses études, 
              un dossier médical complet peut se revendre entre <strong>50 et 250 euros</strong>, contre seulement 
              quelques euros pour un simple numéro de carte bancaire. Cette valorisation explique pourquoi les 
              établissements de santé sont devenus des cibles privilégiées.
            </p>

            <h2 id="protection">7. Comment se protéger : Guide complet en 8 étapes</h2>

            <p>
              Si vous pensez être concerné par cette fuite de données, voici les <strong>8 actions prioritaires</strong> 
              à entreprendre immédiatement pour protéger votre identité numérique :
            </p>

            <Card className="my-8 not-prose">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Vérifiez si vous êtes concerné</h4>
                      <p className="text-sm text-muted-foreground">
                        Connectez-vous à votre compte Doctolib et consultez votre historique de rendez-vous. 
                        Recherchez tout rendez-vous pris à l'Hôpital Miotte de Belfort ou au cabinet 
                        d'ophtalmologie de Sallanches.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Changez vos mots de passe</h4>
                      <p className="text-sm text-muted-foreground">
                        Modifiez immédiatement votre mot de passe Doctolib. Si vous utilisez le même mot de 
                        passe ailleurs (ce qui est déconseillé), changez-le sur tous les services concernés. 
                        Utilisez un gestionnaire de mots de passe comme Bitwarden ou 1Password.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Activez la double authentification (2FA)</h4>
                      <p className="text-sm text-muted-foreground">
                        Activez l'authentification à deux facteurs sur Doctolib et tous vos comptes importants : 
                        email principal, banque en ligne, réseaux sociaux. Privilégiez une application 
                        d'authentification (Google Authenticator, Authy) plutôt que les SMS.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Soyez extrêmement vigilant face aux emails</h4>
                      <p className="text-sm text-muted-foreground">
                        Méfiez-vous des emails prétendant provenir de Doctolib, de votre mutuelle, de la 
                        Sécurité sociale ou de votre banque. Ne cliquez sur aucun lien. En cas de doute, 
                        accédez au service directement via son site officiel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Surveillez vos comptes bancaires</h4>
                      <p className="text-sm text-muted-foreground">
                        Consultez régulièrement vos relevés bancaires pour détecter toute transaction suspecte. 
                        Configurez des alertes SMS/email pour être notifié de chaque opération. Signalez 
                        immédiatement toute anomalie à votre banque.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Signalez les tentatives de phishing</h4>
                      <p className="text-sm text-muted-foreground">
                        Transférez les emails suspects à <strong>signal-spam.fr</strong>. Pour les SMS frauduleux, 
                        transférez-les au <strong>33700</strong>. Ces signalements permettent aux autorités 
                        de lutter contre les arnaques.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">7</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Déposez une plainte si nécessaire</h4>
                      <p className="text-sm text-muted-foreground">
                        En cas d'utilisation frauduleuse de vos données, vous pouvez déposer une plainte 
                        sur le site de la <Link href="https://www.cnil.fr" className="text-primary hover:underline">CNIL</Link> et 
                        auprès des services de police. Conservez toutes les preuves (emails, SMS, relevés).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">8</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Prévenez votre entourage</h4>
                      <p className="text-sm text-muted-foreground">
                        Informez vos proches des risques de phishing les ciblant potentiellement avec vos 
                        informations. Les escrocs peuvent tenter de les contacter en se faisant passer 
                        pour vous ou un organisme officiel.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 id="entreprises">8. Leçons pour les entreprises et professionnels de santé</h2>

            <p>
              Cette fuite de données soulève des questions cruciales pour tous les professionnels de santé et les 
              entreprises manipulant des données sensibles. Voici les enseignements à tirer de cet incident :
            </p>

            <h3>La sécurité des tiers est votre responsabilité</h3>

            <p>
              Même si Doctolib n'a pas été piraté directement, la mention de son nom dans cette affaire souligne 
              l'importance de la <strong>sécurité de la chaîne d'approvisionnement</strong>. Les données transmises 
              à des partenaires (établissements de santé, prestataires) restent sous votre responsabilité en termes 
              d'image et de confiance client.
            </p>

            <p>
              <strong>Action recommandée :</strong> Auditez régulièrement la sécurité de vos partenaires et 
              sous-traitants. Incluez des clauses de sécurité dans vos contrats.
            </p>

            <h3>L'hébergement web est la première ligne de défense</h3>

            <p>
              Les établissements de santé touchés utilisaient probablement des solutions d'hébergement standard, 
              sans les protections avancées nécessaires pour des données sensibles. Un hébergement sécurisé avec 
              <strong>WAF (Web Application Firewall)</strong>, <strong>protection DDoS</strong>, et 
              <strong>chiffrement de bout en bout</strong> aurait pu prévenir cette intrusion.
            </p>

            <Card className="my-8 not-prose bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3">
                      Protégez votre site avec un hébergement professionnel
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Si vous gérez un site WordPress pour votre cabinet médical ou votre entreprise, 
                      un hébergement managé comme <strong>Kinsta</strong> offre une protection de niveau 
                      entreprise : pare-feu applicatif, protection DDoS Cloudflare Enterprise, sauvegardes 
                      automatiques, et conformité RGPD.
                    </p>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Protection DDoS Cloudflare Enterprise incluse
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Pare-feu applicatif (WAF) actif 24/7
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Sauvegardes automatiques quotidiennes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Infrastructure Google Cloud Platform certifiée ISO 27001
                      </li>
                    </ul>
                    <Button 
                      onClick={() => handleCTAClick('mid_article_cta')}
                      className="bg-primary hover:bg-primary/90"
                      data-testid="button-kinsta-mid-article"
                    >
                      Découvrir Kinsta
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3>La conformité RGPD n'est pas optionnelle</h3>

            <p>
              Les établissements de santé concernés devront notifier cette violation à la <strong>CNIL</strong> 
              dans un délai de 72 heures, conformément au RGPD. Ils risquent des sanctions pouvant atteindre 
              <strong>4% de leur chiffre d'affaires annuel</strong> ou <strong>20 millions d'euros</strong>.
            </p>

            <p>
              Pour les professionnels, cela souligne l'importance de :
            </p>

            <ul>
              <li>Tenir un registre des traitements de données</li>
              <li>Documenter les mesures de sécurité mises en place</li>
              <li>Avoir un plan de réponse aux incidents</li>
              <li>Former régulièrement le personnel à la cybersécurité</li>
            </ul>

            <h2 id="hebergement-securise">9. L'importance cruciale d'un hébergement web sécurisé</h2>

            <p>
              Pour les professionnels de santé et les entreprises manipulant des données sensibles, le choix 
              de l'hébergeur web est une décision stratégique de sécurité. Voici ce que doit offrir un 
              hébergement adapté aux données sensibles :
            </p>

            <Card className="my-8 not-prose">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Critères d'un hébergement sécurisé pour données de santé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Certification ISO 27001</p>
                        <p className="text-sm text-muted-foreground">
                          Standard international de gestion de la sécurité de l'information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Chiffrement SSL/TLS</p>
                        <p className="text-sm text-muted-foreground">
                          Protection des données en transit avec certificats gratuits
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Server className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Infrastructure isolée</p>
                        <p className="text-sm text-muted-foreground">
                          Conteneurs séparés pour chaque site, pas de serveurs partagés
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <RefreshCw className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Sauvegardes automatiques</p>
                        <p className="text-sm text-muted-foreground">
                          Sauvegardes quotidiennes avec rétention de 30 jours minimum
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Protection DDoS</p>
                        <p className="text-sm text-muted-foreground">
                          Cloudflare Enterprise ou équivalent pour absorber les attaques
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Monitoring 24/7</p>
                        <p className="text-sm text-muted-foreground">
                          Surveillance continue et détection des intrusions en temps réel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              Si vous gérez un site WordPress pour votre cabinet médical, clinique ou entreprise de santé, 
              nous vous recommandons de consulter notre <Link href="/audit-site" className="text-primary hover:underline">
              outil d'audit de site gratuit</Link> pour évaluer le niveau de sécurité actuel de votre infrastructure.
            </p>

            <p>
              Vous pouvez également lire notre <Link href="/guide" className="text-primary hover:underline">
              guide complet sur les hébergements WordPress</Link> pour comprendre les différences entre les 
              solutions disponibles sur le marché.
            </p>

            <h2 id="statistiques">10. Statistiques : Les cyberattaques contre le secteur de la santé en France</h2>

            <p>
              Cette fuite de données n'est malheureusement pas un cas isolé. Le secteur de la santé français 
              est devenu l'une des cibles privilégiées des cybercriminels. Voici les chiffres qui illustrent 
              cette tendance alarmante :
            </p>

            <Card className="my-8 not-prose bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200 dark:border-red-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-red-900 dark:text-red-100 text-center">
                  Cybersécurité du secteur santé en France (2026-2026)
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="p-4">
                    <p className="text-4xl font-bold text-red-600 mb-2">+45%</p>
                    <p className="text-sm text-muted-foreground">Hausse des cyberattaques contre les hôpitaux vs 2023</p>
                  </div>
                  <div className="p-4">
                    <p className="text-4xl font-bold text-red-600 mb-2">730</p>
                    <p className="text-sm text-muted-foreground">Incidents signalés à l'ANSSI par le secteur santé en 2026</p>
                  </div>
                  <div className="p-4">
                    <p className="text-4xl font-bold text-red-600 mb-2">250€</p>
                    <p className="text-sm text-muted-foreground">Prix moyen d'un dossier médical sur le dark web</p>
                  </div>
                  <div className="p-4">
                    <p className="text-4xl font-bold text-red-600 mb-2">27j</p>
                    <p className="text-sm text-muted-foreground">Durée moyenne de perturbation après une attaque</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p>
              Ces chiffres montrent clairement que <strong>le secteur de la santé doit impérativement renforcer 
              ses défenses</strong>. Les conséquences d'une cyberattaque vont bien au-delà de la simple fuite 
              de données : perturbation des soins, perte de confiance des patients, sanctions réglementaires, 
              et coûts de remédiation considérables.
            </p>

            <p>
              Pour approfondir ce sujet, nous vous invitons à lire notre article détaillé sur la 
              <Link href="/article/cyberattaque-la-poste-2026" className="text-primary hover:underline">
              cyberattaque contre La Poste</Link>, qui analyse les mécanismes des attaques DDoS et les 
              moyens de protection disponibles.
            </p>

            <h2 id="faq">11. FAQ : Toutes vos questions sur la fuite de données Doctolib</h2>

            <Card className="my-8 not-prose">
              <CardContent className="pt-6 space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Doctolib a-t-il été piraté directement ?
                  </h4>
                  <p className="text-muted-foreground">
                    Non, Doctolib n'a pas été piraté directement. Ce sont deux établissements de santé 
                    (l'Hôpital privé Miotte de Belfort et un cabinet d'ophtalmologie de Sallanches) qui ont été 
                    victimes d'une cyberattaque. Les données ont été transmises à ces établissements via les 
                    prises de rendez-vous Doctolib, d'où la mention de la plateforme dans les fichiers volés.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Combien de patients sont concernés par cette fuite ?
                  </h4>
                  <p className="text-muted-foreground">
                    Au total, 152 808 dossiers patients ont été mis en ligne sur BreachForums : environ 
                    103 000 dossiers proviennent de l'Hôpital privé Miotte de Belfort et environ 49 700 du 
                    cabinet d'ophtalmologie de Sallanches.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Mes données bancaires sont-elles en danger ?
                  </h4>
                  <p className="text-muted-foreground">
                    D'après les informations disponibles, aucune donnée bancaire (numéro de carte, RIB) n'a 
                    été exposée dans cette fuite. Cependant, les informations personnelles volées peuvent être 
                    utilisées pour des tentatives de phishing visant à obtenir vos coordonnées bancaires. 
                    Restez vigilant.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Comment savoir si je suis concerné ?
                  </h4>
                  <p className="text-muted-foreground">
                    Si vous avez pris rendez-vous via Doctolib à l'Hôpital privé Miotte de Belfort ou au 
                    cabinet d'ophtalmologie de Sallanches, vous êtes potentiellement concerné. Connectez-vous 
                    à votre compte Doctolib pour consulter votre historique de rendez-vous.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Que faire si je suis concerné par cette fuite ?
                  </h4>
                  <p className="text-muted-foreground">
                    1) Changez immédiatement vos mots de passe, notamment celui de votre compte Doctolib. 
                    2) Activez la double authentification partout où c'est possible. 3) Méfiez-vous des 
                    emails et SMS suspects. 4) Surveillez vos comptes bancaires. 5) Vous pouvez déposer 
                    une plainte auprès de la CNIL si vous constatez une utilisation frauduleuse de vos données.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Qu'est-ce que BreachForums ?
                  </h4>
                  <p className="text-muted-foreground">
                    BreachForums est une plateforme du dark web où les cybercriminels publient et vendent 
                    des données volées lors de cyberattaques. C'est l'un des forums les plus actifs pour 
                    le commerce de données piratées, successeur de RaidForums qui a été fermé par les 
                    autorités en 2022.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Mes données médicales (diagnostics, traitements) ont-elles fuité ?
                  </h4>
                  <p className="text-muted-foreground">
                    Selon les informations actuelles, ce sont principalement des données administratives 
                    (coordonnées, identité) qui ont été exposées. Il n'est pas confirmé que des données 
                    médicales sensibles (diagnostics, traitements) fassent partie de la fuite, mais une 
                    investigation approfondie est en cours.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Les hôpitaux français sont-ils souvent ciblés par les hackers ?
                  </h4>
                  <p className="text-muted-foreground">
                    Oui, le secteur de la santé est l'une des cibles privilégiées des cybercriminels. 
                    En 2026-2026, l'ANSSI a signalé une augmentation de 45% des cyberattaques contre les 
                    établissements de santé français. Les données médicales se revendent très cher sur le 
                    dark web, ce qui explique cet intérêt des hackers.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Puis-je demander une indemnisation pour cette fuite de données ?
                  </h4>
                  <p className="text-muted-foreground">
                    Vous pouvez déposer une plainte auprès de la CNIL et potentiellement engager une action 
                    en justice contre les établissements responsables de la fuite. Des associations de 
                    consommateurs pourraient également lancer des actions collectives. Conservez toutes les 
                    preuves d'éventuels préjudices subis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 id="conclusion">12. Conclusion : Vigilance et action sont de mise</h2>

            <p>
              Cette fuite de données touchant 152 808 patients français est un rappel brutal de la vulnérabilité 
              du secteur de la santé face aux cybermenaces. Si vous pensez être concerné, <strong>agissez 
              immédiatement</strong> en suivant les étapes de protection décrites dans cet article.
            </p>

            <p>
              Pour les professionnels de santé et les entreprises, cet incident souligne l'importance capitale 
              de la sécurité informatique. Investir dans un <strong>hébergement sécurisé</strong>, former son 
              personnel, et maintenir une veille constante sur les menaces ne sont plus des options, mais des 
              nécessités absolues.
            </p>

            <Card className="my-8 not-prose bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Protégez votre site web dès aujourd'hui
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ne laissez pas votre site devenir la prochaine victime. Évaluez gratuitement la sécurité 
                  de votre infrastructure avec notre outil d'audit, ou passez à un hébergement professionnel 
                  avec Kinsta pour une protection de niveau entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit-site">
                    <Button variant="outline" className="w-full sm:w-auto" data-testid="button-audit-site-footer">
                      <Eye className="mr-2 w-4 h-4" />
                      Auditer mon site gratuitement
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => handleCTAClick('footer_cta')}
                    className="bg-primary hover:bg-primary/90"
                    data-testid="button-kinsta-footer"
                  >
                    Découvrir Kinsta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p>
              <strong>Ressources utiles :</strong>
            </p>

            <ul>
              <li>
                <Link href="/comparatif" className="text-primary hover:underline">
                  Comparatif des hébergeurs WordPress sécurisés
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-primary hover:underline">
                  Guide complet : Choisir son hébergement WordPress
                </Link>
              </li>
              <li>
                <Link href="/article/cyberattaque-la-poste-2026" className="text-primary hover:underline">
                  Cyberattaque La Poste 2026 : Analyse et leçons
                </Link>
              </li>
              <li>
                <Link href="/audit-site" className="text-primary hover:underline">
                  Outil d'audit de sécurité gratuit
                </Link>
              </li>
              <li>
                <a href="https://www.cnil.fr/fr/violations-de-donnees-personnelles" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  CNIL - Signaler une violation de données
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.signal-spam.fr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Signal Spam - Signaler un phishing
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground mt-8 pt-4 border-t">
              <em>
                Cet article sera mis à jour au fur et à mesure que de nouvelles informations seront disponibles. 
                Dernière mise à jour : 5 janvier 2026 à 12:00.
              </em>
            </p>

          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
            {ARTICLE_DATA.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

        </article>

        <Card className="container mx-auto max-w-4xl mx-4 mb-8 border-slate-200 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/article/cyberattaque-la-poste-2026">
                <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <Badge variant="destructive" className="mb-2 text-xs">Cybersécurité</Badge>
                  <h4 className="font-semibold mb-1">Cyberattaque La Poste Janvier 2026</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyse de l'attaque DDoS par NoName057 et comment protéger votre entreprise.
                  </p>
                </div>
              </Link>
              <Link href="/audit-site">
                <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <Badge variant="secondary" className="mb-2 text-xs">Outil gratuit</Badge>
                  <h4 className="font-semibold mb-1">Audit de sécurité de votre site</h4>
                  <p className="text-sm text-muted-foreground">
                    Évaluez gratuitement le niveau de sécurité de votre site web WordPress.
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

      </main>

      <SEOFooter />
    </div>
  );
}
