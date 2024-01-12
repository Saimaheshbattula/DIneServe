/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header2 from './Container/Header2';

const Counter = ({ list , bills }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [billstatus, setBillStatus] = useState('Not Paid');

  const handleToggle = (index) => {
    const newExpandedRows = [...expandedRows];
    if (newExpandedRows.includes(index)) {
      newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
    } else {
      newExpandedRows.push(index);
    }
    setExpandedRows(newExpandedRows);
  };

  const Handler = () => {
    if (billstatus === 'Not Paid') {
      setBillStatus('Paid');
    } else {
      setBillStatus('Not Paid');
    }
  };

  return (
    <div>
      <Header2 />
      <center>
        <h2>Order Details</h2>
        <table style={{ width: '80%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ background: '#f2f2f2' }}>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Order No</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Table No</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Total Bill</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Payment Status</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((cash) =>(
              <React.Fragment>
                <tr>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>1</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{cash.table_number}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{cash.bill}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                    <button
                      onClick={Handler}
                      style={{
                        border: 'none',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        outline: 'none',
                      }}
                    >
                      {billstatus === 'Not Paid' ? '❌' : '✅'}
                    </button>
                  </td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'center', padding: '8px', cursor: 'pointer' }}>
                    <button onClick={() => handleToggle(list.length)}>
                      {expandedRows.includes(list.length) ? '▲' : '▼'}
                    </button>
                  </td>
                </tr>
                {expandedRows.includes(list.length) && (
                  <tr>
                    <thead>
                      <tr style={{ background: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Item Name</th>
                        <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Prize</th>
                        <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Quantity</th>
                        <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Amount</th>
                      </tr>
                    </thead>
                    {list.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.name}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.prize}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.quantity}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.quantity * item.prize}</td>
                      </tr>
                    ))}
                  </tr>
                )}
              </React.Fragment>
              ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.confirmorderreducer,
  bills: state.billreducer
});

export default connect(mapStateToProps)(Counter);
