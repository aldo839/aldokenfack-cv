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

// Modification of education navigation
const schoolBtn = document.getElementById('SchoolBtn');
const onlineBtn = document.getElementById('OnlineBtn');
const schoolContent = document.getElementById('School-content');
const onlineContent = document.getElementById('Online-content');

schoolBtn.addEventListener('click', function() {
    if (schoolContent.style.display != 'block'){
        schoolContent.style.display = 'block';
        onlineContent.style.display = 'none';
        schoolBtn.style.backgroundColor = '#191e2a';
        schoolBtn.style.color = 'white';
        onlineBtn.style.backgroundColor = 'white';
        onlineBtn.style.color = 'black';
    }
})

onlineBtn.addEventListener('click', function() {
    if (onlineContent.style.display != 'block'){
        onlineContent.style.display = 'block';
        schoolContent.style.display = 'none';
        onlineBtn.style.backgroundColor = '#191e2a';
        onlineBtn.style.color = 'white';
        schoolBtn.style.backgroundColor = 'white';
        schoolBtn.style.color = '#191e2a';
    }
});

document.querySelectorAll('.online-school-title').forEach((title) => {
    title.addEventListener('click', () => {
        const description = title.parentElement.querySelector('.school-description');
        const icon = title.querySelector('i');

        // Toggle affichage description
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            description.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});





// Open school description

