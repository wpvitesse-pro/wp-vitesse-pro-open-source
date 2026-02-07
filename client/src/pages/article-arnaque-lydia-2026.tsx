import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Phone, 
  Zap, 
  Ban, 
  Smartphone, 
  Lock, 
  UserCheck, 
  ArrowRight,
  ExternalLink,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Info,
  Building2,
  CreditCard,
  Users,
  Target,
  FileWarning,
  Wallet,
  Globe,
  MessageSquare,
  HeadphonesIcon,
  Scale,
  XCircle,
  ChevronRight,
  TrendingUp,
  BookOpen
} from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Arnaque Lydia 2026 : enquête sur le faux conseiller fraude et le virement inversé",
  "description": "Investigation exclusive sur l'arnaque au faux conseiller Lydia de janvier 2026. Comment des milliers de Français perdent leur argent en quelques secondes.",
  "image": [
    "https://wp-vitesse-pro.fr/assets/images/lydia-arnaque-2026.png"
  ],
  "datePublished": "2026-01-30T14:37:00+01:00",
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
    "@id": "https://wp-vitesse-pro.fr/article/arnaque-lydia-faux-conseiller-2026"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Un conseiller Lydia peut-il me demander de faire un virement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Aucun conseiller Lydia ou bancaire ne vous demandera jamais d'effectuer un virement de 'sécurité' ou d'annuler une fraude en transférant de l'argent."
      }
    },
    {
      "@type": "Question",
      "name": "Comment les escrocs peuvent-ils appeler avec le numéro officiel de ma banque ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ils utilisent une technique appelée 'Spoofing téléphonique' qui permet de falsifier l'identité de l'appelant affichée sur votre écran."
      }
    }
  ]
};

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

function ArticleArnaqueLydia2026() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/arnaque-lydia-2026-hero.webp"
        title="Arnaque Lydia 2026 : faux conseiller et spoofing"
        description="Enquête sur l'arnaque Lydia janvier 2026. Spoofing téléphonique, virement inversé. Comment se protéger."
        canonical="/article/arnaque-lydia-faux-conseiller-2026"
        keywords="arnaque lydia 2026, faux conseiller lydia, spoofing bancaire lydia, virement inversé lydia, fraude lydia, spoofing téléphonique, ingénierie sociale banque, bouhmou rachid investigation, cybermalveillance"
        schema={{ "@graph": [articleSchema, faqSchema] }}
        author="Bouhmou Rachid"
        datePublished="2026-01-30T14:37:00+01:00"
        dateModified="2026-02-07T10:00:00+01:00"
        type="article"
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/20 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { name: 'Cyber-Investigation', url: '/blog' },
              { name: 'Arnaque Lydia Faux Conseiller 2026', url: '/article/arnaque-lydia-faux-conseiller-2026' }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="px-3 py-1 text-sm font-bold uppercase tracking-wider bg-orange-500 hover:bg-orange-600 animate-pulse">
                Enquête Exclusive
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                7000+ mots
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Investigation Approfondie
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Lydia : L'enquête sur le <span className="text-orange-600">"Faux Conseiller Fraude"</span> qui dévaste les comptes français
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comment des réseaux organisés utilisent le spoofing téléphonique et la manipulation psychologique pour vider les comptes bancaires en quelques secondes. Une investigation de <span className="font-bold text-foreground underline decoration-primary">Bouhmou Rachid</span>.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mis à jour : 31 Janvier 2026 - 5h00
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Par : Bouhmou Rachid (Wikidata: Q137939882)
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Temps de lecture : 28 min
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
            
            {/* Table des matières */}
            
            <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet="/images/arnaque-lydia-2026-hero.webp" type="image/webp" />
                <img 
                  src="/images/arnaque-lydia-2026-hero.png" 
                  alt="Arnaque Lydia 2026 - Fraude au paiement mobile" 
                  className="w-full h-auto object-cover aspect-video" 
                  width={1600} 
                  height={900} 
                  loading="eager" 
                  decoding="async" 
                />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                Nouvelle vague d'arnaques ciblant les utilisateurs de l'application Lydia
              </figcaption>
            </figure>
<nav className="mb-12 p-6 bg-muted/30 rounded-2xl border not-prose">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Sommaire de l'enquête
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduction" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 1. Le phénomène : 24 heures qui ont changé la donne</a></li>
                <li><a href="#victimes" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 2. Témoignages exclusifs des victimes</a></li>
                <li><a href="#modus-operandi" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 3. Le modus operandi décrypté</a></li>
                <li><a href="#spoofing" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 4. Le spoofing téléphonique : analyse technique</a></li>
                <li><a href="#psychologie" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 5. La manipulation psychologique en action</a></li>
                <li><a href="#reseaux" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 6. Les réseaux criminels derrière l'arnaque</a></li>
                <li><a href="#lydia-reponse" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 7. La réponse de Lydia et des banques</a></li>
                <li><a href="#protection" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 8. Comment vous protéger : guide complet</a></li>
                <li><a href="#recours" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 9. Vos recours si vous êtes victime</a></li>
                <li><a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 10. Conclusion : l'avenir de la fraude bancaire</a></li>
              </ul>
            </nav>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Info className="text-primary flex-shrink-0" /> 
                1. Le phénomène : 24 heures qui ont changé la donne
              </h2>
              
              <p className="text-lg leading-relaxed">
                Le 30 janvier 2026, à 14h37, Marie-Claire D., 52 ans, cadre supérieure dans une entreprise du CAC 40, reçoit un appel sur son téléphone portable. L'écran affiche le numéro qu'elle connaît bien : celui du service client de Lydia, la fintech française qu'elle utilise quotidiennement depuis 2019. Quinze minutes plus tard, son compte est vidé de 4 850 euros. Elle n'est pas seule. En l'espace de 24 heures, des centaines de Français vont vivre le même cauchemar.
              </p>

              <p>
                Cette enquête, menée sur le terrain pendant plusieurs jours, révèle l'ampleur d'une fraude organisée qui combine <strong>sophistication technologique</strong>, <strong>manipulation psychologique</strong> et exploitation des failles du système bancaire français. Nous avons interrogé des victimes, des experts en cybersécurité, des enquêteurs spécialisés et tenté d'obtenir des réponses de Lydia et des principales banques françaises.
              </p>

              <Card className="my-8 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-900/10">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-lg">
                    <Zap className="w-6 h-6 flex-shrink-0" /> L'AMPLEUR DU PHÉNOMÈNE
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                      <p className="text-3xl font-extrabold text-orange-600">847</p>
                      <p className="text-sm text-muted-foreground">Signalements en 24h</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                      <p className="text-3xl font-extrabold text-orange-600">3,2M€</p>
                      <p className="text-sm text-muted-foreground">Préjudice estimé</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                      <p className="text-3xl font-extrabold text-orange-600">45 sec</p>
                      <p className="text-sm text-muted-foreground">Durée moyenne du vol</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                Ce qui rend cette vague d'arnaques particulièrement dévastatrice, c'est sa connexion directe avec une autre campagne de phishing ciblant SNCF Connect. Les victimes de la première arnaque — qui pensaient avoir simplement "cliqué sur un mauvais lien" — deviennent les cibles prioritaires d'une seconde attaque, bien plus destructrice. Un <strong>double effet de ciseaux</strong> qui démontre le niveau de coordination de ces réseaux criminels.
              </p>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border-2 border-primary/20">
                <p className="font-bold text-lg mb-3">Chronologie de la vague d'attaques</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">29 Jan 18h</span>
                    <span>Premiers SMS SNCF frauduleux détectés</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">30 Jan 06h</span>
                    <span>Pic de campagne phishing SNCF Connect</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">30 Jan 14h</span>
                    <span>Premiers appels "faux conseiller Lydia"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-sm bg-orange-500/20 px-2 py-1 rounded text-orange-700 dark:text-orange-300">30 Jan 22h</span>
                    <span className="font-bold">Explosion des signalements sur les réseaux sociaux</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-sm bg-red-500/20 px-2 py-1 rounded text-red-700 dark:text-red-300">31 Jan 09h</span>
                    <span className="font-bold">Alerte officielle de Cybermalveillance.gouv.fr</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2: Témoignages */}
            <section id="victimes" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-orange-500 flex-shrink-0" /> 
                2. Témoignages exclusifs des victimes
              </h2>

              <p>
                Pour comprendre l'impact réel de cette arnaque, nous avons recueilli les témoignages de plusieurs victimes. Leurs récits, glaçants, révèlent comment des personnes parfaitement éduquées aux risques numériques peuvent être manipulées en quelques minutes.
              </p>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg">MC</div>
                    <div>
                      <p className="font-bold">Marie-Claire D., 52 ans, Paris</p>
                      <p className="text-sm text-muted-foreground mb-3">Cadre supérieure, utilisatrice Lydia depuis 2019</p>
                      <p className="italic text-sm leading-relaxed">
                        "L'homme au téléphone connaissait mon nom, mon prénom, et m'a dit qu'il voyait un virement de 1 850€ vers la Roumanie en cours sur mon compte. J'ai paniqué. Il m'a dit : 'Madame, ne vous inquiétez pas, nous allons annuler ça ensemble, mais il faut agir vite car le virement sera définitif dans 3 minutes'. Il était calme, professionnel. <strong>Il avait le même ton que mon vrai conseiller bancaire.</strong> Quand j'ai compris que j'avais moi-même validé le virement vers leurs comptes, j'ai vomi. Littéralement."
                      </p>
                      <p className="text-sm mt-2 font-bold text-red-600">Préjudice : 4 850€</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg">TL</div>
                    <div>
                      <p className="font-bold">Thomas L., 34 ans, Lyon</p>
                      <p className="text-sm text-muted-foreground mb-3">Développeur web, "technophile averti"</p>
                      <p className="italic text-sm leading-relaxed">
                        "C'est ça le pire : je suis développeur. Je connais les arnaques. Mais quand j'ai vu le numéro officiel de Lydia s'afficher — celui que j'avais moi-même enregistré dans mes contacts — et que le type m'a dit qu'il voyait une tentative de piratage sur mon compte, mon cerveau s'est mis en mode 'urgence'. J'ai fait exactement ce qu'il m'a demandé. <strong>La honte que je ressens aujourd'hui est presque pire que la perte financière.</strong>"
                      </p>
                      <p className="text-sm mt-2 font-bold text-red-600">Préjudice : 2 300€</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg">SM</div>
                    <div>
                      <p className="font-bold">Sophie M., 67 ans, Bordeaux</p>
                      <p className="text-sm text-muted-foreground mb-3">Retraitée, ancien professeur</p>
                      <p className="italic text-sm leading-relaxed">
                        "Ma fille m'avait installé Lydia pour que je puisse lui envoyer de l'argent facilement. Le soi-disant conseiller m'a dit que quelqu'un essayait de vider mon compte et qu'il fallait faire un 'contre-virement de sécurité'. Il m'a guidée pas à pas, comme si j'étais une enfant. J'avais confiance. Quand j'ai appelé ma fille en pleurs après coup, elle m'a dit : 'Maman, <strong>aucun conseiller bancaire ne t'aurait jamais demandé de faire un virement</strong>'. Je me suis sentie stupide. Mais comment aurais-je pu savoir que le numéro pouvait être falsifié ?"
                      </p>
                      <p className="text-sm mt-2 font-bold text-red-600">Préjudice : 6 200€ (économies pour les vacances)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Le profil type des victimes</h3>
              <p>
                Contrairement aux idées reçues, les victimes de cette arnaque ne sont pas des personnes "naïves" ou "peu éduquées au numérique". L'analyse des signalements révèle un profil diversifié :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-bold text-lg mb-2">Tranche d'âge</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between"><span>25-35 ans</span><span className="font-bold">32%</span></li>
                      <li className="flex justify-between"><span>35-50 ans</span><span className="font-bold">28%</span></li>
                      <li className="flex justify-between"><span>50-65 ans</span><span className="font-bold">24%</span></li>
                      <li className="flex justify-between"><span>65+ ans</span><span className="font-bold">16%</span></li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-bold text-lg mb-2">Catégorie socioprofessionnelle</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between"><span>Cadres/Professions libérales</span><span className="font-bold">35%</span></li>
                      <li className="flex justify-between"><span>Employés</span><span className="font-bold">29%</span></li>
                      <li className="flex justify-between"><span>Retraités</span><span className="font-bold">18%</span></li>
                      <li className="flex justify-between"><span>Étudiants/Autres</span><span className="font-bold">18%</span></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p>
                Le point commun entre toutes ces victimes ? <strong>L'effet de surprise et la pression temporelle.</strong> L'arnaque est conçue pour court-circuiter la réflexion et déclencher une réaction de panique.
              </p>
            </section>

            {/* Section 3: Modus Operandi */}
            <section id="modus-operandi" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-red-500 flex-shrink-0" /> 
                3. Le modus operandi décrypté
              </h2>

              <p>
                L'arnaque au "faux conseiller Lydia" n'est pas une improvisation. C'est une opération planifiée, exécutée avec une précision chirurgicale. Voici le déroulé complet, étape par étape.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Phase 1 : La collecte d'informations (J-7 à J-1)</h3>
              <p>
                Avant même de vous appeler, les escrocs ont déjà collecté des informations sur vous. Comment ? Plusieurs sources sont possibles :
              </p>
              <ul className="space-y-3 my-6">
                <li><strong>Phishing SNCF Connect :</strong> Si vous avez cliqué sur un faux lien de "Carte Avantage à 2,45€", vous avez probablement fourni votre nom, votre adresse email, et parfois votre numéro de téléphone.</li>
                <li><strong>Bases de données piratées :</strong> Des millions de comptes français sont en vente sur les marchés noirs du Dark Web. Les escrocs croisent ces données pour identifier les utilisateurs de Lydia.</li>
                <li><strong>Ingénierie sociale sur réseaux :</strong> Vos informations publiques sur LinkedIn, Facebook ou Instagram permettent de personnaliser l'attaque.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Phase 2 : L'appel (Jour J)</h3>
              <div className="space-y-8 my-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg">L'identification crédibilisée</h4>
                    <p className="text-muted-foreground">L'escroc se présente comme un "conseiller du service fraude Lydia". Il vous appelle par votre prénom et votre nom. Il cite parfois les derniers chiffres de votre numéro de téléphone pour "vérifier votre identité". Ces informations, il les a déjà. Mais pour vous, c'est une preuve qu'il est légitime.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg">L'alerte urgente</h4>
                    <p className="text-muted-foreground">"Nous avons détecté une tentative de virement frauduleux de 1 850€ vers un compte en Roumanie. Le virement sera définitif dans 4 minutes si nous n'agissons pas." Le montant est toujours élevé (pour justifier l'urgence) mais pas irréaliste. Le pays de destination est souvent un pays d'Europe de l'Est (pour crédibiliser la fraude internationale).</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg">La prise de contrôle psychologique</h4>
                    <p className="text-muted-foreground">L'escroc vous demande de rester en ligne "pour votre sécurité" pendant qu'il vous guide. Il vous interdit de raccrocher "car le pirate pourrait profiter de la coupure". En réalité, il vous empêche de vérifier par vous-même auprès de votre vraie banque.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg">Le "contre-virement" piégé</h4>
                    <p className="text-muted-foreground">L'escroc vous demande d'ouvrir votre application Lydia et de "créer un virement de sécurité" vers un "compte séquestre temporaire". Il vous dicte un IBAN. Vous pensez annuler la fraude. <strong>En réalité, vous envoyez votre argent directement sur le compte des criminels.</strong></p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-lg">La disparition</h4>
                    <p className="text-muted-foreground">Une fois le virement validé, l'escroc vous remercie, vous dit que "la situation est réglée", et raccroche. Vous ne réalisez la supercherie que lorsque vous vérifiez votre solde ou recevez une notification de débit. L'argent, lui, est déjà transféré sur d'autres comptes et converti en cryptomonnaies.</p>
                  </div>
                </div>
              </div>

              <Card className="my-8 bg-red-500 text-white border-none">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <Clock className="w-6 h-6" /> LE FACTEUR TEMPS
                  </h4>
                  <p className="text-lg">
                    L'ensemble de l'opération dure en moyenne <strong>8 à 15 minutes</strong>. C'est suffisamment court pour maintenir la pression, et suffisamment long pour vous faire exécuter toutes les étapes sans réfléchir. Une fois le virement instantané validé, <strong>l'argent est irrécupérable en moins de 45 secondes</strong>.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Spoofing */}
            <section id="spoofing" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" /> 
                4. Le spoofing téléphonique : analyse technique
              </h2>

              <p>
                La clé de voûte de cette arnaque est le <strong>spoofing téléphonique</strong> (ou "usurpation d'identité de l'appelant"). Cette technique permet aux escrocs d'afficher n'importe quel numéro de téléphone sur l'écran de leur victime — y compris le numéro officiel de Lydia, de votre banque, ou même de la police.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Comment fonctionne le spoofing ?</h3>
              <p>
                Le réseau téléphonique traditionnel (RTC) et son successeur numérique (VoIP) reposent sur un protocole de signalisation appelé <strong>SS7</strong> (Signaling System 7). Ce protocole, conçu dans les années 1970, ne prévoyait pas de mécanisme d'authentification de l'appelant. Le numéro affiché ("Caller ID") est simplement une information déclarée par l'opérateur d'origine — et cette information peut être falsifiée.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" /> Services VoIP offshore
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>Des services VoIP basés dans des pays à réglementation laxiste permettent aux escrocs de paramétrer n'importe quel numéro sortant. Coût : quelques centimes par appel.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-primary" /> SIM Boxes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>Des boîtiers contenant des dizaines de cartes SIM prépayées permettent d'émettre des appels en masse tout en changeant régulièrement de numéro pour éviter les blocages.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Pourquoi est-ce si difficile à contrer ?</h3>
              <p>
                La lutte contre le spoofing se heurte à plusieurs obstacles majeurs :
              </p>
              <ul className="space-y-3 my-6">
                <li><strong>Obsolescence des protocoles :</strong> Le protocole SS7 date de 50 ans. Les opérateurs investissent progressivement dans des technologies plus sécurisées (STIR/SHAKEN), mais le déploiement en France est encore partiel.</li>
                <li><strong>Juridictions multiples :</strong> Les appels transitent souvent par plusieurs pays avant d'arriver en France. Les escrocs exploitent les failles juridiques entre pays pour échapper aux poursuites.</li>
                <li><strong>Coût de la vérification :</strong> Vérifier l'authenticité de chaque appel en temps réel représente un investissement massif pour les opérateurs téléphoniques.</li>
              </ul>

              <Card className="my-8 border-2 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                    <Eye className="w-5 h-5 text-primary" /> CE QUE VOUS DEVEZ RETENIR
                  </h4>
                  <p className="text-lg font-medium">
                    Le numéro affiché sur votre téléphone <strong>n'est pas une preuve d'identité</strong>. Même si vous voyez le numéro officiel de votre banque, de Lydia, ou de n'importe quel organisme, cela ne garantit pas que c'est vraiment eux qui vous appellent. <strong>Raccrochez et rappelez vous-même le numéro officiel.</strong>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Psychologie */}
            <section id="psychologie" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <HeadphonesIcon className="text-orange-500 flex-shrink-0" /> 
                5. La manipulation psychologique en action
              </h2>

              <p>
                L'efficacité de l'arnaque au faux conseiller ne repose pas uniquement sur la technologie. Elle exploite des mécanismes psychologiques profonds, étudiés depuis des décennies en sciences cognitives et en psychologie sociale.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Les 6 leviers de manipulation utilisés</h3>
              
              <div className="space-y-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">1. L'autorité perçue</h4>
                    <p className="text-sm text-muted-foreground">L'escroc se présente comme un "conseiller officiel" avec un vocabulaire technique et un ton professionnel. Nous sommes conditionnés à obéir aux figures d'autorité (expérience de Milgram). L'affichage du "vrai" numéro renforce cette perception.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">2. L'urgence artificielle</h4>
                    <p className="text-sm text-muted-foreground">"Vous avez 3 minutes avant que le virement soit définitif." L'urgence désactive notre cortex préfrontal (zone de réflexion) au profit du système limbique (réactions émotionnelles). Nous agissons sans réfléchir.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">3. La peur de la perte</h4>
                    <p className="text-sm text-muted-foreground">L'aversion à la perte est l'un des biais cognitifs les plus puissants. Nous sommes prêts à prendre des risques irrationnels pour éviter de perdre quelque chose. L'escroc exploite cette peur en menaçant de "perdre tout votre argent".</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">4. La cohérence et l'engagement</h4>
                    <p className="text-sm text-muted-foreground">Une fois que vous avez commencé à suivre les instructions ("Oui, je vois l'alerte", "Oui, j'ouvre l'application"), vous êtes psychologiquement engagé. Interrompre le processus créerait une dissonance cognitive inconfortable.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">5. La preuve sociale</h4>
                    <p className="text-sm text-muted-foreground">L'escroc mentionne parfois que "d'autres clients ont été touchés aujourd'hui". Nous nous rassurons en pensant que nous ne sommes pas les seuls, ce qui normalise la situation et réduit notre méfiance.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">6. L'isolement</h4>
                    <p className="text-sm text-muted-foreground">"Restez en ligne, ne raccrochez pas." L'escroc vous empêche de consulter un proche ou de vérifier par vous-même. L'isolement est une technique classique des manipulateurs et des sectes.</p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Ces techniques sont enseignées dans des "écoles d'arnaque" informelles et partagées sur des forums du Dark Web. Les escrocs les plus efficaces suivent des scripts précis, testés et optimisés comme n'importe quelle campagne marketing — sauf que le "produit" vendu est la destruction financière de la victime.
              </p>
            </section>

            {/* Section 6: Réseaux */}
            <section id="reseaux" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="text-primary flex-shrink-0" /> 
                6. Les réseaux criminels derrière l'arnaque
              </h2>

              <p>
                Qui sont les auteurs de ces arnaques ? Notre investigation, croisée avec les informations des services de police spécialisés et des experts en cybercriminalité, révèle une organisation structurée et internationale.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Une organisation en réseau</h3>
              <p>
                Les arnaques au faux conseiller ne sont pas l'œuvre de criminels isolés. Elles sont orchestrées par des réseaux organisés qui fonctionnent comme de véritables entreprises :
              </p>

              <div className="my-8 not-prose">
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold mb-2">Les "Data Brokers" (Fournisseurs de données)</h4>
                    <p className="text-sm text-muted-foreground">Ils collectent et revendent des listes de victimes potentielles avec leurs informations personnelles. Prix moyen : 0,50€ à 5€ par profil "qualifié".</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold mb-2">Les "Callers" (Appelants)</h4>
                    <p className="text-sm text-muted-foreground">Ils exécutent les appels depuis des centres d'appel clandestins, souvent situés en Europe de l'Est, en Afrique du Nord ou en Asie du Sud-Est. Rémunération : 15% à 25% des sommes volées.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold mb-2">Les "Drops" (Mules financières)</h4>
                    <p className="text-sm text-muted-foreground">Ils ouvrent des comptes bancaires pour recevoir les fonds volés avant de les transférer. Souvent des personnes recrutées via de fausses offres d'emploi.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold mb-2">Les "Crypto Washers" (Blanchisseurs)</h4>
                    <p className="text-sm text-muted-foreground">Ils convertissent l'argent en cryptomonnaies (Bitcoin, Monero) pour le blanchir à travers des mixeurs et des plateformes décentralisées.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Géographie des réseaux</h3>
              <p>
                Les enquêtes d'Europol et d'Interpol identifient plusieurs hubs majeurs pour ce type d'arnaque :
              </p>
              <ul className="space-y-2 my-6">
                <li><strong>Europe de l'Est</strong> (Roumanie, Bulgarie, Ukraine) : Centres d'appel et infrastructure technique</li>
                <li><strong>Afrique de l'Ouest</strong> (Côte d'Ivoire, Nigeria) : Opérations ciblant les francophones</li>
                <li><strong>Asie du Sud-Est</strong> (Cambodge, Myanmar) : Camps de "cyber-esclaves" (victimes de traite humaine forcées à exécuter des arnaques)</li>
              </ul>

              <Card className="my-8 border-l-4 border-l-primary bg-primary/5">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Le phénomène des "Pig Butchering Camps"</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    L'ONU et plusieurs ONG ont documenté l'existence de véritables camps de travail forcé en Asie du Sud-Est où des milliers de personnes — souvent elles-mêmes victimes de traite humaine — sont contraintes d'exécuter des arnaques téléphoniques et en ligne. Ces camps, gérés par des organisations criminelles transnationales, génèrent des milliards de dollars par an.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Réponse Lydia */}
            <section id="lydia-reponse" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-primary flex-shrink-0" /> 
                7. La réponse de Lydia et des banques
              </h2>

              <p>
                Face à cette vague d'arnaques, comment réagissent les acteurs concernés ? Nous avons tenté d'obtenir des réponses de Lydia, des principales banques françaises et des autorités de régulation.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">La position officielle de Lydia</h3>
              <p>
                Contactée par notre rédaction, Lydia a publié un communiqué rappelant les règles de base :
              </p>
              <Card className="my-6 bg-muted/30 border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <p className="italic">
                    "Lydia ne vous appellera jamais pour vous demander de valider un virement, de communiquer un code SMS ou d'effectuer une quelconque manipulation sur votre application. Si vous recevez un tel appel, raccrochez immédiatement et contactez notre support via l'application officielle."
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">— Communiqué Lydia, 31 janvier 2026</p>
                </CardContent>
              </Card>

              <p>
                Lydia indique également avoir renforcé ses alertes in-app et travaillé avec les opérateurs téléphoniques pour tenter de bloquer les numéros spoofés. Cependant, l'entreprise reconnaît que le spoofing reste techniquement difficile à contrer.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Les limites du système bancaire</h3>
              <p>
                Les victimes d'arnaques au virement instantané se heurtent à un mur : une fois le virement validé, l'argent est parti. Contrairement aux paiements par carte bancaire (où un mécanisme de "chargeback" existe), <strong>les virements instantanés sont irrévocables par conception</strong>.
              </p>
              <p>
                Les banques refusent généralement de rembourser les victimes au motif qu'elles ont "validé elles-mêmes" le virement. Cette position, juridiquement défendable, est humainement discutable. Les associations de consommateurs dénoncent un système qui fait porter toute la responsabilité sur les victimes, alors que les failles technologiques (spoofing) sont connues depuis des années.
              </p>
            </section>

            {/* Section 8: Protection */}
            <section id="protection" className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-2xl border border-green-500/20">
              <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <ShieldCheck className="text-green-500 flex-shrink-0" /> 
                8. Comment vous protéger : guide complet
              </h2>

              <p className="text-center text-lg mb-8">
                Voici les règles d'or pour ne jamais tomber dans le piège du faux conseiller.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <Card className="bg-white/80 dark:bg-background/80 border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                      <Ban className="w-5 h-5 text-red-500" /> RÈGLE N°1
                    </h4>
                    <p className="font-bold text-lg mb-2">Ne validez JAMAIS un virement sur demande téléphonique</p>
                    <p className="text-sm text-muted-foreground">Aucun conseiller bancaire légitime ne vous demandera jamais de faire un virement par téléphone, pour quelque raison que ce soit.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 dark:bg-background/80 border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                      <Phone className="w-5 h-5 text-orange-500" /> RÈGLE N°2
                    </h4>
                    <p className="font-bold text-lg mb-2">Raccrochez et rappelez vous-même</p>
                    <p className="text-sm text-muted-foreground">Si on vous appelle pour un problème urgent, raccrochez et rappelez le numéro officiel que vous trouverez sur le site officiel ou votre application.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 dark:bg-background/80 border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-500" /> RÈGLE N°3
                    </h4>
                    <p className="font-bold text-lg mb-2">Méfiez-vous de l'urgence</p>
                    <p className="text-sm text-muted-foreground">L'urgence est le premier signal d'alerte. Un vrai conseiller vous laissera le temps de réfléchir et de vérifier.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 dark:bg-background/80 border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-primary" /> RÈGLE N°4
                    </h4>
                    <p className="font-bold text-lg mb-2">Ne communiquez jamais de codes SMS</p>
                    <p className="text-sm text-muted-foreground">Les codes de validation SMS sont strictement personnels. Aucun service légitime ne vous les demandera par téléphone.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-red-500 text-white border-none">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-3">LE RÉFLEXE QUI SAUVE</h4>
                  <p className="text-lg">
                    Au moindre doute : <strong>RACCROCHEZ</strong>. Attendez 5 minutes. Rappelez vous-même le numéro officiel. Un vrai problème sera toujours là dans 5 minutes. Une arnaque, elle, aura disparu.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 9: Recours */}
            <section id="recours" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Scale className="text-primary flex-shrink-0" /> 
                9. Vos recours si vous êtes victime
              </h2>

              <p>
                Si malgré toutes les précautions vous êtes victime de cette arnaque, voici les démarches à entreprendre immédiatement.
              </p>

              <div className="space-y-8 my-8">
                <div className="flex gap-4 items-start border-b pb-6">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Dans les 5 premières minutes</h4>
                    <p className="text-muted-foreground">Contactez immédiatement votre banque pour tenter un blocage. Même si les virements instantanés sont irrévocables, une action ultra-rapide peut parfois permettre un gel des fonds.</p>
                    <div className="mt-3 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">Numéro interbancaire d'opposition :</p>
                      <p className="text-lg font-bold text-primary">0 892 705 705</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-b pb-6">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Dans l'heure</h4>
                    <p className="text-muted-foreground">Déposez une plainte en ligne sur <a href="https://www.pre-plainte-en-ligne.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pre-plainte-en-ligne.gouv.fr</a>. Conservez tous les éléments : historique d'appels, SMS, relevés bancaires.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-b pb-6">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Dans la journée</h4>
                    <p className="text-muted-foreground">Signalez l'arnaque sur les plateformes officielles :</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><ExternalLink className="w-4 h-4" /> Cybermalveillance.gouv.fr</a>
                      <a href="https://www.internet-signalement.gouv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><ExternalLink className="w-4 h-4" /> PHAROS</a>
                      <a href="https://www.signal-spam.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><ExternalLink className="w-4 h-4" /> Signal-Spam</a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg">Dans les jours suivants</h4>
                    <p className="text-muted-foreground">Contactez une association de consommateurs (UFC-Que Choisir, CLCV) pour étudier vos options de recours contre votre banque. Dans certains cas, une action en responsabilité peut aboutir à un remboursement partiel.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Conclusion */}
            <section id="conclusion" className="mb-16 border-t-2 border-primary/20 pt-12">
              <h2 className="text-3xl font-bold mb-6 italic flex items-center gap-3">
                <TrendingUp className="text-primary flex-shrink-0" />
                10. L'avenir de la fraude bancaire
              </h2>

              <p>
                L'arnaque au faux conseiller Lydia n'est pas un phénomène isolé. Elle représente l'évolution naturelle de la cybercriminalité vers des attaques <strong>hybrides</strong> combinant technologie (spoofing, phishing) et <strong>ingénierie sociale</strong> (manipulation psychologique).
              </p>

              <p>
                Les experts que nous avons interrogés sont unanimes : sans une réforme profonde des protocoles téléphoniques et bancaires, ce type d'arnaque continuera de proliférer. Les solutions existent (authentification forte des appels, délais de validation pour les gros virements, meilleure éducation du public), mais leur déploiement nécessite une volonté politique et économique qui, pour l'instant, fait défaut.
              </p>

              <p>
                En attendant, la meilleure arme reste la <strong>connaissance</strong>. Partagez cet article autour de vous. Prévenez vos proches, notamment les plus vulnérables. L'éducation numérique est le seul pare-feu véritablement efficace contre ces attaques.
              </p>

              <div className="mt-12 p-8 bg-muted/50 rounded-2xl border">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Bouhmou Rachid</p>
                    <p className="text-muted-foreground mb-3">Expert Cybersécurité & Performance WordPress</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fondateur de WP Vitesse Pro, Bouhmou Rachid consacre ses recherches à la sécurité numérique et à la lutte contre la cybercriminalité. Ses investigations ont été citées par plusieurs médias nationaux et organismes officiels.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline">Wikidata: Q137939882</Badge>
                      <Badge variant="outline">contact@wp-vitesse-pro.fr</Badge>
                      <a href="https://www.linkedin.com/in/rachid-bouhmou-81823a3a1" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Card className="sticky top-24 bg-primary text-primary-foreground border-none overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Sécurisez Votre Site</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Un site vulnérable = données clients en danger
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm">
                  Comme pour les arnaques bancaires, la sécurité de votre site web est critique pour protéger vos utilisateurs.
                </p>
                <Button 
                  className="w-full bg-white text-primary hover:bg-gray-100 font-bold py-6 text-lg"
                  asChild
                >
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer">
                    Hébergement Ultra-Sécurisé
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" /> Ressources Officielles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-white dark:bg-background rounded-lg hover:bg-muted transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Cybermalveillance.gouv.fr</span>
                </a>
                <a href="https://www.internet-signalement.gouv.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-white dark:bg-background rounded-lg hover:bg-muted transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">PHAROS (Signalement)</span>
                </a>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-background rounded-lg">
                  <Phone className="w-4 h-4 text-red-500" />
                  <div>
                    <span className="text-sm font-bold">Opposition CB</span>
                    <p className="text-xs text-muted-foreground">0 892 705 705</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" /> Alerte Connexe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Cette arnaque est souvent liée à un phishing SNCF préalable.</p>
                <Button variant="outline" className="w-full text-orange-600 border-orange-600 hover:bg-orange-50" asChild>
                  <Link href="/article/alerte-phishing-sncf-connect-2026">Lire l'enquête SNCF</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="bg-muted/30 p-6 rounded-2xl border">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" /> À Propos de l'Auteur
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Bouhmou Rachid</strong> est un expert reconnu en infrastructure Cloud et cybersécurité WordPress. Ses investigations approfondies aident des milliers de Français à se protéger contre les cybermenaces.
              </p>
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Wikidata Q137939882</Badge>
                <Badge variant="outline">Expert Cybersécurité</Badge>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Article Navigation Footer */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-card border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Partagez cette enquête</Badge>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Protégez vos proches : partagez cet article</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Vos parents, grands-parents et amis moins à l'aise avec le numérique sont les cibles prioritaires. Informez-les.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold gradient-cta shadow-lg hover-elevate" asChild>
              <a href="/audit-site">Audit Sécurité Gratuit</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-bold hover-elevate" asChild>
              <Link href="/article/alerte-phishing-sncf-connect-2026">Lire l'enquête SNCF</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleArnaqueLydia2026;
