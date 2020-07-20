import * as actionTypes from '../actions/actionType';

const initialState = {
  bankSearchResults: [],
  favoriteBanks: []
};

const getSearchResults = (state, action) => {
  return {
    ...state,
    bankSearchResults: action.searchResult
  }
};

const updateFavorites = (state, action) => {
  const updatedListOfFavorites = state.favoriteBanks;
  const existingIndex = updatedListOfFavorites.indexOf(action.bank);
  if(existingIndex >= 0) {
    updatedListOfFavorites.splice(existingIndex, 1);
  } else {
    updatedListOfFavorites.push(action.bank);
  }
  console.log('added', updatedListOfFavorites);
  return {
    ...state,
    favoriteBanks: updatedListOfFavorites
  }
};

const bankSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_RESULTS: return getSearchResults( state, action );
    case actionTypes.UNDATE_FAVORITES: return updateFavorites( state, action );
    default: return state;
  }
};

export default bankSearchReducer;