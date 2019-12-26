import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
    constructor() {
      super(); //calls React.Component's constructor()

      this.state = {
        monsters: []
      };      
    } //end of constructor()
    
    //user Lifecycle Method to fetch data from API and use that data to render on the page
    //waits for the page to mount before fetcthing all the data
    componentDidMount() {
      fetch('https:/jsonplaceholder.typicode.com/users')
        .then( response => response.json() )
        .then( users => this.setState({ monsters: users }) );
    }

    //this render method needs to be inside the class or it will fail to compile
    //render() comes built-in with React.Component
    render() {
      return (
        <div className="App">
            <CardList monsters={ this.state.monsters } />
        </div>
      );
    }
}


export default App;
