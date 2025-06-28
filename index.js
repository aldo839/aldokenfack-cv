// Modification of language button
const langButtons = document.getElementsByClassName('lang-btn');
const cvButton = document.querySelector('.cv-button');

cvButton.addEventListener('mouseover', function () {
    // Affiche uniquement le bouton "Français"
    langButtons[1].style.display = 'inline-block';
});
cvButton.addEventListener('mouseout', function () {
    // Cache à nouveau le bouton "Français"
    langButtons[1].style.display = 'none';
});
