import React,{useState,useEffect} from 'react'
import './AddEditContact.css'
import {Form} from 'react-bootstrap'
import addBtn from '../../assets/add.png'
import editBtn from '../../assets/edit.png'
import { useSelector,useDispatch } from "react-redux";
import { addContact, editContact } from '../../JS/Actions/actionsContact'


const AddEditContact = ({history}) => {

    const isEdit = useSelector(state => state.contactReducer.isEdit)
    const userToEdit = useSelector(state => state.contactReducer.user)

    const [user, setUser] = useState({name:"",email:"",phone:0})

        useEffect(() => {
                isEdit ?   setUser(userToEdit)  : setUser({name:"",email:"",phone:0})
        }, [isEdit,userToEdit])
    

    const dispatch = useDispatch()
    const handleChange=(e)=>{
            setUser({...user, [e.target.name]: e.target.value })
    }    
    return (
  
<Form className='my-form'>
        {/* input name */}
        <Form.Group className="my-little-form">
                <Form.Control type="test" placeholder="Enter contact name.." 
                onChange={handleChange}
                name="name"
                value={user.name}
                />
                <Form.Text className="text-muted"> Name is required !</Form.Text>
        </Form.Group>

        {/* input email */}
        <Form.Group className="my-little-form">
                <Form.Control type="test" placeholder="Enter your mail.." 
                onChange={handleChange}
                name='email'
                value={user.email}
                />    
                <Form.Text className="text-muted"> mail is required !</Form.Text>
        </Form.Group>

        {/* input phone */}
        <Form.Group className="my-little-form">
                <Form.Control type="number" placeholder="Enter contact phone.." 
                onChange={handleChange}
                name='phone'
                value={user.phone}
                />
                
        </Form.Group>


        {/* add or edit btn */}
        {isEdit ?
            <img src={editBtn} alt='editImg' className='edit-btn'
             onClick={()=> {dispatch(editContact(user._id ,user)) ;  history.push('/')} } />
            :
            <img src={addBtn} alt='addImg' className='add-btn'
             onClick={()=> { dispatch(addContact(user));  history.push('/') }} />
         }

 </Form>

    )
}

export default AddEditContact
