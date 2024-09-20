import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";

function Login() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate()
    const [name, setname] = useState("");
    const [pass, setPass] = useState("");
    const [error,setError]= useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, pass);
        
        const response = login({ name, pass });
        console.log(response);
        
        if (response.status != 200) {
            setError("User name or password not correct!");
        } else {
            setTimeout(() => {
                navigate('/')
            })
        }
    };
    return (
        <>
            <div className="container-fluid" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/banner2.jpg" alt="Image" title="#slider-caption-1 " width={'100%'} />

                    </div>
                </div>
            </div>
            <div className="page-banner-section ">
                <h1 style={{ fontSize: '30px', fontWeight: '600', margin: '20px 0px' }}>LOGIN</h1>
            </div>

            <div className="page-section section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12 m-auto">
                            <div className="login-reg-form">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-20">
                                            <label htmlFor="name">Username or name <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter your username"
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label htmlFor="pass">Passwords <span className="required">*</span></label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={pass}
                                                onChange={(e) => setPass(e.target.value)}
                                            />
                                        </div>
                                        {
                                            name
                                        }{
                                            pass
                                        }
                                       {error && <div className="alert alert-danger">{error}</div>} 

                                        <div className="col-12 mb-20">
                                            <input value="Login" name="login" className="inline" type="submit" />
                                            <label className="inline" for="rememberme">
                                                <input value="forever" id="rememberme" name="rememberme" type="checkbox" /> Remember me
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <a href="#/">Lost your password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-section section pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-world"></i>
                            </div>
                            <div className="service-title">
                                <h3>FREE SHIPPING</h3>
                                <p>Free shipping on all UK orders</p>
                            </div>
                        </div>
                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-refresh"></i>
                            </div>
                            <div className="service-title">
                                <h3>FREE EXCHANGE</h3>
                                <p>30 days return on all items</p>
                            </div>
                        </div>
                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-headphones"></i>
                            </div>
                            <div className="service-title">
                                <h3>PREMIUM SUPPORT</h3>
                                <p>We support online 24 hours a day</p>
                            </div>
                        </div>
                        <div className="single-service col-lg-3 col-6 mb-6">
                            <div className="service-icon">
                                <i className="pe-7s-gift"></i>
                            </div>
                            <div className="service-title">
                                <h3>BLACK FRIDAY</h3>
                                <p>Shocking discount on every friday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;