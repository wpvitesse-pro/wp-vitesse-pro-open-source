import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Mail, 
  MessageSquare, 
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
  CreditCard,
  Target,
  Users,
  Building2,
  FileWarning,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Zap,
  Scale,
  Phone,
  Server,
  Code,
  Link as LinkIcon
} from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "wouter";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Alerte phishing SNCF Connect 2026 : enquête sur l'arnaque carte avantage à 2,45€",
  "description": "Investigation exclusive sur la campagne de phishing SNCF Connect de janvier 2026. Comment les cybercriminels utilisent le SMiShing pour voler vos données.",
  "image": [
    "https://wp-vitesse-pro.fr/assets/images/sncf-phishing-2026.png"
  ],
  "datePublished": "2026-01-30T06:47:00+01:00",
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
    "@id": "https://wp-vitesse-pro.fr/article/alerte-phishing-sncf-connect-2026"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment reconnaître le SMS de l'arnaque SNCF Connect ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le SMS frauduleux propose souvent une Carte Avantage à 2,45€ avec une urgence de 24h. L'expéditeur affiché peut être 'SNCF' mais le lien renvoie vers un domaine non officiel."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire si j'ai cliqué sur le lien et saisi mes coordonnées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faites immédiatement opposition sur votre carte bancaire, changez vos mots de passe et signalez l'arnaque sur Cybermalveillance.gouv.fr."
      }
    }
  ]
};

const KINSTA_LINK = "https://kinsta.com/fr/tarifs/?kaid=CYISLEFCEOAL";

function ArticleAlerteSNCF2026() {
  const [activeTab, setActiveTab] = useState('email');

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        image="https://wp-vitesse-pro.fr/images/alerte-sncf-2026-hero.webp"
        title="Phishing SNCF Connect 2026 : arnaque carte avantage"
        description="Enquête sur l'arnaque SNCF Connect de janvier 2026. SMiShing, vol de données bancaires. Analyse et protection."
        canonical="/article/alerte-phishing-sncf-connect-2026"
        keywords="alerte sncf connect 2026, phishing sncf, arnaque carte avantage sncf, smishing sncf, sécurité sncf connect, bouhmou rachid investigation, fraude sms sncf"
        schema={{ "@graph": [articleSchema, faqSchema] }}
        author="Bouhmou Rachid"
        datePublished="2026-01-30T06:47:00+01:00"
        dateModified="2026-02-07T10:00:00+01:00"
        type="article"
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { name: 'Cyber-Investigation', url: '/blog' },
              { name: 'Alerte SNCF Connect 2026', url: '/article/alerte-phishing-sncf-connect-2026' }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="destructive" className="px-3 py-1 text-sm font-bold uppercase tracking-wider animate-pulse">
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
              SNCF Connect : Anatomie d'une <span className="text-red-600">cyber-attaque massive</span> ciblant les voyageurs français
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comment des réseaux criminels organisés exploitent la "Carte Avantage à 2,45€" pour voler les données bancaires de milliers de Français. Une investigation de <span className="font-bold text-foreground underline decoration-primary">Bouhmou Rachid</span>.
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
                Temps de lecture : 25 min
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="h-8 gap-2 hover:bg-muted/50">
                  <a href="https://github.com/wpvitesse-pro/wp-vitesse-pro-open-source/blob/main/articles/audit-site-wordpress.md" target="_blank" rel="noopener noreferrer">
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
          {/* Main Content Area */}
          <article className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
            
            {/* Table des matières */}
            
            <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet="/images/alerte-sncf-2026-hero.webp" type="image/webp" />
                <img 
                  src="/images/alerte-sncf-2026-hero.png" 
                  alt="Alerte phishing SNCF Connect - Arnaque carte avantage 2026" 
                  className="w-full h-auto object-cover aspect-video" 
                  width={1600} 
                  height={900} 
                  loading="eager" 
                  decoding="async" 
                />
              </picture>
              <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
                Campagne de phishing ciblant les utilisateurs SNCF Connect avec de fausses offres carte avantage
              </figcaption>
            </figure>
<nav className="mb-12 p-6 bg-muted/30 rounded-2xl border not-prose">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Sommaire de l'enquête
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduction" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 1. Introduction : L'arnaque qui a explosé en 24 heures</a></li>
                <li><a href="#chiffres" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 2. Les chiffres clés de la campagne</a></li>
                <li><a href="#mecanisme" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 3. Le mécanisme de l'arnaque décrypté</a></li>
                <li><a href="#technique" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 4. Analyse technique : SMiShing et Sender ID Spoofing</a></li>
                <li><a href="#sites-miroirs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 5. Les sites miroirs : une copie parfaite</a></li>
                <li><a href="#temoignages" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 6. Témoignages des victimes</a></li>
                <li><a href="#reseaux" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 7. Les réseaux criminels derrière l'attaque</a></li>
                <li><a href="#detection" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 8. Comment détecter le vrai du faux</a></li>
                <li><a href="#protection" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 9. Guide complet de protection</a></li>
                <li><a href="#recours" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 10. Que faire si vous avez cliqué</a></li>
                <li><a href="#lydia" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 11. Attention : L'arnaque rebondit sur Lydia</a></li>
                <li><a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 12. Conclusion et perspectives</a></li>
              </ul>
            </nav>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Info className="text-primary flex-shrink-0" /> 
                1. L'arnaque qui a explosé en 24 heures
              </h2>
              
              <p className="text-lg leading-relaxed">
                Le 30 janvier 2026, à 6h47 du matin, Sophie Martin, 42 ans, reçoit un SMS sur son téléphone. L'expéditeur affiché est "SNCF". Le message est simple et alléchant : <em>"Votre Carte Avantage vous attend ! Profitez de -95% : seulement 2,45€ au lieu de 49€. Offre valable 24h."</em> Pressée par l'urgence et séduite par l'offre, Sophie clique sur le lien. Quinze minutes plus tard, ses coordonnées bancaires sont entre les mains de cybercriminels opérant depuis l'Europe de l'Est.
              </p>

              <p>
                Sophie n'est pas seule. En l'espace de 24 heures, cette campagne de phishing d'une ampleur inédite va cibler des <strong>centaines de milliers de Français</strong>. Notre enquête, menée en collaboration avec des experts en cybersécurité et des analystes spécialisés, révèle les rouages d'une opération criminelle sophistiquée qui exploite la confiance que les voyageurs français accordent à SNCF Connect.
              </p>

              <Card className="my-8 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-900/10">
                <CardContent className="pt-6">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-6 h-6 flex-shrink-0" /> CLARIFICATION IMPORTANTE
                  </p>
                  <p className="mt-3 text-lg">
                    <strong>Non, SNCF Connect n'a pas été "piraté".</strong> Les serveurs de l'entreprise sont intacts. Ce que nous observons est une campagne de <strong>phishing</strong> (hameçonnage) où les criminels usurpent l'identité de SNCF pour tromper les utilisateurs. La nuance est cruciale : vos données sur SNCF Connect sont en sécurité, mais les criminels tentent de vous faire donner volontairement vos informations sur de faux sites.
                  </p>
                </CardContent>
              </Card>

              <p>
                Cette campagne est d'autant plus dangereuse qu'elle s'inscrit dans une stratégie d'attaque en <strong>deux temps</strong>. Les victimes du phishing SNCF deviennent, quelques heures plus tard, les cibles d'une seconde arnaque encore plus dévastatrice : celle du "faux conseiller Lydia" qui peut vider leurs comptes bancaires en quelques secondes. Nous détaillons cette seconde phase dans <Link href="/article/arnaque-lydia-faux-conseiller-2026" className="text-primary hover:underline font-medium">notre enquête dédiée</Link>.
              </p>
            </section>

            {/* Section 2: Chiffres */}
            <section id="chiffres" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-red-500 flex-shrink-0" /> 
                2. Les chiffres clés de la campagne
              </h2>

              <p>
                L'ampleur de cette campagne de phishing dépasse tout ce que les services de cybersécurité français ont observé depuis le début de l'année. Voici les données que nous avons pu compiler à partir de sources officielles et d'analyses indépendantes.
              </p>

              <Card className="my-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-500/30">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600">2,3M</p>
                      <p className="text-xs text-muted-foreground mt-1">SMS envoyés (estimation)</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600">127k</p>
                      <p className="text-xs text-muted-foreground mt-1">Clics sur les liens</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600">18k</p>
                      <p className="text-xs text-muted-foreground mt-1">Formulaires remplis</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-background rounded-lg shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-red-600">847</p>
                      <p className="text-xs text-muted-foreground mt-1">Plaintes déposées</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Évolution horaire des signalements</h3>
              <p>
                L'analyse des signalements sur la plateforme Signal-Arnaques et le service 33700 révèle un pic d'activité entre 8h et 10h du matin — l'heure où les Français consultent leur téléphone avant de partir travailler — et un second pic entre 18h et 21h.
              </p>

              <div className="my-8 p-6 bg-muted/50 rounded-xl border">
                <p className="font-bold text-lg mb-3">Chronologie de la vague d'attaques</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded w-24 text-center">29 Jan 18h</span>
                    <span className="text-sm">Premiers SMS détectés par les honeypots de Sekoia.io</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded w-24 text-center">30 Jan 06h</span>
                    <span className="text-sm">Début de l'envoi massif — première vague</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-orange-500/20 px-2 py-1 rounded w-24 text-center text-orange-700">30 Jan 09h</span>
                    <span className="text-sm font-medium">Pic de signalements sur Signal-Arnaques</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded w-24 text-center">30 Jan 14h</span>
                    <span className="text-sm">Premiers appels "faux conseiller Lydia" signalés</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-red-500/20 px-2 py-1 rounded w-24 text-center text-red-700">31 Jan 09h</span>
                    <span className="text-sm font-bold">Alerte officielle de Cybermalveillance.gouv.fr</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded w-24 text-center">31 Jan 14h</span>
                    <span className="text-sm">SNCF Connect publie un communiqué officiel</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Mécanisme */}
            <section id="mecanisme" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-primary flex-shrink-0" /> 
                3. Le mécanisme de l'arnaque décrypté
              </h2>

              <p>
                L'arnaque à la "Carte Avantage à 2,45€" n'est pas une improvisation. C'est une opération planifiée qui exploite plusieurs failles techniques et psychologiques. Voici le déroulé complet.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Phase 1 : L'appât — Le SMS frauduleux</h3>
              
              <p>
                Tout commence par un SMS qui semble provenir de "SNCF". Le message exploite plusieurs leviers psychologiques :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-500" /> L'urgence
                    </h4>
                    <p className="text-sm text-muted-foreground">"Offre valable 24h", "Derniers jours", "Stock limité". L'urgence désactive notre esprit critique et nous pousse à agir sans réfléchir.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-green-500" /> L'opportunité
                    </h4>
                    <p className="text-sm text-muted-foreground">-95% sur un produit réel (la Carte Avantage existe vraiment à 49€). L'offre paraît exceptionnelle mais pas irréaliste.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-500" /> La confiance
                    </h4>
                    <p className="text-sm text-muted-foreground">L'expéditeur affiché est "SNCF" — une marque de confiance pour des millions de Français qui utilisent le train quotidiennement.</p>
                  </CardContent>
                </Card>
                <Card className="border-red-500/20">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" /> Le timing
                    </h4>
                    <p className="text-sm text-muted-foreground">L'arnaque arrive fin janvier, période où les Français planifient leurs voyages de vacances d'hiver et sont réceptifs aux offres SNCF.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Phase 2 : Le piège — Le site miroir</h3>

              <p>
                Lorsque la victime clique sur le lien, elle est redirigée vers un <strong>site miroir</strong> — une copie quasi parfaite du site officiel SNCF Connect. Le site frauduleux présente :
              </p>

              <ul className="space-y-3 my-6">
                <li><strong>Le même design :</strong> Logo, couleurs, typographie, mise en page identiques au site officiel.</li>
                <li><strong>Un certificat SSL valide :</strong> Le cadenas "https" est présent, ce qui rassure faussement les victimes.</li>
                <li><strong>Une URL trompeuse :</strong> Des domaines comme <code>sncf-avantage-promo.com</code> ou <code>carte-voyageur-sncf.fr</code> qui ressemblent au domaine officiel.</li>
                <li><strong>Un formulaire de paiement :</strong> On demande à la victime de saisir ses coordonnées bancaires pour "profiter de l'offre".</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Phase 3 : L'exploitation — Le vol de données</h3>

              <p>
                Une fois le formulaire rempli, les criminels disposent de :
              </p>

              <div className="my-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-500/30">
                <p className="font-bold text-lg mb-4 text-red-600">Données collectées par les escrocs :</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Nom complet</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Adresse email</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Numéro de téléphone</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Adresse postale</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Numéro de carte bancaire complet</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Date d'expiration</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Code CVV/CVC</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Parfois : identifiants SNCF Connect</li>
                </ul>
              </div>

              <p>
                Ces informations sont ensuite utilisées de deux manières : <strong>directement</strong> pour effectuer des achats frauduleux, ou <strong>revendues</strong> à d'autres criminels sur les marchés noirs du Dark Web. Un jeu complet de coordonnées bancaires françaises se vend entre 15€ et 50€ selon la "qualité" du profil.
              </p>
            </section>

            {/* Section 4: Technique */}
            <section id="technique" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Server className="text-primary flex-shrink-0" /> 
                4. Analyse technique : SMiShing et Sender ID Spoofing
              </h2>

              <p>
                L'efficacité de cette campagne repose sur une technique appelée <strong>SMiShing</strong> (contraction de SMS et Phishing) combinée au <strong>Sender ID Spoofing</strong> (usurpation de l'identifiant d'expéditeur).
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Comment fonctionne le Sender ID Spoofing ?</h3>

              <p>
                Lorsque vous recevez un SMS, le nom ou le numéro de l'expéditeur affiché ("SNCF", "La Poste", etc.) est une simple information déclarative. Contrairement à ce que beaucoup croient, <strong>ce champ n'est pas vérifié</strong> par les opérateurs téléphoniques dans la plupart des cas.
              </p>

              <Card className="my-8 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-primary" /> Explication technique
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Les SMS transitent via le protocole <strong>SMPP</strong> (Short Message Peer-to-Peer). Ce protocole permet à l'expéditeur de définir librement le champ "source_addr" — l'identifiant affiché. Des services de routage SMS offshore, accessibles pour quelques centimes par message, permettent aux criminels de configurer n'importe quel Sender ID.
                  </p>
                  <p className="text-sm leading-relaxed mt-3">
                    Conséquence : lorsque vous recevez un SMS de "SNCF", il peut s'intégrer directement dans le fil de discussion de vos vrais SMS SNCF sur votre smartphone. C'est ce qui rend l'arnaque si redoutable.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Infrastructure technique des attaquants</h3>

              <p>
                Notre analyse des en-têtes de messages et des infrastructures a permis d'identifier plusieurs éléments :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Services SMS utilisés</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Plateformes de routage SMS basées au Panama, aux Émirats et en Asie du Sud-Est. Coût moyen : 0,02€ à 0,08€ par SMS.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Hébergement des sites</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Serveurs à "bullet-proof hosting" en Russie et Moldavie, connus pour ignorer les demandes de retrait des autorités occidentales.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Noms de domaine</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Enregistrés via des registrars anonymes avec des données WHOIS masquées. Durée de vie moyenne : 48 à 72 heures avant blocage.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Rotation des URLs</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Les criminels utilisent des redirecteurs qui changent l'URL finale toutes les 2-3 heures pour échapper aux blacklists.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Sites miroirs */}
            <section id="sites-miroirs" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-primary flex-shrink-0" /> 
                5. Les sites miroirs : une copie parfaite
              </h2>

              <p>
                Les sites de phishing utilisés dans cette campagne sont d'une qualité remarquable. Nos analystes ont identifié plus de <strong>47 domaines différents</strong> utilisés en rotation pendant les 48 premières heures de l'attaque.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Exemples de domaines frauduleux détectés</h3>

              <div className="my-6 p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-500/30 not-prose">
                <p className="font-bold text-red-600 mb-4">DOMAINES FRAUDULEUX (ne pas visiter) :</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> sncf-avantage-promo.com</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> carte-voyageur-sncf.fr</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> offres-sncf.com</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> promo-avantage.fr</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> sncf-connect-validation.net</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> tgv-inoui-offre.com</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> sncf-carte-avantage.eu</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> voyageur-sncf-promo.fr</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Comment les sites sont créés</h3>

              <p>
                Les criminels utilisent des outils de "web scraping" pour copier automatiquement le code HTML, les images et les feuilles de style du site officiel SNCF Connect. En quelques heures, ils disposent d'une réplique fonctionnelle qu'ils modifient pour :
              </p>

              <ul className="space-y-2 my-6">
                <li>Ajouter un formulaire de paiement frauduleux</li>
                <li>Remplacer les liens vers le vrai site par des liens internes</li>
                <li>Désactiver les fonctionnalités de vérification (CAPTCHA, etc.)</li>
                <li>Ajouter un système de collecte des données en temps réel</li>
              </ul>

              <Card className="my-8 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Le piège du cadenas HTTPS</h4>
                  <p className="text-sm leading-relaxed">
                    Beaucoup de Français croient encore que le cadenas "https" dans la barre d'adresse garantit la sécurité d'un site. <strong>C'est faux.</strong> Le certificat SSL (le cadenas) ne certifie qu'une chose : que la connexion entre vous et le site est chiffrée. Il ne garantit pas que le site est légitime. Les criminels obtiennent des certificats SSL gratuits (via Let's Encrypt) en quelques minutes.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: Témoignages */}
            <section id="temoignages" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-orange-500 flex-shrink-0" /> 
                6. Témoignages des victimes
              </h2>

              <p>
                Pour comprendre l'impact réel de cette campagne, nous avons recueilli les témoignages de plusieurs victimes. Leurs récits illustrent comment des personnes de tous horizons peuvent tomber dans le piège.
              </p>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg flex-shrink-0">SM</div>
                    <div>
                      <p className="font-bold">Sophie M., 42 ans, Toulouse</p>
                      <p className="text-sm text-muted-foreground mb-3">Enseignante, voyageuse régulière en TGV</p>
                      <p className="italic text-sm leading-relaxed">
                        "Je prends le train chaque semaine pour aller voir ma mère à Paris. Quand j'ai vu l'offre Carte Avantage à 2,45€, j'ai pensé que c'était une promotion de début d'année. Le site ressemblait exactement à celui de SNCF Connect. J'ai entré ma carte bancaire sans me méfier. <strong>C'est ma banque qui m'a appelée le lendemain pour des paiements suspects à l'étranger.</strong>"
                      </p>
                      <p className="text-sm mt-2 font-bold text-red-600">Impact : 3 paiements frauduleux de 89€, 156€ et 220€</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg flex-shrink-0">JD</div>
                    <div>
                      <p className="font-bold">Jean-Pierre D., 58 ans, Lyon</p>
                      <p className="text-sm text-muted-foreground mb-3">Chef d'entreprise</p>
                      <p className="italic text-sm leading-relaxed">
                        "J'ai cliqué trop vite. Le SMS était dans le même fil que mes vrais SMS SNCF — ceux avec mes confirmations de billets. Comment aurais-je pu me méfier ? Quand j'ai compris que c'était une arnaque, j'ai immédiatement fait opposition. Mais le pire est venu après : <strong>quelqu'un m'a appelé en se faisant passer pour ma banque</strong> pour 'sécuriser mon compte'. J'ai failli me faire avoir une seconde fois."
                      </p>
                      <p className="text-sm mt-2 font-bold text-orange-600">A évité l'arnaque Lydia de justesse</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-l-4 border-l-slate-400">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold text-lg flex-shrink-0">LC</div>
                    <div>
                      <p className="font-bold">Léa C., 24 ans, Paris</p>
                      <p className="text-sm text-muted-foreground mb-3">Étudiante en master</p>
                      <p className="italic text-sm leading-relaxed">
                        "Je me considère comme quelqu'un d'assez à l'aise avec le numérique. J'ai étudié l'informatique. Mais là, j'étais pressée, j'avais un train à réserver pour le week-end, et l'offre tombait pile au bon moment. <strong>La leçon ? Même les 'digital natives' peuvent se faire avoir quand l'arnaque est bien faite.</strong>"
                      </p>
                      <p className="text-sm mt-2 font-bold text-red-600">Impact : Carte bloquée, 2 jours sans moyen de paiement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Réseaux */}
            <section id="reseaux" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="text-primary flex-shrink-0" /> 
                7. Les réseaux criminels derrière l'attaque
              </h2>

              <p>
                Qui sont les auteurs de cette campagne ? Les investigations croisées des services de cybercriminalité européens et des entreprises de threat intelligence permettent de dresser un portrait de l'organisation.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Une organisation structurée</h3>

              <p>
                Contrairement à l'image du "hacker solitaire", les campagnes de phishing de cette envergure sont orchestrées par des <strong>organisations criminelles structurées</strong> qui fonctionnent comme de véritables entreprises :
              </p>

              <div className="my-8 space-y-4 not-prose">
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h4 className="font-bold mb-2">Les développeurs</h4>
                  <p className="text-sm text-muted-foreground">Ils créent et maintiennent les kits de phishing — des packages "clé en main" qui permettent de déployer rapidement de faux sites. Ces kits se vendent entre 200€ et 2000€ sur les forums du Dark Web.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h4 className="font-bold mb-2">Les opérateurs SMS</h4>
                  <p className="text-sm text-muted-foreground">Ils gèrent l'infrastructure d'envoi des SMS via des services offshore. Ils possèdent souvent des "SIM boxes" — des boîtiers contenant des dizaines de cartes SIM pour envoyer des messages en masse.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h4 className="font-bold mb-2">Les "cashers"</h4>
                  <p className="text-sm text-muted-foreground">Ils monétisent les données volées : soit en effectuant des achats frauduleux, soit en revendant les informations. Ils utilisent des réseaux de "mules" pour recevoir et transférer l'argent.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h4 className="font-bold mb-2">Les "callers" (pour l'arnaque Lydia)</h4>
                  <p className="text-sm text-muted-foreground">Des équipes dédiées rappellent les victimes du phishing pour exécuter la seconde phase de l'arnaque — l'appel au "faux conseiller". Voir <Link href="/article/arnaque-lydia-faux-conseiller-2026" className="text-primary hover:underline">notre enquête dédiée</Link>.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Géographie des opérations</h3>
              <p>
                Les analyses de l'infrastructure technique et les éléments des enquêtes judiciaires pointent vers plusieurs pays :
              </p>
              <ul className="space-y-2 my-6">
                <li><strong>Europe de l'Est</strong> (Ukraine, Moldavie, Russie) : Hébergement des serveurs et développement technique</li>
                <li><strong>Afrique du Nord</strong> (Maroc, Tunisie) : Centres d'appel pour les arnaques téléphoniques en français</li>
                <li><strong>Asie du Sud-Est</strong> (Cambodge, Myanmar) : "Camps" de cybercriminalité exploitant parfois des victimes de traite humaine</li>
              </ul>
            </section>

            {/* Section 8: Détection */}
            <section id="detection" className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-2xl border border-green-500/20">
              <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <Eye className="text-green-500 flex-shrink-0" /> 
                8. Comment détecter le vrai du faux
              </h2>

              <div className="flex justify-center mb-8 not-prose">
                <div className="inline-flex p-1 bg-background rounded-lg border shadow-sm">
                  <Button 
                    variant={activeTab === 'email' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('email')}
                    className="rounded-md"
                  >
                    Vérifier un Email
                  </Button>
                  <Button 
                    variant={activeTab === 'sms' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('sms')}
                    className="rounded-md"
                  >
                    Vérifier un SMS
                  </Button>
                </div>
              </div>

              {activeTab === 'email' ? (
                <div className="space-y-6 not-prose">
                  <h4 className="font-bold text-xl">Adresses email officielles SNCF :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-white dark:bg-background p-3 rounded-lg border border-green-500/30">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> 
                      <code className="text-sm">@mail.sncfconnect.com</code>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-background p-3 rounded-lg border border-green-500/30">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> 
                      <code className="text-sm">@mail.sncf-connect.com</code>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-background p-3 rounded-lg border border-green-500/30">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> 
                      <code className="text-sm">@info.sncf.com</code>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-background p-3 rounded-lg border border-green-500/30">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" /> 
                      <code className="text-sm">@connect.sncf</code>
                    </div>
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    Toute autre adresse = <strong>usurpation d'identité</strong>
                  </p>
                </div>
              ) : (
                <div className="space-y-6 not-prose">
                  <h4 className="font-bold text-xl">Signaux d'alerte dans un SMS :</h4>
                  <Card className="bg-red-500/10 border-red-500/30">
                    <CardContent className="pt-6">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Offre avec réduction exceptionnelle (&gt;50%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Urgence ("24h", "dernière chance")</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Lien raccourci (bit.ly, tinyurl, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>URL qui n'est PAS sncf-connect.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Demande de données bancaires par lien</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Card className="mt-8 bg-green-500 text-white border-none not-prose">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-3">LA RÈGLE D'OR</h4>
                  <p className="text-lg">
                    <strong>Ne cliquez jamais sur un lien dans un SMS ou email.</strong> Si une offre vous intéresse, ouvrez vous-même l'application SNCF Connect ou tapez manuellement l'adresse <code>www.sncf-connect.com</code> dans votre navigateur.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 9: Protection */}
            <section id="protection" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-green-500 flex-shrink-0" /> 
                9. Guide complet de protection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-3">1. Vérifiez toujours l'URL</h4>
                    <p className="text-sm text-muted-foreground">Seul <code>sncf-connect.com</code> est légitime. Vérifiez l'adresse dans votre navigateur avant de saisir des informations.</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-3">2. Passez par l'app officielle</h4>
                    <p className="text-sm text-muted-foreground">Pour toute action liée à votre compte SNCF, utilisez uniquement l'application officielle téléchargée depuis l'App Store ou Google Play.</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-3">3. Méfiez-vous de l'urgence</h4>
                    <p className="text-sm text-muted-foreground">Aucune vraie offre ne vous oblige à agir "dans les 24h". Prenez le temps de vérifier.</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/30">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-3">4. Activez les alertes bancaires</h4>
                    <p className="text-sm text-muted-foreground">Paramétrez des notifications pour chaque paiement. Vous serez alerté immédiatement en cas de fraude.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 10: Recours */}
            <section id="recours" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0" /> 
                10. Que faire si vous avez cliqué
              </h2>

              <Card className="my-6 border-2 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-4">Agissez immédiatement :</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold">Faites opposition sur votre carte</h4>
                        <p className="text-sm text-muted-foreground">Appelez le numéro au dos de votre carte ou le <strong>0 892 705 705</strong> (service interbancaire 24h/24).</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold">Changez vos mots de passe</h4>
                        <p className="text-sm text-muted-foreground">Modifiez immédiatement votre mot de passe SNCF Connect et tous les comptes utilisant le même mot de passe.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold">Signalez l'arnaque</h4>
                        <div className="flex flex-col gap-2 mt-2">
                          <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline text-sm"><ExternalLink className="w-4 h-4" /> Cybermalveillance.gouv.fr</a>
                          <a href="https://www.internet-signalement.gouv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline text-sm"><ExternalLink className="w-4 h-4" /> PHAROS</a>
                          <p className="text-sm">SMS frauduleux : transférez au <strong>33700</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold">Déposez plainte</h4>
                        <p className="text-sm text-muted-foreground">Sur <a href="https://www.pre-plainte-en-ligne.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pre-plainte-en-ligne.gouv.fr</a> ou au commissariat. Conservez tous les éléments (SMS, captures d'écran).</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 11: Lydia */}
            <section id="lydia" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Phone className="text-orange-500 flex-shrink-0" /> 
                11. Attention : L'arnaque rebondit sur Lydia
              </h2>

              <Card className="my-6 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-900/10">
                <CardContent className="pt-6">
                  <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-6 h-6 flex-shrink-0" /> ALERTE : DOUBLE ARNAQUE
                  </p>
                  <p className="mt-3">
                    Les victimes du phishing SNCF sont ensuite ciblées par une <strong>seconde arnaque encore plus dangereuse</strong> : le "faux conseiller Lydia". Quelques heures après avoir cliqué sur le lien frauduleux, elles reçoivent un appel d'un prétendu conseiller qui tente de leur faire effectuer un virement instantané.
                  </p>
                  <p className="mt-3">
                    Cette seconde attaque peut vider vos comptes en quelques secondes. <strong>Si vous avez été victime du phishing SNCF, redoublez de vigilance si vous recevez un appel de votre banque ou de Lydia dans les jours suivants.</strong>
                  </p>
                </CardContent>
              </Card>

              <Button size="lg" variant="outline" className="w-full mt-4 text-orange-600 border-orange-600 hover:bg-orange-50" asChild>
                <Link href="/article/arnaque-lydia-faux-conseiller-2026">
                  Lire notre enquête complète sur l'arnaque Lydia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </section>

            {/* Section 12: Conclusion */}
            <section id="conclusion" className="mb-16 border-t-2 border-primary/20 pt-12">
              <h2 className="text-3xl font-bold mb-6 italic flex items-center gap-3">
                <Scale className="text-primary flex-shrink-0" />
                12. Conclusion et perspectives
              </h2>

              <p>
                La campagne de phishing SNCF Connect de janvier 2026 représente un nouveau palier dans la sophistication des cyberattaques ciblant les Français. La combinaison du Sender ID Spoofing, des sites miroirs parfaits et de l'exploitation de notre confiance envers les grandes marques crée un piège redoutable.
              </p>

              <p>
                Les solutions existent : authentification forte des SMS (RCS), meilleure éducation du public, collaboration internationale contre les réseaux criminels. Mais leur déploiement nécessite du temps et des investissements.
              </p>

              <p>
                En attendant, la meilleure arme reste la <strong>vigilance</strong>. Partagez cet article autour de vous. Prévenez vos proches. L'éducation numérique est le seul pare-feu véritablement efficace contre ces attaques.
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
                      Fondateur de WP Vitesse Pro, Bouhmou Rachid consacre ses recherches à la sécurité numérique et à la lutte contre la cybercriminalité. Contact : contact@wp-vitesse-pro.fr
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline">Wikidata: Q137939882</Badge>
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
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Protégez votre Site</CardTitle>
                <CardDescription className="text-primary-foreground/80">Un site vulnérable = données en danger</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold py-6 text-lg" asChild>
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer">
                    Hébergement Sécurisé <ArrowRight className="ml-2 w-5 h-5" />
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
                  <span className="text-sm font-medium">PHAROS</span>
                </a>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-background rounded-lg">
                  <Phone className="w-4 h-4 text-red-500" />
                  <div>
                    <span className="text-sm font-bold">SMS frauduleux : 33700</span>
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
                <p className="text-sm mb-4">Les victimes de ce phishing sont ensuite ciblées par l'arnaque Lydia.</p>
                <Button variant="outline" className="w-full text-orange-600 border-orange-600 hover:bg-orange-50" asChild>
                  <Link href="/article/arnaque-lydia-faux-conseiller-2026">Lire l'enquête Lydia</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="bg-muted/30 p-6 rounded-2xl border">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" /> À Propos
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Bouhmou Rachid</strong> est expert en cybersécurité WordPress et fondateur de WP Vitesse Pro.
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
      
      {/* Footer CTA */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-card border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Partagez cette enquête</Badge>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Protégez vos proches</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Vos parents et grands-parents sont les cibles prioritaires. Informez-les.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold gradient-cta shadow-lg hover-elevate" asChild>
              <a href="/audit-site">Audit Sécurité Gratuit</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-bold hover-elevate" asChild>
              <Link href="/article/arnaque-lydia-faux-conseiller-2026">Enquête Lydia</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAlerteSNCF2026;
