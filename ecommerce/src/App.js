import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HatsPage from './pages/hatspage/hatspage.component';
import HomePage from './pages/homepage/homepage.component';
import JacketsPage from './pages/jacketspage/jacketspage.component';
import MensPage from './pages/menspage/menspage.component';
import SneakersPage from './pages/sneakerspage/sneakerspage.component';
import WomensPage from './pages/womenspage/womenspage.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
        <Route path='/shop/sneakers' component={SneakersPage} />
        <Route path='/shop/mens' component={MensPage} />
        <Route path='/shop/womens' component={WomensPage} />
      </Switch>
    </div>
  );
}

export default App;
