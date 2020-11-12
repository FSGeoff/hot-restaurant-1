// Create the front-end (visuals) for home page, reservation form, and reservation views.
const express = require("express")
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEW ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/reserve.html"));
  });

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/table.html"));
  });


 
  app.get("/.res", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
  });


  
  // API ROUTES

  app.get("/api/table", (req, res) =>{
    res.json({
      reservations: reservations,
      waitlist: waitlist
    })
  })
  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

const reservations = [
    {
        name: "Sally",
        phoneNumber: "4444444444",
        email: "sally@gmail.com",
        id: "Sal"
    }
];

const waitlist = [
    {
        name: "Sally",
        phoneNumber: "4444444444",
        email: "email",
        id: "id"
    }
];

app.get("/api/reservations", (req, res) => {
    res.json(reservations);
  });

  app.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
  });

  app.get("/api/reservations/:name", (req, res) => {
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].name === req.params.name) {
        return res.json(reservations[i]);
      }
    }
  });

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