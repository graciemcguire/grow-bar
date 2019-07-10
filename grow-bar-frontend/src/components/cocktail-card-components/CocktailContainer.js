import React, { Component } from 'react';
import CocktailCard from "./CocktailCard"
import Header from "../header-components/Header"

export default class CocktailContainer extends Component {


  renderCocktailCards = () => {
    const cocktailCards = this.props.drinks.map((drink, index) => {
      return <CocktailCard drink={drink} showModal={this.showModal} key={index}/>
    })
    return cocktailCards;
  }

  render() {
    return (
      <div>
        <Header handleChange={this.props.handleChange} fetchDrinks={this.fetchDrinks} drinkValue={this.props.drinkValue}/>
        <div className="drink-flexbox">
          {this.props.drinks.length === 0 ? null : this.renderCocktailCards()}
        </div>
        
      </div>
    )
  }
}
