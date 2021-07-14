import './styles/sass/global.scss';
import styles from './styles/sass/App.module.scss';
import imgLogo from './assets/logo.svg';
import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';
import Input from './components/Input';
import Button from './components/Button';

import { useValue } from './context/ValuesContext';

function App() {
  const { bill, people } = useValue();

  return (
    <main className={styles.container}>
      <img src={imgLogo} alt="Logo" />

      <div className={styles.content}>

        <div className={styles.controls}>
          <h1>Bill</h1>
          <Input name="billAmount" id="billAmount" icon={dollarIcon} />

          <h1>Select Tip %</h1>
          <div className={styles.buttons}>
            <Button>5%</Button>
            <Button>10%</Button>
            <Button>15%</Button>
            <Button>25%</Button>
            <Button>50%</Button>
          </div>

          <h1>Number of People</h1>
          <Input name="peopleNumber" id="peopleNumber" icon={personIcon} />
        </div>

        <div className={styles.totals}>
          <h1>{bill}</h1>
          <h1>{people}</h1>
        </div>

      </div>
    </main>
  );
}

export default App;
