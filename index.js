const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('Saía que ibas a decir como amigo jeje Te amo mi estimada <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.computedStyleMap.setProperty('top',randomY+'%');
    noBtn.computedStyleMap.setProperty('left',randomX+'%');
    noBtn.computedStyleMap.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})