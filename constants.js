
const TEAM_INFO = [
    {
        "id": 1,
        "name": "New Jersey Devils",
        "location": "New Jersey",
        "teamName": "Devils",
        "abbreviation": "NJD",
        "color1": "#CE1126",
        "color2": "#000000"
    },
    {
        "id": 2,
        "name": "New York Islanders",
        "location": "New York",
        "teamName": "Islanders",
        "abbreviation": "NYI",
        "color1": "#00539B",
        "color2": "#F47D30"
    },
    {
        "id": 3,
        "name": "New York Rangers",
        "location": "New York",
        "teamName": "Rangers",
        "abbreviation": "NYR",
        "color1": "#0038A8",
        "color2": "#CE1126"
    },
    {
        "id": 4,
        "name": "Philadelphia Flyers",
        "location": "Philadelphia",
        "teamName": "Flyers",
        "abbreviation": "PHI",
        "color1": "#F74902",
        "color2": "#000000"
    },
    {
        "id": 5,
        "name": "Pittsburgh Penguins",
        "location": "Pittsburgh",
        "teamName": "Penguins",
        "abbreviation": "PIT",
        "color1": "#000000",
        "color2": "#CFC493"
    },
    {
        "id": 6,
        "name": "Boston Bruins",
        "location": "Boston",
        "teamName": "Bruins",
        "abbreviation": "BOS",
        "color1": "#FFB81C",
        "color2": "#000000"
    },
    {
        "id": 7,
        "name": "Buffalo Sabres",
        "location": "Buffalo",
        "teamName": "Sabres",
        "abbreviation": "BUF",
        "color1": "#002654",
        "color2": "#FCB514"
    },
    {
        "id": 8,
        "name": "Montréal Canadiens",
        "location": "Montréal",
        "teamName": "Canadiens",
        "abbreviation": "MTL",
        "color1": "#AF1E2D",
        "color2": "#192168"
    },
    {
        "id": 9,
        "name": "Ottawa Senators",
        "location": "Ottawa",
        "teamName": "Senators",
        "abbreviation": "OTT",
        "color1": "#C52032",
        "color2": "#C2912C"
    },
    {
        "id": 10,
        "name": "Toronto Maple Leafs",
        "location": "Toronto",
        "teamName": "Maple Leafs",
        "abbreviation": "TOR",
        "color1": "#00205B",
        "color2": "#FFFFFF"
    },
    {
        "id": 12,
        "name": "Carolina Hurricanes",
        "location": "Carolina",
        "teamName": "Hurricanes",
        "abbreviation": "CAR",
        "color1": "#CC0000",
        "color2": "#000000"
    },
    {
        "id": 13,
        "name": "Florida Panthers",
        "location": "Florida",
        "teamName": "Panthers",
        "abbreviation": "FLA",
        "color1": "#041E42",
        "color2": "#C8102E"
    },
    {
        "id": 14,
        "name": "Tampa Bay Lightning",
        "location": "Tampa Bay",
        "teamName": "Lightning",
        "abbreviation": "TBL",
        "color1": "#002868",
        "color2": "#FFFFFF"
    },
    {
        "id": 15,
        "name": "Washington Capitals",
        "location": "Washington",
        "teamName": "Capitals",
        "abbreviation": "WSH",
        "color1": "#041E42",
        "color2": "#C8102E"
    },
    {
        "id": 16,
        "name": "Chicago Blackhawks",
        "location": "Chicago",
        "teamName": "Blackhawks",
        "abbreviation": "CHI",
        "color1": "#CF0A2C",
        "color2": "#FF671B"
    },
    {
        "id": 17,
        "name": "Detroit Red Wings",
        "location": "Detroit",
        "teamName": "Red Wings",
        "abbreviation": "DET",
        "color1": "#CE1126",
        "color2": "#FFFFFF"
    },
    {
        "id": 18,
        "name": "Nashville Predators",
        "location": "Nashville",
        "teamName": "Predators",
        "abbreviation": "NSH",
        "color1": "#FFB81C",
        "color2": "#041E42"
    },
    {
        "id": 19,
        "name": "St. Louis Blues",
        "location": "St. Louis",
        "teamName": "Blues",
        "abbreviation": "STL",
        "color1": "#002F87",
        "color2": "#FCB514"
    },
    {
        "id": 20,
        "name": "Calgary Flames",
        "location": "Calgary",
        "teamName": "Flames",
        "abbreviation": "CGY",
        "color1": "#C8102E",
        "color2": "#F1BE48"
    },
    {
        "id": 21,
        "name": "Colorado Avalanche",
        "location": "Colorado",
        "teamName": "Avalanche",
        "abbreviation": "COL",
        "color1": "#6F263D",
        "color2": "#236192"
    },
    {
        "id": 22,
        "name": "Edmonton Oilers",
        "location": "Edmonton",
        "teamName": "Oilers",
        "abbreviation": "EDM",
        "color1": "#041E42",
        "color2": "#FF4C00"
    },
    {
        "id": 23,
        "name": "Vancouver Canucks",
        "location": "Vancouver",
        "teamName": "Canucks",
        "abbreviation": "VAN",
        "color1": "#00205B",
        "color2": "#00843D"
    },
    {
        "id": 24,
        "name": "Anaheim Ducks",
        "location": "Anaheim",
        "teamName": "Ducks",
        "abbreviation": "ANA",
        "color1": "#F47A38",
        "color2": "#B9975B"
    },
    {
        "id": 25,
        "name": "Dallas Stars",
        "location": "Dallas",
        "teamName": "Stars",
        "abbreviation": "DAL",
        "color1": "#006847",
        "color2": "#8F8F8C"
    },
    {
        "id": 26,
        "name": "Los Angeles Kings",
        "location": "Los Angeles",
        "teamName": "Kings",
        "abbreviation": "LAK",
        "color1": "#111111",
        "color2": "#A2AAAD"
    },
    {
        "id": 28,
        "name": "San Jose Sharks",
        "location": "San Jose",
        "teamName": "Sharks",
        "abbreviation": "SJS",
        "color1": "#006D75",
        "color2": "#EA7200"
    },
    {
        "id": 29,
        "name": "Columbus Blue Jackets",
        "location": "Columbus",
        "teamName": "Blue Jackets",
        "abbreviation": "CBJ",
        "color1": "#002654",
        "color2": "#CE1126"
    },
    {
        "id": 30,
        "name": "Minnesota Wild",
        "location": "Minnesota",
        "teamName": "Wild",
        "abbreviation": "MIN",
        "color1": "#154734",
        "color2": "#A6192E"
    },
    {
        "id": 52,
        "name": "Winnipeg Jets",
        "location": "Winnipeg",
        "teamName": "Jets",
        "abbreviation": "WPG",
        "color1": "#041E42",
        "color2": "#004C97"
    },
    {
        "id": 53,
        "name": "Arizona Coyotes",
        "location": "Arizona",
        "teamName": "Coyotes",
        "abbreviation": "ARI",
        "color1": "#8C2633",
        "color2": "#E2D6B5"
    },
    {
        "id": 54,
        "name": "Vegas Golden Knights",
        "location": "Vegas",
        "teamName": "Golden Knights",
        "abbreviation": "VGK",
        "color1": "#B4975A",
        "color2": "#333F42"
    }
];

module.exports = {
    TEAM_INFO : TEAM_INFO 
};