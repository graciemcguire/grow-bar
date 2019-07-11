import React, { Component } from 'react';
import './styles/style.css'
import CocktailContainer from "./components/cocktail-card-components/CocktailContainer"
import HomeScreen from './components/intro-components/HomeScreen';

export default class App extends Component {

  state = {
    drinkValue: "",
    drinks: [],
    homePage: true
  }

  fetchDrinks = (event) => {
      if (event) event.preventDefault();
      console.log(this.state.drinkValue);
      fetch(`http://localhost:3000/drink/${this.state.drinkValue}`)
      .then(res => res.json())
      .then(json => this.setState({drinks: json}));
  }

  handleChange = (event) => {
    this.setState({
      drinkValue: event.target.value
    })
  }

  renderContainer = () => {
    this.setState({
      homePage: false
    })
  }

  render() {
    return (
      <div className="App">

      {this.state.homePage 
      ? 
        <HomeScreen renderContainer={this.renderContainer} 
                    handleChange={this.handleChange} 
                    drinkValue={this.state.drinkValue}
                    fetchDrinks={this.fetchDrinks}
        /> 
      : 
        <CocktailContainer drinks={this.state.drinks} 
                           fetchDrinks={this.fetchDrinks} 
                           handleChange={this.handleChange} 
                           drinkValue={this.state.drinkValue}
        />
      }


    </div>
  );
  } 
}



