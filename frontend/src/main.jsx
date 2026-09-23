import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/skeleton.css'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
import QueryProvider from './config/QueryProvider'

createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
    <Toaster position="top-right" />
     <QueryProvider>
      <App />
    </QueryProvider>
  </Provider>,
)
