import React, {Component} from 'react'
import {FaCocktail} from "react-icons/fa";


export default class Header extends Component {


  render () {
    return (
      <div className='header-div'>
        <form onSubmit={this.props.fetchDrinks}>
          <input value={this.props.drinkValue || ""} onChange={this.props.handleChange} className="drink-input" placeholder="Throw Ingredients Here"/>
          <button><FaCocktail className="cocktail-icon"/></button>
        </form>
      </div>
    )
  }
}
