import React, { Component } from 'react';
import './styles/style.css'
import CocktailContainer from "./components/CocktailContainer"
import HomeScreen from './components/HomeScreen';

export default class App extends Component {

  state = {
    homePage: true
  }

  renderContainer = () => {
    this.setState({
      homePage: false
    })
  }

  render() {
    return (
      <div className="App">

      {this.state.homePage ? <HomeScreen renderContainer={this.renderContainer}/> : <CocktailContainer />}


    </div>
  );
  } 
}



