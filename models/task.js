let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task2', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);