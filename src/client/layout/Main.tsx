import React from 'react'
import { Route, Switch } from 'react-router'
import routes from '../../routes/routerConfig'

export const Main = () => {
  return (
    <main style={{ height: '77vh' }}>
      <Switch>
        {routes.map(({ path, component, exact }) => {
          return (
            <Route path={path} exact={exact} component={component} key={path} />
          )
        })}
      </Switch>
    </main>
  )
}
