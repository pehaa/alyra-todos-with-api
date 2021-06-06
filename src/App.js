import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./pages/Home"
import Account from "./pages/Account"


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Account' component={Account} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
