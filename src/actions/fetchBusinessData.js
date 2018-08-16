import {
  FETCH_DATA_ERROR3,
  FETCH_DATA_REQUEST3,
  FETCH_DATA_SUCCESS3,
} from '../constants/action-types';
import config from '../lib/config';
result=null;
export function fetchBusinessData() {
    const parseString = require('react-native-xml2js').parseString;
    return (dispatch) => {
        return(fetch(config.BUSINESS_URL))
        .then(response => response.text())
        .then((response) => {
          parseString(response, function (err, result) {
            //  console.log(JSON.stringify(result.rss.channel[0].item))
                dispatch(getToDosSuccess(result.rss.channel[0].item.slice(0,5)));
            });
        }).catch((err) =>  dispatch(getToDosFailure(err)))
    }
}

function getToDos() {

    return {
        type: FETCH_DATA_REQUEST3
    }
}

function getToDosSuccess(data1) {
    return {
        type: FETCH_DATA_SUCCESS3,
        payload:data1
    }
}

function getToDosFailure(err) {
    return {
        type: FETCH_DATA_ERROR3,
        payload : err
    }
}
