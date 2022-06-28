
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './request';
import "./Row.css"

function App() {


  return (
    <div className="App">
      {/* Nav */}
      {/* Banner */}
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNowplaying} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchToprated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowplaying} />
      <Row title="DC Universe" fetchUrl={requests.fetchDC} />
      <Row title="Marvel Universe" fetchUrl={requests.fetchMarvel} />
    </div>
  );
}

export default App;
