import reducer from './bankSearch';
import * as actionType from '../actions/actionType';

describe('bankSearch reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      bankSearchResults: [],
      favoriteBanks: [],
      searchText: '',
      notes: []
    });
  });

  it('should set search text on set search text action', () => {
    expect(reducer({
      bankSearchResults: [],
      favoriteBanks: [],
      searchText: '',
      notes: []
    }, {
      type: actionType.SET_SEARCH_TEXT,
      searchText: 'some-search-text',
    })).toEqual({
      bankSearchResults: [],
      favoriteBanks: [],
      searchText: 'some-search-text',
      notes: []
    });
  })
});