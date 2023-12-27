import './App.css';
import dbData from './db/flights.json';
import { Flights } from './types/types';

function App() {
  const mockData: Flights = dbData as Flights;

  return <>{mockData.result.flights[0].flight.carrier.caption}</>;
}

export default App;
