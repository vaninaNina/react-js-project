import React from 'react';
import '../login/login.css'


const Login = () => {
  return (
    <div className="form">
      <h2>Login</h2>
      <form className="log-form">
        
        <label htmlFor="username">Username or Email:</label>
        <input type="text" id="username" name="username" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"/>
        
        <button type="submit">Sign In</button>
        
      
        {/* <span>If you don't have profile, click <Link to={ <Signin /> }>here</Link></span>
       */}
      </form>
    </div>
  );
};


export default Login;