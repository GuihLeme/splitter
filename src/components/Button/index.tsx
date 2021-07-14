import React from 'react';

import styles from './styles.module.scss';

const Button: React.FC = ({children}) => {


  return (
    <div>
      <input type="radio" id={`${children}`} name='percentage' value={`${children}`} />
      <label htmlFor={`${children}`}>
        <div className={styles.content}>
          {children}
        </div>
      </label>
    </div>
  );
}

export default Button;
