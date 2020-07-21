import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './BankFind.module.css';
import Input from '../Input/Input';
import BankList from '../BankList/BankList';
import * as actions from '../../store/actions/bankSearch';

const BankFind = (props) => {
  const dispatch = useDispatch();
  const bankSearchResults = useSelector(state => state.bankSearchResults);
  const favoriteBanks = useSelector(state => state.favoriteBanks);
  const [searchText, setSearchText] = useState('');

  const onGetSearchResults = (
    (searchCriteria) => dispatch(actions.getSearchResults(searchCriteria))
  );

  const inputChangedHandler = (event) => {
    if(event.target.value !== '') {
      onGetSearchResults(event.target.value);
    }
    else{
      dispatch(actions.setSearchResults(favoriteBanks));
    }
    setSearchText(event.target.value);
  }

  const displayDetailHandler = (id) => {
    props.history.push('/bank/' + id);
  };

  const updateFavoritesHandler = (id) => {
    const bank = bankSearchResults.filter(result => result.data.ID === id )[0];
    dispatch(actions.updateFavorites(bank));
  };
  
  return (   
      <div className={classes.BankFind}>   
        <Input
          elementType="input"
          label="Find Bank"
          placeholder="Type Here Bank Name"          
          type="text"
          value={searchText}
          changed={(event) => inputChangedHandler(event)}/>
        <BankList
          updateFavorites={updateFavoritesHandler}
          selected={displayDetailHandler}
          data={bankSearchResults}/>
      </div>    
  )
}

export default BankFind;