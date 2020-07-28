import React from 'react';
import './Chats.css'
import Chat from './Chat';

function Chats(props) {
    return (
        <div className="chats">
            <Chat name="marks" message="Yo wats up" timestamp="40 second ago" profilePic="..." />
            <Chat name="push"  message="Yoghhhj" timestamp="40 second ago" profilePic="..." />
            <Chat name="kush"  message="Yo wats up" timestamp="40 second ago" profilePic="..." />
            <Chat name="Dhush"  message="Yo wats up" timestamp="40 second ago" profilePic="..." />
            
        </div>
    );
}

export default Chats;