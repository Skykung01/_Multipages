import { useRef } from 'react';

import Form from 'react-bootstrap/Form';

import { verifyUser } from '../../data/User';

import './Login.css'
function Login( {setToken} ) {
    const userRef = useRef()
    const passRef = useRef()

    return (
        <div className="Login-container">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='username'
                style={{textAlign: 'center'}}
                ref={userRef}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='password'
                style={{textAlign: 'center'}}
                ref={passRef}
            />
            <button className='btn btn-success mt-3' onClick={() => {
                const user = userRef.current.value.trim()
                const pass = passRef.current.value.trim()
                const userInfo = verifyUser(user, pass)
                if(userInfo === null) {
                    alert('Wrong username or password')
                    userRef.current.value = ''
                    passRef.current.value = ''
                    userRef.current.focus()
                } else {
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }
            } }>Login</button>
        </div>
    );
}

export default Login
