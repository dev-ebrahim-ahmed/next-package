import { useState } from "react"

export default function Form() {

    const [user, setUser] = useState({
        name: '', 
        email: '', 
        password: ''
    });
    const {name, email, password} = user; // Destructure

    


    const handleNameChange = (e)=>{
        setUser( {email, password, name: e.target.value});
    }
    const handleEmailChange = (e)=>{
        setUser({name, email: e.target.value});
    }
    const handlePasswordChange = (e)=>{
        setUser({name, email, password: e.target.value});
    }
    const handleSubmit = (e)=>{
        console.log("Form Submit");
        console.log(user);
        e.preventDefault();
    }
  return (
    <div>
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
           <div>
           <input type="text" name="name" id="name" placeholder="Name: " required value={name} onChange={handleNameChange}/>
           </div>
            <div>
            <input type="email" name="email" id="email" placeholder="Emai: " required value={email} onChange={handleEmailChange}/>
            </div>
          <div>
          <input type="password" name="password" id="password" placeholder="Password: " required value={password} onChange={handlePasswordChange}/>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>


    </div>
  )
}
