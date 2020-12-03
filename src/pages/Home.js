import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const character = characters[0];
  const view = `
    <div class="Characters">
     
        <article class="Characters-item">
          <a href="#/${character.name}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      
    </div>
  `;
  return view;
};

export default Home;