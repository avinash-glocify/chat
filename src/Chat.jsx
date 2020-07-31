import React from 'react';
import './App.css';
import Pusher from 'pusher-js';
import ChatList from './ChatList.jsx';
import ChatBox from './Components/ChatBox2.jsx';
import Api from './Api';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Chat extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          text: '',
          username: '',
          chats: [],
          users: [],
          auth: {},
          channel: '',
          message: ""
        };
      }
  componentWillMount() {
    Api.get('users/auth').then((res) => {
      this.setState({ auth: res.data.data});
      this.setPusher();
    }).catch((error) => {
      console.log(error);
    });
  }
  setPusher() {
    const username = 'Avinash Negi';
    const baseUrl = 'http://gis.co/api/auth/';
    var token     = `Bearer ${localStorage.getItem('_token')}`;
    this.setState({ username });
    const pusher = new Pusher('2123bd1423888ab6296c', {
      cluster: 'ap2',
      encrypted: true ,
      authTransport: 'jsonp',
      authEndpoint: `${baseUrl}pusher`,
      headers: {
          'Authorization' : token
      }
    });
    // Pusher.logToConsole = true;
    const channel = pusher.subscribe(`private-chat-app-${this.state.auth.id}`);
    channel.bind('App\\Events\\MessageSent', data => {
      console.log(data.message);
      this.setState({ message: data.message});
      NotificationManager.success(data.message.message, `${data.user.full_name} Sent New Message`);
    });
  }

  componentDidMount() {
      this.handleTextChange = this.handleTextChange.bind(this);
  }

      handleTextChange(e) {
        if (e.keyCode === 13) {
          const payload = {
            username: this.state.username,
            message: this.state.text
          };
          Api.post('messages', payload).then((res) => {
          }).catch((error) => {
            console.log(error);
          });
        } else {
          this.setState({ text: e.target.value });
        }
      }
  render() {
    return <>
        <div className="App">
        <section className="container">
          <ChatBox
            text={this.state.text}
            auth={this.state.auth}
            message={this.state.message}
            handleTextChange={this.handleTextChange}
          />
        </section>
        </div>
        <NotificationContainer/>
  </>;
  };
}

export default Chat;
