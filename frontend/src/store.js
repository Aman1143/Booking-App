import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from './reducers/AuthReducer.js'
import { adminGetCenterReducer, adminGetSportCenterReducer } from "./reducers/AdminReducer.js";
import { getFieldReducer, getSportFieldReducer, userGetCenterReducer } from "./reducers/UserReducer.js";

const store=configureStore({
	reducer:{
        user:authReducer,
		allSportCenters:adminGetCenterReducer,
		allSportCentersUser:userGetCenterReducer,
		adminAllSpots:adminGetSportCenterReducer,
		sportAllField:getSportFieldReducer,
		getField:getFieldReducer,
		
	}
})

export default store;