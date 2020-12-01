import {updateBackground, createDrinkList} from './helper.js';

const drink = () => {
    const beers = {
        "typeOf": [
            "Craft Beer",
            "Domestics Beer",
            "Imports"
        ],

        "Craft Beer": [
            "Funky Buddha Floridian Hefeweizen",
            "Kentucky Bourbon Barrel Ale",
            "Royal Pig IPA", 
            "Royal Pig Red Ale",
            "Royal Pig Pub Lager",
            "Elysian Space Dust"
        ],

        "Domestics Beer": [
            "Samuel Adams",
            "Bud Light",
            "Miller Lite", 
            "Yuengling",
            "Blue Moon",
            "Heineken",
            "Michelob Ultra"
        ],

        "Imports": [
            "Guiness",
            "Stella",
            "Stella Cidre",
            "Corona Light"
        ]

    }

    const liquors = {
        "typeOf": [
            "Signature Cocktails",
            "Martinis"
        ],

        "Signature Cocktails": [
            "The Royal Old Fashioned",
            "HandCrafted Margarita",
            "350 Lemonade",
            "Closing Bell",
            "Legend of Rock"
        ],

        "Martinis": [
            "Tipsy Gardener",
            "Mango Fruit Cosmo"
        ]

    }
    
    const renderArea = () => {
        return "#content";
    };

    const render = () => {
        const div = document.createElement('div');
        div.className = "drinks"

        const h1 = document.createElement("h1");
        h1.textContent = "Drinks";

        const b = createDrinkList(beers);
        const liq = createDrinkList(liquors);
        
        div.append(b, liq);

        return div;
    };

    return {renderArea, render};
};

export {drink};