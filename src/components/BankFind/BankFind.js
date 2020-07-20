import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import classes from './BankFind.module.css';
import Input from '../Input/Input';
import BankList from '../BankList/BankList';
import * as actions from '../../store/actions/bankSearch';

const BankFind = (props) => {
  const dispatch = useDispatch();
  const bankSearchResults = useSelector(state => state.bankSearchResults);
  const favoriteBanks = useSelector(state => state.favoriteBanks);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
  }, [searchText])

  const inputChangedHandler = (event) => {    
    if(event.target.value !== '') {
      const url="https://tatsiana-bank-api.herokuapp.com/api/banks?name=" + event.target.value;
      axios.get(url)
        .then(response => {
          const searchResult = Object.values(response.data.banks);
          dispatch(actions.getSearchResults(searchResult));
        })
        .catch(error => {
          console.log('error', error);
        })
    }
    else{
      dispatch(actions.getSearchResults(favoriteBanks));
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
          favorites={favoriteBanks}
          selected={displayDetailHandler}
          data={bankSearchResults}/>
      </div>    
  )
}

export default BankFind;