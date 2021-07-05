import React from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import { CurrencyContext } from './components/CurrencyContext'
import CurrencyToggle from './components/CurrencyToggle';

function App() {
  const [currency, setCurrency] = React.useState('uah');

  const currencyChangeHandler = (currency) => {
    setCurrency(currency);
  }

  return (
    <CurrencyContext.Provider value={{
      currencyChangeHandler,
      currency
    }}>
      <div className="App">
        <CurrencyToggle />
        <ProductsList />
      </div>
    </CurrencyContext.Provider> 
  );
}

export default App;
