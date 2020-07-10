export const deleteKombucha = id => ({
  type: 'DELETE_KOMBUCHA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKombucha = (kombucha) => {
  const { name, brand, price, flavor, quantity, id } = kombucha;
  return {
    type: 'ADD_KOMBUCHA',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quantity: quantity,
    id: id
  }
}

export const pourPint = (kombucha) => {
  const { name, brand, price, flavor, quantity, id } = kombucha;
  return {
    type: 'POUR_PINT',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quantity: quantity,
    id: id
  }
}