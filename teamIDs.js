const fetch = require('node-fetch');

var data = fetch('https://statsapi.web.nhl.com/api/v1/teams')
            .then(r => r.json())
            .then(result => result.teams)
            .then(teams => teams.map(team =>
            {
                return {
                    id: team.id, 
                    name: team.name,
                    location: team.locationName,
                    teamName: team.franchise.teamName,
                    abbreviation: team.abbreviation
                }
            })
            ).then( arr => console.log(arr))

