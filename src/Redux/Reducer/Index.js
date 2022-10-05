import { combineReducers } from "redux";
import DataReducer,{MapReducer} from "./DataReducer";


const Reducers = combineReducers({
    dataReducer : DataReducer,
    mapState : MapReducer
})

export default Reducers