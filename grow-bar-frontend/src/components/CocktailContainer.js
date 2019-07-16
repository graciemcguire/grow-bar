import React, { Component } from 'react';
import CocktailCard from "./CocktailCard"
import Header from "./Header"

export default class CocktailContainer extends Component {

  state = {
    drinkvalue: "",
    drinks: []
  }

  fetchDrinks = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/drink/${ this.state.drinkValue }`);
    const json = await response.json();
    this.setState({
      drinks: json
    })
  }

  handleChange = (event) => {
    this.setState({
      drinkValue: event.target.value
    })
  }

  renderCocktailCards = () => {
    console.log(this.state.drinks);
    const cocktailCards = this.state.drinks.map((drink, index) => {
      return <CocktailCard drink={ drink } key={ index }/>
    })
    return cocktailCards;
  }

  render() {
    return (
      <div>
        <Header handleChange={ this.handleChange } fetchDrinks={ this.fetchDrinks } drinkValue={ this.state.drinkValue }/>
        <div className="drink-flexbox">
          { this.state.drinks.length === 0 ? null : this.renderCocktailCards() }
        </div>

      </div>
    )
  }
}
