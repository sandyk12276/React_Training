import React, { Component } from 'react';
import '../stylesheets/companydetailscomponent.css'
import CompaniesListComponent from './companylistcomponent'
import PerformanceComponent from './performancecomponent';
import WatchListComponent from './watchlistcomponent';
import LoginComponent from './logincomponent';


class Placeholder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userid: 0,
            statusplace: this.props.status
        }
        this.updateUser = this.updateUser.bind(this);
        if (this.props.isLoggedIn === 'false') {
            this.updateUser(0);
        }
    }

    updateUser(status1) {
        this.setState({
            userid: status1
        }, () => {
            if (status1 != 0) {
                this.props.updateStatus('watchListComponent')
            }
        })
        console.log(status1);
    }

    render() {

        console.log(this.props.status);
        if (this.props.status === 'Companies') {
            return (
                <CompaniesListComponent isLoggedIn={this.props.isLoggedIn} userid={this.state.userid} />
            )
        }
        else if (this.props.status === 'loginComponent') {
            return (<LoginComponent updateUser={this.updateUser.bind(this)} />)
        }
        else if (this.props.status === 'watchListComponent') {
            return (<WatchListComponent userid={this.state.userid} />)
        }
        else if (this.props.status === 'performanceComponent') {
            return (<PerformanceComponent userid={this.state.userid} />)
        }
        else if (this.props.status === 'logout') {
            return (<LoginComponent updateUser={this.updateUser.bind(this)} />)
        }

    }
}
export default Placeholder