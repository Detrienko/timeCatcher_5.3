import React, { Component } from 'react';
import classes from './settingsModal.module.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';


class SettingsModal extends Component {

	state={

	}

	deleteHandler = () => {
		this.props.deleteBusiness(this.props.businessData.id);
	}

	showRemovePopUp = () => {
		document.getElementById('popUpContainer').style.display="block";
	}

	hideRemovePopUp = () => {
		document.getElementById('popUpContainer').style.display="none";
	}


	render(){

	let popUpMessage = (
			<div id="popUpContainer" className={classes.popUpContainer}>
				<p className={classes.popUpContainer_message}>Are you sure you want to delete this business?</p>
				<button onClick={this.deleteHandler} className={classes.yesBtn}>YES</button>
				<button onClick={this.hideRemovePopUp} className={classes.noBtn}>NO</button>
				<a onClick={this.hideRemovePopUp} href="#" className={classes.close}/>
			</div>
	)		

	return(
        <div className={classes.settingsModal}>
        	<h2 className={classes.settingsTitle}>Settings</h2>
        	<div className={classes.settingsFields}>
        	<p>Title</p>
        	<p>GOAL</p>
        	<p>Dayly Goal</p>
        	<p>Weekly Goal</p>
        	<p>Monthly Goal</p>
        	</div>

        	<div className={classes.settingsEditBtns}>
        		<button className={classes.editBtn}>Edit</button>
        	</div>

        	<button className={classes.deleteBtn} onClick={this.showRemovePopUp}>Delete this business</button>
        {popUpMessage}
        </div>
		)
	}

}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

const mapDispatchToProps = dispatch => {
    return{
      deleteBusiness: (id) => dispatch(actions.deleteBusiness(id)),	
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);