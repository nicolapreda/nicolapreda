
const express = require('express');
const path = require('path');
const app = express();

// Middleware per leggere i dati del form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Compression Middleware (Gzip/Brotli)
const compression = require('compression');
app.use(compression());

// Serve i file statici con Caching (1 giorno)
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d', // Cache static assets for 1 day
    etag: false
}));

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup RSS Parser for YouTube
const Parser = require('rss-parser');
const parser = new Parser();
const YOUTUBE_CHANNEL_ID = 'UC1VPT4qglYpXyj1nt_sL2sA'; // <--- INSERISCI QUI IL TUO CHANNEL ID (es. UCxxxxxxxxxxxx)

// Helper function to fetch latest videos
async function getLatestVideos() {
    try {
        const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`);
        const videos = feed.items.slice(0, 3).map(item => ({
            id: (item.id.includes(':') ? item.id.split(':')[2] : item.id), // Handle yt:video:ID or just ID
            title: item.title,
            link: item.link
        }));
        console.log('Fetched YouTube Videos:', JSON.stringify(videos, null, 2));
        return videos;
    } catch (error) {
        console.error('Error fetching YouTube feed:', error.message);
        return []; // Return empty if error (e.g. invalid ID)
    }
}

// SEO Configuration
const BASE_URL = 'https://www.predanicola.it'; // Sostituisci con il tuo dominio reale
const DEFAULT_IMAGE = `${BASE_URL}/assets/preview_social.jpg`; // Assicurati di avere un'immagine di default

const SEO = {
    home: {
        title: 'NICOLA PREDA | Filmmaker & Photographer',
        description: 'Filmmaker e Fotografo basato a Milano. Specializzato in video eventi, sport, corporate e produzione di contenuti social. Racconto storie attraverso immagini.',
        keywords: 'Nicola Preda, Filmmaker Milano, Fotografo Milano, Video Eventi, Galacticos, Video Corporate, Social Media Content',
        image: `${BASE_URL}/assets/profile.jpg`,
        url: `${BASE_URL}/`
    },
    portfolio: {
        title: 'PORTFOLIO - NICOLA PREDA',
        description: 'Esplora i progetti di Nicola Preda. Sport, Eventi, Promote e Web Design. Una selezione dei migliori lavori di videomaking e fotografia.',
        image: `${BASE_URL}/assets/portfolio_preview.jpg`,
        url: `${BASE_URL}/portfolio`
    },
    sport: {
        title: 'SPORT - NICOLA PREDA',
        description: 'Fotografia e Video Sportivi. Il racconto della competizione, dal progetto Galacticos alle collaborazioni con club professionistici.',
        image: `${BASE_URL}/assets/galacticos_1.png`,
        url: `${BASE_URL}/sport`
    },
    eventi: {
        title: 'EVENTI - NICOLA PREDA',
        description: 'Reportage di Eventi e Nightlife a Milano. Video aftermovie e foto che catturano l\'energia della serata.',
        image: `${BASE_URL}/assets/eventi/GLUE-71.jpg`,
        url: `${BASE_URL}/eventi`
    },
    promote: {
        title: 'PROMOTE - NICOLA PREDA',
        description: 'Video Corporate e Social Branding. Contenuti strategici per aziende e personal brand che vogliono distinguersi.',
        image: `${BASE_URL}/assets/everyday-life-scaled.png`,
        url: `${BASE_URL}/promote`
    },
    web: {
        title: 'WEB - NICOLA PREDA',
        description: 'Web Design e Sviluppo. Creazione di siti web moderni, veloci e ottimizzati per convertire e comunicare il tuo brand.',
        image: `${BASE_URL}/assets/final_site_preview_1767115401406.webp`,
        url: `${BASE_URL}/web`
    },
    contatti: {
        title: 'CONTATTI - NICOLA PREDA',
        description: 'Contatta Nicola Preda per collaborazioni, preventivi o informazioni. Realizziamo insieme il tuo prossimo progetto video o foto.',
        image: `${BASE_URL}/assets/profile.jpg`,
        url: `${BASE_URL}/contatti`
    },
    galacticos: {
        title: 'GALACTICOS - NICOLA PREDA',
        description: 'Il progetto Galacticos: una storia di sport, amicizia e crescita raccontata attraverso l\'obiettivo.',
        image: `${BASE_URL}/assets/galacticos_1.png`,
        url: `${BASE_URL}/galacticos`
    }
};

// Routes
app.get('/', async (req, res) => {
    const videos = await getLatestVideos();
    res.render('index', { 
        meta: SEO.home,
        videos: videos,
        page: 'home' 
    });
});
app.get('/index.html', (req, res) => res.redirect('/'));

app.get('/portfolio.html', (req, res) => res.render('portfolio', { meta: SEO.portfolio }));
app.get('/portfolio', (req, res) => res.render('portfolio', { meta: SEO.portfolio }));

app.get('/contatti.html', (req, res) => res.render('contatti', { meta: SEO.contatti }));
app.get('/contatti', (req, res) => res.render('contatti', { meta: SEO.contatti }));

app.get('/eventi.html', (req, res) => res.render('eventi', { meta: SEO.eventi }));
app.get('/eventi', (req, res) => res.render('eventi', { meta: SEO.eventi }));

app.get('/galacticos.html', (req, res) => res.render('galacticos', { meta: SEO.galacticos }));
app.get('/galacticos', (req, res) => res.render('galacticos', { meta: SEO.galacticos }));

// New Categories
app.get('/sport.html', (req, res) => res.render('sport', { meta: SEO.sport }));
app.get('/sport', (req, res) => res.render('sport', { meta: SEO.sport }));

app.get('/promote.html', (req, res) => res.render('promote', { meta: SEO.promote }));
app.get('/promote', (req, res) => res.render('promote', { meta: SEO.promote }));

app.get('/web.html', (req, res) => res.render('web', { meta: SEO.web }));
app.get('/web', (req, res) => res.render('web', { meta: SEO.web }));

app.get('/privacy-policy.html', (req, res) => res.redirect('https://www.iubenda.com/privacy-policy/88326651'));
app.get('/privacy-policy', (req, res) => res.redirect('https://www.iubenda.com/privacy-policy/88326651'));

app.get('/cookie-policy.html', (req, res) => res.redirect('https://www.iubenda.com/privacy-policy/88326651/cookie-policy'));
app.get('/cookie-policy', (req, res) => res.redirect('https://www.iubenda.com/privacy-policy/88326651/cookie-policy'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server attivo su http://0.0.0.0:${PORT}`));