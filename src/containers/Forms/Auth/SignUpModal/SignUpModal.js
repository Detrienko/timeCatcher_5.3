import React, { Component } from 'react';
import classes from './SignUpModal.module.css';


class SignUpModal extends Component {

	render(){
		return(
      		<div>
      		  <div className={classes.signUpWrapper}>
      		    <h1 className={classes.signUpTitle}>Register</h1>
      		    <form>
	      		    <span>Email:</span><br/>
	      		    <input/><br/>
	      		    <span>Password:</span><br/>
	      		    <input/><br/>
	      		    <span>Password:</span><br/>
	      		    <input/><br/>
	      		    <button className={classes.registerBtn}>Register</button>
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

export default SignUpModal;