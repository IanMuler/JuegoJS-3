const Fight =  async () => {
    const id = parseInt(localStorage.getItem("id")); 
    let lvl = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);
    localStorage.setItem("lvl",lvl) 
    const charactersDetails = JSON.parse(localStorage.getItem("charactersDetails"));
    const fightClasses = JSON.parse(localStorage.getItem("fightClasses"));
    console.log(charactersDetails.heroes[id][lvl]) // NO ANDA
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
            <div id="ppt" class="ppt">
            <div class="ppt-left"></div>
            <div class="ppt-right"></div>
            </div>
            <img class="floorimg" src="${charactersDetails.floor[lvl]}" alt="">
            <img id="${fightClasses.heroes[id][lvl]}" src="${charactersDetails.heroes[id][lvl]}" alt="">
            <img id="${fightClasses.villains[lvl]}" src="${charactersDetails.villains[lvl]}" alt="">    
        </div>
    </div>
  `;
return view;
};

export default Fight;