import React from 'react';
import "./ChatList.css";

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chats: []}
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ chats: nextProps.chats});
  }
  render() {
    let {chats} = this.state
    return<ul>
    {chats.map(chat => {
      return (
        <div key={chat}>
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
