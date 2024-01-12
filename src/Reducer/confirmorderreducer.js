const initialstate = []

export default function confirmorderreducer (state=initialstate,action){
        const {type,payload} = action;
        switch(type){
            case "CONFIRMORDER":
                return [...state,payload]
            default:
                return state
        }
}