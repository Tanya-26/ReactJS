import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import ListDisplay from './components/ListDisplay.jsx'
// import ArrayAddition from './components/UpdateNumber.jsx'
import "bootstrap/dist/css/bootstrap.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ArrayAddition/> */}
    {/* <ListDisplay/> */}
  </StrictMode>,
)
