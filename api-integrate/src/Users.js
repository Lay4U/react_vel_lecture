import {useState, useEffect, useReducer} from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";
import {getUsers, useUsersDispatch, useUsersState} from "./UsersContext";


function Users() {
  const [userId, setUserId] = useState(null);
  // const [state, refetch] = useAsync(getUsers, [], true);
  // const {loading, data: users, error} = state;

  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch)
  }
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;
  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          onClick={() => setUserId(user.id)}
          style={{cursor: 'pointer'}}
        >
          {user.username} ({user.name})
        </li>
      ))}
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId}/>}
    </ul>
  );

}

// function Users() {
//
//   const [state, dispatch] = useReducer(reducer,{
//     loading: false,
//     data: null,
//     error: null,
//   })
//   // const [users, setUsers] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);
//
//   const fetchUsers = async () => {
//     dispatch({ type: 'LOADING' });
//     try {
//       // setError(null);
//       // setUsers(null);
//       // setLoading(true);
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//       );
//       dispatch({ type: 'SUCCESS', data: response.data });
//       // setUsers(response.data);
//     } catch (e) {
//       dispatch({ type: 'ERROR', error: e });
//       // setError(e);
//     }
//     // setLoading(false);
//   };
//
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//
//   const { loading, data: users, error } = state;
//
//   if (loading) return <div>로딩중</div>;
//   if (error) return <div>에러가 발생했습니다.</div>;
//   if (!users) return null;
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>
//           {user.username} ({user.name})
//         </li>
//       ))}
//       <button onClick={fetchUsers}>다시 불러오기</button>
//     </ul>
//   );
// }

export default Users;

