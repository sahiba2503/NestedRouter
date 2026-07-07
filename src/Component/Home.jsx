import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>parent component</h2>
      <Outlet />
    </div>
  )
}

export default Home


