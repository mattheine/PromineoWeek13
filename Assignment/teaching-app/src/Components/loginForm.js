import React from 'react';
export default class LoginForm extends React.Component{
    render(){
       return(
     <div className='form form-control border border-success rounded'>
        <h3 className='text-primary'>Log In</h3>
        <input>UserName</input>
        <input>Password</input>
        <button className='btn btn-success'>LogIn</button>
     </div>
    )
}
}
//username input fied
//password input field
//h3 LogIn
//border