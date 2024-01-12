import { combineReducers } from "redux";
import tablereducer from "./tablereducer";
import filter_name from "./filterreducer";
import orderreducer from "./orderreducer";
import ordernoreducer from "./ordernoreducer";
import billreducer from "./billreducer";
import confirmorderreducer from "./confirmorderreducer";
import orderStatusReducer from "./orderStatusReducer";

const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer : filter_name,
    orderreducer : orderreducer,
    ordernoreducer : ordernoreducer,
    billreducer : billreducer,
    confirmorderreducer : confirmorderreducer,
    orderStatusReducer : orderStatusReducer
})

export default reducer;