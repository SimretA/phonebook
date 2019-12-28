import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {requestHelloworld} from "../actions";


class Home extends React.Component{
    componentDidMount(){
        // @ts-ignore
        this.props.requestHelloworld();

    }

    render(){
        // @ts-ignore
        return(
            <h1>{this.props.helloworld}</h1>
        );
    }
}

// @ts-ignore
const mapStateToProps = state =>({helloworld : state.helloworld})
// @ts-ignore
const mapDispatchToProps = dispatch =>bindActionCreators({requestHelloworld},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);