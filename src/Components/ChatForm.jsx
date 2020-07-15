import React from 'react';

class ChatForm extends React.Component {
      constructor() {
        super();
        this.state = {message: ''}
      }
  render() {
    return <>
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img alt="test" src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
            <span className="online_icon"></span>
          </div>
          <div className="user_info">
            <span>Chat with Khalid</span>
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
        <div className="d-flex justify-content-start mb-4">
          <div className="img_cont_msg">
            <img alt="test" src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
          </div>
          <div className="msg_cotainer">
            Hi, how are you samim?
            <span className="msg_time">8:40 AM, Today</span>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            Hi Khalid i am good tnx how about you?
            <span className="msg_time_send">8:55 AM, Today</span>
          </div>
          <div className="img_cont_msg"></div>
        </div>
      </div>
      <div className="card-footer">
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fa fa-paperclip"></i></span>
          </div>
          <textarea name="" className="form-control type_msg" placeholder="Type your message..." />
          <div className="input-group-append">
            <span className="input-group-text send_btn"><i className="fa fa-location-arrow"></i></span>
          </div>
        </div>
      </div>
    </div>
  </>;
  };
}

export default ChatForm;
