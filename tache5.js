// Fonction simulant une requête vers une URL
function fetchFromUrl(url) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000; // Délai aléatoire entre 1 et 3 secondes
        setTimeout(() => {
            resolve(`Données récupérées depuis ${url}`);
        }, delay);
    });
}

// Fonction pour exécuter des appels parallèles
async function parallelCalls(urls) {
    try {
        console.log("Appels parallèles en cours...");
        
        // Lancer tous les appels en parallèle
        const responses = await Promise.all(urls.map(fetchFromUrl));

        console.log("Toutes les données ont été récupérées :", responses);
    } catch (error) {
        console.error("Erreur lors de l'exécution des appels parallèles :", error.message);
    }
}

// Exemple d'utilisation
const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
];

parallelCalls(urls);
