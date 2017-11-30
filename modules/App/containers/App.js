import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from '../../Router'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Router/>
        <Footer/>
      </div>
    )
  }
}

export default App
