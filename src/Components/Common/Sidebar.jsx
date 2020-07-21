import React from 'react';

class SideBar extends React.Component {
      constructor() {
        super();
        this.state = {message: '', users:[]}
      }
      UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ users: nextProps.users});
      }
  render() {
    let {users} = this.state;
    return <div>
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <div className="input-group">
            <input type="text" placeholder="Search..." name="" className="form-control search" />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn"><i className="fa fa-search"></i></span>
            </div>
          </div>
        </div>
        <div className="card-body contacts_body">
        <div className="contacts">
        {users.map(user => {
          return (
          <li className="active" key={user.id} data-id={user.id} onClick={this.props.fetchUserChat}>
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img alt="test" src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                <span className="online_icon"></span>
              </div>
              <div className="user_info">
                <span>{user.first_name}</span>
                <p>{user.first_name} is online</p>
              </div>
            </div>
          </li>);
         })
        }
        </div>
        </div>
        <div className="card-footer"></div>
      </div>
  </div>;
  };
}

export default SideBar;
