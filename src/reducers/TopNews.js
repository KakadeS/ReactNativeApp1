import { REHYDRATE } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    FETCH_DATA_ERROR,
    FETCH_DATA_REQUEST,
    FETCH_TOPNEWS_SUCCESS,
} from '../constants/action-types';

const DEFAULT_STATE = {
    topNews: []
}
const persistConfig = {
    key: 'topNewsData',
    storage: storage
};

const TopNews = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case REHYDRATE:
           const data = action.payload && action.payload.topNews ? action.payload.topNews : DEFAULT_STATE;
           return {
                ...state,
                data
            };
        case FETCH_DATA_REQUEST:
            return {
                ...state,
            }
        case FETCH_TOPNEWS_SUCCESS:
            return {
                ...state,
                topNews: action.payload
            }
        case FETCH_DATA_ERROR:
            return {  
                ...state,
            }
        default:
            return state
    }
};
//export default TopNews;
export default persistReducer(persistConfig, TopNews);




// import sportsResponseData from './Sports.json'

// export default () => sportsResponseData;