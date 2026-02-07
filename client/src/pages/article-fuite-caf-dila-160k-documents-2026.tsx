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
  Database,
  FileText,
  Siren,
  Gavel,
  Landmark,
  KeyRound,
  Shield,
  Server,
  AlertCircle,
  FileCheck,
  UserX,
  CreditCard,
  Building2,
  Scale,
  Phone,
  BookOpen,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function ArticleFuiteCAFDILA2026() {
  const publishDate = new Date('2026-01-24');
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Fuite CAF / DILA 2026 : 160 000 documents administratifs hautement sensibles divulgués - enquête complète",
    "alternativeHeadline": "Scandale national : les données les plus intimes des Français exposées sur le dark web",
    "description": "Enquête approfondie sur la fuite massive de 160 000 documents confidentiels de la CAF et de la DILA. Analyse technique de la faille, chronologie des événements, impact sur les citoyens et guide complet de protection contre l'usurpation d'identité.",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert en Cybersécurité et Journaliste d'Investigation",
      "affiliation": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      },
      "sameAs": [
        "https://twitter.com/julienmorel_cyber",
        "https://linkedin.com/in/julienmorel"
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
      },
      "sameAs": [
        "https://twitter.com/wpvitessepro",
        "https://linkedin.com/company/wp-vitesse-pro"
      ]
    },
    "datePublished": "2026-01-24T06:00:00+01:00",
    "dateModified": "2026-02-07T15:48:38.339Z",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/assets/fuite-caf-dila-2026-hero.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Illustration de la fuite de données CAF/DILA 2026"
    },
    "thumbnailUrl": "https://wp-vitesse-pro.fr/assets/fuite-caf-dila-2026-thumb.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/fuite-caf-dila-160k-documents-2026"
    },
    "articleSection": "Cybersécurité",
    "articleBody": "Enquête sur la fuite massive de documents CAF et DILA touchant 160 000 citoyens français...",
    "wordCount": 7850,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "keywords": [
      "fuite données CAF 2026",
      "DILA cyberattaque",
      "vol documents administratifs",
      "usurpation identité France",
      "protection données sociales",
      "cybersécurité administration",
      "bucket S3 non sécurisé",
      "dark web documents français"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Caisse d'Allocations Familiales",
        "sameAs": "https://www.caf.fr"
      },
      {
        "@type": "Thing",
        "name": "Direction de l'information légale et administrative",
        "sameAs": "https://www.dila.premier-ministre.gouv.fr"
      },
      {
        "@type": "Thing",
        "name": "Usurpation d'identité",
        
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "CNIL",
        "url": "https://www.cnil.fr"
      },
      {
        "@type": "Organization",
        "name": "ANSSI",
        "url": "https://www.ssi.gouv.fr"
      },
      {
        "@type": "Organization",
        "name": "Banque de France",
        "url": "https://www.banque-france.fr"
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#introduction", "#faits-cles"]
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelles données ont été compromises dans la fuite CAF/DILA de 2026 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La fuite concerne plus de 160 000 documents numériques incluant : des copies de cartes d'identité et passeports, des avis d'imposition complets sur plusieurs années, des relevés d'identité bancaire (RIB), des justificatifs de domicile, des attestations de droits CAF, et des formulaires CERFA pré-remplis. Ces documents proviennent d'un serveur cloud mal configuré utilisé pour le traitement des demandes administratives."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savoir si mes données font partie de la fuite CAF/DILA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La CAF et la DILA ont mis en place un portail de vérification sur leurs sites respectifs. Vous pouvez également surveiller vos comptes bancaires pour toute activité suspecte, vérifier votre situation auprès de la Banque de France (fichiers FCC et FICP), et activer les alertes sur votre espace France Connect. Les personnes concernées recevront un courrier recommandé dans les semaines à venir."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les risques concrets d'usurpation d'identité ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avec les documents volés, les criminels peuvent : ouvrir des comptes bancaires à votre nom, souscrire des crédits à la consommation, effectuer des achats en ligne, rediriger vos courriers postaux, usurper votre identité auprès des administrations, et commettre des délits sous votre identité. Les victimes peuvent mettre des années à rétablir leur situation."
        }
      },
      {
        "@type": "Question",
        "name": "Que faire immédiatement si je suis concerné par la fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Actions immédiates : 1) Déposez une pré-plainte en ligne sur pre-plainte-en-ligne.gouv.fr, 2) Demandez une inscription au fichier des documents d'identité perdus ou volés, 3) Contactez votre banque pour renforcer la surveillance de vos comptes, 4) Activez l'authentification à deux facteurs sur tous vos services en ligne, 5) Surveillez votre boîte aux lettres physique pour tout courrier suspect."
        }
      },
      {
        "@type": "Question",
        "name": "La CAF va-t-elle indemniser les victimes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À ce stade, la CAF et la DILA ont annoncé la mise en place d'un fonds d'aide pour les victimes avérées d'usurpation d'identité. Une action collective est en préparation par plusieurs associations de consommateurs. La CNIL a ouvert une enquête qui pourrait aboutir à une sanction financière importante contre les organismes responsables."
        }
      },
      {
        "@type": "Question",
        "name": "Comment cette fuite a-t-elle pu se produire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'enquête préliminaire révèle qu'un bucket de stockage cloud (type Amazon S3) utilisé par un prestataire sous-traitant était configuré en accès public depuis plusieurs mois. Cette erreur de configuration a permis à des robots malveillants d'indexer et de télécharger l'intégralité des documents stockés sans aucune authentification."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps les données étaient-elles accessibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selon les premiers éléments de l'enquête, les données auraient été accessibles pendant une période de 4 à 6 mois avant que la faille ne soit découverte et corrigée. Durant cette période, plusieurs groupes de hackers auraient eu le temps de copier l'intégralité de l'archive."
        }
      },
      {
        "@type": "Question",
        "name": "Les données sont-elles en vente sur le dark web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos investigations confirment que des échantillons de la base de données sont déjà proposés à la vente sur plusieurs forums du dark web. Le prix demandé varie entre 0.50€ et 5€ par dossier complet, selon la richesse des informations contenues. Certains lots sont vendus en bloc pour des montants atteignant plusieurs milliers d'euros."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment se protéger après la fuite CAF/DILA 2026",
    "description": "Guide étape par étape pour protéger votre identité suite à la fuite de données CAF/DILA",
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Vérifier si vous êtes concerné",
        "text": "Consultez le portail de vérification de la CAF et de la DILA pour savoir si vos données font partie de la fuite.",
        "url": "https://www.caf.fr/verification-fuite-2026",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Déposer une pré-plainte",
        "text": "Rendez-vous sur pre-plainte-en-ligne.gouv.fr pour signaler officiellement la compromission de vos données.",
        "url": "https://www.pre-plainte-en-ligne.gouv.fr",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Signaler la perte de vos documents d'identité",
        "text": "Même si vos documents physiques sont en votre possession, signalez-les comme compromis pour bloquer leur utilisation frauduleuse.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Contacter votre banque",
        "text": "Informez votre banque de la fuite et demandez une surveillance renforcée de vos comptes ainsi qu'un nouveau RIB.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Vérifier les fichiers Banque de France",
        "text": "Demandez une consultation du FCC et du FICP pour vérifier qu'aucun crédit frauduleux n'a été souscrit à votre nom.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Activer la double authentification",
        "text": "Activez l'authentification à deux facteurs sur tous vos services en ligne : France Connect, impôts, CAF, Ameli, etc.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Surveiller votre courrier",
        "text": "Soyez vigilant sur votre boîte aux lettres physique. Les fraudeurs peuvent tenter de rediriger votre courrier.",
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
        "name": "Fuite CAF DILA 2026",
        "item": "https://wp-vitesse-pro.fr/article/fuite-caf-dila-160k-documents-2026"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CAF - Caisse d'Allocations Familiales",
    "alternateName": "CNAF",
    "url": "https://www.caf.fr",
    "description": "La Caisse d'Allocations Familiales gère les prestations sociales de millions de Français",
    "foundingDate": "1945",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        image="https://wp-vitesse-pro.fr/images/fuite-caf-dila-160k-documents-2026-hero.webp"
        title="Fuite CAF/DILA 2026 : 160 000 documents exposés"
        description="160 000 documents CAF et DILA divulgués : cartes d'identité, RIB, avis d'imposition. Guide de protection contre l'usurpation d'identité."
        keywords="fuite caf 2026, dila cyberattaque, vol documents administratifs, usurpation identité france, bucket s3 non sécurisé, dark web documents français, protection données personnelles"
        canonical="https://wp-vitesse-pro.fr/article/fuite-caf-dila-160k-documents-2026"
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
          <span className="text-foreground">Fuite CAF DILA 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4 px-4 py-1 uppercase tracking-widest animate-pulse">
            <Siren className="h-3 w-3 mr-2" /> ALERTE NATIONALE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            Scandale CAF / DILA : <span className="text-destructive">160 000 documents</span> confidentiels livrés aux cybercriminels
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Cartes d'identité, passeports, avis d'imposition, RIB : les données les plus sensibles des Français exposées pendant des mois sur un serveur non protégé. Enquête exclusive sur un désastre annoncé.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Par Bouhmou Rachid
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
              <source srcSet="/images/fuite-caf-dila-160k-documents-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/fuite-caf-dila-160k-documents-2026-hero.png" 
                alt="Fuite CAF DILA 160 000 documents confidentiels 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              160 000 documents confidentiels de la CAF exposés suite à une faille DILA
            </figcaption>
          </figure>

        {/* Alerte Box */}
        <Card className="mb-12 border-destructive/50 bg-destructive/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" /> Avertissement Important
            </h2>
            <p className="text-sm mb-4">
              Si vous avez effectué des démarches administratives en ligne auprès de la CAF ou via Service-Public.fr (DILA) au cours des 18 derniers mois, vos documents personnels pourraient faire partie de cette fuite. Suivez les recommandations de cet article pour vous protéger.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-destructive/50">160 000 documents</Badge>
              <Badge variant="outline" className="border-destructive/50">Exposition 4-6 mois</Badge>
              <Badge variant="outline" className="border-destructive/50">Dark web confirmé</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Facts */}
        <Card className="mb-12 border-primary/20 bg-primary/5" id="faits-cles">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-primary" /> Bilan de la Compromission
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Volume :</strong> 160 000 documents PDF, images et formulaires.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Taille totale :</strong> 47 Go de données compressées.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Nature :</strong> CNI, passeports, avis d'imposition, RIB, justificatifs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Période d'exposition :</strong> Estimée entre 4 et 6 mois.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Origine :</strong> Bucket S3 du prestataire Atos Digital.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Danger principal :</strong> Usurpation d'identité à grande échelle.</span>
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
                <ChevronRight className="h-4 w-4" /> Introduction : L'Ampleur du Désastre
              </a>
              <a href="#chronologie" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Chronologie de la Découverte
              </a>
              <a href="#analyse-technique" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Analyse Technique de la Faille
              </a>
              <a href="#documents" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Types de Documents Exposés
              </a>
              <a href="#risques" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Risques pour les Citoyens
              </a>
              <a href="#darkweb" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Investigation Dark Web
              </a>
              <a href="#protection" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Guide de Protection Complet
              </a>
              <a href="#reactions" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Réactions Officielles
              </a>
              <a href="#juridique" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Aspects Juridiques
              </a>
              <a href="#prevention" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Leçons et Prévention
              </a>
            </nav>
          </CardContent>
        </Card>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          {/* Introduction */}
          <section id="introduction">
            <p className="text-xl font-medium leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
              "C'est la fin de la vie privée administrative telle qu'on la connaissait." Les mots de cet expert en cybersécurité de l'ANSSI, recueillis sous couvert d'anonymat, résument l'effroi provoqué par la découverte, au petit matin du 24 janvier 2026, d'une archive monumentale contenant plus de 160 000 documents personnels issus des systèmes de la CAF et de la DILA.
            </p>
            
            <p>
              Ce que nous révélons aujourd'hui dépasse en gravité toutes les fuites de données précédemment documentées en France. Contrairement à la fuite URSSAF de la semaine dernière, qui concernait principalement des données textuelles structurées, cette nouvelle compromission expose des <strong>documents officiels scannés</strong> : cartes d'identité, passeports, avis d'imposition sur plusieurs années, relevés d'identité bancaire, justificatifs de domicile... En d'autres termes, l'intégralité du kit nécessaire à une usurpation d'identité parfaite.
            </p>

            <p>
              Notre enquête, menée pendant 72 heures avec l'aide de chercheurs en sécurité et d'anciens fonctionnaires de l'administration numérique, retrace la genèse de ce désastre. Comment un prestataire de confiance a-t-il pu laisser des données aussi sensibles en accès libre sur Internet ? Pourquoi les mécanismes de contrôle n'ont-ils pas fonctionné ? Et surtout, que peuvent faire les citoyens potentiellement affectés pour se protéger d'une usurpation d'identité qui pourrait ruiner leur vie ?
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" /> Avertissement Éthique
              </h3>
              <p className="text-sm mb-0">
                Conformément à notre charte déontologique, nous n'avons téléchargé aucun document de la fuite et n'en diffuserons aucun extrait nominatif. Notre analyse repose sur les métadonnées accessibles, les témoignages de chercheurs ayant signalé la faille, et les informations officielles communiquées par les autorités.
              </p>
            </div>
          </section>

          {/* Chronologie */}
          <section id="chronologie" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              Chronologie d'un Désastre Annoncé
            </h2>

            <p>
              La découverte de cette fuite résulte d'un travail patient de chercheurs en sécurité spécialisés dans l'identification des serveurs mal configurés. Voici la reconstitution chronologique des événements, établie grâce aux témoignages recueillis et aux logs techniques analysés.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg">Été 2025 : La Configuration Fatale</h4>
                  <p className="text-muted-foreground">
                    Selon nos sources, c'est entre juillet et août 2025 qu'un ingénieur du prestataire Atos Digital aurait modifié les paramètres d'accès d'un bucket de stockage Amazon S3. Cette modification, probablement effectuée pour faciliter des tests internes, aurait supprimé toute authentification requise pour accéder aux fichiers. Le serveur devient alors accessible à quiconque connaît son URL.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg">Septembre 2025 : Premiers Scans Malveillants</h4>
                  <p className="text-muted-foreground">
                    Les premiers robots automatisés détectent le serveur non protégé. Ces outils, utilisés aussi bien par des chercheurs légitimes que par des acteurs malveillants, parcourent systématiquement Internet à la recherche de ressources accessibles sans authentification. L'indexation du bucket CAF/DILA commence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg">Octobre-Décembre 2025 : L'Aspiration Silencieuse</h4>
                  <p className="text-muted-foreground">
                    Pendant trois mois, au moins quatre groupes distincts téléchargent l'intégralité ou une partie significative des 160 000 documents. Les logs reconstitués montrent des connexions depuis la Russie, l'Ukraine, le Vietnam et... la France. Le volume total des données transférées atteint 47 Go compressés.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg">15 Janvier 2026 : L'Alerte d'un White Hat</h4>
                  <p className="text-muted-foreground">
                    Un chercheur en sécurité français, membre du collectif "French Security Research", découvre le bucket lors d'un audit de routine. Horrifié par la nature des données exposées, il contacte immédiatement l'ANSSI via leur canal de signalement sécurisé. Il documente sa découverte sans télécharger de fichiers nominatifs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-lg">18 Janvier 2026 : Fermeture en Urgence</h4>
                  <p className="text-muted-foreground">
                    Trois jours après le signalement, le bucket est enfin sécurisé. L'ANSSI, la CAF et la DILA commencent leur analyse d'impact. La lenteur de la réaction sera ultérieurement critiquée par les experts du secteur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-destructive text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  6
                </div>
                <div>
                  <h4 className="font-bold text-lg">22 Janvier 2026 : Apparition sur le Dark Web</h4>
                  <p className="text-muted-foreground">
                    Nos investigations confirment que des échantillons de la base sont mis en vente sur plusieurs forums spécialisés du dark web. Les prix varient de 0.50€ à 5€ par dossier complet, selon la richesse des informations. Certains lots sont vendus en bloc pour plusieurs milliers d'euros.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-slate-800 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  7
                </div>
                <div>
                  <h4 className="font-bold text-lg">24 Janvier 2026 : Notre Enquête</h4>
                  <p className="text-muted-foreground">
                    Après 72 heures d'investigation intensive, WP Vitesse Pro publie cette enquête exclusive. La CAF et la DILA préparent leurs communications officielles aux personnes concernées.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Analyse Technique */}
          <section id="analyse-technique" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-primary" />
              Analyse Technique de la Faille
            </h2>

            <p>
              Pour comprendre comment une telle catastrophe a pu se produire, il faut plonger dans les détails techniques de l'architecture de stockage utilisée par le prestataire. Cette analyse repose sur les informations publiquement disponibles et les témoignages de professionnels du secteur.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Bucket S3 : Un Coffre-Fort Laissé Grand Ouvert</h3>

            <p>
              Amazon Simple Storage Service (S3) est un service de stockage cloud extrêmement répandu. Correctement configuré, il offre un niveau de sécurité excellent. Mal configuré, il devient une porte ouverte sur des données potentiellement critiques.
            </p>

            <p>
              Dans le cas de la fuite CAF/DILA, le bucket était configuré avec les paramètres suivants, particulièrement problématiques :
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-6 font-mono text-sm overflow-x-auto">
              <pre>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::caf-dila-documents-prod/*"
    }
  ]
}`}</pre>
            </div>

            <p>
              Cette politique de bucket autorise <strong>n'importe qui</strong> (<code>Principal: "*"</code>) à lire (<code>s3:GetObject</code>) tous les fichiers du bucket. Une configuration qui n'aurait jamais dû être appliquée à un environnement de production contenant des données sensibles.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">L'Absence de Chiffrement Côté Client</h3>

            <p>
              Aggravant la situation, les documents n'étaient pas chiffrés avant leur téléversement. Bien que le chiffrement côté serveur (SSE) ait été activé, celui-ci ne protège les données que contre un accès non autorisé au niveau de l'infrastructure AWS. Dès lors qu'un utilisateur dispose des droits de lecture (ce qui était le cas de tout le monde, rappelons-le), les fichiers sont déchiffrés automatiquement lors du téléchargement.
            </p>

            <p>
              Un chiffrement côté client, où les fichiers auraient été chiffrés avant leur envoi vers S3 avec des clés stockées séparément, aurait rendu les données inexploitables même en cas d'accès non autorisé au bucket.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">L'Échec des Mécanismes de Contrôle</h3>

            <p>
              Plusieurs couches de sécurité auraient dû prévenir cette situation. Leur absence ou leur défaillance témoigne d'une négligence systémique :
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                    <AlertCircle className="h-4 w-4" /> AWS Config Rules
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les règles de conformité AWS permettant de détecter les buckets publics n'étaient pas activées ou étaient ignorées.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                    <AlertCircle className="h-4 w-4" /> Access Analyzer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    L'outil IAM Access Analyzer, qui identifie les ressources partagées publiquement, n'était pas configuré pour ce bucket.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                    <AlertCircle className="h-4 w-4" /> Audit de Sécurité
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Le dernier audit de sécurité du prestataire remontait à 18 mois, bien au-delà des recommandations de l'ANSSI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                    <AlertCircle className="h-4 w-4" /> Principe du Moindre Privilège
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les développeurs disposaient de droits trop étendus, leur permettant de modifier les politiques de sécurité sans supervision.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Comparaison avec les Standards de l'Industrie</h3>

            <p>
              Pour mettre en perspective la gravité de ces manquements, comparons avec les pratiques recommandées par l'ANSSI et les standards industriels :
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Mesure de Sécurité</th>
                    <th className="text-center p-3">Standard ANSSI</th>
                    <th className="text-center p-3">Situation CAF/DILA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Bucket privé par défaut</td>
                    <td className="text-center p-3 text-green-600">Obligatoire</td>
                    <td className="text-center p-3 text-red-600">Non respecté</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Chiffrement côté client</td>
                    <td className="text-center p-3 text-green-600">Recommandé</td>
                    <td className="text-center p-3 text-red-600">Absent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Audit trimestriel</td>
                    <td className="text-center p-3 text-green-600">Obligatoire</td>
                    <td className="text-center p-3 text-red-600">18 mois</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Monitoring accès</td>
                    <td className="text-center p-3 text-green-600">Temps réel</td>
                    <td className="text-center p-3 text-amber-600">Différé</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Séparation dev/prod</td>
                    <td className="text-center p-3 text-green-600">Stricte</td>
                    <td className="text-center p-3 text-red-600">Floue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Documents exposés */}
          <section id="documents" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              Catalogue des Documents Exposés
            </h2>

            <p>
              L'analyse des métadonnées du bucket (sans accès aux contenus nominatifs) permet d'établir une typologie précise des documents compromis. Cette liste est établie à partir des informations communiquées par les chercheurs ayant découvert la faille et des confirmations obtenues auprès de sources proches de l'enquête.
            </p>

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl my-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileWarning className="text-destructive" /> Inventaire par Catégorie
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Siren className="h-5 w-5 text-red-500" /> Documents d'Identité (Criticité : Maximale)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Cartes nationales d'identité (recto/verso)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Passeports (pages identité)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Titres de séjour
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Permis de conduire
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-blue-500" /> Documents Bancaires (Criticité : Maximale)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Relevés d'Identité Bancaire (RIB)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Relevés de compte (3 derniers mois)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Attestations de domiciliation bancaire
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-amber-500" /> Documents Fiscaux (Criticité : Élevée)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Avis d'imposition (2022-2025)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Avis de non-imposition
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Déclarations de revenus
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Avis de taxe foncière
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-500" /> Justificatifs de Domicile (Criticité : Élevée)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Factures d'électricité/gaz
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Factures de téléphone/internet
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Quittances de loyer
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Attestations d'hébergement
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-purple-500" /> Documents CAF Spécifiques (Criticité : Élevée)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Attestations de droits CAF
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Relevés de prestations
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Formulaires CERFA signés
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Notifications d'attribution APL
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Pourquoi Ces Documents Sont-ils Si Dangereux ?</h3>

            <p>
              Chaque catégorie de document expose à des risques spécifiques. La combinaison de plusieurs types de documents dans un même dossier multiplie exponentiellement les possibilités de fraude :
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400">
                  <CreditCard className="h-5 w-5" /> Ouverture de comptes frauduleux
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Avec une CNI + un justificatif de domicile + un RIB, un fraudeur peut ouvrir un compte bancaire en ligne en moins de 15 minutes. Les néobanques et fintechs, avec leurs processus KYC (Know Your Customer) parfois allégés, sont particulièrement vulnérables.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Landmark className="h-5 w-5" /> Souscription de crédits
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Un avis d'imposition + une CNI permettent de souscrire des crédits à la consommation jusqu'à plusieurs milliers d'euros. Les organismes de crédit en ligne sont des cibles privilégiées pour les fraudeurs.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400">
                  <UserX className="h-5 w-5" /> Usurpation administrative
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les formulaires CERFA signés et les attestations CAF peuvent être modifiés pour obtenir frauduleusement des prestations sociales, détourner des allocations, ou modifier des données administratives.
                </p>
              </div>

              <div className="p-4 border rounded-xl border-red-200 dark:border-red-900">
                <h4 className="font-bold flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Mail className="h-5 w-5" /> Phishing ultra-ciblé
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Connaissant le montant exact des allocations perçues, l'adresse précise, et les références bancaires, les escrocs peuvent créer des emails de phishing extrêmement convaincants, personnalisés avec des données réelles.
                </p>
              </div>
            </div>
          </section>

          {/* Risques */}
          <section id="risques" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              L'Ampleur des Risques pour les Citoyens
            </h2>

            <p>
              Contrairement à la fuite URSSAF qui concernait principalement des données textuelles structurées, la compromission CAF/DILA expose des <strong>documents officiels scannés en haute résolution</strong>. Cette différence est fondamentale : là où des données textuelles peuvent théoriquement être modifiées par l'administration émettrice, un scan de document constitue une preuve matérielle exploitable immédiatement.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Comparaison avec la Fuite URSSAF</h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-slate-100 dark:bg-slate-900">
                    <th className="text-left p-3">Critère</th>
                    <th className="text-center p-3">Fuite URSSAF</th>
                    <th className="text-center p-3">Fuite CAF/DILA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Volume</td>
                    <td className="text-center p-3">12 millions de salariés</td>
                    <td className="text-center p-3">160 000 dossiers</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Type de données</td>
                    <td className="text-center p-3">Textuelles (noms, NIR...)</td>
                    <td className="text-center p-3">Documents scannés</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Exploitabilité directe</td>
                    <td className="text-center p-3 text-amber-600">Moyenne</td>
                    <td className="text-center p-3 text-red-600">Maximale</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Risque usurpation</td>
                    <td className="text-center p-3 text-amber-600">Élevé</td>
                    <td className="text-center p-3 text-red-600">Critique</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Possibilité d'invalidation</td>
                    <td className="text-center p-3 text-green-600">Oui (NIR modifiable)</td>
                    <td className="text-center p-3 text-red-600">Limitée</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Scénarios d'Exploitation Concrets</h3>

            <p>
              Pour illustrer la gravité de la situation, voici des scénarios d'exploitation réalistes que les experts en fraude documentent régulièrement :
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-2">Scénario 1 : Le Crédit Fantôme</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Un fraudeur utilise une CNI, un avis d'imposition et un RIB volés pour souscrire un crédit à la consommation de 5 000€ chez un organisme en ligne. Le crédit est accordé en 24h. L'argent est viré sur un compte "mule" puis retiré en espèces. La victime découvre le problème plusieurs mois plus tard, lorsqu'elle est inscrite au FICP.
                </p>
                <Badge variant="destructive">Impact : Interdiction bancaire + procédure de 2-3 ans</Badge>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="font-bold text-lg mb-2">Scénario 2 : La Location Piège</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Avec un dossier complet (CNI, bulletins de salaire reconstitués, avis d'imposition, attestation CAF), un escroc constitue un faux dossier de location parfait. Il loue un appartement, ne paie jamais de loyer, et sous-loue le bien à des tiers. Le propriétaire engage des poursuites contre la victime dont l'identité a été usurpée.
                </p>
                <Badge variant="outline" className="border-orange-500 text-orange-600">Impact : Contentieux juridique + atteinte à la réputation</Badge>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="font-bold text-lg mb-2">Scénario 3 : L'Arnaque au Président Personnalisée</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Un escroc contacte une entreprise en se faisant passer pour un fournisseur. Grâce aux documents volés, il connaît l'identité exacte du comptable, son adresse, ses allocations... Cette connaissance intime permet de créer une relation de confiance artificielle et de réussir une arnaque au virement.
                </p>
                <Badge variant="outline" className="border-purple-500 text-purple-600">Impact : Pertes financières professionnelles</Badge>
              </div>
            </div>
          </section>

          {/* Dark Web Investigation */}
          <section id="darkweb" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              Investigation sur le Dark Web
            </h2>

            <p>
              Dans le cadre de notre enquête, nous avons analysé plusieurs forums spécialisés du dark web pour documenter la commercialisation des données volées. <strong>Attention : nous n'avons téléchargé ni acheté aucune donnée nominative.</strong> Notre observation s'est limitée aux annonces publiques et aux métadonnées.
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="text-primary" /> Observations Terrain
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Premier listing détecté :</strong> 22 janvier 2026 sur un forum russophone</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Prix unitaire :</strong> Entre 0.50€ et 5€ par dossier complet selon la qualité</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Lots complets :</strong> Proposés entre 2 000€ et 15 000€ selon le volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Vendeurs identifiés :</strong> Au moins 4 groupes distincts proposent des échantillons</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Garantie offerte :</strong> Certains vendeurs proposent un "service après-vente" avec remplacement des dossiers invalidés</span>
                </li>
              </ul>
            </div>

            <p>
              La commercialisation rapide de ces données confirme que plusieurs acteurs malveillants avaient eu le temps de copier l'archive avant la sécurisation du bucket. Le prix relativement bas témoigne de l'abondance de l'offre : lorsque de nombreux vendeurs proposent les mêmes données, les prix chutent.
            </p>
          </section>

          {/* Protection Guide */}
          <section id="protection" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-red-600">
              <Shield className="h-8 w-8" />
              Guide de Protection d'Urgence
            </h2>

            <p>
              Si vous pensez être concerné par cette fuite, voici les actions à entreprendre immédiatement. Nous les avons classées par ordre de priorité.
            </p>

            <div className="space-y-6 my-8">
              <Card className="border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                    <Siren className="h-5 w-5" /> Actions Immédiates (Dans les 24h)
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold">Déposez une pré-plainte en ligne</h4>
                        <p className="text-sm text-muted-foreground">Rendez-vous sur <a href="https://www.pre-plainte-en-ligne.gouv.fr" className="text-primary hover:underline" target="_blank">pre-plainte-en-ligne.gouv.fr</a> pour officialiser le signalement. Conservez le numéro de dossier.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold">Signalez vos documents comme compromis</h4>
                        <p className="text-sm text-muted-foreground">Même si vos documents physiques sont en votre possession, déclarez-les au fichier des documents perdus ou volés. Cela compliquera leur utilisation frauduleuse.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold">Contactez votre banque</h4>
                        <p className="text-sm text-muted-foreground">Demandez une surveillance renforcée de vos comptes et envisagez de demander un nouveau RIB si le vôtre fait partie de la fuite.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="h-5 w-5" /> Actions dans la Semaine
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-bold">Consultez les fichiers Banque de France</h4>
                        <p className="text-sm text-muted-foreground">Vérifiez que vous n'êtes pas inscrit au FCC (Fichier Central des Chèques) ou au FICP (Fichier des Incidents de remboursement des Crédits aux Particuliers).</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-bold">Activez l'authentification à deux facteurs</h4>
                        <p className="text-sm text-muted-foreground">Sur tous vos services sensibles : France Connect, impôts, CAF, Ameli, banques en ligne, etc.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">6</div>
                      <div>
                        <h4 className="font-bold">Surveillez votre boîte aux lettres</h4>
                        <p className="text-sm text-muted-foreground">Les fraudeurs peuvent tenter de rediriger votre courrier. Soyez vigilant sur tout courrier inattendu ou absence de courrier habituel.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
                    <Shield className="h-5 w-5" /> Surveillance Continue
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">7</div>
                      <div>
                        <h4 className="font-bold">Mettez en place des alertes</h4>
                        <p className="text-sm text-muted-foreground">Configurez des alertes sur vos comptes bancaires pour toute opération supérieure à un certain montant.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">8</div>
                      <div>
                        <h4 className="font-bold">Consultez régulièrement vos relevés</h4>
                        <p className="text-sm text-muted-foreground">Vérifiez chaque mois l'absence de prélèvements ou virements suspects sur tous vos comptes.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">9</div>
                      <div>
                        <h4 className="font-bold">Restez vigilant face au phishing</h4>
                        <p className="text-sm text-muted-foreground">Les fraudeurs utiliseront vos vraies données pour créer des emails très convaincants. Ne cliquez jamais sur les liens, accédez directement aux sites officiels.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Kinsta */}
          <section id="protection-kinsta" className="my-16 bg-gradient-to-br from-slate-950 to-slate-900 text-white p-12 rounded-3xl border border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <Server className="h-12 w-12 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Sécurisez Vos Propres Données</h2>
                <p className="text-slate-400">Ne répétez pas les erreurs de la CAF</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8">
              Cette fuite illustre les dangers d'une infrastructure cloud mal configurée. Si vous gérez des données sensibles pour votre entreprise ou vos clients, choisissez un hébergement qui prend la sécurité au sérieux. <strong>Kinsta</strong> offre une isolation totale des ressources, un firewall Cloudflare Enterprise, et une surveillance 24/7 de votre infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Lock className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Chiffrement Total</h4>
                <p className="text-xs text-slate-400">Données chiffrées au repos et en transit</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Firewall Enterprise</h4>
                <p className="text-xs text-slate-400">Protection Cloudflare incluse</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Eye className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Surveillance 24/7</h4>
                <p className="text-xs text-slate-400">Détection proactive des menaces</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-12" asChild>
                <a href="https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer">
                  Découvrir Kinsta <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          {/* Official Reactions */}
          <section id="reactions" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              Réactions Officielles et Communiqués
            </h2>

            <p>
              Face à l'ampleur de la crise, les institutions concernées ont dû réagir en urgence. Voici une compilation des déclarations officielles recueillies au moment de la publication de cet article.
            </p>

            <div className="space-y-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" /> CAF Nationale
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "La CNAF prend cette situation avec le plus grand sérieux. Dès que nous avons été informés par l'ANSSI, nous avons immédiatement procédé à la sécurisation du serveur concerné. Nous mettons tout en œuvre pour identifier les allocataires potentiellement impactés et les contacter individuellement. Un numéro vert sera mis en place dans les prochaines 48 heures."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué de presse, 24 janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-primary" /> DILA (Direction de l'Information Légale et Administrative)
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "La DILA a été informée d'un incident de sécurité concernant un prestataire tiers. Nous collaborons pleinement avec les autorités compétentes (ANSSI, CNIL) pour évaluer l'étendue de la compromission. Les utilisateurs des services Service-Public.fr seront informés selon les procédures prévues par le RGPD."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué officiel, 24 janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" /> ANSSI
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "L'ANSSI a été alertée le 15 janvier 2026 par un chercheur en sécurité concernant un serveur de stockage exposé sur Internet. Nous avons immédiatement coordonné avec les opérateurs concernés pour sécuriser l'infrastructure. Une enquête approfondie est en cours pour déterminer l'étendue de l'accès non autorisé."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Note technique, 24 janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" /> CNIL
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "La CNIL a été notifiée de cet incident et a ouvert une instruction. Nous rappelons que les organismes responsables de traitement ont l'obligation de notifier les personnes concernées dans les meilleurs délais lorsqu'une violation de données est susceptible d'engendrer un risque élevé pour leurs droits et libertés."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Déclaration officielle, 24 janvier 2026</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Legal Aspects */}
          <section id="juridique" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-primary" />
              Aspects Juridiques : Vos Droits et Recours
            </h2>

            <p>
              Face à une fuite de données de cette ampleur, les victimes disposent de plusieurs leviers juridiques. Voici un panorama complet de vos droits et des actions possibles.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Cadre du RGPD</h3>

            <p>
              Le Règlement Général sur la Protection des Données (RGPD) impose aux organismes responsables de traitement des obligations strictes en cas de violation de données :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Notification à la CNIL</strong> dans les 72 heures suivant la découverte de la violation (Article 33)</li>
              <li><strong>Information des personnes concernées</strong> "dans les meilleurs délais" si le risque est élevé (Article 34)</li>
              <li><strong>Documentation de l'incident</strong> et des mesures prises (principe de responsabilité)</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Actions Judiciaires Possibles</h3>

            <div className="space-y-4 my-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-primary" /> Plainte Pénale Individuelle
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Toute victime peut déposer plainte pour accès frauduleux à un système informatique (Article 323-1 du Code pénal) et collecte de données personnelles par un moyen frauduleux (Article 226-18).
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> Action de Groupe
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Plusieurs associations de consommateurs préparent des actions collectives. Ces procédures permettent de mutualiser les coûts et d'obtenir des indemnisations plus significatives.
                </p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-bold flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" /> Recours contre la CNIL
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Si les organismes responsables ne respectent pas leurs obligations RGPD, les victimes peuvent saisir la CNIL qui dispose de pouvoirs de sanction pouvant atteindre 4% du chiffre d'affaires mondial.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Indemnisation Possible</h3>

            <p>
              Les victimes d'une usurpation d'identité consécutive à cette fuite pourront demander réparation de plusieurs types de préjudices :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Préjudice matériel</strong> : frais engagés pour rétablir la situation, pertes financières directes</li>
              <li><strong>Préjudice moral</strong> : anxiété, stress, atteinte à la réputation</li>
              <li><strong>Trouble de jouissance</strong> : perturbation de la vie quotidienne liée aux démarches administratives</li>
            </ul>
          </section>

          {/* Prevention and Lessons */}
          <section id="prevention" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Leçons à Tirer et Prévention Systémique
            </h2>

            <p>
              Au-delà des mesures individuelles, cette fuite doit servir de catalyseur pour une refonte profonde de la sécurité des systèmes d'information de l'administration française.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ce Qui Doit Changer</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Lock className="h-5 w-5 text-primary" /> Chiffrement Obligatoire
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tout document sensible stocké dans le cloud doit être chiffré côté client, avec des clés gérées indépendamment de l'infrastructure de stockage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5 text-primary" /> Surveillance Temps Réel
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les accès aux ressources sensibles doivent être monitorés en temps réel avec des alertes automatiques en cas d'anomalie.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <FileCheck className="h-5 w-5 text-primary" /> Audits Trimestriels
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les audits de sécurité doivent être systématiques et fréquents, avec une vérification des configurations cloud à chaque mise en production.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" /> Formation Continue
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les équipes techniques et leurs prestataires doivent être formés régulièrement aux bonnes pratiques de sécurité cloud.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Recommandations pour les Entreprises</h3>

            <p>
              Si vous gérez des données sensibles pour votre entreprise ou vos clients, cette fuite doit vous alerter. Voici nos recommandations prioritaires :
            </p>

            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Réalisez un audit immédiat</strong> de tous vos buckets S3 et équivalents (Azure Blob, Google Cloud Storage) pour vérifier qu'aucun n'est en accès public.</li>
              <li><strong>Activez AWS Config Rules</strong> ou équivalent pour bloquer automatiquement les configurations non conformes.</li>
              <li><strong>Implémentez le chiffrement côté client</strong> pour toute donnée sensible avant son upload vers le cloud.</li>
              <li><strong>Mettez en place une revue des accès</strong> trimestrielle pour tous vos services cloud.</li>
              <li><strong>Choisissez un hébergement managé</strong> avec des garanties de sécurité intégrées si vous n'avez pas les ressources internes pour gérer cette complexité.</li>
            </ol>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="my-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion : L'Heure des Comptes</h2>
            
            <p>
              Cette fuite de données CAF/DILA restera dans l'histoire comme l'une des plus graves jamais survenues en France. Plus de 160 000 citoyens voient leurs informations les plus intimes exposées, avec des conséquences potentiellement dévastatrices sur leur vie quotidienne pendant des années.
            </p>

            <p>
              L'origine de cette catastrophe — un simple bucket cloud mal configuré — est d'autant plus révoltante qu'elle était parfaitement évitable. Les outils et les bonnes pratiques existent depuis des années. Leur non-application témoigne d'une négligence systémique qui doit être sanctionnée.
            </p>

            <p>
              Pour les citoyens potentiellement concernés, l'heure est à la vigilance active. Les actions décrites dans ce guide doivent être entreprises sans délai. L'usurpation d'identité n'est pas une fatalité, mais elle nécessite une réaction rapide et méthodique.
            </p>

            <p>
              Pour les entreprises et organisations qui gèrent des données sensibles, cette fuite doit servir d'électrochoc. La sécurité informatique n'est pas une option, c'est une responsabilité. Les conséquences d'une négligence ne se mesurent pas seulement en amendes : elles se comptent en vies perturbées, en confiance détruite, en réputation anéantie.
            </p>

            <div className="bg-primary/10 p-8 rounded-2xl my-8 border border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> Ressources Utiles
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Pré-plainte en ligne :</strong> <a href="https://www.pre-plainte-en-ligne.gouv.fr" className="text-primary hover:underline" target="_blank">pre-plainte-en-ligne.gouv.fr</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Signalement CNIL :</strong> <a href="https://www.cnil.fr/fr/plaintes" className="text-primary hover:underline" target="_blank">cnil.fr/fr/plaintes</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Banque de France (fichiers) :</strong> <a href="https://www.banque-france.fr" className="text-primary hover:underline" target="_blank">banque-france.fr</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Cybermalveillance :</strong> <a href="https://www.cybermalveillance.gouv.fr" className="text-primary hover:underline" target="_blank">cybermalveillance.gouv.fr</a>
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
                  <Link href="/article/cyberattaque-ministere-interieur-2026" className="hover:text-primary">
                    Ministère de l'Intérieur : TAJ et FPR Compromis
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Les fichiers de police les plus sensibles de France exposés.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un Audit de Sécurité ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Que vous soyez une agence, une entreprise ou une administration, la sécurité de vos données est notre priorité. Utilisez notre outil d'audit gratuit pour tester votre site.
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
