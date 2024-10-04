import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import DummyPage from './component/DummyPage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dummy' element={<DummyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App