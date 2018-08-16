
const nba = require('nba');

module.exports = {
    getTeamData
}

// function teamPromise(team, currentYear) {
//     const TeamID = nba.teamIdFromName(team);
//     console.log('heeelloo');
//     console.log(team + ' ' + currentYear);
//     const stats = nba.stats.teamInfoCommon({
//         LeagueID: '00',
//         Season: currentYear,
//         SeasonType: 'Regular Season',
//         TeamID,
//     });
//     return stats;
// }


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


function doSomethingElse() {
    return dispatch => 
      fetch(
        '/api/something'
      ).then(
        response => response.json()
      ).then(
        json => dispatch({ type: DO_SOMETHING_ELSE, json }),
        err => dispatch({ type: SOMETHING_ELSE_FAILED, err })
      );
  }



function getTeamData(team, currentYear) {
    return function (dispatch, getState) {
        return teamPromise(team, currentYear).then(data => {
            dispatch({type: 'GET_TEAM', payload: data})
        });
    }
}

