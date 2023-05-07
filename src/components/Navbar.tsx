import Champion from "../data/iChampion";

function Navbar(props: any) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          League of Legends
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/champions">
              Champions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/match">
              Match
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/leaderboard">
              Leaderboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;