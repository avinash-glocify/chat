import React from 'react';
import Api from '../Api';

class ChatForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { user: {},  messages:[], auth: {} }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({messages: nextProps.messages,pusherMessage:nextProps.pusherMessage, auth: nextProps.auth, user:nextProps.user});
      if(nextProps.pusherMessage) {
        var messageData = this.state.messages.concat(nextProps.pusherMessage);
        this.setState({ messages: messageData });
      }
  }

  sendMessage = (e) => {
    const payload = {
      reciever_id: this.state.user.id,
      message: this.state.message
    };
    Api.post('messages', payload).then((res) => {
      this.setState({ message: ''})
      var messageData = this.state.messages.concat(res.data.data);
      this.setState({ messages: messageData });
    }).catch((error) => {
          console.log(error);
    });
  }

  handleTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value
    })
  }
  render() {
    const {messages, auth} = this.state;
    console.log(messages);
    return <>
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img alt="test" src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
            <span className="online_icon"></span>
          </div>
          <div className="user_info">
            <span>Chat with {this.state.user.first_name}</span>
            <p>1767 Messages</p>
          </div>
          <div className="video_cam">
            <span><i className="fa fa-video"></i></span>
            <span><i className="fa fa-phone"></i></span>
          </div>
        </div>
        <span id="action_menu_btn"><i className="fa fa-ellipsis-v"></i></span>
        <div className="action_menu">
          <ul>
            <li><i className="fa fa-user-circle"></i> View profile</li>
            <li><i className="fa fa-users"></i> Add to close friends</li>
            <li><i className="fa fa-plus"></i> Add to group</li>
            <li><i className="fa fa-ban"></i> Block</li>
          </ul>
        </div>
      </div>
      <div className="card-body msg_card_body">
      { messages.map(mess => {
        return (
          <div key={mess.id}>
          { mess.sender_id === auth.id ?
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send" style={{minWidth:'100px'}}>{mess.message}<span className="msg_time_send">{mess.message_date}</span></div>
              <div className="img_cont_msg"></div>
            </div> :
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img alt="test" src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
              </div>
              <div className="msg_cotainer"  style={{minWidth:'100px'}}>{mess.message}<span className="msg_time">{mess.message_date}</span></div>
            </div>
          }
          </div>
        );
      })}
      </div>
      <div className="card-footer">
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fa fa-paperclip"></i></span>
          </div>
          <textarea name="message" value={this.state.message} className="form-control type_msg" placeholder="Type your message..." onChange={this.handleTextChange} />
          <div className="input-group-append">
            <span className="input-group-text send_btn"><button type="button" className="btn btn-link" onClick={this.sendMessage}><i className="fa fa-location-arrow"></i></button></span>
          </div>
        </div>
      </div>
    </div>
  </>;
  };
}

export default ChatForm;
