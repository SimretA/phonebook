import * as React from 'react';
import '../styles/modal.css';
import Lable from "./styled.components/Lable";


class Alert extends React.Component{

    private closeModal(evt) {

        this.props.close();
    }


    render(){
        return this.props.show ?
            <div>

                <div id="myModal" className="modal">


                    <div className="modal-content">
                        <Lable>{this.props.info}</Lable>
                        <span className="close" onClick={evt=>this.closeModal(evt)}>OK</span>
                    </div>

                </div>
            </div>
    : null;
    }


}
export default Alert;