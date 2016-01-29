var express = require('express');
var bodyParser = require('body-parser');
var SkyRemote = require('sky-remote');

//

var app = express();
app.use(express.static('webroot'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/control', function(req, res) {
	var remoteControl = new SkyRemote(req.body.ip);
	remoteControl.press(req.body.command,function() {
		res.end('OK');
	});
});

app.listen(27592, function() {
	console.log("http://127.0.0.1:27592");
});