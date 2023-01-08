import axios from "axios";

export async function getUsers(dispatch){
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: 'GET_USERS_SUCCESS', data: response.data })
  }catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e })
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' })
  try{
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  }catch(e) {
    dispatch({ type: 'GET_USER_ERROR', error: e})
  }
}