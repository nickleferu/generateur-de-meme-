async function generateJoke() {
    const context = document.getElementById('contextInput').value;

    if (!context) {
        document.getElementById('joke').innerText = 'Veuillez entrer un contexte.';
        document.getElementById('joke').style.color = 'red';
        return;
    }

    try {
        const apiKey = 'ta_cle_api_secrete'; // Place ta clé API ici

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "system", content: "Tu es un humoriste qui génère des blagues drôles."},
                    {role: "user", content: `Écris une blague drôle à propos de ${context}`}
                ],
                max_tokens: 100,
                n: 1,
                temperature: 0.8
            })
        });

        const data = await response.json();
        console.log('Réponse de l\'API:', data);

        if (data.error && data.error.code === "insufficient_quota") {
            document.getElementById('joke').innerText = "Désolé, le quota d'utilisation de l'API a été dépassé. Veuillez réessayer plus tard ou contacter l'administrateur.";
            document.getElementById('joke').style.color = 'red';
            return;
        }

        if (data && data.choices && data.choices.length > 0) {
            const joke = data.choices[0].message.content.trim();
            document.getElementById('joke').innerText = joke;
            document.getElementById('joke').style.color = 'black';
        } else {
            document.getElementById('joke').innerText = 'Aucune blague trouvée.';
            document.getElementById('joke').style.color = 'red';
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        document.getElementById('joke').innerText = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        document.getElementById('joke').style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateJoke');
    if (generateButton) {
        generateButton.addEventListener('click', generateJoke);
    } else {
        console.error("Le bouton 'generateJoke' n'a pas été trouvé dans le DOM");
    }
});
