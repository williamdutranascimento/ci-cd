var app = require("express")();

app.get('/', function(req, resp){
	resp.send("Olá Mundo!");
});


app.listen(process.env.PORT, function(){
	console.log("Funcionado!!!");
})