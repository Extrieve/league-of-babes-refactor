import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Leaderboard from './pages/Leaderboard'
import NotFound from './pages/NotFound'
import Champions from './pages/Champions'
import Navbar from './components/Navbar'

function App() {
  let version: any;
  async function getVersion(): Promise<string> {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json').then((response) => response.json())
    const version = response[0];
    
    return Promise.resolve(version);
  }
  getVersion().then((version) => {
    console.log(version)
  })
  
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions version={version} />} />
        <Route path="/match" element={<Match />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
