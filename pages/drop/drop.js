{ //разворачивание меню на ширине 350
    let header = document.querySelector('header');
    let headmenu = document.querySelector('header .menu');
    headmenu.addEventListener('click', function() {
        header.classList.toggle('active');
        headmenu.classList.toggle('active');
    })
}

{ //таймер
    let text = document.querySelectorAll('.sec1 .timer >p');
    setInterval(function() {
        let z = text[0].innerHTML;
        let res = z.match(/([0-9]{2})\ :\ ([0-9]{2})\ :\ ([0-9]{2})/);
        let h = res[1];
        let m = res[2];
        let s = res[3];
        if (s == 0) {
            if (m == 0) {
                h--;
                m = 59;
                s = 59;
            } else {
                m--;
                s = 59;
            }
        } else {
            s--;
        }
        let k = norm(h) + ' : ' + norm(m) + ' : ' + norm(s);
        text[0].innerHTML = k;
        text[1].innerHTML = k;
    }, 1000);

    function norm(num) {
        if (('' + num).length == 2) {
            return '' + num;
        } else {
            return '0' + num;
        }
    }
}

{ //кнопки бай на карточках
    let cards = document.querySelectorAll('.sec1 .cards .card');
    for (let card of cards) {
        let button = card.querySelector('.text .button');
        if (button !== null) {
            button.addEventListener('click', function() {
                card.classList.toggle('sold');
            })
        }
    }
}









































































































//1