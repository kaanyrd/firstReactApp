import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './Form'
import List from './List'
    
function Contacts() {
    
    const [contact, setContacts] = useState([
        {fullname: "Kaan",
        phoneNumber: "0346954"
        },{
            fullname: "Mehmet",
            phoneNumber: "879624"
        },{
            fullname: "Veli",
            phoneNumber: "314897"
        }   
    ])

    useEffect(()=>{
        console.log(contact);
    }, [contact])
  return (
    <div>
        <List contacts={contact}/>
        <Form addContact={setContacts} contact={contact}/>
    </div>
  )
}
export default Contacts