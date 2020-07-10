import kombuchaListReducer from '../../reducers/kombucha-List-Reducer';

describe('kombuchaListReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1},
    2: {
      name: 'Thunderstorm',
      brand: 'Kombucha market',
      price: 7,
      flavor: 'Blackberry',
      quantity: 124,
      id: 2
    }
  }

    const kombuchaData = {
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    };
  
  test('Should return default state if no action type is recognized', () => {
    expect(kombuchaListReducer({}, { type: null })).toEqual({});
  })
  

})