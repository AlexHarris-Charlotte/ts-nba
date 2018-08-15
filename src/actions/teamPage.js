
const nba = require('nba');

module.exports = {
    getTeamData
}

function teamPromise(team, currentYear) {
    const TeamID = nba.teamIdFromName(team);

    const stats = nba.stats.teamInfoCommon({
        LeagueID: '00',
        Season: currentYear,
        SeasonType: 'Regular Season',
        TeamID,
    });
    return stats;
}

function getTeamData(team, currentYear) {
    return function (dispatch, getState) {
        return teamPromise(team, currentYear).then(data => {
            dispatch({type: 'GET_TEAM', payload: data})
        });
    }
}

