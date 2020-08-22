document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
});

const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const platform = event.target.console.value;
    const publisher = event.target.publisher.value;
    const rating = event.target.rating.value;
    newListItem(title, platform, publisher, rating);
    event.target.reset();
}

const newListItem = function (title, platform, publisher, rating) {
    const gameList = document.querySelector("ul");
    const li = newElement("li", gameList);
    const hgroup = newElement("hgroup", li);
    newElement("h2", hgroup, title, "title");
    newElement("h3", hgroup, platform, "console");
    newElement("h3", hgroup, publisher, "publisher");
    const main = newElement("main", li);
    newElement("h2", main, "User rating");
    newElement("span", main, rating, "user-rating");
    const span = newElement("span", main, "/100 ", "rating-number");
    newInput(span, "button", "+", "increase-rating");
    newInput(span, "button", "-", "decrease-rating");
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

