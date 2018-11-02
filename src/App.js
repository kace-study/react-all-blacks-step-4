import React, { Component } from 'react';
import PanelList from './components/PanelList/PanelList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isPlaying: true }
  }

  endGame = () => {
    this.setState({ isPlaying: false });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          { this.state.isPlaying ? 
            <h1>ALL BLACKS</h1> :
            <h1>Congrats! Haka!</h1>
          }
          <button>Start</button>
        </header>
        <PanelList 
          endGame={this.endGame} 
          isPlaying={this.state.isPlaying}/>
      </div>
    );
  }
}

export default App;