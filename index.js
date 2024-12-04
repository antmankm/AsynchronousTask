

// Tâche 02

// Fonction simulant un appel à une API
function simulateApiCall() {
    return new Promise((resolve) => {
        // Simule un délai de 2 secondes pour obtenir une réponse
        setTimeout(() => {
            resolve({ message: "Données obtenues depuis l'API", status: 200 });
        }, 2000);
    });
}

// Fonction asynchrone utilisant await
async function awaitCall() {
    try {
        console.log("Appel de l'API en cours...");
        const response = await simulateApiCall(); // Attend que la promesse soit résolue
        console.log("Réponse de l'API:", response); // Enregistre les données obtenues
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API:", error); // Gestion des erreurs
    }
}

// Appeler la fonction
awaitCall();
