import React from "react";
import styles from '../App.css';

const ContactCard = (props) =>{
    const {id,name,email} = props.contacts;
    return(
        
            < div className = "items" >
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="header">
                        {email}
                    </div>
                </div>
                <button className="delete-button" onClick={()=>props.clickHandler(id)}>Delete</button>
            </div >
        
    );
};
export default ContactCard;