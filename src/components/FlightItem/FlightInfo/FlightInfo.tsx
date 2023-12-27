import clockIcon from '../../../assets/clock.svg';
import classes from './FlightInfo.module.css';

const FlightInfo = () => {
  return (
    <div className={classes['flight-info']}>
      {/* DEPARTURE FROM */}
      <div className={classes['flight-route']}>
        Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span> → ЛОНДОН, Лондон, Хитроу{' '}
        <span>(LHR)</span>
      </div>
      <div className={classes['flight-time']}>
        <div>
          20:40 <span>18 авг. вт</span>
        </div>
        <div>
          <img src={clockIcon} alt="clock" />
          14 ч 45 мин
        </div>
        <div>
          <span>19авг. ср</span> 09:25
        </div>
      </div>
      <p className={classes['flight-change']}>1 пересадка</p>
      <div className={classes['flight-aircompany']}>
        Рейс выполняет: LOT polish Airlines
      </div>

      {/* BREAKLINE */}
      <p className={classes['flight-breaker-line']}></p>

      {/* DEPARTURE TO */}
      <div className={classes['flight-route']}>
        Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span> → ЛОНДОН, Лондон, Хитроу{' '}
        <span>(LHR)</span>
      </div>
      <div className={classes['flight-time']}>
        <div>
          20:40 <span>18 авг. вт</span>
        </div>
        <div>
          <img src={clockIcon} alt="clock" />
          14 ч 45 мин
        </div>
        <div>
          <span>19авг. ср</span> 09:25
        </div>
      </div>
      <p className={classes['flight-change']}>1 пересадка</p>
      <div className={classes['flight-aircompany']}>
        Рейс выполняет: LOT polish Airlines
      </div>

      <button className={classes['flight-btn']}>Выбрать</button>
    </div>
  );
};

export default FlightInfo;
