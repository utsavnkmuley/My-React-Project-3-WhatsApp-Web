import React from "react";
import Chatbox from "./components/chatbox";
import Box from "./components/box";
import Images from "./components/images";
import Text from "./components/text";
import Elements from "./components/elements";

function App() {
    return (
        <div style={{ border: '1px solid #F5F5F5', margin: '50px 100px 50px 100px', backgroundColor: '#F8F8F8' }}>
            {/*The Boxes on the Right*/}
            {/*Images on the Right side Boxes*/}
            <Images src="img4.jpg" position="absolute" marginTop="0.8em" marginLeft="28.2em" />
            <Images src="img4.jpg" position="absolute" marginTop="0.8em" marginLeft="1.3em" />
            {/*Elements are the Icons*/}
            <Elements src="setting.png" alt="Setting Left" marginTop="1.2em" marginLeft="25em" />
            <Elements src="setting.png" alt="Setting Right" marginTop="1.2em" marginLeft="96em" />
            <Elements src="attach.png" alt="Attachment" marginTop="1.2em" marginLeft="92.5em" transform="rotate(-45deg)" />
            <Elements src="chat.png" alt="New Chat" marginTop="1.2em" marginLeft="22em" />
            <Elements src="mic.png" alt="Voice Note" marginLeft="95.5em" marginTop="52em" />
            <Elements src="smile.png" alt="Emoji" marginTop="52em" marginLeft="28.5em" />
            <Elements src="notify.png" alt="Notification" marginLeft="1.5em" marginTop="5.7em" height="30px" />
            {/*This is the text on the right Boxes*/}
            <Text text="Sudo User" marginLeft="507px" />
            <Text text="User 21, +91 123 456 7890" marginLeft="507px" marginTop="2.6em" fontSize="15px" color="#C0C0C0" />
            {/*All Boxes on the Left with the Images and Text*/}
            <Chatbox chatboxHeight="30px" />
            <Chatbox background="#CCFFFF" user="Get Notified of New Messages" marginTopU="0em" fontSize="18px" subtitle="Turn on desktop notifications" marginTop="0.10em" />
            <Chatbox chatboxHeight="15px" />
            <Chatbox chatboxHeight="5px" background="white" position="absolute" marginTop="-2.76em" marginLeft="13px" border="1px solid #eeeeee" width="378px" borderRadius="5px" />
            <Elements src="search.png" alt="Search" marginLeft="1.5em" marginTop="-2.2em" />
            <Chatbox src="./img1.jpg" subtitle="typing" user="User 1" time="00:07" />
            <Chatbox background="white" src="./img2.jpg" subtitle="typing" user="User 2" time="00:07" />
            <Chatbox background="white" src="./img3.jpg" subtitle="typing" user="User 3" time="00:07" />
            <Chatbox background="white" src="./img4.jpg" subtitle="typing" user="User 4" time="00:07" />
            <Chatbox background="white" src="./img5.jpg" subtitle="typing" user="User 5" time="00:07" />
            <Chatbox background="white" src="./img3.jpg" subtitle="typing" user="User 6" time="00:07" />
            <Chatbox background="white" src="./img4.jpg" subtitle="typing" user="User 7" time="00:07" />
            <Chatbox background="white" src="./img5.jpg" subtitle="typing" user="User 8" time="00:07" />
        </div>
    )
};

export default App;
