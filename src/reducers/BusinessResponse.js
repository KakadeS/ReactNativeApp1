import { REHYDRATE } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FETCH_DATA_ERROR3,
  FETCH_DATA_REQUEST3,
  FETCH_DATA_SUCCESS3,
} from '../constants/action-types';

const initialState = {
  businessResponseData:[],
};
const persistConfig = {
    key: 'businessResponseData',
    storage: storage
};
const BusinessResponse = (state = initialState, action) => {
switch(action.type) {
     case REHYDRATE:
      const data = action.payload && action.payload.businessResponseData ? action.payload.businessResponseData : initialState;
      //alert("Business" + JSON.stringify(action.payload))
        return {
            ...state,
            data
        };
        case FETCH_DATA_REQUEST3:
            return {
                ...state
            }
        case FETCH_DATA_SUCCESS3:
            return  {
                ...state,
                businessResponseData:action.payload
            }
        case FETCH_DATA_ERROR3:
            return {
                ...state
            }
        default:
            return state
    }
};
//export default BusinessResponse;
export default persistReducer(persistConfig, BusinessResponse);

