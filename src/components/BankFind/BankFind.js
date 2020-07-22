import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './BankFind.module.css';
import Input from '../Input/Input';
import BankList from '../BankList/BankList';
import * as actions from '../../store/actions/bankSearch';

const BankFind = (props) => {
  const dispatch = useDispatch();
  const bankSearchResults = useSelector(state => state.bankSearchResults);
  const favoriteBanks = useSelector(state => state.favoriteBanks);
  const searchText = useSelector(state => state.searchText);

  const onGetSearchResults = (searchCriteria => 
    dispatch(actions.getSearchResults(searchCriteria))
  );

  const inputChangedHandler = (event) => {
    const inputText = event.target.value;
    if(inputText !== '') {
      onGetSearchResults(inputText);
    }
    else{
      dispatch(actions.setSearchResults(favoriteBanks));
    }
    dispatch(actions.setSearchText(inputText));
  }

  const displayDetailHandler = (id) => {
    props.history.push('/bank/' + id);
  };

  const searchTextRemovalHandler = () => {
    dispatch(actions.setSearchResults(favoriteBanks));
    dispatch(actions.setSearchText(''));
  };

  const updateFavoritesHandler = (id) => {
    const bank = bankSearchResults.filter(result => result.data.ID === id )[0];
    dispatch(actions.updateFavorites(bank));
  };
  
  return (   
      <div className={classes.BankFind}>   
        <div className={classes.Row}>
          <Input
            elementType="input"
            label="Find Bank"
            placeholder="Type Here Bank Name"          
            type="text"
            value={searchText}
            changed={(event) => inputChangedHandler(event)}/>
          <button
            className={classes.Button}
            onClick={searchTextRemovalHandler}>Clear Search Input</button>
        </div>      
        <BankList
          updateFavorites={updateFavoritesHandler}
          selected={displayDetailHandler}
          data={bankSearchResults}/>
      </div>    
  )
}

export default BankFind;