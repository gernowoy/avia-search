import dbData from './db/flights.json';
import SideBar from './components/SideBar/SideBar';
import FlightItem from './components/FlightItem/FlightItem';
import { Flights } from './types/types';
import './App.css';

function App() {
  const mockData: Flights = dbData as Flights;

  // const app = mockData.result.flights[0].flight.carrier.caption
  return (
    <>
      <SideBar />
      <main className='main'>
        <ul className='flight-items'>
          <FlightItem key=''/>
        </ul>
      </main>
    </>
  );
}

export default App;
