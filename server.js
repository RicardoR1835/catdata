var express = require("express");

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>")
})
app.get('/molly', function(request, response){
    var link = "cat-1285634_640.png";
    var name = "Molly";
    var favfood = "Reese's";
    var age = "3"
    var spots = [
        {location: "Bed"},
        {location: "Under the bed"},
        {location: "Laps"},
        {location: "Attic"}
    ];
    response.render('details', {link: link, name: name, age: age, spots: spots, food: favfood})


})

app.get('/ricardo', function(request, response){
    var link = "tiger-3264048_640.jpg";
    var name = "Ricardo";
    var favfood = "Sharks";
    var age = "Infinite"
    var spots = [
        {location: "Clouds"},
        {location: "The tigers den"},
        {location: "Jungle"},
        {location: "With baes"}
    ];
    response.render('details', {link: link, name: name, age: age, spots: spots, food: favfood})


})
app.get('/thaddeus', function(request, response){
    var link = "cat-2143332_640.jpg";
    var name = "Thaddeus";
    var favfood = "Mice";
    var age = "10"
    var spots = [
        {location: "Dave's house"},
        {location: "TThe Dojo"},
        {location: "Bean bags"},
        {location: "Wherever I want"}
    ];
    response.render('details', {link: link, name: name, age: age, spots: spots, food: favfood})


})

app.listen(8000, function() {
    console.log("listening to port 8000");
})

