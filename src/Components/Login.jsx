import "./Auth.css";

export default function Login({handleToggleauth,setIsAuth}) {
    function handleLogin(event){
    event.preventDefault();

    let user = event.target.user.value;
    let pass = event.target.pass.value;

    let storedAccount = JSON.parse(localStorage.getItem("Account"));

    if(!storedAccount){
        alert("No account found. Please sign up first.");
        return;
    }

    if(
        (user === storedAccount.user || user === storedAccount.username) && pass === storedAccount.pass
    ){
        setIsAuth(true)
        
    } else {
        alert("Invalid credentials");
    }
}
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="logo">Instagram</h1>

        <form className="auth-form" onSubmit={handleLogin}>
          <input type="text" name="user" placeholder="Phone number, username, or email" required />
          <input type="password" name="pass" placeholder="Password" required/>
          <button className="primary-btn">Log in</button>
        </form>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <button className="fb-btn">Log in with Facebook</button>

        <p className="forgot">Forgot password?</p>
      </div>

      <div className="auth-switch">
        <p>
          Don't have an account? <button onClick={handleToggleauth}>Sign up</button>
        </p>
      </div>
    </div>
  );
}