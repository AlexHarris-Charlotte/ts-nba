
const nba = require('nba');

module.exports = {
  getTeamData
}

function getTeamData(team, currentYear) {

    console.log(nba);
    console.log(team, currentYear);
    const TeamID = nba.teamIdFromName(team);

    const stats = nba.stats.teamInfoCommon({
        LeagueID: '00',
        Season: currentYear,
        SeasonType: 'Regular Season',
        TeamID,
    });
    return stats.then(data => {
        type: 'GET_TEAM',
        payload: data
    });
}
