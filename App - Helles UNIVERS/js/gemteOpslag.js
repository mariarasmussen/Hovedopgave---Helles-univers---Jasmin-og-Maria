// lavet i fællesskab
let gemteOpslag = document.getElementById('opslagLiked'); 
let gemteSporgsmal = document.getElementById('questionLiked');
let gemteVideoer = document.getElementById('VideoLiked'); 

function changeContent1() {
    const op = document.getElementById('opslag');
    op.addEventListener('click', () => {
        gemteSporgsmal.classList.add('skjul'); 
        gemteVideoer.classList.add('skjul'); 
        gemteOpslag.classList.add('vis'); 
        gemteOpslag.classList.remove('skjul'); 
        gemteVideoer.classList.remove('vis'); 
        gemteSporgsmal.classList.remove('vis');
    })
}

function changeContent2() {
    const sp = document.getElementById('sporg');
    sp.addEventListener('click', () => {
        gemteOpslag.classList.add('skjul');
        gemteVideoer.classList.add('skjul');
        gemteSporgsmal.classList.add('vis');
        gemteSporgsmal.classList.remove('skjul');
        gemteVideoer.classList.remove('vis');
        gemteOpslag.classList.remove('vis');
    })
}

function changeContent3() {
    const vd = document.getElementById('video');
    vd.addEventListener('click', () => {
        gemteOpslag.classList.add('skjul'); 
        gemteSporgsmal.classList.add('skjul'); 
        gemteVideoer.classList.add('vis');
        gemteOpslag.classList.remove('vis'); 
        gemteSporgsmal.classList.remove('vis'); 
        gemteVideoer.classList.remove('skjul');
    })
}

changeContent1();
changeContent2();
changeContent3();