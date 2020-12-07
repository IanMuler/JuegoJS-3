const fightApp = () => {
if (location.hash.slice(2).includes("fight")) {

const attack = document.getElementById("attack1");
const defense = document.getElementById("defense1");
const cure = document.getElementById("cure1");

const attack2 = document.getElementById("attack2");
const defense2 = document.getElementById("defense2");
const cure2 = document.getElementById("cure2");

const pptRight= document.getElementById("ppt-right");
const attack1png = document.getElementById("attack1png");
const attack2png = document.getElementById("attack2png");
const defense1png = document.getElementById("defense1png");
const defense2png = document.getElementById("defense2png");
const cure1png = document.getElementById("cure1png");
const cure2png = document.getElementById("cure2png");


const villain = document.getElementById("villain");

const intervalo = 100;
let valorcpu;
let selected;

setTimeout(() => {
    attack.classList.remove("initialppt");
    defense.classList.remove("initialppt");
    cure.classList.remove("initialppt");
}, 3000);


/*-------ppt 1----------------*/
const attackClass = () => {
    attack.classList.add("selected");
    defense.classList.add("unselected");
    cure.classList.add("unselected");
    pptRight.classList.remove("d-none");
    selected = 1;
    setTimeout(animation_group, 2000);

}
const defenseClass = () => {
    defense.classList.add("selected");
    attack.classList.add("unselected");
    cure.classList.add("unselected");
    pptRight.classList.remove("d-none");
    selected = 2;
    setTimeout(animation_group, 2000);
}

const cureClass = () => {
    cure.classList.add("selected");
    defense.classList.add("unselected");
    attack.classList.add("unselected");
    pptRight.classList.remove("d-none");
    selected = 3;
    setTimeout(animation_group, 2000);
}

cure.addEventListener("click", cureClass)
defense.addEventListener("click", defenseClass)
attack.addEventListener("click", attackClass)
/*-------------------------------------*/

/*------------ppt 2----------------------*/

//Circulo rojo sobre opciones de CPU
function onattack2() {
    attack2.classList.add("selectedRed");
}
function offattack2() {
    attack2.classList.remove("selectedRed");
}
function ondefense2() {
    defense2.classList.add("selectedRed");
}
function offdefense2() {
    defense2.classList.remove("selectedRed");
}
function oncure2() {
    cure2.classList.add("selectedRed");
}
function offcure2() {
    cure2.classList.remove("selectedRed");
}
function selectAttack2() {
    attack2.classList.add("selected2");
}
function selectDefense2() {
    defense2.classList.add("selected2");
}
function selectCure2() {
    cure2.classList.add("selected2");
}

// Animación CPU
function animation() {
    onattack2();
    setTimeout(offattack2, intervalo);
    setTimeout(ondefense2, intervalo);
    setTimeout(offdefense2, intervalo * 2);
    setTimeout(oncure2, intervalo * 2);
    setTimeout(offcure2, intervalo * 3);
}

function animation_group() {
    animation();
    setTimeout(animation, intervalo * 3);
    setTimeout(animation, intervalo * 6);
    setTimeout(animation, intervalo * 9);
    setTimeout(animation, intervalo * 12);
    setTimeout(random, intervalo * 15);
}

//Opciones random CPU
function random() {
 //   valorcpu = Math.floor(Math.random() * (4-1)) + 1;
  valorcpu = 1;  
 if (valorcpu == 1) {
        selectAttack2();
        defense2.classList.add("unselected");
        cure2.classList.add("unselected");
        setTimeout(fightAnimation, 1000);
        

    } else if (valorcpu == 2) {
        onattack2();
        setTimeout(offattack2, intervalo);
        setTimeout(selectDefense2, intervalo);
        setTimeout(() => {
            attack2.classList.add("unselected");
        }, intervalo);
        setTimeout(() => {
            cure2.classList.add("unselected");
        }, intervalo);
        setTimeout(fightAnimation, intervalo + 1000);

    } else {
        onattack2();
        setTimeout(offattack2, intervalo);
        setTimeout(ondefense2, intervalo);
        setTimeout(offdefense2, intervalo * 2);
        setTimeout(selectCure2, intervalo * 2);
        setTimeout(() => {
            attack2.classList.add("unselected");
        }, intervalo * 2);
        setTimeout(() => {
            defense2.classList.add("unselected");
        }, intervalo * 2);
        setTimeout(fightAnimation, (intervalo * 2) + 1000);
    }
}

/*-----------FIGHT ANIMATIONS-------------------*/

function fightAnimation () {
    switch (selected){
        case 1:
        attack1png.classList.add("animation");
        if(valorcpu != 2){
        villain.classList.add("hitted");
        }
        break;
        case 2: 
            defense1png.classList.add("animation");
            break;
    }

    switch(valorcpu){
        case 1: 
            attack2png.classList.add("animation");
            break;
        case 2: 
            defense2png.classList.add("animation");
            break;
    }
}

/*--------------------------------------------*/
}

}
export default fightApp;