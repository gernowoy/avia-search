import classes from './SideBar.module.css';

const SideBar = ({
  onSortChange,
  sortBy,
  layovers,
  handleLayoverFilter,
  layoverFilters,
  priceFilters,
  handlePriceFilter,
  initialAirlines,
  selectedAirlines,
  handleAirlineFilter,
}) => {
  // --------- SORT -----------
  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <aside className={classes['sidebar']}>
      <form className={classes['sidebar-sort']}>
        <p>Сортировать</p>
        <label>
          <input
            type="radio"
            name="sort"
            value="ascending"
            onChange={handleSortChange}
            checked={sortBy === 'ascending'}
          />
          <span>&nbsp;- по возрастанию цены</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="descending"
            onChange={handleSortChange}
            checked={sortBy === 'descending'}
          />
          <span>&nbsp;- по убыванию цены</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="time"
            onChange={handleSortChange}
            checked={sortBy === 'time'}
          />
          <span>&nbsp;- по времени в пути</span>
        </label>
      </form>
      <form className={classes['sidebar-filter']}>
        <p>Фильтровать</p>
        {layovers.map(layover => (
          <label key={layover}>
            <input
              type="checkbox"
              value={layover}
              onChange={() => handleLayoverFilter(layover)}
              checked={layoverFilters.includes(layover)}
            />
            <span>
              &nbsp;- {layover !== 0 ? `${layover} пересадка` : 'без пересадок'}
            </span>
          </label>
        ))}
      </form>
      <form className={classes['sidebar-price']}>
        <p>Цена</p>
        <label>
          <span>От&nbsp;</span>
          <input
            type="number"
            min={0}
            value={priceFilters[0]}
            onChange={event => handlePriceFilter(event, 'min')}
          />
        </label>
        <label>
          <span>До&nbsp;</span>
          <input
            type="number"
            min={0}
            value={priceFilters[1]}
            onChange={event => handlePriceFilter(event, 'max')}
          />
        </label>
      </form>
      <form className={classes['sidebar-companies']}>
        <p>Авиакомпании</p>
        {initialAirlines.map((airline, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedAirlines.includes(airline)}
              onChange={e => handleAirlineFilter(e.target.checked, airline)}
            />
            <span>&nbsp; - {airline.length > 15 ? `${airline.slice(0, 15)}...` : airline}.</span>
          </label>
        ))}
      </form>
    </aside>
  );
};

export default SideBar;
