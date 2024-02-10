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
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
      <Outlet />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  )
}

export default App
