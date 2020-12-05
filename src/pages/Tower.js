import getData from '../utils/getData';

const Tower =  async () => {
    const id = parseInt(localStorage.getItem("id"));
    let lvl = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);
    localStorage.setItem("lvl",lvl); 
    const characters = await getData();
    const character = characters[id];
    const view = `
    <div class="intro-wallpaper">
        <div class="tower"> 
            <img id="towerimg" class="towerimg" src="https://i.ibb.co/dGmqPDn/Towerhp.png" alt="">
  
            <img class="towerpj traslateright" id="tower-picture-img" src="${character.image}" alt="">  
            </div>
    </div>
  `;
return view;
};

export default Tower;