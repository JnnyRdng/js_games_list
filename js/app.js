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
    newInput(span, "button", "+", "increase-rating");
    const footer = newElement("footer", li);
    newInput(footer, "button", "Delete", "delete-single");
}

const newElement = function (kind, parent, content = "", classname) {
    const el = document.createElement(kind);
    if (classname) {
        el.classList.add(classname);
    }
    el.textContent = content;
    parent.appendChild(el);
    return el;
}

const newInput = function (parent, type, value, classname, name) {
    const el = document.createElement("input");
    el.type = type;
    el.value = value;
    el.name = name;
    if (classname) {
        el.classList.add(classname);
    }
    parent.appendChild(el);
    return el;
}

