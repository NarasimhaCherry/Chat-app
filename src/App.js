import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="cf45f1d3-fe8b-45e3-ac2b-c380b6347f0d"
            userName="Carol"
            userSecret="123456"
        />
    );
}

export default App;