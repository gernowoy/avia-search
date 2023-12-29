import dbData from './db/flights.json';
import SideBar from './components/SideBar/SideBar';
import FlightLeg from './components/FlightLeg/FlightLeg';
import { Flights } from './types/types';
import './App.css';
import { useState } from 'react';

function App() {
  const mockData: Flights = dbData as Flights;
  const [filteredData, setFilteredData] = useState(mockData.result.flights);

  const [renderFlights, setRenderFlights] = useState([filteredData[0]]);

  const handleAddFlight = () => {
    setRenderFlights(prevFlights => {
      const nextIndex = prevFlights.length;
      if (nextIndex < filteredData.length) {
        return [...prevFlights, filteredData[nextIndex]];
      }

      return prevFlights;
    });
  };

  // ----------- Input Filter -----------

  // const app = mockData.result.flights[0].flight.carrier.caption;

  // ----------- Sort -----------

  return (
    <>
      <SideBar />
      <main className="main">
        <ul className="flight-items">
          {renderFlights ? (
            <>
              <FlightLeg
                flight={renderFlights[0].flight}
                leg={renderFlights[0].flight.legs[0]}
              />
              <FlightLeg
                flight={renderFlights[0].flight}
                leg={renderFlights[0].flight.legs[1]}
              />
            </>
          ) : (
            <div>ПЕРЕЛЕТЫ НЕ НАЙДЕНЫ</div>
          )}

          {renderFlights.map((renderFlight, i) => {
            if (i > 0) {
              return (
                <>
                  <FlightLeg
                    flight={renderFlight.flight}
                    leg={renderFlight.flight.legs[0]}
                  />
                  <FlightLeg
                    flight={renderFlight.flight}
                    leg={renderFlight.flight.legs[1]}
                  />
                </>
              );
            }
          })}

          {renderFlights.length !== filteredData.length && (
            <button className="btn mb" onClick={handleAddFlight}>
              Показать еще
            </button>
          )}
        </ul>
      </main>
    </>
  );
}

export default App;
