
const addContact =async(req,res)=>{
    try { 
        const {name,email,phone} = req.body  
        //mail and name are required 
        if(!name || !email) {
           res.status(400).send({Msg :'name and email are required !!'})     // return =  for 1 status 400
           return 
        }
        //email is required
        let contact = await Contact.findOne({ email })
        
            if(contact){
                res.status(400).send('Contact already exist !!')
                return    
            }
        const newContact = new Contact({
            name,
            email,
            phone
        })
        await newContact.save()
        res.status(200).send({Msg : 'Contact added successfully', newContact})
     } catch (error) {
        res.status(400).send({Msg : 'can not add contact to DB', error})
        }
  
}



const deleteContact =async(req,res)=>{
    try {
        const {_id} = req.params
        const contactToDelete = await Contact.findOneAndDelete({_id})
        if(!contactToDelete){
            res.status(400).send({Msg :'contact already is deleted !!' })
            return
        }
        res.status(200).send({Msg: 'Contact is deleted ...',contactToDelete})
        
    } catch (error) {
        res.status(400).send({Msg : 'Contact can not deleted ', error})
    }
}



const updateContact =async(req,res)=>{
    try {
       const {_id} = req.params
       const result = await Contact.updateOne({_id},{$set: {...req.body}})
       // console.log(result)
       if(!result.nModified){
           res.status(400).send({Msg :'contact  is already updated !!'} )
       }
       res.status(200).send({Msg :'contact  is updated..'} )

    } catch (error) {
       res.status(400).send({Msg : 'Contact is not updated ', error})
    }
}
module.exports = controllers ={addContact,deleteContact,updateContact}