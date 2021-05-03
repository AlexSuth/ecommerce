import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            email={this.state.email}
            label='email'
            handleChange={this.handleChange}
            required
            type='email'
            value={this.state.email}
          />
          <FormInput
            label='password'
            name='password'
            handleChange={this.handleChange}
            password={this.state.password}
            required
            type='password'
            value={this.state.password}
          />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
