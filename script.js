const button = document.getElementById('pass');
const player = document.getElementById('player');
let currentteam = '1';
const add50n1 = document.getElementById('add50n1');
const add100n1 = document.getElementById('add100n1');
const add500n1 = document.getElementById('add500n1');
const add50n2 = document.getElementById('add50n2');
const add100n2 = document.getElementById('add100n2');
const add500n2 = document.getElementById('add500n2');
let redadd = 50;
let blueadd = 50;
let redlp = 2900;
let bluelp = 2900;
const lp1 = document.getElementById('lp1');
const lp2 = document.getElementById('lp2');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const dpup1 = document.getElementById('dpup1');
const dpdown1 = document.getElementById('dpdown1');
const dpup2 = document.getElementById('dpup2');
const dpdown2 = document.getElementById('dpdown2');
const lpup1 = document.getElementById('lpup1'); //done
const lpdown1 = document.getElementById('lpdown1'); //done
const lpup2 = document.getElementById('lpup2'); //done
const lpdown2 = document.getElementById('lpdown2'); //done
let reddp = 8;
let bluedp = 8;
const dpnum1 = document.getElementById('dpnum1');
const dpnum2 = document.getElementById('dpnum2');
const devicebutton = document.getElementById('pcmode')
let currentMode = 'mob';
const pc = document.getElementById('pc');
const mobile = document.getElementById('mobile');
const restartbutton = document.getElementById('restart');

function changeteam(){
    if (currentteam==='1'){
        player.textContent = 'P2';
        currentteam = '2';
        player.style.rotate = '180deg';
        player.style.color = 'blue';
        menu2.style.scale = '1.1';
        menu1.style.scale = '1';
        menu2.style.marginTop = '.8%';
    }else{
        player.textContent = 'P1';
        player.style.rotate = '0deg';
        player.style.color = 'red';
        currentteam = '1';
        menu2.style.scale = '1';
        menu1.style.scale = '1.1';
        menu2.style.marginTop = '0%';
    }
}

button.addEventListener('click', changeteam);

function changeadd1(clicked) {
    if (clicked === '50') {
        add50n1.style.backdropFilter = 'brightness(0.8)';
        add100n1.style.backdropFilter = 'brightness(1)';
        add500n1.style.backdropFilter = 'brightness(1)';
        redadd = 50;
    } else if (clicked === '100') {
        add50n1.style.backdropFilter = 'brightness(1)';
        add100n1.style.backdropFilter = 'brightness(0.8)';
        add500n1.style.backdropFilter = 'brightness(1)';
        redadd = 100;
    } else {
        add50n1.style.backdropFilter = 'brightness(1)';
        add100n1.style.backdropFilter = 'brightness(1)';
        add500n1.style.backdropFilter = 'brightness(0.8)';
        redadd = 500;
    }
}

add50n1.addEventListener('click', () => changeadd1('50'));
add100n1.addEventListener('click', () => changeadd1('100'));
add500n1.addEventListener('click', () => changeadd1('500'));



function changeadd2(clicked) {
    if (clicked === '50') {
        add50n2.style.backdropFilter = 'brightness(0.8)';
        add100n2.style.backdropFilter = 'brightness(1)';
        add500n2.style.backdropFilter = 'brightness(1)';
        blueadd = 50;
    } else if (clicked === '100') {
        add50n2.style.backdropFilter = 'brightness(1)';
        add100n2.style.backdropFilter = 'brightness(0.8)';
        add500n2.style.backdropFilter = 'brightness(1)';
        blueadd = 100;
    } else {
        add50n2.style.backdropFilter = 'brightness(1)';
        add100n2.style.backdropFilter = 'brightness(1)';
        add500n2.style.backdropFilter = 'brightness(0.8)';
        blueadd = 500;
    }
}

add50n2.addEventListener('click', () => changeadd2('50'));
add100n2.addEventListener('click', () => changeadd2('100'));
add500n2.addEventListener('click', () => changeadd2('500'));

function lpdecrease(color){
    if (color==='red'){
        if (redlp>0){
            redlp -= redadd;
            lp1.innerText = `LP:${redlp}`;
            if (redlp<0){
                redlp = 0;
                lp1.innerText = 'LP:0';
                alert('P1 Lost!')
            }
        } else{
            redlp = 0;
            lp1.innerText = 'LP:0';
            alert('P1 Lost!')
        }
    } else{
        if (bluelp>0){
            bluelp -= blueadd;
            lp2.innerText = `LP:${bluelp}`;
            if (bluelp<0){
                bluelp = 0;
                lp2.innerText = 'LP:0';
                alert('P2 Lost!')
            }
        } else{
            bluelp = 0;
            lp2.innerText = 'LP:0';
            alert('P2 Lost!')
        }
    }
}

lpdown1.addEventListener('click', () => lpdecrease('red'));
lpdown2.addEventListener('click', () => lpdecrease('blue'));

function lpincrease(color){
    if (color==='red'){
        redlp += redadd;
        lp1.innerText = `LP:${redlp}`;
    } else{
        bluelp += blueadd;
        lp2.innerText = `LP:${bluelp}`;
    }
}

lpup1.addEventListener('click', () => lpincrease('red'));
lpup2.addEventListener('click', () => lpincrease('blue'));

function dpincrease(color){
    if (color==='red'){
        reddp += 1;
        dpnum1.innerText = `DP:${reddp}`;
    } else{
        bluedp += 1;
        dpnum2.innerText = `DP:${bluedp}`;
    }
}

dpup1.addEventListener('click', () => dpincrease('red'));
dpup2.addEventListener('click', () => dpincrease('blue'));

function dpdecrease(color){
    if (color==='red'){
        if (reddp>0){
            reddp -= 1;
            dpnum1.innerText = `DP:${reddp}`;
        }
    } else{
        if (bluedp>0){
            bluedp -= 1;
            dpnum2.innerText = `DP:${bluedp}`;
        }
    }
}


dpdown1.addEventListener('click', () => dpdecrease('red'));
dpdown2.addEventListener('click', () => dpdecrease('blue'));


function changemode(){
    if (currentMode==='mob'){
        menu2.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        currentMode = 'pc';
        mobile.style.display = 'none';
        pc.style.display = 'block';
    } else {
        menu2.style.transform = 'translate(-50%, -50%) rotate(180deg)';
        currentMode = 'mob';
        mobile.style.display = 'block';
        pc.style.display = 'none';
    }
}

devicebutton.addEventListener('click', changemode);

function restart(){
    if (confirm('Restart?')){
        player.textContent = 'P1';
        player.style.rotate = '0deg';
        player.style.color = 'red';
        currentteam = '1';
        menu2.style.scale = '1';
        menu1.style.scale = '1.1';

        bluedp = 8;
        dpnum2.innerText = `DP:${bluedp}`;
        reddp = 8;
        dpnum1.innerText = `DP:${reddp}`;

        redlp = 2900;
        lp1.innerText = `LP:${redlp}`;
        bluelp = 2900;
        lp2.innerText = `LP:${bluelp}`;

        add50n2.style.backdropFilter = 'brightness(0.8)';
        add100n2.style.backdropFilter = 'brightness(1)';
        add500n2.style.backdropFilter = 'brightness(1)';
        blueadd = 50;

        add50n1.style.backdropFilter = 'brightness(0.8)';
        add100n1.style.backdropFilter = 'brightness(1)';
        add500n1.style.backdropFilter = 'brightness(1)';
        redadd = 50;

        menu2.style.marginTop = '0%';
    }
}

restartbutton.addEventListener('click', restart);