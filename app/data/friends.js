var friends = [
    {
        name: "Joel A.",
        photo: "https://pbs.twimg.com/profile_images/1002666089640153089/faKAzfEo.jpg",
        scores: [
            5,
            3,
            1,
            4,
            3,
            5,
            2,
            1,
            4,
            5
        ]

    },
    {
        name: "Elizabeth B.",
        photo: "https://dglawpa.com/wp-content/uploads/DSC_8647-684x1024.jpg",
        scores: [
            4,
            2,
            5,
            1,
            3,
            5,
            5,
            3,
            2,
            4
        ]
    },
    {
        name: "Tom C.",
        photo: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/actor-tom-holland-looks-on-during-a-practice-round-ahead-of-news-photo-1079651980-1561474294.jpg?resize=480:*",
        scores: [
            3,
            5,
            1,
            4,
            2,
            4,
            5,
            5,
            1,
            3
        ]
    },
    {
        name: "Susan D.",
        photo: "https://www.sns.ias.edu/~seclark/images/susan.jpg",
        scores: [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        name: "Olivia E.",
        photo: "https://pbs.twimg.com/profile_images/1036393341787811840/e7zwilw5_400x400.jpg",
        scores: [
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5,
            1
        ]
    },
    {
        name: "Ricky F.",
        photo: "https://images.spot.im/v1/production/lcjgvtr3scrrhyjpxdix",
        scores: [
            2,
            2,
            4,
            4,
            1,
            1,
            3,
            3,
            5,
            5
        ]
    },
    {
        name: "Melissa G.",
        photo:"https://cleanmyspace.com/wp-content/uploads/2018/04/about-melissa-maker.jpg",
        scores: [
            5,
            4,
            3,
            2,
            1,
            5,
            4,
            3,
            2,
            1
        ]
    },
    {
        name: "Joe H.",
        photo:"https://pbs.twimg.com/profile_images/1110248536312938496/3a8AhknL.jpg",
        scores: [
            1,
            3,
            5,
            5,
            4,
            2,
            1,
            5,
            4,
            4
        ]
    },
    {
        name: "Layne I.",
        photo: "https://cascadeenergy.com/wp-content/uploads/2018/01/layne-mcwilliams.jpg",
        scores: [
            2,
            5,
            1,
            1,
            3,
            4,
            5,
            4,
            2,
            1
        ]
    },
    {
        name: "Tasha J.",
        photo: "http://oneteammarketing.com/wp-content/uploads/2018/03/Tasha-Peterson-e1522365576559.jpg",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }
]

module.exports = friends
var totalDif = []
var ctr = 0
var req = [5,4,3,2,1,5,4,3,2,1]
           2,5,1,1,3,4,5,4,2,1
           3,1,2,1,2,1,1,1,0,0

for (var i = 0; i<friends.length; i++){
    var dif = friends[i].scores.map(function (num, idx) {
        return Math.abs(num - req[idx]);
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
var match = 0

for (var x = 0; x<totalDif.length; x++){
    if (min > totalDif[x]){
        min = totalDif[x];
        match = x
    }
}

console.log(friends[match].name)
console.log(friends[match].photo)

// // console.log(dif)

// console.log(totalDif)