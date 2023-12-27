import classes from './SideBar.module.css';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className={classes['sidebar']}>
      <form className={classes['sidebar-sort']}>
        <p>Сортировать</p>
        <label>
          <input type="radio" name="sort"/>
          <span>&nbsp;- по возрастанию цены</span>
        </label>
        <label>
          <input type="radio" name="sort"/>
          <span>&nbsp;- по убыванию цены</span>
        </label>
        <label>
          <input type="radio" name="sort" />
          <span>&nbsp;- по времени в пути</span>
        </label>
      </form>
      <form className={classes['sidebar-filter']}>
        <p>Фильтровать</p>
        <label>
          <input type="checkbox" name="filter"/>
          <span>&nbsp;- 1 пересадка</span>
        </label>
        <label>
          <input type="checkbox" name="filter"/>
          <span>&nbsp;- без пересадок</span>
        </label>
      </form>
      <form className={classes['sidebar-price']}>
        <p>Цена</p>
        <label>
          <span>От&nbsp;</span>
          <input type="number" name="min-price" min={0}/>
        </label>
        <label>
          <span>До&nbsp;</span>
          <input type="number" name="max-price" min={0}/>
        </label>
      </form>
      <form className={classes['sidebar-companies']}>
        <p>Авиакомпании</p>
        <label>
          <input type="checkbox" name="" min={0}/>
          <span>&nbsp; - LOT Polish Airlines от 21049p.</span>
        </label>

      </form>
    </aside>
  );
};

export default SideBar;
