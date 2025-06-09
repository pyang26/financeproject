require('dotenv').config();
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const FRED_API_KEY = process.env.FRED_API_KEY;
const FRED_BASE_URL = 'https://api.stlouisfed.org/fred/series/observations';

// Serve static files (your index.html, etc.)
app.use(express.static(path.join(__dirname)));

// Proxy endpoint for FRED data
app.get('/api/fred', async (req, res) => {
  const { series_id, observation_start, observation_end } = req.query;
  if (!series_id) {
    return res.status(400).json({ error: 'series_id is required' });
  }
  const url = `${FRED_BASE_URL}?series_id=${series_id}&api_key=${FRED_API_KEY}&file_type=json`
    + (observation_start ? `&observation_start=${observation_start}` : '')
    + (observation_end ? `&observation_end=${observation_end}` : '');

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from FRED' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});