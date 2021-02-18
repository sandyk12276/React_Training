import React, { Component } from 'react';
import '../stylesheets/companydetailscomponent.css'
import CompanyDetailsComponent from './companydetailscomponent'
import axios from 'axios'

class CompaniesListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyDetails: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/companies')
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
        if (this.props.isLoggedIn === 'false') {
            return (<div>
                <h1>Companies List</h1>
                <div className='c2'>
                    {
                        companyDetails.length ?
                            companyDetails.map(company => <CompanyDetailsComponent key={company.companyId} name={company.companyName} price={company.currentStockPrice} desc={company.description} />) :
                            null
                    }
                </div>
            </div>
            )
        }
        else {

            return (<div>
                <h1>Companies List</h1>
                <div className='c2'>
                    {/* For logged  in User */}

                    {
                        companyDetails.length ?
                            companyDetails.map(company => <CompanyDetailsComponent keyid={company.companyId} name={company.companyName} price={company.currentStockPrice} desc={company.description} button='btn btn-primary' buttonValue='Watch' userid={this.props.userid} />) :
                            null
                    }

                    {/* <CompanyDetailsComponent name='Wipro' price='500' button='btn btn-primary' buttonValue='Watch' />
            <CompanyDetailsComponent name='Hewlett Packard' price='800' button='btn btn-primary' buttonValue='Watch' />
            <CompanyDetailsComponent name='Cognizant' price='1000' button='btn btn-primary' buttonValue='Watch' /> */}

                </div >
            </div >
            )
        }
    }
}
export default CompaniesListComponent