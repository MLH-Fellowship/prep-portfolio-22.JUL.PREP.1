const fellows = [
    {
        "name": "Akshita Gupta",
        "img": "./assets/img/akshita-gupta.png",
        "location": "Uttar Pradesh, India",
        "coordinates": [
            26.92356,
            80.56635
        ]
    },
    {
        "name": "Merouane Zouaid",
        "img": "./assets/img/Merouane-Zouaid.jpeg",
        "location": "Agadir, Morocco",
        "coordinates": [
            30.417130,
            -9.599250
        ]
    },
    {
        "name": "Soumya Satheesan",
        "img": "./assets/img/Soumya-Satheesan.jpg",
        "location": "Victoria, Seychelles",
        "coordinates": [
            -4.6232085,
            55.452359
        ]
    },
    {
        "name": "Ain Fatima",
        "img": "./assets/img/Ain-Fatima.jpeg",
        "location": "Ranchi, India",
        "coordinates": [
            23.3700501,
            85.3250387
        ]
    },
    {
        "name": "Rohit Patil",
        "img": "./assets/img/Rohit-Patil.jpeg",
        "location": "India",
        "coordinates": [
            22.3511148,
            78.6677428
        ]
    },
    {
        "name": "Rakesh Potnuru",
        "img": "./assets/img/Rakesh.jpg",
        "location": "Andhra Pradesh, India",
        "coordinates": [
            14.843250,
            78.75904
        ]
    },
    {
        "name": "Ish Kapoor",
        "img": "./assets/img/Ish-Kapoor.jpg",
        "location": "Delhi, India",
        "coordinates": [
            28.6273928,
            77.1716954
        ]
    },
    {
        "name": "Mohd Arshad",
        "img": "./assets/img/Mohd-Arshad.jpeg",
        "location": "New Delhi, India",
        "coordinates": [
            28.6273928,
            77.1716954
        ]
    },
    {
        "name": "kuwar kapur",
        "img": "./assets/img/kuwar-kapur.jpg",
        "location": "Delhi,India",
        "coordinates": [
            28.6273928,
            77.1716954
        ]
    },
    {
        "name": "Riya Singh",
        "img": "./assets/img/Riya-Singh.jpg",
        "location": "Varanasi, India",
        "coordinates": [
            25.3356491,
            83.0076292
        ]
    },
    {
        "name": "Karnik Kanojia",
        "img": "./assets/img/Karnik-Kanojia.png",
        "location": "Uttar Pradesh, India",
        "coordinates": [
            26.2363274,
            81.2068466
        ]
    },
    {
        "name": "Dhroov Makwana",
        "img": "./assets/img/Dhroov-Makwana.jpg",
        "location": "Pune, India",
        "coordinates": [
            18.521428,
            73.8544541
        ]
    },
    {
        "name": "Archit Jain",
        "img": "./assets/img/Archit-Jain.jpg",
        "location": "India",
        "coordinates": [
            22.3511148,
            78.6677428
        ]
    }
]

var map = L.map('map').setView([40, -86], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
    className: 'map-tiles'
}).addTo(map);

fellows.forEach(fellow => {
    var myIcon = L.icon({
        iconUrl: fellow.img,
        iconSize: [50, 50],
        iconAnchor: [22, 94],
        popupAnchor: [4, -82],
        className: "marker-icon"
    });

    var marker = L.marker(fellow.coordinates, {icon: myIcon}).addTo(map);
    marker.bindPopup(`<a href="#"><b>${fellow.name}</b></a><br>${fellow.location}`).openPopup();
});
