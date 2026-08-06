const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Enhanced Destination Data
const destinations = [
  {
    id: 1,
    name: "Betla National Park",
    category: "Eco Tourism",
    district: "Latehar",
    description: "One of India's earliest tiger reserves, rich in biodiversity, wild elephants, and waterfalls.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    
    // Extended Details
    bestTimeToVisit: "November to March",
    timings: "5:00 AM – 7:00 PM",
    attractions: "Elephant Safaris, Jeep Safaris, Palamu Forts, Sal & Bamboo Forests",
    fullDetails: "Spanning 226 sq. km in the Palamu Tiger Reserve, Betla is Jharkhand's premier national park. It was among the first nine tiger reserves established under Project Tiger in India. The park is home to Tigers, Elephants, Bison (Gaur), Sloth Bears, and over 200 species of birds.",
    howToReach: "Nearest airport: Birsa Munda Airport, Ranchi (170 km). Nearest railway station: Daltonganj (25 km). Easily accessible via NH-75.",
    googleMapUrl: "https://www.google.com/maps/search/?api=1&query=Betla+National+Park+Jharkhand"
  },
  {
    id: 2,
    name: "Hundru Waterfalls",
    category: "Eco Tourism",
    district: "Ranchi",
    description: "Spectacular 98-meter high waterfall formed by the Subarnarekha River.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
    bestTimeToVisit: "October to February",
    timings: "6:00 AM – 5:00 PM",
    attractions: "Waterfalls, Trekking, Scenic Rock Formations, Photography",
    fullDetails: "Hundru Falls is one of the most famous tourist destinations near Ranchi. The Subarnarekha River falls from a height of 320 feet, creating a magnificent spectacle amidst surrounding rocky terrain.",
    howToReach: "Located around 45 km from Ranchi city center, easily reachable by private cars or taxis via Purulia Road.",
    googleMapUrl: "https://www.google.com/maps/search/?api=1&query=Hundru+Waterfalls+Ranchi+Jharkhand"
  },
  {
    id: 3,
    name: "Amreshwar Dham & Sohrai Village",
    category: "Cultural Tourism",
    district: "Khunti",
    description: "Experience authentic indigenous Sohrai and Khovar ritualistic wall murals painted during harvest seasons.",
    image: "https://i.postimg.cc/nV5G592n/Daujinagar-Agaria-Sohrai-(2).jpg",
    bestTimeToVisit: "October to December (Harvest Season)",
    timings: "Open all day",
    attractions: "Traditional Wall Paintings, Tribal Handicrafts, Sacred Temple",
    fullDetails: "Khunti is a major hub of tribal heritage in Jharkhand. Sohrai and Khovar art are traditional ritualistic mural arts practiced by indigenous women using natural ochre and clay colors.",
    howToReach: "Located about 40 km south of Ranchi along the Ranchi-Chaibasa highway.",
    googleMapUrl: "https://www.google.com/maps/search/?api=1&query=Amreshwar+Dham+Khunti+Jharkhand"
  }
];

app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// ==================== ADDED ====================
const cultureData = [
  {
    id: 1,
    title: "Sohrai & Khovar Art",
    category: "Art & Craft",
    description: "Traditional mural art forms practiced by indigenous women using natural earth colors, manganese mud, and twigs to decorate mud walls during harvest and marriage seasons.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Chhau Dance & Folk Music",
    category: "Dance & Music",
    description: "A vibrant semi-classical martial art dance recognized by UNESCO, famous for its energetic movements, battle themes, and elaborate handmade masks.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Indigenous Tribes",
    category: "Communities",
    description: "Jharkhand is home to over 30 major tribes including Santhal, Munda, Oraon, Ho, and Kharia, each with unique languages, attires, and rich cultural traditions.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80"
  }
];

const festivalsData = [
  {
    id: 1,
    name: "Sarhul Festival",
    date: "March – April (Spring Season)",
    description: "Known as the festival of flowers, the Sal tree is worshipped by the Oraon, Munda, and Santhal tribes to mark the beginning of the new year and spring harvest.",
    location: "All over Jharkhand"
  },
  {
    id: 2,
    name: "Karma Festival",
    date: "August – September (Bhadra Month)",
    description: "A major festival celebrating nature, youth, and the Karma tree branch. Sisters fast and pray for the prosperity and well-being of their brothers.",
    location: "Tribal regions across Jharkhand"
  },
  {
    id: 3,
    name: "Sohrai Festival",
    date: "October – November (Post-Diwali)",
    description: "A cattle-worshipping harvest festival where cattle are washed, fed sweet rice, and homes are beautifully decorated with traditional murals.",
    location: "Hazaribagh, Khunti, Ranchi"
  }
];

// ==================== NEW API ROUTES ====================
app.get('/api/culture', (req, res) => {
  res.json(cultureData);
});

app.get('/api/festivals', (req, res) => {
  res.json(festivalsData);
});


app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});