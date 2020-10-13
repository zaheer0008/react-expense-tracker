import React from 'react';
import ReactDOM from 'react-dom';
class LoginForm extends React.Component{

	render(){
		return( 
			<form>
			<h2>Login</h2>
			<p> Enter Your Name:
			<input type="text" id="txtUserName" /></p>
			<p>Password:
			<input type="password" id="txtPassword" /></p>
			<button type="button" id="btnLogin">Login</button>
			</form>
		);
	}
}


ReactDOM.render(<LoginForm />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
