import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'

import App from './modules/App'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import cryptoApp from './reducers/reducers'

let store = createStore(cryptoApp)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter><App/></HashRouter>
  </Provider>,
  document.getElementById('app')
);
