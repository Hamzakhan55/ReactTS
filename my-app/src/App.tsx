import 'bootstrap/dist/css/bootstrap.css'
import Alert from './components/Alert'
import Button from './components/Button';
import { useState } from 'react';
import Like from './components/Like/Like';
import Message from './components/Message';
import Nav from './components/NavCartConnet.ysx/Nav';
import Cart from './components/NavCartConnet.ysx/Cart';


function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2'])
  const [alertVisible, setAlertVisibility] = useState(false)
  return(<>
  {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
  <Button onClick={()=> setAlertVisibility(true)}>My Button</Button> <br /><br />
  <Like onClick={() => console.log("Heart button was clicked")}/>
  <Message/><Message/><Message/>
  <Nav cartItemsCount={cartItems.length} />
  <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
  </>
)
}

export default App;
