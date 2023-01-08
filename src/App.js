import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import {useCallback, useMemo, useRef, useState} from "react";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      })

    },
    []
  );


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);


  const nextId = useRef(4);
  const onCreate = useCallback(() => {

    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1
  }, [username, email]);

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id))
    }, []);

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? {...user, active: !user.active} : user)
      )
    }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    // <Wrapper>
    //   <Hello name={"react"} color={"red"} isSpecial={true} />
    //   <Hello color={"pink"} />
    // </Wrapper>

    // <Counter />

    // <InputSample />

    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList users={users}
                onRemove={onRemove}
                onToggle={onToggle}
      />
      <div>
        활성 사용자 수 : {count}
      </div>
    </>
  )
}

export default App;