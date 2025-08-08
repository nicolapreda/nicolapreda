
const express = require('express');
const path = require('path');
const app = express();

// Middleware per leggere i dati del form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve i file statici (HTML, CSS, JS, immagini)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server attivo su http://0.0.0.0:${PORT}`));