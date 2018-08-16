import { REHYDRATE } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    FETCH_DATA_ERROR2,
    FETCH_DATA_REQUEST2,
    FETCH_DATA_SUCCESS2,
} from '../constants/action-types';

const initialState = {
    sportsResponseData: [],
};

const persistConfig = {
    key: 'sportsResponseData',
    storage: storage
};
const SportsResponse = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
        // return ({ topNews:  action.payload && action.payload.sportsResponseData && action.payload.sportsResponseData.sportsResponseData } || {});
       // alert("Sports"+JSON.stringify(state));
            //alert("Sports" + JSON.stringify(state))
             const data = action.payload && action.payload.sportsResponseData ? action.payload.sportsResponseData : initialState;
        return {
            ...state,
             data
        };
        case FETCH_DATA_REQUEST2:
            return {
                ...state,
            }
        case FETCH_DATA_SUCCESS2:
            return {
                ...state,
                sportsResponseData: action.payload
            }
        case FETCH_DATA_ERROR2:
            return {
                ...state
            }
        default:
            return state
    }
};

//export default SportsResponse;
export default persistReducer(persistConfig, SportsResponse);




// import sportsResponseData from './Sports.json'

// export default () => sportsResponseData;