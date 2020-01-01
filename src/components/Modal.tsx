import * as React from 'react';
import '../styles/modal.css';
import Lable from "./styled.components/Lable";
import Input from "./styled.components/Input";



class Modal extends React.Component{
    openModal() {


    }

    private closeModal(evt) {

        this.props.close();
    }

    render(){

        console.log(this.props.dets);
       // console.log(JSON.parse(this.props.dets));
        return this.props.show ?
        <div>

            <div id="myModal" className="modal">


                <div className="modal-content">
                    <span className="close" onClick={evt=>this.closeModal(evt)}>Back</span>
                    <Lable>Name: </Lable><Input width="50%" value={this.props.dets.employee_name}/>
                    <Lable>Age: </Lable><Input width="50%" value={this.props.dets.employee_age}/>
                    <span className="close" onClick={evt=>this.handleEdit(evt)}>Save</span>
                </div>

            </div>
        </div>
            : null;
    }

    private handleEdit(evt) {
        alert("coooo");
        this.closeModal(evt);
    }
}
export default Modal;