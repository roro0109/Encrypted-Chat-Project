import { useState } from "react";
import axios from 'axios';

const make_a_new_user = (username, password, email, firstName, LastName) => {
  var axios = require('axios');
  var data = {
    "username": {username},
    "secret": {password},
    "email": {email},
    "first_name": {firstName},
    "last_name": {LastName}
  };

  var config = {
    method: 'post',
    url: 'https://api.chatengine.io/users/',
    headers: {
      'PRIVATE-KEY': '{{private_key}}'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

const RegisterFrom = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();

      make_a_new_user(username,password,email,firstName,LastName);

      // const authObject = { 'Project-ID': props.projectID, 'User-Name': username };

      // try {
      //   await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      //   localStorage.setItem('username', username);

      //   window.location.reload();
      //   setError('');
      // } catch (err) {
      //   setError('Oops, incorrect credentials.');
      // }
    }
    const logInHandler = () => {
        props.stopRegistering();
    }

    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Register Form</h1>
            <h4 style={{justifyContent: 'center', display: 'flex', marginBottom: '8px'}}>All Fields Are Required</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              {/* <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} className="input" placeholder="Confirm Password" required /> */}
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" />
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

export default RegisterFrom