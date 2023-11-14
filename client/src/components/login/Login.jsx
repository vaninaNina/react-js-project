import Signin from "../register/Signin.jsx";


const Login = () => {

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username or Email:</label>
        <input
          type="text"
          id="username"
          name="username"
        //   value={formData.username}
        //   onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        //   value={formData.password}
        //   onChange={handleInputChange}
          required
        />

        <button type="submit">Sign In</button>

        <p className="field">
            <span>If you don't have profile, click <Link to={ <Signin /> }>here</Link></span>
        </p>
      </form>
    </div>
  );
};


export default Login;