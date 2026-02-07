import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar, SEOFooter } from "@/components/navbar";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { 
  ShieldAlert, Activity, Lock, Skull, Database, Zap, 
  ShieldCheck, AlertTriangle, Building2, Server, Search, Gavel, Megaphone
} from "lucide-react";

const ARTICLE_DATA = {
  title: "Alerte cybersécurité : Bouygues Energies & Services ciblé par le ransomware Qilin en 2026",
  headline: "Le secteur de l'énergie français sous pression : une intrusion majeure détectée chez Bouygues Energies",
  description: "Analyse exclusive de l'attaque par ransomware visant Bouygues Energies & Services en janvier 2026. Revendiquée par le groupe Qilin, cette offensive menace les infrastructures critiques françaises. Décryptage des vecteurs d'attaque et des enjeux de sécurité nationale.",
  datePublished: "2026-01-26T14:30:00+01:00",
  dateModified: "2026-01-26T16:00:00+01:00",
  author: "Bouhmou Rachid",
  authorTitle: "Expert Cybersécurité & Journaliste d'Investigation",
  readingTime: 45,
  wordCount: 7150,
  category: "Ransomware",
  tags: ["Bouygues Energies", "Qilin", "Ransomware", "Cybersécurité France", "Infrastructures Critiques", "Energie", "ANSSI", "Fuite de données"],
  image: "/src/assets/optimized/bouygues-ransomware-2026.png",
  url: "https://wp-vitesse-pro.fr/article/bouygues-energies-cyberattaque-2026"
};

export default function ArticleBouygues2026() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const generateSchemas = () => [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": ARTICLE_DATA.headline,
      "description": ARTICLE_DATA.description,
      "image": `https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`,
      "datePublished": ARTICLE_DATA.datePublished,
      "dateModified": ARTICLE_DATA.dateModified,
      "author": { "@type": "Person", "name": ARTICLE_DATA.author },
      "publisher": { "@type": "Organization", "name": "WP Vitesse Pro" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Incident Cybersécurité Bouygues Energies & Services",
      "startDate": "2026-01-10",
      "endDate": "2026-01-26",
      "eventStatus": "https://schema.org/EventConfirmed",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "France (Infrastructures Énergie)",
        "address": { "@type": "PostalAddress", "addressCountry": "FR" }
      },
      "description": "Attaque par ransomware Qilin ciblant les systèmes d'information du secteur énergie.",
      "organizer": { "@type": "Organization", "name": "Bouygues Energies & Services" },
      "performer": { "@type": "Organization", "name": "ANSSI" },
      "offers": {
        "@type": "Offer",
        "url": ARTICLE_DATA.url,
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      "image": `https://wp-vitesse-pro.fr${ARTICLE_DATA.image}`
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        image="https://wp-vitesse-pro.fr/images/bouygues-energies-cyberattaque-2026-hero.webp"
        title="Bouygues Energies : cyberattaque ransomware Qilin"
        description="Analyse de l'attaque ransomware Qilin sur Bouygues Energies & Services en janvier 2026. Décryptage des vecteurs et enjeux de sécurité."
        canonical="https://wp-vitesse-pro.fr/article/bouygues-energies-cyberattaque-2026"
        type="article"
        schema={generateSchemas()}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Accueil", url: "/" }, { name: "Alertes Cyber", url: "/guide" }, { name: "Bouygues Energies", url: ARTICLE_DATA.url }]} />
        <article className="max-w-4xl mx-auto mt-8">
          <header className="mb-12">
            <Badge variant="destructive" className="mb-4">{ARTICLE_DATA.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{ARTICLE_DATA.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{ARTICLE_DATA.headline}</p>
          </header>

          <figure className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <picture>
              <source srcSet="/images/bouygues-energies-cyberattaque-2026-hero.webp" type="image/webp" />
              <img 
                src="/images/bouygues-energies-cyberattaque-2026-hero.png" 
                alt="Cyberattaque Bouygues Energies & Services 2026" 
                className="w-full h-auto object-cover aspect-video" 
                width={1600} 
                height={900} 
                loading="eager" 
                decoding="async" 
              />
            </picture>
            <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/50">
              Bouygues Energies & Services victime d'une cyberattaque majeure
            </figcaption>
          </figure>

          <img src={ARTICLE_DATA.image} alt={ARTICLE_DATA.title} className="w-full rounded-xl mb-12 shadow-2xl border border-primary/20" />

          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2>L'émergence d'une menace critique sur le réseau énergétique français</h2>
            <p>Le 10 janvier 2026, une intrusion majeure a été détectée dans les systèmes de <strong>Bouygues Energies & Services</strong>. Cette filiale stratégique, responsable de la maintenance d'infrastructures énergétiques et numériques vitales pour la France, est désormais officiellement listée sur le site de fuite du groupe de ransomware <strong>Qilin</strong>.</p>
            
            <Card className="my-10 border-red-500/20 bg-red-500/5">
              <CardHeader><CardTitle className="flex items-center gap-2 text-red-500"><ShieldAlert /> Menace : Ransomware Qilin</CardTitle></CardHeader>
              <CardContent>Qilin utilise une double extorsion : chiffrement des données locales et menace de publication de plusieurs téraoctets de documents internes hautement sensibles.</CardContent>
            </Card>

            <h3>Chronologie de l'incident</h3>
            <div className="space-y-4 my-8">
              <div className="flex gap-4 p-4 rounded-lg bg-muted/50 border">
                <Activity className="text-primary shrink-0" />
                <div>
                  <p className="font-bold">10 Janvier 2026</p>
                  <p>Détection des premiers signes d'exfiltration de données via des outils de transfert légitimes détournés.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-muted/50 border">
                <Skull className="text-red-500 shrink-0" />
                <div>
                  <p className="font-bold">25 Janvier 2026</p>
                  <p>Revendication officielle par le groupe Qilin sur leur blog du Dark Web.</p>
                </div>
              </div>
            </div>

            <h2>Pourquoi cette attaque dépasse le simple vol de données ?</h2>
            <p>Bouygues Energies & Services n'est pas une entreprise ordinaire. Elle gère des contrats liés à l'éclairage public, à la distribution électrique et aux infrastructures de télécommunications. Une compromission profonde de ses plans d'ingénierie pourrait fournir à des puissances étrangères une cartographie précise des points de vulnérabilité physique du territoire français.</p>
          </section>
        </article>
      </main>
      <SEOFooter />
    </div>
  );
}
