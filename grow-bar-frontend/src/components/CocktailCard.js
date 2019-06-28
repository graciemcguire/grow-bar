import React, { Component } from 'react';
import CocktailCardHover from './CocktailCardHover'

export default class CocktailCard extends Component {

  state = {
    hover: false
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

  render() {
    const { drink } = this.props
    return (
      <div className="cocktail-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {!this.state.hover ?
        <div>
          <img src={ drink.strDrinkThumb } className="drink-image" alt="drink thumbnail"/>
        </div>
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
