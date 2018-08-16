import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_TOPNEWS_SUCCESS,
} from '../constants/action-types';
import config from '../lib/config';
resultData=null;
export function fetchTopNews() {

    const parseString = require('react-native-xml2js').parseString;
    return (dispatch) => {
        return(fetch(config.TOP_NEWS))
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, resultData) {
           // return(dispatch(getToDosSuccess(resultData.rss.channel[0].item.slice(0,5))))
             return(dispatch({type:FETCH_TOPNEWS_SUCCESS,payload:resultData.rss.channel[0].item.slice(0,5)}))
            });
        }).catch((err) => {
            alert('error' + err );
            dispatch(getToDosFailure(err))
            
        })
    }
}

function getToDos() {

    return {
        type: FETCH_DATA_REQUEST
    }
}

function getToDosSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload:data
    }
}

function getToDosFailure(err) {
    alert('fetch top news action' + err)
    return {
        type: FETCH_DATA_ERROR,
        payload : err
    }
}
