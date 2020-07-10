import formVisibleReducer from './form-visible-reducer';
import KombuchaListReducer from './Kombucha-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKombuchaList: KombuchaListReducer
});

export default rootReducer;