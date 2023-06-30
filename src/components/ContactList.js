import React from "react";
import styles from '../App.css';
import ContactCard from "./ContactCard.js"

const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contactsProp.map((contacts) =>{
        return <ContactCard contacts={contacts} clickHandler={deleteContactHandler}></ContactCard>
    });
    return(
        <div className="ContactList">
            {renderContactList}
        </div>
    );
};
export default ContactList;