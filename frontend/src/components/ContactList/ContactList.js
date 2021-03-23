import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import './ContactList.css'
import { getContacts } from "../../JS/Actions/actionsContact";
import ContactCard from "../ContactCard/ContactCard";
import { Spinner } from "react-bootstrap";



const ContactList = () => {
    const contacts = useSelector(state => state.contactReducer.contacts)
    const isLoading = useSelector(state => state.contactReducer.isLoading)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getContacts())  
    }, [dispatch])
  

    return (
        <div className='contents-content'>

            {isLoading ? 

                <Spinner animation="border" variant="warning"  />
                :

                <div className='contacts-list'>
                        {contacts.map(contact =>
                            <ContactCard key={contact._id} contact={contact} />
                        )}
                </div>
            }


        </div>
    )
}

export default ContactList
