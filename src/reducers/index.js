import { combineReducers } from 'redux';
import keyReducer from './keys';
// import loaderReducer from './loader';
// import categoriesReducer from '../features/categories/categoriesSlice';

const allReducers = combineReducers({
  types: keyReducer,
  //   itemtype: itemTypesReducer,
  //   collectiontype: collectionTypes,
  //   loader: loaderReducer,
  // categories: categoriesReducer,
});

export default allReducers;
