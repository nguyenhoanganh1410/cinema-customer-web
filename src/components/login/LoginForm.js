import "./LoginStyle.scss";
import loginImg from "./login.svg";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock, AiFillFacebook } from "react-icons/ai";

const LoginForm = () => {
  return (
    <section className="login">
      <div className="wrapper_web">
        <div className="login_content">
          <div className="login_left">
            <img src={loginImg} />
          </div>
          <div className="login_right">
            <form style={{ textAlign: "start" }}>
              <h3>join with us</h3>
              <p>
                Do not have an account?{" "}
                <span className="create_account">Create an account</span>
              </p>
              <div className="input_form">
                <label>Email address</label>
                <div className="login-form-field">
                  <span>
                    <HiOutlineMail />
                  </span>
                  <input type="text" placeholder="Your email" />
                </div>
              </div>

              <div className="input_form">
                <label>Password</label>
                <div className="login-form-field">
                  <span>
                    {" "}
                    <AiFillLock />
                  </span>
                  <input type="text" placeholder="Your password" />
                </div>
              </div>

              <div className="save_password">
                <input type="checkbox" />
                <span>Save your password</span>
              </div>
              <div className="submit_btn">
                <button className="btn btn_order">log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
