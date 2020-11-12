// Create the front-end (visuals) for home page, reservation form, and reservation views.
const express = require("express")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        name: "name",
        phoneNumber: "phone number",
        email: "email",
        id: "id"
    }
];

const waitlist = [
    {
        name: "name",
        phoneNumber: "phone number",
        email: "email",
        id: "id"
    }
];


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });



// * Create a basic server using Express.JS

// * Create a few array variables that will hold the data

// * Create a set of routes for getting and posting table data

// * Create a set of routes for displaying the HTML pages

// Setup
// Create a server.js
// npm init -y to generate a package.json
// npm install express

// View Routes (will return html files, we need to build HTML files. HTML will have a CSS library, jquery (CDN), start with boilerplate).
// home (You can do placeholders to test it)
// reservations form
// reservations views

// API (build for any routes an express server with 5 basic steps.)
// View Table
// View Waitlist
// Create Reservations 