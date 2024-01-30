const itemController = require('../controllers/item.controller');

module.exports = app => {
    const router = require("express").Router();

    // Create a new item
    router.post("/", itemController.create);

    // Retrieve all items
    router.get("/", itemController.findAll);

    // Retrieve a single item with id
    router.get("/:id", itemController.findOne);

    // Update an item with id 
    router.put("/:id", itemController.update);

    // Delete an item with id
    router.delete("/:id", itemController.delete);

    // using a middleware
    app.use('/api/items', router);
};
