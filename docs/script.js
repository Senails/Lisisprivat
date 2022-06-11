//1
let header = document.querySelector('header');
let headmenu = document.querySelector('header .menu');
headmenu.addEventListener('click', function() {
    header.classList.toggle('active');
    headmenu.classList.toggle('active');
})

let menu = document.querySelectorAll('main .sec4 .menu .vary');
let cards = document.querySelectorAll('main .sec4 .smblock');
for (let but of menu) {
    but.addEventListener('click', function() {
        for (let elem of menu) {
            elem.classList.remove('active')
        }

        but.classList.add('active');

        for (let elem of cards) {
            elem.classList.add('none');
        }
        cards[but.dataset.num].classList.remove('none');
    })

}












































































































//1