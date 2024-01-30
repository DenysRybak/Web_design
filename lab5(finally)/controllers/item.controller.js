const Item = require('../models/item.model.js');

// маршути взаємодії обєктів в Item бази даних

// Create & Save a new item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({  // чи пусте поле?
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an item
    const item = {
        name: req.body.name, // приймаємо значення
    };

    // Create and Save a new Item
    Item.create(item)
        .then(data => {
            res.send(data); // записуємо
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Item."
            });
        });
};

// Retrieve all items from the database
exports.findAll = (req, res) => { // відповідь на обробку запиту на дані
    Item.findAll()   // виклик операції findAll
        .then(data => {
            res.send(data); // відправка до сторніки клієнта
        })
        .catch(err => {  //
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving items."
            });
        });
};

// Find a single item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;  // обробка запиут на ід та отрмання самого ід 

    Item.findByPk(id) 
        .then(data => { // умова виконання якщо є такий ід
            if (data) {
                res.send(data);
            } else { // якщо не знайдено ід
                res.status(404).send({ 
                    message: `Cannot find Item with id=${id}.`
                });
            }
        }) 
        .catch(err => { // якщо виникли помилки під час операції
            res.status(500).send({
                message: `Error retrieving Item with id=${id}.`
            });
        });
};

// Update an item identified by the id in the request
exports.update = (req, res) => { // оновлення даних в базі
    const id = req.params.id; // отримуємо id

    Item.update(req.body, { // виконує оновлення даних по певному ід
            where: {
                id: id
            }
        })
        .then(num => {  //  якщо операція успіщно то віправляє звіт про успіх
            if (num == 1) {
                res.send({
                    message: "Item was updated successfully."
                }); 
            } else { // якщо неможлиов оновити дані (дані порожні)
                res.send({
                    message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => { //
            res.status(500).send({
                message: `Error updating Item with id=${id}.`
            });
        });
};

// Delete an item with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Item with id=${id}. Maybe Item was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Item with id=${id}.`
            });
        });
};
