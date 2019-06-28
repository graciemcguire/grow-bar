import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {


  render () {
    return (
      <div className='header-div'>
        <h1> 
          <span role="img" aria-label="martini emoji">🍸</span>
          Working
          <span role="img" aria-label="martini emoji">🍸</span> 
        </h1>
        <form onSubmit={this.props.fetchDrinks}>
          <input value={this.props.drinkValue || ""} onChange={this.props.handleChange} className="drink-input"/>
          <button>find my drink</button>
        </form>
      </div>
    )
  }
}
