
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


const Update = () => {
   const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [age, setAge] = useState(""); 
      const [error, setError] = useState("")
      

      const {id} = useParams();
      const navigate = useNavigate();
      const getSingleUser = async () => {
        
        const response = await fetch (`https://full-stack-project-backend-wt7j.onrender.com/${id}`)
        const result = await response.json();
            if(!response.ok){
              console.log(result.error);
              setError(result.error);
            }
            if(response.ok){
              setError("");
              console.log("Updated user", result);
              setName(result.name);
              setEmail(result.email);
              setAge(result.age);

            }
      };


      const handlUpdate = async(event) => {
        event.preventDefault()
        const updatedUser = {name, email, age};
        const response = await fetch (`https://full-stack-project-backend-wt7j.onrender.com/${id}`,{
        method: "PATCH",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-type": "application/json",
        },
      });
        const result = await response.json();
            if(!response.ok){
              console.log(result.error);
              setError(result.error);
            }
            if(response.ok){
              setError("");
              navigate('/all') 
            }
      }

      useEffect (() => {
        getSingleUser();
      },[id])

  return (
    <div>
      <div className='pl-5'>
        {error && <div className="alert alert-danger">{error}</div>}
        <h1>Edit the data</h1>
        <form onSubmit={handlUpdate}>
                <div>
                <p>Name</p>
                <input type="text" placeholder='Type your name' className='w-50 m-2 text-center' value={name} onChange={(event) => setName(event.target.value)}/>
                <p>Email</p>
                <input type="text" className='w-50 m-2 text-center' placeholder='Type your Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <p>Age</p>
                <input
                      className="inputEl w-50 m-2 text-center"
                      type="number"
                      placeholder="Type your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}/>
            </div>
            <button className='btn btn-primary' >
              {"Submit"}
            </button>

      </form>
    </div>
    </div>
  )
}

export default Update
