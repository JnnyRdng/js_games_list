document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    newListItem();
    newListItem();
});

const newListItem = function () {
    const gameList = document.querySelector("ul");
    const li = newElement("li", gameList);
    const hgroup = newElement("hgroup", li);
    newElement("h2", hgroup, "The Last Of Us Part II", "title");
    newElement("h3", hgroup, "PS4", "console");
    newElement("h3", hgroup, "Naughty Dog", "publisher");
    const main = newElement("main", li);
    newElement("h2", main, "User rating");
    newElement("span", main, 50, "user-rating");
    const span = newElement("span", main, "/100 ");
    newElement("input", span, "", "increase-rating", "button", "+");
    const footer = newElement("footer", li);
    newElement("input", footer, "", "delete-single", "button", "Delete")
}

const newElement = function (kind, parent, content = "", classname = undefined, type = undefined, value = undefined) {
    const el = document.createElement(kind);
    if (classname) {
        el.classList.add(classname);
    }
    if (type) {
        el.type = type;
    }
    if (value) {
        el.value = value;
    }
    el.textContent = content;
    parent.appendChild(el);
    return el;
}

