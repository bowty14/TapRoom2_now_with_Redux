import * as actions from './../../actions';

describe('TapRoom actions', () => {
  it('deleteKombucha should create DELETE_KOMBUCHA action', () => {
    expect(actions.deleteKombucha(1)).toEqual({
      type: 'DELETE_KOMBUCHA',
      id: 1
    });
  });
  
});