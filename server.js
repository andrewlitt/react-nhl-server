const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const Constants = require('./constants');

function getColors(id){
  let data = Constants.TEAM_INFO.find( team => team.id == id);
  return {
    color1: data.color1,
    color2: data.color2
  }
}

function filterPlayers(arr){
  const data = Object.values(arr);
  const Players = { players: data.filter(player => player.stats.skaterStats).map(player => {
        const info = {
            jerseyNumber: player.jerseyNumber,
            fullName: player.person.fullName,
            goals: player.stats.skaterStats.goals,
            shots: player.stats.skaterStats.shots,
            hits: player.stats.skaterStats.hits,
            timeOnIce: player.stats.skaterStats.timeOnIce
        };
        return info;
    }) 
  };
  return Players;
}

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req,res) => {
    fetch('https://statsapi.web.nhl.com/api/v1/schedule')
      .then(r => r.json())
      .then(result => result.dates[0])
      .then(data => {
        const games = data.games.map(game => {
              const info = {
                gamePk: game.gamePk,
                status: game.status,
                home: game.teams.home,
                away: game.teams.away,
              };
              return info;
        })
        return {
          date: data.date,
          games: games
        };
      })
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

        const awayPlayers = filterPlayers(game.liveData.boxscore.teams.away.players);
        const homePlayers = filterPlayers(game.liveData.boxscore.teams.home.players);
        
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