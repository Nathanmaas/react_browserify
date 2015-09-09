var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/something', function(req, ress){
  res.send({data:[2,3,4,5,5,6,]});
});

app.listen(3000, function(){
  console.log('listening.......')
});