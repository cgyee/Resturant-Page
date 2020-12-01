
const renderPage = (...pages) => {
    const renderArea = document.querySelector(pages[0].renderArea());
    renderArea.removeChild(renderArea.lastChild);
    pages.forEach(page => {
        renderArea.append(page.render());
    });
};

const updateBackground = (image) => {
    const bachGround = document.querySelector('#bg');
    bachGround.className = image;
}

export {renderPage, updateBackground};