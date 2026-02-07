import { SEO } from "@/components/seo";
import { Navbar, SEOFooter } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, Shield, Zap } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/migration/?kaid=CYISLEFCEOAL";

export default function ArticleMigrationBluehost() {
  const handleCTAClick = (location: string) => {
    trackCTAClick('article_migration_bluehost', location);
    window.open(KINSTA_LINK, "_blank");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment migrer de Bluehost vers Kinsta : guide complet",
    "description": "Guide étape par étape pour migrer votre site WordPress de Bluehost vers Kinsta sans perte de données. Migration gratuite, 30 min, zéro downtime.",
    "image": "https://wp-vitesse-pro.fr/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Bouhmou Rachid",
      "url": "https://wp-vitesse-pro.fr/auteur/bouhmou-rachid",
      "jobTitle": "Expert Hébergement WordPress & Cybersécurité",
      "sameAs": [
        "https://www.linkedin.com/in/bouhmou-rachid-cyber/",
        "https://twitter.com/jmorel_cyber"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "WP Vitesse Pro"
      }
    },
    "estimatedCost": {
      "@type": "PriceSpecification",
      "priceCurrency": "EUR",
      "price": "0"
    },
    "totalTime": "PT30M",
    "tool": [
      { "@type": "HowToTool", "name": "Backup WordPress" },
      { "@type": "HowToTool", "name": "Kinsta Migration Assistant" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <SEO
        image="https://wp-vitesse-pro.fr/images/migration-bluehost-hero.webp"
        title="Migration Bluehost vers Kinsta : guide complet 2026"
        description="Migrez WordPress de Bluehost vers Kinsta gratuitement. Guide étape par étape, zéro downtime, migration sécurisée."
        canonical="https://wp-vitesse-pro.fr/article/migration-bluehost"
        type="article"
        schema={schema}
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <article>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary">GUIDE COMPLET</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">6 min de lecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comment migrer de Bluehost vers Kinsta : guide étape par étape
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Migrez votre site WordPress de Bluehost vers Kinsta GRATUITEMENT en 30 minutes. Migration gérée par Kinsta, zéro downtime, aucune perte de données.
            </p>
          </div>

          {/* Info Box */}
          
          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/migration-bluehost-hero.webp" type="image/webp" />
              <img 
                src="/images/migration-bluehost-hero.png" 
                alt="Migration depuis Bluehost - Guide complet" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Guide pas à pas pour migrer votre site WordPress depuis Bluehost
            </figcaption>
          </figure>
<Card className="mb-8 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Bonne nouvelle : la migration est 100% gratuite chez Kinsta
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Kinsta gère l'intégralité du processus. Vous n'avez rien à faire de technique. On s'occupe de tout.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pourquoi Migrer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Pourquoi Quitter Bluehost ?
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="text-red-600 font-bold">✗</div>
                <div>
                  <p className="font-semibold">Bluehost = Lent</p>
                  <p className="text-sm text-muted-foreground">LCP 4-5 secondes = perte de 20-30% conversions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-red-600 font-bold">✗</div>
                <div>
                  <p className="font-semibold">Support peu réactif</p>
                  <p className="text-sm text-muted-foreground">Réponse en 24-48h vs Kinsta &lt;2 min</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-red-600 font-bold">✗</div>
                <div>
                  <p className="font-semibold">Surcharge serveur fréquente</p>
                  <p className="text-sm text-muted-foreground">Centaines de sites sur les mêmes serveurs = ralentissements</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Kinsta :</strong> Infrastructure Google Cloud, LCP &lt;1.5s, support expert 24/7, CDN Cloudflare Enterprise. <strong>3-4x plus rapide que Bluehost.</strong>
              </p>
            </div>
          </section>

          {/* Before Migration */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Avant de Migrer : Checklist</h2>
            <div className="space-y-2">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">Accédez à votre tableau de bord Bluehost</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">Notez vos identifiants WordPress (optionnel, Kinsta peut accéder)</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">Vérifiez que votre site fonctionne actuellement</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">Préparez une sauvegarde (Kinsta va aussi la créer)</p>
              </div>
            </div>
          </section>

          {/* Step by Step */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Guide Étape par Étape</h2>
            
            <Card className="mb-6">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                  S'inscrire à Kinsta
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Allez à <a href={KINSTA_LINK} target="_blank" rel="noopener" className="text-primary hover:underline">kinsta.com</a></li>
                  <li>2. Cliquez "Essayer Gratuitement" ou "30 Days Free Trial"</li>
                  <li>3. Choisissez un plan (recommandé : Business minimum)</li>
                  <li>4. Remplissez vos coordonnées</li>
                  <li>5. ✅ Vous avez 30 jours gratuits</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                  Demander la Migration à Kinsta
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Connectez-vous au MyKinsta (tableau de bord Kinsta)</li>
                  <li>2. Allez à "Sites" → "Ajouter Site"</li>
                  <li>3. Sélectionnez "Migrer un Site Existant"</li>
                  <li>4. Entrez l'URL de votre site Bluehost</li>
                  <li>5. Sélectionnez la région (France = Europe Ouest)</li>
                  <li>6. 🎯 Kinsta va demander l'accès à Bluehost (ou vous pouvez fournir les credentials)</li>
                </ol>
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded">
                  <p className="text-xs text-amber-900 dark:text-amber-100">
                    💡 <strong>Astuce :</strong> Kinsta va créer une copie de votre site et la tester sur le serveur Kinsta. Vous pouvez la vérifier avant le changement DNS.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                  Kinsta Effectue la Migration
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>⏱️ <strong>Durée :</strong> 15-30 minutes généralement</p>
                  <p>
                    Kinsta va :
                  </p>
                  <ul className="ml-4 space-y-2">
                    <li>• Copier tous vos fichiers WordPress</li>
                    <li>• Copier votre base de données</li>
                    <li>• Copier tous les plugins et thèmes</li>
                    <li>• Reconfigurer la base de données</li>
                    <li>• Tester le site complètement</li>
                  </ul>
                  <p className="mt-3">
                    ✅ Vous recevrez un email une fois la migration terminée.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
                  Tester le Site avant le DNS
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Kinsta vous envoie une URL temporaire (ex: staging-monsite.kinsta.cloud)</li>
                  <li>2. Visitez cette URL et testez complètement :</li>
                  <li className="ml-4">   • Les pages s'affichent correctement ?</li>
                  <li className="ml-4">   • Les formulaires fonctionnent ?</li>
                  <li className="ml-4">   • Les images s'affichent ?</li>
                  <li className="ml-4">   • Les plugins fonctionnent ?</li>
                  <li>3. ✅ Tout bon ? On peut passer au DNS</li>
                </ol>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded">
                  <p className="text-xs text-green-900 dark:text-green-100">
                    ✓ À ce stade, Bluehost continue de servir votre site en direct. Le site temporaire Kinsta est juste une copie pour tester.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">5</div>
                  Changer les Serveurs DNS
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>C'est l'étape finale qui va "basculer" votre site de Bluehost vers Kinsta.</strong></p>
                  
                  <div className="mt-4 bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <p className="mb-2">Les nouveaux serveurs DNS Kinsta (exemple) :</p>
                    <p>ns1.kinsta.com</p>
                    <p>ns2.kinsta.com</p>
                    <p>ns3.kinsta.com</p>
                  </div>

                  <p className="mt-4">Où changer les DNS :</p>
                  <ol className="ml-4 space-y-2">
                    <li>1. Allez chez votre registraire de domaine (ex: OVH, GoDaddy, Gandi, etc.)</li>
                    <li>2. Allez à "Gestion du Domaine" → "Serveurs DNS"</li>
                    <li>3. Remplacez les anciens DNS par les DNS Kinsta</li>
                    <li>4. Sauvegardez</li>
                  </ol>
                </div>
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded">
                  <p className="text-xs text-amber-900 dark:text-amber-100">
                    ⏱️ <strong>Important :</strong> La propagation DNS prend 30 min à 24h (généralement 2-4h). Pendant ce temps, certains visiteurs vont vers Bluehost, d'autres vers Kinsta. C'est normal.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">6</div>
                  Attendre et Vérifier
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Attendez 2-4 heures</li>
                  <li>2. Visitez votre site en direct</li>
                  <li>3. Vérifiez une dernière fois que tout fonctionne</li>
                  <li>4. Testez un formulaire si vous en avez</li>
                  <li>5. ✅ Migration complète !</li>
                </ol>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded">
                  <p className="text-xs text-green-900 dark:text-green-100">
                    Vous pouvez maintenant <strong>résilier Bluehost</strong> en toute sécurité. Votre site est maintenant sur Kinsta, 3-4x plus rapide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* After Migration */}
          <section className="my-10 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Après la Migration : Ce qui Change</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">⚡ Vitesse</p>
                <p className="text-sm text-muted-foreground">
                  Avant : LCP 4-5s | Après : LCP &lt;1.5s
                </p>
              </div>
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">💬 Support</p>
                <p className="text-sm text-muted-foreground">
                  Avant : 24-48h | Après : &lt;2 minutes (24/7)
                </p>
              </div>
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">🔒 Sécurité</p>
                <p className="text-sm text-muted-foreground">
                  Mises à jour auto, sauvegardes 14j, DDoS protection, WAF
                </p>
              </div>
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">📊 Conversions</p>
                <p className="text-sm text-muted-foreground">
                  +20% conversions grâce à la vitesse (étude Google)
                </p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Problèmes Courants &amp; Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Q : Le site n'est pas disponible après le DNS ?</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Réponse :</strong> Attendez 4-24h pour la propagation DNS. Videz le cache du navigateur (Ctrl+Shift+Del). Testez avec un autre navigateur / téléphone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Q : Mon email ne fonctionne plus après la migration ?</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Réponse :</strong> C'est parce que les enregistrements MX ont changé. Kinsta peut configurer les emails. Contactez support Kinsta &lt;2 min de réponse.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Q : Puis-je revenir à Bluehost si ça ne marche pas ?</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Réponse :</strong> Oui, changez les DNS de nouveau. Mais vous ne voudrez pas - Kinsta est tellement meilleur. Garantie satisfait ou remboursé 30 jours.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à Migrer vers la Vitesse ?
            </h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">
              La migration est gratuite. Le support expert aussi. Les 30 premiers jours sont gratuits. Zéro risque, gains énormes.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTAClick('final_cta')}
              data-testid="button-article-migration-final-cta"
            >
              Démarrer la Migration Gratuite
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-xs mt-4 opacity-75">
              Trafic en hausse • Support 24/7 français • 100% sûr
            </p>
          </section>
        </article>
      </main>

      <SEOFooter />
    </div>
  );
}
