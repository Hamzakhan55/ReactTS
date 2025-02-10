import 'bootstrap/dist/css/bootstrap.css'
import Alert from './components/Alert'
import Button from './components/Button';
import { useState } from 'react';
import Like from './components/Like/Like';
import Message from './components/Message';
import Nav from './components/NavCartConnet.ysx/Nav';
import Cart from './components/NavCartConnet.ysx/Cart';
import Form from './components/Form/Form';
import ExpenseList from './Mini-P-Expense-Tracker/ExpenseList';


function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2'])
  const [alertVisible, setAlertVisibility] = useState(false)
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 30, category: 'Utilities'},
    {id: 3, description: 'ccc', amount: 20, category: 'Utilities'},
    {id: 4, description: 'ddd', amount: 40, category: 'Utilities'},
    {id: 5, description: 'eee', amount: 10, category: 'Utilities'},
])
  return(<>
  {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
  <Button onClick={()=> setAlertVisibility(true)}>My Button</Button> <br /><br /><br />
  <Like onClick={() => console.log("Heart button was clicked")}/>
  <br /><br /><br />
  <Message/><Message/><Message/>
  <br /><br /><br />
  <Nav cartItemsCount={cartItems.length} />
  <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    <br /><br /><br />
    <Form/>
    <ExpenseList expenses = {expenses} onDelete = {(id) => setExpenses(expenses.filter(e => e.id != id))}/>
  </>
)
}

export default App;
