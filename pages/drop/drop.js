//1

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

{ //симуляция авторизации
    let avtorisd = JSON.parse(localStorage.getItem('avtorisd'));
    if (avtorisd !== null) {
        let div = document.querySelector('header #avatar');
        div.classList.add('active');
        if (avtorisd[0]) {
            let img = div.querySelector('img');
            img.src = avtorisd[1];
        }
    }
}

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

{ //ревлизация рендера карточек , функция возвращающая елемент с карточкой
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
        ];
        mcards = marketcards;
    }
    localStorage.setItem('mcaird', JSON.stringify(mcards));

    rendercards(mcards)

    function rendercards(marketcards) {
        let cards = document.querySelector('.sec1 .cards');
        cards.innerHTML = '';
        for (let card of marketcards) {
            cards.appendChild(createcard(card.id, card.img, card.name, card.price, card.quantity, card.copies, card.sold));
        }

        { //обработка покупки
            let cardds = cards.querySelectorAll('.card');
            for (let card of cardds) {
                let button = card.querySelector('.text .button');
                if (button !== null) {
                    button.addEventListener('click', function buy() {
                        card.classList.add('sold');
                        buybyid(card.dataset.id);
                        removebyid(card.dataset.id);
                        localStorage.setItem('mcaird', JSON.stringify(mcards));
                        button.removeEventListener('click', buy)
                    })
                }
            }
        }

        function createcard(id, img, name, price, quantity, copies, sold) {
            let card = document.createElement('div');
            card.classList.add('card');
            if (sold) card.classList.add('sold');
            card.dataset.id = id;
            card.innerHTML = `
            <img src="${img}" alt="">
            <div class="soldd"></div>
            <div class="text">
                <div class="vdiv">
                    <p class="name">${name}</p>
                    <p class="price">${price} BSW</p>
                </div>
                <div class="ndiv">
                    <div class="str">
                        <span>Quantity:</span>
                        <span>${quantity}</span>
                    </div>
                    <div class="str">
                        <span>Copies:</span>
                        <span>${copies}</span>
                    </div>
                    <p class="name">Discription:</p>
                    <p class="texx">Owners of these NearFox will be able to freely move around all the cities of our future world and will receive additional rewards for completing tasks. </p>
                </div>
                <div class="button">
                    <span>Buy</span>
                    <span>Sold out</span>
                </div>
            </div>
            `;
            return card
        } //принимает данные о картинке и возвращает верстку карточки

        function removebyid(id) {
            mcards = mcards.filter(function(card) {
                if (card.id === id) return false
                return true
            })
        }

        function buybyid(id) {
            let profilecard = JSON.parse(localStorage.getItem('rcard'));
            if (profilecard !== null) {
                let elem = mcards.filter(function(card) {
                    if (card.id === id) return true;
                })[0];
                profilecard.push(elem);
                localStorage.setItem('rcard', JSON.stringify(profilecard));
            }
        }
    }
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