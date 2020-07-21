import axios from 'axios';

import * as actionTypes from './actionType';

export const setSearchResults = (searchResult) => {
  return {
    type: actionTypes.SET_SEARCH_RESULTS,
    searchResult: searchResult
  }
}

export const updateFavorites = (bank) => {
  return {
    type: actionTypes.UNDATE_FAVORITES,
    bank: bank
  }
}

export const getSearchResults = (searchCriteria) => {
  return dispatch => {
    const url="https://tatsiana-bank-api.herokuapp.com/api/banks?name=" + searchCriteria;
    axios.get(url)
      .then(response => {
        const searchResult = Object.values(response.data.banks);
        dispatch(setSearchResults(searchResult));
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};