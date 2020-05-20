import React, { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Estimates from './components/estimates';
import Invoices from './components/invoices';
import Clients from './components/clients';
import Items from './components/items';
import Settings from './components/settings';
import Header from './components/header';
import Sidebar from './components/sidebar';

import './App.css';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="main">
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
    </div>
  );
}

export default App;
