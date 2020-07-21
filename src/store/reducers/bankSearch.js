import * as actionTypes from '../actions/actionType';

const initialState = {
  bankSearchResults: [],
  favoriteBanks: [],
  searchText: '',
  notes: []
};

const setSearchResults = (state, action) => {
  return {
    ...state,
    bankSearchResults: action.searchResult
  }
};

const setSearchText = (state, action) => {
  return {
    ...state,
    searchText: action.searchText
  }
};

const addNote = (state, action) => {
  const updatedNotes = state.notes;
  const existingIndex = updatedNotes.map(n => n.id).indexOf(action.id);
  if(existingIndex >= 0) {
    updatedNotes.forEach(n =>  {
      if (n.id === action.id) {
          n.note = action.note;
      }
    });
  }
  else {
    updatedNotes.push({ id: action.id, note: action.note});
  }
  return {
    ...state,
    notes: updatedNotes
  }
};

const updateFavorites = (state, action) => {
  const updatedListOfFavorites = state.favoriteBanks;
  const existingIndex = updatedListOfFavorites.map(f => f.data.ID).indexOf(action.bank.data.ID);
  if(existingIndex < 0) {
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
    case actionTypes.SET_SEARCH_TEXT: return setSearchText( state, action );
    case actionTypes.ADD_NOTE: return addNote( state, action );
    case actionTypes.UNDATE_FAVORITES: return updateFavorites( state, action );
    default: return state;
  }
};

export default bankSearchReducer;