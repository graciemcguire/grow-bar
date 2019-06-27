import React, { Component } from 'react';
import CocktailCardHover from './CocktailCardHover'

export default class CocktailCard extends Component {

  state = {
    hover: false
  }

  handleMouseEnter = () => {
    console.log("working");
    this.setState({
      hover: true
    })
  }

  handleMouseLeave = () => {
    console.log("left yo ass");
    this.setState({
      hover: false
    })
  }

  render() {
    const { drink } = this.props
    // console.log('in the card', this.props)
    return (
      <div className="cocktail-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {!this.state.hover ?
          <img src= { drink.strDrinkThumb } />
          :
          <CocktailCardHover drink={ drink }/>
        }

      </div>
    )
  }
}



// onMouseOver={console.log('Over')}
// onMouseEnter={console.log('mouse entered', this.props)}
// onMouseLeave={console.log('mouse left')}
