// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// DATE & GREETINGS
let today = new Date();
let day = today.getDay();
const dayList = ['Sunday.', 'Monday.', 'Tuesday.', 'Wednesday.', 'Thursday.', 'Friday.', 'Saturday.'];
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let time = today.toLocaleTimeString('en-US', { hour12: false });
let timeSplit = time.split(':');
let timeJoin = timeSplit.join('');

const greeting = () => {
    if (timeJoin >= '120000' && timeJoin <= '175959') {
        return timeOfDay = 'Good afternoon' 
    } else if (timeJoin <= '115959') { 
        return timeOfDay = 'Good morning' 
    } else if (timeJoin >= '180000') { 
        return timeOfDay = 'Good evening' 
    }
}



// JOYFUL WORDS
const joyWords = ['amazing', 'lovely', 'awesome', 'fine', 'cool', 'new', 'dazzling', 'grand', 'graceful', 'superb', 'unique', 'charming'];
const ranJoy = joyWords[Math.floor(Math.random() * joyWords.length)];
// first word
document.getElementById('boldExpression').innerHTML = `${ranJoy}`;


let index = 0;
function joyfulWords() { 
    phrase = setInterval(function(){
        if (index <= joyWords.length) { 
            document.getElementById('boldExpression').innerHTML = joyWords[index++];
            index %= joyWords.length;
        } 
    }, 4500);
}

joyfulWords();
document.getElementById('boldDay').innerHTML = `${dayList[day]}`;
document.getElementById('boldGreeting').innerHTML = `${greeting()}`;



// SCROLL NAVBAR TOP
const navTop = document.getElementById('navContainerTop');

window.addEventListener('scroll', (trig) => {
    // start
    navTop.style.animation = 'fade-in 0s ease';
    navTop.style.background = 'white';
    navTop.style.borderBottom = '4px solid black';
    // reset
    setTimeout(() => {
        navTop.style.animation = '';
        navTop.style.background = '';
        navTop.style.borderBottom = '';
    }, 4000)
});



// ON MOUSE NAV LINKS
const linkC = document.getElementById('linkContainer');
const linkW = document.getElementById('linkWrapper');
const logoC = document.getElementById('logoContainer');
// logo
const mySig = document.getElementById('sig');

// LOGO
logoC.addEventListener('mouseover', (evt) => {
    // target logo
    mySig.style.background = 'white';
    mySig.style.filter = 'invert(100%)';
    linkW.style.visibility = 'visible';
    // 1. reload (replay) animation
    linkC.style.animationPlayState = '';
    mySig.style.animationPlayState = '';
    // 2. remove
    linkC.style.animation = 'none';
    mySig.style.animation = 'none';
    // 3. trigger reflow
    linkC.offsetWidth;
    mySig.offsetWidth;
    // 4. add
    linkC.style.animation = 'slide-in-bottom .5s ease-in-out';
    mySig.style.animation = 'fade-in .5s ease-in-out';
    // target link
    linkC.style.visibility = 'visible';
    mySig.style.visibility = 'visible';
    // reset logo
    linkW.addEventListener('mouseleave', () => {
        linkC.style.visibility = 'hidden';
        linkC.style.animation = 'paused';
        linkW.style.visibility = 'hidden';
    });
    logoC.addEventListener('mouseleave', () => {
        linkC.style.visibility = '';
        mySig.style.background = '';
        mySig.style.filter = '';
        linkC.style.animation = 'paused';
        // 1. reload (replay) animation
        linkC.style.animationPlayState = '';
        mySig.style.animationPlayState = '';
        // 2. remove
        linkC.style.animation = 'none';
        mySig.style.filter.animation = 'fade-out 1.5s ease-in-out';
        // 3. trigger reflow
        linkC.offsetWidth;
        mySig.offsetWidth;
    })
});






// MOUSE EVENTS
// nav
const nv = document.getElementById('linkContainer');
// bold text
const myName = document.getElementById('boldName');
const myCity = document.getElementById('boldCity');
const myMusic = document.getElementById('boldMusic');
const myFit = document.getElementById('boldFit');
// reg text
let rt1 = document.getElementById('boldGreeting');
let rt2 = document.getElementById('text2');
let rt3 = document.getElementById('boldExpression');
let rt4 = document.getElementById('boldDay');
let rt5 = document.getElementById('text5');
let rt6 = document.getElementById('text6');
let rt7 = document.getElementById('text7');
let rt8 = document.getElementById('text8');
// etc text
let rtB = document.getElementById('regBold');
let eOp = document.getElementById('eOperator');
let vrb = document.getElementById('variable');
let eCln = document.getElementById('eColon');
let brL = document.getElementById('bracketL');
let brR = document.getElementById('bracketR');
let sCln = document.getElementById('semiColonR');
// background
const bgMain = document.getElementById('main');
const bgOne = document.getElementById('one');
const bgTwo = document.getElementById('two');
const bgThree = document.getElementById('three');
const bgFour = document.getElementById('four');
const bgFive = document.getElementById('five');
// video
const vThree = document.getElementById('threeVid');
const vFour1 = document.getElementById('fourVid1');
const vFour2 = document.getElementById('fourVid2');
const vFour3 = document.getElementById('fourVid3');
// two slides video & images
const vTwoCow = document.getElementById('twoVidCow');
const vTwoCar = document.getElementById('twoVidCar');
const imgTrain = document.getElementById('twoImgTrain');
const imgBridge = document.getElementById('twoImgBridge');
const imgPCity = document.getElementById('twoImgPCity');
const imgCity = document.getElementById('twoImgCity');


// scramble text under JAMAL
    // el is boldLang
const txt0 = document.getElementById('h2-1'); 
    // brackets & scroll
const bL = document.getElementById('bracketL');
const bR = document.getElementById('bracketR');
const srlA = document.getElementById('scrollHA');




// JAMAL
const jamal = myName.addEventListener('mouseover', function(event) {
        // target nav
        nv.style.visibility = 'hidden';
        // target cursor
        document.body.style.cursor = 'crosshair';
        
        // target text
        event.target.style.background = 'rgba(255, 255, 255, 1)';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        rtB.style.visibility = 'hidden';
        eOp.style.visibility = 'visible';
        vrb.style.visibility = 'visible';
        brL.style.visibility = 'visible';
        brR.style.visibility = 'visible';
        sCln.style.visibility = 'visible';
        eCln.style.visibility = 'visible';
        myCity.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
        srlA.style.visibility = 'hidden';
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = '';
    // reset
    myName.addEventListener('mouseout', function() {
        // reset nav
        nv.style.visibility = 'visible';
        // reset logo & links
        mySig.style.visibility = '';
        logoC.style.visibility = '';
        linkC.style.visibility = '';
        linkW.style.visibility = '';
        // reset cursor
        document.body.style.cursor = '';
        // reset text
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        rtB.style.visibility = '';
        myCity.style.visibility = '';
        myMusic.style.visibility = '';
        myFit.style.visibility = '';
        srlA.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = 'none';
    });
});


// DALLAS SLIDESHOW
    // run
    let slideIndex = 0;
    let dallasSlide;
    const dallasTXR = () => {
        let y = document.getElementsByClassName('dallasSL');
        for (let i = 0; i < y.length; i++) {
            y[i].style.display ='none';
            console.log('slide:' + y[i]);
        }
        slideIndex++;
        console.log(slideIndex);
        if (slideIndex > y.length) {
            slideIndex = 1;
        }
        y[slideIndex - 1].style.display = 'block';
        dallasSlide = setTimeout(dallasTXR, 6000);
    };
    // stop
    const dallasTXS = () => {
        clearTimeout(dallasSlide);
    }


// DALLAS
const city = myCity.addEventListener('mouseover', function(event) {

    // run func
    dallasTXR();
        // target nav
        nv.style.visibility = 'hidden';
        // target cursor
        document.body.style.cursor = 'crosshair';
        // target logo & links
        logoC.style.visibility = 'hidden';
        linkC.style.visibility = 'hidden';
        linkW.style.visibility = 'hidden';
        mySig.style.visibility = 'hidden';
        // target text
        event.target.style.background = 'yellow';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        rtB.style.visibility = 'hidden';
        eOp.style.visibility = 'hidden';
        vrb.style.visibility = 'hidden';
        brL.style.visibility = 'hidden';
        brR.style.visibility = 'hidden';
        sCln.style.visibility = 'hidden';
        eCln.style.visibility = 'hidden';
        txt0.style.visibility = 'hidden';
        el.style.visibility = 'hidden';
        bL.style.visibility = 'hidden';
        bR.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
        srlA.style.visibility = 'hidden';
        // target slideshow
        vTwoCow.style.visibility = 'visible';
        vTwoCar.style.visibility = 'visible';
        imgTrain.style.visibility = 'visible';
        imgBridge.style.visibility = 'visible';
        imgPCity.style.visibility = 'visible';
        imgCity.style.visibility = 'visible';  
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = 'visible';
    // reset
    myCity.addEventListener('mouseout', function() {
        dallasTXS();
        // reset nav
        nv.style.visibility = '';
        // reset cursor
        document.body.style.cursor = '';
        // reset logo & links
        mySig.style.visibility = '';
        logoC.style.visibility = '';
        linkC.style.visibility = '';
        linkW.style.visibility = '';
        // reset text
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        rtB.style.visibility = '';
        eOp.style.visibility = '';
        vrb.style.visibility = '';
        brL.style.visibility = '';
        brR.style.visibility = '';
        sCln.style.visibility = '';
        eCln.style.visibility = '';
        txt0.style.visibility= '';
        el.style.visibility= '';
        bL.style.visibility = '';
        bR.style.visibility = '';
        myName.style.visibility = '';
        myMusic.style.visibility = '';
        myFit.style.visibility = '';
        srlA.style.visibility = '';
        // hide slides
        vTwoCow.style.visibility = '';
        vTwoCar.style.visibility = '';
        imgTrain.style.visibility = '';
        imgBridge.style.visibility = '';
        imgPCity.style.visibility = '';
        imgCity.style.visibility = '';  
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = '';
    });
});
// MUSIC
const music = myMusic.addEventListener('mouseover', function(event) {
        // target nav
        nv.style.visibility = 'hidden';
        // target cursor
        document.body.style.cursor = 'crosshair';
        // target logo & links
        logoC.style.visibility = 'hidden';
        linkC.style.visibility = 'hidden';
        linkW.style.visibility = 'hidden';
        mySig.style.visibility = 'hidden';
        // target text
        event.target.style.background = 'beige';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        rtB.style.visibility = 'hidden';
        eOp.style.visibility = 'hidden';
        vrb.style.visibility = 'hidden';
        brL.style.visibility = 'hidden';
        brR.style.visibility = 'hidden';
        sCln.style.visibility = 'hidden';
        eCln.style.visibility = 'hidden';
        txt0.style.visibility= 'hidden';
        el.style.visibility= 'hidden';
        bL.style.visibility = 'hidden';
        bR.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myCity.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
        srlA.style.visibility = 'hidden';
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = 'none';
        bgTwo.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgTwo.style.backgroundImage = 'none';
        bgFour.style.backgroundColor = 'none';
        bgFour.style.backgroundImage = 'none';
        // target video
        vThree.style.visibility = 'visible';
            // 1. reload (replay) animation
                vThree.style.animationPlayState = 'running';
                vThree.currentTime = 0;
                // 2. remove
                vThree.style.animation = 'none';
                // 3. trigger reflow
                vThree.offsetWidth;
                // 4. add
                vThree.style.animation = 'fade-in 1s ease-in-out';
    // reset
    myMusic.addEventListener('mouseout', function() {
        // reset nav
        nv.style.visibility = 'visible';
        // reset cursor
        document.body.style.cursor = '';
        // resest logo & links
        logoC.style.visibility = '';
        linkC.style.visibility = '';
        linkW.style.visibility = '';
        mySig.style.visibility = '';
        // reset text
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        rtB.style.visibility = '';
        eOp.style.visibility = '';
        vrb.style.visibility = '';
        brL.style.visibility = '';
        brR.style.visibility = '';
        sCln.style.visibility = '';
        eCln.style.visibility = '';
        txt0.style.visibility= '';
        el.style.visibility= '';
        bL.style.visibility = '';
        bR.style.visibility = '';
        myName.style.visibility = '';
        myCity.style.visibility = '';
        myFit.style.visibility = '';
        srlA.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = '';
        bgTwo.style.backgroundColor = '';
        bgTwo.style.backgroundImage = '';
        bgFour.style.backgroundColor = '';
        bgFour.style.backgroundImage = '';
        // reset video
        vThree.style.visibility = 'hidden';
            // 1. reload (replay) animation
            vThree.currentTime = 0;
            vThree.style.animationPlayState = 'pause';
            // 2. remove
            vThree.style.animation = 'fade-out 1s ease-in-out';
            // 3. trigger reflow
            vThree.offsetWidth;
    });
});
// FITNESS

const fitness = myFit.addEventListener('mouseover', function(event) {
        // target nav
        nv.style.visibility = 'hidden';
        // target cursor
        document.body.style.cursor = 'crosshair';
        // target logo & links
        logoC.style.visibility = 'hidden';
        linkC.style.visibility = 'hidden';
        linkW.style.visibility = 'hidden';
        mySig.style.visibility = 'hidden';
        // target text
        event.target.style.color = 'white';
        event.target.style.background = 'black';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        rtB.style.visibility = 'hidden';
        eOp.style.visibility = 'hidden';
        vrb.style.visibility = 'hidden';
        brL.style.visibility = 'hidden';
        brR.style.visibility = 'hidden';
        sCln.style.visibility = 'hidden';
        eCln.style.visibility = 'hidden';
        txt0.style.visibility= 'hidden';
        el.style.visibility= 'hidden';
        bL.style.visibility = 'hidden';
        bR.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myCity.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
        srlA.style.visibility = 'hidden';
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = 'none';
        bgTwo.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgTwo.style.backgroundImage = 'none';
        bgThree.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgThree.style.backgroundImage = 'none';
        // target video
        vFour1.style.visibility = 'visible';
        vFour2.style.visibility = 'visible';
        vFour3.style.visibility = 'visible';
        // 1. reload (replay) animation
            vFour1.style.animationPlayState = 'running';
            vFour1.currentTime = 0;
            vFour2.style.animationPlayState = 'running';
            vFour2.currentTime = 0;
            vFour3.style.animationPlayState = 'running';
            vFour3.currentTime = 0;
            // 2. remove
            vFour1.style.animation = 'none';
            vFour2.style.animation = 'none';
            vFour3.style.animation = 'none';
            // 3. trigger reflow
            vFour1.offsetWidth;
            vFour2.offsetWidth;
            vFour3.offsetWidth;
            // 4. add
            vFour1.style.animation = 'fade-in 1s ease-in-out';
            vFour2.style.animation = 'fade-in 1s ease-in-out';
            vFour3.style.animation = 'fade-in 1s ease-in-out';
    // reset
    myFit.addEventListener('mouseout', function() {
        // reset nav
        nv.style.visibility = 'visible';
        // reset cursor
        document.body.style.cursor = '';
        // reset logo & links
        logoC.style.visibility = '';
        linkC.style.visibility = '';
        linkW.style.visibility = '';
        mySig.style.visibility = '';
        // reset text
        event.target.style.color = '';
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        rtB.style.visibility = '';
        eOp.style.visibility = '';
        vrb.style.visibility = '';
        brL.style.visibility = '';
        brR.style.visibility = '';
        sCln.style.visibility = '';
        eCln.style.visibility = '';
        txt0.style.visibility= '';
        el.style.visibility= '';
        bL.style.visibility = '';
        bR.style.visibility = '';
        myName.style.visibility = '';
        myCity.style.visibility = '';
        myMusic.style.visibility = '';
        srlA.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = '';
        bgTwo.style.backgroundColor = '';
        bgTwo.style.backgroundImage = '';
        bgThree.style.backgroundColor = '';
        bgThree.style.backgroundImage = '';
        // reset video
        vFour1.style.visibility = 'hidden';
        vFour2.style.visibility = 'hidden';
        vFour3.style.visibility = 'hidden';
            // 1. reload (replay) animation
            vFour1.currentTime = 0;
            vFour2.currentTime = 0;
            vFour3.currentTime = 0;
            vFour1.style.animationPlayState = 'pause';
            vFour2.style.animationPlayState = 'pause';
            vFour3.style.animationPlayState = 'pause';
            // 2. remove
            vFour1.style.animation = 'fade-out 1s ease-in-out';
            vFour2.style.animation = 'fade-out 1s ease-in-out';
            vFour3.style.animation = 'fade-out 1s ease-in-out';
            // 3. trigger reflow
            vFour1.offsetWidth;
            vFour2.offsetWidth;
            vFour3.offsetWidth;
    });
});








// TEXT SCRAMBLE
class TextScramble { 
    constructor(el, chars) {
    this.el = el
    this.chars = chars || '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
}
setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
}
update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
            complete++
            output += to
        } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
        }
        output += `<span class="textscramble">${char}</span>`
    } else {
        output += from
    }
}
this.el.innerHTML = output
if (complete === this.queue.length) {
    this.resolve()
} else {
    this.frameRequest = requestAnimationFrame(this.update)
    this.frame++
    }
}
randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}
const phrases = ['"JAVASCRIPT"', '"JAVA"', '"NODEJS"', '"REACT"', '"PYTHON"', '"C++"', '"HTML"', '"CSS"']
const CNs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-!$%&#@'
const el = document.getElementById('boldLang')
const fx = new TextScramble(el, CNs)
let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1800)
    })
    counter = (counter + 1) % phrases.length
}
next()
