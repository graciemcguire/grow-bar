import React, { Component } from 'react'

export default class InstructionsModal extends Component {

    instructionsLine = () => {
      let ingLine = this.props.info.join(" - ");
      return ingLine
    }

    render() {
      const { drink, info } = this.props
        return (
            <div className="instructions-overlay">
              <div className="instructions-modal">
                <img src= { drink.strDrinkThumb } alt="drink thumbnail"/>
                <h3>{ drink.strDrink }</h3>
                <span> { this.instructionsLine() } </span>
                <p>{ drink.strInstructions }</p>
              </div>
            </div>
        )
    }
}
