import React, {Component} from 'react';
import Axios from 'axios';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login(e){
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
          email: this.state.email, 
          password: this.state.password
        }).then((res)=>{    
            if(res.data.isLoggedIn){
                console.log("POST request successful.");
                this.setState({isLoggedIn: true});
            }else{
                console.log("POST request unsuccessful.");
                this.setState({isLoggedIn: false});
            }
        });

    }

    render(){
        let message;
        if(this.state.isLoggedIn != null){
           if(this.state.isLoggedIn){
                message = <label className="success-message text-center">Login successful.</label>
            }else{
                message = <label className="error-message text-center">Wrong email/password.</label>;
            } 
        }

      return(
        <div className="auth-wrapper">
        <div className="auth-inner">
                <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/register">password?</a>
                </p>
                <div className="form-group">
                    {message}
                </div>
            </form>
              
            </div>
            </div>
      )
    };
}

export default Login;