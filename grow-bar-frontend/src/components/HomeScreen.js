import React, { Component } from 'react';


class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div className="home-container">

                    <button onClick={this.props.renderContainer}> Stuff </button>
                </div>
            </div>
        );
    }
}

export default HomeScreen;