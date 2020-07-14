import React from 'react';
import axios from 'axios';
import "./ChatList.css";

class ChatList extends React.Component {
    constructor() {
      super();
      this.state = {chats: []}
    }

    handleTextChange(e) {
      if (e.keyCode === 13) {
        const payload = {
          username: this.state.username,
          message: this.state.text
        };
        axios.post('http://localhost:5000/message', payload);
      } else {
        this.setState({ text: e.target.value });
      }
    }
  render() {
    let {chats} = this.state
    return<ul>
      {chats.map(chat => {
        return (
          <div>
            <div className="row show-grid">
              <div className="col-xs-12">

                <div className="chatMessage">
                  <div key={chat.id} className="box">
                    <p>
                      <strong>{chat.username}</strong>
                    </p>
                    <p>{chat.message}</p>
                  </div>
                  <div className="imageHolder">

                </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </ul>;
  };
}

export default ChatList;
