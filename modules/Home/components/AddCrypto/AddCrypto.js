import React, {Component, PropTypes} from 'react'

export default class AddCrypto extends Component {
  render () {
    return (
      <div>
        <input type='text' ref='input'/>
        <button onClick={(e)=> this.handleClick(e)}>Add</button>
      </div>
    )
  }
  handleClick(e) {
    const node = this.refs.input
    const crypto = node.value.trim()
    this.props.onAddClick(crypto)
    node.value=''
  }
}
