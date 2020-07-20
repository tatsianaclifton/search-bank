import * as actionTypes from './actionType';

export const getSearchResults = (searchResult) => {
  return {
    type: actionTypes.GET_SEARCH_RESULTS,
    searchResult: searchResult
  }
}

export const updateFavorites = (bank) => {
  return {
    type: actionTypes.UNDATE_FAVORITES,
    bank: bank
  }
}