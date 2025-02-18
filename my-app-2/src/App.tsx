import axios, { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


interface User {
  id: number;
  name: string;
  phone: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err => {
          if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      }));

      return() => controller.abort();
  }, [])

const deleteUser = (user: User) => {
  const originalUsers = [...users];
  setUsers(users.filter(u => u.id !== user.id));
  axios.delete('https://jsonplaceholder.typicode.com/users' + user.id)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    })
}

  return (<>
    {error && <p className = "text-danger">{error}</p>}
    {isLoading && <div className = "spinner-border">{isLoading}</div>}
    <ul className = "list-group">
      {users.map(user => <li key={user.id} className = "list-group-item d-flex justify-content-between">
        {user.name}{" "} 
      <button className="btn btn-outline-danger" onClick = {() => deleteUser(user)}>Delete</button></li>)}
     </ul>
    </>
  )
}

export default App;