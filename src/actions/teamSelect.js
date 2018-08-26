// nba package does not have an @types file so using standard JS for this file

const nba = require('nba');
console.log(nba);
module.exports = {
  getTeams,
  getDivisions
}

function getTeams() {
  const teams = nba.teams;
  return {type: 'GET_TEAMS', payload: teams};
}


// Hard coded the divisions because the way the API is set up I would need to make over
// 30 requests and this will slow UI.
function getDivisions() {
  console.log('called');
  const teamDivisions = {
      Atlantic: [
        'Boston Celtics', 
        'New Jersey Nets',
        'New York Knicks', 
        'Philadelphia 76ers',  
        'Toronto Raptors'
      ],
      Central: [
        'Chicago Bulls', 
        'Cleveland Cavaliers',
        'Detroit Pistons', 
        'Indiana Pacers',
        'Milwaukee Bucks'
      ],
      Southeast: [
        'Atlanta Hawks', 
        'Charlotte Hornets', 
        'Miami Heat', 
        'Orlando Magic', 
        'Washington Wizards'
      ],
      Northweat: [
        'Denver Nuggets', 
        'Minnesota Timberwolves', 
        'Oklahoma City Thunder', 
        'Porland Trail Blazers',
        'Utah Jazz'
      ],
      Pacific: [
        'Golden State Warriors', 
        'Los Angeles Clippers', 
        'Los Angeles Lakers', 
        'Phoenix Suns',
        'Sacramento Kings'],
      Southwest: [
        'Dallas Mavericks', 
        'Houston Rockets', 
        'Memphis Grizzlies', 
        'New Orleans Pelicans', 
        'San Antonio Spurs'
      ]                 
    }
  return {type: 'GET_DIVISIONS', payload: teamDivisions};
}
