(()=>{"use strict";const t=async()=>{try{const t=await fetch("https://hp-api.herokuapp.com/api/characters/");return await t.json()}catch(t){console.log("Fetch Error",t)}},e=async()=>{let e=parseInt(location.hash.slice(2).toLocaleLowerCase().split("/")[1]);localStorage.setItem("id",e);const i=JSON.parse(localStorage.getItem("charactersDetails")),s=(await t())[e];let n,a;return n=0==e?2:e-1,a=2==e?0:e+1,`\n<div class="select-wallpaper">\n    <div id="selection" class="overlay">\n        <div class="character-left">\n        <div class="carrousel">\n            <a href="#/select-character/${n}"><img class="arrow-left" src="https://i.ibb.co/ygSPBTB/Flechas-Left.png" alt=""></a>\n            <img class="characterimg" src="${i.front[e]}" alt="">\n            <a href="#/select-character/${a}"><img class="arrow-right" src="https://i.ibb.co/kQX8xkW/Flechas-Right.png" alt=""></a>  \n            </div>\n            <a href="#/tower/0">\n            <button class="btn-select">Select</button>\n            </a>\n        </div>\n        <div class="character-right">\n            <img class="imgapi" src="${s.image}" alt="">\n            <h3 class="carrousel-name">${s.name}</h3>\n        </div>\n    </div>\n</div>\n`},i=async()=>{const e=parseInt(localStorage.getItem("id"));let i=parseInt(location.hash.slice(2).toLocaleLowerCase().split("/")[1]);return localStorage.setItem("lvl",i),`\n    <div class="intro-wallpaper">\n        <div class="tower"> \n            <img id="towerimg" class="towerimg" src="https://i.ibb.co/dGmqPDn/Towerhp.png" alt="">\n  \n            <img class="towerpj traslateright" id="tower-picture-img" src="${(await t())[e].image}" alt="">  \n            </div>\n    </div>\n  `},s=()=>{const t=parseInt(localStorage.getItem("id"));let e=parseInt(location.hash.slice(2).toLocaleLowerCase().split("/")[1]);localStorage.setItem("lvl",e);const i=JSON.parse(localStorage.getItem("charactersDetails")),s=JSON.parse(localStorage.getItem("fightClasses"));return`\n<div class="fight-wallpaper" style="\n    background: url(${i.fightWallpaper[e]});\n    background-position: center;\n    background-size: cover;\n    ">\n    <div class="fightplace">\n\n        \x3c!-- fight png --\x3e\n        <div id="attack1png">\n            <img src="https://i.ibb.co/Yj5Spc7/Rayorojo.png" alt="Attack1png">\n        </div>\n        <div id="attack2png" class="atk-${s.villains[e]}">\n            <img src="${i.attack2png[e]}" alt="Attack2png">\n        </div>\n        <div id="defense1png">\n            <img src="https://i.ibb.co/y4q4YcG/Shield.png" alt="defense1png">\n        </div>\n        <div id="defense2png" class="def-${s.villains[e]}">\n            <img src="${i.defense2png[e]}" alt="defense2png">\n        </div>\n        <div id="cure1png">\n            <img src="https://i.ibb.co/5M2smsV/curehero.png" alt="cure1png">\n        </div>\n        <div id="cure2png" class="cur-${s.villains[e]}">\n            <img src="${i.cure2png[e]}" alt="cure2png">\n        </div>\n\n        \x3c!--  animated damage/cure value --\x3e\n        <span id="damage1"></span>\n        <span id="damage2"></span>\n        <span id="cureplus1"></span>\n        <span id="cureplus2"></span>\n\n        \x3c!-- ppt & stats --\x3e\n\n        <div id="ppt" class="ppt">\n\n            <div class="stats-left">\n\n                \x3c!-- stat bars 1 --\x3e\n                <div class="hp">\n                    <img src="https://i.ibb.co/L8JbRNp/heartwhite.png" alt="heart">\n                    <div class="hpbar">\n                        <div id="hpleft" class="hpvalue" style="width: 100%"></div>\n                    </div>\n                </div>\n                <div class="atk">\n                    <img src="https://i.ibb.co/ww2CrD7/attack-White.png" alt="sword">\n                    <div class="atkbar">\n                        <div id="atkleft1" class="atkleft1"></div>\n                        <div id="atkleft2" class="atkleft2"></div>\n                    </div>\n                </div>\n                <div class="def">\n                    <img src="https://i.ibb.co/rdLn0QH/defense-White.png" alt="shield">\n                    <div class="defbar">\n                        <div id="defleft1" class="defleft1"></div>\n                        <div id="defleft2" class="defleft2"></div>\n                    </div>\n                </div>\n                <div class="cur">\n                    <img src="https://i.ibb.co/4ZbGHnW/cure-White.png" alt="heart">\n                    <div class="curbar">\n                        <div id="curleft1" class="curleft1"></div>\n                        <div id="curleft2" class="curleft2"></div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class="stats-right">\n                \x3c!--  stat bars 2 --\x3e\n                <div class="hp">\n                    <img src="https://i.ibb.co/L8JbRNp/heartwhite.png" alt="heart">\n                    <div class="hpbar">\n                        <div id="hpright" class="hpvalue" style="width: 100%"></div>\n                    </div>\n                </div>\n                <div class="atk">\n                    <img src="https://i.ibb.co/ww2CrD7/attack-White.png" alt="sword">\n                    <div class="atkbar">\n                        <div id="atkright1" class="atkright1"></div>\n                        <div id="atkright2" class="atkright2"></div>\n                    </div>\n                </div>\n                <div class="def">\n                    <img src="https://i.ibb.co/rdLn0QH/defense-White.png" alt="shield">\n                    <div class="defbar">\n                        <div id="defright1" class="defright1"></div>\n                        <div id="defright2" class="defright2"></div>\n                    </div>\n                </div>\n                <div class="cur">\n                    <img src="https://i.ibb.co/4ZbGHnW/cure-White.png" alt="heart">\n                    <div class="curbar">\n                        <div id="curright1" class="curright1"></div>\n                        <div id="curright2" class="curright2"></div>\n                    </div>\n                </div>\n            </div>\n\n            <div id="ppt-left" class="ppt-left">\n                <div id="attack1" class="initialppt">\n                    <img src="https://i.ibb.co/vmMGxYh/Attack.png" alt="Attack">\n                </div>\n                <div id="defense1" class="initialppt">\n                    <img src="https://i.ibb.co/80XPJd0/Defense.png" alt="Defense">\n                </div>\n                <div id="cure1" class="initialppt">\n                    <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Cure">\n                </div>\n            </div>\n\n            <div id="ppt-right" class="ppt-right d-none">\n                <div id="attack2">\n                    <img src="https://i.ibb.co/vmMGxYh/Attack.png alt=" Piedra">\n                </div>\n                <div id="defense2">\n                    <img src="https://i.ibb.co/80XPJd0/Defense.png" alt="Papel">\n                </div>\n                <div id="cure2">\n                    <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Tijera">\n                </div>\n            </div>\n\n        </div>\n\n        <img class="floorimg" src="${i.floor[e]}" alt="floor">\n        <img id="hero" class="${s.heroes[t][e]}" src="${i.heroes[t][e]}" alt="hero">\n        <img id="villain" class="${s.villains[e]}" src="${i.villains[e]}" alt="villain">\n\n    </div>\n\n    <picture id="you-win" class="d-none">\n        <img src="https://i.ibb.co/d4d5pPB/you-Win-2.png" alt="">\n    </picture>\n    <picture id="restart" class="d-none">\n        <img src="https://i.ibb.co/4dYd74M/reset-button.png" alt="">\n    </picture>\n\n</div>\n`},n=()=>'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',a={"/":()=>(localStorage.setItem("id",0),localStorage.setItem("charactersDetails",JSON.stringify({front:["https://i.ibb.co/PgRc6h0/Harry-Frente.png","https://i.ibb.co/XSdgWkv/Hermione-Frente.png","https://i.ibb.co/VTMmvrx/Ron-Frente.png"],fightWallpaper:["https://i.ibb.co/1bPd3DD/Fondo-troll.jpg","https://i.ibb.co/6b1vSm8/Fondo-quirrel.jpg","https://i.ibb.co/kxQwpRz/Fondo-basilisco.jpg","https://i.ibb.co/2Yhjggc/Fondo-tom.jpg","https://i.ibb.co/82dhTPZ/Pettigrew2.jpg","https://i.ibb.co/qB381Ts/Fondo-dementor.jpg","https://i.ibb.co/SXJGBTY/Fondo-dragon.jpg","https://i.ibb.co/N7bhsVN/Fondo-voldemort.jpg","https://i.ibb.co/PtCvKHN/Fondo-umbridge.jpg","https://i.ibb.co/DtGdkfK/Fondo-lucius.jpg","https://i.ibb.co/k6Q2vTs/Fondo-bellatrix.jpg","https://i.ibb.co/vdX7RBR/Fondo-draco.jpg","https://i.ibb.co/jh2dcMY/Fondo-voldemort2.jpg"],floor:["https://i.ibb.co/znzSd0w/Piso1-12.jpg","https://i.ibb.co/bF5Wcvg/Piso2.png","https://i.ibb.co/rdJP9HM/Piso3-4.png","https://i.ibb.co/rdJP9HM/Piso3-4.png","https://i.ibb.co/n6g0B1L/Piso5-6.jpg","https://i.ibb.co/n6g0B1L/Piso5-6.jpg","https://i.ibb.co/fQbyH7s/Piso7.jpg","https://i.ibb.co/pW72gg6/Piso8-13.jpg","https://i.ibb.co/W2MKLKR/Piso9.jpg","https://i.ibb.co/rMJjy1s/Piso10.jpg","https://i.ibb.co/Z8JCRc3/Piso11.jpg","https://i.ibb.co/znzSd0w/Piso1-12.jpg","https://i.ibb.co/pW72gg6/Piso8-13.jpg"],heroes:[["https://i.ibb.co/k4ZHWvs/Harry1.png","https://i.ibb.co/k4ZHWvs/Harry1.png","https://i.ibb.co/k4ZHWvs/Harry1.png","https://i.ibb.co/k4ZHWvs/Harry1.png","https://i.ibb.co/6yBpCLk/Harry5.png","https://i.ibb.co/6yBpCLk/Harry5.png","https://i.ibb.co/qCxvP3G/Harry4.png","https://i.ibb.co/qCxvP3G/Harry4.png","https://i.ibb.co/BnV0pMM/Harry5-2.png","https://i.ibb.co/BnV0pMM/Harry5-2.png","https://i.ibb.co/BnV0pMM/Harry5-2.png","https://i.ibb.co/QCfkd4C/Harry6.png","https://i.ibb.co/NZkC8Fy/Harry7-2.png"],["https://i.ibb.co/TBFBqH0/Hermione1-2.png","https://i.ibb.co/TBFBqH0/Hermione1-2.png","https://i.ibb.co/TBFBqH0/Hermione1-2.png","https://i.ibb.co/TBFBqH0/Hermione1-2.png","https://i.ibb.co/G04SbfN/Hermione3.png","https://i.ibb.co/G04SbfN/Hermione3.png","https://i.ibb.co/TThDYZn/Hermione4.png","https://i.ibb.co/TThDYZn/Hermione4.png","https://i.ibb.co/QkkdcXM/Hermione5.png","https://i.ibb.co/QkkdcXM/Hermione5.png","https://i.ibb.co/QkkdcXM/Hermione5.png","https://i.ibb.co/7rNSbVY/Hermione6.png","https://i.ibb.co/pKcNL9n/Hermione7.png"],["https://i.ibb.co/tHQht12/Ron1.png","https://i.ibb.co/tHQht12/Ron1.png","https://i.ibb.co/Mht67jq/Ron2.png","https://i.ibb.co/Mht67jq/Ron2.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png","https://i.ibb.co/BZHr1LH/Ron4.png"]],villains:["https://i.ibb.co/3NwLqJk/Troll.png","https://i.ibb.co/9W2YmLc/Quirrell.png","https://i.ibb.co/vXDKfpV/Basilisco.png","https://i.ibb.co/nrvMdS8/Tom-Riddle.png","https://i.ibb.co/Jx6YKTd/Petegrew.png","https://i.ibb.co/F8QBVLm/Dementor.png","https://i.ibb.co/r41KHLr/Dragon2.png","https://i.ibb.co/svjwfkF/Voldemort.png","https://i.ibb.co/JCcLLK8/Umbridge.png","https://i.ibb.co/b2C2tby/Lucius.png","https://i.ibb.co/L9g7mRb/Bellatrix.png","https://i.ibb.co/xD5tJLb/Draco.png","https://i.ibb.co/TBX5kG8/Voldemort2.png"],attack2png:["https://i.ibb.co/Srdpn5v/Claws212.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/Srdpn5v/Claws212.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/Srdpn5v/Claws212.png","https://i.ibb.co/Srdpn5v/Claws212.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png","https://i.ibb.co/KKSvGpH/Rayoverde.png"],defense2png:["https://i.ibb.co/KXnrBVk/baston.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/vdfyhv7/escudosnake-removebg-preview.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/vdfyhv7/escudosnake-removebg-preview.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png","https://i.ibb.co/b3y8dd7/Shield-Villain.png"],cure2png:["https://i.ibb.co/ZH8VJXy/steak.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/ZH8VJXy/steak.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/ZH8VJXy/steak.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png","https://i.ibb.co/SrYGSVW/curevillain.png"]})),localStorage.setItem("fightClasses",JSON.stringify({heroes:[["Harry0","Harry1","Harry2","Harry3","Harry4","Harry5","Harry6","Harry7","Harry8","Harry9","Harry10","Harry11","Harry12"],["Hermione0","Hermione1","Hermione2","Hermione3","Hermione4","Hermione5","Hermione6","Hermione7","Hermione8","Hermione9","Hermione10","Hermione11","Hermione12"],["Ron0","Ron1","Ron2","Ron3","Ron4","Ron5","Ron6","Ron7","Ron8","Ron9","Ron10","Ron11","Ron12"]],villains:["Troll","Quirrell","Basilisco","Tom","Pettigrew","Dementor","Dragon","Voldemort1","Umbridge","Lucius","Bellatrix","Draco","Voldemort2"]})),'\n    <div class="intro-wallpaper">\n        <div class="logo">\n            <img src="https://i.ibb.co/qr326St/Intro-png.png" alt="">\n        </div>\n        <a href="#/select-character/0">\n        <img src="https://i.ibb.co/JHZRL62/Intro-png2.png" alt="">\n        </a>\n    </div>\n  '),"/select-character/0":e,"/select-character/1":e,"/select-character/2":e,"/tower/0":i,"/tower/1":i,"/tower/2":i,"/tower/3":i,"/tower/4":i,"/tower/5":i,"/tower/6":i,"/tower/7":i,"/tower/8":i,"/tower/9":i,"/tower/10":i,"/tower/11":i,"/tower/12":i,"/fight/0":s,"/fight/1":s,"/fight/2":s,"/fight/3":s,"/fight/4":s,"/fight/5":s,"/fight/6":s,"/fight/7":s,"/fight/8":s,"/fight/9":s,"/fight/10":s,"/fight/11":s,"/fight/12":s,"/end":()=>'\n      <div class="end" style="\n      background: url(\'https://i.ibb.co/1RkptsD/End.jpg\');\n      background-position: center;\n      background-size: cover;\n      ">\n        <picture>\n            <img class="end-png"src="https://i.ibb.co/J3qSSQ0/EndPng.png" alt="">\n        </picture>\n      </div>\n    '},c=async()=>{const t=document.getElementById("header"),e=document.getElementById("content");t.innerHTML=await'\n      <div class="Header-main">\n        <div class="Header-logo">\n          <h1>\n            <a href="#/">\n              HPGame\n            </a>\n          </h1>\n        </div>\n        <div class="Header-nav">\n          <a href="#/about/">\n            About\n          </a>\n        </div>\n      </div>\n    ';let i=location.hash.slice(1)||"/",s=a[i]?a[i]:n;e.innerHTML=await s()},o=()=>{if(location.hash.slice(2).includes("tower")){const t=localStorage.getItem("lvl");setTimeout((()=>{location.hash=`/fight/${t}`}),5e3)}"tower/1"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg1")}),1e3):"tower/2"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg2")}),1e3):"tower/3"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg3")}),1e3):"tower/4"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg4")}),1e3):"tower/5"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg5")}),1e3):"tower/6"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg6")}),1e3):"tower/7"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg7")}),1e3):"tower/8"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg8")}),1e3):"tower/9"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg9")}),1e3):"tower/10"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg10")}),1e3):"tower/11"===location.hash.slice(2)?setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg11")}),1e3):"tower/12"===location.hash.slice(2)&&setTimeout((()=>{document.getElementById("tower-picture-img").classList.remove("traslateright"),document.getElementById("towerimg").classList.add("towerimg12")}),1e3)},r=()=>{if(location.hash.slice(2).includes("fight")){const v=parseInt(localStorage.getItem("lvl")),y=document.getElementById("attack1"),L=document.getElementById("defense1"),w=document.getElementById("cure1"),f=document.getElementById("attack2"),H=document.getElementById("defense2"),B=document.getElementById("cure2"),k=document.getElementById("ppt-left"),T=document.getElementById("ppt-right"),I=document.getElementById("attack1png"),E=document.getElementById("attack2png"),S=document.getElementById("defense1png"),A=document.getElementById("defense2png"),R=document.getElementById("cure1png"),M=document.getElementById("cure2png"),V=document.getElementById("damage1"),j=document.getElementById("damage2"),G=document.getElementById("cureplus1"),P=document.getElementById("cureplus2"),W=document.getElementById("villain"),$=document.getElementById("hero"),K=document.getElementById("hpleft"),Z=document.getElementById("hpright"),F=document.getElementById("atkleft1"),C=document.getElementById("atkleft2"),Y=document.getElementById("defleft1"),D=document.getElementById("defleft2"),J=document.getElementById("curleft1"),x=document.getElementById("curleft2"),N=document.getElementById("atkright1"),Q=document.getElementById("atkright2"),q=document.getElementById("defright1"),X=document.getElementById("defright2"),z=document.getElementById("curright1"),O=document.getElementById("curright2"),U=document.getElementById("you-win"),_=document.getElementById("restart");_.addEventListener("click",(function(){location.hash=`/tower/${v}`}));const tt=100;let et,it,st=100,nt=2,at=2,ct=2,ot=100,rt=2,dt=2,lt=2;const pt=50,gt=50,bt=30;$.classList.add("initialAnimation1"),W.classList.add("initialAnimation2"),k.setAttribute("style",""),T.setAttribute("style",""),setTimeout((()=>{y.classList.remove("initialppt"),L.classList.remove("initialppt"),w.classList.remove("initialppt"),$.classList.remove("initialAnimation1"),W.classList.remove("initialAnimation2")}),3e3);const mt=()=>{y.classList.add("selected"),L.classList.add("unselected"),w.classList.add("unselected"),T.classList.remove("d-none"),it=1,setTimeout(d,1e3)},ht=()=>{L.classList.add("selected"),y.classList.add("unselected"),w.classList.add("unselected"),T.classList.remove("d-none"),it=2,setTimeout(d,1e3)},ut=()=>{w.classList.add("selected"),L.classList.add("unselected"),y.classList.add("unselected"),T.classList.remove("d-none"),it=3,setTimeout(d,1e3)};function t(){f.classList.add("selectedRed")}function e(){f.classList.remove("selectedRed")}function i(){H.classList.add("selectedRed")}function s(){H.classList.remove("selectedRed")}function n(){B.classList.add("selectedRed")}function a(){B.classList.remove("selectedRed")}function c(){H.classList.add("selected2")}function o(){B.classList.add("selected2")}function r(){t(),setTimeout(e,tt),setTimeout(i,tt),setTimeout(s,2*tt),setTimeout(n,2*tt),setTimeout(a,3*tt)}function d(){r(),setTimeout(r,3*tt),setTimeout(r,6*tt),setTimeout(r,9*tt),setTimeout(r,12*tt),setTimeout(l,15*tt),setTimeout(g,15*tt)}function l(){et=Math.floor(3*Math.random())+1,1==et?(f.classList.add("selected2"),H.classList.add("unselected"),B.classList.add("unselected"),setTimeout(p,1e3)):2==et?(t(),setTimeout(e,tt),setTimeout(c,tt),setTimeout((()=>{f.classList.add("unselected")}),tt),setTimeout((()=>{B.classList.add("unselected")}),tt),setTimeout(p,tt+1e3)):(t(),setTimeout(e,tt),setTimeout(i,tt),setTimeout(s,2*tt),setTimeout(o,2*tt),setTimeout((()=>{f.classList.add("unselected")}),2*tt),setTimeout((()=>{H.classList.add("unselected")}),2*tt),setTimeout(p,2*tt+1e3))}function p(){switch(it){case 1:I.classList.add("animation"),2!=et&&(W.classList.add("hitted"),j.classList.add("animation"));break;case 2:S.classList.add("animation"),1===et&&rt>at-1&&V.classList.add("animation");break;case 3:R.classList.add("animation"),G.classList.add("animation")}switch(et){case 1:E.classList.add("animation"),2!=it&&($.classList.add("hitted"),V.classList.add("animation"));break;case 2:A.classList.add("animation"),1===it&&nt>dt-1&&j.classList.add("animation");break;case 3:M.classList.add("animation"),P.classList.add("animation")}setTimeout(b,3e3)}function g(){switch(it){case 1:at<2&&at++,ct<2&&ct++,1===et&&(ot-=pt*(nt/2),j.innerHTML=`-${Math.round(pt*(nt/2))}`,ot<0&&(ot=0),setTimeout((()=>{Z.setAttribute("style",`width: ${ot}%`)}),1500)),3===et&&2!=nt&&nt++,0!=nt&&3!=et&&nt--;break;case 2:if(nt<2&&nt++,ct<2&&ct++,1===et&&rt>at-1){var t=st;st+=gt*(at/2)-pt*(rt/2)*(.7+v/8*.3),V.innerHTML="-"+(t-st)}1===et&&2!=at&&at++,0!=at&&1!=et&&at--,st<0&&(st=0),setTimeout((()=>{K.setAttribute("style",`width: ${st}%`)}),1500);break;case 3:nt<2&&nt++,at<2&&at++,1===et?(st+=bt*(ct/2)-pt*(rt/2),V.innerHTML=`-${Math.round(pt*(rt/2))}`):st+=bt*(ct/2),G.innerHTML="+"+bt*(ct/2),2===et&&2!=ct&&ct++,0!=ct&&2!=et&&ct--,st>100&&(st=100),st<0&&(st=0),setTimeout((()=>{K.setAttribute("style",`width: ${st}%`)}),1500)}switch(et){case 1:dt<2&&dt++,lt<2&&lt++,1===it&&(st-=pt*(rt/2)*(.7+v/10*.3),V.innerHTML=`-${Math.round(pt*(rt/2)*(.7+v/10*.3))}`,st<0&&(st=0),setTimeout((()=>{K.setAttribute("style",`width: ${st}%`)}),1500)),3===it&&2!=rt&&rt++,0!=rt&&3!=it&&rt--;break;case 2:rt<2&&rt++,lt<2&&lt++,1===it&&nt>dt-1&&(ot+=gt*(dt/2)-pt*(nt/2),j.innerHTML="-"+(gt*(dt/2)-pt*(nt/2))),1===it&&2!=dt&&dt++,0!=dt&&1!=it&&dt--,ot<0&&(ot=0),setTimeout((()=>{Z.setAttribute("style",`width: ${ot}%`)}),1500);break;case 3:rt<2&&rt++,dt<2&&dt++,1===it?(ot+=bt*(lt/2)-pt*(nt/2),j.innerHTML=`-${Math.round(pt*(nt/2))}`):ot+=bt*(lt/2),P.innerHTML=`+${Math.round(bt*(lt/2))}`,2===it&&2!=lt&&lt++,0!=lt&&2!=it&&lt--,ot>100&&(ot=100),ot<0&&(ot=0),setTimeout((()=>{Z.setAttribute("style",`width: ${ot}%`)}),1500)}switch(nt){case 2:F.setAttribute("style","opacity: 1"),C.setAttribute("style","opacity: 1");break;case 1:F.setAttribute("style","opacity: 1"),C.setAttribute("style","opacity: 0");break;case 0:F.setAttribute("style","opacity: 0")}switch(at){case 2:Y.setAttribute("style","opacity: 1"),D.setAttribute("style","opacity: 1");break;case 1:Y.setAttribute("style","opacity: 1"),D.setAttribute("style","opacity: 0");break;case 0:Y.setAttribute("style","opacity: 0")}switch(ct){case 2:J.setAttribute("style","opacity: 1"),x.setAttribute("style","opacity: 1");break;case 1:J.setAttribute("style","opacity: 1"),x.setAttribute("style","opacity: 0");break;case 0:J.setAttribute("style","opacity: 0")}switch(rt){case 2:N.setAttribute("style","opacity: 1"),Q.setAttribute("style","opacity: 1");break;case 1:N.setAttribute("style","opacity: 1"),Q.setAttribute("style","opacity: 0");break;case 0:N.setAttribute("style","opacity: 0")}switch(dt){case 2:q.setAttribute("style","opacity: 1"),X.setAttribute("style","opacity: 1");break;case 1:q.setAttribute("style","opacity: 1"),X.setAttribute("style","opacity: 0");break;case 0:q.setAttribute("style","opacity: 0")}switch(lt){case 2:z.setAttribute("style","opacity: 1"),O.setAttribute("style","opacity: 1");break;case 1:z.setAttribute("style","opacity: 1"),O.setAttribute("style","opacity: 0");break;case 0:z.setAttribute("style","opacity: 0")}0===st?setTimeout(h,3e3):0===ot&&12==v?setTimeout(u,3e3):0===ot&&setTimeout(m,3e3)}function b(){y.classList.remove("unselected","selected"),L.classList.remove("unselected","selected"),w.classList.remove("unselected","selected"),y.classList.add("secondAnimation"),L.classList.add("secondAnimation"),w.classList.add("secondAnimation"),f.classList.remove("selected2","unselected"),H.classList.remove("selected2","unselected"),B.classList.remove("selected2","unselected"),I.classList.remove("animation"),S.classList.remove("animation"),R.classList.remove("animation"),E.classList.remove("animation"),A.classList.remove("animation"),M.classList.remove("animation"),$.classList.remove("initialAnimation"),W.classList.remove("initialAnimation"),$.classList.remove("hitted"),W.classList.remove("hitted"),V.classList.remove("animation"),j.classList.remove("animation"),G.classList.remove("animation"),P.classList.remove("animation"),T.classList.add("d-none")}function m(){k.setAttribute("style","display: none"),T.setAttribute("style","display: none"),U.setAttribute("style","display: block"),setTimeout((()=>{location.hash=`/tower/${v+1}`}),4e3)}function h(){k.setAttribute("style","display: none"),T.setAttribute("style","display: none"),_.setAttribute("style","display: block")}function u(){k.setAttribute("style","display: none"),T.setAttribute("style","display: none"),U.setAttribute("style","display: block"),setTimeout((()=>{location.hash="/end"}),4e3)}w.addEventListener("click",ut),L.addEventListener("click",ht),y.addEventListener("click",mt)}};window.addEventListener("load",c),window.addEventListener("hashchange",c),window.addEventListener("hashchange",o),window.addEventListener("load",o),window.addEventListener("hashchange",r),window.addEventListener("load",r)})();