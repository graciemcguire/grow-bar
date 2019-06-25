import React, { Component } from 'react';

export default class CocktailCard extends Component {

  render() {
    console.log('in the card', this.props)
    return (
      <div className="cocktail-card">
        <img src= { this.props.drink.strDrinkThumb } />
        <p>{ this.props.drink.strIngredient1 }</p>
        <h1>{ this.props.drink.strDrink }</h1>

        im a cocktail card  ¯\_(ツ)_/¯
      </div>
    )
  }
}
