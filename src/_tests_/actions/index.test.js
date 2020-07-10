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
  it('addKombucha should create a ADD_KOMBUCHA action', () => {
    expect(actions.addKombucha({name: 'Tropic Thunder',brand: 'Kombucha market', price: 6, flavor:'Pineapple', quantity: 124, id: 1})).toEqual({
      type: 'ADD_KOMBUCHA',
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    });
  });

  it('pourPint should create a POUR_PINT action', () => {
    expect(actions.pourPint({ name: 'Tropic Thunder', brand: 'Kombucha market', price: 6, flavor: 'Pineapple', quantity: 124, id: 1 })).toEqual({
      type: "POUR_PINT",
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 123,
      id: 1
    })
  })
  it('tapKeg should create a TAP_KEG action', () => {
    expect(actions.tapKeg({ name: 'Tropic Thunder', brand: 'Kombucha market', price: 6, flavor: 'Pineapple', quantity: 0, id: 1 })).toEqual({
      type: "TAP_KEG",
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    })
  })

});