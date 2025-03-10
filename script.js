// Sélectionner les éléments
const imageUpload = document.getElementById('imageUpload');
const memeCanvas = document.getElementById('memeCanvas');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateButton = document.getElementById('generateButton');
const downloadButton = document.getElementById('downloadButton');
const uploadButton = document.getElementById('uploadButton');
const whatsappShareButton = document.getElementById('whatsappShareButton');
const facebookShareButton = document.getElementById('facebookShareButton');

const ctx = memeCanvas.getContext('2d');

imageUpload.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            memeCanvas.width = img.width;
            memeCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

generateButton.addEventListener('click', () => {
    const img = new Image();
    img.src = memeCanvas.toDataURL();
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        ctx.font = '30px Impact';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(topText.value, memeCanvas.width / 2, 40);
        ctx.fillText(bottomText.value, memeCanvas.width / 2, memeCanvas.height - 20);
    };
});

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = memeCanvas.toDataURL();
    link.click();
});

// Cloudinary configuration
const cloudName = 'drjlstl2c';
const uploadPreset = 'meme_preset';

uploadButton.addEventListener('click', () => {
    const dataUrl = memeCanvas.toDataURL();
    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: JSON.stringify({
            file: dataUrl,
            upload_preset: uploadPreset
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Mème téléchargé avec succès!');
        // Ajouter l'image à la galerie
        const img = document.createElement('img');
        img.src = data.secure_url;
        document.getElementById('gallery').appendChild(img);
    })
    .catch(err => {
        console.error('Erreur lors du téléchargement sur Cloudinary', err);
    });
});

// Boutons de partage
whatsappShareButton.addEventListener('click', () => {
    const memeUrl = memeCanvas.toDataURL();
    const whatsappUrl = `https://api.whatsapp.com/send?text=Regardez%20ce%20mème%20que%20j'ai%20créé%20:${memeUrl}`;
    window.open(whatsappUrl, '_blank');
});

facebookShareButton.addEventListener('click', () => {
    const memeUrl = memeCanvas.toDataURL();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(memeUrl)}`;
    window.open(facebookUrl, '_blank');
});
