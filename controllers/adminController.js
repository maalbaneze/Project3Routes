const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        //db.User.find(req.query)
        db.User.find({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbMeal => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findByIdAndDelete(req.params.id)
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Restaurant.find({})
            .then(dbRestaurant => res.json(dbRestaurant))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Restaurant.findById(req.params.id)
            .then(dbRestaurant => res.json(dbRestaurant))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Restaurant.create(req.body)
            .then(dbRestaurant => res.json(dbRestaurant))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Restaurant.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbRestaurant => res.json(dbRestaurant))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Restaurant.findByIdAndDelete(req.params.id)
            .then(dbRestaurant => dbRestaurant.remove())
            .then(dbRestaurant => res.json(dbRestaurant))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Meal.find({})
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
        db.Meal.findByIdAndDelete(req.params.id)
            .then(dbMeal => dbMeal.remove())
            .then(dbMeal => res.json(dbMeal))
            .catch(err => res.status(422).json(err));
    }
};
