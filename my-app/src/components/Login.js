import React from 'react';

import './Login.css'

class Login extends React.PureComponent {

      login = () => {

      } 

    render() {
        return (
            <div>
              <input className='login-button' type='button' value='Login' onClick={this.login}/>
            </div>
        );
    }
}

export default Login;