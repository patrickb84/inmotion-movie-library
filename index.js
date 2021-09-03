const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // what does this do

app.get("/api/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Movie A" },
    { id: 2, title: "Movie B" },
  ];
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  res.send("movie with id");
});

app.post("/api/movies", (req, res) => {
  const { movie } = req.body;
  // insert movie
});

app.put("/api/movies", (req, res) => {
  const { movie } = req.body;
  // update
});

app.delete("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  // delete
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "server/client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "server/client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

// TODO:
// use cors
// sequelize
// router, env, db
