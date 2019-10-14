var friends = require("../data/friends.js")
var match = ["filler1", "filler2"]

module.exports = function(app){
app.get("/api/friends", function(req,res){
    res.json(friends)
})

app.post("/api/friends", function(req, res){
    var newFriend = req.body
    var newScores = req.body.scores
    var totalDif = []

    for (var i = 0; i<friends.length; i++){
        var dif = friends[i].scores.map(function (num, idx) {
            return Math.abs(num - newScores[idx]);
          });
          console.log(dif)
          var totalDifference = 0
          for (var j = 0; j<dif.length; j++){
            totalDifference += dif[j]
          }
            totalDif.push(totalDifference)
          console.log(totalDifference)
          console.log(totalDif)     
    }

    var min = totalDif[0]
    var matchInd = 0
    
    for (var x = 0; x<totalDif.length; x++){
        if (min > totalDif[x]){
            min = totalDif[x];
            matchInd = x
        }
    }
    
    friends.push(newFriend)
    res.json(newFriend)


    console.log(friends[matchInd].name)
    console.log(friends[matchInd].photo)
    match.splice(0, 2, friends[matchInd].name, friends[matchInd].photo);
    console.log(match)

    // return friends[match]
})

app.get("/api/match", function(req,res){
    res.send(match)
    console.log(match)
})
};