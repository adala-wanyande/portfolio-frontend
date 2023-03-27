import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'

const App = () => {
  const [pageState, setPageState] = useState('Home')

  const handlePageChange = (page) => {
    setPageState(page)
  }

  if (pageState === 'Home') {
    return (
      <Home handlePageChange = {handlePageChange}></Home>
    )
  }
}

export default App;
