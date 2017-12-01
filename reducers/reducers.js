import {combineReducers} from 'redux'
import {ADD_CRYPTO} from '../actions/actions'

function crypto(state, action) {
  switch(action.type) {

    case ADD_CRYPTO:
      return {
        id: action.id,
        cryptoName: action.cryptoName
      }

    default:
      return state
  }
}

function cryptoList(state=[], action) {
  switch(action.type) {

    case ADD_CRYPTO:
      return [
        ...state,
        crypto(undefined, action)
      ]

    default:
      return state
  }
}

const cryptoApp = combineReducers({
  cryptoList
})

export default cryptoApp
