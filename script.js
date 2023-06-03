// Question1//
let first = document.getElementById("text");
console.log(first);

//Question2//
let second = document.getElementsByTagName("h1");
console.log(second);


//Question3//
let third = document.getElementsByClassName("box");
console.log(third);

//Question4//
let q4 = document.getElementById("q4");
let c1 = 0;
function changeText() {
    if (c1 % 2 == 0) {
        q4.innerHTML = "Hello World";
        c1++;
    } else {
        q4.innerHTML = "Hello ";
        c1--;
    }
}



//Question5//
let c = 0;
let Replace1 = document.getElementsByClassName("button");
let q5 = document.getElementById("q5");
q5.innerHTML = "Hello";

Replace1[1].addEventListener("click", () => {
    if (c % 2 == 0) {
        q5.innerHTML = "Welcome to Elevation academy";
        c++;
    } else {
        q5.innerHTML = "Hello";
        c--;
    }
});


//Question6//
let changes = document.getElementsByClassName("heading");

changes[0].addEventListener('click', () => {
    changes[0], style.color = "red"

})


//Question7//

let flex = document.querySelector('.flex');
function changeDirection() {
    flex.style.display = 'block';
}



//Question8//

//Question9//

let display = document.querySelector('.timer');

function StartClock() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    console.log(`Time :${hrs}:${mins}:${secs}`)

    display.innerText = `${hrs}: ${mins}: ${secs}`

    console.log(display)
}
setInterval(() => {
    StartClock(), 1000
})




//GAME//

let initialscore = 100
let highscore = null;
let randomnumber = generateRandomInteger(100);
function reloadgame() {
    document.getElementById('guessid').value = "";
    document.querySelector('.score').textContent = 100
    document.querySelector('#sc').textContent = "Start guessing..."
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').style.height = "12rem"
    document.querySelector('.number').textContent = "?"
    randomnumber = generateRandomInteger(100);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}


function maincheck() {

    let inputnumber = document.querySelector('#guessid').value
    //    let changvalue=document.querySelector('.score').textContent

    if (initialscore !== 0) {
        if (inputnumber > randomnumber) {
            document.querySelector('.message').textContent = "Your Guess Is High"
            initialscore--
            document.querySelector('.score').textContent = initialscore
        }
        else if (inputnumber < randomnumber) {
            document.querySelector('.message').textContent = "Your Guess Is Low"
            initialscore--
            document.querySelector('.score').textContent = initialscore
        }
        else {

            document.querySelector('.message').textContent = "🤩🤩 Hurrhh! You Won 🤩🤩"
            document.body.style.backgroundColor = "green";
            initialscore--
            document.querySelector('.score').textContent = initialscore
            document.querySelector('.number').textContent = randomnumber;
            document.querySelector('.number').style.height = "10rem"
            highscore = initialscore
            document.querySelector('.highscore').textContent = highscore
            document.querySelector('.check').style.visibility = "hidden"



        }
    } else {
        document.querySelector('.message').textContent = "Game Over 🙂 🙂 your score is 0"

    }

}



