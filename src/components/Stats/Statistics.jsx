import PropTypes from 'prop-types';
import { Stat, Label } from './Statistics.Styled';
// import { User, Photo, Name, Tag, Location, Stats, IconStat, Label, Quantity } from '../Profile/User.styled';

const colors = {
  0: 'red',
  1: 'blue',
  2: 'pink', 
  3: 'green',
  4: 'purple'
};

const Statistic = ({id, label, percentage, index}) => {
    return (
    <Stat  className="item" id={id}>
      <Label className="label">{label} </Label>
      <Label style={{backgroundColor: colors[index]}} className="percentage">{percentage} %</Label>
    </Stat>
    )
};

Statistic.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }

export default Statistic;