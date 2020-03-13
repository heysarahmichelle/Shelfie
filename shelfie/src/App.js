import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <div>
        <section>
          <h3>Soap</h3>
          <h3>$4</h3>
          <h3>img</h3>
        </section>
        <section>
          <h3>Shampoo</h3>
          <h3>$8</h3>
          <h3>img</h3>
        </section>
        <section>
          <h3>Washcloths</h3>
          <h3>$6</h3>
          <h3>img</h3>
        </section>
      </div>
      <Form/>
      <Header/>
      

    </div>
  );
}

export default App;
