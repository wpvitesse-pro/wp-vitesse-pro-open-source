import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Shield, AlertTriangle, Calendar, Clock, Share2, ExternalLink, Phone, Users, ShieldAlert, CheckCircle2, XCircle, AlertOctagon, Info } from "lucide-react";
import { SocialShare } from "@/components/social-share";
import { useToast } from "@/hooks/use-toast";

export default function ArticleArnaqueGendarmerieSpoofing2026() {
  const { toast } = useToast();
  const articleUrl = "https://wp-vitesse-pro.fr/article/arnaque-gendarmerie-spoofing-2026";
  const articleTitle = "Alerte spoofing : des escrocs usurpent le numéro de la gendarmerie pour vous voler";

  const handleShare = () => {
    navigator.clipboard.writeText(articleUrl);
    toast({
      title: "Lien copié !",
      description: "Partagez cet article pour alerter vos proches.",
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": articleTitle,
    "description": "Vague d'arnaques au spoofing en France : des escrocs usurpent les numéros de la Gendarmerie et de la Police pour voler les victimes. 380 millions d'euros de préjudice en 2023.",
    "image": [
      "https://wp-vitesse-pro.fr/images/arnaque-gendarmerie-spoofing-hero-2026.webp",
      "https://wp-vitesse-pro.fr/images/arnaque-gendarmerie-spoofing-hero-2026.png"
    ],
    "datePublished": "2026-02-05T09:00:00+01:00",
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
    "keywords": ["spoofing", "arnaque", "gendarmerie", "police", "escroquerie", "téléphone", "usurpation", "fraude", "France"],
    "articleSection": "Cybersécurité",
    "wordCount": 2500
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Alerte spoofing gendarmerie 2026 : comment se protéger des escrocs | WP Vitesse Pro"
        description="Vague d'arnaques au spoofing en France : des escrocs usurpent les numéros de la Gendarmerie et de la Police. 380M€ de préjudice. Apprenez à vous protéger."
        canonical={articleUrl}
        image="https://wp-vitesse-pro.fr/images/arnaque-gendarmerie-spoofing-hero-2026.webp"
        type="article"
        keywords="arnaque spoofing gendarmerie, escroquerie téléphone police, usurpation numéro, fraude téléphonique France 2026"
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
                ALERTE FRAUDE
              </Badge>
              <Badge variant="secondary">Arnaque</Badge>
              <Badge variant="outline">Spoofing</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Alerte Spoofing : Des escrocs usurpent le numéro de la Gendarmerie pour vider votre compte bancaire
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              Une vague d'escroqueries par spoofing frappe la France. Les criminels affichent le vrai numéro de votre gendarmerie locale pour vous soutirer vos coordonnées bancaires. 380 millions d'euros de préjudice en 2023.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                5 février 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de lecture
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
              <source srcSet="/images/arnaque-gendarmerie-spoofing-hero-2026.webp" type="image/webp" />
              <img 
                src="/images/arnaque-gendarmerie-spoofing-hero-2026.png" 
                alt="Arnaque au spoofing - Des escrocs usurpent le numéro de la Gendarmerie pour escroquer les Français" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Le spoofing permet aux escrocs d'afficher le vrai numéro de la gendarmerie sur votre téléphone
            </figcaption>
          </figure>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <Card className="border-red-500/50 bg-red-500/5 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertOctagon className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                      Alerte Gendarmerie Nationale - Février 2026
                    </h3>
                    <p className="text-muted-foreground mb-0">
                      La Gendarmerie et la Police nationales alertent sur une recrudescence des arnaques par spoofing téléphonique. Les départements de la Sarthe, Seine-Maritime, Calvados et Somme sont particulièrement touchés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
              Qu'est-ce que le spoofing téléphonique ?
            </h2>

            <p>
              Le <strong>spoofing</strong> est une technique de fraude qui permet aux escrocs de <strong>falsifier l'affichage du numéro appelant</strong>. Concrètement, sur votre téléphone s'affiche le vrai numéro d'une brigade de gendarmerie ou d'un commissariat, alors que l'appel provient de criminels situés n'importe où dans le monde.
            </p>

            <p>
              Cette technique est particulièrement redoutable car elle exploite la <strong>confiance naturelle</strong> que nous accordons aux forces de l'ordre. Quand le numéro de votre gendarmerie locale s'affiche, vous décrochez sans méfiance.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Le scénario type de l'arnaque
            </h2>

            <div className="space-y-4 my-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold mb-2">L'appel "officiel"</h4>
                      <p className="text-sm text-muted-foreground">Vous recevez un appel affichant le numéro officiel de votre gendarmerie ou commissariat local. L'escroc se présente comme gendarme ou policier avec un ton professionnel.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold mb-2">Le prétexte alarmant</h4>
                      <p className="text-sm text-muted-foreground">L'escroc invoque une urgence : prélèvement frauduleux détecté, plainte déposée contre vous, contravention impayée (ex: 400€ pour une infraction à Madrid), ou enquête en cours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold mb-2">La demande piège</h4>
                      <p className="text-sm text-muted-foreground">On vous demande de rappeler un "service fraude", de communiquer vos coordonnées bancaires, votre code de carte, ou d'accepter qu'un coursier vienne récupérer votre carte à domicile.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Info className="w-6 h-6 text-blue-500" />
              L'ampleur du phénomène
            </h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">380 M€</div>
                  <div className="text-sm text-muted-foreground">Préjudice lié au spoofing en 2023</div>
                  <div className="text-xs text-muted-foreground mt-1">Source : Observatoire de la sécurité des moyens de paiement</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">~20</div>
                  <div className="text-sm text-muted-foreground">Tentatives à Corbie (Somme)</div>
                  <div className="text-xs text-muted-foreground mt-1">Signalées à une seule brigade</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-500 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Départements touchés</div>
                  <div className="text-xs text-muted-foreground mt-1">Sarthe, Seine-Maritime, Calvados, Somme...</div>
                </CardContent>
              </Card>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <XCircle className="w-6 h-6 text-red-500" />
              Ce que la Gendarmerie ne fera JAMAIS
            </h2>

            <Card className="border-red-500/30 bg-red-500/5 my-6">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Demander vos coordonnées bancaires</strong> par téléphone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Réclamer votre code de carte bleue</strong> ou code secret</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Vous inviter à rappeler un "service bancaire"</strong> fourni par téléphone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Envoyer un coursier</strong> récupérer votre carte bancaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Demander un paiement immédiat</strong> pour une contravention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Shield className="w-6 h-6 text-green-500" />
              Comment réagir face à un appel suspect
            </h2>

            <div className="space-y-3 my-6">
              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">1. Raccrochez immédiatement</h4>
                      <p className="text-sm text-muted-foreground">Ne donnez aucune information, même si l'interlocuteur insiste ou menace.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">2. Composez le 17</h4>
                      <p className="text-sm text-muted-foreground">Appelez directement le 17 et demandez à être mis en relation avec le service qui vous aurait soi-disant contacté.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">3. Ne rappelez jamais le numéro fourni</h4>
                      <p className="text-sm text-muted-foreground">Le numéro de rappel donné par l'escroc est souvent surtaxé ou mène à un complice.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">4. Déposez plainte</h4>
                      <p className="text-sm text-muted-foreground">Même en cas de simple tentative, signalez l'incident à la gendarmerie ou sur la plateforme THESEE.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">5. Prévenez vos proches</h4>
                      <p className="text-sm text-muted-foreground">Partagez cette information avec votre famille, en particulier les personnes âgées souvent ciblées.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-500/5 border-blue-500/30 my-8">
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" />
                  Numéros et ressources utiles
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>17</strong> : Police/Gendarmerie (appel d'urgence)</li>
                  <li><strong>3018</strong> : Numéro national contre le cyberharcèlement</li>
                  <li><strong>0 805 805 817</strong> : Info Escroqueries (appel gratuit)</li>
                  <li><strong>pre-plainte-en-ligne.gouv.fr</strong> : Pré-plainte en ligne</li>
                  <li><strong>thesee.fr</strong> : Plateforme de signalement des arnaques</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <ShieldAlert className="w-6 h-6 text-purple-500" />
              Protégez aussi votre site web
            </h2>

            <p>
              Les techniques d'usurpation d'identité ne se limitent pas au téléphone. Votre <strong>site web WordPress</strong> peut également être victime de spoofing, phishing ou de tentatives d'intrusion. Un hébergement sécurisé est essentiel pour protéger votre entreprise et vos clients.
            </p>

            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30 my-8">
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-3">Sécurisez votre présence en ligne</h4>
                <p className="text-muted-foreground mb-4">
                  Un hébergement WordPress premium comme Kinsta intègre des protections avancées : pare-feu applicatif, détection de malwares, certificats SSL gratuits, et surveillance 24/7.
                </p>
                <Link href="https://kinsta.com/fr/hebergement-wordpress-securise/?kaid=CYISLEFCEOAL">
                  <Button className="bg-purple-600 hover:bg-purple-700" data-testid="button-kinsta-security">
                    <Shield className="w-4 h-4 mr-2" />
                    Découvrir l'hébergement sécurisé Kinsta
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Sources et références</h2>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.francebleu.fr/infos/faits-divers-justice/la-gendarmerie-de-la-sarthe-alerte-sur-le-spoofing-une-technique-d-usurpation-de-numero-de-telephone-5353740" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  France Bleu - Gendarmerie de la Sarthe alerte sur le spoofing
                </a>
              </li>
              <li>
                <a href="https://www.francebleu.fr/normandie/seine-maritime-76/attention-aux-arnaques-les-forces-de-l-ordre-alertent-sur-des-tentatives-de-spoofing-en-seine-maritime-3561451" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  France Bleu - Spoofing en Seine-Maritime
                </a>
              </li>
              <li>
                <a href="https://france3-regions.franceinfo.fr/normandie/calvados/arnaques-meme-la-police-et-la-gendarmerie-sont-visees-le-nouveau-scenario-a-connaitre-3282947.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  France 3 - Arnaques ciblant police et gendarmerie
                </a>
              </li>
              <li>
                <a href="https://www.cnil.fr/fr/cnil-direct/question/2605" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  CNIL - Fiche sur le spoofing
                </a>
              </li>
            </ul>

          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Spoofing</Badge>
              <Badge variant="outline">Arnaque</Badge>
              <Badge variant="outline">Gendarmerie</Badge>
              <Badge variant="outline">Police</Badge>
              <Badge variant="outline">Escroquerie</Badge>
              <Badge variant="outline">Téléphone</Badge>
              <Badge variant="outline">Fraude</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Article publié le 5 février 2026 à 09h00 • Mis à jour à 18h30 • Équipe Investigation WP Vitesse Pro
            </p>
          </footer>
        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
