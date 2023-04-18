import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Leaderboard from './pages/Leaderboard'
import NotFound from './pages/NotFound'
import Champions from './pages/Champions'
import Navbar from './components/Navbar'
import ChampionPage from './pages/ChampionPage'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/champions/:id" element={<ChampionPage />} />
        <Route path="/match" element={<Match />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
