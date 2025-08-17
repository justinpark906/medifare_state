# 🏥 MediFare

**Compare hospital prices. Save thousands.**  
MediFare is a web-based tool that empowers patients to easily compare procedure costs across hospitals.

🌐 [Visit the site](https://medifare.us)  
---

## 🚀 About

Healthcare in the U.S. is broken — especially when it comes to pricing. Most people have no idea what they’ll pay until after they’ve received care.

**MediFare changes that.**  
Using publicly available data from hospitals (mandated by the CMS Transparency Rule), MediFare lets you:

- 🔍 Search for a medical procedure  
- 🏥 Compare prices across hospitals  
- 📍 Filter by location  
- 💬 View total, covered, and Medicare payment estimates  

---

## 🛠 Tech Stack

| Frontend  | Backend  | Analytics |
|-----------|----------|-----------|
| React + Vite | Express (Node.js) | Google Analytics 4 |

---

## 📁 Folder Structure

```
medifare/
├── client/           # React + Vite frontend
│   ├── public/       # Static assets
│   ├── src/
│   │   ├── pages/    # Pages (Search, Results, etc.)
│   │   ├── components/ # Header, Footer, Sign Up
│   │   ├── styles/   # CSS Files
│   │   ├── App.jsx, main.jsx
│   └── index.html    # Includes GA4 snippet
├── server/           # Express backend
│   ├── data/         # Hospital & pricing JSON data
│   └── server.js
```

