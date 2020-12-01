const menu = () => {
    const imgs = [
        "img1.jpeg",
        "im2.jpeg",
        "im3.jpeg"
    ];

    const menuImg = "menu.jpg";

    IMAGE_PATH = "./css/Images";

    const renderArea = () => {
        return "#content";
    };

    const render = () => {
        const div = document.createElement('div');

        const h1 = document.createElement('h1');
        h1.className = "menu-text";
        h1.innerText = "Food Menu";

        const bachGround = document.querySelector('#bg');
        bachGround.className = "menu-background";

        const menuImgsDiv = document.createElement('div');
        menuImgsDiv.className = "menu menu-imgs-div";

        imgs.forEach(img => {
            const image = document.createElement('img');
            image.className = "menu-img";
            image.src = IMAGE_PATH + img;
            menuImgsDiv.append(image);
        });

        const menuDiv = document.createElement('div');
        menuDiv.className = "menu menu-div";

        const menuImage = document.createElement('img');
        menuImage.src = IMAGE_PATH + menuImg;

        menuDiv.append(menuImage);

        div.append(h1, menuImgsDiv, menuDiv);


    };
};

export {renderArea, render};
