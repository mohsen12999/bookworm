import React from "react";
import {connect} from "react-redux";
import { IAdminState } from "../../types/adminType";

const Index = (props:{loggedIn:boolean}) => {
	console.log(props.loggedIn)
	return(<div></div>)
};

const mapStateToProps = (State: { admin:IAdminState }) => ({
	loggedIn: State.admin.loggedIn
})

const mapDispatchToProps={};

export default connect(mapStateToProps,mapDispatchToProps)(Index);
