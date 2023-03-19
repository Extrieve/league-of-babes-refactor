import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Leaderboard from './pages/Leaderboard'
import NotFound from './pages/NotFound'
import Champions from './pages/Champions'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/match" element={<Match />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
