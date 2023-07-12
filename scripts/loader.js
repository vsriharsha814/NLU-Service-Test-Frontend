function createLoader() {
    console.log("creating loader")
    document.write(`
        <div id="loadingOverlay" name="loader" class="loadingOverlay"></div>
        <div id="loader" name="loader" class="center"></div>
    `);
}

function startLoader() {
    const elements = getElements();

    for (let element of elements) {
        element.style.pointerEvents = "auto";
        element.style.display = "block";
    }
    // disableClickEvents();
}

function stopLoader() {
    const elements = getElements();

    elements.forEach((element) => {
        element.style.display = "none";
        element.style.pointerEvents = "none";
    });
    // enableClickEvents();
}

function getElements() {
    return document.getElementsByName("loader");
}

const clickEventHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
};

function disableClickEvents() {
    document.addEventListener("click", clickEventHandler, true);
}

function enableClickEvents() {
    document.removeEventListener("click", clickEventHandler, true);
}