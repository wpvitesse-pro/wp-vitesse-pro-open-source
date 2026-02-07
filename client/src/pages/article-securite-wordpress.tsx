import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  AlertTriangle, 
  Shield, 
  Lock, 
  Eye,
  CheckCircle,
  XCircle,
  Zap,
  Server,
  Database,
  Code,
  Bug,
  FileWarning,
  Users,
  Clock,
  TrendingUp,
  Activity,
  Target,
  AlertCircle,
  KeyRound,
  Globe,
  Wifi,
  HardDrive,
  RefreshCw,
  Search,
  FileCode,
  Terminal,
  ShieldCheck,
  ShieldAlert,
  Skull,
  Fingerprint,
  Network,
  CloudOff,
  BookOpen,
  ExternalLink
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";
import { Link } from "wouter";
import { ShareButtons } from "@/components/share-buttons";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

const ARTICLE_DATA = {
  title: "Sécurité WordPress 2026 : guide ultime des 7 menaces critiques et 47 solutions expertes",
  metaTitle: "Sécurité WordPress 2026 : 7 Menaces Critiques + 47 Solutions (Guide Expert)",
  description: "Guide complet sécurité WordPress 2026. 7 menaces critiques, 47 solutions expertes, statistiques exclusives. Protégez votre site contre les hackers, malwares et ransomwares.",
  datePublished: "2026-02-02T09:00:00Z",
  dateModified: "2026-02-02T09:00:00Z",
  author: "Bouhmou Rachid",
  readTime: "45 min",
  wordCount: 8200,
  category: "Sécurité WordPress"
};

const securityStats2026 = [
  { stat: "4.7M", label: "Sites WordPress piratés en 2025", trend: "+23%" },
  { stat: "94%", label: "Attaques via plugins vulnérables", trend: "+12%" },
  { stat: "39s", label: "1 site WordPress attaqué toutes les...", trend: "-15%" },
  { stat: "€156K", label: "Coût moyen d'une violation de données PME", trend: "+34%" }
];

const faqItems = [
  {
    question: "Mon site WordPress peut-il vraiment être piraté ?",
    answer: "Absolument. WordPress représente 43% du web mondial, ce qui en fait la cible n°1 des hackers. Chaque minute, plus de 90 000 tentatives d'attaque visent des sites WordPress. Sans protection adéquate (mises à jour, WAF, mots de passe forts), votre site est une cible facile. Les hackers utilisent des robots automatisés qui scannent Internet 24h/24 à la recherche de sites vulnérables."
  },
  {
    question: "Quels sont les signes qu'un site WordPress a été piraté ?",
    answer: "Les signes les plus courants incluent : redirections vers des sites suspects, pages ou articles inconnus créés automatiquement, ralentissement inexpliqué du site, alertes de sécurité Google ('Ce site peut être piraté'), envoi de spam depuis votre serveur, fichiers modifiés récemment sans votre intervention, nouveaux utilisateurs admin créés, et messages de rançon demandant un paiement Bitcoin."
  },
  {
    question: "Combien coûte la sécurisation d'un site WordPress ?",
    answer: "Les solutions de base (plugins gratuits comme Wordfence) coûtent 0€ mais offrent une protection limitée. Les solutions premium (Sucuri, MalCare) coûtent 99-299€/an. Un hébergement sécurisé managé comme Kinsta (à partir de 35€/mois) inclut WAF Cloudflare Enterprise, monitoring 24/7, sauvegardes automatiques et nettoyage gratuit en cas de piratage - le meilleur rapport qualité/protection."
  },
  {
    question: "Quelle est la différence entre un WAF et un antivirus WordPress ?",
    answer: "Un WAF (Web Application Firewall) agit en amont : il filtre et bloque les requêtes malveillantes AVANT qu'elles n'atteignent votre site (injections SQL, XSS, brute force). Un antivirus/scanner WordPress agit en aval : il détecte et nettoie les fichiers déjà infectés APRÈS une compromission. Pour une protection optimale, vous avez besoin des deux. Kinsta inclut le WAF Cloudflare Enterprise qui bloque 99% des attaques."
  },
  {
    question: "À quelle fréquence dois-je mettre à jour WordPress et ses plugins ?",
    answer: "Immédiatement après chaque sortie de mise à jour de sécurité (patches critiques). Pour les mises à jour mineures, un délai de 24-48h est acceptable pour laisser la communauté tester. Pour les mises à jour majeures (WordPress 6.x vers 7.x), testez d'abord sur un environnement de staging. Kinsta propose les mises à jour automatiques avec rollback instantané en cas de problème."
  },
  {
    question: "Le certificat SSL suffit-il à protéger mon site WordPress ?",
    answer: "Non, le SSL (HTTPS) chiffre uniquement la communication entre le navigateur et le serveur. Il protège contre l'interception de données (man-in-the-middle) mais ne protège pas contre : les attaques par force brute, les injections SQL, les malwares, les backdoors dans les plugins, ou le vol d'identifiants admin. Le SSL est une brique essentielle mais insuffisante seule."
  },
  {
    question: "Dois-je utiliser un plugin de sécurité si j'ai Kinsta ?",
    answer: "Kinsta inclut déjà une protection complète au niveau serveur : WAF Cloudflare Enterprise, isolation par conteneurs LXD, blocage des IP malveillantes, monitoring 24/7, et sauvegardes automatiques. Un plugin de sécurité supplémentaire peut ajouter des fonctionnalités (2FA, audit des utilisateurs) mais n'est pas indispensable. Évitez les plugins de sécurité lourds qui dupliquent les fonctionnalités déjà fournies par Kinsta."
  },
  {
    question: "Comment récupérer un site WordPress piraté ?",
    answer: "Étape 1 : Isolez le site (mode maintenance). Étape 2 : Changez tous les mots de passe (admin, FTP, base de données). Étape 3 : Scannez avec un outil comme Sucuri ou MalCare. Étape 4 : Restaurez une sauvegarde saine antérieure à l'infection. Étape 5 : Mettez à jour tout (WordPress, plugins, thèmes). Étape 6 : Demandez le réexamen à Google si blacklisté. Avec Kinsta, le nettoyage est GRATUIT et effectué par leurs experts."
  },
  {
    question: "Les thèmes et plugins nulled (piratés) sont-ils vraiment dangereux ?",
    answer: "Extrêmement dangereux. 98% des thèmes et plugins nulled contiennent des backdoors, des malwares ou des scripts de cryptominage. Les hackers distribuent intentionnellement des versions 'gratuites' de plugins premium pour infecter des sites. Une économie de 50€ sur un plugin peut vous coûter des milliers d'euros en nettoyage, perte de données et pénalités SEO. N'utilisez JAMAIS de ressources piratées."
  },
  {
    question: "Quelle est la meilleure stratégie de sauvegarde WordPress ?",
    answer: "La règle 3-2-1 : 3 copies de vos données, sur 2 supports différents, dont 1 hors site. Sauvegardez quotidiennement les fichiers ET la base de données. Testez régulièrement la restauration. Conservez au minimum 30 jours d'historique. Kinsta effectue des sauvegardes automatiques quotidiennes avec 14 jours de rétention et restauration en 1 clic depuis le tableau de bord MyKinsta."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://wp-vitesse-pro.fr" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://wp-vitesse-pro.fr/blog" },
    { "@type": "ListItem", "position": 3, "name": "Sécurité WordPress 2026", "item": "https://wp-vitesse-pro.fr/article/securite-wordpress" }
  ]
};

export default function ArticleSecuriteWordPress() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_securite_wordpress', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ARTICLE_DATA.title,
    "description": ARTICLE_DATA.description,
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "datePublished": ARTICLE_DATA.datePublished,
    "dateModified": ARTICLE_DATA.dateModified,
    "wordCount": ARTICLE_DATA.wordCount,
    "author": {
      "@type": "Person",
      "name": ARTICLE_DATA.author,
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert Hébergement WordPress & Cybersécurité",
      "sameAs": [
        "https://www.linkedin.com/in/rachid-bouhmou-81823a3a1",
        "https://twitter.com/jmorel_cyber"
      ],
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
        "url": "https://wp-vitesse-pro.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/article/securite-wordpress"
    }
  };

  const schema = [articleSchema, faqSchema, breadcrumbSchema];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <SEO
        image="https://wp-vitesse-pro.fr/images/securite-wordpress-hero.webp"
        title={ARTICLE_DATA.metaTitle}
        description={ARTICLE_DATA.description}
        canonical="https://wp-vitesse-pro.fr/article/securite-wordpress"
        type="article"
        schema={schema}
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          
          <header className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Sécurité WordPress</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="destructive" className="animate-pulse bg-red-600 text-white border-none">MISE À JOUR 2026</Badge>
              <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">{ARTICLE_DATA.category}</Badge>
              <Badge variant="secondary" className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{ARTICLE_DATA.wordCount.toLocaleString()} mots</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {ARTICLE_DATA.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              WordPress alimente 43% du web mondial. Ce succès en fait aussi la cible n°1 des cybercriminels. 
              En 2025, plus de 4,7 millions de sites WordPress ont été compromis. Ce guide expert de 8000+ mots 
              vous révèle les 7 menaces les plus critiques et 47 solutions concrètes pour transformer votre site 
              en forteresse imprenable.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Par {ARTICLE_DATA.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {ARTICLE_DATA.readTime} de lecture
              </span>
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Mis à jour le 2 février 2026
              </span>
            </div>

            <ShareButtons 
              url="https://wp-vitesse-pro.fr/article/securite-wordpress" 
              title={ARTICLE_DATA.title} 
            />
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/securite-wordpress-hero.webp" type="image/webp" />
              <img 
                src="/images/securite-wordpress-hero.png" 
                alt="Sécurité WordPress - Guide complet de protection" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Guide complet pour sécuriser votre site WordPress contre les menaces
            </figcaption>
          </figure>

          <Card className="mb-10 bg-red-50 dark:bg-red-950/30 border-red-500/50 border-l-4">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-red-900 dark:text-red-100 mb-2 text-lg">
                    Alerte Sécurité Février 2026
                  </p>
                  <p className="text-red-800 dark:text-red-200 mb-3">
                    Une vague massive d'attaques cible actuellement les sites WordPress utilisant des plugins non mis à jour. 
                    Plus de 150 000 sites compromis cette semaine. Vérifiez immédiatement vos plugins et mettez-les à jour.
                  </p>
                  <Link href="/article/7-failles-critiques-fevrier-2026">
                    <Button variant="destructive" size="sm">
                      Voir les 7 failles critiques de février 2026
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {securityStats2026.map((item, index) => (
              <Card key={index} className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-primary">{item.stat}</p>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <Badge 
                  variant={item.trend.startsWith('+') ? "destructive" : "default"} 
                  className={`text-xs ${item.trend.startsWith('+') ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
                >
                  {item.trend}
                </Badge>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-slate-50 dark:bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Table des Matières
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid md:grid-cols-2 gap-2 text-sm">
                <a href="#introduction" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary-foreground dark:text-primary font-bold text-xs flex items-center justify-center">1</span>
                  Introduction : WordPress, Cible N°1
                </a>
                <a href="#menace-1" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">2</span>
                  Menace #1 : Mots de Passe Faibles
                </a>
                <a href="#menace-2" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">3</span>
                  Menace #2 : Mises à Jour Ignorées
                </a>
                <a href="#menace-3" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">4</span>
                  Menace #3 : Plugins Vulnérables
                </a>
                <a href="#menace-4" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">5</span>
                  Menace #4 : Absence de Sauvegardes
                </a>
                <a href="#menace-5" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">6</span>
                  Menace #5 : Droits Utilisateurs Excessifs
                </a>
                <a href="#menace-6" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">7</span>
                  Menace #6 : Absence de Monitoring
                </a>
                <a href="#menace-7" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">8</span>
                  Menace #7 : Pas de WAF
                </a>
                <a href="#types-attaques" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">9</span>
                  12 Types d'Attaques WordPress
                </a>
                <a href="#checklist" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">10</span>
                  Checklist Sécurité 47 Points
                </a>
                <a href="#hebergement" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary-foreground dark:text-primary font-bold text-xs flex items-center justify-center">11</span>
                  Rôle de l'Hébergement
                </a>
                <a href="#faq" className="hover:text-primary flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-h-11">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary-foreground dark:text-primary font-bold text-xs flex items-center justify-center">12</span>
                  FAQ Sécurité (10 Questions)
                </a>
              </nav>
            </CardContent>
          </Card>

          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Introduction : Pourquoi WordPress est la Cible N°1 des Hackers
            </h2>
            
            <p className="text-lg mb-6">
              WordPress domine le web avec une part de marché de 43,1% en 2026. Cette omniprésence fait de 
              lui une cible privilégiée pour les cybercriminels. Un seul exploit découvert peut potentiellement 
              affecter des millions de sites simultanément, ce qui rend l'investissement des hackers 
              particulièrement rentable.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-xl mb-4">Anatomie d'une Attaque WordPress Typique</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">Reconnaissance (5-10 minutes)</p>
                    <p className="text-sm text-muted-foreground">Le bot scanne votre site pour identifier la version WordPress, les plugins installés, les thèmes actifs et les vulnérabilités connues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold">Exploitation (quelques secondes)</p>
                    <p className="text-sm text-muted-foreground">Une faille est exploitée : plugin vulnérable, mot de passe faible, injection SQL, XSS, ou fichier de configuration exposé.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold">Installation de Backdoor (1-2 minutes)</p>
                    <p className="text-sm text-muted-foreground">Le hacker installe un accès permanent caché dans un fichier PHP apparemment innocent, souvent dans wp-includes ou un dossier d'uploads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold">Exploitation Continue (jours/semaines)</p>
                    <p className="text-sm text-muted-foreground">Votre site sert à envoyer du spam, héberger du phishing, miner des cryptomonnaies, ou attaquer d'autres sites. Vous ne vous en rendez souvent pas compte.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-6">
              La bonne nouvelle ? 99% des attaques sont évitables avec les bonnes pratiques. Ce guide vous 
              révèle exactement ce que font les hackers et comment les arrêter. Commençons par les 7 erreurs 
              les plus critiques qui exposent votre site.
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <p className="font-semibold mb-2">À lire également :</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/article/wordpress-lent" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      WordPress Lent ? 5 Solutions Immédiates
                    </Link>
                  </li>
                  <li>
                    <Link href="/audit-site" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Auditez la sécurité de votre site gratuitement
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="menace-1" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <KeyRound className="w-8 h-8 text-red-500" />
              Menace #1 : Mots de Passe Faibles et Attaques par Force Brute
            </h2>

            <Card className="border-red-500/50 border-l-4 mb-8">
            <CardHeader className="bg-red-500/10 p-6">
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <Skull className="w-5 h-5" />
                Niveau de Danger : CRITIQUE
              </CardTitle>
            </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Les attaques par force brute représentent 16% de toutes les intrusions WordPress réussies. 
                  Un mot de passe comme "admin123" ou "password" est cracké en moins de 0,2 seconde par les 
                  robots modernes qui testent des milliers de combinaisons par minute.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Comment Fonctionnent les Attaques par Force Brute</h3>
            
            <p className="mb-6">
              Les hackers utilisent des botnets (réseaux de milliers d'ordinateurs infectés) pour tester 
              automatiquement des millions de combinaisons utilisateur/mot de passe. Ils ciblent prioritairement :
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>wp-admin</strong> et <strong>wp-login.php</strong> - les portes d'entrée classiques</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>XML-RPC</strong> (xmlrpc.php) - permet des tentatives massives en une seule requête</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>REST API</strong> - souvent moins protégée que les interfaces classiques</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Temps de Crackage Selon la Complexité du Mot de Passe</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Type de Mot de Passe</th>
                    <th className="border p-3 text-left">Exemple</th>
                    <th className="border p-3 text-left">Temps de Crackage</th>
                    <th className="border p-3 text-left">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">6 caractères minuscules</td>
                    <td className="border p-3 font-mono">admin1</td>
                    <td className="border p-3">0,2 seconde</td>
                    <td className="border p-3"><Badge variant="destructive">INACCEPTABLE</Badge></td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">8 caractères mixtes</td>
                    <td className="border p-3 font-mono">Admin123</td>
                    <td className="border p-3">12 minutes</td>
                    <td className="border p-3"><Badge variant="destructive">FAIBLE</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">12 caractères mixtes + symboles</td>
                    <td className="border p-3 font-mono">Admin@2026!</td>
                    <td className="border p-3">34 ans</td>
                    <td className="border p-3"><Badge variant="secondary">MOYEN</Badge></td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">16 caractères aléatoires</td>
                    <td className="border p-3 font-mono">Xk9#mP2$qL7@nR4!</td>
                    <td className="border p-3">1 milliard d'années</td>
                    <td className="border p-3"><Badge className="bg-green-500">EXCELLENT</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Passphrase</td>
                    <td className="border p-3 font-mono">ChevauRouge!Galope@Minuit</td>
                    <td className="border p-3">Incalculable</td>
                    <td className="border p-3"><Badge className="bg-green-500">IDÉAL</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mb-4">7 Solutions pour des Mots de Passe Inviolables</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Minimum 16 caractères", desc: "Plus c'est long, plus c'est sécurisé. La longueur prime sur la complexité." },
                { title: "Utilisez un gestionnaire", desc: "1Password, Bitwarden, ou Dashlane génèrent et stockent des mots de passe uniques." },
                { title: "Activez le 2FA/MFA", desc: "L'authentification à deux facteurs bloque 99,9% des attaques par force brute." },
                { title: "Bloquez XML-RPC", desc: "Désactivez xmlrpc.php si vous n'utilisez pas l'application mobile WordPress." },
                { title: "Limitez les tentatives", desc: "Verrouillez l'accès après 3-5 échecs. Kinsta le fait automatiquement." },
                { title: "Renommez l'URL d'admin", desc: "Changez wp-admin en une URL personnalisée (ex: /mon-acces-secret/)." },
                { title: "Évitez 'admin' comme login", desc: "Le nom d'utilisateur 'admin' est testé en premier par tous les bots." }
              ].map((solution, i) => (
                <Card key={i} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-green-900 dark:text-green-100">{solution.title}</p>
                        <p className="text-sm text-green-800 dark:text-green-200">{solution.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="menace-2" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-red-500" />
              Menace #2 : Mises à Jour Ignorées - Le Tueur Silencieux
            </h2>

            <Card className="border-red-500/50 border-l-4 mb-8">
              <CardHeader className="bg-red-500/10">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  Niveau de Danger : TRÈS ÉLEVÉ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  39,3% des sites WordPress piratés utilisaient une version obsolète du CMS. Les hackers 
                  surveillent les changelogs de sécurité WordPress pour identifier les failles corrigées 
                  et créer des exploits ciblant les sites non mis à jour.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Le Cycle de Vie d'une Vulnérabilité WordPress</h3>

            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl mb-8">
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 text-center">
                    <p className="font-bold text-lg">Jour 0</p>
                  </div>
                  <div className="flex-1 p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <p className="font-semibold">Découverte</p>
                    <p className="text-sm text-muted-foreground">Un chercheur en sécurité découvre une faille et la signale à WordPress.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 text-center">
                    <p className="font-bold text-lg">Jour 7</p>
                  </div>
                  <div className="flex-1 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="font-semibold">Patch Développé</p>
                    <p className="text-sm text-muted-foreground">L'équipe WordPress développe et teste le correctif en secret.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 text-center">
                    <p className="font-bold text-lg">Jour 14</p>
                  </div>
                  <div className="flex-1 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold">Mise à Jour Publiée</p>
                    <p className="text-sm text-muted-foreground">Le correctif est publié. Les détails de la faille deviennent publics.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 text-center">
                    <p className="font-bold text-lg text-red-600">Jour 15</p>
                  </div>
                  <div className="flex-1 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <p className="font-semibold text-red-600">Exploits en Circulation</p>
                    <p className="text-sm text-muted-foreground">Les hackers créent des outils automatisés ciblant les sites non mis à jour.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-6">
              <strong>La fenêtre de vulnérabilité est de 24-48 heures.</strong> Après la publication d'un patch, 
              les hackers commencent à exploiter massivement la faille. Chaque heure de retard dans la mise à 
              jour augmente exponentiellement votre risque.
            </p>

            <h3 className="text-2xl font-bold mb-4">Stratégie de Mise à Jour Optimale</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    Mises à Jour Automatiques (Recommandé)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mises à jour mineures WordPress : <strong>Automatique</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Plugins : <strong>Automatique</strong> avec Kinsta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Thèmes : <strong>Automatique</strong> avec Kinsta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Mises à jour majeures : <strong>Tester sur staging d'abord</strong></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Avantage Kinsta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mises à jour automatiques des plugins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Rollback instantané en 1 clic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Environnement de staging gratuit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Sauvegarde automatique avant chaque MAJ</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="menace-3" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Bug className="w-8 h-8 text-red-500" />
              Menace #3 : Plugins et Thèmes Vulnérables
            </h2>

            <Card className="border-red-500/50 border-l-4 mb-8">
              <CardHeader className="bg-red-500/10">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <FileWarning className="w-5 h-5" />
                  Niveau de Danger : TRÈS ÉLEVÉ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  <strong>94% des attaques WordPress exploitent des vulnérabilités dans les plugins.</strong> Le 
                  répertoire WordPress.org contient plus de 60 000 plugins, dont beaucoup sont abandonnés ou 
                  mal codés. Chaque plugin ajouté augmente votre surface d'attaque.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Les Plugins les Plus Ciblés en 2026</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Plugin</th>
                    <th className="border p-3 text-left">Installations</th>
                    <th className="border p-3 text-left">Failles 2025</th>
                    <th className="border p-3 text-left">Risque</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Elementor</td>
                    <td className="border p-3">5M+</td>
                    <td className="border p-3">12 CVE</td>
                    <td className="border p-3"><Badge variant="destructive">Élevé</Badge></td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">WPForms</td>
                    <td className="border p-3">6M+</td>
                    <td className="border p-3">4 CVE</td>
                    <td className="border p-3"><Badge variant="secondary">Moyen</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Contact Form 7</td>
                    <td className="border p-3">5M+</td>
                    <td className="border p-3">2 CVE</td>
                    <td className="border p-3"><Badge variant="secondary">Moyen</Badge></td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Jetpack</td>
                    <td className="border p-3">5M+</td>
                    <td className="border p-3">8 CVE</td>
                    <td className="border p-3"><Badge variant="destructive">Élevé</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">WooCommerce</td>
                    <td className="border p-3">5M+</td>
                    <td className="border p-3">6 CVE</td>
                    <td className="border p-3"><Badge variant="destructive">Élevé</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mb-4">Comment Évaluer la Sécurité d'un Plugin</h3>

            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Signes Positifs
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>Mises à jour régulières (moins de 3 mois)</li>
                    <li>Développeur réactif sur le support</li>
                    <li>Note moyenne supérieure à 4/5</li>
                    <li>Compatible avec la dernière version WP</li>
                    <li>Code open source auditable</li>
                    <li>Plus de 10 000 installations actives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Signaux d'Alerte
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>Dernière MAJ de plus de 6 mois</li>
                    <li>Avertissement "Non testé"</li>
                    <li>Note inférieure à 3/5</li>
                    <li>Moins de 1 000 installations</li>
                    <li>Aucune réponse aux tickets support</li>
                    <li>Source externe à WordPress.org</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Règle du Minimalisme : Moins = Plus Sécurisé</h3>

            <p className="mb-6">
              Chaque plugin ajouté est un vecteur d'attaque potentiel. Appliquez la règle des 3 questions 
              avant d'installer un plugin :
            </p>

            <ol className="list-decimal list-inside space-y-3 mb-8">
              <li><strong>Est-ce vraiment nécessaire ?</strong> Puis-je atteindre l'objectif avec du CSS/HTML/code personnalisé ?</li>
              <li><strong>Ce plugin est-il maintenu ?</strong> Dernière mise à jour, note, réactivité du développeur ?</li>
              <li><strong>Existe-t-il une alternative plus légère ?</strong> Un plugin avec moins de fonctionnalités = moins de failles potentielles.</li>
            </ol>

            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-500/50 mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-amber-900 dark:text-amber-100 mb-2">
                      Danger des Plugins/Thèmes Nulled (Piratés)
                    </p>
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      98% des thèmes et plugins nulled contiennent des backdoors ou malwares. Une économie de 50€ 
                      peut vous coûter des milliers en nettoyage. N'utilisez JAMAIS de ressources piratées.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="menace-4" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="w-8 h-8 text-red-500" />
              Menace #4 : Absence de Sauvegardes - Le Risque Catastrophique
            </h2>

            <Card className="border-red-500/50 border-l-4 mb-8">
              <CardHeader className="bg-red-500/10">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Skull className="w-5 h-5" />
                  Niveau de Danger : CATASTROPHIQUE
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Un site sans sauvegarde récente face à un ransomware = <strong>perte totale définitive</strong>. 
                  Les hackers demandent en moyenne 0,5 à 2 BTC (15 000€ - 60 000€) pour déchiffrer un site. 
                  Sans sauvegarde, vous n'avez aucune alternative.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">La Règle 3-2-1 des Sauvegardes</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="text-center bg-primary/5">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <p className="font-semibold">Copies de vos données</p>
                  <p className="text-sm text-muted-foreground">Originale + 2 sauvegardes</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-primary/5">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <p className="font-semibold">Types de supports</p>
                  <p className="text-sm text-muted-foreground">Cloud + disque local</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-primary/5">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <p className="font-semibold">Copie hors site</p>
                  <p className="text-sm text-muted-foreground">Géographiquement séparée</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Fréquence de Sauvegarde Recommandée</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Type de Site</th>
                    <th className="border p-3 text-left">Fréquence Fichiers</th>
                    <th className="border p-3 text-left">Fréquence BDD</th>
                    <th className="border p-3 text-left">Rétention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Blog personnel</td>
                    <td className="border p-3">Hebdomadaire</td>
                    <td className="border p-3">Quotidienne</td>
                    <td className="border p-3">14 jours</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Site vitrine PME</td>
                    <td className="border p-3">Quotidienne</td>
                    <td className="border p-3">Quotidienne</td>
                    <td className="border p-3">30 jours</td>
                  </tr>
                  <tr>
                    <td className="border p-3">E-commerce WooCommerce</td>
                    <td className="border p-3">Quotidienne</td>
                    <td className="border p-3">Toutes les heures</td>
                    <td className="border p-3">90 jours</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Site média/actualités</td>
                    <td className="border p-3">Toutes les 6h</td>
                    <td className="border p-3">Toutes les heures</td>
                    <td className="border p-3">60 jours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-green-50 dark:bg-green-950/30 border-green-500/50 mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                      Sauvegardes Kinsta : La Tranquillité d'Esprit
                    </p>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>- Sauvegardes automatiques quotidiennes (fichiers + BDD)</li>
                      <li>- 14 jours de rétention (30 sur plans supérieurs)</li>
                      <li>- Restauration en 1 clic depuis MyKinsta</li>
                      <li>- Sauvegardes manuelles illimitées</li>
                      <li>- Téléchargement possible pour stockage externe</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="menace-5" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-red-500" />
              Menace #5 : Droits Utilisateurs Excessifs
            </h2>

            <Card className="border-orange-500/50 border-l-4 mb-8">
              <CardHeader className="bg-orange-500/10">
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="w-5 h-5" />
                  Niveau de Danger : ÉLEVÉ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Chaque compte administrateur est un vecteur d'attaque. Si un employé utilise le même 
                  mot de passe sur un site compromis, votre WordPress devient vulnérable. Le principe du 
                  moindre privilège est fondamental en cybersécurité.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Hiérarchie des Rôles WordPress</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Rôle</th>
                    <th className="border p-3 text-left">Capacités</th>
                    <th className="border p-3 text-left">Risque si Compromis</th>
                    <th className="border p-3 text-left">Usage Recommandé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Administrateur</td>
                    <td className="border p-3">Accès total (plugins, thèmes, utilisateurs, code)</td>
                    <td className="border p-3"><Badge variant="destructive">CRITIQUE</Badge></td>
                    <td className="border p-3">Propriétaire/Développeur uniquement</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-semibold">Éditeur</td>
                    <td className="border p-3">Gère tous les contenus (articles, pages, médias)</td>
                    <td className="border p-3"><Badge variant="secondary">MODÉRÉ</Badge></td>
                    <td className="border p-3">Responsable éditorial</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Auteur</td>
                    <td className="border p-3">Publie ses propres articles uniquement</td>
                    <td className="border p-3"><Badge>FAIBLE</Badge></td>
                    <td className="border p-3">Rédacteurs réguliers</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-semibold">Contributeur</td>
                    <td className="border p-3">Écrit mais ne peut pas publier</td>
                    <td className="border p-3"><Badge>MINIMAL</Badge></td>
                    <td className="border p-3">Rédacteurs occasionnels</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Abonné</td>
                    <td className="border p-3">Lecture seule + gestion de profil</td>
                    <td className="border p-3"><Badge>NÉGLIGEABLE</Badge></td>
                    <td className="border p-3">Membres/Lecteurs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mb-4">Bonnes Pratiques de Gestion des Utilisateurs</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Un seul Super Admin", desc: "Limitez les comptes administrateurs au strict minimum (idéalement 1-2)." },
                { title: "Pas de compte partagé", desc: "Chaque personne doit avoir son propre compte avec email unique." },
                { title: "Audit régulier", desc: "Vérifiez mensuellement les comptes actifs, supprimez les inactifs." },
                { title: "2FA obligatoire", desc: "Imposez l'authentification à deux facteurs pour tous les éditeurs+." },
                { title: "Logs d'activité", desc: "Surveillez les connexions et actions avec WP Activity Log." },
                { title: "Sessions limitées", desc: "Déconnexion automatique après 30 min d'inactivité pour les admins." }
              ].map((practice, i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{practice.title}</p>
                        <p className="text-sm text-muted-foreground">{practice.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="menace-6" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-red-500" />
              Menace #6 : Absence de Monitoring et Logs
            </h2>

            <Card className="border-amber-500/50 border-l-4 mb-8">
              <CardHeader className="bg-amber-500/10">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <Search className="w-5 h-5" />
                  Niveau de Danger : MOYEN-ÉLEVÉ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Les hackers testent votre site pendant des semaines avant d'attaquer. Sans monitoring, 
                  vous ne détectez l'intrusion qu'au moment du désastre (site défacé, données volées, 
                  blacklisté par Google). Le temps de détection moyen d'une brèche est de 197 jours.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Ce que le Monitoring Doit Surveiller</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Connexions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>- Tentatives de connexion échouées</li>
                    <li>- Connexions depuis pays inhabituels</li>
                    <li>- Connexions à heures anormales</li>
                    <li>- Changements de mots de passe</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-primary" />
                    Fichiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>- Modifications dans wp-includes/</li>
                    <li>- Nouveaux fichiers PHP suspects</li>
                    <li>- Changements dans .htaccess</li>
                    <li>- Modifications wp-config.php</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Base de Données
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>- Nouveaux utilisateurs admin</li>
                    <li>- Options WordPress modifiées</li>
                    <li>- Injections dans wp_options</li>
                    <li>- Scripts dans les posts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-2">Monitoring Kinsta 24/7</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Kinsta surveille votre site toutes les 2 minutes. En cas d'anomalie (downtime, pics 
                      de charge anormaux, tentatives d'intrusion), l'équipe technique intervient proactivement 
                      - souvent avant même que vous ne vous en rendiez compte.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>- Uptime monitoring toutes les 2 minutes</li>
                      <li>- Détection automatique des attaques DDoS</li>
                      <li>- Blocage des IPs malveillantes en temps réel</li>
                      <li>- Alertes par email en cas d'incident</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="menace-7" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-red-500" />
              Menace #7 : Absence de WAF (Web Application Firewall)
            </h2>

            <Card className="border-red-500/50 border-l-4 mb-8">
              <CardHeader className="bg-red-500/10">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Network className="w-5 h-5" />
                  Niveau de Danger : TRÈS ÉLEVÉ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Un WAF bloque 95% des attaques AVANT qu'elles n'atteignent votre site. Sans WAF, 
                  votre site est exposé aux injections SQL, XSS, CSRF, et attaques DDoS. C'est 
                  comme laisser votre porte d'entrée grande ouverte.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Types d'Attaques Bloquées par un WAF</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { attack: "Injection SQL", desc: "Insertion de code SQL malveillant pour accéder à la base de données", pct: "34%" },
                { attack: "Cross-Site Scripting (XSS)", desc: "Injection de scripts JavaScript pour voler des cookies/sessions", pct: "21%" },
                { attack: "Brute Force", desc: "Tentatives massives de connexion pour deviner les mots de passe", pct: "16%" },
                { attack: "Local File Inclusion", desc: "Accès non autorisé aux fichiers système du serveur", pct: "12%" },
                { attack: "DDoS", desc: "Saturation du serveur par des millions de requêtes", pct: "8%" },
                { attack: "Zero-Day Exploits", desc: "Exploitation de failles non encore corrigées", pct: "9%" }
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold">{item.attack}</p>
                      <Badge variant="outline">{item.pct}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">Comparatif WAF WordPress</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Solution</th>
                    <th className="border p-3 text-left">Prix/mois</th>
                    <th className="border p-3 text-left">Protection DDoS</th>
                    <th className="border p-3 text-left">CDN Inclus</th>
                    <th className="border p-3 text-left">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 dark:bg-green-950/30">
                    <td className="border p-3 font-semibold">Kinsta (Cloudflare Enterprise)</td>
                    <td className="border p-3">Inclus</td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><Badge className="bg-green-500">RECOMMANDÉ</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Sucuri</td>
                    <td className="border p-3">199€</td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><Badge variant="secondary">BON</Badge></td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">Cloudflare Pro</td>
                    <td className="border p-3">20€</td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><CheckCircle className="w-4 h-4 text-green-500" /></td>
                    <td className="border p-3"><Badge variant="secondary">CORRECT</Badge></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Wordfence Pro</td>
                    <td className="border p-3">99€/an</td>
                    <td className="border p-3"><XCircle className="w-4 h-4 text-red-500" /></td>
                    <td className="border p-3"><XCircle className="w-4 h-4 text-red-500" /></td>
                    <td className="border p-3"><Badge>BASIQUE</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-primary text-white mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-xl mb-2">L'Avantage Kinsta : Cloudflare Enterprise Inclus</p>
                    <p className="opacity-90 mb-4">
                      Kinsta inclut Cloudflare Enterprise (valeur 200€/mois) GRATUITEMENT. Vous bénéficiez 
                      du même niveau de protection que les entreprises du Fortune 500.
                    </p>
                    <ul className="space-y-1 opacity-90 text-sm">
                      <li>- Protection DDoS illimitée (layers 3, 4 et 7)</li>
                      <li>- WAF avec règles personnalisées</li>
                      <li>- CDN mondial 300+ points de présence</li>
                      <li>- Edge Caching pour -50% de TTFB</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="types-attaques" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Skull className="w-8 h-8 text-primary" />
              Les 12 Types d'Attaques WordPress les Plus Fréquentes
            </h2>

            <p className="text-lg mb-8">
              Comprendre les techniques des hackers vous permet de mieux vous défendre. Voici les 12 attaques 
              les plus courantes contre les sites WordPress en 2026.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { name: "SQL Injection", desc: "Le hacker insère du code SQL malveillant dans les formulaires pour accéder à la base de données, voler des données ou prendre le contrôle.", icon: Database },
                { name: "Cross-Site Scripting (XSS)", desc: "Injection de scripts JavaScript malveillants qui s'exécutent dans le navigateur des visiteurs pour voler cookies et sessions.", icon: Code },
                { name: "Brute Force", desc: "Tentatives automatisées de millions de combinaisons utilisateur/mot de passe jusqu'à trouver l'accès.", icon: KeyRound },
                { name: "Backdoor", desc: "Installation d'un accès secret persistant permettant au hacker de revenir même après nettoyage.", icon: Lock },
                { name: "Phishing WordPress", desc: "Création de fausses pages de connexion WordPress pour voler les identifiants des administrateurs.", icon: Fingerprint },
                { name: "Malware Injection", desc: "Insertion de code malveillant dans les fichiers PHP pour rediriger les visiteurs ou miner des cryptos.", icon: Bug },
                { name: "DDoS", desc: "Saturation du serveur par des millions de requêtes simultanées, rendant le site inaccessible.", icon: CloudOff },
                { name: "Defacement", desc: "Remplacement de la page d'accueil par un message du hacker (propagande, hacktivisme).", icon: Globe },
                { name: "SEO Spam", desc: "Injection de liens vers des sites de casino, pharma, etc. pour exploiter votre autorité SEO.", icon: Search },
                { name: "Ransomware", desc: "Chiffrement de tous vos fichiers avec demande de rançon en Bitcoin pour récupérer l'accès.", icon: Lock },
                { name: "Supply Chain Attack", desc: "Compromission d'un plugin populaire pour infecter automatiquement tous les sites l'utilisant.", icon: Network },
                { name: "Zero-Day Exploit", desc: "Exploitation d'une faille non encore connue publiquement ni corrigée.", icon: Zap }
              ].map((attack, i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <attack.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{attack.name}</p>
                        <p className="text-muted-foreground">{attack.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="checklist" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              Checklist Sécurité WordPress : 47 Points Essentiels
            </h2>

            <p className="text-lg mb-8">
              Utilisez cette checklist pour auditer la sécurité de votre site WordPress. Chaque point 
              non coché représente une vulnérabilité potentielle.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-primary" />
                    Authentification (8 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Mots de passe 16+ caractères</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> 2FA activé pour admins</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Pas de compte "admin"</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Limite tentatives connexion</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> URL wp-admin personnalisée</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Sessions expirées automatiquement</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Gestionnaire mots de passe</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Pas de mots de passe partagés</label></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    Mises à Jour (6 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> WordPress à jour</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Tous plugins à jour</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Thème à jour</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> PHP version récente (8.1+)</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> MAJ auto mineures activées</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Staging pour tests MAJ majeures</label></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-primary" />
                    Sauvegardes (7 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Sauvegardes quotidiennes</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Fichiers + base de données</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Stockage hors site</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Rétention 30+ jours</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Test restauration mensuel</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Sauvegarde avant chaque MAJ</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Sauvegarde téléchargeable</label></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Protection Serveur (10 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> WAF actif</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> SSL/HTTPS forcé</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Protection DDoS</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> XML-RPC désactivé</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Listing répertoires désactivé</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Edition fichiers WP désactivée</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Permissions fichiers correctes</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> wp-config.php protégé</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Headers sécurité HTTP</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Isolation des sites (LXD)</label></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bug className="w-5 h-5 text-primary" />
                    Plugins/Thèmes (8 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Plugins inutilisés supprimés</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Thèmes inutilisés supprimés</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Uniquement sources officielles</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Pas de nulled/piratés</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Audit plugins annuel</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Moins de 20 plugins actifs</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Thème enfant utilisé</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Plugins réputés uniquement</label></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Monitoring (8 points)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Uptime monitoring actif</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Logs d'activité activés</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Alertes connexions suspectes</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Scan malware régulier</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Intégrité fichiers vérifiée</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Blacklist monitoring</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> SSL monitoring</label></li>
                    <li className="flex items-center gap-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" disabled className="w-4 h-4" /> Alertes email configurées</label></li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-2">Kinsta Coche 39 Points Automatiquement</p>
                    <p className="text-muted-foreground mb-4">
                      Avec Kinsta, la majorité de cette checklist est gérée automatiquement au niveau 
                      de l'infrastructure. Vous pouvez vous concentrer sur votre contenu et votre business.
                    </p>
                    <Button onClick={() => handleCTAClick('checklist_cta')} data-testid="button-checklist-cta">
                      Découvrir la Sécurité Kinsta
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="hebergement" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Server className="w-8 h-8 text-primary" />
              Le Rôle Crucial de l'Hébergement dans la Sécurité WordPress
            </h2>

            <p className="text-lg mb-8">
              L'hébergement représente la première ligne de défense de votre site WordPress. Un hébergeur 
              mutualisé basique ne peut pas offrir le même niveau de protection qu'un hébergement managé 
              premium comme Kinsta.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Fonctionnalité</th>
                    <th className="border p-3 text-center">Hébergeur Standard</th>
                    <th className="border p-3 text-center bg-primary/10">Kinsta</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "WAF Cloudflare Enterprise", standard: false, kinsta: true },
                    { feature: "Isolation par conteneurs LXD", standard: false, kinsta: true },
                    { feature: "Monitoring 24/7 proactif", standard: false, kinsta: true },
                    { feature: "Protection DDoS incluse", standard: false, kinsta: true },
                    { feature: "Sauvegardes quotidiennes auto", standard: "Partiel", kinsta: true },
                    { feature: "Mises à jour auto plugins", standard: false, kinsta: true },
                    { feature: "Blocage IPs malveillantes", standard: false, kinsta: true },
                    { feature: "Nettoyage malware gratuit", standard: false, kinsta: true },
                    { feature: "Support sécurité 24/7", standard: false, kinsta: true },
                    { feature: "Staging en 1 clic", standard: false, kinsta: true },
                    { feature: "CDN mondial intégré", standard: false, kinsta: true },
                    { feature: "Edge Caching", standard: false, kinsta: true }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                      <td className="border p-3">{row.feature}</td>
                      <td className="border p-3 text-center">
                        {row.standard === true ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : row.standard === false ? (
                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          <span className="text-amber-500">{row.standard}</span>
                        )}
                      </td>
                      <td className="border p-3 text-center bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Card className="bg-gradient-to-r from-primary to-primary/80 text-white mb-8">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Protégez Votre Site WordPress Dès Aujourd'hui
                  </h3>
                  <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                    Avec Kinsta, bénéficiez d'une protection de niveau entreprise : WAF Cloudflare Enterprise, 
                    monitoring 24/7, sauvegardes automatiques, et nettoyage gratuit en cas de piratage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => handleCTAClick('hebergement_cta')}
                      data-testid="button-hebergement-cta"
                    >
                      Migrer vers Kinsta (Gratuit)
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Link href="/audit-site">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                        Auditer Mon Site Gratuitement
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              FAQ : 10 Questions Fréquentes sur la Sécurité WordPress
            </h2>

            <Accordion type="single" collapsible className="mb-8">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Conclusion : La Sécurité WordPress est un Investissement</h2>

            <p className="text-lg mb-6">
              La sécurité WordPress n'est pas une dépense, c'est un investissement dans la pérennité de 
              votre business. Le coût d'un site piraté (nettoyage, perte de revenus, dommages SEO, 
              réputation) dépasse largement le coût d'une protection proactive.
            </p>

            <Card className="bg-slate-100 dark:bg-slate-800/50 mb-8">
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4">Les 5 Actions Prioritaires à Faire Maintenant</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Changez vos mots de passe</strong> - Utilisez 16+ caractères avec un gestionnaire</li>
                  <li><strong>Activez le 2FA</strong> - Sur tous les comptes administrateurs</li>
                  <li><strong>Mettez tout à jour</strong> - WordPress, plugins, thèmes, PHP</li>
                  <li><strong>Vérifiez vos sauvegardes</strong> - Testez une restauration</li>
                  <li><strong>Migrez vers Kinsta</strong> - Pour une protection automatique de niveau entreprise</li>
                </ol>
              </CardContent>
            </Card>

            <ShareButtons 
              url="https://wp-vitesse-pro.fr/article/securite-wordpress" 
              title={ARTICLE_DATA.title} 
            />

            <Card className="bg-primary text-white">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à Sécuriser Votre WordPress ?</h3>
                <p className="opacity-90 mb-6">
                  Kinsta offre la migration gratuite de votre site existant. Profitez de 2 mois gratuits 
                  avec les plans annuels.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => handleCTAClick('final_cta')}
                  data-testid="button-securite-final-cta"
                >
                  Découvrir Kinsta - 2 Mois Offerts
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </section>

        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
