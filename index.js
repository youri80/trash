var server = require('restify');

var alexa = server.createServer();

alexa.listen();

alexa.get('/',function(req,res){
    res.send({hello: 'world'});
    res.end();
    
})