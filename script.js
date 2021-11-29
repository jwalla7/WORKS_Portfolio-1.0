
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
const joyWords = ['beautiful', 'amazing', 'lovely', 'awesome', 'amazing', 'fantastic', 'incredible', 'marvelous', 'phenomenal', 'wondrous', 'tremendous','wonderful', 'magnificent', 'fine', 'cool', 'astonishing', 'new'];
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
    // function stop(){
    //     if (isInViewport === true) {
    //     return console.log(`In the viewport`); 
    //     } else {
    //         return clearInterval(phrase);
    //     }
    // }
}

// let isInViewport = function() {
//     let distance = document.getElementById('boldExpression').getBoundingClientRect();
//     if (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth)
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }

joyfulWords();
document.getElementById('boldDay').innerHTML = `${dayList[day]}`;
document.getElementById('boldGreeting').innerHTML = `${greeting()}`;









// MOUSE EVENTS
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
// background
const bgMain = document.getElementById('main');
const bgOne = document.getElementById('one');
const bgTwo = document.getElementById('two');
const bgThree = document.getElementById('three');
const bgFour = document.getElementById('four');
const bgFive = document.getElementById('five');




// JAMAL
myName.addEventListener('mouseover', function(event) {
    // target text
    event.target.style.background = 'honeydew';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        myCity.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
    // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = '';

    // reset
    myName.addEventListener('mouseout', function() {
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        myCity.style.visibility = '';
        myMusic.style.visibility = '';
        myFit.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = 'none';
    });
});
// DALLAS
myCity.addEventListener('mouseover', function(event) {
    // target
    event.target.style.background = 'yellow';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = 'none';
    // reset
    myCity.addEventListener('mouseout', function() {
        event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        myName.style.visibility = '';
        myMusic.style.visibility = '';
        myFit.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = '';
    });
});
// MUSIC
myMusic.addEventListener('mouseover', function(event) {
    // target
    event.target.style.background = 'purple';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myCity.style.visibility = 'hidden';
        myFit.style.visibility = 'hidden';
        // target background
        bgMain.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgOne.style.backgroundImage = 'none';
        bgTwo.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        bgTwo.style.backgroundImage = 'none';
    // reset
    myMusic.addEventListener('mouseout', function() {
    event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        myName.style.visibility = '';
        myCity.style.visibility = '';
        myFit.style.visibility = '';
        // reset background
        bgMain.style.backgroundColor = '';
        bgOne.style.backgroundColor = '';
        bgOne.style.backgroundImage = '';
        bgTwo.style.backgroundColor = '';
        bgTwo.style.backgroundImage = '';
    });
});
// FITNESS
myFit.addEventListener('mouseover', function(event) {
    // target
    event.target.style.background = 'blue';
        rt1.style.visibility = 'hidden';
        rt2.style.visibility = 'hidden';
        rt3.style.visibility = 'hidden';
        rt4.style.visibility = 'hidden';
        rt5.style.visibility = 'hidden';
        rt6.style.visibility = 'hidden';
        rt7.style.visibility = 'hidden';
        rt8.style.visibility = 'hidden';
        myName.style.visibility = 'hidden';
        myCity.style.visibility = 'hidden';
        myMusic.style.visibility = 'hidden';
    // reset
    myFit.addEventListener('mouseout', function() {
    event.target.style.background = '';
        rt1.style.visibility = '';
        rt2.style.visibility = '';
        rt3.style.visibility = '';
        rt4.style.visibility = '';
        rt5.style.visibility = '';
        rt6.style.visibility = '';
        rt7.style.visibility = '';
        rt8.style.visibility = '';
        myName.style.visibility = '';
        myCity.style.visibility = '';
        myMusic.style.visibility = '';
    });
});