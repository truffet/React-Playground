import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCrypto} from '../../../actions/actions'

import AddCrypto from '../components/AddCrypto'
import CryptoList from '../components/CryptoList'
import Header2 from '../../../components/Header2'

class Home extends Component {
  render () {

    const {dispatch, visibleCryptos} = this.props

    return (
      <div>
        <Header2 title="Add one by one your favorite cryptocurrencies :"/>
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
