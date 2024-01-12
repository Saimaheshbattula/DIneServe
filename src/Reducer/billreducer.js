const initialstate = []

export default function billreducer (state=initialstate,action){
        const {type,payload} = action;
        switch(type){
            case "ADDBILL":
                return [...state,payload]
            default:
                return state
        }
}