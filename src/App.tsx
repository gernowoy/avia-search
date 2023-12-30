import dbData from './db/flights.json';
import SideBar from './components/SideBar/SideBar';
import FlightLeg from './components/FlightLeg/FlightLeg';
import { Flights } from './types/types';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // ----------- DATA -----------

  const mockData: Flights = dbData as Flights;
  const [filteredData, setFilteredData] = useState(mockData.result.flights);

  // ----------- SORT -----------
  const [sortBy, setSortBy] = useState('ascending');
  const initialSortedData = sortData(filteredData, sortBy);
  const [sortedData, setSortedData] = useState(initialSortedData);

  function sortData(flights, sortValue) {
    return [...flights].sort((a, b) => {
      if (sortValue === 'ascending') {
        return (
          Number(a.flight.price.total.amount) -
          Number(b.flight.price.total.amount)
        );
      } else if (sortValue === 'descending') {
        return (
          Number(b.flight.price.total.amount) -
          Number(a.flight.price.total.amount)
        );
      } else if (sortValue === 'time') {
        return (
          Number(a.flight.legs[0].duration + a.flight.legs[1].duration) -
          Number(b.flight.legs[0].duration + b.flight.legs[1].duration)
        );
      }
    });
  }

  const handleSortChange = sortMethod => {
    setSortBy(sortMethod);
    const newData = sortData(filteredData, sortMethod);
    setSortedData(newData);
    setRenderFlights([newData[0]]);
  };

  // ----------- FILTER CHECKBOX -----------

  const layovers = [
    ...new Set(
      mockData.result.flights.map(item => {
        return item.flight.legs[0].segments.length - 1;
      }),
    ),
  ].sort((a, b) => b - a);

  const [selectedFilters, setSelectedFilters] = useState(layovers);

  const handleFilterChange = e => {
    setSelectedFilters(prevFilters => {
      if (prevFilters.includes(e)) {
        return prevFilters.filter(filter => filter !== e);
      } else {
        return [...prevFilters, e];
      }
    });
  };

  useEffect(() => {
    console.log(selectedFilters, 'массив фильтров');
    console.log(mockData.result.flights.length, 'всего элементов');

    setFilteredData(
      mockData.result.flights.filter(flight => {
        return (
          selectedFilters.includes(flight.flight.legs[0].segments.length - 1) &&
          selectedFilters.includes(flight.flight.legs[1].segments.length - 1)
        );
      }),
    );
  }, [selectedFilters]);

  useEffect(() => {
    console.log(filteredData.length, 'дата после изменений');

    const newData = sortData(filteredData, sortBy);
    setSortedData(newData);
    console.log(newData[0]);

    if (newData[0]) {
      setRenderFlights([newData[0]]);
    } else {
      setRenderFlights([]);
    }
  }, [filteredData, sortBy]);

  // ----------- FLIGHTS -----------

  const [renderFlights, setRenderFlights] = useState([sortedData[0]]);

  const handleAddFlight = () => {
    setRenderFlights(prevFlights => {
      const nextIndex = prevFlights.length;
      if (nextIndex < sortedData.length) {
        return [...prevFlights, sortedData[nextIndex]];
      }

      return prevFlights;
    });
  };

  return (
    <>
      <SideBar
        onSortChange={handleSortChange}
        sortBy={sortBy}
        layovers={layovers}
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
      />

      <main className="main">
        <ul className="flight-items">
          {renderFlights.length > 0 ? (
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

          {renderFlights.slice(1).map(renderFlight => {
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
          })}

          {renderFlights.length !== sortedData.length && (
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
