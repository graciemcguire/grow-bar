import React, {Component} from 'react'
import {FaCocktail} from "react-icons/fa";


export default class Header extends Component {

  getDrinks = (event) => {
    this.props.fetchDrinks();
  }

  testFetch = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/test-route")
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render () {
    return (
      <div className='header-div'>
        <form onSubmit={this.props.fetchDrinks}>
          <input value={this.props.drinkValue || ""} 
                  onChange={this.props.handleChange} 
                  className="drink-input" 
                  placeholder="Throw Ingredients Here"
          />
          <button><FaCocktail className="cocktail-icon"/></button>
        </form>
      </div>
    )
  }
}
