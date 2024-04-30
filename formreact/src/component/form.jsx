import { useState } from "react";

const form=()=>{
    const[email, setemail]=useState('')
    const[password, setpassword]=useState('')

    

    return(
        <>
        <div className="form-control">
            <label>Email</label>
            <br></br>
            <input name="email" placeholder="hello@gmail.com" type="email" onChange={(event)=>{(setemail(event.target.value))}}/>

            
        </div>
        <h1>email{email}</h1>
        </>
    )
}