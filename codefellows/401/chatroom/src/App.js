import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './components/chatList.js';
import ChatBox from './components/chatBoxList.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: [],
    };
  }
  componentDidMount() {
    const username = window.prompt('Username: ', 'Anonymous');
    this.setState({ username });
    const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
      cluster: 'us3',
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      this.setState({ chats: [...this.state.chats, data], test: '' });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      axios.post('http://localhost:5000/message', payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>MUGGLES FOR LIFE</h1>
        </header>
        <section>
          <ChatList chats={this.state.chats} />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
        </section>
      </div>
    );
  }
}
// const App = () => {
//   const [text, setText] = useState({
//     text: '',
//     name: '',
//     chats: []
//   });
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     text: '',
//   //     username: '',
//   //     chats: []
//   //   };
//   // }
//   const handleTextChange = (e) => {
//     e.preventDefault();
//     if (e.keyCode === 13) {
//       const payload = {
//         name: {text},
//         message: {text}
//       };
//       axios.post('http://localhost:5000/message', payload);
//     } else {
//       setText({ text: e.target.value });
//     }
//   }
//   useEffect(() => {
//     const username = window.prompt('Username: ', 'Anonymous');
//     setText({ username });
//     const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
//       cluster: 'us3',
//       encrypted: true
//     });
//     const channel = pusher.subscribe('chat');
//     channel.bind('message', data => {
//       setText({ chats: [...text.chats, data], test: '' });
//     });
//     handleTextChange();
//   }, [handleTextChange]);
//   // componentDidMount() {
//   //   const username = window.prompt('Username: ', 'Anonymous');
//   //   this.setState({ username });
//   //   const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
//   //     cluster: 'us3',
//   //     encrypted: true
//   //   });
//   //   const channel = pusher.subscribe('chat');
//   //   channel.bind('message', data => {
//   //     this.setState({ chats: [...this.state.chats, data], test: '' });
//   //   });
//   //   this.handleTextChange = this.handleTextChange.bind(this);
//   // }
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to The Magical World of Team Gonzo Diamond Elephants</h1>
//         </header>
//         <section>
//           <ChatBox
//             text={text.text}
//             name={text.name}
//             handleTextChange={handleTextChange}
//           />
//           <ChatList chats={text.chats} />
//         </section>
//       </div>
//     );
// }
export default App;
