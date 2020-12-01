import {updateBackground} from  './helper.js'

const home = () => {
    const bg = "home-background";

    const renderArea = () => {
        return "#content";
    };

    const render = () => {
        updateBackground(bg);

        const h1 = document.createElement('h1');

        h1.id = "home-text";

        h1.innerText = "The Royal Pig Pub";
        
        return h1;
    };
    return {renderArea, render};
};
 export {home};