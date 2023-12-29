import Aeroflot_logo from '../../assets/Aeroflot_logo.svg';
import Air_France_logo from '../../assets/Air_France_logo.svg';
import AirBaltic_logo from '../../assets/AirBaltic_logo.svg';
import Alitalia_CityLiner_logo from '../../assets/Alitalia_CityLiner_logo.svg';
import Brussels_Airlines_logo from '../../assets/Brussels_Airlines_logo.svg';
import Finnair_logo from '../../assets/Finnair_logo.svg';
import KLM_logo from '../../assets/KLM_logo.svg';
import LOT_Polish_Airlines_logo from '../../assets/LOT_Polish_Airlines_logo.svg';
import Pegasus_Airlines_logo from '../../assets/Pegasus_Airlines_logo.svg';
import Turkish_Airlines_logo from '../../assets/Turkish_Airlines_logo.svg';
import FlightSegment from './FlightSegment/FlightSegment';
import classes from './FlightLeg.module.css';


const imageSource: {[key:string]: string} = {
  'Air France': Air_France_logo, 
  'KLM':KLM_logo, 
  'Аэрофлот - российские авиалинии': Aeroflot_logo, 
  'TURK HAVA YOLLARI A.O.': Turkish_Airlines_logo, 
  'Finnair Oyj': Finnair_logo, 
  'Air Baltic Corporation A/S': AirBaltic_logo, 
  'Alitalia Societa Aerea Italiana': Alitalia_CityLiner_logo, 
  'Pegasus Hava Tasimaciligi A.S.': Pegasus_Airlines_logo, 
  'Brussels Airlines': Brussels_Airlines_logo, 
  'LOT Polish Airlines': LOT_Polish_Airlines_logo
} as const;

const FlightLeg = ({ flight, leg }) => {

  return (
    <li key={leg.segments[0].flightNumber} className={classes['flight-leg']}>
      <div className={classes['flight-header']}>
        <img src={imageSource[flight.carrier.caption]} alt="air company logo" />
        <div>
          <p className={classes['flight-price']}>{flight.price.total.amount} ₽</p>
          <p>Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <FlightSegment segments={leg.segments} />
      <button className={classes['flight-btn']}>Выбрать</button>
    </li>
  );
};

export default FlightLeg;
