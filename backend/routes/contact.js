// require express
const express =require('express')
//routes
const router = express.Router()

// require Contact model
const Contact = require('../models/Contact')
// require controllers
const controllers =require('../controllers/contact.controllers')

/*************routes */
/**
 * @desc : test route
 * @path : 'http://localhost:7000/api/contacts/test'
 * @method : Get
 * @data : no data
 * @access: public
 */
router.get('/test', (req,res)=>{
    res.send('Hello.. Route is work !')
})



/**
 * @desc : add contact
 * @path : 'http://localhost:7000/api/contacts'    (directly path '/'  ...without /test')
 * @method : Post
 * @data : req.body
 * @access: public
 */

router.post('/' , controllers.addContact)

/**
 * @desc : get all contacts
 * @path : 'http://localhost:7000/api/contacts'  
 * @method : Get
 * @data : no data
 * @access: public
 */

router.get('/',async(req,res)=>{
    try {
       const listContacts = await Contact.find() 
       res.status(200).send({Msg : 'list of all contacts', listContacts}) 
    } catch (error) {
       res.status(400).send({Msg : 'can not get all contacts !!', error})
    }
})
/**
 * @desc : get one contact
 * @path : 'http://localhost:7000/api/contacts/:id'  
 * @method : Get
 * @data : req.params
 * @access: public
 */
 router.get('/:id',async (req,res)=>{
    try {
        const contactToFind =await Contact.findOne({_id: req.params.id})
        res.status(200).send({Msg : 'I geted the contact', contactToFind})
    } catch (error) {
        res.status(400).send({Msg : 'Can not get contact ', error})
    }
 })

/**
 * @desc : delete contact
 * @path : 'http://localhost:7000/api/contacts/:_id'  
 * @method : delete
 * @data : req.params
 * @access: public
 */
router.delete('/:_id',controllers.deleteContact )


/**
 * @desc : update contact
 * @path : 'http://localhost:7000/api/contacts/:_id'  
 * @method : Put
 * @data : req.params
 * @access: public
 */
 router.put('/:_id',controllers.updateContact)

module.exports = router