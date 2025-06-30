import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

// Serve hospital data by state
app.get('/api/hospitals/:state', (req, res) => {
  const state = req.params.state.toUpperCase();
  const fileMap = {
    CA: 'Hospitals_CA.json',
    NY: 'Hospitals_NY.json'
  };

  const fileName = fileMap[state];
  if (!fileName) {
    return res.status(400).json({ error: 'Unsupported state.' });
  }

  const filePath = path.join(__dirname, 'data', fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'File read error.' });
    }

    try {
      const json = JSON.parse(data);
      res.json(json);
    } catch (e) {
      console.error('Invalid JSON:', e);
      res.status(500).json({ error: 'Invalid JSON format.' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

