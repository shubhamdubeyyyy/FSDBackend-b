import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handledelete = async (e) => {
        
        e.preventDefault();
        const id = e.target.id.value;
        await axios.delete(`https://fsdbackend-b-1.onrender.com/users/${id}`)
        alert('User deleted Succussfully')
    }
  return (
    <div>
        <div>
            <form onSubmit={handledelete}>
                UserId<input type="text" placeholder="User ID" name="id" required/>
                <button type="submit">Delete</button>
            </form>
        </div>
      
    </div>
  )
}

export default Delete
