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
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
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

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});