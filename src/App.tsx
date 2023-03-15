import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Match from './pages/Match'
import Leaderboard from './pages/Leaderboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<h1>Champions</h1>} />
        <Route path="/match" element={<Match />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
