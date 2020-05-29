import React,{Component} from 'react';
import { ReactComponent as BannerBg } from '../../../assets/svgs/curve.svg';
import './logIn.style.css'


class LogIn extends Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }

    this.handleChange = e => {
        const {name,value} = e.target
        this.setState({[name] : value})
    }
    this.handleSubmit = e => {
        e.preventDefault()
        this.setState({email : '',password : ''})
    }
    }
    render(){
        return(
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center row-wrapper">
                    <div className="col-12 col-md-7 col-lg-6">
                        <div className="welcome-intro">
                            <h1 className="text-white banner-title">Create an account!</h1>
                            <p className="my-4 text-white banner-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
           
                            <span className="d-inline-block fw-3 font-italic mt-3 text-white">* Available on iPhone, iPad and all Android devices</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-5">
                        <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                            <form id="contact-form" onSubmit={this.handleSubmit}>
                                <div className="contact-top">
                                    <h3 className="contact-title">Sign Up</h3>
                                    <h5 className="text-secondary fw-3 py-3 text">Fill all fields so we can get some info about you. We'll never send you spam</h5>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-envelope-open" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={this.state.email} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text input-icon"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label contact-bottom" for="exampleCheck1"><span className="d-inline-block mt-3">By signing up, you accept our <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a></span></label>
                                            </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-bordered w-100 mt-3 sign-up-btn text-white" type="submit">Sign In</button>
                                    </div>
                                    <div className="col-12">
                                        <span className="d-block pt-2 mt-4 border-top">Don't have an account? <a href="#">Sign Up</a></span>
                                    </div>
                                </div>
                            </form>
                            <p className="form-message"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-bottom">
                <BannerBg/>
            </div>
        </section>
        )
    }
}

export default LogIn;