const express = require('express');
const app = express();
require('dotenv').config();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');
// middlewares
const auth = require('./middlewares/isAuth');
const admin = require('./middlewares/isAdmin');
const axios = require('axios');
app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


let EventData = [
    {
        name : "Build App",
        link :"https://csefest.d3m0n1k.engineer/android-app-development-csv/GROUP"
    },
    {
        name : "Blind Coding",
        link :"https://csefest.d3m0n1k.engineer/blind-coding-csv/SOLO"
    },
    {
        name : "Code Soccer",
        link :"https://csefest.d3m0n1k.engineer/code-soccer-csv/GROUP"
    },
     {
        name : "Code Debugging ",
        link :"https://csefest.d3m0n1k.engineer/code-debugging-csv/SOLO"
    },
     {
        name : "Web Puzzle SOLO ",
        link :"https://csefest.d3m0n1k.engineer/web-puzzle-csv/SOLO"
    },
     {
        name : "Web Puzzle GROUP ",
        link :"https://csefest.d3m0n1k.engineer/web-puzzle-csv/GROUP"
    },
    {
        name : "Poster Making Competition",
        link :"https://csefest.d3m0n1k.engineer/poster-making-competition-csv/SOLO"
    },
      {
        name : "Innovative Idea Poster Presentation",
        link :"https://csefest.d3m0n1k.engineer/innovative-idea-poster-presentation-csv/SOLO"
    },
       {
        name : "Group Discussion",
        link :"https://csefest.d3m0n1k.engineer/group-discussion-csv/SOLO"
    },
     {
        name : "Craft making",
        link :"https://csefest.d3m0n1k.engineer//craft-making-csv/SOLO"
    },
     {
        name : "Treasure Hunt SOLO",
        link :"https://csefest.d3m0n1k.engineer/treasure-hunt-csv/SOLO"
    },
     {
        name : "Treasure Hunt GROUP",
        link :"https://csefest.d3m0n1k.engineer/treasure-hunt-csv/GROUP"
    },
     {
        name : "Rangoli",
        link :"https://csefest.d3m0n1k.engineer/rangoli-csv/SOLO"
    },
      {
        name : "Musical Chair",
        link :"hhttps://csefest.d3m0n1k.engineer/musical-chair-csv/SOLO"
    },
      {
        name : "Rangoli",
        link :"https://csefest.d3m0n1k.engineer/rangoli-csv/SOLO"
    },
      {
        name : "Eureka",
        link :"https://csefest.d3m0n1k.engineer/eureka-csv/SOLO"
    },
      {
        name : "gk-quiz (GK QUIZ || NON TECH QUIZ) SOLO",
        link :"https://csefest.d3m0n1k.engineer/gk-quiz-csv/SOLO"
    },
     {
        name : "gk-quiz (GK QUIZ || NON TECH QUIZ) GROUP",
        link :"https://csefest.d3m0n1k.engineer/gk-quiz-csv/GROUP"
    },
     {
        name : "CSE GOT TALLENT",
        link :"https://csefest.d3m0n1k.engineer/cse-got-tallent-csv/SOLO"
    },
     {
        name : "On the spot painting",
        link :"https://csefest.d3m0n1k.engineer/on-the-spot-painting-csv/SOLO"
    },
     {
        name : "Cartooning",
        link :"https://csefest.d3m0n1k.engineer/cartooning-csv/SOLO"
    },
     {
        name : "SONG SOLO",
        link :"https://csefest.d3m0n1k.engineer/song-csv/SOLO"
    },
     {
        name : "SONG GROUP",
        link :"https://csefest.d3m0n1k.engineer/song-csv/GROUP"
    },
     {
        name : "Cartooning",
        link :"https://csefest.d3m0n1k.engineer/cartooning-csv/SOLO"
    },
     {
        name : "Dance - SOLO",
        link :"https://csefest.d3m0n1k.engineer/dance-csv/SOLO"
    },
     {
        name : "Dance - GROUP",
        link :"https://csefest.d3m0n1k.engineer/dance-csv/GROUP"
    },
     {
        name : "Fashion Show",
        link :"https://csefest.d3m0n1k.engineer/fashion-show-csv/SOLO"
    },
     {
        name : "T-Shirt ",
        link :"https://csefest.d3m0n1k.engineer//tshirts-csv/SOLO"
    }, {
        name : "Mono Acting/Mimicry SOLO",
        link :"https://csefest.d3m0n1k.engineer/mimicry-csv/SOLO"
    }, {
        name : "Mono Acting/Mimicry GROUP",
        link :"https://csefest.d3m0n1k.engineer/mimicry-csv/GROUP"
    }, {
        name : "Food Stall",
        link :"https://csefest.d3m0n1k.engineer/stall-csv/GROUP"
    },
    {
        name : "Guest Talks",
        link :"https://csefest.d3m0n1k.engineer/guest-talks-csv/SOLO"
    },
    {
        name : "Idea representation SOLO",
        link :"https://csefest.d3m0n1k.engineer/idea-representation-csv/SOLO"
    },
    {
        name : "Idea representation GROUP",
        link :"https://csefest.d3m0n1k.engineer/idea-representation-csv/GROUP"
    },
    {
        name : "Workshop",
        link :"https://csefest.d3m0n1k.engineer/workshop-csv/SOLO"
    },
     {
        name : "Drama SOLO",
        link :"https://csefest.d3m0n1k.engineer/drama-csv/SOLO"
    },
    {
        name : "Drama GROUP",
        link :"https://csefest.d3m0n1k.engineer/drama-csv/GROUP"
    },
    {
        name : "Techinal Quiz",
        link :"https://csefest.d3m0n1k.engineer/quiz-csv/SOLO"
    },
    {
        "name":"FIFA SOLO",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/FIFA"
    },
    {
        "name":"NFS SOLO",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/NFS"
    },
    {
        "name":"VALORANT GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/VALORANT"
    },
    {
        "name":"COD MOBILE GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/COD"
    },
    {
        "name":"MODERN WARFARE GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/MODERN_WARFARE"
    },
    {
        "name":"PUBG MOBILE GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/PUBG"
    },
    {
        "name":"TASKMASTER GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/TASKMASTER"
    },
    {
        "name":"AQUAROBO GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/AQUAROBO"
    },
    {
        "name":"LINE_FOLLOWER GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/LINE_FOLLOWER"
    },
    {
        "name":"ROBO SOCCER GROUP",
        "link":"https://csefest.d3m0n1k.engineer/gaming-csv/ROBO_SOCCER"
    }
]

app.get('/',(req,res)=>{
    return res.redirect('/auth');
});

app.get('/auth', (req, res) => {
    return res.render('data', {
        token: "",
        message: 'Please Login First'
    });
});
app.post('/login', async (req, res) => {
    const loginData = {
        email: req.body.email,
        password: req.body.password
    }
    await axios.post('https://csefest.d3m0n1k.engineer/login', loginData).then(data => {
        res.cookie("token", data.data.token);
        return res.render('data', {
            token: data.data.token,
            message: "",
            EventData
        });
    })
        .catch(err => {
            if (err.response.status === 404) {
                return res.render('data', {
                    token: "",
                    message: "Account not Found",
                    EventData: []
                })
            }

            else if (err.response.status === 400) {
                return res.render('data', {
                    token: "",
                    message: "User is not active",
                    EventData: []
                })
            }

            else if (err.response.status === 401) {
                return res.render('data', {
                    token: "",
                    message: "Wrong password"
                })
            }

            else if (err.response.status === 500) {
                return res.render('data', {
                    token: "",
                    message: "Server error",
                    EventData: []
                })
            }
        })
});
app.get('/logout', (req, res) => {
    res.cookie("token", "");
    return res.redirect('/auth');
})
app.get('/FetchData', auth.isAuth, admin.isAdmin, (req, res) => {
    return res.render('data', {
        token: req.headers.cookie.split("token=")[1],
        message: "",
        EventData
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Finally the Admin app is live ${process.env.PORT}`);
})