const Fight =  async () => {
    const id = parseInt(localStorage.getItem("id")); 
    let lvl = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);
    localStorage.setItem("lvl",lvl) 
    const charactersDetails = JSON.parse(localStorage.getItem("charactersDetails"));
    const fightClasses = JSON.parse(localStorage.getItem("fightClasses"));
    const view = `
    <div class="fight-wallpaper" style="
    background: url(${charactersDetails.fightWallpaper[lvl]});
    background-position: center;
    background-size: cover;
    ">
        <div class="fightplace"> 
        <!--
            <div class="centro1"></div>
            <div class="centro2"></div>
            <div class="alto1"></div>
            <div class="base1"></div>
         --> 
            <div id="attack1png">
            <img src="https://i.ibb.co/Yj5Spc7/Rayorojo.png" alt="Attack1png">
            </div>
            <div id="attack2png">
            <img src="https://i.ibb.co/KKSvGpH/Rayoverde.png" alt="Attack1png">
            </div>
            <div id="defense1png">
            <img src="https://i.ibb.co/y4q4YcG/Shield.png" alt="Attack1png">
            </div>
            <div id="defense2png">
            <img src="https://i.ibb.co/b3y8dd7/Shield-Villain.png" alt="Attack1png">
            </div>
            <div id="ppt" class="ppt">
            <div class="stats-left"></div>
            <div class="ppt-left">
            <div id="attack1" class="initialppt">
            <img src="https://i.ibb.co/vmMGxYh/Attack.png" alt="Attack">
            </div>
            <div id="defense1" class="initialppt">
            <img  src="https://i.ibb.co/80XPJd0/Defense.png" alt="Defense">
            </div>
            <div id="cure1" class="initialppt">
            <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Cure">
            </div>
            </div>
            <div id="ppt-right" class="ppt-right d-none">
            <div id="attack2">
            <img src="https://i.ibb.co/vmMGxYh/Attack.png alt="Piedra">
            </div>
            <div id="defense2">
            <img src="https://i.ibb.co/80XPJd0/Defense.png" alt="Papel">
            </div>
            <div id="cure2">
            <img src="https://i.ibb.co/5KZYNzT/Cure.png" alt="Tijera">
            </div>
            </div>
            <div class="stats-right"></div>
            </div>
            <img class="floorimg" src="${charactersDetails.floor[lvl]}" alt="">
            <img id="${fightClasses.heroes[id][lvl]}" src="${charactersDetails.heroes[id][lvl]}" alt="">
            <img id="villain" class="${fightClasses.villains[lvl]}" src="${charactersDetails.villains[lvl]}" alt="">    
        </div>
    </div>
  `;
return view;
};

export default Fight;