import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import SideBar from './SideBar'

function Dashboard() {
  return (
    <div>
        <Header />
        <SideBar /> 
        <MainContent/>
    </div>
  )
}

export default Dashboard