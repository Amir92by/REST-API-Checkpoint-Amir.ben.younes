import React from 'react'
import './ContactCard.css'
import avatar from '../../assets/avatar.png'
import edit from '../../assets/edit.png'
import del from '../../assets/delete.png'

import { toggleTrue,deleteContact, getContact } from '../../JS/Actions/actionsContact'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    return (
        <div className='contact-card'>
           <img src ={avatar}  alt ="avatar" className='avatar'/> 
            <h1>{contact.name}</h1>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>



           {/* EditeBTN & DeleteBtn Card  */}
           
            <div className='delete-edit-btns'>
                <img src={del} alt ="delete" 
                onClick={()=>dispatch(deleteContact(contact._id))} />

                <Link to ='edit_contact' >
                    <img src={edit} alt ="edite" onClick={()=>{dispatch(toggleTrue()) ; dispatch(getContact(contact._id)) }} />
                </Link>

            </div>
        </div>
    )
}

export default ContactCard
