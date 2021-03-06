import { GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES ,GET_CONTACTS_FAIL, GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE} from "../Constants/actionTypes"
import  axios  from "axios";


// get all contacts
export const getContacts = () => async(dispatch) => {
    
    dispatch({type: GET_CONTACTS_LOAD })

    try {
        const res = await axios.get('/api/contacts')
        dispatch({type: GET_CONTACTS_SUCCES, payload: res.data.listContacts})
    
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL, payload:error})
        console.log(error)
    }
}

// delete contact
export const deleteContact =(id)=>async(dispatch)=>{
    try {
       await axios.delete(`/api/contacts/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

// ADD CONTACT (post)

export const addContact =(newContact)=>async(dispatch)=>{
    try {
        await axios.post("/api/contacts/",newContact)
        dispatch(getContacts())
       
    } catch (error) {
        console.log(error)
    }
}

// Edit CONTACT (put)
 export const editContact =(id,newContact) =>async(dispatch)=>{

     try {
         await axios.put(`/api/contacts/${id}`,newContact)
            dispatch(getContacts())
     } catch (error) {
         console.log(error)
     }
 }

 // Get-One CONTACT 
 export const getContact =(id) =>async(dispatch)=>{

    try {
          const res =  await axios.get(`/api/contacts/${id}`)
           dispatch({type: GET_CONTACT, payload:res.data.contactToFind})

    } catch (error) {
        console.log(error)
    }
}

//Toggle true 
export const toggleTrue =()=>{ return { type: TOGGLE_TRUE }}
//Toggle false
export const toggleFalse =()=>{ return { type: TOGGLE_FALSE }}
