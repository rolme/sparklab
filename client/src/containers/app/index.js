import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from "../../components/loadingComponent"

const Home = Loadable({ loader: () => import('../home'), loading: Loading })
const Header = Loadable({ loader: () => import('./header'), loading: Loading })
const Footer = Loadable({ loader: () => import('./footer'), loading: Loading })

export default class App extends Component {
  render() {
    return (
      <div id="appContainer" className="appContainer">
        <Header/>
        <div className="pageContainer position-relative bg-light">
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </main>
        </div>
        <Footer/>
      </div>
    )
  }
}
