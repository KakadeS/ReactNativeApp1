import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers'; 
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['topNewsData','sportsResponseData','businessResponseData','localResponseData','todoResponseData']
};
// const persistConfig1 = {
//     key: 'root1',
//     storage: storage,
//     whitelist: ['sportsResponseData']
// };

const persistRed = persistReducer(persistConfig,reducers);

export const store = createStore(persistRed, undefined, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);



