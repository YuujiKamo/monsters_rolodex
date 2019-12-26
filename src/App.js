import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super(); //calls React.Component's constructor()

      this.state = {
        monsters: []
      };      
    } //end of constructor()
    
    //user Lifecycle Method to fetch data from API and use that data to render on the page
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
            {
              //map() seems to tranverse an array and return an element like a foreach loop
              //key is needed so react knows exactly which element is changing if it is changed or changeable
              this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))
            }
        </div>
      );
    }
}


export default App;
