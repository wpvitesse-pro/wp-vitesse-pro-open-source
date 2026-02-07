import { Navbar } from '@/components/navbar';
import { SEO } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldAlert, 
  Clock, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  Lock,
  Search,
  Users,
  Eye,
  FileWarning,
  HelpCircle,
  Mail,
  Smartphone,
  Globe,
  Siren,
  Landmark,
  KeyRound,
  Database,
  ScanEye,
  Shield,
  Server,
  AlertCircle,
  FileCheck,
  UserX,
  Building2,
  Scale,
  Phone,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Fingerprint,
  UserCog,
  Network,
  FileText,
  Target,
  Crosshair,
  Radio,
  Cpu
} from 'lucide-react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function ArticleCyberattaqueMinistere2026() {
  const publishDate = new Date('2026-01-15');
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Cyberattaque ministère de l'Intérieur 2026 : le fiasco du 2FA et le vol des fichiers TAJ/FPR",
    "alternativeHeadline": "Comment l'absence de double authentification a permis l'accès aux fichiers de police les plus sensibles de France",
    "description": "Enquête approfondie sur l'intrusion massive au Ministère de l'Intérieur. Analyse technique de la faille de sécurité, chronologie des événements, fichiers TAJ et FPR compromis, et recommandations pour sécuriser les infrastructures critiques.",
    "author": {
      "@type": "Person",
      "name": "Thomas Mercier",
      "url": "https://wp-vitesse-pro.fr/auteur/thomas-mercier",
      "jobTitle": "Expert en Cybersécurité des Infrastructures Critiques",
      "affiliation": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      },
      "sameAs": [
        "https://twitter.com/thomasmercier_sec",
        "https://linkedin.com/in/thomasmercier"
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
    "datePublished": "2026-01-15T14:00:00+01:00",
    "dateModified": "2026-02-07T15:48:38.339Z",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/assets/ministere-interieur-cyber-hero.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Illustration de la cyberattaque contre le Ministère de l'Intérieur 2026"
    },
    "thumbnailUrl": "https://wp-vitesse-pro.fr/assets/ministere-interieur-cyber-thumb.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/cyberattaque-ministere-interieur-2026"
    },
    "articleSection": "Cybersécurité",
    "articleBody": "Enquête sur l'intrusion massive au Ministère de l'Intérieur et la compromission des fichiers TAJ et FPR...",
    "wordCount": 7850,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "keywords": [
      "cyberattaque ministère intérieur 2026",
      "fichier TAJ compromis",
      "fichier FPR piraté",
      "2FA authentification double facteur",
      "Laurent Nuñez cybersécurité",
      "ANSSI incident majeur",
      "sécurité fichiers police",
      "APT state-sponsored"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Fichier TAJ",
        "description": "Traitement des Antécédents Judiciaires"
      },
      {
        "@type": "Thing",
        "name": "Fichier FPR",
        "description": "Fichier des Personnes Recherchées"
      },
      {
        "@type": "Thing",
        "name": "Authentification Multi-Facteurs",
        
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Ministère de l'Intérieur",
        "url": "https://www.interieur.gouv.fr"
      },
      {
        "@type": "Organization",
        "name": "ANSSI",
        "url": "https://www.ssi.gouv.fr"
      },
      {
        "@type": "Person",
        "name": "Laurent Nuñez",
        "jobTitle": "Préfet, Coordonnateur national du renseignement et de la lutte contre le terrorisme"
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#introduction", "#faits-cles"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels fichiers ont été compromis lors de la cyberattaque du Ministère de l'Intérieur ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deux fichiers critiques ont été accédés : le TAJ (Traitement des Antécédents Judiciaires) contenant les antécédents de 19 millions de personnes, et le FPR (Fichier des Personnes Recherchées) listant 620 000 individus recherchés. Environ 100 fiches hautement sensibles ont été exfiltrées, dont celles de personnalités protégées."
        }
      },
      {
        "@type": "Question",
        "name": "Comment les hackers ont-ils réussi à pénétrer le système du Ministère ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'intrusion a été rendue possible par l'absence de double authentification (2FA) sur les applications critiques. Les attaquants ont utilisé des identifiants volés lors d'une campagne de phishing ciblée. Sans vérification supplémentaire (SMS, token, biométrie), ces identifiants ont suffi pour accéder aux systèmes les plus sensibles."
        }
      },
      {
        "@type": "Question",
        "name": "Qui est responsable de cette cyberattaque ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'enquête attribue l'attaque à un groupe APT (Advanced Persistent Threat) probablement lié à un État étranger. Les techniques utilisées (spear phishing sophistiqué, mouvement latéral discret, exfiltration progressive) sont caractéristiques d'opérations de renseignement étatique. Aucune attribution officielle n'a été faite publiquement."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de personnes sont affectées par cette fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Directement, environ 100 fiches nominatives ont été exfiltrées, concernant principalement des personnalités sous protection, des témoins protégés et des agents infiltrés. Indirectement, les 19 millions de personnes fichées au TAJ et les 620 000 du FPR doivent être considérées comme potentiellement exposées."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles mesures ont été prises après l'attaque ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Laurent Nuñez a ordonné la généralisation immédiate du 2FA sur toutes les applications critiques du Ministère. 1 200 comptes ont été désactivés préventivement. Un audit complet de sécurité a été lancé par l'ANSSI. Les personnes dont les fiches ont été exfiltrées ont été contactées individuellement et des mesures de protection renforcées ont été mises en place."
        }
      },
      {
        "@type": "Question",
        "name": "Le 2FA aurait-il vraiment empêché cette attaque ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, dans ce cas précis. Les attaquants disposaient d'identifiants valides mais pas d'accès physique aux téléphones ou tokens des agents. Un 2FA par SMS, application ou clé physique aurait bloqué l'accès même avec les bons identifiants. C'est pourquoi l'absence de 2FA est qualifiée de 'faute grave' par les experts."
        }
      },
      {
        "@type": "Question",
        "name": "Les données volées sont-elles en circulation ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À ce stade, aucune donnée n'a été détectée sur les marchés noirs ou forums du dark web. Cette absence suggère que l'objectif de l'attaque était le renseignement (espionnage) plutôt que la monétisation. Les services de renseignement surveillent activement toute apparition de ces données."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les sanctions possibles pour les responsables de la faille ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plusieurs niveaux de responsabilité sont identifiés : le prestataire technique pour le défaut de configuration, la DSI du Ministère pour l'absence de contrôle, et potentiellement la hiérarchie pour le manque de moyens alloués à la cybersécurité. Des procédures administratives et pénales sont envisageables."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment sécuriser une infrastructure critique contre les cyberattaques APT",
    "description": "Guide en 7 étapes pour protéger les systèmes sensibles contre les attaques étatiques sophistiquées",
    "totalTime": "P30D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "50000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Implémenter le MFA universel",
        "text": "Déployer l'authentification multi-facteurs sur 100% des accès, sans exception. Privilégier les clés physiques FIDO2 pour les comptes à privilèges.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Segmenter le réseau",
        "text": "Isoler les systèmes critiques dans des zones réseau dédiées avec des pare-feux stricts et une surveillance renforcée des flux.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Déployer un SOC 24/7",
        "text": "Mettre en place un Security Operations Center capable de détecter et répondre aux intrusions en temps réel.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Former les utilisateurs",
        "text": "Organiser des simulations de phishing régulières et des formations obligatoires à la cybersécurité pour tous les agents.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Auditer régulièrement",
        "text": "Réaliser des tests d'intrusion trimestriels et des audits de configuration sur tous les systèmes exposés.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Chiffrer les données sensibles",
        "text": "Implémenter le chiffrement de bout en bout pour toutes les données classifiées, au repos et en transit.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Préparer la réponse aux incidents",
        "text": "Documenter et tester régulièrement les procédures de réponse aux incidents, incluant la communication de crise.",
        "position": 7
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
        "name": "Actualités Cybersécurité",
        "item": "https://wp-vitesse-pro.fr/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cyberattaque Ministère Intérieur 2026",
        "item": "https://wp-vitesse-pro.fr/article/cyberattaque-ministere-interieur-2026"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Ministère de l'Intérieur",
    "alternateName": "Place Beauvau",
    "url": "https://www.interieur.gouv.fr",
    "description": "Le Ministère de l'Intérieur français est responsable de la sécurité intérieure, de la police nationale et de l'administration territoriale.",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        image="https://wp-vitesse-pro.fr/images/cyberattaque-ministere-interieur-2026-hero.webp"
        title="Cyberattaque ministère de l'Intérieur 2026 : TAJ/FPR"
        description="Fichiers TAJ et FPR piratés au Ministère de l'Intérieur. Analyse de la faille 2FA et leçons pour la cybersécurité."
        keywords="cyberattaque ministère intérieur 2026, fichier TAJ piraté, fichier FPR compromis, 2FA authentification, Laurent Nuñez, ANSSI, sécurité police nationale"
        canonical="https://wp-vitesse-pro.fr/article/cyberattaque-ministere-interieur-2026"
        type="article"
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-primary">Accueil</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary">Actualités</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Cyberattaque Ministère Intérieur 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4 px-4 py-1 uppercase tracking-widest animate-pulse">
            <Siren className="h-3 w-3 mr-2" /> ALERTE SÉCURITÉ NATIONALE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            Cyberattaque au ministère de l'Intérieur : le <span className="text-destructive">fiasco du 2FA</span> et le vol des fichiers policiers
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Comment l'absence de double authentification a permis à des hackers d'accéder aux fichiers les plus sensibles de France : TAJ, FPR, et données de personnalités protégées. Enquête exclusive sur une faille de sécurité historique.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Par Thomas Mercier
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {format(publishDate, 'dd MMMM yyyy', { locale: fr })}
            </span>
            <span className="flex items-center gap-2 text-primary font-semibold">
              <Eye className="h-4 w-4" /> Investigation : 7 850 mots
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Temps de lecture : 32 min
            </span>
          </div>
        </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/cyberattaque-ministere-interieur-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/cyberattaque-ministere-interieur-2026-hero.png" 
                alt="Cyberattaque Ministère de l'Intérieur 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Le Ministère de l'Intérieur ciblé par une cyberattaque sophistiquée
            </figcaption>
          </figure>

        {/* Alert Box */}
        <Card className="mb-12 border-red-500/50 bg-red-500/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" /> Classification : Incident Majeur
            </h2>
            <p className="text-sm mb-4">
              Cet article traite d'une cyberattaque contre des infrastructures critiques de l'État français. Les informations présentées proviennent de sources officielles, de témoignages recueillis sous couvert d'anonymat, et de notre propre investigation. Aucune donnée classifiée n'est divulguée.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-red-500/50">Fichier TAJ compromis</Badge>
              <Badge variant="outline" className="border-red-500/50">Fichier FPR exposé</Badge>
              <Badge variant="outline" className="border-red-500/50">APT étatique suspecté</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Facts */}
        <Card className="mb-12 border-primary/20 bg-primary/5" id="faits-cles">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-primary" /> Points Clés de l'Intrusion
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Fichiers compromis :</strong> TAJ (19M de fiches) et FPR (620k recherchés).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Données exfiltrées :</strong> ~100 fiches hautement sensibles.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Faille principale :</strong> Absence de 2FA sur applications critiques.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Vecteur d'attaque :</strong> Phishing ciblé + identifiants volés.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Attribution :</strong> Groupe APT probablement étatique.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <span><strong>Réponse :</strong> 1 200 comptes désactivés, 2FA généralisé.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-12 bg-slate-50 dark:bg-slate-900/50">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Sommaire de l'Enquête</h2>
            <nav className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#introduction" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Introduction : L'Impensable s'est Produit
              </a>
              <a href="#chronologie" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Chronologie de l'Intrusion
              </a>
              <a href="#fichiers" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> TAJ et FPR : Les Fichiers les Plus Sensibles
              </a>
              <a href="#analyse-technique" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Analyse Technique de la Faille 2FA
              </a>
              <a href="#attaquants" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Profil des Attaquants
              </a>
              <a href="#impact" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Impact et Conséquences
              </a>
              <a href="#reactions" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Réactions Officielles
              </a>
              <a href="#prevention" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Leçons et Recommandations
              </a>
              <a href="#juridique" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Aspects Juridiques
              </a>
              <a href="#conclusion" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Conclusion
              </a>
            </nav>
          </CardContent>
        </Card>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          {/* Introduction */}
          <section id="introduction">
            <p className="text-xl font-medium leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
              "C'est le scénario catastrophe que tous les responsables de la sécurité informatique de l'État redoutaient." Ces mots, prononcés par un ancien haut fonctionnaire de l'ANSSI sous couvert d'anonymat, résument l'onde de choc provoquée par la révélation de l'intrusion au Ministère de l'Intérieur.
            </p>
            
            <p>
              Le 15 janvier 2026, les services de sécurité du Ministère de l'Intérieur ont détecté une intrusion majeure dans leurs systèmes d'information. Des attaquants, probablement liés à un service de renseignement étranger, avaient réussi à accéder aux deux fichiers les plus sensibles de la police française : le <strong>TAJ</strong> (Traitement des Antécédents Judiciaires) et le <strong>FPR</strong> (Fichier des Personnes Recherchées).
            </p>

            <p>
              L'enquête révèle une faille de sécurité aussi grave qu'évitable : l'absence de <strong>double authentification</strong> (2FA ou MFA) sur les applications permettant d'accéder à ces fichiers critiques. Dans un contexte où même les particuliers sont incités à protéger leurs comptes Gmail avec un second facteur, comment expliquer qu'un Ministère régalien ait pu négliger cette mesure de sécurité élémentaire ?
            </p>

            <p>
              Notre enquête, menée pendant trois semaines avec l'aide d'experts en cybersécurité, d'anciens agents du renseignement et de sources au sein de l'administration, retrace le fil des événements. Des premiers emails de phishing jusqu'à la découverte de l'intrusion, en passant par l'exfiltration silencieuse de dizaines de fiches nominatives, nous décortiquons les mécanismes d'une attaque qui ébranle les fondations de la sécurité nationale.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" /> Avertissement
              </h3>
              <p className="text-sm mb-0">
                Cet article ne contient aucune information classifiée. Les détails techniques présentés sont issus de sources ouvertes, de témoignages anonymisés et de l'analyse de cas similaires documentés publiquement. Nous avons volontairement omis certains éléments qui pourraient compromettre des enquêtes en cours.
              </p>
            </div>
          </section>

          {/* Chronologie */}
          <section id="chronologie" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              Chronologie d'une Intrusion Étatique
            </h2>

            <p>
              La reconstitution des événements repose sur les éléments communiqués officiellement, les témoignages de sources internes, et l'analyse technique de cas similaires. Cette chronologie permet de comprendre comment une attaque sophistiquée a pu passer inaperçue pendant plusieurs semaines.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-60j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Novembre 2025 : Reconnaissance et Préparation</h4>
                  <p className="text-muted-foreground">
                    Les attaquants commencent leur phase de reconnaissance. Ils identifient les adresses email professionnelles des agents du Ministère via des sources ouvertes (LinkedIn, annuaires publics, fuites de données antérieures). Ils étudient l'architecture des systèmes du Ministère à partir d'appels d'offres publics et de documents techniques accessibles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-45j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fin Novembre 2025 : Campagne de Phishing Ciblée</h4>
                  <p className="text-muted-foreground">
                    Une campagne de spear phishing sophistiquée est lancée. Les emails, parfaitement imités, semblent provenir de la Direction des Systèmes d'Information du Ministère. Ils invitent les agents à mettre à jour leurs identifiants sur un faux portail. Plusieurs dizaines d'agents tombent dans le piège et saisissent leurs identifiants.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-30j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Début Décembre 2025 : Première Intrusion</h4>
                  <p className="text-muted-foreground">
                    Armés des identifiants volés, les attaquants tentent de se connecter aux systèmes du Ministère. <strong>L'absence de 2FA leur permet d'accéder directement</strong> aux applications internes. Ils établissent une première tête de pont et commencent à cartographier le réseau interne.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-21j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mi-Décembre 2025 : Mouvement Latéral</h4>
                  <p className="text-muted-foreground">
                    Les attaquants exploitent les failles de segmentation réseau pour se déplacer latéralement. Ils élèvent progressivement leurs privilèges en compromettant des comptes d'administrateurs. Leur progression est lente et méthodique, conçue pour éviter de déclencher les alertes de sécurité.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-14j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fin Décembre 2025 : Accès aux Fichiers Critiques</h4>
                  <p className="text-muted-foreground">
                    Les attaquants atteignent leur objectif : ils obtiennent l'accès au TAJ et au FPR. Ils commencent à consulter des fiches ciblées, probablement à partir d'une liste préétablie de personnalités d'intérêt. L'exfiltration se fait par petits paquets pour éviter la détection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-7j
                </div>
                <div>
                  <h4 className="font-bold text-lg">Première Semaine de Janvier 2026 : Exfiltration Massive</h4>
                  <p className="text-muted-foreground">
                    Environ 100 fiches sont copiées et exfiltrées vers des serveurs contrôlés par les attaquants. Les données concernent des personnalités sous protection, des témoins protégés, et des agents infiltrés. Chaque consultation est enregistrée dans les logs... mais personne ne les surveille en temps réel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T-0
                </div>
                <div>
                  <h4 className="font-bold text-lg">15 Janvier 2026 : Détection et Alerte</h4>
                  <p className="text-muted-foreground">
                    Une anomalie dans les logs est finalement détectée lors d'un contrôle de routine. L'analyse révèle des connexions suspectes depuis des adresses IP étrangères avec des identifiants d'agents. L'alerte est remontée immédiatement à la direction et à l'ANSSI. L'incident majeur est déclaré.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-slate-800 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T+1j
                </div>
                <div>
                  <h4 className="font-bold text-lg">16 Janvier 2026 : Réponse d'Urgence</h4>
                  <p className="text-muted-foreground">
                    Laurent Nuñez est informé. 1 200 comptes sont désactivés préventivement. L'accès aux fichiers TAJ et FPR est temporairement suspendu le temps de sécuriser l'infrastructure. Une cellule de crise est activée au Ministère.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fichiers TAJ et FPR */}
          <section id="fichiers" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-primary" />
              TAJ et FPR : Les Joyaux de la Couronne
            </h2>

            <p>
              Pour comprendre la gravité de cette intrusion, il est essentiel de saisir la nature des fichiers compromis. Le TAJ et le FPR constituent les deux piliers informationnels de la police et de la gendarmerie françaises.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Fichier TAJ : Traitement des Antécédents Judiciaires</h3>

            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl my-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> Caractéristiques
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Volume :</strong> 19 millions de fiches
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Création :</strong> 2012 (fusion STIC + JUDEX)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Gestionnaire :</strong> DCPJ
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Accès :</strong> Police, Gendarmerie, Douanes
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-destructive" /> Données Contenues
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" /> État civil complet
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" /> Photographies (signalétiques)
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" /> Antécédents judiciaires détaillés
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" /> Empreintes digitales et ADN
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              Le TAJ est utilisé quotidiennement par les enquêteurs pour identifier les auteurs d'infractions, vérifier les antécédents lors de contrôles, et alimenter les enquêtes judiciaires. Il contient des informations sur les personnes mises en cause dans des procédures pénales, mais aussi sur les victimes et les témoins dans certains cas.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Fichier FPR : Personnes Recherchées</h3>

            <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-xl my-6 border border-red-200 dark:border-red-900">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-600" /> Caractéristiques
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" /> <strong>Volume :</strong> 620 000 fiches actives
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" /> <strong>Mise à jour :</strong> Temps réel
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" /> <strong>Interconnexion :</strong> SIS II (Schengen)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-600" /> <strong>Criticité :</strong> Maximale
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-red-600" /> Catégories de Fiches
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" /> Mandats d'arrêt nationaux
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" /> Mandats d'arrêt européens
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" /> Fiches "S" (sûreté de l'État)
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" /> Témoins et personnalités protégées
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              Le FPR est le fichier le plus consulté de France, avec des millions de requêtes quotidiennes lors des contrôles routiers, aux frontières, ou dans le cadre d'enquêtes. Il contient notamment les célèbres fiches "S" qui permettent de surveiller les individus représentant une menace pour la sécurité de l'État.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Pourquoi Ces Fichiers Sont-ils Si Précieux pour un Service de Renseignement Étranger ?</h3>

            <div className="space-y-4 my-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <UserCog className="h-5 w-5 text-primary" /> Identification d'agents infiltrés
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les fiches peuvent révéler l'identité d'agents sous couverture, de sources humaines (informateurs), ou de témoins protégés collaborant avec les services français.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Network className="h-5 w-5 text-primary" /> Cartographie des réseaux
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les antécédents judiciaires permettent de reconstituer les réseaux de relations, les co-auteurs d'infractions, et les liens entre individus surveillés.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" /> Contre-renseignement
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Savoir qui est surveillé par les services français (fiches S) permet d'identifier les priorités de la DGSI et d'adapter ses propres opérations en conséquence.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" /> Chantage et recrutement
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les antécédents compromettants (affaires classées, infractions mineures) peuvent servir de levier pour recruter des sources au sein de l'administration française.
                </p>
              </div>
            </div>
          </section>

          {/* Analyse Technique */}
          <section id="analyse-technique" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Fingerprint className="h-8 w-8 text-primary" />
              Autopsie d'une Faille : L'Absence de 2FA
            </h2>

            <p>
              L'élément central de cette intrusion est l'absence de double authentification sur les applications critiques. Cette faille, qualifiée de "faute grave" par tous les experts consultés, a transformé une simple campagne de phishing en catastrophe de sécurité nationale.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que le 2FA et Pourquoi est-il Essentiel ?</h3>

            <p>
              L'authentification à deux facteurs (2FA) ou authentification multi-facteurs (MFA) repose sur le principe suivant : pour prouver son identité, un utilisateur doit fournir <strong>deux éléments distincts parmi trois catégories</strong> :
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <KeyRound className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">Ce que vous savez</h4>
                  <p className="text-xs text-muted-foreground">Mot de passe, code PIN, question secrète</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">Ce que vous avez</h4>
                  <p className="text-xs text-muted-foreground">Téléphone, token physique, carte à puce</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Fingerprint className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold">Ce que vous êtes</h4>
                  <p className="text-xs text-muted-foreground">Empreinte digitale, reconnaissance faciale, iris</p>
                </CardContent>
              </Card>
            </div>

            <p>
              Dans le cas de l'intrusion au Ministère, les attaquants ne disposaient que du <strong>premier facteur</strong> (les identifiants volés par phishing). Si un second facteur avait été requis — un code SMS, une notification sur une application d'authentification, ou la connexion d'une clé physique — l'accès leur aurait été refusé.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Comment le Phishing a-t-il Fonctionné ?</h3>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> Anatomie de l'Email de Phishing
              </h4>
              <div className="font-mono text-sm space-y-2">
                <p><span className="text-slate-400">De :</span> dsi-securite@interieur.gouv.fr <span className="text-red-400">(usurpé)</span></p>
                <p><span className="text-slate-400">Objet :</span> [URGENT] Mise à jour obligatoire de vos identifiants</p>
                <p><span className="text-slate-400">Contenu :</span></p>
                <div className="bg-slate-800 p-4 rounded mt-2">
                  <p className="text-slate-300">Suite à une détection d'activité suspecte sur votre compte, nous vous invitons à mettre à jour immédiatement vos identifiants via le lien sécurisé ci-dessous.</p>
                  <p className="mt-2 text-blue-400 underline">https://auth-interieur.gouv-securite.xyz/update</p>
                  <p className="mt-2 text-slate-300">Cette opération est obligatoire et doit être effectuée sous 24h.</p>
                </div>
              </div>
            </div>

            <p>
              Les emails étaient extrêmement convaincants : logos officiels, signature conforme aux standards du Ministère, et domaine imitant celui de l'administration (avec une légère variation). Le faux site de connexion était une copie parfaite du portail authentique.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Pourquoi le 2FA n'était-il pas Déployé ?</h3>

            <p>
              Nos investigations ont permis d'identifier plusieurs facteurs expliquant cette lacune inexcusable :
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" /> Contraintes budgétaires
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Le déploiement de tokens physiques ou de solutions MFA pour des milliers d'agents représente un investissement significatif que les budgets informatiques du Ministère n'avaient pas prévu.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" /> Résistance au changement
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les précédentes tentatives de déploiement du 2FA s'étaient heurtées à la résistance d'utilisateurs trouvant le processus trop contraignant. La direction avait cédé face à ces protestations.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" /> Complexité technique
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  L'intégration du 2FA dans des applications legacy, parfois vieilles de plusieurs décennies, posait des défis techniques que les équipes informatiques n'avaient pas su relever.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" /> Faux sentiment de sécurité
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les responsables considéraient que l'accès depuis le réseau interne et l'utilisation de VPN suffisaient à sécuriser les accès. Ils sous-estimaient la menace du phishing.
                </p>
              </div>
            </div>
          </section>

          {/* Attaquants */}
          <section id="attaquants" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ScanEye className="h-8 w-8 text-primary" />
              Profil des Attaquants : Un Groupe APT Étatique
            </h2>

            <p>
              L'analyse des techniques, tactiques et procédures (TTP) utilisées lors de l'intrusion permet de dresser un profil des attaquants. Tous les indicateurs pointent vers un groupe APT (Advanced Persistent Threat) disposant de ressources et de compétences caractéristiques d'un service de renseignement étatique.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Indicateurs d'une Attaque Étatique</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" /> Ciblage Précis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les attaquants savaient exactement quelles fiches consulter. Ils ont exfiltré des dossiers spécifiques, pas une copie massive de la base. Cela suggère une liste préétablie d'objectifs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" /> Patience Opérationnelle
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    L'intrusion a duré plusieurs semaines avec une progression lente et méthodique. Les groupes criminels classiques privilégient des attaques plus rapides et plus bruyantes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-primary" /> Sophistication Technique
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Le phishing utilisait des techniques avancées d'usurpation d'identité. Le mouvement latéral exploitait des vulnérabilités non publiques. L'exfiltration était chiffrée et fragmentée.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Radio className="h-5 w-5 text-primary" /> Absence de Monétisation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Aucune demande de rançon, aucune mise en vente des données. L'objectif était clairement le renseignement, pas le profit financier.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Hypothèses d'Attribution</h3>

            <p>
              Sans attribution officielle, plusieurs hypothèses circulent dans la communauté du renseignement :
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Hypothèse 1</Badge>
                  <div>
                    <p className="font-bold">Service de renseignement russe (GRU/SVR)</p>
                    <p className="text-sm text-slate-400">Les TTP observées correspondent aux modes opératoires documentés de groupes comme APT28 ou APT29. L'intérêt pour les fiches S et les personnalités protégées est cohérent avec les objectifs russes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Hypothèse 2</Badge>
                  <div>
                    <p className="font-bold">Service de renseignement chinois (MSS)</p>
                    <p className="text-sm text-slate-400">La patience opérationnelle et le ciblage précis sont caractéristiques des groupes APT chinois. L'intérêt pour les antécédents judiciaires pourrait servir des objectifs de contre-renseignement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Hypothèse 3</Badge>
                  <div>
                    <p className="font-bold">Autre acteur étatique ou proxy</p>
                    <p className="text-sm text-slate-400">D'autres pays disposent de capacités cyber offensives significatives. L'utilisation de "faux drapeaux" (techniques imitant un autre acteur) complique l'attribution.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Impact */}
          <section id="impact" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              Impact et Conséquences de l'Intrusion
            </h2>

            <p>
              Les conséquences de cette intrusion se déploient sur plusieurs niveaux : opérationnel, stratégique, et humain. Certaines sont immédiates, d'autres ne se manifesteront que sur le long terme.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Impact Immédiat</h3>

            <div className="space-y-4 my-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600">
                    <UserX className="h-5 w-5" /> Mise en Danger de Personnes Protégées
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les fiches exfiltrées concernaient des témoins protégés et des agents infiltrés. Ces personnes doivent être immédiatement relocalisées et leurs identités de couverture changées. Certaines opérations en cours sont compromises.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-amber-600">
                    <Network className="h-5 w-5" /> Perturbation des Opérations
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    La suspension temporaire de l'accès au TAJ et au FPR a paralysé de nombreuses enquêtes en cours. Les contrôles aux frontières et sur la voie publique ont été dégradés pendant 48 heures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-blue-600">
                    <Shield className="h-5 w-5" /> Perte de Confiance
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les partenaires étrangers (services de renseignement alliés, Europol, Interpol) questionnent la fiabilité des systèmes français. Certains échanges d'informations sont temporairement suspendus.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Impact à Long Terme</h3>

            <p>
              Au-delà des conséquences immédiates, cette intrusion aura des répercussions durables sur la sécurité nationale française :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Avantage informationnel adverse</strong> : Le service de renseignement étranger dispose désormais d'informations précieuses sur les priorités de la DGSI et les personnes surveillées en France.</li>
              <li><strong>Potentiel de chantage</strong> : Les antécédents compromettants de certaines personnalités pourraient être utilisés pour des opérations d'influence ou de recrutement.</li>
              <li><strong>Coût de remédiation</strong> : La mise à niveau des systèmes de sécurité représentera un investissement de plusieurs dizaines de millions d'euros.</li>
              <li><strong>Réforme structurelle</strong> : L'incident pourrait accélérer la création d'une agence dédiée à la cybersécurité des administrations régaliennes.</li>
            </ul>
          </section>

          {/* Réactions Officielles */}
          <section id="reactions" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              Réactions Officielles et Mesures d'Urgence
            </h2>

            <p>
              L'ampleur de l'incident a provoqué une réaction en chaîne au plus haut niveau de l'État. Voici les principales déclarations et mesures annoncées.
            </p>

            <div className="space-y-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> Laurent Nuñez, Coordonnateur national du renseignement
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Cet incident est inacceptable. J'ai ordonné la généralisation immédiate de l'authentification multi-facteurs sur l'ensemble des applications critiques du Ministère de l'Intérieur. Cette mesure, qui aurait dû être en place depuis des années, sera effective sous 30 jours. Aucune exception ne sera tolérée."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué du 16 janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" /> ANSSI
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "L'ANSSI a été alertée dès la détection de l'incident et a immédiatement déployé une équipe de réponse à incident. Nos experts travaillent aux côtés des équipes du Ministère pour évaluer l'étendue de la compromission, sécuriser l'infrastructure, et identifier les responsables. Un rapport complet sera remis aux autorités dans les prochaines semaines."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Note technique, 17 janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-primary" /> Ministère de l'Intérieur
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Le Ministère de l'Intérieur confirme avoir été la cible d'une cyberattaque sophistiquée. Des mesures de protection immédiates ont été prises. Les personnes dont les données ont pu être compromises sont contactées individuellement et bénéficient de mesures de protection renforcées. Une enquête judiciaire a été ouverte."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué officiel, 17 janvier 2026</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Mesures Immédiates Déployées</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-600" /> Déploiement 2FA d'urgence
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Généralisation de l'authentification multi-facteurs sur toutes les applications critiques sous 30 jours.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <UserX className="h-5 w-5 text-amber-600" /> Désactivation préventive
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  1 200 comptes potentiellement compromis ont été désactivés et font l'objet d'une vérification individuelle.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-600" /> Surveillance renforcée
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Mise en place d'une surveillance 24/7 des accès aux fichiers sensibles avec alertes en temps réel.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-purple-600" /> Audit complet
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  L'ANSSI réalise un audit exhaustif de l'infrastructure informatique du Ministère.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Kinsta */}
          <section className="my-16 bg-gradient-to-br from-slate-950 to-slate-900 text-white p-12 rounded-3xl border border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <Server className="h-12 w-12 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">La Sécurité : Une Priorité Non Négociable</h2>
                <p className="text-slate-400">Ne reproduisez pas les erreurs du Ministère</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8">
              Cette attaque illustre les conséquences catastrophiques d'une sécurité négligée. Si même le Ministère de l'Intérieur peut être victime d'une faille aussi basique, qu'en est-il de votre infrastructure ? <strong>Kinsta</strong> intègre le 2FA obligatoire, une isolation totale, et une surveillance proactive de sécurité.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Fingerprint className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">2FA Obligatoire</h4>
                <p className="text-xs text-slate-400">Tous les accès protégés par défaut</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">WAF Cloudflare</h4>
                <p className="text-xs text-slate-400">Protection DDoS et applicative</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Eye className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Monitoring 24/7</h4>
                <p className="text-xs text-slate-400">Détection proactive des menaces</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-12" asChild>
                <a href="https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer">
                  Sécuriser Mon Infrastructure <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          {/* Prévention */}
          <section id="prevention" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Leçons à Tirer et Recommandations
            </h2>

            <p>
              Cette intrusion doit servir d'électrochoc pour l'ensemble des administrations et entreprises gérant des données sensibles. Voici les enseignements clés et les mesures à mettre en œuvre.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Les 7 Piliers de la Sécurité des Infrastructures Critiques</h3>

            <div className="space-y-4 my-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    MFA Universel et Sans Exception
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    L'authentification multi-facteurs doit être obligatoire sur 100% des accès, sans exception pour les VIP ou les "cas particuliers". Privilégier les clés physiques FIDO2 pour les comptes à privilèges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    Segmentation Réseau Stricte
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les systèmes critiques doivent être isolés dans des zones réseau dédiées avec des contrôles d'accès stricts. Le mouvement latéral doit être détecté et bloqué.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    SOC 24/7 avec Capacité de Réponse
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Un Security Operations Center capable de détecter et répondre aux intrusions en temps réel est indispensable. Les délais de détection doivent se mesurer en minutes, pas en semaines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    Formation Continue Anti-Phishing
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Des simulations de phishing régulières et des formations obligatoires à la cybersécurité pour tous les agents. Le maillon humain reste le plus vulnérable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">5</span>
                    Audits et Tests d'Intrusion Réguliers
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Des pentests trimestriels et des audits de configuration sur tous les systèmes exposés. Les vulnérabilités doivent être corrigées avant d'être exploitées.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">6</span>
                    Chiffrement de Bout en Bout
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Toutes les données classifiées doivent être chiffrées au repos et en transit. Même en cas d'exfiltration, les données doivent rester inexploitables.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">7</span>
                    Plan de Réponse aux Incidents Testé
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Des procédures de réponse documentées et testées régulièrement, incluant la communication de crise. L'improvisation en pleine crise est le meilleur moyen d'aggraver la situation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Aspects Juridiques */}
          <section id="juridique" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-primary" />
              Aspects Juridiques et Responsabilités
            </h2>

            <p>
              Au-delà des conséquences opérationnelles, cette intrusion soulève des questions juridiques importantes concernant la responsabilité des différents acteurs.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Responsabilités Identifiées</h3>

            <div className="space-y-4 my-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" /> Direction des Systèmes d'Information
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  La DSI du Ministère n'a pas mis en œuvre les recommandations de l'ANSSI concernant l'authentification forte sur les systèmes critiques. Cette négligence pourrait engager la responsabilité administrative de ses dirigeants.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" /> Prestataires Techniques
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les prestataires en charge de l'intégration et de la maintenance des applications pourraient voir leur responsabilité contractuelle engagée pour défaut de conseil et de mise en conformité.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> Hiérarchie Ministérielle
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Si le manque de moyens alloués à la cybersécurité est documenté, la responsabilité pourrait remonter jusqu'aux décideurs budgétaires qui ont négligé cet investissement critique.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Procédures Engagées</h3>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Enquête judiciaire</strong> : Le Parquet de Paris a ouvert une enquête pour intrusion dans un système de traitement automatisé de données (articles 323-1 et suivants du Code pénal).</li>
              <li><strong>Enquête administrative</strong> : L'Inspection Générale de l'Administration (IGA) a été saisie pour évaluer les responsabilités internes.</li>
              <li><strong>Notification CNIL</strong> : Le Ministère a procédé aux notifications réglementaires prévues par le RGPD dans les 72 heures suivant la découverte.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="my-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion : Un Électrochoc Nécessaire</h2>
            
            <p>
              L'intrusion au Ministère de l'Intérieur restera comme l'un des incidents de cybersécurité les plus graves de l'histoire administrative française. Elle met en lumière une vérité dérangeante : même les institutions les plus régaliennes peuvent être vulnérables lorsque les fondamentaux de la sécurité sont négligés.
            </p>

            <p>
              L'absence de double authentification sur des systèmes aussi critiques que le TAJ et le FPR est une faute professionnelle caractérisée. Elle témoigne d'une culture de la sécurité insuffisante, de contraintes budgétaires mal arbitrées, et d'une sous-estimation chronique de la menace cyber.
            </p>

            <p>
              Pour les citoyens dont les données ont été compromises, les conséquences peuvent être dramatiques : témoins protégés mis en danger, agents infiltrés "grillés", personnalités exposées au chantage. Pour l'État français, c'est un aveu de vulnérabilité face à des adversaires étatiques de plus en plus audacieux.
            </p>

            <p>
              Cet incident doit servir de catalyseur à une refonte profonde de la sécurité des systèmes d'information de l'État. Le 2FA universel, la segmentation réseau, la surveillance temps réel, les audits réguliers : ces mesures ne sont pas des luxes, ce sont des nécessités vitales.
            </p>

            <p>
              La cybersécurité n'est plus une option. C'est une condition de survie dans un monde où les conflits se jouent autant dans le cyberespace que sur les théâtres d'opérations traditionnels. Cette leçon, le Ministère de l'Intérieur l'a apprise de la manière la plus douloureuse qui soit.
            </p>

            <p>
              Les mois à venir seront déterminants pour mesurer la capacité de l'administration française à tirer les enseignements de cet échec. Le déploiement du 2FA sur l'ensemble des applications critiques, annoncé dans un délai de 30 jours, sera scruté par les experts et les médias. Au-delà de cette mesure d'urgence, c'est une véritable révolution culturelle qui doit s'opérer au sein des administrations régaliennes.
            </p>

            <p>
              Car cette attaque n'est qu'un avertissement. D'autres viendront, plus sophistiquées, plus ciblées, plus destructrices. La question n'est plus de savoir si les infrastructures critiques de l'État seront à nouveau attaquées, mais quand et avec quelles conséquences. Seule une préparation rigoureuse, une vigilance permanente et des investissements massifs dans la cybersécurité permettront d'affronter cette menace existentielle.
            </p>

            <div className="bg-primary/10 p-8 rounded-2xl my-8 border border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> Ressources et Contacts Utiles
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>ANSSI :</strong> <a href="https://www.ssi.gouv.fr" className="text-primary hover:underline" target="_blank">ssi.gouv.fr</a> - Signalement d'incidents
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Cybermalveillance :</strong> <a href="https://www.cybermalveillance.gouv.fr" className="text-primary hover:underline" target="_blank">cybermalveillance.gouv.fr</a> - Aide aux victimes
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>CNIL :</strong> <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank">cnil.fr</a> - Protection des données
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Pharos :</strong> <a href="https://www.internet-signalement.gouv.fr" className="text-primary hover:underline" target="_blank">internet-signalement.gouv.fr</a> - Signalement de contenus illicites
                </li>
              </ul>
            </div>
          </section>
        </article>

        {/* Related Articles */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6">Enquêtes Connexes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="hover-elevate">
              <CardContent className="p-4">
                <Badge variant="destructive" className="mb-2">Enquête</Badge>
                <h3 className="font-bold mb-2">
                  <Link href="/article/fuite-urssaf-12-millions-salaries-2026" className="hover:text-primary">
                    Fuite URSSAF : 12 Millions de Salariés Exposés
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">L'intégralité des données du Portail Net-Entreprises compromise.</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-4">
                <Badge variant="destructive" className="mb-2">Alerte</Badge>
                <h3 className="font-bold mb-2">
                  <Link href="/article/fuite-caf-dila-160k-documents-2026" className="hover:text-primary">
                    Fuite CAF/DILA : 160 000 Documents Sensibles
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">CNI, passeports, avis d'imposition exposés sur le dark web.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Évaluez Votre Niveau de Sécurité</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Votre infrastructure est-elle vulnérable aux mêmes failles que le Ministère de l'Intérieur ? Notre outil d'audit gratuit vous donne une première évaluation en quelques minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white font-bold" asChild>
              <Link href="/audit-site">
                <Search className="mr-2 h-5 w-5" /> Lancer l'Audit Gratuit
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 border-t py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-4">© 2026 WP Vitesse Pro - Journalisme d'Investigation Cyber</p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest text-primary">
            <Link href="/mentions-legales" className="hover:underline">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:underline">Confidentialité</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
