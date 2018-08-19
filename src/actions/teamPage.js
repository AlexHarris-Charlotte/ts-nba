
const nba = require('nba');

module.exports = {
    getTeamData
}


function teamPromise(team, currentYear, seasonType = 'Regular Season') {
    const TeamID = nba.teamIdFromName(team);
    const stats = nba.stats.teamInfoCommon({
        LeagueID: '00',
        Season: currentYear,
        SeasonType: 'Regular Season',
        TeamID
    });
    return stats.then( teamData => {
        const players = nba.stats.teamPlayerDashboard({
            Season     : currentYear,
            SeasonType : seasonType,
            TeamID
        })
        return players.then( playerData => {
            console.log('player Data: ', playerData)
            return {teamData, playerData};
        })
    });
}

function getTeamData(team, currentYear) {
    return function (dispatch, getState) {
        return teamPromise(team, currentYear).then(data => {
            dispatch({type: 'GET_TEAM', payload: data})
        });
    }
}


// function playerPromise(teamId, season) {
//     const players = nba.stats.teamPlayerDashboard({
//         Season: season,
//         TeamID: teamid
//     });
//     return players
// }


// router.post('/teamPlayerStats', (req, res) => {
//     const { teamId } = req.body.team 
//     const test = nba.stats.teamPlayerDashboard({
//         Season      : "2015-16",
//         TeamID      : teamId,
//         SeasonType  : "Regular Season"
//     });
//     test.then(data => {
//         res.json(data)
//     });
// })





