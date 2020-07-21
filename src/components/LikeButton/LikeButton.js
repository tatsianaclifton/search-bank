import React, { useState } from 'react';

import './LikeButton.css';

const LikeButton = (props) => {
  let [attachedClasses, setAttachedClasses] = useState("HeartShape");
  console.log('addedToFavorites', props.addedToFavorites);
  if (props.addedToFavorites) {
    attachedClasses = "HeartShape Active";
  }

  const onClickHandler = () => {
    props.update();
    if(attachedClasses.includes("HeartShape Active")) {
      setAttachedClasses("HeartShape");
    }
    else {
      setAttachedClasses("HeartShape Active");
    }
  }
  
  return (
    <div
      className={attachedClasses}
      onClick={onClickHandler}></div>
  );
};

export default LikeButton;