

// """"""::::::::::::::""""""""
//  Top Products section
let scrollContainer = document.querySelector('.gallary');
let nextBtn = document.getElementById('nextBtn')
let backtBtn = document.getElementById('backBtn')
backtBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 900;
})
nextBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 900;
})