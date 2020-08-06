import React from "react";
import { connect } from "react-redux";

interface IEditPostProps {}

const EditPost = (props: IEditPostProps) => {
  return <div></div>;
};

const mapStateToProps = (State: any) => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
