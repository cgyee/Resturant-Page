const drink = () => {
    const renderArea = () => {
        return "#content";
    };

    const render = () => {
        const h1 = document.createElement('h1');
        return h1;
    };

    return {renderArea, render};
};

export {drink};