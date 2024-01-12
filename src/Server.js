/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux'; 
import Header2 from './Container/Header2';
import { updateOrderStatus } from './Action';

const Server = ({ list, updateOrderStatus }) => {
  const [message, setMessage] = React.useState({});

  const Handler = (orderno) => {
    const updatedMessage = { ...message };
    const currentItem = list.find((item) => item.orderno === orderno);

    if (currentItem) {
      if (updatedMessage[orderno] === 'Preparing') {
        updatedMessage[orderno] = 'Prepared';
      } else if (updatedMessage[orderno] === 'Prepared') {
        updatedMessage[orderno] = 'Served';
      } else {
        updatedMessage[orderno] = 'Preparing';
      }

      setMessage(updatedMessage);
      updateOrderStatus(orderno, updatedMessage[orderno]);
    }
  };

  return (
    <div>
      <Header2 />
      <center>
        {list.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            <h4 style={{ fontSize: '24px', marginRight: '10px' }}> Confirmed Orders :</h4>
          </div>
        )}
        {list.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {list.map((item) => (
                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                  <div className='card' style={{ width: '18rem', padding: '3px' }}>
                    <img src={item.url} className='card-img-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'> Table Number :{item.table_number}</div>
                      <div className='card-text'> Quantity : {item.quantity}</div>
                      <button
                        className={`btn ${
                          message[item.orderno] === 'Prepared'
                            ? 'btn-warning'
                            : message[item.orderno] === 'Served'
                            ? 'btn-success'
                            : 'btn-secondary'
                        }`}
                        onClick={() => Handler(item.orderno)}
                      >
                        {message[item.orderno] || 'Preparing'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='h4'>No Order Placed Yet</div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.confirmorderreducer,
});


export default connect(mapStateToProps, {updateOrderStatus})(Server);
