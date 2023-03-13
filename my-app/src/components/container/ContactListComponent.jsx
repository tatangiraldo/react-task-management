import { ContactModel } from "../../models/contact.model";
import ContactComponent from "../pure/contactComponent";

function ContacListComponent(props){
    const defaultContact = new ContactModel(
        'Jhonn',
        'Gira',
        'jon@doe.co',
        false
    )

    return (
        <div>
            <h1>Contact:</h1>
            <ContactComponent contact={defaultContact} />
        </div>
    )
}

export default ContacListComponent;