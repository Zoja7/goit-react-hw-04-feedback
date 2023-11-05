import css from './Statistics.module.css';

export default function Statistics({ feedback, positivePercentage, total }) {
  const { good, neutral, bad } = feedback;
  return (
    <div className={css.statisticsContainer}>
      <ul className={css.statisticsList}>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          {' '}
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}
