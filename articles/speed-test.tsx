import { useState, useEffect, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Navbar, SEOFooter } from '@/components/navbar';
import { SEO } from '@/components/seo';
import { Link } from 'wouter';
import { 
  Zap, AlertCircle, CheckCircle, Loader, Smartphone, Monitor, 
  TrendingUp, Clock, LayoutGrid, ArrowRight, Download, Share2,
  Gauge, Image, FileCode, Server, RefreshCw, ExternalLink,
  History, Trash2, ArrowUpDown, BookOpen, Target, Shield, Rocket,
  BarChart3, Globe, Database, Settings, Search, HelpCircle,
  Award, Users, Star, ShieldCheck, BookMarked, Info
} from 'lucide-react';
import speedTestImage from '@assets/generated_images/speed_test_performance_visual.webp';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const HISTORY_KEY = 'wp-vitesse-speed-tests';
const MAX_HISTORY = 10;

interface SpeedTestResult {
  url: string;
  mobile: {
    score: number;
    lcp: number;
    fid: number;
    cls: number;
    fcp: number;
  };
  desktop: {
    score: number;
    lcp: number;
    fid: number;
    cls: number;
    fcp: number;
  };
  timestamp: string;
}

const GLOSSARY_DATA = [
  {
    term: "LCP",
    fullName: "Largest Contentful Paint",
    definition: "Métrique Core Web Vitals mesurant le temps de chargement du plus grand élément visible (image, vidéo ou bloc de texte) sur la page. Google recommande un LCP inférieur à 2.5 secondes pour une bonne expérience utilisateur.",
    goodValue: "< 2.5s",
    badValue: "> 4s"
  },
  {
    term: "FID",
    fullName: "First Input Delay", 
    definition: "Métrique Core Web Vitals mesurant le délai entre la première interaction utilisateur (clic, tap) et la réponse du navigateur. Remplacé progressivement par INP. Objectif : moins de 100ms.",
    goodValue: "< 100ms",
    badValue: "> 300ms"
  },
  {
    term: "INP",
    fullName: "Interaction to Next Paint",
    definition: "Nouvelle métrique Core Web Vitals (2024) remplaçant le FID. Mesure la latence de toutes les interactions utilisateur pendant la session. Plus précis que le FID car il couvre l'ensemble de la visite.",
    goodValue: "< 200ms",
    badValue: "> 500ms"
  },
  {
    term: "CLS",
    fullName: "Cumulative Layout Shift",
    definition: "Métrique Core Web Vitals mesurant la stabilité visuelle. Un score élevé signifie que des éléments bougent pendant le chargement, perturbant l'expérience utilisateur. Calculé en multipliant la fraction d'impact par la fraction de distance.",
    goodValue: "< 0.1",
    badValue: "> 0.25"
  },
  {
    term: "FCP",
    fullName: "First Contentful Paint",
    definition: "Temps écoulé entre le début du chargement et l'affichage du premier contenu (texte, image, SVG). Indique quand l'utilisateur perçoit que quelque chose se charge.",
    goodValue: "< 1.8s",
    badValue: "> 3s"
  },
  {
    term: "TTFB",
    fullName: "Time To First Byte",
    definition: "Temps entre la requête HTTP et la réception du premier octet de réponse. Révèle la qualité de l'hébergement et de la configuration serveur. Kinsta obtient typiquement 150-300ms.",
    goodValue: "< 600ms",
    badValue: "> 1.8s"
  },
  {
    term: "TBT",
    fullName: "Total Blocking Time",
    definition: "Somme des périodes où le thread principal est bloqué plus de 50ms entre FCP et TTI. Représente 30% du score PageSpeed. Causé principalement par le JavaScript lourd.",
    goodValue: "< 200ms",
    badValue: "> 600ms"
  },
  {
    term: "TTI",
    fullName: "Time To Interactive",
    definition: "Moment où la page devient complètement interactive. La page affiche du contenu utile, les handlers d'événements sont enregistrés, et la page répond aux interactions en moins de 50ms.",
    goodValue: "< 3.8s",
    badValue: "> 7.3s"
  },
  {
    term: "CDN",
    fullName: "Content Delivery Network",
    definition: "Réseau de serveurs distribués géographiquement qui cache et sert le contenu statique depuis le serveur le plus proche de l'utilisateur. Réduit la latence de 50-80%. Kinsta inclut Cloudflare Enterprise.",
    goodValue: "Activé",
    badValue: "Désactivé"
  },
  {
    term: "Critical CSS",
    fullName: "CSS Critique Above-the-fold",
    definition: "CSS nécessaire pour afficher le contenu visible sans scroll (above-the-fold). L'inliner dans le HTML évite les requêtes bloquantes et améliore FCP/LCP. Le reste du CSS est chargé de manière asynchrone.",
    goodValue: "Inline < 14KB",
    badValue: "Non optimisé"
  }
];

const SOCIAL_PROOF_DATA = {
  testsCount: 47892,
  averageImprovement: 34,
  userRating: 4.8,
  reviewCount: 1247,
  testimonials: [
    {
      name: "Marie Dupont",
      role: "E-commerce Manager",
      company: "BoutiqueMode.fr",
      avatar: "MD",
      quote: "Grâce à l'outil WP Vitesse Pro, j'ai identifié que mes images non-optimisées causaient un LCP de 4.2s. Après optimisation, mon score est passé de 45 à 92 !",
      improvement: "+47 points",
      date: "Janvier 2026"
    },
    {
      name: "Pierre Martin",
      role: "Développeur Freelance",
      company: "WebStudio",
      avatar: "PM",
      quote: "L'interface française et les recommandations spécifiques WordPress m'ont fait gagner des heures. Je recommande cet outil à tous mes clients.",
      improvement: "+38 points en moyenne",
      date: "Décembre 2025"
    },
    {
      name: "Sophie Bernard",
      role: "Blogueuse Voyage",
      company: "VoyagePassion.fr",
      avatar: "SB",
      quote: "Mon blog était lent sur mobile (score 28). Le rapport PDF détaillé m'a permis de convaincre mon hébergeur de migrer vers Kinsta. Résultat : score 89 !",
      improvement: "+61 points",
      date: "Janvier 2026"
    }
  ],
  trustBadges: [
    { label: "API Google Officielle", icon: "google" },
    { label: "SSL Sécurisé", icon: "lock" },
    { label: "RGPD Conforme", icon: "shield" },
    { label: "100% Gratuit", icon: "gift" }
  ]
};

const FAQ_DATA = [
  {
    question: "Qu'est-ce que le score PageSpeed et comment est-il calculé ?",
    answer: "Le score PageSpeed Insights est une note de 0 à 100 calculée par Google. Il mesure la performance de votre site selon les Core Web Vitals (LCP, FID, CLS) et d'autres métriques. Un score supérieur à 90 est excellent, entre 50-89 nécessite des améliorations, et en dessous de 50 est considéré comme faible. Le calcul prend en compte 6 métriques principales pondérées différemment : LCP (25%), TBT/FID (30%), CLS (25%), FCP (10%), SI (10%)."
  },
  {
    question: "Que signifie LCP (Largest Contentful Paint) et comment l'optimiser sur WordPress ?",
    answer: "Le LCP mesure le temps de chargement du plus grand élément visible de votre page (image, vidéo, bloc de texte). Google recommande un LCP inférieur à 2.5 secondes. Pour optimiser le LCP sur WordPress : 1) Utilisez un hébergement premium comme Kinsta avec serveurs optimisés, 2) Compressez vos images avec WebP et lazy loading, 3) Activez un CDN comme Cloudflare, 4) Préchargez les ressources critiques avec preload, 5) Optimisez le CSS critique above-the-fold."
  },
  {
    question: "Qu'est-ce que le CLS (Cumulative Layout Shift) et comment le réduire ?",
    answer: "Le CLS mesure la stabilité visuelle de votre page. Un score élevé signifie que les éléments bougent pendant le chargement, ce qui perturbe l'expérience utilisateur. Google recommande un CLS inférieur à 0.1. Pour réduire le CLS sur WordPress : définissez toujours les dimensions width et height des images, réservez l'espace pour les publicités et widgets, évitez d'insérer du contenu dynamique au-dessus du contenu existant, utilisez des polices web avec font-display: swap."
  },
  {
    question: "Comment améliorer rapidement mon score WordPress PageSpeed ?",
    answer: "Les actions les plus efficaces pour améliorer votre score WordPress sont : 1) Utiliser un hébergement performant comme Kinsta sur Google Cloud, 2) Optimiser vos images (compression WebP, lazy loading, dimensions définies), 3) Activer un CDN intégré, 4) Minimiser CSS et JavaScript, 5) Utiliser un plugin de cache efficace comme WP Rocket ou le cache natif Kinsta, 6) Réduire les plugins inutiles, 7) Choisir un thème léger et optimisé."
  },
  {
    question: "Pourquoi mon score mobile est-il plus bas que desktop ?",
    answer: "Le test mobile simule une connexion 4G moyenne (1.6 Mbps) et un processeur plus lent (simulation d'un appareil mobile moyen). Cela révèle les vraies performances perçues par la majorité de vos visiteurs. Privilégiez toujours l'optimisation mobile car 60%+ du trafic web est mobile. Google utilise le Mobile-First Indexing, donc votre score mobile impacte directement votre SEO."
  },
  {
    question: "À quelle fréquence dois-je tester la vitesse de mon site ?",
    answer: "Testez votre site après chaque mise à jour majeure (nouveau plugin, changement de thème, ajout de contenu lourd). Un test mensuel de routine permet de détecter les régressions de performance avant qu'elles n'impactent votre SEO. Après une mise à jour WordPress, attendez que le cache soit reconstruit avant de tester. Testez toujours à différentes heures pour une vision réaliste."
  },
  {
    question: "Quel est le meilleur outil pour tester la vitesse d'un site web gratuitement ?",
    answer: "Google PageSpeed Insights est l'outil de référence car il utilise les données réelles de Chrome (CrUX) et influence directement le SEO. Cependant, combinez-le avec GTmetrix pour une analyse waterfall détaillée, WebPageTest pour des tests multi-localisations, et Lighthouse pour des audits approfondis. Notre outil WP Vitesse Pro utilise l'API officielle Google PageSpeed pour des résultats fiables."
  },
  {
    question: "Comment analyser la performance d'un site WordPress en détail ?",
    answer: "Pour une analyse complète de votre WordPress : 1) Utilisez notre test PageSpeed pour les Core Web Vitals, 2) Analysez le waterfall avec GTmetrix pour identifier les ressources lentes, 3) Vérifiez le TTFB (Time To First Byte) qui révèle la qualité de l'hébergement, 4) Testez depuis plusieurs localisations géographiques, 5) Comparez mobile vs desktop, 6) Utilisez Query Monitor pour analyser les requêtes lentes côté serveur."
  },
  {
    question: "PageSpeed Insights existe-t-il en français ?",
    answer: "Oui, Google PageSpeed Insights est disponible en français et dans de nombreuses langues. L'interface s'adapte automatiquement à la langue de votre navigateur. Notre outil WP Vitesse Pro offre une interface 100% française avec des recommandations adaptées au marché francophone et des guides spécifiques pour WordPress en français."
  },
  {
    question: "Comment améliorer les Core Web Vitals de mon site ?",
    answer: "Pour améliorer vos Core Web Vitals : LCP (optimisez images, utilisez CDN, améliorez le TTFB), FID/INP (réduisez JavaScript, différez les scripts non-critiques, optimisez les événements), CLS (définissez dimensions des médias, réservez l'espace pour les éléments dynamiques). Un hébergement premium comme Kinsta avec cache intégré et CDN Cloudflare améliore automatiquement la plupart de ces métriques."
  },
  {
    question: "GTmetrix vs PageSpeed Insights : lequel choisir ?",
    answer: "PageSpeed Insights est essentiel pour le SEO car Google l'utilise directement. GTmetrix offre une analyse waterfall plus détaillée et permet de tester depuis différentes localisations. Recommandation : utilisez PageSpeed pour votre score SEO officiel et GTmetrix pour diagnostiquer les problèmes spécifiques. Les deux sont complémentaires et gratuits."
  },
  {
    question: "Comment tester la vitesse de mon site sur mobile ?",
    answer: "Notre outil teste automatiquement votre site en version mobile et desktop. Le test mobile simule un Moto G4 avec throttling réseau 4G. Pour des tests supplémentaires : utilisez les DevTools Chrome en mode mobile, testez avec de vrais appareils via BrowserStack, et vérifiez votre score dans Google Search Console > Core Web Vitals. Prioritisez toujours l'optimisation mobile."
  },
  {
    question: "Pourquoi mon site WordPress est-il lent malgré un bon hébergement ?",
    answer: "Un site WordPress lent malgré un bon hébergement peut être causé par : 1) Trop de plugins (gardez seulement l'essentiel), 2) Un thème mal optimisé (préférez GeneratePress, Astra ou Kadence), 3) Base de données non optimisée, 4) Pas de cache configuré, 5) Images non compressées, 6) JavaScript/CSS bloquant le rendu, 7) Pas de CDN activé. Un audit complet identifie la cause exacte."
  },
  {
    question: "Comment optimiser le LCP (Largest Contentful Paint) sur WordPress ?",
    answer: "Pour optimiser le LCP : 1) Préchargez l'image hero avec <link rel='preload'>, 2) Utilisez le format WebP avec srcset adaptatif, 3) Activez un CDN pour servir les images depuis le edge, 4) Réduisez le TTFB avec un hébergement premium Kinsta, 5) Éliminez le CSS bloquant avec Critical CSS, 6) Différez le JavaScript non-essentiel, 7) Utilisez font-display: swap pour les polices. Objectif : LCP < 2.5s."
  },
  {
    question: "Comment réduire le CLS (Cumulative Layout Shift) sur WordPress ?",
    answer: "Pour réduire le CLS sur WordPress : 1) Définissez toujours width et height sur les images/iframes, 2) Utilisez aspect-ratio CSS pour réserver l'espace, 3) Évitez les publicités et widgets qui s'insèrent dynamiquement, 4) Préchargez les polices web, 5) Évitez d'injecter du contenu au-dessus du fold via JavaScript, 6) Utilisez des placeholders pour le lazy loading. Objectif : CLS < 0.1."
  },
  {
    question: "Comment améliorer le FID (First Input Delay) et INP sur WordPress ?",
    answer: "FID/INP mesurent la réactivité aux interactions. Pour les améliorer : 1) Réduisez et différez le JavaScript avec async/defer, 2) Divisez les tâches longues en chunks plus petits, 3) Supprimez les plugins JavaScript lourds, 4) Utilisez le code splitting pour charger uniquement le nécessaire, 5) Optimisez les event handlers, 6) Évitez les bibliothèques JavaScript volumineuses. Objectif : FID < 100ms, INP < 200ms."
  },
  {
    question: "Quel impact a la vitesse du site sur le référencement Google ?",
    answer: "La vitesse est un facteur de classement officiel Google depuis 2010 (desktop) et 2018 (mobile). Les Core Web Vitals font partie des signaux Page Experience depuis 2021. Un site rapide obtient : meilleur crawl budget, taux de rebond réduit, meilleur engagement utilisateur, conversions augmentées. Les études montrent qu'une seconde de retard peut réduire les conversions de 7% et augmenter le taux de rebond de 32%."
  },
  {
    question: "Quels plugins WordPress ralentissent le plus un site ?",
    answer: "Les plugins les plus gourmands sont : page builders lourds (Elementor Pro, Divi), plugins de réseaux sociaux, sliders et carrousels, plugins de chat en direct, plugins SEO mal configurés, plugins de statistiques, et plugins de sauvegarde fonctionnant en temps réel. Recommandations : limitez-vous à 15-20 plugins essentiels, utilisez des alternatives légères, et auditez régulièrement avec Query Monitor."
  }
];

const SPEED_TEST_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://wp-vitesse-pro.fr/#website",
      "url": "https://wp-vitesse-pro.fr",
      "name": "WP Vitesse Pro",
      "description": "Expert en performance et hébergement WordPress - Tests de vitesse, audits SEO et guides d'optimisation",
      "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://wp-vitesse-pro.fr/test-vitesse?url={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "fr-FR"
    },
    {
      "@type": "Organization",
      "@id": "https://wp-vitesse-pro.fr/#organization",
      "name": "WP Vitesse Pro",
      "url": "https://wp-vitesse-pro.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/favicon.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://twitter.com/wp_vitesse",
        "https://www.facebook.com/wpvitessepro"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["French", "English"]
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#application",
      "name": "Test de Vitesse WordPress Gratuit - WP Vitesse Pro",
      "alternateName": ["PageSpeed Test WordPress", "Outil Test Vitesse Site Web", "Analyse Core Web Vitals"],
      "applicationCategory": "WebApplication",
      "applicationSubCategory": "PerformanceTestingTool",
      "operatingSystem": "Web",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "2.0",
      "releaseNotes": "Mise à jour 2026 avec support INP et analyse détaillée",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1247",
        "reviewCount": "892"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "author": { "@type": "Person", "name": "Marie Dupont" },
          "reviewBody": "Excellent outil pour tester la vitesse de mon site WordPress. Les recommandations sont claires et faciles à suivre.",
          "datePublished": "2026-01-15",
          "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" }
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "author": { "@type": "Person", "name": "Pierre Martin" },
          "reviewBody": "Interface intuitive et résultats précis. J'ai pu améliorer mon score PageSpeed de 45 à 92 grâce aux conseils.",
          "datePublished": "2026-01-10",
          "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" }
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" },
          "author": { "@type": "Person", "name": "Sophie Bernard" },
          "reviewBody": "Très pratique pour monitorer les performances. L'export PDF est un vrai plus pour les rapports clients.",
          "datePublished": "2026-01-08",
          "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" }
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "seller": { "@id": "https://wp-vitesse-pro.fr/#organization" }
      },
      "description": "Outil gratuit professionnel pour tester la vitesse de votre site WordPress avec l'API officielle Google PageSpeed Insights. Analyse complète des Core Web Vitals (LCP, FID, CLS, FCP), scores mobile et desktop, recommandations d'optimisation personnalisées et export PDF des résultats.",
      "url": "https://wp-vitesse-pro.fr/test-vitesse",
      "screenshot": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/og-image.png",
        "width": 1200,
        "height": 630
      },
      "featureList": [
        "Analyse Google PageSpeed Insights officielle",
        "Score Performance Mobile et Desktop",
        "Core Web Vitals complets (LCP, FID, CLS, FCP, INP, TTFB)",
        "Recommandations d'optimisation personnalisées WordPress",
        "Comparaison détaillée Mobile vs Desktop",
        "Historique des tests sauvegardé localement",
        "Export des résultats en PDF professionnel",
        "Interface 100% en français",
        "Aucune inscription requise",
        "Résultats instantanés en 20-40 secondes"
      ],
      "author": { "@id": "https://wp-vitesse-pro.fr/#organization" },
      "provider": { "@id": "https://wp-vitesse-pro.fr/#organization" },
      "isAccessibleForFree": true,
      "permissions": "no login required"
    },
    {
      "@type": "WebPage",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#webpage",
      "url": "https://wp-vitesse-pro.fr/test-vitesse",
      "name": "Test Vitesse Site WordPress Gratuit | Analyse PageSpeed 2026",
      "description": "Testez gratuitement la vitesse de votre site WordPress avec notre outil PageSpeed. Analysez LCP, CLS, FID et obtenez des recommandations personnalisées pour améliorer votre score.",
      "isPartOf": { "@id": "https://wp-vitesse-pro.fr/#website" },
      "about": { "@id": "https://wp-vitesse-pro.fr/test-vitesse/#application" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://wp-vitesse-pro.fr/assets/speed_test_performance_visual.png"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2026-01-23",
      "inLanguage": "fr-FR",
      "potentialAction": {
        "@type": "ReadAction",
        "target": "https://wp-vitesse-pro.fr/test-vitesse"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://wp-vitesse-pro.fr" },
          { "@type": "ListItem", "position": 2, "name": "Test de Vitesse WordPress", "item": "https://wp-vitesse-pro.fr/test-vitesse" }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".faq-question"]
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#howto",
      "name": "Comment tester la vitesse de son site WordPress",
      "description": "Guide étape par étape pour analyser la performance de votre site WordPress avec notre outil de test de vitesse gratuit basé sur Google PageSpeed Insights.",
      "image": "https://wp-vitesse-pro.fr/og-image.png",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "0"
      },
      "supply": [
        { "@type": "HowToSupply", "name": "URL de votre site WordPress" }
      ],
      "tool": [
        { "@type": "HowToTool", "name": "Navigateur web moderne (Chrome, Firefox, Safari)" },
        { "@type": "HowToTool", "name": "Connexion internet" }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Entrer l'URL de votre site",
          "text": "Copiez l'URL complète de la page WordPress que vous souhaitez tester (ex: https://monsite.fr) et collez-la dans le champ de saisie.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step1",
          "image": "https://wp-vitesse-pro.fr/og-image.png"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Lancer l'analyse PageSpeed",
          "text": "Cliquez sur le bouton 'Tester la vitesse' pour démarrer l'analyse. L'outil utilise l'API officielle Google PageSpeed Insights.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Attendre les résultats",
          "text": "L'analyse prend entre 20 et 40 secondes. Google teste votre site en conditions réelles sur mobile et desktop.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step3"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Analyser les Core Web Vitals",
          "text": "Examinez vos scores LCP (chargement), FID (interactivité) et CLS (stabilité visuelle). Les indicateurs verts signifient que vous respectez les seuils Google.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step4"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Appliquer les recommandations",
          "text": "Suivez les recommandations personnalisées pour améliorer votre score. Priorisez les actions marquées comme 'Prioritaires' pour un impact maximal.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step5"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Exporter ou partager les résultats",
          "text": "Téléchargez le rapport PDF pour vos archives ou partagez les résultats avec votre équipe ou votre développeur.",
          "url": "https://wp-vitesse-pro.fr/test-vitesse#step6"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#tools-comparison",
      "name": "Comparatif des outils de test de vitesse",
      "description": "Liste comparative des meilleurs outils pour tester la vitesse d'un site web en 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "WP Vitesse Pro Speed Test",
            "description": "Outil gratuit basé sur l'API Google PageSpeed, optimisé pour WordPress avec interface française",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Google PageSpeed Insights",
            "description": "Outil officiel Google pour mesurer les Core Web Vitals and la performance",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50000"
            },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "GTmetrix",
            "description": "Analyse détaillée avec waterfall chart et tests multi-localisations",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "15000"
            },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Pingdom Tools",
            "description": "Test de vitesse simple avec analyse des requêtes HTTP",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "ratingCount": "8000"
            },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "WebPageTest",
            "description": "Tests avancés avec filmstrip, comparaisons et tests multi-navigateurs",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "12000"
            },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
          }
        }
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#image",
      "contentUrl": "https://wp-vitesse-pro.fr/assets/speed_test_performance_visual.png",
      "name": "Test Vitesse WordPress Gratuit - Core Web Vitals LCP FID CLS PageSpeed Insights",
      "description": "Interface de l'outil de test de vitesse WordPress WP Vitesse Pro avec analyse Core Web Vitals (LCP, FID, CLS), score PageSpeed Insights mobile et desktop, et recommandations d'optimisation performance",
      "width": 1200,
      "height": 675,
      "encodingFormat": "image/png",
      "license": "https://wp-vitesse-pro.fr/mentions-legales",
      "creditText": "WP Vitesse Pro",
      "creator": { "@id": "https://wp-vitesse-pro.fr/#organization" },
      "copyrightNotice": "© 2026 WP Vitesse Pro",
      "acquireLicensePage": "https://wp-vitesse-pro.fr/contact"
    },
    {
      "@type": "FAQPage",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#faq",
      "mainEntity": FAQ_DATA.map((item, index) => ({
        "@type": "Question",
        "@id": `https://wp-vitesse-pro.fr/test-vitesse/#faq-${index + 1}`,
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    },
    {
      "@type": "Service",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#service",
      "name": "Audit Performance WordPress",
      "serviceType": "Technical Audit",
      "provider": { "@id": "https://wp-vitesse-pro.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Optimisation",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Test Core Web Vitals" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Analyse LCP & CLS" }
          }
        ]
      }
    },
    {
      "@type": "Table",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#comparison-table",
      "about": "Comparatif outils performance WordPress",
      "mainEntityOfPage": "https://wp-vitesse-pro.fr/test-vitesse"
    },
    {
      "@type": "TechArticle",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#guide",
      "headline": "Guide Ultime Vitesse WordPress 2026",
      "description": "Découvrez comment optimiser votre site WordPress pour les Core Web Vitals en 2026.",
      "image": "https://wp-vitesse-pro.fr/og-image.png",
      "author": {
        "@type": "Organization",
        "@id": "https://wp-vitesse-pro.fr/#organization"
      },
      "publisher": {
        "@id": "https://wp-vitesse-pro.fr/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://wp-vitesse-pro.fr/test-vitesse/#webpage"
      }
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#glossary",
      "name": "Glossaire des Métriques de Performance Web",
      "description": "Définitions complètes des termes techniques liés à la performance des sites web et aux Core Web Vitals de Google.",
      "inLanguage": "fr-FR",
      "hasDefinedTerm": [
        {
          "@type": "DefinedTerm",
          "name": "LCP - Largest Contentful Paint",
          "description": "Métrique Core Web Vitals mesurant le temps de chargement du plus grand élément visible sur la page. Google recommande un LCP inférieur à 2.5 secondes.",
          "termCode": "LCP",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "FID - First Input Delay",
          "description": "Métrique Core Web Vitals mesurant le délai entre la première interaction utilisateur et la réponse du navigateur. Objectif : moins de 100ms.",
          "termCode": "FID",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "INP - Interaction to Next Paint",
          "description": "Nouvelle métrique Core Web Vitals (2024) remplaçant le FID. Mesure la latence de toutes les interactions utilisateur pendant la session.",
          "termCode": "INP",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "CLS - Cumulative Layout Shift",
          "description": "Métrique Core Web Vitals mesurant la stabilité visuelle. Un score inférieur à 0.1 est recommandé.",
          "termCode": "CLS",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "TTFB - Time To First Byte",
          "description": "Temps entre la requête HTTP et la réception du premier octet de réponse. Révèle la qualité de l'hébergement.",
          "termCode": "TTFB",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "FCP - First Contentful Paint",
          "description": "Temps écoulé entre le début du chargement et l'affichage du premier contenu visible. Objectif : moins de 1.8 seconde.",
          "termCode": "FCP",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "TBT - Total Blocking Time",
          "description": "Somme des périodes où le thread principal est bloqué plus de 50ms. Représente 30% du score PageSpeed. Objectif : moins de 200ms.",
          "termCode": "TBT",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "TTI - Time To Interactive",
          "description": "Moment où la page devient complètement interactive et répond aux interactions en moins de 50ms. Objectif : moins de 3.8 secondes.",
          "termCode": "TTI",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "CDN - Content Delivery Network",
          "description": "Réseau de serveurs distribués géographiquement qui cache et sert le contenu depuis le serveur le plus proche de l'utilisateur.",
          "termCode": "CDN",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        },
        {
          "@type": "DefinedTerm",
          "name": "Critical CSS",
          "description": "CSS nécessaire pour afficher le contenu visible sans scroll. L'inliner dans le HTML améliore FCP et LCP.",
          "termCode": "CRITICAL_CSS",
          "inDefinedTermSet": "https://wp-vitesse-pro.fr/test-vitesse/#glossary"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#video-tutorial",
      "name": "Comment tester la vitesse de son site WordPress - Tutoriel 2026",
      "description": "Tutoriel vidéo complet montrant comment utiliser l'outil de test de vitesse WP Vitesse Pro pour analyser les Core Web Vitals de votre site WordPress et améliorer votre score PageSpeed.",
      "thumbnailUrl": "https://wp-vitesse-pro.fr/og-image.png",
      "uploadDate": "2026-01-15T09:00:00+01:00",
      "duration": "PT5M30S",
      "contentUrl": "https://wp-vitesse-pro.fr/videos/test-vitesse-tutorial.mp4",
      "embedUrl": "https://wp-vitesse-pro.fr/test-vitesse#video",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": 15420
      },
      "publisher": { "@id": "https://wp-vitesse-pro.fr/#organization" }
    },
    {
      "@type": "AggregateRating",
      "@id": "https://wp-vitesse-pro.fr/test-vitesse/#aggregate-rating",
      "itemReviewed": { "@id": "https://wp-vitesse-pro.fr/test-vitesse/#application" },
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1247",
      "reviewCount": "892"
    }
  ]
};

const SpeedTestPage = memo(function SpeedTestPage() {
  const [inputUrl, setInputUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');
  const [history, setHistory] = useState<SpeedTestResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedResult, setSelectedResult] = useState<SpeedTestResult | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const exportToPdf = async (data: SpeedTestResult) => {
    setIsExporting(true);
    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
      
      const getStatusColor = (score: number) => {
        if (score >= 90) return '#16a34a';
        if (score >= 50) return '#ea580c';
        return '#dc2626';
      };

      const getMetricStatusColor = (metric: string, value: number) => {
        const thresholds: Record<string, { good: number; moderate: number }> = {
          lcp: { good: 2.5, moderate: 4 },
          fcp: { good: 1.8, moderate: 3 },
          fid: { good: 100, moderate: 300 },
          cls: { good: 0.1, moderate: 0.25 },
        };
        const t = thresholds[metric];
        if (!t) return '#16a34a';
        if (value <= t.good) return '#16a34a';
        if (value <= t.moderate) return '#ea580c';
        return '#dc2626';
      };

      const mobileScore = data.mobile?.score ?? 0;
      const desktopScore = data.desktop?.score ?? 0;

      const htmlContent = `
        <div style="font-family: 'Segoe UI', system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 30px; color: #1f2937;">
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #7c3aed; padding-bottom: 20px;">
            <h1 style="color: #7c3aed; margin: 0 0 10px 0; font-size: 24px;">Rapport de Performance</h1>
            <p style="color: #6b7280; margin: 0; font-size: 14px;">WP Vitesse Pro - Test de Vitesse WordPress</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px;">
            <p style="margin: 0; color: #374151;"><strong>URL analysée:</strong> ${data.url}</p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 13px;">
              Date: ${new Date(data.timestamp).toLocaleString('fr-FR')}
            </p>
          </div>

          <h2 style="color: #374151; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Scores Globaux</h2>
          <div style="display: flex; justify-content: space-around; margin-bottom: 30px;">
            <div style="text-align: center; padding: 20px;">
              <div style="width: 90px; height: 90px; border-radius: 50%; background: ${getStatusColor(mobileScore)}15; border: 4px solid ${getStatusColor(mobileScore)}; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">
                <span style="font-size: 32px; font-weight: bold; color: ${getStatusColor(mobileScore)};">${Math.round(mobileScore)}</span>
              </div>
              <p style="margin: 0; font-weight: 600; color: #374151;">Mobile</p>
            </div>
            <div style="text-align: center; padding: 20px;">
              <div style="width: 90px; height: 90px; border-radius: 50%; background: ${getStatusColor(desktopScore)}15; border: 4px solid ${getStatusColor(desktopScore)}; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">
                <span style="font-size: 32px; font-weight: bold; color: ${getStatusColor(desktopScore)};">${Math.round(desktopScore)}</span>
              </div>
              <p style="margin: 0; font-weight: 600; color: #374151;">Desktop</p>
            </div>
          </div>

          <h2 style="color: #374151; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Core Web Vitals - Mobile</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background: #f9fafb;">
              <th style="text-align: left; padding: 12px; border: 1px solid #e5e7eb;">Métrique</th>
              <th style="text-align: center; padding: 12px; border: 1px solid #e5e7eb;">Valeur</th>
              <th style="text-align: center; padding: 12px; border: 1px solid #e5e7eb;">Objectif</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>LCP</strong> (Largest Contentful Paint)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('lcp', data.mobile.lcp)}; font-weight: 600;">${data.mobile.lcp.toFixed(2)}s</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 2.5s</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>FID</strong> (First Input Delay)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('fid', data.mobile.fid)}; font-weight: 600;">${data.mobile.fid.toFixed(0)}ms</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 100ms</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>CLS</strong> (Cumulative Layout Shift)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('cls', data.mobile.cls)}; font-weight: 600;">${data.mobile.cls.toFixed(3)}</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 0.1</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>FCP</strong> (First Contentful Paint)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('fcp', data.mobile.fcp)}; font-weight: 600;">${data.mobile.fcp.toFixed(2)}s</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 1.8s</td>
            </tr>
          </table>

          <h2 style="color: #374151; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Core Web Vitals - Desktop</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr style="background: #f9fafb;">
              <th style="text-align: left; padding: 12px; border: 1px solid #e5e7eb;">Métrique</th>
              <th style="text-align: center; padding: 12px; border: 1px solid #e5e7eb;">Valeur</th>
              <th style="text-align: center; padding: 12px; border: 1px solid #e5e7eb;">Objectif</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>LCP</strong> (Largest Contentful Paint)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('lcp', data.desktop.lcp)}; font-weight: 600;">${data.desktop.lcp.toFixed(2)}s</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 2.5s</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>FID</strong> (First Input Delay)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('fid', data.desktop.fid)}; font-weight: 600;">${data.desktop.fid.toFixed(0)}ms</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 100ms</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>CLS</strong> (Cumulative Layout Shift)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('cls', data.desktop.cls)}; font-weight: 600;">${data.desktop.cls.toFixed(3)}</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 0.1</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>FCP</strong> (First Contentful Paint)</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: ${getMetricStatusColor('fcp', data.desktop.fcp)}; font-weight: 600;">${data.desktop.fcp.toFixed(2)}s</td>
              <td style="text-align: center; padding: 12px; border: 1px solid #e5e7eb; color: #6b7280;">&lt; 1.8s</td>
            </tr>
          </table>

          <div style="background: linear-gradient(135deg, #7c3aed15, #a855f715); padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed; margin-top: 20px;">
            <h3 style="color: #7c3aed; margin: 0 0 10px 0; font-size: 16px;">Optimisez votre WordPress avec Kinsta</h3>
            <p style="color: #4b5563; margin: 0; font-size: 14px; line-height: 1.6;">
              Kinsta offre un hébergement WordPress premium sur Google Cloud avec CDN Cloudflare intégré. 
              Migration gratuite et support expert 24/7.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Rapport généré par WP Vitesse Pro - wp-vitesse-pro.fr
            </p>
          </div>
        </div>
      `;

      const container = document.createElement('div');
      container.innerHTML = htmlContent;
      document.body.appendChild(container);

      const urlSlug = data.url.replace(/https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').slice(0, 30);
      
      await html2pdf()
        .set({
          margin: 10,
          filename: `rapport-vitesse-${urlSlug}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(container)
        .save();

      document.body.removeChild(container);
      
      toast({
        title: "PDF exporté",
        description: "Le rapport a été téléchargé avec succès.",
      });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Erreur d'export",
        description: "Impossible de générer le PDF. Réessayez.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }
  }, []);

  const saveToHistory = (result: SpeedTestResult) => {
    const updated = [result, ...history.filter(h => h.url !== result.url)].slice(0, MAX_HISTORY);
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  const loadFromHistory = (item: SpeedTestResult) => {
    setSelectedResult(item);
    setInputUrl(item.url);
    setShowHistory(false);
  };

  const speedTestMutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await apiRequest('POST', '/api/speed-test', { url });
      const data = await response.json();
      return data as SpeedTestResult;
    },
    onSuccess: (data) => {
      saveToHistory(data);
      setSelectedResult(null);
    },
  });

  const handleTest = () => {
    if (!inputUrl.trim()) return;
    const urlToTest = inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`;
    speedTestMutation.mutate(urlToTest);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTest();
    }
  };

  const result = selectedResult || speedTestMutation.data;
  const isLoading = speedTestMutation.isPending;
  const isError = speedTestMutation.isError;

  const ComparisonCard = ({ result }: { result: SpeedTestResult }) => {
    const mobileScore = result.mobile?.score ?? 0;
    const desktopScore = result.desktop?.score ?? 0;
    const diff = desktopScore - mobileScore;
    
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-primary" />
            Comparaison Mobile vs Desktop
          </CardTitle>
          <CardDescription>
            Différence de performance entre les deux plateformes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${getScoreBg(mobileScore)} border-2`}>
                <span className={`text-2xl font-bold ${getScoreColor(mobileScore)}`}>{Math.round(mobileScore)}</span>
              </div>
              <div>
                <p className="flex items-center gap-2 font-semibold">
                  <Smartphone className="w-4 h-4" /> Mobile
                </p>
                <Badge variant={getScoreLabel(mobileScore).variant}>{getScoreLabel(mobileScore).text}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${getScoreBg(desktopScore)} border-2`}>
                <span className={`text-2xl font-bold ${getScoreColor(desktopScore)}`}>{Math.round(desktopScore)}</span>
              </div>
              <div>
                <p className="flex items-center gap-2 font-semibold">
                  <Monitor className="w-4 h-4" /> Desktop
                </p>
                <Badge variant={getScoreLabel(desktopScore).variant}>{getScoreLabel(desktopScore).text}</Badge>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-muted/50">
            <p className="text-sm text-muted-foreground">
              {diff > 0 ? (
                <>Votre score desktop est <strong className="text-green-600">+{diff} points</strong> meilleur que mobile. C'est normal car le test mobile simule des conditions réseau et CPU plus contraignantes.</>
              ) : diff < 0 ? (
                <>Votre score mobile est <strong className="text-orange-600">{Math.abs(diff)} points</strong> meilleur que desktop. Situation inhabituelle - vérifiez les ressources bloquantes sur desktop.</>
              ) : (
                <>Vos scores mobile et desktop sont identiques. Excellent équilibre de performance!</>
              )}
            </p>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm">
              <div className="p-3 bg-muted/30 rounded-md border border-border/50">
                <p className="text-muted-foreground mb-1 font-semibold">LCP</p>
                <p className="font-bold whitespace-nowrap text-base">
                  <span className={getMetricColor(getMetricStatus('lcp', result.mobile.lcp))}>{result.mobile.lcp.toFixed(2)}s</span>
                  <span className="mx-1 text-muted-foreground">/</span>
                  <span className={getMetricColor(getMetricStatus('lcp', result.desktop.lcp))}>{result.desktop.lcp.toFixed(2)}s</span>
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-md border border-border/50">
                <p className="text-muted-foreground mb-1 font-semibold">TBT</p>
                <p className="font-bold whitespace-nowrap text-base">
                  <span className={getMetricColor(getMetricStatus('tbt', result.mobile.fid))}>{result.mobile.fid.toFixed(0)}ms</span>
                  <span className="mx-1 text-muted-foreground">/</span>
                  <span className={getMetricColor(getMetricStatus('tbt', result.desktop.fid))}>{result.desktop.fid.toFixed(0)}ms</span>
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-md border border-border/50">
                <p className="text-muted-foreground mb-1 font-semibold">CLS</p>
                <p className="font-bold whitespace-nowrap text-base">
                  <span className={getMetricColor(getMetricStatus('cls', result.mobile.cls))}>{result.mobile.cls.toFixed(3)}</span>
                  <span className="mx-1 text-muted-foreground">/</span>
                  <span className={getMetricColor(getMetricStatus('cls', result.desktop.cls))}>{result.desktop.cls.toFixed(3)}</span>
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-md border border-border/50">
                <p className="text-muted-foreground mb-1 font-semibold">FCP</p>
                <p className="font-bold whitespace-nowrap text-base">
                  <span className={getMetricColor(getMetricStatus('fcp', result.mobile.fcp))}>{result.mobile.fcp.toFixed(2)}s</span>
                  <span className="mx-1 text-muted-foreground">/</span>
                  <span className={getMetricColor(getMetricStatus('fcp', result.desktop.fcp))}>{result.desktop.fcp.toFixed(2)}s</span>
                </p>
              </div>
            </div>
        </CardContent>
      </Card>
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 50) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800';
    if (score >= 50) return 'bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800';
    return 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return { text: 'Excellent', variant: 'default' as const };
    if (score >= 50) return { text: 'À améliorer', variant: 'secondary' as const };
    return { text: 'Faible', variant: 'destructive' as const };
  };

  const getMetricStatus = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; moderate: number }> = {
      lcp: { good: 2.5, moderate: 4 },
      fcp: { good: 1.8, moderate: 3 },
      tbt: { good: 200, moderate: 600 }, // TBT thresholds from Lighthouse
      cls: { good: 0.1, moderate: 0.25 },
    };
    const t = thresholds[metric];
    if (!t) return 'good';
    if (value <= t.good) return 'good';
    if (value <= t.moderate) return 'moderate';
    return 'poor';
  };

  const getMetricColor = (status: string) => {
    if (status === 'good') return 'text-green-600 dark:text-green-400';
    if (status === 'moderate') return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const generateRecommendations = (data: SpeedTestResult['mobile'] | SpeedTestResult['desktop']) => {
    const recommendations: Array<{ category: string; icon: any; title: string; description: string; priority: 'high' | 'medium' | 'low' }> = [];
    
    if (data.lcp > 2.5) {
      recommendations.push({
        category: 'Performance',
        icon: Image,
        title: 'Optimiser le Largest Contentful Paint',
        description: `Votre LCP est de ${data.lcp.toFixed(2)}s (objectif: <2.5s). Compressez vos images, utilisez le format WebP, et activez le lazy loading.`,
        priority: data.lcp > 4 ? 'high' : 'medium'
      });
    }
    
    if (data.cls > 0.1) {
      recommendations.push({
        category: 'Stabilité',
        icon: LayoutGrid,
        title: 'Réduire les décalages de mise en page',
        description: `Votre CLS est de ${data.cls.toFixed(3)} (objectif: <0.1). Définissez les dimensions des images et réservez l'espace pour les publicités.`,
        priority: data.cls > 0.25 ? 'high' : 'medium'
      });
    }
    
    if (data.fcp > 1.8) {
      recommendations.push({
        category: 'Chargement',
        icon: Clock,
        title: 'Accélérer le First Contentful Paint',
        description: `Votre FCP est de ${data.fcp.toFixed(2)}s (objectif: <1.8s). Réduisez le JavaScript bloquant et optimisez le CSS critique.`,
        priority: data.fcp > 3 ? 'high' : 'medium'
      });
    }

    if (data.score < 90) {
      recommendations.push({
        category: 'Hébergement',
        icon: Server,
        title: 'Passez à un hébergement premium',
        description: 'Kinsta offre des serveurs Google Cloud optimisés avec CDN intégré. Les sites hébergés sur Kinsta obtiennent en moyenne 20-30% de meilleures performances.',
        priority: data.score < 50 ? 'high' : 'low'
      });
    }

    if (data.score < 70) {
      recommendations.push({
        category: 'Cache',
        icon: RefreshCw,
        title: 'Activer un système de cache',
        description: 'Installez un plugin de cache comme WP Rocket ou utilisez le cache intégré de Kinsta pour réduire les temps de réponse serveur.',
        priority: 'medium'
      });
    }

    return recommendations;
  };

  const MetricCard = ({ label, value, unit, metric }: { label: string; value: number; unit: string; metric: string }) => {
    const status = getMetricStatus(metric, value);
    const displayValue = metric === 'cls' ? value.toFixed(3) : metric === 'fid' ? value.toFixed(0) : value.toFixed(2);
    
    return (
      <div className="p-4 rounded-lg border bg-card">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className={`text-2xl font-bold ${getMetricColor(status)}`}>
          {displayValue}{unit}
        </p>
        <Badge variant={status === 'good' ? 'default' : status === 'moderate' ? 'secondary' : 'destructive'} className="mt-2">
          {status === 'good' ? 'Bon' : status === 'moderate' ? 'Moyen' : 'Faible'}
        </Badge>
      </div>
    );
  };

  const ResultsSection = ({ data, platform }: { data: SpeedTestResult['mobile']; platform: string }) => {
    const score = data?.score ?? 0;
    const recommendations = generateRecommendations(data);
    const scoreLabel = getScoreLabel(score);
    
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Card className={`flex-shrink-0 ${getScoreBg(score)} border-2`}>
            <CardContent className="p-8 text-center">
              <p className={`text-7xl font-bold ${getScoreColor(score)}`}>
                {Math.round(score)}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Score {platform}</p>
              <Badge variant={scoreLabel.variant} className="mt-3">
                {scoreLabel.text}
              </Badge>
            </CardContent>
          </Card>
          
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="LCP" value={data.lcp} unit="s" metric="lcp" />
            <MetricCard label="TBT" value={data.fid} unit="ms" metric="tbt" />
            <MetricCard label="CLS" value={data.cls} unit="" metric="cls" />
            <MetricCard label="FCP" value={data.fcp} unit="s" metric="fcp" />
          </div>
        </div>

        {recommendations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recommandations d'optimisation
              </CardTitle>
              <CardDescription>
                {recommendations.filter(r => r.priority === 'high').length} actions prioritaires identifiées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.sort((a, b) => {
                  const order = { high: 0, medium: 1, low: 2 };
                  return order[a.priority] - order[b.priority];
                }).map((rec, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg border bg-muted/30">
                    <div className={`p-2 rounded-lg h-fit ${
                      rec.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30' :
                      rec.priority === 'medium' ? 'bg-orange-100 dark:bg-orange-900/30' :
                      'bg-blue-100 dark:bg-blue-900/30'
                    }`}>
                      <rec.icon className={`w-5 h-5 ${
                        rec.priority === 'high' ? 'text-red-600' :
                        rec.priority === 'medium' ? 'text-orange-600' :
                        'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{rec.title}</p>
                        <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'secondary' : 'outline'}>
                          {rec.priority === 'high' ? 'Prioritaire' : rec.priority === 'medium' ? 'Recommandé' : 'Optionnel'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Besoin d'un boost de performance ?</h3>
                <p className="text-muted-foreground">
                  Kinsta offre un hébergement WordPress ultra-rapide sur Google Cloud avec CDN Cloudflare intégré. 
                  Migration gratuite et support expert 24/7.
                </p>
              </div>
              <Button asChild size="lg" className="gradient-cta text-white whitespace-nowrap">
                <a href="https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-cta">
                  Essayer Kinsta
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <>
      <SEO 
        title="Test Vitesse WordPress Gratuit 2026"
        description="Testez la vitesse de votre WordPress. Analysez LCP, CLS, FID et obtenez des recommandations personnalisées gratuitement."
        canonical="/test-vitesse"
        type="website"
        keywords="test vitesse wordpress, test vitesse site web gratuit, pagespeed insights français, core web vitals, lcp, fid, cls, analyse performance wordpress"
        schema={SPEED_TEST_SCHEMA}
        image="https://wp-vitesse-pro.fr/og-image.png"
        imageAlt="Test Vitesse WordPress Gratuit - Analyse PageSpeed Insights Core Web Vitals"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://wp-vitesse-pro.fr' },
          { name: 'Test de Vitesse WordPress', url: 'https://wp-vitesse-pro.fr/test-vitesse' }
        ]}
      />
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 overflow-x-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <img 
              src={speedTestImage} 
              alt="Test de vitesse WordPress gratuit - PageSpeed Insights et Core Web Vitals LCP FID CLS" 
              className="w-full h-auto rounded-xl mb-8 shadow-lg mx-auto max-w-3xl"
              loading="eager"
              width="1200"
              height="675"
            />
            <Badge variant="secondary" className="mb-4">
              <Gauge className="w-3 h-3 mr-1" /> Outil Gratuit 2026
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 break-words">
              Test de Vitesse WordPress Gratuit
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto break-words">
              Analysez la performance de votre site avec <strong>Google PageSpeed Insights</strong>. 
              Obtenez vos scores <strong>Core Web Vitals</strong> (LCP, FID, CLS) et des recommandations pour optimiser votre WordPress.
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="Entrez l'URL de votre site (ex: monsite.fr)"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    data-testid="input-url"
                    className="flex-1 h-12 text-lg"
                    aria-label="URL du site à tester"
                  />
                  <Button
                    size="lg"
                    onClick={handleTest}
                    disabled={!inputUrl.trim() || isLoading}
                    data-testid="button-test-speed"
                    className="gradient-cta text-white h-12 px-8"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Analyse...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Tester la vitesse
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" /> 100% Gratuit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" /> API Google officielle
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" /> Résultats instantanés
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" /> Export PDF
              </span>
            </div>

            {history.length > 0 && (
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHistory(!showHistory)}
                  data-testid="button-toggle-history"
                  className="gap-2"
                >
                  <History className="w-4 h-4" />
                  {showHistory ? 'Masquer' : 'Voir'} l'historique ({history.length})
                </Button>
                
                {showHistory && (
                  <Card className="mt-4 text-left">
                    <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
                      <CardTitle className="text-lg">Historique des tests</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearHistory}
                        data-testid="button-clear-history"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Effacer
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {history.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover-elevate cursor-pointer"
                            onClick={() => loadFromHistory(item)}
                            data-testid={`history-item-${idx}`}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{item.url}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(item.timestamp).toLocaleString('fr-FR')}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                              <div className="text-center">
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Smartphone className="w-3 h-3" />
                                </p>
                                <Badge variant={getScoreLabel(item.mobile?.score ?? 0).variant} className="text-xs">
                                  {Math.round(item.mobile?.score ?? 0)}
                                </Badge>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Monitor className="w-3 h-3" />
                                </p>
                                <Badge variant={getScoreLabel(item.desktop?.score ?? 0).variant} className="text-xs">
                                  {Math.round(item.desktop?.score ?? 0)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>

          {isLoading && (
            <div className="max-w-4xl mx-auto text-center py-12">
              <Loader className="w-16 h-16 animate-spin text-primary mx-auto mb-4" />
              <p className="text-xl font-medium">Analyse en cours...</p>
              <p className="text-muted-foreground">Google PageSpeed analyse votre site (20-40 secondes)</p>
            </div>
          )}

          {result && !isLoading && (
            <div className="max-w-5xl mx-auto">
              <Card className="mb-6">
                <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
                  <div>
                    <CardTitle data-testid="text-result-url">Résultats pour: {result.url}</CardTitle>
                    <CardDescription>
                      Analysé le {new Date(result.timestamp).toLocaleString('fr-FR')}
                      {selectedResult && <span className="ml-2 text-primary">(depuis l'historique)</span>}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" data-testid="button-share">
                      <Share2 className="w-4 h-4 mr-2" /> Partager
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      data-testid="button-get-badge"
                      onClick={() => window.open(`/badge-widget?score=${Math.round(activeTab === 'mobile' ? result.mobile.score : result.desktop.score)}`, '_blank')}
                    >
                      <Award className="w-4 h-4 mr-2" /> Badge
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      data-testid="button-export"
                      onClick={() => result && exportToPdf(result)}
                      disabled={isExporting}
                    >
                      {isExporting ? (
                        <>
                          <Loader className="w-4 h-4 mr-2 animate-spin" /> Export...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" /> Exporter PDF
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              {result.mobile && result.desktop && <ComparisonCard result={result} />}

              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'mobile' | 'desktop')} className="mb-8">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
                  <TabsTrigger value="mobile" className="flex items-center gap-2" data-testid="tab-mobile">
                    <Smartphone className="w-4 h-4" />
                    Mobile ({result.mobile?.score ?? 0})
                  </TabsTrigger>
                  <TabsTrigger value="desktop" className="flex items-center gap-2" data-testid="tab-desktop">
                    <Monitor className="w-4 h-4" />
                    Desktop ({result.desktop?.score ?? 0})
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="mobile">
                  {result.mobile && <ResultsSection data={result.mobile} platform="Mobile" />}
                </TabsContent>
                
                <TabsContent value="desktop">
                  {result.desktop && <ResultsSection data={result.desktop} platform="Desktop" />}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {isError && (
            <div className="max-w-3xl mx-auto">
              <Card className="border-red-200 dark:border-red-900/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    Erreur lors de l'analyse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Impossible d'analyser cette URL. Vérifiez qu'elle est accessible publiquement et réessayez.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => speedTestMutation.reset()}
                    data-testid="button-retry"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" /> Réessayer
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Comprendre les Core Web Vitals
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Les Core Web Vitals sont des métriques essentielles utilisées par Google pour évaluer l'expérience utilisateur de votre site. Ils influencent directement votre référencement SEO.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                    <Image className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>LCP - Largest Contentful Paint</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mesure le temps de chargement du plus grand élément visible. Objectif: moins de 2.5 secondes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Bon</Badge> &lt; 2.5s
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Moyen</Badge> 2.5s - 4s
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Faible</Badge> &gt; 4s
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>FID - First Input Delay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mesure le délai avant la première interaction possible. Objectif: moins de 100 millisecondes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Bon</Badge> &lt; 100ms
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Moyen</Badge> 100ms - 300ms
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Faible</Badge> &gt; 300ms
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                    <LayoutGrid className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>CLS - Cumulative Layout Shift</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mesure la stabilité visuelle de la page. Objectif: score inférieur à 0.1.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Bon</Badge> &lt; 0.1
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Moyen</Badge> 0.1 - 0.25
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Faible</Badge> &gt; 0.25
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mt-12 md:mt-20 px-4 md:px-0 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2 md:gap-3">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <span>Guide Complet : Tester et Optimiser la Vitesse WordPress</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg">
              Ce guide exhaustif vous explique pourquoi la vitesse de votre site WordPress est cruciale pour le SEO, 
              comment utiliser efficacement les outils de test de performance, et les meilleures pratiques pour obtenir 
              un score PageSpeed supérieur à 90.
            </p>

            <div className="grid gap-6 md:gap-8">
              <Card className="p-4 md:p-8 overflow-hidden">
                <h3 className="text-lg md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">Pourquoi la vitesse est cruciale pour le SEO en 2026</span>
                </h3>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base break-words overflow-hidden">
                  <p className="break-words">
                    La vitesse de chargement de votre site WordPress n'est plus un luxe, c'est une nécessité absolue pour réussir en ligne. Google a officiellement confirmé que la vitesse est un facteur de classement depuis 2010 pour desktop et 2018 pour mobile. Avec l'introduction des <strong>Core Web Vitals</strong> en 2021, l'impact sur le référencement est devenu encore plus significatif.
                  </p>
                  <p className="break-words">
                    Les études montrent qu'<strong>une seconde de délai supplémentaire peut réduire les conversions de 7%</strong> et augmenter le taux de rebond de 32%. Pour un site e-commerce générant 100 000€/jour, cela représente une perte de 2,5 millions d'euros par an.
                  </p>
                  <p className="break-words">
                    Le <strong>Mobile-First Indexing</strong> de Google signifie que votre version mobile est celle qui est indexée. Avec plus de 60% du trafic mondial sur mobile, un site lent est invisible pour la majorité de vos visiteurs. 53% abandonnent un site qui met plus de 3 secondes à charger.
                  </p>
                  <p className="break-words">
                    Au-delà du SEO, la vitesse impacte vos métriques business : temps passé sur le site, pages vues, taux de conversion. Pour WordPress, cela commence par un <Link href="/comparatif" className="text-primary font-medium">hébergement adapté</Link>.
                  </p>
                </div>
              </Card>

              <Card className="p-4 md:p-8 overflow-hidden">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">Les 5 Étapes pour un Site WordPress Rapide</span>
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">1</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg mb-2">Choisir un hébergement WordPress performant</h4>
                      <p className="text-muted-foreground">
                        L'hébergement est le fondement de la performance. Un hébergement mutualisé bon marché partage les ressources avec des centaines 
                        d'autres sites, causant des temps de réponse lents et imprévisibles. <strong>Kinsta</strong>, hébergé sur l'infrastructure 
                        Google Cloud Platform, offre des serveurs C2 optimisés avec isolation des ressources, CDN Cloudflare Enterprise intégré, 
                        et un TTFB (Time To First Byte) moyen de 200ms. La différence entre un hébergement standard et premium peut faire passer 
                        votre score PageSpeed de 40 à 85+ sans autre modification. 
                        <Link href="/article/hebergement-wordpress-kinsta" className="text-primary font-medium ml-1">En savoir plus sur l'hébergement Kinsta</Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">2</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg mb-2">Optimiser les images et médias</h4>
                      <p className="text-muted-foreground">
                        Les images représentent en moyenne 50-70% du poids d'une page web. Pour les optimiser efficacement : convertissez au format 
                        WebP (30-50% plus léger que JPEG), utilisez le lazy loading natif WordPress, définissez des dimensions explicites width/height 
                        pour éviter le CLS, implémentez des images responsives avec srcset, et compressez avec des outils comme ShortPixel ou Imagify. 
                        Pour le LCP, préchargez l'image hero avec &lt;link rel="preload"&gt;. Un CDN comme Cloudflare sert vos images depuis des 
                        serveurs edge proches de vos visiteurs, réduisant la latence de 50-80%.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">3</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg mb-2">Minimiser et différer JavaScript/CSS</h4>
                      <p className="text-muted-foreground">
                        Le JavaScript et CSS bloquant le rendu sont les principaux coupables des scores FCP et LCP élevés. Stratégies d'optimisation : 
                        identifiez le CSS critique (above-the-fold) et intégrez-le inline, différez le chargement du CSS non-critique, utilisez async 
                        et defer pour les scripts non-essentiels, éliminez le JavaScript inutilisé (tree shaking), et combinez les fichiers pour 
                        réduire les requêtes HTTP. Les plugins comme WP Rocket, Perfmatters ou Autoptimize automatisent ces optimisations. 
                        Consultez notre <Link href="/article/optimiser-lcp" className="text-primary font-medium">guide détaillé sur l'optimisation du LCP</Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">4</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg mb-2">Activer le cache et un CDN</h4>
                      <p className="text-muted-foreground">
                        Le cache stocke les versions statiques de vos pages, évitant de régénérer le contenu à chaque visite. Types de cache : 
                        cache de page (HTML complet), cache d'objets (requêtes base de données), cache de navigateur (ressources statiques), 
                        et cache CDN (edge caching). Kinsta intègre un cache serveur optimisé avec invalidation intelligente, plus un CDN 
                        Cloudflare Enterprise avec 260+ points de présence mondiaux. Pour les autres hébergeurs, WP Rocket offre la solution 
                        de cache la plus complète. Le cache peut réduire le temps de chargement de 80% et le TTFB de 90%.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">5</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg mb-2">Auditer et optimiser les plugins WordPress</h4>
                      <p className="text-muted-foreground">
                        Chaque plugin ajoute du code PHP, JavaScript et CSS à charger. Les sites WordPress lents ont souvent 30-50+ plugins actifs. 
                        Audit recommandé : utilisez Query Monitor pour identifier les plugins gourmands, désactivez ceux non-essentiels, 
                        remplacez les plugins lourds par des alternatives légères (ex: GeneratePress au lieu d'Elementor pour le thème), 
                        et limitez-vous à 15-20 plugins maximum. Les page builders comme Elementor, Divi et WPBakery sont particulièrement 
                        impactants - considérez des alternatives comme Gutenberg natif ou des thèmes optimisés. 
                        Découvrez <Link href="/article/wordpress-lent" className="text-primary font-medium">pourquoi votre site WordPress est lent</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-8 overflow-hidden">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">Comparatif des Outils de Test de Vitesse</span>
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                  Chaque outil de test de performance a ses forces et faiblesses. Voici une comparaison détaillée pour vous aider 
                  à choisir le bon outil selon vos besoins. L'idéal est de combiner plusieurs outils pour une vision complète.
                </p>
                
                <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border p-3 text-left font-bold">Outil</th>
                        <th className="border p-3 text-left font-bold">Points Forts</th>
                        <th className="border p-3 text-left font-bold">Limites</th>
                        <th className="border p-3 text-center font-bold">Impact SEO</th>
                        <th className="border p-3 text-center font-bold">Prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-semibold text-primary">WP Vitesse Pro</td>
                        <td className="border p-3">API Google officielle, interface française, recommandations WordPress, export PDF, historique</td>
                        <td className="border p-3">Focalisé WordPress</td>
                        <td className="border p-3 text-center"><Badge variant="default">Direct</Badge></td>
                        <td className="border p-3 text-center text-green-600 font-medium">Gratuit</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border p-3 font-semibold">Google PageSpeed Insights</td>
                        <td className="border p-3">Données réelles CrUX, score SEO officiel, analyse mobile/desktop</td>
                        <td className="border p-3">Pas de waterfall, variations de score</td>
                        <td className="border p-3 text-center"><Badge variant="default">Direct</Badge></td>
                        <td className="border p-3 text-center text-green-600 font-medium">Gratuit</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">GTmetrix</td>
                        <td className="border p-3">Waterfall détaillé, historique, tests multi-localisations, comparaisons</td>
                        <td className="border p-3">Limité en gratuit, score différent de Google</td>
                        <td className="border p-3 text-center"><Badge variant="secondary">Indirect</Badge></td>
                        <td className="border p-3 text-center">Gratuit / Pro 15€/mois</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border p-3 font-semibold">Pingdom Tools</td>
                        <td className="border p-3">Interface simple, temps de réponse serveur, test depuis 7 localisations</td>
                        <td className="border p-3">Pas de Core Web Vitals, analyse basique</td>
                        <td className="border p-3 text-center"><Badge variant="secondary">Indirect</Badge></td>
                        <td className="border p-3 text-center text-green-600 font-medium">Gratuit</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">WebPageTest</td>
                        <td className="border p-3">Tests avancés, filmstrip, multi-navigateurs, API, très complet</td>
                        <td className="border p-3">Interface complexe, files d'attente</td>
                        <td className="border p-3 text-center"><Badge variant="secondary">Indirect</Badge></td>
                        <td className="border p-3 text-center text-green-600 font-medium">Gratuit</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border p-3 font-semibold">Chrome DevTools (Lighthouse)</td>
                        <td className="border p-3">Intégré au navigateur, analyse complète, débogage réseau</td>
                        <td className="border p-3">Dépend de votre machine locale</td>
                        <td className="border p-3 text-center"><Badge variant="default">Direct</Badge></td>
                        <td className="border p-3 text-center text-green-600 font-medium">Gratuit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Recommandation :</strong> Utilisez <strong>PageSpeed Insights</strong> (ou notre outil) pour votre score SEO officiel, 
                    <strong>GTmetrix</strong> pour analyser le waterfall et identifier les ressources lentes, et <strong>WebPageTest</strong> 
                    pour des tests approfondis avec filmstrip et comparaisons multi-navigateurs. Testez toujours depuis plusieurs localisations 
                    pour une vision réaliste de vos performances mondiales.
                  </p>
                </div>
              </Card>

              <Card className="p-4 md:p-8 overflow-hidden">
                <h3 className="text-lg md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">Interpréter et Améliorer Votre Score PageSpeed</span>
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le score PageSpeed est calculé à partir de 6 métriques pondérées différemment. Comprendre cette pondération vous aide 
                    à prioriser vos efforts d'optimisation :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Total Blocking Time (TBT) / FID : 30%</strong> - Le plus impactant. Réduisez le JavaScript bloquant.</li>
                    <li><strong>Largest Contentful Paint (LCP) : 25%</strong> - Optimisez l'image hero et le TTFB.</li>
                    <li><strong>Cumulative Layout Shift (CLS) : 25%</strong> - Définissez les dimensions des médias.</li>
                    <li><strong>First Contentful Paint (FCP) : 10%</strong> - Réduisez le CSS bloquant.</li>
                    <li><strong>Speed Index (SI) : 10%</strong> - Améliorez le chargement progressif.</li>
                  </ul>
                  <p>
                    Une approche stratégique consiste à cibler d'abord le TBT/FID et le LCP qui représentent 55% du score. 
                    Un bon hébergement comme <Link href="/comparatif" className="text-primary font-medium">Kinsta</Link> améliore 
                    automatiquement le TTFB, impactant positivement LCP et FCP. L'élimination des plugins JavaScript lourds 
                    améliore le TBT de manière significative.
                  </p>
                  <p>
                    N'oubliez pas que le score varie naturellement de quelques points entre les tests en raison des conditions réseau 
                    et serveur. Visez une tendance stable plutôt qu'un score parfait ponctuel. Un score de 90+ est excellent, 
                    50-89 nécessite des améliorations, et en dessous de 50 indique des problèmes sérieux à résoudre.
                  </p>
                </div>
              </Card>

              <Card className="p-4 md:p-8 overflow-hidden">
                <h3 className="text-lg md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">Optimisations Spécifiques WordPress</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-primary" />
                      Base de données
                    </h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>Nettoyez régulièrement les révisions, spams et transients</li>
                      <li>Optimisez les tables avec WP-Optimize ou phpMyAdmin</li>
                      <li>Utilisez le cache d'objets Redis/Memcached (inclus chez Kinsta)</li>
                      <li>Limitez le nombre de révisions dans wp-config.php</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Configuration Serveur
                    </h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>Utilisez PHP 8.2+ pour +20% de performance</li>
                      <li>Activez OPcache pour le bytecode PHP</li>
                      <li>Configurez correctement les en-têtes de cache</li>
                      <li>Activez la compression Gzip/Brotli</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    Pour une analyse complète de votre configuration WordPress, utilisez notre 
                    <Link href="/audit-site" className="text-primary font-medium mx-1">outil d'audit gratuit</Link>
                    qui examine la performance, le SEO, la sécurité et les plugins de votre site.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mt-12 md:mt-16 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <span>Questions Fréquentes</span>
            </h2>
            <p className="text-center text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Tout ce que vous devez savoir sur les tests de vitesse WordPress, l'optimisation de performance et les Core Web Vitals.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {FAQ_DATA.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left faq-question" data-testid={`faq-question-${idx}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="max-w-5xl mx-auto mt-12 md:mt-20 px-4 md:px-0 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <span>Pourquoi Nous Faire Confiance</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
              Des milliers de professionnels WordPress utilisent notre outil pour optimiser leurs sites.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              <Card className="text-center p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{SOCIAL_PROOF_DATA.testsCount.toLocaleString('fr-FR')}+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Tests effectués</p>
              </Card>
              <Card className="text-center p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1">+{SOCIAL_PROOF_DATA.averageImprovement}</div>
                <p className="text-xs md:text-sm text-muted-foreground">Points d'amélioration moyenne</p>
              </Card>
              <Card className="text-center p-4 md:p-6">
                <div className="flex items-center justify-center gap-1 text-2xl md:text-4xl font-bold text-yellow-500 mb-1">
                  <Star className="w-5 h-5 md:w-7 md:h-7 fill-current" />
                  {SOCIAL_PROOF_DATA.userRating}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{SOCIAL_PROOF_DATA.reviewCount} avis</p>
              </Card>
              <Card className="text-center p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-1">100%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Gratuit, sans inscription</p>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
              <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-green-600" />
                API Google Officielle
              </Badge>
              <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-green-600" />
                SSL Sécurisé
              </Badge>
              <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-blue-600" />
                RGPD Conforme
              </Badge>
              <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-primary" />
                Interface 100% Française
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {SOCIAL_PROOF_DATA.testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm md:text-base">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm md:text-base truncate">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-4">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="default" className="text-xs">{testimonial.improvement}</Badge>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto mt-12 md:mt-20 px-4 md:px-0 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <BookMarked className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <span>Glossaire des Métriques de Performance</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
              Comprenez les termes techniques utilisés pour mesurer la vitesse de votre site WordPress.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {GLOSSARY_DATA.map((term, idx) => (
                <Card key={idx} className="p-4 md:p-5 overflow-hidden">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary text-xs md:text-sm">{term.term}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-sm md:text-base mb-1 break-words">{term.fullName}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-2 line-clamp-3">{term.definition}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Bon: {term.goodValue}
                        </Badge>
                        <Badge variant="destructive" className="text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Faible: {term.badValue}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mt-12 md:mt-16 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Outils et Ressources Complémentaires
            </h2>
            <p className="text-center text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Découvrez nos autres outils gratuits et guides pour optimiser votre WordPress.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileCode className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Audit WordPress Complet</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Analyse SEO, sécurité, accessibilité, plugins et compatibilité Kinsta.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/audit-site" data-testid="link-audit">
                          Lancer un audit <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Comparatif Hébergeurs</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Comparez Kinsta avec OVH, o2switch et les autres hébergeurs.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/comparatif" data-testid="link-comparatif">
                          Voir le comparatif <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Guides WordPress</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Migration, sécurité, performance - tous nos tutoriels.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/guide" data-testid="link-guides">
                          Explorer les guides <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Pourquoi WordPress est Lent ?</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Diagnostic des causes de lenteur et solutions.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/article/wordpress-lent" data-testid="link-wordpress-lent">
                          Lire <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Optimiser le LCP</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Guide pour améliorer votre Largest Contentful Paint.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/article/optimiser-lcp" data-testid="link-optimiser-lcp">
                          Voir <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Search className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-2 text-sm md:text-base">Vitesse et SEO</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">
                        Comment la vitesse impacte votre référencement.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/article/vitesse-seo" data-testid="link-vitesse-seo">
                          Découvrir <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mt-12 md:mt-16 px-4 md:px-0">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-4 md:p-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Prêt à Accélérer Votre Site WordPress ?
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Kinsta offre un hébergement WordPress premium sur Google Cloud avec CDN Cloudflare Enterprise intégré, 
                  cache optimisé, et migration gratuite. Rejoignez plus de 26 000 entreprises qui font confiance à Kinsta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gradient-cta text-white">
                    <a href="https://kinsta.com/fr/hebergement-wordpress/?kaid=CYISLEFCEOAL" target="_blank" rel="noopener noreferrer" data-testid="link-kinsta-final-cta">
                      Essayer Kinsta Gratuitement
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/comparatif" data-testid="link-compare-final">
                      Voir le Comparatif Complet
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
      <SEOFooter />
    </>
  );
});

export default SpeedTestPage;
