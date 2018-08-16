import {
    FETCH_TODOLIST_ERROR,
    FETCH_TODOLIST_REQUEST,
    ADD_TODOLIST,
    DELETE_TODOLIST,
} from '../constants/action-types';
resultData = null;
export function addToDoList(itemArrayTodoList) {
    return (dispatch) => {
        return (dispatch(getToDosSuccess(itemArrayTodoList)))
    }
}

export function deleteToDoList(deleteTodoList) {
    // alert(deleteTodoList);
    return (dispatch) => {
        return (dispatch(getToDosDelete(deleteTodoList)))
    }
}


function getToDosSuccess(data) {
    //alert("added data=" + data);
    return {
        type: ADD_TODOLIST,
        payload: data
    }
}

function getToDosDelete(data) {
   // alert("deleted data=" + data);
    return {
        type: DELETE_TODOLIST,
        payload: data
    }
}


