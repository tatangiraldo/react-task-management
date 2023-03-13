import PropTypes from 'prop-types';
import { ContactModel } from '../../models/contact.model';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>{ contact.name }</h2>
            <h3>{ contact.lastName }</h3>
            <h4>{ contact.email }</h4> 
            <h5> { contact.conectad ? 'Connected' : 'Disconnected' }  </h5>
        </div>
    );
};

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(ContactModel)
}

export default ContactComponent;