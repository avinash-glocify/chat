import React from 'react';
import '../styles/ChatBox2.css';
import SideBar from  './Common/Sidebar.jsx';
import ChatForm from  './ChatForm.jsx';

class ChatBox extends React.Component {
      constructor() {
        super();
        this.state = {message: '', users: [] }
      }
      componentWillReceiveProps(nextProps) {
        this.setState({ users: nextProps.users});
      }
  render() {
    return <>
        <div className="h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-4 chat">
              <SideBar users={this.state.users} />
            </div>
            <div className="col-md-8 col-xl-8 chat">
              <ChatForm  />
            </div>
          </div>
        </div>
  </>;
  };
}

export default ChatBox;
