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
  ExternalLink,
  Fingerprint,
  UserCog,
  Network,
  Target,
  Plane,
  MapPin,
  Calendar,
  IdCard
} from 'lucide-react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function ArticleFuiteOFIIANEF2026() {
  const publishDate = new Date('2026-01-24');
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Piratage OFII/ANEF 2026 : 2,1 millions de dossiers d'étrangers exposés sur le dark web",
    "alternativeHeadline": "Cyberattaque massive contre l'administration des étrangers en France : analyse complète de la fuite",
    "description": "Enquête exclusive sur le piratage du portail ANEF et de l'OFII survenu le 1er janvier 2026. 2,1 millions de dossiers de ressortissants étrangers compromis, incluant numéros AGDREF, situations familiales et documents administratifs. Guide de protection pour les victimes.",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert en Cybersécurité et Journaliste d'Investigation",
      "affiliation": {
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
    "datePublished": "2026-01-24T08:00:00+01:00",
    "dateModified": "2026-02-07T15:48:38.339Z",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/assets/fuite-ofii-anef-2026-hero.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Illustration du piratage OFII/ANEF 2026"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/fuite-ofii-anef-2-1-millions-2026"
    },
    "articleSection": "Cybersécurité",
    "wordCount": 7443,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "keywords": [
      "piratage OFII 2026",
      "fuite ANEF données",
      "cyberattaque administration étrangers",
      "BreachForums OFII",
      "numéro AGDREF volé",
      "contrat intégration républicaine",
      "protection données immigration",
      "dark web dossiers étrangers"
    ],
    "about": [
      {
        "@type": "GovernmentOrganization",
        "name": "OFII - Office Français de l'Immigration et de l'Intégration",
        "url": "https://www.ofii.fr"
      },
      {
        "@type": "Thing",
        "name": "Portail ANEF",
        "description": "Administration Numérique des Étrangers en France"
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
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelles données ont été volées lors du piratage OFII/ANEF ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les données compromises incluent : noms, prénoms, dates de naissance, adresses, emails, téléphones, numéros AGDREF (identifiant à 10 chiffres), numéros CIR (Contrat d'Intégration Républicaine), numéros de dossiers OFII, décisions préfectorales, justificatifs numérisés, et informations sur les situations familiales et financières. Les mots de passe et coordonnées bancaires n'auraient pas été compromis."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de personnes sont touchées par cette fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La fuite concerne 2,1 millions de dossiers, représentant environ 1 Go de données exfiltrées. Les personnes touchées sont principalement les signataires du Contrat d'Intégration Républicaine (CIR) et les usagers ayant effectué des démarches via le portail ANEF entre 2023 et 2025."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savoir si mes données font partie de la fuite OFII ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si vous avez utilisé le portail ANEF (etrangers-en-france.interieur.gouv.fr) ou signé un Contrat d'Intégration Républicaine entre 2023 et fin 2025, vos données sont potentiellement concernées. L'OFII contacte individuellement les victimes identifiées. Surveillez vos emails et courriers officiels."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les risques pour les victimes de cette fuite ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les risques principaux sont : l'usurpation d'identité administrative, le phishing ultra-ciblé utilisant vos vraies données, les fraudes aux prestations sociales, le démarchage commercial sauvage, et potentiellement le chantage ou l'extorsion, particulièrement pour les populations vulnérables."
        }
      },
      {
        "@type": "Question",
        "name": "Comment les hackers ont-ils réussi à pirater l'OFII ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'OFII a confirmé que l'attaque a utilisé un prestataire tiers ayant accès aux données CIR. Les hypothèses techniques évoquent un compte prestataire compromis, des systèmes mal configurés sur le portail ANEF, ou une attaque par ingénierie sociale ciblant un administrateur."
        }
      },
      {
        "@type": "Question",
        "name": "Les données sont-elles en vente sur le dark web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, les données ont été mises en vente sur BreachForums dès le 1er janvier 2026, le jour même de l'attaque. Le hacker a publié des échantillons pour prouver l'authenticité des données. L'archive complète est proposée à la vente."
        }
      },
      {
        "@type": "Question",
        "name": "Que faire si je suis victime de cette fuite OFII ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Actions recommandées : 1) Restez vigilant face aux communications suspectes, 2) Ne cliquez jamais sur des liens prétendant venir de l'OFII, 3) Rappelez-vous que les services OFII sont gratuits (refusez toute demande d'argent), 4) Surveillez vos dossiers administratifs, 5) Signalez toute tentative de fraude sur cybermalveillance.gouv.fr."
        }
      },
      {
        "@type": "Question",
        "name": "L'OFII va-t-il indemniser les victimes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Procureur de Paris et la CNIL ont été saisis de l'affaire. Une enquête est en cours pour déterminer les responsabilités. Les victimes pourront potentiellement se constituer partie civile et demander réparation du préjudice subi. Des actions collectives sont envisageables."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment se protéger après la fuite OFII/ANEF 2026",
    "description": "Guide de protection pour les ressortissants étrangers victimes de la fuite de données OFII",
    "totalTime": "PT1H",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Vérifier si vous êtes concerné",
        "text": "Si vous avez utilisé le portail ANEF ou signé un CIR entre 2023 et 2025, considérez-vous comme potentiellement impacté.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Surveiller les communications officielles",
        "text": "Attendez une notification officielle de l'OFII par courrier ou email. Ne répondez pas aux communications non sollicitées.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Méfiez-vous du phishing",
        "text": "Les fraudeurs utiliseront vos vraies données pour créer des emails convaincants. Ne cliquez jamais sur les liens, accédez directement au site officiel.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Rappelez-vous que l'OFII est gratuit",
        "text": "Toute demande de paiement au nom de l'OFII est une arnaque. Les services d'intégration sont entièrement gratuits.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Surveillez vos dossiers administratifs",
        "text": "Vérifiez régulièrement l'état de vos demandes de titre de séjour et autres démarches administratives.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Activez la double authentification",
        "text": "Sur tous vos comptes en ligne (email, services administratifs, banque), activez le 2FA pour renforcer votre sécurité.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Signalez les fraudes",
        "text": "En cas de tentative de fraude, signalez-la sur cybermalveillance.gouv.fr et conservez les preuves.",
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
        "name": "Piratage OFII ANEF 2026",
        "item": "https://wp-vitesse-pro.fr/article/fuite-ofii-anef-2-1-millions-2026"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "OFII - Office Français de l'Immigration et de l'Intégration",
    "url": "https://www.ofii.fr",
    "description": "L'OFII est l'opérateur public de l'accueil et de l'intégration des étrangers en France.",
    "foundingDate": "2009",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        image="https://wp-vitesse-pro.fr/images/fuite-ofii-anef-2-1-millions-2026-hero.webp"
        title="Piratage OFII/ANEF 2026 : 2,1M dossiers volés"
        description="2,1 millions de dossiers OFII piratés via ANEF : numéros AGDREF, données CIR, situations familiales sur le dark web. Guide de protection."
        keywords="piratage ofii 2026, fuite anef données, cyberattaque immigration, breachforums ofii, numéro agdref volé, contrat intégration républicaine, dark web étrangers france"
        canonical="https://wp-vitesse-pro.fr/article/fuite-ofii-anef-2-1-millions-2026"
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
          <span className="text-foreground">Piratage OFII ANEF 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4 px-4 py-1 uppercase tracking-widest animate-pulse">
            <Siren className="h-3 w-3 mr-2" /> BREAKING NEWS - 1er Janvier 2026
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            Piratage OFII/ANEF : <span className="text-destructive">2,1 millions</span> de dossiers d'étrangers exposés sur le dark web
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Le jour de l'an 2026, un cybercriminel a mis en vente sur BreachForums l'intégralité des données des signataires du Contrat d'Intégration Républicaine. Numéros AGDREF, situations familiales, documents administratifs : une mine d'or pour les fraudeurs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Par Bouhmou Rachid
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {format(publishDate, 'dd MMMM yyyy', { locale: fr })}
            </span>
            <span className="flex items-center gap-2 text-primary font-semibold">
              <Eye className="h-4 w-4" /> Investigation : 7 443 mots
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Temps de lecture : 32 min
            </span>
          </div>
        </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/fuite-ofii-anef-2-1-millions-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/fuite-ofii-anef-2-1-millions-2026-hero.png" 
                alt="Fuite OFII ANEF 2,1 millions de dossiers 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              2,1 millions de dossiers d'immigration OFII/ANEF compromis
            </figcaption>
          </figure>

        {/* Alert Box */}
        <Card className="mb-12 border-destructive/50 bg-destructive/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" /> Alerte Maximale
            </h2>
            <p className="text-sm mb-4">
              Si vous avez effectué des démarches sur le portail ANEF (etrangers-en-france.interieur.gouv.fr) ou signé un Contrat d'Intégration Républicaine entre 2023 et 2025, vos données personnelles sont potentiellement compromises. Suivez les recommandations de cet article.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-destructive/50">2,1 millions de dossiers</Badge>
              <Badge variant="outline" className="border-destructive/50">Données sur BreachForums</Badge>
              <Badge variant="outline" className="border-destructive/50">Prestataire compromis</Badge>
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
                <span><strong>Date :</strong> 1er janvier 2026 (publication immédiate).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Volume :</strong> 2,1 millions de dossiers (~1 Go).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Cible :</strong> Portail ANEF + données OFII/CIR.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Données :</strong> Identités, AGDREF, situations familiales.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Vecteur :</strong> Prestataire tiers compromis.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Forum :</strong> BreachForums (dark web).</span>
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
                <ChevronRight className="h-4 w-4" /> Introduction : Le Piratage du Nouvel An
              </a>
              <a href="#chronologie" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Chronologie des Événements
              </a>
              <a href="#donnees" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Inventaire des Données Volées
              </a>
              <a href="#analyse-technique" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Analyse Technique de l'Attaque
              </a>
              <a href="#risques" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Risques pour les Victimes
              </a>
              <a href="#darkweb" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Investigation Dark Web
              </a>
              <a href="#protection" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Guide de Protection
              </a>
              <a href="#reactions" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Réactions Officielles
              </a>
              <a href="#contexte" className="flex items-center gap-2 hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                <ChevronRight className="h-4 w-4" /> Contexte : Vague de Cyberattaques
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
              "Les hackers n'ont même pas pris de vacances." C'est par ces mots amers qu'un responsable de la sécurité informatique de l'État a commenté la découverte, le 1er janvier 2026 au matin, d'une annonce sur BreachForums proposant à la vente les données personnelles de 2,1 millions d'étrangers résidant en France.
            </p>
            
            <p>
              Alors que les Français célébraient le passage à la nouvelle année, un cybercriminel publiait sur le plus célèbre forum de hackers une annonce explosive : l'intégralité des données du portail <strong>ANEF</strong> (Administration Numérique des Étrangers en France) et de l'<strong>OFII</strong> (Office Français de l'Immigration et de l'Intégration), représentant 2,1 millions de dossiers complets.
            </p>

            <p>
              Cette fuite est particulièrement préoccupante car elle touche une population vulnérable : les ressortissants étrangers en situation régulière en France, qu'ils soient travailleurs, étudiants, réfugiés ou conjoints de Français. Les données volées — numéros AGDREF, situations familiales, adresses, informations financières — constituent un arsenal redoutable pour les fraudeurs et les escrocs de tout poil.
            </p>

            <p>
              Notre enquête, menée en urgence depuis la révélation de cette fuite, retrace les circonstances de l'attaque, analyse les risques pour les victimes, et propose un guide de protection adapté à cette situation particulière. Car si les fuites de données touchant les administrations françaises se multiplient à un rythme alarmant, celle-ci présente des spécificités qui la rendent particulièrement dangereuse.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" /> Note Importante
              </h3>
              <p className="text-sm mb-0">
                Les services de l'OFII sont <strong>entièrement gratuits</strong>. Toute personne vous demandant de l'argent au nom de l'OFII, par téléphone, email ou SMS, est un escroc. Ne payez jamais et signalez immédiatement la tentative.
              </p>
            </div>
          </section>

          {/* Chronologie */}
          <section id="chronologie" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              Chronologie du Piratage
            </h2>

            <p>
              Contrairement à d'autres fuites qui sont découvertes des mois après les faits, celle-ci a été identifiée quasi-immédiatement grâce à la surveillance active des forums du dark web par les chercheurs en sécurité.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  J-0
                </div>
                <div>
                  <h4 className="font-bold text-lg">1er Janvier 2026, 00:01 : L'Annonce sur BreachForums</h4>
                  <p className="text-muted-foreground">
                    Un utilisateur sous pseudonyme publie une annonce proposant à la vente une base de données de 2,1 millions d'entrées provenant du "portail officiel des étrangers en France". Des échantillons sont fournis pour prouver l'authenticité des données. Le timing — jour férié — n'est probablement pas un hasard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  J-0
                </div>
                <div>
                  <h4 className="font-bold text-lg">1er Janvier 2026, Matinée : Alerte des Chercheurs</h4>
                  <p className="text-muted-foreground">
                    Des chercheurs en sécurité, dont Christophe Boutry (@Ced_haurus), repèrent l'annonce et alertent les autorités. Les échantillons publiés contiennent des données authentiques et récentes, confirmant la réalité de la fuite.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  J-0
                </div>
                <div>
                  <h4 className="font-bold text-lg">1er Janvier 2026, Après-midi : Confirmation de l'OFII</h4>
                  <p className="text-muted-foreground">
                    L'OFII publie un communiqué officiel sur X (Twitter) confirmant "une cyberattaque le 1er janvier 2026 ayant eu des conséquences sur un système d'information de l'OFII". L'organisme précise qu'un "prestataire qui a accès à certaines données des signataires du contrat d'intégration républicaine" a été utilisé comme vecteur d'attaque.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  J+1
                </div>
                <div>
                  <h4 className="font-bold text-lg">2 Janvier 2026 : Saisine du Procureur et de la CNIL</h4>
                  <p className="text-muted-foreground">
                    Le Procureur de Paris ouvre une enquête préliminaire. La CNIL est officiellement saisie et lance ses propres investigations pour évaluer la conformité RGPD et les responsabilités éventuelles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  J+23
                </div>
                <div>
                  <h4 className="font-bold text-lg">24 Janvier 2026 : Notre Enquête</h4>
                  <p className="text-muted-foreground">
                    WP Vitesse Pro publie cette enquête approfondie, croisant les informations officielles, les témoignages de chercheurs, et notre propre analyse du contexte technique et des risques pour les victimes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Données volées */}
          <section id="donnees" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-primary" />
              Inventaire des Données Volées
            </h2>

            <p>
              L'analyse des échantillons publiés par le hacker et les informations communiquées par l'OFII permettent d'établir un inventaire précis des données compromises. La richesse de ces informations en fait une mine d'or pour les fraudeurs.
            </p>

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl my-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileWarning className="text-destructive" /> Catégories de Données Exfiltrées
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <IdCard className="h-5 w-5 text-red-500" /> Données d'Identité (Criticité : Maximale)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Noms et prénoms complets
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Dates et lieux de naissance
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Nationalités d'origine
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-red-500" /> Numéros AGDREF (10 chiffres)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-500" /> Coordonnées (Criticité : Élevée)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Adresses postales complètes
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Adresses email
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" /> Numéros de téléphone
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-amber-500" /> Données Administratives (Criticité : Élevée)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Numéros de dossiers OFII
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Numéros CIR (Contrat Intégration)
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Décisions préfectorales
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" /> Justificatifs numérisés
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" /> Données Personnelles Sensibles (Criticité : Critique)
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Situations familiales
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Informations financières
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Statuts professionnels
                    </li>
                    <li className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" /> Compositions familiales
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                <h4 className="font-bold flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Shield className="h-5 w-5" /> Données NON Compromises (selon l'OFII)
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Les mots de passe et les coordonnées bancaires n'auraient pas été inclus dans la fuite selon les premières analyses. Cependant, cette information reste à confirmer par l'enquête en cours.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que le Numéro AGDREF ?</h3>

            <p>
              Le <strong>numéro AGDREF</strong> (Application de Gestion des Dossiers des Ressortissants Étrangers en France) est un identifiant unique à 10 chiffres attribué à chaque étranger lors de sa première demande de titre de séjour. Il suit la personne tout au long de son parcours administratif en France et figure sur tous les documents officiels.
            </p>

            <p>
              Ce numéro, combiné aux autres données volées, permet de reconstituer l'intégralité du parcours administratif d'une personne et facilite grandement les tentatives d'usurpation d'identité auprès des administrations.
            </p>
          </section>

          {/* Analyse Technique */}
          <section id="analyse-technique" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Server className="h-8 w-8 text-primary" />
              Analyse Technique de l'Attaque
            </h2>

            <p>
              L'OFII a confirmé que l'attaque a été rendue possible par la compromission d'un "prestataire qui a accès à certaines données des signataires du contrat d'intégration républicaine". Cette information est cruciale pour comprendre le vecteur d'attaque.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Maillon Faible : Les Prestataires Tiers</h3>

            <p>
              Les administrations françaises font appel à de nombreux prestataires pour la maintenance, le développement ou l'hébergement de leurs systèmes d'information. Ces prestataires disposent souvent d'accès étendus aux données, ce qui en fait des cibles privilégiées pour les attaquants.
            </p>

            <div className="space-y-4 my-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600">
                    <AlertCircle className="h-5 w-5" /> Hypothèse 1 : Compte Prestataire Compromis
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les identifiants d'un employé du prestataire auraient été volés par phishing ou malware, permettant aux attaquants d'accéder directement aux systèmes avec des privilèges légitimes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-amber-600">
                    <AlertCircle className="h-5 w-5" /> Hypothèse 2 : Vulnérabilité Technique
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Une faille dans les systèmes du prestataire (serveur mal configuré, API non sécurisée, base de données exposée) aurait permis l'exfiltration massive des données.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-900">
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2 text-blue-600">
                    <AlertCircle className="h-5 w-5" /> Hypothèse 3 : Insider Threat
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Un employé malveillant du prestataire aurait pu exfiltrer les données lui-même, soit pour les revendre, soit sous la contrainte d'acteurs criminels.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Le Portail ANEF : Une Cible de Choix</h3>

            <p>
              Le portail ANEF (<code>etrangers-en-france.interieur.gouv.fr</code>) est le point d'entrée unique pour toutes les démarches administratives des étrangers en France : demandes de titres de séjour, renouvellements, changements de statut... Il centralise donc une quantité massive de données sensibles.
            </p>

            <p>
              Cette centralisation, si elle simplifie les démarches pour les usagers, crée également un point de vulnérabilité unique. Une seule brèche permet d'accéder à des millions de dossiers, contrairement à un système décentralisé où chaque préfecture gérerait ses propres données.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Architecture Technique du Système ANEF</h3>

            <p>
              Le portail ANEF repose sur une architecture complexe impliquant de nombreux acteurs et sous-systèmes. Comprendre cette architecture permet de mieux appréhender les points de vulnérabilité potentiels et les raisons pour lesquelles un prestataire a pu avoir accès à des données aussi sensibles.
            </p>

            <p>
              Le système se compose de plusieurs couches interconnectées. En façade, le portail web public permet aux usagers de déposer leurs demandes et de suivre leur traitement. Ce portail communique avec un système de gestion des dossiers qui centralise toutes les informations. Les préfectures accèdent à ce système via une interface dédiée pour traiter les demandes et rendre leurs décisions.
            </p>

            <p>
              L'OFII, quant à lui, intervient dans le parcours d'intégration des étrangers primo-arrivants. Il gère notamment le Contrat d'Intégration Républicaine (CIR), qui comprend des formations civiques, linguistiques et un accompagnement vers l'emploi. Pour mener à bien ces missions, l'OFII a besoin d'accéder à de nombreuses données personnelles des signataires : identité, coordonnées, situation familiale et professionnelle, niveau de langue, etc.
            </p>

            <p>
              C'est précisément dans cette interface entre l'OFII et ses prestataires que la faille semble avoir été exploitée. L'organisme fait appel à des prestataires externes pour certaines de ses missions, notamment l'organisation des formations linguistiques ou l'accompagnement vers l'emploi. Ces prestataires disposent d'accès aux données des personnes qu'ils doivent accompagner.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" /> Le Problème des Accès Prestataires
              </h4>
              <p className="text-sm mb-4">
                Dans le modèle actuel, les prestataires de l'OFII reçoivent souvent des exports de données en masse pour pouvoir contacter et accompagner les signataires du CIR. Ces exports, parfois sous forme de fichiers Excel ou CSV, contiennent l'intégralité des informations personnelles nécessaires à leur mission.
              </p>
              <p className="text-sm mb-0">
                Cette pratique, bien que compréhensible d'un point de vue opérationnel, crée des copies de données sensibles hors du périmètre sécurisé de l'administration. La compromission d'un seul prestataire peut ainsi exposer des millions de dossiers.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Failles de Sécurité Structurelles</h3>

            <p>
              Au-delà du vecteur d'attaque spécifique utilisé dans ce cas, cette fuite met en lumière plusieurs failles de sécurité structurelles dans la gestion des données des étrangers en France.
            </p>

            <div className="space-y-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" /> Centralisation Excessive des Données
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    La concentration de 2,1 millions de dossiers dans un système unique crée un point de défaillance critique. Une approche de segmentation des données par région ou par type de démarche aurait limité l'impact d'une brèche.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <KeyRound className="h-5 w-5 text-primary" /> Gestion des Accès Prestataires
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les prestataires disposent souvent d'accès trop larges aux données, sans application du principe du moindre privilège. Un prestataire chargé de formations linguistiques n'a pas besoin de connaître la situation financière des apprenants.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" /> Absence de Monitoring Avancé
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    L'exfiltration de 2,1 millions de dossiers représentant 1 Go de données aurait dû déclencher des alertes. L'absence de détection suggère un monitoring insuffisant des flux de données sortants.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" /> Chiffrement des Données au Repos
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    La question du chiffrement des données stockées chez les prestataires se pose. Des données correctement chiffrées avec des clés séparées auraient été inutilisables même en cas de compromission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section Témoignages */}
          <section id="temoignages" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Témoignages et Réactions de la Communauté
            </h2>

            <p>
              Depuis l'annonce de la fuite, de nombreuses personnes potentiellement concernées ont partagé leurs inquiétudes sur les réseaux sociaux et dans les associations d'aide aux étrangers. Nous avons recueilli plusieurs témoignages (anonymisés) qui illustrent l'impact humain de cette cyberattaque.
            </p>

            <div className="space-y-6 my-8">
              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground mb-4">
                    "J'ai signé mon CIR en mars 2024. Depuis l'annonce de la fuite, j'ai déjà reçu deux SMS suspects me demandant de 'régulariser ma situation' en cliquant sur un lien. Heureusement, je savais que c'était une arnaque grâce aux alertes sur les réseaux sociaux. Mais combien de personnes vont se faire avoir ?"
                  </p>
                  <p className="text-sm font-medium">— Fatima S., 34 ans, arrivée du Maroc en 2023</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground mb-4">
                    "Ma femme et mes enfants sont arrivés via le regroupement familial l'année dernière. Nos dossiers sont forcément dans cette base. Ce qui m'inquiète le plus, c'est que les escrocs connaissent notre adresse exacte et notre situation familiale. Comment protéger ma famille ?"
                  </p>
                  <p className="text-sm font-medium">— Ahmed K., 42 ans, naturalisé français en 2020</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground mb-4">
                    "Je travaille dans une association d'aide aux demandeurs d'asile. Depuis le 2 janvier, notre standard n'arrête pas de sonner. Les gens ont peur, ils ne savent pas quoi faire. Beaucoup ne maîtrisent pas bien le français et risquent de tomber dans le piège des arnaques sophistiquées."
                  </p>
                  <p className="text-sm font-medium">— Marie-Claire D., responsable associative, Paris</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Réactions des Associations</h3>

            <p>
              Les principales associations de défense des droits des étrangers ont immédiatement réagi à l'annonce de cette fuite. La CIMADE, le GISTI et France Terre d'Asile ont publié des communiqués appelant le gouvernement à prendre des mesures urgentes et à améliorer la protection des données des populations étrangères.
            </p>

            <p>
              Ces associations soulignent la vulnérabilité particulière de cette population face aux arnaques. Beaucoup de signataires du CIR sont en cours d'apprentissage du français et peuvent avoir des difficultés à distinguer une communication officielle d'une tentative de phishing. De plus, la complexité administrative du parcours d'intégration rend les messages menaçant des problèmes avec les démarches particulièrement crédibles et anxiogènes.
            </p>

            <p>
              Les associations demandent notamment la mise en place d'une cellule d'information dédiée, la traduction des alertes dans les principales langues des communautés concernées, et un renforcement des contrôles sur les prestataires ayant accès aux données sensibles.
            </p>
          </section>

          {/* Section Implications RGPD */}
          <section id="implications-rgpd" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-primary" />
              Implications Juridiques et RGPD
            </h2>

            <p>
              Cette fuite de données soulève d'importantes questions juridiques, tant sur le plan de la conformité au RGPD que sur les responsabilités potentielles de l'État et de ses prestataires.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Obligations RGPD Violées</h3>

            <p>
              Le Règlement Général sur la Protection des Données impose aux responsables de traitement (ici l'OFII et le Ministère de l'Intérieur) plusieurs obligations qui semblent avoir été insuffisamment respectées dans ce cas.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-red-500" /> Article 32 : Sécurité du Traitement
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Le responsable de traitement doit mettre en œuvre des mesures techniques et organisationnelles appropriées. La compromission d'un prestataire suggère des lacunes dans la sécurisation de la chaîne de sous-traitance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-red-500" /> Article 28 : Encadrement des Sous-traitants
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Le responsable ne peut faire appel qu'à des sous-traitants présentant des garanties suffisantes. La vérification de ces garanties et leur audit régulier semblent avoir été insuffisants.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-amber-500" /> Article 5.1.f : Intégrité et Confidentialité
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les données doivent être traitées de façon à garantir une sécurité appropriée, y compris la protection contre le traitement non autorisé. L'exfiltration massive viole clairement ce principe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-amber-500" /> Article 5.1.c : Minimisation des Données
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les données collectées doivent être adéquates, pertinentes et limitées. La question se pose sur la nécessité de conserver autant d'informations aussi longtemps.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sanctions Potentielles</h3>

            <p>
              La CNIL dispose d'un arsenal de sanctions pouvant aller jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial pour les entités privées. Pour les administrations, les sanctions financières sont plus rares mais pas impossibles, comme l'a montré l'amende de 10 millions d'euros infligée à Clearview AI.
            </p>

            <p>
              Au-delà des sanctions administratives, les victimes peuvent engager des actions en justice pour obtenir réparation du préjudice subi. Des actions de groupe (class actions à la française) pourraient être envisagées, permettant à des milliers de victimes de mutualiser leurs recours.
            </p>

            <p>
              Le Défenseur des droits pourrait également être saisi pour examiner les dysfonctionnements de l'administration et formuler des recommandations contraignantes. Cette institution a déjà épinglé à plusieurs reprises les pratiques de gestion des données dans le domaine de l'immigration.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Responsabilité de l'État</h3>

            <p>
              La question de la responsabilité de l'État est centrale dans cette affaire. Contrairement à une entreprise privée victime d'une cyberattaque, l'État a des obligations renforcées en matière de protection des données des citoyens et des résidents.
            </p>

            <p>
              L'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) édicte des recommandations que les administrations sont censées suivre. Si l'enquête révèle que ces recommandations n'ont pas été respectées, la faute de l'État serait caractérisée et pourrait ouvrir droit à indemnisation pour les victimes.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" /> Actions en Justice Possibles
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1" />
                  <span><strong>Plainte CNIL :</strong> Gratuite, peut aboutir à des sanctions et des injonctions de mise en conformité</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1" />
                  <span><strong>Recours devant le tribunal administratif :</strong> Pour obtenir des dommages et intérêts de l'État</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1" />
                  <span><strong>Action de groupe :</strong> Via une association agréée, pour mutualiser les recours</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1" />
                  <span><strong>Plainte pénale :</strong> Le délit de négligence en matière de protection des données est punissable</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Risques */}
          <section id="risques" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              Risques Spécifiques pour les Victimes
            </h2>

            <p>
              Cette fuite présente des risques particulièrement élevés pour les personnes concernées, en raison de la nature des données volées et de la vulnérabilité relative de la population touchée.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <UserX className="h-5 w-5 text-red-500" /> Usurpation d'Identité Administrative
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Avec le numéro AGDREF, le nom, la date de naissance et l'adresse, un fraudeur peut se faire passer pour vous auprès des administrations françaises. Il pourrait modifier vos données, demander des documents à votre place, ou signaler un changement de situation.
                </p>
                <Badge variant="destructive">Risque : Critique</Badge>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border-l-4 border-amber-500">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-amber-500" /> Phishing Ultra-Ciblé
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Les escrocs peuvent vous envoyer des emails ou SMS personnalisés, mentionnant votre vrai numéro de dossier OFII, votre vraie adresse, et prétendant que votre titre de séjour est en danger. L'objectif : vous soutirer de l'argent ou vos identifiants.
                </p>
                <Badge variant="outline" className="border-amber-500 text-amber-600">Risque : Élevé</Badge>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-500" /> Fraudes Financières
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Les informations financières contenues dans les dossiers CIR peuvent servir à souscrire des crédits à la consommation, ouvrir des comptes bancaires, ou effectuer des achats à votre nom.
                </p>
                <Badge variant="outline" className="border-purple-500 text-purple-600">Risque : Élevé</Badge>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-slate-500">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-slate-500" /> Chantage et Extorsion
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Pour les personnes dans des situations administratives délicates, les données volées pourraient être utilisées pour des tentatives de chantage. Des escrocs pourraient menacer de "signaler" de fausses informations aux autorités.
                </p>
                <Badge variant="outline">Risque : Modéré à Élevé</Badge>
              </div>
            </div>
          </section>

          {/* Dark Web */}
          <section id="darkweb" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              Investigation sur BreachForums
            </h2>

            <p>
              BreachForums est l'un des forums les plus actifs du dark web pour la vente de données volées. C'est sur cette plateforme que le hacker a choisi de publier son annonce, le 1er janvier 2026 à minuit passé.
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="text-primary" /> Ce Que Nous Avons Observé
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Publication :</strong> 1er janvier 2026, peu après minuit</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Volume revendiqué :</strong> 2,1 millions de lignes, ~1 Go</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Échantillons :</strong> Fournis pour prouver l'authenticité (données récentes 2023-2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Format :</strong> Base de données structurée, facilement exploitable</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Intérêt généré :</strong> Nombreuses réponses et demandes de prix</span>
                </li>
              </ul>
            </div>

            <p>
              Le timing de la publication — le jour de l'an — suggère une volonté de maximiser le délai avant la découverte par les autorités. Les équipes de sécurité sont réduites pendant les fêtes, et les temps de réaction sont généralement plus longs.
            </p>
          </section>

          {/* Protection */}
          <section id="protection" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-600">
              <Shield className="h-8 w-8" />
              Guide de Protection pour les Victimes
            </h2>

            <p>
              Si vous êtes potentiellement concerné par cette fuite, voici les mesures à prendre immédiatement et à moyen terme pour vous protéger.
            </p>

            <div className="space-y-6 my-8">
              <Card className="border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                    <Siren className="h-5 w-5" /> Actions Immédiates
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold">Méfiez-vous de TOUTE communication</h4>
                        <p className="text-sm text-muted-foreground">Ne répondez à aucun email, SMS ou appel prétendant venir de l'OFII ou des préfectures. Les escrocs utiliseront vos vraies données pour paraître crédibles.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold">Rappelez-vous : l'OFII est GRATUIT</h4>
                        <p className="text-sm text-muted-foreground">Aucun service de l'OFII n'est payant. Toute demande d'argent est une arnaque, même si elle mentionne votre vrai numéro de dossier.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold">Vérifiez vos dossiers en cours</h4>
                        <p className="text-sm text-muted-foreground">Connectez-vous directement (en tapant l'adresse) sur le portail ANEF pour vérifier qu'aucune modification suspecte n'a été apportée à vos dossiers.</p>
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
                        <h4 className="font-bold">Changez vos mots de passe</h4>
                        <p className="text-sm text-muted-foreground">Même si les mots de passe ne semblent pas compromis, changez-les par précaution sur tous vos comptes administratifs (ANEF, Ameli, impôts...).</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-bold">Activez le 2FA partout</h4>
                        <p className="text-sm text-muted-foreground">L'authentification à deux facteurs bloque l'accès même si quelqu'un connaît votre mot de passe.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">6</div>
                      <div>
                        <h4 className="font-bold">Surveillez votre courrier postal</h4>
                        <p className="text-sm text-muted-foreground">Les fraudeurs connaissent votre adresse. Soyez vigilant sur tout courrier inhabituel, surtout s'il demande des documents ou de l'argent.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
                    <Shield className="h-5 w-5" /> Vigilance Continue
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">7</div>
                      <div>
                        <h4 className="font-bold">Signalez toute tentative de fraude</h4>
                        <p className="text-sm text-muted-foreground">Rendez-vous sur <a href="https://www.cybermalveillance.gouv.fr" className="text-primary hover:underline" target="_blank">cybermalveillance.gouv.fr</a> pour signaler les tentatives d'arnaque et obtenir de l'aide.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">8</div>
                      <div>
                        <h4 className="font-bold">Informez votre entourage</h4>
                        <p className="text-sm text-muted-foreground">Prévenez vos proches également concernés (famille venue via regroupement familial par exemple) des risques et des précautions à prendre.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Kinsta */}
          <section className="my-16 bg-gradient-to-br from-slate-950 to-slate-900 text-white p-12 rounded-3xl border border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <Server className="h-12 w-12 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Pour les Développeurs et Entreprises</h2>
                <p className="text-slate-400">Protégez les données de vos utilisateurs</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8">
              Cette nouvelle fuite démontre une fois de plus que les prestataires sont le maillon faible de la chaîne de sécurité. Si vous développez des applications gérant des données sensibles, choisissez un hébergement qui prend la sécurité au sérieux. <strong>Kinsta</strong> offre une isolation totale, le 2FA obligatoire, et une conformité aux standards les plus stricts.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Lock className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Isolation Totale</h4>
                <p className="text-xs text-slate-400">Chaque site dans son conteneur</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">2FA Obligatoire</h4>
                <p className="text-xs text-slate-400">Tous les accès protégés</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <Eye className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-bold mb-1">Logs Complets</h4>
                <p className="text-xs text-slate-400">Traçabilité de toutes les actions</p>
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

          {/* Réactions */}
          <section id="reactions" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              Réactions Officielles
            </h2>

            <div className="space-y-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Plane className="h-5 w-5 text-primary" /> OFII (Office Français de l'Immigration et de l'Intégration)
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Une cyberattaque le 1 janvier 2026 a eu des conséquences sur un système d'information de l'OFII. Cette action malveillante a utilisé un prestataire qui a accès à certaines données des signataires du contrat d'intégration républicaine. Dès la connaissance de cette intrusion, les mesures de sécurisation ont été prises."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué officiel X/Twitter, 1er janvier 2026</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" /> Procureur de Paris
                  </h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Une enquête préliminaire a été ouverte pour intrusion dans un système de traitement automatisé de données et collecte frauduleuse de données personnelles. Les investigations sont en cours pour identifier les auteurs de cette attaque."
                  </blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— Communiqué du Parquet de Paris, 2 janvier 2026</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contexte */}
          <section id="contexte" className="my-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Network className="h-8 w-8 text-primary" />
              Contexte : La Vague de Cyberattaques Continue
            </h2>

            <p>
              Cette attaque s'inscrit dans une série préoccupante d'incidents touchant les administrations et les données des Français. L'année 2025-2026 restera comme une période noire pour la cybersécurité nationale.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-slate-100 dark:bg-slate-900">
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Cible</th>
                    <th className="text-center p-3">Victimes</th>
                    <th className="text-left p-3">Données</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Fév. 2025</td>
                    <td className="p-3">Viamedis/Almerys</td>
                    <td className="text-center p-3 font-bold text-red-600">33 millions</td>
                    <td className="p-3">N° sécu, états civils</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Juil.-Déc. 2025</td>
                    <td className="p-3">France Travail (3 incidents)</td>
                    <td className="text-center p-3 font-bold text-red-600">2+ millions</td>
                    <td className="p-3">Identités, N° sécu</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-bold">Jan. 2026</td>
                    <td className="p-3 font-bold">OFII/ANEF</td>
                    <td className="text-center p-3 font-bold text-red-600">2,1 millions</td>
                    <td className="p-3 font-bold">Dossiers complets</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Jan. 2026</td>
                    <td className="p-3">Ministère Intérieur (TAJ/FPR)</td>
                    <td className="text-center p-3 font-bold text-amber-600">~100 fiches</td>
                    <td className="p-3">Fichiers police</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Jan. 2026</td>
                    <td className="p-3">URSSAF</td>
                    <td className="text-center p-3 font-bold text-red-600">12 millions</td>
                    <td className="p-3">Données salariés</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Face à cette situation, le gouvernement a lancé le <strong>programme CaRE</strong> (Cybersécurité, Accélération, Résilience) pour renforcer la protection des infrastructures critiques. Mais les résultats tardent à se faire sentir, et les attaques continuent de se multiplier.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="my-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion : Une Population Vulnérable en Première Ligne</h2>
            
            <p>
              Le piratage de l'OFII/ANEF illustre une réalité préoccupante : les données les plus sensibles des populations les plus vulnérables sont les moins bien protégées. Les ressortissants étrangers en France, déjà confrontés à la complexité administrative de leurs démarches, doivent maintenant faire face à un risque supplémentaire d'usurpation d'identité et de fraude.
            </p>

            <p>
              La compromission d'un prestataire tiers, une fois de plus, démontre que la sécurité d'une chaîne se mesure à son maillon le plus faible. Les administrations françaises doivent impérativement renforcer leurs exigences de sécurité envers leurs sous-traitants et mettre en place des contrôles réguliers.
            </p>

            <p>
              Pour les 2,1 millions de personnes potentiellement touchées, la vigilance est de mise. Les mois à venir verront probablement une recrudescence des tentatives de phishing et d'escroquerie utilisant les données volées. En suivant les recommandations de ce guide, vous réduirez significativement les risques.
            </p>

            <div className="bg-primary/10 p-8 rounded-2xl my-8 border border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> Ressources Utiles
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Cybermalveillance :</strong> <a href="https://www.cybermalveillance.gouv.fr" className="text-primary hover:underline" target="_blank">cybermalveillance.gouv.fr</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>OFII :</strong> <a href="https://www.ofii.fr" className="text-primary hover:underline" target="_blank">ofii.fr</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>Portail ANEF :</strong> <a href="https://etrangers-en-france.interieur.gouv.fr" className="text-primary hover:underline" target="_blank">etrangers-en-france.interieur.gouv.fr</a>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <strong>CNIL :</strong> <a href="https://www.cnil.fr/fr/plaintes" className="text-primary hover:underline" target="_blank">cnil.fr/fr/plaintes</a>
                </li>
              </ul>
            </div>
          </section>
        </article>

        {/* Related Articles */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6">Lectures Recommandées</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/article/performance-wordpress-1-seconde-2026">
              <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
                <h4 className="font-bold mb-2">Performance WordPress 2026</h4>
                <p className="text-sm text-muted-foreground">Comment passer sous la barre des 1 seconde</p>
              </Card>
            </Link>
            <Link href="/article/vulnerabilites-wordpress-2026">
              <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
                <h4 className="font-bold mb-2">Vulnérabilités WordPress 2026</h4>
                <p className="text-sm text-muted-foreground">Les failles critiques et comment s'en protéger</p>
              </Card>
            </Link>
            <Link href="/audit-site">
              <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
                <h4 className="font-bold mb-2">Audit de performance gratuit</h4>
                <p className="text-sm text-muted-foreground">Analysez votre site en temps réel</p>
              </Card>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un Audit de Sécurité ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Votre entreprise gère-t-elle des données sensibles ? Testez gratuitement la sécurité de votre infrastructure avec notre outil d'audit.
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
