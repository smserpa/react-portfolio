import karaoke from "./assets/karaoke.png";
import notetaker from "./assets/note-taker.png";
import recipe from "./assets/recipe.png";
import password from "./assets/password.png";
import hedgenight from "./assets/hedgenight.png";
import burger from "./assets/burger.png";

export const projects = [
    {
        "id": "1",
        "title": "Covid Karaoke",
        "image": karaoke,
        "description": "Music app that displays song lyrics alongside the Spotify music player for an at home, interactive karaoke experience",
        "technology": "Sequelize, Node.js, Express, Express Handlebars, JavaScript, jQuery, Spotify API, Soleno Lyrics API, Bootstrap",
        "deployed": "https://covidkaraoke.herokuapp.com/",
        "repo": "https://github.com/vpasamic/covidkaraoke"
    },
    {
        "id": "2",
        "title": "Express Note Taker",
        "image": notetaker,
        "description": "An organizational tool that allows users to draft, save, and delete notes in order to manage tasks and other concerns. This application runs with an express backend that saves and retieves data via JSON file.",
        "technology": "HTML, CSS, Express, Javascript, jQuery, Bootstrap",
        "deployed": "https://express-note-taking-app-1.herokuapp.com/",
        "repo": "https://github.com/smserpa/express_note_taker"
    },
    {
        "id": "3",
        "title": "Recipe Roulette",
        "image": recipe,
        "description": "Culinary app that produces an assortment of recipes by user input of cuisine type and/or desired ingredient",
        "technology": "HTML, CSS, JavaScript, jQuery, Spoonacular API, Edamam API, Materialize, GoogleFonts",
        "deployed": "https://babydylan.github.io/recipe-roulette/",
        "repo": "https://github.com/babydylan/recipe-roulette"
    },
    {
        "id": "4",
        "title": "Password Generator",
        "image": password,
        "description": "Web app designed to generate a random password based on user input",
        "technology": "HTML, CSS, JavaScript",
        "deployed": "https://smserpa.github.io/password-generator/",
        "repo": "https://github.com/smserpa/password-generator"
    },
    {
        "id": "5",
        "title": "Hedgenight",
        "image": hedgenight,
        "description": "HedgeNight is an application designed to track timed tasks effectively with associated project notes.",
        "technology": "HTML, CSS, Javascript, Bootstrap, React, MongoDB, Mongoose, Express, Game of Thrones API",
        "deployed": "https://github.com/babydylan/recipe-roulette",
        "repo": "https://github.com/git99-src/hedgenight"
    },
    {
        "id": "6",
        "title": "Eat-Da-Burger!",
        "image": burger,
        "description": "Logging application created to gain experience creating a custom ORM. Application follows proper MVC structuring.",
        "technology": "MySQL, Node.js, Express, and Handlebars",
        "deployed": "https://node-exp-burger-app.herokuapp.com/",
        "repo": "https://github.com/smserpa/burger"
    }
];