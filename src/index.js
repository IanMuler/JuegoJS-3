import router from './routes';
import changeTower from './utils/changeTower';
import fightApp from './utils/fightApp';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

window.addEventListener('hashchange', changeTower);
window.addEventListener('load', changeTower);

window.addEventListener('hashchange', fightApp);
window.addEventListener('load', fightApp);




