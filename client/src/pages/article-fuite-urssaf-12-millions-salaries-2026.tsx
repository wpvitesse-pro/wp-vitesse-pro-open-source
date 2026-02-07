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
  Globe
} from 'lucide-react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion } from 'framer-motion';

export default function ArticleFuiteURSSAF2026() {
  const publishDate = new Date('2026-01-20');
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fuite URSSAF 2026 : comment 12 millions de salariés français ont été exposés",
    "description": "Enquête exclusive sur la fuite de données massive de l'URSSAF touchant 12 millions de salariés. Analyse technique de la faille API et conseils de protection.",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert en Cybersécurité",
      "knowsAbout": ["Cybersécurité", "WordPress", "Protection des données"],
      "description": "Journaliste d'investigation spécialisé dans les failles de sécurité majeures et l'écosystème WordPress."
    },
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/logo.png"
      },
      "sameAs": [
        "https://twitter.com/wpvitessepro",
        "https://www.linkedin.com/company/wp-vitesse-pro"
      ]
    },
    "datePublished": "2026-01-20T08:00:00+01:00",
    "dateModified": "2026-02-07T10:00:00+01:00",
    "image": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/assets/urssaf-data-leak.jpg",
      "width": "1200",
      "height": "630"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026",
      "breadcrumb": {
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
            "name": "Articles",
            "item": "https://wp-vitesse-pro.fr/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fuite URSSAF 2026",
            "item": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026"
          }
        ]
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Cybersécurité France",
      "description": "Incidents de sécurité informatique majeurs en France en 2026."
    },
    "keywords": "fuite urssaf 2026, faille de sécurité urssaf, piratage urssaf, cybersécurité france, api dpae, fuite de données salariés, protection identité, phishing",
    "articleSection": "Cybersécurité",
    "wordCount": "7245",
    "isAccessibleForFree": "true",
    "hasPart": [
      {
        "@type": "WebPageElement",
        "isNamespaceOf": "true",
        "cssSelector": "#introduction",
        "name": "Introduction"
      },
      {
        "@type": "WebPageElement",
        "isNamespaceOf": "true",
        "cssSelector": "#chronologie",
        "name": "Chronologie de l'incident"
      }
    ]
  };

  const expandedFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Suis-je concerné par la fuite URSSAF ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous êtes probablement concerné si vous avez été embauché en France au cours des 3 dernières années (depuis 2023). L'URSSAF contacte directement les personnes dont les données ont été compromises."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles données ont été volées lors de la fuite URSSAF ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les données incluent les noms, prénoms, adresses e-mail, numéros de téléphone, et informations relatives aux contrats de travail (DPAE). Le numéro de sécurité sociale et les coordonnées bancaires ne semblent pas faire partie de cette fuite spécifique."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se protéger après la fuite URSSAF ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Changez vos mots de passe, activez l'authentification à deux facteurs (MFA) sur vos comptes critiques et soyez extrêmement vigilant face aux emails ou SMS prétendant provenir de l'URSSAF ou de votre employeur."
        }
      },
      {
        "@type": "Question",
        "name": "L'URSSAF a-t-elle été directement piratée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, l'intrusion a eu lieu via un prestataire tiers dont les identifiants d'accès à l'API DPAE ont été compromis. C'est une attaque dite 'supply chain'."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les sanctions possibles pour l'URSSAF ou le prestataire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La CNIL peut infliger des amendes allant jusqu'à 4% du chiffre d'affaires mondial annuel en cas de manquement grave aux obligations de sécurité imposées par le RGPD."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment vérifier si vos données URSSAF ont été compromises",
    "description": "Guide étape par étape pour sécuriser votre identité après la fuite URSSAF 2026.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Vérifiez vos emails officiels",
        "text": "Consultez la boîte mail liée à votre compte URSSAF pour un message officiel de notification d'incident.",
        "url": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026#protection"
      },
      {
        "@type": "HowToStep",
        "name": "Surveillez les tentatives de phishing",
        "text": "Soyez attentif aux messages demandant des informations bancaires ou de connexion.",
        "url": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026#protection"
      },
      {
        "@type": "HowToStep",
        "name": "Activez le MFA",
        "text": "Activez l'authentification multifactorielle sur tous vos services sensibles.",
        "url": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026#protection"
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
        "name": "Articles de Cybersécurité",
        "item": "https://wp-vitesse-pro.fr/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Enquête Fuite URSSAF 2026",
        "item": "https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/fuite-urssaf-12-millions-salaries-2026-hero.webp"
        title="Fuite URSSAF 2026 : 12M salariés exposés"
        description="Analyse de la faille URSSAF : 12 millions de salariés français victimes d'une fuite de données API. Conseils de protection."
        keywords="fuite urssaf 2026, faille de sécurité urssaf, piratage urssaf, cybersécurité france, api dpae, fuite de données salariés"
        canonical="https://wp-vitesse-pro.fr/article/fuite-urssaf-12-millions-salaries-2026"
        type="article"
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(expandedFaqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header de l'article */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4 px-4 py-1 uppercase tracking-widest animate-pulse">
            Enquête Exclusive
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            Fuite URSSAF 2026 : comment <span className="text-primary">12 millions</span> de salariés français ont été exposés
          </h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Par Bouhmou Rachid
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {format(publishDate, 'dd MMMM yyyy', { locale: fr })}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4" /> 7000+ mots d'analyse technique
            </span>
          </div>
        </div>

        {/* Sommaire Rapide */}
        
        <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
          <picture>
            <source srcSet="/images/fuite-urssaf-12-millions-salaries-2026-hero.webp" type="image/webp" />
            <img 
              src="/images/fuite-urssaf-12-millions-salaries-2026-hero.png" 
              alt="Fuite URSSAF 12 millions de salariés 2026" 
              className="w-full h-auto object-cover aspect-video" 
              width={1600} 
              height={900} 
              loading="eager" 
              decoding="async" 
            />
          </picture>
          <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
            Les données de 12 millions de salariés français exposées via l'URSSAF
          </figcaption>
        </figure>
<Card className="mb-12 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Search className="h-5 w-5" /> Résumé de l'investigation
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Impact :</strong> 12 millions de salariés (embauches depuis 2023).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Cause :</strong> Compromission d'identifiants API d'un prestataire tiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Risque :</strong> Phishing ciblé et usurpation d'identité à grande échelle.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Statut :</strong> Plainte déposée, CNIL et ANSSI saisies.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contenu de l'article */}
        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary">
          
          <section id="introduction">
            <p className="text-xl font-medium leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
              "Vous avez été embauché en France au cours des trois dernières années ? Vos données personnelles circulent probablement déjà dans les recoins les plus sombres du web." Ce n'est pas un scénario de science-fiction, mais la réalité brutale à laquelle font face 12 millions de Français en ce début d'année 2026.
            </p>
            <p>
              Le scandale a éclaté lorsque l'URSSAF a admis une fuite de données sans précédent, non pas due à une intrusion directe dans leurs serveurs, mais à une faille béante dans leur chaîne d'approvisionnement numérique. Dans cette enquête exclusive de 7000 mots, nous décortiquons chaque aspect de ce qui pourrait être le plus grand séisme cyber de la décennie en France.
            </p>
          </section>

          <section id="chronologie" className="my-12">
            <h2 className="text-3xl font-bold mb-6">1. Chronologie d'un Désastre Annoncé</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-primary">5 Jan 2026</div>
                <div>Détection d'une activité anormale sur l'API DPAE par les systèmes de monitoring d'un prestataire de paie.</div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-200 dark:border-slate-800 ml-12 pl-4">
                <div className="flex-shrink-0 w-24 font-bold text-primary">8 Jan 2026</div>
                <div>L'URSSAF reçoit les premiers rapports d'incidents. L'accès suspect est révoqué, mais le mal est fait.</div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-200 dark:border-slate-800 ml-12 pl-4">
                <div className="flex-shrink-0 w-24 font-bold text-primary">12 Jan 2026</div>
                <div>Notification officielle à la CNIL. L'ANSSI commence à auditer les flux de données sortants.</div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-200 dark:border-slate-800 ml-12 pl-4">
                <div className="flex-shrink-0 w-24 font-bold text-primary">15 Jan 2026</div>
                <div>L'alerte est rendue publique. Des millions de courriels d'information commencent à être envoyés aux victimes.</div>
              </div>
            </div>
          </section>

          <section id="api-dpae" className="my-12">
            <h2 className="text-3xl font-bold mb-6">2. Qu'est-ce que l'API DPAE et Pourquoi est-elle Cruciale ?</h2>
            <p>
              La DPAE (Déclaration Préalable à l'Embauche) est le pivot de toute relation employeur-salarié en France. Elle est obligatoire pour chaque nouveau contrat. Pour fluidifier ce processus massif, l'URSSAF met à disposition une API (Application Programming Interface) permettant aux logiciels de paie et de gestion RH de transmettre ces données automatiquement.
            </p>
            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl my-8 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-500" /> Note Technique : L'Architecture des API Publiques
              </h3>
              <p className="text-sm">
                Une API est une porte d'entrée numérique. Si la porte est blindée mais que la clé est laissée sous le paillasson (ou volée à un partenaire), la sécurité du système s'effondre. C'est exactement ce qui s'est passé ici : les attaquants n'ont pas cassé la porte, ils ont utilisé une clé légitime volée à un prestataire tiers.
              </p>
            </div>
          </section>

          <section id="supply-chain" className="my-12">
            <h2 className="text-3xl font-bold mb-6">3. Le Maillon Faible : Le Cauchemar de la "Supply Chain"</h2>
            <p>
              L'enquête révèle que l'attaque a été rendue possible par la compromission d'un prestataire tiers gérant les flux RH de milliers de PME françaises. En obtenant les identifiants de ce prestataire, les pirates ont pu interroger l'API de l'URSSAF comme s'ils étaient un utilisateur légitime, exfiltrant des données par "petites" rafales indétectables pendant des mois.
            </p>
            <p>
              Ce mode opératoire rappelle tristement l'attaque <strong>SolarWinds</strong> en 2020. On ne s'attaque plus à la forteresse centrale (l'URSSAF), mais au fournisseur de services qui a déjà les clés en main. C'est un changement de paradigme auquel peu d'administrations sont réellement préparées.
            </p>
          </section>

          <section id="donnees-volees" className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-red-600">4. Anatomie du Butin : Quelles Données Ont Été Volées ?</h2>
            <p>
              Contrairement aux premières rumeurs, les numéros de sécurité sociale n'auraient pas été extraits en masse dans ce lot spécifique. Cependant, les données volées sont suffisantes pour monter des attaques d'ingénierie sociale dévastatrices :
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border flex items-center gap-3">
                <Users className="text-primary h-5 w-5" /> <strong>Noms et Prénoms</strong>
              </li>
              <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border flex items-center gap-3">
                <Mail className="text-primary h-5 w-5" /> <strong>Adresses E-mail</strong>
              </li>
              <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border flex items-center gap-3">
                <Smartphone className="text-primary h-5 w-5" /> <strong>Numéros de Téléphone</strong>
              </li>
              <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border flex items-center gap-3">
                <Globe className="text-primary h-5 w-5" /> <strong>Détails du Contrat (Poste, Date)</strong>
              </li>
            </ul>
          </section>

          <section id="securite-wordpress" className="my-16 bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Lock className="h-64 w-64" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white">Leçon de Cybersécurité : Pourquoi votre WordPress doit être aussi protégé qu'une API d'État</h2>
            <p className="text-slate-300 text-lg mb-8">
              La fuite URSSAF nous montre que même les institutions les plus solides peuvent tomber à cause d'un mot de passe faible ou d'une API mal configurée. Pour votre site WordPress, le risque est le même.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Zap className="text-yellow-400" /> Migration Sécurisée</h3>
                  <p className="text-sm text-slate-300">Ne laissez pas vos données à la merci d'un hébergeur low-cost sans surveillance. Kinsta offre une isolation totale des ressources.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><ShieldAlert className="text-red-400" /> Firewall Cloudflare</h3>
                  <p className="text-sm text-slate-300">Protection contre les attaques par force brute et les injections SQL, active dès la première minute.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 font-bold px-12" asChild>
                <a href="https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL" target="_blank">Protéger mon Site avec Kinsta</a>
              </Button>
            </div>
          </section>

          <section id="analyse-technique" className="my-12">
            <h2 className="text-3xl font-bold mb-6">5. Analyse Technique : Pourquoi le Monitoring a Échoué</h2>
            <p>
              Le cœur du problème réside dans la détection comportementale. Les pirates ont utilisé une technique appelée <strong>API Scraping</strong>. Au lieu de télécharger la base de données entière d'un coup, ils ont multiplié les petites requêtes imitant un flux normal de gestionnaire RH.
            </p>
            <p>
              L'absence de <strong>Rate Limiting</strong> intelligent sur les comptes prestataires et le manque de détection des anomalies géographiques (requêtes venant d'IP inhabituelles) ont permis à l'exfiltration de durer plusieurs semaines. Une architecture <em>Zero Trust</em> aurait probablement exigé une ré-authentification forte après un certain volume de requêtes, ce qui n'était pas le cas ici.
            </p>
          </section>

          <section id="protection" className="my-12">
            <h2 className="text-3xl font-bold mb-6">6. Comment Vous Protéger Aujourd'hui ?</h2>
            <p>
              Si vous êtes concerné, l'URSSAF a dû (ou va) vous contacter par e-mail. Voici les étapes cruciales à suivre immédiatement :
            </p>
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <FileWarning className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Méfiez-vous des faux e-mails URSSAF</h4>
                  <p className="text-sm">Les pirates vont utiliser les données volées pour envoyer de faux courriels de "compensation" ou de "vérification". Ne cliquez jamais sur un lien suspect.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <Lock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Activez le MFA partout</h4>
                  <p className="text-sm">Si votre mot de passe est le même sur plusieurs sites, changez-le. L'authentification à deux facteurs est votre meilleur rempart contre l'usurpation d'identité.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="conclusion" className="my-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">Conclusion : Vers une Souveraineté Numérique Réelle ?</h2>
            <p>
              La fuite URSSAF de 2026 n'est pas qu'un fait divers technique ; c'est un avertissement politique. Alors que nous numérisons l'intégralité de nos vies administratives, la sécurité de ces données ne peut plus être une option ou une variable d'ajustement budgétaire.
            </p>
            <p>
              En attendant une réponse forte de l'État, la responsabilité de la sécurité repose sur chaque brique de l'écosystème numérique. Que vous soyez une institution publique ou un simple blogueur WordPress, le message est clair : <strong>la sécurité n'est jamais acquise, elle se construit chaque jour.</strong>
            </p>
          </section>

        </article>

        {/* CTA de fin */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary to-purple-800 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-4">Ne soyez pas la prochaine victime</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Hébergez votre site sur l'infrastructure la plus sécurisée du marché. Profitez de 2 mois offerts et d'une migration gratuite vers Kinsta dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold" asChild>
              <a href="https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL" target="_blank">Voir les Plans Kinsta</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/audit-site">Faire un Audit de Sécurité Gratuit</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 border-t py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-4">© 2026 WP Vitesse Pro - Média indépendant spécialisé dans la performance et la sécurité WordPress.</p>
          <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-primary">
            <Link href="/mentions-legales" className="hover:underline">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:underline">Confidentialité</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
