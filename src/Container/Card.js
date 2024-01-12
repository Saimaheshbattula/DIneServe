/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber, setorderno} from '../Action';

const Card = ({filter_name,addorder,setorderno,orderno}) => {
    const [table_number,settablenumber] = React.useState(1)
    const [data,setData] = React.useState([]);
    const [cloneData,setCloneData] = React.useState([]);
    const [quantity, setQuantity] = React.useState({});

    const handleDecrease = (itemId) => {
        const updatedQuantity = { ...quantity };
        if (updatedQuantity[itemId] > 0) {
        updatedQuantity[itemId] -= 1;
        setQuantity(updatedQuantity);
        }
    };

    const handleIncrease = (itemId) => {
        const updatedQuantity = { ...quantity };
        updatedQuantity[itemId] = (updatedQuantity[itemId] || 0) + 1;
        setQuantity(updatedQuantity);
    };

    React.useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response => response.json()
        ).then(
            json => {
                setData(json.items);
                setCloneData(json.items);
            }
        )
    },[])

    React.useEffect(() => {
        if(filter_name !== "All Items") {
            let specific = cloneData.filter(item => item.category===filter_name);
            setData(specific);
        }
        else{
            setData(cloneData);
        }
    },[filter_name])

    const Handler = async (id,name,prize,quantity,url,orderno,category) =>{
        if(quantity>0){
        setorderno(orderno+1);
        setQuantity({});
        await addorder(id,name,prize,quantity,table_number,url,orderno,category)
        alert("Order Placed Successfully");
        }else{
            alert("Please Select Item Quantity");
        }
    }

  return (
    <div>
        <center>
            {data.length > 0?
            <div className='container'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                            <div className='card' style={{width:"18rem",padding:"3px"}}>
                            <img src={item.url} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <div className='card-text'>Rs.{item.prize}</div>
                                <div className="quantity-section">
                                    <button
                                        className="btn"
                                        style={{backgroundColor : '#FF3632', padding : '1px 8px', fontWeight: 'bold'}}
                                        onClick={() => handleDecrease(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className='card-title'> Quantity: {quantity[item.id] || 0} </span>
                                    <button
                                        className="btn"
                                        style={{backgroundColor : '#00cc00', padding : '1px 5px', fontWeight: 'bold'}}
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className='btn btn-primary' onClick={()=> Handler(item.id,item.name,item.prize,quantity[item.id],item.url,orderno,item.category)}>
                                    Add
                                </button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            :
            <div className='spinner-border text-primary'>

            </div>
        }
        </center> 
    </div>
  )
}

const mapStateToProps = state =>({
    filter_name : state.filterreducer.filter_name,
    orderno : state.ordernoreducer.orderno
})

export default connect(mapStateToProps,{addorder,resetfilter,resettablenumber,setorderno})(Card);