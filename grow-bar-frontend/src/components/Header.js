import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {


  render () {
    return (
      <div className='header-div'>
        <h1> 🍸 working 🍸 </h1>
        <form onSubmit={this.props.fetchDrinks}>
          <label>drink?</label>
          <input value={this.props.drinkValue || ""} onChange={this.props.handleChange}/>
          <button>find my drink</button>
        </form>
      </div>
    )
  }
}
