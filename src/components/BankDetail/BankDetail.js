import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './BankDetail.module.css';
import Input from '../Input/Input';
import LikeButton from '../LikeButton/LikeButton';

const BankDetails = (props) => {
  const bankSearchResults = useSelector(state => state.bankSearchResults);
  const [note, setNote] = useState('');
  const bankDetail = bankSearchResults.filter(result => result.data.ID === props.match.params.id);

  const inputChangedHandler = (event) => {
    setNote(event.target.value);    
  }

  let details = <Redirect to="/" />;
  if (bankDetail.length > 0) {
    details = (
      <div className={classes.BankDetail}>
        <h1>Bank Details</h1>
        <p>NAME:<span>{bankDetail[0].data.NAME}</span></p>
        <p>CITY:<span>{bankDetail[0].data.CITY}</span></p>
        <p>STATE:<span>{bankDetail[0].data.STNAME}</span></p>
        <p>ZIP:<span>{bankDetail[0].data.ZIP}</span></p>
        <Input
            elementType="textarea"
            label="Note"
            placeholder="Add Your Note Here"          
            type="text"
            value={note}
            changed={(event) => inputChangedHandler(event)}/>
        <div className={classes.LikeButton}>
          <LikeButton/>
        </div>
      </div>
    );
  }
  return details;
}

export default BankDetails;