
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Components/useContext/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <App />
  </ContextProvider>
  

)
