import React from 'react'
import { Route, Switch } from 'react-router'
import Auth from '../Auth'
import Home from '../Home'
import ProgramsList from '../Programs'

export const Main = () => {
  return (
    <main style={{ height: '77vh' }}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/programs" component={ProgramsList}></Route>
        <Route path="/auth" component={Auth}></Route>
      </Switch>
    </main>
  )
}
