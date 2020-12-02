import {home} from './modules/home';
import {renderPage} from './modules/helper';
import {navbar} from './modules/navbar';
import {menu} from './modules/menu';
import {drink} from './modules/drink';


//the key in tab options are associtated with their respective ids in the document 
const tabOptions = {
    "Home": home(),
    "Menu": menu(),
    "Drink": drink()
};

//renders the home page on start adds navbar and home, other pages only pass one arguement
renderPage(navbar(), home());

//iterate over the tabs and where their tab id corresponds in tabOptions call the respective function on click
const tabs = document.querySelectorAll('.tab'); 
Array.from(tabs).forEach(tab => {
    tab.addEventListener('click',  e => {renderPage(tabOptions[tab.id])});
});