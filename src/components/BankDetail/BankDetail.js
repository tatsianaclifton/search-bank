import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './BankDetail.module.css';
import Input from '../Input/Input';
import LikeButton from '../LikeButton/LikeButton';
import * as actions from '../../store/actions/bankSearch';

const BankDetail = (props) => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const bankSearchResults = useSelector(state => state.bankSearchResults);
  const favoriteBanks = useSelector(state => state.favoriteBanks);
  const notes = useSelector(state => state.notes);
  const filteredNotes = notes.filter(result => result.id === props.match.params.id);
  const note = filteredNotes.length > 0 ? filteredNotes[0].note : '';
  const bankDetail = bankSearchResults.filter(result => result.data.ID === props.match.params.id);

  const inputChangedHandler = (event) => {
    setNoteText(event.target.value);
    dispatch(actions.addNote(bankDetail[0].data.ID, event.target.value));  
  }

  const updateFavoritesHandler = (id) => {
    const bank = bankSearchResults.filter(result => result.data.ID === id)[0];
    dispatch(actions.updateFavorites(bank));
  };

  let details = <Redirect to="/" />;
  if (bankDetail.length > 0) {
    details = (
      <div className={classes.BankDetail}>
        <h1>Bank Details</h1>
        <p>NAME:<span>{bankDetail[0].data.NAME}</span></p>
        <p>CITY:<span>{bankDetail[0].data.CITY}</span></p>
        <p>STATE:<span>{bankDetail[0].data.STNAME}</span></p>
        <p>ZIP:<span>{bankDetail[0].data.ZIP}</span></p>
        <p>NOTE:<span>{note}</span></p>
        <Input
            elementType="textarea"
            label="Note"
            placeholder="Add Your Note Here"          
            type="text"
            value={noteText}
            changed={(event) => inputChangedHandler(event)}/>
        <div className={classes.LikeButton}>
          <LikeButton
            update={() => updateFavoritesHandler(bankDetail[0].data.ID)}
            addedToFavorites={favoriteBanks.some(f => f.data.ID === bankDetail[0].data.ID+'')}/>
        </div>
      </div>
    );
  }
  return details;
}

export default BankDetail;