import { useState } from "react";
import './App.css';
import axios from "axios";
import { useNavigate} from "react-router-dom";


function App() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
;
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://challenge.telypay.net/auth/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
    

  }

  return (
    

    <div className="App">
      
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />

      <button onClick={()=> navigate("/ProductList") (handleApi)} >Login</button>
      

    </div>
  );
}

export default App;
