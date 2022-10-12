import './index.css'
import { BsFacebook,BsTwitter } from "react-icons/bs";



function Login() {
    return (
        <div className="container">
            <div className="left"></div>

            <div className="right">
                <form className="form">
                    <span className="heading">
                        Login to continue
                    </span>
                    <div className="eInputDiv">
                        <input className="input100" type="text" name="email" />
                    </div>
                    <div className="pInputDiv">
                        <input className="" type="password" />
                    </div>
                    <div className="flex-sb-m w-full p-t-3 p-b-32">
                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="label-checkbox100" for="ckb1">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="#" className="txt1">Forgot Password?</a>

                        </div>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                    <div className="text-center p-t-46 p-b-20">
                        <span className="txt2">
                            or sign up using
                        </span>
                    </div>
                    <div className="login100-form-social flex-c-m">
                        <a href="#" className="">
                            <BsFacebook />
                        </a>
                        <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                        <BsTwitter/>
                        </a>
                    </div>
                </form>
                </div>
        </div>
    );
}

export default Login;
