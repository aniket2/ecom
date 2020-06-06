import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
    	<Header />
    	<switch>
      		<Route exact path='/' component={HomePage} />
      		<Route exact path='/shop' component={ShopPage} />
      		<Route path='/signin' component={SignInAndSignUpPage} />
      	</switch>
    </div>
  );
}

export default App;
