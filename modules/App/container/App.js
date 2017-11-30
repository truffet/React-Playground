// the app container sets the main layout for the app

import React, {Component} from 'react'

import Core from '../../Core'
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Core/>
        <Footer/>
      </div>
    )
  }
}

export default App
