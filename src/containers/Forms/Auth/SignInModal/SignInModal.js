import React, { Component } from 'react';
import classes from './SignInModal.module.css';


class SignInModal extends Component {

	render(){
		return(
      		<div>
      		  <div className={classes.signInWrapper}>
      		    <h1 className={classes.signInTitle}>LogIn</h1>
      		    <form>
	      		    <span>Email:</span><br/>
	      		    <input/><br/>
	      		    <span>Password:</span><br/>
	      		    <input/><br/>
	      		    <button className={classes.loginBtn}>Login</button>
      		    </form>
      		  </div>
      		  <div 
      		    id='formCover'
      		    className={classes.cover}
      		    onClick={this.props.hideModal}>
      		  </div>
      		</div>			
      	)
	}

}

export default SignInModal;