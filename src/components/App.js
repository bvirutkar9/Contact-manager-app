import React, {useState,useEffect} from 'react';
import Header from "./Header.js"
import List from "./List.js"
import Footer from "./Footer.js"
import { v4 as uuid } from 'uuid';
import AddContact from "./AddContact.js"
import ContactList from "./ContactList.js"
import ContactCard from "./ContactCard.js"

function App() {
  const LocalStoragekey="contacts";
  const [contacts, setContacts] = useState([]); //empty array of data
  //contact = name of array,setContacts=update state of list whixh is now empty
  //react hook function call to manage state
  const addContactHandler = (contact) => { //to get data from addFunction in addContact
    // console.log(contacts);
    setContacts([...contacts,{id: uuid(),...contact}]);
    // create new array (...contacts):to add old element in new array (contact):new Contact
  };

  const remodeContactHandler = (id) => {
      //function to delete the contact
      const newContactList= contacts.filter((contact)=> {
          return contact.id !==id;
      });

      setContacts(newContactList);
  };
  useEffect(() =>{
    const LocalDat = JSON.parse(localStorage.getItem(LocalStoragekey));
    // parse data in local storage
    // console.log(LocalDat);
    if(LocalDat!=0) setContacts(LocalDat);
    
    // console.log(LocalData);
  },[]);

  useEffect(() =>{
    localStorage.setItem(LocalStoragekey,JSON.stringify(contacts));
  },[contacts]);
  //here useEffect hook is responsible for fetching the data from localStorage and updating the state whenever necessary.
  return (
    <div className='Container'>
      

      
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <List/>
      <ContactList contactsProp={contacts} getContactId={remodeContactHandler}/>
      <Footer/>
    
     
    </div>
      
  );
}

export default App;
