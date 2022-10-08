import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register() {
    const errorRef = useRef();
    const userRef = useRef();

    const [user, setUser]= useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [contestPassword, setContestPassword] = useState('');
    const [validContest, setValidContest] = useState(false);
    const [contestFocus, setContestFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [credible, setCredible] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);    
    }, [user])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === contestPassword;
        setValidContest(match);
    }, [password, contestPassword])

    useEffect(() => {
        setErrorMessage('');
    }, [user, password, contestPassword])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate1 = USER_REGEX.test(user);
        const validate2 = PASSWORD_REGEX.test(password);
        if(!validate1 || !validate2) {
            setErrorMessage("Invalid Entry");
            return;
        }
        console.log(user, password);
        setCredible(true);
    }
    
    
    



  return (
    <>
        {credible ? (
            <section>
                <h1 className="mt-5 text-bg-dark text-center text-success">You have Successfully signed up!!!</h1>
            </section>
        ) : (
   <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://imgs.search.brave.com/moPHXTx_0rFkeH9DyqSxmSJFfjHJg4gcn__xpdfV9hY/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2Vla2luZ2Fs/cGhhLmNvbS91cGxv/YWRzLzIwMTkvMS8x/Ny80ODIwMDE4My0x/NTQ3NzIyNTYyNDcw/MzY3X29yaWdpbi5q/cGc")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
                <p ref={errorRef} className={errorMessage ? "errorMessage" : "visually-hidden"}
                 aria-live="assertive">{errorMessage}</p>
              <h2 className="text-uppercase text-center mb-5"><i>Create an account</i></h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    UserName:
                    <span className={validName ? "valid" : "visually-hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "visually-hidden" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input className="form-control form-control-lg" type="text" id="username" ref={userRef} autoComplete="off" onChange={(event) => setUser(event.target.value)}
                required aria-invalid={validName ? "false" : "true"} 
                aria-describedby="uidnote" onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)} />
                <p id="uidnote" className={userFocus && user &&
                !validName ? "instructions" : "visually-hidden"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Username is a 4 to 24 Character Requirement. Must start with a Letter!!
                    <br/>You can also use symbols!!
                    </p>
                <label htmlFor="password">
                    Password:
                    <span className={validPassword ? "valid" : "visually-hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPassword || !password ? "visually-hidden" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input className="form-control form-control-lg" type="password" id="password" onChange={(event) => setPassword(event.target.value)}
                required aria-invalid={validPassword ? "false" : "true"} aria-describedby="pwdnote"
                onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} />
                <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "visually-hidden"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <ul>
                        <li><b>Password must have 8 to 24 Characters</b></li>
                        <li><b>Password must have an Uppercase Letter</b></li>
                        <li><b>Password must have a Lowercase Letter</b></li>
                        <li><b>Password must have a Number and Special Character:<span aria-label="exclamation mark">!</span>
                        <span aria-label="at symbol">@</span><span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                        <span aria-label="hashtag">#</span></b></li>
                    </ul>
                </p>
                <label htmlFor="confirm_password">
                    Confirm Password:
                    <span className={validContest && contestPassword ? "valid" : "visually-hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validContest || !contestPassword ? "visually-hidden" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input className="form-control form-control-lg" type="password" id="confirm_password" onChange={(event) => setContestPassword(event.target.value)}
                required aria-invalid={validContest ? "false" : "true"} aria-describedby="confirmnote"
                onFocus={() => setContestFocus(true)} onBlur={() => setContestFocus(false)} />
                <p id="confirmnote" className={contestFocus && !validContest ? "instructions" : "visually-hidden"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                        <b>Passwords must match!!</b>
                </p>
                    <div className="d-flex justify-content-center">
                  <button disabled={!validName || !validPassword || !validContest ? true : false}  className="btn btn-info btn-block btn-lg gradient-custom-4 text-body">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        )}
        </>

  )
}

export default Register