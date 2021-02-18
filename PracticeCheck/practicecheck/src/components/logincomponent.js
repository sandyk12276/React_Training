import React, { Component } from 'react';
import '../stylesheets/logincomponent.css'
import axios from 'axios'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
            authenticationfail: '',
            idno: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email === '' && this.state.password === '') {
            this.setState(
                {
                    errors: {
                        email: 'Email is Required',
                        password: 'Password is Required',
                    },
                    authenticationfail: ''
                }
            )
        }
        else if (this.state.password === '') {
            this.setState(
                {
                    errors: {
                        email: '',
                        password: 'Password is Required',
                    },
                    authenticationfail: ''
                }
            )
        }
        else if (this.state.email === '') {
            this.setState(
                {
                    errors: {
                        email: 'Email is Required',
                        password: '',
                    },
                    authenticationfail: ''
                }
            )
        }
        else {
            this.setState(
                {
                    errors: {
                        email: '',
                        password: '',
                    },
                }
            )

            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const userDetails = {
                em: '',
                pass: ''
            }
            axios.post('http://localhost:8080/users', data)
                .then(response => {
                    console.log(response)
                    console.log('validated')
                    this.setState({
                        authenticationfail: "",
                        idno: response.data.id
                    }, () => { this.props.updateUser(this.state.idno) })
                    console.log(this.state.idno)

                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        authenticationfail: "Invalid username/password"
                    })
                });

        }


    }



    render() {
        return (
            <div>
                <h1>Let's get started by Login</h1>

                <form onSubmit={this.handleSubmit} className='login'>
                    <p className='loginpara'>Fields marked with * are mandatory</p>
                    <p className='loginpara'>{this.state.errors.email}</p>
                    <p className='loginpara'>{this.state.errors.password}</p>
                    <p className='loginpara'>{this.state.authenticationfail}</p>
                    <table>
                        <tr>
                            <td className='label'>
                                <label>Email Address :</label>
                            </td>
                            <td className='label'>
                                <input type='text' name="email" value={this.state.email} onChange={this.handleChange} className='input'></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                <label>Password :</label>
                            </td>
                            <td className='label'>
                                <input type='password' name="password" value={this.state.password} onChange={this.handleChange} className='input' />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td className='button1'>
                                <button className='btn btn-primary' onClick={this.hiall}>Submit</button>
                            </td>
                        </tr>
                    </table>

                </form>
            </div >
        )
    }
}

export default LoginComponent