import React from 'react';

import LikeButton from '../LikeButton/LikeButton';
import classes from './BankList.module.css';

const BankList = (props) => {
  return (
    <section className={classes.BankList}>
      <h2>Bank Search Result</h2>
      <ul>
        {props.data.map(bank => (
          <li
            key={bank.data.ID}>       
            <span
              onClick={() => props.selected(bank.data.ID)}>
                {bank.data.NAME}
            </span>
            <LikeButton
              addedToFavorites={props.favorites.includes(bank.data.ID)}
              update={() => props.updateFavorites(bank.data.ID)}/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BankList;