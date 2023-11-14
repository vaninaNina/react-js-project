import Login from "../login/Login.jsx";

const Signin = () => {
 return (
    <div>
      <h2>Register</h2>
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
            <span>If you already have profile, click <Link to={ <Login /> }>here</Link></span>
        </p>
      </form>
    </div>
 )
}

export default Signin;