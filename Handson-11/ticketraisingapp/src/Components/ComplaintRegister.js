import React, { Component } from 'react';
import '../Stylesheets/mystyle.css'

class ComplaintRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            complaint: ''
        }
    }

    GenerateRandomNumber = () => {
        var RandomNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({
            NumberHolder: RandomNumber
        })
    }

    handleNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
        //this.setState({ [event.target.name]: event.target.value })
    }

    handleComplaintChange = (event) => {
        this.setState({
            complaint: event.target.value
        })
    }

    handleButtonClicked = (event) => {
        var msg = 'Thanks ' + this.state.name + ' \nYour Complaint was Submitted. \n' + 'Transaction ID is: ' + this.state.NumberHolder;
        alert(msg);
        event.preventDefault()
    }

    render() {
        return (
            <div className='comp'>
                <form onSubmit={this.handleButtonClicked}>
                    <h1>Register Your Complaints Here !!!</h1>
                    <table>
                        <tr>
                            <td className='label'>
                                <label>Name :</label>
                            </td>
                            <td >
                                <input type='text' value={this.state.name} onChange={this.handleNameChange} className='input'></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                <label>Complaint :</label>
                            </td>
                            <td>
                                <textarea value={this.state.complaint} onChange={this.handleComplaintChange} className='input' />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td className='button1'>
                                <button onClick={this.GenerateRandomNumber}>Submit</button>
                            </td>
                        </tr>
                    </table>

                </form>
            </div>


        );
    }
}

export default ComplaintRegister;