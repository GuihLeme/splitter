import { createContext, useState, useContext, useEffect } from 'react';

interface ValuesContextData {
  bill: number,
  people: number,
  tipAmountPerPerson: number,
  tipPercentage: number,
  total: number,
  setBill: (value: number) => void;
  setPeople: (number: number) => void;
  setTipAmountPerPerson: (number: number) => void;
  setTipPercentage: (number: number) => void;
  setTotal: (number: number) => void;
}

export const ValuesContext = createContext<ValuesContextData>({} as ValuesContextData);

export const ValuesProvider: React.FC = ({children}) => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);



  useEffect(() => {
    if( bill !== 0 &&
        people !== 0 &&
        tipPercentage !== 0) {

      const tipAmount = bill * tipPercentage / 100;

      const tipAmountPerPerson = tipAmount / people;

      const totalPerPerson = (parseInt(bill.toString()) + tipAmount) / people; //magic ✨

      setTotal(totalPerPerson);

      setTipAmountPerPerson(tipAmountPerPerson)
    } else {
      setTotal(0);
      setTipAmountPerPerson(0);
    }
  }, [bill, people, tipPercentage])

  useEffect(() => {
    console.log(typeof people)
    console.log(people)
  },[people])



  return(
    <ValuesContext.Provider value={{
      bill, people, tipAmountPerPerson, tipPercentage, total, setBill, setPeople, setTipAmountPerPerson, setTipPercentage, setTotal
    }}>
      {children}
    </ValuesContext.Provider>
  )
}

export function useValue(): ValuesContextData {
  const context = useContext(ValuesContext);

  return context;
}
