import React from 'react';
import Api from '../Api';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        email: '',
        password: ''
      },
      Errors: []
    }
  }
  onSubmit = () => {
    Api.post('login', this.state.loginForm ).then(res => {
      if(res.status === 200) {
        localStorage.setItem('_token', res.data.token);
        window.location.href="/"
      }
    }).catch(error => {
      this.setState({
        Errors: error.response.data.errors
      })
    })

  }
  onChange = (e) => {
    const column = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [column] : value
      }
    }))
  }
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email address:</label>
                  <input type="email" className="form-control" name ="email" placeholder="Enter email" id="email" onChange={this.onChange} value={this.state.loginForm.email === null ? '' : this.state.loginForm.email}/>
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.email: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" id="pwd" onChange={this.onChange} value={this.state.loginForm.password === null ? '' : this.state.loginForm.password} />
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.password: ''}
                  </div>
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                  </label>
                </div>
                <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
};
export default User;
