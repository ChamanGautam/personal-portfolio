import React, { useState } from 'react'
import './Contact.css'
import axios from "axios"
const Contact = () => {
    const [title ,setTitle] = useState("");
    const [message ,setMessage] = useState("");

    const add = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const result = await axios.post('http://localhost:5000/add', {
                title,
                message
            });

            if (result.status === 201) {
                alert("Thanks For Contacting me.....");
                // Clear the form fields after successful submission
                setTitle("");
                setMessage("");
            } else {
                alert("Failed to add data. Please try again.");
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error.response ? error.response.data : error.message);
            alert("There was an error submitting the form. Please try again.");
        }
    };
    
    return (
        <div className="main-form" id='contact'>
        <div className='form'>
            <h1>Contact Us</h1>
            <span>Title</span>
            <input type="text" placeholder='What you are writing about ?' onChange={(e) => setTitle(e.target.value)}
            value={title}/>
            <span>Message</span>
            <textarea placeholder='Full message comes here..' onChange={(e) => setMessage(e.target.value)}
            value={message}/>
            <button onClick={add}>Submit</button>
        </div>
        </div>
    )
}

export default Contact
