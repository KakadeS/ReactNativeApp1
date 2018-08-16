// // @flow
// import config from '../lib/config';
// import {
//   FETCH_DATA_ERROR,
//   FETCH_DATA_REQUEST,
//   FETCH_DATA_SUCCESS,
// } from '../constants/action-types';

// export function fetchToDos() {
//     return (dispatch) => {
//         dispatch(getTodos())
//         return(fetch(config.API_URL))
//         .then(response => response.text())
//         .then((response) => {
//             parseString(response, function (err, resultData) {
//             // thisVar.setState({data:resultData})
//             //    jsonDataFetch = resultData;
//             return(dispatch(getToDosSuccess(resultData)))
//             });
//         }).catch((err) =>  dispatch(getToDosFailure(err)))
//     }
// }

// function getToDos() {

//     return {
//         type: FETCH_DATA_REQUEST
//     }
// }

// function getToDosSuccess(data) {

//     return {
//         type: FETCH_DATA_SUCCESS,
//         data
//     }
// }

// function getToDosFailure() {
//     return {
//         type: FETCH_DATA_ERROR
//     }
// }















// // export const fetchWeatherData = () => (

// // fetch(config.API_URL)
// //         .then(response => response.text())
// //         .then((response) => {
// //             parseString(response, function (err, resultData) {
// //             // thisVar.setState({data:resultData})
// //             //    jsonDataFetch = resultData;
// //             });
// //         }).catch((err) => {
// //             alert('fetch'+err)
// //         })



// //   fetch(config.API_URL)
// //     .then((res) => res.json())
// //     .then((data) => data.currently)
// //     .catch((err) => err)
// //);
