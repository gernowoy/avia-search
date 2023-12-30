import clockIcon from '../../../assets/clock.svg';
import classes from './FlightSegment.module.css';
import {
  getFlightDate,
  getFlightTime,
  getFlightDay,
  getFlightMonth,
  getFlightDurationTime,
} from '../../../helpers/convertData';

const FlightSegment = ({ segments }) => {
  const layoverCount = segments.length - 1;

  const flightSegment = segments.map(segment => {
    // DEPARTURE
    const departureCity = segment?.departureCity?.caption;
    const departureAirport = segment.departureAirport.caption;
    const departureAirportUid = segment.departureAirport.uid;
    const departureDate = segment.departureDate;

    // ARRIVAL
    const arrivalCity = segment?.arrivalCity?.caption;
    const arrivalAirport = segment.arrivalAirport.caption;
    const arrivalAirportUid = segment.arrivalAirport.uid;
    const arrivalDate = segment.arrivalDate;

    const travelDuration = segment.travelDuration;
    const airline = segment.airline.caption;

    return (
      <div key={segment.flightNumber} className={classes['flight-segment']}>
        <p className={classes['flight-breaker-line']}></p>
        {/* FIRST FLIGHT */}
        <div className={classes['flight-route']}>
          <p>
            {departureCity}, {departureAirport}{' '}
            <span>({departureAirportUid})</span>
          </p>
          <p> → </p>
          <p>
            {arrivalCity}, {arrivalAirport} <span>({arrivalAirportUid})</span>
          </p>
        </div>
        <div className={classes['flight-time']}>
          <div>
            {getFlightTime(departureDate)}{' '}
            <span>
              {getFlightDate(departureDate)} {getFlightMonth(departureDate)}{' '}
              {getFlightDay(departureDate)}
            </span>
          </div>
          <div>
            <img src={clockIcon} alt="clock" />
            {getFlightDurationTime(travelDuration)}
          </div>
          <div>
            <span>
              {getFlightDate(arrivalDate)} {getFlightMonth(arrivalDate)}{' '}
              {getFlightDay(arrivalDate)}
            </span>{' '}
            {getFlightTime(arrivalDate)}
          </div>
        </div>
        {/* LAYOVER */}
        <p
          className={
            layoverCount > 0
              ? classes['flight-layover']
              : classes['flight-layover-line']
          }
        >
          {layoverCount > 0 && <strong>{layoverCount} пересадка</strong>}
        </p>
        {/* AIRLINE */}
        <div className={classes['flight-airline']}>
          Рейс выполняет: {airline}
        </div>
      </div>
    );
  });

  return flightSegment;
};

export default FlightSegment;
