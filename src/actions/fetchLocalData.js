import {
  FETCH_DATA_ERROR1,
  FETCH_DATA_REQUEST1,
  FETCH_DATA_SUCCESS1,
} from '../constants/action-types';
import config from '../lib/config';
resultData=null;
export function fetchLocalData() {

    const parseString = require('react-native-xml2js').parseString;
    return (dispatch) => {
        return(fetch(config.LOCAL_URL))
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, resultData) {
                console.log("Local"+resultData.rss.channel[0].item.slice(0,5))
            return(dispatch(getToDosSuccess(resultData.rss.channel[0].item.slice(0,5))))
            });
        }).catch((err) =>  dispatch(getToDosFailure(err)))
    }
}

function getToDos() {

    return {
        type: FETCH_DATA_REQUEST1
    }
}

function getToDosSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS1,
        payload:data
    }
}

function getToDosFailure(err) {
    return {
        type: FETCH_DATA_ERROR1,
        payload : err
    }
}
