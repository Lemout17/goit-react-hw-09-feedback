import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.btn}
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>

      <button
        type="button"
        className={s.btn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        type="button"
        className={s.btn}
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
