import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name,
        })
            .then(res=>{
                console.log(res) 
                console.log(res.data)
                navigate("/");
            })
            .catch((err)=>{
                if(err.response.data.errors === undefined){
                    setErrors({name: {message: "Name is alredy used"}})
                }
                else{
                    console.log(err.response.data.errors.name.message);
                    setErrors(err.response.data.errors);
                }
                
            })     
    }
    
    return (
        <div>
            <Link to={"/author"}>Go to Home</Link>
            <form onSubmit={onSubmitHandler}>
                <div className="form-input">
                    <label>Name </label>
                    <input type="text" name="name" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    
                </div>
                { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
                <Link to={"/author"}>Cancel</Link>
                <button type="submit" className="form-btn">Create</button>
            </form>
        </div>
        

    )
}
export default AuthorForm;
