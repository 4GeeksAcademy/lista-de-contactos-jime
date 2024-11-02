import React from "react";
import { useState } from "react";

export const CreateContact = () => {
    const [newContact, setNewContact] = useState ({});
    return (
        <>
            <div className= "container">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold" placeholder="Full name" >Full Name</label>
                    <input onChange= {(evento)=> setNewContact({...newContact, name: evento.target.value})} value={newContact.name || ''} type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold" placeholder= "Enter email">Email</label>
                    <input onChange= {(evento)=> setNewContact({...newContact, email: evento.target.value})} value={newContact.email || ''} type="email" className="form-control" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold" placeholder= "Enter phone">Phone</label>
                    <input onChange= {(evento)=> setNewContact({...newContact, phone: evento.target.value})} value={newContact.phone || ''} type="text" className="form-control" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold" placeholder= "Enter address">Address</label>
                    <input onChange= {(evento)=> setNewContact({...newContact, address: evento.target.value})} value={newContact.address || ''} type="text" className="form-control" />
                </div>               
                            
                <button onClick= {() => {console.log()}} type="submit" class="btn btn-primary">Submit</button>
            </div>
        </>
    )
}