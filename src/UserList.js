import React, {useContext, useEffect} from "react";
import {UserDispatch} from "./App";


const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch)
  // useEffect(() => {
    // console.log('user 값이 설정됨');
    // console.log(user);
    // return () => {
      // console.log('user 가 바뀌기 전..');
      // console.log(user)
    // }
  // }, );

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp
      <span>({user.email})</span>
      <button onClick={() => {
        // onRemove(user.id)
        dispatch({ type: 'REMOVE_USER', id: user.id})
      }}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {

  return (
    <div>
      {/*<User user={users[0]} />*/}
      {/*<User user={users[1]} />*/}
      {/*<User user={users[2]} />*/}
      {users.map(user => (
        // <User user={user}
        //       key={user.id}
        //       onRemove={onRemove}
        //       onToggle={onToggle}
        // />
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);