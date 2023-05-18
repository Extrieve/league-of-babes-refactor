const Home = () => {
  return (
    <div className="home">
      <h1>
        League of Babes
      </h1>
      <p className="home-description">
        Find out who's your favorite Babe across Summoner's Rift 😳
      </p>
      <div className='go'>
        <a href="/match">
          <button className="home-button">
            Find your Babe
          </button>
        </a>
        <a href="/champions">
          <button className="home-button">
            Explore Babes
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;