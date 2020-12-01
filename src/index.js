import {home} from './modules/home';
import {renderPage} from './modules/helper';
import {navbar} from './modules/navbar';
import {menu} from './modules/menu';
import {drink} from './modules/drink';

const tabOptions = {
    "Home": home(),
    "Menu": menu(),
    "Drink": drink()
};

renderPage(navbar(), home());
const tabs = document.querySelectorAll('.tab'); 
Array.from(tabs).forEach(tab => {
    tab.addEventListener('click',  e => {renderPage(tabOptions[tab.id])});
});