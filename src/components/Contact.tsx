import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestDataFromApi, deleteContact } from "../actions";
import Wrapper from "./styled.components/Wrapper";
import CardHeader from "./styled.components/CardHeader";
import CardContainer from "./styled.components/CardContainer";
import CardEntry from "./styled.components/CardEntry";
import DeleteFab from "./styled.components/DeleteFab";
import Modal from "./Modal";
import Loading from "./styled.components/Loading";
import Alert from "./Alert";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            details:{},
            employee_name:'',
            employee_age: 0,
            employee_salary: 0,
            id: 0,
        };
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {

        this.props.requestDataFromApi();

    }
    private showModal (evt) {

        console.log(evt.target.value);
        const a = JSON.parse(evt.target.value);
        console.log(a);
        this.setState({
            show: true,
            details: a

        });
    };
    private handleDelete(evt){
        // alert("delete "+ evt.target.id);
        this.props.deleteContact(evt.target.value);
    }


    person = (x, i) =>
        <CardContainer key={x.id}  >
            <DeleteFab  value={JSON.stringify(x)}   onClick={evt=>this.showModal(evt)}>Expand</DeleteFab>
            <DeleteFab value={x.id} onClick={evt=>this.handleDelete(evt)}>Delete</DeleteFab>
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
        let torend ="";
        Object.entries(results).reverse().forEach(contact => {
            //console.log(contact[1]);
            this.person(contact[1], contact[0]);
            torend += <h1>contact[1].employee_name</h1>;
        });
        return results.length
            ?<div>

                    <Modal close={this.closeModal} dets={this.state.details} show={this.state.show} />

            <Wrapper>
                {results.map(this.person)}
            </Wrapper>
            </div>
            : <Loading>loading...If this takes too long please check your internet and reload the page</Loading>;
    }
    closeModal(){
        this.setState({
            show: false,

        });
    }



}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestDataFromApi, deleteContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);