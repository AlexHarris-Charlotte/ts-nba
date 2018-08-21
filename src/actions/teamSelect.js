// nba package does not have an @types file so using standard JS for this file

const nba = require('nba');

module.exports = {
  getTeams
}

function getTeams() {
    const teams = nba.teams;
    return {type: 'GET_TEAMS', payload: teams};
}
