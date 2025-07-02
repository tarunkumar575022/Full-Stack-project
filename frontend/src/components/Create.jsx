import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()

    console.log(name, email, age)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
    
        const addUser = { name, email, age }
        const url = "https://full-stack-project-backend-wt7j.onrender.com"
        const options = {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json",
            },
        }
    
        try {
            const response = await fetch(url, options)
            const result = await response.json()
    
            if (!response.ok) {
                setError(result.error)
            } else {
                setError("")
                setEmail("")
                setName("")
                setAge(0)
                navigate('/all') // Navigate after successful post
            }
        } catch (err) {
            setError("Something went wrong. Try again.")
        } finally {
            setLoading(false)
        }
    }


  return (
    <div>
        {error && <div className="alert alert-danger">{error}</div>}
        <h1>Enter the data</h1>
        <form onSubmit={handleSubmit}>
                <div>
                <p>Name</p>
                <input type="text" placeholder='Type your name' className='w-50 m-2 text-center' value={name} onChange={(event) => setName(event.target.value)}/>
                <p>Email</p>
                <input type="text" className='w-50 m-2 text-center' placeholder='Type your Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <p>Age</p>
                <input className='inputEl w-50 m-2 text-center' type="number" placeholder='Type your age' value={age} onChange={(event) => setAge(event.target.value)}/>
            </div>
            <button className='btn btn-primary' disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

      </form>
    </div>
  )
}

export default Create
