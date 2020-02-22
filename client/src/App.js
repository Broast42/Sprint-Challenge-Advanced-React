import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      data: []
    }
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/players/`)
    .then(res=>{
      console.log("result", res.data);
      this.setState({data: res.data});
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  render(){
    return (
      <div className="App">
          <PlayerList data={this.state.data} />
      </div>
    );

  }
  
}

export default App;
