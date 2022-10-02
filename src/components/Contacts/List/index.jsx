import React, { useState } from 'react'


function List({contacts}) {
    const [filterText, setFilterText] = useState("")

    const filter = contacts.filter((item)=>{
        return Object.keys(item).some((key) =>{
            return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        })
    })
  return (
    <div>
        
            <input id='searchBar' placeholder='Search...' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
            <h1 id='added'>Addeds</h1>

        {
            filter.map((contact, index)=> <li key={index}><strong>Name:</strong> {contact.fullname}/ <strong>Phone Number:</strong> {contact.phoneNumber}</li>)
        }
    </div>
  )
}

export default List