import React from 'react';
import '../styles/ChatBox2.css';
import SideBar from  './Common/Sidebar.jsx';
import ChatForm from  './ChatForm.jsx';
import Api from '../Api';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth:{}, user: {},pusherMessage:'', chatUser:[], activeUser: '', messages: [] }
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({ auth: nextProps.auth, pusherMessage: nextProps.message });
  }
  fetchUserChat = (e) => {
    const user = e.currentTarget.dataset.id;
    this.setState({activeUser:user})
    this.activeUser(user);
  }
  activeUser(userId) {
    const user = parseInt(userId);
    this.state.chatUser.map(use => {
      if(use.id === user) {
        this.setState({user: use, activeUser:user})
        this.fetchMessages(user);
      }
    });
  }
  fetchMessages = (user) => {
    Api.get(`messages/${user}`).then((res) => {
      this.setState({ messages : res.data.messages});
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillMount() {
    Api.get('users/list').then((res) => {
      const data = res.data.data;
      this.setState({ chatUser:  data});
      if(data.length) {
        const activeUser = data[0];
        this.setState({activeUser: activeUser.id, user : activeUser });
        this.fetchMessages(activeUser.id);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return <>
        <div className="h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-4 chat">
              <SideBar users={this.state.chatUser} fetchUserChat={this.fetchUserChat} />
            </div>
            <div className="col-md-8 col-xl-8 chat">
              <ChatForm chatUser={this.state.chatUser} pusherMessage={this.state.pusherMessage} user={this.state.user} fetchMessages={this.fetchMessages} auth={this.state.auth} messages={this.state.messages}  />
            </div>
          </div>
        </div>
  </>;
  };
}

export default ChatBox;
