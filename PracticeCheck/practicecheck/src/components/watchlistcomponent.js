import React, { Component } from 'react';
import axios from 'axios'
import '../stylesheets/watchlistcomponent.css'
import CompanyDetailsComponent from './companydetailscomponent'

class WatchListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyDetails: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/watchList/${this.props.userid}`)
            .then(response => {
                console.log(response)
                this.setState({
                    companyDetails: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { companyDetails } = this.state
        if (companyDetails.length === 0) {
            return (<div>
                <h1>Companies List</h1>
                <div className='watchdiv'>
                    <h3 className='watchh3'>No Company stock prices added to watch list</h3>
                </div>
            </div>
            )
        }
        else {
            return (<div>
                <h1>Companies List</h1>
                <div className='watchdiv'>
                    {
                        companyDetails.length ?
                            companyDetails.map(companies => <CompanyDetailsComponent key={companies.company.companyId} name={companies.company.companyName} price={companies.company.currentStockPrice} desc={companies.company.description} button='btn btn-danger' buttonValue='Remove' />) :
                            null
                    }
                </div>
            </div>
            )
        }
    }
}
export default WatchListComponent