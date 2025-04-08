import React from 'react'
import Register from './components/Register'
import Delete from './components/Delete'
import Update from './components/Update'
import View from './components/View'
const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Delete/>
      <Update/>
      <View/>
    </div>

  )
}

export default App