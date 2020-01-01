import * as React from 'react';
import '../styles/modal.css';
import Lable from "./styled.components/Lable";
import Input from "./styled.components/Input";
import {bindActionCreators} from "redux";
import { editContact} from "../actions";
import {connect} from "react-redux";
import CardContainer from "./styled.components/CardContainer";



class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            name: this.props.dets.employee_name,
            number: 0,
            rendered:0,
        };



    }
    componentDidMount(){
        this.setState({
            name: this.props.dets.employee_name,
            number: this.props.dets.employee_age
        });
    }

    updateInputValue(evt) {
        this.setState({
            name: evt.target.value
        });


    }
    updateInputNumber(evt){
        this.setState({
            number: evt.target.value
        });
    }


    private closeModal(evt) {

        this.props.close();
    }

    static getDerivedStateFromProps(props, state){
            return {
                name: props.dets.employee_name ,
                number: props.dets.employee_age
            };

    }
    updateState(name, number){
        this.setState({
            name: name,
            number: number
        })

    }

    render(){


        const name = this.props.dets.employee_name;
        const num = this.props.dets.employee_age;
        //this.updateState(name, num);
        return this.props.show ?
        <div>

            <div id="myModal" className="modal">


                <div className="modal-content">
                    <span className="close" onClick={evt=>this.closeModal(evt)}>Close</span>

                    <Lable>Name: </Lable><Input editable="false" required onChange={evt=>this.updateInputValue(evt)} width="50%" value={this.state.name}/>
                    <Lable>Age: </Lable><Input onChange={evt=>this.updateInputNumber(evt)} width="50%" value={this.state.number}/>
                    <span className="right-image"><img src={`https://robohash.org/${this.props.dets.id}.png`} height="300px" width="300px"/></span>

                    {/*<span className="close" onClick={evt=>this.handleEdit(evt)}>Save</span>*/}
                </div>

            </div>
        </div>
            : null;
    }

    private handleEdit(evt) {
        this.editContact({name: this.state.name,id:this.props.dets.id, number:this.state.number});
        this.closeModal(evt);

    }
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ editContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
