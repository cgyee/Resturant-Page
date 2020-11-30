const renderPage = (page) => {
    const renderArea = document.querySelector(page.renderArea());
    while(renderArea.childNodes.length > 1){
        renderArea.removeChild(renderArea.lastChild);
    }
    renderArea.append(page.render());
};

export {renderPage};