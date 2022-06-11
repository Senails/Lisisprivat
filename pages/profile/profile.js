{ //разворачивание хедера 350пкс
    let header = document.querySelector('header');
    let headmenu = document.querySelector('header .menu');
    headmenu.addEventListener('click', function() {
        header.classList.toggle('active');
        headmenu.classList.toggle('active');
    })
}

{ //разворачивание селекта 2д и 3д
    let ditem = document.querySelector('.Ditems');
    let dbut = ditem.querySelector('.main .img');
    let acttext = ditem.querySelector('.main p')
    dbut.addEventListener('click', function() {
        ditem.classList.toggle('active')
    })
    let select = ditem.querySelectorAll('.select p');
    for (let elem of select) {
        elem.addEventListener('click', function() {
            for (let elem of select) {
                elem.classList.remove('active');
            }
            this.classList.add('active');
            acttext.innerHTML = elem.innerHTML;
            ditem.classList.remove('active')
        })
    }
}

{ //разворачивание селекта редкости
    let ditem = document.querySelector('.raritis');
    let dbut = ditem.querySelector('.main .img');
    let acttext = ditem.querySelector('.main p')
    dbut.addEventListener('click', function() {
        ditem.classList.toggle('active')
    })
    let select = ditem.querySelectorAll('.select p');
    for (let elem of select) {
        elem.addEventListener('click', function() {
            for (let elem of select) {
                elem.classList.remove('active');
            }
            this.classList.add('active');
            acttext.innerHTML = elem.innerHTML;
            ditem.classList.remove('active')
        })
    }
}

{ //селект любимых карточек под надписью Wallet
    let selects = document.querySelectorAll('.menu .profile .select p');
    for (let elem of selects) {
        elem.addEventListener('click', function() {
            for (let elem of selects) {
                elem.classList.remove('active');
            }
            this.classList.add('active');
        })
    }

}

{ //добавление карточке клас лайк
    let cards = document.querySelectorAll('.sec1 .cards .card');
    for (let card of cards) {
        let heart = card.querySelector('.text .heart');
        if (heart !== null) {
            heart.addEventListener('click', function() {
                card.classList.toggle('like');
            })
        }
    }
}

{ //добавление карточке клас актив
    let cards = document.querySelectorAll('.sec1 .cards .card');
    for (let card of cards) {
        let qvad = card.querySelector('.text .menu .cat');
        if (qvad !== null) {
            qvad.addEventListener('click', function() {
                card.classList.toggle('active');
            })
        }
    }
}





































































































//1