import React, { Component } from 'react';

class Contact extends Component {
    state = { 

    }
    render() { 
        const {contact} = this.props;
        const address = contact.address;
        return (  
            <tr>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{address.streetAddress}, {address.city}, {address.state}, {address.zip}</td>
                <td>{contact.description}</td>
            </tr>
        );
    }
}
 
export default Contact;