import React, { useState } from 'react';

import './LikeButton.css';

const LikeButton = (props) => {
  let [attachedClasses, setAttachedClasses] = useState("HeartShape");
  if (props.addedToFavorites) {
    // setting like that for now, need figure out infinite loop when using setAttachedClasses
    attachedClasses = "HeartShape Active";
  }

  const onClickHandler = () => {
    props.update();
    setAttachedClasses("HeartShape Active");
  }
  
  return (
    <div
      className={attachedClasses}
      onClick={onClickHandler}></div>
  );
};

export default LikeButton;