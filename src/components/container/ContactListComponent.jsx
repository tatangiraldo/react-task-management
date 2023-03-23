import { useState } from "react";
import { ContactModel } from "../../models/contact.model";
import ContactComponent from "../pure/contactComponent";
import ContactForm from "../pure/forms/contactForm";
import '../../styles/contacts.scss'

function ContacListComponent(props){
    const contact = new ContactModel(
        'Jhonnatan',
        'Giraldo',
        'jon@gmail.co',
        false
    )

    function setContactStatus(contact){
        debugger;
        //encuentra el indice del contato
        const index = contacts.indexOf(contact)
        //crea un array temp de contactos
        const tempContacts = [...contacts]
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function addContact(contact){
        //crea un array temp de contactos
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    function removeContact(contact){
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    const [contacts, setContacts] = useState([contact]);

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contacts: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar={true} style={{position:'relative'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                contacts.map( (contact, index) => {
                                    return(
                                        <ContactComponent 
                                            key={index}
                                            contact={contact}
                                            remove = {removeContact}
                                            setSatus={setContactStatus}
                                        />
                                    )
                                })
                            }                            
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>
            <ContactForm
                add={addContact}
             />
        </div>
    )
}

export default ContacListComponent;