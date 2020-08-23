document.addEventListener("DOMContentLoaded", () => {
    const populate = document.querySelector("#populate");
    populate.addEventListener("click", handlePopulate);
    handlePopulate();

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

const newListItem = function (title, publisher, platform, rating) {
    const gameList = document.querySelector("ul");
    if (gameList.innerHTML === "No games in list!") {
        gameList.innerHTML = "";
    }
    const listClass = ratingClass(rating);
    const li = newElement("li", gameList);
    const hgroup = newElement("hgroup", li);
    newElement("h2", hgroup, title, "title");
    newElement("h3", hgroup, platform, "platform");
    newElement("h3", hgroup, publisher, "publisher");
    const main = newElement("main", li, "", listClass);
    newElement("h2", main, "User rating");
    newElement("span", main, rating, "user-rating");
    const span = newElement("span", main, "/100 ");
    newInput(span, "button", "+", "increase-rating", increaseRating);
    newInput(span, "button", "-", "decrease-rating", decreaseRating);
    const footer = newElement("footer", li);
    newInput(footer, "button", "Delete", "delete-single", deleteSingleItem);
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

const newInput = function (parent, type, value, classname, eventHandler, name) {
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

const increaseRating = function (event) {
    const rating = event.target.parentNode.parentNode.querySelector(".user-rating");
    let number = Number(rating.textContent);
    number++;
    if (number > 100) {
        number = 100;
    }
    rating.textContent = number;
    rating.parentNode.parentNode.querySelector("main").className = ratingClass(number);
}

const decreaseRating = function (event) {
    const rating = event.target.parentNode.parentNode.querySelector(".user-rating");
    let number = Number(rating.textContent);
    number--;
    if (number < 0) {
        number = 0;
    }
    rating.textContent = number;
    rating.parentNode.parentNode.querySelector("main").className = ratingClass(number);
}


const ratingClass = function (rating) {
    let listClass = "bad";
    if (rating >= 90) {
        listClass = "great";
    } else if (rating >= 60) {
        listClass = "good";
    } else if (rating >= 40) {
        listClass = "ok";
    }
    return listClass;
}