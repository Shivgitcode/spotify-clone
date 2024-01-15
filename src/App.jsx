
import { useContext } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import Header from './components/Sidebar/Header'

function App() {
  // const {loading}=useContext(AppContext)
  return (
    <div className="bg-black">
      <div>
        <Header></Header>
        <Sidebar></Sidebar>

      </div>
      
      

    </div>
  )

  // console.log(loading)

}

export default App
