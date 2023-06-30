import React from "react";
import styles from '../App.css';
class AddContact extends React.Component{

    state = {
        name: "",
        email: "",
    };
    addFunction = (e) => {
        e.preventDefault(); //to prevent page from default behaviour(in this case reloading)
        if(this.state.name ==="" || this.state.email ===""){
            alert("All the fields are Mandatory");  //if fileds are empty give alert
            return
        }
        this.props.addContactHandler(this.state); //addContactHandler as prop
        this.setState({name:"",email:""});//to clear the fields after getting data
    }
    render(){
        return (
            <>
                <div className="main">
                    <h2>Add Contact</h2>
                </div>
                <div className="formDiv">
                    <form className="form" onSubmit={this.addFunction}>
                        <div className="field">
                            <label>Name:</label><br></br>
                            <input type="text" 
                            name="name" 
                            placeholder="Name" 
                            value = {this.state.name} 
                            onChange={(e) => this.setState({name:e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Email:</label><br></br>
                            <input type="text" 
                            name="email"
                            placeholder="Email"
                            value = {this.state.email} 
                            onChange={(e) => this.setState({email:e.target.value})}/>
                        </div>
                        <div className="button">
                            <button  className="Add-button">Add</button>
                        </div>
                    </form>
                </div>
            </>

            
        );
    }
}
export default AddContact;