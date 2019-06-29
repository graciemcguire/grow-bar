import React, { Component } from 'react';


export default class CocktailCardHover extends Component {

  render(){
    const { drink, info } = this.props
    console.log(info);
    return (
      <div className="hovered-drink" >
        <img src={drink.strDrinkThumb} className="drink-image opaque-drink" alt="drink thumbnail"/>
        <div className="drink-info-overlay"> 
          <h3>{ drink.strDrink }</h3>
          <p> { drink.strInstructions } </p>
        </div>

      </div>
    )
  }
}
