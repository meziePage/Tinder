import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState('');
const [messages, setMessages] = useState([
    {
        name: 'Mark',
        image: 'data:image/jpeg;base64,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',
        message: 'mezie'
    },
    {
       
        message: 'mark kway nah'
    },
]);
const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput("");
}
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCH WITH MARK ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"
              alt={message.name}
              src={message.image}
                />
                <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                       <p className="chatScreen__textUser">{message.message}</p>  
                    </div>
                )
            ))};
            <div className="chatScreen__input">
                <form>
                    <input placeholder="Type a message...."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text" className="chatScreen__inputField"/>
                    <button type="submit" 
                    onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen
