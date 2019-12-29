import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestDataFromApi } from "../actions";

class Add extends React.Component {


}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestDataFromApi }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Add);
