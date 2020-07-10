export default (state = {}, action) => {
  const { name, brand, price, flavor, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KOMBUCHA':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_KOMBUCHA':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};