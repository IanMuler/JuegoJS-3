const Fight =  async () => {
    const id = parseInt(localStorage.getItem("id")); 
    let lvl = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);
    localStorage.setItem("lvl",lvl) 
    const charactersDetails = JSON.parse(localStorage.getItem("charactersDetails"));
    console.log(charactersDetails.heroes[id[lvl]]) // NO ANDA
    const view = `
    <div class="fight-wallpaper" style="
    background: url(${charactersDetails.heroe[lvl]});
    background-position: center;
    background-size: cover;
    ">
        <div class="fightplace"> 
            <img class="floorimg" src="${charactersDetails.floor[lvl]}" alt="">
            <img class="hero" src="${charactersDetails.heroes[id[lvl]]}" alt="">
            <img class="villain" src="${charactersDetails.villains[lvl]}" alt="">    
        </div>
    </div>
  `;
return view;
};

export default Fight;