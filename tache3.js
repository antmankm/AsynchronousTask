

// TACHE 3 



// Fonction simulant un appel à une API
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3; // 70% de chance de succès
            if (isSuccess) {
                resolve({ message: "Données obtenues depuis l'API", status: 200 });
            } else {
                reject(new Error("Échec de la connexion à l'API"));
            }
        }, 2000);
    });
}

// Fonction asynchrone avec gestion d'erreurs
async function awaitCall() {
    try {
        console.log("Appel de l'API en cours...");
        const response = await simulateApiCall(); // Attend la promesse
        console.log("Réponse de l'API:", response); // Affiche les données si succès
    } catch (error) {
        console.error("Erreur :", error.message); // Affiche un message d'erreur technique
        console.log("Désolé, quelque chose s'est mal passé. Veuillez réessayer plus tard."); // Message convivial
    }
}

// Appeler la fonction
awaitCall();
