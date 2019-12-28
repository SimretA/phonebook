import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {requestDataFromApi} from "../actions";


class Home extends React.Component {
    componentDidMount() {
        this.props.requestDataFromApi();

    }


    person = (contact) =>
        <div key={contact.id.value}>

            <h1>
                Name: {contact.employee_name}
            </h1>
            <h1>
                Age: {contact.employee_age}
            </h1>
            {/*<img src={x.picture.medium} />*/}
        </div>;

    render() {
        const { results = [] } = this.props.data;
        console.log(results);
        // return results.length
        //     ? <h1>
        //         {results.map(this.person)}
        //     </h1>
        //     : <h1>loading...</h1>;
        return <div>
            {results.map(contact => {
                this.person(contact);
                console.log(contact);
            })}
        </div>
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestDataFromApi }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);