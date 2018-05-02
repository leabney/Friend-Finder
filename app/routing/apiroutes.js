//requirements//
var path = require('path');
var friends = require('./../data/friends')


module.exports = function (app) {
    //route to get friends
    app.get('/api/friends', function (req, res) {
        res.json(friends);
        console.log(res.json(friends));
    });

    //route to post friends
    app.post('/api/friends', function (req, res) {
        //push responses to friends array
        friends.push(req.body);

        //set variables
        var totalDifference = 100;
        var bestFriendName;
        var bestFriendPhoto;
        var thisFriend = friends.length - 1

        //loop through all friends to find "best" friend
        for (var i = 0; i < friends.length - 1; i++) {

            var runningDiff = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                //find absolute diff between each answer and add to running diff
                runningDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(friends[thisFriend].scores[j]));
            }

            //if running diff for this friend is less than the total diff, make this friend the "best friend"
            if (runningDiff < totalDifference) {
                totalDifference = runningDiff;
                bestFriendName = friends[i].name;
                bestFriendPhoto = friends[i].image;
            };
        }

        //send back "best" friend info
      
        res.json({bestFriendName: bestFriendName, bestFriendPhoto: bestFriendPhoto});
    })


}


