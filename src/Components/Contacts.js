import React, { Component } from 'react';
import Contact from './Contact';
import filter from '../dependencies/filter';

class Contacts extends Component {
    render() { 
        return (
            <div className='table_data'> 
                <div className='search_bar'>
                    <input id='search_bar_input' onKeyUp={(e) => this.props.onSearch(e)} type='text'/> 
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={(e) => this.props.onFilter(e, filter.idAsc, filter.idDesc)}>Id</th>
                            <th onClick={(e) => this.props.onFilter(e, filter.firstNameAsc, filter.firstNameDesc)}>First Name</th>
                            <th onClick={(e) => this.props.onFilter(e, filter.lastNameAsc, filter.lastNameDesc)}>Last Name</th>
                            <th onClick={(e) => this.props.onFilter(e, filter.emailAsc, filter.emailDesc)}>Email</th>
                            <th>Phone </th>
                            <th> Address </th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map(contact => {
                            return <Contact contact={contact} key={contact.phone}/>
                        })} 
                    </tbody>
                </table>
                {/* <a>Load More</a> */}
            </div>
        );
    }
}
 
export default Contacts;