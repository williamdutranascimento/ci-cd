var app = require("express")();

app.get('/', function(req, resp){
	resp.send("Ol� Mundo!");
});


app.listen(process.env.PORT, function(){
	console.log("Funcionado!!!");
})