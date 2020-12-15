const Fight = () => {
const id = parseInt(localStorage.getItem("id"));
let lvl = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);
localStorage.setItem("lvl", lvl)
const charactersDetails = JSON.parse(localStorage.getItem("charactersDetails"));
const fightClasses = JSON.parse(localStorage.getItem("fightClasses"));
const view = `
<div class="fight-wallpaper" style="
    background: url(${charactersDetails.fightWallpaper[lvl]});
    background-position: center;
    background-size: cover;
    ">
    <div class="fightplace">

        <!-- fight png -->
        <div id="attack1png">
            <img src="https://i.ibb.co/Yj5Spc7/Rayorojo.png" alt="Attack1png">
        </div>
        <div id="attack2png" class="atk-${fightClasses.villains[lvl]}">
            <img src="${charactersDetails.attack2png[lvl]}" alt="Attack2png">
        </div>
        <div id="defense1png">
            <img src="https://i.ibb.co/y4q4YcG/Shield.png" alt="defense1png">
        </div>
        <div id="defense2png" class="def-${fightClasses.villains[lvl]}">
            <img src="${charactersDetails.defense2png[lvl]}" alt="defense2png">
        </div>
        <div id="cure1png">
            <img src="https://i.ibb.co/5M2smsV/curehero.png" alt="cure1png">
        </div>
        <div id="cure2png" class="cur-${fightClasses.villains[lvl]}">
            <img src="${charactersDetails.cure2png[lvl]}" alt="cure2png">
        </div>

        <!--  animated damage/cure value -->
        <span id="damage1"></span>
        <span id="damage2"></span>
        <span id="cureplus1"></span>
        <span id="cureplus2"></span>

        <!-- ppt & stats -->

        <div id="ppt" class="ppt">

            <div class="stats-left">

                <!-- stat bars 1 -->
                <div class="hp">
                    <img src="https://i.ibb.co/L8JbRNp/heartwhite.png" alt="heart">
                    <div class="hpbar">
                        <div id="hpleft" class="hpvalue" style="width: 100%"></div>
                    </div>
                </div>
                <div class="atk">
                    <img src="https://i.ibb.co/ww2CrD7/attack-White.png" alt="sword">
                    <div class="atkbar">
                        <div id="atkleft1" class="atkleft1"></div>
                        <div id="atkleft2" class="atkleft2"></div>
                    </div>
                </div>
                <div class="def">
                    <img src="https://i.ibb.co/rdLn0QH/defense-White.png" alt="shield">
                    <div class="defbar">
                        <div id="defleft1" class="defleft1"></div>
                        <div id="defleft2" class="defleft2"></div>
                    </div>
                </div>
                <div class="cur">
                    <img src="https://i.ibb.co/4ZbGHnW/cure-White.png" alt="heart">
                    <div class="curbar">
                        <div id="curleft1" class="curleft1"></div>
                        <div id="curleft2" class="curleft2"></div>
                    </div>
                </div>

            </div>

            <div class="stats-right">
                <!--  stat bars 2 -->
                <div class="hp">
                    <img src="https://i.ibb.co/L8JbRNp/heartwhite.png" alt="heart">
                    <div class="hpbar">
                        <div id="hpright" class="hpvalue" style="width: 100%"></div>
                    </div>
                </div>
                <div class="atk">
                    <img src="https://i.ibb.co/ww2CrD7/attack-White.png" alt="sword">
                    <div class="atkbar">
                        <div id="atkright1" class="atkright1"></div>
                        <div id="atkright2" class="atkright2"></div>
                    </div>
                </div>
                <div class="def">
                    <img src="https://i.ibb.co/rdLn0QH/defense-White.png" alt="shield">
                    <div class="defbar">
                        <div id="defright1" class="defright1"></div>
                        <div id="defright2" class="defright2"></div>
                    </div>
                </div>
                <div class="cur">
                    <img src="https://i.ibb.co/4ZbGHnW/cure-White.png" alt="heart">
                    <div class="curbar">
                        <div id="curright1" class="curright1"></div>
                        <div id="curright2" class="curright2"></div>
                    </div>
                </div>
            </div>

            <div id="ppt-left" class="ppt-left">
                <div id="attack1" class="initialppt">
                    <img src="https://i.ibb.co/vmMGxYh/Attack.png" alt="Attack">
                </div>
                <div id="defense1" class="initialppt">
                    <img src="https://i.ibb.co/80XPJd0/Defense.png" alt="Defense">
                </div>
                <div id="cure1" class="initialppt">
                    <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Cure">
                </div>
            </div>

            <div id="ppt-right" class="ppt-right d-none">
                <div id="attack2">
                    <img src="https://i.ibb.co/vmMGxYh/Attack.png alt=" Piedra">
                </div>
                <div id="defense2">
                    <img src="https://i.ibb.co/80XPJd0/Defense.png" alt="Papel">
                </div>
                <div id="cure2">
                    <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Tijera">
                </div>
            </div>

        </div>

        <img class="floorimg" src="${charactersDetails.floor[lvl]}" alt="floor">
        <img id="hero" class="${fightClasses.heroes[id][lvl]}" src="${charactersDetails.heroes[id][lvl]}" alt="hero">
        <img id="villain" class="${fightClasses.villains[lvl]}" src="${charactersDetails.villains[lvl]}" alt="villain">

    </div>

    <picture id="you-win" class="d-none">
        <img src="https://i.ibb.co/d4d5pPB/you-Win-2.png" alt="">
    </picture>
    <picture id="restart" class="d-none">
        <img src="https://i.ibb.co/4dYd74M/reset-button.png" alt="">
    </picture>

</div>
`;
return view;
};

export default Fight;