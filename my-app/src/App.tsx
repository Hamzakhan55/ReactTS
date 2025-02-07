import 'bootstrap/dist/css/bootstrap.css'
import Alert from './components/Alert'
import Button from './components/Button';
import { useState } from 'react';
import Like from './components/Like/Like';


function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  return(<>
  {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
  <Button onClick={()=> setAlertVisibility(true)}>My Button</Button> <br /><br />
  <Like onClick={() => console.log("Heart button was clicked")}/>
  </>
)
}

export default App;
