import React, { Component } from 'react';
import InstructionsModal from "./InstructionsModal"


export default class CocktailCardHover extends Component {

  state = {
    showInstructions: false
  }

  renderInstructions = () => {
    this.setState({
      showInstructions: true
    })
  }

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
          <button onClick={this.renderInstructions}> Instructions </button>
        </div>

        { this.state.showInstructions ? <InstructionsModal /> : null }

      </div>
    )
  }
}
