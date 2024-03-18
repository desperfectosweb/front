import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import axios from 'axios'

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleViewSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  document.documentElement.style.setProperty('--desperfectos', 'linear-gradient(180deg, rgba(11,239,144,1) 0%, rgba(75,162,207,1) 100%)')

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const response = await axios.get('/api/languages')
  //   //   console.log(response)
  //   // }

  //   // fetchData()
  // })

  return (
    <div className="app-body">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
      <div className='router-outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
