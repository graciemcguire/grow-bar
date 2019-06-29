import React, { Component } from 'react';


export default class CocktailCardHover extends Component {

  renderDrinkInfo = () => {
    return this.props.info.map((el, index) => {
      return <li key={index}> {el} </li>
    })
  }

  render(){
    const { drink } = this.props
    return (
      <div className="hovered-drink" >
        <img src={drink.strDrinkThumb} className="drink-image opaque-drink" alt="drink thumbnail"/>
        <div className="drink-info-overlay"> 
          <h3>{ drink.strDrink }</h3>

          <div className="ingredients-list">
            { this.renderDrinkInfo() } 
          </div>
        </div>

      </div>
    )
  }
}
