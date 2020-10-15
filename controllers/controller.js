let Task = require('../models/task');

class Taskcontrollers {

    getAllTasks(req, res) {
        Task.find({}, (err, tasks) => {
            //filter the completed tasks
            let completedTasks = tasks.filter(task => task.completed == true);
            //filter the incompleted tasks
            let incompletedTasks = tasks.filter(task => task.completed == false);
            res.json({
                'message': 'done',
                'incompletedTasks': incompletedTasks,
                'completedTasks': completedTasks
            });
        });
    }

    getOneTask(req, res) {
        Task.findById(req.params.id)
            .then(data => {
                if (data) {
                    //success
                    res.status(200).json({
                        "message": "done",
                        "result": data,
                        "success": true
                    });
                } else {
                    //No data found
                    res.status(404).json({
                        "message": "No data found",
                        "success": false
                    });
                }
            })
            .catch(err => {
                //error
                res.status(500).json({
                    "message": "Error Occured",
                    "error": err,
                    "success": false
                });
            });
    }

    addTask(req, res) {
        new Task({
                name: req.body.name,
                completed: req.body.completed
            })
            .save()
            .then(data => {
                //success
                res.status(200).json({
                    "message": "done",
                    "result": data,
                    "success": true
                });
            })
            .catch(err => {
                //failure
                res.status(500).json({
                    "message": "Error Occured",
                    "error": err,
                    "success": false
                });
            });
    }

    updateTask(req, res) {
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => {
                if (data) {
                    res.status(200).json({
                        "message": "done",
                        "result": data,
                        "success": true
                    });
                } else {
                    res.status(404).json({
                        "message": "No data found",
                        "success": false
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    "message": "Error occurred",
                    "error": err,
                    "success": false
                });
            });
    }

    deleteTask(req, res) {
        Task.findByIdAndDelete(req.params.id)
            .then(data => {
                if (data) {
                    //found the data and deleted it 
                    res.status(200).json({
                        "message": 'deleted',
                        "result": data,
                        "success": true
                    })
                } else {
                    //if we send right _id but there is no data in it 
                    res.status(404).json({
                        "message": 'No data found',
                        "success": false
                    })
                }
            })
            .catch(err => {
                //server error or wrong id etc
                res.status(500).json({
                    "message": "Error occurred",
                    "error": err,
                    "success": false
                });
            })
    }

}

module.exports = Taskcontrollers;