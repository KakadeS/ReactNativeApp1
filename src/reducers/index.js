import { combineReducers } from 'redux';
import TopNews from './TopNews';
import ApiDrawerData from './ApiDrawerData';
import LocalResponse from './LocalResponse';
import BusinessResponse from './BusinessResponse';
import SportsResponse from './SportsResponse';
import ToDoListReducer from './ToDoListReducer';

export default combineReducers({
    topNewsData: TopNews,
    apiDrawerData : ApiDrawerData,
    businessResponseData : BusinessResponse,
    localResponseData : LocalResponse,
    sportsResponseData : SportsResponse,
    todoResponseData : ToDoListReducer,
});
