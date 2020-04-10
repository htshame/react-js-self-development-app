import React, {Component} from 'react';
import axios from 'axios'
import Panel from 'react-bootstrap/lib/Panel'

export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.getUserDetails(this.props.val)
    }

    componentDidUpdate(prevProps) {
        if (this.props.val !== prevProps.val) {
            this.getUserDetails(this.props.val)
        }
    }

    getUserDetails(id) {
        axios.get('assets/payloadData/payload' + id + '.json').then(response => {
            this.setState({customerDetails: response})
        })
    };

    render() {
        if (!this.state.customerDetails) {
            return (
                <p>Loading Data</p>
            );
        }
        return (
            <div className="user-details">
                <Panel bsStyle="info" className="align-center">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            {this.state.customerDetails.data.firstName} {this.state.customerDetails.data.lastName}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>First name : {this.state.customerDetails.data.firstName}</p>
                        <p>Last name : {this.state.customerDetails.data.lastName}</p>
                        <p>City : {this.state.customerDetails.data.city}</p>
                        <p>Country : {this.state.customerDetails.data.country}</p>
                        <p>Organization : {this.state.customerDetails.data.organization}</p>
                        <p>Position : {this.state.customerDetails.data.position}</p>
                        <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}
