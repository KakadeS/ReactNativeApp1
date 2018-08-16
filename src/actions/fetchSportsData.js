import {
  FETCH_DATA_ERROR2,
  FETCH_DATA_REQUEST2,
  FETCH_DATA_SUCCESS2,
} from '../constants/action-types';
import config from '../lib/config';
resultData=null;
export function fetchSportsData() {

    const parseString = require('react-native-xml2js').parseString;
    return (dispatch) => {
        return(fetch(config.SPORTS_URL))
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, resultData) {
            return(dispatch(getToDosSuccess(resultData.rss.channel[0].item.slice(0,5))))
            });
        }).catch((err) =>  dispatch(getToDosFailure(err)))
    }
}

function getToDos() {

    return {
        type: FETCH_DATA_REQUEST2
    }
}

function getToDosSuccess(data3) {
    return {
        type: FETCH_DATA_SUCCESS2,
        payload:data3
    }
}

function getToDosFailure(err) {
    return {
        type: FETCH_DATA_ERROR2,
        payload : err
    }
}
