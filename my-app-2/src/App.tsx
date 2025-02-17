import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  phone: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState()

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      .then(res => setUsers(res.data))
      .catch((err => setError(err.message)))
  }, [])
  return (<>
    {error && <p className = "text-danger">{error}</p>}
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
      {users.map(user => <li key={user.id}>{user.phone}</li>)}
    </ul>
    </>
  )
}

export default App;