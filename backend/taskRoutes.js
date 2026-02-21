const express = require("express");
const router = express.Router();
const {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
} = require("./controller/controller");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
