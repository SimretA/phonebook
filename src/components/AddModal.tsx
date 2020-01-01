import React from "react";
import {bindActionCreators} from "redux";
import {addContact} from "../actions";
import {connect} from "react-redux";
import styled from "styled-components";
import StyledButton from "./styled.components/StyledButton";
import Input from "./styled.components/Input";
import Alert from "./Alert";


const InputContainer = styled.div`
    position: fixed;
    top: 2%;
    left: 2%;
    z-index: 4;
    width: 80%;
`;
class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            number: 0,
            show: false,
            info:'',
        };
    }

    handleClose(evt){
            this.setState({
                show: false,

            });
    }
    private showModal() {

        this.setState({
            show: true,

        });
    };

    render(){
        return(
            <InputContainer>
                <Alert info={this.state.info} show={this.state.show} close={evt=>this.handleClose(evt)}/>
                <form>
                    <Input  placeholder="Name" value={this.state.name} onChange={evt => this.updateInputValue(evt)} required/>
                    <Input  placeholder="number" value={this.state.number} onChange={evt =>this.updateInputNumber(evt)} type="telephone"/>
                    <StyledButton onClick={evt =>this.handleAdd(evt)} value="Add" type="button" />
                </form>
            </InputContainer>);
    }

    handleAdd(evt){
        if(this.state.name =='' || this.state.number ==0){
            this.setState({info:"Please Fill All The Fields.", show: true});
            return;
        }
        this.props.addContact({name: this.state.name, age: this.state.number});
        this.setState({name:'', number:0, info:"Contact Added", show: true});

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
}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
