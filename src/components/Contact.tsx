import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestDataFromApi, deleteContact } from "../actions";
import Wrapper from "./styled.components/Wrapper";
import CardHeader from "./styled.components/CardHeader";
import CardContainer from "./styled.components/CardContainer";
import CardEntry from "./styled.components/CardEntry";
import DeleteFab from "./styled.components/DeleteFab";

class Contact extends React.Component {
    componentDidMount() {
        this.props.requestDataFromApi();
    }
    private handleDelete(evt){
        // alert("delete "+ evt.target.id);
        this.props.deleteContact(evt.target.id);
    }

    person = (x, i) =>
        <CardContainer key={x.id}>
            <DeleteFab id={x.id} onClick={evt=>this.handleDelete(evt)}>Delete</DeleteFab>
            <img src={`https://robohash.org/${x.id}.png`} height="300px" width="300px"/>
            <CardHeader>
                {x.employee_name}
            </CardHeader>
            <CardEntry>
                {x.employee_age}
            </CardEntry>

        </CardContainer>;

    render() {
        const results = this.props.data || []; //sort(function (obj1, obj2) {return obj2.id - obj1.id; })
        console.log(results);
        console.log(typeof results);
        console.log(Object.entries(results).reverse());
        let torend ="";
        Object.entries(results).reverse().forEach(contact => {
            //console.log(contact[1]);
            this.person(contact[1], contact[0]);
            torend += <h1>contact[1].employee_name</h1>;
        });
        return results.length
            ? <Wrapper>
                {results.map(this.person)}
            </Wrapper>
            : <h1>loading...</h1>;
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestDataFromApi, deleteContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);