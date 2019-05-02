const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Meal.find(req.query)
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Meal.findById(req.params.id)
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Meal.create(req.body)
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Meal.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Meal.findById(req.params.id)
            .then(dbMeal => dbMeal.remove())
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    }
};
