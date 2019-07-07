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


    render() {
        console.log(this.state.renderInput);
        return (
            <div>
                <div className="home-container">
                    {!this.state.renderInput 
                    ?
                        <button onClick={this.renderInput} > Stuff </button>
                    :
                        <input className="active"/>
                    }


                </div>
            </div>
        );
    }
}

export default HomeScreen;