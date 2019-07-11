import React, { Component } from 'react';
import {FaCocktail} from "react-icons/fa";
import BarName from "./BarName"


class HomeScreen extends Component {

    state = {
        renderInput: false
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


    fetchData = () => {
        this.props.renderContainer();
        this.props.fetchDrinks();
    }

    render() {
        return (
            <div>
                <div className="home-container">

                        <div className="logo-div">
                            <BarName />
                            <form className="home-form">
                                <input className="active" onChange={this.props.handleChange}/>
                                <button onClick={this.fetchData} className="render-input-button"> Find your drink </button>
                            </form>
                        </div>

                </div>
            </div>
        );
    }
}

export default HomeScreen;
// The nested ternary is because the state will be changed after 2 seconds, the button should not render
// before the input is done with animation and that can only be done by changing state

{/* <button onClick={this.fetchData} className="home-screen-button" type="submit"> <FaCocktail className="cocktail-icon"/></button>  */}