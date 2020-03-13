import React, {Component} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventoryList: ''
    }
  }
  componentDidMount = () => {
    axios.get('/api/inventorylist')
      .then(res => {console.log(res.data)
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render(){
  //   let inventoryMapped = this.state.inventoryList.map(product => {
  //   // console.log(product)
  //   return <div key={product.id}>{product.image}</div>
  // })
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>

      </div>
    );
  }
}

export default App;
