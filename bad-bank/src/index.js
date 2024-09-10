import React from 'react'; 
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';

import App from './App.js'
import CreateAccount from './components/createaccount.js'
import Login from './components/login.js'
import Deposit from './components/deposit.js'
import Withdraw from './components/withdraw.js'
import Balance from './components/balance.js'
import AllData from './components/alldata.js'

function Spa() {
  return (
    <HashRouter>
      <Navbar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={App} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
