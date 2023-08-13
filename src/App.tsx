import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/App-Header'
import AppFooter from './components/App-Footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="main">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
}

export default App
