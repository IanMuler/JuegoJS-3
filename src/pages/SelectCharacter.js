import getData from '../utils/getData';

const SelectCharacter = async () => {

let id = parseInt(location.hash.slice(2).toLocaleLowerCase().split('/')[1]);  // Variable que toma el valor del final de la URL
localStorage.setItem("id", id);

const charactersDetails = JSON.parse(localStorage.getItem("charactersDetails"));

const characters = await getData();
const character = characters[id];
let prev;
id==0? prev = 2 : prev = id-1;
let next;
id==2? next = 0 : next = id+1;


const view = `
<div class="select-wallpaper">
    <div id="selection" class="overlay">
        <div class="character-left">
        <div class="carrousel">
            <a href="#/select-character/${prev}"><img class="arrow-left" src="https://i.ibb.co/ygSPBTB/Flechas-Left.png" alt=""></a>
            <img class="characterimg" src="${charactersDetails.front[id]}" alt="">
            <a href="#/select-character/${next}"><img class="arrow-right" src="https://i.ibb.co/kQX8xkW/Flechas-Right.png" alt=""></a>  
            </div>
            <a href="#/tower">
            <button class="btn-select">Select</button>
            </a>
        </div>
        <div class="character-right">
            <img class="imgapi" src="${character.image}" alt="">
            <h3 class="carrousel-name">${character.name}</h3>
        </div>
    </div>
</div>
`;

return view;


};

export default SelectCharacter;