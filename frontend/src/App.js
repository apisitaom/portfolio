// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Login = React.lazy(() => import('./views/Pages/Login'))
const Album = React.lazy(() => import('./views/Pages/Album'))
const AlbumAdd = React.lazy(() => import('./views/Pages/Album/Add'))
const Owner = React.lazy(() => import('./views/Pages/Owner'))
const OwnerAdd = React.lazy(() => import('./views/Pages/Owner/Add'))
const OwnerEdit = React.lazy(() => import('./views/Pages/Owner/Edit'))
const Result = React.lazy(() => import('./views/Pages/Result'))
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>                    
            <Route exact path = '/login' name="Login Page" render={props => <Login {...props}/> } />
            <Route exact path = '/album' name="Album Page" render={props => <Album {...props}/> } />
            <Route exact path = '/album/add' name="Album Add Page" render={props => <AlbumAdd {...props}/> } />
            <Route exact path = '/' name="Owner Page" render={props => <Owner {...props}/> } />
            <Route exact path = '/owner/add' name="Owner Add Page" render={props => <OwnerAdd {...props}/> } />
            <Route exact path = '/owner/edit' name="Owner Edit Page" render={props => <OwnerEdit {...props}/> } />
            <Route exact path = '/result' name="Result Page" render={props => <Result {...props}/> } />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

