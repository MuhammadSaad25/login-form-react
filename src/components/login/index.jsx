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
                        <input className="input100" type="text" name="email" placeholder='Email' />
                    </div>
                    <div className="pInputDiv">
                        <input className="" type="password" placeholder='Password' />
                    </div>
                    <div className="rfDiv">
                        <div className="">
                            <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="label-checkbox" for="ckb1">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="#" className="txt1">Forgot Password?</a>

                        </div>
                    </div>
                    <div className="form-btn">
                        <button className="btn">
                            Login
                        </button>
                    </div>
                    <div className="sHeading">
                        <span className="txt2">
                            or sign up using
                        </span>
                    </div>
                    <div className="form-social">
                        <a href="#" className='bg-1'>
                            <BsFacebook className='fbicone' />
                        </a>
                        <a href="#" className='bg-2'>
                        <BsTwitter className='ticon'/>
                        </a>
                    </div>
                </form>
                </div>
        </div>
    );
}

export default Login;
