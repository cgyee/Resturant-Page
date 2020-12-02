

//function takes in one or serveral pages '...pages' passes an array containing all arguements
const renderPage = (...pages) => {
    //We need to get the id of where we want to render our page
    const renderArea = document.querySelector(pages[0].renderArea());

    //Removes previous Node but keeps NavBar
    renderArea.removeChild(renderArea.lastChild);
    pages.forEach(page => {
        renderArea.append(page.render());
    });
}

//function handles the creations of drink.js related divs that could be repurposed for possible menu.js use
const createDrinkList = (drinksObj) => {
    const div = document.createElement('div');
    div.className = "drinks-list";

    drinksObj.typeOf.forEach(drinkType => {

        const h3 = document.createElement('h3');
        h3.textContent = drinkType;
        div.append(h3);

        const pDiv = document.createElement('div');

        drinksObj[drinkType].forEach(drink => {
        const thisDrink = document.createElement('p');
        thisDrink.className = "drinks-text";
        thisDrink.textContent = drink;
        
        pDiv.append(thisDrink);
        });

        div.append(pDiv);
    });

    return div;
}

//function changes the background class based on the arguement passed
const updateBackground = (image) => {
    const bachGround = document.querySelector('#bg');
    bachGround.className = image;
}

export {renderPage, updateBackground, createDrinkList};