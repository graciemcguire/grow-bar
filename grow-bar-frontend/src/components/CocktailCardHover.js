<<<<<<< HEAD
import React, { Component } from 'react';


export default class CocktailCardHover extends Component {

  render(){
    const { drink } = this.props

    console.log(drink.strIngredient1);
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
=======
>>>>>>> d6cc4f21c0e9420c940db785fedc01e2295f27d1
