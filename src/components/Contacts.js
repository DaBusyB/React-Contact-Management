import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Smith',
                email: 'karene@gmail.com',
                phone: '555-555-4444'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'hjson@gmail.com',
                phone: '555-555-3333'
            }
        ]
    }

  render() {
      const {contacts} = this.state
    return (
      <>
        {contacts.map(contact => (
            <Contact contact={contact} key={contact.id}/>
        ))}
      </>
    )
  }
}

export default Contacts
