import React, { Component } from 'react';
import {FaCocktail} from "react-icons/fa";
import BarName from "./BarName"


class HomeScreen extends Component {

    state = {
        renderInput: false,
        renderInputButton: false
    }

    renderInput = () => {
        this.setState(prevState => ({
            renderInput: !prevState.renderInput
        }))
    }

    renderButtonTimeOut = () => {
        setTimeout(() => {
            this.setState({renderInputButton: true});
        }, 2000)
    };

    renderInputAndButton = () => {
        this.renderInput();
        this.renderButtonTimeOut();
    }

    fetchData = () => {
        this.props.renderContainer();
        this.props.fetchDrinks();
    }

    render() {
        console.log(this.props.drinkValue);
        return (
            <div>
                <div className="home-container">
                    {!this.state.renderInput 
                    ?
                        <div className="logo-div">
                            <BarName />
                            <button onClick={this.renderInputAndButton} className="render-input-button"> Find your drink </button>
                        </div>
                    :
                        <div className="home-drink-input-container">
                            {/* <form onSubmit={this.props.renderContainer}> */}
                                <input className="active" onChange={this.props.handleChange}/>
                                {this.state.renderInputButton 
                                    ? 
                                        <button onClick={this.fetchData} 
                                                className="home-screen-button" 
                                                type="submit"><FaCocktail 
                                                className="cocktail-icon"/>
                                        </button> 
                                    : 
                                        null
                                }
                            {/* </form> */}
                        </div>
                    }


                </div>
            </div>
        );
    }
}

export default HomeScreen;
// The nested ternary is because the state will be changed after 2 seconds, the button should not render
// before the input is done with animation and that can only be done by changing state
