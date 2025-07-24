const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const tutorRequests = require("./routes/tutorRequest");
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const compression = require('compression');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(cors());
app.use(express.json());
app.use(compression());

app.use("/api/tutor-requests", tutorRequests);

// --- SITEMAP ROUTE ---
app.get('/sitemap.xml', async (req, res) => {
  try {
    const links = [
      { url: '/', changefreq: 'monthly', priority: 0.8 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      { url: '/book', changefreq: 'monthly', priority: 0.8 },
      { url: '/services/tutoring', changefreq: 'monthly', priority: 0.8 },
      { url: '/services/eqao-prep', changefreq: 'monthly', priority: 0.8 },
    ];
    const stream = new SitemapStream({ hostname: 'https://www.stem-intelligence.ca' });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).send('Error generating sitemap');
  }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});