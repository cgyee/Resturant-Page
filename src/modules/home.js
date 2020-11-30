const home = () => {

    const renderArea = () => {
        return "#content";
    };

    const render = (content) => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');

        div.id = "home-div";
        h1.id = "home-text";

        h1.innerText = "The Royal Pig Pub";

        div.append(h1);
        return div;
    };
    return {renderArea, render};
};
 export {home};