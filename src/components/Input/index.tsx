import React, { InputHTMLAttributes } from 'react';
import { useValue } from '../../context/ValuesContext';

import styles from './styles.module.scss';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  icon: string,
  name: string,
  id: string,
}

const Input: React.FC<InputProps> = ({icon, id, name}: InputProps, ...rest) => {
  const { bill, people, setBill, setPeople } = useValue();

  const handleOnBlurValue = (e: any) => {
    if(e.target.name === 'billAmount') {
      if(e.target.value === '') {
        setBill(0);
      } else {
        setBill(e.target.value);
      }
    }

    if(e.target.name === 'peopleNumber') {
      if(e.target.value === '') {
        setPeople(0);
      } else {
        setPeople(e.target.value);
      }
    }
  }

  return (
    <div className={styles.container}>
      <img src={icon} alt="dollar icon" />
      <input
        name={name}
        id={id}
        type="number"
        placeholder='0'
        onBlur={(e) => handleOnBlurValue(e)}
        {...rest}
      />
    </div>
  );
}

export default Input;
