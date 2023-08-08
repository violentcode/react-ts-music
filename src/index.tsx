import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assects/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback="加载中......">
        <App />
      </Suspense>
    </Provider>
  </HashRouter>
)
