import React, { useRef } from 'react';
import { ContactModel } from '../../../models/contact.model';

const ContactForm = ({add}) => {
    
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    
    function addContact(e){
        e.preventDefault()
        const newContact = new ContactModel(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact)
    }

    return (
        <div>
        <br></br>
        <h2>Create new contact</h2>
        <form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
        <div className='form-outline flex-fill'>
             <input className='form-control form-control-lg' ref={nameRef} id="inputName" type="text" required placeholder='Contact Name' autoFocus />
             <input className='form-control form-control-lg' ref={lastNameRef} id="inputLastName" type="text" required placeholder='Contact Last Name' />
             <input className='form-control form-control-lg' ref={emailRef} id="inputEmail" type="text" required placeholder='Contact Email' />
             <button type='submit' className='btn btn-success btn-lg ms-3'  >Add</button>
        </div>
     </form>
     </div>
    );
}

export default ContactForm;
