import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pusher from 'pusher-js';
import ChatList from './ChatList.jsx';
import ChatBox from './ChatBox.jsx';
import Api from './Api';

class Chat extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          text: '',
          username: '',
          chats: []
        };
      }
  componentDidMount() {
      const username = window.prompt('Username: ', 'Anonymous');
      this.setState({ username });
      const pusher = new Pusher('2123bd1423888ab6296c', {
        cluster: 'ap2',
        encrypted: true
      });
      const channel = pusher.subscribe('chat');
      channel.bind('message', data => {
        this.setState({ chats: [...this.state.chats, data], text: '' });
      });
      this.handleTextChange = this.handleTextChange.bind(this);
  }

      handleTextChange(e) {
        if (e.keyCode === 13) {
          const payload = {
            username: this.state.username,
            message: this.state.text
          };
          Api.post('messages', payload).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
        } else {
          this.setState({ text: e.target.value });
        }
      }
  render() {
    return <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React-Pusher Chat</h1>
          </header>
        <section className="container">
          <ChatList chats={this.state.chats} />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
        </section>
        </div>
          </div>;
  };
}

export default Chat;
