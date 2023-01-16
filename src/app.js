import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed"
import './styles.css'

 const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
             height ="100vh"
             projectID="736abe6b-e9f0-4fd0-9172-4cb8789d21ce"
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}

             //Passing props from component ChatEngine to ChatAppProps
             renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        
        
        />
    )
}

export default App;

