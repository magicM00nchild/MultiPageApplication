import logo from './logo.svg';
import './App.css';
import CarouselTileList from './CarouselList/CarouselTileList';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header/>
      </div>
      <div className="App-body">
        <CarouselTileList />
      </div>
    </div>
  );
}

export default App;
