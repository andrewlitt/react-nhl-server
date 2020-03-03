const fetch = require('node-fetch');
const fs = require('fs');

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
                    abbreviation: team.abbreviation,
                    color1:'',
                    color2:''
                }
            })
            ).then( arr => {
                var data = {
                    teams: arr
                };
                console.log(data);
                var JSON_content = JSON.stringify(data)

                fs.writeFile("output.json", JSON_content, 'utf8', function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                
                    console.log("JSON file has been saved.");
                });

            }).catch( err => console.log(err));

