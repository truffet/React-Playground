import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCrypto} from '../../../actions/actions'

import AddCrypto from '../components/AddCrypto'
import CryptoList from '../components/CryptoList'

class Home extends Component {
  render () {

    const {dispatch, visibleCryptos} = this.props

    return (
      <div>
        <AddCrypto onAddClick={cryptoName => dispatch(addCrypto(cryptoName))}/>
        <CryptoList cryptolist={visibleCryptos}/>
      </div>
    )
  }
}

function select(state) {
  return {
    visibleCryptos: state.cryptoList
  }
}

export default connect(select)(Home)
