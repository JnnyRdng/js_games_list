document.addEventListener("DOMContentLoaded", () => {
    const populate = document.querySelector("#populate");
    populate.addEventListener("click", handlePopulate);

    const deleteAll = document.querySelector("#delete-all");
    deleteAll.addEventListener("click", handleDeleteAll);


    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
});

const handlePopulate = function () {
    for (let game of games) {
        newListItem(game.title, game.publisher, game.platform, game.rating);
    }
}


const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const platform = event.target.platform.value;
    const publisher = event.target.publisher.value;
    const rating = event.target.rating.value;
    newListItem(title, platform, publisher, rating);
    event.target.reset();
}

const newListItem = function (title, platform, publisher, rating) {
    const gameList = document.querySelector("ul");
    if (gameList.innerHTML === "No games in list!") {
        gameList.innerHTML = "";
    }
    const li = newElement("li", gameList);
    const hgroup = newElement("hgroup", li);
    newElement("h2", hgroup, title, "title");
    newElement("h3", hgroup, platform, "platform");
    newElement("h3", hgroup, publisher, "publisher");
    const main = newElement("main", li);
    newElement("h2", main, "User rating");
    newElement("span", main, rating, "user-rating");
    const span = newElement("span", main, "/100 ");
    newInput(span, "button", "+", "increase-rating");
    newInput(span, "button", "-", "decrease-rating");
    const footer = newElement("footer", li);
    newInput(footer, "button", "Delete", "delete-single", undefined, deleteSingleItem);
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

const newInput = function (parent, type, value, classname, name, eventHandler) {
    const el = document.createElement("input");
    el.type = type;
    el.value = value;
    el.name = name;
    if (classname) {
        el.classList.add(classname);
    }
    if (eventHandler) {
        el.addEventListener("click", eventHandler);
    }
    parent.appendChild(el);
    return el;
}

const deleteSingleItem = function (event) {
    const listItem = event.target.parentNode.parentNode;
    listItem.parentNode.removeChild(listItem);
}

const handleDeleteAll = function () {
    const gameList = document.querySelector("ul");
    gameList.innerHTML = "No games in list!"
}
