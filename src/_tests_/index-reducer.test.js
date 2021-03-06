import rootReducer from '../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../reducers/form-visible-reducer';
import kombuchaListReducer from '../reducers/kombucha-List-Reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKombuchaList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of kombuchListReducer matches root reducer', () => {
    expect(store.getState().masterKombuchaList).toEqual(kombuchaListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of kombuchaListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KOMBUCHA',
      name: 'Tropic Thunder',
      brand: 'Kombucha market',
      price: 6,
      flavor: 'Pineapple',
      quantity: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKombuchaList).toEqual(kombuchaListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});