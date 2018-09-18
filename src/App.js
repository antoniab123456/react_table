import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts';

class App extends Component {
    state = {
        contacts: [],
        new_array: this.contacts 

    }

    /* Filtering function that takes the Ascending and Descending functions from each element */
    filtering = (e, asc, desc) => {
        let filtered_contacts;
        if(e.target.className === 'desc_order'){
            filtered_contacts = asc(e, this.state.contacts);
        } else {
            filtered_contacts = desc(e, this.state.contacts);
        }
        this.setState({contacts: filtered_contacts})
    }


            
    searchFile(e){
        let val = e.target.value;

        console.log(this.state.new_array);
        console.log(this.state.contacts);
        let filtered_contacts = this.state.contacts.filter((el) => {
            if(JSON.stringify(el.id).indexOf(val) > -1){
                return true;
            } else{
                return false;
            }
        }).map((contact) => {
            return contact;
        });
        console.log(filtered_contacts);

        this.setState({contacts: filtered_contacts})
    }

    loadContacts = (url) => {
        console.log('sadfasdf');
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({contacts: res}))
        .catch(err =>  console.log('error'))
    }

    render() {
        return (
            <div className='main_container'>
                <div id='loadButtons'>
                    <div id="load_data_header">Load contacts</div>
                    <button id='small_data' onClick={() => {this.loadContacts(
                        'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
                    )}}>Load Little Contacts</button>
                    <button id='big_data' onClick={() => this.loadContacts(
                        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
                    )}>Load Many Contacts </button>
                </div>
              <Contacts contacts={this.state.contacts} onSearch={this.searchFile.bind(this)} onFilter={this.filtering}/>
            </div>
        );
    }
}

export default App;