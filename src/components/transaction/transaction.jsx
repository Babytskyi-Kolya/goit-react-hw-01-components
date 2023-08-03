import PropTypes from 'prop-types';
import {Item} from './transaction.Styled'

const Transaction = ({id, type, amount, currency}) => {
    return (
        <Item>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </Item>
    )
};

Transaction.prototype = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}

export default Transaction;