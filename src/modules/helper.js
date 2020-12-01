
const renderPage = (...pages) => {
    const renderArea = document.querySelector(pages[0].renderArea());
    renderArea.removeChild(renderArea.lastChild);
    pages.forEach(page => {
        renderArea.append(page.render());
    });
};

export {renderPage};