const home = () => {

    const renderArea = () => {
        return "#content";
    };

    const render = (content) => {
        const h1 = document.createElement('h1');

        h1.id = "home-text";

        h1.innerText = "The Royal Pig Pub";
        
        return h1;
    };
    return {renderArea, render};
};
 export {home};