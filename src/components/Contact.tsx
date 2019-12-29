import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestDataFromApi } from "../actions";
import Wrapper from "./styled.components/Wrapper";
import CardHeader from "./styled.components/CardHeader";
import CardContainer from "./styled.components/CardContainer";
import CardEntry from "./styled.components/CardEntry";

class Contact extends React.Component {
    componentDidMount() {
        this.props.requestDataFromApi();
    }

    person = (x, i) =>
        <CardContainer key={x.id}>
            <img src={`https://robohash.org/${x.id}.png`} height="300px" width="300px"/>
            <CardHeader>
                {x.employee_name}
            </CardHeader>
            <CardEntry>
                {x.employee_age}
            </CardEntry>

        </CardContainer>;

    render() {
        const results = this.props.data || [];
        console.log(results);
        return results.length
            ? <Wrapper>
                {results.map(this.person)}
            </Wrapper>
            : <h1>loading...</h1>;
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestDataFromApi }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);