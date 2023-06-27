let firstCircle = document.getElementById('first-circle');
let secondCircle = document.getElementById('second-circle');
let thirdCircle = document.getElementById('third-circle');
let fourthCircle = document.getElementById('fourth-circle');

let firstTestimony = document.getElementById('testifier1');
let secondTestimony = document.getElementById('testifier2');
let thirdTestimony = document.getElementById('testifier3');
let fourthTestimony = document.getElementById('testifier4');

secondTestimony.hidden = true;
thirdTestimony.hidden = true;
fourthTestimony.hidden = true;

secondCircle.onclick = function(){
    firstTestimony.hidden = true;
    secondTestimony.hidden = false;
    thirdTestimony.hidden = true;
    fourthTestimony.hidden = true;
    firstCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    secondCircle.style.backgroundColor = '#ffffff';
    thirdCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    fourthCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}

thirdCircle.onclick = function(){
    firstTestimony.hidden = true;
    secondTestimony.hidden = true;
    thirdTestimony.hidden = false;
    fourthTestimony.hidden = true;
    firstCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    secondCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    thirdCircle.style.backgroundColor = '#ffffff';
    fourthCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}

fourthCircle.onclick = function(){
    firstTestimony.hidden = true;
    secondTestimony.hidden = true;
    thirdTestimony.hidden = true;
    fourthTestimony.hidden = false;
    firstCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    secondCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    thirdCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    fourthCircle.style.backgroundColor = '#ffffff';
}

firstCircle.onclick = function(){
    firstTestimony.hidden = false;
    secondTestimony.hidden = true;
    thirdTestimony.hidden = true;
    fourthTestimony.hidden = true;
    secondCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    thirdCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    fourthCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    firstCircle.style.backgroundColor = '#ffffff';
}

