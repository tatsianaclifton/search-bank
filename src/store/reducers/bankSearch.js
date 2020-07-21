import * as actionTypes from '../actions/actionType';

const initialState = {
  bankSearchResults: [],
  favoriteBanks: []
};

const setSearchResults = (state, action) => {
  return {
    ...state,
    bankSearchResults: action.searchResult
  }
};

const updateFavorites = (state, action) => {
  const updatedListOfFavorites = state.favoriteBanks;
  const existingIndex = updatedListOfFavorites.map(f => f.data.ID).indexOf(action.bank.data.ID);
  if(existingIndex >= 0) {
    updatedListOfFavorites.splice(existingIndex, 1);
  } else {
    updatedListOfFavorites.push(action.bank);
  }
  return {
    ...state,
    favoriteBanks: updatedListOfFavorites
  }
};

const bankSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_RESULTS: return setSearchResults( state, action );
    case actionTypes.UNDATE_FAVORITES: return updateFavorites( state, action );
    default: return state;
  }
};

export default bankSearchReducer;