import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import UserDetails from './UserDetails'

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: 1
        }
    }

    componentDidMount() {
        this.getAllUsersData();
    }

    getAllUsersData() {
        axios.get('assets/payloadData/payloadList.json').then(response => {
            this.setState({userList: response})
        })
    };

    render() {
        if (!this.state.userList) {
            return (<p>Loading...</p>);
        }
        return (<div className="margin">
            <div className="col-md-3">
                {
                    this.state.userList.data.map(customer =>
                        <Panel bsStyle="info" key={customer.name} className="align-center">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <p>{customer.organization}</p>
                                <p>{customer.position}</p>
                                <Button bsStyle="info" onClick={() => this.setState({selectedUser: customer.id})}>
                                    Get user details
                                </Button>
                            </Panel.Body>
                        </Panel>
                    )
                }
            </div>
            <div className="col-md-6">
                <UserDetails val={this.state.selectedUser}/>
            </div>
            <div className="col-md-3">
                {
                    this.state.userList.data.map(customer =>
                        <Panel bsStyle="info" key={customer.name} className="align-center">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3" className="user-title">{customer.name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <p>{customer.organization}</p>
                                <p>{customer.position}</p>
                                <Button bsStyle="info" onClick={() => this.setState({selectedUser: customer.id})}>
                                    Get user details
                                </Button>
                            </Panel.Body>
                        </Panel>
                    )
                }
            </div>
        </div>)
    }
}
