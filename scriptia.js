const apiKey = "hf_ta_cle_api"; // Remplace par ta vraie clé API

async function generateJoke() {
    const context = document.getElementById('contextInput').value.trim();
    const jokeContainer = document.getElementById('joke');

    // Vérification si contexte vide
    if (!context) {
        jokeContainer.innerText = 'Veuillez entrer un contexte.';
        jokeContainer.style.color = 'red';
        return;
    }

    // Message d'attente
    jokeContainer.innerText = 'Génération de la blague en cours...';
    jokeContainer.style.color = 'black';

    try {
        // Requête vers Hugging Face API
        const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: `Voici le contexte : ${context}\nGénère une blague courte et drôle uniquement, sans explication.`
            })
        });

        const data = await response.json();

        console.log("Réponse API:", data); // Pour vérifier en console

        // Si l'API a généré du texte
        if (Array.isArray(data) && data[0]?.generated_text) {
            const generatedText = data[0].generated_text.trim();

            // Afficher seulement la blague
            jokeContainer.innerText = generatedText;
            jokeContainer.style.color = 'darkblue';
        } 
        // Gestion d'erreur si API renvoie une erreur
        else if (data.error) {
            jokeContainer.innerText = `Erreur API : ${data.error}`;
            jokeContainer.style.color = 'red';
        } 
        // Autre erreur
        else {
            jokeContainer.innerText = 'Impossible de générer une blague. Réessaie avec un autre contexte.';
            jokeContainer.style.color = 'red';
        }

    } catch (error) {
        console.error('Erreur API:', error);
        jokeContainer.innerText = 'Erreur de connexion ou API. Réessaie plus tard.';
        jokeContainer.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateJoke');
    if (generateButton) {
        generateButton.addEventListener('click', generateJoke);
    }
});
