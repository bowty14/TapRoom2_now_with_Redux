import kombuchaListReducer from '../reducers/kombucha-List-Reducer';

describe('kombuchaListReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    },
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
  });

  test('Should successfully add a new kombucha to masterKombuchaList', () => {
    const { name, brand, price, flavor, quantity, id } = kombuchaData;
    action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    expect(kombuchaListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a kombucha', () => {
    action = {
      type: 'DELETE_KOMBUCHA',
      id: 1
    };
    expect(kombuchaListReducer(currentState, action)).toEqual({
      2: {
        name: 'Thunderstorm',
        brand: 'Kombucha market',
        price: 7,
        flavor: 'Blackberry',
        quantity: 124,
        id: 2
      }
    });
  });
  

});