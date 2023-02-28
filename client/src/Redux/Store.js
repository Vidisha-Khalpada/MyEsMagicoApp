import {legacy_createStore} from "redux"
import Reducer from "./Reducer"
const reduxstore=legacy_createStore(Reducer)

export default reduxstore
