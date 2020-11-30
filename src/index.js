import {home} from './modules/home';
import {renderPage} from './modules/helper';
import {navbar} from './modules/navbar';

renderPage(navbar());
renderPage(home());