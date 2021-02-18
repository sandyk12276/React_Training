import React, { Component } from 'react';
import '../stylesheets/performancecomponent.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

class PerformanceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            company1: 0,
            company2: 0,
            fromDate: new Date(),
            toDate: new Date(),
            companyDetails: [],
            companyStocks: [],
            fetch: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFromDateChange = this.handleFromDateChange.bind(this);
        this.handleToDateChange = this.handleToDateChange.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:8080/companies')
            .then(response => {
                console.log(response)
                this.setState({
                    companyDetails: response.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleFromDateChange(date) {
        this.setState({
            fromDate: date
        })
    }
    handleToDateChange(date) {
        this.setState({
            toDate: date
        })
    }

    handleSubmit1(event) {
        event.preventDefault();
        const date1 = this.formatDate(this.state.fromDate);
        const date2 = this.formatDate(this.state.toDate);
        console.log(date1, "Date1");
        console.log(date2, "Date2");
        console.log(this.state.fromDate.toDateString);
        axios.get(`http://localhost:8080/stocks/compare-performance?companyCode1=${this.state.company1}&companyCode2=${this.state.company2}&from=${date1}&to=${date2}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {

                console.log(response, "Hi sandeep")
                this.setState({
                    companyStocks: response.data,
                    fetch: true
                })
            })
            .catch(error => {
                console.log(error, "error")
                alert("select companies")
            })
    }

    render() {
        const { companyDetails } = this.state;
        return (
            <div>
                <h1 className='perfhead'>Compare Potential Companies</h1>
                <h2 className='perfhead'>Make smart investment decision</h2>
                <form onSubmit={this.handleSubmit1} className='login'>
                    <table>
                        <tr>
                            <td className='perftd'>
                                <label>Select Company 1</label><br />
                                <select className="perftext" name="company1" value={this.state.company1} onChange={this.handleChange}>
                                    {/* <option value="null" selected>choose...</option>
                                    <option value="Wipro">Wipro</option>
                                    <option value="Cognizant">Cognizant</option>
                                    <option value="Hewlet Packard">Hewlet Packard</option> */}
                                    <option hidden selected>Choose ...</option>
                                    {companyDetails.map(company => {
                                        return (
                                            <option value={company.companyId}> {company.companyName} </option>
                                        )
                                    })}

                                </select>
                            </td>
                            <td className='perftd'>
                                <label>Select Company 1</label><br />
                                <select className="perftext" name="company2" value={this.state.company2} onChange={this.handleChange}>
                                    {/* <option value="null" selected>choose...</option>
                                    <option value="Wipro">Wipro</option>
                                    <option value="Cognizant">Cognizant</option>
                                    <option value="Hewlet Packard">Hewlet Packard</option> */}
                                    <option hidden selected>Choose ...</option>
                                    {companyDetails.map(company => {
                                        return (
                                            <option value={company.companyId}> {company.companyName} </option>
                                        )
                                    })}

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='perftd'>
                                <label>From Date</label><br />
                                {/* <input type='text' name="fromdate" value={this.state.email} onChange={this.handleChange} className='perftext'></input> */}
                                <DatePicker
                                    className="perftext"
                                    selected={this.state.fromDate}
                                    onChange={this.handleFromDateChange}
                                    name="fromDate"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </td>
                            <td className='perftd'>
                                <label>To Date</label><br />
                                {/* <input type='text' name="todate" value={this.state.email} onChange={this.handleChange} className='perftext'></input> */}
                                <DatePicker
                                    className="perftext"
                                    selected={this.state.toDate}
                                    onChange={this.handleToDateChange}
                                    name="toDate"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='perftd'>
                                <button className='btn btn-primary' onClick={this.GenerateRandomNumber}>Fetch Details</button>
                            </td>
                        </tr>
                    </table>
                    <table>
                        {this.state.fetch && <tr>
                            <th>Date</th>
                            <th>Company</th>
                            <th>Stock Price</th>
                        </tr>}

                        {this.state.fetch && this.state.companyStocks.map(companyStock => {
                            return (<tr>
                                <td className="perftd"> {companyStock.date} </td>
                                <td className="perftd"> {companyStock.company.companyName} </td>
                                <td className="perftd">$ {companyStock.stockPrice} </td>
                            </tr>
                            )
                        })}
                    </table>
                    {/* {this.state.fetch && 
                    <table> {this.state.companyStocks.map(companyStock => {
                        return (<tr>
                            <td> {companyStock.date} </td>
                            <td> {companyStock.company.companyName} </td>
                            <td> {companyStock.stockPrice} </td>
                        </tr>
                        )
                    })}
                    </table>} */}
                </form>
            </div>
        )
    }
}
export default PerformanceComponent