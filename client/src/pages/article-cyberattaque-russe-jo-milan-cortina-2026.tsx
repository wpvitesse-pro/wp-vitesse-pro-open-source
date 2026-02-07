import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Shield, AlertTriangle, Calendar, Clock, Share2, ExternalLink, Target, Users, Server, Globe, ShieldAlert, CheckCircle2, Zap } from "lucide-react";
import { SocialShare } from "@/components/social-share";
import { useToast } from "@/hooks/use-toast";

export default function ArticleCyberattaqueRusseJOMilanCortina2026() {
  const { toast } = useToast();
  const articleUrl = "https://wp-vitesse-pro.fr/article/cyberattaque-russe-jo-milan-cortina-2026";
  const articleTitle = "JO Milan-Cortina 2026 : L'Italie déjoue des cyberattaques russes massives";

  const handleShare = () => {
    navigator.clipboard.writeText(articleUrl);
    toast({
      title: "Lien copié !",
      description: "Partagez cet article avec vos contacts.",
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": articleTitle,
    "description": "L'Italie annonce avoir déjoué une série de cyberattaques d'origine russe visant les JO d'hiver Milan-Cortina 2026, à 2 jours de la cérémonie d'ouverture. Le groupe NoName057(16) revendique les attaques.",
    "image": [
      "https://wp-vitesse-pro.fr/images/cyberattaque-russe-jo-milan-cortina-2026-hero.webp",
      "https://wp-vitesse-pro.fr/images/cyberattaque-russe-jo-milan-cortina-2026-hero.png"
    ],
    "datePublished": "2026-02-05T10:00:00+01:00",
    "dateModified": "2026-02-07T15:52:11.184Z",
    "author": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr"
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
      "@id": articleUrl
    },
    "keywords": ["cyberattaque", "JO 2026", "Milan-Cortina", "Russie", "NoName057", "cybersécurité", "Jeux Olympiques", "Italie", "hackers"],
    "articleSection": "Cybersécurité",
    "wordCount": 2800
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="JO Milan-Cortina 2026 : L'Italie déjoue des cyberattaques russes | WP Vitesse Pro"
        description="L'Italie annonce avoir déjoué une série de cyberattaques d'origine russe visant les JO d'hiver Milan-Cortina 2026. Le groupe NoName057(16) revendique les attaques contre 120 sites."
        canonical={articleUrl}
        image="https://wp-vitesse-pro.fr/images/cyberattaque-russe-jo-milan-cortina-2026-hero.webp"
        type="article"
        keywords="cyberattaque JO 2026, Milan-Cortina hackers, NoName057 Russie, cybersécurité Jeux Olympiques, Italie cyberattaque"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          <header className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-4" data-testid="button-back-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux actualités
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                BREAKING NEWS
              </Badge>
              <Badge variant="secondary">Cybersécurité</Badge>
              <Badge variant="outline">JO 2026</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              JO Milan-Cortina 2026 : L'Italie déjoue des cyberattaques russes massives à 2 jours de la cérémonie d'ouverture
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              Le groupe de hackers pro-russe NoName057(16) a ciblé plus de 120 sites italiens, dont des infrastructures diplomatiques et hôtelières. L'Italie mobilise 6 000 policiers et 2 000 militaires pour sécuriser les Jeux.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                5 février 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min de lecture
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Équipe Investigation
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare} data-testid="button-share-article">
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
              <SocialShare url={articleUrl} title={articleTitle} />
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/cyberattaque-russe-jo-milan-cortina-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/cyberattaque-russe-jo-milan-cortina-2026-hero.png" 
                alt="Cyberattaque russe contre les JO Milan-Cortina 2026 - Visualisation d'une attaque informatique contre les infrastructures olympiques" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              L'Italie a déjoué une vague de cyberattaques russes visant les JO d'hiver 2026
            </figcaption>
          </figure>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <Card className="border-red-500/50 bg-red-500/5 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                      Alerte Cybersécurité - 5 février 2026
                    </h3>
                    <p className="text-muted-foreground mb-0">
                      À 48 heures de la cérémonie d'ouverture des JO d'hiver Milan-Cortina 2026, l'Italie révèle avoir neutralisé une série d'attaques informatiques orchestrées par le collectif pro-russe NoName057(16). Plus de 120 sites ont été ciblés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Target className="w-6 h-6 text-red-500" />
              Ce que nous savons des attaques
            </h2>

            <p>
              Le gouvernement italien a confirmé ce mardi 4 février avoir <strong>repoussé avec succès une série de cyberattaques</strong> visant directement les Jeux Olympiques d'hiver de Milan-Cortina 2026. Ces attaques, attribuées au groupe de hackers pro-russe <strong>NoName057(16)</strong>, ont ciblé des infrastructures critiques quelques jours avant le début officiel des compétitions.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Les cibles identifiées</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h4 className="font-bold">Sites diplomatiques</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ministère des Affaires étrangères italien</li>
                    <li>• Ambassade d'Italie à Washington</li>
                    <li>• Plusieurs consulats à l'étranger</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="w-6 h-6 text-purple-500" />
                    <h4 className="font-bold">Infrastructures hôtelières</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hôtels de Cortina d'Ampezzo</li>
                    <li>• Systèmes de réservation olympiques</li>
                    <li>• Plateformes de billetterie</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50 my-8">
              <CardContent className="pt-6">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "L'Italie continue de soutenir l'Ukraine, maintenant la ligne pro-ukrainienne et pro-atlantique. Nous répondons par ces actions."
                  <footer className="text-sm text-muted-foreground mt-2">
                    — Revendication du groupe NoName057(16)
                  </footer>
                </blockquote>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <ShieldAlert className="w-6 h-6 text-orange-500" />
              Qui est NoName057(16) ?
            </h2>

            <p>
              NoName057(16) est un <strong>collectif de hackers pro-russes</strong> actif depuis mars 2022, peu après le début de l'invasion de l'Ukraine. Ce groupe est spécialisé dans les attaques par <strong>déni de service distribué (DDoS)</strong> visant les pays occidentaux soutenant l'Ukraine.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Leurs attaques récentes en France</h3>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Noël 2025</strong> : Cyberattaque massive contre La Poste française</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Janvier 2026</strong> : Attaques contre des sites gouvernementaux français</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>JO Paris 2024</strong> : 141 incidents de cybersécurité signalés à l'ANSSI</span>
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Shield className="w-6 h-6 text-green-500" />
              Le dispositif de sécurité italien
            </h2>

            <p>
              Face à cette menace, l'Italie a déployé un <strong>dispositif de sécurité sans précédent</strong> pour protéger les Jeux Olympiques. La police spécialisée en cybersécurité est présente sur les sites olympiques depuis le 26 janvier 2026.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">6 000</div>
                  <div className="text-sm text-muted-foreground">Policiers déployés</div>
                  <div className="text-xs text-muted-foreground mt-1">Tireurs d'élite, unités cynophiles, antiterrorisme</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2 000</div>
                  <div className="text-sm text-muted-foreground">Militaires</div>
                  <div className="text-xs text-muted-foreground mt-1">170 véhicules, radars, avions, drones</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">144 M€</div>
                  <div className="text-sm text-muted-foreground">Budget sécurité</div>
                  <div className="text-xs text-muted-foreground mt-1">30 M€ (2025) + 114 M€ (2026)</div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Missions de cybersécurité</h3>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Protection des infrastructures critiques olympiques</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Surveillance réseau 24h/24 des systèmes de billetterie et diffusion</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Prévention du cyberterrorisme et des ransomwares</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Coordination avec l'ENISA et les agences européennes</span>
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Globe className="w-6 h-6 text-blue-500" />
              Le contexte géopolitique
            </h2>

            <p>
              Ces cyberattaques s'inscrivent dans un <strong>contexte de tensions géopolitiques</strong> entre la Russie et les pays occidentaux. Suite à l'invasion de l'Ukraine en février 2022, le CIO a suspendu les fédérations sportives russes et biélorusses.
            </p>

            <Card className="bg-blue-500/5 border-blue-500/30 my-8">
              <CardContent className="pt-6">
                <h4 className="font-bold mb-3">Participation russe aux JO Milan-Cortina 2026</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>13 athlètes seulement</strong> autorisés à concourir</li>
                  <li>• Participation sous <strong>bannière neutre</strong> (pas de drapeau russe)</li>
                  <li>• Sanction suite à l'invasion de l'Ukraine après les JO de Pékin 2022</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              Leçons pour la cybersécurité des sites web
            </h2>

            <p>
              Ces attaques contre des infrastructures olympiques nous rappellent l'importance cruciale de la <strong>cybersécurité pour tous les sites web</strong>, qu'ils soient institutionnels ou commerciaux. Les attaques DDoS peuvent paralyser n'importe quel site en quelques minutes.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Protection recommandée pour votre site WordPress</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">Hébergement sécurisé</h4>
                  <ul className="text-sm space-y-2">
                    <li>• CDN avec protection DDoS intégrée</li>
                    <li>• Pare-feu applicatif (WAF)</li>
                    <li>• Isolation des conteneurs</li>
                    <li>• Sauvegardes automatiques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">Bonnes pratiques</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Mises à jour régulières WordPress</li>
                    <li>• Authentification à deux facteurs</li>
                    <li>• Monitoring en temps réel</li>
                    <li>• Plan de reprise d'activité</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30 my-8">
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-3">Protégez votre site comme les pros</h4>
                <p className="text-muted-foreground mb-4">
                  Les infrastructures olympiques utilisent des hébergeurs premium avec protection DDoS native. Kinsta offre le même niveau de protection pour votre site WordPress, avec CDN Cloudflare Enterprise inclus.
                </p>
                <Link href="https://kinsta.com/fr/?kaid=CYISLEFCEOAL">
                  <Button className="bg-purple-600 hover:bg-purple-700" data-testid="button-kinsta-security">
                    <Shield className="w-4 h-4 mr-2" />
                    Découvrir la protection Kinsta
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              Calendrier des JO Milan-Cortina 2026
            </h2>

            <ul className="space-y-2">
              <li><strong>6 février 2026</strong> : Cérémonie d'ouverture</li>
              <li><strong>6-22 février 2026</strong> : Compétitions olympiques</li>
              <li><strong>22 février 2026</strong> : Cérémonie de clôture</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Sources et références</h2>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.franceinfo.fr/les-jeux-olympiques/milan-cortina-2026/l-italie-dit-avoir-dejoue-des-cyberattaques-russes-visant-les-jeux-olympiques-d-hiver-de-milan-cortina_7783880.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  France Info - L'Italie déjoue des cyberattaques russes
                </a>
              </li>
              <li>
                <a href="https://www.cnews.fr/monde/2026-02-04/jo-2026-actions-dorigine-russe-infrastructures-hotelieres-visees-ce-que-lon-sait" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  CNEWS - Ce que l'on sait des cyberattaques
                </a>
              </li>
              <li>
                <a href="https://www.france24.com/fr/info-en-continu/20260204-jo-2026-l-italie-d%C3%A9joue-une-s%C3%A9rie-de-cyberattaques-russes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  France 24 - JO 2026 : L'Italie déjoue une série de cyberattaques
                </a>
              </li>
            </ul>

          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">JO 2026</Badge>
              <Badge variant="outline">Milan-Cortina</Badge>
              <Badge variant="outline">Cyberattaque</Badge>
              <Badge variant="outline">Russie</Badge>
              <Badge variant="outline">NoName057</Badge>
              <Badge variant="outline">Cybersécurité</Badge>
              <Badge variant="outline">DDoS</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Article publié le 5 février 2026 à 10h00 • Mis à jour à 18h00 • Équipe Investigation WP Vitesse Pro
            </p>
          </footer>
        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
