import "./Auth.css";

export default function Signup({handleToggleauth}) {
    function handleSignup(event){
        event.preventDefault();
        if (event.target.user.value.trim().length>0){
            if(event.target.name.value.trim().length>0){
                if (event.target.username.value.trim().length>0){

                let account={};
                account.user=(event.target.user.value);
                account.name=(event.target.name.value);
                account.username=(event.target.username.value);
                account.pass=(event.target.pass.value);
                console.log(account)
                localStorage.setItem("Account",JSON.stringify(account))
                }else{
                    alert("username cannot be empty")
                }
            }else{
                alert("Name should be atleast 1 character long")
            }
        }else{
            alert("field cannot be empty")
        }
    }


        // console.log(event.target.user.value)
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="logo">Instagram</h1>

        <p className="subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <button className="fb-btn">Log in with Facebook</button>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <form className="auth-form" onSubmit={handleSignup}>
          <input type="text" placeholder="Mobile Number or Email" name="user" required/>
          <input type="text" placeholder="Full Name" name="name" required minLength={1}/>
          <input type="text" placeholder="Username" name="username"required />
          <input type="password" placeholder="Password" name="pass"required minLength={8}/>
          <button className="primary-btn">Sign up</button>
        </form>

        <p className="terms">
          By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.
        </p>
      </div>

      <div className="auth-switch">
        <p>
          Have an account? <button onClick={handleToggleauth}>Log in</button>
        </p>
      </div>
    </div>
  );
}