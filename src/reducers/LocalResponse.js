import { REHYDRATE } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FETCH_DATA_ERROR1,
  FETCH_DATA_REQUEST1,
  FETCH_DATA_SUCCESS1,
} from '../constants/action-types';

const initialState = {
  localResponseData:[],
};
const persistConfig = {
    key: 'localResponseData',
    storage: storage
}

const LocalResponse = (state = initialState, action) => {
switch(action.type) {
     case REHYDRATE:
           const data = action.payload && action.payload.localResponseData ? action.payload.localResponseData : initialState;
           return {
                ...state,
                data
            };
        case FETCH_DATA_REQUEST1:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DATA_SUCCESS1:
            return {
                ...state,
                isLoading: false,
                localResponseData:action.payload
            }
        case FETCH_DATA_ERROR1:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
};

//export default LocalResponse;
export default persistReducer(persistConfig, LocalResponse);




















// import localResponseData from './Local.json'
// // var localResponseData=null;
// // const parseString = require('react-native-xml2js').parseString;
// //  fetch('http://ktfeeds.khaleejtimes.com/mobxmlrwr/nation.xml')
// //         .then(response => response.text())
// //         .then((response) => {
// //             parseString(response, function (err, localResponseData) {
// //                 alert(JSON.stringify(localResponseData))
// //             });
// //         }).catch((err) => {
// //             alert('fetch'+err)
// //         })

// export default () => localResponseData;