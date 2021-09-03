const Movie = require("../models/movie");

const movieController = {};

movieController.findAll = (req, res) => {
  // could be ORDER BY or some SQL..
  Movie.findAll({ params: [] }).then((rows) => {
    res.json(rows);
  });
};
// for each Model Function, controller handles the request, and the response

module.exports = movieController;
