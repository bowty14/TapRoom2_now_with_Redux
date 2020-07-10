import formVisibleReducer from './form-visible-reducer';
import kombuchaListReducer from './kombucha-List-Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKombuchaList: kombuchaListReducer
});

export default rootReducer;