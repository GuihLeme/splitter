import { useRef } from 'react';


import { useValue } from './context/ValuesContext';

import imgLogo from './assets/logo.svg';
import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';
import Input from './components/Input';
import Button from './components/Button';

import './styles/sass/global.scss';
import styles from './styles/sass/App.module.scss';

function App() {
  const { tipAmountPerPerson, total, setBill, setPeople, setTipAmountPerPerson, setTotal, setTipPercentage } = useValue();

  const formRef = useRef(null);

  const handleReset = () => {
    setBill(0);
    setPeople(0);
    setTipAmountPerPerson(0);
    setTotal(0);
    setTipPercentage(0);
  }


  return (
    <main className={styles.container}>
      <img src={imgLogo} alt="Logo" />

      <div className={styles.content}>

        <div className={styles.controls}>
            <h2>Bill</h2>
            <form ref={formRef}></form>
            <Input name="billAmount" id="billAmount" icon={dollarIcon} />

            <h2>Select Tip %</h2>
            <div className={styles.buttons}>
              <Button>5</Button>
              <Button>10</Button>
              <Button>15</Button>
              <Button>25</Button>
              <Button>50</Button>
            </div>

            <h2>Number of People</h2>
            <Input name="peopleNumber" id="peopleNumber" icon={personIcon} />
        </div>

        <div className={styles.totalPanel}>
          <div className={styles.totals}>
            <div className={styles.tipAmount}>
              <div>
                <h2>Tip Amount</h2>
                <span>/ person</span>
              </div>
              <h1>${tipAmountPerPerson}</h1>
            </div>
            <div className={styles.total}>
              <div>
                <h2>Total</h2>
                <span>/ person</span>
              </div>
              <h1>${total}</h1>
            </div>
          </div>
          {total !== 0 ? (
            <button className={styles.reset} onClick={handleReset}>reset</button>

          ) : (
            <button className={styles.disabled}>reset</button>
          )}

        </div>
      </div>
    </main>
  );
}

export default App;
