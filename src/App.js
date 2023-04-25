/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import Error404 from './pages/Error404';
import Card from './components/Card';
import Footer from './components/Footer'

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='*' element={<Error404 />} />
          <Route path="card/:locId" element={<Card />}  />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
