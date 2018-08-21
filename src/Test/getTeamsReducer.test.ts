import { getTeams } from '../store/teamsReducer';

describe('teams reducer', () => {
    it('should return the initial state', () => {
      expect(getTeams(undefined, {})).toEqual(
        {
          teams: []
        }
      )
    });

    it('should return GET_TEAMS state', () => {
        const successAction = {
        type: 'GET_TEAMS',
        post: getPostMock.data, // important to pass correct payload, that's what the tests are for ;)
        };
        expect(reducer({}, successAction)).toEqual(getPostMock.data);
    });

})