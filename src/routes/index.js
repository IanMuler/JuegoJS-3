import getHash from '../utils/getHash';
import Intro from '../pages/Intro';
import Header from '../templates/Header';
import SelectCharacter from '../pages/SelectCharacter';
import Tower from '../pages/Tower';
import Error404 from '../pages/Error404';



const routes = {
  '/': Intro,
  '/select-character/0': SelectCharacter,
  '/select-character/1': SelectCharacter,
  '/select-character/2': SelectCharacter,
  '/tower': Tower,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  

  header.innerHTML = await Header();
  
  let hash = getHash();
  let render = routes[hash] ? routes[hash] : Error404;
  content.innerHTML = await render();  

};

export default router;