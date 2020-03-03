const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const Constants = require('./constants');
//const bcrypt = require('bcrypt-nodejs');
//const knex = require('knex')
/*
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'aneagoie',
      password : '',
      database : 'smart-brain'
    }
  });
*/
  
const app = express();

function getColors(id){
  let data = Constants.TEAM_INFO.find( team => team.id == id);
  return {
    color1: data.color1,
    color2: data.color2
  }
}

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req,res) => {
    fetch('https://statsapi.web.nhl.com/api/v1/schedule')
      .then(r => r.json())
      .then(result => result.dates[0].games)
      .then(games => games.map(game =>
        {
            console.log(game);
            const info = {
              gamePk: game.gamePk,
              status: game.status,
              home: game.teams.home,
              away: game.teams.away,
            };
            return info;
        })
      )
      .then(data => res.json(data));
})

app.get('/game/:id', (req,res) => {
    
    const id = req.params.id;
    console.log(`https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`)
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`)
      .then(r => r.json())
      .then(game => {
        console.log(game)

        const awayStyle = getColors(game.gameData.teams.away.id)
        const homeStyle = getColors(game.gameData.teams.home.id)

        const awayPlayers = { players: Object.values(game.liveData.boxscore.teams.away.players)};
        const homePlayers = { players: Object.values(game.liveData.boxscore.teams.home.players)};

        const info = {
          id: game.gamePk,
          home: {
            ...game.gameData.teams.home,
            ...homeStyle,
            ...game.liveData.boxscore.teams.home.teamStats,
            ...homePlayers
          },
          away:{
            ...game.gameData.teams.away,
            ...awayStyle,
            ...game.liveData.boxscore.teams.away.teamStats,
            ...awayPlayers
          },
          linescore: game.liveData.linescore,
          players: Object.values(game.gameData.players),
          plays: game.liveData.plays, 
        };
        return info;
      })
      .then(data => res.json(data))
      .catch(console.log('Shit'));
})


app.listen(8000, () => {
    console.log('Server Started');
})