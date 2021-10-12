var express = require('express');
var morgan = require('morgan')

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var routes = require("./routes/index")
app.use(routes)

app.listen(3000, () => {
  console.log("Servidor activo en el puerto 3000")
});

module.exports = app;