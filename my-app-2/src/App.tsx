import axios, { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

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
  return (<>
    {error && <p className = "text-danger">{error}</p>}
    {isLoading && <div className = "spinner-border">{isLoading}</div>}
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
      {users.map(user => <li key={user.id}>{user.phone}</li>)}
    </ul>
    </>
  )
}

export default App;