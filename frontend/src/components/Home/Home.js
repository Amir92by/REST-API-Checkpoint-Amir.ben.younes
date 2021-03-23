import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toggleFalse } from '../../JS/Actions/actionsContact'
import './Home.css'
import { useDispatch } from "react-redux";


const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            {/* Contact List */}
            <Link to = '/'><Button className="app-btn"> Contact List</Button></Link>


            {/* Add Contact  */}
            <Link to = '/add_contact' onClick={()=>dispatch(toggleFalse())} > 
            <Button className="app-btn"> Add Contact</Button>  </Link>
        </div>
    )
}

export default Home
