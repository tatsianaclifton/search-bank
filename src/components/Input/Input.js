import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];

  switch(props.elementType) {
    case 'input':
      inputElement = <input 
        onChange={props.changed}
        className={inputClasses.join(' ')}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value} />
      break;
    case 'textarea':
      inputElement = <textarea
        onChange={props.changed}
        className={inputClasses.join(' ')} 
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}/>
      break;
    default:
      inputElement = <input 
        onChange={props.changed} 
        className={inputClasses.join(' ')} 
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}/>
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input;