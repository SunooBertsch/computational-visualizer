import { combineReducers } from "react-redux";
import {blockReducer} from './blockReducer'

export default combineReducers({
  blockCount: blockReducer
})
