const initialstate = []

export default function orderreducer (state=initialstate,action){
        const {type,payload} = action;
        switch(type){
            case "ADDORDER":
                return [...state,payload]
            case "REMOVEORDER":
                return state.filter((order) => order.orderno !== payload);
            default:
                return state
        }
}