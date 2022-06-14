//1
import { nanoid } from './node_modules/nanoid/nanoid.js';


{ //на всякий случчай что бы работало
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
}

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

//сторидж для магазина и колекции карточек
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
//111

{ //канвас1
    let canvas = document.querySelector('#bigcanvas');
    let ctx = canvas.getContext('2d');

    { //темный круг
        ctx.beginPath();
        ctx.arc(764, 420, 420, 0, getRadians(360));
        ctx.fillStyle = '#121212';
        ctx.fill();
        ctx.closePath();
    }

    { // секции диаграммы
        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(-63), getRadians(120));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#9E4A01';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(120), getRadians(156));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#69440D';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(156), getRadians(178));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#4D2A17';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(178), getRadians(189));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#FFB444';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(189), getRadians(225));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#CE7D07';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(225), getRadians(254));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#A36C38';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(764, 420, 315, getRadians(254), getRadians(297));
        ctx.lineWidth = 198;
        ctx.strokeStyle = '#632100';
        ctx.stroke();
        ctx.closePath();
    }

    { //проежутки между секциями диаграммы
        ctx.beginPath();
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(63))), 420 - (420 * Math.sin(getRadians(63))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(120))), 420 + (420 * Math.sin(getRadians(120))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(156))), 420 + (420 * Math.sin(getRadians(156))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(178))), 420 + (420 * Math.sin(getRadians(178))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(189))), 420 + (420 * Math.sin(getRadians(189))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(225))), 420 + (420 * Math.sin(getRadians(225))));
        ctx.moveTo(764, 420);
        ctx.lineTo(764 + (420 * Math.cos(getRadians(254))), 420 + (420 * Math.sin(getRadians(254))));
        ctx.moveTo(764, 420);
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#121212';
        ctx.stroke();
        ctx.closePath();
    }

    { // линии в лево
        { //темный круг2
            ctx.beginPath();
            ctx.arc(764, 420, 210, 0, getRadians(360));
            ctx.fillStyle = '#121212';
            ctx.fill();
            ctx.closePath();
        }

        { //линия в лево 1
            ctx.beginPath();
            let x = 720;
            let y = 44;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 2
            ctx.beginPath();
            let x = 612;
            let y = 124;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 3
            ctx.beginPath();
            let x = 500;
            let y = 204;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 4
            ctx.beginPath();
            let x = 430;
            let y = 400;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 5
            ctx.beginPath();
            let x = 430;
            let y = 480;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 6
            ctx.beginPath();
            let x = 520;
            let y = 690;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия в лево 7
            ctx.beginPath();
            let x = 650;
            let y = 770;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(0, y);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }
    }


    ctx.lineWidth = 1;
    ctx.font = '32px "Baloo 2"';

    { //текст 
        ctx.textBaseline = 'top';
        ctx.strokeText("Public Sale", 0, 50 + 5);
        ctx.fillText("Public Sale", 0, 50 + 5);

        ctx.strokeText("Team", 0, 130 + 5);
        ctx.fillText("Team", 0, 130 + 5);

        ctx.strokeText("Seed", 0, 210 + 5);
        ctx.fillText("Seed", 0, 210 + 5);

        ctx.textBaseline = 'bottom';
        ctx.strokeText("Airdrop", 0, 400 - 5);
        ctx.fillText("Airdrop", 0, 400 - 5);

        ctx.strokeText("LP", 0, 480 - 5);
        ctx.fillText("LP", 0, 480 - 5);

        ctx.strokeText("Marketing", 0, 690 - 5);
        ctx.fillText("Marketing", 0, 690 - 5);

        ctx.strokeText("Reward", 0, 770 - 5);
        ctx.fillText("Reward", 0, 770 - 5);

    }

    { //текст проценты
        ctx.lineWidth = 2;
        ctx.textBaseline = 'top';

        ctx.strokeText("12%", 160, 50 + 5);
        ctx.fillText("12%", 160, 50 + 5);

        ctx.strokeText("8%", 90, 130 + 5);
        ctx.fillText("8%", 90, 130 + 5);

        ctx.strokeText("10%", 80, 210 + 5);
        ctx.fillText("10%", 80, 210 + 5);

        ctx.textBaseline = 'bottom';
        ctx.strokeText("3%", 120, 400 - 5);
        ctx.fillText("3%", 120, 400 - 5);

        ctx.strokeText("6%", 55, 480 - 5);
        ctx.fillText("6%", 55, 480 - 5);

        ctx.strokeText("10%", 150, 690 - 5);
        ctx.fillText("10%", 150, 690 - 5);

        ctx.strokeText("51%", 120, 770 - 5);
        ctx.fillText("51%", 120, 770 - 5);
    }

    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

}



{ //канвас2
    let canvas = document.querySelector('#lowcanvas');
    let ctx = canvas.getContext('2d');

    { //темный круг
        ctx.beginPath();
        ctx.arc(335, 441, 335, 0, getRadians(360));
        ctx.fillStyle = '#121212';
        ctx.fill();
        ctx.closePath();
    }

    { // секции диаграммы
        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(-63), getRadians(120));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#9E4A01';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(120), getRadians(156));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#69440D';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(156), getRadians(178));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#4D2A17';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(178), getRadians(189));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#FFB444';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(189), getRadians(225));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#CE7D07';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(225), getRadians(254));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#A36C38';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(335, 441, 251, getRadians(254), getRadians(297));
        ctx.lineWidth = 162;
        ctx.strokeStyle = '#632100';
        ctx.stroke();
        ctx.closePath();
    }

    { //проежутки между секциями диаграммы
        ctx.beginPath();
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(63))), 441 - (335 * Math.sin(getRadians(63))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(120))), 441 + (335 * Math.sin(getRadians(120))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(156))), 441 + (335 * Math.sin(getRadians(156))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(178))), 441 + (335 * Math.sin(getRadians(178))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(189))), 441 + (335 * Math.sin(getRadians(189))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(225))), 441 + (335 * Math.sin(getRadians(225))));
        ctx.moveTo(335, 441);
        ctx.lineTo(335 + (335 * Math.cos(getRadians(254))), 441 + (335 * Math.sin(getRadians(254))));
        ctx.moveTo(335, 441);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#121212';
        ctx.stroke();
        ctx.closePath();
    }

    { // линии вверхи вниз
        { //линия вверх1
            ctx.beginPath();
            let x = 20;
            let y = 420;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 0);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вверх2
            ctx.beginPath();
            let x = 50;
            let y = 350;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 80);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вверх3
            ctx.beginPath();
            let x = 216;
            let y = 230;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 0);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вверх4
            ctx.beginPath();
            let x = 388;
            let y = 230;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 0);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вниз 1
            ctx.beginPath();
            let x = 490;
            let y = 602;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 844);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вниз 2
            ctx.beginPath();
            let x = 198;
            let y = 622;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 844);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }

        { //линия вниз 3
            ctx.beginPath();
            let x = 20;
            let y = 480;

            ctx.arc(x, y, 9, 0, getRadians(360));
            ctx.fillStyle = '#ffff';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 844);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            ctx.closePath();
        }
    }

    ctx.font = '22px "Baloo 2"';

    { //текст
        ctx.textBaseline = 'top';
        ctx.fillText("Airdrop", 30, 0);
        ctx.fillText("Seed", 60, 80);
        ctx.fillText("Team", 226, 0);
        ctx.fillText("Public Sale", 398, 0);

        ctx.textBaseline = 'bottom';
        ctx.fillText("Reward", 500, 850);
        ctx.fillText("LP", 30, 850);
        ctx.fillText("Marketing", 208, 850);
    }

    { //текст с процентами
        ctx.lineWidth = 1;

        ctx.textBaseline = 'top';
        ctx.fillText("3%", 115, 0);
        ctx.strokeText("3%", 115, 0);

        ctx.fillText("10%", 120, 80);
        ctx.strokeText("10%", 120, 80);

        ctx.fillText("8%", 290, 0);
        ctx.strokeText("8%", 290, 0);

        ctx.fillText("12%", 515, 0);
        ctx.strokeText("12%", 515, 0);

        ctx.textBaseline = 'bottom';
        ctx.fillText("51%", 585, 850);
        ctx.strokeText("51%", 585, 850);

        ctx.fillText("6%", 62, 850);
        ctx.strokeText("6%", 62, 850);

        ctx.fillText("10%", 315, 850);
        ctx.strokeText("10%", 315, 850);

    }


    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }
}





















































































































































































































//1