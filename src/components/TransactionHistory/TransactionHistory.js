import PropTypes from 'prop-types';
import { History, TableName, TableTr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <History>
  <thead>
    <tr>
      <TableName>Type</TableName>
      <TableName>Amount</TableName>
      <TableName>Currency</TableName>
    </tr>
  </thead>
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <TableTr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </TableTr>
     ))}
   </tbody>
 </History>
    ); 
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};