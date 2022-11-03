export function getArticals() {
  return (dispatch) => {
    return dispatch({
      type: "GET_ARTICALS",
    });
  };
}

export function addArtical(data) {
  return (dispatch) => {
    return dispatch({
      type: "ADD_ARTICAL",
      payload: data,
    });
  };
}

export function editArtical(data) {
  return (dispatch) => {
    return dispatch({
      type: "EDIT_ARTICAL",
      payload: data,
    });
  };
}

export function getArticalById(articalId) {
  return (dispatch) => {
    return dispatch({
      type: "GET_ARTICAL_BY_ID",
      payload: articalId,
    });
  };
}

export function deleteArtical(articalId) {
  return (dispatch) => {
    return dispatch({
      type: "DELETE_ARTICAL",
      payload: articalId,
    });
  };
}
export function addUser(data) {
  return (dispatch) => {
    return dispatch({
      type: "ADD_USER",
      payload: data,
    });
  };
}
export function updateUserLogin(data) {
  return (dispatch) => {
    return dispatch({
      type: "UPDATE_USER_LOGIN",
      payload: data,
    });
  };
}
