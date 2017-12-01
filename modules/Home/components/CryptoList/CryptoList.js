import React from 'react'
import CryptoItem from '../CryptoItem'

const CryptoList = (props) => (
  <div>
    <ul>
      {props.cryptolist.map(crypto =>
        <CryptoItem key={crypto.id} {...crypto} />
      )}
    </ul>
  </div>
)

export default CryptoList
