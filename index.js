let express = require('express'),
    app = express(),
    port = 8000,
    bodyParser = require('body-parser'),
    taskRoutes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using routes 
app.use('/', taskRoutes);

app.listen(port, () => {
    console.log("listening at port ", port);
});