import router from './routes';
import changeTower from './utils/changeTower';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('hashchange', changeTower);
window.addEventListener('load', changeTower);