import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <main>
      <h1> League of Babes Refactor</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </main>
  )
}

export default App
