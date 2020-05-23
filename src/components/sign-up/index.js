import React,{Component} from 'react';
import './signUp.style.css'


class SignUp extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            email : '',
            password : ''
        }

    this.handleChange = e => {
        const {name,value} = e.target
        this.setState({[name] : value})
    }
    this.handleSubmit = e => {
        e.preventDefault()
        this.setState({name : '',email : '',password : ''})
    }
    }
    render(){
        return(
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
                                        <span className="input-group-text input-icon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                        </div>
                                        <input type="text" className="form-control" name="name" placeholder="Name" required="required" value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
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
                                <button className="btn btn-bordered w-100 mt-3 sign-up-btn text-white" type="submit">Sign Up</button>
                            </div>
                            <div className="col-12">
                                <span className="d-block pt-2 mt-4 border-top">Already have an account? <a href="#">Sign In</a></span>
                            </div>
                        </div>
                    </form>
                    <p className="form-message"></p>
                </div>
            </div>
              
        )
    }
}

export default SignUp;