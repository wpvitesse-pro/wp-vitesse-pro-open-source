import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Smartphone, 
  Lock, 
  Info, 
  ArrowRight,
  ExternalLink,
  Shield,
  Clock,
  UserCheck,
  Globe,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Eye,
  Target,
  Users,
  Building2,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Zap,
  Server,
  Code,
  Link as LinkIcon,
  Wifi,
  Monitor,
  Activity,
  Database,
  Bug,
  Radio,
  Network,
  Cpu,
  HardDrive,
  MapPin,
  BarChart3,
  FileWarning,
  Layers
} from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Botnet AISURU/Kimwolf : enquête sur l'attaque DDoS record de 31,4 Tbps qui menace Internet",
  "description": "Investigation exclusive sur le botnet AISURU/Kimwolf qui a lancé l'attaque DDoS la plus massive de l'histoire à 31,4 Tbps. Analyse technique, opérateurs identifiés, 4 millions d'appareils infectés.",
  "image": [
    "https://wp-vitesse-pro.fr/images/botnet-aisuru-kimwolf-ddos-hero.webp",
    "https://wp-vitesse-pro.fr/images/botnet-aisuru-kimwolf-ddos-hero.png"
  ],
  "datePublished": "2026-02-06T08:00:00+01:00",
  "dateModified": "2026-02-07T15:52:11.184Z",
  "author": {
    "@type": "Person",
    "name": "Bouhmou Rachid",
    "url": "https://wp-vitesse-pro.fr/entity",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q137939882",
      "https://www.linkedin.com/in/rachid-bouhmou-81823a3a1"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WP Vitesse Pro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wp-vitesse-pro.fr/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/article/botnet-aisuru-kimwolf-attaque-ddos-record-2026"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le botnet AISURU/Kimwolf ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AISURU/Kimwolf est un méga-botnet contrôlant entre 2 et 4 millions d'appareils infectés, principalement des boîtiers Android TV non officiels. Il a lancé l'attaque DDoS la plus massive jamais enregistrée à 31,4 Tbps en décembre 2025, dépassant son propre record de 29,7 Tbps établi en octobre 2025."
      }
    },
    {
      "@type": "Question",
      "name": "Comment savoir si mon appareil Android TV est infecté par Kimwolf ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vérifiez si votre appareil est certifié Google Play Protect. Les appareils non officiels avec ADB (Android Debug Bridge) activé par défaut sont les plus vulnérables. Vous pouvez vérifier sur synthient.com/check. Les signes incluent une activité réseau anormale, des ralentissements et une consommation de bande passante élevée."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est l'impact d'une attaque DDoS de 31,4 Tbps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une attaque de 31,4 Tbps équivaut à la bande passante de plusieurs pays combinés. Elle peut paralyser des infrastructures télécoms, des services cloud, des plateformes de jeux et des fournisseurs d'IA générative. Seuls les plus grands fournisseurs de protection DDoS comme Cloudflare peuvent absorber de tels volumes."
      }
    },
    {
      "@type": "Question",
      "name": "Qui sont les opérateurs derrière le botnet AISURU/Kimwolf ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon les investigations de Brian Krebs et des chercheurs en sécurité, deux opérateurs principaux sont identifiés sous les pseudonymes 'Dort' (localisé au Canada) et 'Snow'. Ils opèrent via le serveur Discord resi.to et sont liés à Resi Rack LLC, un hébergeur basé dans l'Utah."
      }
    },
    {
      "@type": "Question",
      "name": "Comment protéger mon site WordPress contre les attaques DDoS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilisez un hébergeur WordPress avec protection DDoS intégrée comme Kinsta (qui utilise le réseau Cloudflare). Activez un CDN, configurez le rate limiting, utilisez un WAF (Web Application Firewall), et maintenez tous vos plugins à jour. Kinsta intègre nativement la protection Cloudflare Enterprise."
      }
    }
  ]
};

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

function ArticleBotnetAisuru2026() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/botnet-aisuru-kimwolf-ddos-hero.webp"
        title="Botnet AISURU/Kimwolf : attaque DDoS record 31,4 Tbps - enquête"
        description="Investigation exclusive sur le botnet AISURU/Kimwolf. Attaque DDoS record de 31,4 Tbps, 4 millions d'appareils infectés, opérateurs identifiés. Analyse technique complète."
        canonical="/article/botnet-aisuru-kimwolf-attaque-ddos-record-2026"
        keywords="botnet aisuru kimwolf, attaque ddos record, 31.4 tbps, cloudflare ddos 2026, android tv botnet, kimwolf malware, aisuru botnet, ddos protection wordpress, sécurité wordpress, bouhmou rachid investigation"
        schema={{ "@graph": [articleSchema, faqSchema] }}
        author="Bouhmou Rachid"
        datePublished="2026-02-06T08:00:00+01:00"
        dateModified="2026-02-07T10:00:00+01:00"
        type="article"
      />
      
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { name: 'Cyber-Investigation', url: '/blog' },
              { name: 'Botnet AISURU/Kimwolf - DDoS Record', url: '/article/botnet-aisuru-kimwolf-attaque-ddos-record-2026' }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="destructive" className="px-3 py-1 text-sm font-bold uppercase tracking-wider animate-pulse">
                Enquête Exclusive
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                8000+ mots
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Investigation Approfondie
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                Cybersécurité
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Botnet AISURU/Kimwolf : Anatomie de <span className="text-purple-600 dark:text-purple-400">l'attaque DDoS la plus massive</span> de l'histoire d'Internet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              31,4 térabits par seconde. 4 millions d'appareils zombies. 222 pays touchés. Comment deux cybercriminels ont transformé vos boîtiers TV Android en arme de destruction massive du web. Une investigation de <span className="font-bold text-foreground underline decoration-primary">Bouhmou Rachid</span>.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Publié : 6 Février 2026 - 8h00
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Par : Bouhmou Rachid (Wikidata: Q137939882)
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Temps de lecture : 35 min
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="gap-2">
                  <a href="https://github.com/wpvitesse-pro/wp-vitesse-pro-open-source" target="_blank" rel="noopener noreferrer">
                    <Code className="w-4 h-4" />
                    <span>Open Source</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
            
            <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet="/images/botnet-aisuru-kimwolf-ddos-hero.webp" type="image/webp" />
                <img 
                  src="/images/botnet-aisuru-kimwolf-ddos-hero.png" 
                  alt="Botnet AISURU/Kimwolf - Attaque DDoS record de 31,4 Tbps visualisation cybersécurité" 
                  className="w-full h-auto object-cover aspect-video" 
                  width={1600} 
                  height={900} 
                  loading="eager" 
                  decoding="async" 
                />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                Visualisation du botnet AISURU/Kimwolf et de son attaque DDoS record de 31,4 Tbps contre les infrastructures mondiales
              </figcaption>
            </figure>

            <nav className="mb-12 p-6 bg-muted/30 rounded-2xl border not-prose">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Sommaire de l'enquête
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduction" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 1. Introduction : 35 secondes qui ont ébranlé Internet</a></li>
                <li><a href="#chiffres" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 2. Les chiffres vertigineux de l'attaque</a></li>
                <li><a href="#botnet" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 3. Qu'est-ce que le botnet AISURU/Kimwolf ?</a></li>
                <li><a href="#infection" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 4. La chaîne d'infection : du boîtier TV à l'arme cyber</a></li>
                <li><a href="#operateurs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 5. "Dort" et "Snow" : les cerveaux de l'opération</a></li>
                <li><a href="#christmas" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 6. L'opération "Night Before Christmas"</a></li>
                <li><a href="#impact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 7. Impact mondial : les secteurs dévastés</a></li>
                <li><a href="#technique" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 8. Analyse technique approfondie</a></li>
                <li><a href="#riposte" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 9. La riposte : Google, Cloudflare et Lumen contre-attaquent</a></li>
                <li><a href="#wordpress" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 10. Sites WordPress : comment se protéger</a></li>
                <li><a href="#verifier" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 11. Votre appareil est-il infecté ? Guide de vérification</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 12. FAQ : Questions fréquentes</a></li>
                <li><a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 13. Conclusion : une menace systémique</a></li>
              </ul>
            </nav>

            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-purple-500 flex-shrink-0" /> 
                1. 35 secondes qui ont ébranlé Internet
              </h2>
              
              <p className="text-lg leading-relaxed">
                Le 19 décembre 2025, à la veille des fêtes de Noël, les systèmes de surveillance de Cloudflare enregistrent un pic d'activité sans précédent. En l'espace de <strong>35 secondes</strong>, un torrent de données de <strong>31,4 térabits par seconde</strong> (Tbps) déferle sur les infrastructures du géant américain de la cybersécurité. C'est l'équivalent de <strong>7 850 films Blu-Ray 4K envoyés simultanément chaque seconde</strong>. L'attaque est si colossale qu'elle dépasse la bande passante totale de nombreux pays.
              </p>

              <p>
                Ce record absolu dans l'histoire des attaques par déni de service distribué (DDoS) est l'oeuvre d'un seul et même réseau : le botnet <strong>AISURU/Kimwolf</strong>. Ce méga-réseau de machines zombies, contrôlé par deux individus opérant sous les pseudonymes "Dort" et "Snow", a transformé entre <strong>2 et 4 millions d'appareils infectés</strong> — principalement des boîtiers TV Android bon marché — en une armée cyber capable de mettre à genoux n'importe quelle infrastructure sur Terre.
              </p>

              <Card className="my-8 bg-purple-50/50 dark:bg-purple-900/10 border-purple-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-6 h-6 flex-shrink-0" /> POURQUOI CETTE ATTAQUE VOUS CONCERNE
                  </p>
                  <p className="mt-3 text-lg">
                    Même si vous n'êtes pas directement la cible, les attaques DDoS de cette ampleur provoquent des <strong>dommages collatéraux massifs</strong>. Aux États-Unis, le simple transit du trafic d'attaque à travers les FAI a provoqué des perturbations Internet généralisées. Si votre site WordPress n'est pas protégé par un CDN avec protection DDoS, il peut être emporté dans la tempête.
                  </p>
                </CardContent>
              </Card>

              <p>
                Notre enquête, basée sur les rapports de Cloudflare, les investigations de Brian Krebs (Krebs on Security), les analyses techniques de QiAnXin XLab, les données de Lumen Technologies (Black Lotus Labs) et les travaux de Synthient, retrace l'intégralité de cette menace : de la chaîne d'approvisionnement corrompue des boîtiers Android TV jusqu'aux serveurs de commande (C2) utilisés par les opérateurs, en passant par l'exploitation des réseaux de proxy résidentiels qui rendent ce botnet quasi indestructible.
              </p>
            </section>

            <section id="chiffres" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="text-red-500 flex-shrink-0" /> 
                2. Les chiffres vertigineux de l'attaque
              </h2>

              <p>
                Avant d'entrer dans les détails de l'investigation, posons les faits bruts. Les chiffres compilés à partir du rapport officiel Q4 2025 de Cloudflare et des analyses indépendantes donnent le vertige.
              </p>

              <Card className="my-8 bg-gradient-to-r from-purple-50 to-red-50 dark:from-purple-950/20 dark:to-red-950/20 border-purple-500/30">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-purple-600" data-testid="text-tbps">31,4</p>
                      <p className="text-xs text-muted-foreground mt-1">Tbps (Térabits/s) Record mondial</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600" data-testid="text-devices">4M</p>
                      <p className="text-xs text-muted-foreground mt-1">Appareils infectés dans le monde</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-orange-600" data-testid="text-countries">222</p>
                      <p className="text-xs text-muted-foreground mt-1">Pays avec appareils compromis</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-blue-600" data-testid="text-attacks">47,1M</p>
                      <p className="text-xs text-muted-foreground mt-1">Attaques DDoS en 2025 (+121%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Comparaison avec les records précédents</h3>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border not-prose">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-purple-500/20 px-2 py-1 rounded w-28 text-center text-purple-700 dark:text-purple-300 font-bold">31,4 Tbps</span>
                    <div className="flex-1 bg-purple-500/30 rounded-full h-6 relative">
                      <div className="absolute inset-0 bg-purple-500 rounded-full" style={{width: '100%'}}></div>
                      <span className="absolute right-2 top-0 text-xs font-bold text-white leading-6">AISURU - Déc 2025</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-red-500/20 px-2 py-1 rounded w-28 text-center text-red-700 dark:text-red-300">29,7 Tbps</span>
                    <div className="flex-1 bg-muted rounded-full h-6 relative">
                      <div className="absolute inset-0 bg-red-500/60 rounded-full" style={{width: '94%'}}></div>
                      <span className="absolute right-2 top-0 text-xs font-bold text-white leading-6">AISURU - Oct 2025</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-orange-500/20 px-2 py-1 rounded w-28 text-center text-orange-700 dark:text-orange-300">15,7 Tbps</span>
                    <div className="flex-1 bg-muted rounded-full h-6 relative">
                      <div className="absolute inset-0 bg-orange-500/60 rounded-full" style={{width: '50%'}}></div>
                      <span className="absolute right-2 top-0 text-xs font-bold text-white leading-6">Microsoft Azure - 2024</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-blue-500/20 px-2 py-1 rounded w-28 text-center text-blue-700 dark:text-blue-300">5,6 Tbps</span>
                    <div className="flex-1 bg-muted rounded-full h-6 relative">
                      <div className="absolute inset-0 bg-blue-500/60 rounded-full" style={{width: '18%'}}></div>
                      <span className="absolute right-2 top-0 text-xs font-bold text-white leading-6">Mirai variant - 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                L'augmentation est fulgurante : <strong>+700% de volume d'attaque en 12 mois</strong>. Ce qui était considéré comme une attaque "hyper-volumétrique" il y a un an (4 Tbps) est désormais la moyenne du botnet AISURU. Cloudflare a mitigé en 2025 un total de <strong>47,1 millions d'attaques DDoS</strong>, soit une augmentation de 121% par rapport à 2024, avec une moyenne de <strong>5 376 attaques bloquées par heure</strong>.
              </p>
            </section>

            <section id="botnet" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Network className="text-purple-500 flex-shrink-0" /> 
                3. Qu'est-ce que le botnet AISURU/Kimwolf ?
              </h2>

              <p>
                Pour comprendre la menace, il faut d'abord comprendre ce qu'est un botnet. Un <strong>botnet</strong> (contraction de "robot" et "network") est un réseau d'appareils connectés à Internet qui ont été infectés par un malware et sont contrôlés à distance par un ou plusieurs opérateurs, appelés "botmasters". Chaque appareil infecté — appelé "zombie" ou "bot" — exécute aveuglément les ordres reçus des serveurs de commande et contrôle (C2).
              </p>

              <p>
                <strong>AISURU</strong> et <strong>Kimwolf</strong> sont deux noms donnés par les chercheurs à ce qui est essentiellement le <strong>même réseau</strong>, ou plus précisément, à deux versions successives d'un même projet criminel. AISURU est la version initiale, documentée pour la première fois par les chercheurs de QiAnXin XLab en octobre 2025. Kimwolf en est l'évolution, avec un code malveillant amélioré et une infrastructure de commande plus résiliente.
              </p>

              <Card className="my-8 border-purple-500/20">
                <CardContent className="pt-6 not-prose">
                  <h4 className="font-bold mb-4 text-lg">Fiche d'identité du botnet</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Noms :</span>
                        <span>AISURU, Kimwolf, Airashi</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Type :</span>
                        <span>Botnet IoT multifonction</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Taille :</span>
                        <span>2 - 4 millions d'appareils</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Capacité DDoS :</span>
                        <span>~31+ Tbps confirmé</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Première détection :</span>
                        <span>Octobre 2024 (XLab)</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Opérateurs :</span>
                        <span>"Dort" (Canada), "Snow"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Cibles principales :</span>
                        <span>Télécoms, IT, Gaming, IA</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Appareils visés :</span>
                        <span>Boîtiers Android TV, routeurs, caméras IP</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Serveurs C2 :</span>
                        <span>550+ (dont beaucoup neutralisés)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Présence :</span>
                        <span>222 pays</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                Ce qui distingue AISURU/Kimwolf des botnets précédents comme Mirai ou Mozi, c'est son <strong>échelle industrielle</strong> et sa <strong>sophistication opérationnelle</strong>. Là où Mirai infectait principalement des caméras IP et des routeurs via des mots de passe par défaut, AISURU exploite des failles beaucoup plus profondes dans la chaîne d'approvisionnement des appareils Android — certains appareils arrivent <strong>pré-infectés dès l'usine</strong>.
              </p>
            </section>

            <section id="infection" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Bug className="text-red-500 flex-shrink-0" /> 
                4. La chaîne d'infection : du boîtier TV à l'arme cyber
              </h2>

              <p>
                L'un des aspects les plus fascinants — et effrayants — de cette enquête est la sophistication de la chaîne d'infection. Les opérateurs d'AISURU/Kimwolf n'utilisent pas une seule méthode : ils en combinent au moins quatre, créant un pipeline d'infection quasi industriel.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Vecteur 1 : Les boîtiers TV Android pré-infectés</h3>

              <p>
                C'est le vecteur le plus insidieux. Des millions de boîtiers TV Android bon marché, vendus en ligne sous des marques obscures, sont livrés avec un malware <strong>déjà installé dans leur firmware</strong>. Ces appareils portent souvent la mention <em>"Made in China. Overseas use only"</em> et ne sont <strong>pas certifiés Google Play Protect</strong>.
              </p>

              <p>
                Le SDK malveillant <strong>ByteConnect</strong>, distribué par la société Plainproxies, est intégré directement dans le système d'exploitation. Dès la première mise sous tension, l'appareil commence à :
              </p>

              <ul>
                <li>Transmettre la bande passante de l'utilisateur à un réseau de proxy résidentiel</li>
                <li>Scanner le réseau local pour d'autres appareils vulnérables</li>
                <li>Se connecter aux serveurs de commande du botnet</li>
                <li>Attendre des instructions d'attaque</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Vecteur 2 : L'exploitation d'Android Debug Bridge (ADB)</h3>

              <p>
                Android Debug Bridge (ADB) est un outil de développement qui permet de contrôler un appareil Android à distance via une connexion réseau. Sur les appareils officiels, ADB est désactivé par défaut ou protégé par une authentification. Mais sur les boîtiers TV non officiels, <strong>ADB est souvent activé par défaut sans aucune authentification</strong>, écoutant sur le port TCP 5555.
              </p>

              <Card className="my-8 bg-red-50/50 dark:bg-red-900/10 border-red-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 text-lg">
                    <ShieldAlert className="w-6 h-6 flex-shrink-0" /> AMPLEUR DU SCAN ADB
                  </p>
                  <p className="mt-3">
                    Les chercheurs de Synthient ont observé des campagnes de scan massives ciblant les ports ADB (5555, 5858, 12108, 3222). À partir du 12 novembre 2025, <strong>12 millions d'adresses IP uniques par semaine</strong> ont été scannées à la recherche de services ADB non authentifiés. Une fois trouvé, l'infection se fait en quelques minutes via netcat ou telnet.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Vecteur 3 : L'abus des réseaux de proxy résidentiels</h3>

              <p>
                C'est ici que le génie criminel se révèle. Les opérateurs du botnet utilisent les réseaux de proxy résidentiels — principalement <strong>IPIDEA</strong>, un fournisseur chinois — pour scanner les réseaux locaux des utilisateurs. Le principe est diaboliquement simple :
              </p>

              <div className="my-8 not-prose">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold">Le proxy résidentiel s'installe sur l'appareil de la victime</p>
                      <p className="text-sm text-muted-foreground mt-1">Via un SDK intégré dans une application légitime ou pré-installé dans le firmware.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold">Le proxy permet d'accéder au réseau local (RFC 1918)</p>
                      <p className="text-sm text-muted-foreground mt-1">Contrairement aux bonnes pratiques, IPIDEA ne bloquait pas les requêtes vers les adresses IP privées (192.168.x.x, 10.x.x.x).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold">Les attaquants scannent le réseau local à travers le proxy</p>
                      <p className="text-sm text-muted-foreground mt-1">Ils recherchent des appareils avec ADB exposé, déjouant ainsi les pare-feux NAT qui bloquent normalement les scans externes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-500/30">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold text-red-600 dark:text-red-400">Le malware Kimwolf s'installe sur l'appareil vulnérable</p>
                      <p className="text-sm text-muted-foreground mt-1">L'appareil rejoint le botnet, et commence lui-même à scanner ses voisins. L'effet boule de neige est dévastateur.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Vecteur 4 : Applications et binaires trojanisés</h3>

              <p>
                L'enquête a également mis en lumière un réseau massif de logiciels piégés. Les chercheurs ont identifié :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="w-6 h-6 text-green-500" />
                      <h4 className="font-bold">600+ applications Android</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Des applications en apparence légitimes (lecteurs vidéo, VPN gratuits, outils de nettoyage) embarquant le SDK ByteConnect qui transforme l'appareil en noeud du réseau de proxy.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Monitor className="w-6 h-6 text-blue-500" />
                      <h4 className="font-bold">3 000+ binaires Windows</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Des programmes Windows se faisant passer pour des outils système ("OneDriveSync", "Windows Update Helper") infectant les PC et les ajoutant au réseau de proxy résidentiel.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="operateurs" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="text-orange-500 flex-shrink-0" /> 
                5. "Dort" et "Snow" : les cerveaux de l'opération
              </h2>

              <p>
                L'un des apports majeurs des investigations menées par <strong>Brian Krebs</strong> (Krebs on Security) a été l'identification partielle des opérateurs du botnet. Dans une série d'articles publiés en janvier 2026, Krebs révèle l'existence de deux figures centrales.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">"Dort" : le botmaster canadien</h3>

              <p>
                "Dort" (également connu sous le pseudonyme "d") est identifié comme un <strong>résident canadien</strong>. Les preuves accumulées par les chercheurs de Black Lotus Labs (Lumen Technologies) et confirmées par Krebs incluent :
              </p>

              <ul>
                <li><strong>Adresses IP canadiennes</strong> liées aux connexions SSH vers l'infrastructure backend C2 du botnet (identifiées en septembre 2025)</li>
                <li>Propriété du serveur Discord <strong>resi[.]to</strong>, la plateforme de communication principale des opérateurs</li>
                <li><strong>Accès non autorisé au panneau de contrôle du botnet Badbox 2.0</strong>, une capture d'écran ayant fuité via un ancien associé</li>
                <li>Lien avec <strong>Resi Rack LLC</strong>, un hébergeur basé dans l'Utah dont les co-fondateurs "Shox" (Cassidy Hales) et "Linus" étaient actifs sur le Discord resi[.]to</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-6">"Snow" : le co-pilote dans l'ombre</h3>

              <p>
                "Snow" est le second opérateur, travaillant en tandem avec Dort. Les informations sur Snow sont plus limitées, mais l'analyse des communications interceptées montre qu'il avait un <strong>contrôle direct sur la flotte du botnet</strong> et revendiquait 3,5 millions d'appareils compromis en janvier 2026.
              </p>

              <Card className="my-8 bg-orange-50/50 dark:bg-orange-900/10 border-orange-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-lg">
                    <Info className="w-6 h-6 flex-shrink-0" /> COMPORTEMENT POST-EXPOSITION
                  </p>
                  <p className="mt-3">
                    Après la publication des articles de Krebs le 2 janvier 2026, la réaction des opérateurs a été immédiate et révélatrice. L'historique du serveur Discord resi[.]to a été <strong>entièrement effacé</strong> et le serveur a disparu quelques heures après la publication. Les opérateurs ont migré vers <strong>Telegram</strong>, où ils ont doxé le chercheur Benjamin Brundage (fondateur de Synthient) et se sont plaints de la perte de leur hébergement "bulletproof". Des échantillons de malware analysés ultérieurement contenaient des commentaires insultants envers les chercheurs, notamment en qualifiant Krebs de "Big Forehead".
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Le modèle économique criminel</h3>

              <p>
                Le botnet AISURU/Kimwolf est une <strong>entreprise criminelle multifacette</strong> qui génère des revenus de plusieurs façons :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-red-500" /> DDoS-for-Hire
                    </h4>
                    <p className="text-sm text-muted-foreground">Des "chunks" (portions) de la puissance du botnet sont loués à des clients pour des centaines à des milliers de dollars. Un service de destruction à la demande.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-500" /> Revente de proxy résidentiel
                    </h4>
                    <p className="text-sm text-muted-foreground">La bande passante des appareils infectés est revendue comme proxy résidentiel à partir de 0,20$/Go, permettant aux acheteurs de masquer leur origine.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-purple-500" /> Credential Stuffing
                    </h4>
                    <p className="text-sm text-muted-foreground">Les proxys résidentiels sont utilisés pour tester des identifiants volés sur des plateformes bancaires, e-commerce et réseaux sociaux sans être détectés.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <HardDrive className="w-5 h-5 text-green-500" /> Installation d'apps monétisées
                    </h4>
                    <p className="text-sm text-muted-foreground">Le SDK ByteConnect génère des revenus pour chaque installation d'application sur les appareils compromis, créant un flux de revenus passif.</p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Entre le 19 et le 22 novembre 2025, le botnet a émis <strong>1,7 milliard de commandes DDoS en seulement 3 jours</strong>, illustrant la cadence opérationnelle du réseau.
              </p>
            </section>

            <section id="christmas" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-red-500 flex-shrink-0" /> 
                6. L'opération "Night Before Christmas"
              </h2>

              <p>
                Le 19 décembre 2025, alors que le monde se préparait pour les fêtes de fin d'année, les opérateurs du botnet ont lancé ce que les chercheurs de Cloudflare ont surnommé la campagne <strong>"The Night Before Christmas"</strong> — une offensive d'une brutalité sans précédent.
              </p>

              <Card className="my-8 bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-950/20 dark:to-purple-950/20 border-red-500/30">
                <CardContent className="pt-6 not-prose">
                  <h4 className="font-bold text-lg mb-4">Métriques de la campagne "Night Before Christmas"</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white dark:bg-background rounded-lg shadow-sm text-center">
                      <p className="text-2xl font-extrabold text-red-600">902</p>
                      <p className="text-xs text-muted-foreground mt-1">Attaques distinctes sur la période des fêtes</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-background rounded-lg shadow-sm text-center">
                      <p className="text-2xl font-extrabold text-purple-600">205 M</p>
                      <p className="text-xs text-muted-foreground mt-1">Requêtes HTTP/seconde au pic</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-background rounded-lg shadow-sm text-center">
                      <p className="text-2xl font-extrabold text-orange-600">9 Mrd</p>
                      <p className="text-xs text-muted-foreground mt-1">Paquets par seconde au pic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                Les moyennes d'attaque pendant cette campagne étaient elles-mêmes extraordinaires : <strong>3 milliards de paquets par seconde</strong>, <strong>4 Tbps</strong> et <strong>54 millions de requêtes par seconde</strong>. Au pic, les valeurs atteignaient <strong>9 milliards de paquets/s</strong>, <strong>24 Tbps</strong> et <strong>205 millions de requêtes HTTP/s</strong>.
              </p>

              <p>
                Les cibles étaient stratégiques : des <strong>fournisseurs de services télécoms</strong>, des <strong>opérateurs de réseau</strong>, et des <strong>services cloud</strong> — l'infrastructure même sur laquelle repose Internet. Cloudflare a même signalé que sa propre infrastructure de tableau de bord avait été visée, dans une tentative de priver les clients de leur visibilité sur leurs propres protections.
              </p>

              <p>
                Le choix du timing n'est pas anodin. Pendant les vacances de Noël, les équipes de sécurité sont en effectif réduit, les temps de réponse humains sont plus longs, et de nombreuses organisations fonctionnent en mode dégradé. C'est une tactique de guérilla numérique rodée.
              </p>
            </section>

            <section id="impact" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-blue-500 flex-shrink-0" /> 
                7. Impact mondial : les secteurs dévastés
              </h2>

              <p>
                L'impact du botnet AISURU/Kimwolf dépasse largement les cibles directes des attaques. Comme l'a souligné Cloudflare, le simple <strong>transit du trafic d'attaque à travers les FAI américains</strong> a provoqué des perturbations Internet généralisées, même pour des utilisateurs et services qui n'étaient pas visés.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Secteurs les plus ciblés (Q4 2025)</h3>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border not-prose">
                <div className="space-y-3">
                  {[
                    { name: "Télécommunications & Opérateurs", pct: 100, color: "bg-purple-500" },
                    { name: "Technologies de l'Information", pct: 78, color: "bg-blue-500" },
                    { name: "Jeux vidéo & Gambling", pct: 65, color: "bg-green-500" },
                    { name: "Logiciels & SaaS", pct: 52, color: "bg-orange-500" },
                    { name: "IA Générative (+347% MoM)", pct: 45, color: "bg-red-500" },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center gap-4">
                      <span className="text-sm w-56 flex-shrink-0">{s.name}</span>
                      <div className="flex-1 bg-muted rounded-full h-4 relative">
                        <div className={`absolute inset-y-0 left-0 ${s.color} rounded-full`} style={{width: `${s.pct}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Un point particulièrement alarmant : les attaques ciblant les entreprises d'<strong>IA générative</strong> ont explosé de <strong>347% en un mois</strong> (septembre 2025). Cette tendance révèle que les opérateurs du botnet ciblent désormais les plateformes d'IA comme OpenAI, Anthropic et leurs concurrents, potentiellement à des fins de rançon ou sur commande de concurrents.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Répartition géographique des appareils infectés</h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8 not-prose">
                {[
                  { country: "Brésil", pct: "14,6%", flag: "BR" },
                  { country: "Inde", pct: "12,7%", flag: "IN" },
                  { country: "États-Unis", pct: "9,6%", flag: "US" },
                  { country: "Vietnam", pct: "7,8%", flag: "VN" },
                  { country: "Indonésie", pct: "5,4%", flag: "ID" },
                ].map((c) => (
                  <Card key={c.country}>
                    <CardContent className="pt-4 text-center">
                      <MapPin className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
                      <p className="font-bold text-lg">{c.pct}</p>
                      <p className="text-xs text-muted-foreground">{c.country}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p>
                La France n'est pas en reste. Bien que ne figurant pas dans le top 5 des pays les plus infectés, la présence de boîtiers TV Android non certifiés sur le marché français est significative. L'investigation de Krebs a révélé que Kimwolf était détecté dans <strong>25% des réseaux clients d'Infoblox</strong>, incluant des réseaux d'entreprises et gouvernementaux.
              </p>
            </section>

            <section id="technique" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="text-green-500 flex-shrink-0" /> 
                8. Analyse technique approfondie
              </h2>

              <p>
                Pour les lecteurs plus techniques, voici une plongée dans l'architecture et les mécanismes du botnet.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Architecture C2 (Commande & Contrôle)</h3>

              <p>
                Le botnet utilise une architecture C2 <strong>décentralisée et résiliente</strong>. Les chercheurs ont identifié plusieurs caractéristiques notables :
              </p>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border not-prose space-y-4">
                <div className="flex gap-4 items-start">
                  <Server className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Serveur C2 principal</p>
                    <p className="text-sm text-muted-foreground">Adresse 85.234.91[.]247:1337 — Le malware se connecte à ce serveur pour recevoir ses instructions d'attaque.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Database className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Domaines ENS blockchain</p>
                    <p className="text-sm text-muted-foreground">Utilisation de noms de domaine basés sur la blockchain Ethereum (ENS) comme fallback, rendant les takedowns DNS classiques inefficaces.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">DNS over TLS (DoT)</p>
                    <p className="text-sm text-muted-foreground">Le malware utilise le chiffrement DNS pour échapper à la détection par les systèmes de surveillance réseau traditionnels.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Radio className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Port local 40860</p>
                    <p className="text-sm text-muted-foreground">Le malware écoute sur ce port localement, permettant la communication entre bots infectés sur le même réseau.</p>
                  </div>
                </div>
              </div>

              <p>
                Un fait remarquable : le domaine C2 du botnet (<code>14emeliaterracewestroxburyma02132[.]su</code>) a été temporairement classé parmi les <strong>domaines les plus requêtés au monde</strong> dans les statistiques DNS de Cloudflare en novembre 2025 — un indicateur de la taille colossale du réseau de machines infectées.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Types d'attaques DDoS déployées</h3>

              <p>
                Le botnet déploie une combinaison d'attaques réseau (L3/L4) et applicatives (L7) :
              </p>

              <ul>
                <li><strong>Attaques volumétriques (L3/L4)</strong> : Représentent 73% des attaques en 2025. SYN floods, UDP floods, amplification DNS/NTP</li>
                <li><strong>Attaques HTTP (L7)</strong> : Requêtes HTTP massives imitant le trafic légitime, plus difficiles à filtrer</li>
                <li><strong>Attaques hybrides</strong> : Combinaison simultanée de L3/L4 et L7 pour submerger à la fois l'infrastructure réseau et les serveurs applicatifs</li>
              </ul>

              <p>
                Un point critique pour les opérateurs de sites web : <strong>71% des attaques HTTP DDoS et 89% des attaques réseau se terminent en moins de 10 minutes</strong>. Cela signifie que les solutions de mitigation "on-demand" avec intervention humaine sont <strong>trop lentes</strong> — le temps qu'un humain prenne conscience de l'attaque et active les protections, c'est déjà terminé. Seules les protections <strong>autonomes et automatiques</strong> sont efficaces.
              </p>
            </section>

            <section id="riposte" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-green-500 flex-shrink-0" /> 
                9. La riposte : Google, Cloudflare et Lumen contre-attaquent
              </h2>

              <p>
                Face à cette menace sans précédent, une coalition inédite de géants technologiques s'est formée pour tenter de démanteler le botnet.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Opération Google (décembre 2025)</h3>

              <p>
                En décembre 2025, <strong>Google</strong> a lancé une offensive juridique et technique majeure :
              </p>

              <ul>
                <li><strong>Disruption du réseau de proxy IPIDEA</strong> : Action en justice pour saisir les domaines contrôlant les appareils infectés</li>
                <li><strong>Partenariat avec Cloudflare</strong> pour perturber la résolution DNS des domaines de commande</li>
                <li>IPIDEA a finalement <strong>patché la vulnérabilité le 27 décembre 2025</strong>, bloquant l'accès aux adresses IP privées RFC 1918 via son réseau de proxy</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Opération Black Lotus Labs (Lumen Technologies)</h3>

              <p>
                Les chercheurs de <strong>Black Lotus Labs</strong>, la branche de recherche en sécurité de Lumen Technologies, ont mené un travail de fond pour neutraliser l'infrastructure :
              </p>

              <Card className="my-8 bg-green-50/50 dark:bg-green-900/10 border-green-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-green-600 dark:text-green-400 flex items-center gap-2 text-lg">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" /> SERVEURS C2 NEUTRALISÉS
                  </p>
                  <p className="mt-3 text-lg">
                    Plus de <strong>550 serveurs de commande et contrôle</strong> ont été null-routés (leur trafic redirigé vers nulle part) depuis octobre 2025. Cette opération a significativement réduit la capacité du botnet à coordonner ses attaques, bien que le réseau reste actif sur les appareils déjà infectés.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Le bouclier Cloudflare</h3>

              <p>
                Cloudflare a joué un rôle central dans l'absorption des attaques. Leur système de <strong>mitigation autonome</strong> a détecté et neutralisé l'attaque de 31,4 Tbps <strong>sans aucune intervention humaine</strong>. C'est un point crucial : à cette échelle et cette vitesse (35 secondes), seule une intelligence artificielle peut réagir à temps.
              </p>

              <p>
                Cloudflare propose désormais un <strong>DDoS Botnet Threat Feed</strong> gratuit pour les opérateurs de réseau, auquel plus de 800 réseaux sont déjà inscrits. Ce flux de données en temps réel permet aux FAI d'identifier et de bloquer le trafic malveillant issu des botnets.
              </p>
            </section>

            <Separator className="my-12" />

            <section id="wordpress" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-primary flex-shrink-0" /> 
                10. Sites WordPress : comment se protéger contre les méga-botnets
              </h2>

              <p>
                Si vous gérez un site WordPress — qu'il s'agisse d'un blog, d'un e-commerce WooCommerce ou d'un site d'entreprise — la menace AISURU/Kimwolf vous concerne directement. Un site WordPress hébergé sans protection DDoS adéquate peut être mis hors ligne en quelques secondes par une fraction de la puissance de ce botnet.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="font-bold text-primary flex items-center gap-2 text-lg">
                    <ShieldCheck className="w-6 h-6 flex-shrink-0" /> PROTECTION INTÉGRÉE AVEC KINSTA
                  </p>
                  <p className="mt-3 text-lg">
                    <strong>Kinsta</strong> est l'un des rares hébergeurs WordPress à intégrer nativement la protection <strong>Cloudflare Enterprise</strong>, le même système qui a stoppé l'attaque de 31,4 Tbps. Chaque site hébergé chez Kinsta bénéficie automatiquement de :
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span>Protection DDoS automatique et illimitée (L3/L4 et L7)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span>WAF (Web Application Firewall) avec règles WordPress spécifiques</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span>CDN global sur 260+ data centers Cloudflare</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span>Isolation complète par container (pas de contamination entre sites)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span>Surveillance de sécurité 24/7 avec détection d'intrusion</span></li>
                  </ul>
                  <div className="mt-6">
                    <Button asChild>
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-protection">
                        Protéger mon site avec Kinsta <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Checklist de protection anti-DDoS pour WordPress</h3>

              <div className="my-8 not-prose space-y-3">
                {[
                  "Utiliser un hébergeur avec protection Cloudflare Enterprise intégrée (Kinsta)",
                  "Activer un CDN pour distribuer le trafic sur des centaines de serveurs",
                  "Configurer le rate limiting pour bloquer les requêtes abusives",
                  "Mettre à jour WordPress, thèmes et plugins systématiquement",
                  "Utiliser un WAF avec règles spécifiques WordPress",
                  "Supprimer les plugins inutilisés (surface d'attaque réduite)",
                  "Activer l'authentification 2FA sur wp-admin",
                  "Bloquer l'accès XML-RPC si non utilisé (vecteur DDoS courant)",
                  "Sauvegarder quotidiennement sur un stockage externe",
                  "Surveiller les logs d'accès pour détecter les patterns anormaux"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Pour les sites à fort trafic ou les e-commerces, nous recommandons de <Link href="/audit-site" className="text-primary hover:underline font-medium">réaliser un audit de sécurité complet</Link> de votre site avec notre outil gratuit pour identifier les vulnérabilités avant qu'elles ne soient exploitées.
              </p>
            </section>

            <section id="verifier" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Smartphone className="text-orange-500 flex-shrink-0" /> 
                11. Votre appareil est-il infecté ? Guide de vérification
              </h2>

              <p>
                Si vous possédez un boîtier TV Android, un routeur, une caméra IP ou tout autre appareil connecté, voici comment vérifier si vous êtes compromis.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Signes d'infection</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" /> Activité réseau anormale
                    </h4>
                    <p className="text-sm text-muted-foreground">Consommation de bande passante élevée même lorsque vous n'utilisez pas l'appareil. Vérifiez les statistiques de votre routeur.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" /> Ralentissements inexpliqués
                    </h4>
                    <p className="text-sm text-muted-foreground">L'appareil est lent, chauffe excessivement ou se comporte de manière erratique sans raison apparente.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" /> Connexions sortantes suspectes
                    </h4>
                    <p className="text-sm text-muted-foreground">Des connexions vers des IP inconnues, notamment sur les ports 1337, 40860, ou 5555.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" /> Absence de certification Google
                    </h4>
                    <p className="text-sm text-muted-foreground">L'appareil n'est pas certifié Google Play Protect. Vérifiez dans Paramètres {String.fromCharCode(8594)} Sécurité.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Appareils Android TV certifiés (recommandés)</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                <Card className="border-green-500/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-bold">Google Chromecast</p>
                    <p className="text-xs text-muted-foreground mt-1">Certifié Play Protect</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-bold">NVIDIA Shield TV</p>
                    <p className="text-xs text-muted-foreground mt-1">Certifié Play Protect</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-bold">Xiaomi Mi TV Box</p>
                    <p className="text-xs text-muted-foreground mt-1">Certifié Play Protect</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="my-8 bg-orange-50/50 dark:bg-orange-900/10 border-orange-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-lg">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" /> QUE FAIRE SI VOTRE APPAREIL EST INFECTÉ
                  </p>
                  <div className="mt-3 space-y-2">
                    <p><strong>1.</strong> Déconnectez immédiatement l'appareil d'Internet</p>
                    <p><strong>2.</strong> Effectuez une réinitialisation complète (factory reset)</p>
                    <p><strong>3.</strong> Si le malware persiste après le reset (cas des infections firmware), la <strong>destruction physique</strong> de l'appareil est recommandée</p>
                    <p><strong>4.</strong> Remplacez par un appareil certifié Google Play Protect</p>
                    <p><strong>5.</strong> Changez les mots de passe Wi-Fi et de tous les comptes utilisés depuis le réseau</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Info className="text-blue-500 flex-shrink-0" /> 
                12. FAQ : Questions fréquentes
              </h2>

              <div className="space-y-6 not-prose">
                {faqSchema.mainEntity.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-base mb-3">{faq.name}</h3>
                      <p className="text-sm text-muted-foreground">{faq.acceptedAnswer.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" /> 
                13. Conclusion : une menace systémique pour l'Internet mondial
              </h2>

              <p>
                Le botnet AISURU/Kimwolf n'est pas un simple fait divers de cybersécurité. C'est un <strong>signal d'alarme systémique</strong> qui révèle des failles profondes dans notre écosystème numérique :
              </p>

              <ul>
                <li><strong>La chaîne d'approvisionnement IoT est compromise</strong> : des millions d'appareils arrivent pré-infectés depuis l'usine, sans que les consommateurs en aient conscience</li>
                <li><strong>Les réseaux de proxy résidentiels sont une arme</strong> : conçus pour la confidentialité, ils sont détournés pour pénétrer les réseaux locaux et propager des malwares</li>
                <li><strong>L'échelle des attaques DDoS dépasse l'imagination</strong> : 31,4 Tbps équivaut à la bande passante de plusieurs pays. Aucune infrastructure non protégée ne peut résister</li>
                <li><strong>La vitesse rend l'humain obsolète</strong> : 35 secondes pour une attaque, 89% terminées en moins de 10 minutes. Seule l'automatisation peut répondre à temps</li>
              </ul>

              <p>
                Pour les propriétaires de sites WordPress, la leçon est claire : <strong>votre hébergeur est votre première ligne de défense</strong>. Un hébergeur sans protection DDoS intégrée vous laisse vulnérable à une menace qui frappe 5 376 fois par heure. La question n'est plus "si" mais "quand" votre site sera ciblé.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-xl mb-3">Protégez votre site WordPress avec la même technologie qui a stoppé l'attaque de 31,4 Tbps</h3>
                  <p className="text-muted-foreground mb-6">Kinsta intègre Cloudflare Enterprise, WAF, CDN et surveillance 24/7. Migration gratuite incluse.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-cta-final">
                        Voir les plans Kinsta <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/audit-site" data-testid="link-audit-cta">
                        Auditer mon site gratuitement
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Separator className="my-8" />

              <div className="text-sm text-muted-foreground space-y-2 not-prose">
                <p><strong>Sources et références :</strong></p>
                <ul className="space-y-1 list-disc pl-5">
                  <li><a href="https://blog.cloudflare.com/ddos-threat-report-2025-q4/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cloudflare Q4 2025 DDoS Threat Report</a></li>
                  <li><a href="https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Hacker News : AISURU/Kimwolf Botnet Launches Record-Setting 31.4 Tbps DDoS Attack</a></li>
                  <li><a href="https://krebsonsecurity.com/2026/01/who-benefited-from-the-aisuru-and-kimwolf-botnets/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Krebs on Security : Who Benefited from the Aisuru and Kimwolf Botnets?</a></li>
                  <li><a href="https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Krebs on Security : The Kimwolf Botnet is Stalking Your Local Network</a></li>
                  <li><a href="https://blog.xlab.qianxin.com/kimwolf-botnet-en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QiAnXin XLab : Kimwolf Botnet Technical Analysis</a></li>
                  <li><a href="https://synthient.com/blog/a-broken-system-fueling-botnets" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Synthient : A Broken System Fueling Botnets</a></li>
                </ul>
                <p className="mt-4"><em>Cet article est le fruit d'un travail d'investigation journalistique indépendant. Il ne constitue pas un avis juridique. Les informations sont exactes au moment de la publication (6 février 2026). Nos recommandations d'hébergement contiennent des liens d'affiliation qui soutiennent notre travail de recherche.</em></p>
              </div>
            </section>

          </article>

          <aside className="lg:col-span-4 space-y-8">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Protégez votre WordPress
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Face aux méga-botnets comme AISURU/Kimwolf, seule une protection Cloudflare Enterprise intégrée peut garantir la disponibilité de votre site.
                </p>
                <Button className="w-full" asChild>
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-sidebar">
                    Kinsta + Cloudflare Enterprise <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Separator className="my-6" />
                
                <h4 className="font-semibold text-sm mb-3">Articles liés</h4>
                <div className="space-y-3">
                  <Link href="/article/7-failles-critiques-fevrier-2026" className="text-sm text-primary hover:underline block">
                    7 Failles Critiques WordPress Février 2026
                  </Link>
                  <Link href="/article/alerte-phishing-sncf-connect-2026" className="text-sm text-primary hover:underline block">
                    Alerte Phishing SNCF Connect 2026
                  </Link>
                  <Link href="/audit-site" className="text-sm text-primary hover:underline block">
                    Audit de sécurité gratuit de votre site
                  </Link>
                </div>

                <Separator className="my-6" />

                <h4 className="font-semibold text-sm mb-3">Chiffres clés</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Record DDoS</span>
                    <span className="font-bold">31,4 Tbps</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Appareils infectés</span>
                    <span className="font-bold">4 millions</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Durée de l'attaque</span>
                    <span className="font-bold">35 secondes</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Pays touchés</span>
                    <span className="font-bold">222</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Serveurs C2 neutralisés</span>
                    <span className="font-bold">550+</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Augmentation YoY</span>
                    <span className="font-bold">+700%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ArticleBotnetAisuru2026;
