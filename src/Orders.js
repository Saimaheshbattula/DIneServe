/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addbill, confirmorder, removeorder } from './Action'
import Header2 from './Container/Header2'
import QRCode from 'qrcode.react';

const Orders = ({list,removeorder,addbill,confirmorder,confirmlist}) => {
  const [bill,setbill] = React.useState(0);
  const [qrCodeData, setQRCodeData] = React.useState('');
  const [preparationTime, setPreparationTime] = React.useState(0); // State to store preparation time
  const [progress, setProgress] = React.useState(0);
  
  useEffect(() => {
    // Calculate total bill
    const totalBill = list.reduce((acc, item) => acc + item.prize * item.quantity, 0);
    setbill(totalBill);

    let time = 0;
    let maxtime = 0;
    for (const item of confirmlist) {
      if (item.category === 'Pizza') {
        time = 15;
      } else {
        time = 10;
      }
      if(time>maxtime){
        maxtime = time;
      }
    }
    setPreparationTime(maxtime);

    const paymentUrl = 'https://www.instamojo.com/@giridharpraveendaggupati/l24fd634000c8415481c7926fd74cbca2/';
    setQRCodeData(paymentUrl);
  }, [list, confirmlist]);

  const Handler = async (no) =>{
        await removeorder(no);
        alert("Your order is cancelled")
  }

  const ConfirmHandler = async (bill) => {
    let table_number = null;
    if (list.length > 0) {
      for (const item of list) {
        table_number = item.table_number;
        await confirmorder(item.id, item.name, item.prize, item.quantity, 1, item.url, item.orderno,item.category);
        await removeorder(item.orderno);
      }
      await addbill(table_number, bill);
      alert("Your order is confirmed");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < preparationTime) {
        setProgress(progress + (1/60));
      }
    }, 1000); // Update progress every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [progress, preparationTime]);

  return (
    <div>
        <Header2 />
        <center>
            {confirmlist.length > 0&&
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
              <h4 style={{ fontSize: '24px', marginRight: '10px' }}> Confirmed Orders :</h4>
            </div>
            }
            {confirmlist.length > 0&&
                <div className='container'>
                    <div className='row'>
                        {confirmlist.map((item) => (
                            <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                                <div className='card' style={{width:"18rem",padding:"3px"}}>
                                <img src={item.url} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text'> Rs.{item.prize}</div>
                                    <div className='card-text'> Quantity : {item.quantity}</div>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            }
            <br></br>
            {preparationTime > 0 && (
              <div>
                <h4 style={{ fontSize: '24px', marginRight: '10px' }}>Preparation Time : {progress.toFixed(0)} min / {preparationTime} min</h4>
                <progress style={{height : '30px'}} value={progress} max={preparationTime}></progress>
              </div>
            )}
            {bill > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                <h4 style={{ fontSize: '24px', marginRight: '10px' }}>Please Confirm Your Order :</h4>
                <button className='btn btn-primary' style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} onClick={()=> ConfirmHandler(bill)}>
                  Confirm
                </button>
              </div>
              )
            }
            {list.length > 0 &&
            <div className='container'>
                <div className='row'>
                    {list.map((item) => (
                        <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                            <div className='card' style={{width:"18rem",padding:"3px"}}>
                            <img src={item.url} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <div className='card-text'> Rs.{item.prize}</div>
                                <div className='card-text'> Quantity : {item.quantity}</div>
                                <button className='btn ' style={{background : 'red',color:'white',textDecoration:'none',fontSize: '14px'}} onClick={()=> Handler(item.orderno)}>
                                    Cancel</button>
                            </div>
                            </div>
                        </div>
                    ))}
                    <div>
                      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>
                        Total Amount : {bill}
                      </h1>
                    </div>
                    {qrCodeData && (
                      <div>
                        <h2>Scan the QR Code for Payment:</h2>
                        <QRCode value={qrCodeData} size={200} />
                      </div>
                    )}
                </div>

            </div>
        }
        {(list.length === 0 && confirmlist.length === 0) && <div className='h4'>No Order Placed Yet</div>}
        </center>
    </div>
  )
}

const mapStateToProps = state => ({
  list : state.orderreducer,
  confirmlist : state.confirmorderreducer
})

export default connect(mapStateToProps, {removeorder,addbill,confirmorder})(Orders)