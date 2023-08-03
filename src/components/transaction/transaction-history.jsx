import transactions from '../../transactions.json';
import Transaction from './transaction';
import { Wrap, Thead } from './transaction-history.Styled'

const TransactionHistory = () => {
    return (
        <Wrap class="transaction-history">
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <tbody>
    {transactions.map(transaction => (
        <Transaction
        key = {transaction.id}
        type = {transaction.type}
        amount = {transaction.amount}
        currency = {transaction.currency}
        />
    ))}
  </tbody>
</Wrap>
    )
}

export default TransactionHistory;