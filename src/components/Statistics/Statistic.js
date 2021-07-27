import s from './Statistics.module.scss';
import PropTypes from 'prop-types';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.text}>Good:</span>
          {good}
        </li>
        <li className={s.item}>
          <span className={s.text}>Neutral:</span>
          {neutral}
        </li>
        <li className={s.item}>
          <span className={s.text}>Bad:</span>
          {bad}
        </li>
        <li className={s.item}>
          <span className={s.text}>Total:</span>
          {total}
        </li>
        <li className={s.item}>
          <span className={s.text}>Positive feedback:</span>
          {positivePercentage}%
        </li>
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
