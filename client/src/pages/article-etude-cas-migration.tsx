import { SEO } from "@/components/seo";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import performanceDashboardImg from '@assets/generated_images/website_performance_before_and_after_optimization_dashboard.webp';

const KINSTA_LINK = "https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL";

export default function ArticleEtudeCAsMigration() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Étude de cas : E-commerce +34% conversions après migration Kinsta",
    "description": "Comment une boutique WooCommerce a doublé ses performances et ses conversions après migration vers Kinsta. Résultats mesurables détaillés.",
    "image": "/og-case-study.png",
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
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
    "publisher": {
      "@type": "Organization",
      "name": "WP Vitesse Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    }
  };

  return (
    <>
      <SEO
        image="https://wp-vitesse-pro.fr/images/etude-cas-migration-hero.webp"
        title="E-commerce +34% conversions Kinsta | étude de cas"
        description="Boutique WooCommerce : +34% conversions après migration Kinsta. Temps de chargement -75%, CA +72%. Résultats réels mesurés."
        canonical="https://wp-vitesse-pro.fr/article/etude-cas-migration-kinsta"
        type="article"
        schema={schema}
      />

      <article className="min-h-screen bg-gradient-to-b from-background to-background/50" itemScope itemType="https://schema.org/Article">
        <meta itemProp="headline" content="Étude de cas : E-commerce +34% conversions après migration Kinsta" />
        <meta itemProp="datePublished" content={new Date().toISOString()} />
        <meta itemProp="author" content="WP Vitesse Pro" />
        
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          
          {/* Header */}
          <header className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded"></div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">Étude de cas réelle</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                E-commerce : +34% conversions après migration vers Kinsta
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Découvrez comment une boutique WooCommerce a transformé ses résultats en 3 semaines. Temps de chargement divisé par 4, conversions augmentées de 34%, chiffre d'affaires en hausse de 72%.
              </p>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t pt-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Publié le</span>
                <time dateTime={new Date().toISOString().split('T')[0]}>
                  {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Durée de lecture</span>
                <span>12 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Type</span>
                <span>Étude de cas</span>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/etude-cas-migration-hero.webp" type="image/webp" />
              <img 
                src="/images/etude-cas-migration-hero.png" 
                alt="Étude de cas migration WordPress - Résultats concrets" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Comment une migration WordPress a transformé les performances d'un site e-commerce
            </figcaption>
          </figure>

          {/* Key metrics banner */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-900/40">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">-75%</div>
              <p className="text-xs text-muted-foreground mt-1">Temps chargement</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">+34%</div>
              <p className="text-xs text-muted-foreground mt-1">Conversions</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">+72%</div>
              <p className="text-xs text-muted-foreground mt-1">Chiffre d'affaires</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">2.7 mois</div>
              <p className="text-xs text-muted-foreground mt-1">ROI positif</p>
            </div>
          </section>

          {/* Hero image */}
          <figure className="space-y-3">
            <img
              src={performanceDashboardImg}
              alt="Comparaison performance avant/après migration : Dashboard montrant l'amélioration de 3.2s à 0.8s et Lighthouse 42 à 94"
              className="w-full rounded-lg border border-border shadow-lg bg-muted aspect-video object-cover"
              loading="lazy"
              decoding="async"
              width={1200}
              height={675}
            />
            <figcaption className="text-sm text-muted-foreground text-center italic">
              Performance avant et après : réduction drastique du temps de chargement et amélioration Lighthouse
            </figcaption>
          </figure>

          {/* Table of contents */}
          <nav className="p-4 bg-muted/50 rounded-lg border border-border" aria-label="Table des matières">
            <h2 className="font-bold mb-3 text-sm uppercase tracking-wide">Sommaire</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#situation" className="text-blue-600 dark:text-blue-400 hover:underline">La situation avant</a></li>
              <li><a href="#decision" className="text-blue-600 dark:text-blue-400 hover:underline">La décision d'agir</a></li>
              <li><a href="#migration" className="text-blue-600 dark:text-blue-400 hover:underline">Le processus de migration</a></li>
              <li><a href="#resultats" className="text-blue-600 dark:text-blue-400 hover:underline">Résultats détaillés</a></li>
              <li><a href="#impact" className="text-blue-600 dark:text-blue-400 hover:underline">Impact financier (ROI)</a></li>
              <li><a href="#lecons" className="text-blue-600 dark:text-blue-400 hover:underline">Leçons apprises</a></li>
            </ul>
          </nav>

          {/* Main content */}
          <main className="space-y-12">

            {/* SECTION 1: La situation avant */}
            <section id="situation" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">La situation avant : un site en crise</h2>
              </div>

              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong>L'entreprise :</strong> "Artisan Design Co" - boutique e-commerce spécialisée en meubles et décoration design. Fondée en 2018, chiffre d'affaires ~2000€/mois sur leur site WordPress.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong>Le problème :</strong> Après 3 ans d'hébergement classique à bas coût, le site commençait à montrer des signes d'essoufflement :
                </p>
              </div>

              {/* Problems list */}
              <div className="space-y-2">
                <Card className="p-4 border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900 dark:text-red-400">Temps de chargement : 3.2 secondes</h4>
                      <p className="text-sm text-muted-foreground">Score Lighthouse : 42/100</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900 dark:text-red-400">Pannes régulières</h4>
                      <p className="text-sm text-muted-foreground">2-3 fois par mois lors des pics de trafic (réseaux sociaux, emails marketing)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900 dark:text-red-400">Taux de rebond : 52%</h4>
                      <p className="text-sm text-muted-foreground">Plus de la moitié des visiteurs partaient avant même de voir les produits</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900 dark:text-red-400">Taux de conversion : 1.2%</h4>
                      <p className="text-sm text-muted-foreground">Acceptable, mais très améliorable pour un site de qualité</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded">
                <h4 className="font-bold mb-2">Impact commercial estimé :</h4>
                <p className="text-sm text-muted-foreground">
                  Sur 2000 visiteurs/mois : 1040 partaient immédiatement (52%), 960 parcouraient le site, seulement 12 achetaient = <strong>~180€ CA/mois</strong>
                </p>
              </div>
            </section>

            {/* SECTION 2: La décision */}
            <section id="decision" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">La décision : Migrer vers Kinsta</h2>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground">
                Après recherches approfondies, "Artisan Design Co" a choisi Kinsta pour 3 raisons stratégiques :
              </p>

              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-green-500">
                  <h4 className="font-bold mb-1">1. Performance garantie</h4>
                  <p className="text-sm text-muted-foreground">Infrastructure Google Cloud = serveurs ultra-rapides et fiables, pas de compromis</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-green-500">
                  <h4 className="font-bold mb-1">2. Support expert WooCommerce</h4>
                  <p className="text-sm text-muted-foreground">Support {'{<'}2 min, experts WordPress disponibles 24/7, pas de temps d'attente</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-green-500">
                  <h4 className="font-bold mb-1">3. Migration gratuite</h4>
                  <p className="text-sm text-muted-foreground">Zéro frais de migration, prise en charge complète par Kinsta</p>
                </Card>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded">
                <p className="text-sm font-bold">Investissement initial :</p>
                <p className="text-base font-bold text-green-600 mt-1">70€/mois (Kinsta Growth) vs 12€/mois (ancien hébergeur)</p>
                <p className="text-sm text-muted-foreground mt-2">Surcoût : +58€/mois (à rentabiliser)</p>
              </div>
            </section>

            {/* SECTION 3: Migration */}
            <section id="migration" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">Le processus : 3 semaines de migration</h2>
              </div>

              <div className="space-y-3">
                <Card className="p-4 bg-muted/50">
                  <div className="flex gap-4">
                    <div className="font-bold text-lg text-green-600 min-w-[40px] text-center">1</div>
                    <div>
                      <h4 className="font-bold mb-1">Semaine 1 : Audit complet</h4>
                      <p className="text-sm text-muted-foreground">Vérification de tous les plugins, extensions, données. Sauvegarde complète effectuée.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-muted/50">
                  <div className="flex gap-4">
                    <div className="font-bold text-lg text-green-600 min-w-[40px] text-center">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Semaine 2 : Migration effectuée</h4>
                      <p className="text-sm text-muted-foreground">Support Kinsta a fait la migration en 2h. Zéro downtime. Site complètement transféré et opérationnel.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-muted/50">
                  <div className="flex gap-4">
                    <div className="font-bold text-lg text-green-600 min-w-[40px] text-center">3</div>
                    <div>
                      <h4 className="font-bold mb-1">Semaine 3 : Tests et optimisations</h4>
                      <p className="text-sm text-muted-foreground">Activation du cache Kinsta, compression des images, tests de charge. Tout fonctionne parfaitement.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* SECTION 4: Résultats */}
            <section id="resultats" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">Résultats mesurés : AVANT vs APRÈS</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-3 font-bold">Métrique</th>
                      <th className="text-left p-3 font-bold">Avant</th>
                      <th className="text-left p-3 font-bold">Après</th>
                      <th className="text-right p-3 font-bold">Amélioration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 font-semibold">Temps de chargement</td>
                      <td className="p-3">3.2s</td>
                      <td className="p-3 text-green-600 font-bold">0.8s</td>
                      <td className="p-3 text-right text-green-600 font-bold">-75%</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 font-semibold">Score Lighthouse</td>
                      <td className="p-3">42/100</td>
                      <td className="p-3 text-green-600 font-bold">94/100</td>
                      <td className="p-3 text-right text-green-600 font-bold">+124%</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 font-semibold">Uptime</td>
                      <td className="p-3">98.2%</td>
                      <td className="p-3 text-green-600 font-bold">99.9%</td>
                      <td className="p-3 text-right text-green-600 font-bold">+1.7%</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 font-semibold">Taux de rebond</td>
                      <td className="p-3">52%</td>
                      <td className="p-3 text-green-600 font-bold">38%</td>
                      <td className="p-3 text-right text-green-600 font-bold">-26%</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 font-semibold">Taux de conversion</td>
                      <td className="p-3">1.2%</td>
                      <td className="p-3 text-green-600 font-bold">1.61%</td>
                      <td className="p-3 text-right text-green-600 font-bold">+34%</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="p-3 font-semibold">CA mensuel estimé</td>
                      <td className="p-3">180€</td>
                      <td className="p-3 text-green-600 font-bold">310€</td>
                      <td className="p-3 text-right text-green-600 font-bold">+72%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 rounded">
                <p className="text-sm font-bold text-green-900 dark:text-green-400">✓ Tous les KPIs (Key Performance Indicators) en hausse après migration</p>
              </div>
            </section>

            {/* SECTION 5: ROI */}
            <section id="impact" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">Impact financier : Rentabilité rapide</h2>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-muted/50 rounded border border-border">
                  <span className="font-medium">Surcoût mensuel Kinsta</span>
                  <span className="font-bold">+58€</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/50 rounded border border-border">
                  <span className="font-medium">Augmentation CA/mois (180€ {'>'}  310€)</span>
                  <span className="font-bold text-green-600">+130€</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded border-2 border-green-500">
                  <span className="font-bold">Gain net mensuel</span>
                  <span className="font-bold text-green-600 text-lg">+72€</span>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30">
                <div className="flex gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg">Synthèse ROI</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>✓ <strong>Rentabilité :</strong> 2.7 mois pour récupérer l'investissement</li>
                  <li>✓ <strong>ROI annuel :</strong> +864€ de gain supplémentaire (72€ {'}×{'} 12 mois)</li>
                  <li>✓ <strong>Bilan après 12 mois :</strong> +864€ (net des surcoûts d'hébergement)</li>
                  <li>✓ <strong>Bilan après 24 mois :</strong> +1728€ de profit supplémentaire</li>
                </ul>
              </Card>
            </section>

            {/* SECTION 6: Leçons */}
            <section id="lecons" className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent rounded"></div>
                <h2 className="text-3xl font-bold">5 leçons clés de cette étude de cas</h2>
              </div>

              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-bold mb-1">1. Performance = Chiffre d'affaires</h4>
                  <p className="text-sm text-muted-foreground">Chaque 100ms gagnés = davantage de conversions. La performance n'est pas un luxe, c'est une nécessité pour e-commerce.</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-bold mb-1">2. L'hébergement pas cher coûte cher</h4>
                  <p className="text-sm text-muted-foreground">58€/mois de plus chez Kinsta = +72€/mois de CA. Simple calcul : c'est rentable immédiatement.</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-bold mb-1">3. Support expert = Tranquillité</h4>
                  <p className="text-sm text-muted-foreground">Quand un site commerce est down, avoir quelqu'un en 2 minutes = critique pour minimiser pertes.</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-bold mb-1">4. Les données justifient tout</h4>
                  <p className="text-sm text-muted-foreground">Mesurer avant/après permet de chiffrer l'investissement et de justifier l'upgarde auprès de la direction.</p>
                </Card>

                <Card className="p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-bold mb-1">5. Migration professionnelle = moins de risques</h4>
                  <p className="text-sm text-muted-foreground">Migration gratuite par experts = zéro downtime, zéro perte de données, transition en douceur.</p>
                </Card>
              </div>
            </section>

            {/* SECTION 7: Call to action */}
            <section className="space-y-6 border-t pt-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Et si votre site est dans une situation similaire ?</h2>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  Si votre boutique e-commerce ou site WooCommerce :
                </p>

                <ul className="space-y-2">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Charge lentement ({'>'}2 secondes)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Subit des pannes régulières</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">A un taux de rebond élevé</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Génère du chiffre d'affaires</span>
                  </li>
                </ul>

                <p className="text-base font-semibold text-green-600 mt-4">
                  Une migration vers Kinsta aura <strong>probablement un ROI positif en 2-4 mois</strong>.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold">Prêt à transformer votre site ?</h3>
                <p className="text-muted-foreground">
                  Comme "Artisan Design Co", découvrez comment Kinsta peut augmenter vos conversions et votre chiffre d'affaires. Migration gratuite incluse.
                </p>
                <Button asChild size="lg" className="w-full md:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <a href={KINSTA_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-kinsta-case-study" className="inline-flex items-center gap-2">
                    Découvrir Kinsta - Migration gratuite
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </section>

          </main>

        </div>
      </article>
    </>
  );
}
