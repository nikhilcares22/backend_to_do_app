let express = require('express'),
    router = express.Router(),
    TaskController = require('../controllers/controller'),
    taskController = new TaskController();

//used controller to clean up the code

//shows all the tasks
//First uncompleted Tasks then completed tasks
router.get('/', (req, res) => {
    taskController.getAllTasks(req, res);
});

//show a specifc item using its id
router.get('/:id', (req, res) => {
    taskController.getOneTask(req, res);
});

//adding new Task ==> enter /name/(string) & /completed/(boolean) and name is a required variable
router.post('/', (req, res) => {
    taskController.addTask(req, res);
});

//update logic ==> update the object using its id and then passing name(String) or completed(Boolean) variables
router.put('/:id', (req, res) => {
    taskController.updateTask(req, res);
});

//delete logic ==> takes the id of the object we want to delete
router.delete('/:id', (req, res) => {
    taskController.deleteTask(req, res);
});
module.exports = router;