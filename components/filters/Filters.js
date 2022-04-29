import styles from './Filters.module.scss';

const Filters = ({ category, setCategory, categoryLink }) => {
  return (
    <ul className={styles.filterProducts}>
      <li>
        <button className={!category ? 'btnS isActive' : 'btnS'} onClick={() => setCategory(null)}>
          View All
        </button>
      </li>
      {categoryLink.map((cat) => {
        const isActive = cat.name.toLowerCase() === category;
        return (
          <li key={cat.id}>
            <button
              className={isActive ? 'btnS isActive' : 'btnS'}
              onClick={() => setCategory(cat.name.toLowerCase())}
            >
              {cat.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
