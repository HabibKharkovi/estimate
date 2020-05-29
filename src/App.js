import React, { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Estimates from './components/estimates';
import Invoices from './components/invoices';
import Clients from './components/clients';
import Items from './components/items';
import Settings from './components/settings';
import Header from './components/header';
import Account from './components/logging';
import Sidebar from './components/sidebar';
import SignUp from './components/account/sign-up';
import LogIn from './components/account/log-in';


import './App.css';

function App() {

  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(true);
  
  return (
    <div className="main">
        {
          !signIn ?
          <>
          <Route exact path="/signin" render={() => <LogIn/>} />
          <Route exact path="/signup" render={() => <SignUp/>} />
          </>
          :
          <>
          <Header setOpen={setOpen} open={open}/>
          <Sidebar setOpen={setOpen} open={open}/>
          <div className={open ? "main-content add-margin" : "main-content"}>
            <Switch>
              <Route exact path="/estimates" render={() => <Estimates/>} />
              <Route exact path="/invoices" component={Invoices} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/settings/:id" component={Settings} />
            </Switch>
          </div>
          </>
        }
        
    </div>
  );
}

export default App;
