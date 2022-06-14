//1

{ //симуляция авторизации
    let avtorisd = JSON.parse(localStorage.getItem('avtorisd'));
    if (avtorisd !== null) {
        let div = document.querySelector('header #avatar');
        div.classList.add('active');
        if (avtorisd[0]) {
            let img = div.querySelector('img');
            img.src = avtorisd[1];
            let img2 = document.querySelector('#avatar2 img');
            img2.src = avtorisd[1];
        }
    } else {
        let z = [false, '', ''];
        localStorage.setItem('avtorisd', JSON.stringify(z));
        let div = document.querySelector('header #avatar');
        div.classList.add('active');
    }
}

{ //разворачивание хедера 350пкс
    let header = document.querySelector('header');
    let headmenu = document.querySelector('header .menu');
    headmenu.addEventListener('click', function() {
        header.classList.toggle('active');
        headmenu.classList.toggle('active');
    })
}

let selector2d3d = '';

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
            if (elem.innerHTML !== 'All items') {
                selector2d3d = elem.innerHTML;
            } else {
                selector2d3d = '';
            }
            ditem.classList.remove('active')
            redredcard(pcards);
        })
    }
}


let selectorrare = '';

{ //разворачивание селекта редкости
    let cards = document.querySelector('.sec1 .cards');

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
            if (elem.innerHTML !== 'All raritites') {
                selectorrare = elem.innerHTML.toLowerCase();
            } else {
                selectorrare = '';
            }
            ditem.classList.remove('active')
            redredcard(pcards);
        })
    }
}

let selectorlike = '';

{ //селект любимых карточек под надписью Wallet
    let selects = document.querySelectorAll('.menu .profile .select p');
    for (let elem of selects) {
        elem.addEventListener('click', function() {
            for (let elem of selects) {
                elem.classList.remove('active');
            }
            this.classList.add('active');
            if (elem.innerHTML === 'Favorited') {
                selectorlike = 'like';
            } else {
                if (elem.innerHTML === 'Activity') {
                    selectorlike = 'active';
                } else {
                    selectorlike = '';
                }
            }
            redredcard(pcards);
        })
    }

}

//сторидж для магазина и колекции карточек
let pcards = JSON.parse(localStorage.getItem('rcard'));
if (pcards === null) {
    let profilecards = [{
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group.png',
            name: 'robolis',
            price: 40,
            quantity: 1,
            copies: 100,
            rariti: 'common',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-1.png',
            name: 'serkolis',
            price: 40,
            quantity: 1,
            copies: 100,
            rariti: 'common',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-2.png',
            name: 'alfalis',
            price: 50,
            quantity: 1,
            copies: 90,
            rariti: 'rare',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-3.png',
            name: 'elfolis',
            price: 50,
            quantity: 1,
            copies: 90,
            rariti: 'rare',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-4.png',
            name: 'nightlis',
            price: 60,
            quantity: 1,
            copies: 80,
            rariti: 'legendary',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-5.png',
            name: 'laserlis',
            price: 60,
            quantity: 1,
            copies: 80,
            rariti: 'legendary',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-6.png',
            name: 'bowlis',
            price: 60,
            quantity: 1,
            copies: 80,
            rariti: 'legendary',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-7.png',
            name: 'ninlis',
            price: 70,
            quantity: 1,
            copies: 70,
            rariti: 'custom',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-8.png',
            name: 'panklis',
            price: 70,
            quantity: 1,
            copies: 70,
            rariti: 'custom',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-9.png',
            name: 'mutolis',
            price: 80,
            quantity: 1,
            copies: 60,
            rariti: 'special',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardforprofile/Mask group-10.png',
            name: 'kinglis',
            price: 80,
            quantity: 1,
            copies: 60,
            rariti: 'special',
            dznak: '2D',
            like: false
        }
    ]
    pcards = profilecards;
}
localStorage.setItem('rcard', JSON.stringify(pcards));
let mcards = JSON.parse(localStorage.getItem('mcaird'));
if (mcards === null) {
    let marketcards = [{
            id: nanoid(),
            img: '../../image/cardformarket/Mask group.png',
            name: 'slilis',
            price: 40,
            quantity: 1,
            copies: 100,
            rariti: 'common',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-1.png',
            name: 'derlis',
            price: 50,
            quantity: 1,
            copies: 90,
            rariti: 'rare',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-2.png',
            name: 'forlis',
            price: 50,
            quantity: 1,
            copies: 90,
            rariti: 'rare',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-3.png',
            name: 'venolis',
            price: 60,
            quantity: 1,
            copies: 80,
            rariti: 'legendary',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-4.png',
            name: 'spiderlis',
            price: 60,
            quantity: 1,
            copies: 80,
            rariti: 'legendary',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-5.png',
            name: 'nolis',
            price: 50,
            quantity: 1,
            copies: 70,
            rariti: 'custom',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-6.png',
            name: 'foxlis',
            price: 50,
            quantity: 1,
            copies: 70,
            rariti: 'custom',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-7.png',
            name: 'stranlis',
            price: 60,
            quantity: 1,
            copies: 60,
            rariti: 'special',
            dznak: '2D',
            like: false
        },
        {
            id: nanoid(),
            img: '../../image/cardformarket/Mask group-8.png',
            name: 'dalis',
            price: 60,
            quantity: 1,
            copies: 60,
            rariti: 'special',
            dznak: '2D',
            like: false
        }
    ]
    mcards = marketcards;
}
localStorage.setItem('mcaird', JSON.stringify(mcards));

//рендер карточек и взаимодейстия с ними
let cards = document.querySelector('.sec1 .cards');
let input = document.querySelector('.sec1 .menu .nav .poisk input');

input.addEventListener('input', function() {
    redredcard(pcards);
})

redredcard(pcards);

function redredcard(data) {
    let profilecards = filtrofcards(data);
    cards.innerHTML = '';

    for (let card of profilecards) {
        cards.appendChild(createcard(card.id, card.img, card.name, card.like, card.rariti, card.dznak));
    }

    function createcard(id, img, name, like, rariti, dznak) {
        let card = document.createElement('div');
        card.classList.add('card');
        if (like === true) card.classList.add('like');
        card.dataset.id = id;
        card.innerHTML = `
        <img src="${img}" alt="">
        <div class="text">
            <p>${name}</p>
            <div class="menu">
                <ul>
                    <li>Sell</li>
                    <li>Copy Link</li>
                    <li>Transfer</li>
                    <li>Make profile picture</li>
                    <li>Stake</li>
                </ul>
                <div class="cat"></div>
            </div>
            <div class="heart"></div>
        </div>`;
        return card;
    }

    { //добавление карточке клас лайк
        let cards = document.querySelectorAll('.sec1 .cards .card');
        for (let card of cards) {
            let heart = card.querySelector('.text .heart');
            if (heart !== null) {
                heart.addEventListener('click', function() {
                    addlike(card.dataset.id)
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
            card.addEventListener('mouseleave', function() {
                card.classList.remove('active');
            })
        }
    }

    { //продажа карточек
        let cardss = cards.querySelectorAll('.card');
        for (let card of cardss) {
            let sell = card.querySelector('.text .menu ul li:nth-child(1)')
            sell.addEventListener('click', function() {
                sellbyid(card.dataset.id);
                removebyid(card.dataset.id);
                checkavatar(card.dataset.id);
                redredcard(pcards);
            })
        }
    }

    { // поставить картинку на аватарку!!!
        let cardss = cards.querySelectorAll('.card');
        for (let card of cardss) {
            let setavatar = card.querySelector('.text .menu ul li:nth-child(4)');
            setavatar.addEventListener('click', function() {
                let elem = pcards.filter(function(el) {
                    if (el.id === card.dataset.id) return true
                    else return false
                })[0];
                let img1 = document.querySelector('#avatar img');
                img1.src = elem.img;
                let img2 = document.querySelector('#avatar2 img');
                img2.src = elem.img;
                let k = [true, elem.img, card.dataset.id];
                localStorage.setItem('avtorisd', JSON.stringify(k));
                card.classList.remove('active');
            })
        }
    }

    function addlike(id) {
        let z = pcards.map(function(card) {
            if (card.id === id) {
                card.like = !card.like
            }
            return card;
        })
        localStorage.setItem('rcard', JSON.stringify(z));
    }

    function removebyid(id) {
        pcards = pcards.filter(function(card) {
            if (card.id === id) return false;
            return true;
        })
        localStorage.setItem('rcard', JSON.stringify(pcards));
    }

    function sellbyid(id) {
        let mcards = JSON.parse(localStorage.getItem('mcaird'));
        let elem = pcards.filter(function(card) {
            if (card.id == id) {
                return true
            }
            return false
        })[0];
        mcards.push(elem);
        localStorage.setItem('mcaird', JSON.stringify(mcards));
    }

    function checkavatar(id) {
        let avtorisd = JSON.parse(localStorage.getItem('avtorisd'))
        if (avtorisd[2] === id) {
            avtorisd[0] = false;
            localStorage.setItem('avtorisd', JSON.stringify(avtorisd));
            let img1 = document.querySelector('#avatar img');
            img1.src = '../../image/avatar.png';
            let img2 = document.querySelector('#avatar2 img');
            img2.src = '../../image/avatar.png';
        };
    }

};


function filtrofcards(date) {
    let date1 = date.filter(function(obj) {
        if (selectorlike === 'like') {
            if (obj.like == true) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    });
    let date2 = date1.filter(function(obj) {
        if (selector2d3d === '') {
            return true;
        } else {
            if (obj.dznak === selector2d3d) {
                return true;
            }
            return false;
        }
    })
    let date3 = date2.filter(function(obj) {
        if (selectorrare === '') {
            return true;
        } else {
            if (selectorrare === obj.rariti) {
                return true;
            }
            return false;
        }
    })
    let date4;
    if (selectorlike === 'active') {
        let id = JSON.parse(localStorage.getItem('avtorisd'))[2];
        date4 = date3.filter(function(obj) {
            if (obj.id === id) {
                return true;
            }
            return false;
        })
    } else {
        date4 = date3;
    }
    let date5 = date4.filter(function(obj) {
        let mach = obj.name.match(input.value);
        if (mach !== null) {
            return true;
        } else {
            return false;
        }
    })
    return date5;
}

function nanoid() {
    let z = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
    let id = '';
    for (let i = 0; i < 20; i++) {
        id += z[Math.floor(Math.random() * 63)];
    }
    return id;
}


































































































//1