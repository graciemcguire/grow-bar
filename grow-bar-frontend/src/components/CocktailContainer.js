import React, { Component } from 'react';
import CocktailCard from "./CocktailCard"

export default class CocktailContainer extends Component {

  state = {
    drinkvalue: "",
    drinks: []
  }

  fetchDrinks = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/drink/${this.state.drinkValue}`);
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
    const cocktailCards = this.state.drinks.map((drink, index) => {
      return <CocktailCard drink={drink} key={index} />
    })
    return cocktailCards;
    // console.log(this.state.drinks);
  }

  render() {
    return (
      <div>

        <h1>{this.state.drinkValue}</h1>
        <form onSubmit={this.fetchDrinks}>
          <label>drink?</label>
          <input value={this.state.drinkValue || ""} onChange={this.handleChange}/>
          <button>find my drink</button>
        </form>

        {this.state.drinks.length === 0 ? null : this.renderCocktailCards()}
      </div>
    )
  }
}
