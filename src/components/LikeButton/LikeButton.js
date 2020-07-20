import React, { useState, useEffect } from 'react';

import classes from './LikeButton.module.css';

const LikeButton = (props) => {
  const [styleClass, setStyleClass] = useState([classes.HeartShape]);
  const initialClass = [classes.HeartShape];
  const favoriteClass = [classes.HeartShape, classes.active];

  useEffect(() => {
    //console.log('addedToFavorites updated', props.addedToFavorites);
    //console.log('styleClass', styleClass);
    props.addedToFavorites ? setStyleClass(favoriteClass) : setStyleClass(initialClass);
  }, [props.addedToFavorites]);

  return (
    <div
      className={styleClass.join(' ')}
      onClick={props.update}></div>
  );
};

export default LikeButton;