import React, {useState} from 'react';
import classes from './Layout.module.css';

import SignInModal from '../../containers/Forms/Auth/SignInModal/SignInModal';
import SignUpModal from '../../containers/Forms/Auth/SignUpModal/SignUpModal';


function Layout(props) {

	const [modalState, setModalState] = useState({
		isLoginModalShown: false,
		isRegisterModalShown: false
	})

	const showLoginModal = () => {
		setModalState({
			isLoginModalShown: true,
			isRegisterModalShown: false
		})
	}

	const showRegisterModal = () => {
		setModalState({
			isLoginModalShown: false,
			isRegisterModalShown: true
		})
	}

	const hideModal = () => {
		setModalState({
			isLoginModalShown: false,
			isRegisterModalShown: false
		})
	}


	let loginModal = null;
	let registerModal = null;

	if(modalState.isLoginModalShown){
		loginModal = <SignInModal hideModal={hideModal}/>
		registerModal = null;
	}

	if(modalState.isRegisterModalShown){
		registerModal = <SignUpModal hideModal={hideModal}/>
		loginModal = null;
	}

  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	<ul className={classes.topMenu}>
	    	<li onClick={showLoginModal} className={classes.logIn}><a href="#">LOGIN</a></li>
	    	<li onClick={showRegisterModal} className={classes.signUp}><a href="#">SIGNUP</a></li>
	    	</ul>
	    </div>
	    {loginModal}
	    {registerModal}
    	{props.children}
    </div>	
  );
}

export default Layout;
