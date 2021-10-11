import React, {Component} from 'react';
import Axios from 'axios';

class Register extends Component{

  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        f_name: "",
        l_name: "",
        isRegistered: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  register(e){
    e.preventDefault();
    Axios.post('http://localhost:3001/register', {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      email: this.state.email, 
      password: this.state.password
    }).then(res=>{
      if(res.data.isRegistered){
          console.log("POST request successful.");
          this.setState({isRegistered: true});
          this.props.history.push("/login");
            }else{
          console.log("POST request unsuccessful.");
          this.setState({isRegistered: false});
      }
    })
  };

  render(){
        let message;
        if(this.state.isRegistered != null)
        {
           if(this.state.isRegistered){
                message = <label className="success-message text-center">Registration successful.</label>
            }else{
                message = <label className="error-message text-center">Email already in use.</label>;
            } 
        }
        return(
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" name="f_name" value={this.state.f_name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" name="l_name" value={this.state.l_name} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={this.register}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
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

export default Register;