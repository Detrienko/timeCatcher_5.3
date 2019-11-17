import React, { Component } from 'react';

import classes from './BusinessBuilder.module.css'

import Stopwatch from '../Stopwatch/Stopwatch';
import CountDown from '../CountDown/CountDown';
import Button from '../../components/Button/Button';
import Statistics from '../../components/Statistics/Statistics';

import SettingsModal from '../../containers/SettingsModal/SettingsModal';

import * as actions from '../../store/actions/businessBuilder';
import { connect } from 'react-redux';

import settingsImage from '../../images/icons/settings1.png';

class BusinessBuilder extends Component {

	state={
		isSettingsModalShown: false
	}

	showSettingsToggle = () => {
		this.setState({isSettingsModalShown: !this.state.isSettingsModalShown})
	}

	switchTimer = () => {

		let businessData = this.props.business[this.props.business.findIndex((el)=>el.id==this.props.currentBussinessId)]

		if(!businessData.countDownIsShown){
			let countDownOrStopwatch = 'countDown';
			this.props.stopWatchOrCountDownIsShownHandler(this.props.currentBussinessId, countDownOrStopwatch)
		}
		else{
			let countDownOrStopwatch = 'stopWatch';
			this.props.stopWatchOrCountDownIsShownHandler(this.props.currentBussinessId, countDownOrStopwatch)
		}
	}


	render(){

		let businessData = this.props.business[this.props.business.findIndex((el)=>el.id==this.props.currentBussinessId)]
		let settingsModal;

		if(this.state.isSettingsModalShown){
    		settingsModal = <SettingsModal businessData={businessData}/>;
  		}   

		return(
			<div className={classes.mainDisplayWrapper}>
				<h2 className={classes.title}>{businessData.title}</h2>
				<p>{businessData.totalHours.hours}/{businessData.goalHours} hours</p>
				<div className={classes.timers}>
					<div className={classes.timerWrapper}>
						<Stopwatch businessData={businessData} isShown={businessData.stopWatchIsShown}/>
						{/* <CountDown businessData={businessData} isShown={businessData.countDownIsShown}/> */}
					</div>
					{/* <div className={classes.switchBtnWrapper}>
						<button onClick={this.switchTimer} className={classes.switchBtn}>SWITCH</button>
					</div>	*/}
				</div>
				<br/><br/><br/>
				<button onClick={()=>this.props.addWorkingHours(businessData.id)} >ADD HOURS</button>
				
				<div className={classes.settingsWrapper}>
					<span onClick={this.showSettingsToggle} className={classes.settings}>
					<img className={classes.settingsImage} src={settingsImage}/>
					  Settings
					</span>
				</div>
				{settingsModal}
				<hr/>
				<Statistics businessData={businessData}/>
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
      addWorkingHours: (id) => dispatch(actions.addWorkingHours(id)),	
      stopWatchOrCountDownIsShownHandler: (id, countDownOrStopwatch) => dispatch(actions.stopWatchOrCountDownIsShownHandler(id, countDownOrStopwatch)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessBuilder);