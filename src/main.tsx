import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TasksContextProvider } from './hooks/useTasks'
import { GlobalStyles } from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
)
