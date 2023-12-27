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
import FlightInfo from './FlightInfo/FlightInfo';

import classes from './FlightItem.module.css';

const FlightItem = () => {
  return (
    <li className={classes['flight-item']}>
      <div className={classes['flight-header']}>
        <img src={LOT_Polish_Airlines_logo} alt="air company logo" />
        <div>
          <p className={classes['flight-price']}>21049 ₽</p>
          <p>Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <FlightInfo />
    </li>
  );
};

export default FlightItem;
