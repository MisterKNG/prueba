const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const nothingBtn = document.querySelector('#nothingBtn');

yesBtn.addEventListener('click',function() {
    alert('Sabía que ibas a decir TE AMO ❤️🥹✨');
});

nothingBtn.addEventListener('click', function() {
    alert('JAJA sabía que me quieres y me amas a la vez 😍💖');
});

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.floor(Math.random() * 80); // max 80% para no salir de pantalla
    const randomY = Math.floor(Math.random() * 80);
    noBtn.style.position = 'absolute';
    noBtn.style.top = randomY + "%";
    noBtn.style.left = randomX + "%";
});
