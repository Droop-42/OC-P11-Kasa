import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import About from './pages/About';
import Error404 from './pages/Error404';
import Card from './components/Card';

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path='*' element={<Error404 />} />
          <Route path="Card/:locId" element={<Card />}  />
        </Route>
      </Routes>
    </Router> 
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
