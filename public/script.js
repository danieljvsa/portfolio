const toggleButton = document.querySelector('#btn-mobile')
const navbarLinks = document.querySelector('#menu')

clicks = 0

toggleButton.addEventListener('click', () => {
    clicks++
    function isOdd(num) { return num % 2;}
    if (isOdd(clicks) == 1) {
        navbarLinks.setAttribute('style', 'height: auto !important;')
    }else{
        navbarLinks.setAttribute('style', 'height: 0 !important;')
    }
})





   
