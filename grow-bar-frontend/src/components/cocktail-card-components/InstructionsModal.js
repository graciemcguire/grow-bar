import React, { Component } from 'react'

export default class InstructionsModal extends Component {

    state = {
      count: 0
    }

    ingredientsLine = () => {
      let ingLine = this.props.info.join(" - ");
      return ingLine
    }

    handleClose = () => {
      this.props.closeModal();
      this.props.changeHoverState();
      this.setState(prevState => {
        return {
          count: prevState.count + 1 
        }
      })
    }

    render() {
      const { drink } = this.props
        return (
            <div className="instructions-overlay">
              <div className="instructions-modal">
              <button className="close-button" onClick={this.handleClose}> Close </button>
                <img src= { drink.strDrinkThumb } alt="drink thumbnail"/>
                <h3>{ drink.strDrink }</h3>
                <span> { this.ingredientsLine() } </span>
                <p>{ drink.strInstructions }</p>
              </div>
            </div>
        )
    }
}
