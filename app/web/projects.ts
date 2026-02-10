export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    link: string;
    themeColor: string; // Hex code for accent color
    image: string;
}

export const projects: Project[] = [
    {
        id: "ssa-agency",
        title: "SSA Agency",
        tagline: "Riempi il tuo locale senza ballare su TikTok",
        description:
            "Agenzia di marketing scientifico verticale sulle attività locali. Il sito comunica un approccio 'no-nonsense' al marketing: niente vanity metrics o trend passeggeri, ma strategie concrete per la lead generation. Il design riflette questa serietà con uno stile bold e diretto, enfatizzando il metodo scientifico e i risultati misurabili.",
        features: [
            "Marketing Scientifico & Data-Driven",
            "Lead Generation per Attività Locali",
            "Copywriting Persuasivo",
            "Automazione & CRM",
        ],
        link: "https://ssaagency.it/",
        themeColor: "#ef4444",
        image: "/assets/projects/ssa-agency.jpg",
    },
    {
        id: "domora",
        title: "Domora Immobiliare",
        tagline: "A un passo dai tuoi sogni | Aste Immobiliari",
        description:
            "Piattaforma e servizio di consulenza per l'acquisto sicuro di immobili in asta giudiziaria. Il progetto si focalizza sulla trasparenza e sull'umanità del servizio, guidando il cliente attraverso la burocrazia e gli aspetti legali. Il sito trasmette fiducia e professionalità, elementi chiave per il settore real estate.",
        features: [
            "Consulenza Aste Giudiziarie",
            "Assistenza Legale Completa",
            "Analisi Rischi & Benefici",
            "Risparmio 20-40% sul Mercato",
        ],
        link: "https://domoraimmobiliare.it/",
        themeColor: "#0f172a",
        image: "/assets/projects/domora.jpg",
    },
    {
        id: "sun-fai",
        title: "Sun-Fai",
        tagline: "Tutta un'altra energia. La tua. La nostra.",
        description:
            "Sito istituzionale per una Cooperativa di Energia Rinnovabile e Comunità Energetica Solidale. Il progetto unisce sostenibilità ambientale e impatto sociale. L'interfaccia è pulita e accogliente, pensata per spiegare concetti complessi come le CER (Comunità Energetiche Rinnovabili) in modo semplice a cittadini e istituzioni.",
        features: [
            "Comunità Energetica Solidale (CER)",
            "Gestione Soci & Adesioni",
            "News & Eventi sul Territorio",
            "Sostenibilità Ambientale",
        ],
        link: "https://www.sun-fai.org/",
        themeColor: "#16a34a",
        image: "/assets/projects/sun-fai.jpg",
    },
    {
        id: "galacticos",
        title: "Galacticos Vele Blu",
        tagline: "Locally Hated, Globally Known",
        description:
            "Hub digitale completo per una squadra di calcio. Molto più di un sito vetrina, è una piattaforma dinamica che gestisce il calendario partite, le classifiche, il roster giocatori e una media gallery aggiornata. Include anche uno shop online e un pannello di amministrazione per la gestione dei contenuti.",
        features: [
            "Gestione Roster & Statistiche",
            "Calendario & Risultati Live",
            "Media Gallery",
            "Shop Online & Admin Panel",
        ],
        link: "https://galacticosvb.it/",
        themeColor: "#3b82f6",
        image: "/assets/projects/galacticos.jpg",
    },
    {
        id: "predanicola",
        title: "Nicola Preda Portfolio",
        tagline: "Filmmaker & Photographer",
        description:
            "Il mio portfolio personale. Un'esperienza immersiva che evidenzia la fusione tra competenze tecniche (sviluppo web) e visione artistica (foto/video). Il design è minimalista ma curato nei minimi dettagli per lasciare spazio alle immagini e ai progetti, raccontando storie visive potenti.",
        features: [
            "Showcase Video & Foto",
            "Design Minimalista & Curato",
            "Performance & SEO",
            "Personal Branding",
        ],
        link: "https://predanicola.it/",
        themeColor: "#000000",
        image: "/assets/projects/predanicola.jpg",
    },
];
