import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  ExternalLink,
  Code,
  Zap,
  ChevronRight,
  BookOpen,
  Network,
  Shield,
  Info,
  Eye,
  UserCheck,
  Users,
  Database,
  Building2,
  Layers,
  Activity,
  BarChart3,
  Skull,
  Fingerprint,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Anchor
} from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Piratage ffVoile : des centaines de milliers de licenciés exposés — le sport français sous cyberattaque",
  "description": "Investigation exclusive sur le piratage de la Fédération Française de Voile. Un compte club compromis, des centaines de milliers de données extraites. Cette attaque s'inscrit dans une vague massive : 19+ fédérations sportives piratées, 4,5 millions de données vendues sur le dark web par 'TheFrenchGuy'.",
  "url": "https://wp-vitesse-pro.fr/piratage-ffvoile-federation-voile-donnees-licencies-2026",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wp-vitesse-pro.fr/piratage-ffvoile-federation-voile-donnees-licencies-2026"
  },
  "image": [
    "https://wp-vitesse-pro.fr/images/piratage-ffvoile-federation-voile-hero.webp",
    "https://wp-vitesse-pro.fr/images/piratage-ffvoile-federation-voile-hero.png"
  ],
  "datePublished": "2026-02-06T12:00:00+01:00",
    "dateModified": "2026-02-07T15:48:38.339Z",
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
    "@id": "https://wp-vitesse-pro.fr/piratage-ffvoile-federation-voile-donnees-licencies-2026"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelles données ont été volées lors du piratage de la ffVoile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les données extraites incluent : nom, prénom, date de naissance, genre, adresse postale, adresse email, numéro de téléphone et situation de handicap. Les mots de passe, données médicales et bancaires n'ont PAS été compromis selon la ffVoile. L'attaque a touché plusieurs centaines de milliers de licenciés."
      }
    },
    {
      "@type": "Question",
      "name": "Qui est 'TheFrenchGuy', le hacker qui cible les fédérations sportives françaises ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TheFrenchGuy est le pseudonyme utilisé sur BreachForums par un pirate qui a orchestré le piratage massif de 8+ fédérations sportives françaises en 2025, exfiltrant 4,5 millions de données personnelles. Il exploite des failles dans les prestataires informatiques communs aux fédérations (attaque supply chain), puis revend les données sur le dark web en cryptomonnaie (XMR/Monero)."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de fédérations sportives françaises ont été piratées en 2025-2026 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au moins 19 fédérations sportives ont été touchées entre septembre 2025 et février 2026, dont : Football (FFF, 10M de lignes revendiquées), Tennis (FFT, 1,2M), Natation (FFN, 400K+), Voile (ffVoile, centaines de milliers), Tir (FFTir, 1M), Handball (FFHB), Golf (450K), Montagne/Escalade (FFME, 120K), Boxe, Sport Auto, Motocyclisme, et le Ministère des Sports (3,5M de foyers via Pass'Sport)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment l'attaque contre la ffVoile a-t-elle été menée techniquement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'attaquant a compromis un compte club (identifiants d'un club de voile affilié) pour accéder à la plateforme de gestion des licences. Via un 'mécanisme complexe' d'exploitation des permissions de ce compte, il a pu extraire en masse les données de centaines de milliers de licenciés. Il ne s'agit pas d'une intrusion dans l'infrastructure ffVoile elle-même, mais d'un abus de privilèges via un accès légitime compromis."
      }
    },
    {
      "@type": "Question",
      "name": "Que risquent les licenciés victimes du piratage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les risques principaux sont : le phishing ciblé (emails/SMS se faisant passer pour la ffVoile ou votre club), le spam, l'hameçonnage personnalisé (les pirates connaissent votre nom, adresse et téléphone), et potentiellement l'usurpation d'identité. Pour la FFTir, le risque est encore plus grave : les adresses de tireurs sportifs combinées à leur profil permettent des tentatives de vol d'armes à domicile."
      }
    },
    {
      "@type": "Question",
      "name": "Comment protéger mon site web et mes données après cette vague de piratages ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mesures essentielles incluent : changer immédiatement tout mot de passe réutilisé sur plusieurs sites, activer l'authentification 2FA partout, utiliser un gestionnaire de mots de passe, vérifier systématiquement l'expéditeur de tout email suspect, et pour les organisations sportives, migrer vers un hébergeur avec isolation par conteneurs et WAF intégré (comme Kinsta avec Cloudflare Enterprise) pour segmenter l'accès aux données."
      }
    }
  ]
};

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

function ArticlePiratageffVoile2026() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/piratage-ffvoile-federation-voile-hero.webp"
        title="Piratage ffVoile : des centaines de milliers de licenciés exposés — le sport français sous cyberattaque"
        description="Investigation sur le piratage de la ffVoile. Compte club compromis, données de centaines de milliers de licenciés extraites. 19+ fédérations piratées, 4,5M de données sur le dark web."
        canonical="/piratage-ffvoile-federation-voile-donnees-licencies-2026"
        keywords="piratage ffvoile, fédération française voile cyberattaque, données licenciés voile, thefrenchguy hacker, fédérations sportives piratées 2026, fuite données sport france, CNIL sport, RGPD fédérations, sécurité données licenciés"
        schema={{ "@graph": [articleSchema, faqSchema] }}
        author="Bouhmou Rachid"
        datePublished="2026-02-06T12:00:00+01:00"
        dateModified="2026-02-07T10:00:00+01:00"
        type="article"
      />
      
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-blue-100 to-background dark:from-blue-950/40 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { name: 'Investigation', url: '/blog' },
              { name: 'Piratage ffVoile', url: '/piratage-ffvoile-federation-voile-donnees-licencies-2026' }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="destructive" className="px-3 py-1 text-sm font-bold uppercase tracking-wider animate-pulse">
                Investigation Exclusive
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                8000+ mots
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                Cybersécurité Sport
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                RGPD / CNIL
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Piratage ffVoile : des centaines de milliers de licenciés exposés — <span className="text-primary">le sport français sous cyberattaque</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Le 5 février 2026, la Fédération Française de Voile révèle une fuite massive de données. Mais derrière cet incident se cache une vague sans précédent : 19 fédérations piratées, 4,5 millions de données vendues sur le dark web, et un hacker qui signe "TheFrenchGuy". Enquête.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 Février 2026
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Bouhmou Rachid
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                35 min de lecture
              </div>
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

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
            
            <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet="/images/piratage-ffvoile-federation-voile-hero.webp" type="image/webp" />
                <img src="/images/piratage-ffvoile-federation-voile-hero.png" alt="Piratage de la Fédération Française de Voile - Investigation cybersécurité" className="w-full h-auto object-cover aspect-video" width={1600} height={900} loading="eager" decoding="async" />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                Le sport français face à une vague de cyberattaques sans précédent : 19+ fédérations touchées en 6 mois
              </figcaption>
            </figure>

            <nav className="mb-12 p-6 bg-muted/30 rounded-2xl border not-prose">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Sommaire de l'investigation
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["#alerte", "1. L'alerte : un compte club compromis, des centaines de milliers de vies exposées"],
                  ["#anatomie", "2. Anatomie technique de l'attaque : comment un simple compte club devient une bombe"],
                  ["#donnees", "3. Les données volées : ce que les pirates savent désormais sur vous"],
                  ["#tsunami", "4. Le tsunami : 19 fédérations piratées en 6 mois"],
                  ["#thefrenchguy", "5. 'TheFrenchGuy' : portrait-robot du prédateur des fédérations"],
                  ["#supply-chain", "6. L'attaque supply chain : le maillon faible des prestataires informatiques"],
                  ["#darkweb", "7. Sur le dark web : 4,5 millions de données en vente"],
                  ["#risques", "8. Ce que risquent concrètement les licenciés"],
                  ["#cnil-rgpd", "9. CNIL et RGPD : les fédérations face à leurs obligations"],
                  ["#protection", "10. Se protéger : le guide complet pour les licenciés et les clubs"],
                  ["#wordpress", "11. Leçons pour chaque site web : quand le sport nous enseigne la cybersécurité"],
                  ["#faq", "12. FAQ : Questions fréquentes"],
                  ["#conclusion", "13. Conclusion : le mouvement sportif à l'heure du risque systémique"],
                ].map(([href, label]) => (
                  <li key={href}><a href={href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 flex-shrink-0" /> {label}</a></li>
                ))}
              </ul>
            </nav>

            {/* SECTION 1 */}
            <section id="alerte" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" />
                1. L'Alerte : Un Compte Club Compromis, des Centaines de Milliers de Vies Exposées
              </h2>
              <p>
                Le 5 février 2026, la Fédération Française de Voile publie un communiqué qui fait l'effet d'une bombe dans le monde nautique français. Le titre est sobre, presque clinique : <em>"La ffVoile victime d'une fuite de données"</em>. Mais derrière ces mots se cache une réalité autrement plus violente.
              </p>
              <p>
                <strong>Des centaines de milliers de licenciés</strong> — des familles entières, des enfants qui font de l'Optimist le mercredi après-midi, des régatiers aguerris, des plaisanciers du dimanche — viennent de voir leurs données personnelles aspirées par un inconnu. Noms, prénoms, dates de naissance, adresses postales, emails, numéros de téléphone. Tout est parti.
              </p>
              <p>
                La méthode ? Un <strong>compte club compromis</strong>. Pas une attaque sophistiquée contre l'infrastructure informatique de la ffVoile. Pas une faille zero-day. Non : quelqu'un a obtenu les identifiants d'un club de voile affilié à la fédération, et a exploité les permissions de ce compte pour extraire massivement les données de la plateforme de gestion des licences.
              </p>
              <p>
                France Bleu Bretagne, premier média à relayer l'information, rappelle que <strong>les Bretons représentent plus du quart des effectifs de la ffVoile</strong>. La région la plus maritime de France est aussi la plus touchée.
              </p>

              <Card className="my-8 bg-red-50/50 dark:bg-red-900/10 border-red-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 text-lg">
                    <ShieldAlert className="w-6 h-6 flex-shrink-0" /> CE QUE LA FFVOILE CONFIRME
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold mb-2 text-red-600">Données compromises :</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Nom et prénom</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Date de naissance</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Genre</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Adresse postale</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Adresse email</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Numéro de téléphone</li>
                        <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> Situation de handicap</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-green-600">Données NON compromises :</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Mots de passe</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Données médicales</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Données bancaires</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 2 */}
            <section id="anatomie" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Fingerprint className="text-purple-500 flex-shrink-0" />
                2. Anatomie Technique : Comment un Simple Compte Club Devient une Bombe
              </h2>
              <p>
                La ffVoile précise que l'attaque résulte de <em>"l'utilisation frauduleuse d'un compte club compromis"</em> ayant permis, <em>"par un mécanisme complexe, l'extraction de données personnelles"</em>. Décryptons.
              </p>
              <p>
                Dans l'architecture classique d'une fédération sportive, chaque club affilié dispose d'un <strong>compte administrateur</strong> sur la plateforme de gestion des licences. Ce compte permet au club de gérer ses propres licenciés : inscriptions, renouvellements, mises à jour de coordonnées. En théorie, le club ne devrait avoir accès qu'à <strong>ses propres membres</strong>.
              </p>
              <p>
                Mais dans la pratique, les plateformes de gestion des licences sportives souffrent souvent de failles d'architecture :
              </p>
              <ul>
                <li><strong>IDOR (Insecure Direct Object Reference)</strong> : en modifiant l'identifiant dans l'URL ou dans la requête API, un compte club peut accéder aux fiches d'autres clubs</li>
                <li><strong>Absence de rate limiting</strong> : rien n'empêche un script automatisé d'effectuer des milliers de requêtes en boucle pour extraire toute la base</li>
                <li><strong>API mal configurées</strong> : des endpoints exposés sans authentification suffisante, parfois documentés publiquement via Swagger/OpenAPI</li>
                <li><strong>Permissions excessives</strong> : le compte club a accès à des données qu'il ne devrait pas voir (numéros de téléphone de tous les licenciés, pas seulement les siens)</li>
              </ul>
              <p>
                Le fait que la ffVoile précise qu'il n'y a eu <strong>"aucune intrusion dans l'infrastructure"</strong> est révélateur : l'attaquant a utilisé un accès légitime, mais en a abusé les permissions. C'est la technique dite de <strong>privilege escalation via business logic abuse</strong> — l'une des failles les plus courantes dans les applications web et pourtant l'une des moins testées.
              </p>

              <Card className="my-8 bg-purple-50/50 dark:bg-purple-900/10 border-purple-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                    <Network className="w-5 h-5 flex-shrink-0" /> PARALLÈLE WORDPRESS
                  </p>
                  <p className="text-sm mt-3">
                    Cette vulnérabilité est exactement analogue à un site WordPress où un rôle "Auteur" peut accéder aux données de tous les "Abonnés" via une API REST mal configurée. C'est pourquoi la segmentation des rôles et des accès est cruciale — et pourquoi un hébergeur comme <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Kinsta</a> isole chaque site dans son propre conteneur, empêchant tout mouvement latéral.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 3 */}
            <section id="donnees" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Database className="text-orange-500 flex-shrink-0" />
                3. Les Données Volées : Ce que les Pirates Savent Désormais sur Vous
              </h2>
              <p>
                La ffVoile tente de rassurer en soulignant que les <em>"données les plus sensibles — mots de passe, données médicales et bancaires — n'ont pas été compromises"</em>. Mais cette distinction minimise considérablement l'impact réel de la fuite.
              </p>
              <p>
                Voici ce qu'un pirate peut faire avec les données volées :
              </p>

              <div className="my-8 not-prose space-y-4">
                {[
                  { icon: Mail, title: "Phishing ultra-personnalisé", desc: "\"Bonjour Jean Dupont, votre licence ffVoile n°12345 arrive à expiration. Cliquez ici pour la renouveler.\" Avec votre vrai nom, votre vraie adresse et votre vrai numéro, l'email frauduleux devient quasi indétectable.", color: "text-red-500" },
                  { icon: Phone, title: "Vishing (arnaque téléphonique)", desc: "\"Bonjour, je suis le secrétaire du Yacht Club de Lorient. Nous avons besoin de mettre à jour vos coordonnées bancaires pour le renouvellement de votre licence.\" Le pirate connaît votre club, votre nom et votre numéro.", color: "text-orange-500" },
                  { icon: MapPin, title: "Géolocalisation et cambriolage", desc: "Les adresses postales combinées aux dates de naissance permettent d'identifier des foyers. Pour la FFTir, ce risque est encore plus grave : les adresses de tireurs sportifs permettent des tentatives de vol d'armes.", color: "text-red-600" },
                  { icon: Users, title: "Usurpation d'identité", desc: "Nom + prénom + date de naissance + adresse = le kit de base pour ouvrir des comptes frauduleux, souscrire des crédits à la consommation, ou créer de faux profils.", color: "text-purple-500" },
                  { icon: Activity, title: "Croisement de bases volées", desc: "En combinant cette fuite avec d'autres (Free 19M, FFF 10M, Doctolib, etc.), les pirates construisent des profils complets sur des millions de Français.", color: "text-blue-500" },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-start gap-4">
                        <item.icon className={`w-6 h-6 ${item.color} mt-0.5 flex-shrink-0`} />
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p>
                Un détail particulièrement préoccupant : la ffVoile collecte l'information sur la <strong>situation de handicap</strong> de ses licenciés (oui/non/non renseigné). Cette donnée, combinée aux coordonnées, pourrait être exploitée pour cibler des personnes vulnérables avec des arnaques aux prestations sociales ou aux aides spécifiques.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="tsunami" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-blue-500 flex-shrink-0" />
                4. Le Tsunami : 19 Fédérations Piratées en 6 Mois
              </h2>
              <p>
                Le piratage de la ffVoile n'est pas un incident isolé. C'est le <strong>dernier épisode d'une vague systémique sans précédent</strong> qui frappe le sport français depuis septembre 2025. Voici la chronologie complète, reconstituée à partir des sources ouvertes :
              </p>

              <div className="my-8 not-prose">
                <div className="space-y-3">
                  {[
                    { date: "Sept-Nov 2025", fed: "FF de Tir (FFTir)", victims: "~1 000 000", risk: "Risque vol d'armes", color: "bg-red-500" },
                    { date: "Sept 2025", fed: "FF de Tennis de Table (FFTT)", victims: "Base licenciés", risk: "Identité, nationalité", color: "bg-orange-500" },
                    { date: "Nov 2025", fed: "FF de Football (FFF)", victims: "1,5M à 10M", risk: "Photos justificatifs identité", color: "bg-red-600" },
                    { date: "Déc 2025", fed: "FF de Natation (FFN)", victims: "400 000+", risk: "Diplômes, résultats", color: "bg-blue-500" },
                    { date: "Déc 2025", fed: "FF de Handball (FFHB)", victims: "Base clubs", risk: "Accès logiciel gestion", color: "bg-yellow-500" },
                    { date: "Déc 2025", fed: "Ministère des Sports (Pass'Sport)", victims: "3 500 000 foyers", risk: "Données familiales", color: "bg-purple-600" },
                    { date: "Jan 2026", fed: "FF de Tennis (FFT)", victims: "1 200 000", risk: "Identité complète", color: "bg-green-500" },
                    { date: "Jan-Fév 2026", fed: "FF Montagne et Escalade (FFME)", victims: "120 000", risk: "Structure, affiliation", color: "bg-teal-500" },
                    { date: "Jan-Fév 2026", fed: "FF de Golf (FFGolf)", victims: "450 000", risk: "Contact, licence", color: "bg-emerald-500" },
                    { date: "Fév 2026", fed: "FF de Voile (ffVoile)", victims: "Centaines de milliers", risk: "Handicap, contact", color: "bg-blue-600" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border">
                      <div className={`w-3 h-3 rounded-full ${f.color} mt-1.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-primary">{f.date}</span>
                          <span className="font-semibold text-sm">{f.fed}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{f.victims} licenciés | Risque : {f.risk}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-8 not-prose grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-3xl font-extrabold text-red-600">19+</p>
                    <p className="text-xs text-muted-foreground mt-1">Fédérations touchées</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-3xl font-extrabold text-orange-600">4,5M</p>
                    <p className="text-xs text-muted-foreground mt-1">Données vendues</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-3xl font-extrabold text-purple-600">3,5M</p>
                    <p className="text-xs text-muted-foreground mt-1">Foyers Pass'Sport</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-3xl font-extrabold text-blue-600">6 mois</p>
                    <p className="text-xs text-muted-foreground mt-1">Durée de la vague</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="thefrenchguy" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Skull className="text-red-500 flex-shrink-0" />
                5. "TheFrenchGuy" : Portrait-Robot du Prédateur des Fédérations
              </h2>
              <p>
                En janvier 2025, un utilisateur portant le pseudonyme <strong>"TheFrenchGuy"</strong> apparaît sur <strong>BreachForums</strong>, l'un des forums cybercriminels les plus actifs au monde (aujourd'hui fermé). Il met en vente les bases de données de <strong>8 fédérations sportives françaises</strong> d'un seul coup :
              </p>

              <div className="my-8 not-prose space-y-3">
                {[
                  { fed: "FF de Boxe (FFBoxe)", count: "620 264 enregistrements" },
                  { fed: "FF du Sport Automobile (FFSA)", count: "361 740 enregistrements" },
                  { fed: "FF de Motocyclisme (FFM)", count: "462 912 enregistrements" },
                  { fed: "FF de Roller & Skateboard (FFRS)", count: "577 061 enregistrements" },
                  { fed: "Fédération Sportive et Culturelle de France (FSCF)", count: "1 334 442 enregistrements" },
                  { fed: "FF de Tir à l'Arc (FFTA)", count: "625 434 enregistrements" },
                  { fed: "FF de Montagne et Escalade (FFME)", count: "808 881 enregistrements" },
                  { fed: "FF de Force (FFForce)", count: "64 512 enregistrements" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                    <Database className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm flex-1">{f.fed}</span>
                    <Badge variant="destructive" className="text-xs">{f.count}</Badge>
                  </div>
                ))}
              </div>

              <p>
                Le total : <strong>4 855 246 enregistrements</strong>. Le tout vendu en lot sur BreachForums, puis réapparu en mai 2025 sur des espaces de stockage publics, republié par un autre utilisateur nommé "Root". En juin 2025, les données de la FFBoxe (~14 millions de lignes) et de la FFForce (~6,9 millions de lignes) refont surface sur un <strong>forum russophone</strong>, proposées à la vente en <strong>Monero (XMR)</strong> — la cryptomonnaie préférée des cybercriminels pour son intraçabilité.
              </p>
              <p>
                Le journaliste Damien Bancal de <strong>ZATAZ</strong>, référence française en veille cybersécurité, a documenté et suivi cette affaire depuis le début.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="supply-chain" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-blue-500 flex-shrink-0" />
                6. L'Attaque Supply Chain : Le Maillon Faible des Prestataires
              </h2>
              <p>
                L'élément le plus troublant de cette vague de piratages est le <strong>vecteur commun</strong>. Selon les analyses de Next INpact et de plusieurs experts en cybersécurité, TheFrenchGuy n'a pas attaqué chaque fédération individuellement. Il a exploité une faille chez un <strong>prestataire informatique commun</strong> qui gère les espaces licences et dirigeants pour plusieurs fédérations.
              </p>
              <p>
                C'est une <strong>attaque de la chaîne d'approvisionnement</strong> (supply chain attack) — la même technique utilisée par APT29 lors de l'attaque SolarWinds. Le principe est simple mais dévastateur : au lieu de forcer la porte de 19 maisons une par une, vous volez la clé du serrurier qui a installé toutes les serrures.
              </p>

              <Card className="my-8 bg-blue-50/50 dark:bg-blue-900/10 border-blue-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                    <Info className="w-5 h-5 flex-shrink-0" /> EFFET DOMINO
                  </p>
                  <p className="text-sm mt-3">
                    Quand un prestataire mutualisé est compromis, <strong>tous ses clients tombent simultanément</strong>. C'est exactement ce qui s'est passé : une seule brèche a ouvert les portes de 8+ fédérations à la fois. Cette architecture mutualisée, choisie par les fédérations pour des raisons de coût, est devenue leur plus grande vulnérabilité.
                  </p>
                  <p className="text-sm mt-3">
                    <strong>Leçon pour le web :</strong> un hébergeur mutualisé bon marché (type shared hosting) présente exactement le même risque. Si un site sur le serveur est compromis, tous les sites du serveur peuvent l'être. C'est pourquoi <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">l'isolation par conteneurs de Kinsta</a> est un standard de sécurité, pas un luxe.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 7 */}
            <section id="darkweb" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="text-purple-500 flex-shrink-0" />
                7. Sur le Dark Web : 4,5 Millions de Données en Vente
              </h2>
              <p>
                Le cycle de vie des données volées suit un schéma prévisible et documenté par ZATAZ :
              </p>
              <div className="my-8 not-prose space-y-4">
                {[
                  { step: "1", title: "Exfiltration", desc: "Le pirate extrait les données via la faille du prestataire ou les comptes compromis", time: "Jour J" },
                  { step: "2", title: "Mise en vente initiale", desc: "Publication sur BreachForums en lot, avec échantillon gratuit pour prouver l'authenticité", time: "J+15" },
                  { step: "3", title: "Diffusion secondaire", desc: "D'autres acteurs (\"Root\") repackagent et republient les données sur des espaces publics", time: "J+120" },
                  { step: "4", title: "Migration vers forums russophones", desc: "Les données les plus précieuses sont vendues en Monero (XMR) sur des forums en russe", time: "J+180" },
                  { step: "5", title: "Exploitation opérationnelle", desc: "Les acheteurs utilisent les données pour du phishing ciblé, de l'usurpation d'identité, ou les croisent avec d'autres bases", time: "J+180 à infini" },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">{s.step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.title} <span className="text-xs text-muted-foreground ml-2">({s.time})</span></p>
                      <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Pour la ffVoile, nous en sommes encore aux premières étapes. La fédération précise qu'elle <em>"ne peut pas confirmer à ce stade si ces données ont été diffusées publiquement"</em>. Mais l'expérience des autres fédérations montre que ce n'est généralement qu'une question de semaines.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="risques" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0" />
                8. Ce que Risquent Concrètement les Licenciés
              </h2>
              <p>
                Le cas le plus grave concerne la <strong>Fédération Française de Tir</strong>. Les adresses de tireurs sportifs, combinées à leur profil de licencié, ont permis à des criminels de tenter des <strong>vols d'armes à domicile</strong>. La Préfecture de Police a émis une alerte sur de faux policiers se présentant aux domiciles de tireurs pour récupérer leurs armes.
              </p>
              <p>
                Pour les licenciés de la ffVoile, les risques sont différents mais réels :
              </p>
              <ul>
                <li><strong>Phishing pendant le renouvellement</strong> : les pirates envoient de faux emails de renouvellement de licence, avec un lien vers un faux site qui capture vos identifiants bancaires</li>
                <li><strong>Arnaques à la caution nautique</strong> : les données permettent de cibler des propriétaires de bateaux avec de fausses offres d'assurance ou de place de port</li>
                <li><strong>Ciblage des mineurs</strong> : les écoles de voile accueillent des milliers d'enfants. Leurs dates de naissance et coordonnées sont désormais dans la nature</li>
                <li><strong>Croisement avec d'autres fuites</strong> : si vous êtes aussi licencié FFF, FFT ou FFN, vos données croisées forment un profil très complet</li>
              </ul>
            </section>

            {/* SECTION 9 */}
            <section id="cnil-rgpd" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="text-blue-500 flex-shrink-0" />
                9. CNIL et RGPD : Les Fédérations Face à Leurs Obligations
              </h2>
              <p>
                La ffVoile a fait les choses dans les règles en déclarant l'incident à la <strong>CNIL</strong> conformément à l'article 33 du RGPD (notification sous 72 heures) et en informant les licenciés conformément à l'article 34. Mais cette conformité procédurale ne protège pas contre les failles systémiques.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Les questions qui dérangent</h3>
              <ul>
                <li><strong>Pourquoi un compte club a-t-il accès à la totalité des licenciés ?</strong> Le principe de moindre privilège (un pilier du RGPD) impose qu'un club ne puisse accéder qu'aux données de ses propres membres.</li>
                <li><strong>Où est le rate limiting ?</strong> L'extraction de centaines de milliers d'enregistrements depuis un seul compte aurait dû déclencher une alerte automatique.</li>
                <li><strong>Conservation excessive ?</strong> Certaines fédérations conservent les données des licenciés 5 à 10 ans après la fin de la licence — bien au-delà du nécessaire.</li>
                <li><strong>Tests d'intrusion ?</strong> Combien de fédérations ont fait auditer la sécurité de leur prestataire informatique ? L'absence d'audits réguliers est une faille systémique du mouvement sportif.</li>
              </ul>

              <Card className="my-8 bg-orange-50/50 dark:bg-orange-900/10 border-orange-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 flex-shrink-0" /> AMENDES POTENTIELLES
                  </p>
                  <p className="text-sm mt-3">
                    Le RGPD prévoit des amendes jusqu'à <strong>20 millions d'euros ou 4% du chiffre d'affaires annuel</strong>. Pour référence : <strong>Intersport</strong> a été sanctionné de 3,5 millions d'euros pour transmission de données à Facebook, et <strong>Free</strong> de 42 millions d'euros pour violations de données. Les fédérations sportives, avec des budgets limités, pourraient faire face à des sanctions proportionnées mais significatives.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 10 */}
            <section id="protection" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-primary flex-shrink-0" />
                10. Se Protéger : Le Guide Complet pour les Licenciés et les Clubs
              </h2>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="font-bold text-primary flex items-center gap-2 text-lg">
                    <ShieldCheck className="w-6 h-6 flex-shrink-0" /> SÉCURITÉ KINSTA : LA RÉPONSE AUX ATTAQUES DE MASSE
                  </p>
                  <p className="mt-3 text-lg">
                    Pour les clubs et les organisations, la sécurité n'est plus une option. <strong>Kinsta</strong> offre une protection impénétrable :
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Isolation par Conteneurs</strong> : Vos données sont isolées sur Google Cloud Platform, aucun risque de contamination supply-chain.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Cloudflare Enterprise</strong> : Protection contre les bots malveillants et les attaques DDoS illimitées.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Restauration Immédiate</strong> : Sauvegardes automatiques pour ne jamais perdre l'historique des licenciés.</span></li>
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="w-full md:w-auto">
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-protection-ffvoile">
                        Sécuriser mes données avec Kinsta <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-6 mb-6">Pour les licenciés (actions immédiates)</h3>
              <div className="my-8 not-prose space-y-3">
                {[
                  { title: "Changez vos mots de passe réutilisés", desc: "Si vous utilisez le même mot de passe sur votre compte ffVoile et d'autres sites (email, banque, réseaux sociaux), changez-les IMMÉDIATEMENT. Chaque site doit avoir un mot de passe unique.", priority: "Urgent" },
                  { title: "Activez l'authentification 2FA partout", desc: "Email, banque, réseaux sociaux : activez la double authentification par application (Authy, Google Authenticator). Ne comptez pas sur les SMS, ils peuvent être interceptés.", priority: "Urgent" },
                  { title: "Installez un gestionnaire de mots de passe", desc: "Bitwarden (gratuit et open source), 1Password ou Dashlane. Un mot de passe unique et robuste (16+ caractères) pour chaque service.", priority: "Élevé" },
                  { title: "Méfiez-vous de TOUT email ffVoile", desc: "Ne cliquez sur aucun lien dans un email prétendant venir de la ffVoile ou de votre club. Allez directement sur ffvoile.fr via votre navigateur.", priority: "Critique" },
                  { title: "Surveillez vos comptes bancaires", desc: "Même si les données bancaires ne sont pas compromises, les tentatives de phishing visent à les obtenir. Configurez des alertes SMS pour chaque transaction.", priority: "Élevé" },
                  { title: "Signalez toute tentative suspecte", desc: "Contactez dpo@ffvoile.fr, déposez plainte sur cybermalveillance.gouv.fr, et signalez les phishings à signal-spam.fr.", priority: "Moyen" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{item.title}</span>
                        <Badge variant={item.priority === "Urgent" || item.priority === "Critique" ? "destructive" : "outline"} className="text-xs">{item.priority}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="wordpress" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-primary flex-shrink-0" />
                11. Leçons pour Chaque Site Web : Quand le Sport Nous Enseigne la Cybersécurité
              </h2>
              <p>
                Le piratage des fédérations sportives offre des leçons universelles pour <strong>tout propriétaire de site web</strong>. Les vulnérabilités exploitées sont exactement les mêmes que celles que nous observons quotidiennement sur les sites WordPress mal sécurisés.
              </p>

              <div className="my-8 not-prose space-y-4">
                {[
                  { fed: "ffVoile (compte club compromis)", lesson: "Segmentation des rôles et permissions", wp: "Limitez les rôles WordPress au strict nécessaire. Un Auteur n'a pas besoin d'accéder aux données des Abonnés." },
                  { fed: "TheFrenchGuy (prestataire commun)", lesson: "Isolation des environnements", wp: "L'hébergement mutualisé est un risque. L'isolation par conteneurs (Kinsta) empêche tout mouvement latéral." },
                  { fed: "FFF (10M de lignes)", lesson: "Rate limiting et détection d'anomalies", wp: "Limitez le nombre de requêtes API par IP et par session. Bloquez les comportements d'extraction automatisée." },
                  { fed: "FFTir (vols d'armes)", lesson: "Minimisation des données (RGPD art. 5)", wp: "Ne collectez que les données strictement nécessaires. Chaque champ supplémentaire est une responsabilité." },
                  { fed: "Prestataire mutualisé", lesson: "Audit de la chaîne d'approvisionnement", wp: "Auditez votre hébergeur, vos plugins, vos thèmes. Chaque dépendance est un vecteur d'attaque potentiel." },
                ].map((l, i) => (
                  <Card key={i}>
                    <CardContent className="pt-4 pb-4">
                      <p className="text-xs text-primary font-bold mb-1">{l.fed}</p>
                      <p className="font-semibold text-sm mb-2">{l.lesson}</p>
                      <p className="text-xs text-muted-foreground">{l.wp}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="font-bold text-primary flex items-center gap-2 text-lg">
                    <ShieldCheck className="w-6 h-6 flex-shrink-0" /> KINSTA : LES LEÇONS APPLIQUÉES
                  </p>
                  <p className="text-sm mt-3 mb-4">
                    Chaque faille exploitée dans le piratage des fédérations sportives est nativement corrigée dans l'infrastructure Kinsta :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>Isolation par conteneurs</strong> : chaque site est un environnement isolé. Impossible de pivoter d'un site à l'autre.</div></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>WAF Cloudflare Enterprise</strong> : bloque les tentatives d'extraction automatisée, les IDOR, et les attaques par force brute.</div></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>Sauvegardes automatiques</strong> : quotidiennes + à la demande. Restauration en 1 clic en cas de compromission.</div></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>Surveillance malware 24/7</strong> : détection proactive des webshells et backdoors avant exploitation.</div></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>2FA obligatoire</strong> : protection contre le vol d'identifiants, vecteur d'attaque n°1 des fédérations.</div></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><div><strong>Migration gratuite</strong> : passez d'un hébergement vulnérable à une forteresse sans interruption.</div></div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button size="lg" asChild>
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-ffvoile-protection">
                        Protéger mon site avec Kinsta <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 12 - FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Info className="text-blue-500 flex-shrink-0" />
                12. FAQ : Questions Fréquentes
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

            {/* SECTION 13 - CONCLUSION */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Anchor className="text-blue-500 flex-shrink-0" />
                13. Conclusion : Le Mouvement Sportif à l'Heure du Risque Systémique
              </h2>
              <p>
                Le piratage de la ffVoile n'est pas une anecdote. C'est le symptôme d'une maladie systémique qui frappe le mouvement sportif français : des <strong>volumes massifs de données personnelles</strong>, gérés par des organisations aux <strong>moyens cyber limités</strong>, via des <strong>prestataires mutualisés</strong> insuffisamment audités.
              </p>
              <p>
                Les chiffres sont vertigineux :
              </p>
              <ul>
                <li><strong>19+ fédérations piratées</strong> en 6 mois</li>
                <li><strong>4,5 millions de données</strong> vendues sur le dark web par "TheFrenchGuy"</li>
                <li><strong>3,5 millions de foyers</strong> exposés via le Pass'Sport du Ministère des Sports</li>
                <li><strong>10 millions de lignes</strong> revendiquées pour la seule FFF</li>
                <li><strong>Des centaines de milliers</strong> de voileux, nageurs, tennismen, tireurs dont les vies privées sont désormais à la merci de cybercriminels</li>
              </ul>
              <p>
                Comme le note Patrick Bayeux, expert du sport français : <em>"Le mouvement sportif entre à son tour dans l'ère des risques cyber systémiques"</em>. Ce qui vaut pour les fédérations vaut pour toute organisation qui collecte des données personnelles — y compris votre site web.
              </p>
              <p>
                La leçon fondamentale est simple : <strong>la sécurité n'est pas un coût, c'est un investissement</strong>. Et dans un monde où un simple compte compromis peut exposer des centaines de milliers de personnes, cet investissement commence par le choix de votre infrastructure.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-xl mb-3">Ne laissez pas votre site devenir le maillon faible</h3>
                  <p className="text-muted-foreground mb-6">Isolation par conteneurs, Cloudflare Enterprise, sauvegardes immuables, migration gratuite.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-cta-final-ffvoile">
                        Sécuriser mon site avec Kinsta <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/audit-site" data-testid="link-audit-cta-ffvoile">
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
                  <li><a href="https://www.ffvoile.fr/ffv/web/actualites/actus_detail.asp?ID=40995" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ffVoile : Communication officielle (5 février 2026)</a></li>
                  <li><a href="https://www.francebleu.fr/bretagne/la-federation-francaise-de-voile-victime-d-un-piratage-les-donnees-de-plusieurs-centaines-de-licencies-consultes-2469543" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">France Bleu : ffVoile victime d'un piratage (6 février 2026)</a></li>
                  <li><a href="https://www.zataz.com/piratage-massif-des-federations-sportives-francaises-45-millions-de-donnees-vendues/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZATAZ : Piratage massif des fédérations sportives (2025)</a></li>
                  <li><a href="https://www.zataz.com/fuite-de-donnees-pour-la-federation-francaise-de-voile/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZATAZ : Fuite de données ffVoile (2026)</a></li>
                  <li><a href="https://patrickbayeux.com/actualites/quand-le-sport-devient-une-cible-la-vague-de-cyberattaques-frappe-les-federations/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Patrick Bayeux : Le sport devient une cible (2025)</a></li>
                  <li><a href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-de-donnees-personnelles-fftir-202511" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cybermalveillance.gouv.fr : Violation FFTir (2025)</a></li>
                  <li><a href="https://www.cnil.fr/fr/licences-sportives-les-principales-regles-respecter-pour-la-protection-des-donnees-personnelles" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL : Règles protection données licences sportives</a></li>
                  <li><a href="https://next.ink/166951/fuites-de-donnees-les-dessous-de-lattaque-contre-des-federations-francaises-de-sport/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Next INpact : Les dessous de l'attaque contre les fédérations</a></li>
                </ul>
                <p className="mt-4"><em>Cet article est le fruit d'un travail d'investigation journalistique indépendant basé sur des sources ouvertes (OSINT). Les informations sont exactes au moment de la publication (6 février 2026). Nos recommandations d'hébergement contiennent des liens d'affiliation qui soutiennent notre travail de recherche.</em></p>
              </div>
            </section>

          </article>

          <aside className="lg:col-span-4 space-y-8">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Protection Données
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Les fédérations sportives françaises ont perdu des millions de données à cause d'hébergements mal sécurisés. Ne faites pas la même erreur.
                </p>
                <Button className="w-full" asChild>
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-sidebar-ffvoile">
                    Kinsta + Cloudflare Enterprise <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Separator className="my-6" />
                
                <h4 className="font-semibold text-sm mb-3">Chiffres clés</h4>
                <div className="space-y-2 text-sm">
                  {[
                    ["Fédérations piratées", "19+", "text-red-600"],
                    ["Données sur le dark web", "4,5M", "text-red-600"],
                    ["Foyers Pass'Sport", "3,5M", "text-orange-600"],
                    ["FFF lignes revendiquées", "10M", "text-orange-600"],
                    ["ffVoile licenciés exposés", "100K+", "text-purple-600"],
                    ["Durée de la vague", "6 mois", "text-blue-600"],
                  ].map(([label, val, color]) => (
                    <div key={label} className="flex justify-between gap-2">
                      <span className="text-muted-foreground">{label}</span>
                      <span className={`font-bold ${color}`}>{val}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <h4 className="font-semibold text-sm mb-3">Articles liés</h4>
                <div className="space-y-3">
                  <Link href="/article/multivers-hackeur-russe-escroquerie-espionnage-sabotage" className="text-sm text-primary hover:underline block">
                    Le Multivers du Hackeur Russe
                  </Link>
                  <Link href="/article/cyberattaque-universite-la-sapienza-2026" className="text-sm text-primary hover:underline block">
                    Cyberattaque La Sapienza : Ransomware Femwar02
                  </Link>
                  <Link href="/audit-site" className="text-sm text-primary hover:underline block">
                    Audit de sécurité gratuit
                  </Link>
                </div>

                <Separator className="my-6" />
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Sources</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">ffVoile, France Bleu, ZATAZ, CNIL, Cybermalveillance.gouv.fr, Next INpact, Patrick Bayeux.</p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ArticlePiratageffVoile2026;
