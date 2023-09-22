import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function App() {
//   return(
//     <a href="https://youtube.com" target='_blank'>hello youtube</a>
//   )
// }
const Element=React.createElement(
  'a',
  {href:"https://youtube.com",target:"_blank"},
  "hello youtybe"
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {Element}

  </React.StrictMode>
  
  
)
