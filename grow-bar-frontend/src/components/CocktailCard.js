import React, { Component } from 'react';
import CocktailCardHover from './CocktailCardHover'

export default class CocktailCard extends Component {


  state = {
    hover: false,
    drinkInfo: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.drinkInfo === this.state.drinkInfo) {
      this.removeEmpty();
    }
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false
    })
  }

  changeHoverState = () => {
    this.setState({
      hover: false
    })
  }


  removeEmpty = () => {
    const ingredients = []
    const measurements = []
    for (let [key, value] of Object.entries(this.props.drink)) {
      if(key.includes("strIngredient") && value !== "" && key.includes("strIngredient") && value !== null) {
        ingredients.push(value);
      }
      if(key.includes("strMeasure") && value !== "" && key.includes("strMeasure") && value !== null) {
        measurements.push(value);
      }
    }
    this.concatDrinks(ingredients, measurements);
  };

  concatDrinks = (ing, measure) => {
    let arr = []
    for (let i = 0; i < ing.length; i++) {
      arr.push(`${measure[i]} ${ing[i]}`)
    }
    this.setState({
      drinkInfo: arr
    })
  }

  render() {
    const { drink } = this.props
    return (
      <div className="cocktail-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {!this.state.hover ?
        <div>
          <img src={ drink.strDrinkThumb } className="drink-image" alt="drink thumbnail"/>
        </div>
          :
          <CocktailCardHover key={drink.idDrink} drink={ drink } info={this.state.drinkInfo} changeHoverState={this.changeHoverState} />
        }

      </div>
    )
  }
}



// onMouseOver={console.log('Over')}
// onMouseEnter={console.log('mouse entered', this.props)}
// onMouseLeave={console.log('mouse left')}
