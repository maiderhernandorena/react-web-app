import React from 'react';
import './App.css';

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
