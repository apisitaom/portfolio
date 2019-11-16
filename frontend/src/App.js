import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Resume = React.lazy(() => import('./views/Pages/Resume/Resume'))
const ResumeAdd = React.lazy(() => import('./views/Pages/Resume/Add/ResumeAdd'))
const Owner = React.lazy(() => import('./views/Pages/Owner'))
const OwnerAdd = React.lazy(() => import('./views/Pages/Owner/Add'))
const OwnerEdit = React.lazy(() => import('./views/Pages/Owner/Edit'))
const Product = React.lazy(() => import('./views/Pages/Product/Product'))
const AbountMe = React.lazy(() => import('./views/Pages/Abountme'))
const Photo = React.lazy(() => import('./views/Pages/Photo'))
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>                    
            <Route exact path = '/resume' name="Resume Page" render={props => <Resume {...props}/> } />
            <Route exact path = '/resume/add' name="Resume Add Page" render={props => <ResumeAdd {...props}/> } />
            <Route exact path = '/' name="Owner Page" render={props => <Owner {...props}/> } />
            <Route exact path = '/owner/add' name="Owner Add Page" render={props => <OwnerAdd {...props}/> } />
            <Route exact path = '/owner/edit' name="Owner Edit Page" render={props => <OwnerEdit {...props}/> } />
            <Route exact path = '/product' name="Product Page" render={props => <Product {...props}/> } />
            <Route exact path = '/abountme' name="AbountMe Page" render={props => <AbountMe {...props}/> } />
            <Route exact path = '/photo' name="Photo Page" render={props => <Photo {...props}/> } />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

