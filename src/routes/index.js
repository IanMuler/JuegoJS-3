import getHash from '../utils/getHash';
import Intro from '../pages/Intro';
import Header from '../templates/Header';
import SelectCharacter from '../pages/SelectCharacter';
import Tower from '../pages/Tower';
import Fight from '../pages/Fight';
import Error404 from '../pages/Error404';



const routes = {
  '/': Intro,
  '/select-character/0': SelectCharacter,
  '/select-character/1': SelectCharacter,
  '/select-character/2': SelectCharacter,
  '/tower/0': Tower,
  '/tower/1': Tower,
  '/tower/2': Tower,
  '/tower/3': Tower,
  '/tower/4': Tower,
  '/tower/5': Tower,
  '/tower/6': Tower,
  '/tower/7': Tower,
  '/tower/8': Tower,
  '/tower/9': Tower,
  '/tower/10': Tower,
  '/tower/11': Tower,
  '/tower/12': Tower,
  '/fight/0': Fight,
  '/fight/1': Fight,
  '/fight/2': Fight,
  '/fight/3': Fight,
  '/fight/4': Fight,
  '/fight/5': Fight,
  '/fight/6': Fight,
  '/fight/7': Fight,
  '/fight/8': Fight,
  '/fight/9': Fight,
  '/fight/10': Fight,
  '/fight/11': Fight,
  '/fight/12': Fight,
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