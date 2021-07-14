import { createContext, useState, useContext } from 'react';

interface ValuesContextData {
  bill: number,
  people: number,
  setBill: (value: number) => void;
  setPeople: (number: number) => void;
}

export const ValuesContext = createContext<ValuesContextData>({} as ValuesContextData);

export const ValuesProvider: React.FC = ({children}) => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);


  return(
    <ValuesContext.Provider value={{ bill, people, setBill, setPeople }}>
      {children}
    </ValuesContext.Provider>
  )
}

export function useValue(): ValuesContextData {
  const context = useContext(ValuesContext);

  return context;
}
