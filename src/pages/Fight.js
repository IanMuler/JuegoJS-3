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
            <img class="floorimg" src="${charactersDetails.floor[lvl]}" alt="">
            <img id="${fightClasses.heroes[id][lvl]}" src="${charactersDetails.heroes[id][lvl]}" alt="">
            <img id="${fightClasses.villains[lvl]}" src="${charactersDetails.villains[lvl]}" alt="">    
        </div>
    </div>
  `;
return view;
};

export default Fight;