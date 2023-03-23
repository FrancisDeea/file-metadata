var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
require('dotenv').config()

var app = express();


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// My code starts here...

app.post('/api/fileanalyse', (req, res) => {
  console.log(req.body);
  if (!file) {res.json({error: "You have not sent any file."})}
})

// My code finishes here.

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
