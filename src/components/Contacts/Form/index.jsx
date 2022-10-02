import React, { useState } from 'react'
import { useEffect } from 'react'


const initalFormValues = {fullname:"", phoneNumber:""}

function Form({addContact, contact}) {
    const [form, setForm] = useState(initalFormValues)

    useEffect(()=>{
        setForm(initalFormValues)
    }, [contact])

    const onChangeInput =(e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    } 
    
    const onSubmit = (e) =>{
        e.preventDefault()
        if(form.fullname === "" || form.phoneNumber === ""){
            return false
        }
        addContact([...contact, form])

    }
    
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input id='nameBar' name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}/>
        </div>        

        <div>
            <input id='phoneBar' name='phoneNumber' value={form.phoneNumber} placeholder='Phone Number' onChange={onChangeInput}/>  
        </div>

        <div>
            <button id='addButton'>Add</button>
        </div>
    </form>
  )
}

export default Form