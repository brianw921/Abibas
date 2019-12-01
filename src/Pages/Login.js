import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../Redux/actions'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getUser(this.state)
        this.props.history.push("/")
    }

    render() {
        
        const { username, password } = this.state
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:  </label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <label>Password:  </label>
                    <input 
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input type="submit"/>
                    
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (loginData) => dispatch(getUser(loginData))
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         getUser: (loginData) => {
//             dispatch(getUser(loginData))
//         }
//     }
// }

export default connect(null, mapDispatchToProps)(Login)