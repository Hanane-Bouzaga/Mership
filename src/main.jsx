import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Login from './Auth/Login.jsx'
import Register from './Auth/Register.jsx'
import ForgotPass from './Auth/ForgotPass.jsx'
import VerificationCode from './Auth/VerificationCode.jsx'
import ConfirmPass from './Auth/ConfirmPass.jsx'
import Home from './Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
