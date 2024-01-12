const initialstate = {
    orderno : 1
}

export default function ordernoreducer (state=initialstate,action){
        const {type,payload} = action;
        switch(type){
            case "SETORDERNO" :
                return {...state,orderno:payload}
            case "RESETORDERNO" :
                return {...state,orderno:1}
            default :
                return state;
        }
    }