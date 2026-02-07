import { SEO } from "@/components/seo";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/woocommerce/?kaid=CYISLEFCEOAL";

export default function ArticleMigrationWooCommerceKinsta() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Migrer WooCommerce vers Kinsta",
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
    "step": [
      {
        "@type": "HowToStep",
        "name": "Préparation du site",
        "text": "Vérifier les sauvegardes et la liste des plugins"
      },
      {
        "@type": "HowToStep",
        "name": "Demander la migration gratuite",
        "text": "Contacter support Kinsta pour organiser la migration"
      },
      {
        "@type": "HowToStep",
        "name": "Test et validation",
        "text": "Vérifier que tout fonctionne en staging"
      }
    ]
  };

  return (
    <>
      <SEO
        image="https://wp-vitesse-pro.fr/images/migration-woocommerce-kinsta-hero.webp"
        title="Migration WooCommerce vers Kinsta 2026 : guide"
        description="Guide pas à pas pour migrer votre boutique WooCommerce vers Kinsta. Migration gratuite, zéro downtime, support expert."
        canonical="https://wp-vitesse-pro.fr/article/migration-woocommerce-kinsta"
        type="article"
        schema={schema}
      />

      <article className="min-h-screen bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm text-blue-700 dark:text-blue-300 mb-4">
              Guide Migration
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Migration WooCommerce vers Kinsta : Guide complet 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Migrez votre e-commerce sans perte de données. Migration gratuite, zéro downtime, support expert inclus.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>5 déc. 2026</span>
              <span>•</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          {/* Quick Facts */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">Gratuit</div>
                <p className="text-sm text-muted-foreground">Migration incluse</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">0h</div>
                <p className="text-sm text-muted-foreground">Zéro downtime</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <p className="text-sm text-muted-foreground">Support expert</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">30 min</div>
                <p className="text-sm text-muted-foreground">En moyenne</p>
              </div>
            </div>
          </Card>

          {/* Content */}
          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/migration-woocommerce-kinsta-hero.webp" type="image/webp" />
              <img 
                src="/images/migration-woocommerce-kinsta-hero.png" 
                alt="Migration WooCommerce vers Kinsta" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Migrez votre boutique WooCommerce vers Kinsta pour des performances optimales
            </figcaption>
          </figure>

          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-3xl font-bold mt-8 mb-4">Pourquoi migrer vers Kinsta ?</h2>
            <p className="text-muted-foreground mb-4">
              Si votre boutique WooCommerce tourne lentement, subit des pannes ou connaît des ralentissements lors des pics de trafic, une migration vers Kinsta peut transformer votre e-commerce.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>Performance</strong> : Pages 50-70% plus rapides
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>Uptime</strong> : 99.9% garanti (vs 98-99% ailleurs)
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>Sécurité</strong> : Scans malware, sauvegardes horaires, protection DDoS
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>Support</strong> : Experts WooCommerce, réponse &lt;2 min
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4">Étape 1 : Préparation avant la migration</h2>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">Audit de votre boutique WooCommerce</h3>
            <p className="text-muted-foreground mb-4">
              Avant de migrer, faites un audit pour éviter les problèmes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Nombre de produits et commandes</li>
              <li>Liste des extensions/plugins actifs</li>
              <li>Taille de la base de données</li>
              <li>Thème WooCommerce utilisé</li>
              <li>Domaines/sous-domaines utilisés</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Sauvegarder votre site</h3>
            <p className="text-muted-foreground mb-4">
              Même si Kinsta gère la migration, une sauvegarde locale est prudente :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Via UpdraftPlus ou BackWPup (plugin gratuit)</li>
              <li>Ou demander une sauvegarde à votre hôteur actuel</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Étape 2 : Commander la migration gratuite</h2>
            
            <p className="text-muted-foreground mb-4">
              Kinsta propose la migration gratuite pour tous les nouveaux clients. Voici comment :
            </p>

            <Card className="p-6 bg-muted/50 mb-6">
              <ol className="space-y-4">
                <li>
                  <strong className="text-lg">1. Créer un compte Kinsta</strong>
                  <p className="text-muted-foreground">Choisir un forfait adapté à votre trafic</p>
                </li>
                <li>
                  <strong className="text-lg">2. Contacter le support Kinsta</strong>
                  <p className="text-muted-foreground">Chat en direct : "Je souhaite migrer mon site depuis [hôteur actuel]"</p>
                </li>
                <li>
                  <strong className="text-lg">3. Fournir les accès</strong>
                  <p className="text-muted-foreground">FTP/SSH ou cPanel de votre hôteur actuel</p>
                </li>
                <li>
                  <strong className="text-lg">4. Kinsta effectue la migration</strong>
                  <p className="text-muted-foreground">En général 30 min à 2h selon la taille</p>
                </li>
                <li>
                  <strong className="text-lg">5. Test en staging</strong>
                  <p className="text-muted-foreground">Vérifier que tout fonctionne avant d'activer</p>
                </li>
              </ol>
            </Card>

            <h2 className="text-3xl font-bold mt-8 mb-4">Étape 3 : Pointage DNS et go-live</h2>
            
            <p className="text-muted-foreground mb-4">
              Une fois la migration testée, vous pointez votre domaine vers Kinsta :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Kinsta vous fournit les serveurs DNS</li>
              <li>Vous les configurez chez votre registrar (OVH, Gandi, etc.)</li>
              <li>Propagation DNS : 24-48h (généralement 5-10 min)</li>
              <li>Votre site est live sur Kinsta !</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Plugins WooCommerce compatible Kinsta</h2>
            
            <p className="text-muted-foreground mb-4">
              La plupart des plugins WooCommerce fonctionnent sans problème sur Kinsta. Voici ceux qu'on recommande :
            </p>

            <Card className="p-6 bg-muted/50 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-green-500">Recommandés :</strong>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• WooCommerce Subscriptions</li>
                    <li>• WooCommerce PDF Invoices</li>
                    <li>• Yoast SEO</li>
                    <li>• Elementor Pro</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-orange-500">À vérifier :</strong>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Cache plugins (Kinsta gère le cache)</li>
                    <li>• Plugins de backup (non nécessaires)</li>
                    <li>• Plugins d'optimisation (Kinsta optimisé)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-8 mb-4">Après la migration : Optimisations</h2>
            
            <p className="text-muted-foreground mb-4">
              Votre site est maintenant sur Kinsta. Voici les optimisations recommandées :
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-4">
                <h4 className="font-bold mb-2">1. Activer le cache Kinsta</h4>
                <p className="text-sm text-muted-foreground">
                  Dans le dashboard Kinsta, activer les caches (Redis, Page Cache).
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-bold mb-2">2. Configurer Cloudflare</h4>
                <p className="text-sm text-muted-foreground">
                  Cloudflare Enterprise inclus = CDN global + DDoS + optimisation images.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-bold mb-2">3. Optimiser les images</h4>
                <p className="text-sm text-muted-foreground">
                  Plugin : Imagify ou Smush Pro pour réduire taille sans perte qualité.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-bold mb-2">4. Configurer les emails</h4>
                <p className="text-sm text-muted-foreground">
                  Vérifier SMTP, SPF/DKIM pour que les emails de commandes arrivent.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4">Foire aux questions</h2>
            
            <Card className="p-4 mb-3">
              <h4 className="font-bold mb-2">La migration affectera-t-elle mon SEO ?</h4>
              <p className="text-sm text-muted-foreground">
                Non. Kinsta gère les redirects 301 automatiquement. Votre SEO ne sera pas impacté.
              </p>
            </Card>

            <Card className="p-4 mb-3">
              <h4 className="font-bold mb-2">Combien de temps pour la migration ?</h4>
              <p className="text-sm text-muted-foreground">
                En général 30 min à 2h selon la taille de votre site.
              </p>
            </Card>

            <Card className="p-4 mb-3">
              <h4 className="font-bold mb-2">Que se passe-t-il si quelque chose ne fonctionne pas ?</h4>
              <p className="text-sm text-muted-foreground">
                Support Kinsta vous aide à corriger. Vous avez 30 jours pour être satisfait ou obtenir un remboursement.
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-bold mb-2">Quel forfait choisir pour WooCommerce ?</h4>
              <p className="text-sm text-muted-foreground">
                Minimum : forfait Growth (70€/mois). Pour plus de 50 000 produits ou beaucoup de trafic : Pro (140€/mois).
              </p>
            </Card>

            <h2 className="text-3xl font-bold mt-8 mb-4">Résultats typiques après migration</h2>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between p-3 bg-muted/50 rounded">
                <span>Performance (temps de chargement)</span>
                <span className="text-green-500 font-bold">-50%</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded">
                <span>Taux de conversion</span>
                <span className="text-green-500 font-bold">+10-20%</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded">
                <span>Uptime</span>
                <span className="text-green-500 font-bold">99.9%</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded">
                <span>Pannes</span>
                <span className="text-green-500 font-bold">~0</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-blue-500/20 mb-12">
            <h3 className="text-2xl font-bold mb-3">Prêt à migrer votre WooCommerce ?</h3>
            <p className="text-muted-foreground mb-6">
              Migration gratuite incluse. Profitez d'une performance 50% plus rapide et d'un uptime de 99.9%.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-kinsta-woocommerce">
                Démarrer la migration gratuite
              </a>
            </Button>
          </Card>
        </div>
      </article>
    </>
  );
}
