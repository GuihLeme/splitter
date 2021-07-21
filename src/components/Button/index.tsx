import React from 'react';
import { useValue } from '../../context/ValuesContext';

import styles from './styles.module.scss';



const Button: React.FC = ({children}) => {
  const { setTipPercentage } = useValue();

  const handleSelectedPercentage = (tipPercentage: number) => {
    setTipPercentage(tipPercentage)
  }



  return (
    <div>
      <input type="radio" id={`${children}`} name='percentage' value={`${children}`} onClick={()=>handleSelectedPercentage(Number(children))}/>
      <label htmlFor={`${children}`}>
        <div className={styles.content}>
          {children}%
        </div>
      </label>
    </div>
  );
}

export default Button;
