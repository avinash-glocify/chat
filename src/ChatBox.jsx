import React from 'react';
import './ChatBox.css';

class ChatBox extends React.Component {
      constructor() {
        super();
        this.state = {message: ''}
      }
  render() {
    return <div>
        <div className="page-content page-container" id="page-content">
           <div className="padding">
              <div className="row container d-flex justify-content-center">
                 <div className="col-md-6">
                    <div className="card card-bordered">
                       <div className="card-header">
                          <h4 className="card-title"><strong>Chat</strong></h4>
                          <a className="btn btn-xs btn-secondary" href="#" data-abc="true">Let's Chat App</a>
                       </div>
                       <div className="ps-container ps-theme-default ps-active-y" id="chat-content">
                          <div className="media media-chat">
                             <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                             <div className="media-body">
                                <p>Hi</p>
                                <p>How are you ...???</p>
                                <p>What are you doing tomorrow?<br /> Can we come up a bar?</p>
                                <p className="meta">23:58</p>
                             </div>
                          </div>
                          <div className="media media-meta-day">Today</div>
                          <div className="media media-chat media-chat-reverse">
                             <div className="media-body">
                                <p>Hiii, I'm good.</p>
                                <p>How are you doing?</p>
                                <p>Long time no see! Tomorrow office. will be free on sunday.</p>
                                <p className="meta">00:06</p>
                             </div>
                          </div>
                          <div className="ps-scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
                             <div className="ps-scrollbar-x"  style={{left:' 0px', width: '0px'}}></div>
                          </div>
                          <div className="ps-scrollbar-y-rail" style={{top: '0px', height: '0px', right: '2px'}}>
                             <div className="ps-scrollbar-y" style={{top: '0px', height: '2px'}}></div>
                          </div>
                       </div>
                       <div className="publisher bt-1 border-light">
                         <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                         <input
                          className="publisher-input"
                          type="text"
                           placeholder="Write something"
                           type="text"
                           value={this.props.text}
                           onChange={this.props.handleTextChange}
                           onKeyDown={this.props.handleTextChange}
                         /> <span className="publisher-btn file-group"> <i className="fa fa-paperclip file-browser"></i>
                         <input type="file" /> </span> <a className="publisher-btn" href="#" data-abc="true"><i className="fa fa-smile"></i></a> <a className="publisher-btn text-info" href="#" data-abc="true">
                         <i className="fa fa-paper-plane"></i></a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>



    </div>;
  };
}

export default ChatBox;
