const navbar = () => {

    const listItems = [
        "Home",
        "Menu",
        "Drink"
    ];
    
    const renderArea = () => {
        return "#content";
    };

    const render = () => {
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        ul.className = "tab-bar";
        listItems.forEach(item => {
            const li = document.createElement('li');
            li.className = "tab";
            li.innerText = item;
            ul.append(li);
        });
        nav.append(ul);
        return nav;
    };
    return {renderArea, render};
};

export {navbar};