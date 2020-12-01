
const renderPage = (...pages) => {
    const renderArea = document.querySelector(pages[0].renderArea());
    renderArea.removeChild(renderArea.lastChild);
    pages.forEach(page => {
        renderArea.append(page.render());
    });
}

const createDrinkList = (drinksObj) => {
    const div = document.createElement('div');
    div.className = "drinks-list"

    drinksObj.typeOf.forEach(drinkType => {

        const h3 = document.createElement('h3');
        h3.textContent = drinkType;
        div.append(h3);

        const pDiv = document.createElement('div');

        drinksObj[drinkType].forEach(drink => {
        const thisDrink = document.createElement('p');

        thisDrink.textContent = drink;
        
        pDiv.append(thisDrink);
        });

        div.append(pDiv);
    });

    return div;
}

const updateBackground = (image) => {
    const bachGround = document.querySelector('#bg');
    bachGround.className = image;
}

export {renderPage, updateBackground, createDrinkList};