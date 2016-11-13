const express = require('express')
var bodyParser = require("body-parser");
var path = require('path');
const app = express(),
  router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 
 
app.use((request, response, next) => {  
  //console.log(request.headers)
  console.log(__dirname);
  request.hdr = request.headers
  next()
})
app.get('/', function (req, res) {
  res.send('Hello World')
});
console.log(path.join(__dirname + '/public/js'));
var greet = require(path.join(__dirname + '/public/js'));
console.log(greet);
router.use('/greet', greet.getGreeting());

// Error handler is always the last route
app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(3000)  