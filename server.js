var express = require('express');

var app = express();

app.get('/notes', function(req, res) {
    res.send([
        { title:'Title 1' },
        { title:'Title 2' }
    ]);
});
app.get('/note/:id', function(req, res) {
    res.send({
        id:req.params.id,
        name: "The Name",
        description: "description"
    });
});

app.listen(3000);
console.log('Listening on port 3000...');
