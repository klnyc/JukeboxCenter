import React from 'react'
import { connect } from 'react-redux'
import {  } from '../store'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin(event) {
        event.preventDefault()
        const { email, password } = this.state
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="login">
                <input name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} required></input>
                <input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} required></input>
                <div onClick={this.handleLogin}>Login</div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    
})

export default connect(null, null)(Login)