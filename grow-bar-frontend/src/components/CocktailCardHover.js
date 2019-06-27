import React, { Component } from 'react';


export default class CocktailCard extends Component {
  render(){
    const { drink } = this.props

    return (
      <div>
        <h1>{ drink.strDrink }</h1>
        <img src={drink.strDrinkThumb}/>
      </div>
    )
  }
}
