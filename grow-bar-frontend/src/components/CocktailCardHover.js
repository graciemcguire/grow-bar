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

  closeModal = () => {
    this.setState({
      showInstructions: false
    })
  }


  render(){
    const { drink, info } = this.props

    return (
      <div className="hovered-drink" >
        <img src={drink.strDrinkThumb} className="drink-image opaque-drink" alt="drink thumbnail"/>
        <div className="drink-info-overlay">
          <h3>{ drink.strDrink }</h3>

          <button onClick={this.renderInstructions}> Details </button>
        </div>

        { this.state.showInstructions ? <InstructionsModal drink={ drink } info={ info } closeModal={this.closeModal}/> : null }

      </div>
    )
  }
}

// renderDrinkInfo = () => {
//   return this.props.info.map((el, index) => {
//     return <li key={index}> {el} </li>
//   })
// }
