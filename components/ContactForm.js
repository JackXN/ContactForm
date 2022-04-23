import React, {useState} from 'react'

function ContactForm() {
const [status, setStatus] = useState('Submit');

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending....');
    const {name,email,message} = e.target.elements;

}



    return (
        <div>
            
        </div>
    )
}

export default ContactForm
