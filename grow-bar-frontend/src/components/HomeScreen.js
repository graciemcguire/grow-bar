import React, { Component } from 'react';


class HomeScreen extends Component {

    state = {
        active: false
    }

    addActiveClass = () => {
        this.setState({
            active: true
        })
    }

    getClassName = () => {
        if(this.state.active) return "active";
        else return "";
    }

    render() {
        console.log(this.state.active);
        return (
            <div>
                <div className="home-container">

                    <button onClick={this.addActiveClass} className={this.getClassName()}> Stuff </button>

                </div>
            </div>
        );
    }
}

export default HomeScreen;