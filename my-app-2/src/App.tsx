import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  phone: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
      {users.map(user => <li key={user.id}>{user.phone}</li>)}
    </ul>
  )
}

export default App;