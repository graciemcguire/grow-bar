import React, { Component } from 'react';


class HomeScreen extends Component {

    state = {
        renderInput: false
    }

    renderInput = () => {
        this.setState(prevState => ({
            renderInput: !prevState.renderInput
        }))
    }

    renderButton = () => {
        setTimeout(() => {
            return <button> Find My Drink</button>
        }, 2000)
    }


    render() {
        console.log(this.state.renderInput);
        return (
            <div>
                <div className="home-container">
                    {!this.state.renderInput 
                    ?
                        <button onClick={this.renderInput} > Stuff </button>
                    :
                        <div className="home-drink-input-container">
                            <input className="active"/>
                            {this.renderButton()}
                        </div>
                    }


                </div>
            </div>
        );
    }
}

export default HomeScreen;