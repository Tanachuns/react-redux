import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <Provider store={store}>
    <BrowserRouter basename='/admin'>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
