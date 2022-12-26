import { useState } from "react";
import axios from 'axios';


const RegisterForm = (props) => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();

      //header for authentication
      const authObject = {'Private-Key': '3d39fc94-8fdd-4514-8137-15c9c587379b'}
      var axios = require('axios');

      var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: authObject,
        data : {'username': username, 'secret': password}
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUsername('');
        setPassword('');
        setEmail('');
        setFirst('');
        setLast('');
        })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    const logInHandler = () => {
        props.stopRegistering();
    }

    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Register Form</h1>
            <h4 style={{justifyContent: 'center', display: 'flex', marginBottom: '8px'}}>Fields With * Are Required</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username*" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password*" required />
              {/* <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} className="input" placeholder="Confirm Password" required /> */}
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" />
              <input type="first" value={first} onChange={(e) => setFirst(e.target.value)} className="input" placeholder="First Name" required />
              <input type="last" value={last} onChange={(e) => setLast(e.target.value)} className="input" placeholder="Last Name" required />
              <div align="center">
                <button type="submit" className="button">
                  <span>Register</span>
                </button>
              </div>
            </form>
            <div style={{justifyContent: 'center' ,direction: 'ltr', display: 'flex'}}>
              <h3 style={{color: 'darkgrey'}}>Already Have An Acount?</h3>
              <button onClick={logInHandler} style={{marginLeft: '10px'}}>
                <span>Log In</span>
              </button>
            </div>
            <h1>{error}</h1>
          </div>
        </div>
    
      );
}

export default RegisterForm