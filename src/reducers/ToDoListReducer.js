import { REHYDRATE } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    ADD_TODOLIST,
    DELETE_TODOLIST,
} from '../constants/action-types';

const initialState = {
    todoResponseData: [],
};
const persistConfig = {
    key: 'todoResponseData',
    storage: storage
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state,
                todoResponseData: action.payload
            }
        case DELETE_TODOLIST:
        //alert("inside DELETE_TODOLIST reduecr")
            return {
                ...state,
                todoResponseData: action.payload
            }
        default:
            return state
    }
};
export default persistReducer(persistConfig, ToDoListReducer);


