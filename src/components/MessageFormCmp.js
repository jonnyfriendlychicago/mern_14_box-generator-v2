import React, { useState } from 'react';
    
const MessageFormCmp = (props) => {
    const [msg, setMsg] = useState("");
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // what should we do with the message?
    // };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };
    
    return (
        <>
        <h1>Set Message</h1>
        <form onSubmit={ handleSubmit }>    
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
        </>
    );
};
    
export default MessageFormCmp;
