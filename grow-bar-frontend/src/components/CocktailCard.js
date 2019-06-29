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


  removeEmpty = () => {
    const ingredients = []
    const measurements = []
    for (let [key, value] of Object.entries(this.props.drink)) {
      if(key.includes("strIngredient") && value !== "") {
        ingredients.push(value);
      }
      if(key.includes("strMeasure") && value !== "") {
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
    // console.log(this.removeEmpty());
    // console.log(this.concatDrinks())
    return (
      <div className="cocktail-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {!this.state.hover ?
        <div>
          <img src={ drink.strDrinkThumb } className="drink-image" alt="drink thumbnail"/>
        </div>
          :
          <CocktailCardHover drink={ drink } info={this.state.drinkInfo} key={drink.idDrink}/>
        }

      </div>
    )
  }
}



// onMouseOver={console.log('Over')}
// onMouseEnter={console.log('mouse entered', this.props)}
// onMouseLeave={console.log('mouse left')}
