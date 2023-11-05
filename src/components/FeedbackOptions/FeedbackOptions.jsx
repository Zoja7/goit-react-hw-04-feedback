import css from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.optionsContainer}>
      <ul className={css.optionsList}>
        {options.map(option => (
          <li key={option}>
            <button name={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
