import React from 'react';
import axios from 'axios';

const Update = () => {
    const handleUpdate = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const id = form.userId.value;
        const name = form.name.value;
        const age = form.age.value;
        const users = { name, age };

        try {
            await axios.put(`https://fsdbackend-b-5.onrender.com/users/${id}`, users);
            alert('User updated successfully');
        } catch (error) {
            alert('Error updating user: ' + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label>
                    User ID:
                    <input type="text" placeholder="User ID" name="userId" required />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" placeholder="Name" name="name" required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" placeholder="Age" name="age" required />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
