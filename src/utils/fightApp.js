const fightApp = () => {
    if (location.hash.slice(2).includes("fight")) {

        const lvl = parseInt(localStorage.getItem("lvl"));

        const attack = document.getElementById("attack1");
        const defense = document.getElementById("defense1");
        const cure = document.getElementById("cure1");

        const attack2 = document.getElementById("attack2");
        const defense2 = document.getElementById("defense2");
        const cure2 = document.getElementById("cure2");

        const pptLeft = document.getElementById("ppt-left");
        const pptRight = document.getElementById("ppt-right");
        const attack1png = document.getElementById("attack1png");
        const attack2png = document.getElementById("attack2png");
        const defense1png = document.getElementById("defense1png");
        const defense2png = document.getElementById("defense2png");
        const cure1png = document.getElementById("cure1png");
        const cure2png = document.getElementById("cure2png");

        const damage1 = document.getElementById("damage1");
        const damage2 = document.getElementById("damage2");
        const cureplus1 = document.getElementById("cureplus1");
        const cureplus2 = document.getElementById("cureplus2");

        const villain = document.getElementById("villain");
        const hero = document.getElementById("hero");

        const hpleft = document.getElementById("hpleft");
        const hpright = document.getElementById("hpright");

        const atkleft1 = document.getElementById("atkleft1");
        const atkleft2 = document.getElementById("atkleft2");

        const defleft1 = document.getElementById("defleft1");
        const defleft2 = document.getElementById("defleft2");

        const curleft1 = document.getElementById("curleft1");
        const curleft2 = document.getElementById("curleft2");

        const atkright1 = document.getElementById("atkright1");
        const atkright2 = document.getElementById("atkright2");

        const defright1 = document.getElementById("defright1");
        const defright2 = document.getElementById("defright2");

        const curright1 = document.getElementById("curright1");
        const curright2 = document.getElementById("curright2");

        const youWin = document.getElementById("you-win");
        const restart = document.getElementById("restart");
        restart.addEventListener("click", restartLvl);

        const intervalo = 100; //animacion ppt cpu
        let valorcpu; // opción elegida cpu
        let selected; // opción elegida player

        //stats iniciales
        let hp1 = 100;
        let atk1 = 2;
        let def1 = 2;
        let cur1 = 2;

        let hp2 = 100;
        let atk2 = 2;
        let def2 = 2;
        let cur2 = 2;

        const ATK = 50;
        const DEF = 50;
        const CUR = 30;

        hero.classList.add("initialAnimation1");
        villain.classList.add("initialAnimation2");

        pptLeft.setAttribute("style",""); //se le saca el d-none del final de lvl anterior
        pptRight.setAttribute("style","");

        setTimeout(() => {
            attack.classList.remove("initialppt");
            defense.classList.remove("initialppt");
            cure.classList.remove("initialppt");
            hero.classList.remove("initialAnimation1");
            villain.classList.remove("initialAnimation2");
        }, 3000);


        /*-------ppt 1----------------*/
        const attackClass = () => {
            attack.classList.add("selected");
            defense.classList.add("unselected");
            cure.classList.add("unselected");
            pptRight.classList.remove("d-none");
            selected = 1;
            setTimeout(animation_group, 1000);

        }
        const defenseClass = () => {
            defense.classList.add("selected");
            attack.classList.add("unselected");
            cure.classList.add("unselected");
            pptRight.classList.remove("d-none");
            selected = 2;
            setTimeout(animation_group, 1000);
        }

        const cureClass = () => {
            cure.classList.add("selected");
            defense.classList.add("unselected");
            attack.classList.add("unselected");
            pptRight.classList.remove("d-none");
            selected = 3;
            setTimeout(animation_group, 1000);
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
            setTimeout(statsChanges, intervalo * 15);

        }

        //Opciones random CPU
        function random() {
            valorcpu = Math.floor(Math.random() * (4 - 1)) + 1;
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

        function fightAnimation() {
            switch (selected) {
                case 1:
                    attack1png.classList.add("animation");
                    if (valorcpu != 2) {
                        villain.classList.add("hitted");
                        damage2.classList.add("animation");
                    }
                    break;
                case 2:
                    defense1png.classList.add("animation");
                    if(valorcpu === 1 && atk2 > def1-1){
                        damage1.classList.add("animation");
                    }
                    break;
                case 3:
                    cure1png.classList.add("animation");
                    cureplus1.classList.add("animation");
                    break;
            }

            switch (valorcpu) {
                case 1:
                    attack2png.classList.add("animation");
                    if (selected != 2) {
                        hero.classList.add("hitted");
                        damage1.classList.add("animation");
                    }
                    break;
                case 2:
                    defense2png.classList.add("animation");
                    if(selected === 1 && atk1 > def2-1){
                        damage2.classList.add("animation");
                    }
                    break;
                case 3:
                    cure2png.classList.add("animation");
                    cureplus2.classList.add("animation");
                    break;
            }

            setTimeout(restartRound, 3000);
        }

        /*--------------------------------------------*/

        /*--------------stats changes------------------*/

        function statsChanges() {

            switch (selected) {
                case 1: //attack

                    if (def1 < 2) {
                        def1++
                    };
                    if (cur1 < 2) {
                        cur1++
                    };

                    if (valorcpu === 1) {
                        hp2 = hp2 - (ATK * (atk1 / 2));

                        damage2.innerHTML = `-${Math.round((ATK * (atk1 / 2)))}`;
                        if (hp2 < 0){
                            hp2 = 0;
                        }
                        setTimeout(() => {
                            hpright.setAttribute("style", `width: ${hp2}%`)
                        }, 1500);
                    }

                    if (valorcpu === 3 && atk1 != 2) {
                        atk1++;
                    }

                    if (atk1 != 0 && valorcpu != 3) {
                        atk1--;
                    }
                    break;
                case 2: //defense

                    if (atk1 < 2) {
                        atk1++
                    };
                    if (cur1 < 2) {
                        cur1++
                    };

                    if (valorcpu === 1 && atk2 > def1-1) {
                        var hpprev = hp1;
                        hp1 = hp1 + ((DEF * (def1 / 2)) - ((ATK * (atk2 / 2)) * ((0.7) + (0.3*((lvl)/8)))));
                        damage1.innerHTML = `-${hpprev-hp1}`;
                    }

                    if (valorcpu === 1 && def1 != 2) {
                        def1++;
                    }

                    if (def1 != 0 && valorcpu != 1) {
                        def1--;
                    }

                    if (hp1 < 0){
                        hp1 = 0;
                    }
                    setTimeout(() => {
                        hpleft.setAttribute("style", `width: ${hp1}%`)
                    }, 1500);

                    break;

                case 3: //cure

                    if (atk1 < 2) {
                        atk1++
                    };
                    if (def1 < 2) {
                        def1++
                    };

                    if (valorcpu === 1) {
                        hp1 = hp1 + ((CUR * (cur1 / 2)) - (ATK * (atk2 / 2)));
                        damage1.innerHTML = `-${Math.round((ATK * (atk2 / 2)))}`;
                    } else {
                        hp1 = hp1 + ((CUR * (cur1 / 2)))
                    }

                    cureplus1.innerHTML = `+${(CUR * (cur1 / 2))}`;

                    if (valorcpu === 2 && cur1 != 2) {
                        cur1++;
                    }

                    if (cur1 != 0 && valorcpu != 2) {
                        cur1--;
                    }

                    if(hp1 > 100){
                        hp1 = 100;
                    }

                    if (hp1 < 0){
                        hp1 = 0;
                    }
                    setTimeout(() => {
                        hpleft.setAttribute("style", `width: ${hp1}%`)
                    }, 1500);

                    break;
            }

            switch (valorcpu) {
                case 1: //attack

                    if (def2 < 2) {
                        def2++
                    };

                    if (cur2 < 2) {
                        cur2++
                    };

                    if (selected === 1) {
                        hp1 = hp1 - ((ATK * (atk2 / 2)) * ((0.7) + (0.3*((lvl)/10))));

                        damage1.innerHTML = `-${Math.round(((ATK * (atk2 / 2)) * ((0.7) + (0.3*((lvl)/10)))))}`;

                        if (hp1 < 0){
                            hp1 = 0;
                        }
                        setTimeout(() => {
                            hpleft.setAttribute("style", `width: ${hp1}%`)
                        }, 1500);
                    }

                    if (selected === 3 && atk2 != 2) {
                        atk2++;
                    }

                    if (atk2 != 0 && selected != 3) {
                        atk2--;
                    }

                    break;

                case 2: //defense

                    if (atk2 < 2) {
                        atk2++
                    };
                    if (cur2 < 2) {
                        cur2++
                    };

                    if (selected === 1 && atk1 > def2-1) {
                        hp2 = hp2 + ((DEF * (def2 / 2)) - (ATK * (atk1 / 2)))
                        damage2.innerHTML = `-${((DEF * (def2 / 2)) - (ATK * (atk1 / 2)))}`;
                    }

                    if (selected === 1 && def2 != 2) {
                        def2++;
                    }

                    if (def2 != 0 && selected != 1) {
                        def2--;
                    }

                    if (hp2 < 0){
                        hp2 = 0;
                    }
                    setTimeout(() => {
                        hpright.setAttribute("style", `width: ${hp2}%`)
                    }, 1500);

                    break;

                case 3: //cure

                    if (atk2 < 2) {
                        atk2++
                    };
                    if (def2 < 2) {
                        def2++
                    };

                    if (selected === 1) {
                        hp2 = hp2 + ((CUR * (cur2 / 2)) - (ATK * (atk1 / 2)));
                        damage2.innerHTML = `-${Math.round((ATK * (atk1 / 2)))}`;
                    } else {
                        hp2 = hp2 + ((CUR * (cur2 / 2)))
                    };

                    cureplus2.innerHTML = `+${Math.round((CUR * (cur2 / 2)))}`;

                    if (selected === 2 && cur2 != 2) {
                        cur2++;
                    }

                    if (cur2 != 0 && selected != 2) {
                        cur2--;
                    }

                    if(hp2 > 100){
                        hp2 = 100;
                    }

                    if (hp2 < 0){
                        hp2 = 0;
                    }
                    setTimeout(() => {
                        hpright.setAttribute("style", `width: ${hp2}%`)
                    }, 1500);

                    break;

            }

            switch (atk1) {
               
                case 2:
                    atkleft1.setAttribute("style", `opacity: 1`);
                    atkleft2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    atkleft1.setAttribute("style", `opacity: 1`);
                    atkleft2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    atkleft1.setAttribute("style", `opacity: 0`);
                    break;
            }

            switch (def1) {
               
                case 2:
                    defleft1.setAttribute("style", `opacity: 1`);
                    defleft2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    defleft1.setAttribute("style", `opacity: 1`);
                    defleft2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    defleft1.setAttribute("style", `opacity: 0`);
                    break;
            }

            switch (cur1) {
               
                case 2:
                    curleft1.setAttribute("style", `opacity: 1`);
                    curleft2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    curleft1.setAttribute("style", `opacity: 1`);
                    curleft2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    curleft1.setAttribute("style", `opacity: 0`);
                    break;
            }

            switch (atk2) {
                
                case 2:
                    atkright1.setAttribute("style", `opacity: 1`);
                    atkright2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    atkright1.setAttribute("style", `opacity: 1`);
                    atkright2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    atkright1.setAttribute("style", `opacity: 0`);
                    break;
            }

            switch (def2) {
                
                case 2:
                    defright1.setAttribute("style", `opacity: 1`);
                    defright2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    defright1.setAttribute("style", `opacity: 1`);
                    defright2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    defright1.setAttribute("style", `opacity: 0`);
                    break;
            }

            switch (cur2) {
                
                case 2:
                    curright1.setAttribute("style", `opacity: 1`);
                    curright2.setAttribute("style", `opacity: 1`);
                    break;
                case 1:
                    curright1.setAttribute("style", `opacity: 1`);
                    curright2.setAttribute("style", `opacity: 0`);
                    break;
                case 0:
                    curright1.setAttribute("style", `opacity: 0`);
                    break;
            }

            if(hp1 === 0){
                setTimeout(restartLevel, 3000);
            }else if(hp2 === 0 && lvl==12){
                    setTimeout(end, 3000);
            }else if(hp2 === 0){
                setTimeout(nextLevel, 3000);
            }
        }

        /*---------------------------------------------*/

        /*-----------------restart--------------------*/
        function restartRound() {
            
            attack.classList.remove("unselected", "selected");
            defense.classList.remove("unselected", "selected");
            cure.classList.remove("unselected", "selected");
            attack.classList.add("secondAnimation");
            defense.classList.add("secondAnimation");
            cure.classList.add("secondAnimation");

            attack2.classList.remove("selected2", "unselected");
            defense2.classList.remove("selected2", "unselected");
            cure2.classList.remove("selected2", "unselected");

            attack1png.classList.remove("animation");
            defense1png.classList.remove("animation");
            cure1png.classList.remove("animation");
            attack2png.classList.remove("animation");
            defense2png.classList.remove("animation");
            cure2png.classList.remove("animation");

            hero.classList.remove("initialAnimation");
            villain.classList.remove("initialAnimation");
            hero.classList.remove("hitted");
            villain.classList.remove("hitted");

            damage1.classList.remove("animation");
            damage2.classList.remove("animation");
            cureplus1.classList.remove("animation");
            cureplus2.classList.remove("animation");

            pptRight.classList.add("d-none")

        }

    /*------------------next level------------------*/
    function nextLevel(){
        pptLeft.setAttribute("style","display: none");
        pptRight.setAttribute("style","display: none");
        youWin.setAttribute("style", `display: block`);
        setTimeout(() => {
            location.hash = `/tower/${lvl+1}`
        }, 4000);
    }

    function restartLevel(){
        pptLeft.setAttribute("style","display: none");
        pptRight.setAttribute("style","display: none");
        restart.setAttribute("style", `display: block`);
    }
    function restartLvl(){
        location.hash = `/tower/${lvl}`
    }

    function end(){
        pptLeft.setAttribute("style","display: none");
        pptRight.setAttribute("style","display: none");
        youWin.setAttribute("style", `display: block`);
        setTimeout(() => {
            location.hash = `/end`
        }, 4000);
    }

    }

}
export default fightApp;