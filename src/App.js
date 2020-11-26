import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import {AccountSummary} from './components/AccountSummary'
import {TransactionHistory} from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './state/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />    
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
