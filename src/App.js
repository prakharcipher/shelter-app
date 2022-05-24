import logo from './logo.svg';
import PropertyCard from './components/PropertyCard/PropertyCard.jsx';
import { HouseDoor, PlusSquare, Gear } from 'react-bootstrap-icons';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="title">Shelter</div>
      </div>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <input type="text" placeholder="Sample text" style={{width: '50%', marginLeft: '2%', marginTop: '4%', padding: '8px'}} />
      <div className="footer">
        <div className="action-buttons">
          <div><HouseDoor style={{color: 'white', height: '25px', width: '25px', opacity: '0.8'}} /></div>
          <div><PlusSquare style={{color: 'white', height: '25px', width: '25px', opacity: '0.8'}} /></div>
          <div><Gear style={{color: 'white', height: '25px', width: '25px', opacity: '0.8'}} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
