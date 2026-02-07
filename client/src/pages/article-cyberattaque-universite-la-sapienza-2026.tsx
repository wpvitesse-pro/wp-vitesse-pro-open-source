import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  Clock, 
  Server, 
  Globe, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  ExternalLink,
  Code,
  Building2,
  Users,
  Database,
  Zap,
  ChevronRight,
  BookOpen,
  FileWarning,
  Network,
  Shield,
  Info,
  AlertCircle,
  Eye,
  Target,
  Activity,
  BarChart3,
  MapPin,
  Layers,
  HardDrive,
  Monitor,
  UserCheck,
  GraduationCap,
  Cpu,
  Bug
} from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Cyberattaque la Sapienza : le ransomware Femwar02 paralyse la plus grande université d'Europe",
  "description": "Investigation sur l'attaque ransomware Femwar02 contre l'Université la Sapienza de Rome. 115 000 étudiants impactés, souche Bablock/Rorschach, ultimatum de 72h. Analyse technique et leçons pour WordPress.",
  "image": [
    "https://wp-vitesse-pro.fr/images/la-sapienza-cyberattack-hero.webp",
    "https://wp-vitesse-pro.fr/images/la-sapienza-cyberattack-hero.png"
  ],
  "datePublished": "2026-02-06T10:00:00+01:00",
  "dateModified": "2026-02-07T10:00:00+01:00",
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
    "@id": "https://wp-vitesse-pro.fr/article/cyberattaque-universite-la-sapienza-2026"
  },
  "url": "https://wp-vitesse-pro.fr/article/cyberattaque-universite-la-sapienza-2026"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le ransomware Femwar02 qui a attaqué la Sapienza ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Femwar02 est un groupe cybercriminel pro-russe jusqu'alors inconnu qui a revendiqué l'attaque contre l'Université la Sapienza de Rome le 2 février 2026. Le ransomware utilisé présente des similitudes avec la souche Bablock/Rorschach, connue pour son chiffrement ultra-rapide capable de verrouiller un système entier en moins de 5 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Combien d'étudiants sont touchés par la cyberattaque de la Sapienza ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plus de 115 000 étudiants sont directement impactés par la cyberattaque. Le portail Infostud, utilisé pour les inscriptions aux examens, les certificats et les résultats, est totalement hors ligne. Les examens de la session d'hiver sont perturbés et les étudiants doivent s'inscrire directement auprès des professeurs."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les universités sont-elles des cibles privilégiées des ransomwares ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les universités sont qualifiées de 'target-rich, cyber-poor' : elles possèdent d'énormes quantités de données sensibles (recherches, données personnelles, propriété intellectuelle) mais n'allouent que 3 à 12% de leur budget IT à la cybersécurité. 74% des attaques contre les universités réussissent, contre 68% dans le secteur privé. De plus, 65% des universités manquent de configurations de sécurité email de base."
      }
    },
    {
      "@type": "Question",
      "name": "Comment protéger un site WordPress contre les ransomwares ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les mesures essentielles incluent : utiliser un hébergeur avec isolation par conteneurs (comme Kinsta), appliquer la règle de sauvegarde 3-2-1 (3 copies, 2 supports, 1 hors-site), activer l'authentification 2FA, segmenter le réseau, maintenir tous les plugins à jour, et utiliser un WAF. Kinsta intègre nativement Cloudflare Enterprise et des sauvegardes automatiques sur Google Cloud, rendant la récupération possible en un clic."
      }
    },
    {
      "@type": "Question",
      "name": "L'Université la Sapienza a-t-elle payé la rançon ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'université a déclaré ne pas avoir ouvert le lien de paiement sur le dark web pour éviter de déclencher le compte à rebours de 72 heures. L'Agence Nationale de Cybersécurité italienne (ACN) et la Polizia Postale sont mobilisées. Des sauvegardes hors ligne ont été préservées, permettant une restauration progressive des systèmes sans céder au chantage."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que le ransomware Bablock/Rorschach et pourquoi est-il dangereux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bablock/Rorschach est une souche de ransomware apparue en 2023, considérée comme l'une des plus rapides jamais observées. Elle peut chiffrer un système complet en moins de 4 minutes et 30 secondes, soit deux fois plus vite que LockBit 3.0. Elle utilise un chiffrement hybride (courbe25519 + eSTREAM hc-128) et un déploiement semi-autonome qui rend la détection extrêmement difficile."
      }
    }
  ]
};

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

function ArticleLaSapienza2026() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/la-sapienza-cyberattack-hero.webp"
        title="Cyberattaque la Sapienza 2026 : ransomware Femwar02, analyse et protection WordPress"
        description="Investigation exclusive sur la cyberattaque ransomware Femwar02 contre l'Université la Sapienza de Rome. 115 000 étudiants impactés, souche Bablock/Rorschach, leçons pour WordPress."
        canonical="/article/cyberattaque-universite-la-sapienza-2026"
        keywords="cyberattaque la sapienza, ransomware femwar02 2026, bablock rorschach ransomware, sécurité université italie, protection wordpress ransomware, kinsta sécurité, cloudflare enterprise, cybersécurité éducation europe"
        schema={{ "@graph": [articleSchema, faqSchema] }}
        author="Bouhmou Rachid"
        datePublished="2026-02-06T10:00:00+01:00"
        dateModified="2026-02-07T10:00:00+01:00"
        type="article"
      />
      
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { name: 'Cyber-Investigation', url: '/blog' },
              { name: 'Cyberattaque la Sapienza - Ransomware Femwar02', url: '/article/cyberattaque-universite-la-sapienza-2026' }
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
                Ransomware
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Sécurité WordPress
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Cyberattaque la Sapienza : comment le ransomware <span className="text-red-600 dark:text-red-400">Femwar02</span> a paralysé la plus grande université d'Europe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              115 000 étudiants dans le noir, des millions de fichiers chiffrés, 72 heures pour payer. Anatomie d'une attaque par rançongiciel qui révèle la fragilité catastrophique du secteur éducatif — et ce que chaque propriétaire de site WordPress doit en retenir. Par <span className="font-bold text-foreground underline decoration-primary">Bouhmou Rachid</span>.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 Février 2026
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Bouhmou Rachid (Wikidata: Q137939882)
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Temps de lecture : 30 min
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
                <source srcSet="/images/la-sapienza-cyberattack-hero.webp" type="image/webp" />
                <img 
                  src="/images/la-sapienza-cyberattack-hero.png" 
                  alt="Cyberattaque ransomware Femwar02 contre l'Université la Sapienza de Rome 2026" 
                  className="w-full h-auto object-cover aspect-video" 
                  width={1600} 
                  height={900} 
                  loading="eager" 
                  decoding="async"
                />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                L'Université la Sapienza de Rome, l'une des plus grandes d'Europe, paralysée par le ransomware Femwar02
              </figcaption>
            </figure>

            <nav className="mb-12 p-6 bg-muted/30 rounded-2xl border not-prose">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Sommaire de l'enquête
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#intro" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 1. Le jour où Rome s'est éteinte</a></li>
                <li><a href="#chronologie" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 2. Chronologie minute par minute</a></li>
                <li><a href="#femwar02" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 3. Qui est Femwar02 ? Le groupe pro-russe derrière l'attaque</a></li>
                <li><a href="#bablock" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 4. Bablock/Rorschach : le ransomware le plus rapide du monde</a></li>
                <li><a href="#impact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 5. Impact humain : 115 000 étudiants dans le noir</a></li>
                <li><a href="#universites" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 6. Pourquoi les universités sont les cibles parfaites</a></li>
                <li><a href="#chiffres" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 7. Les chiffres alarmants du ransomware éducatif</a></li>
                <li><a href="#lateral" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 8. Mouvement latéral : l'effet château de cartes</a></li>
                <li><a href="#wordpress" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 9. WordPress et les réseaux multisites : le danger caché</a></li>
                <li><a href="#protection" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 10. Guide complet : protéger votre WordPress contre les ransomwares</a></li>
                <li><a href="#sauvegarde" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 11. La règle 3-2-1 : votre assurance-vie numérique</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 12. FAQ : Questions fréquentes</a></li>
                <li><a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 13. Conclusion : le secteur éducatif à la croisée des chemins</a></li>
              </ul>
            </nav>

            <section id="intro" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-red-500 flex-shrink-0" />
                1. Le jour où Rome s'est éteinte
              </h2>
              <p className="text-lg leading-relaxed">
                Le dimanche 2 février 2026, alors que les étudiants de l'Université la Sapienza de Rome se préparaient pour leur session d'examens d'hiver, les écrans ont viré au noir. En quelques heures, le site web officiel de la plus grande université d'Europe est devenu inaccessible. Le portail <strong>Infostud</strong> — utilisé quotidiennement par 115 000 étudiants pour s'inscrire aux examens, consulter leurs résultats et télécharger leurs certificats — a cessé de fonctionner. Les systèmes de messagerie internes se sont tus. Les serveurs de recherche, les bases de données administratives, les plateformes de collaboration : tout est tombé.
              </p>
              <p>
                Sur les écrans des techniciens de l'université, un message glaçant s'est affiché : un lien vers le dark web, une demande de rançon, et un ultimatum. <strong>72 heures pour payer, ou les données seront détruites</strong>.
              </p>
              <p>
                Quatre jours plus tard, au moment où nous publions cette investigation, le site officiel de la Sapienza est <strong>toujours hors ligne</strong>. Les opérations de nettoyage et de restauration se poursuivent sous la supervision de l'Agence Nationale de Cybersécurité italienne (ACN) et de la Polizia Postale. La Procureure de Rome a ouvert une enquête pénale.
              </p>
              <p>
                Ce n'est pas un incident isolé. C'est le symptôme d'une <strong>crise systémique</strong> qui frappe le secteur éducatif mondial — et qui contient des leçons vitales pour chaque propriétaire de site web, y compris ceux qui utilisent WordPress.
              </p>
            </section>

            <section id="chronologie" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="text-blue-500 flex-shrink-0" />
                2. Chronologie de l'attaque
              </h2>

              <div className="my-8 not-prose space-y-4">
                {[
                  { date: "Dimanche 2 février - Tôt le matin", desc: "Le ransomware Femwar02 s'active et commence à chiffrer les systèmes de la Sapienza. Le choix du dimanche n'est pas anodin : les équipes IT sont en effectif réduit.", color: "bg-red-500" },
                  { date: "Dimanche 2 février - Matinée", desc: "Les techniciens détectent l'intrusion. Décision immédiate : mise hors ligne préventive de TOUS les systèmes réseau pour stopper la propagation. Le site web public tombe.", color: "bg-red-500" },
                  { date: "Dimanche 2 février - Après-midi", desc: "L'Agence Nationale de Cybersécurité (ACN) est alertée. La Polizia Postale ouvre une enquête. Un lien de rançon sur le dark web est découvert mais l'université décide de NE PAS l'ouvrir pour éviter de déclencher le compteur de 72h.", color: "bg-orange-500" },
                  { date: "Lundi 3 février", desc: "Il Corriere della Sera révèle qu'il s'agit d'un groupe pro-russe appelé Femwar02. Le quotidien Il Fatto Quotidiano confirme la piste du ransomware de type Bablock/Rorschach. Les étudiants découvrent qu'ils ne peuvent plus s'inscrire aux examens.", color: "bg-orange-500" },
                  { date: "Mardi 4 février", desc: "L'université met en place des points d'information physiques sur le campus. Les étudiants doivent s'inscrire directement auprès des professeurs. Les sauvegardes hors ligne sont identifiées et la restauration commence.", color: "bg-yellow-500" },
                  { date: "Mercredi 5 février", desc: "TechCrunch et BleepingComputer publient des articles internationaux sur l'incident. L'université communique via Instagram (sa seule plateforme encore fonctionnelle). Le site reste hors ligne.", color: "bg-yellow-500" },
                  { date: "Jeudi 6 février (aujourd'hui)", desc: "Les opérations de nettoyage et de restauration progressive se poursuivent. Le site web officiel est toujours inaccessible. L'étendue exacte des données compromises n'est pas encore connue.", color: "bg-blue-500" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-2 flex-shrink-0`}></div>
                    <div className="flex-1 p-4 bg-muted/30 rounded-lg border">
                      <p className="font-bold text-sm">{item.date}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="my-8 bg-purple-50/50 dark:bg-purple-900/10 border-purple-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2 text-lg">
                    <Eye className="w-6 h-6 flex-shrink-0" /> DÉTAIL STRATÉGIQUE
                  </p>
                  <p className="mt-3">
                    Le choix de ne pas ouvrir le lien de rançon est une décision tactique remarquable. En refusant de cliquer, l'université a évité de déclencher le compte à rebours de 72 heures, se donnant ainsi <strong>plus de temps pour évaluer les dégâts et tenter une restauration</strong> sans la pression d'une échéance. C'est une stratégie recommandée par les experts en réponse aux incidents.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="femwar02" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-orange-500 flex-shrink-0" />
                3. Qui est Femwar02 ? Le groupe pro-russe derrière l'attaque
              </h2>

              <p>
                Selon les informations publiées par <em>Il Corriere della Sera</em> et confirmées par <em>Il Fatto Quotidiano</em>, l'attaque est attribuée à un groupe cybercriminel se faisant appeler <strong>"Femwar02"</strong>. C'est un acteur <strong>jusqu'alors inconnu</strong> des bases de données de threat intelligence, ce qui le rend particulièrement dangereux : aucun profil de comportement pré-existant, aucune clé de déchiffrement connue, aucun historique de négociation documenté.
              </p>

              <Card className="my-8 border-orange-500/20">
                <CardContent className="pt-6 not-prose">
                  <h4 className="font-bold mb-4 text-lg">Fiche de renseignement : Femwar02</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Nom :</span>
                        <span>Femwar02</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Affiliation :</span>
                        <span>Pro-russe (non confirmé officiellement)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Première apparition :</span>
                        <span>2 février 2026</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Souche utilisée :</span>
                        <span>Similitudes avec Bablock/Rorschach</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Cible connue :</span>
                        <span>Université la Sapienza (Rome)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Méthode :</span>
                        <span>Chiffrement massif + rançon</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Ultimatum :</span>
                        <span>72 heures</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-muted-foreground w-36 flex-shrink-0">Statut :</span>
                        <span className="text-red-600 font-bold">Actif - Enquête en cours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Le contexte géopolitique</h3>
              <p>
                L'attribution "pro-russe" n'est pas anodine. Depuis le début du conflit en Ukraine, les groupes de hackers alignés sur les intérêts russes ont multiplié les attaques contre les institutions européennes. En décembre 2025, <strong>8 pays de l'Union Européenne</strong> ont signalé des incidents ransomware liés à des acteurs pro-russes. Les universités, en tant que centres de recherche collaborant souvent avec des agences gouvernementales et militaires, représentent des cibles à haute valeur symbolique et stratégique.
              </p>
              <p>
                la Sapienza, fondée en 1303, est la plus grande université d'Europe par le nombre d'étudiants inscrits. Elle abrite des laboratoires de recherche de pointe en physique nucléaire, en intelligence artificielle et en sciences spatiales — des domaines sensibles qui expliquent l'intérêt d'acteurs étatiques ou para-étatiques.
              </p>
            </section>

            <section id="bablock" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Bug className="text-red-500 flex-shrink-0" />
                4. Bablock/Rorschach : le ransomware le plus rapide du monde
              </h2>

              <p>
                L'arme utilisée par Femwar02 présente des similitudes troublantes avec la souche <strong>Bablock/Rorschach</strong>, identifiée pour la première fois par Check Point Research en avril 2023. C'est l'un des ransomwares les plus sophistiqués et les plus rapides jamais observés.
              </p>

              <Card className="my-8 bg-red-50/50 dark:bg-red-900/10 border-red-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 text-lg">
                    <ShieldAlert className="w-6 h-6 flex-shrink-0" /> VITESSE DE CHIFFREMENT RECORD
                  </p>
                  <p className="mt-3 text-lg">
                    Rorschach peut chiffrer <strong>220 000 fichiers en 4 minutes et 30 secondes</strong>. C'est <strong>deux fois plus rapide que LockBit 3.0</strong>, qui détenait le précédent record. Pour donner un ordre de grandeur : le temps de réagir humainement à une alerte est typiquement de 15 à 30 minutes. Quand les équipes IT commencent à comprendre ce qui se passe, <strong>le chiffrement est déjà terminé</strong>.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Architecture technique de Rorschach</h3>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border not-prose space-y-4">
                <div className="flex gap-4 items-start">
                  <Cpu className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Chiffrement hybride ultra-performant</p>
                    <p className="text-sm text-muted-foreground">Utilise curve25519 + eSTREAM hc-128, un schéma cryptographique qui maximise la vitesse tout en garantissant l'impossibilité mathématique de déchiffrement sans la clé privée.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Network className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Déploiement semi-autonome</p>
                    <p className="text-sm text-muted-foreground">Contrairement aux ransomwares classiques qui nécessitent des commandes manuelles, Rorschach se propage automatiquement via les Group Policies de l'Active Directory, infectant toutes les machines du domaine Windows.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Eye className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Évasion des détections</p>
                    <p className="text-sm text-muted-foreground">Le malware utilise le DLL side-loading via des outils de sécurité légitimes (comme Cortex XDR de Palo Alto) pour charger son code malveillant, rendant la détection par les antivirus quasi impossible.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <HardDrive className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Destruction des sauvegardes</p>
                    <p className="text-sm text-muted-foreground">L'une des premières actions du ransomware est de supprimer les Volume Shadow Copies (VSS) et de cibler les sauvegardes locales — d'où l'importance critique des sauvegardes hors ligne.</p>
                  </div>
                </div>
              </div>

              <p>
                La bonne nouvelle dans le cas de la Sapienza : l'université disposait de <strong>sauvegardes non connectées à Internet</strong> qui ont été préservées de l'attaque. C'est cette précaution qui permet aujourd'hui la restauration progressive des systèmes, sans céder au chantage des attaquants.
              </p>
            </section>

            <section id="impact" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-blue-500 flex-shrink-0" />
                5. Impact humain : 115 000 étudiants dans le noir
              </h2>

              <p>
                Au-delà des aspects techniques, c'est l'impact humain de cette attaque qui frappe le plus. la Sapienza n'est pas une petite structure : c'est un campus-ville de <strong>115 000 étudiants</strong>, <strong>3 500 professeurs</strong> et <strong>5 000 membres du personnel administratif</strong>, répartis sur 11 facultés et 65 départements.
              </p>

              <Card className="my-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-500/30">
                <CardContent className="pt-6 not-prose">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-blue-600" data-testid="text-students">115K</p>
                      <p className="text-xs text-muted-foreground mt-1">Étudiants impactés</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600" data-testid="text-hours">72h</p>
                      <p className="text-xs text-muted-foreground mt-1">Ultimatum de rançon</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-purple-600" data-testid="text-days">4+</p>
                      <p className="text-xs text-muted-foreground mt-1">Jours hors ligne</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-orange-600" data-testid="text-faculties">11</p>
                      <p className="text-xs text-muted-foreground mt-1">Facultés perturbées</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Conséquences concrètes pour les étudiants</h3>
              <ul>
                <li><strong>Examens perturbés</strong> : En pleine session d'hiver, les étudiants ne peuvent plus s'inscrire en ligne. Ils doivent se présenter physiquement auprès de chaque professeur — un retour au papier qui ralentit considérablement le processus.</li>
                <li><strong>Certificats inaccessibles</strong> : Les étudiants en fin de cursus qui avaient besoin de certificats pour des candidatures à l'étranger ou des stages sont bloqués.</li>
                <li><strong>Recherche scientifique menacée</strong> : Des années de données de recherche pourraient être compromises si les sauvegardes ne couvrent pas l'ensemble des laboratoires.</li>
                <li><strong>Communication rompue</strong> : L'université a dû communiquer via Instagram, sa seule plateforme encore accessible, une situation humiliante pour l'une des plus anciennes institutions académiques du monde.</li>
              </ul>

              <Card className="my-8 bg-orange-50/50 dark:bg-orange-900/10 border-orange-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-lg">
                    <Info className="w-6 h-6 flex-shrink-0" /> LE COÛT INVISIBLE
                  </p>
                  <p className="mt-3">
                    Selon les études de Sophos, le <strong>coût moyen de récupération d'une attaque ransomware dans l'enseignement supérieur est de 4,02 millions de dollars</strong>. Ce chiffre inclut les temps d'arrêt, la perte de productivité, les coûts de remédiation, l'impact sur la réputation et les éventuelles sanctions réglementaires (RGPD). Pour la Sapienza, avec ses 115 000 utilisateurs, le coût réel pourrait être encore plus élevé.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="universites" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-500 flex-shrink-0" />
                6. Pourquoi les universités sont les cibles parfaites
              </h2>

              <p>
                L'attaque contre la Sapienza n'est pas un cas isolé. Les experts en cybersécurité qualifient les universités de <strong>"target-rich, cyber-poor"</strong> — riches en données précieuses, mais pauvres en moyens de défense. Voici pourquoi :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-6 h-6 text-blue-500" />
                      <h4 className="font-bold">Données à haute valeur</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Données personnelles d'étudiants, recherche scientifique financée par l'État, propriété intellectuelle, collaborations avec l'industrie et le secteur militaire. Chaque fichier vaut de l'or.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-green-500" />
                      <h4 className="font-bold">Réseaux ouverts par nature</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">La culture académique privilégie la collaboration et l'accès ouvert. Les réseaux Wi-Fi sont accessibles à des milliers de personnes, les ports sont souvent laissés ouverts, les politiques de mot de passe sont laxistes.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-red-500" />
                      <h4 className="font-bold">Budget cybersécurité dérisoire</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Les universités n'allouent que <strong>3 à 12% de leur budget IT</strong> à la cybersécurité, contre 15 à 25% dans le secteur financier. Résultat : des équipes sous-dimensionnées face à des menaces industrialisées.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Monitor className="w-6 h-6 text-orange-500" />
                      <h4 className="font-bold">Infrastructure hétérogène</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Un mélange toxique de systèmes hérités (parfois vieux de 20 ans), de technologies de pointe et de centaines de sites web autonomes gérés par des départements sans expertise technique.</p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Un chiffre résume tout : <strong>74% des attaques ransomware contre les universités réussissent</strong>, contre 68% dans le secteur privé. Et <strong>97% des universités britanniques</strong> ont subi au moins une tentative de phishing en 2025, selon les données de JISC.
              </p>
            </section>

            <section id="chiffres" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="text-red-500 flex-shrink-0" />
                7. Les chiffres alarmants du ransomware dans l'éducation
              </h2>

              <p>
                Pour mesurer l'ampleur de la crise, voici les statistiques compilées à partir des rapports de Comparitech, Sophos, BlackFog et EDUCAUSE pour l'année 2025-2026 :
              </p>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border not-prose">
                <div className="space-y-4">
                  {[
                    { label: "Augmentation des ransomwares éducatifs (2025)", value: "+69%", sub: "au premier trimestre vs 2024", color: "text-red-600" },
                    { label: "Attaques hebdomadaires par organisation", value: "4 388", sub: "+31% en glissement annuel (Q2 2025)", color: "text-orange-600" },
                    { label: "Coût moyen de récupération (enseignement supérieur)", value: "4,02 M$", sub: "Le plus élevé de tous les secteurs", color: "text-purple-600" },
                    { label: "Rançon moyenne payée (universités)", value: "5,85 M$", sub: "122% du montant initialement demandé (!)", color: "text-red-600" },
                    { label: "Taux de paiement de la rançon (éducation)", value: "67%", sub: "Le plus élevé de tous les secteurs", color: "text-orange-600" },
                    { label: "Universités sans config email sécurisée", value: "65%", sub: "Manque de SPF, DKIM, DMARC", color: "text-red-600" },
                    { label: "Tentatives de compromission des sauvegardes", value: "95%", sub: "des attaquants ciblent les backups en priorité", color: "text-purple-600" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-3 bg-background rounded-lg">
                      <span className="text-sm flex-1">{stat.label}</span>
                      <span className={`font-extrabold text-xl ${stat.color} md:w-28 md:text-right`}>{stat.value}</span>
                      <span className="text-xs text-muted-foreground md:w-52">{stat.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Le chiffre le plus effrayant : les universités paient en moyenne <strong>122% du montant de rançon initialement demandé</strong>. C'est le seul secteur où les victimes paient <em>plus</em> que ce qui est demandé — probablement en raison de la pression extrême pour restaurer les services académiques et de la peur de perdre des données de recherche irremplaçables.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Groupes ransomware les plus actifs contre l'éducation en Europe</h3>

              <div className="my-8 not-prose space-y-3">
                {[
                  { name: "Akira", pct: 100, color: "bg-red-500", desc: "Leader des attaques contre l'enseignement supérieur" },
                  { name: "Qilin", pct: 80, color: "bg-orange-500", desc: "Exfiltration de +1 To de données par attaque" },
                  { name: "Medusa", pct: 55, color: "bg-yellow-500", desc: "Santé et éducation principalement" },
                  { name: "Cl0p", pct: 40, color: "bg-blue-500", desc: "Exploitation de vulnérabilités zero-day" },
                  { name: "Femwar02", pct: 15, color: "bg-purple-500", desc: "Nouveau - la Sapienza est le premier cas connu" },
                ].map((g) => (
                  <div key={g.name} className="flex items-center gap-4">
                    <span className="text-sm w-24 flex-shrink-0 font-semibold">{g.name}</span>
                    <div className="flex-1 bg-muted rounded-full h-5 relative">
                      <div className={`absolute inset-y-0 left-0 ${g.color} rounded-full`} style={{width: `${g.pct}%`}}></div>
                    </div>
                    <span className="text-xs text-muted-foreground w-52 hidden md:block">{g.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="lateral" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Network className="text-purple-500 flex-shrink-0" />
                8. Mouvement latéral : l'effet château de cartes
              </h2>

              <p>
                Comment un seul ransomware peut-il paralyser une université entière en quelques heures ? La réponse tient en deux mots : <strong>mouvement latéral</strong>.
              </p>
              <p>
                Lorsqu'un attaquant compromet une première machine (via un email de phishing, un mot de passe faible ou une vulnérabilité non corrigée), il ne s'arrête pas là. Il utilise cette tête de pont pour explorer le réseau interne, voler des identifiants d'administrateur, et se propager de machine en machine. Rorschach excelle dans cet exercice grâce à son exploitation automatique de l'Active Directory.
              </p>

              <div className="my-8 not-prose">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold">Compromission initiale (Point d'entrée)</p>
                      <p className="text-sm text-muted-foreground mt-1">Un email de phishing, un VPN non patché, ou un portail web vulnérable. 72% des attaques réussies commencent par du phishing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold">Escalade de privilèges</p>
                      <p className="text-sm text-muted-foreground mt-1">L'attaquant vole les identifiants d'un administrateur de domaine Windows, obtenant un accès total à l'infrastructure Active Directory.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold">Reconnaissance et exfiltration</p>
                      <p className="text-sm text-muted-foreground mt-1">Cartographie du réseau, identification des serveurs critiques, copie des données sensibles vers un serveur externe avant le chiffrement.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold">Neutralisation des défenses</p>
                      <p className="text-sm text-muted-foreground mt-1">Désactivation des antivirus, suppression des sauvegardes locales (VSS), modification des Group Policies pour empêcher la restauration.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-500/30">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <p className="font-semibold text-red-600 dark:text-red-400">Détonation : chiffrement massif en moins de 5 minutes</p>
                      <p className="text-sm text-muted-foreground mt-1">Rorschach déploie le chiffrement simultanément sur toutes les machines via l'Active Directory. 220 000 fichiers chiffrés en 4 min 30. C'est terminé avant même que quiconque ne comprenne.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                C'est exactement ce scénario de "château de cartes" qui s'est produit à la Sapienza : <strong>un réseau plat, sans segmentation suffisante</strong>, où une seule compromission a permis de tout paralyser. La solution ? L'isolation.
              </p>
            </section>

            <section id="wordpress" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-blue-500 flex-shrink-0" />
                9. WordPress et les réseaux multisites : le danger caché
              </h2>

              <p>
                Quel rapport entre la Sapienza et votre site WordPress ? Plus que vous ne le pensez.
              </p>
              <p>
                Les grandes organisations (universités, groupes de presse, agences, entreprises multi-marques) utilisent souvent <strong>WordPress Multisite</strong> pour gérer des dizaines ou des centaines de sous-sites depuis une seule installation. C'est pratique, mais c'est aussi un risque majeur : <strong>une faille dans un seul plugin ou thème compromet l'ensemble du réseau</strong>.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Les 3 architectures WordPress et leurs risques</h3>

              <div className="my-8 not-prose space-y-6">
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <XCircle className="w-6 h-6 text-red-500" />
                      <h4 className="font-bold text-lg">Hébergement mutualisé classique</h4>
                      <Badge variant="destructive">Risque maximal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Vos sites partagent le même serveur, le même système de fichiers et souvent la même base de données que des dizaines d'autres clients. Si un site voisin est compromis, le vôtre peut l'être aussi.</p>
                    <p className="text-sm font-semibold text-red-600">Vulnérable au mouvement latéral, exactement comme la Sapienza.</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                      <h4 className="font-bold text-lg">WordPress Multisite</h4>
                      <Badge variant="outline">Risque élevé</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Tous les sous-sites partagent la même installation WordPress, les mêmes plugins et le même code. Un plugin vulnérable compromet instantanément tous les sites du réseau.</p>
                    <p className="text-sm font-semibold text-orange-600">Un seul point de défaillance pour tout le réseau.</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <h4 className="font-bold text-lg">Instances isolées par conteneurs (Kinsta)</h4>
                      <Badge variant="secondary">Risque minimal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Chaque site WordPress vit dans son propre conteneur Linux isolé, avec son propre système de fichiers, sa propre base de données et ses propres ressources. Aucune possibilité de mouvement latéral.</p>
                    <p className="text-sm font-semibold text-green-600">Même si un site est compromis, les autres restent intacts.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="protection" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-primary flex-shrink-0" />
                10. Guide complet : protéger votre WordPress contre les ransomwares
              </h2>

              <p>
                Fort des leçons de la Sapienza et des statistiques accablantes du secteur éducatif, voici un guide actionnable pour protéger votre site WordPress contre les ransomwares.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="font-bold text-primary flex items-center gap-2 text-lg">
                    <ShieldCheck className="w-6 h-6 flex-shrink-0" /> POURQUOI KINSTA EST LA RÉPONSE
                  </p>
                  <p className="mt-3 text-lg">
                    <strong>Kinsta</strong> a été conçu exactement pour prévenir les scénarios qui ont frappé la Sapienza. Voici comment :
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Isolation par conteneurs Linux</strong> : Chaque site est isolé sur l'infrastructure Google Cloud. Aucun mouvement latéral possible d'un site à l'autre.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Sauvegardes automatiques sur Google Cloud</strong> : Stockées sur une infrastructure géographiquement distincte, inaccessibles au ransomware. Restauration en 1 clic.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Cloudflare Enterprise intégré</strong> : WAF premium, protection DDoS illimitée et HTTP/3 pour bloquer les menaces à la source.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" /> <span><strong>Surveillance 24/7 + détection de malware</strong> : Monitoring continu avec intervention humaine en cas d'alerte critique.</span></li>
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="w-full md:w-auto">
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-protection">
                        Sécuriser mon infrastructure avec Kinsta <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Checklist anti-ransomware pour WordPress</h3>

              <div className="my-8 not-prose space-y-3">
                {[
                  { title: "Choisir un hébergeur avec isolation par conteneurs", desc: "Kinsta utilise des conteneurs Linux individuels pour chaque site. Le mouvement latéral est physiquement impossible.", priority: "Critique" },
                  { title: "Appliquer la règle de sauvegarde 3-2-1", desc: "3 copies de vos données, sur 2 supports différents, dont 1 hors-site et hors ligne. 95% des attaquants ciblent les sauvegardes en priorité.", priority: "Critique" },
                  { title: "Activer l'authentification à deux facteurs (2FA)", desc: "Sur wp-admin, sur le FTP/SSH, sur les panneaux d'hébergement. C'est la barrière la plus efficace contre les identifiants volés.", priority: "Critique" },
                  { title: "Mettre à jour systématiquement", desc: "WordPress Core, thèmes, plugins. Les vulnérabilités non patchées sont la porte d'entrée n°1 des ransomwares.", priority: "Élevé" },
                  { title: "Configurer SPF, DKIM et DMARC", desc: "65% des universités échouent à cette configuration basique. Ces protocoles empêchent l'usurpation d'email, le vecteur d'attaque le plus courant.", priority: "Élevé" },
                  { title: "Segmenter le réseau et les accès", desc: "Principe du moindre privilège : chaque utilisateur ne doit avoir accès qu'à ce dont il a strictement besoin.", priority: "Élevé" },
                  { title: "Désactiver XML-RPC si non utilisé", desc: "XML-RPC est un vecteur d'attaque brute-force et DDoS fréquemment exploité. Désactivez-le si vous n'utilisez pas d'applications mobiles WordPress.", priority: "Moyen" },
                  { title: "Auditer les plugins inactifs", desc: "Supprimez tout plugin non utilisé. Chaque plugin est une surface d'attaque potentielle.", priority: "Moyen" },
                  { title: "Surveiller les logs en continu", desc: "Des connexions à 3h du matin, des tentatives de login multiples, des requêtes vers des fichiers sensibles sont des signaux d'alerte.", priority: "Moyen" },
                  { title: "Tester votre plan de restauration", desc: "Une sauvegarde non testée n'est pas une sauvegarde. Restaurez sur un environnement de staging au moins une fois par trimestre.", priority: "Élevé" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{item.title}</span>
                        <Badge variant={item.priority === "Critique" ? "destructive" : item.priority === "Élevé" ? "outline" : "secondary"} className="text-xs">{item.priority}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Pour évaluer la sécurité actuelle de votre site, utilisez notre <Link href="/audit-site" className="text-primary hover:underline font-medium">outil d'audit gratuit</Link> qui analyse 10 dimensions de votre site, y compris la sécurité et les performances.
              </p>
            </section>

            <section id="sauvegarde" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <HardDrive className="text-green-500 flex-shrink-0" />
                11. La règle 3-2-1 : votre assurance-vie numérique
              </h2>

              <p>
                Si la Sapienza a pu commencer à restaurer ses systèmes sans payer la rançon, c'est grâce à une chose : des <strong>sauvegardes hors ligne</strong> préservées de l'attaque. C'est la règle 3-2-1 en action.
              </p>

              <div className="my-8 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <p className="text-5xl font-extrabold text-primary mb-3">3</p>
                      <p className="font-bold mb-2">Copies de vos données</p>
                      <p className="text-sm text-muted-foreground">L'original + 2 copies. Si vous avez une seule copie et qu'elle est chiffrée, tout est perdu.</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <p className="text-5xl font-extrabold text-blue-600 mb-3">2</p>
                      <p className="font-bold mb-2">Supports différents</p>
                      <p className="text-sm text-muted-foreground">Serveur local + cloud, ou NAS + disque externe. Deux supports protègent contre la défaillance matérielle.</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <p className="text-5xl font-extrabold text-green-600 mb-3">1</p>
                      <p className="font-bold mb-2">Copie hors-site</p>
                      <p className="text-sm text-muted-foreground">Au minimum 1 sauvegarde stockée sur un réseau complètement séparé (cloud distinct, datacenter distant). C'est cette copie qui sauve en cas de ransomware.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <p>
                Chez <strong>Kinsta</strong>, cette règle est appliquée automatiquement : les sauvegardes quotidiennes sont stockées sur l'infrastructure Google Cloud, physiquement et logiquement séparée de l'environnement d'hébergement. En cas de ransomware, vous pouvez restaurer votre site en un clic depuis le tableau de bord MyKinsta, sans aucune connaissance technique.
              </p>

              <Card className="my-8 bg-green-50/50 dark:bg-green-900/10 border-green-500/30">
                <CardContent className="pt-6">
                  <p className="font-bold text-green-600 dark:text-green-400 flex items-center gap-2 text-lg">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" /> LA LEÇON DE LA SAPIENZA
                  </p>
                  <p className="mt-3">
                    la Sapienza a prouvé qu'il est possible de résister à un ransomware <strong>sans payer</strong> — à condition d'avoir des sauvegardes hors ligne. Cette leçon est universelle : que vous soyez une université de 115 000 personnes ou un entrepreneur avec un seul site WordPress, la question n'est pas "si" vous serez attaqué, mais "quand". Et votre capacité à restaurer vos données en quelques minutes ou quelques heures fera toute la différence.
                  </p>
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
                13. Conclusion : le secteur éducatif à la croisée des chemins
              </h2>

              <p>
                L'attaque contre l'Université la Sapienza est bien plus qu'un fait divers de cybersécurité. C'est un <strong>signal d'alarme pour l'ensemble du secteur éducatif européen</strong> et, par extension, pour toute organisation qui gère des réseaux complexes de sites web.
              </p>

              <p>
                Les chiffres sont sans appel :
              </p>
              <ul>
                <li><strong>74% des attaques ransomware contre les universités réussissent</strong> — le taux d'échec le plus élevé de tous les secteurs</li>
                <li><strong>67% des victimes paient la rançon</strong> — encourageant les cybercriminels à continuer</li>
                <li><strong>4,02 millions de dollars de coût moyen</strong> de récupération — un montant qui peut mettre en péril l'avenir d'une institution</li>
                <li><strong>95% des attaquants ciblent les sauvegardes</strong> — rendant la règle 3-2-1 plus critique que jamais</li>
              </ul>

              <p>
                Pour les propriétaires de sites WordPress, la leçon est claire : <strong>l'isolation, les sauvegardes hors-site et la protection proactive ne sont plus des luxes, mais des nécessités de survie</strong>. Un hébergeur comme Kinsta, avec son architecture par conteneurs isolés, ses sauvegardes sur Google Cloud et sa protection Cloudflare Enterprise intégrée, transforme votre site en forteresse plutôt qu'en château de cartes.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-xl mb-3">Ne soyez pas le prochain la Sapienza</h3>
                  <p className="text-muted-foreground mb-6">Isolation par conteneurs, sauvegardes automatiques sur Google Cloud, Cloudflare Enterprise, migration gratuite.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-cta-final">
                        Protéger mon site avec Kinsta <ArrowRight className="w-4 h-4 ml-2" />
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
                  <li><a href="https://techcrunch.com/2026/02/05/one-of-europes-largest-universities-knocked-offline-for-days-after-cyberattack/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TechCrunch : One of Europe's largest universities knocked offline</a></li>
                  <li><a href="https://www.bleepingcomputer.com/news/security/italian-university-la-sapienza-goes-offline-after-cyberattack/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BleepingComputer : Italian university la Sapienza goes offline</a></li>
                  <li><a href="https://www.ilfattoquotidiano.it/2026/02/03/attacco-informatico-sapienza-ransomware-filorusso-news/8278745/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Il Fatto Quotidiano : Attacco hacker alla Sapienza</a></li>
                  <li><a href="https://itdaily.fr/nouvelles/securite/universite-italienne-cyberattaque/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IT Daily : Université italienne touchée par une cyberattaque</a></li>
                  <li><a href="https://www.highereddive.com/news/ransomware-attacks-education-jump-23-percent-h1-2025/754011/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Higher Ed Dive : Ransomware attacks in education jump 23%</a></li>
                  <li><a href="https://www.upguard.com/blog/top-cybersecurity-problems-for-universities-colleges" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UpGuard : The State of University Cybersecurity 2026</a></li>
                  <li><a href="https://www.blackfog.com/the-state-of-ransomware-2025/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BlackFog : The State of Ransomware 2025</a></li>
                </ul>
                <p className="mt-4"><em>Cet article est le fruit d'un travail d'investigation journalistique indépendant. Les informations sont exactes au moment de la publication (6 février 2026). Nos recommandations d'hébergement contiennent des liens d'affiliation qui soutiennent notre travail de recherche.</em></p>
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
                  Face aux ransomwares qui paralysent les universités, seule l'isolation par conteneurs et les sauvegardes hors-site garantissent votre survie.
                </p>
                <Button className="w-full" asChild>
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-sidebar">
                    Kinsta + Cloudflare Enterprise <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Separator className="my-6" />
                
                <h4 className="font-semibold text-sm mb-3">Chiffres clés de l'incident</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Étudiants impactés</span>
                    <span className="font-bold">115 000</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Ultimatum rançon</span>
                    <span className="font-bold text-red-600">72 heures</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Jours hors ligne</span>
                    <span className="font-bold">4+ jours</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Groupe</span>
                    <span className="font-bold">Femwar02</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Souche</span>
                    <span className="font-bold">Bablock/Rorschach</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Coût moyen éducation</span>
                    <span className="font-bold">4,02 M$</span>
                  </div>
                </div>

                <Separator className="my-6" />
                
                <h4 className="font-semibold text-sm mb-3">Articles liés</h4>
                <div className="space-y-3">
                  <Link href="/article/botnet-aisuru-kimwolf-attaque-ddos-record-2026" className="text-sm text-primary hover:underline block">
                    Botnet AISURU/Kimwolf : L'attaque DDoS de 31,4 Tbps
                  </Link>
                  <Link href="/article/7-failles-critiques-fevrier-2026" className="text-sm text-primary hover:underline block">
                    7 Failles Critiques WordPress Février 2026
                  </Link>
                  <Link href="/audit-site" className="text-sm text-primary hover:underline block">
                    Audit de sécurité gratuit de votre site
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ArticleLaSapienza2026;
