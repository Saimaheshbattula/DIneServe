export const settablenumber = (value) => async dispatch =>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value
    })
}

export const resettablenumber = () => async dispatch =>{
    dispatch({
        type : "RESETTABLENUMBER"
    })
}

export const setfilter = (value) => async dispatch =>{
    dispatch({
        type : "SETFILTER",
        payload : value
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type : "RESETFILTER"
    })
}

export const addorder = (id,name,prize,quantity,table_number,url,orderno,category) => async dispatch =>{
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            prize:prize,
            quantity:quantity,
            table_number:table_number,
            url:url,
            orderno:orderno,
            category:category
        }
    })
}

export const removeorder = (orderno) => async dispatch =>{
    dispatch({
        type:"REMOVEORDER",
        payload : orderno,
    })
}

export const setorderno = (value) => async dispatch =>{
    dispatch({
        type:"SETORDERNO",
        payload:value
    })
}

export const resetorderno = () => async dispatch =>{
    dispatch({
        type : "RESETORDERNO"
    })
}

export const addbill = (table_number,bill) => async dispatch =>{
    dispatch({
        type : "ADDBILL",
        payload : {
            table_number : table_number,
            bill : bill
        }
    })
}

export const confirmorder = (id,name,prize,quantity,table_number,url,orderno,category) => async dispatch =>{
    dispatch({
        type:"CONFIRMORDER",
        payload:{
            id:id,
            name:name,
            prize:prize,
            quantity:quantity,
            table_number:table_number,
            url:url,
            orderno:orderno,
            category:category
        }
    })
}

export const updateOrderStatus = (orderno, status) => {
    return {
      type: 'UPDATE_ORDER_STATUS',
      payload: { orderno, status }
    };
  };