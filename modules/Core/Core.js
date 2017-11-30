import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'

class Core extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
  }
}

export default Core
