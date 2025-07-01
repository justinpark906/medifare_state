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
    AK: 'Hospitals_AK.json',
    AL: 'Hospitals_AL.json',
    AR: 'Hospitals_AR.json',
    AZ: 'Hospitals_AZ.json',
    CA: 'Hospitals_CA.json',
    CO: 'Hospitals_CO.json',
    CT: 'Hospitals_CT.json',
    DE: 'Hospitals_DE.json',
    FL: 'Hospitals_FL.json',
    GA: 'Hospitals_GA.json',
    HI: 'Hospitals_HI.json',
    IA: 'Hospitals_IA.json',
    ID: 'Hospitals_ID.json',
    IL: 'Hospitals_IL.json',
    IN: 'Hospitals_IN.json',
    KS: 'Hospitals_KS.json',
    KY: 'Hospitals_KY.json',
    LA: 'Hospitals_LA.json',
    MA: 'Hospitals_MA.json',
    MD: 'Hospitals_MD.json',
    ME: 'Hospitals_ME.json',
    MI: 'Hospitals_MI.json',
    MN: 'Hospitals_MN.json',
    MO: 'Hospitals_MO.json',
    MS: 'Hospitals_MS.json',
    MT: 'Hospitals_MT.json',
    NC: 'Hospitals_NC.json',
    ND: 'Hospitals_ND.json',
    NE: 'Hospitals_NE.json',
    NH: 'Hospitals_NH.json',
    NJ: 'Hospitals_NJ.json',
    NM: 'Hospitals_NM.json',
    NV: 'Hospitals_NV.json',
    NY: 'Hospitals_NY.json',
    OH: 'Hospitals_OH.json',
    OK: 'Hospitals_OK.json',
    OR: 'Hospitals_OR.json',
    PA: 'Hospitals_PA.json',
    RI: 'Hospitals_RI.json',
    SC: 'Hospitals_SC.json',
    SD: 'Hospitals_SD.json',
    TN: 'Hospitals_TN.json',
    TX: 'Hospitals_TX.json',
    UT: 'Hospitals_UT.json',
    VA: 'Hospitals_VA.json',
    VT: 'Hospitals_VT.json',
    WA: 'Hospitals_WA.json',
    WI: 'Hospitals_WI.json',
    WV: 'Hospitals_WV.json',
    WY: 'Hospitals_WY.json',
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

