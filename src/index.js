/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <div className="blur1" />
    <div className="blur2" />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
