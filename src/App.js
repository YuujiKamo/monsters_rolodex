import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
    constructor() {
      super(); //calls React.Component's constructor()

      this.state = {
        monsters: [],
        searchField: ''
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
      //Destructuring, pull properties of an object and set them to constants
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter( monster => 
        monster.name.toLowerCase().includes( searchField.toLowerCase() )
      );

      return (
        <div className="App">
            <input 
              type='search' 
              placeholder='Search monsters' 
              onChange={ e => this.setState( {searchField: e.target.value}) }

            />
            <CardList monsters={ filteredMonsters } />
        </div>
      );
    }
}


export default App;
