import * as actions from './../../actions';

describe('TapRoom actions', () => {
  it('deleteKombucha should create DELETE_KOMBUCHA action', () => {
    expect(actions.deleteKombucha(1)).toEqual({
      type: 'DELETE_KOMBUCHA',
      id: 1
    });
  });
  it('toggleForm should create a TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKombucha should create a ADDKOMBUCHA action', () => {
    expect(actions.addKombucha()).toEqual({
      type: 'ADD_KOMBUCHA',
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    });
  });
  
});