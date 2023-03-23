import PropTypes from 'prop-types';
import { ContactModel } from '../../models/contact.model';

const ContactComponent = ({contact, setSatus, remove}) => {

    function statusBadge(){
        switch (contact.conected) {
            case true:
                return (<i onClick={() => setSatus(contact)} className="bi bi-toggle-on task-action" style={{color: 'green'}}></i>)
            default:
                return (<i onClick={() => setSatus(contact)} className="bi bi-toggle-off task-action" style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name } </span> 
            </th>
            <th>
                <span className='ms-2'> { contact.lastName } </span> 
            </th>
            <td className='align-middle'>
                <span > { contact.email } </span>
            </td>
            <td className='align-middle'>
                <span >
                    {statusBadge()}
                </span>
            </td>
            <td className='align-middle'>
                <i onClick={() => remove(contact)} className="bi bi-trash task-action" style={{color: 'red'}}></i>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(ContactModel)
}

export default ContactComponent;